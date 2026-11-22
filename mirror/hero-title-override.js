(function () {
  function updateHeroTitle() {
    var title = document.querySelector('#hero h1');
    if (!title) return;
    var firstLine = title.querySelector(':scope > span:first-child');
    var secondLine = title.querySelector(':scope > span:nth-child(2)');
    if (!firstLine) return;
    firstLine.innerHTML = '<span class="sr-only">Make your house a solar home</span><span aria-hidden="true">Make your house a solar home</span>';
    if (secondLine) secondLine.style.display = 'none';
  }

  function removeSurplusCopy() {
    var copy = Array.from(document.querySelectorAll('#hero p')).find(function (paragraph) {
      return paragraph.textContent.includes('forecasts every sunrise across your portfolio and stores the surplus');
    });
    if (copy && copy.parentElement) {
      copy.parentElement.remove();
    }
  }

  function updateHero() {
    updateHeroTitle();
    removeSurplusCopy();
  }

  document.addEventListener('DOMContentLoaded', updateHero, { once: true });
  setTimeout(updateHero, 300);
})();
