(function () {
  function updateInsightsHeading() {
    var heading = document.querySelector('#insights-title');
    if (heading) {
      heading.innerHTML =
        '<span class="sr-only">Neighbors with solar home</span>' +
        '<span aria-hidden="true">Neighbors with solar home</span>';
    }

    var disclaimer = Array.from(document.querySelectorAll('#insights p')).find(function (paragraph) {
      return paragraph.textContent.includes("Results from each customer's first twelve months");
    });
    if (disclaimer) {
      disclaimer.textContent = 'Individual results vary based on system size, roof, energy usage and rate plan';
    }

    var metrics = Array.from(document.querySelectorAll('#insights dl')).find(function (list) {
      return list.textContent.includes('less energy curtailed') &&
        list.textContent.includes('day-ahead forecast accuracy') &&
        list.textContent.includes('faster dispatch decisions') &&
        list.textContent.includes('added market revenue');
    });
    if (metrics) {
      metrics.remove();
    }

    var testimonial = Array.from(document.querySelectorAll('#insights blockquote p')).find(function (paragraph) {
      return paragraph.textContent.includes('We used to learn about curtailment');
    });
    if (testimonial) {
      testimonial.textContent = 'We put 18 solar panels on our roof and are saving about $100 per month. We could not be happier with how everything turned out.';

      var figure = testimonial.closest('figure');
      var portrait = figure && figure.querySelector('figcaption');
      if (portrait) {
        var initials = portrait.querySelector(':scope > span:first-child');
        var details = initials && initials.nextElementSibling;
        if (initials) initials.textContent = 'DE';
        if (details) {
          details.innerHTML =
            '<span class="block text-sm font-medium text-white">Daniel Erickson</span>' +
            '<span class="block text-sm text-forest-foreground/65">California</span>';
        }
      }
    }

    var referral = Array.from(document.querySelectorAll('#insights blockquote p')).find(function (paragraph) {
      return paragraph.textContent.includes('The forecasts held up through our first winter of icing alerts');
    });
    if (referral) {
      referral.textContent = 'Boris helped me choose the right solar panels and installer for my home and office building. He also pointed out exactly what to look for in a proposal.';

      var referralFigure = referral.closest('figure');
      var referralCaption = referralFigure && referralFigure.querySelector('figcaption');
      if (referralCaption) {
        var referralInitials = referralCaption.querySelector(':scope > span:first-child');
        var referralDetails = referralInitials && referralInitials.nextElementSibling;
        if (referralInitials) referralInitials.textContent = 'CM';
        if (referralDetails) {
          referralDetails.innerHTML =
            '<span class="block text-sm font-medium text-foreground">Cvetan Mechev, DDS</span>' +
            '<span class="block text-sm text-muted-foreground">La Mesa Dental Center</span>';
        }
      }
    }

    var sharedPicture = Array.from(document.querySelectorAll('#insights blockquote p')).find(function (paragraph) {
      return paragraph.textContent.includes('Our control room and our traders finally look at the same picture of the day');
    });
    if (sharedPicture) {
      sharedPicture.textContent = 'Boris connected us to our solar company several years ago. We run our A/C in summer and charge an e-bike year-round, and we have recommended them to several neighbors.';

      var sharedFigure = sharedPicture.closest('figure');
      var sharedCaption = sharedFigure && sharedFigure.querySelector('figcaption');
      if (sharedCaption) {
        var sharedInitials = sharedCaption.querySelector(':scope > span:first-child');
        var sharedDetails = sharedInitials && sharedInitials.nextElementSibling;
        if (sharedInitials) sharedInitials.textContent = 'RB';
        if (sharedDetails) {
          sharedDetails.innerHTML =
            '<span class="block text-sm font-medium text-foreground">Richard Boult</span>' +
            '<span class="block text-sm text-muted-foreground">San Marcos, CA</span>';
        }
      }
    }
  }

  document.addEventListener('DOMContentLoaded', updateInsightsHeading, { once: true });
  setTimeout(updateInsightsHeading, 350);
})();
