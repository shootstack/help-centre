/* Mintlify sidebar extras.
   - Settings title: an empty navigation group is omitted, so the Settings
     title in config/navigation/index.json would not render. Insert that
     title on the Guides sidebar until the group has pages.
   - External links: there is no config for links pinned under the nav.
     Insert them in the Almond bottom section, above the theme switch,
     and at the bottom of the mobile drawer. Every entry leaves the Help Center. */
(function () {
    const SETTINGS_TITLE = 'Settings';

    const EXTERNAL_LINKS = [{ label: 'Homepage', href: 'https://shootstack.com' }];

    function headerText(header) {
        return (header.textContent || '').trim();
    }

    function ensureSettingsTitle() {
        const headers = document.querySelectorAll('#sidebar-content .sidebar-group-header');
        let hasGalleryDelivery = false;
        let hasRealSettings = false;

        headers.forEach(function (header) {
            if (header.closest('[data-settings-title]')) return;
            const text = headerText(header);
            if (text === 'Gallery delivery') hasGalleryDelivery = true;
            if (text === SETTINGS_TITLE) hasRealSettings = true;
        });

        const placeholder = document.querySelector('[data-settings-title]');

        if (!hasGalleryDelivery || hasRealSettings) {
            placeholder?.remove();
            return;
        }

        if (placeholder) return;

        const sections = document.querySelectorAll('#sidebar-content #navigation-items .mt-6');
        const last = sections[sections.length - 1];
        if (!last) return;

        const block = document.createElement('div');
        block.className = last.className;
        block.setAttribute('data-settings-title', '');

        const header = document.createElement('div');
        header.className = 'sidebar-group-header';

        const title = document.createElement('h3');
        title.className = 'sidebar-title';

        const span = document.createElement('span');
        span.textContent = SETTINGS_TITLE;

        title.appendChild(span);
        header.appendChild(title);
        block.appendChild(header);
        last.after(block);
    }

    function createExternalLinks() {
        const footer = document.createElement('nav');
        footer.className = 'help-sidebar-footer';
        footer.setAttribute('data-sidebar-footer', '');
        footer.setAttribute('aria-label', 'External links');

        EXTERNAL_LINKS.forEach(function (link) {
            const anchor = document.createElement('a');
            anchor.href = link.href;
            anchor.target = '_blank';
            anchor.rel = 'noopener noreferrer';
            anchor.textContent = link.label;

            const hint = document.createElement('span');
            hint.className = 'sr-only';
            hint.textContent = ' (opens in a new tab)';
            anchor.appendChild(hint);

            footer.appendChild(anchor);
        });

        return footer;
    }

    function ensureExternalLinks() {
        const bottom = document.querySelector('#sidebar-content .almond-nav-bottom-section');
        if (bottom && !bottom.querySelector('[data-sidebar-footer]')) {
            const footer = createExternalLinks();
            const divider = bottom.querySelector('.almond-nav-bottom-section-divider');
            if (divider) {
                divider.after(footer);
            } else {
                bottom.prepend(footer);
            }
        }

        const mobile = document.getElementById('mobile-nav');
        if (mobile && !mobile.querySelector('[data-sidebar-footer]')) {
            mobile.appendChild(createExternalLinks());
        }
    }

    function ensureSidebar() {
        ensureSettingsTitle();
        ensureExternalLinks();
    }

    ensureSidebar();

    new MutationObserver(ensureSidebar).observe(document.body, { childList: true, subtree: true });
})();
