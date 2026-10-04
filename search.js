(function () {
    function getSearchEntryButton() {
        const desktop = document.getElementById('search-bar-entry');
        if (desktop instanceof HTMLElement && desktop.offsetParent !== null) {
            return desktop;
        }
        const mobile = document.getElementById('search-bar-entry-mobile');
        if (mobile instanceof HTMLElement) {
            return mobile;
        }
        return desktop instanceof HTMLElement ? desktop : null;
    }

    function openSearch() {
        getSearchEntryButton()?.click();
    }

    function setNativeInputValue(input, value) {
        const desc = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value');
        if (desc && desc.set) {
            desc.set.call(input, value);
        } else {
            input.value = value;
        }
    }

    function fillSearchInput(term) {
        const maxAttempts = 40;

        function tryFill(attempt) {
            const el = document.getElementById('search-input');
            if (el instanceof HTMLInputElement) {
                setNativeInputValue(el, term);
                el.dispatchEvent(new Event('input', { bubbles: true }));
                el.focus();
                return;
            }
            if (attempt < maxAttempts) {
                window.setTimeout(function () {
                    tryFill(attempt + 1);
                }, 50);
            }
        }

        window.requestAnimationFrame(function () {
            tryFill(0);
        });
    }

    document.addEventListener('click', function (e) {
        const target = e.target;
        if (!(target instanceof Element)) {
            return;
        }

        const trigger = target.closest('[data-search-trigger]');
        if (trigger) {
            e.preventDefault();
            openSearch();
            return;
        }

        const popular = target.closest('[data-popular-search]');
        if (popular) {
            e.preventDefault();
            const term = popular.getAttribute('data-term') || '';
            openSearch();
            if (term) {
                fillSearchInput(term);
            }
        }
    });
})();
