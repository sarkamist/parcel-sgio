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
})({"projects/5e-quick-reference/js/data/data_adventuring.js":[function(require,module,exports) {
data_adventuring_rests = [{
  title: "Short rest",
  icon: "sands-of-time",
  subtitle: "At least 1 hour long",
  description: "At least 1 hour long of rest, light activity and tending to wounds",
  reference: "PHB, pg. 186.",
  bullets: ["A short rest is a period of downtime, at least 1 hour long, during which a character does nothing more strenuous than eating, drinking, reading, and tending to wounds.", "A character can spend one or more Hit Dice at the end of a short rest, up to the character's maximum number of Hit Dice, which is equal to the character's level. For each Hit Die spend in this way, the player rolls the die and adds the character's Constitution modifier to it. The character regains hit points equal to the total (minimum of 0). The player can decide to spend an additional Hit Die after each roll. A character regains some spent Hit Die upon finishing a <a href='long-rest'>long rest</a>, as explained below."]
}, {
  title: "Long rest",
  icon: "bed",
  subtitle: "At least 8 hours long",
  description: "At least 8 hours long rest, of which you have to sleep at least 6 hours and perform no more than 2 hours of light activity",
  reference: "PHB, pg. 186. (changed on the 6th printing)",
  bullets: ["A long rest is a period of extended downtime, at least 8 hours long, during which a character sleeps for at least 6 hours and performs no more than 2 hours of light activity, such as reading, talking, eating, or standing watch.", "If the rest is interrupted by a period of strenuous activity —at least 1 hour of walking, fighting, casting spells, or similar adventuring activity— the characters must begin the rest again to gain any benefit from it.", "At the end of a long rest, a character regains all lost hit points. In addition, you regain at least one Hit Die when you finish a long rest, up to a number of dice equal to half the character's total number of them. For example if a character has eight Hit Dice, he or she can regain four spent Hit Dice upon finishing a long rest.", "A character can't benefit from more than one long rest in a 24-hour period, and a character must have at least 1 hit point at the start of the rest to gain its benefits."]
}, {
  title: "Recuperating",
  icon: "arm-sling",
  subtitle: "At least 3 days of downtime",
  description: "You can use downtime between adventures to recover from a debilitating injury, disease, or poison.",
  reference: "PHB, pg. 187.",
  bullets: ["After three days of downtime spent recuperating, you can make a DC 15 Constitution saving throw. On a successful save, you can choose one of the following results: <br>" + "• End one effect on you that prevents you from regaining hit points. <br>" + "• For the next 24 hours, gain advantage on saving throws against one disease or poison currently affecting you. <br>"]
}];
data_traveling = [{
  title: "Travel pace",
  icon: "treasure-map",
  subtitle: "Move at a normal, fast, or slow pace",
  description: "While traveling, a group of adventurers can move at a normal, fast, or slow pace",
  reference: "PHB, pg. 182.",
  bullets: ["A fast pace makes characters less perceptive, while a slow pace makes it possible to sneak around and to search an area more carefully (see the <i>Activity while traveling</i> section for more information).", "<table><tr><th style='text-align:left'>Pace</th><th></th><th></th><th style='text-align:center'>Minute</th><th></th><th></th><th style='text-align:center'>Hour</th><th></th><th></th><th style='text-align:center'>Day</th><th></th><th></th><th style='text-align:left'>Effect</th></tr><tr><td>Fast</td><td></td><td></td><td>400 feet</td><td></td><td></td><td>4 miles</td><td></td><td></td><td>30 miles</td><td></td><td></td><td>-5 penalty to passive Wisdom (Perception) scores</td></tr><tr><td>Normal</td><td></td><td></td><td>300 feet</td><td></td><td></td><td>3 miles</td><td></td><td></td><td>24 miles</td><td></td><td></td><td>-</td></tr><tr><td>Slow</td><td></td><td></td><td>200 feet</td><td></td><td></td><td>2 miles</td><td></td><td></td><td>18 miles</td><td></td><td></td><td>Able to use <a href='hide'>stealth</a></td></tr></table>"]
}, {
  title: "Forced march",
  icon: "run",
  subtitle: "Travel more than 8 hours in a day",
  description: "Push on beyond, at the risk of exhaustion",
  reference: "PHB, pg. 181.",
  bullets: ["The <i>Travel pace</i> table assumes that characters travel for 8 hours in a day. They can push on beyond that limit, at the risk of <a href='exhaustion'>exhaustion</a>.", "For each additional hour of travel beyond 8 hours, the characters cover the distance shown in the Hour column for their pace, and each character must make a Constitution saving throw at the end of the hour. The DC is 10 + 1 for each hour past 8 hours. On a failed saving throw, a character suffers one level of <a href='exhaustion'>exhaustion</a>."]
}, {
  title: "Mounts and vehicles",
  icon: "cavalry",
  subtitle: "Animals move much faster",
  description: "Mounted characters can ride at a gallop for about an hour",
  reference: "PHB, pg. 181.",
  bullets: ["For short spans of time (up to an hour), many animals move much faster than humanoids. A mounted character can ride at a gallop for about an hour, covering twice the usual distance for a fast pace. If fresh mounts are available every 8 to 10 miles, characters can cover larger distances at this pace, but this is very rare except in densely populated areas.", "Characters in wagons, carriages, or other land vehicles choose a pace as normal. Characters in a waterborne vessel are limited to the speed of the vessel, and they don't suffer penalties for a fast pace or gain benefits from a slow pace. Depending on the vessel an the size of the crew, ships might be able to travel for up to 24 hours per day.", "Certain special mounts, such as a pegasus or griffon, or special vehicles, such as a carpet of flying, allow you to travel more swiftly."]
}, {
  title: "Foraging",
  icon: "berries-bowl",
  subtitle: "Gather food and water while traveling",
  description: "Characters can gather food and water as the party travels",
  reference: "DMG, pg. 111.",
  bullets: ["Characters can gather food and water as the party travels at a normal or slow pace.", "A foraging character makes a Wisdom (Survival) check whenever the DM calls for it, with the DC determined by the abundance of food and water in the region.", "If multiple characters forage, each character makes a separate check. A foraging character finds nothing on a failed check. On a successful check, roll 1d6 + the character's Wisdom modifier to determine how much food (in pounds) the character finds, then repeat the roll for water (in gallons)."]
}, {
  title: "Becoming lost",
  icon: "direction-signs",
  subtitle: "Travelers run the risk of becoming lost",
  description: "Adventurers traveling in the wilderness run the risk of becoming lost",
  reference: "DMG, pg. 111-112.",
  bullets: ["Unless they are following a path, or something like it, adventurers traveling in the wilderness run the risk of becoming lost.", "The party's navigator makes a Wisdom (Survival) check when the DM decides it's appropriate, against a DC determined by the prevailing terrain. If the party is moving at a slow pace, the navigator gains a +5 bonus to the check, and a fast pace imposes a - 5 penalty. If the party has an accurate map of the region or can see the sun or stars, the navigator has advantage on the check.", "If the Wisdom (Survival) check succeeds, the party travels in the desired direction without becoming lost. If the check fails, the party inadvertently travels in the wrong direction and becomes lost. The party's navigator can repeat the check after the party spends 1d6 hours trying to get back on course."]
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
},{}]},{},["C:/Users/Alejandro/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","projects/5e-quick-reference/js/data/data_adventuring.js"], null)
//# sourceMappingURL=/data_adventuring.a7fbaccf.js.map