

Ragasave.js
==================================================

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)


CDN
-------------------------------------------------
```
https://cdn.jsdelivr.net/gh/ragasave/JavaScript/ragasave.js
```
Script
------------------------------------------------
```
<script src="https://cdn.jsdelivr.net/gh/ragasave/JavaScript/ragasave.js"></script>
```
Get Start
-------------------------------------------------
***`Ragasave(selector : string)` :*** To select elements from documents and it returns `Ragasave Object`

```
//Exaple:

Ragasave('h1') // Ragasave Object
Or
rc('h1') // Alternative of Ragasave()
```

## Methods

### *Event*
> ##### *Common Parameters :*
>  - *`callback`*  Required. Specifies the function to run when the event occurs
>  - *`eventKey`*  Optional parameter to assign key to event for further use
>  - *`useCapture`*  Optional. A Boolean value that specifies whether the event should be executed in the capturing or in the bubbling phase.
#### -  ***`active(mouseDown, mouseUp):`***
fire when mouse down and mouse up on element. 
```
Ragasave('.block').active(function(){
	console.log('Mouse Down');
}, function(){
	console.log('Mouse Up')
});
```
#### -  ***`blur(callback [,eventKey] [,useCapture]):`***
fire when remove focus from element .
```
// with callback Parameter
Ragasave('.block').blur(function(){
	console.log('focus removed');
});

// with callback and eventEey Parameter
Ragasave('.block').blur(function(){
	console.log('focus removed');
},'myEventKey');

// with callback, eventEey and useCapture Parameter
Ragasave('input').blur(function(){
	console.log('focus removed');
},'myEventKey', true);
```

#### -  ***`change(callback [,eventKey] [,useCapture]):`***
fire when the input value change .
```
// with callback Parameter
Ragasave('input').change(function(){
	console.log('value changed');
});
```

#### -  ***`click(callback [,eventKey] [,useCapture]):`***
fire when the click event occurs .
```
// with callback Parameter
Ragasave('#clickMe').click(function(){
	console.log('Clicked');
});
```

#### -  ***`dblClick(callback [,eventKey] [,useCapture]):`***
fire when the double click event occurs .
```
// with callback Parameter
Ragasave('#clickMe').dblClick(function(){
	console.log('Double Clicked');
});
```
...
#### -  ***`drag(callback [,eventKey] [,useCapture])`***
#### -  ***`dragEnd(callback [,eventKey] [,useCapture])`***
#### -  ***`dragEnter(callback [,eventKey] [,useCapture])`***
#### -  ***`dragLeave(callback [,eventKey] [,useCapture])`***
#### -  ***`dragOver(callback [,eventKey] [,useCapture])`***
#### -  ***`dragStart(callback [,eventKey] [,useCapture])`***
#### -  ***`drop(callback [,eventKey] [,useCapture])`***
#### -  ***`flexilbe(callback [,eventKey] [,useCapture])`***
#### -  ***`focus(callback [,eventKey] [,useCapture])`***
#### -  ***`focusIn(callback [,eventKey] [,useCapture])`***
#### -  ***`focusOut(callback [,eventKey] [,useCapture])`***
#### -  ***`hover(mouseOver, mouseOut)`***
#### -  ***`input(callback [,eventKey] [,useCapture])`***
#### -  ***`keyDown(callback [,eventKey] [,useCapture])`***
#### -  ***`keyPress(callback [,eventKey] [,useCapture])`***
#### -  ***`keyUp(callback [,eventKey] [,useCapture])`***
#### -  ***`mouseDown(callback [,eventKey] [,useCapture])`***
#### -  ***`mouseEnter(callback [,eventKey] [,useCapture])`***
#### -  ***`mouseLeave(callback [,eventKey] [,useCapture])`***
#### -  ***`mouseOut(callback [,eventKey] [,useCapture])`***
#### -  ***`mouseUp(callback [,eventKey] [,useCapture])`***
#### -  ***`resize(callback [,eventKey] [,useCapture])`***
#### -  ***`scroll(callback [,eventKey] [,useCapture])`***
#### -  ***`submit(callback [,eventKey] [,useCapture])`***

### *DOM*

#### -  ***`add(html)`***
```
Ragasave('.foo').add('<div></div>');
```
#### -  ***`addClass([className] [classArray])`***
```
Ragasave('.foo').addClass('test test2');

Ragasave('.foo').addClass(['test1','test2']);
```
#### -  ***`after([className] [classArray])`***
```
Ragasave('.foo').addClass('test test2');

Ragasave('.foo').addClass(['test1','test2']);
```


#### -  ***`animate(style [duration] [,callback])`***
```
Ragasave(".bar").animate({
	top : 10
},2000);
```
#### -  ***`first([depth] [,callback])`***
```
Ragasave(".bar").first();
```
> Alternative  method `firstChild([depth] [,callback])`

#### -  ***`last([depth] [,callback])`***
```
Ragasave(".bar").last();
```
> Alternative  method `lastChild([depth] [,callback])`

#### -  ***`height([height] [,callback])`***
```
Ragasave(".bar").height(); // Get height of element

Ragasave(".bar").height(10); // Set height of .bar to 10
 
// Multliplying the current height of element by 10
Ragasave(".bar").height(function(height,elem){
	return height * 10; 
});  

```
#### -  ***`hide([boolean])`***
```
Ragasave(".bar").hide(); // hide all element with class .bar

Ragasave(".bar").hide(true); // hide first element
```

#### -  ***`show([boolean])`***
```
Ragasave(".bar").show(); // show all element with class .bar

Ragasave(".bar").show(true); // show first element
```

#### -  ***`innerHeight([boolean])`***
```
// Get height including padding
Ragasave(".bar").innerHeight(); 

// Get height including padding and border
Ragasave(".bar").innerHeight(true);
  
```

#### -  ***`innerWidth([boolean])`***
```
// Get width including padding
Ragasave(".bar").innerWidth(); 

// Get width including padding and border
Ragasave(".bar").innerWidth(true);
  
```


#### -  ***`innerWidth([boolean])`***
```
// Get width including padding
Ragasave(".bar").innerWidth(); 

// Get width including padding and border
Ragasave(".bar").innerWidth(true);
  
```
#### -  ***`loadScript(options)`***
```
Ragasave('head').loadScript({
	type : "text/javascript",
	lang : "javascript",
	path : ['main.js']
});
  
```
#### -  ***`loadStyleSheet(options)`***
```
Ragasave('head').loadScript({
	type : "text/css",
	rel : "stylesheet",
	path : 'main.css'
});

```
#### -  ***`next([nth] [,callback])`***
```
Ragasave(".bar").next();
```
> Alternative  method `nextSibling:([nth] [,callback])`

#### -  ***`nextOrPrev()`***
return next element or previous element as existence.
```
Ragasave('.foo').nextOrPrev();
```
#### -  ***`loadStyleSheet(options)`***
```
Ragasave('head').loadScript({
	type : "text/css",
	rel : "stylesheet",
	path : 'main.css'
});

```
#### -  ***`prev([nth] [,callback])`***
```
Ragasave(".bar").prev();
```
> Alternative  method `prevSibling:([nth] [,callback])`

#### -  ***`prevOrNext()`***
return previous element or next element as existence.
```
Ragasave('.foo').prevOrNext();
```

#### -  ***`remove()`***
```
Ragasave(".bar").remove();
```
#### -  ***`show([boolean])`***
```
Ragasave(".bar").show();
```

#### -  ***`unwrap()`***
```
Ragasave(".bar").unwrap('.parent');
```

#### -  ***`width([height] [,callback])`***
```
Ragasave(".bar").width(); // Get width of element

Ragasave(".bar").width(10); // Set width of .bar to 10
 
// Multliplying the current width of element by 10
Ragasave(".bar").width(function(width,elem){
	return width * 10; 
});  

```

#### -  ***`wrap()`***
```
Ragasave(".bar").wrap('<div></div>');
```
