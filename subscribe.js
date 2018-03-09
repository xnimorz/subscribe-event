!(function() {
  "use strict";

  function subscribeEvent(
    element,
    event,
    handler,
    options,
    addSubscription,
    removeSubscription
  ) {
    var unsubscribeFunction = removeSubscription;
    var unsubscribe = function() {
      element[unsubscribeFunction](event, handler);
    };

    if (addSubscription) {
      element[addSubscription](event, handler, options);
      return unsubscribe;
    }

    if (element.addEventListener) {
      element.addEventListener(event, handler, options);
      unsubscribeFunction = "removeEventListener";
      return unsubscribe;
    }

    if (element.attachEvent) {
      event = "on" + event;
      element.attachEvent(event, handler);
      unsubscribeFunction = "detachEvent";
      return unsubscribe;
    }

    if (element.on) {
      element.on(event, handler);
      unsubscribeFunction = "off";
      return unsubscribe;
    }
  }

  function subscribe(element, event, handler, options) {
    return subscribeEvent(element, event, handler, options);
  }

  subscribe.define = function(addSubscription, removeSubscription) {
    return function(element, event, handler, options) {
      return subscribeEvent(
        element,
        event,
        handler,
        options,
        addSubscription,
        removeSubscription
      );
    };
  };

  (function(subscribe) {
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
  })(subscribe);
})();
