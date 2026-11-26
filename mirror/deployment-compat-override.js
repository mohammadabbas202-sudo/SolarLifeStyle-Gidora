(function () {
  function directImageUrl(value) {
    if (!value || !value.includes('/_next/image?')) return value;
    try {
      var parsed = new URL(value, window.location.href);
      var original = parsed.searchParams.get('url');
      return original ? new URL(original, window.location.href).href : value;
    } catch (error) {
      return value;
    }
  }

  function fixImage(image) {
    var source = image.getAttribute('src');
    var direct = directImageUrl(source);
    if (direct && direct !== source) image.setAttribute('src', direct);
    if (image.hasAttribute('srcSet')) image.removeAttribute('srcSet');
    if (image.hasAttribute('srcset')) image.removeAttribute('srcset');
  }

  function fixPreload(link) {
    var source = link.getAttribute('imageSrcSet');
    if (source) link.removeAttribute('imageSrcSet');
  }

  function fixAllImages() {
    Array.from(document.images).forEach(fixImage);
    Array.from(document.querySelectorAll('link[rel="preload"][as="image"]')).forEach(fixPreload);
  }

  var observer = new MutationObserver(fixAllImages);
  observer.observe(document.documentElement, {
    subtree: true,
    childList: true,
    attributes: true,
    attributeFilter: ['src', 'srcSet', 'srcset', 'imageSrcSet']
  });

  document.addEventListener('DOMContentLoaded', fixAllImages, { once: true });
  window.addEventListener('load', fixAllImages, { once: true });
  setTimeout(fixAllImages, 100);
  setTimeout(fixAllImages, 400);
  setTimeout(function () {
    fixAllImages();
    observer.disconnect();
  }, 8000);
})();
