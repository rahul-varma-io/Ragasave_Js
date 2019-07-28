

Ragasave_Js
==================================================

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)


CDN
-------------------------------------------------
```
https://cdn.jsdelivr.net/gh/ragasave/ragasave_js/ragasave.js
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
#### -  ***`after(html1,html2,html3...[,boolean])`***
```
Ragasave('.foo').after('<div>div</div>','<div>div2</div>',true);
```
#### -  ***`attr(attr)`***
```
Ragasave(".bar").attr('name');// get value of name attribute

// set value of name attribute
Ragasave(".bar").attr('name','last_name');
```
#### -  ***`animate(style [duration] [,callback])`***
```
Ragasave(".bar").animate({
	top : 10
},2000);
```


#### -  ***`before(html1,html2,html3...[,boolean])`***
```
Ragasave('.foo').before('<div>div</div>','<div>div2</div>',true);
```
#### -  ***`clone([depth])`***
```
Ragasave('.foo').clone(true);
```
#### -  ***`css(object)`***
```
Ragasave('.foo').css({
	color : 'red',
	width : 100
});
```
#### -  ***`delAttr(attr)`***
```
Ragasave('.foo').delAttr('name');
```
> Alternative  method `removeAttr(attr)`

#### -  ***`delClass(class)`***
```
Ragasave('.foo').delClass('test1');
```
> Alternative  method `removeClass(class)`

#### -  ***`each(callback)`***
```
// Itrate Each Element With .foo class
Ragasave('.foo').each(function(elem, index){
	// Code Here
});
```
#### -  ***`exClass(class1,class2)`***
`exClass` replaces the `class1` to `class2`.  
```
Ragasave('.foo').exClass('test1', 'test');
```
#### -  ***`find(selector)`***
`find` search the given selector into child elements.  
```
Ragasave('.foo').find('#test1');
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
#### -  ***`on(type, handler [,eventKey] [,useCapture])`***
`on` binds event to selected elements.
```
Ragasave('.clickable').on('click',function(){
	// Code Here
});

```
#### -  ***`off(type [,handler] [,eventKey])`***
`on` unbinds event to selected elements by using `eventKey` or `event handler function`.
```
function func(){
	// Code Here
}
// bind event
Ragasave('.clickable').on('click',func,'myfunction');

// remove event by handler
Ragasave('.clickable').off('click',func);

// or by eventKey
// remove event by handler
Ragasave('.clickable').off('click','myfunction');

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

#### -  ***`val([v])`***
`val` to set or get the `value` of input fields. 
```
Ragasave("input").val('test');//set value of input

Ragasave("input").val();//get value of input
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

#### -  `wrap()`
```
Ragasave(".bar").wrap('<div></div>');
```


### *Prototypes*

- #### `Ragasave : {}`
	- `Ajax : ƒ`
	- `App : {}`
		- `TextEditor : {}`
		- `View : Class View` 
		- `ViewData : Class ViewData`
		- `ViewList : Class ViewList`
	- `Event : {}`
		- `add : ƒ`
		- `getStack : ƒ`
		- `push : ƒ``
		- `remove: ƒ`
		- `removeStack : ƒ` 
	- `UI : {}`
		- `Containera : {}`
			- `Column : ƒ`
			- `Popup : ƒ`
			- `Tab : ƒ`
		- `Controls : {}`
			- `Button : ƒ`
			- `CheckBox : ƒ`
			- `Radio : ƒ`
			- `SelectBox : ƒ`
			- `TextField : ƒ`
			- `init : ƒ`
			- `submit : ƒ`
			- `throwError : ƒ`
			- `validate : ƒ`
		- `Layout : {}`
			- `Center : ƒ`
			- `Middle : ƒ`
		- `Ragasave.ajaxBefore : ƒ`
		- `Ragasave.ajaxEnd : ƒ`
		- `Ragasave.ajaxError : ƒ`
		- `Ragasave.ajaxJson : ƒ `
		- `Ragasave.ajaxProcess : ƒ`
		- `Ragasave.ajaxProgress : ƒ`
		- `Ragasave.ajaxStart : ƒ`
		- `Ragasave.ajaxSuccess : ƒ`
		- `Ragasave.camelToDash : ƒ`
		- `Ragasave.createNode : ƒ`
		- `Ragasave.extend : ƒ`
		- `Ragasave.form : ƒ`
		- `Ragasave.getMouseDirX : ƒ`
		- `Ragasave.get: ƒ `
		- `Ragasave.getMouseDirY : ƒ`
		- `Ragasave.getMouseDirection : ƒ`
		- `Ragasave.onInput : {}`
			- `validation : ƒ`
		- `Ragasave.post : ƒ`
		- `Ragasave.unit : ƒ`
		- `Ragasave.style : ƒ`
