/* Mintlify omits a navigation group whose pages list is empty, so the
   Settings title in config/navigation/index.json would not render. Insert
   that title on the Guides sidebar until the group has pages. */
(function () {
  var TITLE = 'Settings';

  function headerText(header) {
    return (header.textContent || '').trim();
  }

  function ensureSettingsTitle() {
    var headers = document.querySelectorAll('#sidebar-content .sidebar-group-header');
    var hasGalleryDelivery = false;
    var hasRealSettings = false;

    headers.forEach(function (header) {
      if (header.closest('[data-settings-title]')) return;
      var text = headerText(header);
      if (text === 'Gallery delivery') hasGalleryDelivery = true;
      if (text === TITLE) hasRealSettings = true;
    });

    var placeholder = document.querySelector('[data-settings-title]');

    if (!hasGalleryDelivery || hasRealSettings) {
      placeholder?.remove();
      return;
    }

    if (placeholder) return;

    var sections = document.querySelectorAll('#navigation-items .mt-6');
    var last = sections[sections.length - 1];
    if (!last) return;

    var block = document.createElement('div');
    block.className = last.className;
    block.setAttribute('data-settings-title', '');

    var header = document.createElement('div');
    header.className = 'sidebar-group-header';

    var title = document.createElement('h3');
    title.className = 'sidebar-title';

    var span = document.createElement('span');
    span.textContent = TITLE;

    title.appendChild(span);
    header.appendChild(title);
    block.appendChild(header);
    last.after(block);
  }

  ensureSettingsTitle();

  var root = document.getElementById('navigation-items') || document.body;
  new MutationObserver(ensureSettingsTitle).observe(root, { childList: true, subtree: true });
})();
