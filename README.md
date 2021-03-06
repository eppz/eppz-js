eppz!js
=======
[![Build Status](https://travis-ci.org/eppz/eppz-js.png?branch=master)](https://travis-ci.org/eppz/eppz-js) [![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/eppz/eppz-js/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

**Objective-JavaScript** for everyday use. Minimalistic but readable API. Perfect base for a clean / extendable design. **A single file called [`eppz!js!class.min.js`](https://github.com/eppz/eppz-js/blob/master/build/eppz!js!class.min.js)** is what you're looking for.

> ### [Superclass calls](#_super)
> #### [Enumerators](#_enumerators)
> #### [Property bindings](#_bindings)
> ##### [Inheritance](#_inheritance)
> ##### [Class methods](#_class_methods)
> ##### [KeyPaths](#_keypaths)
> ##### [Instance type](#_instance_type)


<a name="_inheritance"></a>
# Inheritance

**Creating classes**, and instances are pretty straightforward.
```JavaScript
// An imaginary View class.
var View = Class.extend
({
    id: '',
    div: null,

    construct: function(id)
    {
        this.id = id;
        this.build();
    },
    
    build: function()
    {
        this.div = document.createElement('div');
        this.div.id = this.id;
    },
});

var widget = new View('widget_1');
console.log(widget.id); // widget_1
```

**Extend classes** as well.
```JavaScript
// An imaginary Widget class, subclass of View.
var Widget = View.extend
({
    construct: function(number)
    {
        this.id = 'widget_'+number;
        this.build();
    },
});

var widget = new Widget(1);
console.log(widget.id); // widget_1
```

Better using **superclass implementation** for maintainability, safety and peace.
```JavaScript
// With super calls.
var Widget = View.extend
({
    construct: function(number)
    {
        this.super.construct('widget_'+number);
    },
});

var widget = new Widget(1);
console.log(widget.id); // widget_1
```

<a name="_class_methods"></a>
Or using **class methods** for factories and more.
```JavaScript
// Cool factory methods.
var Widget = View.extend
({
    // No instance methods implemented.
},
{
    widgetWithNumber: function(number)
    {
        return new this('widget_'+number);
    }
});

var widget = Widget.widgetWithNumber(1);
console.log(widget.id); // widget_1
```

<a name="_super"></a>
## `super` calls

Many JavaScript class implementation does not **take care of passing the correct `this` reference** (calling instance) for superclass method calls. With eppz!js Class your `super` calls works as you'd expect.
```JavaScript
var Widget = View.extend
({
    color: 'Default',

    getColorDescription: function()
    {
        return 'My color is '+this.color+'.';
    }
});

var BlueWidget = Widget.extend
({
    color: 'Blue',

    getColorDescription: function()
    {
        return 'As you would expect. '+this.super.getColorDescription();
    }
});

var widget = new BlueWidget();
console.log(widget.getColorDescription()); // As you would expect. My color is Blue.
```
There are class implementations out there that would output `Default` as color here. Actually the main reason I made this `Class` implementation was to get over this issue.

This method works over **any amount of cascading super calls**, as super references are bound right to the functions instead of the calling instance. Passing over the calling instance is done by a proxy object that wraps every superclass method into a function that does the job. See the [implementation](https://github.com/eppz/eppz-js/blob/master/Classes/eppz!kit/Class.js) for further details if interested at all.


<a name="_enumerators"></a>
## Enumerators

As soon as you define an `Array` property, enumerators will be synthesized for you upon instance construction.
```JavaScript
var Alphabet = Class.extend
({
    letters: [],
    logLetters: function()
    {
        this.enumerateLetters(function(eachLetter, eachIndex) // Created automagically.
        { console.log(eachIndex+': '+eachLetter); });
    }
});

var alphabet = new Alphabet();
alphabet.letters = ['A','B','C','D'];
alphabet.logLetters();
// 0: A
// 1: B
// 2: C
// 3: D
```

<a name="_bindings"></a>
## Property bindings

If a property map is present, accessors will be synthesized upon construction to keep properties synced. Great way to bind model changes to UI.
```JavaScript
var Controller = Class.extend
(
    {
        width: 20,
        div: null,

        construct: function()
        {
            this.div = document.createElement('div');
        }
    },
    {},
    {
        'width' : [ 'div.style.width', '%px' ]
    }
);

var controller = new Controller();
console.log(controller.div.style.width); // 20px

controller.width = 40;
console.log(controller.div.style.width); // 40px
```


<a name="_keypaths"></a>
## KeyPaths

As a side effect, every object is equiped with keypath tools.
```JavaScript
controller.setValueForKeyPath('20px', 'div.style.width');
console.log(controller.getValueForKeyPath('div.style.width')); // 20px
```


<a name="_instance_type"></a>
## Instance type

If you define a `className` property, runtime instance will be named after. Easier debug, also you can use `instanceof` inspections.
```JavaScript
var Widget = Class.extend
({
    className: 'Widget',
});

var widget = new Widget();
var test = (widget instanceof Widget);
console.log(test); // true
```


## `eppz!js`

Beside this `Class` implementation this repository collects some tools for everyday JavaScript development, mainly for personal use. Can take a look at some [`Array`](https://github.com/eppz/eppz-js/blob/master/Classes/eppz!js/Array.js) and [`Element`](https://github.com/eppz/eppz-js/blob/master/Classes/eppz!js/Element.js) tools, though.


#### License
> Licensed under the [Open Source MIT license](http://en.wikipedia.org/wiki/MIT_License).

[![githalytics.com alpha](https://cruel-carlota.pagodabox.com/02949f8d26ad5362c8cbed6962cef669 "githalytics.com")](http://githalytics.com/eppz/eppz-js)

