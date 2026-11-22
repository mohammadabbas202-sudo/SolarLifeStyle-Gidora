(function () {
  function updateFooter() {
    var footer = document.querySelector('footer');
    if (!footer) return;

    var platformHeading = Array.from(footer.querySelectorAll('h2')).find(function (heading) {
      return heading.textContent.trim() === 'Platform';
    });
    if (platformHeading && platformHeading.parentElement) {
      var linksGrid = platformHeading.parentElement.parentElement;
      platformHeading.parentElement.remove();
      if (linksGrid && linksGrid.classList.contains('grid')) {
        linksGrid.classList.remove('sm:grid-cols-3');
        linksGrid.classList.add('sm:grid-cols-2');
      }
    }

    Array.from(footer.querySelectorAll('p')).forEach(function (paragraph) {
      if (paragraph.textContent.trim() === 'Built for a steadier, cleaner grid.') {
        paragraph.remove();
      }
      if (paragraph.textContent.includes('AI forecasting and balancing for renewable energy portfolios')) {
        paragraph.innerHTML = 'Clear numbers. Locked-in rate. More freedom.<br><br>See your savings, fix the roof if needed, and switch — all from one simple path.';
      }
    });

    var wordmarkLetter = footer.querySelector('.wordmark-footer');
    var wordmark = wordmarkLetter && wordmarkLetter.parentElement;
    if (wordmark) {
      wordmark.style.fontSize = 'clamp(2.25rem, 10vw, 9rem)';
      wordmark.style.lineHeight = '0.9';
      wordmark.style.whiteSpace = 'nowrap';
      wordmark.style.width = '100%';
    }
  }

  document.addEventListener('DOMContentLoaded', updateFooter, { once: true });
  setTimeout(updateFooter, 350);
})();
