/**
 * AL-TOOLS DASHBOARD - MULTI-BLOCK CONFIGURATION
 */

const CONFIG = {
    settings: (typeof CONFIG_SETTINGS !== 'undefined') ? CONFIG_SETTINGS : {},
    services: (typeof CONFIG_SERVICES !== 'undefined') ? CONFIG_SERVICES : [],
    bookmarks: (typeof CONFIG_BOOKMARKS !== 'undefined') ? CONFIG_BOOKMARKS : [],
    widgets: (typeof CONFIG_WIDGETS !== 'undefined') ? CONFIG_WIDGETS : []
};

// --- APP INITIALIZATION ---

function initializeApp() {
    applySettings();

    // Render blocks separately
    renderGrid(document.getElementById('services-grid'), CONFIG.services);

    // Convert bookmarks format to grid format for rendering
    const bookmarkData = CONFIG.bookmarks.map(cat => ({
        category: cat.category,
        items: cat.links.map(l => ({
            title: l.name,
            description: l.url,
            icon: l.icon || "bookmark",
            url: l.url
        }))
    }));
    renderGrid(document.getElementById('bookmarks-grid'), bookmarkData);

    // Widgets Support
    const dateTimeWidget = CONFIG.widgets.find(w => w.type === 'datetime');
    if (dateTimeWidget && dateTimeWidget.enabled) {
        setInterval(updateClock, 1000);
        updateClock();
    } else {
        const timeDisplay = document.getElementById('time-display');
        if (timeDisplay) timeDisplay.style.display = 'none';
    }

    setupSearch();
    fetchPublicIP();
}

function applySettings() {
    const s = CONFIG.settings;
    if (s.title) document.title = s.title;
    if (s.logo) {
        const logoText = document.querySelector('.logo-text');
        if (logoText) logoText.textContent = s.logo.text;

        const logoIcon = document.querySelector('.logo i') || document.querySelector('.logo svg');
        if (logoIcon && s.logo.icon) {
            const newIcon = document.createElement('i');
            newIcon.setAttribute('data-lucide', s.logo.icon);
            logoIcon.replaceWith(newIcon);
        }
    }
    if (s.search?.placeholder) {
        const searchInput = document.getElementById('search-input');
        if (searchInput) searchInput.placeholder = s.search.placeholder;
    }
}

// --- RENDERING ---

function renderGrid(container, data) {
    if (!container) return;
    container.innerHTML = '';

    if (!data || data.length === 0) {
        container.innerHTML = '<div class="loading">No data found for this section.</div>';
        return;
    }

    data.forEach(cat => {
        const categorySection = document.createElement('div');
        categorySection.className = 'category';

        const title = document.createElement('h2');
        title.className = 'category-title';
        title.textContent = cat.category;

        const cardList = document.createElement('div');
        cardList.className = 'card-list';

        if (cat.items) {
            cat.items.forEach(item => {
                const card = document.createElement('a');
                card.href = item.url;
                card.className = 'card';
                card.setAttribute('data-keywords', `${item.title} ${item.description} ${cat.category}`.toLowerCase());

                // Detect if icon is a URL or a Lucide name
                let iconHtml = '';
                if (item.icon && (item.icon.startsWith('http') || item.icon.includes('.png') || item.icon.includes('.svg') || item.icon.includes('.webp'))) {
                    iconHtml = `<img src="${item.icon}" alt="${item.title}" class="card-img-icon" onerror="this.onerror=null;this.src='https://unpkg.com/lucide-static@latest/icons/link.svg';">`;
                } else {
                    iconHtml = `<i data-lucide="${item.icon || 'link'}"></i>`;
                }

                card.innerHTML = `
                    <div class="card-icon">${iconHtml}</div>
                    <div class="card-content">
                        <span class="card-title">${item.title}</span>
                        <span class="card-description">${item.description}</span>
                    </div>
                    ${item.badge ? `<span class="badge">${item.badge}</span>` : ''}
                `;
                cardList.appendChild(card);
            });
        }

        categorySection.appendChild(title);
        categorySection.appendChild(cardList);
        container.appendChild(categorySection);
    });

    if (window.lucide) lucide.createIcons();
}

// --- SEARCH & UTILS ---

function setupSearch() {
    const searchInput = document.getElementById('search-input');
    const googleBtn = document.getElementById('google-search-btn');
    if (!searchInput || !googleBtn) return;

    function triggerGoogleSearch() {
        const term = searchInput.value.trim();
        if (term) {
            window.open(`https://www.google.com/search?q=${encodeURIComponent(term)}`, '_blank');
        }
    }

    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') triggerGoogleSearch();
    });

    googleBtn.addEventListener('click', triggerGoogleSearch);

    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.card');
        const categories = document.querySelectorAll('.category');
        const blocks = document.querySelectorAll('.dashboard-block');

        if (!term) {
            categories.forEach(cat => cat.classList.remove('hidden'));
            cards.forEach(card => card.classList.remove('hidden'));
            blocks.forEach(block => block.style.display = 'block');
            return;
        }

        categories.forEach(cat => {
            const catCards = cat.querySelectorAll('.card');
            let hasVisible = false;
            catCards.forEach(card => {
                const keywords = card.getAttribute('data-keywords');
                if (keywords.includes(term)) {
                    card.classList.remove('hidden');
                    hasVisible = true;
                } else {
                    card.classList.add('hidden');
                }
            });
            if (hasVisible) cat.classList.remove('hidden');
            else cat.classList.add('hidden');
        });

        // Hide empty blocks
        blocks.forEach(block => {
            const hasVisibleCats = block.querySelectorAll('.category:not(.hidden)').length > 0;
            block.style.display = hasVisibleCats ? 'block' : 'none';
        });
    });

    document.addEventListener('keydown', (e) => {
        const hotkey = (CONFIG.settings.search && CONFIG.settings.search.hotkey) ? CONFIG.settings.search.hotkey : '/';
        if (e.key === hotkey && document.activeElement !== searchInput) {
            e.preventDefault();
            searchInput.focus();
        }
    });
}

function updateClock() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const dateEl = document.getElementById('current-date');
    if (dateEl) dateEl.textContent = `${day}-${month}-${year}`;

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeEl = document.getElementById('current-time');
    if (timeEl) timeEl.textContent = `${hours}:${minutes}:${seconds}`;
}

async function fetchPublicIP() {
    const ipDisplay = document.getElementById('public-ip');
    if (!ipDisplay) return;

    console.log("Fetching public IP...");
    try {
        // Использование api64 позволяет получить IP даже если у пользователя только IPv6
        const response = await fetch('https://api64.ipify.org?format=json');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        console.log("IP detected:", data.ip);
        ipDisplay.textContent = data.ip;
    } catch (error) {
        console.error('Failed to fetch IP:', error);
        ipDisplay.textContent = 'IP Hidden';
    }
}

document.addEventListener('DOMContentLoaded', initializeApp);
