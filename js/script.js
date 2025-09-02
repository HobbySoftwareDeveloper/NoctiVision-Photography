// ------------------------------
// Mobile UI breakpoint checker
// ------------------------------
(function () {
    const PHONE_BREAKPOINT = 768;

    function checkPhoneUI() {
        const body = document.body;
        if (!body) return;

        if (window.innerWidth < PHONE_BREAKPOINT) {
            body.classList.add('phone-ui');
        } else {
            body.classList.remove('phone-ui');
        }
    }

    window.addEventListener('DOMContentLoaded', () => {
        checkPhoneUI();
        window.addEventListener('resize', checkPhoneUI);
    });
})();

// ------------------------------
// Mobile menu button toggle
// ------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-label');
    const overlay = document.getElementById('mobile-menu-overlay');

    if (menuButton && overlay) {
        menuButton.addEventListener('click', () => {
            const isActive = overlay.classList.toggle('active');
            menuButton.setAttribute('aria-expanded', isActive);
        });

        overlay.addEventListener('click', () => {
            overlay.classList.remove('active');
            menuButton.setAttribute('aria-expanded', false);
        });
    }
});

// ------------------------------
// (Optional) Checkbox toggle for menu-overlay (only if element exists)
// ------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menuOverlay = document.getElementById('menu-overlay');

    if (menuToggle && menuOverlay) {
        menuToggle.addEventListener('change', function () {
            menuOverlay.style.display = this.checked ? 'block' : 'none';
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const grid = document.querySelector('.grid');
    
    imagesLoaded(grid, function() {
        const msnry = new Masonry(grid, {
        itemSelector: 'a',
        columnWidth: 300,
        gutter: 12,
        fitWidth: true
        });

        grid.querySelectorAll("a img").forEach(img => {
        img.classList.add(img.naturalWidth > img.naturalHeight ? "landscape" : "portrait");
        });

        baguetteBox.run('#gallery');

        let resizeTimeout;
        window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => msnry.layout(), 200);
        });
    });
});

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        msnry.layout();
    }, 200); // wait 200ms after resizing stops
});

function setTheme(theme) {
    const link = document.getElementById("theme-style");
    if (theme === "dark") {
        link.href = "./css/dark.css";
    } else {
        link.href = "./css/style.css";
    }
    localStorage.setItem("theme", theme);
}


document.addEventListener("DOMContentLoaded", () => {
    // Apply saved theme on load
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);

    // Bind toggle button
    const btn = document.getElementById("theme-toggle");
    if (btn) {
        btn.addEventListener("click", toggleTheme);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const themeLink = document.getElementById("theme-style");
    const toggleButton = document.getElementById("theme-toggle");

    // 1. Load saved theme (if any)
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        themeLink.setAttribute("href", "./css/dark.css");
        if (toggleButton) toggleButton.textContent = "☀️";
    } else {
        themeLink.setAttribute("href", "./css/style.css");
        if (toggleButton) toggleButton.textContent = "🌙";
    }

    // 2. Handle button clicks
    if (toggleButton) {
        toggleButton.addEventListener("click", function () {
            if (themeLink.getAttribute("href").includes("dark.css")) {
                themeLink.setAttribute("href", "./css/style.css");
                localStorage.setItem("theme", "light");
                toggleButton.textContent = "🌙";
            } else {
                themeLink.setAttribute("href", "./css/dark.css");
                localStorage.setItem("theme", "dark");
                toggleButton.textContent = "☀️";
            }
        });
    }
});
