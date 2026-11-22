(function () {
  function updateHowItWorksCopy() {
    var heading = document.querySelector('#how-it-works-title');
    if (heading) {
      heading.innerHTML =
        '<span class="sr-only">Easy 4 steps</span>' +
        '<span aria-hidden="true">Easy 4 steps</span>';
    }

    var intro = Array.from(document.querySelectorAll('#how-it-works p')).find(function (paragraph) {
      return paragraph.textContent.includes('SolarLifeStyle works with the systems you already run');
    });
    if (intro) {
      intro.textContent = 'From first call to solar home switch-on';
    }

    var firstStep = Array.from(document.querySelectorAll('#how-it-works li')).find(function (step) {
      return step.textContent.includes('Connect your sites');
    });
    if (firstStep) {
      Array.from(firstStep.querySelectorAll('p')).forEach(function (paragraph) {
        if (paragraph.textContent.trim() === 'Week 1') paragraph.textContent = 'Step 1';
      });

      var stepTitle = Array.from(firstStep.querySelectorAll('h3')).find(function (heading) {
        return heading.textContent.trim() === 'Connect your sites';
      });
      if (stepTitle) stepTitle.textContent = 'Free solar analysis';

      var stepDescription = Array.from(firstStep.querySelectorAll('p')).find(function (paragraph) {
        return paragraph.textContent.includes('Plug in SCADA, meters, battery systems');
      });
      if (stepDescription) stepDescription.textContent = 'Share a few details and see your estimated savings.';
    }

    var secondStep = Array.from(document.querySelectorAll('#how-it-works li')).find(function (step) {
      return step.textContent.includes('Calibrate the forecasts');
    });
    if (secondStep) {
      Array.from(secondStep.querySelectorAll('p')).forEach(function (paragraph) {
        if (paragraph.textContent.trim() === 'Week 2') paragraph.textContent = 'Step 2';
      });

      var secondStepTitle = Array.from(secondStep.querySelectorAll('h3')).find(function (heading) {
        return heading.textContent.trim() === 'Calibrate the forecasts';
      });
      if (secondStepTitle) secondStepTitle.textContent = 'Roof check';

      var secondStepDescription = Array.from(secondStep.querySelectorAll('p')).find(function (paragraph) {
        return paragraph.textContent.includes('SolarLifeStyle learns from two years of your history');
      });
      if (secondStepDescription) secondStepDescription.textContent = 'Your roof is inspected and repaired first if needed';
    }

    var thirdStep = Array.from(document.querySelectorAll('#how-it-works li')).find(function (step) {
      return step.textContent.includes('Act with confidence');
    });
    if (thirdStep) {
      Array.from(thirdStep.querySelectorAll('p')).forEach(function (paragraph) {
        if (paragraph.textContent.trim() === 'Week 3') paragraph.textContent = 'Step 3';
      });

      var thirdStepTitle = Array.from(thirdStep.querySelectorAll('h3')).find(function (heading) {
        return heading.textContent.trim() === 'Act with confidence';
      });
      if (thirdStepTitle) thirdStepTitle.textContent = 'Custom design';

      var thirdStepDescription = Array.from(thirdStep.querySelectorAll('p')).find(function (paragraph) {
        return paragraph.textContent.includes('Approve dispatch plans in one click');
      });
      if (thirdStepDescription) thirdStepDescription.textContent = 'Your system is sized to your home and usage';
    }

    var protocolPanelTitle = Array.from(document.querySelectorAll('#how-it-works h3')).find(function (heading) {
      return heading.textContent.includes('Connects to what you already run');
    });
    var protocolPanel = protocolPanelTitle && protocolPanelTitle.closest('.reveal');
    if (protocolPanel) {
      protocolPanel.remove();
    }

    var finalStep = Array.from(document.querySelectorAll('#how-it-works li')).find(function (step) {
      return step.textContent.includes('Live by day 21');
    });
    if (thirdStep && finalStep && !finalStep.dataset.solarStepFourReady) {
      var stepFour = thirdStep.cloneNode(true);
      finalStep.replaceWith(stepFour);

      Array.from(stepFour.querySelectorAll('span')).forEach(function (element) {
        Array.from(element.childNodes).forEach(function (node) {
          if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() === '03') {
            node.textContent = '04';
          }
        });
      });
      Array.from(stepFour.querySelectorAll('p')).forEach(function (paragraph) {
        if (paragraph.textContent.trim() === 'Step 3') paragraph.textContent = 'Step 4';
      });

      var stepFourTitle = stepFour.querySelector('h3');
      if (stepFourTitle) stepFourTitle.textContent = 'Install and switch on';

      var stepFourDescription = Array.from(stepFour.querySelectorAll('p')).find(function (paragraph) {
        return paragraph.textContent.includes('Your system is sized to your home and usage');
      });
      if (stepFourDescription) {
        stepFourDescription.textContent = 'The system goes up, and then you start using solar power';
      }

      stepFour.dataset.solarStepFourReady = 'true';

      var circleOverlay = stepFour.querySelector('[style*="scale(0)"]');
      var card = Array.from(stepFour.children).find(function (element) {
        return element.getAttribute('style') && element.getAttribute('style').includes('transform-origin');
      });
      var stepLabel = Array.from(stepFour.children).find(function (element) {
        return element.tagName === 'P' && element.getAttribute('aria-hidden') === 'true';
      });
      if (card) {
        card.className = card.className.replace('md:col-start-1', 'md:col-start-3');
      }
      if (stepLabel) {
        stepLabel.className = stepLabel.className
          .replace('md:col-start-3', 'md:col-start-1')
          .replace('md:text-left', 'md:text-right');
      }

      function revealStepFour() {
        var rect = stepFour.getBoundingClientRect();
        var progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight * 0.72)));
        var eased = 1 - Math.pow(1 - progress, 3);

        if (card) {
          card.style.opacity = String(0.3 + eased * 0.7);
          card.style.transform =
            'translateY(' + ((1 - eased) * 72) + 'px) ' +
            'scale(' + (0.92 + eased * 0.08) + ') ' +
            'rotate(' + ((1 - eased) * 2.5) + 'deg) ' +
            'rotateX(' + ((1 - eased) * 28) + 'deg)';
        }
        if (circleOverlay) {
          var circleProgress = Math.max(0, Math.min(1, (progress - 0.35) / 0.45));
          circleOverlay.style.opacity = String(circleProgress);
          circleOverlay.style.transform = 'scale(' + circleProgress + ')';
        }
        if (stepLabel) {
          stepLabel.style.opacity = String(0.15 + eased * 0.85);
          stepLabel.style.transform = 'translateX(' + ((1 - eased) * -56) + 'px)';
        }
      }

      if (card) {
        card.style.transformOrigin = 'center top';
        card.style.opacity = '0.3';
        card.style.transform = 'translateY(72px) scale(0.92) rotate(2.5deg) rotateX(28deg)';
      }
      if (stepLabel) {
        stepLabel.style.opacity = '0.15';
        stepLabel.style.transform = 'translateX(-56px)';
      }

      window.addEventListener('scroll', revealStepFour, { passive: true });
      window.addEventListener('resize', revealStepFour);
      revealStepFour();
    }
  }

  document.addEventListener('DOMContentLoaded', updateHowItWorksCopy, { once: true });
  setTimeout(updateHowItWorksCopy, 350);
})();
