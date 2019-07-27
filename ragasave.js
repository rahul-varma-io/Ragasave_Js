/**

ragasave.js
Copyright (C) 2018  Rahul Varma

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License as published by the Free Software Foundation; either
version 2.1 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public
License along with this library; if not, see https://gnu.org/licenses.


 * @Author: rahul varma
 * @Date:   2018-11-14 03:01:32
 * @Last Modified by:   Rahul Varma
 * @Last Modified time: 2019-03-30 11:57:05
 * @Email: ragasave@gmail.com
 * @Website: ragasave.com
 */
(function () {
	const JHTML = {
		DOCTYPE: "!DOCTYPE",
		A: "a",
		ABBR: "abbr",
		ADDRESS: "address",
		AREA: "area",
		ARTICLE: "article",
		ASIDE: "aside",
		AUDIO: "audio",
		B: "b",
		BASE: "base",
		BDI: "bdi",
		BDO: "bdo",
		BLOCKQUOTE: "blockquote",
		BODY: "body",
		BR: "br",
		BUTTON: "button",
		CANVAS: "canvas",
		CAPTION: "caption",
		CITE: "cite",
		CODE: "code",
		COL: "col",
		COLGROUP: "colgroup",
		COMMAND: "command",
		DATALIST: "datalist",
		DD: "dd",
		DEL: "del",
		DETAILS: "details",
		DFN: "dfn",
		DIV: "div",
		DL: "dl",
		DT: "dt",
		EM: "em",
		EMBED: "embed",
		FIELDSET: "fieldset",
		FIGCAPTION: "figcaption",
		FIGURE: "figure",
		FOOTER: "footer",
		FORM: "form",
		H1: "H1",
		H2: "H2",
		H3: "H3",
		H4: "H4",
		H5: "H5",
		H6: "H6",
		HEAD: "head",
		HEADER: "header",
		HGROUP: "hgroup",
		HR: "hr",
		HTML: "html",
		I: "i",
		IFRAME: "iframe",
		IMG: "img",
		INPUT: "input",
		INS: "ins",
		KBD: "kbd",
		KEYGEN: "keygen",
		LABEL: "label",
		LEGEND: "legend",
		LI: "li",
		LINK: "link",
		MAP: "map",
		MARK: "mark",
		MENU: "menu",
		META: "meta",
		METER: "meter",
		NAV: "nav",
		NOSCRIPT: "noscript",
		OBJECT: "object",
		OL: "ol",
		OPTGROUP: "optgroup",
		OPTION: "option",
		OUTPUT: "output",
		P: "p",
		PARAM: "param",
		PRE: "pre",
		PROGRESS: "progress",
		Q: "q",
		RP: "rp",
		RT: "rt",
		RUBY: "ruby",
		S: "s",
		SAMP: "samp",
		SCRIPT: "script",
		SECTION: "section",
		SELECT: "select",
		SMALL: "small",
		SOURCE: "source",
		SPAN: "span",
		STRONG: "strong",
		STYLE: "style",
		SUB: "sub",
		SUMMARY: "summary",
		SUP: "sup",
		TABLE: "table",
		TBODY: "tbody",
		TD: "td",
		TEXTAREA: "textarea",
		TFOOT: "tfoot",
		TH: "th",
		THEAD: "thead",
		TIME: "time",
		TITLE: "title",
		TR: "tr",
		TRACK: "track",
		U: "u",
		UL: "ul",
		VAR: "var",
		VIDEO: "video",
		WBR: "wbr"
	};
	const RagasaveColors = {
		primary: {
			bg: 'rgba(1, 108, 244,1)',
			active: 'rgb(0, 92, 208)',
			text: '#fff',
			sh: 'rgba(1, 108, 244,0.34)'
		},
		danger: {
			bg: 'rgba(255, 17, 0,1)',
			active: 'rgb(199, 13, 0)',
			text: '#fff',
			sh: 'rgba(255, 90, 38,0.34)'
		},
		warn: {
			bg: 'rgba(255, 90, 38, 1)',
			active: 'rgb(232, 83, 36)',
			text: '#fff',
			sh: 'rgba(255, 90, 38, 0.34)'
		},
		success: {
			bg: 'rgba(2, 154, 71, 1)',
			active: 'rgb(1, 128, 58)',
			text: '#fff',
			sh: 'rgba(2, 154, 71, 0.34)'
		},
		info: {
			bg: 'rgba(255, 190, 0,1)',
			active: 'rgb(228, 170, 0)',
			text: '#fff',
			sh: 'rgba(255, 190, 0,0.34)'
		},
		blue: {
			bg: 'rgba(1, 108, 244,1)',
			active: 'rgb(0, 100, 226)',
			text: '#fff',
			sh: 'rgba(1, 108, 244,0.34)'
		},
		red: {
			bg: 'rgba(255, 17, 0,1)',
			active: 'rgb(199, 13, 0)',
			text: '#fff',
			sh: 'rgba(255, 90, 38,0.34)'
		},
		green: {
			bg: 'rgba(2, 154, 71, 1)',
			active: 'rgb(1, 128, 58)',
			text: '#fff',
			sh: 'rgba(2, 154, 71, 0.34)'
		},
		orange: {
			bg: 'rgba(255, 90, 38, 1)',
			active: 'rgb(232, 83, 36)',
			text: '#fff',
			sh: 'rgba(255, 90, 38, 0.34)'
		},
		yellow: {
			bg: 'rgba(255, 190, 0,1)',
			active: 'rgb(228, 170, 0)',
			text: '#fff',
			sh: 'rgba(255, 190, 0,0.34)'
		},
		white: {
			bg: 'rgba(255, 255, 255,1)',
			active: '#fff',
			text: '#9E9E9E',
			sh: 'rgba(124, 124, 124,0.34)'
		},
		lightgrey: {
			bg: '#dcdcdc',
			active: '#c3c3c3',
			text: '#757575',
			sh: 'rgba(220, 220, 220, 0.34)'
		},
		lightblue: {
			bg: 'rgb(100, 149, 237)',
			active: '#5b88d8',
			text: '#fff',
			sh: 'rgba(100, 149, 237,0.34)'
		},
		default: {
			bg: 'rgba(144, 164, 174, 1 )',
			active: 'rgb(117, 132, 140)',
			text: '#f1f1f1',
			sh: 'rgba(144, 164, 174, 0.34 )'
		},
		grey: {
			bg: 'rgb(105, 105, 105)',
			active: 'rgb(93, 93, 93)',
			text: '#fff',
			sh: 'rgba(105, 105, 105,0.34)'
		},
		darkblue: {
			bg: 'rgb(72, 61, 139)',
			active: 'rgb(58, 49, 111)',
			text: '#fff',
			sh: 'rgba(72, 61, 139,0.4)'
		},
		crimson: {
			bg: 'rgb(237, 20, 61)',
			active: 'rgb(197, 19, 53)',
			text: '#fff',
			sh: 'rgb(237, 20, 61,0.34)'
		},
		dark: {
			bg: '#000',
			active: 'rgb(30, 30, 30)',
			text: '#f8f8f8',
			sh: 'rgba(0, 0, 0, 0.34)'
		},
		pink: {
			bg: 'rgb(255, 20, 147)',
			active: 'rgb(202, 18, 117)',
			text: "#fff",
			sh: 'rgba(255, 20, 147,0.34)'
		},
		darkgreen: {
			bg: 'rgba(95, 125, 139,1)',
			active: 'rgb(75, 100, 111)',
			text: '#f8f8f8',
			sh: 'rgba(96, 125, 139, 0.34)'
		}
	};
	const R = {};
	const _u = "undefined";
	const _f = "function";
	const _s = "string";
	const _o = "object";
	const _d = "number";
	const _b = "boolean";
	const N = null;
	const doc = window.document;
	const win = window;
	const T = true;
	const F = false;
	R.fn = {};
	R._rc = {};
	/**
	 * @Event Record Array
	 */
	R.Event = {};
	R.Ajax = {};
	let Ajax = R.Ajax;
	R.Event.mgmt = {};
	R.Event.stack = [];
	let EventStack = R.Event.stack;
	let EventMgmt = R.Event.mgmt;

	EventStack.target = [];
	EventStack.type = [];
	EventStack.handler = [];
	EventStack.key = [];
	EventStack.useC = [];
	const _rc = R._rc;
	const _n = R.fn;

	if (!Element.prototype.matches) {
		Element.prototype.matches =
			Element.prototype.matchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector ||
			Element.prototype.oMatchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			function (s) {
				var matches = (this.document || this.ownerDocument).querySelectorAll(s),
					i = matches.length;
				while (--i >= 0 && matches.item(i) !== this) {}
				return i > -1;
			};
	}

	function childOf(selector, child) {
		if (child) {
			if (typeof child === _s) {
				var elem = doc.querySelector(child);
			} else if (child.nodeType && child.nodeType === 1) {
				var elem = child;
			}
		} else {
			var elem = this;
		}
		if (!elem || !elem.nodeType || !selector) {
			return false
		}
		if (typeof selector === "string") {
			if (evaluate(selector)) {
				return true;
			} else {
				return false;
			}
		} else {
			var tempAttri = {
				key: "rc_temp_elem_attri_id_" + Math.floor(Math.random() * 100000 + 1),
				val: "id_" + Math.floor(Math.random() * 100000 + 1)
			};
			selector.setAttribute(tempAttri.key, tempAttri.val);
			if (evaluate("[" + tempAttri.key + "=" + tempAttri.val + "]")) {
				selector.removeAttribute(tempAttri.key);
				return true;
			} else {
				selector.removeAttribute(tempAttri.key);
				return false;
			}
		}

		function evaluate(selector) {
			for (; elem && elem !== doc; elem = elem.parentNode) {
				if (elem.matches(selector))
					return true;
			}
			return null;
		}
	};
	Element.prototype.isOf = childOf;
	_rc.each = function (o, c) {

		let out = F;
		if (!o)
			return F;
		if (!c)
			return F;
		if (typeof c !== _f)
			return F;
		let isRc = o instanceof Ragasave_Js;
		let oIsObj = _n.ot(o) === _o;
		o = isRc && (o.length === 1 && o[0].nodeType === undefined) ? o[0] : o;
		oIsObj = (isRc && o.length) ? F : oIsObj;
		if (o instanceof Ragasave_Js && !o.length) {
			return o;
		};
		if (oIsObj) {
			for (let p in o) {
				c(p, o[p], o);
			}
			out = T;
		} else if (o && o.length > 0) {
			for (let i = 0; i < o.length; i++) {
				c(o[i], i);
			}
		} else {
			c(o);
			out = T;
		};
		return out;
	};

	EventMgmt.push = function (e, t, h, b, k) {
		let i = EventStack.target.indexOf(e);
		if (i !== -1 && e === (EventStack.target[i])) {
			EventStack.type[i].push(t);
			EventStack.key[i].push(k || N);
			EventStack.handler[i].push(h);
			EventStack.useC[i].push(b);
		} else {
			EventStack.target.push(e);
			EventStack.type.push([t]);
			EventStack.key.push([k || N]);
			EventStack.handler.push([h]);
			EventStack.useC.push([b]);
		}
	};

	/*
	 * #[get element attached events ]
	 * @param {element} name : e [element]
	 * @param {string} name : t [event type]
	 * @param {function || string} name : h [event handler || event key]
	 * @returns {null} 
	 */
	EventMgmt.getStack = function (e, t, h) {
		let i = EventStack.target.indexOf(e);
		if (i === -1) {
			return F
		};
		let evntL = [];
		EventStack.type[i].forEach(function (ae, ei) {
			let p = (t && typeof t === _s && t === ae) ? T : F;
			if (p) {
				if (h && typeof h === _f) {
					if (h === EventStack.handler[i][ei]) {
						evntL.push([ae, EventStack.handler[i][ei], EventStack.useC[i][ei], EventStack.key[i][ei], EventStack.target[i]]);
						evntL[(evntL.length - 1 || 0)]["index"] = ei;
					}
				} else if (h && typeof h === _s) {
					if (h === EventStack.key[i][ei]) {
						evntL.push([ae, EventStack.handler[i][ei], EventStack.useC[i][ei], EventStack.key[i][ei], EventStack.target[i]]);
						evntL[(evntL.length - 1 || 0)]["index"] = ei;
					}
				} else {
					evntL.push([ae, EventStack.handler[i][ei], EventStack.useC[i][ei], EventStack.key[i][ei], EventStack.target[i]]);
					evntL[(evntL.length - 1 || 0)]["index"] = ei;
				}
			}
		});
		if (evntL.length === 0) {
			return F
		};
		return evntL;

	};

	EventMgmt.removeStack = function (e) {
		let ei = EventStack.target.indexOf(e);
		if (ei === -1) {
			return F
		};
		EventStack.type.splice(ei, 1);
		EventStack.handler.splice(ei, 1);
		EventStack.useC.splice(ei, 1);
		EventStack.key.splice(ei, 1);
		EventStack.target.splice(ei, 1);
	};

	/*
	 * #[event listener]
	 * @param {object} name : e [element]
	 * @param {string} name : t [type]
	 * @param {function} name : c [callback]
	 * @param {boolean} name : b [boolean]
	 * @param {string} name : k [event key]
	 * @param {boolean} name : er [event record false]
	 * @returns {null} 
	 */
	EventMgmt.add = function (e, t, c, b, k, pe) {
		pe = typeof pe === _u || pe === N ? T : F;
		b = b || F;
		if (e === N || typeof (e) === _u)
			return F;
		if (t === N || typeof (t) !== _s)
			return F;
		if (c === N || typeof (c) !== _f)
			return F;
		if (e.nodeType === 1 || e === doc || e === win) {
			if (e.addEventListener) {
				e.addEventListener(t, c, b);
			} else if (e.attachEvent) {
				e.attachEvent("on" + t, c);
			} else {
				e["on" + t] = c;
			}
			if (pe && pe !== F) {
				EventMgmt.push(e, t, c, b, k);
			}
		} else {
			if (e.addEventListener) {
				e.addEventListener(t, c, b);
			} else if (e.attachEvent) {
				e.attachEvent("on" + t, c);
			} else {
				e["on" + t] = c;
			}
		}
	};
	/*
	 * #[remove event listener]
	 * @param {object} name : e [element]
	 * @param {string} name : t [type]
	 * @param {function || string} name : h [event handler || event key]
	 * @param {boolean} name : b [boolean]
	 * @returns {null} 
	 */
	EventMgmt.remove = function (e, t, h, b) {
		b = b || F;
		if (e.nodeType === 1 || e === doc || e === win) {
			let ei = EventStack.target.indexOf(e);
			if (ei === -1) {
				return F
			};
			if (e === N || typeof (e) === _u)
				return F;
			if (t === N || typeof (t) !== _s)
				return F;
			let evntL = EventMgmt.getStack(e, t, h);
			if (!evntL) {
				return F
			};
			for (let i = 0; i < evntL.length; i++) {
				remove(t, evntL[i][1]);
				if (EventStack.type[ei].length === 1) {
					EventMgmt.removeStack(e);
				} else {
					EventStack.type[ei].splice(evntL[i]["index"], 1);
					EventStack.handler[ei].splice(evntL[i]["index"], 1);
					EventStack.useC[ei].splice(evntL[i]["index"], 1);
					EventStack.key[ei].splice(evntL[i]["index"], 1);
				}
			};

			function remove(t, h) {
				if (e.removeEventListener) {
					e.removeEventListener(t, h, b);
				} else if (e.detachEvent) {
					e.detachEvent("on" + t, h);
				} else {
					e["on" + t] = function () {};
				}
			}
		}
	};

	EventMgmt.cloneEvent = function (e, n) {
		let i = EventStack.target.indexOf(e);
		if (i === -1) {
			return
		};
		let evntL = [];
		EventStack.type[i].forEach(function (ae, ei) {
			evntL.push([ae, EventStack.handler[i][ei], EventStack.useC[i][ei], EventStack.key[i][ei], EventStack.target[i]]);
		});
		for (let i = 0; i < evntL.length; i++) {
			EventMgmt.add(n, evntL[i][0], evntL[i][1], evntL[i][2], evntL[i][3]);
		}
	}


	_rc.off = function (o, t, h) {
		let n = _n.sa(t);
		if (!n) {
			return o;
		}
		_rc.evaluate(o, function (elem) {
			n.forEach(function (t) {
				EventMgmt.remove(elem, t, h);
			});
		});
		return o;
	};

	_rc.on = function (o, t, c, k, b) {
		b = k && typeof k === _b ? k : b;
		let n = _n.sa(t);
		if (!n) {
			return o;
		}
		_rc.evaluate(o, function (elem) {
			n.forEach(function (t) {
				EventMgmt.add(elem, t, c, b, k);
			});
		});
		return o;
	}

	_rc.hasSpace = function (s) {
		return (typeof s === _s ? s.replace(/[\s]+/g, "").length > 0 ? T : F : F);
	}
	/*
	 * #[remove space in string @removeSpace]
	 * @param {string} name : s
	 * @returns {boolean} 
	 */
	_rc.removeSpace = function (s) {
		return (s.replace(/[\s]+/g, ""));
	}
	_rc.cloneNode = function (e, b) {
		b = b || F;
		if (e.nodeType !== 1 && e.nodeType !== 11) {
			return
		}
		let n = e.cloneNode(b);
		EventMgmt.cloneEvent(e, n);
		let cn = n.querySelectorAll("*");
		e.querySelectorAll("*").forEach(function (ce, i) {
			EventMgmt.cloneEvent(ce, cn[i]);
		});
		return n;
	}

	/*
	 * #[Preparing Node For Clone @prepareNode]
	 * @param {Ragasave} Ragasave Object : o
	 * @param {NodeList || NodeCollection || [Elements Collection Array]} node list : nl
	 * @param {function} Callback : c
	 * @param {boolean} event removal or not : b
	 * @param {boolean} clone deep  : d
	 * @returns {ragasave} 
	 * @description (

	    The main task of this function is to clonning the one or more nodes and there events 
	    with respect to specified node by using cloneNode Method of _rc Object.
	    
	    The argument c is callback argument for performming any task with the cloned node  

	    the Argument b is resposible for removing the added events of targeted node and their 
	    all childrens (i.e.: node that we are going to clone) form R.EVENT object. if b is true 
	    then added events are not deleting or removing from R.EVENT object and if b is false
	    then the added events are deleted from R.EVENT object.the default value of b is true
	    that mean those events are listed in the R.EVENT object that are deleted.

	    The argument d is defines the whether the clonning node with their childs or only outer node
	 )

	 */

	_rc.prepareNode = function (o, nl, c, b, d) {
		(d && typeof d === _b) ? d: F; /* if 5th argument (d) is assigned as true then swipe it to false*/
		b = (typeof b === _u || b === N) ? F : b; /* swipping   */
		if (nl && (nl.nodeType === 1 || nl.nodeType === 11 || typeof nl === _s || _rc.typeOf(nl) === _o)) {
			prepare(nl);
		} else {
			if (typeof nl[nl.length - 1] === _b) {
				b = nl.pop(nl.length - 1);
			} else {
				b = F;
			}
			if (nl === N || typeof nl === _u)
				return o;
			nl.forEach(function (n) {
				if (n.nodeType === 1 || n.nodeType === 11 || typeof n === _s || _rc.typeOf(n) === _o) {
					prepare(n);
				} else {
					n = Array.from(n);
					n.forEach(function (tn) {
						if (tn.nodeType === 1 || tn.nodeType === 11 || typeof tn === _s || _rc.typeOf(tn) === _o) {
							prepare(tn);
						}
					});
				}
			});
		}

		function prepare(n) {
			let vn = _n.n(n);
			if (!vn)
				return F;
			_rc.evaluate(o, function (e) {
				if (typeof n === _s) {
					let node = vn;
					for (let i = 0; i < node.length; i++) {
						c(e, node[i].cloneNode(d));
					}
				} else {
					let node = _n.cloneNode(vn, d);
					c(e, node);
				}
			});
			if (b === F && typeof n !== _s) {
				if (n.nodeType === 1) {
					EventMgmt.removeStack(vn);
					vn.querySelectorAll("*").forEach(function (e) {
						EventMgmt.removeStack(e);
					});
					vn.remove();

				}
			}
		}
		return o;
	}

	_rc.createNode = function (n) {
		if (typeof n === _s) {
			return _rc.toNode(n)[0];
		} else if (n.nodeType === 1) {
			return n;
		}
		let e = N,
			p;
		(n.tag) ? (e = doc.createElement(n.tag)) : N;
		(e && n.class) ? (e.className = n.class) : N;
		(e && n.id) ? (e.id = n.id) : N;
		(e && n.type) ? (e.setAttribute("type", n.type)) : N;
		(e && n.hidden) ? (e.setAttribute("hidden", n.hidden)) : N;
		(e && n.name) ? (e.setAttribute("name", n.name)) : N;
		(e && n.value) ? (e.value = n.value) : N;
		(e && n.disabled) ? (e.setAttribute("disabled", '')) : N;
		(e && n.title) ? (e.setAttribute("title", n.title)) : N;
		(e && n.alt) ? (e.setAttribute("alt", n.alt)) : N;
		(e && n.href) ? (e.setAttribute("href", n.href)) : N;
		(e && n.src) ? (e.setAttribute("src", n.src)) : N;
		(e && n.text) ? (e.innerText = n.text) : N;
		(e && n.css) ? (function () {
			for (let p in n.css) {
				e.style[p] = _rc.size(n.css[p], p);
			}
		}()) : N;
		(e && n.attr) ? (function () {
			for (let p in n.attr) {
				e.setAttribute(p, n.attr[p]);
			}
		}()) : N;
		(e && n.proto) ? (function () {
			for (let p in n.proto) {
				e[p] = n.proto[p];
			}
		}()) : N;
		(e && n.ready) ? (n.ready(e)) : N;
		(e && n.bind) ? (function () {
			n.bind.forEach(function (o) {
				EventMgmt.add(e, o.type, o.handler, o.useCapture, o.key || null);
			});
		}()) : N;
		(e && n.html) ? (function () {
			if (typeof n.html === _o) {
				for (var j = 0; j < n.html.length; j++) {
					e.append(n.html[j]);
				}
			} else {
				e.innerHTML = n.html;
			}
		}()) : N;
		return e;
	};


	_rc.typeOf = function (o, b) {
		var toString = Object.prototype.toString;
		return (b === T ? toString.call(o) : toString.call(o).replace(/[\s\[]+(object)+/g, "").replace(/[\]\s]+/g, "").toLowerCase());
	}

	_rc.isNode = function (o) {
		let is = _n.ot(o);
		return (is.endsWith("Element") && is.startsWith("HTML")) ? T : F;
	}
	_rc.docFragment = function () {
		return doc.createDocumentFragment();
	}

	_rc.toNode = function (s) {
		if (s && typeof s === _o) {
			return (s.nodeType) ? s : _n.c(s);
		} else if (s && typeof s === _s && _n.hs(s)) {
			var p = new DOMParser();
			var d = p.parseFromString(s, "text/html");
			return (d.querySelector("body").childNodes);
		} else if (s && typeof s === _s) {
			return [doc.createTextNode(s)];
		} else {
			return F;
		}
	}

	_rc.isHtmlString = function (n) {
		return (typeof n === _s) ? (/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/.test(n)) : F;
	}

	_rc.evaluate = function (o, c) {
		for (let i = 0; i < o.length; i++) {
			if (o[i].nodeType === 1 || o[i].nodeType === 11) {
				c(o[i], i);
			} else if (o[i] === doc || o[i] === win) {
				c(o[i], i);
			}
		}
	}


	_rc.getNum = function (s) {
		return Number(s.toString().replace(/[^0-9-+\.]/g, ''));
	}

	_rc.size = function (s, b) {
		b = b || '';
		if (!s && s.length === 0) {
			return ''
		}
		var cp = ['zIndex', 'z-index', 'opacity'];
		if (cp.includes(b)) {
			return s
		};
		if (!s && s !== 0)
			return;
		s = s.toString();
		if (!(/^[0-9\-+\s]+([a-zA-Z]+|%)&/g.test(s)) && !(/^[0-9\-\.+\s]+$/).test(s))
			return s;
		s = s.replace("+", "");
		let n = Number(s.replace(/[^0-9-+\.]/g, ''));
		let u = s.replace(/[^a-zA-z%]+/g, "");
		let t = /[a-zA-Z%]/g.test(s);
		return (t) ? n + u : n + "px";
	}

	_rc.getCss = function (e) {
		if (e.nodeType === 1) {
			return win.getComputedStyle(e);
		} else {
			return F;
		}
	}
	_rc.wrap = function (o, n, b) {
		return _n.wrap(o, n, b);
	}

	_rc.unwrap = function (o, n) {
		return _n.unwrap(o, n);
	}

	_rc.parent = function (o, s, c) {
		return _n.parent(o, s, c);

	}
	_rc.runScripts = function (html) {
		let os = html.querySelectorAll("script");
		os.forEach(function (s, i) {
			let attr = {};
			let oAttr = s.getAttributeNames();
			oAttr.forEach(function (n) {
				attr[n] = s.getAttribute(n);
			});
			let ns = Ragasave.createNode({
				tag: "script",
				attr: attr,
				html: s.innerText
			});
			rc(os[i]).replaceWith(ns);
		});
		return html;
	};


	_rc.load = function (o, u, d, h) {
		if (o[0] && o[0].nodeType === 1) {
			var aObj = {
				url: u,
				dataType: "html",
				success: function (d, res, x) {
					o[0].innerHTML = null;
					if (h && typeof h === _f) {
						h(d, res, x);
					}
					Ragasave(o[0]).append(d.childNodes);
				}
			};

			if (d) {
				aObj['type'] = 'POST';
				aObj['data'] = d;
			}
			Ajax.setup(aObj);
		}
	};


	_rc.AjaxJson = function (u, sd, f, t) {
		if (sd && typeof sd === _f) {
			t = f;
			f = sd;
			sd = N
		} else {};
		sd = sd || null;
		f = f && typeof f === _f ? f : function () {};
		t = t || null;
		return Ajax.setup({
			type: t,
			url: u,
			dataType: "json",
			data: sd,
			success: function (r, s, x) {
				f(r, s, x);
			}
		});
	}

	_rc.get = function (u, sd, f, t) {
		if (sd && typeof sd === _f) {
			t = f;
			f = sd;
			sd = N
		} else {};
		sd = sd || null;
		f = f && typeof f === _f ? f : function () {};
		t = t || null;
		return Ajax.setup({
			type: "GET",
			url: u,
			dataType: t,
			data: sd,
			success: function (r, s, x) {
				f(r, s, x);
			}
		});
	}

	_rc.post = function (u, sd, f, t) {
		if (sd && typeof sd === _f) {
			t = f;
			f = sd;
			sd = N
		} else {};
		sd = sd || null;
		f = f && typeof f === _f ? f : function () {};
		t = t || null;
		return Ajax.setup({
			type: "POST",
			url: u,
			dataType: t,
			data: sd,
			success: function (r, s, x) {
				f(r, s, x);
			}
		});
	}

	_rc.Ajax = function (o) {
		return Ajax.setup(o);
	}

	/*
	 ====================================================================================
	 */

	Ajax.setup = function (o) {
		if (!o) {
			return
		};
		if (!o.url) {
			return
		};
		if (!o.type) {
			o.type = "GET"
		};
		let x;
		if (window.XMLHttpRequest) {
			x = new XMLHttpRequest();
		} else {
			x = new ActiveXObject("Microsoft.XMLHTTP");
		}
		x.open(o.type, o.url, (o.hasOwnProperty('async') ? o.async : T), (o.username ? o.username : null), (o.password ? o.password : null));
		if (o.time) {
			x.timeout = o.time;
		}

		EventMgmt.add(x, "readystatechange", function () {
			if (x.readyState === 0 && o.before && typeof o.before === _f) {
				o.before(x);
			}

			if (x.readyState === 1 && o.connected && typeof o.connected === _f) {
				o.connected(x);
			}

			if (x.readyState === 2 && o.received && typeof o.received === _f) {
				o.received(x);
			}
			if (x.readyState === 3 && o.received && typeof o.received === _f) {
				o.process(x);
			}

			if (this.readyState === 4) {
				if (o.success && typeof o.success === _f) {
					if (o.dataType && typeof o.dataType === _s) {
						if (_rc.removeSpace(o.dataType).toLowerCase() === "json") {
							var res = JSON.parse(this.response);
						} else if (_rc.removeSpace(o.dataType).toLowerCase() === "html") {
							let html = Ragasave.createNode({
								tag: "div",
								html: this.response
							});
							var res = _rc.runScripts(html);
						} else {
							var res = this.response;
						}
					} else {
						var res = this.response;
					};
					o.success(res, this.status, this);

				}

			}
		});


		if (o.progress) {
			x.onprogress = function () {
				o.progress(x);
			}
		}
		if (o.start && typeof o.start === _f) {
			x.onloadstart = function () {
				o.start(x);
			}
		}
		if (o.complete && typeof o.complete === _f) {
			x.onloadend = function () {
				o.complete(x);
			}
		}

		if (o.error && typeof o.complete === _f) {
			x.onloadend = function () {
				o.error(x.status, x);
			}
		}


		if (o.contentType && _rc.typeOf(o.contentType) === _o) {
			let t = o.contentType;
			for (let p in t) {
				x.setRequestHeader(p, t[p]);
			}
		};
		if (o.data && (_rc.typeOf(o.data) === _o || o.data instanceof FormData)) {

			if (o.data instanceof FormData) {
				var data = o.data;
			} else {
				var data = new FormData();
				Ragasave(o.data).each(function (n, v) {
					data.append(n, v);
				});
			}
			x.send(data);
		} else {
			x.send();
		};
		return x;

	};
	(function () {
		let AjaxEvent = {
			"ajaxStart": "loadstart",
			"ajaxEnd": "loadend",
			"ajaxProgress": "progress",
			"ajaxError": "error"
		};
		for (let e in AjaxEvent) {
			let v = AjaxEvent[e];
			Ajax[e] = function (c) {
				if (window.XMLHttpRequest) {
					var x = window.XMLHttpRequest;
				} else {
					var x = ActiveXObject;
				}

				function nx() {
					if (window.XMLHttpRequest) {
						var rx = new x();
					} else {
						var rx = new x("Microsoft.XMLHTTP");
					}
					EventMgmt.add(rx, v, function () {
						c(this.response, this.status, this);
					}, false);
					return rx;

				}
				if (window.XMLHttpRequest) {
					window.XMLHttpRequest = nx;
				} else {
					ActiveXObject = nx;
				}
			}
		};
		let AjaxChangeEvent = {
			"ajaxSuccess": 4,
			"ajaxBefore": 0,
			"ajaxProcess": 3
		};
		for (let e in AjaxChangeEvent) {
			let v = AjaxChangeEvent[e];
			Ajax[e] = function (c) {
				if (window.XMLHttpRequest) {
					var x = window.XMLHttpRequest;
				} else {
					var x = ActiveXObject;
				};

				function nx() {
					if (window.XMLHttpRequest) {
						var rx = new x();
					} else {
						var rx = new x("Microsoft.XMLHTTP");
					};
					EventMgmt.add(rx, "readystatechange", function () {
						if (this.readyState == v) {
							if (c && typeof c === _f) {
								c(this.response, this.status, this);
							}
						}
					}, false);
					return rx;

				};
				if (window.XMLHttpRequest) {
					window.XMLHttpRequest = nx;
				} else {
					ActiveXObject = nx;
				};
			};
		};
	}());

	/*
	 ====================================================================================
	 */

	/*
	 * #[have space in string]
	 * @param {string} name : s
	 * @returns {boolean} 
	 */
	_n.s = function (s) {
		return _rc.hasSpace(s);
	};

	/*
	 * #[remove space in string]
	 * @param {string} name : s
	 * @returns {boolean} 
	 */


	/*
	 * #[clone node with events]
	 * @param {node} name : n [element]
	 * @returns {node} 
	 */
	_n.cloneNode = function (e, b) {
		return _rc.cloneNode(e, b);
	};

	_n.wrap = function (o, n, b) {
		return _rc.prepareNode(o, n, function (e, nn) {
			let = f = _rc.docFragment();
			if (nn.nodeType === 1) {
				nn.appendChild(_rc.cloneNode(e, T));
				f.appendChild(nn);
				Ragasave(e).replaceWith(nn);
				if (!b) {
					/* EventMgmt.removeStack(e);*/

				}
			}

		}, b);
	}

	_n.unwrap = function (o, n) {
		_rc.evaluate(o, function (e) {
			if (!e.parentNode) {
				return o
			};
			let p = Ragasave(e).parent(n);
			if (!p) {
				return o;
			} else {
				p = p[0];
			}
			let f = _rc.docFragment();
			Ragasave(f).append(p.childNodes);
			Ragasave(p).replaceWith(f);
		});
		return o;
	}

	_n.parent = function (o, s, c) {
		if (!o[0]) {
			return o;
		}
		c = s && typeof s === _f ? s : c;
		if (c && typeof c === _f) {
			_rc.evaluate(o, function (e) {
				let pe = p(e);
				pe ? c(e, pe) : N;
			});
			return o;
		} else {
			let pe = p(o[0]);
			if (!pe) {
				return Ragasave();
			} else {
				return Ragasave(pe);
			}
		}

		function p(e) {
			let pNode;
			pNode = e;

			if (s && !isNaN(s)) {
				s = Number(s);
				for (let i = 0; i < s; i++) {
					pNode = pNode.parentNode;
				}
			} else if (s && typeof s === _s) {
				try {
					for (let i = 0; T; i++) {
						if (pNode.matches(s)) {
							break;
						} else {
							if (!pNode) {
								return N;
							}
							pNode = pNode.parentNode;
						}
					}
				} catch (error) {
					if (error.code === 12) {
						console.warn("'" + s + "'" + ' is not a valid selector.');
					}
				}
			} else if (s && s.nodeType === 1) {
				for (let i = 0; T; i++) {
					if (pNode === s) {
						break;
					} else {
						if (!pNode) {
							return N;
						}
						pNode = pNode.parentNode;
					}
				}
			} else {
				return e.parentNode;
			}
			return pNode;
		}
	}


	/**
	 * # [Neighbors Elements] 
	 * @param {Object} Ragasave : o
	 * @param {string} Position : t
	 * @param {function} callback : f
	 * @param {number} loop method : n
	 */
	_n.nebE = function (o, t, c, n) {
		if (c && (typeof c === _n || typeof c === _s)) {
			n = c;
		};
		if (c && typeof c === _f) {
			_rc.evaluate(o, function (e) {
				let ce = p(e);
				if (ce) {
					c(p(e));
				}
			});
			return o;
		} else {
			if (o[0] && o[0].nodeType === 1) {
				let ce = p(o[0]);
				return Ragasave(ce);

			}
		}

		function p(e) {
			let out = e[t];
			if (n && Math.abs(n).toString() !== "NaN") {
				for (let i = 0; i < Math.abs(n); i++) {
					if (out[t]) {
						out = out[t];
					}
				}
			}
			return out;
		}
	}

	/*
	 * #[ prepare node]
	 * @param {object} name : o [ragasave]
	 * @param {node} name : n [element]
	 * @param {boolean} name : b [boolean for remove originial clone node]
	 * @param {boolean} name : d [child node clone ]
	 * @param {function} name : c [callback]
	 * @returns {node} 
	 */
	_n.prepareNode = function (o, nl, c, b, d) {
		return _rc.prepareNode(o, nl, c, b, d);
	};
	/*
	 * #[placeNode => node actions line append,prepend,replaceWith etc]
	 * @param {object} name : o [ragasave]
	 * @param {node} name : n [element]
	 * @param {boolean} name : b [boolean for remove originial clone node]
	 * @param {boolean} name : d [child node clone ]
	 * @param {function} name : c [callback]
	 * @returns {node} 
	 */
	_n.placeNode = function (o, nl, c, b) {
		return _rc.prepareNode(o, nl, c, b, true);
	};
	/*
	 * #[create node]
	 * @param {object} name : n
	 * @returns {Node} 
	 */
	_n.c = function (n) {
		return _rc.createNode(n);

	};

	/*
	 * #[get object type]
	 * @param {object} name : o
	 * @param {boolean} name : b
	 * @returns {string} 
	 */
	_n.ot = function (o, b) {
		return _rc.typeOf(o, b);
	};

	/*
	 * #[is string is html element]
	 * @param {string} name : n
	 * @returns {boolean} 
	 */
	_n.ih = function (o) {
		return _rc.isNode(o);
	};
	/*
	 * #[to Node]
	 * @param {string} name : s
	 * @returns {boolean} 
	 */
	_n.n = function (s) {
		return _rc.toNode(s);
	};

	/*
	 * #[is node Array]
	 *
	 * 
	 */
	_n.isNodeArray = function (arr) {
		if (!arr.length || arr === win || arr === doc || _rc.typeOf(arr) === _o || typeof arr === _f || typeof arr === _s) {
			return F
		};
		let l = arr.length;
		let c = [];
		for (let i = 0; i < l; i++) {
			c.push(arr[i] instanceof Node);
		}
		return (c.includes(F) ? F : T);
	}

	/*
	 * #[string space split array]
	 * @param {string} name : s
	 * @returns {array} 
	 */
	_n.sa = function (s) {
		return (_n.s(s) ? s.split(" ").filter(Boolean) : F);
	};

	/*
	 * #[string is html]
	 * @param {string} name : n
	 * @returns {boolean} 
	 */
	_n.hs = function (n) {
		return _rc.isHtmlString(n);
	};


	/* 
	 =============================================================================
	 */
	/*
	 * #[element indexing]
	 * @param {nubmer} name : ei
	 * @returns {Object} 
	 * 
	 */
	class Ragasave_Js {
		constructor(selector, i) {
			let element;
			if (!selector)
				return;
			if (selector instanceof Ragasave_Js) {
				return selector
			}
			switch (typeof selector) {
				case _f:
					element = [win]
					this.init(selector);
					break;
				case _o:
					if (_n.isNodeArray(selector)) {
						element = Array.from(selector);
						element = typeof i === _u ? element : i < 0 ? [element.slice(i)[0]] : [element[i]];
						if (typeof element[0] === _u) {
							element = N;
						};
					} else {

						element = [selector];
					}
					break;
				case _s:
					element = Array.from(doc.querySelectorAll(selector));
					element = typeof i === _u ? element : i < 0 ? [element.slice(i)[0]] : [element[i]];
					if (typeof element[0] === _u) {
						element = N;
					};
					this.selector = selector;
					break;
				default:
					break;
			}
			if (element && typeof element !== _u) {
				this.length = element.length;
			}
			Object.assign(this, element);
		};
		splice() {
			return [].splice
		};
		i(n) {
			return new Ragasave_Js(this.selector, n);
		};
		/*
		 * #[add]
		 * @param {object} name  : o
		 * @param {function} name  : c
		 * @param {nubmer | boolean} name : ei
		 * @returns {undefined} 
		 */
		add() {

		};
		/*
		 * #[text]
		 * @param {string} name  : s
		 * @returns {Ragasave Object} 
		 */
		text(s) {
			if (!s || typeof s !== _s) {
				return this[0] && this[0].nodeType === 1 ? this[0].innerText : null;
			} else {
				_rc.evaluate(this, function (e) {
					e.innerHTML = s;
				});
			}
		}
		html(h) {
			if (!h || typeof h !== _s) {
				return this[0] && this[0].nodeType === 1 ? this[0].innerHTML : null;
			} else {
				_rc.evaluate(this, function (e) {
					e.innerHTML = h;
				});
			}
		}

		val(v) {
			if (!this[0] || !(this[0] instanceof Node)) {
				return this;
			}
			if (v && typeof v === 'string') {
				this[0].value = v;
				return this;
			} else if (!v) {
				return this[0].value;
			}
		}

		/*
		 * #[attr]
		 * @param {object | string} name  : o
		 * @returns {string} 
		 */
		attr(n) {
			if (typeof n !== _u) {
				let out = N;
				switch (typeof n) {
					case _s:
						n = _n.sa(n);
						if (!n) {
							return this;
						}
						if (this[0] && this[0].nodeType === 1) {
							out = this[0].getAttribute(n[0]);
						}
						break;
					case _o:
						_rc.evaluate(this, function (e) {
							for (let p in n) {
								e.setAttribute(p, n[p]);
							}
						});
						out = this;
						break;
				};
				return out;
			} else {
				return this;
			}
		};
		/*
		 * #[removeAttr]
		 * @param {string} name  : n
		 * @returns {object} 
		 */
		removeAttr(n) {
			n = _n.sa(n);
			if (!n) {
				return this;
			}
			_rc.evaluate(this, function (e) {
				n.forEach(function (a) {
					e.removeAttribute(a);
				});
			});
			return this;
		};
		/*
		 * #[removeAttr copy]
		 * @param {string} name  : n
		 * @returns {object} 
		 */
		delAttr(n) {
			return this.removeAttr(n);
		};
		/*
		 * #[hasAttr]
		 * @param {string} name  : n
		 * @returns {boolean} 
		 */
		hasAttr(n) {
			let out = [];
			n = _n.sa(n);
			if (!n) {
				return this;
			}
			_rc.evaluate(this, function (e) {
				n.forEach(function (a) {
					out.push(e.hasAttribute(a) ? T : F);
				});
			});
			return out.includes(F) === T || out.length === 0 ? F : T;
		};
		/*
		 * #[getAttrs]
		 * @returns {boolean} 
		 */
		getAttrs() {
			let out = {};
			if (this[0] && this[0].nodeType === 1) {
				let e = this[0];
				let al = e.getAttributeNames();
				al.forEach(function (a) {
					out[a] = e.getAttribute(a);
				});
			}
			return out;
		};
		/*
		 * #[haveAttr]
		 * @param {string} name  : n
		 * @returns {boolean} 
		 */
		haveAttr(n) {
			let out = [];
			n = _n.sa(n);
			if (!n) {
				return this;
			}
			_rc.evaluate(this, function (e) {
				n.forEach(function (a) {
					if (e.hasAttribute(a)) {
						out.push(e);
					}
				});
			});
			return out.length === 0 ? Ragasave() : Ragasave(out);
		};

		not(n) {
			let out = [];
			n = _n.sa(n);
			if (!n) {
				return this;
			}
			_rc.evaluate(this, function (e) {
				n.forEach(function (a) {
					if (!e.matches(a)) {
						out.push(e);
					}
				});
			});
			return out.length === 0 ? Ragasave() : Ragasave(out);
		};
		/*
		 * #[addClass]
		 * @param {string} name  : n
		 * @returns {object} 
		 */
		addClass(n) {
			n = _n.sa(n);
			if (!n) {
				return this;
			}
			_rc.evaluate(this, function (e) {
				n.forEach(function (c) {
					e.classList.add(c);
				});
			});
			return this;
		};
		/*
		 * #[toggleClass]
		 * @param {string} name  : n
		 * @returns {object} 
		 */
		toggleClass(n) {
			n = _n.sa(n);
			if (!n) {
				return this;
			}
			_rc.evaluate(this, function (e) {
				n.forEach(function (c) {
					e.classList.toggle(c);
				});
			});
			return this;
		};
		/*
		 * #[removeClass]
		 * @param {string} name  : n
		 * @returns {object} 
		 */
		removeClass(n) {
			n = _n.sa(n);
			if (!n) {
				return this;
			}
			_rc.evaluate(this, function (e) {
				n.forEach(function (c) {
					e.classList.remove(c);
				});
			});
			return this;
		};
		/*
		 * #[removeClass copy]
		 * @param {string} name  : n
		 * @returns {object} 
		 */
		delClass(n) {
			return this.removeClass(n);
		};
		/*
		 * #[removeClass copy]
		 * @param {string} name  : n
		 * @returns {object} 
		 */
		exClass(o, n) {
			n = _n.sa(n);
			if (!n) {
				return this;
			}
			_rc.evaluate(this, function (e) {
				e.classList.replace(o, n);
			});
			return this;
		};
		/*
		 * #[each]
		 * @param {function} name  : c
		 * @returns {object} 
		 */
		each(c) {
			(typeof c !== _u && typeof c === _f ? _rc.each(this, c) : N);
			return this;
		};
		/*
		 * #[before]
		 * @param {Node} name  : ...n
		 * @returns {object} 
		 */
		before(...n) {
			let out = [];
			_n.placeNode(this, n, function (e, n) {
				out.push(n);
				e.parentNode && e.parentNode.insertBefore(n, e);
			});
			Object.assign(this, out);
			return this;
		};
		/*
		 * #[after]
		 * @param {Node} name  : ...n
		 * @returns {object} 
		 */
		after(...n) {
			let out = [];
			_n.placeNode(this, n, function (e, n) {
				out.push(n);
				e.parentNode && e.parentNode.insertBefore(n, e.nextSibling);
			});
			Object.assign(this, out);
			return this;
		};
		/*
		 * #[append]
		 * @param {Node} name  : ...n
		 * @returns {object} 
		 */
		append(...n) {
			let out = [];
			_n.placeNode(this, n, function (e, n) {
				out.push(n);
				e.appendChild(n);
			});
			Object.assign(this, out);
			return this;
		};
		/*
		 * #[prepend]
		 * @param {Node} name  : ...n
		 * @returns {object} 
		 */
		prepend(...n) {
			let out = [];
			_n.placeNode(this, n, function (e, n) {
				out.push(n);
				e.prepend(n);
			});
			Object.assign(this, out);
			return this;
		};
		/*
		 * #[replace with]
		 * @param {Node} name  : ...n
		 * @returns {object} 
		 */
		replaceWith(...n) {
			let out = [];
			_n.placeNode(this, n, function (e, n) {
				EventMgmt.removeStack(e);
				out.push(n);
				e.replaceWith(n);
			});
			Object.assign(this, out);
			return this;
		};
		/*
		 * #[parent]
		 * @param {String} name  : n [selector]
		 * @param {number} name  : n [index ]
		 * @param {Node} name  : n [parent node]
		 * @returns {object} 
		 */
		parent(n, c) {
			return _rc.parent(this, n, c);
		};
		/*
		 * #[after]
		 * @param {Node} name  : ...n
		 * @returns {object} 
		 */
		clone(b) {
			let out = [];
			_rc.evaluate(this, function (e) {
				out.push(_rc.cloneNode(e, b));
			});
			Object.assign(this, out);
			return this;
		};
		/*
		 * #[bind Event to element]
		 * @param {string} name : t [ event type]
		 * @param {function} name : h [handler]
		 * @param {string} name : k [event retrival key]
		 * @param {boolean} name : b [useCapture]
		 * @returns {object} 
		 */
		on(t, h, k, b) {
			return _rc.on(this, t, h, k, b);
		};
		/*
		 * #[unbind Event to element]
		 * @param {string} name : t [ event type]
		 * @param {function || string} name : h [handler || key]
		 * @returns {object} 
		 */
		off(t, h) {
			return _rc.off(this, t, h);
		};
		/*
		 * #[initiate function]
		 * @param {function} name : c [handler]
		 * @returns {object} 
		 */
		init(c) {
			if (!c) {
				return this;
			};
			return _rc.on([win], "load", c);
		};
		/*
		 * #[css]
		 * @param {object} name : o [css property ]
		 * @returns {object} 
		 */
		css(o) {
			if (!o && _rc.typeOf(o) !== _o)
				return this;
			_rc.evaluate(this, function (e) {
				_rc.each(o, function (p, v) {
					e.style[p] = _rc.size(v, p);
				});
			});
			return this;
		}

		find(s) {
			if (!s)
				return this;
			if (this[0] && this[0].nodeType === 1) {
				let e = this[0];
				let ce = e.querySelector(s);
				return (ce && ce.nodeType === 1) ? Ragasave(ce) : Ragasave();
			} else {
				return this;
			}
		}

		findAll(s) {
			if (!s)
				return this;
			if (this[0] && this[0].nodeType === 1) {
				let e = this[0];
				let ce = e.querySelectorAll(s);
				if (ce.length === 0) {
					return Ragasave();
				} else {
					return Ragasave(ce);
				}
			} else {
				return this;
			}
		}
		isEmpty() {
			if (!this.length) {
				return T;
			} else {
				return F;
			};
		};

		isChildOf(s) {
			return childOf(s, this[0]);
		};
		get activeEvent() {
			return EventStack;
		};
	}

	/*
	 * #[constructor of Ragasave_Js]
	 * @param {String} name : selector [element Selector]
	 * @returns {Ragasave_Js Object} 
	 */
	function Ragasave(selector) {
		return new Ragasave_Js(selector);
	};
	Ragasave.each = _rc.each;
	Ragasave.Event = EventMgmt;
	Ragasave.eachElem = _rc.evaluate;
	Ragasave.unit = _rc.size;


	/*
	 * #[Ragasave_Js prototypes extender method]
	 * @param {Object} name : o
	 * @returns {Ragasave_Js Object} 
	 */
	Ragasave.extend = function (o) {
		if (!o && _rc.typeOf(o) !== _o)
			return;
		_rc.each(o, function (n, f) {
			Ragasave_Js.prototype[n] = f;
		});
	};
	Ragasave.createNode = _rc.createNode;
	this.Ragasave = Ragasave;
	this.rc = Ragasave;

	/*
	 * #[click,dlbclick,change,blur,grag,dragStart,dragLeave,
	 *  dragEnter,dragOver,dragEnd,Drop,focusIn,focusOut,
	 *  input,keyDown, keyUp,mouseDown,mouseOver, mouseMove, 
	 *  keyPress, MouseOut, resize, scroll,mouseLeave, mouseEnter]
	 * @param {function} name : c [handler]
	 * @param {string} name : k [event key]
	 * @param {boolean} name : b [useCapture]
	 * return {Object}
	 */
	_rc.each(["dblClick", "change", "blur", "drag", "dragStart", "dragLeave", "dragOver", "dragEnter", "dragEnd", "drop", "focusIn", "focusOut", "input", "keyDown", "keyUp", "mouseUp", "mouseDown", "mouseOver", "mouseMove", "keyPress", "mouseOut", "resize", "scroll", "mouseLeave", "mouseEnter"], function (e) {
		Ragasave.extend({
			[e]: function (c, k, b) {
				return this.on(e.toLowerCase(), c, k, b);
			}
		});
	});

	Ragasave.extend({
		'click': function (c, k, b) {
			if (arguments.length === 0) {
				if (this[0]) {
					this[0].click();
				}
				return this;
			} else {
				return this.on('click', c, k, b);
			}
		},
		"submit": function (c, k, b) {
			if (arguments.length === 0) {
				if (this[0]) {
					this[0].submit();
				}
				return this;
			} else {
				return this.on('submit', c, k, b);
			}
		},
		"focus": function (c, k, b) {
			if (arguments.length === 0) {
				if (this[0]) {
					this[0].submit();
				}
				return this;
			} else {
				return this.on('focus', c, k, b);
			}
		},
	})

	Ragasave.extend({
		position: function (c) {
			if (c && typeof c === _f) {
				_rc.evaluate(this, function (e, i) {
					let x = e.getBoundingClientRect();
					x = {
						width: x.width,
						height: x.height,
						top: x.top,
						left: x.left,
						bottom: x.bottom,
						right: x.right,
						x: x.x,
						y: x.y
					};
					c(e, x);
				});
				return this;
			} else {
				if (this[0] && this[0].nodeType === 1) {
					let ep = this[0].getBoundingClientRect();
					let p = {
						width: ep.width,
						height: ep.height,
						top: ep.top,
						left: ep.left,
						bottom: ep.bottom,
						right: ep.right,
						x: ep.x,
						y: ep.y
					};
					return p;
				}
			}
		},
		flexible: function (c, k, b) {
			this.on("load resize", c, k, b);
			return this;
		}
	});

	_rc.each({
		offsetX: "offsetLeft",
		offsetY: "offsetTop",
		offsetWidth: "offsetWidth",
		offsetHeight: "offsetHeight"
	}, function (p, v) {
		Ragasave.extend({
			[p]: function (c) {
				let p = v.replace("offset", "").toLowerCase();
				if (c && typeof c === _f) {
					_rc.evaluate(this, function (e, i) {
						let x = e[v];
						let s = c(e, x);
						(s) ? e.style[p] = _rc.size(s): null;
					});
					return this;
				} else {
					if (this[0] && this[0].nodeType === 1) {
						let e = this[0];
						let x = e[v];
						return x;
					}
				}
			}
		});
	});

	_rc.each(["width", "height"], function (p) {
		Ragasave.extend({
			[p]: function (c, t) {
				if (c && typeof c === _f) {
					_rc.evaluate(this, function (e, i) {
						let x = e['offset' + p.replace(p[0], p[0].toUpperCase())];
						let s = c(x, e);
						(s) ? e.style[p] = _rc.size(s): null;
					});
					return this;
				} else if (c && (typeof c === _s || typeof c === _d)) {
					this.css({
						[p]: c
					});
					return this;
				} else {
					if (this[0] && this[0].nodeType === 1) {
						let e = this[0];
						let x = e['offset' + p.replace(p[0], p[0].toUpperCase())];
						return x;
					}
				}
			}
		});
	});

	_rc.each(["innerWidth", "innerHeight"], function (p) {
		Ragasave.extend({
			[p]: function (b) {
				let prop = p.replace("inner", "").toLowerCase();
				let b1v = 0,
					p1, p2;
				if (prop === "width") {
					p1 = "left";
					p2 = "right";
				} else {
					p1 = "top";
					p2 = "bottom";
				}
				if (this[0] && this[0].nodeType === 1) {
					let e = this[0];
					if (b && b === T) {
						b1v = _rc.getNum(_rc.getCss(e).borderWidth);
					}
					let p1v = _rc.getNum(_rc.getCss(e)["padding-" + p1]);
					let p2v = _rc.getNum(_rc.getCss(e)["padding-" + p2]);
					let size = _rc.getNum(e['offset' + p.replace("inner", "")]);

					x = p1v + p2v + size;
					return x;
				}
			}
		});
	});

	_rc.each(["outerWidth", "outerHeight"], function (p) {
		Ragasave.extend({
			[p]: function (b) {
				let prop = p.replace("outer", "").toLowerCase();
				let m1 = 0,
					m2 = 0,
					p1, p2;
				if (prop === "width") {
					p1 = "left";
					p2 = "right";
				} else {
					p1 = "top";
					p2 = "bottom";
				}
				if (this[0] && this[0].nodeType === 1) {
					let e = this[0];
					if (b && b === T) {
						m1 = _rc.getNum(_rc.getCss(e)["margin-" + p1]);
						m2 = _rc.getNum(_rc.getCss(e)["margin-" + p2]);
					}
					let p1v = _rc.getNum(_rc.getCss(e)["padding-" + p1]);
					let p2v = _rc.getNum(_rc.getCss(e)["padding-" + p2]);
					let b1 = _rc.getNum(_rc.getCss(e).borderWidth);
					let size = _rc.getNum(e['offset' + p.replace("outer", "")]);
					x = p1v + p2v + b1 + m1 + m2 + size;
					return x;
				}
			}
		});
	});

	Ragasave.extend({
		hover: function (mi, mo) {
			if (mi && typeof mi === _f) {
				this.mouseOver(mi);
			}
			if (mo && typeof mo === _f) {
				this.mouseOut(mo);
			}
			return this;
		},
		active: function (md, mu) {
			if (md && typeof md === _f) {
				this.mouseDown(md);
			}
			if (mu && typeof mu === _f) {;
				this.mouseUp(mu);
			}
			return this;
		},
		focus: function (c, k, b) {
			if (c && typeof c === _b && c === T) {
				_rc.evaluate(this, function (e) {
					e.focus();
				});
			} else if (c && typeof c === _f) {
				this.on("focus", c);
			}
			return this;
		},
		hide: function (t) {
			if (t && typeof t === _b && t === T) {
				if (this[0] && this[0].nodeType === 1) {
					let e = this[0];
					e.style.display = "none";
				}
			} else {
				_rc.evaluate(this, function (e) {
					e.style.display = "none";
				});
			}
			return this;
		},
		show: function (t) {
			if (t && typeof t === _b && t === T) {
				if (this[0] && this[0].nodeType === 1) {
					let e = this[0];
					e.style.display = "";
				}
			} else {
				_rc.evaluate(this, function (e) {
					e.style.display = "";
				});
			}
			return this;
		},
		remove: function () {
			_rc.evaluate(this, function (e) {
				e.remove();
				EventMgmt.removeStack(e);
			});
			return this;
		},
		wrap: function (n, b) {
			return _rc.wrap(this, n, b);
		},

		unwrap: function (e) {
			return _rc.unwrap(this, e);
		},
		firstChild: function (n, c) {
			return _n.nebE(this, "firstElementChild", c, n);
		},
		lastChild: function (n, c) {
			return _n.nebE(this, "lastElementChild", c, n);
		},
		prevSibling: function (n, c) {
			return _n.nebE(this, "previousElementSibling", c, n);
		},
		nextSibling: function (n, c) {
			return _n.nebE(this, "nextElementSibling", c, n);
		},
		first: function (n, c) {
			return _n.nebE(this, "firstElementChild", c, n);
		},
		last: function (n, c) {
			return _n.nebE(this, "lastElementChild", c, n);
		},
		prev: function (n, c) {
			return _n.nebE(this, "previousElementSibling", c, n);
		},
		next: function (n, c) {
			return _n.nebE(this, "nextElementSibling", c, n);
		},
		nextOrPrev: function () {
			var nxt = _n.nebE(this, "nextElementSibling");
			if (nxt.isEmpty()) {
				return _n.nebE(this, "previousElementSibling");
			} else {
				return nxt;
			}
		},
		prevOrNext: function () {
			var prev = _n.nebE(this, "previousElementSibling");
			if (nxt.isEmpty()) {
				return _n.nebE(this, "nextElementSibling");
			} else {
				return prev;
			}
		},
		prevOrNext: function () {
			var prev = _n.nebE(this, "previousElementSibling");
			if (nxt.isEmpty()) {
				return _n.nebE(this, "nextElementSibling");
			} else {
				return prev;
			}
		},
		load: function (t, u, h) {
			_rc.load(this, t, u, h);
			return this;
		},

		loadStyleSheet: function (o) {
			if (this[0] && this[0].nodeType === 1) {
				var elem = this[0];
				if (o && o.path) {
					if (o.attr) {
						o.attr.type = o.type || 'text/css';
						o.attr.rel = o.rel || 'stylesheet';
						var attr = o.attr;
					} else {
						o.attr = {};
						o.attr.type = o.type || 'text/css';
						o.attr.rel = o.rel || 'stylesheet';
						var attr = o.attr;
					}
					Ragasave(o.path).each(function (e) {
						elem.append(createNode({
							tag: JHTML.LINK,
							attr: attr,
							href: e
						}));
					});
				}
			}

			return this;
		},

		loadScript: function (o) {
			if (this[0] && this[0].nodeType === 1) {
				var elem = this[0];
				if (o && o.path) {
					if (o.attr) {
						o.attr.type = o.type || 'text/javascript';
						o.attr.lang = o.lang || 'javascript';
						var attr = o.attr;
					} else {
						o.attr = {};
						o.attr.type = o.type || 'text/javascript';
						o.attr.lang = o.lang || 'javascript';
						var attr = o.attr;
					}
					Ragasave(o.path).each(function (e) {
						elem.append(createNode({
							tag: JHTML.SCRIPT,
							attr: attr,
							src: e
						}));
					});
				}
			}

			return this;
		},

		animate: function (style, duration, callback) {
			if (![0] || this[0].nodeType !== undefined) {
				return this
			}
			var elem = this[0];
			var allCssP = window.getComputedStyle(elem);
			var CCss = {};
			var CssF = {};

			function toNumber(data) {
				return Number(data.toString().replace(/[^0-9-+\.]/g, ''))
			}
			for (let property in style) {
				if (toNumber(allCssP[property]) < toNumber(style[property])) {
					CssF[property] = (toNumber(style[property]) - toNumber(allCssP[property])) / 20;
				} else {
					CssF[property] = -(toNumber(allCssP[property]) - toNumber(style[property])) / 20;

				}
				CCss[property] = toNumber(allCssP[property]);
			}
			var l = 0;
			let starttime = new Date().getTime();
			let timer = setInterval(function () {
				l++;

				for (let property in style) {
					CCss[property] = CCss[property] + CssF[property];
					var unit = style[property].toString().replace(/[^%a-zA-Z]+/g, '').length > 0 ? style[property].toString().replace(/[^%a-zA-Z]+/g, '') : property === "zIndex" || property === "opacity" ? "" : "px";
					elem.style[property] = CCss[property].toFixed(2) + unit;
				}

				if ((l + 1) > 20) {
					clearInterval(timer);
					if (typeof callback !== "undefined") {
						callback(elem);
					}
				}

			}, duration);
			return this;
		}

	});

	Ragasave.get = function (url, data, fun, dataType) {
		return _rc.get(url, data, fun, dataType);
	};
	Ragasave.post = function (url, data, fun, dataType) {
		return _rc.post(url, data, fun, dataType);
	};
	Ragasave.ajaxJson = function (url, data, fun, dataType) {
		return _rc.AjaxJson(url, data, fun, dataType);
	};

	Ragasave.Ajax = function (o) {
		return Ajax.setup(o);
	};
	Ragasave.ajaxStart = function (c) {
		return Ajax.ajaxStart(c);
	};
	Ragasave.ajaxSuccess = function (c) {
		return Ajax.ajaxSuccess(c);
	};
	Ragasave.ajaxBefore = function (c) {
		return Ajax.ajaxBefore(c);
	};
	Ragasave.ajaxProgress = function (c) {
		return Ajax.ajaxProgress(c);
	};
	Ragasave.ajaxProcess = function (c) {
		return Ajax.ajaxProcess(c);
	};
	Ragasave.ajaxError = function (c) {
		return Ajax.ajaxError(c);
	};
	Ragasave.ajaxEnd = function (c) {
		return Ajax.ajaxEnd(c);
	};

	Ragasave.camelToDash = function (s) {
		if (!s || typeof s !== _s) {
			return
		};
		return s.replace(/([a-z]):?([A-Z])/g, '$1-$2').toLowerCase();
	};

	Ragasave.style = function (c) {
		var style = "";
		for (let p in c) {
			style += p + "{";
			for (let r in c[p]) {
				style += Ragasave.camelToDash(r) + ':' + Ragasave.unit(c[p][r]) + ';';
			}
			style += "}";
		}
		if (!doc.querySelector('style[rcStyle]')) {
			var sn = createNode({
				tag: "style",
				attr: {
					type: "text/css",
					auther: "Ragasave",
					rcStyle: ''
				},
				text: style
			});
			doc.querySelector('head').append(sn);
		} else {
			doc.querySelector('style[rcStyle]').innerText += style;
		}

	};

	window.createNode = function (o) {
		return _rc.createNode(o);
	};
	window.addElem = function (o) {
		let n = window.createNode(o);
		if (o.parent) {
			if (o.parent.nodeType === 1) {
				o.parent.appendChild(n);
			} else {
				document.querySelector(o.parent).appendChild(n);
			}
		}
	};
	window.objType = function (o) {
		return _rc.typeOf(o);
	};
	this.JHTML = JHTML;
	this.RagasaveColors = RagasaveColors;
	return this;
})();
(function () {
	var lastMP = {};
	var out;
	Ragasave.getMouseDirection = function (event) {
		if (typeof event === "undefined") {
			Ragasave(document).on('mousemove', function (event) {
				getPos(event)
			})
		} else {
			getPos(event)
		}

		function getPos(event) {
			if (typeof (lastMP.x) != 'undefined') {
				var deltaX = lastMP.x - event.offsetX,
					deltaY = lastMP.y - event.offsetY;
				if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX > 0) {
					out = ('left')
				} else if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX < 0) {
					out = ('right')
				} else if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY > 0) {
					out = ('up')
				} else if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY < 0) {
					out = ('down')
				}
			}
			lastMP = {
				x: event.offsetX,
				y: event.offsetY
			}
		}
		return out
	};
}());
(function () {
	var lastMP = {};
	var out;
	Ragasave.getMouseDirX = function (event) {
		if (typeof event === "undefined") {
			Ragasave(document).on('mousemove', function (event) {
				getPos(event)
			})
		} else {
			getPos(event)
		}

		function getPos(event) {
			if (typeof (lastMP.x) != 'undefined') {
				var deltaX = lastMP.x - event.offsetX;
				if (deltaX > 0) {
					out = ('left');
				} else if (deltaX < 0) {
					out = ('right');
				}
			}
			lastMP = {
				x: event.offsetX
			}
		}
		return out
	};
}());
(function () {
	var lastMP = {};
	var out;
	Ragasave.getMouseDirY = function (event) {
		if (typeof event === "undefined") {
			Ragasave(document).on('mousemove', function (event) {
				getPos(event)
			})
		} else {
			getPos(event)
		}

		function getPos(event) {
			if (typeof (lastMP.y) != 'undefined') {
				var deltaY = lastMP.y - event.offsetY;
				if (deltaY > 0) {
					out = ('up');
				} else if (deltaY < 0) {
					out = ('bottom');
				}
			}
			lastMP = {
				y: event.offsetY
			}
		}
		return out
	};
}());
Ragasave.extend({
	draggable: function (options) {
		var element;
		var handle;
		var style = {
			width: "100%",
			height: "100%",
			left: "0px",
			top: "0px",
			cursor: "move",
			position: "absolute",
			border: "3px solid #FFC107"
		};
		var div;
		var callback = typeof options === "undefined" ? options : callback;
		callback = callback || null;
		if (this[0] && this[0].nodeType === 1) {
			div = this[0];
		} else {
			return this;
		}
		element = div;
		const toolActive = element.querySelector(".rc-draggableBoxUI") === null ? !1 : !0;
		if (options !== "undefined" && typeof options === "object") {
			if (options.toggle && options.toggle === !0) {
				window.addEventListener("click", toggle)
			}

			function toggle(event) {
				if (!toolActive && event.target !== element) {
					if (!event.target.isOf(element)) {
						window.removeEventListener("click", toggle);
						Ragasave(".rc-draggableBoxUI").remove()
					}
				}
				event.preventDefault()
			}
			/*if (!options.border) {
			 style.border = style.border || "3px solid #FFC107"
			 }*/
		}
		if (options && options.handle && options.handle.nodeType === 1) {
			handle = options.handle;
		} else if (options && options.handle && !Ragasave(options.handle).isEmpty()) {
			handle = Ragasave(options.handle)[0];
		} else {
			addElem({
				tag: JHTML.DIV,
				class: "rc-draggableBoxUI",
				attr: {
					rcUIBox: "draggable"
				},
				css: style,
				parent: element
			});
			handle = element.querySelector(".rc-draggableBoxUI");
		}
		if (!toolActive) {
			dragTool()
		}

		function dragTool() {
			let x = 0;
			let y = 0;
			let posX = 0;
			let posY = 0;

			handle.addEventListener("mousedown", function (event) {
				x = element.getBoundingClientRect().left;
				y = element.getBoundingClientRect().top;
				posX = event.pageX;
				posY = event.pageY;
				window.addEventListener("mousemove", drag);
				window.addEventListener("mouseup", function () {
					window.removeEventListener("mousemove", drag)
				})
			});

			function drag(event) {
				const left = x + (event.pageX - posX);
				const top = y + (event.pageY - posY);
				var data = {
					x: false,
					y: false
				};
				if (options && options.callback) {
					let d = options.callback(left, top);
					if (d) {
						data = d
					}
				}
				if (!data.x) {
					element.style.left = left + "px";
				}
				if (!data.y) {
					element.style.top = top + "px";
				}
			}
		}
		return this
	},
	resizable: function (options, callback) {
		var div;
		callback = typeof options === "undefined" ? options : callback;
		callback = callback || null;
		if (this[0] && this[0].nodeType === 1) {
			div = this[0];
		} else {
			return this;
		}
		const element = div;
		const toolActive = element.querySelector(".rc-resizerBoxUI") === null ? !1 : !0;
		if (options !== "undefined" && typeof options === "object") {
			if (options.toggle && options.toggle === !0) {
				window.addEventListener("click", toggle)
			}

			function toggle(event) {
				if (!toolActive && event.target !== element) {
					if (!event.target.isOf(element)) {
						window.removeEventListener("click", toggle);
						Ragasave(".rc-resizerBoxUI").remove()
					}
				}
				event.preventDefault()
			}
		}
		if (!toolActive) {
			resizerTools()
		}

		function resizerTools() {
			Ragasave(element).append({
				tag: JHTML.DIV,
				class: "rc-resizerBoxUI",
				attr: {
					rcUIBox: "resizer"
				},
				css: {
					width: "100%",
					height: "100%",
					top: "0px",
					left: "0px",
					position: "absolute",
					border: "3px solid #FFC107",
					boxSizing: "border-box"
				},
				html: [createNode({
					tag: JHTML.DIV,
					class: "rc-resizerUI rc-resizerUI-left",
					css: {
						height: "100%",
						width: "10px",
						left: "-9px",
						cursor: "e-resize",
						position: "absolute",
						top: "0px"
					}
				}), createNode({
					tag: JHTML.DIV,
					class: "rc-resizerUI rc-resizerUI-top",
					css: {
						width: "100%",
						height: "10px",
						top: "-9px",
						left: "0px",
						cursor: "n-resize",
						position: "absolute"
					}
				}), createNode({
					tag: JHTML.DIV,
					class: "rc-resizerUI rc-resizerUI-right",
					css: {
						height: "100%",
						width: "10px",
						right: "-9px",
						top: "0px",
						cursor: "e-resize",
						position: "absolute"
					}
				}), createNode({
					tag: JHTML.DIV,
					class: "rc-resizerUI rc-resizerUI-bottom",
					css: {
						width: "100%",
						height: "10px",
						bottom: "-9px",
						left: "0px",
						cursor: "n-resize",
						position: "absolute"
					}
				}), createNode({
					tag: JHTML.DIV,
					class: "rc-resizerUI rc-resizerUI-top-left",
					css: {
						width: "15px",
						height: "15px",
						borderRadius: "50%",
						background: "white",
						left: "-6px",
						top: "-6px",
						cursor: "nwse-resize",
						border: "3px solid #FFC107",
						position: "absolute"
					}
				}), createNode({
					tag: JHTML.DIV,
					class: "rc-resizerUI rc-resizerUI-top-right",
					css: {
						width: "15px",
						height: "15px",
						borderRadius: "50%",
						background: "white",
						right: "-6px",
						top: "-6px",
						cursor: "nesw-resize",
						border: "3px solid #FFC107",
						position: "absolute"
					}
				}), createNode({
					tag: JHTML.DIV,
					class: "rc-resizerUI rc-resizerUI-bottom-left",
					css: {
						width: "15px",
						height: "15px",
						borderRadius: "50%",
						background: "white",
						left: "-6px",
						bottom: "-6px",
						cursor: "ne-resize",
						border: "3px solid #FFC107",
						position: "absolute"
					}
				}), createNode({
					tag: JHTML.DIV,
					class: "rc-resizerUI rc-resizerUI-bottom-right",
					css: {
						width: "15px",
						height: "15px",
						borderRadius: "50%",
						background: "white",
						right: "-6px",
						bottom: "-6px",
						cursor: "nw-resize",
						border: "3px solid #FFC107",
						position: "absolute"
					}
				})]
			});
			const resizers = element.querySelectorAll('.rc-resizerUI');
			const minimumSize = 20;
			let originalWidth = 0;
			let originalHeight = 0;
			let x = 0;
			let y = 0;
			let posX = 0;
			let posY = 0;
			for (let i = 0; i < resizers.length; i++) {
				const currentResizer = resizers[i];
				currentResizer.addEventListener('mousedown', function (e) {
					event.preventDefault();
					originalWidth = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));
					originalHeight = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));
					x = element.offsetLeft;
					y = element.offsetTop;
					posX = e.pageX;
					posY = e.pageY;
					window.addEventListener('mousemove', resize);
					window.addEventListener('mouseup', stopResize);
				});

				function resize(e) {
					if (currentResizer.classList.contains('rc-resizerUI-bottom-right')) {
						const width = originalWidth + (e.pageX - posX);
						const height = originalHeight + (e.pageY - posY);
						if (width > minimumSize) {
							element.style.width = width + 'px'
						};
						if (height > minimumSize) {
							element.style.height = height + 'px'
						};
					} else if (currentResizer.classList.contains('rc-resizerUI-bottom')) {
						const height = originalHeight + (e.pageY - posY);
						if (height > minimumSize) {
							element.style.height = height + 'px'
						};
					} else if (currentResizer.classList.contains('rc-resizerUI-bottom-left')) {
						const height = originalHeight + (e.pageY - posY);
						const width = originalWidth - (e.pageX - posX);
						if (height > minimumSize) {
							element.style.height = height + 'px'
						};
						if (width > minimumSize) {
							element.style.width = width + 'px';
							element.style.left = x + (e.pageX - posX) + 'px'
						};
					} else if (currentResizer.classList.contains('rc-resizerUI-top')) {
						const height = originalHeight - (e.pageY - posY);
						if (height > minimumSize) {
							element.style.height = height + 'px';
							element.style.top = y + (e.pageY - posY) + 'px'
						};
					} else if (currentResizer.classList.contains('rc-resizerUI-top-right')) {
						const width = originalWidth + (e.pageX - posX);
						const height = originalHeight - (e.pageY - posY);
						if (width > minimumSize) {
							element.style.width = width + 'px'
						}
						if (height > minimumSize) {
							element.style.height = height + 'px';
							element.style.top = y + (e.pageY - posY) + 'px'
						};
					} else if (currentResizer.classList.contains('rc-resizerUI-right')) {
						const width = originalWidth + (e.pageX - posX);
						if (width > minimumSize) {
							element.style.width = width + 'px'
						};
					} else if (currentResizer.classList.contains('rc-resizerUI-left')) {
						const width = originalWidth - (e.pageX - posX);
						if (width > minimumSize) {
							element.style.width = width + 'px';
							element.style.left = x + (e.pageX - posX) + 'px'
						};
					} else {
						const width = originalWidth - (e.pageX - posX);
						const height = originalHeight - (e.pageY - posY);
						if (width > minimumSize) {
							element.style.width = width + 'px';
							element.style.left = x + (e.pageX - posX) + 'px'
						};
						if (height > minimumSize) {
							element.style.height = height + 'px';
							element.style.top = y + (e.pageY - posY) + 'px'
						};
					}
					if (callback && typeof callback === "function") {
						callback();
					}
				}

				function stopResize() {
					window.removeEventListener('mousemove', resize)
				}
			}
		}
		/*let event = new Event(this);
		 (event.stopPropagation) ? event.stopPropagation(): event.cancelBubble = !0*/
	},
	rippleEffect: function (options) {
		if (!Ragasave("[style-name=ripple]")[0]) {

			addElem({
				tag: JHTML.STYLE,
				attr: {
					type: "text/css",
					rel: "stylesheet",
					"style-name": "ripple",
					"genBy-Ragasave": true
				},
				html: 'div[rc-RippleUI]{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;background:transparent;pointer-events:none}div[rc-RippleUI] > span{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);opacity:0;width:0;height:0;border-radius:50%;background:rgba(255,255,255,.25);-ms-animation:Ripple-Effect .4s ease-in;-o-animation:Ripple-Effect .4s ease-in;-moz-animation:Ripple-Effect .4s ease-in;-webkit-animation:Ripple-Effect .4s ease-in;animation:Ripple-Effect .4s ease-in}[Ripple] > *,[Ripple]{user-select:none;-o-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none}@keyframes Ripple-Effect{0%{opacity:0}25%{opacity:1}100%{width:200%;padding-bottom:200%;opacity:0}}@-webkit-keyframes Ripple-Effect{0%{opacity:0}25%{opacity:1}100%{width:200%;padding-bottom:200%;opacity:0}}@-o-keyframes Ripple-Effect{0%{opacity:0}25%{opacity:1}100%{width:200%;padding-bottom:200%;opacity:0}}@-ms-keyframes Ripple-Effect{0%{opacity:0}25%{opacity:1}100%{width:200%;padding-bottom:200%;opacity:0}}@-moz-keyframes Ripple-Effect{0%{opacity:0}25%{opacity:1}100%{width:200%;padding-bottom:200%;opacity:0}}',
				parent: "head"
			});
		};
		options = options || {};
		options.on = options.on || "mousedown";
		options.color = options.color || "rgba(255, 255, 255, .25)";
		this.attr({
			Ripple: true
		});
		this.on(options.on, function (e) {
			var ElemPos = this.getBoundingClientRect(),
				posX = ElemPos.left,
				posY = ElemPos.top,
				PX = e.clientX,
				PY = e.clientY,
				x, y;
			Ragasave("div[rc-RippleUI]").remove();
			if (PX > posX) {
				x = PX - posX
			} else if (posX > PX) {
				x = posX - PX
			} else if (PX === posX) {
				x = 0;
			}
			if (PY > posY) {
				y = PY - posY
			} else if (posY > PY) {
				y = posY - PY
			} else if (PY === posY) {
				y = 0;
			}
			Ragasave(this).css({
				position: "relative"
			});
			addElem({
				tag: JHTML.DIV,
				attr: {
					"rc-RippleUI": ""
				},
				parent: this,
				html: [createNode({
					tag: JHTML.SPAN,
					css: {
						top: y + 'px',
						left: x + 'px',
						backgroundColor: options.color
					}
				})]
			})
		})
		this.on("animationend", function () {
			Ragasave("div[rc-RippleUI]").remove()
		});
		return this
	}
});

/*
 * #[drag and drop]
 * param {object} name : o  [properties : 
 type : string [list, dropzone, droppable, draggable,both]
 placeholder : string || node
 sublist : boolean
 sublistlt : boolean
 display : string [example : table, inline-block]
 key : string 
 mode : string [copy, move]
 dropTo : string [append,prepend,after,before]
 dragImg : image || node
 propagate : boolean
 ]
 * return {object} 
 */
Ragasave.extend({
	dragAndDrop: function (o) {
		o = o || {};
		const fn = {};
		const list = "list";
		const sublist = "sublist";
		const sublistlt = "sublistlt";
		const rclist = 'rcdndlist';
		fn.element = (o.skip ? this.not('[rc-draganddropui]') : this);
		fn.selector = this.selector;
		fn.slistlt = o.sublistlt || false;
		fn.slist = o.sublist || false;
		fn.DEDisplay = o.display || ''; /*Dragged Element set Display Property*/
		fn.dataId = Math.random().toString(36).substring(6);
		fn.dataKey = o.key || "drag-key-" + fn.dataId;
		fn.dropDest = o.dropTo || 'replace';
		fn.mode = o.mode || 'move';
		fn.plNode = o.placeholder && (typeof o.placeholder === "string" || o.placeholder.nodeType === 1) ? createNode(o.placeholder) : createNode({
			tag: JHTML.DIV,
			class: 'droppable-place-holder draggable',
			html: [createNode({
				tag: JHTML.DIV,
				class: "block-content",
				css: {
					border: '2px dashed #ccc',
					backgroundColor: '#f8f8f8',
				},
				html: [createNode({
					tag: JHTML.LABEL,
					text: "Drop Here"
				})]
			})]
		});
		fn.dfNode = o.placeholder && (typeof o.placeholder === "string" || o.placeholder.nodeType === 1) ? createNode(o.placeholder) : createNode({
			tag: JHTML.DIV,
			class: 'droppable-drop-flag draggable',
			attr: {},
			css: {
				position: 'absolute',
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				backgroundColor: '#fff'
			},
			html: [createNode({
				tag: JHTML.DIV,
				css: {
					border: '2px dashed #ccc',
					width: 'auto',
					height: 'auto',
					position: 'absolute',
					top: 10,
					left: 10,
					right: 10,
					bottom: 10,
					background: '#fff'
				},
				html: [createNode({
					tag: JHTML.DIV,
					css: {
						display: 'table',
						margin: 'auto',
						height: '100%'
					},
					html: [createNode({
						tag: JHTML.DIV,
						css: {
							display: 'table-cell',
							verticalAlign: 'middle',
							textAlign: 'center'
						},
						html: [createNode({
							tag: JHTML.DIV,
							css: {

							},
							html: [createNode({
								tag: JHTML.LABEL,
								text: 'Drop Here',
								css: {
									color: '#ccc',
									fontSize: 16
								}
							})]
						})]
					})]
				})]
			})]
		});


		fn.drag = function (f, element) {
			element = element || fn.element;
			element.drag(function (event) {
				f(this);
				if (o.callback && o.callback.drag) {
					o.callback.drag(this);
				}
			});
		};


		fn.dragStart = function (f, element) {
			element = element || fn.element;
			element.dragStart(function (event) {
				f(this);
				if (o.callback && o.callback.dragStart) {
					o.callback.dragStart(this);
				}
				if (o.propagate === true) {
					(event.stopPropagation) ? event.stopPropagation(): event.cancelBubble = !0;
				}
			});
		};


		fn.dragOver = function (f, element) {
			element = element || fn.element;
			element.dragOver(function (event) {
				event.preventDefault();
				f(this);
				if (o.callback && o.callback.dragOver) {
					o.callback.dragOver(this);
				}

				if (o.propagate === true) {
					(event.stopPropagation) ? event.stopPropagation(): event.cancelBubble = !0;
				}
			});
		};


		fn.dragEnter = function (f, element) {
			element = element || fn.element;
			element.dragEnter(function (event) {
				f(this);
				if (o.callback && o.callback.dragEnter) {
					o.callback.dragEnter(this, fn.draggedElem);
				}
				if (o.propagate === true) {
					(event.stopPropagation) ? event.stopPropagation(): event.cancelBubble = !0;
				}
			});
		};


		fn.dragLeave = function (f, element) {
			element = element || fn.element;
			element.dragLeave(function (event) {
				f(this);
				if (o.callback && o.callback.dragLeave) {
					o.callback.dragLeave(this, fn.draggedElem);
				}
				if (o.propagate === true) {
					(event.stopPropagation) ? event.stopPropagation(): event.cancelBubble = !0;
				}
			});
		};

		fn.drop = function (f, element) {
			element = element || fn.element;
			element.drop(function (event) {
				fn.data = JSON.parse(fn.getData(fn.dataKey));
				fn.dropElem = this;
				fn.draggedElem = Ragasave('[data-key="' + fn.data.dataId + '"]')[0];
				if (o.callback && o.callback.drop) {
					o.callback.drop(fn.draggedElem, this);
				}
				if (fn.draggedElem) {
					f(this);
				} else {

					Ragasave('[droppable-drop-flag]').remove();
					fn.delPlaceHolder();
				}
				if (o.callback && o.callback.dropEnd) {
					o.callback.dropEnd(fn.draggedElem, this);
				}
				if (o.propagate === true) {
					(event.stopPropagation) ? event.stopPropagation(): event.cancelBubble = !0;
				}

			});
		};


		fn.dragEnd = function (f, element) {
			element = element || fn.element;
			element.dragEnd(function (event) {
				f(this);

				if (o.callback && o.callback.dragEnd) {
					o.callback.dragEnd(this, fn.draggedElem);
				}
			});
		};


		fn.setData = function (key, value) {
			event.dataTransfer.setData(key, value);
		};


		fn.getData = function (key) {
			return event.dataTransfer.getData(key);
		};


		fn.setImg = function (img, y, x) {
			event.dataTransfer.setDragImage(img, y || 0, x || 0);
		};


		fn.setDropMode = function (mode) {
			mode = mode || "move";
			switch (mode.replace(/[\s]+/g, "")) {
				case "copy":
					fn.draggedElem = Ragasave(fn.draggedElem).clone(true)[0];
					break;

				case "move":
					fn.draggedElem = fn.draggedElem;
					break;
				default:
					fn.draggedElem = fn.draggedElem;
			}
		};


		fn.makeChange = function (callaback) {
			callaback = callaback || function () {};
			callaback(fn.draggedElem);
		};


		fn.dropTo = function (to) {

			to = to || "append";
			switch (to.replace(/[\s]+/g, "")) {
				case "append":
					if (fn.draggedElem !== fn.dropElem && !fn.dropElem.isOf(fn.draggedElem)) {
						return Ragasave(fn.dropElem).append(fn.draggedElem);
					}
					break;

				case "prepend":
					if (fn.draggedElem !== fn.dropElem && !fn.dropElem.isOf(fn.draggedElem)) {
						return Ragasave(fn.dropElem).prepend(fn.draggedElem);
					}
					break;

				case "after":
					return Ragasave(fn.dropElem).after(fn.draggedElem);
					break;

				case "before":
					return Ragasave(fn.dropElem).before(fn.draggedElem);
					break;

				case "replace":
					return Ragasave(fn.dropElem).replaceWith(fn.draggedElem);
					break;

				default:
					return Ragasave(fn.dropElem).append(fn.draggedElem);
			}
		};


		fn.subList = function (element) {
			let x = event.offsetX;
			let w = element.offsetWidth;
			let d = Ragasave(element);
			let l = d.attr(rclist);
			let hl = d.hasAttr(rclist);
			let prevElem = Ragasave(element).prevSibling();
			prevElem = prevElem[0] && prevElem[0].hasAttribute('data-key') ? prevElem.prevSibling() : prevElem;
			if (l !== list && prevElem.isEmpty()) {
				d.attr({
					[rclist]: list
				});
				fn.currentState = list;
				return;
			}
			if (l === sublistlt && (!prevElem.hasAttr(rclist) || prevElem.attr(rclist) === list)) {
				d.attr({
					[rclist]: sublist
				});
				fn.currentState = sublist;
				return;
			}
			if (!hl || l === list && fn.slist === true) {
				if (x > 60 && !prevElem.isEmpty()) {
					d.attr({
						[rclist]: sublist
					});
					fn.currentState = sublist;
				}
			} else
			if (l === sublist && fn.slistlt === true) {
				if (x < 20) {
					d.attr({
						[rclist]: list
					});
					fn.currentState = list;
				} else if (fn.slistlt === true && x > 60 && (prevElem.attr(rclist) === sublist || prevElem.attr(rclist) === sublistlt)) {
					d.attr({
						[rclist]: sublistlt
					});
					fn.currentState = sublistlt;
				}
			} else
			if (l === sublistlt) {
				if (x < 20) {
					d.attr({
						[rclist]: sublist
					});
					fn.currentState = sublist;
				}
			}

		};


		fn.placeHolder = function (o) {
			let n = fn.plNode;
			var rn = Ragasave(n);
			n.setAttribute(rclist, fn.currentState || 'list');
			n.setAttribute('droppable-place-holder', "");

			fn.dragOver(function (self) {
				fn.subList(self);
			}, rn);
			fn.drop(function (self) {
				fn.setDropMode(fn.data.mode);
				fn.draggedElem = fn.dropTo('replace')[0];
				fn.displace = false;
			}, rn);
			return n;
		};

		fn.dropFlag = function (t) {
			let n = fn.dfNode;
			var rn = Ragasave(n);
			Ragasave(t).css({
				position: 'relative'
			});
			n.setAttribute('droppable-drop-flag', "");

			fn.dragOver(function (self) {

			}, rn);
			fn.drop(function (self) {
				fn.setDropMode(fn.data.mode);
				if (fn.dropDest.replace(/[\s]+/g, '') !== 'replace') {
					fn.dropElem = t;
				}
				fn.draggedElem = fn.dropTo(fn.dropDest)[0];

			}, rn);
			return n;
		};

		fn.arrangeList = function () {
			if (fn.slistlt && fn.slist) {
				Ragasave(fn.selector).each(function (element) {
					if (!element.previousElementSibling) {
						element.setAttribute(rclist, list);
					}
					let attr = element.getAttribute(rclist);
					if (attr === sublist) {

					}

					if (attr === sublistlt) {
						let n = element.previousElementSibling;
						n = n && n.hasAttribute('droppable-place-holder') ? n.previousElementSibling : n;
						if (!n.getAttribute(rclist) || n.getAttribute(rclist) === list) {
							element.setAttribute(rclist, sublist);
						}
					}

					if (!attr || attr == list) {
						let n = element.nextElementSibling;
						n = n && n.hasAttribute('droppable-place-holder') ? n.nextElementSibling : n;
						if (n && n.getAttribute(rclist) === sublistlt) {
							n.setAttribute(rclist, sublist);
						}
					}
				});
			} else if (fn.slist) {
				Ragasave(fn.selector).each(function (element) {
					if (!element.previousElementSibling) {
						element.setAttribute(rclist, list);
					}
					let attr = element.getAttribute(rclist);
					if (!attr || (attr == list || attr == sublist)) {
						let n = element.nextElementSibling;
						n = n && n.hasAttribute('droppable-place-holder') ? n.nextElementSibling : n;
						if (n && n.getAttribute(rclist) === sublistlt) {
							n.setAttribute(rclist, sublist);
						}
					}

				});
			} else if (fn.slist) {
				Ragasave(fn.selector).each(function (element) {
					if (!element.previousElementSibling) {
						element.setAttribute(rclist, list);
					}
					let attr = element.getAttribute(rclist);

					if (attr === sublistlt) {
						element.setAttribute(rclist, sublist);
					}
				});
			} else {
				Ragasave(fn.selector).each(function (element) {
					element.setAttribute(rclist, list);
				});
			}
		};


		fn.delPlaceHolder = function () {
			Ragasave('[droppable-place-holder]').remove();
		};


		fn.hasPlaceHolder = function () {
			return document.querySelector('[droppable-place-holder]');
		};


		fn.dropToNext = function (element) {
			fn.splitX(element, function () {
				fn.displace = true;
				if (!element.nextElementSibling || (element.nextElementSibling && !element.nextElementSibling.hasAttribute('droppable-place-holder'))) {
					fn.delPlaceHolder();
					Ragasave(element).after(fn.placeHolder());
				}
			}, function () {
				fn.displace = true;
				if (!element.previousElementSibling || (element.previousElementSibling && !element.previousElementSibling.hasAttribute('droppable-place-holder'))) {
					fn.delPlaceHolder();
					Ragasave(element).before(fn.placeHolder());
				}
			});
		};

		fn.showDropContext = function (element) {
			if (!element.querySelector('[droppable-drop-flag]')) {

				Ragasave('[droppable-drop-flag]').remove();
				Ragasave(element).append(fn.dropFlag(element));
			}
		};


		fn.splitX = function (element, f1, f2) {
			let y = event.offsetY;
			let h = element.offsetHeight / 2;
			if (y > h) {
				f1();
			} else {
				f2();
			}
		};


		function Init() {

			fn.element.attr({
				'rc-dragAndDropUI': ''
			});

			if (o.type && o.type.replace(/[\s]+/g, '') === "draggable") {
				draggable();
			}
			if (o.type && o.type.replace(/[\s]+/g, '') === "droppable") {
				droppable();
			}
			if (!o.type || o.type.replace(/[\s]+/g, '') === "both") {
				draggable();
				droppable();
			}

			if (o.type && o.type.replace(/[\s]+/g, '') === 'dropzone') {
				fn.dropDest = o.dropTo || 'append';
				droppable();
			}
			if (o.type && o.type.replace(/[\s]+/g, '') === 'list') {
				fn.dropDest = o.dropTo || 'after';
				draggable();
				droppable();
			}
		}


		function draggable() {
			fn.element.attr({
				draggable: true,
			});
			fn.arrangeList();


			fn.dragStart(function (element) {
				let s = element.getAttribute(rclist);
				fn.displace = false; /* displace checks whether the dragged element is on own place or diplaced*/
				fn.intialState = s ? s : list;
				fn.currentState = fn.intialState;
				fn.setData(fn.dataKey, JSON.stringify({
					dataId: fn.dataId,
					mode: fn.mode
				}));
				let pos = element.firstElementChild.getBoundingClientRect();
				fn.setImg(element, (event.pageX - pos.left), (event.pageY - pos.top));
				Ragasave(element).attr({
					'data-key': fn.dataId
				});
			});


			fn.drag(function (element) {
				if (o.placeholder) {
					Ragasave(element).hide();
				}
				if (o.placeholder) {
					if (!fn.hasPlaceHolder()) {
						Ragasave(element).after(fn.placeHolder());
					} else {
						Ragasave('[droppable-place-holder]').css({
							display: fn.DEDisplay
						});
					}
				}
			});

			fn.dragEnd(function () {
				let element = fn.draggedElem;
				if (!element) {
					return
				};
				fn.finalState = fn.currentState;
				Ragasave('[droppable-place-holder]').hide();
				Ragasave('[droppable-drop-flag]').remove();
				(fn.displace === false) ? element.setAttribute(rclist, fn.finalState): null;
				fn.arrangeList();
				Ragasave(fn.selector).css({
					display: fn.DEDisplay
				});
				Ragasave(fn.selector).delAttr('data-key');
				fn.currentState = null;
				setTimeout(function () {
					fn.delPlaceHolder();
				}, 100);
			});


		}
		Ragasave(fn.selector).dragEnd(function () {
			if (this) {
				this.style.display = fn.DEDisplay;
				Ragasave(fn.selector).delAttr('data-key');
			}
		});

		function droppable() {
			fn.dragOver(function (element) {
				if (o.placeholder) {
					if (o.type && o.type === "dropzone") {
						fn.showDropContext(element);
					} else if (!o.type || o.type.replace(/[\s]+/g, '') === 'list') {
						fn.dropToNext(element);
					}
				}
			});
			fn.dragEnter(function () {

			});
			fn.dragLeave(function () {

			});
			fn.drop(function (element) {
				Ragasave(fn.draggedElem).css({
					display: fn.DEDisplay
				});
				if (element === fn.draggedElem || (fn.dropDest === 'replace' && element.matches(fn.selector))) {
					return;
				};
				if (!fn.placeholder) {
					fn.setDropMode(fn.data.mode);
					fn.dropTo(fn.dropDest);
				}

				Ragasave(fn.selector).delAttr('data-key');
			});

			fn.dragEnd(function (element) {
				Ragasave(fn.selector).css({
					display: fn.DEDisplay
				});
				Ragasave('[droppable-drop-flag]').remove();
				Ragasave(fn.selector).delAttr('data-key');
				fn.delPlaceHolder();
			});
		}

		Init();

		function getList() {
			let d = Ragasave(fn.selector);
			let m = {};
			m.list = {};
			m.order = [];
			let l = m.list;
			let o = m.order;

			d.each(function (e, i) {
				let or = e.getAttribute('list-order');
				if (!e.hasAttribute('rcdndlist') || e.getAttribute('rcdndlist') === "list") {
					o.push(or);
					l['listID-' + (or)] = [];
					m.prev = 'listID-' + (or);
				};
				if (e.getAttribute('rcdndlist') === "sublist") {
					l[m.prev]['listID-' + (or)] = [];
					m.lprev = 'listID-' + (or);
				}
				if (e.getAttribute('rcdndlist') === "sublistlt") {
					l[m.prev][m.lprev]['listID-' + (or)] = [];
				}
			});
			return m;
		}
		return getList;
	},
	dropzone: function (p) {
		let prop = {};
		prop.type = 'dropzone';
		if (p.placeholder) {
			prop.placeholder = p.placeholder;
		}
		if (p.key) {
			prop.key = p.key;
		}
		if (p.dropTo) {
			prop.dropTo = p.dropTo;
		}
		if (p.dragImg) {
			prop.dragImg = p.dragImg;
		}
		if (p.propagate) {
			prop.propagate = p.propagate;
		}
		if (p.callback) {
			prop.callback = p.callback;
		}
		if (p.mode) {
			prop.mode = p.mode;
		}

		this.dragAndDrop(prop);
	}

});


/*
 
 Layout
 
 */
Ragasave.UI = {};
Ragasave.UI.Layout = {};

Ragasave.UI.Layout.Center = function (o) {
	if (o) {
		if (o.nodeType === 1) {
			o = [o];
		} else if (typeof o === "object") {
			o = [createNode(o)]
		} else {
			o = [];
		}
	} else {
		o = [];
	}

	return createNode({
		tag: JHTML.DIV,
		css: {
			display: 'block',
			width: '100%',
			height: '100%'
		},
		attr: {
			RagasaveLayoutUI: 'center',
			RagasaveUI: '',
		},
		html: [createNode({

			tag: JHTML.DIV,
			css: {
				display: 'table',
				margin: 'auto',
				width: 'auto',
				height: '100%'
			},
			html: [createNode({
				tag: JHTML.DIV,
				css: {
					display: 'table-cell',
					verticalAlign: 'middle'
				},
				html: o
			})]
		})]
	});
};

Ragasave.UI.Layout.Middle = function (o) {
	if (o) {
		if (o.nodeType === 1) {
			o = [o];
		} else if (typeof o === "object") {
			o = [createNode(o)]
		} else {
			o = [];
		}
	} else {
		o = [];
	}
	return createNode({
		tag: JHTML.DIV,
		css: {
			display: 'block',
			width: '100%',
			height: '100%'
		},
		attr: {
			RagasaveLayoutUI: 'middle',
			RagasaveUI: '',
		},
		html: [createNode({

			tag: JHTML.DIV,
			css: {
				display: 'table',
				width: '100%',
				height: '100%'
			},
			html: [createNode({
				tag: JHTML.DIV,
				css: {
					display: 'table-cell',
					verticalAlign: 'middle'
				},
				html: o
			})]

		})]
	});
};


/*

    Ragasave Containers
*/


Ragasave.UI.Containers = {};

Ragasave.style({
	['[RagasaveUI][RagasaveContainerUI="Tab"] .RagasaveUI-container-tab-btn-cw[activeTab]']: {
		backgroundColor: '#fff',
		color: '#474c6b',
		fontWeight: 'bold',
		borderColor: 'rgba(66, 66, 66, 0.12) !important'
	},
	['[RagasaveUI][RagasaveContainerUI="Tab"] .RagasaveUI-container-tab-btn-cw']: {
		color: 'rgba(66, 66, 66, 0.75)',
		fontWeight: 'bold'
	},
	['[RagasaveUI][RagasaveContainerUI="Tab"] .RagasaveUI-container-main-body']: {
		backgroundColor: '#fff'
	}
});

Ragasave.UI.Containers.Tab = function (o) {
	o = o || {};
	return createNode({
		tag: JHTML.DIV,
		class: 'Ragasave-ContainerUI-TabBox-container ' + (o.class || ''),
		css: {
			display: 'table',
			width: '100%'
		},
		attr: {
			RagasaveContainerUI: 'Tab',
			RagasaveUI: '',
		},
		html: [createNode({
			tag: JHTML.DIV,
			class: 'Ragasave-ContainerUI-Tab-header',
			css: {
				display: 'table',
				width: '100%',

			},
			html: (function () {
				var tabs = [];
				var active = false;
				if (o.tab) {
					Ragasave(o.tab).each(function (e, i) {
						var attr = {};
						if ((e.active && e.active === true) && active === false) {
							attr.activeTab = '';
							active = true;
						}
						attr['RagasaveUI-container-tab-index'] = i;
						tabs.push(createNode({
							tag: JHTML.DIV,
							attr: {
								'RagasaveUI-container-tab-index': i
							},
							class: 'RagasaveUI-container-tab-btn-wrapper ' + (e.class || ''),
							id: e.id || '',
							css: {
								padding: '10px 5px 0px 5px',
								display: 'inline-block',
							},
							html: [createNode({
								tag: JHTML.DIV,
								class: 'RagasaveUI-container-tab-btn',
								css: e.css || {},
								html: [createNode({
									tag: JHTML.DIV,
									class: 'RagasaveUI-container-tab-btn-cw',
									attr: attr,
									bind: [{
										type: 'click',
										handler: function () {
											var that = Ragasave(this);
											var hasAttr = that.hasAttr('RagasaveUI-container-tab-index');
											var header = that.parent(3);
											var main = that.parent(4);
											header.findAll('.RagasaveUI-container-tab-btn-cw').delAttr('activeTab');
											that.attr({
												activeTab: ''
											});
											if (hasAttr) {
												main.findAll('[RagasaveUI-container-tab-body-index]').hide();
												main.find('[RagasaveUI-container-tab-body-index="' + that.attr('RagasaveUI-container-tab-index') + '"]').show();
											}

										}
									}],
									css: {
										borderTop: '1px solid',
										borderLeft: '1px solid ',
										borderRight: '1px solid',
										borderColor: 'rgba(0,0,0,0.08)',
										cursor: 'pointer',
										top: '1',
										position: 'relative',
										padding: '5px 0px'
									},
									html: [createNode({
										tag: JHTML.LABEL,
										css: {
											fontSize: 13
										},
										text: e.label
									})]
								})]
							})]
						}));
					});
				}
				if (active === false) {
					Ragasave(tabs[0]).find('.RagasaveUI-container-tab-btn-cw').attr({
						activeTab: ''
					});
				}
				return tabs;
			}())
		}), createNode({
			tag: JHTML.DIV,
			class: 'Ragasave-ContainerUI-Tab-body',
			css: {
				display: 'table',
				width: '100%',

			},
			html: (function () {
				var body = [];
				var active = false;
				if (o.tab) {
					Ragasave(o.tab).each(function (e, i) {
						var display = 'none';
						if ((e.active && e.active === true) && active === false) {
							display = 'block';
							active = true;
						}
						body.push(createNode({
							tag: JHTML.DIV,
							attr: {
								'RagasaveUI-container-tab-body-index': i
							},
							class: 'RagasaveUI-container-tab-body',
							css: {
								padding: '0px 5px 0px 5px',
								width: '100%',
								display: display
							},
							html: [createNode({
								tag: JHTML.DIV,
								css: {},
								html: [createNode({
									tag: JHTML.DIV,
									css: {
										border: '1px solid',
										borderColor: 'rgba(66, 66, 66, 0.12) '
									},
									html: [createNode({
										tag: JHTML.DIV,
										css: {
											padding: '10px 0px'
										},
										class: 'RagasaveUI-container-main-body',
										html: [e.body ? createNode(e.body) : '']
									})]
								})]
							})]
						}));
					});
				}
				if (active === false) {
					Ragasave(body[0]).find('.RagasaveUI-container-tab-body').css({
						display: 'block'
					});
				}
				return body;
			}())
		})]
	});
}

Ragasave.UI.Containers.Column = function (o) {
	o = o || {};
	var css = o.css || {};
	css.display = "table";
	css.width = "100%";
	css.height = "100%";
	return createNode({
		tag: JHTML.DIV,
		attr: {
			RagasaveContainerUI: 'Column',
			RagasaveUI: '',
		},
		class: o.class || '',
		css: css,
		html: (function () {
			var cols = [];
			if (o.content && o.content.length > 0) {
				Ragasave(o.content).each(function (e) {
					var prop = e.column || {};
					prop.css = prop.css || {};
					prop.tag = JHTML.DIV,
						prop.css.display = 'table-cell';
					prop.html = e.html || [];
					cols.push(createNode(prop));
				});
			}
			return cols;
		}())
	});
}
Ragasave.UI.Containers.Popup = function (o) {
	o = o || {};
	o.header = o.header || {};
	var assets = {};
	o.css = o.css || {
		padding: '10px 5px'
	};
	assets._Node = createNode({
		tag: JHTML.DIV,
		class: 'r2ry-2s ' + (o.class || ''),
		id: o.id || '',
		attr: {
			RagasaveContainerUI: 'Popup',
			RagasaveUI: ''
		},
		css: {
			visibility: (o.visible && o.visible === true ? 'visible' : 'hidden'),
			opacity: (o.visible && o.visible === true ? 1 : 0),
			position: 'fixed',
			width: '100%',
			height: '100%',
			zIndex: '9999',
			backgroundColor: o.bgColor || 'rgba(0,0,0,0.10)',
			top: 0,
			left: 0
		},
		html: [createNode({
			tag: JHTML.DIV,
			css: {
				display: 'block',
				width: '100%',
				height: '100%',
				position: 'relative'
			},
			bind: [{
				type: 'mouseover',
				handler: function () {
					if (!o.moveable && o.moveable !== true) {
						Ragasave(this).off('mouseover', 'Ragasave-UI-bind-event-self-xsfsef');
						return
					}
					var that = this;
					Ragasave(this).draggable({
						handle: Ragasave(this).find('[Ragasave-UI-popup-container--header-wrapper]').css({
							cursor: 'all-scroll'
						})[0],
						callback: function (x, y) {


						}
					});
					Ragasave(this).off('mouseover', 'Ragasave-UI-events-xs23efd&%32*7534$#%drgdr');
					Ragasave(this).css({
						position: 'relative'
					});
				},
				key: 'Ragasave-UI-events-xs23-xs23efd&%32*7534$#%drgdr'
			}, {
				type: 'click',
				handler: function () {
					assets.close(this);
				}
			}],
			html: [Ragasave.UI.Layout.Center({
				tag: JHTML.DIV,
				class: 'xxsd-nr',
				attr: {
					'RagasaveContainerUI-popup-container': ''
				},
				bind: [{
					type: 'click',
					handler: function (e) {
						e.stopPropagation();
					}
				}],
				css: {
					width: '100%',
					backgroundColor: '#fff'
				},
				html: [createNode({
					tag: JHTML.DIV,
					class: 'Ragasave-UI-popup-container--header-wrapper' + ' ' + (o.headerClass || ''),
					attr: {
						'Ragasave-UI-popup-container--header-wrapper': ''
					},
					css: {
						padding: '10px 5px',
						'border-top-left-radius': 'inherit',
						'border-top-right-radius': 'inherit',
						stroke: 'rgba(0,0,0,0.20)',
						borderBottom: '1px solid rgba(0,0,0,0.08)',
						color: 'rgba(0,0,0,0.50)',
						'user-select': 'none',
						'-o-user-select': 'none',
						'-ms-user-select': 'none',
						'-moz-user-select': 'none',
						'-webkit-user-select': 'none',
						backgroundColor: '#eee'
					},
					html: [createNode({
						tag: JHTML.DIV,
						class: '',
						css: {
							display: 'table',
							width: '100%'
						},
						html: [createNode({
							tag: JHTML.DIV,
							css: {
								display: 'table-cell'
							},
							html: [createNode({
								tag: JHTML.DIV,
								css: {
									display: 'table',
									textAlign: 'left',
									padding: '0px 10px'
								},
								html: [createNode({
									tag: JHTML.LABEL,
									attr: {
										'popup-title': ''
									},
									css: {
										fontSize: 14,
										fontWeight: 'bold'
									},
									text: o.title || 'Popup Box'
								}), (o.shortDesc ? createNode({
									tag: JHTML.I,
									attr: {
										'popup-short-desc': ''
									},
									css: {
										display: 'block',
										fontSize: 11
									},
									text: o.shortDesc || 'Sample Popup Box'
								}) : '')]
							})]
						}), createNode({
							tag: JHTML.DIV,
							css: {
								display: 'table-cell',
								width: 20,
								minWidth: 20,
								maxWidth: 20,
								verticalAlign: 'middle'
							},

							html: [createNode({
								tag: JHTML.DIV,
								css: {
									display: 'block',
									margin: 'auto',
									height: 12
								},
								html: [createNode({
									attr: {
										'popup-close-btn': ''
									},
									tag: JHTML.LABEL,
									css: {
										cursor: 'pointer',
										display: 'block'

									},
									bind: [{
										type: 'click',
										handler: function () {
											var that = this;
											assets.close(that);
										}
									}],
									html: '<svg width="12" height="12" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" x="0px" y="0px" enable-background="new 0 0 9 9" xml:space="preserve"><polyline xmlns="http://www.w3.org/2000/svg" fill="none" stroke="inherit" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="0 0, 4.5 4.6, 0 9, 4.5 4.5, 9 9, 4.5 4.5, 9 0, 4.5 4.5, 0 0"></polyline></svg>'
								})]
							})]
						})]
					})]
				}), createNode({
					tag: JHTML.DIV,
					class: 'Ragasave-UI-popup-container--body-wrapper' + ' ' + (o.bodyClass || ''),
					css: o.css,
					html: [createNode({
						tag: JHTML.DIV,
						class: '',
						css: {
							display: 'table',
							width: '100%'
						},
						html: [o.content ? createNode(o.content) : '']
					})]

				}), createNode({
					tag: JHTML.DIV,
					class: 'Ragasave-UI-popup-container--footer-wrapper' + ' ' + (o.footerClass || ''),
					css: {
						padding: '10px 5px',
						'border-bottom-left-radius': 'inherit',
						'border-bottom-right-radius': 'inherit',
						borderTop: '1px solid rgba(0,0,0,0.08)',
						color: 'rgba(0,0,0,0.50)',
						backgroundColor: '#eee'
					},
					html: [createNode({
						tag: JHTML.DIV,
						class: '',
						css: {
							display: 'table',
							width: '100%'
						},
						html: [createNode({
							tag: JHTML.DIV,
							css: {
								display: 'table-cell',
								width: '50%',
								minWidth: '50%',
								maxWidth: '50%',
								verticalAlign: 'middle'

							},
							html: [createNode({
								tag: JHTML.DIV,
								css: {
									display: 'table',
									textAlign: 'left',
									padding: '0px 10px'
								},
								html: (function () {
									var b = [];
									if (o.addButton && o.addButton.left) {
										Ragasave(o.addButton.left).each(function (e) {
											b.push(createNode({
												tag: JHTML.DIV,
												css: {
													display: 'table-cell',
													padding: "0px 10px 0px 0px",
												},
												bind: [{
													type: 'click',
													handler: function () {
														if (e.action && e.action.toLowerCase() === 'close') {
															assets.close(this);
														}
													}
												}],
												html: [Ragasave.UI.Controls.Button(e)]
											}));
										});
									}
									return b;
								}())
							})]
						}), createNode({
							tag: JHTML.DIV,
							css: {
								display: 'table-cell',
								width: '50%',
								minWidth: '50%',
								maxWidth: '50%',
								verticalAlign: 'middle'
							},

							html: [createNode({
								tag: JHTML.DIV,
								css: {
									display: 'table',
									textAlign: 'left',
									padding: '0px 10px',
									float: 'right'
								},
								html: (function () {
									var b = [];
									if (o.addButton && o.addButton.right) {
										Ragasave(o.addButton.right).each(function (e) {
											b.push(createNode({
												tag: JHTML.DIV,
												css: {
													display: 'table-cell',
													padding: "0px 0px 0px 10px",
												},
												bind: [{
													type: 'click',
													handler: function () {
														if (e.action && e.action.toLowerCase() === 'close') {
															assets.close(this);
														}
													}
												}],
												html: [Ragasave.UI.Controls.Button(e)]
											}));
										});
									}
									return b;
								}())
							})]
						})]
					})]
				})]
			})]
		})]
	});

	assets.close = function (that) {
		var pr = Ragasave(that).parent('[RagasaveUI][RagasaveContainerUI="Popup"]');
		pr.css({
			visibility: 'hidden',
			opacity: 0
		});
		if (o.closeMode && typeof o.closeMode === 'string') {
			switch (o.closeMode.toLowerCase()) {
				case 'remove':
					window.setTimeout(function () {
						pr.remove();
					}, 600);
					break;
				case 'hide':

					break;

				default:
					window.setTimeout(function () {
						pr.remove();
					}, 600);
			}
		} else {
			window.setTimeout(function () {
				pr.remove();
			}, 600);
		};
	};


	return assets._Node;
};

/*
 
 Ragasave Form Controls
 */

(function () {
	var colors = RagasaveColors;
	var c = {
		act_bg__: "r5k5",
		act_dk_bg__: "rzgx",
		act_dk_rel_tc__: "rvaf",
		act_glow__: "rnuz",
		act_inv__: "raqh",
		act_lg_rel_shadow__: "rdjh",
		act_lg_shadow__: "r3mq",
		act_lw_bg__: "rpkn",
		act_no_bg__: "ric9",
		act_no_glow__: "rs0c",
		act_no_rel_shadow__: "rnnw",
		act_no_shadow__: "rynt",
		act_rel_tc__: "rk6f",
		act_sm_rel_shadow__: "ro82",
		act_sm_shadow__: "r32p",
		act_wh_bg__: "rggm",
		bg__: "rzfn",
		dk_bg__: "r4xl",
		dk_rel_tc__: "r73g",
		glow__: "r2xz",
		inv_: "rt00",
		lg_border__: "rset",
		lg_rel_shadow__: "ryli",
		lg_shadow__: "rslg",
		lw_bg__: "rsom",
		no_bg__: "rgu6",
		no_border__: "r4aa",
		no_glow__: "r5bw",
		no_rel_shadow__: "rdcu",
		no_shadow__: "rvcb",
		rcButtonUI: "rg0u",
		rc__transition: "r2ry",
		rc__transition_2s: "r2ry-2s",
		rel_tc__: "rdy5",
		sm_border__: "rb86",
		sm_rel_shadow__: "r6st",
		sm_shadow__: "rkhc",
		wh_bg__: "r1nr",
		pseudo_display_tc: 'rdtcl32',
		transform_rotate_0: 'rad08jg',
		transform_rotate_cw_90: 'rrda-gd6',
		transform_rotate_acw_90: 'r987-ngs',
		transform_rotate_cw_180: 'r09h-fms',
		transform_rotate_acw_180: 'rrl6-esu',
		transform_rotate_cw_360: 'rr00-s0f',
		transform_rotate_acw_360: 'r5uh-drg',
		hov_bg__normal: 'romh-m87'
	};

	var cE = {
		blue: "qt",
		crimson: "ag",
		danger: "hc",
		dark: "pk",
		darkblue: "m5",
		darkgreen: "s4",
		default: "t5",
		green: "e5",
		grey: "dy",
		info: "rs",
		orange: "bv",
		pink: "mc",
		primary: "ir",
		red: "yi",
		success: "cu",
		white: "n1",
		warn: "ij",
		yellow: "yg",
		lightgrey: 'p7',
		lightblue: 'ps'
	};
	Ragasave.style({
		['[RagasaveControlUI]']: {
			backgroundColor: '#fff',
			cursor: 'pointer'
		},
		['[RagasaveControlUI] label']: {
			cursor: 'pointer',
			'user-select': 'none',
			'-o-user-select': 'none',
			'-ms-user-select': 'none',
			'-moz-user-select': 'none',
			'-webkit-user-select': 'none',
		},
		['[RagasaveControlUI] input[type="radio"]:checked + div label']: {
			visibility: 'visible !important'
		},
		['[RagasaveControlUI] input[type="radio"]:not(checked) + div label']: {
			visibility: 'hidden !important'
		},
		['[RagasaveControlUI][disabled]']: {
			backgroundColor: '#E0E0E0 !important',
			color: '#757575 !important',
			cursor: 'default',
			pointerEvents: 'none'
		},
		['button[RagasaveControlUI]']: {
			borderWidth: '0px',
			outline: 'none'
		},
		['[RagasaveUI][RagasaveControlUI][Radio][active] label']: {
			visibility: 'visible !important'
		},
		['[RagasaveUI][RagasaveControlUI][Radio] label']: {
			visibility: 'hidden'
		},
		['button[RagasaveControlUI] [label]']: {
			fontWeight: 'bold'
		},
		['button[RagasaveControlUI] *']: {
			pointerEvents: 'none',
		},
		['.' + c.pseudo_display_tc + ':after,' + '.' + c.pseudo_display_tc + ':before']: {
			display: 'table-cell'
		},
		['.' + c.rc__transition]: {
			'transition': 'all 0.4s',
			'-o-transition': 'all 0.4s',
			'-ms-transition': 'all 0.4s',
			'-webkit-transition': 'all 0.4s',
			'-moz-transition': 'all 0.4s',
		},

		['.' + c.rc__transition_2s]: {
			'transition': 'all 0.2s',
			'-o-transition': 'all 0.2s',
			'-ms-transition': 'all 0.2s',
			'-webkit-transition': 'all 0.2s',
			'-moz-transition': 'all 0.2s',
		},

		['.' + c.act_no_shadow__ + '[RagasaveControlUI]:active,' + '.' + c.no_shadow__ + '[RagasaveControlUI]']: {
			boxShadow: ' rgba(0, 0, 0, 0.43) 0px 0px 0px 0px',
			'-webkit-box-shadow': 'rgba(0, 0, 0, 0.43) 0px 0px 0px 0px',
			'-ms-box-shadow': ' rgba(0, 0, 0, 0.43) 0px 0px 0px 0px',
			'-o-box-shadow': ' rgba(0, 0, 0, 0.43) 0px 0px 0px 0px',
			'-moz-box-shadow': ' rgba(0, 0, 0, 0.43) 0px 0px 0px 0px',
		},

		['.' + c.act_sm_shadow__ + '[RagasaveControlUI]:active,' + '.' + c.sm_shadow__ + '[RagasaveControlUI]']: {
			boxShadow: ' rgba(0, 0, 0, 0.43) 0px 2px 5px 0px',
			'-webkit-box-shadow': 'rgba(0, 0, 0, 0.43) 0px 2px 5px 0px',
			'-ms-box-shadow': ' rgba(0, 0, 0, 0.43) 0px 2px 5px 0px',
			'-o-box-shadow': ' rgba(0, 0, 0, 0.43) 0px 2px 5px 0px',
			'-moz-box-shadow': ' rgba(0, 0, 0, 0.43) 0px 2px 5px 0px',
		},

		['.' + c.act_lg_shadow__ + '[RagasaveControlUI]:active,' + '.' + c.lg_shadow__ + '[RagasaveControlUI]']: {
			boxShadow: 'rgba(0, 0, 0, 0.43) 0px 12px 19px -3px',
			'-webkit-box-shadow': 'rgba(0, 0, 0, 0.43) 0px 12px 19px -3px',
			'-ms-box-shadow': 'rgba(0, 0, 0, 0.43) 0px 12px 19px -3px',
			'-o-box-shadow': 'rgba(0, 0, 0, 0.43) 0px 12px 19px -3px',
			'-moz-box-shadow': 'rgba(0, 0, 0, 0.43) 0px 12px 19px -3px',
		},
		['.' + c.transform_rotate_0]: {
			transform: 'rotate(-90deg)',
			'-o-transform': 'rotate(0deg)',
			'-moz-transform': 'rotate(0deg)',
			'-ms-transform': 'rotate(0deg)',
			'-webkit-transform': 'rotate(0deg)'
		},
		['.' + c.transform_rotate_acw_180]: {
			transform: 'rotate(-180deg)',
			'-o-transform': 'rotate(-180deg)',
			'-moz-transform': 'rotate(-180deg)',
			'-ms-transform': 'rotate(-180deg)',
			'-webkit-transform': 'rotate(-180deg)'
		},
		['.' + c.transform_rotate_cw_180]: {
			transform: 'rotate(180deg)',
			'-o-transform': 'rotate(180deg)',
			'-moz-transform': 'rotate(180deg)',
			'-ms-transform': 'rotate(180deg)',
			'-webkit-transform': 'rotate(180deg)'
		},
		['.' + c.transform_rotate_acw_90]: {
			transform: 'rotate(-90deg)',
			'-o-transform': 'rotate(-90deg)',
			'-moz-transform': 'rotate(-90deg)',
			'-ms-transform': 'rotate(-90deg)',
			'-webkit-transform': 'rotate(-90deg)'
		},
		['.' + c.transform_rotate_cw_90]: {
			transform: 'rotate(90deg)',
			'-o-transform': 'rotate(90deg)',
			'-moz-transform': 'rotate(90deg)',
			'-ms-transform': 'rotate(90deg)',
			'-webkit-transform': 'rotate(90deg)'
		},
		['.' + c.transform_rotate_acw_360]: {
			transform: 'rotate(-360deg)',
			'-o-transform': 'rotate(-360deg)',
			'-moz-transform': 'rotate(-360deg)',
			'-ms-transform': 'rotate(-360deg)',
			'-webkit-transform': 'rotate(-360deg)'
		},
		['.' + c.transform_rotate_cw_360]: {
			transform: 'rotate(360deg)',
			'-o-transform': 'rotate(360deg)',
			'-moz-transform': 'rotate(360deg)',
			'-ms-transform': 'rotate(360deg)',
			'-webkit-transform': 'rotate(360deg)'
		},
		['.' + c.hov_bg__normal + ':hover']: {
			backgroundColor: 'rgba(195, 195, 195, 0.19)',
			color: '#757575'
		}

	});
	Ragasave(colors).each(function (p) {
		var bg = colors[p].bg;
		var tc = colors[p].text;
		var ac = colors[p].active;
		var sh = colors[p].sh;
		Ragasave.style({

			['.' + c.act_bg__ + cE[p] + '[RagasaveControlUI]:active,' + '.' + c.bg__ + cE[p] + '[RagasaveControlUI],' + '.' + cE[p] + '[RagasaveControlUI]']: {
				backgroundColor: bg,
				color: tc,
				fill: tc,
				stroke: tc
			},
			['.' + c.act_dk_bg__ + cE[p] + '[RagasaveControlUI]:active,' + '.' + c.dk_bg__ + cE[p] + '[RagasaveControlUI]']: {
				backgroundColor: ac,
				color: tc,
				fill: tc,
				stroke: tc
			},
			['.' + c.act_no_bg__ + cE[p] + '[RagasaveControlUI]:active,' + '.' + c.no_bg__ + cE[p] + '[RagasaveControlUI]']: {
				backgroundColor: 'transparent',
				color: bg,
				fill: bg,
				stroke: bg
			},
			['.' + c.act_lw_bg__ + cE[p] + '[RagasaveControlUI]:active,' + '.' + c.lw_bg__ + cE[p] + '[RagasaveControlUI]']: {
				backgroundColor: sh,
				color: tc,
				fill: tc,
				stroke: tc
			},
			['.' + c.act_rel_tc__ + cE[p] + '[RagasaveControlUI]:active,' + '.' + c.rel_tc__ + cE[p] + '[RagasaveControlUI]']: {
				color: bg,
				fill: bg,
				stroke: bg
			},
			['.' + c.act_dk_rel_tc__ + cE[p] + '[RagasaveControlUI]:active,' + '.' + c.dk_rel_tc__ + cE[p] + '[RagasaveControlUI]']: {
				color: ac,
				fill: ac,
				stroke: ac
			},
			['.' + c.act_no_rel_shadow__ + cE[p] + '[RagasaveControlUI]:active,' + '.' + c.no_rel_shadow__ + cE[p] + '[RagasaveControlUI]']: {
				boxShadow: ac + ' 0px 0px 0px 0px',
				'-webkit-box-shadow': ac + ' 0px 0px 0px 0px',
				'-ms-box-shadow': ac + ' 0px 0px 0px 0px',
				'-o-box-shadow': ac + ' 0px 0px 0px 0px',
				'-moz-box-shadow': ac + ' 0px 0px 0px 0px',
			},
			['.' + c.act_sm_rel_shadow__ + cE[p] + '[RagasaveControlUI]:active,' + '.' + c.sm_rel_shadow__ + cE[p] + '[RagasaveControlUI]']: {
				boxShadow: ac + ' 0px 2px 5px 0px',
				'-webkit-box-shadow': ac + ' 0px 2px 5px 0px',
				'-ms-box-shadow': ac + ' 0px 2px 5px 0px',
				'-o-box-shadow': ac + ' 0px 2px 5px 0px',
				'-moz-box-shadow': ac + '0px 2px 5px 0px',
			},
			['.' + c.act_lg_rel_shadow__ + cE[p] + '[RagasaveControlUI]:active,' + '.' + c.lg_rel_shadow__ + cE[p] + '[RagasaveControlUI]']: {
				boxShadow: ac + '  0px 12px 19px -3px',
				'-webkit-box-shadow': ac + '  0px 12px 19px -3px',
				'-ms-box-shadow': ac + '  0px 12px 19px -3px',
				'-o-box-shadow': ac + '  0px 12px 19px -3px',
				'-moz-box-shadow': ac + '  0px 12px 19px -3px',
			},
			['.' + c.inv_ + cE[p] + '[RagasaveControlUI],' + '.' + c.act_inv__ + cE[p] + '[RagasaveControlUI]:active']: {
				backgroundColor: tc,
				color: bg,
				file: bg
			},
			['.' + c.wh_bg__ + cE[p] + '[RagasaveControlUI],' + '.' + c.act_wh_bg__ + cE[p] + '[RagasaveControlUI]:active']: {
				backgroundColor: "#fff",
				color: ac,
				fill: ac,
				stroke: ac

			},
			['.' + c.act_no_glow__ + cE[p] + '[RagasaveControlUI]:active' + ',.no_glow__' + cE[p] + '[RagasaveControlUI]']: {
				boxShadow: '0px 0px 0px 0px ' + sh,
				'-webkit-box-shadow': '0px 0px 0px 0px ' + sh,
				'-ms-box-shadow': '0px 0px 0px 0px ' + sh,
				'-o-box-shadow': '0px 0px 0px 0px ' + sh,
				'-moz-box-shadow': '0px 0px 0px 0px ' + sh,
			},
			['.' + c.act_glow__ + cE[p] + '[RagasaveControlUI]:active,' + '.' + c.glow__ + cE[p] + '[RagasaveControlUI]']: {
				boxShadow: '0px 0px 0px 4px ' + sh,
				'-webkit-box-shadow': '0px 0px 0px 4px ' + sh,
				'-ms-box-shadow': '0px 0px 0px 4px ' + sh,
				'-o-box-shadow': '0px 0px 0px 4px ' + sh,
				'-moz-box-shadow': '0px 0px 0px 4px ' + sh,
			},
			['.' + c.no_border__ + cE[p] + '[RagasaveControlUI]']: {
				border: '0px solid ' + ac
			},
			['.' + c.sm_border__ + cE[p] + '[RagasaveControlUI]']: {
				border: '1px solid ' + ac
			},
			['.' + c.lg_border__ + cE[p] + '[RagasaveUI]']: {
				border: '2px solid ' + ac
			},

		});
	});


	Ragasave.UI.Controls = {

		Button: function (o) {
			o = o || {};
			if (o.size) {
				o.size = Number(o.size)
			}
			const fn = {};
			o.color = o.color || 'primary';
			var tempClass = 'rc-' + new Date().getMilliseconds() + '-' + Math.random().toString(36).substring(2);
			o.class = o.class || '';
			fn._Node = {
				tag: JHTML.BUTTON,
				class: '',
				attr: o.attr || {},
				css: {
					textAlign: 'center',
				},
				type: o.type || 'button',
				name: o.name || '',
				id: o.id || '',
				bind: o.bind || [],
				html: [createNode({
					tag: JHTML.DIV,
					css: {
						display: 'table',
						height: '100%',
						margin: 'auto'
					},
					html: [createNode({
						tag: JHTML.DIV,
						attr: {
							icon: ''
						},
						class: c.pseudo_display_tc + ' ' + (o.icon || ''),
						css: {
							margin: 'auto',
							display: 'table-cell',
							verticalAlign: 'middle',
						},
						bind: [{
							type: 'click',
							handler: function (e) {
								e.stopPropagation();
								this.parentNode.click();
							},
						}],
						html: [(o.label ? createNode({
							tag: JHTML.LABEL,
							attr: {
								label: '',
							},
							css: {
								fontSize: 'inherit',
								padding: '0px 7px',
								display: 'table-cell',
								margin: 'auto',
								textAlign: 'left',
								'vertical-align': 'bottom'
							},
							bind: [{
								type: 'click',
								handler: function (e) {
									e.stopPropagation();
									this.parentNode.click();
								}
							}],
							text: o.label,

						}) : '')]
					})]
				})]
			};
			fn.rect_ = function () {
				fn._Node.css.fontSize = o.size / 2.5 || 13;
				fn._Node.css.borderRadius = '3px';

				fn._Node.css.paddingTop = o.size / 4 || 5;
				fn._Node.css.paddingLeft = o.size / 2 || 10;
				fn._Node.css.paddingRight = o.size / 2 || 10;
				fn._Node.css.paddingBottom = o.size / 4 || 5;

				/*
				 fn._Node.css.width = o.size || 40;
				 
				 //fn._Node.css.padding = '0 10px';
				 //fn._Node.css.height = o.size || 33;
				 */
			};

			fn.round_ = function () {
				fn._Node.css.borderRadius = '50%';
				fn._Node.css.width = o.size || 40;
				fn._Node.css.height = o.size || 40;
				fn._Node.css.fontSize = o.size / 2.5 || 14;
			};
			fn.Custom_ = function () {
				fn._Node.class = ' ' + c.dim_bg__ + cE[o.color] + ' ' + c.semi_shadow__;
				fn._Node.css.fontSize = o.size / 2.5 || 13;
				fn._Node.css.borderRadius = '4px';
				fn._Node.css.paddingTop = o.size / 4 || 5;
				fn._Node.css.paddingLeft = o.size / 2 || 10;
				fn._Node.css.paddingRight = o.size / 2 || 10;
				fn._Node.css.paddingBottom = o.size / 4 || 5;
			};
			fn.bind = function () {
				fn._Node.ready = function (e) {
					o.ready && typeof o.ready === 'function' ? o.ready(e) : null;
					Ragasave(e).rippleEffect();
				};
			};

			function init() {
				if (o.view && typeof o.view === 'string') {
					switch (o.view.toLowerCase()) {
						case 'rect':
							fn.rect_();
							break;
						case 'oval':
							fn.round_();
							break;
						case 'round':
							fn.round_();
							break;
						case 'custome':
							fn.Custom_();
							break;
						default:
							fn.rect_();

					}
				} else {
					fn.rect_();
				}

				fn.bind();
				if (o.style) {
					var style = o.style;
					switch (style) {
						case 'shaded':
							fn._Node.class += ' ' + c.rc__transition + ' ' + c.act_dk_bg__ + cE[o.color] + ' ' + c.act_lg_rel_shadow__ + cE[o.color] + ' ' + c.rel_tc__ + cE[o.color];
							break;
						case 'glass':
							fn._Node.class += ' ' + c.rc__transition + ' ' + c.act_bg__ + cE[o.color] + ' ' + c.rel_tc__ + cE[o.color];
							break;
						case 'soft':
							fn._Node.class += ' ' + c.act_bg__ + cE[o.color] + ' ' + c.rc__transition + ' ' + c.sm_border__ + cE[o.color] + ' ' + c.dk_rel_tc__ + cE[o.color];
							break;
						case 'pull':
							fn._Node.class += ' ' + c.act_bg__ + cE[o.color] + ' ' + c.sm_shadow__ + ' ' + c.act_lg_shadow__ + ' ' + c.rc__transition + ' ' + c.bg__ + cE[o.color];
							break;
						case 'push':
							fn._Node.class += ' ' + c.act_bg__ + cE[o.color] + ' ' + c.lg_shadow__ + ' ' + c.act_sm_shadow__ + ' ' + c.rc__transition + ' ' + c.bg__ + cE[o.color];
							break;
						case 'nobg':
							fn._Node.class += ' ' + c.act_lw_bg__ + cE[o.color] + ' ' + c.rc__transition + ' ' + c.act_dk_rel_tc__ + cE[o.color];
							break;
						case 'glow':
							fn._Node.class += ' ' + c.act_bg__ + cE[o.color] + ' ' + c.sm_shadow__ + ' ' + c.act_glow__ + cE[o.color] + ' ' + c.rc__transition + ' ' + c.bg__ + cE[o.color] + ' ' + c.sm_border__ + cE[o.color];
							break;
						case 'hard':
							fn._Node.class += ' ' + c.act_bg__ + cE[o.color] + ' ' + c.lg_border__ + cE[o.color] + ' ' + c.rc__transition + ' ' + c.dk_rel_tc__ + cE[o.color];
							break;
						default:
							fn._Node.class += ' ' + c.act_bg__ + cE[o.color] + ' ' + c.rc__transition + ' ' + c.bg__ + cE[o.color]
							if (!o.view || o.view === 'rect') {
								fn._Node.class += ' ' + c.sm_shadow__;
							}
					};

				} else {
					fn._Node.class += ' ' + c.act_bg__ + cE[o.color] + ' ' + c.rc__transition + ' ' + c.bg__ + cE[o.color]
					if (!o.view || o.view === 'rect') {
						fn._Node.class += ' ' + c.sm_shadow__;
					}
				}
				if (o.css) {
					Ragasave(o.css).each(function (p, v) {
						fn._Node.css[p] = v
					});
				};
				if (o.shadow && typeof o.shadow === 'boolean') {
					fn._Node.class += ' ' + c.sm_shadow__;
				};
				if (o.class && typeof o.class === 'string') {
					fn._Node.class += ' ' + o.class;
				};
				if (o.attr && typeof o.attr === 'object') {
					fn._Node.attr = o.attr;
				};
				if (o.disabled) {
					fn._Node.attr.disabled = '';
				}

				fn._Node.attr.rcButtonUI = '';
				fn._Node.attr.RagasaveUI = '';
				fn._Node.attr.RagasaveControlUI = '';
			}
			init();
			return createNode(fn._Node);
		},
		CheckBox: function (o) {
			o = o || {};
			o.bind = o.bind || [];
			IAttr = o.IAttr || {};
			IAttr.hidden = '';
			var proto = o.proto || {};
			if (!o.view) {
				o.view = 'rect'
			}
			if (o.size) {
				o.size = Number(o.size)
			}
			var checkIcon = function (s) {
				if (o.view === 'rect') {
					s = s / 2 || 11;
				} else {
					s = s / 2.2 || 10;
				};
				return Ragasave.createNode('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="' + s + '" height="' + s + '" viewBox="0 0 442.533 442.533" style="    fill: inherit;enable-background:new 0 0 442.533 442.533;    background: none;border: none;" xml:space="preserve"><g><path d="M434.539,98.499l-38.828-38.828c-5.324-5.328-11.799-7.993-19.41-7.993c-7.618,0-14.093,2.665-19.417,7.993L169.59,247.248   l-83.939-84.225c-5.33-5.33-11.801-7.992-19.412-7.992c-7.616,0-14.087,2.662-19.417,7.992L7.994,201.852   C2.664,207.181,0,213.654,0,221.269c0,7.609,2.664,14.088,7.994,19.416l103.351,103.349l38.831,38.828   c5.327,5.332,11.8,7.994,19.414,7.994c7.611,0,14.084-2.669,19.414-7.994l38.83-38.828L434.539,137.33   c5.325-5.33,7.994-11.802,7.994-19.417C442.537,110.302,439.864,103.829,434.539,98.499z"/></g></svg>');
			};

			if (o.size) {
				if (o.style === 'hard') {
					var bord = 2;
				} else if (o.style === 'soft') {
					var bord = 1;
				} else {
					var bord = 0;
				}
				if (o.view === 'rect') {
					var cen = o.size / 2 - o.size / 4 - bord;
				} else {
					var cen = o.size / 2.2 - o.size / 4.4 - bord;

				}
			} else {
				if (o.style === 'hard') {
					var bord = 2;
				} else if (o.style === 'soft') {
					var bord = 1;
				} else {
					var bord = 0;
				}
				if (o.view === 'rect') {
					var cen = 11 - 5.5 - bord;
				} else {
					var cen = 10 - 5 - bord;
				}
			}
			const fn = {};
			o.color = o.color || 'primary';
			o.class = o.class || '';
			if (o.checked && o.checked === true) {
				proto.defaultChecked = true;
			}
			var Ibind = [{
				type: 'change',
				handler: function () {
					var i = this;
					var elem = Ragasave(i).parent();
					var c = Ragasave(i).parent().find('label');

					if (!i.checked) {
						c.css({
							visibility: 'hidden'
						});
						elem.delAttr('active');
					} else {
						c.css({
							visibility: 'visible'
						});
						elem.attr({
							'active': ''
						});
					}
				}
			}];

			o.bind = o.bind.concat(Ibind);
			fn._Node = {
				tag: JHTML.DIV,
				class: '',
				attr: {},
				css: {
					textAlign: 'center',
				},
				bind: [{
					type: 'click',
					handler: function () {
						var i = Ragasave(this).find('input')[0];
						i.click();
					}
				}],
				html: [createNode({
					tag: JHTML.INPUT,
					type: 'checkbox',
					name: o.name || '',
					css: {
						display: 'none'
					},
					value: o.value || '',
					id: o.id || '',
					proto: proto || {},
					attr: IAttr,
					bind: o.bind,
					ready: function (e) {

						o.ready && typeof o.ready === 'function' ? o.ready(e) : null;

					}

				}), createNode({
					tag: JHTML.DIV,
					css: {
						display: 'table',
						margin: 'auto',
						height: '100%',
						padding: cen + 'px 0px',
					},
					html: [createNode({
						tag: JHTML.LABEL,
						css: {
							display: 'table-cell',
							verticalAlign: 'middle',
							visibility: (o.checked && typeof o.checked === 'boolean' ? 'visible' : 'hidden')
						},
						html: [checkIcon(o.size)]
					})]
				})]
			};
			fn.rect_ = function () {
				fn._Node.css.borderRadius = '4px';
				fn._Node.css.width = o.size || 20;
				fn._Node.css.height = o.size || 20;
			};
			fn.round_ = function () {
				fn._Node.css.borderRadius = '50%';
				fn._Node.css.width = o.size || 20;
				fn._Node.css.height = o.size || 20;
			};
			fn.Custom_ = function () {
				fn._Node.class += ' ' + c.dim_bg__ + cE[o.color] + ' ' + c.semi_shadow__;
				fn._Node.css.fontSize = o.size / 2.8 || 12;
				fn._Node.css.borderRadius = '4px';
				fn._Node.css.paddingTop = o.size / 4 || 5;
				fn._Node.css.paddingLeft = o.size / 2 || 10;
				fn._Node.css.paddingRight = o.size / 2 || 10;
				fn._Node.css.paddingBottom = o.size / 4 || 5;
			};
			fn.bind = function () {
				fn._Node.ready = function (e) {

					Ragasave(e).rippleEffect();
				};
			};

			function init() {
				if (o.view && typeof o.view === 'string') {
					switch (o.view.toLowerCase()) {
						case 'rect':
							fn.rect_();
							break;
						case 'oval':
							fn.round_();
							break;
						case 'round':
							fn.round_();
							break;
						case 'custome':
							fn.Custom_();
							break;
						default:
							fn.rect_();

					}
				} else {
					fn.rect_();
				}

				fn.bind();
				if (o.style) {
					var style = o.style;
					switch (style) {
						case 'shaded':
							fn._Node.class += ' ' + c.dk_bg__ + cE[o.color] + ' ' + c.rc__transition + ' ' + c.act_dk_bg__ + cE[o.color] + ' ' + c.glow__ + cE[o.color];
							break;
						case 'soft':
							fn._Node.class += c.sm_border__ + cE[o.color] + ' ' + c.dk_rel_tc__ + cE[o.color];
							break;
						case 'pull':
							fn._Node.class += ' ' + c.act_bg__ + cE[o.color] + ' ' + c.sm_shadow__ + ' ' + c.act_lg_shadow__ + ' ' + c.rc__transition + ' ' + c.bg__ + cE[o.color];
							break;
						case 'push':
							fn._Node.class += ' ' + c.act_bg__ + cE[o.color] + ' ' + c.lg_shadow__ + ' ' + c.act_sm_shadow__ + ' ' + c.rc__transition + ' ' + c.bg__ + cE[o.color];
							break;
						case 'glow':
							fn._Node.class += ' ' + c.act_bg__ + cE[o.color] + ' ' + c.sm_shadow__ + ' ' + c.act_glow__ + cE[o.color] + ' ' + c.rc__transition + ' ' + c.bg__ + cE[o.color] + ' ' + c.sm_border__ + cE[o.color];
							break;
						case 'hard':
							fn._Node.class += c.lg_border__ + cE[o.color] + ' ' + c.dk_rel_tc__ + cE[o.color];
							break;
						default:
							fn._Node.class += ' ' + c.act_bg__ + cE[o.color] + ' ' + c.rc__transition + ' ' + c.bg__ + cE[o.color]
							if (!o.view || o.view === 'rect') {
								fn._Node.class += ' ' + c.sm_shadow__;
							}
					};

				} else {
					fn._Node.class += ' ' + c.act_bg__ + cE[o.color] + ' ' + c.rc__transition + ' ' + c.bg__ + cE[o.color]
					if (!o.view || o.view === 'rect') {
						fn._Node.class += ' ' + c.sm_shadow__;
					}
				}
				if (o.css) {
					Ragasave(o.css).each(function (p, v) {
						fn._Node.css[p] = v
					});
				};
				if (o.shadow && typeof o.shadow === 'boolean') {
					fn._Node.class += ' ' + c.sm_shadow__;
				};
				if (o.class && typeof o.class === 'string') {
					fn._Node.class += ' ' + o.class;
				};
				if (o.attr && typeof o.attr === 'object') {
					fn._Node.attr = o.attr;
				};

				if (o.checked && o.checked === true) {
					fn._Node.attr.active = '';
				}
				if (o.disabled && o.disabled === true) {
					fn._Node.attr.disabled = '';
				}
				fn._Node.attr.CheckBox = '';
				fn._Node.attr.RagasaveUI = '';
				fn._Node.attr.RagasaveControlUI = '';
			}
			init();
			return createNode(fn._Node);
		},

		Radio: function (o) {
			o = o || {};
			o.bind = o.bind || [];
			var proto = o.proto || {};
			if (!o.view) {
				o.view = 'rect'
			}
			if (o.size) {
				o.size = Number(o.size)
			}
			var checkIcon = function (s) {
				if (o.view === 'rect') {
					s = s / 2 || 11;
				} else {
					s = s / 2.2 || 10;
				};
				return Ragasave.createNode('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" width="' + s + '" height="' + s + '" version="1.1" style="shape-rendering:geometricPrecision;text-rendering:geometricPrecision;    fill: inherit;image-rendering:optimizeQuality;fill-rule:evenodd;clip-rule:evenodd;" viewBox="0 0 423 423"><g><circle cx="211" cy="212" r="190"/></g></svg>');
			};

			if (o.size) {
				if (o.style === 'hard') {
					var bord = 2;
				} else if (o.style === 'soft') {
					var bord = 1;
				} else {
					var bord = 0;
				}
				if (o.view === 'rect') {
					var cen = o.size / 2 - o.size / 4 - bord;
				} else {
					var cen = o.size / 2.2 - o.size / 4.4 - bord;

				}
			} else {
				if (o.style === 'hard') {
					var bord = 2;
				} else if (o.style === 'soft') {
					var bord = 1;
				} else {
					var bord = 0;
				}
				if (o.view === 'rect') {
					var cen = 11 - 5.5 - bord;
				} else {
					var cen = 10 - 5 - bord;
				}
			}
			const fn = {};
			o.color = o.color || 'primary';
			o.class = o.class || '';
			if (o.checked && o.checked === true) {
				proto.defaultChecked = true;
			}
			var Ibind = [{
				type: 'change',
				handler: function () {
					var i = this;
					var elem = Ragasave(i).parent();
					if (i.hasAttribute('name')) {
						var n = i.getAttribute('name');
						Ragasave('[RagasaveUI][RagasaveControlUI][Radio] input[name="' + n + '"]').each(function (elem) {
							elem.parentNode.removeAttribute('active');
						});
					}
					if (!i.checked) {
						elem.delAttr('active');
					} else {
						elem.attr({
							'active': ''
						});
					}
				}
			}];

			o.bind = o.bind.concat(Ibind);
			fn._Node = {
				tag: JHTML.DIV,
				class: '',
				attr: {},
				css: {
					textAlign: 'center',
				},
				bind: [{
					type: 'click',
					handler: function () {
						var i = Ragasave(this).find('input')[0];
						i.click();
					}
				}],
				html: [createNode({
					tag: JHTML.INPUT,
					type: 'radio',
					name: o.name || '',
					css: {
						display: 'none'
					},
					value: o.value || '',
					id: o.id || '',
					proto: proto || {},
					attr: {
						hidden: '',
					},
					bind: o.bind,
					ready: function (e) {

						o.ready && typeof o.ready === 'function' ? o.ready(e) : null;

					}

				}), createNode({
					tag: JHTML.DIV,
					css: {
						display: 'table',
						margin: 'auto',
						height: '100%',
						padding: cen + 'px 0px',
					},
					html: [createNode({
						tag: JHTML.LABEL,
						css: {
							display: 'table-cell',
							verticalAlign: 'middle'
						},
						html: [checkIcon(o.size)]
					})]
				})]
			};
			fn.rect_ = function () {
				fn._Node.css.borderRadius = '4px';
				fn._Node.css.width = o.size || 20;
				fn._Node.css.height = o.size || 20;
			};
			fn.round_ = function () {
				fn._Node.css.borderRadius = '50%';
				fn._Node.css.width = o.size || 20;
				fn._Node.css.height = o.size || 20;
			};
			fn.Custom_ = function () {
				fn._Node.class += ' ' + c.dim_bg__ + cE[o.color] + ' ' + c.semi_shadow__;
				fn._Node.css.fontSize = o.size / 2.8 || 12;
				fn._Node.css.borderRadius = '4px';
				fn._Node.css.paddingTop = o.size / 4 || 5;
				fn._Node.css.paddingLeft = o.size / 2 || 10;
				fn._Node.css.paddingRight = o.size / 2 || 10;
				fn._Node.css.paddingBottom = o.size / 4 || 5;
			};
			fn.bind = function () {
				fn._Node.ready = function (e) {

					Ragasave(e).rippleEffect();
				};
			};

			function init() {
				if (o.view && typeof o.view === 'string') {
					switch (o.view.toLowerCase()) {
						case 'rect':
							fn.rect_();
							break;
						case 'oval':
							fn.round_();
							break;
						case 'round':
							fn.round_();
							break;
						case 'custome':
							fn.Custom_();
							break;
						default:
							fn.rect_();

					}
				} else {
					fn.rect_();
				}

				fn.bind();
				if (o.style) {
					var style = o.style;
					switch (style) {
						case 'shaded':
							fn._Node.class += ' ' + c.dk_bg__ + cE[o.color] + ' ' + c.rc__transition + ' ' + c.act_dk_bg__ + cE[o.color] + ' ' + c.glow__ + cE[o.color];
							break;
						case 'soft':
							fn._Node.class += c.sm_border__ + cE[o.color] + ' ' + c.dk_rel_tc__ + cE[o.color];
							break;
						case 'pull':
							fn._Node.class += ' ' + c.act_bg__ + cE[o.color] + ' ' + c.sm_shadow__ + ' ' + c.act_lg_shadow__ + ' ' + c.rc__transition + ' ' + c.bg__ + cE[o.color];
							break;
						case 'push':
							fn._Node.class += ' ' + c.act_bg__ + cE[o.color] + ' ' + c.lg_shadow__ + ' ' + c.act_sm_shadow__ + ' ' + c.rc__transition + ' ' + c.bg__ + cE[o.color];
							break;
						case 'glow':
							fn._Node.class += ' ' + c.act_bg__ + cE[o.color] + ' ' + c.sm_shadow__ + ' ' + c.act_glow__ + cE[o.color] + ' ' + c.rc__transition + ' ' + c.bg__ + cE[o.color] + ' ' + c.sm_border__ + cE[o.color];
							break;
						case 'hard':
							fn._Node.class += c.lg_border__ + cE[o.color] + ' ' + c.dk_rel_tc__ + cE[o.color];
							break;
						default:
							fn._Node.class += ' ' + c.act_bg__ + cE[o.color] + ' ' + c.rc__transition + ' ' + c.bg__ + cE[o.color]
							if (!o.view || o.view === 'rect') {
								fn._Node.class += ' ' + c.sm_shadow__;
							}
					};

				} else {
					fn._Node.class += ' ' + c.act_bg__ + cE[o.color] + ' ' + c.rc__transition + ' ' + c.bg__ + cE[o.color]
					if (!o.view || o.view === 'rect') {
						fn._Node.class += ' ' + c.sm_shadow__;
					}
				}
				if (o.css) {
					Ragasave(o.css).each(function (p, v) {
						fn._Node.css[p] = v
					});
				};
				if (o.shadow && typeof o.shadow === 'boolean') {
					fn._Node.class += ' ' + c.sm_shadow__;
				};
				if (o.class && typeof o.class === 'string') {
					fn._Node.class += ' ' + o.class;
				};
				if (o.attr && typeof o.attr === 'object') {
					fn._Node.attr = o.attr;
				};


				fn._Node.attr.Radio = '';
				fn._Node.attr.RagasaveUI = '';
				fn._Node.attr.RagasaveControlUI = '';
			}
			init();
			return createNode(fn._Node);
		},
		SelectBox: function (o) {
			o = o || {};
			o.bind = o.bind || [];
			var icon = function (s) {
				s = o.fontSize / 1.5 || 7;
				return Ragasave.createNode('<label class="' + c.transform_rotate_0 + ' ' + c.rc__transition + '" style="width : ' + s + 'px;height:' + s + 'px;display : block;    margin: 0px auto;"><svg width="' + s + '" height="' + s + '" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" x="0px" y="0px" enable-background="new 0 0 10 10" xml:space="preserve"><polyline xmlns="http://www.w3.org/2000/svg" fill="none" stroke="inherit" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="0,2 5,8 10,2"></polyline></svg></label>');
			};

			var defaultValue = 0;
			if (o.css && o.css.color) {
				o.css.stroke = o.css.color;
			}
			/*[List Height Top]
			 * 
			 * @returns {Number}
			 */
			var listHT = function () {
				if (o.height && o.option) {
					return (o.option.length * (o.height + 5));
				} else if (o.option) {
					return (o.option.length * (20 + 5));
				} else {
					return 20
				}
			};

			var Ibind = [{
				type: 'focus',
				handler: function (e) {}
			}];

			o.bind = o.bind.concat(Ibind);
			const fn = {};
			o.color = o.color || 'primary';
			o.class = o.class || '';
			fn._Node = {
				tag: JHTML.DIV,
				class: '',
				attr: {},
				css: {},
				bind: [{
					type: 'click',
					handler: function () {
						var a = ['visible', '', 'hidden'];
						var sb = Ragasave(this);
						var lb = sb.find('[select-box-listbox]');
						var l = sb.find('[sb-label]');
						var i = sb.find('[sb-icon] label');
						var ib = sb.find('input');
						Ragasave('[RagasaveUI][SelectBox][RagasaveControlUI]').each(function (sbe) {
							if (sbe === sb[0]) {
								return
							}
							var sle = Ragasave(sbe).find('[select-box-listbox]');
							sle.css({
								visibility: 'hidden',
								opacity: 0
							});
							Ragasave(sbe).find('[sb-icon] label').exClass(c.transform_rotate_cw_180, c.transform_rotate_0);
						});

						if (lb[0] && (!lb[0].style.visibility || lb[0].style.visibility === 'visible')) {
							lb.css({
								visibility: 'hidden',
								opacity: 0
							});
							i.exClass(c.transform_rotate_cw_180, c.transform_rotate_0);
						} else {
							lb.css({
								visibility: 'visible',
								opacity: 1
							});
							i.exClass(c.transform_rotate_0, c.transform_rotate_cw_180);

						}
					}
				}],
				html: [createNode({
					tag: JHTML.DIV,
					css: {
						display: 'table',
						margin: 'auto',
						height: '100%',
						width: '100%',
						position: 'relative'
					},
					html: [createNode({
						tag: JHTML.INPUT,
						type: 'text',
						name: o.name || '',
						css: {
							opacity: 0,
							border: 'none',
							position: 'absolute',
							height: 0,
							width: 0
						},
						id: o.id || '',
						attr: {},
						bind: o.bind || [],
						ready: function (e) {

						}

					}), createNode({
						tag: JHTML.DIV,
						css: {
							display: 'table-cell',
							verticalAlign: " middle",
							minWidth: '100%',
							maxWidth: '100%',
							width: '100%',
							padding: '0px 0px 0px ' + (o.icon ? 0 : 10) + 'px'

						},
						html: [(o.icon ? createNode({
							tag: JHTML.LABEL,
							class: o.icon,
							css: {
								display: 'table-cell',
								padding: 0,
								textAlign: 'center',
								fontSize: 11,
								minWidth: 30,
								minWidth: 30,
								position: 'relative',
								top: 1.5,
								width: 30,
								verticalAlign: 'middle'
							}
						}) : ''), createNode({
							tag: JHTML.LABEL,
							attr: {
								'sb-label': '' /* Select Box Value / Label*/
							},
							text: '',
							css: {
								textOverflow: 'ellipsis',
								whiteSpace: 'nowrap',
								width: 'auto',
								verticalAlign: 'middle',
								display: 'table-cell',
								overflow: 'hidden',
								minWidth: o.width || '100%',
								maxWidth: o.width || '100%',
								width: o.width || '100%'
							}
						})]
					}), createNode({
						tag: JHTML.DIV,
						class: '',
						attr: {
							'sb-icon': '' /*Select box Icon*/
						},
						css: {
							display: 'table-cell',
							verticalAlign: 'middle',
							minWidth: 30,
							maxWidth: 30,
							width: 30
						},
						html: [icon()]
					}), createNode({
						tag: JHTML.DIV,
						class: 'xxsd-nbr ' + c.rc__transition,
						attr: {
							'select-box-listBox': ''
						},
						css: {
							visibility: 'hidden',
							opacity: 0,
							position: 'absolute',
							top: (o.height || 18) + 1,
							height: (listHT() + 18),
							backgroundColor: '#fff',
							right: 0,
							display: 'block',
							width: 'auto',
							minWidth: '100%',
							maxWidth: '100%',
							'whiteSpace': 'nowrap',
							zIndex: '99999999',
							borderTop: '1px solid #777',
							borderTopLeftRadius: 0,
							borderTopRightRadius: '0px'
						},
						html: [createNode({
							tag: JHTML.DIV,
							css: {
								position: 'relative',
								width: '100%',
								display: 'none' /*list box navigator  */
							},
							html: [createNode({
								tag: JHTML.SPAN,
								css: {
									position: 'absolute',
									right: '7.5px',
									top: -6,
								},
								html: '<svg width="15" height="15"  style="filter: drop-shadow(0px -2px 1px #ccc);-webkit-filter: drop-shadow(0px -2px 1px #ccc);-moz-filter: drop-shadow(0px -2px 1px #ccc);-o-filter: drop-shadow(0px -2px 1px #ccc);ms-filter: drop-shadow(0px -2px 1px #ccc);" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" x="0px" y="0px" enable-background="new 0 0 10 10" xml:space="preserve"><polyline xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="none" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="0 5,5 0,10 5"></polyline></svg>'
							})]
						}), createNode({
							tag: JHTML.DIV,
							css: {
								padding: '8px 0px'
							},
							html: (function () {
								var _NodeList = [];
								if (o.option && objType(o.option) === 'array') {
									Ragasave(o.option).each(function (e, i) {
										if (e.default && e.default === true) {
											defaultValue = i;
										}
										_NodeList.push(createNode({
											tag: JHTML.DIV,
											class: c.act_bg__ + cE[o.color] + ' ' + c.hov_bg__normal,
											css: {
												padding: '0px 12px',
												height: (o.height || 20) + 5
											},
											attr: {
												'select-box-list': '',
												RagasaveControlUI: '',
												value: e.value || ''
											},
											bind: [{
												type: 'click',
												handler: function () {
													var sl = Ragasave(this);
													var sb = sl.parent(4);
													var l = sb.find('[sb-label]');
													var ib = sb.find('input');
													if (ib.val() === sl.attr('value')) {
														return false
													}
													l[0].innerText = sl.attr('value');
													ib[0].value = sl.attr('value');
													if (o.change) {
														o.change(ib[0]);
													}
												}
											}],
											html: [createNode({
												tag: JHTML.DIV,
												css: {
													display: 'table',
													width: '100%',
													height: '100%'
												},
												html: [(function () {
													if ((!e.iconTo || e.iconTo.toLowerCase() === 'left') && e.icon) {
														return createNode({
															tag: JHTML.LABEL,
															class: e.icon,
															css: {
																display: 'table-cell',
																verticalAlign: 'middle',
																fontSize: '11px',
																padding: '0px 5px',
																width: '25px'
															}
														})
													} else {
														return ''
													}
												}()), createNode({
													tag: JHTML.LABEL,
													text: e.label,
													css: {
														display: 'table-cell',
														verticalAlign: 'middle',
														fontSize: '13px',
														padding: '0px 5px'
													}
												}), (function () {
													if ((e.iconTo && e.iconTo.toLowerCase() === 'right') && e.icon) {
														return createNode({
															tag: JHTML.LABEL,
															class: e.icon,
															css: {
																display: 'table-cell',
																verticalAlign: 'middle',
																fontSize: '11px',
																padding: '0px 5px',
																width: '25px'
															}
														})
													} else {
														return ''
													}
												}())]
											})]
										}));
									});
								}
								return _NodeList;
							}())
						})]

					})]
				})]
			};
			fn.rect_ = function () {
				fn._Node.css.borderRadius = '4px';
				fn._Node.css.width = '',
					fn._Node.css.display = 'table',
					fn._Node.css.height = o.height || '';
			};
			fn.round_ = function () {

			};
			fn.Custom_ = function () {};
			fn.bind = function () {
				fn._Node.ready = function (e) {
					Ragasave(e).rippleEffect();
				};
			};

			function init() {
				if (o.view && typeof o.view === 'string') {
					switch (o.view.toLowerCase()) {
						case 'rect':
							fn.rect_();
							break;
						case 'oval':
							fn.round_();
							break;
						case 'round':
							fn.round_();
							break;
						case 'custome':
							fn.Custom_();
							break;
						default:
							fn.rect_();

					}
				} else {
					fn.rect_();
				}

				fn.bind();
				if (o.style) {
					var style = o.style;
					switch (style) {
						case 'shaded':
							fn._Node.class += ' ' + c.rc__transition + ' ' + c.act_dk_bg__ + cE[o.color] + ' ' + c.act_lg_rel_shadow__ + cE[o.color] + ' ' + c.rel_tc__ + cE[o.color];
							break;
						case 'glass':
							fn._Node.class += ' ' + c.rc__transition + ' ' + c.act_bg__ + cE[o.color] + ' ' + c.rel_tc__ + cE[o.color];
							break;
						case 'soft':
							fn._Node.class += ' ' + c.act_bg__ + cE[o.color] + ' ' + c.rc__transition + ' ' + c.sm_border__ + cE[o.color] + ' ' + c.dk_rel_tc__ + cE[o.color];
							break;
						case 'pull':
							fn._Node.class += ' ' + c.act_bg__ + cE[o.color] + ' ' + c.sm_shadow__ + ' ' + c.act_lg_shadow__ + ' ' + c.rc__transition + ' ' + c.bg__ + cE[o.color];
							break;
						case 'push':
							fn._Node.class += ' ' + c.act_bg__ + cE[o.color] + ' ' + c.lg_shadow__ + ' ' + c.act_sm_shadow__ + ' ' + c.rc__transition + ' ' + c.bg__ + cE[o.color];
							break;
						case 'nobg':
							fn._Node.class += ' ' + c.act_lw_bg__ + cE[o.color] + ' ' + c.rc__transition + ' ' + c.act_dk_rel_tc__ + cE[o.color];
							break;
						case 'glow':
							fn._Node.class += ' ' + c.act_bg__ + cE[o.color] + ' ' + c.sm_shadow__ + ' ' + c.act_glow__ + cE[o.color] + ' ' + c.rc__transition + ' ' + c.bg__ + cE[o.color] + ' ' + c.sm_border__ + cE[o.color];
							break;
						case 'hard':
							fn._Node.class += ' ' + c.act_bg__ + cE[o.color] + ' ' + c.lg_border__ + cE[o.color] + ' ' + c.rc__transition + ' ' + c.dk_rel_tc__ + cE[o.color];
							break;
						default:
							fn._Node.class += ' ' + c.act_bg__ + cE[o.color] + ' ' + c.rc__transition + ' ' + c.bg__ + cE[o.color]
							if (!o.view || o.view === 'rect') {
								fn._Node.class += ' ' + c.sm_shadow__;
							}
					};

				} else {
					fn._Node.class += ' ' + c.act_bg__ + cE[o.color] + ' ' + c.rc__transition + ' ' + c.bg__ + cE[o.color]
					if (!o.view || o.view === 'rect') {
						fn._Node.class += ' ' + c.sm_shadow__;
					}
				}
				if (o.css) {
					Ragasave(o.css).each(function (p, v) {
						fn._Node.css[p] = v
					});
				};
				if (o.shadow && typeof o.shadow === 'boolean') {
					fn._Node.class += ' ' + c.sm_shadow__;
				};
				if (o.class && typeof o.class === 'string') {
					fn._Node.class += ' ' + o.class;
				};
				if (o.attr && typeof o.attr === 'object') {
					fn._Node.attr = o.attr;
				};

				fn._Node.attr.SelectBox = '';
				fn._Node.attr.RagasaveUI = '';
				fn._Node.attr.RagasaveControlUI = '';
			}
			init();
			if (o.option && o.option[0]) {
				Ragasave(fn._Node.html).find('[sb-label]')[0].innerText = o.option[defaultValue].label;
				Ragasave(fn._Node.html).find('input')[0].value = o.option[defaultValue].value || '';
			}

			if (o.value) {
				Ragasave(fn._Node.html).find('[sb-label]')[0].innerText = o.value;
				Ragasave(fn._Node.html).find('input')[0].value = o.value;
			}
			var WEK = 'ragasave-xvdsfdrs-hide-droped-or-dialog-box'; /* Hide Handler Key [Window Event Key] */
			if (!Ragasave.Event.getStack(window, 'click', WEK)) {
				Ragasave(window).click(function (e) {
					var check = false;
					Ragasave('[RagasaveUI][RagasaveControlUI][SelectBox]').each(function (sb) {

						if (e.path.includes(sb)) {
							check = true;
							return true;
						}

					});
					if (check === true) {
						return
					}
					Ragasave('[RagasaveUI][SelectBox][RagasaveControlUI] [select-box-listbox]').css({
						visibility: 'hidden',
						opacity: 0
					});
					Ragasave('[RagasaveUI][SelectBox][RagasaveControlUI] [sb-icon] label').exClass(c.transform_rotate_cw_180, c.transform_rotate_0);
				}, WEK, false);
			}
			return createNode(fn._Node);
		},


		TextField: function (o) {
			o = o || {};

			const fn = {};
			o.color = o.color || 'primary';
			o.class = o.class || '';
			o.attr = o.attr || {};
			var proto = o.proto || {};
			if (o.disabled) {
				o.attr.disabled = "";
			}
			if (o.type) {
				o.attr['input-type'] = o.type;

				if (o.value) {
					/* Input Imediate RegEx */
					var IIRegEx = {
						email: /([`~!\\#$%^&`*\(\)\-+={}\[\]\|:;"'<,>\/?])/g,
						number: /([`a-zA-Z~!\\@#$%^&*\(\)_\-+={}\[\]\|:;"'<,>.\/?])/g,
						alpha: /([`0-9~!\\@#$%`^&*\(\)_\-+={}\[\]\|:;"'<,>.\/?])/g,
						userid: /([`~!\\@#$%^&`*\(\)\-+={}\[\]\|:;"'<,>.\/?])/g
					}
					if (IIRegEx[o.type.toLowerCase()] && IIRegEx[o.type.toLowerCase()].test(o.value)) {
						o.value = o.value.replace(IIRegEx[o.type.toLowerCase()], '');
					}

				}
			} else {
				o.attr['input-type'] = 'text';
			}
			if (o.type && (o.type.toLowerCase() === 'password' || o.type.toLowerCase() === 'mixpassword')) {
				o.attr['type'] = 'password';
			} else {
				o.attr['type'] = 'text';
			}
			if (o.min) {
				o.attr.min = o.min;
			}
			if (o.max) {
				o._Node.attr.max = o.max;
			}

			if (o.regExp) {
				o.attr['input-type'] = o.regExp;
				o.attr['regexp'] = true;
				if (o.value) {
					let regex = /([`a-zA-Z0-9~!\\@#$%`^&*\(\)_\-+={}\[\]\|:;"'<,>.\/?])/g.toString();
					let ca = o.regExp.split(' ');
					ca.forEach(function (c) {
						regex = regex.replace(c, '');
					});

					regex = eval(regex);
					o.value = o.value.replace(regex, '');
				}

			}
			if (o.validate && o.validate === true) {
				o.attr.validate = '';
			}
			if (o.required) {
				o.attr.req = '';
			}
			fn._Node = {
				tag: JHTML.DIV,
				class: '',
				attr: {},
				css: {
					cursor: 'default',
					borderColor: '#9E9E9E'
				},

				html: [createNode({
					tag: JHTML.DIV,
					class: '',
					css: {
						position: 'relative',
						borderBottom: '1px solid',
						borderColor: 'inherit'
					},
					attr: {
						TextFieldWrapper: ''
					},
					html: [createNode({
						tag: JHTML.DIV,
						class: c.rc__transition,
						attr: {
							TextFieldLabel: '',
						},
						css: {
							height: 20,
							position: 'relative',
							cursor: 'pointer',
							top: 20,
							color: '#9E9E9E',
							fontSize: 14,
						},
						ready: function (e) {
							if (o.value) {
								Ragasave(e).css({
									top: 0,
									fontSize: 11,
									color: colors[o.color].active
								});
							}
						},
						bind: [{
							type: 'click',
							handler: function () {
								if (Ragasave(this).parent(2).hasAttr('active')) {
									return
								}
								Ragasave(this).parent(2).find('input')[0].focus();
							}
						}],
						html: [createNode({
							tag: JHTML.LABEL,
							class: '',
							css: {
								fontSize: 'inherit',
								color: 'inherit',
								position: 'relative',
								top: 4
							},
							text: (o.label || '')
						})]
					}), createNode({
						tag: JHTML.DIV,
						class: '',
						attr: {
							TextFieldInput: '',
						},
						html: [createNode({
							tag: JHTML.INPUT,
							class: o.class || '',
							attr: o.attr || {},
							name: o.name || '',
							value: o.value || '',
							proto: proto,
							id: o.id || '',
							css: {
								width: '100%',
								border: 'none',
								height: 25,
								fontSize: 14
							},
							bind: [{
									type: 'focus',
									handler: function () {
										Ragasave(this).parent(2).find('[TextFieldLabel]').css({
											top: 0,
											fontSize: 11,
											color: colors[o.color].active
										});
										Ragasave(this).parent(2).find('[TextFieldAnimate]').css({
											width: '100%'
										});
									}
								},
								{
									type: 'focusout',
									handler: function () {
										if (this.value.length < 1) {
											Ragasave(this).parent(2).find('[TextFieldLabel]').css({
												top: 20,
												fontSize: 14,
												color: '#9E9E9E'
											});
											Ragasave(this).parent(2).find('[TextFieldAnimate]').css({
												width: '0%'
											});

										}
									}
								},
								{
									type: 'input',
									handler: function () {
										toggleError(this);
										if (this.hasAttribute('min') && Number(this.value.length) >= Number(this.getAttribute('min'))) {
											Ragasave(this).parent(3).find('[TextFieldAnimBox]').css({
												backgroundColor: 'transparent'
											});
											Ragasave(this).parent(3).find('[TextFieldAnimate]').css({
												visibility: 'visible'
											});
											Ragasave(this).parent(3).find('[TextFieldLabel] label').css({
												color: 'inherit'
											});
											Ragasave(this).parent(3).delAttr('showError');
										}

										if (!this.hasAttribute('min')) {
											Ragasave(this).parent(3).find('[TextFieldAnimBox]').css({
												backgroundColor: 'transparent'
											});
											Ragasave(this).parent(3).find('[TextFieldAnimate]').css({
												visibility: 'visible'
											});
											Ragasave(this).parent(3).find('[TextFieldLabel] label').css({
												color: 'inherit'
											});
											Ragasave(this).parent(3).delAttr('showError');
										}
										if (this.hasAttribute('input-type')) {
											switch (this.getAttribute('input-type').toLowerCase()) {
												case 'alpha':
													Alpha(this);
													break;
												case 'number':
													PhoneNo(this);
													break;
												case 'numeric':

													break;
												case 'userid':
													UserId(this);
													break;
												case 'email':
													Email(this);
													break;
												case 'text':

													break;

												case 'password':

													break;
												default:
													if (this.hasAttribute('regexp')) {
														let regex = /([`a-zA-Z0-9~!\\@#$%`^&*\(\)_\-+={}\[\]\|:;"'<,>.\/?])/g.toString();
														let ca = this.getAttribute('input-type').split(' ');
														ca.forEach(function (c) {
															regex = regex.replace(c, '');
														});

														regex = eval(regex);
														if (regex.test(this.value)) {
															this.value = this.value.replace(regex, '');
														}
													}

											}
										}
									}
								}
							]

						})]
					}), createNode({
						tag: JHTML.DIV,
						class: c.rc__transition,
						css: {
							position: 'absolute',
							height: 2,
							width: '100%',
							bottom: -1,
							left: 0,
							//backgroundColor : '#212121'
						},
						attr: {
							TextFieldAnimBox: ''
						},
						html: [createNode({
							tag: JHTML.DIV,
							class: c.rc__transition,
							css: {
								display: 'block',
								margin: 'auto',
								width: o.value ? '100%' : '0%',
								backgroundColor: colors[o.color].active,
								height: '100%'
							},
							attr: {
								TextFieldAnimate: ''
							},
						})]
					})]
				})]
			}
			fn.rect_ = function () {

			};
			fn.round_ = function () {

			};
			fn.Custom_ = function () {
				fn._Node.class += ' ' + c.dim_bg__ + cE[o.color] + ' ' + c.semi_shadow__;
				fn._Node.css.fontSize = o.size / 2.8 || 12;
				fn._Node.css.borderRadius = '4px';
				fn._Node.css.paddingTop = o.size / 4 || 5;
				fn._Node.css.paddingLeft = o.size / 2 || 10;
				fn._Node.css.paddingRight = o.size / 2 || 10;
				fn._Node.css.paddingBottom = o.size / 4 || 5;
			};
			fn.bind = function () {
				fn._Node.ready = function (e) {

				};
			};

			function init() {
				if (o.view && typeof o.view === 'string') {
					switch (o.view.toLowerCase()) {
						case 'rect':
							fn.rect_();
							break;
						case 'oval':
							fn.round_();
							break;
						case 'round':
							fn.round_();
							break;
						case 'custome':
							fn.Custom_();
							break;
						default:
							fn.rect_();

					}
				} else {
					fn.rect_();
				}

				fn.bind();
				if (o.style) {
					var style = o.style;
					switch (style) {
						case 'shaded':
							fn._Node.class += ' ' + c.dk_bg__ + cE[o.color] + ' ' + c.rc__transition + ' ' + c.act_dk_bg__ + cE[o.color] + ' ' + c.glow__ + cE[o.color];
							break;
						case 'soft':
							fn._Node.class += c.sm_border__ + cE[o.color] + ' ' + c.dk_rel_tc__ + cE[o.color];
							break;
						case 'pull':
							fn._Node.class += ' ' + c.act_bg__ + cE[o.color] + ' ' + c.sm_shadow__ + ' ' + c.act_lg_shadow__ + ' ' + c.rc__transition + ' ' + c.bg__ + cE[o.color];
							break;
						case 'push':
							fn._Node.class += ' ' + c.act_bg__ + cE[o.color] + ' ' + c.lg_shadow__ + ' ' + c.act_sm_shadow__ + ' ' + c.rc__transition + ' ' + c.bg__ + cE[o.color];
							break;
						case 'glow':
							fn._Node.class += ' ' + c.act_bg__ + cE[o.color] + ' ' + c.sm_shadow__ + ' ' + c.act_glow__ + cE[o.color] + ' ' + c.rc__transition + ' ' + c.bg__ + cE[o.color] + ' ' + c.sm_border__ + cE[o.color];
							break;
						case 'hard':
							fn._Node.class += c.lg_border__ + cE[o.color] + ' ' + c.dk_rel_tc__ + cE[o.color];
							break;
						default:
							fn._Node.class += ' ' + c.act_bg__ + cE[o.color] + ' ' + c.rc__transition + ' ' + c.bg__ + cE[o.color]
							if (!o.view || o.view === 'rect') {
								fn._Node.class += ' ' + c.sm_shadow__;
							}
					};

				} else {
					//fn._Node.class += ' '+c.act_bg__+cE[o.color]+' '+c.rc__transition+' '+ c.bg__+cE[o.color]
					if (!o.view || o.view === 'rect') {
						//fn._Node.class += ' '+c.sm_shadow__;
					}
				}
				if (o.css) {
					Ragasave(o.css).each(function (p, v) {
						fn._Node.css[p] = v
					});
				};
				if (o.class && typeof o.class === 'string') {
					fn._Node.class += ' ' + o.class;
				};
				if (o.shadow && typeof o.shadow === 'boolean') {
					fn._Node.class += ' ' + c.sm_shadow__;
				};

				if (o.disabled) {
					fn._Node.attr.disabled = '';
				}

				if (o.showError) {
					fn._Node.html.push(createNode({
						tag: JHTML.DIV,
						class: '',
						css: {
							width: '100%',
							height: 12
						},
						attr: {
							'rcControlsErrorBox': '',
						},
						html: [createNode({
							tag: JHTML.LABEL,
							css: {
								fontSize: 11,
								color: 'red'
							},
							text: ''
						})]
					}));
				}
				fn._Node.attr.TextField = '';
				fn._Node.attr.RagasaveUI = '';
				fn._Node.attr.RagasaveControlUI = '';
			}
			init();
			return createNode(fn._Node);
		},

		validate: function (...n) {
			var result = validate(Ragasave(n.toString()));
			return result;
		},

		submit: function (o) {
			if (o.useAjax && o.form) {
				Ragasave(o.form).submit(function () {
					var isReady = true;
					if (o.validate) {
						var result = validate(Ragasave(o.form));
					} else {
						var result = {
							result: true
						};
					}
					if (result.result) {
						var data = new FormData(this);
						if (!o.success) {
							o.success = function () {};
						}
						if (o.start) {
							var ck = o.start();
							if (typeof ck === 'boolean') {
								isReady = ck;
							}
						}
						if (o.beforeStart) {
							var ck = o.beforeStart();
							if (ck && typeof ck === 'boolean') {
								isReady = ck;
							}
						}
						if (isReady) {
							Ragasave.post(o.url, data, o.success);
						}
					}
					e.preventDefault();
					return false;
				});
			}
			if (o.form && o.validate && !o.useAjax) {
				Ragasave(o.form).submit(function () {
					Ragasave.form(o.form).validate();
				});
			}
			if (o.inputs && o.button) {
				Ragasave(o.button).click(function () {
					var inputs = Ragasave(o.inputs.toString());
					var isReady = true;
					if (o.validate) {
						var result = validate(inputs);
					} else {
						var result = {
							result: true
						};
					}
					if (result.result) {
						var data = {};
						inputs, each(function (el) {
							data[el.getAttribute('name')] = el.value;
						});
						if (o.start) {
							var ck = o.start();
							if (typeof ck === 'boolean') {
								isReady = ck;
							}
						}
						if (o.beforeStart) {
							var ck = o.beforeStart();
							if (ck && typeof ck === 'boolean') {
								isReady = ck;
							}
						}
						if (!o.success) {
							o.success = function () {};
						}
						if (isReady) {
							Ragasave.post(o.url, data, o.success);
						}
					}
				});
			}
		},
		throwError: function (s, m) {
			var Elems = Ragasave(s);

			Elems.each(function (e) {

				if (!Ragasave(e).parent(3).hasAttr('RagasaveControlUI')) {
					return
				}
				Ragasave(e).parent(3).attr({
					showError: true
				});
				if (Ragasave(e).parent(3).hasAttr('TextField')) {
					Ragasave(e).parent(3).find('[TextFieldAnimBox]').css({
						backgroundColor: 'red'
					});
					Ragasave(e).parent(3).find('[TextFieldAnimate]').css({
						visibility: 'hidden'
					});
					Ragasave(e).parent(3).find('[TextFieldLabel] label').css({
						color: 'red'
					});


				}
			});
		},

		init: function () {
			function Radio(b) {
				var RadioBox = Ragasave('[RagasaveUI][RagasaveControlUI][Radio]');
				Ragasave(RadioBox).each(function (e) {
					var RB = Ragasave(e);
					var RBI = Ragasave(e).find('input[name]')[0];
					if (RBI.defaultChecked) {
						RB.attr({
							active: ''
						});
					} else {
						RB.delAttr('active');
					}
				});
				Ragasave(RadioBox).each(function (e) {
					var RB = Ragasave(e);
					var RBI = Ragasave(e).find('input[name]')[0];
					if (RBI.checked) {
						RB.attr({
							active: ''
						});
					} else {
						RB.delAttr('active');
					}
				});
			}
			Radio();
			/* On Reset  Set Default Value Of Ragasave Controls Element*/
			Ragasave('form').on('reset', function () {
				Radio();
			});

		}

	};


	/* Input Imediate RegEx */
	var IIRegExList = function () {
		return {
			email: /([`~!\\#$%^&`*\(\)\-+={}\[\]\|:;"'<,>\/?])/g,
			number: /([`a-zA-Z~!\\@#$%^&*\(\)_\-+={}\[\]\|:;"'<,>.\/?])/g,
			alpha: /([`0-9~!\\@#$%`^&*\(\)_\-+={}\[\]\|:;"'<,>.\/?])/g,
			userid: /([`~!\\@#$%^&`*\(\)\-+={}\[\]\|:;"'<,>.\/?])/g
		};
	};
	/* phone*/
	function PhoneNo(e) {
		var IIRegEx = IIRegExList();
		Ragasave(e).attr({
			type: "tel"
		});

		var regex = IIRegEx.number;
		if (regex.test(e.value)) {
			e.value = e.value.replace(regex, "");
		}

	};
	/* Email*/
	function Email(e) {
		var IIRegEx = IIRegExList();

		var regex = IIRegEx.email;
		if (regex.test(e.value)) {
			e.value = e.value.replace(regex, "");
		}

	};
	/*Only Alphabate*/
	function Alpha(that) {
		var IIRegEx = IIRegExList();
		var regex = IIRegEx.alpha;
		if (regex.test(that.value)) {
			that.value = that.value.replace(regex, "");
		}
	};

	function UserId(that) {
		var IIRegEx = IIRegExList();
		var regex = IIRegEx.userid;
		if (regex.test(that.value)) {
			that.value = that.value.replace(regex, "");
		}
	};

	function validate(form, z) {
		if (!form[0]) {
			return false
		}
		var results = [];
		var inputRegExpList = function () {
			return {
				'email': /^([a-zA-Z0-9_\.]+)+(@)([a-zA-Z-0-9_\-\.]+)+(\.)([a-zA-Z0-9_]+)+$/g,
				'number': /^([0-9\s]+)$/g,
				'alpha': /^([a-zA-Z\s]+)$/g,
				'userid': /^([a-zA-Z0-9_]+)$/g
			};
		};
		var errorMsg = function () {

			return {
				mixPassword: 'Password Must Contains The Combination Of Lower Case, Upper Case Alphabates, Digits & Atleast One Character',
				email: 'Invalid Email Id ! Enter Valid Email Id',
				number: 'Only Numbers Are Allowed',
				alpha: 'Only Alphabates Are Allowed',
				UserId: 'Use Only Combination of a-z A-Z 0-9 _ .'
			};

		};
		var mixPasswordCases = function () {
			return {
				uppercase: /[A-Z]+/g,
				lowercase: /[a-z]+/g,
				digit: /[0-9]+/g,
				char: /[~!\\@#$%^&`*\(\)_\-+={}\[\]\|:;"'<,>.\/?]/g
			};
		};

		function showError(e) {
			Ragasave(e).parent(3).find('[TextFieldAnimBox]').css({
				backgroundColor: 'red'
			});
			Ragasave(e).parent(3).find('[TextFieldAnimate]').css({
				visibility: 'hidden'
			});
			Ragasave(e).parent(3).find('[TextFieldLabel] label').css({
				color: 'red'
			});

			Ragasave(e).parent(3).attr({
				showError: true
			});
		}

		function hideError(e) {
			Ragasave(e).parent(3).find('[TextFieldAnimBox]').css({
				backgroundColor: 'transparent'
			});
			Ragasave(e).parent(3).find('[TextFieldAnimate]').css({
				visibility: 'visible'
			});
			Ragasave(e).parent(3).find('[TextFieldLabel] label').css({
				color: 'inherit'
			});
			Ragasave(e).parent(3).delAttr('showError');
		}
		var errorFound = {};
		if (form[0] instanceof HTMLFormElement) {
			var elems = form.findAll('input');
		} else {
			var elems = form;
		}
		elems.each(function (e) {
			var val = e.value;
			var haveError = false;
			var error = errorMsg();
			var mixPassword = mixPasswordCases();
			var inputRegExp = inputRegExpList();
			var name = e.getAttribute('name');
			var er = Ragasave(e).parent(3).find('[rcControlsErrorBox] label');
			errorFound[name] = '';
			if (e.hasAttribute('input-type') && (val.length > 0 || e.hasAttribute('req'))) {
				switch (e.getAttribute('input-type')) {
					case 'email':
						if (inputRegExp.email.test(val)) {
							results.push(true);
							toggleError(er);
							hideError(e);
						} else {
							results.push(false);
							toggleError(er, error.email);
							showError(e);
							haveError = true;
							errorFound[name] += error.email;
						}
						break;
					case 'number':
						if (inputRegExp.number.test(val)) {
							results.push(true);
							toggleError(er);
							hideError(e);
						} else {
							results.push(false);
							toggleError(er, error.number);
							showError(e);
							haveError = true;
							errorFound[name] += error.number;
						}
						break;
					case 'alpha':
						if (inputRegExp.alpha.test(val)) {
							results.push(true);
							toggleError(er);
							hideError(e);
						} else {
							results.push(false);
							toggleError(er, error.alpha);
							showError(e);
							haveError = true;
							errorFound[name] += error.alpha;
						}
						break;
					case 'userid':
						if (inputRegExp.userid.test(val)) {
							results.push(true);
							toggleError(er);
							hideError(e);
						} else {
							results.push(false);
							toggleError(er, error.UserId);
							showError(e);
							haveError = true;
							errorFound[name] += error.UserId;
						}
						break;
					case 'phoneno':

						break;
					case 'text':
						results.push(true);
						errorFound[name] += '';
						break;
					case 'password':
						results.push(true);
						errorFound[name] += '';
						break;
					case 'mixpassword':
						var result = [];
						for (p in mixPassword) {
							if (mixPassword[p].test(val)) {
								result = true;
							} else {
								result = false;
							}
						}

						if (result.includes(false)) {
							results.push(false);
							toggleError(er, error.mixPassword);
							errorFound[name] += error.mixPassword;
							showError(e);
							haveError = true;
						} else {
							toggleError(er);
							hideError(e);
							results.push(true);
						}

					default:
						let regex = /([`a-zA-Z0-9~!\\@#$%`^&*\(\)_\-+={}\[\]\|:;"'<,>.\/?])/g.toString();
						let ca = e.getAttribute('input-type').split(' ');
						ca.forEach(function (c) {
							regex = regex.replace(c, '');
						});

						regex = eval(regex);
						if (e.hasAttribute('regExp') && regex.test(val)) {
							toggleError(er, 'Invalid Input');
							errorFound[name] += 'Invalid Input';
							showError(e);
							haveError = true;
							results.push(false);
						} else {
							toggleError(er);
							results.push(true);
							hideError(e);
						}

				};

				if ((e.hasAttribute('req') && val.replace(/^[\s\t]+$/g, '').length < 1) || (val.replace(/^[\s\t]+$/g, '').length < Number(e.getAttribute('min')))) {
					results.push(false);
					showError(e);
					haveError = true;

				} else if (!haveError) {
					results.push(true);
					hideError(e);
				}
			} else {
				if ((e.hasAttribute('req') && val.replace(/^[\s\t]+$/g, '').length < 1) || (val.replace(/^[\s\t]+$/g, '').length < Number(e.getAttribute('min')))) {
					results.push(false);
					showError(e);
					haveError = true;
				} else if (!haveError) {
					results.push(true);
					hideError(e);
				}
			}
			if (!name) {
				delete errorFound[name];
			}
		});

		if (results.includes(false)) {
			return {
				result: false,
				error: errorFound
			};
		} else {
			form.findAll('[submit_],[type="submit"]').delAttr('disabled');
			return {
				result: true,
				error: errorFound
			};
		}


	};

	function toggleError(i, e) {
		e = e || '';

		if (Ragasave(i)[0]) {
			Ragasave(i)[0].innerText = e;
		}
	}

	function throwError() {
		//  Ragasave()
	};


	Ragasave.form = function (s) {
		if (!s) {
			return;
		}
		if (!(Ragasave(s)[0] instanceof HTMLFormElement)) {
			return;
		}
		var form = Ragasave(s);
		var _ = form.find('[type="submit"]');
		var input = form.findAll('[name]');
		var m = {};
		m.validate = function (callback) {
			var result = validate(form);
			return result;
		};

		m.submit = function (o) {
			form.submit(function (e) {
				if (o.useAjax) {
					var isReady = true;
					if (o.validate) {
						var result = validate(form);
					} else {
						var result = {
							result: true
						};
					}
					if (result.result) {
						var data = new FormData(this);
						if (o.start) {
							var ck = o.start();
							if (typeof ck === 'boolean') {
								isReady = ck;
							}
						}
						if (o.beforeStart) {
							var ck = o.beforeStart();
							if (ck && typeof ck === 'boolean') {
								isReady = ck;
							}
						}
						if (!o.success) {
							o.success = function () {};
						}
						if (isReady) {
							Ragasave.post(o.url, data, o.success);
						}
					}
					e.preventDefault();
					return false;
				} else {
					if (o.validate) {
						var result = validate(form);
					} else {
						var result = {
							result: true
						};
					}
					if (!result.result) {
						e.preventDefault();
					}
				}
			});
		};
		return m;
	};
	Ragasave.onInput = {}; /* Object For Form Compontent */
	Ragasave.onInput.validation = function (...s) {
		if (s && typeof s[0] === 'string') {
			s = s.toString();
		} else {
			s = ''
		}
		var elems = Ragasave(s).haveAttr('input-type');
		if (elems.isEmpty()) {
			return
		}

		var IIRegEx = IIRegExList();
		elems.input(function () {
			var t = this.getAttribute('input-type').toLowerCase();
			if (IIRegEx[t]) {
				this.value = this.value.replace(IIRegEx[t], '');
			} else {
				let regex = /([`a-zA-Z0-9~!\\@#$%`^&*\(\)_\-+={}\[\]\|:;"'<,>.\/?])/g.toString();
				let ca = this.getAttribute('input-type').split(' ');
				ca.forEach(function (c) {
					regex = regex.replace(c, '');
				});

				regex = eval(regex);
				if (this.hasAttribute('regexp') && regex.test(this.value)) {
					this.value = this.value.replace(regex, '');
				}
			};
		});
	}

}());


/*
 Ragasave Applications
 */
Ragasave.App = {};
Ragasave.App.TextEditor = {};
