!(function() {
  "use strict";

  // Basic subscribe function both browser events or node.js events
  function subscribe(element, event, handler, options) {
    var unsubscribeFunctionName = "removeEventListener";
    var unsubscribe = function() {
      element[unsubscribeFunctionName](event, handler);
    };

    if (element.addEventListener) {
      element.addEventListener(event, handler, options);
      return unsubscribe;
    }

    if (element.attachEvent) {
      event = "on" + event;
      element.attachEvent(event, handler);
      unsubscribeFunctionName = "detachEvent";
      return unsubscribe;
    }

    if (element.on) {
      element.on(event, handler);
      unsubscribeFunctionName = "off";
      return unsubscribe;
    }
  }

  // define your own subscribe functions
  subscribe.define = function(addSubscription, removeSubscription) {
    return function(element, event, handler, options) {
      var unsubscribe = function() {
        element[removeSubscription](event, handler);
      };

      element[addSubscription](event, handler, options);
      return unsubscribe;
    };
  };

  // umd
  if (typeof exports === "object") {
    // CommonJS
    module.exports = subscribe;
  } else if (typeof define === "function" && define.amd) {
    // AMD. anonymous module
    define(subscribe);
  } else {
    // Global scope
    global.subscribeEvent = subscribe;
  }
})();
