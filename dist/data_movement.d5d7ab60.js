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
})({"projects/5e-quick-reference/js/data/data_movement.js":[function(require,module,exports) {
data_movement = [{
  title: "Move",
  icon: "walk",
  subtitle: "Cost: 5ft per 5ft",
  description: "Movement cost: 5ft per 5ft moved",
  reference: "PHB, pg. 190.",
  bullets: ["If you have more than one speed, such as your walking speed and a flying speed, you can switch back and forth between your speeds during your move. Whenever you switch, subtract the distance you've already moved from the new speed.", "You can move through a nonhostile creature's space.", "You can move through a hostile creature's space only if the creature is at least two sizes larger or smaller than you.", "Another creature's space is difficult terrain for you.", "Whether a creature is a friend or an enemy, you can't willingly end your move in its space."]
}, {
  title: "Climb",
  icon: "crags",
  subtitle: "Cost: 10ft per 5ft",
  description: "Movement cost: 10ft per 5ft climbed",
  reference: "PHB, pg. 182.",
  bullets: ["May involve a Strength (Athletics) check if the climb is difficult."]
}, {
  title: "Swim",
  icon: "at-sea",
  subtitle: "Cost: 10ft per 5ft",
  description: "Movement cost: 10ft per 5ft swum",
  reference: "PHB, pg. 182.",
  bullets: ["May involve a Strength (Athletics) check if the swim is difficult."]
}, {
  title: "Drop prone",
  icon: "falling",
  subtitle: "Cost: 0ft",
  description: "Movement cost: 0ft (free)",
  reference: "PHB, pgs. 190-191, 292.",
  bullets: ["You can drop prone without using any of your speed.", "To move while prone, you must <a href='crawl'>crawl</a> or use magic such as teleportation.", "Dropping prone adds the <a href='prone'>prone</a> condition (melee attacks against you have advantage, ranged attacks against you have disadvantage, your own attacks have disadvantage)."]
}, {
  title: "Crawl",
  icon: "crawl",
  subtitle: "Cost: 10ft per 5ft",
  description: "Movement cost: 10ft per 5ft crawled",
  reference: "PHB, pg. 182.",
  bullets: []
}, {
  title: "Stand up",
  icon: "strong",
  subtitle: "Cost: half movement speed",
  description: "Movement cost: half of your speed",
  reference: "PHB, pg. 190-191.",
  bullets: ["You can't stand up if you don't have enough movement left or if your speed is 0."]
}, {
  title: "High jump",
  icon: "wingfoot",
  subtitle: "Cost: 5ft per 5ft",
  description: "Movement cost: 5ft per 5ft jumped",
  reference: "PHB, pg. 182.",
  bullets: ["You leap into the air a number of feet equal to <b>3 + your Strength modifier</b> if you move at least 10 feet on foot immediately before the jump.", "When you make a standing high jump, you can jump only half that distance.", "You can extend your arms half your height above yourself during the jump.", "In some circumstances, your DM might allow you to make a Strength (Athletics) check to jump higher than you normally can."]
}, {
  title: "Long jump",
  icon: "jump-across",
  subtitle: "Cost: 5ft per 5ft",
  description: "Movement cost: 5ft per 5ft jumped",
  reference: "PHB, pg. 182.",
  bullets: ["You cover a number of feet up to your <b>Strength score</b> if you move at least 10 feet on foot immediately before the jump.", "When you make a standing long jump, you can leap only half that distance", "May involve a DC 10 Strength (Athletics) check to clear a low obstacle (no taller than a quarter of the jump's distance). You hit the obstacle on a failed check.", "May involve a DC 10 Dexterity (Acrobatics) check to land on your feet in difficult terrain. You land <a href='prone'>prone</a> on a failed check."]
}, {
  title: "Improvise",
  icon: "juggler",
  subtitle: "Any stunt not on this list",
  description: "Perform any movement or stunt you can imagine",
  bullets: ["When you describe a kind of movement not detailed elsewhere in the rules, the DM tells you whether it is possible and what kind of roll you need to make, if any, to determine success or failure."]
}, {
  title: "Difficult terrain",
  icon: "stone-pile",
  subtitle: "Cost modifier: +5ft per 5ft",
  reference: "PHB, pg. 182.",
  description: "Moving in difficult terrain costs an additional 5ft per 5ft of movement",
  bullets: []
}, {
  title: "Grapple move",
  icon: "grab",
  subtitle: "Modifier: speed halved",
  description: "Drag or carry the grappled creature with you",
  reference: "PHB, pg. 195.",
  bullets: ["If you move while grappling another creature, your speed is halved, unless the creature is two or more sizes smaller than you.", "See the attack action for how to <a href='grapple'>grapple</a> a creature."]
}, {
  title: "Mounting and dismounting",
  icon: "mounted-knight",
  subtitle: "Cost: half movement speed",
  description: "Movement cost: half of your speed",
  reference: "PHB, pg. 198.",
  bullets: ["Once during your move, you can mount a creature that is within 5 feet of you or dismount. Doing so costs an amount of movement equal to half your speed. For example, if your speed is 30 feet, you must spend 15 feet of movement to mount a horse. Therefore, you can't mount it if you don't have 15 feet of movement left or if your speed is O. If an effect moves your mount against its will while you're on it, you must succeed on a DC 10 Dexterity saving throw or fall off the mount, landing <a href='prone'>prone</a> in a space within 5 feet of it.", "If you're knocked <a href='prone'>prone</a> while mounted, you must make the same saving throw. If your mount is knocked <a href='prone'>prone</a>, you can use your reaction to dismount it as it falls and land on your feet. Otherwise, you are dismounted and fall <a href='prone'>prone</a> in a space within 5 feet it."]
}];
},{}],"C:/Users/Alejandro/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}]},{},["C:/Users/Alejandro/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","projects/5e-quick-reference/js/data/data_movement.js"], null)
//# sourceMappingURL=/data_movement.d5d7ab60.js.map