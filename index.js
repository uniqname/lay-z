(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.imag = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var loadImage = function loadImage(entries) {
    return entries.forEach(function (_ref) {
      var target = _ref.target,
          intersectionRatio = _ref.intersectionRatio;

      intersectionRatio && target.src !== target.dataset.src && (target.src = target.dataset.src);
    });
  };

  exports.default = function () {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return function () {
      var observeFrom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var observer = new IntersectionObserver(loadImage, _extends({ root: observeFrom }, config));
      return function (imag) {
        observer.observe(imag);
      };
    };
  };
});
