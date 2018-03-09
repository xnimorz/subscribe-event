## Subscribe-event

Subscribe-event is the easiest way to subscribe either dom events in browser or node.js events.

Live example: http://xnimorz.github.io/subscribe-event/

#### Install

```
npm install --save subscribe-event
// or for yarn:
yarn add subscribe-event
```

Library support es6, CommonJs, AMD modules

#### Getting started

Step 1: import module:

```javascript
import subscribe from "subscribe-event";
```

Step 2: call subscrube function:

```javascript
const unsubscribe = subscribe(document, "scroll", () => {
  /* Do some job */
});
```

Step 3: call unsubscibe, which returned from subscribe function, to dispose:

```javascipt
  unsubscribe();
```

#### API

`subscribe` is a function, which receives 4 arguments:

1.  element — is a HTMLElement such as document.body, document, etc., Node.js object or any another object, that triggers events.
2.  event — is an event, such as `scroll`, `click`, `mousemove` etc.
3.  eventCallback — a function called when event triggers
4.  options — unessesary parameter, which provides more data to subscribe function. For example, when you using `subscribe` for HTMLElements you can capture events: `subscibe(document.querySelector('#a'), 'click', () => console.log('clicked'), true)`

#### Usage with React

```javascript
import React, { Component } from "react";
import subscribe from "subscribe-event";

class MyAmazingComponent extends Component {
  componentDidMount() {
    this.unsubscribeScroll = subscribe(document, "scroll", () => {
      // do some job
    });
  }

  componentWillUnmount() {
    this.unsubscribeScroll();
  }

  render() {
    const { children } = this.props;

    return <div>{children}</div>;
  }
}
```

Subscribe-event is useful for capturing events:

```javascript
import React, { Component } from "react";
import subscribe from "subscribe-event";

class MyAmazingComponent extends Component {
  componentDidMount() {
    this.unsubscribe = subscribe(
      document,
      "scroll",
      () => {
        // do some job
      },
      true
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { children } = this.props;

    return <div>{children}</div>;
  }
}
```

#### Examples

For example in browser:

```javascript
import subscribe from "subscribe-event";

var element = document.querySelector(".my-button");

var unsubscribe = subscribe(element, "click", e => {
  console.log(e);
});

// code

unsubscribe();
```

or

```javascript
import subscribe from "subscribe-event";

var unsubscribe = subscribe(document, "scroll", e => {
  console.log(e);
});

// code

unsubscribe();
```

This library supports old ie also (attachEvent/detachEvent).

You can define your custom event subscribe function:

```javascript
import subscribe from 'subscribe-event';

var obj: {
  eventSubscribe: function() {...},
  eventUnsubscribe: function() {...}
}

var customSubscribe = subscribe.define('eventSubscribe', 'eventUnsubscribe');

var customUnsubscribe = customSubscribe(obj, event, handler);

// ...

customUnsubscribe();
```

By default subscribe-event works with: `addEventListener`, `detachEvent`, `on`
