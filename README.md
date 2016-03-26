## Subscribe-event

Subscribe-event is the easiest way to subscribe dom events in browser or node.js events.

#### Instal

```
npm install --save subscribe-event
```

Library support es6, CommonJs, AMD modules

#### Examples

For example in browser:

```
var subscribe = require('subscribe-event');

var element = document.querySelector('.my-button');

var unsubscribe = subscribe(element, 'click', function(e) {
    console.log(e);
});

// code

unsubscribe();
```

or

```
var subscribe = require('subscribe-event');

var unsubscribe = subscribe(document, 'scroll', function(e) {
    console.log(e);
});

// code

unsubscribe();
```

This library alse support old ie (attachEvent/detachEvent).

It's useful for React:

```
import React, { Component } from 'react';
import subscribe from 'subscribe-event';

class MyAmazingComponent extends
    componentDidMount() {
        this.unsubscribeScroll = subscribe(document, 'scroll', function() {
            // do some job
        });
    }

    componentWillUnmount() {
        this.unsubscribeScroll();
    }

    render() {
        const { children } = this.props;

        return (
            <div>{children}</div>
        );
    }
});
```

You can define your custom event subscribe function:

```
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

By default subscribe-event work with: `addEventListener`, `detachEvent`, `on`


