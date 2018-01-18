##### code splitting examples

* this shall illustrate how we can use lazyloading with webpack. all three apps share the same vendor.js containing preact.
  but there also could be a couple vendor files containing only portions of our frontend dependency-tree. because we don't need every dependency on every page.
* App #1 and #2 are basically the same. Both load a module containing the same application. whatever app you click first, it loads the code and renders itself into the placeholder you clicked. clicking the second app uses the module already loaded and just renders.
* appThree is somewhat different. it's an app which gets instantiated and rendered after the document load event got fired. but you don't load the whole application, because at first you don't need it. the app renders something clickable and when the user interacts with it, it loads a subcomponent which then gets rendered.
* imagine appThree beeing an image gallery. we first render the productpage with our gh.js. gh.js doesn't import any functionality or code other than an index of what module to load if an image gallery is on the current page. there is a basic layout which gets rendered by the server, including a little script tag triggering which triggers loading the gallery module.
* this module binds some eventlisteners to elements already rendered by the server, like next, previous, thumbnail, openlightbox. but this also can be some react app, attaching to some mountingpoint.
* clicking on the big image should open the lightbox. so this particular eventlistener would either lazyload the lightbox as an application or as a subcomponent into an existing application
* this technique minimizes the initially loaded javascript to an absolut minimum. it just contains an index to every piece of javascript we have and only loads it when it's needed.
* with webpack allowing to import css directly into the js component, we can bundle it with every component, like we would do with the ghpak solution
* for supporting noscript user we can collect all the css from our components and pack it into one big css file and serve it via noscript tag
