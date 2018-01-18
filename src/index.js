function component(id, caption, appImport) {
  var element = document.createElement('div');

  element.innerHTML = caption;
  element.id = id;
  element.addEventListener('click', appImport);
  return element;
}

document.body.appendChild(
  component('firstApp', 'load App #1', () => {
    import('./appRoot').then(app => app.default('firstApp'));
  })
);

document.body.appendChild(
  component('secondApp', 'load App #2', () => {
    import('./appRoot').then(app => app.default('secondApp'));
  })
);

const _gh = {};
_gh.appThree = () => {
  import('./otherAppRoot').then(app => app.default('appThree'));
};

// this then could be called everywhere on the page
// maybe when clicking on a prerendered version of the gallery to load and open the lightbox
window._gh = _gh;
