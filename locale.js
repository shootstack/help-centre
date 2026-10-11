/* Mintlify's custom home layout omits the sidebar language picker.
   Add a home-only dropdown beside the navbar logo, using the same DOM hook
   pattern as sidebar.js. Keep this separate from search click forwarding. */
(function () {
    const LANGUAGES = [
        { code: 'en', label: 'English', heading: 'Languages', href: '/' },
        { code: 'nl', label: 'Nederlands', heading: 'Talen', href: '/nl' },
        { code: 'de', label: 'Deutsch', heading: 'Sprachen', href: '/de' },
        { code: 'fr', label: 'Français', heading: 'Langues', href: '/fr' },
    ];

    function ensureLocaleSwitcher() {
        const existing = document.querySelector('[data-home-locale]');
        const logo = document.querySelector('#navbar .nav-logo')?.closest('a');
        if (!document.querySelector('.help-home') || !logo) {
            existing?.remove();
            return;
        }

        const code = window.location.pathname.split('/')[1];
        const current = LANGUAGES.find((language) => language.code === code) || LANGUAGES[0];
        if (existing?.getAttribute('data-home-locale') === current.code) return;
        existing?.remove();

        const dropdown = document.createElement('details');
        dropdown.className = 'home-locale';
        dropdown.setAttribute('data-home-locale', current.code);

        const summary = document.createElement('summary');
        summary.lang = current.code;
        summary.setAttribute('aria-label', `${current.heading}: ${current.label}`);
        summary.innerHTML = `<span class="home-locale-label">${current.label}</span><span class="home-locale-short" aria-hidden="true">${current.code.toUpperCase()}</span>`;

        const links = document.createElement('div');
        links.className = 'home-locale-options';
        links.setAttribute('role', 'navigation');
        links.setAttribute('aria-label', current.heading);
        LANGUAGES.forEach(function (language) {
            const anchor = document.createElement('a');
            anchor.href = language.href;
            anchor.lang = language.code;
            anchor.hreflang = language.code;
            anchor.textContent = language.label;
            if (language.code === current.code) anchor.setAttribute('aria-current', 'page');
            links.appendChild(anchor);
        });

        dropdown.append(summary, links);
        logo.after(dropdown);
    }

    document.addEventListener('click', function (event) {
        const dropdown = document.querySelector('[data-home-locale]');
        if (dropdown && !dropdown.contains(event.target)) dropdown.open = false;
    });

    document.addEventListener('keydown', function (event) {
        if (event.key !== 'Escape') return;
        const dropdown = document.querySelector('[data-home-locale]');
        if (dropdown?.open) {
            dropdown.open = false;
            dropdown.querySelector('summary').focus();
        }
    });

    ensureLocaleSwitcher();
    new MutationObserver(ensureLocaleSwitcher).observe(document.body, { childList: true, subtree: true });
})();
