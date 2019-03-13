// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"C:/Users/Alejandro/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"C:/Users/Alejandro/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"C:/Users/Alejandro/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"projects/5e-quick-reference/css/icons.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\img\\arm-sling.png":[["arm-sling.6143011b.png","projects/5e-quick-reference/img/arm-sling.png"],"projects/5e-quick-reference/img/arm-sling.png"],"./..\\img\\arm-bandage.png":[["arm-bandage.bd529abd.png","projects/5e-quick-reference/img/arm-bandage.png"],"projects/5e-quick-reference/img/arm-bandage.png"],"./..\\img\\at-sea.png":[["at-sea.8d8b7a09.png","projects/5e-quick-reference/img/at-sea.png"],"projects/5e-quick-reference/img/at-sea.png"],"./..\\img\\attached-shield.png":[["attached-shield.b900dfd3.png","projects/5e-quick-reference/img/attached-shield.png"],"projects/5e-quick-reference/img/attached-shield.png"],"./..\\img\\bed.png":[["bed.42bd5d63.png","projects/5e-quick-reference/img/bed.png"],"projects/5e-quick-reference/img/bed.png"],"./..\\img\\berries-bowl.png":[["berries-bowl.02d925a0.png","projects/5e-quick-reference/img/berries-bowl.png"],"projects/5e-quick-reference/img/berries-bowl.png"],"./..\\img\\bleeding-eye.png":[["bleeding-eye.e43c8db4.png","projects/5e-quick-reference/img/bleeding-eye.png"],"projects/5e-quick-reference/img/bleeding-eye.png"],"./..\\img\\blindfold.png":[["blindfold.838acdbc.png","projects/5e-quick-reference/img/blindfold.png"],"projects/5e-quick-reference/img/blindfold.png"],"./..\\img\\body-balance.png":[["body-balance.c72db4d0.png","projects/5e-quick-reference/img/body-balance.png"],"projects/5e-quick-reference/img/body-balance.png"],"./..\\img\\bolt-spell-cast.png":[["bolt-spell-cast.aea619ef.png","projects/5e-quick-reference/img/bolt-spell-cast.png"],"projects/5e-quick-reference/img/bolt-spell-cast.png"],"./..\\img\\broken-shield.png":[["broken-shield.650bbe76.png","projects/5e-quick-reference/img/broken-shield.png"],"projects/5e-quick-reference/img/broken-shield.png"],"./..\\img\\card-pickup.png":[["card-pickup.de3868ba.png","projects/5e-quick-reference/img/card-pickup.png"],"projects/5e-quick-reference/img/card-pickup.png"],"./..\\img\\carrion.png":[["carrion.49b225e5.png","projects/5e-quick-reference/img/carrion.png"],"projects/5e-quick-reference/img/carrion.png"],"./..\\img\\cavalry.png":[["cavalry.1130b83b.png","projects/5e-quick-reference/img/cavalry.png"],"projects/5e-quick-reference/img/cavalry.png"],"./..\\img\\coma.png":[["coma.5af76431.png","projects/5e-quick-reference/img/coma.png"],"projects/5e-quick-reference/img/coma.png"],"./..\\img\\cracked-shield.png":[["cracked-shield.1e4712d2.png","projects/5e-quick-reference/img/cracked-shield.png"],"projects/5e-quick-reference/img/cracked-shield.png"],"./..\\img\\crags.png":[["crags.fb235e67.png","projects/5e-quick-reference/img/crags.png"],"projects/5e-quick-reference/img/crags.png"],"./..\\img\\crawl.png":[["crawl.53c60446.png","projects/5e-quick-reference/img/crawl.png"],"projects/5e-quick-reference/img/crawl.png"],"./..\\img\\crossed-swords.png":[["crossed-swords.997926a6.png","projects/5e-quick-reference/img/crossed-swords.png"],"projects/5e-quick-reference/img/crossed-swords.png"],"./..\\img\\cursed-star.png":[["cursed-star.09e5afc5.png","projects/5e-quick-reference/img/cursed-star.png"],"projects/5e-quick-reference/img/cursed-star.png"],"./..\\img\\deadly-strike.png":[["deadly-strike.11cdcca0.png","projects/5e-quick-reference/img/deadly-strike.png"],"projects/5e-quick-reference/img/deadly-strike.png"],"./..\\img\\despair.png":[["despair.dc32a14b.png","projects/5e-quick-reference/img/despair.png"],"projects/5e-quick-reference/img/despair.png"],"./..\\img\\dice-twenty-faces-twenty.png":[["dice-twenty-faces-twenty.86965b3a.png","projects/5e-quick-reference/img/dice-twenty-faces-twenty.png"],"projects/5e-quick-reference/img/dice-twenty-faces-twenty.png"],"./..\\img\\direction-signs.png":[["direction-signs.43a403d9.png","projects/5e-quick-reference/img/direction-signs.png"],"projects/5e-quick-reference/img/direction-signs.png"],"./..\\img\\drop-weapon.png":[["drop-weapon.5bae39d1.png","projects/5e-quick-reference/img/drop-weapon.png"],"projects/5e-quick-reference/img/drop-weapon.png"],"./..\\img\\drowning.png":[["drowning.00156077.png","projects/5e-quick-reference/img/drowning.png"],"projects/5e-quick-reference/img/drowning.png"],"./..\\img\\dodging.png":[["dodging.4d92a911.png","projects/5e-quick-reference/img/dodging.png"],"projects/5e-quick-reference/img/dodging.png"],"./..\\img\\drinking.png":[["drinking.17aee15c.png","projects/5e-quick-reference/img/drinking.png"],"projects/5e-quick-reference/img/drinking.png"],"./..\\img\\dungeon-light.png":[["dungeon-light.80edaffa.png","projects/5e-quick-reference/img/dungeon-light.png"],"projects/5e-quick-reference/img/dungeon-light.png"],"./..\\img\\eating.png":[["eating.05eefd31.png","projects/5e-quick-reference/img/eating.png"],"projects/5e-quick-reference/img/eating.png"],"./..\\img\\earwig.png":[["earwig.81ce27c2.png","projects/5e-quick-reference/img/earwig.png"],"projects/5e-quick-reference/img/earwig.png"],"./..\\img\\embrassed-energy.png":[["embrassed-energy.0fe46406.png","projects/5e-quick-reference/img/embrassed-energy.png"],"projects/5e-quick-reference/img/embrassed-energy.png"],"./..\\img\\eye-of-horus.png":[["eye-of-horus.ef81fae0.png","projects/5e-quick-reference/img/eye-of-horus.png"],"projects/5e-quick-reference/img/eye-of-horus.png"],"./..\\img\\fall-down.png":[["fall-down.5b537000.png","projects/5e-quick-reference/img/fall-down.png"],"projects/5e-quick-reference/img/fall-down.png"],"./..\\img\\falling.png":[["falling.3e6f32b3.png","projects/5e-quick-reference/img/falling.png"],"projects/5e-quick-reference/img/falling.png"],"./..\\img\\feather.png":[["feather.23404c80.png","projects/5e-quick-reference/img/feather.png"],"projects/5e-quick-reference/img/feather.png"],"./..\\img\\fleshy-mass.png":[["fleshy-mass.bb5676bf.png","projects/5e-quick-reference/img/fleshy-mass.png"],"projects/5e-quick-reference/img/fleshy-mass.png"],"./..\\img\\frozen-block.png":[["frozen-block.2a996919.png","projects/5e-quick-reference/img/frozen-block.png"],"projects/5e-quick-reference/img/frozen-block.png"],"./..\\img\\gargoyle.png":[["gargoyle.86616518.png","projects/5e-quick-reference/img/gargoyle.png"],"projects/5e-quick-reference/img/gargoyle.png"],"./..\\img\\giant.png":[["giant.2a8f299d.png","projects/5e-quick-reference/img/giant.png"],"projects/5e-quick-reference/img/giant.png"],"./..\\img\\goblin-head.png":[["goblin-head.94e79aa5.png","projects/5e-quick-reference/img/goblin-head.png"],"projects/5e-quick-reference/img/goblin-head.png"],"./..\\img\\grab.png":[["grab.2404a9ff.png","projects/5e-quick-reference/img/grab.png"],"projects/5e-quick-reference/img/grab.png"],"./..\\img\\hearing-disabled.png":[["hearing-disabled.a2a96576.png","projects/5e-quick-reference/img/hearing-disabled.png"],"projects/5e-quick-reference/img/hearing-disabled.png"],"./..\\img\\helmet-head-shot.png":[["helmet-head-shot.14bc2b82.png","projects/5e-quick-reference/img/helmet-head-shot.png"],"projects/5e-quick-reference/img/helmet-head-shot.png"],"./..\\img\\hood.png":[["hood.4cd54741.png","projects/5e-quick-reference/img/hood.png"],"projects/5e-quick-reference/img/hood.png"],"./..\\img\\ice-cube.png":[["ice-cube.d42aa066.png","projects/5e-quick-reference/img/ice-cube.png"],"projects/5e-quick-reference/img/ice-cube.png"],"./..\\img\\imprisoned.png":[["imprisoned.02566568.png","projects/5e-quick-reference/img/imprisoned.png"],"projects/5e-quick-reference/img/imprisoned.png"],"./..\\img\\internal-injury.png":[["internal-injury.f5f4d5b9.png","projects/5e-quick-reference/img/internal-injury.png"],"projects/5e-quick-reference/img/internal-injury.png"],"./..\\img\\invisible.png":[["invisible.4b99d828.png","projects/5e-quick-reference/img/invisible.png"],"projects/5e-quick-reference/img/invisible.png"],"./..\\img\\journey.png":[["journey.20b7fecb.png","projects/5e-quick-reference/img/journey.png"],"projects/5e-quick-reference/img/journey.png"],"./..\\img\\juggler.png":[["juggler.0a097d56.png","projects/5e-quick-reference/img/juggler.png"],"projects/5e-quick-reference/img/juggler.png"],"./..\\img\\jump-across.png":[["jump-across.5c8b0ad9.png","projects/5e-quick-reference/img/jump-across.png"],"projects/5e-quick-reference/img/jump-across.png"],"./..\\img\\knockout.png":[["knockout.bc7dd096.png","projects/5e-quick-reference/img/knockout.png"],"projects/5e-quick-reference/img/knockout.png"],"./..\\img\\leeching-worm.png":[["leeching-worm.a74af733.png","projects/5e-quick-reference/img/leeching-worm.png"],"projects/5e-quick-reference/img/leeching-worm.png"],"./..\\img\\magic-swirl.png":[["magic-swirl.88fed5fc.png","projects/5e-quick-reference/img/magic-swirl.png"],"projects/5e-quick-reference/img/magic-swirl.png"],"./..\\img\\magnifying-glass.png":[["magnifying-glass.fbf2491a.png","projects/5e-quick-reference/img/magnifying-glass.png"],"projects/5e-quick-reference/img/magnifying-glass.png"],"./..\\img\\meditation.png":[["meditation.fcd3f67a.png","projects/5e-quick-reference/img/meditation.png"],"projects/5e-quick-reference/img/meditation.png"],"./..\\img\\metroid.png":[["metroid.a17de317.png","projects/5e-quick-reference/img/metroid.png"],"projects/5e-quick-reference/img/metroid.png"],"./..\\img\\monkey.png":[["monkey.e5c821c6.png","projects/5e-quick-reference/img/monkey.png"],"projects/5e-quick-reference/img/monkey.png"],"./..\\img\\mounted-knight.png":[["mounted-knight.394bddee.png","projects/5e-quick-reference/img/mounted-knight.png"],"projects/5e-quick-reference/img/mounted-knight.png"],"./..\\img\\mouse.png":[["mouse.b7772cdb.png","projects/5e-quick-reference/img/mouse.png"],"projects/5e-quick-reference/img/mouse.png"],"./..\\img\\night-vision.png":[["night-vision.91195d75.png","projects/5e-quick-reference/img/night-vision.png"],"projects/5e-quick-reference/img/night-vision.png"],"./..\\img\\police-target.png":[["police-target.bc049948.png","projects/5e-quick-reference/img/police-target.png"],"projects/5e-quick-reference/img/police-target.png"],"./..\\img\\pull.png":[["pull.16cba481.png","projects/5e-quick-reference/img/pull.png"],"projects/5e-quick-reference/img/pull.png"],"./..\\img\\push.png":[["push.523ee5cb.png","projects/5e-quick-reference/img/push.png"],"projects/5e-quick-reference/img/push.png"],"./..\\img\\quicksand.png":[["quicksand.a6bfddf7.png","projects/5e-quick-reference/img/quicksand.png"],"projects/5e-quick-reference/img/quicksand.png"],"./..\\img\\raining.png":[["raining.9898e158.png","projects/5e-quick-reference/img/raining.png"],"projects/5e-quick-reference/img/raining.png"],"./..\\img\\raise-zombie.png":[["raise-zombie.a3dfd73d.png","projects/5e-quick-reference/img/raise-zombie.png"],"projects/5e-quick-reference/img/raise-zombie.png"],"./..\\img\\razorvine.png":[["razorvine.3cb63a4d.png","projects/5e-quick-reference/img/razorvine.png"],"projects/5e-quick-reference/img/razorvine.png"],"./..\\img\\run.png":[["run.56b76cea.png","projects/5e-quick-reference/img/run.png"],"projects/5e-quick-reference/img/run.png"],"./..\\img\\sands-of-time.png":[["sands-of-time.e8adb779.png","projects/5e-quick-reference/img/sands-of-time.png"],"projects/5e-quick-reference/img/sands-of-time.png"],"./..\\img\\screaming.png":[["screaming.66ad2ef5.png","projects/5e-quick-reference/img/screaming.png"],"projects/5e-quick-reference/img/screaming.png"],"./..\\img\\semi-closed-eye.png":[["semi-closed-eye.31ebeef4.png","projects/5e-quick-reference/img/semi-closed-eye.png"],"projects/5e-quick-reference/img/semi-closed-eye.png"],"./..\\img\\sharp-smile.png":[["sharp-smile.4801c298.png","projects/5e-quick-reference/img/sharp-smile.png"],"projects/5e-quick-reference/img/sharp-smile.png"],"./..\\img\\shield.png":[["shield.2f1237b3.png","projects/5e-quick-reference/img/shield.png"],"projects/5e-quick-reference/img/shield.png"],"./..\\img\\shield-bash.png":[["shield-bash.1ea88493.png","projects/5e-quick-reference/img/shield-bash.png"],"projects/5e-quick-reference/img/shield-bash.png"],"./..\\img\\sight-disabled.png":[["sight-disabled.08d07514.png","projects/5e-quick-reference/img/sight-disabled.png"],"projects/5e-quick-reference/img/sight-disabled.png"],"./..\\img\\skeleton-inside.png":[["skeleton-inside.6bec5d9c.png","projects/5e-quick-reference/img/skeleton-inside.png"],"projects/5e-quick-reference/img/skeleton-inside.png"],"./..\\img\\sleepy.png":[["sleepy.8ab6d660.png","projects/5e-quick-reference/img/sleepy.png"],"projects/5e-quick-reference/img/sleepy.png"],"./..\\img\\smitten.png":[["smitten.d98fad5c.png","projects/5e-quick-reference/img/smitten.png"],"projects/5e-quick-reference/img/smitten.png"],"./..\\img\\spider-web.png":[["spider-web.525c500c.png","projects/5e-quick-reference/img/spider-web.png"],"projects/5e-quick-reference/img/spider-web.png"],"./..\\img\\stone-pile.png":[["stone-pile.e0ee9dcc.png","projects/5e-quick-reference/img/stone-pile.png"],"projects/5e-quick-reference/img/stone-pile.png"],"./..\\img\\stopwatch.png":[["stopwatch.7cf0f071.png","projects/5e-quick-reference/img/stopwatch.png"],"projects/5e-quick-reference/img/stopwatch.png"],"./..\\img\\strong.png":[["strong.b6289567.png","projects/5e-quick-reference/img/strong.png"],"projects/5e-quick-reference/img/strong.png"],"./..\\img\\summits.png":[["summits.831aa2ed.png","projects/5e-quick-reference/img/summits.png"],"projects/5e-quick-reference/img/summits.png"],"./..\\img\\sun-cloud.png":[["sun-cloud.ec3868c5.png","projects/5e-quick-reference/img/sun-cloud.png"],"projects/5e-quick-reference/img/sun-cloud.png"],"./..\\img\\telepathy.png":[["telepathy.dd66e5bf.png","projects/5e-quick-reference/img/telepathy.png"],"projects/5e-quick-reference/img/telepathy.png"],"./..\\img\\thermometer-cold.png":[["thermometer-cold.6c23fc1d.png","projects/5e-quick-reference/img/thermometer-cold.png"],"projects/5e-quick-reference/img/thermometer-cold.png"],"./..\\img\\thermometer-hot.png":[["thermometer-hot.ffa2567c.png","projects/5e-quick-reference/img/thermometer-hot.png"],"projects/5e-quick-reference/img/thermometer-hot.png"],"./..\\img\\thin-ice.png":[["thin-ice.28007af9.png","projects/5e-quick-reference/img/thin-ice.png"],"projects/5e-quick-reference/img/thin-ice.png"],"./..\\img\\treasure-map.png":[["treasure-map.900d97da.png","projects/5e-quick-reference/img/treasure-map.png"],"projects/5e-quick-reference/img/treasure-map.png"],"./..\\img\\unstable-orb.png":[["unstable-orb.672662bd.png","projects/5e-quick-reference/img/unstable-orb.png"],"projects/5e-quick-reference/img/unstable-orb.png"],"./..\\img\\vomiting.png":[["vomiting.a6fece11.png","projects/5e-quick-reference/img/vomiting.png"],"projects/5e-quick-reference/img/vomiting.png"],"./..\\img\\walk.png":[["walk.4d666320.png","projects/5e-quick-reference/img/walk.png"],"projects/5e-quick-reference/img/walk.png"],"./..\\img\\weight-lifting-down.png":[["weight-lifting-down.5d441b7d.png","projects/5e-quick-reference/img/weight-lifting-down.png"],"projects/5e-quick-reference/img/weight-lifting-down.png"],"./..\\img\\windsock.png":[["windsock.387105c3.png","projects/5e-quick-reference/img/windsock.png"],"projects/5e-quick-reference/img/windsock.png"],"./..\\img\\wingfoot.png":[["wingfoot.4a48ea7d.png","projects/5e-quick-reference/img/wingfoot.png"],"projects/5e-quick-reference/img/wingfoot.png"],"./..\\img\\worried-eyes.png":[["worried-eyes.306c1b46.png","projects/5e-quick-reference/img/worried-eyes.png"],"projects/5e-quick-reference/img/worried-eyes.png"],"_css_loader":"C:/Users/Alejandro/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"projects/5e-quick-reference/fonts/fonts.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./Lora-700-cyrillic-ext1.woff2":[["Lora-700-cyrillic-ext1.fb93dd8c.woff2","projects/5e-quick-reference/fonts/Lora-700-cyrillic-ext1.woff2"],"projects/5e-quick-reference/fonts/Lora-700-cyrillic-ext1.woff2"],"./Lora-700-cyrillic2.woff2":[["Lora-700-cyrillic2.914b9a56.woff2","projects/5e-quick-reference/fonts/Lora-700-cyrillic2.woff2"],"projects/5e-quick-reference/fonts/Lora-700-cyrillic2.woff2"],"./Lora-700-vietnamese3.woff2":[["Lora-700-vietnamese3.96ef7dbc.woff2","projects/5e-quick-reference/fonts/Lora-700-vietnamese3.woff2"],"projects/5e-quick-reference/fonts/Lora-700-vietnamese3.woff2"],"./Lora-700-latin-ext4.woff2":[["Lora-700-latin-ext4.5ac9208d.woff2","projects/5e-quick-reference/fonts/Lora-700-latin-ext4.woff2"],"projects/5e-quick-reference/fonts/Lora-700-latin-ext4.woff2"],"./Lora-700-latin5.woff2":[["Lora-700-latin5.d6096162.woff2","projects/5e-quick-reference/fonts/Lora-700-latin5.woff2"],"projects/5e-quick-reference/fonts/Lora-700-latin5.woff2"],"./Noto_Sans-400-cyrillic-ext6.woff2":[["Noto_Sans-400-cyrillic-ext6.fdcc2eae.woff2","projects/5e-quick-reference/fonts/Noto_Sans-400-cyrillic-ext6.woff2"],"projects/5e-quick-reference/fonts/Noto_Sans-400-cyrillic-ext6.woff2"],"./Noto_Sans-400-cyrillic7.woff2":[["Noto_Sans-400-cyrillic7.66831887.woff2","projects/5e-quick-reference/fonts/Noto_Sans-400-cyrillic7.woff2"],"projects/5e-quick-reference/fonts/Noto_Sans-400-cyrillic7.woff2"],"./Noto_Sans-400-devanagari8.woff2":[["Noto_Sans-400-devanagari8.e59f03ad.woff2","projects/5e-quick-reference/fonts/Noto_Sans-400-devanagari8.woff2"],"projects/5e-quick-reference/fonts/Noto_Sans-400-devanagari8.woff2"],"./Noto_Sans-400-greek-ext9.woff2":[["Noto_Sans-400-greek-ext9.468d7868.woff2","projects/5e-quick-reference/fonts/Noto_Sans-400-greek-ext9.woff2"],"projects/5e-quick-reference/fonts/Noto_Sans-400-greek-ext9.woff2"],"./Noto_Sans-400-greek10.woff2":[["Noto_Sans-400-greek10.9b1b7d65.woff2","projects/5e-quick-reference/fonts/Noto_Sans-400-greek10.woff2"],"projects/5e-quick-reference/fonts/Noto_Sans-400-greek10.woff2"],"./Noto_Sans-400-vietnamese11.woff2":[["Noto_Sans-400-vietnamese11.7d9e6fec.woff2","projects/5e-quick-reference/fonts/Noto_Sans-400-vietnamese11.woff2"],"projects/5e-quick-reference/fonts/Noto_Sans-400-vietnamese11.woff2"],"./Noto_Sans-400-latin-ext12.woff2":[["Noto_Sans-400-latin-ext12.11bc6159.woff2","projects/5e-quick-reference/fonts/Noto_Sans-400-latin-ext12.woff2"],"projects/5e-quick-reference/fonts/Noto_Sans-400-latin-ext12.woff2"],"./Noto_Sans-400-latin13.woff2":[["Noto_Sans-400-latin13.bd4547e8.woff2","projects/5e-quick-reference/fonts/Noto_Sans-400-latin13.woff2"],"projects/5e-quick-reference/fonts/Noto_Sans-400-latin13.woff2"],"./Noto_Sans-700-cyrillic-ext14.woff2":[["Noto_Sans-700-cyrillic-ext14.8b52bba9.woff2","projects/5e-quick-reference/fonts/Noto_Sans-700-cyrillic-ext14.woff2"],"projects/5e-quick-reference/fonts/Noto_Sans-700-cyrillic-ext14.woff2"],"./Noto_Sans-700-cyrillic15.woff2":[["Noto_Sans-700-cyrillic15.4a8e1df7.woff2","projects/5e-quick-reference/fonts/Noto_Sans-700-cyrillic15.woff2"],"projects/5e-quick-reference/fonts/Noto_Sans-700-cyrillic15.woff2"],"./Noto_Sans-700-devanagari16.woff2":[["Noto_Sans-700-devanagari16.92260657.woff2","projects/5e-quick-reference/fonts/Noto_Sans-700-devanagari16.woff2"],"projects/5e-quick-reference/fonts/Noto_Sans-700-devanagari16.woff2"],"./Noto_Sans-700-greek-ext17.woff2":[["Noto_Sans-700-greek-ext17.b2ea31b0.woff2","projects/5e-quick-reference/fonts/Noto_Sans-700-greek-ext17.woff2"],"projects/5e-quick-reference/fonts/Noto_Sans-700-greek-ext17.woff2"],"./Noto_Sans-700-greek18.woff2":[["Noto_Sans-700-greek18.8cc9c383.woff2","projects/5e-quick-reference/fonts/Noto_Sans-700-greek18.woff2"],"projects/5e-quick-reference/fonts/Noto_Sans-700-greek18.woff2"],"./Noto_Sans-700-vietnamese19.woff2":[["Noto_Sans-700-vietnamese19.231d55ad.woff2","projects/5e-quick-reference/fonts/Noto_Sans-700-vietnamese19.woff2"],"projects/5e-quick-reference/fonts/Noto_Sans-700-vietnamese19.woff2"],"./Noto_Sans-700-latin-ext20.woff2":[["Noto_Sans-700-latin-ext20.c4c04cb5.woff2","projects/5e-quick-reference/fonts/Noto_Sans-700-latin-ext20.woff2"],"projects/5e-quick-reference/fonts/Noto_Sans-700-latin-ext20.woff2"],"./Noto_Sans-700-latin21.woff2":[["Noto_Sans-700-latin21.307275a0.woff2","projects/5e-quick-reference/fonts/Noto_Sans-700-latin21.woff2"],"projects/5e-quick-reference/fonts/Noto_Sans-700-latin21.woff2"],"./Noto_Sans-400-cyrillic-ext22.woff2":[["Noto_Sans-400-cyrillic-ext22.b29a66c9.woff2","projects/5e-quick-reference/fonts/Noto_Sans-400-cyrillic-ext22.woff2"],"projects/5e-quick-reference/fonts/Noto_Sans-400-cyrillic-ext22.woff2"],"./Noto_Sans-400-cyrillic23.woff2":[["Noto_Sans-400-cyrillic23.1afab018.woff2","projects/5e-quick-reference/fonts/Noto_Sans-400-cyrillic23.woff2"],"projects/5e-quick-reference/fonts/Noto_Sans-400-cyrillic23.woff2"],"./Noto_Sans-400-devanagari24.woff2":[["Noto_Sans-400-devanagari24.3f4922a3.woff2","projects/5e-quick-reference/fonts/Noto_Sans-400-devanagari24.woff2"],"projects/5e-quick-reference/fonts/Noto_Sans-400-devanagari24.woff2"],"./Noto_Sans-400-greek-ext25.woff2":[["Noto_Sans-400-greek-ext25.356bbce6.woff2","projects/5e-quick-reference/fonts/Noto_Sans-400-greek-ext25.woff2"],"projects/5e-quick-reference/fonts/Noto_Sans-400-greek-ext25.woff2"],"./Noto_Sans-400-greek26.woff2":[["Noto_Sans-400-greek26.56a69ab1.woff2","projects/5e-quick-reference/fonts/Noto_Sans-400-greek26.woff2"],"projects/5e-quick-reference/fonts/Noto_Sans-400-greek26.woff2"],"./Noto_Sans-400-vietnamese27.woff2":[["Noto_Sans-400-vietnamese27.f5a7583d.woff2","projects/5e-quick-reference/fonts/Noto_Sans-400-vietnamese27.woff2"],"projects/5e-quick-reference/fonts/Noto_Sans-400-vietnamese27.woff2"],"./Noto_Sans-400-latin-ext28.woff2":[["Noto_Sans-400-latin-ext28.bf14ca8c.woff2","projects/5e-quick-reference/fonts/Noto_Sans-400-latin-ext28.woff2"],"projects/5e-quick-reference/fonts/Noto_Sans-400-latin-ext28.woff2"],"./Noto_Sans-400-latin29.woff2":[["Noto_Sans-400-latin29.060c4827.woff2","projects/5e-quick-reference/fonts/Noto_Sans-400-latin29.woff2"],"projects/5e-quick-reference/fonts/Noto_Sans-400-latin29.woff2"],"./Noto_Sans-700-cyrillic-ext30.woff2":[["Noto_Sans-700-cyrillic-ext30.e8fe25e2.woff2","projects/5e-quick-reference/fonts/Noto_Sans-700-cyrillic-ext30.woff2"],"projects/5e-quick-reference/fonts/Noto_Sans-700-cyrillic-ext30.woff2"],"./Noto_Sans-700-cyrillic31.woff2":[["Noto_Sans-700-cyrillic31.8b24fcaf.woff2","projects/5e-quick-reference/fonts/Noto_Sans-700-cyrillic31.woff2"],"projects/5e-quick-reference/fonts/Noto_Sans-700-cyrillic31.woff2"],"./Noto_Sans-700-devanagari32.woff2":[["Noto_Sans-700-devanagari32.817a31d4.woff2","projects/5e-quick-reference/fonts/Noto_Sans-700-devanagari32.woff2"],"projects/5e-quick-reference/fonts/Noto_Sans-700-devanagari32.woff2"],"./Noto_Sans-700-greek-ext33.woff2":[["Noto_Sans-700-greek-ext33.53c0ecad.woff2","projects/5e-quick-reference/fonts/Noto_Sans-700-greek-ext33.woff2"],"projects/5e-quick-reference/fonts/Noto_Sans-700-greek-ext33.woff2"],"./Noto_Sans-700-greek34.woff2":[["Noto_Sans-700-greek34.0f1a6bf7.woff2","projects/5e-quick-reference/fonts/Noto_Sans-700-greek34.woff2"],"projects/5e-quick-reference/fonts/Noto_Sans-700-greek34.woff2"],"./Noto_Sans-700-vietnamese35.woff2":[["Noto_Sans-700-vietnamese35.cd634006.woff2","projects/5e-quick-reference/fonts/Noto_Sans-700-vietnamese35.woff2"],"projects/5e-quick-reference/fonts/Noto_Sans-700-vietnamese35.woff2"],"./Noto_Sans-700-latin-ext36.woff2":[["Noto_Sans-700-latin-ext36.b7b959e6.woff2","projects/5e-quick-reference/fonts/Noto_Sans-700-latin-ext36.woff2"],"projects/5e-quick-reference/fonts/Noto_Sans-700-latin-ext36.woff2"],"./Noto_Sans-700-latin37.woff2":[["Noto_Sans-700-latin37.52a2dd35.woff2","projects/5e-quick-reference/fonts/Noto_Sans-700-latin37.woff2"],"projects/5e-quick-reference/fonts/Noto_Sans-700-latin37.woff2"],"_css_loader":"C:/Users/Alejandro/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"projects/5e-quick-reference/css/styles.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./icons.css":"projects/5e-quick-reference/css/icons.css","../fonts/fonts.css":"projects/5e-quick-reference/fonts/fonts.css","_css_loader":"C:/Users/Alejandro/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"C:/Users/Alejandro/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55467" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}],"C:/Users/Alejandro/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}

var bundleLoaders = {};

function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};

function loadBundle(bundle) {
  var id;

  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];

  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }

      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"C:/Users/Alejandro/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],0:[function(require,module,exports) {
var b=require("C:/Users/Alejandro/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-loader.js");
},{}]},{},["C:/Users/Alejandro/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0], null)
//# sourceMappingURL=/styles.13ae45a0.js.map