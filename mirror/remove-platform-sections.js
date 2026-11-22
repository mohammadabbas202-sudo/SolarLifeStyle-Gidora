(function () {
  function removePlatformSections() {
    ['#product', '#solutions', '#about', '#faq', '#get-started', '#early-access'].forEach(function (selector) {
      var section = document.querySelector(selector);
      if (section) section.remove();
    });
  }

  document.addEventListener('DOMContentLoaded', removePlatformSections, { once: true });
  setTimeout(removePlatformSections, 350);
})();
