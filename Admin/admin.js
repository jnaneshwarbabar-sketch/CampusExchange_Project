// Simple admin actions for the static dashboard.
document.querySelectorAll('table button').forEach(function (button) {
  button.addEventListener('click', function () {
    const row = button.closest('tr');
    const product = row.querySelector('td').textContent;
    alert('Viewing listing: ' + product);
  });
});

document.querySelectorAll('aside a').forEach(function (link) {
  link.addEventListener('click', function (event) {
    if (link.textContent.includes('Logout')) {
      return;
    }
    event.preventDefault();
    document.querySelectorAll('aside a').forEach(function (item) {
      item.classList.remove('active');
    });
    link.classList.add('active');
    const pageName = link.textContent.trim().replace(/[▣♙▤▦⌂ⓘ⚙↪]/g, '').trim();
    document.querySelector('main h1').textContent = pageName;
    const usersPanel = document.querySelector('#users-panel');
    const listingsPanel = document.querySelector('main > section:not(#users-panel)');
    if (usersPanel) usersPanel.hidden = pageName !== 'Users';
    if (listingsPanel) listingsPanel.hidden = pageName === 'Users';
  });
});

