/**
 * Simple Password Guard via Netlify Edge Functions
 * This is a standalone password protection for your dashboard.
 */

export default async (request, context) => {
    const url = new URL(request.url);
    const cookieName = "dashboard_auth";
    // Секретный пароль (вы можете изменить его здесь или использовать переменную окружения)
    const SECRET_PASSWORD = Netlify.env.get("DASHBOARD_PASSWORD");

    // Разрешаем доступ к стилям и скриптам, чтобы страница логина выглядела красиво
    if (
        url.pathname.endsWith(".css") ||
        url.pathname.endsWith(".js") ||
        url.pathname.endsWith(".png") ||
        url.pathname.endsWith(".svg") ||
        url.pathname.startsWith("/.netlify")
    ) {
        return context.next();
    }

    // Обработка выхода (logout)
    if (url.pathname === "/logout") {
        context.cookies.delete(cookieName);
        return new Response("Logged out", {
            status: 302,
            headers: { Location: "/" },
        });
    }

    // Обработка попытки входа
    if (request.method === "POST" && url.pathname === "/login") {
        const formData = await request.formData();
        const password = formData.get("password");

        if (password === SECRET_PASSWORD) {
            context.cookies.set({
                name: cookieName,
                value: "true",
                path: "/",
                httpOnly: true,
                secure: true,
                sameSite: "Strict",
                maxAge: 60 * 60 * 24 * 7, // 1 неделя
            });
            return new Response(null, {
                status: 302,
                headers: { Location: "/" },
            });
        } else {
            return new Response("Invalid password", { status: 401 });
        }
    }

    // Проверка сессии (куки)
    const isAuthorized = context.cookies.get(cookieName) === "true";

    if (isAuthorized) {
        return context.next();
    }

    // Если не авторизован — показываем форму входа
    return new Response(
        `
    <!DOCTYPE html>
    <html lang="ru">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Вход в Dahboard</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
        <style>
            :root {
                --bg: #0f172a;
                --card-bg: rgba(30, 41, 59, 0.7);
                --primary: #3b82f6;
                --text: #f8fafc;
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
            }
            .login-card { 
                background: var(--card-bg); 
                backdrop-filter: blur(20px); 
                padding: 2.5rem; 
                border-radius: 1.5rem; 
                border: 1px solid rgba(255,255,255,0.1); 
                width: 100%;
                max-width: 380px;
                text-align: center;
                box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            }
            h1 { font-size: 1.5rem; margin-bottom: 1.5rem; }
            input { 
                width: 100%; 
                padding: 0.75rem 1rem; 
                margin-bottom: 1rem; 
                border-radius: 0.5rem; 
                border: 1px solid rgba(255,255,255,0.1);
                background: rgba(0,0,0,0.2);
                color: white;
                box-sizing: border-box;
                font-size: 1rem;
            }
            button { 
                width: 100%; 
                padding: 0.75rem; 
                background: var(--primary); 
                color: white; 
                border: none; 
                border-radius: 0.5rem; 
                font-weight: 600; 
                cursor: pointer;
                font-size: 1rem;
            }
            button:hover { background: #2563eb; }
        </style>
    </head>
    <body>
        <div class="login-card">
            <h1>Private Access</h1>
            <form action="/login" method="POST">
                <input type="password" name="password" placeholder="Введите пароль..." autofocus required>
                <button type="submit">Войти</button>
            </form>
        </div>
    </body>
    </html>
    `,
        {
            status: 401,
            headers: { "content-type": "text/html" },
        }
    );
};

export const config = {
    path: "/*"
};

