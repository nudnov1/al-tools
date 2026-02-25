/**
 * Netlify Edge Function: Auth by Role
 * This function intercepts all requests and checks for the 'admin' role.
 * It uses Netlify Identity by default but can be extended.
 */

export default async (request, context) => {
  const { user } = context;
  const url = new URL(request.url);

  // Allow access to netlify identity paths (login, etc) and static assets if not excluded in config
  if (url.pathname.startsWith("/.netlify") || 
      url.pathname.endsWith(".css") || 
      url.pathname.endsWith(".js") || 
      url.pathname.endsWith(".png") || 
      url.pathname.endsWith(".svg") || 
      url.pathname === "/favicon.ico") {
    return context.next();
  }

  // Check for Netlify Identity role
  const roles = user?.app_metadata?.roles || [];
  const isAdmin = roles.includes("admin");

  // Optional: Check for a simple session cookie for demo/dev purposes
  // You can set this cookie manually in your browser console: document.cookie = "nf_role=admin; path=/"
  const cookieRole = context.cookies.get("nf_role");
  
  if (isAdmin || cookieRole === "admin") {
    // Proceed to the dashboard
    return context.next();
  }

  // Otherwise, return a beautiful access denied page
  return new Response(
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Access Denied - LiveDNS Dashboard</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
        <style>
            :root {
                --bg: #0f172a;
                --card-bg: rgba(30, 41, 59, 0.7);
                --danger: #f43f5e;
                --text: #f8fafc;
                --text-dim: #94a3b8;
                --primary: #3b82f6;
            }
            body { 
                font-family: 'Inter', sans-serif; 
                background: var(--bg); 
                color: var(--text); 
                display: flex; 
                align-items: center; 
                justify-content: center; 
                height: 100vh; 
                margin: 0; 
                overflow: hidden;
            }
            .card { 
                background: var(--card-bg); 
                backdrop-filter: blur(20px); 
                padding: 3rem; 
                border-radius: 1.5rem; 
                border: 1px solid rgba(255,255,255,0.1); 
                text-align: center; 
                max-width: 450px; 
                box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1);
            }
            @keyframes slideUp {
                from { transform: translateY(20px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            .icon-wrapper {
                width: 64px;
                height: 64px;
                background: rgba(244, 63, 94, 0.1);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 1.5rem;
                color: var(--danger);
            }
            h1 { font-size: 1.875rem; font-weight: 600; margin: 0 0 1rem; color: var(--text); }
            p { color: var(--text-dim); line-height: 1.6; margin-bottom: 2rem; font-size: 1.1rem; }
            .btn { 
                display: block; 
                width: 100%;
                padding: 1rem; 
                background: var(--primary); 
                color: white; 
                text-decoration: none; 
                border-radius: 0.75rem; 
                font-weight: 600; 
                transition: all 0.2s;
                border: none;
                cursor: pointer;
                font-size: 1rem;
            }
            .btn:hover { background: #2563eb; transform: translateY(-1px); box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
            .info { margin-top: 2rem; font-size: 0.875rem; color: #475569; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 1.5rem; }
        </style>
    </head>
    <body>
        <div class="card">
            <div class="icon-wrapper">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
            </div>
            <h1>Protected Dashboard</h1>
            <p>Access to these resources is restricted to users with the <strong>admin</strong> role.</p>
            <a href="/.netlify/identity/login" class="btn">Login with Identity</a>
            <div class="info">
                LiveDNS Infrastructure Security Policy
            </div>
        </div>
    </body>
    </html>
    `,
    {
      status: 403,
      headers: { "content-type": "text/html" },
    }
  );
};

export const config = {
  path: "/*"
};
