var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) {
	"object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
		if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
	} : b(a);
}("undefined" != typeof window ? window : this, function (a, b) {
	var c = [],
	    d = c.slice,
	    e = c.concat,
	    f = c.push,
	    g = c.indexOf,
	    h = {},
	    i = h.toString,
	    j = h.hasOwnProperty,
	    k = {},
	    l = a.document,
	    m = "2.1.4",
	    n = function n(a, b) {
		return new n.fn.init(a, b);
	},
	    o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	    p = /^-ms-/,
	    q = /-([\da-z])/gi,
	    r = function r(a, b) {
		return b.toUpperCase();
	};n.fn = n.prototype = { jquery: m, constructor: n, selector: "", length: 0, toArray: function toArray() {
			return d.call(this);
		}, get: function get(a) {
			return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
		}, pushStack: function pushStack(a) {
			var b = n.merge(this.constructor(), a);return b.prevObject = this, b.context = this.context, b;
		}, each: function each(a, b) {
			return n.each(this, a, b);
		}, map: function map(a) {
			return this.pushStack(n.map(this, function (b, c) {
				return a.call(b, c, b);
			}));
		}, slice: function slice() {
			return this.pushStack(d.apply(this, arguments));
		}, first: function first() {
			return this.eq(0);
		}, last: function last() {
			return this.eq(-1);
		}, eq: function eq(a) {
			var b = this.length,
			    c = +a + (0 > a ? b : 0);return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
		}, end: function end() {
			return this.prevObject || this.constructor(null);
		}, push: f, sort: c.sort, splice: c.splice }, n.extend = n.fn.extend = function () {
		var a,
		    b,
		    c,
		    d,
		    e,
		    f,
		    g = arguments[0] || {},
		    h = 1,
		    i = arguments.length,
		    j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
			if (null != (a = arguments[h])) for (b in a) {
				c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
			}
		}return g;
	}, n.extend({ expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
			throw new Error(a);
		}, noop: function noop() {}, isFunction: function isFunction(a) {
			return "function" === n.type(a);
		}, isArray: Array.isArray, isWindow: function isWindow(a) {
			return null != a && a === a.window;
		}, isNumeric: function isNumeric(a) {
			return !n.isArray(a) && a - parseFloat(a) + 1 >= 0;
		}, isPlainObject: function isPlainObject(a) {
			return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0;
		}, isEmptyObject: function isEmptyObject(a) {
			var b;for (b in a) {
				return !1;
			}return !0;
		}, type: function type(a) {
			return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a ? h[i.call(a)] || "object" : typeof a === "undefined" ? "undefined" : _typeof(a);
		}, globalEval: function globalEval(a) {
			var b,
			    c = eval;a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a));
		}, camelCase: function camelCase(a) {
			return a.replace(p, "ms-").replace(q, r);
		}, nodeName: function nodeName(a, b) {
			return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
		}, each: function each(a, b, c) {
			var d,
			    e = 0,
			    f = a.length,
			    g = s(a);if (c) {
				if (g) {
					for (; f > e; e++) {
						if (d = b.apply(a[e], c), d === !1) break;
					}
				} else for (e in a) {
					if (d = b.apply(a[e], c), d === !1) break;
				}
			} else if (g) {
				for (; f > e; e++) {
					if (d = b.call(a[e], e, a[e]), d === !1) break;
				}
			} else for (e in a) {
				if (d = b.call(a[e], e, a[e]), d === !1) break;
			}return a;
		}, trim: function trim(a) {
			return null == a ? "" : (a + "").replace(o, "");
		}, makeArray: function makeArray(a, b) {
			var c = b || [];return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c;
		}, inArray: function inArray(a, b, c) {
			return null == b ? -1 : g.call(b, a, c);
		}, merge: function merge(a, b) {
			for (var c = +b.length, d = 0, e = a.length; c > d; d++) {
				a[e++] = b[d];
			}return a.length = e, a;
		}, grep: function grep(a, b, c) {
			for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
				d = !b(a[f], f), d !== h && e.push(a[f]);
			}return e;
		}, map: function map(a, b, c) {
			var d,
			    f = 0,
			    g = a.length,
			    h = s(a),
			    i = [];if (h) for (; g > f; f++) {
				d = b(a[f], f, c), null != d && i.push(d);
			} else for (f in a) {
				d = b(a[f], f, c), null != d && i.push(d);
			}return e.apply([], i);
		}, guid: 1, proxy: function proxy(a, b) {
			var c, e, f;return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function f() {
				return a.apply(b || this, e.concat(d.call(arguments)));
			}, f.guid = a.guid = a.guid || n.guid++, f) : void 0;
		}, now: Date.now, support: k }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
		h["[object " + b + "]"] = b.toLowerCase();
	});function s(a) {
		var b = "length" in a && a.length,
		    c = n.type(a);return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
	}var t = function (a) {
		var b,
		    c,
		    d,
		    e,
		    f,
		    g,
		    h,
		    i,
		    j,
		    k,
		    l,
		    m,
		    n,
		    o,
		    p,
		    q,
		    r,
		    s,
		    t,
		    u = "sizzle" + 1 * new Date(),
		    v = a.document,
		    w = 0,
		    x = 0,
		    y = ha(),
		    z = ha(),
		    A = ha(),
		    B = function B(a, b) {
			return a === b && (l = !0), 0;
		},
		    C = 1 << 31,
		    D = {}.hasOwnProperty,
		    E = [],
		    F = E.pop,
		    G = E.push,
		    H = E.push,
		    I = E.slice,
		    J = function J(a, b) {
			for (var c = 0, d = a.length; d > c; c++) {
				if (a[c] === b) return c;
			}return -1;
		},
		    K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
		    L = "[\\x20\\t\\r\\n\\f]",
		    M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
		    N = M.replace("w", "w#"),
		    O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
		    P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
		    Q = new RegExp(L + "+", "g"),
		    R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
		    S = new RegExp("^" + L + "*," + L + "*"),
		    T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
		    U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
		    V = new RegExp(P),
		    W = new RegExp("^" + N + "$"),
		    X = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M.replace("w", "w*") + ")"), ATTR: new RegExp("^" + O), PSEUDO: new RegExp("^" + P), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") },
		    Y = /^(?:input|select|textarea|button)$/i,
		    Z = /^h\d$/i,
		    $ = /^[^{]+\{\s*\[native \w/,
		    _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
		    aa = /[+~]/,
		    ba = /'|\\/g,
		    ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
		    da = function da(a, b, c) {
			var d = "0x" + b - 65536;return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
		},
		    ea = function ea() {
			m();
		};try {
			H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
		} catch (fa) {
			H = { apply: E.length ? function (a, b) {
					G.apply(a, I.call(b));
				} : function (a, b) {
					var c = a.length,
					    d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
				} };
		}function ga(a, b, d, e) {
			var f, h, j, k, l, o, r, s, w, x;if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;if (!e && p) {
				if (11 !== k && (f = _.exec(a))) if (j = f[1]) {
					if (9 === k) {
						if (h = b.getElementById(j), !h || !h.parentNode) return d;if (h.id === j) return d.push(h), d;
					} else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d;
				} else {
					if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d;
				}if (c.qsa && (!q || !q.test(a))) {
					if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
						o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;while (l--) {
							o[l] = s + ra(o[l]);
						}w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",");
					}if (x) try {
						return H.apply(d, w.querySelectorAll(x)), d;
					} catch (y) {} finally {
						r || b.removeAttribute("id");
					}
				}
			}return i(a.replace(R, "$1"), b, d, e);
		}function ha() {
			var a = [];function b(c, e) {
				return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
			}return b;
		}function ia(a) {
			return a[u] = !0, a;
		}function ja(a) {
			var b = n.createElement("div");try {
				return !!a(b);
			} catch (c) {
				return !1;
			} finally {
				b.parentNode && b.parentNode.removeChild(b), b = null;
			}
		}function ka(a, b) {
			var c = a.split("|"),
			    e = a.length;while (e--) {
				d.attrHandle[c[e]] = b;
			}
		}function la(a, b) {
			var c = b && a,
			    d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);if (d) return d;if (c) while (c = c.nextSibling) {
				if (c === b) return -1;
			}return a ? 1 : -1;
		}function ma(a) {
			return function (b) {
				var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
			};
		}function na(a) {
			return function (b) {
				var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
			};
		}function oa(a) {
			return ia(function (b) {
				return b = +b, ia(function (c, d) {
					var e,
					    f = a([], c.length, b),
					    g = f.length;while (g--) {
						c[e = f[g]] && (c[e] = !(d[e] = c[e]));
					}
				});
			});
		}function pa(a) {
			return a && "undefined" != typeof a.getElementsByTagName && a;
		}c = ga.support = {}, f = ga.isXML = function (a) {
			var b = a && (a.ownerDocument || a).documentElement;return b ? "HTML" !== b.nodeName : !1;
		}, m = ga.setDocument = function (a) {
			var b,
			    e,
			    g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function (a) {
				return a.className = "i", !a.getAttribute("className");
			}), c.getElementsByTagName = ja(function (a) {
				return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length;
			}), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function (a) {
				return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length;
			}), c.getById ? (d.find.ID = function (a, b) {
				if ("undefined" != typeof b.getElementById && p) {
					var c = b.getElementById(a);return c && c.parentNode ? [c] : [];
				}
			}, d.filter.ID = function (a) {
				var b = a.replace(ca, da);return function (a) {
					return a.getAttribute("id") === b;
				};
			}) : (delete d.find.ID, d.filter.ID = function (a) {
				var b = a.replace(ca, da);return function (a) {
					var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
				};
			}), d.find.TAG = c.getElementsByTagName ? function (a, b) {
				return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
			} : function (a, b) {
				var c,
				    d = [],
				    e = 0,
				    f = b.getElementsByTagName(a);if ("*" === a) {
					while (c = f[e++]) {
						1 === c.nodeType && d.push(c);
					}return d;
				}return f;
			}, d.find.CLASS = c.getElementsByClassName && function (a, b) {
				return p ? b.getElementsByClassName(a) : void 0;
			}, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function (a) {
				o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
			}), ja(function (a) {
				var b = g.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
			})), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
				c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P);
			}), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
				var c = 9 === a.nodeType ? a.documentElement : a,
				    d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
			} : function (a, b) {
				if (b) while (b = b.parentNode) {
					if (b === a) return !0;
				}return !1;
			}, B = b ? function (a, b) {
				if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
			} : function (a, b) {
				if (a === b) return l = !0, 0;var c,
				    d = 0,
				    e = a.parentNode,
				    f = b.parentNode,
				    h = [a],
				    i = [b];if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;if (e === f) return la(a, b);c = a;while (c = c.parentNode) {
					h.unshift(c);
				}c = b;while (c = c.parentNode) {
					i.unshift(c);
				}while (h[d] === i[d]) {
					d++;
				}return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
			}, g) : n;
		}, ga.matches = function (a, b) {
			return ga(a, null, null, b);
		}, ga.matchesSelector = function (a, b) {
			if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
				var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
			} catch (e) {}return ga(b, n, null, [a]).length > 0;
		}, ga.contains = function (a, b) {
			return (a.ownerDocument || a) !== n && m(a), t(a, b);
		}, ga.attr = function (a, b) {
			(a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
			    f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
		}, ga.error = function (a) {
			throw new Error("Syntax error, unrecognized expression: " + a);
		}, ga.uniqueSort = function (a) {
			var b,
			    d = [],
			    e = 0,
			    f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
				while (b = a[f++]) {
					b === a[f] && (e = d.push(f));
				}while (e--) {
					a.splice(d[e], 1);
				}
			}return k = null, a;
		}, e = ga.getText = function (a) {
			var b,
			    c = "",
			    d = 0,
			    f = a.nodeType;if (f) {
				if (1 === f || 9 === f || 11 === f) {
					if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
						c += e(a);
					}
				} else if (3 === f || 4 === f) return a.nodeValue;
			} else while (b = a[d++]) {
				c += e(b);
			}return c;
		}, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: X, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
					return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
				}, CHILD: function CHILD(a) {
					return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a;
				}, PSEUDO: function PSEUDO(a) {
					var b,
					    c = !a[6] && a[2];return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
				} }, filter: { TAG: function TAG(a) {
					var b = a.replace(ca, da).toLowerCase();return "*" === a ? function () {
						return !0;
					} : function (a) {
						return a.nodeName && a.nodeName.toLowerCase() === b;
					};
				}, CLASS: function CLASS(a) {
					var b = y[a + " "];return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
						return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
					});
				}, ATTR: function ATTR(a, b, c) {
					return function (d) {
						var e = ga.attr(d, a);return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
					};
				}, CHILD: function CHILD(a, b, c, d, e) {
					var f = "nth" !== a.slice(0, 3),
					    g = "last" !== a.slice(-4),
					    h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
						return !!a.parentNode;
					} : function (b, c, i) {
						var j,
						    k,
						    l,
						    m,
						    n,
						    o,
						    p = f !== g ? "nextSibling" : "previousSibling",
						    q = b.parentNode,
						    r = h && b.nodeName.toLowerCase(),
						    s = !i && !h;if (q) {
							if (f) {
								while (p) {
									l = b;while (l = l[p]) {
										if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
									}o = p = "only" === a && !o && "nextSibling";
								}return !0;
							}if (o = [g ? q.firstChild : q.lastChild], g && s) {
								k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
									if (1 === l.nodeType && ++m && l === b) {
										k[a] = [w, n, m];break;
									}
								}
							} else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
								if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;
							}return m -= e, m === d || m % d === 0 && m / d >= 0;
						}
					};
				}, PSEUDO: function PSEUDO(a, b) {
					var c,
					    e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
						var d,
						    f = e(a, b),
						    g = f.length;while (g--) {
							d = J(a, f[g]), a[d] = !(c[d] = f[g]);
						}
					}) : function (a) {
						return e(a, 0, c);
					}) : e;
				} }, pseudos: { not: ia(function (a) {
					var b = [],
					    c = [],
					    d = h(a.replace(R, "$1"));return d[u] ? ia(function (a, b, c, e) {
						var f,
						    g = d(a, null, e, []),
						    h = a.length;while (h--) {
							(f = g[h]) && (a[h] = !(b[h] = f));
						}
					}) : function (a, e, f) {
						return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
					};
				}), has: ia(function (a) {
					return function (b) {
						return ga(a, b).length > 0;
					};
				}), contains: ia(function (a) {
					return a = a.replace(ca, da), function (b) {
						return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
					};
				}), lang: ia(function (a) {
					return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(), function (b) {
						var c;do {
							if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
						} while ((b = b.parentNode) && 1 === b.nodeType);return !1;
					};
				}), target: function target(b) {
					var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
				}, root: function root(a) {
					return a === o;
				}, focus: function focus(a) {
					return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
				}, enabled: function enabled(a) {
					return a.disabled === !1;
				}, disabled: function disabled(a) {
					return a.disabled === !0;
				}, checked: function checked(a) {
					var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
				}, selected: function selected(a) {
					return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
				}, empty: function empty(a) {
					for (a = a.firstChild; a; a = a.nextSibling) {
						if (a.nodeType < 6) return !1;
					}return !0;
				}, parent: function parent(a) {
					return !d.pseudos.empty(a);
				}, header: function header(a) {
					return Z.test(a.nodeName);
				}, input: function input(a) {
					return Y.test(a.nodeName);
				}, button: function button(a) {
					var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
				}, text: function text(a) {
					var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
				}, first: oa(function () {
					return [0];
				}), last: oa(function (a, b) {
					return [b - 1];
				}), eq: oa(function (a, b, c) {
					return [0 > c ? c + b : c];
				}), even: oa(function (a, b) {
					for (var c = 0; b > c; c += 2) {
						a.push(c);
					}return a;
				}), odd: oa(function (a, b) {
					for (var c = 1; b > c; c += 2) {
						a.push(c);
					}return a;
				}), lt: oa(function (a, b, c) {
					for (var d = 0 > c ? c + b : c; --d >= 0;) {
						a.push(d);
					}return a;
				}), gt: oa(function (a, b, c) {
					for (var d = 0 > c ? c + b : c; ++d < b;) {
						a.push(d);
					}return a;
				}) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
			d.pseudos[b] = ma(b);
		}for (b in { submit: !0, reset: !0 }) {
			d.pseudos[b] = na(b);
		}function qa() {}qa.prototype = d.filters = d.pseudos, d.setFilters = new qa(), g = ga.tokenize = function (a, b) {
			var c,
			    e,
			    f,
			    g,
			    h,
			    i,
			    j,
			    k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
				(!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(R, " ") }), h = h.slice(c.length));for (g in d.filter) {
					!(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
				}if (!c) break;
			}return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
		};function ra(a) {
			for (var b = 0, c = a.length, d = ""; c > b; b++) {
				d += a[b].value;
			}return d;
		}function sa(a, b, c) {
			var d = b.dir,
			    e = c && "parentNode" === d,
			    f = x++;return b.first ? function (b, c, f) {
				while (b = b[d]) {
					if (1 === b.nodeType || e) return a(b, c, f);
				}
			} : function (b, c, g) {
				var h,
				    i,
				    j = [w, f];if (g) {
					while (b = b[d]) {
						if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
					}
				} else while (b = b[d]) {
					if (1 === b.nodeType || e) {
						if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];if (i[d] = j, j[2] = a(b, c, g)) return !0;
					}
				}
			};
		}function ta(a) {
			return a.length > 1 ? function (b, c, d) {
				var e = a.length;while (e--) {
					if (!a[e](b, c, d)) return !1;
				}return !0;
			} : a[0];
		}function ua(a, b, c) {
			for (var d = 0, e = b.length; e > d; d++) {
				ga(a, b[d], c);
			}return c;
		}function va(a, b, c, d, e) {
			for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
				(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
			}return g;
		}function wa(a, b, c, d, e, f) {
			return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function (f, g, h, i) {
				var j,
				    k,
				    l,
				    m = [],
				    n = [],
				    o = g.length,
				    p = f || ua(b || "*", h.nodeType ? [h] : h, []),
				    q = !a || !f && b ? p : va(p, m, a, h, i),
				    r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
					j = va(r, n), d(j, [], h, i), k = j.length;while (k--) {
						(l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
					}
				}if (f) {
					if (e || a) {
						if (e) {
							j = [], k = r.length;while (k--) {
								(l = r[k]) && j.push(q[k] = l);
							}e(null, r = [], j, i);
						}k = r.length;while (k--) {
							(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
						}
					}
				} else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
			});
		}function xa(a) {
			for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function (a) {
				return a === b;
			}, h, !0), l = sa(function (a) {
				return J(b, a) > -1;
			}, h, !0), m = [function (a, c, d) {
				var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
			}]; f > i; i++) {
				if (c = d.relative[a[i].type]) m = [sa(ta(m), c)];else {
					if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
						for (e = ++i; f > e; e++) {
							if (d.relative[a[e].type]) break;
						}return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a));
					}m.push(c);
				}
			}return ta(m);
		}function ya(a, b) {
			var c = b.length > 0,
			    e = a.length > 0,
			    f = function f(_f, g, h, i, k) {
				var l,
				    m,
				    o,
				    p = 0,
				    q = "0",
				    r = _f && [],
				    s = [],
				    t = j,
				    u = _f || e && d.find.TAG("*", k),
				    v = w += null == t ? 1 : Math.random() || .1,
				    x = u.length;for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
					if (e && l) {
						m = 0;while (o = a[m++]) {
							if (o(l, g, h)) {
								i.push(l);break;
							}
						}k && (w = v);
					}c && ((l = !o && l) && p--, _f && r.push(l));
				}if (p += q, c && q !== p) {
					m = 0;while (o = b[m++]) {
						o(r, s, g, h);
					}if (_f) {
						if (p > 0) while (q--) {
							r[q] || s[q] || (s[q] = F.call(i));
						}s = va(s);
					}H.apply(i, s), k && !_f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i);
				}return k && (w = v, j = t), r;
			};return c ? ia(f) : f;
		}return h = ga.compile = function (a, b) {
			var c,
			    d = [],
			    e = [],
			    f = A[a + " "];if (!f) {
				b || (b = g(a)), c = b.length;while (c--) {
					f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
				}f = A(a, ya(e, d)), f.selector = a;
			}return f;
		}, i = ga.select = function (a, b, e, f) {
			var i,
			    j,
			    k,
			    l,
			    m,
			    n = "function" == typeof a && a,
			    o = !f && g(a = n.selector || a);if (e = e || [], 1 === o.length) {
				if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
					if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e;n && (b = b.parentNode), a = a.slice(j.shift().value.length);
				}i = X.needsContext.test(a) ? 0 : j.length;while (i--) {
					if (k = j[i], d.relative[l = k.type]) break;if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
						if (j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e;break;
					}
				}
			}return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e;
		}, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
			return 1 & a.compareDocumentPosition(n.createElement("div"));
		}), ja(function (a) {
			return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
		}) || ka("type|href|height|width", function (a, b, c) {
			return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
		}), c.attributes && ja(function (a) {
			return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
		}) || ka("value", function (a, b, c) {
			return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
		}), ja(function (a) {
			return null == a.getAttribute("disabled");
		}) || ka(K, function (a, b, c) {
			var d;return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
		}), ga;
	}(a);n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;var u = n.expr.match.needsContext,
	    v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
	    w = /^.[^:#\[\.,]*$/;function x(a, b, c) {
		if (n.isFunction(b)) return n.grep(a, function (a, d) {
			return !!b.call(a, d, a) !== c;
		});if (b.nodeType) return n.grep(a, function (a) {
			return a === b !== c;
		});if ("string" == typeof b) {
			if (w.test(b)) return n.filter(b, a, c);b = n.filter(b, a);
		}return n.grep(a, function (a) {
			return g.call(b, a) >= 0 !== c;
		});
	}n.filter = function (a, b, c) {
		var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
			return 1 === a.nodeType;
		}));
	}, n.fn.extend({ find: function find(a) {
			var b,
			    c = this.length,
			    d = [],
			    e = this;if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
				for (b = 0; c > b; b++) {
					if (n.contains(e[b], this)) return !0;
				}
			}));for (b = 0; c > b; b++) {
				n.find(a, e[b], d);
			}return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d;
		}, filter: function filter(a) {
			return this.pushStack(x(this, a || [], !1));
		}, not: function not(a) {
			return this.pushStack(x(this, a || [], !0));
		}, is: function is(a) {
			return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length;
		} });var y,
	    z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	    A = n.fn.init = function (a, b) {
		var c, d;if (!a) return this;if ("string" == typeof a) {
			if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);if (c[1]) {
				if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b)) for (c in b) {
					n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
				}return this;
			}return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this;
		}return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));
	};A.prototype = n.fn, y = n(l);var B = /^(?:parents|prev(?:Until|All))/,
	    C = { children: !0, contents: !0, next: !0, prev: !0 };n.extend({ dir: function dir(a, b, c) {
			var d = [],
			    e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) {
				if (1 === a.nodeType) {
					if (e && n(a).is(c)) break;d.push(a);
				}
			}return d;
		}, sibling: function sibling(a, b) {
			for (var c = []; a; a = a.nextSibling) {
				1 === a.nodeType && a !== b && c.push(a);
			}return c;
		} }), n.fn.extend({ has: function has(a) {
			var b = n(a, this),
			    c = b.length;return this.filter(function () {
				for (var a = 0; c > a; a++) {
					if (n.contains(this, b[a])) return !0;
				}
			});
		}, closest: function closest(a, b) {
			for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) {
				for (c = this[d]; c && c !== b; c = c.parentNode) {
					if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
						f.push(c);break;
					}
				}
			}return this.pushStack(f.length > 1 ? n.unique(f) : f);
		}, index: function index(a) {
			return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
		}, add: function add(a, b) {
			return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
		}, addBack: function addBack(a) {
			return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
		} });function D(a, b) {
		while ((a = a[b]) && 1 !== a.nodeType) {}return a;
	}n.each({ parent: function parent(a) {
			var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
		}, parents: function parents(a) {
			return n.dir(a, "parentNode");
		}, parentsUntil: function parentsUntil(a, b, c) {
			return n.dir(a, "parentNode", c);
		}, next: function next(a) {
			return D(a, "nextSibling");
		}, prev: function prev(a) {
			return D(a, "previousSibling");
		}, nextAll: function nextAll(a) {
			return n.dir(a, "nextSibling");
		}, prevAll: function prevAll(a) {
			return n.dir(a, "previousSibling");
		}, nextUntil: function nextUntil(a, b, c) {
			return n.dir(a, "nextSibling", c);
		}, prevUntil: function prevUntil(a, b, c) {
			return n.dir(a, "previousSibling", c);
		}, siblings: function siblings(a) {
			return n.sibling((a.parentNode || {}).firstChild, a);
		}, children: function children(a) {
			return n.sibling(a.firstChild);
		}, contents: function contents(a) {
			return a.contentDocument || n.merge([], a.childNodes);
		} }, function (a, b) {
		n.fn[a] = function (c, d) {
			var e = n.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e);
		};
	});var E = /\S+/g,
	    F = {};function G(a) {
		var b = F[a] = {};return n.each(a.match(E) || [], function (a, c) {
			b[c] = !0;
		}), b;
	}n.Callbacks = function (a) {
		a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);var b,
		    c,
		    d,
		    e,
		    f,
		    g,
		    h = [],
		    i = !a.once && [],
		    j = function j(l) {
			for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++) {
				if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
					b = !1;break;
				}
			}d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable());
		},
		    k = { add: function add() {
				if (h) {
					var c = h.length;!function g(b) {
						n.each(b, function (b, c) {
							var d = n.type(c);"function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c);
						});
					}(arguments), d ? f = h.length : b && (e = c, j(b));
				}return this;
			}, remove: function remove() {
				return h && n.each(arguments, function (a, b) {
					var c;while ((c = n.inArray(b, h, c)) > -1) {
						h.splice(c, 1), d && (f >= c && f--, g >= c && g--);
					}
				}), this;
			}, has: function has(a) {
				return a ? n.inArray(a, h) > -1 : !(!h || !h.length);
			}, empty: function empty() {
				return h = [], f = 0, this;
			}, disable: function disable() {
				return h = i = b = void 0, this;
			}, disabled: function disabled() {
				return !h;
			}, lock: function lock() {
				return i = void 0, b || k.disable(), this;
			}, locked: function locked() {
				return !i;
			}, fireWith: function fireWith(a, b) {
				return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this;
			}, fire: function fire() {
				return k.fireWith(this, arguments), this;
			}, fired: function fired() {
				return !!c;
			} };return k;
	}, n.extend({ Deferred: function Deferred(a) {
			var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
			    c = "pending",
			    d = { state: function state() {
					return c;
				}, always: function always() {
					return e.done(arguments).fail(arguments), this;
				}, then: function then() {
					var a = arguments;return n.Deferred(function (c) {
						n.each(b, function (b, f) {
							var g = n.isFunction(a[b]) && a[b];e[f[1]](function () {
								var a = g && g.apply(this, arguments);a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
							});
						}), a = null;
					}).promise();
				}, promise: function promise(a) {
					return null != a ? n.extend(a, d) : d;
				} },
			    e = {};return d.pipe = d.then, n.each(b, function (a, f) {
				var g = f[2],
				    h = f[3];d[f[1]] = g.add, h && g.add(function () {
					c = h;
				}, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
					return e[f[0] + "With"](this === e ? d : this, arguments), this;
				}, e[f[0] + "With"] = g.fireWith;
			}), d.promise(e), a && a.call(e, e), e;
		}, when: function when(a) {
			var b = 0,
			    c = d.call(arguments),
			    e = c.length,
			    f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
			    g = 1 === f ? a : n.Deferred(),
			    h = function h(a, b, c) {
				return function (e) {
					b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
				};
			},
			    i,
			    j,
			    k;if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) {
				c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
			}return f || g.resolveWith(k, c), g.promise();
		} });var H;n.fn.ready = function (a) {
		return n.ready.promise().done(a), this;
	}, n.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(a) {
			a ? n.readyWait++ : n.ready(!0);
		}, ready: function ready(a) {
			(a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))));
		} });function I() {
		l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready();
	}n.ready.promise = function (b) {
		return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b);
	}, n.ready.promise();var J = n.access = function (a, b, c, d, e, f, g) {
		var h = 0,
		    i = a.length,
		    j = null == c;if ("object" === n.type(c)) {
			e = !0;for (h in c) {
				n.access(a, b, h, c[h], !0, f, g);
			}
		} else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (_b) {
			function b(_x, _x2, _x3) {
				return _b.apply(this, arguments);
			}

			b.toString = function () {
				return _b.toString();
			};

			return b;
		}(function (a, b, c) {
			return j.call(n(a), c);
		}))), b)) for (; i > h; h++) {
			b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
		}return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
	};n.acceptData = function (a) {
		return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
	};function K() {
		Object.defineProperty(this.cache = {}, 0, { get: function get() {
				return {};
			} }), this.expando = n.expando + K.uid++;
	}K.uid = 1, K.accepts = n.acceptData, K.prototype = { key: function key(a) {
			if (!K.accepts(a)) return 0;var b = {},
			    c = a[this.expando];if (!c) {
				c = K.uid++;try {
					b[this.expando] = { value: c }, Object.defineProperties(a, b);
				} catch (d) {
					b[this.expando] = c, n.extend(a, b);
				}
			}return this.cache[c] || (this.cache[c] = {}), c;
		}, set: function set(a, b, c) {
			var d,
			    e = this.key(a),
			    f = this.cache[e];if ("string" == typeof b) f[b] = c;else if (n.isEmptyObject(f)) n.extend(this.cache[e], b);else for (d in b) {
				f[d] = b[d];
			}return f;
		}, get: function get(a, b) {
			var c = this.cache[this.key(a)];return void 0 === b ? c : c[b];
		}, access: function access(a, b, c) {
			var d;return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
		}, remove: function remove(a, b) {
			var c,
			    d,
			    e,
			    f = this.key(a),
			    g = this.cache[f];if (void 0 === b) this.cache[f] = {};else {
				n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;while (c--) {
					delete g[d[c]];
				}
			}
		}, hasData: function hasData(a) {
			return !n.isEmptyObject(this.cache[a[this.expando]] || {});
		}, discard: function discard(a) {
			a[this.expando] && delete this.cache[a[this.expando]];
		} };var L = new K(),
	    M = new K(),
	    N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	    O = /([A-Z])/g;function P(a, b, c) {
		var d;if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
			try {
				c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c;
			} catch (e) {}M.set(a, b, c);
		} else c = void 0;return c;
	}n.extend({ hasData: function hasData(a) {
			return M.hasData(a) || L.hasData(a);
		}, data: function data(a, b, c) {
			return M.access(a, b, c);
		}, removeData: function removeData(a, b) {
			M.remove(a, b);
		}, _data: function _data(a, b, c) {
			return L.access(a, b, c);
		}, _removeData: function _removeData(a, b) {
			L.remove(a, b);
		} }), n.fn.extend({ data: function data(a, b) {
			var c,
			    d,
			    e,
			    f = this[0],
			    g = f && f.attributes;if (void 0 === a) {
				if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
					c = g.length;while (c--) {
						g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
					}L.set(f, "hasDataAttrs", !0);
				}return e;
			}return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? this.each(function () {
				M.set(this, a);
			}) : J(this, function (b) {
				var c,
				    d = n.camelCase(a);if (f && void 0 === b) {
					if (c = M.get(f, a), void 0 !== c) return c;if (c = M.get(f, d), void 0 !== c) return c;if (c = P(f, d, void 0), void 0 !== c) return c;
				} else this.each(function () {
					var c = M.get(this, d);M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b);
				});
			}, null, b, arguments.length > 1, null, !0);
		}, removeData: function removeData(a) {
			return this.each(function () {
				M.remove(this, a);
			});
		} }), n.extend({ queue: function queue(a, b, c) {
			var d;return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0;
		}, dequeue: function dequeue(a, b) {
			b = b || "fx";var c = n.queue(a, b),
			    d = c.length,
			    e = c.shift(),
			    f = n._queueHooks(a, b),
			    g = function g() {
				n.dequeue(a, b);
			};"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
		}, _queueHooks: function _queueHooks(a, b) {
			var c = b + "queueHooks";return L.get(a, c) || L.access(a, c, { empty: n.Callbacks("once memory").add(function () {
					L.remove(a, [b + "queue", c]);
				}) });
		} }), n.fn.extend({ queue: function queue(a, b) {
			var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
				var c = n.queue(this, a, b);n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
			});
		}, dequeue: function dequeue(a) {
			return this.each(function () {
				n.dequeue(this, a);
			});
		}, clearQueue: function clearQueue(a) {
			return this.queue(a || "fx", []);
		}, promise: function promise(a, b) {
			var c,
			    d = 1,
			    e = n.Deferred(),
			    f = this,
			    g = this.length,
			    h = function h() {
				--d || e.resolveWith(f, [f]);
			};"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
				c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
			}return h(), e.promise(b);
		} });var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
	    R = ["Top", "Right", "Bottom", "Left"],
	    S = function S(a, b) {
		return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
	},
	    T = /^(?:checkbox|radio)$/i;!function () {
		var a = l.createDocumentFragment(),
		    b = a.appendChild(l.createElement("div")),
		    c = l.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
	}();var U = "undefined";k.focusinBubbles = "onfocusin" in a;var V = /^key/,
	    W = /^(?:mouse|pointer|contextmenu)|click/,
	    X = /^(?:focusinfocus|focusoutblur)$/,
	    Y = /^([^.]*)(?:\.(.+)|)$/;function Z() {
		return !0;
	}function $() {
		return !1;
	}function _() {
		try {
			return l.activeElement;
		} catch (a) {}
	}n.event = { global: {}, add: function add(a, b, c, d, e) {
			var f,
			    g,
			    h,
			    i,
			    j,
			    k,
			    l,
			    m,
			    o,
			    p,
			    q,
			    r = L.get(a);if (r) {
				c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
					return (typeof n === "undefined" ? "undefined" : _typeof(n)) !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
				}), b = (b || "").match(E) || [""], j = b.length;while (j--) {
					h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join(".") }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0);
				}
			}
		}, remove: function remove(a, b, c, d, e) {
			var f,
			    g,
			    h,
			    i,
			    j,
			    k,
			    l,
			    m,
			    o,
			    p,
			    q,
			    r = L.hasData(a) && L.get(a);if (r && (i = r.events)) {
				b = (b || "").match(E) || [""], j = b.length;while (j--) {
					if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
						l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) {
							k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
						}g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o]);
					} else for (o in i) {
						n.event.remove(a, o + b[j], c, d, !0);
					}
				}n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"));
			}
		}, trigger: function trigger(b, c, d, e) {
			var f,
			    g,
			    h,
			    i,
			    k,
			    m,
			    o,
			    p = [d || l],
			    q = j.call(b, "type") ? b.type : b,
			    r = j.call(b, "namespace") ? b.namespace.split(".") : [];if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
				if (!e && !o.noBubble && !n.isWindow(d)) {
					for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) {
						p.push(g), h = g;
					}h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a);
				}f = 0;while ((g = p[f++]) && !b.isPropagationStopped()) {
					b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
				}return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result;
			}
		}, dispatch: function dispatch(a) {
			a = n.event.fix(a);var b,
			    c,
			    e,
			    f,
			    g,
			    h = [],
			    i = d.call(arguments),
			    j = (L.get(this, "events") || {})[a.type] || [],
			    k = n.event.special[a.type] || {};if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
				h = n.event.handlers.call(this, a, j), b = 0;while ((f = h[b++]) && !a.isPropagationStopped()) {
					a.currentTarget = f.elem, c = 0;while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) {
						(!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
					}
				}return k.postDispatch && k.postDispatch.call(this, a), a.result;
			}
		}, handlers: function handlers(a, b) {
			var c,
			    d,
			    e,
			    f,
			    g = [],
			    h = b.delegateCount,
			    i = a.target;if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i !== this; i = i.parentNode || this) {
				if (i.disabled !== !0 || "click" !== a.type) {
					for (d = [], c = 0; h > c; c++) {
						f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
					}d.length && g.push({ elem: i, handlers: d });
				}
			}return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
		}, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function filter(a, b) {
				return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
			} }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function filter(a, b) {
				var c,
				    d,
				    e,
				    f = b.button;return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
			} }, fix: function fix(a) {
			if (a[n.expando]) return a;var b,
			    c,
			    d,
			    e = a.type,
			    f = a,
			    g = this.fixHooks[e];g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;while (b--) {
				c = d[b], a[c] = f[c];
			}return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a;
		}, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
					return this !== _() && this.focus ? (this.focus(), !1) : void 0;
				}, delegateType: "focusin" }, blur: { trigger: function trigger() {
					return this === _() && this.blur ? (this.blur(), !1) : void 0;
				}, delegateType: "focusout" }, click: { trigger: function trigger() {
					return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0;
				}, _default: function _default(a) {
					return n.nodeName(a.target, "a");
				} }, beforeunload: { postDispatch: function postDispatch(a) {
					void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
				} } }, simulate: function simulate(a, b, c, d) {
			var e = n.extend(new n.Event(), c, { type: a, isSimulated: !0, originalEvent: {} });d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
		} }, n.removeEvent = function (a, b, c) {
		a.removeEventListener && a.removeEventListener(b, c, !1);
	}, n.Event = function (a, b) {
		return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
	}, n.Event.prototype = { isDefaultPrevented: $, isPropagationStopped: $, isImmediatePropagationStopped: $, preventDefault: function preventDefault() {
			var a = this.originalEvent;this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault();
		}, stopPropagation: function stopPropagation() {
			var a = this.originalEvent;this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation();
		}, stopImmediatePropagation: function stopImmediatePropagation() {
			var a = this.originalEvent;this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
		} }, n.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
		n.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
				var c,
				    d = this,
				    e = a.relatedTarget,
				    f = a.handleObj;return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
			} };
	}), k.focusinBubbles || n.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
		var c = function c(a) {
			n.event.simulate(b, a.target, n.event.fix(a), !0);
		};n.event.special[b] = { setup: function setup() {
				var d = this.ownerDocument || this,
				    e = L.access(d, b);e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1);
			}, teardown: function teardown() {
				var d = this.ownerDocument || this,
				    e = L.access(d, b) - 1;e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b));
			} };
	}), n.fn.extend({ on: function on(a, b, c, d, e) {
			var f, g;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
				"string" != typeof b && (c = c || b, b = void 0);for (g in a) {
					this.on(g, b, c, a[g], e);
				}return this;
			}if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = $;else if (!d) return this;return 1 === e && (f = d, d = function d(a) {
				return n().off(a), f.apply(this, arguments);
			}, d.guid = f.guid || (f.guid = n.guid++)), this.each(function () {
				n.event.add(this, a, d, c, b);
			});
		}, one: function one(a, b, c, d) {
			return this.on(a, b, c, d, 1);
		}, off: function off(a, b, c) {
			var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
				for (e in a) {
					this.off(e, b, a[e]);
				}return this;
			}return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function () {
				n.event.remove(this, a, c, b);
			});
		}, trigger: function trigger(a, b) {
			return this.each(function () {
				n.event.trigger(a, b, this);
			});
		}, triggerHandler: function triggerHandler(a, b) {
			var c = this[0];return c ? n.event.trigger(a, b, c, !0) : void 0;
		} });var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	    ba = /<([\w:]+)/,
	    ca = /<|&#?\w+;/,
	    da = /<(?:script|style|link)/i,
	    ea = /checked\s*(?:[^=]|=\s*.checked.)/i,
	    fa = /^$|\/(?:java|ecma)script/i,
	    ga = /^true\/(.*)/,
	    ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
	    ia = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ia.optgroup = ia.option, ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead, ia.th = ia.td;function ja(a, b) {
		return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
	}function ka(a) {
		return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
	}function la(a) {
		var b = ga.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
	}function ma(a, b) {
		for (var c = 0, d = a.length; d > c; c++) {
			L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"));
		}
	}function na(a, b) {
		var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
			if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
				delete g.handle, g.events = {};for (e in j) {
					for (c = 0, d = j[e].length; d > c; c++) {
						n.event.add(b, e, j[e][c]);
					}
				}
			}M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i));
		}
	}function oa(a, b) {
		var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c;
	}function pa(a, b) {
		var c = b.nodeName.toLowerCase();"input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
	}n.extend({ clone: function clone(a, b, c) {
			var d,
			    e,
			    f,
			    g,
			    h = a.cloneNode(!0),
			    i = n.contains(a.ownerDocument, a);if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = oa(h), f = oa(a), d = 0, e = f.length; e > d; d++) {
				pa(f[d], g[d]);
			}if (b) if (c) for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++) {
				na(f[d], g[d]);
			} else na(a, h);return g = oa(h, "script"), g.length > 0 && ma(g, !i && oa(a, "script")), h;
		}, buildFragment: function buildFragment(a, b, c, d) {
			for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++) {
				if (e = a[m], e || 0 === e) if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e);else if (ca.test(e)) {
					f = f || k.appendChild(b.createElement("div")), g = (ba.exec(e) || ["", ""])[1].toLowerCase(), h = ia[g] || ia._default, f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2], j = h[0];while (j--) {
						f = f.lastChild;
					}n.merge(l, f.childNodes), f = k.firstChild, f.textContent = "";
				} else l.push(b.createTextNode(e));
			}k.textContent = "", m = 0;while (e = l[m++]) {
				if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = oa(k.appendChild(e), "script"), i && ma(f), c)) {
					j = 0;while (e = f[j++]) {
						fa.test(e.type || "") && c.push(e);
					}
				}
			}return k;
		}, cleanData: function cleanData(a) {
			for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
				if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
					if (b.events) for (d in b.events) {
						f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
					}L.cache[e] && delete L.cache[e];
				}delete M.cache[c[M.expando]];
			}
		} }), n.fn.extend({ text: function text(a) {
			return J(this, function (a) {
				return void 0 === a ? n.text(this) : this.empty().each(function () {
					(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
				});
			}, null, a, arguments.length);
		}, append: function append() {
			return this.domManip(arguments, function (a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = ja(this, a);b.appendChild(a);
				}
			});
		}, prepend: function prepend() {
			return this.domManip(arguments, function (a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = ja(this, a);b.insertBefore(a, b.firstChild);
				}
			});
		}, before: function before() {
			return this.domManip(arguments, function (a) {
				this.parentNode && this.parentNode.insertBefore(a, this);
			});
		}, after: function after() {
			return this.domManip(arguments, function (a) {
				this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
			});
		}, remove: function remove(a, b) {
			for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) {
				b || 1 !== c.nodeType || n.cleanData(oa(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")), c.parentNode.removeChild(c));
			}return this;
		}, empty: function empty() {
			for (var a, b = 0; null != (a = this[b]); b++) {
				1 === a.nodeType && (n.cleanData(oa(a, !1)), a.textContent = "");
			}return this;
		}, clone: function clone(a, b) {
			return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
				return n.clone(this, a, b);
			});
		}, html: function html(a) {
			return J(this, function (a) {
				var b = this[0] || {},
				    c = 0,
				    d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !da.test(a) && !ia[(ba.exec(a) || ["", ""])[1].toLowerCase()]) {
					a = a.replace(aa, "<$1></$2>");try {
						for (; d > c; c++) {
							b = this[c] || {}, 1 === b.nodeType && (n.cleanData(oa(b, !1)), b.innerHTML = a);
						}b = 0;
					} catch (e) {}
				}b && this.empty().append(a);
			}, null, a, arguments.length);
		}, replaceWith: function replaceWith() {
			var a = arguments[0];return this.domManip(arguments, function (b) {
				a = this.parentNode, n.cleanData(oa(this)), a && a.replaceChild(b, this);
			}), a && (a.length || a.nodeType) ? this : this.remove();
		}, detach: function detach(a) {
			return this.remove(a, !0);
		}, domManip: function domManip(a, b) {
			a = e.apply([], a);var c,
			    d,
			    f,
			    g,
			    h,
			    i,
			    j = 0,
			    l = this.length,
			    m = this,
			    o = l - 1,
			    p = a[0],
			    q = n.isFunction(p);if (q || l > 1 && "string" == typeof p && !k.checkClone && ea.test(p)) return this.each(function (c) {
				var d = m.eq(c);q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
			});if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
				for (f = n.map(oa(c, "script"), ka), g = f.length; l > j; j++) {
					h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, oa(h, "script"))), b.call(this[j], h, j);
				}if (g) for (i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++) {
					h = f[j], fa.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, "")));
				}
			}return this;
		} }), n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
		n.fn[a] = function (a) {
			for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) {
				c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
			}return this.pushStack(d);
		};
	});var qa,
	    ra = {};function sa(b, c) {
		var d,
		    e = n(c.createElement(b)).appendTo(c.body),
		    f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");return e.detach(), f;
	}function ta(a) {
		var b = l,
		    c = ra[a];return c || (c = sa(a, b), "none" !== c && c || (qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qa[0].contentDocument, b.write(), b.close(), c = sa(a, b), qa.detach()), ra[a] = c), c;
	}var ua = /^margin/,
	    va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
	    wa = function wa(b) {
		return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null);
	};function xa(a, b, c) {
		var d,
		    e,
		    f,
		    g,
		    h = a.style;return c = c || wa(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), va.test(g) && ua.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
	}function ya(a, b) {
		return { get: function get() {
				return a() ? void delete this.get : (this.get = b).apply(this, arguments);
			} };
	}!function () {
		var b,
		    c,
		    d = l.documentElement,
		    e = l.createElement("div"),
		    f = l.createElement("div");if (f.style) {
			var _g = function _g() {
				f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);var g = a.getComputedStyle(f, null);b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e);
			};

			f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);a.getComputedStyle && n.extend(k, { pixelPosition: function pixelPosition() {
					return _g(), b;
				}, boxSizingReliable: function boxSizingReliable() {
					return null == c && _g(), c;
				}, reliableMarginRight: function reliableMarginRight() {
					var b,
					    c = f.appendChild(l.createElement("div"));return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), b;
				} });
		}
	}(), n.swap = function (a, b, c, d) {
		var e,
		    f,
		    g = {};for (f in b) {
			g[f] = a.style[f], a.style[f] = b[f];
		}e = c.apply(a, d || []);for (f in b) {
			a.style[f] = g[f];
		}return e;
	};var za = /^(none|table(?!-c[ea]).+)/,
	    Aa = new RegExp("^(" + Q + ")(.*)$", "i"),
	    Ba = new RegExp("^([+-])=(" + Q + ")", "i"),
	    Ca = { position: "absolute", visibility: "hidden", display: "block" },
	    Da = { letterSpacing: "0", fontWeight: "400" },
	    Ea = ["Webkit", "O", "Moz", "ms"];function Fa(a, b) {
		if (b in a) return b;var c = b[0].toUpperCase() + b.slice(1),
		    d = b,
		    e = Ea.length;while (e--) {
			if (b = Ea[e] + c, b in a) return b;
		}return d;
	}function Ga(a, b, c) {
		var d = Aa.exec(b);return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
	}function Ha(a, b, c, d, e) {
		for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
			"margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
		}return g;
	}function Ia(a, b, c) {
		var d = !0,
		    e = "width" === b ? a.offsetWidth : a.offsetHeight,
		    f = wa(a),
		    g = "border-box" === n.css(a, "boxSizing", !1, f);if (0 >= e || null == e) {
			if (e = xa(a, b, f), (0 > e || null == e) && (e = a.style[b]), va.test(e)) return e;d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
		}return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px";
	}function Ja(a, b) {
		for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
			d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", ta(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
		}for (g = 0; h > g; g++) {
			d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
		}return a;
	}n.extend({ cssHooks: { opacity: { get: function get(a, b) {
					if (b) {
						var c = xa(a, "opacity");return "" === c ? "1" : c;
					}
				} } }, cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(a, b, c, d) {
			if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
				var e,
				    f,
				    g,
				    h = n.camelCase(b),
				    i = a.style;return b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c === "undefined" ? "undefined" : _typeof(c), "string" === f && (e = Ba.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
			}
		}, css: function css(a, b, c, d) {
			var e,
			    f,
			    g,
			    h = n.camelCase(b);return b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xa(a, b, d)), "normal" === e && b in Da && (e = Da[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e;
		} }), n.each(["height", "width"], function (a, b) {
		n.cssHooks[b] = { get: function get(a, c, d) {
				return c ? za.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Ca, function () {
					return Ia(a, b, d);
				}) : Ia(a, b, d) : void 0;
			}, set: function set(a, c, d) {
				var e = d && wa(a);return Ga(a, c, d ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0);
			} };
	}), n.cssHooks.marginRight = ya(k.reliableMarginRight, function (a, b) {
		return b ? n.swap(a, { display: "inline-block" }, xa, [a, "marginRight"]) : void 0;
	}), n.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
		n.cssHooks[a + b] = { expand: function expand(c) {
				for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
					e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
				}return e;
			} }, ua.test(a) || (n.cssHooks[a + b].set = Ga);
	}), n.fn.extend({ css: function css(a, b) {
			return J(this, function (a, b, c) {
				var d,
				    e,
				    f = {},
				    g = 0;if (n.isArray(b)) {
					for (d = wa(a), e = b.length; e > g; g++) {
						f[b[g]] = n.css(a, b[g], !1, d);
					}return f;
				}return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
			}, a, b, arguments.length > 1);
		}, show: function show() {
			return Ja(this, !0);
		}, hide: function hide() {
			return Ja(this);
		}, toggle: function toggle(a) {
			return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
				S(this) ? n(this).show() : n(this).hide();
			});
		} });function Ka(a, b, c, d, e) {
		return new Ka.prototype.init(a, b, c, d, e);
	}n.Tween = Ka, Ka.prototype = { constructor: Ka, init: function init(a, b, c, d, e, f) {
			this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
		}, cur: function cur() {
			var a = Ka.propHooks[this.prop];return a && a.get ? a.get(this) : Ka.propHooks._default.get(this);
		}, run: function run(a) {
			var b,
			    c = Ka.propHooks[this.prop];return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ka.propHooks._default.set(this), this;
		} }, Ka.prototype.init.prototype = Ka.prototype, Ka.propHooks = { _default: { get: function get(a) {
				var b;return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop];
			}, set: function set(a) {
				n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
			} } }, Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = { set: function set(a) {
			a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
		} }, n.easing = { linear: function linear(a) {
			return a;
		}, swing: function swing(a) {
			return .5 - Math.cos(a * Math.PI) / 2;
		} }, n.fx = Ka.prototype.init, n.fx.step = {};var La,
	    Ma,
	    Na = /^(?:toggle|show|hide)$/,
	    Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
	    Pa = /queueHooks$/,
	    Qa = [Va],
	    Ra = { "*": [function (a, b) {
			var c = this.createTween(a, b),
			    d = c.cur(),
			    e = Oa.exec(b),
			    f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
			    g = (n.cssNumber[a] || "px" !== f && +d) && Oa.exec(n.css(c.elem, a)),
			    h = 1,
			    i = 20;if (g && g[3] !== f) {
				f = f || g[3], e = e || [], g = +d || 1;do {
					h = h || ".5", g /= h, n.style(c.elem, a, g + f);
				} while (h !== (h = c.cur() / d) && 1 !== h && --i);
			}return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c;
		}] };function Sa() {
		return setTimeout(function () {
			La = void 0;
		}), La = n.now();
	}function Ta(a, b) {
		var c,
		    d = 0,
		    e = { height: a };for (b = b ? 1 : 0; 4 > d; d += 2 - b) {
			c = R[d], e["margin" + c] = e["padding" + c] = a;
		}return b && (e.opacity = e.width = a), e;
	}function Ua(a, b, c) {
		for (var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length; g > f; f++) {
			if (d = e[f].call(c, b, a)) return d;
		}
	}function Va(a, b, c) {
		var d,
		    e,
		    f,
		    g,
		    h,
		    i,
		    j,
		    k,
		    l = this,
		    m = {},
		    o = a.style,
		    p = a.nodeType && S(a),
		    q = L.get(a, "fxshow");c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
			h.unqueued || i();
		}), h.unqueued++, l.always(function () {
			l.always(function () {
				h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
			});
		})), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
			o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
		}));for (d in b) {
			if (e = b[d], Na.exec(e)) {
				if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
					if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
				}m[d] = q && q[d] || n.style(a, d);
			} else j = void 0;
		}if (n.isEmptyObject(m)) "inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j);else {
			q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
				n(a).hide();
			}), l.done(function () {
				var b;L.remove(a, "fxshow");for (b in m) {
					n.style(a, b, m[b]);
				}
			});for (d in m) {
				g = Ua(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
			}
		}
	}function Wa(a, b) {
		var c, d, e, f, g;for (c in a) {
			if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
				f = g.expand(f), delete a[d];for (c in f) {
					c in a || (a[c] = f[c], b[c] = e);
				}
			} else b[d] = e;
		}
	}function Xa(a, b, c) {
		var d,
		    e,
		    f = 0,
		    g = Qa.length,
		    h = n.Deferred().always(function () {
			delete i.elem;
		}),
		    i = function i() {
			if (e) return !1;for (var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
				j.tweens[g].run(f);
			}return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
		},
		    j = h.promise({ elem: a, props: n.extend({}, b), opts: n.extend(!0, { specialEasing: {} }, c), originalProperties: b, originalOptions: c, startTime: La || Sa(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
				var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
			}, stop: function stop(b) {
				var c = 0,
				    d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; d > c; c++) {
					j.tweens[c].run(1);
				}return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
			} }),
		    k = j.props;for (Wa(k, j.opts.specialEasing); g > f; f++) {
			if (d = Qa[f].call(j, a, k, j.opts)) return d;
		}return n.map(k, Ua, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
	}n.Animation = n.extend(Xa, { tweener: function tweener(a, b) {
			n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");for (var c, d = 0, e = a.length; e > d; d++) {
				c = a[d], Ra[c] = Ra[c] || [], Ra[c].unshift(b);
			}
		}, prefilter: function prefilter(a, b) {
			b ? Qa.unshift(a) : Qa.push(a);
		} }), n.speed = function (a, b, c) {
		var d = a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? n.extend({}, a) : { complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b };return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
			n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
		}, d;
	}, n.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
			return this.filter(S).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
		}, animate: function animate(a, b, c, d) {
			var e = n.isEmptyObject(a),
			    f = n.speed(b, c, d),
			    g = function g() {
				var b = Xa(this, n.extend({}, a), f);(e || L.get(this, "finish")) && b.stop(!0);
			};return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
		}, stop: function stop(a, b, c) {
			var d = function d(a) {
				var b = a.stop;delete a.stop, b(c);
			};return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
				var b = !0,
				    e = null != a && a + "queueHooks",
				    f = n.timers,
				    g = L.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
					g[e] && g[e].stop && Pa.test(e) && d(g[e]);
				}for (e = f.length; e--;) {
					f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
				}(b || !c) && n.dequeue(this, a);
			});
		}, finish: function finish(a) {
			return a !== !1 && (a = a || "fx"), this.each(function () {
				var b,
				    c = L.get(this),
				    d = c[a + "queue"],
				    e = c[a + "queueHooks"],
				    f = n.timers,
				    g = d ? d.length : 0;for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
					f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
				}for (b = 0; g > b; b++) {
					d[b] && d[b].finish && d[b].finish.call(this);
				}delete c.finish;
			});
		} }), n.each(["toggle", "show", "hide"], function (a, b) {
		var c = n.fn[b];n.fn[b] = function (a, d, e) {
			return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e);
		};
	}), n.each({ slideDown: Ta("show"), slideUp: Ta("hide"), slideToggle: Ta("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
		n.fn[a] = function (a, c, d) {
			return this.animate(b, a, c, d);
		};
	}), n.timers = [], n.fx.tick = function () {
		var a,
		    b = 0,
		    c = n.timers;for (La = n.now(); b < c.length; b++) {
			a = c[b], a() || c[b] !== a || c.splice(b--, 1);
		}c.length || n.fx.stop(), La = void 0;
	}, n.fx.timer = function (a) {
		n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
	}, n.fx.interval = 13, n.fx.start = function () {
		Ma || (Ma = setInterval(n.fx.tick, n.fx.interval));
	}, n.fx.stop = function () {
		clearInterval(Ma), Ma = null;
	}, n.fx.speeds = { slow: 600, fast: 200, _default: 400 }, n.fn.delay = function (a, b) {
		return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
			var d = setTimeout(b, a);c.stop = function () {
				clearTimeout(d);
			};
		});
	}, function () {
		var a = l.createElement("input"),
		    b = l.createElement("select"),
		    c = b.appendChild(l.createElement("option"));a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value;
	}();var Ya,
	    Za,
	    $a = n.expr.attrHandle;n.fn.extend({ attr: function attr(a, b) {
			return J(this, n.attr, a, b, arguments.length > 1);
		}, removeAttr: function removeAttr(a) {
			return this.each(function () {
				n.removeAttr(this, a);
			});
		} }), n.extend({ attr: function attr(a, b, c) {
			var d,
			    e,
			    f = a.nodeType;if (a && 3 !== f && 8 !== f && 2 !== f) return _typeof(a.getAttribute) === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b));
		}, removeAttr: function removeAttr(a, b) {
			var c,
			    d,
			    e = 0,
			    f = b && b.match(E);if (f && 1 === a.nodeType) while (c = f[e++]) {
				d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c);
			}
		}, attrHooks: { type: { set: function set(a, b) {
					if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
						var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
					}
				} } } }), Za = { set: function set(a, b, c) {
			return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
		} }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
		var c = $a[b] || n.find.attr;$a[b] = function (a, b, d) {
			var e, f;return d || (f = $a[b], $a[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $a[b] = f), e;
		};
	});var _a = /^(?:input|select|textarea|button)$/i;n.fn.extend({ prop: function prop(a, b) {
			return J(this, n.prop, a, b, arguments.length > 1);
		}, removeProp: function removeProp(a) {
			return this.each(function () {
				delete this[n.propFix[a] || a];
			});
		} }), n.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function prop(a, b, c) {
			var d,
			    e,
			    f,
			    g = a.nodeType;if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
		}, propHooks: { tabIndex: { get: function get(a) {
					return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ? a.tabIndex : -1;
				} } } }), k.optSelected || (n.propHooks.selected = { get: function get(a) {
			var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
		} }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		n.propFix[this.toLowerCase()] = this;
	});var ab = /[\t\r\n\f]/g;n.fn.extend({ addClass: function addClass(a) {
			var b,
			    c,
			    d,
			    e,
			    f,
			    g,
			    h = "string" == typeof a && a,
			    i = 0,
			    j = this.length;if (n.isFunction(a)) return this.each(function (b) {
				n(this).addClass(a.call(this, b, this.className));
			});if (h) for (b = (a || "").match(E) || []; j > i; i++) {
				if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " ")) {
					f = 0;while (e = b[f++]) {
						d.indexOf(" " + e + " ") < 0 && (d += e + " ");
					}g = n.trim(d), c.className !== g && (c.className = g);
				}
			}return this;
		}, removeClass: function removeClass(a) {
			var b,
			    c,
			    d,
			    e,
			    f,
			    g,
			    h = 0 === arguments.length || "string" == typeof a && a,
			    i = 0,
			    j = this.length;if (n.isFunction(a)) return this.each(function (b) {
				n(this).removeClass(a.call(this, b, this.className));
			});if (h) for (b = (a || "").match(E) || []; j > i; i++) {
				if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : "")) {
					f = 0;while (e = b[f++]) {
						while (d.indexOf(" " + e + " ") >= 0) {
							d = d.replace(" " + e + " ", " ");
						}
					}g = a ? n.trim(d) : "", c.className !== g && (c.className = g);
				}
			}return this;
		}, toggleClass: function toggleClass(a, b) {
			var c = typeof a === "undefined" ? "undefined" : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) {
				n(this).toggleClass(a.call(this, c, this.className, b), b);
			} : function () {
				if ("string" === c) {
					var b,
					    d = 0,
					    e = n(this),
					    f = a.match(E) || [];while (b = f[d++]) {
						e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
					}
				} else (c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "");
			});
		}, hasClass: function hasClass(a) {
			for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) {
				if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0) return !0;
			}return !1;
		} });var bb = /\r/g;n.fn.extend({ val: function val(a) {
			var b,
			    c,
			    d,
			    e = this[0];{
				if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
					var e;1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
						return null == a ? "" : a + "";
					})), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
				});if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c);
			}
		} }), n.extend({ valHooks: { option: { get: function get(a) {
					var b = n.find.attr(a, "value");return null != b ? b : n.trim(n.text(a));
				} }, select: { get: function get(a) {
					for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
						if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
							if (b = n(c).val(), f) return b;g.push(b);
						}
					}return g;
				}, set: function set(a, b) {
					var c,
					    d,
					    e = a.options,
					    f = n.makeArray(b),
					    g = e.length;while (g--) {
						d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
					}return c || (a.selectedIndex = -1), f;
				} } } }), n.each(["radio", "checkbox"], function () {
		n.valHooks[this] = { set: function set(a, b) {
				return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0;
			} }, k.checkOn || (n.valHooks[this].get = function (a) {
			return null === a.getAttribute("value") ? "on" : a.value;
		});
	}), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
		n.fn[b] = function (a, c) {
			return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
		};
	}), n.fn.extend({ hover: function hover(a, b) {
			return this.mouseenter(a).mouseleave(b || a);
		}, bind: function bind(a, b, c) {
			return this.on(a, null, b, c);
		}, unbind: function unbind(a, b) {
			return this.off(a, null, b);
		}, delegate: function delegate(a, b, c, d) {
			return this.on(b, a, c, d);
		}, undelegate: function undelegate(a, b, c) {
			return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
		} });var cb = n.now(),
	    db = /\?/;n.parseJSON = function (a) {
		return JSON.parse(a + "");
	}, n.parseXML = function (a) {
		var b, c;if (!a || "string" != typeof a) return null;try {
			c = new DOMParser(), b = c.parseFromString(a, "text/xml");
		} catch (d) {
			b = void 0;
		}return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b;
	};var eb = /#.*$/,
	    fb = /([?&])_=[^&]*/,
	    gb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
	    hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	    ib = /^(?:GET|HEAD)$/,
	    jb = /^\/\//,
	    kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
	    lb = {},
	    mb = {},
	    nb = "*/".concat("*"),
	    ob = a.location.href,
	    pb = kb.exec(ob.toLowerCase()) || [];function qb(a) {
		return function (b, c) {
			"string" != typeof b && (c = b, b = "*");var d,
			    e = 0,
			    f = b.toLowerCase().match(E) || [];if (n.isFunction(c)) while (d = f[e++]) {
				"+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
			}
		};
	}function rb(a, b, c, d) {
		var e = {},
		    f = a === mb;function g(h) {
			var i;return e[h] = !0, n.each(a[h] || [], function (a, h) {
				var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
			}), i;
		}return g(b.dataTypes[0]) || !e["*"] && g("*");
	}function sb(a, b) {
		var c,
		    d,
		    e = n.ajaxSettings.flatOptions || {};for (c in b) {
			void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
		}return d && n.extend(!0, a, d), a;
	}function tb(a, b, c) {
		var d,
		    e,
		    f,
		    g,
		    h = a.contents,
		    i = a.dataTypes;while ("*" === i[0]) {
			i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
		}if (d) for (e in h) {
			if (h[e] && h[e].test(d)) {
				i.unshift(e);break;
			}
		}if (i[0] in c) f = i[0];else {
			for (e in c) {
				if (!i[0] || a.converters[e + " " + i[0]]) {
					f = e;break;
				}g || (g = e);
			}f = f || g;
		}return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
	}function ub(a, b, c, d) {
		var e,
		    f,
		    g,
		    h,
		    i,
		    j = {},
		    k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
			j[g.toLowerCase()] = a.converters[g];
		}f = k.shift();while (f) {
			if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
				if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
					if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
						g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
					}
				}if (g !== !0) if (g && a["throws"]) b = g(b);else try {
					b = g(b);
				} catch (l) {
					return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
				}
			}
		}return { state: "success", data: b };
	}n.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: ob, type: "GET", isLocal: hb.test(pb[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": nb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
			return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a);
		}, ajaxPrefilter: qb(lb), ajaxTransport: qb(mb), ajax: function ajax(a, b) {
			"object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) && (b = a, a = void 0), b = b || {};var c,
			    d,
			    e,
			    f,
			    g,
			    h,
			    i,
			    j,
			    k = n.ajaxSetup({}, b),
			    l = k.context || k,
			    m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
			    o = n.Deferred(),
			    p = n.Callbacks("once memory"),
			    q = k.statusCode || {},
			    r = {},
			    s = {},
			    t = 0,
			    u = "canceled",
			    v = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
					var b;if (2 === t) {
						if (!f) {
							f = {};while (b = gb.exec(e)) {
								f[b[1].toLowerCase()] = b[2];
							}
						}b = f[a.toLowerCase()];
					}return null == b ? null : b;
				}, getAllResponseHeaders: function getAllResponseHeaders() {
					return 2 === t ? e : null;
				}, setRequestHeader: function setRequestHeader(a, b) {
					var c = a.toLowerCase();return t || (a = s[c] = s[c] || a, r[a] = b), this;
				}, overrideMimeType: function overrideMimeType(a) {
					return t || (k.mimeType = a), this;
				}, statusCode: function statusCode(a) {
					var b;if (a) if (2 > t) for (b in a) {
						q[b] = [q[b], a[b]];
					} else v.always(a[v.status]);return this;
				}, abort: function abort(a) {
					var b = a || u;return c && c.abort(b), x(0, b), this;
				} };if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || ob) + "").replace(eb, "").replace(jb, pb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = kb.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pb[3] || ("http:" === pb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), rb(lb, k, b, v), 2 === t) return v;i = n.event && k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !ib.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (db.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = fb.test(d) ? d.replace(fb, "$1_=" + cb++) : d + (db.test(d) ? "&" : "?") + "_=" + cb++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "") : k.accepts["*"]);for (j in k.headers) {
				v.setRequestHeader(j, k.headers[j]);
			}if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();u = "abort";for (j in { success: 1, error: 1, complete: 1 }) {
				v[j](k[j]);
			}if (c = rb(mb, k, b, v)) {
				v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
					v.abort("timeout");
				}, k.timeout));try {
					t = 1, c.send(r, x);
				} catch (w) {
					if (!(2 > t)) throw w;x(-1, w);
				}
			} else x(-1, "No Transport");function x(a, b, f, h) {
				var j,
				    r,
				    s,
				    u,
				    w,
				    x = b;2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = tb(k, v, f)), u = ub(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")));
			}return v;
		}, getJSON: function getJSON(a, b, c) {
			return n.get(a, b, c, "json");
		}, getScript: function getScript(a, b) {
			return n.get(a, void 0, b, "script");
		} }), n.each(["get", "post"], function (a, b) {
		n[b] = function (a, c, d, e) {
			return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({ url: a, type: b, dataType: e, data: c, success: d });
		};
	}), n._evalUrl = function (a) {
		return n.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 });
	}, n.fn.extend({ wrapAll: function wrapAll(a) {
			var b;return n.isFunction(a) ? this.each(function (b) {
				n(this).wrapAll(a.call(this, b));
			}) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
				var a = this;while (a.firstElementChild) {
					a = a.firstElementChild;
				}return a;
			}).append(this)), this);
		}, wrapInner: function wrapInner(a) {
			return this.each(n.isFunction(a) ? function (b) {
				n(this).wrapInner(a.call(this, b));
			} : function () {
				var b = n(this),
				    c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
			});
		}, wrap: function wrap(a) {
			var b = n.isFunction(a);return this.each(function (c) {
				n(this).wrapAll(b ? a.call(this, c) : a);
			});
		}, unwrap: function unwrap() {
			return this.parent().each(function () {
				n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
			}).end();
		} }), n.expr.filters.hidden = function (a) {
		return a.offsetWidth <= 0 && a.offsetHeight <= 0;
	}, n.expr.filters.visible = function (a) {
		return !n.expr.filters.hidden(a);
	};var vb = /%20/g,
	    wb = /\[\]$/,
	    xb = /\r?\n/g,
	    yb = /^(?:submit|button|image|reset|file)$/i,
	    zb = /^(?:input|select|textarea|keygen)/i;function Ab(a, b, c, d) {
		var e;if (n.isArray(b)) n.each(b, function (b, e) {
			c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? b : "") + "]", e, c, d);
		});else if (c || "object" !== n.type(b)) d(a, b);else for (e in b) {
			Ab(a + "[" + e + "]", b[e], c, d);
		}
	}n.param = function (a, b) {
		var c,
		    d = [],
		    e = function e(a, b) {
			b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
		};if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
			e(this.name, this.value);
		});else for (c in a) {
			Ab(c, a[c], b, e);
		}return d.join("&").replace(vb, "+");
	}, n.fn.extend({ serialize: function serialize() {
			return n.param(this.serializeArray());
		}, serializeArray: function serializeArray() {
			return this.map(function () {
				var a = n.prop(this, "elements");return a ? n.makeArray(a) : this;
			}).filter(function () {
				var a = this.type;return this.name && !n(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a));
			}).map(function (a, b) {
				var c = n(this).val();return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
					return { name: b.name, value: a.replace(xb, "\r\n") };
				}) : { name: b.name, value: c.replace(xb, "\r\n") };
			}).get();
		} }), n.ajaxSettings.xhr = function () {
		try {
			return new XMLHttpRequest();
		} catch (a) {}
	};var Bb = 0,
	    Cb = {},
	    Db = { 0: 200, 1223: 204 },
	    Eb = n.ajaxSettings.xhr();a.attachEvent && a.attachEvent("onunload", function () {
		for (var a in Cb) {
			Cb[a]();
		}
	}), k.cors = !!Eb && "withCredentials" in Eb, k.ajax = Eb = !!Eb, n.ajaxTransport(function (a) {
		var b;return k.cors || Eb && !a.crossDomain ? { send: function send(c, d) {
				var e,
				    f = a.xhr(),
				    g = ++Bb;if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) {
					f[e] = a.xhrFields[e];
				}a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");for (e in c) {
					f.setRequestHeader(e, c[e]);
				}b = function (_b2) {
					function b(_x4) {
						return _b2.apply(this, arguments);
					}

					b.toString = function () {
						return _b2.toString();
					};

					return b;
				}(function (a) {
					return function () {
						b && (delete Cb[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Db[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? { text: f.responseText } : void 0, f.getAllResponseHeaders()));
					};
				}), f.onload = b(), f.onerror = b("error"), b = Cb[g] = b("abort");try {
					f.send(a.hasContent && a.data || null);
				} catch (h) {
					if (b) throw h;
				}
			}, abort: function abort() {
				b && b();
			} } : void 0;
	}), n.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function textScript(a) {
				return n.globalEval(a), a;
			} } }), n.ajaxPrefilter("script", function (a) {
		void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
	}), n.ajaxTransport("script", function (a) {
		if (a.crossDomain) {
			var b, _c;return { send: function send(d, e) {
					b = n("<script>").prop({ async: !0, charset: a.scriptCharset, src: a.url }).on("load error", _c = function c(a) {
						b.remove(), _c = null, a && e("error" === a.type ? 404 : 200, a.type);
					}), l.head.appendChild(b[0]);
				}, abort: function abort() {
					_c && _c();
				} };
		}
	});var Fb = [],
	    Gb = /(=)\?(?=&|$)|\?\?/;n.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
			var a = Fb.pop() || n.expando + "_" + cb++;return this[a] = !0, a;
		} }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
		var e,
		    f,
		    g,
		    h = b.jsonp !== !1 && (Gb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(b.data) && "data");return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Gb, "$1" + e) : b.jsonp !== !1 && (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
			return g || n.error(e + " was not called"), g[0];
		}, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
			g = arguments;
		}, d.always(function () {
			a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
		}), "script") : void 0;
	}), n.parseHTML = function (a, b, c) {
		if (!a || "string" != typeof a) return null;"boolean" == typeof b && (c = b, b = !1), b = b || l;var d = v.exec(a),
		    e = !c && [];return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes));
	};var Hb = n.fn.load;n.fn.load = function (a, b, c) {
		if ("string" != typeof a && Hb) return Hb.apply(this, arguments);var d,
		    e,
		    f,
		    g = this,
		    h = a.indexOf(" ");return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (e = "POST"), g.length > 0 && n.ajax({ url: a, type: e, dataType: "html", data: b }).done(function (a) {
			f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
		}).complete(c && function (a, b) {
			g.each(c, f || [a.responseText, b, a]);
		}), this;
	}, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
		n.fn[b] = function (a) {
			return this.on(b, a);
		};
	}), n.expr.filters.animated = function (a) {
		return n.grep(n.timers, function (b) {
			return a === b.elem;
		}).length;
	};var Ib = a.document.documentElement;function Jb(a) {
		return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
	}n.offset = { setOffset: function setOffset(a, b, c) {
			var d,
			    e,
			    f,
			    g,
			    h,
			    i,
			    j,
			    k = n.css(a, "position"),
			    l = n(a),
			    m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
		} }, n.fn.extend({ offset: function offset(a) {
			if (arguments.length) return void 0 === a ? this : this.each(function (b) {
				n.offset.setOffset(this, a, b);
			});var b,
			    c,
			    d = this[0],
			    e = { top: 0, left: 0 },
			    f = d && d.ownerDocument;if (f) return b = f.documentElement, n.contains(b, d) ? (_typeof(d.getBoundingClientRect) !== U && (e = d.getBoundingClientRect()), c = Jb(f), { top: e.top + c.pageYOffset - b.clientTop, left: e.left + c.pageXOffset - b.clientLeft }) : e;
		}, position: function position() {
			if (this[0]) {
				var a,
				    b,
				    c = this[0],
				    d = { top: 0, left: 0 };return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), { top: b.top - d.top - n.css(c, "marginTop", !0), left: b.left - d.left - n.css(c, "marginLeft", !0) };
			}
		}, offsetParent: function offsetParent() {
			return this.map(function () {
				var a = this.offsetParent || Ib;while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) {
					a = a.offsetParent;
				}return a || Ib;
			});
		} }), n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (b, c) {
		var d = "pageYOffset" === c;n.fn[b] = function (e) {
			return J(this, function (b, e, f) {
				var g = Jb(b);return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f);
			}, b, e, arguments.length, null);
		};
	}), n.each(["top", "left"], function (a, b) {
		n.cssHooks[b] = ya(k.pixelPosition, function (a, c) {
			return c ? (c = xa(a, b), va.test(c) ? n(a).position()[b] + "px" : c) : void 0;
		});
	}), n.each({ Height: "height", Width: "width" }, function (a, b) {
		n.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
			n.fn[d] = function (d, e) {
				var f = arguments.length && (c || "boolean" != typeof d),
				    g = c || (d === !0 || e === !0 ? "margin" : "border");return J(this, function (b, c, d) {
					var e;return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
				}, b, f ? d : void 0, f, null);
			};
		});
	}), n.fn.size = function () {
		return this.length;
	}, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
		return n;
	});var Kb = a.jQuery,
	    Lb = a.$;return n.noConflict = function (b) {
		return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n;
	}, (typeof b === "undefined" ? "undefined" : _typeof(b)) === U && (a.jQuery = a.$ = n), n;
});

/*! jQuery UI - v1.11.4 - 2015-09-01
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, position.js, autocomplete.js, menu.js, slider.js
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function (e) {
	"function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery);
})(function (e) {
	function t(t, s) {
		var n,
		    a,
		    o,
		    r = t.nodeName.toLowerCase();return "area" === r ? (n = t.parentNode, a = n.name, t.href && a && "map" === n.nodeName.toLowerCase() ? (o = e("img[usemap='#" + a + "']")[0], !!o && i(o)) : !1) : (/^(input|select|textarea|button|object)$/.test(r) ? !t.disabled : "a" === r ? t.href || s : s) && i(t);
	}function i(t) {
		return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
			return "hidden" === e.css(this, "visibility");
		}).length;
	}e.ui = e.ui || {}, e.extend(e.ui, { version: "1.11.4", keyCode: { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 } }), e.fn.extend({ scrollParent: function scrollParent(t) {
			var i = this.css("position"),
			    s = "absolute" === i,
			    n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
			    a = this.parents().filter(function () {
				var t = e(this);return s && "static" === t.css("position") ? !1 : n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"));
			}).eq(0);return "fixed" !== i && a.length ? a : e(this[0].ownerDocument || document);
		}, uniqueId: function () {
			var e = 0;return function () {
				return this.each(function () {
					this.id || (this.id = "ui-id-" + ++e);
				});
			};
		}(), removeUniqueId: function removeUniqueId() {
			return this.each(function () {
				/^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id");
			});
		} }), e.extend(e.expr[":"], { data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
			return function (i) {
				return !!e.data(i, t);
			};
		}) : function (t, i, s) {
			return !!e.data(t, s[3]);
		}, focusable: function focusable(i) {
			return t(i, !isNaN(e.attr(i, "tabindex")));
		}, tabbable: function tabbable(i) {
			var s = e.attr(i, "tabindex"),
			    n = isNaN(s);return (n || s >= 0) && t(i, !n);
		} }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (t, i) {
		function s(t, i, s, a) {
			return e.each(n, function () {
				i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0);
			}), i;
		}var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
		    a = i.toLowerCase(),
		    o = { innerWidth: e.fn.innerWidth, innerHeight: e.fn.innerHeight, outerWidth: e.fn.outerWidth, outerHeight: e.fn.outerHeight };e.fn["inner" + i] = function (t) {
			return void 0 === t ? o["inner" + i].call(this) : this.each(function () {
				e(this).css(a, s(this, t) + "px");
			});
		}, e.fn["outer" + i] = function (t, n) {
			return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function () {
				e(this).css(a, s(this, t, !0, n) + "px");
			});
		};
	}), e.fn.addBack || (e.fn.addBack = function (e) {
		return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
	}), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) {
		return function (i) {
			return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this);
		};
	}(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({ focus: function (t) {
			return function (i, s) {
				return "number" == typeof i ? this.each(function () {
					var t = this;setTimeout(function () {
						e(t).focus(), s && s.call(t);
					}, i);
				}) : t.apply(this, arguments);
			};
		}(e.fn.focus), disableSelection: function () {
			var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";return function () {
				return this.bind(e + ".ui-disableSelection", function (e) {
					e.preventDefault();
				});
			};
		}(), enableSelection: function enableSelection() {
			return this.unbind(".ui-disableSelection");
		}, zIndex: function zIndex(t) {
			if (void 0 !== t) return this.css("zIndex", t);if (this.length) for (var i, s, n = e(this[0]); n.length && n[0] !== document;) {
				if (i = n.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(n.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;n = n.parent();
			}return 0;
		} }), e.ui.plugin = { add: function add(t, i, s) {
			var n,
			    a = e.ui[t].prototype;for (n in s) {
				a.plugins[n] = a.plugins[n] || [], a.plugins[n].push([i, s[n]]);
			}
		}, call: function call(e, t, i, s) {
			var n,
			    a = e.plugins[t];if (a && (s || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)) for (n = 0; a.length > n; n++) {
				e.options[a[n][0]] && a[n][1].apply(e.element, i);
			}
		} };var s = 0,
	    n = Array.prototype.slice;e.cleanData = function (t) {
		return function (i) {
			var s, n, a;for (a = 0; null != (n = i[a]); a++) {
				try {
					s = e._data(n, "events"), s && s.remove && e(n).triggerHandler("remove");
				} catch (o) {}
			}t(i);
		};
	}(e.cleanData), e.widget = function (t, i, s) {
		var n,
		    a,
		    o,
		    r,
		    h = {},
		    l = t.split(".")[0];return t = t.split(".")[1], n = l + "-" + t, s || (s = i, i = e.Widget), e.expr[":"][n.toLowerCase()] = function (t) {
			return !!e.data(t, n);
		}, e[l] = e[l] || {}, a = e[l][t], o = e[l][t] = function (e, t) {
			return this._createWidget ? (arguments.length && this._createWidget(e, t), void 0) : new o(e, t);
		}, e.extend(o, a, { version: s.version, _proto: e.extend({}, s), _childConstructors: [] }), r = new i(), r.options = e.widget.extend({}, r.options), e.each(s, function (t, s) {
			return e.isFunction(s) ? (h[t] = function () {
				var e = function e() {
					return i.prototype[t].apply(this, arguments);
				},
				    n = function n(e) {
					return i.prototype[t].apply(this, e);
				};return function () {
					var t,
					    i = this._super,
					    a = this._superApply;return this._super = e, this._superApply = n, t = s.apply(this, arguments), this._super = i, this._superApply = a, t;
				};
			}(), void 0) : (h[t] = s, void 0);
		}), o.prototype = e.widget.extend(r, { widgetEventPrefix: a ? r.widgetEventPrefix || t : t }, h, { constructor: o, namespace: l, widgetName: t, widgetFullName: n }), a ? (e.each(a._childConstructors, function (t, i) {
			var s = i.prototype;e.widget(s.namespace + "." + s.widgetName, o, i._proto);
		}), delete a._childConstructors) : i._childConstructors.push(o), e.widget.bridge(t, o), o;
	}, e.widget.extend = function (t) {
		for (var i, s, a = n.call(arguments, 1), o = 0, r = a.length; r > o; o++) {
			for (i in a[o]) {
				s = a[o][i], a[o].hasOwnProperty(i) && void 0 !== s && (t[i] = e.isPlainObject(s) ? e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], s) : e.widget.extend({}, s) : s);
			}
		}return t;
	}, e.widget.bridge = function (t, i) {
		var s = i.prototype.widgetFullName || t;e.fn[t] = function (a) {
			var o = "string" == typeof a,
			    r = n.call(arguments, 1),
			    h = this;return o ? this.each(function () {
				var i,
				    n = e.data(this, s);return "instance" === a ? (h = n, !1) : n ? e.isFunction(n[a]) && "_" !== a.charAt(0) ? (i = n[a].apply(n, r), i !== n && void 0 !== i ? (h = i && i.jquery ? h.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + a + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; " + "attempted to call method '" + a + "'");
			}) : (r.length && (a = e.widget.extend.apply(null, [a].concat(r))), this.each(function () {
				var t = e.data(this, s);t ? (t.option(a || {}), t._init && t._init()) : e.data(this, s, new i(a, this));
			})), h;
		};
	}, e.Widget = function () {}, e.Widget._childConstructors = [], e.Widget.prototype = { widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: { disabled: !1, create: null }, _createWidget: function _createWidget(t, i) {
			i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = s++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, { remove: function remove(e) {
					e.target === i && this.destroy();
				} }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init();
		}, _getCreateOptions: e.noop, _getCreateEventData: e.noop, _create: e.noop, _init: e.noop, destroy: function destroy() {
			this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus");
		}, _destroy: e.noop, widget: function widget() {
			return this.element;
		}, option: function option(t, i) {
			var s,
			    n,
			    a,
			    o = t;if (0 === arguments.length) return e.widget.extend({}, this.options);if ("string" == typeof t) if (o = {}, s = t.split("."), t = s.shift(), s.length) {
				for (n = o[t] = e.widget.extend({}, this.options[t]), a = 0; s.length - 1 > a; a++) {
					n[s[a]] = n[s[a]] || {}, n = n[s[a]];
				}if (t = s.pop(), 1 === arguments.length) return void 0 === n[t] ? null : n[t];n[t] = i;
			} else {
				if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];o[t] = i;
			}return this._setOptions(o), this;
		}, _setOptions: function _setOptions(e) {
			var t;for (t in e) {
				this._setOption(t, e[t]);
			}return this;
		}, _setOption: function _setOption(e, t) {
			return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this;
		}, enable: function enable() {
			return this._setOptions({ disabled: !1 });
		}, disable: function disable() {
			return this._setOptions({ disabled: !0 });
		}, _on: function _on(t, i, s) {
			var n,
			    a = this;"boolean" != typeof t && (s = i, i = t, t = !1), s ? (i = n = e(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), e.each(s, function (s, o) {
				function r() {
					return t || a.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? a[o] : o).apply(a, arguments) : void 0;
				}"string" != typeof o && (r.guid = o.guid = o.guid || r.guid || e.guid++);var h = s.match(/^([\w:-]*)\s*(.*)$/),
				    l = h[1] + a.eventNamespace,
				    u = h[2];u ? n.delegate(u, l, r) : i.bind(l, r);
			});
		}, _off: function _off(t, i) {
			i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(i).undelegate(i), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get());
		}, _delay: function _delay(e, t) {
			function i() {
				return ("string" == typeof e ? s[e] : e).apply(s, arguments);
			}var s = this;return setTimeout(i, t || 0);
		}, _hoverable: function _hoverable(t) {
			this.hoverable = this.hoverable.add(t), this._on(t, { mouseenter: function mouseenter(t) {
					e(t.currentTarget).addClass("ui-state-hover");
				}, mouseleave: function mouseleave(t) {
					e(t.currentTarget).removeClass("ui-state-hover");
				} });
		}, _focusable: function _focusable(t) {
			this.focusable = this.focusable.add(t), this._on(t, { focusin: function focusin(t) {
					e(t.currentTarget).addClass("ui-state-focus");
				}, focusout: function focusout(t) {
					e(t.currentTarget).removeClass("ui-state-focus");
				} });
		}, _trigger: function _trigger(t, i, s) {
			var n,
			    a,
			    o = this.options[t];if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent) for (n in a) {
				n in i || (i[n] = a[n]);
			}return this.element.trigger(i, s), !(e.isFunction(o) && o.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented());
		} }, e.each({ show: "fadeIn", hide: "fadeOut" }, function (t, i) {
		e.Widget.prototype["_" + t] = function (s, n, a) {
			"string" == typeof n && (n = { effect: n });var o,
			    r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;n = n || {}, "number" == typeof n && (n = { duration: n }), o = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), o && e.effects && e.effects.effect[r] ? s[t](n) : r !== t && s[r] ? s[r](n.duration, n.easing, a) : s.queue(function (i) {
				e(this)[t](), a && a.call(s[0]), i();
			});
		};
	}), e.widget;var a = !1;e(document).mouseup(function () {
		a = !1;
	}), e.widget("ui.mouse", { version: "1.11.4", options: { cancel: "input,textarea,button,select,option", distance: 1, delay: 0 }, _mouseInit: function _mouseInit() {
			var t = this;this.element.bind("mousedown." + this.widgetName, function (e) {
				return t._mouseDown(e);
			}).bind("click." + this.widgetName, function (i) {
				return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0;
			}), this.started = !1;
		}, _mouseDestroy: function _mouseDestroy() {
			this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
		}, _mouseDown: function _mouseDown(t) {
			if (!a) {
				this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;var i = this,
				    s = 1 === t.which,
				    n = "string" == typeof this.options.cancel && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;return s && !n && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
					i.mouseDelayMet = !0;
				}, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) {
					return i._mouseMove(e);
				}, this._mouseUpDelegate = function (e) {
					return i._mouseUp(e);
				}, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), a = !0, !0)) : !0;
			}
		}, _mouseMove: function _mouseMove(t) {
			if (this._mouseMoved) {
				if (e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button) return this._mouseUp(t);if (!t.which) return this._mouseUp(t);
			}return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted);
		}, _mouseUp: function _mouseUp(t) {
			return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), a = !1, !1;
		}, _mouseDistanceMet: function _mouseDistanceMet(e) {
			return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance;
		}, _mouseDelayMet: function _mouseDelayMet() {
			return this.mouseDelayMet;
		}, _mouseStart: function _mouseStart() {}, _mouseDrag: function _mouseDrag() {}, _mouseStop: function _mouseStop() {}, _mouseCapture: function _mouseCapture() {
			return !0;
		} }), function () {
		function t(e, t, i) {
			return [parseFloat(e[0]) * (p.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (p.test(e[1]) ? i / 100 : 1)];
		}function i(t, i) {
			return parseInt(e.css(t, i), 10) || 0;
		}function s(t) {
			var i = t[0];return 9 === i.nodeType ? { width: t.width(), height: t.height(), offset: { top: 0, left: 0 } } : e.isWindow(i) ? { width: t.width(), height: t.height(), offset: { top: t.scrollTop(), left: t.scrollLeft() } } : i.preventDefault ? { width: 0, height: 0, offset: { top: i.pageY, left: i.pageX } } : { width: t.outerWidth(), height: t.outerHeight(), offset: t.offset() };
		}e.ui = e.ui || {};var n,
		    a,
		    o = Math.max,
		    r = Math.abs,
		    h = Math.round,
		    l = /left|center|right/,
		    u = /top|center|bottom/,
		    d = /[\+\-]\d+(\.[\d]+)?%?/,
		    c = /^\w+/,
		    p = /%$/,
		    f = e.fn.position;e.position = { scrollbarWidth: function scrollbarWidth() {
				if (void 0 !== n) return n;var t,
				    i,
				    s = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
				    a = s.children()[0];return e("body").append(s), t = a.offsetWidth, s.css("overflow", "scroll"), i = a.offsetWidth, t === i && (i = s[0].clientWidth), s.remove(), n = t - i;
			}, getScrollInfo: function getScrollInfo(t) {
				var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
				    s = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
				    n = "scroll" === i || "auto" === i && t.width < t.element[0].scrollWidth,
				    a = "scroll" === s || "auto" === s && t.height < t.element[0].scrollHeight;return { width: a ? e.position.scrollbarWidth() : 0, height: n ? e.position.scrollbarWidth() : 0 };
			}, getWithinInfo: function getWithinInfo(t) {
				var i = e(t || window),
				    s = e.isWindow(i[0]),
				    n = !!i[0] && 9 === i[0].nodeType;return { element: i, isWindow: s, isDocument: n, offset: i.offset() || { left: 0, top: 0 }, scrollLeft: i.scrollLeft(), scrollTop: i.scrollTop(), width: s || n ? i.width() : i.outerWidth(), height: s || n ? i.height() : i.outerHeight() };
			} }, e.fn.position = function (n) {
			if (!n || !n.of) return f.apply(this, arguments);n = e.extend({}, n);var p,
			    m,
			    g,
			    v,
			    y,
			    b,
			    _ = e(n.of),
			    x = e.position.getWithinInfo(n.within),
			    w = e.position.getScrollInfo(x),
			    k = (n.collision || "flip").split(" "),
			    T = {};return b = s(_), _[0].preventDefault && (n.at = "left top"), m = b.width, g = b.height, v = b.offset, y = e.extend({}, v), e.each(["my", "at"], function () {
				var e,
				    t,
				    i = (n[this] || "").split(" ");1 === i.length && (i = l.test(i[0]) ? i.concat(["center"]) : u.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = l.test(i[0]) ? i[0] : "center", i[1] = u.test(i[1]) ? i[1] : "center", e = d.exec(i[0]), t = d.exec(i[1]), T[this] = [e ? e[0] : 0, t ? t[0] : 0], n[this] = [c.exec(i[0])[0], c.exec(i[1])[0]];
			}), 1 === k.length && (k[1] = k[0]), "right" === n.at[0] ? y.left += m : "center" === n.at[0] && (y.left += m / 2), "bottom" === n.at[1] ? y.top += g : "center" === n.at[1] && (y.top += g / 2), p = t(T.at, m, g), y.left += p[0], y.top += p[1], this.each(function () {
				var s,
				    l,
				    u = e(this),
				    d = u.outerWidth(),
				    c = u.outerHeight(),
				    f = i(this, "marginLeft"),
				    b = i(this, "marginTop"),
				    D = d + f + i(this, "marginRight") + w.width,
				    S = c + b + i(this, "marginBottom") + w.height,
				    N = e.extend({}, y),
				    M = t(T.my, u.outerWidth(), u.outerHeight());"right" === n.my[0] ? N.left -= d : "center" === n.my[0] && (N.left -= d / 2), "bottom" === n.my[1] ? N.top -= c : "center" === n.my[1] && (N.top -= c / 2), N.left += M[0], N.top += M[1], a || (N.left = h(N.left), N.top = h(N.top)), s = { marginLeft: f, marginTop: b }, e.each(["left", "top"], function (t, i) {
					e.ui.position[k[t]] && e.ui.position[k[t]][i](N, { targetWidth: m, targetHeight: g, elemWidth: d, elemHeight: c, collisionPosition: s, collisionWidth: D, collisionHeight: S, offset: [p[0] + M[0], p[1] + M[1]], my: n.my, at: n.at, within: x, elem: u });
				}), n.using && (l = function l(e) {
					var t = v.left - N.left,
					    i = t + m - d,
					    s = v.top - N.top,
					    a = s + g - c,
					    h = { target: { element: _, left: v.left, top: v.top, width: m, height: g }, element: { element: u, left: N.left, top: N.top, width: d, height: c }, horizontal: 0 > i ? "left" : t > 0 ? "right" : "center", vertical: 0 > a ? "top" : s > 0 ? "bottom" : "middle" };d > m && m > r(t + i) && (h.horizontal = "center"), c > g && g > r(s + a) && (h.vertical = "middle"), h.important = o(r(t), r(i)) > o(r(s), r(a)) ? "horizontal" : "vertical", n.using.call(this, e, h);
				}), u.offset(e.extend(N, { using: l }));
			});
		}, e.ui.position = { fit: { left: function left(e, t) {
					var i,
					    s = t.within,
					    n = s.isWindow ? s.scrollLeft : s.offset.left,
					    a = s.width,
					    r = e.left - t.collisionPosition.marginLeft,
					    h = n - r,
					    l = r + t.collisionWidth - a - n;t.collisionWidth > a ? h > 0 && 0 >= l ? (i = e.left + h + t.collisionWidth - a - n, e.left += h - i) : e.left = l > 0 && 0 >= h ? n : h > l ? n + a - t.collisionWidth : n : h > 0 ? e.left += h : l > 0 ? e.left -= l : e.left = o(e.left - r, e.left);
				}, top: function top(e, t) {
					var i,
					    s = t.within,
					    n = s.isWindow ? s.scrollTop : s.offset.top,
					    a = t.within.height,
					    r = e.top - t.collisionPosition.marginTop,
					    h = n - r,
					    l = r + t.collisionHeight - a - n;t.collisionHeight > a ? h > 0 && 0 >= l ? (i = e.top + h + t.collisionHeight - a - n, e.top += h - i) : e.top = l > 0 && 0 >= h ? n : h > l ? n + a - t.collisionHeight : n : h > 0 ? e.top += h : l > 0 ? e.top -= l : e.top = o(e.top - r, e.top);
				} }, flip: { left: function left(e, t) {
					var i,
					    s,
					    n = t.within,
					    a = n.offset.left + n.scrollLeft,
					    o = n.width,
					    h = n.isWindow ? n.scrollLeft : n.offset.left,
					    l = e.left - t.collisionPosition.marginLeft,
					    u = l - h,
					    d = l + t.collisionWidth - o - h,
					    c = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0,
					    p = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0,
					    f = -2 * t.offset[0];0 > u ? (i = e.left + c + p + f + t.collisionWidth - o - a, (0 > i || r(u) > i) && (e.left += c + p + f)) : d > 0 && (s = e.left - t.collisionPosition.marginLeft + c + p + f - h, (s > 0 || d > r(s)) && (e.left += c + p + f));
				}, top: function top(e, t) {
					var i,
					    s,
					    n = t.within,
					    a = n.offset.top + n.scrollTop,
					    o = n.height,
					    h = n.isWindow ? n.scrollTop : n.offset.top,
					    l = e.top - t.collisionPosition.marginTop,
					    u = l - h,
					    d = l + t.collisionHeight - o - h,
					    c = "top" === t.my[1],
					    p = c ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0,
					    f = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0,
					    m = -2 * t.offset[1];0 > u ? (s = e.top + p + f + m + t.collisionHeight - o - a, (0 > s || r(u) > s) && (e.top += p + f + m)) : d > 0 && (i = e.top - t.collisionPosition.marginTop + p + f + m - h, (i > 0 || d > r(i)) && (e.top += p + f + m));
				} }, flipfit: { left: function left() {
					e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments);
				}, top: function top() {
					e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments);
				} } }, function () {
			var t,
			    i,
			    s,
			    n,
			    o,
			    r = document.getElementsByTagName("body")[0],
			    h = document.createElement("div");t = document.createElement(r ? "div" : "body"), s = { visibility: "hidden", width: 0, height: 0, border: 0, margin: 0, background: "none" }, r && e.extend(s, { position: "absolute", left: "-1000px", top: "-1000px" });for (o in s) {
				t.style[o] = s[o];
			}t.appendChild(h), i = r || document.documentElement, i.insertBefore(t, i.firstChild), h.style.cssText = "position: absolute; left: 10.7432222px;", n = e(h).offset().left, a = n > 10 && 11 > n, t.innerHTML = "", i.removeChild(t);
		}();
	}(), e.ui.position, e.widget("ui.menu", { version: "1.11.4", defaultElement: "<ul>", delay: 300, options: { icons: { submenu: "ui-icon-carat-1-e" }, items: "> *", menus: "ul", position: { my: "left-1 top", at: "right top" }, role: "menu", blur: null, focus: null, select: null }, _create: function _create() {
			this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({ role: this.options.role, tabIndex: 0 }), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({ "mousedown .ui-menu-item": function mousedownUiMenuItem(e) {
					e.preventDefault();
				}, "click .ui-menu-item": function clickUiMenuItem(t) {
					var i = e(t.target);!this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && e(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)));
				}, "mouseenter .ui-menu-item": function mouseenterUiMenuItem(t) {
					if (!this.previousFilter) {
						var i = e(t.currentTarget);i.siblings(".ui-state-active").removeClass("ui-state-active"), this.focus(t, i);
					}
				}, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function focus(e, t) {
					var i = this.active || this.element.find(this.options.items).eq(0);t || this.focus(e, i);
				}, blur: function blur(t) {
					this._delay(function () {
						e.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t);
					});
				}, keydown: "_keydown" }), this.refresh(), this._on(this.document, { click: function click(e) {
					this._closeOnDocumentClick(e) && this.collapseAll(e), this.mouseHandled = !1;
				} });
		}, _destroy: function _destroy() {
			this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
				var t = e(this);t.data("ui-menu-submenu-carat") && t.remove();
			}), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content");
		}, _keydown: function _keydown(t) {
			var i,
			    s,
			    n,
			    a,
			    o = !0;switch (t.keyCode) {case e.ui.keyCode.PAGE_UP:
					this.previousPage(t);break;case e.ui.keyCode.PAGE_DOWN:
					this.nextPage(t);break;case e.ui.keyCode.HOME:
					this._move("first", "first", t);break;case e.ui.keyCode.END:
					this._move("last", "last", t);break;case e.ui.keyCode.UP:
					this.previous(t);break;case e.ui.keyCode.DOWN:
					this.next(t);break;case e.ui.keyCode.LEFT:
					this.collapse(t);break;case e.ui.keyCode.RIGHT:
					this.active && !this.active.is(".ui-state-disabled") && this.expand(t);break;case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:
					this._activate(t);break;case e.ui.keyCode.ESCAPE:
					this.collapse(t);break;default:
					o = !1, s = this.previousFilter || "", n = String.fromCharCode(t.keyCode), a = !1, clearTimeout(this.filterTimer), n === s ? a = !0 : n = s + n, i = this._filterMenuItems(n), i = a && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i, i.length || (n = String.fromCharCode(t.keyCode), i = this._filterMenuItems(n)), i.length ? (this.focus(t, i), this.previousFilter = n, this.filterTimer = this._delay(function () {
						delete this.previousFilter;
					}, 1e3)) : delete this.previousFilter;}o && t.preventDefault();
		}, _activate: function _activate(e) {
			this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(e) : this.select(e));
		}, refresh: function refresh() {
			var t,
			    i,
			    s = this,
			    n = this.options.icons.submenu,
			    a = this.element.find(this.options.menus);this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), a.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({ role: this.options.role, "aria-hidden": "true", "aria-expanded": "false" }).each(function () {
				var t = e(this),
				    i = t.parent(),
				    s = e("<span>").addClass("ui-menu-icon ui-icon " + n).data("ui-menu-submenu-carat", !0);i.attr("aria-haspopup", "true").prepend(s), t.attr("aria-labelledby", i.attr("id"));
			}), t = a.add(this.element), i = t.find(this.options.items), i.not(".ui-menu-item").each(function () {
				var t = e(this);s._isDivider(t) && t.addClass("ui-widget-content ui-menu-divider");
			}), i.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({ tabIndex: -1, role: this._itemRole() }), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !e.contains(this.element[0], this.active[0]) && this.blur();
		}, _itemRole: function _itemRole() {
			return { menu: "menuitem", listbox: "option" }[this.options.role];
		}, _setOption: function _setOption(e, t) {
			"icons" === e && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu), "disabled" === e && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this._super(e, t);
		}, focus: function focus(e, t) {
			var i, s;this.blur(e, e && "focus" === e.type), this._scrollIntoView(t), this.active = t.first(), s = this.active.addClass("ui-state-focus").removeClass("ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"), e && "keydown" === e.type ? this._close() : this.timer = this._delay(function () {
				this._close();
			}, this.delay), i = t.children(".ui-menu"), i.length && e && /^mouse/.test(e.type) && this._startOpening(i), this.activeMenu = t.parent(), this._trigger("focus", e, { item: t });
		}, _scrollIntoView: function _scrollIntoView(t) {
			var i, s, n, a, o, r;this._hasScroll() && (i = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0, n = t.offset().top - this.activeMenu.offset().top - i - s, a = this.activeMenu.scrollTop(), o = this.activeMenu.height(), r = t.outerHeight(), 0 > n ? this.activeMenu.scrollTop(a + n) : n + r > o && this.activeMenu.scrollTop(a + n - o + r));
		}, blur: function blur(e, t) {
			t || clearTimeout(this.timer), this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", e, { item: this.active }));
		}, _startOpening: function _startOpening(e) {
			clearTimeout(this.timer), "true" === e.attr("aria-hidden") && (this.timer = this._delay(function () {
				this._close(), this._open(e);
			}, this.delay));
		}, _open: function _open(t) {
			var i = e.extend({ of: this.active }, this.options.position);clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i);
		}, collapseAll: function collapseAll(t, i) {
			clearTimeout(this.timer), this.timer = this._delay(function () {
				var s = i ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));s.length || (s = this.element), this._close(s), this.blur(t), this.activeMenu = s;
			}, this.delay);
		}, _close: function _close(e) {
			e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active");
		}, _closeOnDocumentClick: function _closeOnDocumentClick(t) {
			return !e(t.target).closest(".ui-menu").length;
		}, _isDivider: function _isDivider(e) {
			return !/[^\-\u2014\u2013\s]/.test(e.text());
		}, collapse: function collapse(e) {
			var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);t && t.length && (this._close(), this.focus(e, t));
		}, expand: function expand(e) {
			var t = this.active && this.active.children(".ui-menu ").find(this.options.items).first();t && t.length && (this._open(t.parent()), this._delay(function () {
				this.focus(e, t);
			}));
		}, next: function next(e) {
			this._move("next", "first", e);
		}, previous: function previous(e) {
			this._move("prev", "last", e);
		}, isFirstItem: function isFirstItem() {
			return this.active && !this.active.prevAll(".ui-menu-item").length;
		}, isLastItem: function isLastItem() {
			return this.active && !this.active.nextAll(".ui-menu-item").length;
		}, _move: function _move(e, t, i) {
			var s;this.active && (s = "first" === e || "last" === e ? this.active["first" === e ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[e + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[t]()), this.focus(i, s);
		}, nextPage: function nextPage(t) {
			var i, s, n;return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
				return i = e(this), 0 > i.offset().top - s - n;
			}), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())), void 0) : (this.next(t), void 0);
		}, previousPage: function previousPage(t) {
			var i, s, n;return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
				return i = e(this), i.offset().top - s + n > 0;
			}), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items).first())), void 0) : (this.next(t), void 0);
		}, _hasScroll: function _hasScroll() {
			return this.element.outerHeight() < this.element.prop("scrollHeight");
		}, select: function select(t) {
			this.active = this.active || e(t.target).closest(".ui-menu-item");var i = { item: this.active };this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, i);
		}, _filterMenuItems: function _filterMenuItems(t) {
			var i = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
			    s = RegExp("^" + i, "i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function () {
				return s.test(e.trim(e(this).text()));
			});
		} }), e.widget("ui.autocomplete", { version: "1.11.4", defaultElement: "<input>", options: { appendTo: null, autoFocus: !1, delay: 300, minLength: 1, position: { my: "left top", at: "left bottom", collision: "none" }, source: null, change: null, close: null, focus: null, open: null, response: null, search: null, select: null }, requestIndex: 0, pending: 0, _create: function _create() {
			var t,
			    i,
			    s,
			    n = this.element[0].nodeName.toLowerCase(),
			    a = "textarea" === n,
			    o = "input" === n;this.isMultiLine = a ? !0 : o ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[a || o ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, { keydown: function keydown(n) {
					if (this.element.prop("readOnly")) return t = !0, s = !0, i = !0, void 0;t = !1, s = !1, i = !1;var a = e.ui.keyCode;switch (n.keyCode) {case a.PAGE_UP:
							t = !0, this._move("previousPage", n);break;case a.PAGE_DOWN:
							t = !0, this._move("nextPage", n);break;case a.UP:
							t = !0, this._keyEvent("previous", n);break;case a.DOWN:
							t = !0, this._keyEvent("next", n);break;case a.ENTER:
							this.menu.active && (t = !0, n.preventDefault(), this.menu.select(n));break;case a.TAB:
							this.menu.active && this.menu.select(n);break;case a.ESCAPE:
							this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(n), n.preventDefault());break;default:
							i = !0, this._searchTimeout(n);}
				}, keypress: function keypress(s) {
					if (t) return t = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(), void 0;if (!i) {
						var n = e.ui.keyCode;switch (s.keyCode) {case n.PAGE_UP:
								this._move("previousPage", s);break;case n.PAGE_DOWN:
								this._move("nextPage", s);break;case n.UP:
								this._keyEvent("previous", s);break;case n.DOWN:
								this._keyEvent("next", s);}
					}
				}, input: function input(e) {
					return s ? (s = !1, e.preventDefault(), void 0) : (this._searchTimeout(e), void 0);
				}, focus: function focus() {
					this.selectedItem = null, this.previous = this._value();
				}, blur: function blur(e) {
					return this.cancelBlur ? (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), this.close(e), this._change(e), void 0);
				} }), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({ role: null }).hide().menu("instance"), this._on(this.menu.element, { mousedown: function mousedown(t) {
					t.preventDefault(), this.cancelBlur = !0, this._delay(function () {
						delete this.cancelBlur;
					});var i = this.menu.element[0];e(t.target).closest(".ui-menu-item").length || this._delay(function () {
						var t = this;this.document.one("mousedown", function (s) {
							s.target === t.element[0] || s.target === i || e.contains(i, s.target) || t.close();
						});
					});
				}, menufocus: function menufocus(t, i) {
					var s, n;return this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type)) ? (this.menu.blur(), this.document.one("mousemove", function () {
						e(t.target).trigger(t.originalEvent);
					}), void 0) : (n = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", t, { item: n }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(n.value), s = i.item.attr("aria-label") || n.value, s && e.trim(s).length && (this.liveRegion.children().hide(), e("<div>").text(s).appendTo(this.liveRegion)), void 0);
				}, menuselect: function menuselect(e, t) {
					var i = t.item.data("ui-autocomplete-item"),
					    s = this.previous;this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = s, this._delay(function () {
						this.previous = s, this.selectedItem = i;
					})), !1 !== this._trigger("select", e, { item: i }) && this._value(i.value), this.term = this._value(), this.close(e), this.selectedItem = i;
				} }), this.liveRegion = e("<span>", { role: "status", "aria-live": "assertive", "aria-relevant": "additions" }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body), this._on(this.window, { beforeunload: function beforeunload() {
					this.element.removeAttr("autocomplete");
				} });
		}, _destroy: function _destroy() {
			clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove();
		}, _setOption: function _setOption(e, t) {
			this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this._appendTo()), "disabled" === e && t && this.xhr && this.xhr.abort();
		}, _appendTo: function _appendTo() {
			var t = this.options.appendTo;return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t;
		}, _initSource: function _initSource() {
			var t,
			    i,
			    s = this;e.isArray(this.options.source) ? (t = this.options.source, this.source = function (i, s) {
				s(e.ui.autocomplete.filter(t, i.term));
			}) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (t, n) {
				s.xhr && s.xhr.abort(), s.xhr = e.ajax({ url: i, data: t, dataType: "json", success: function success(e) {
						n(e);
					}, error: function error() {
						n([]);
					} });
			}) : this.source = this.options.source;
		}, _searchTimeout: function _searchTimeout(e) {
			clearTimeout(this.searching), this.searching = this._delay(function () {
				var t = this.term === this._value(),
				    i = this.menu.element.is(":visible"),
				    s = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;(!t || t && !i && !s) && (this.selectedItem = null, this.search(null, e));
			}, this.options.delay);
		}, search: function search(e, t) {
			return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(e) : void 0;
		}, _search: function _search(e) {
			this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({ term: e }, this._response());
		}, _response: function _response() {
			var t = ++this.requestIndex;return e.proxy(function (e) {
				t === this.requestIndex && this.__response(e), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading");
			}, this);
		}, __response: function __response(e) {
			e && (e = this._normalize(e)), this._trigger("response", null, { content: e }), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close();
		}, close: function close(e) {
			this.cancelSearch = !0, this._close(e);
		}, _close: function _close(e) {
			this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e));
		}, _change: function _change(e) {
			this.previous !== this._value() && this._trigger("change", e, { item: this.selectedItem });
		}, _normalize: function _normalize(t) {
			return t.length && t[0].label && t[0].value ? t : e.map(t, function (t) {
				return "string" == typeof t ? { label: t, value: t } : e.extend({}, t, { label: t.label || t.value, value: t.value || t.label });
			});
		}, _suggest: function _suggest(t) {
			var i = this.menu.element.empty();this._renderMenu(i, t), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(e.extend({ of: this.element }, this.options.position)), this.options.autoFocus && this.menu.next();
		}, _resizeMenu: function _resizeMenu() {
			var e = this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()));
		}, _renderMenu: function _renderMenu(t, i) {
			var s = this;e.each(i, function (e, i) {
				s._renderItemData(t, i);
			});
		}, _renderItemData: function _renderItemData(e, t) {
			return this._renderItem(e, t).data("ui-autocomplete-item", t);
		}, _renderItem: function _renderItem(t, i) {
			return e("<li>").text(i.label).appendTo(t);
		}, _move: function _move(e, t) {
			return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this.isMultiLine || this._value(this.term), this.menu.blur(), void 0) : (this.menu[e](t), void 0) : (this.search(null, t), void 0);
		}, widget: function widget() {
			return this.menu.element;
		}, _value: function _value() {
			return this.valueMethod.apply(this.element, arguments);
		}, _keyEvent: function _keyEvent(e, t) {
			(!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(e, t), t.preventDefault());
		} }), e.extend(e.ui.autocomplete, { escapeRegex: function escapeRegex(e) {
			return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
		}, filter: function filter(t, i) {
			var s = RegExp(e.ui.autocomplete.escapeRegex(i), "i");return e.grep(t, function (e) {
				return s.test(e.label || e.value || e);
			});
		} }), e.widget("ui.autocomplete", e.ui.autocomplete, { options: { messages: { noResults: "No search results.", results: function results(e) {
					return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate.";
				} } }, __response: function __response(t) {
			var i;this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.children().hide(), e("<div>").text(i).appendTo(this.liveRegion));
		} }), e.ui.autocomplete, e.widget("ui.slider", e.ui.mouse, { version: "1.11.4", widgetEventPrefix: "slide", options: { animate: !1, distance: 0, max: 100, min: 0, orientation: "horizontal", range: !1, step: 1, value: 0, values: null, change: null, slide: null, start: null, stop: null }, numPages: 5, _create: function _create() {
			this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1;
		}, _refresh: function _refresh() {
			this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
		}, _createHandles: function _createHandles() {
			var t,
			    i,
			    s = this.options,
			    n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
			    a = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
			    o = [];for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), t = n.length; i > t; t++) {
				o.push(a);
			}this.handles = n.add(e(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function (t) {
				e(this).data("ui-slider-handle-index", t);
			});
		}, _createRange: function _createRange() {
			var t = this.options,
			    i = "";t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({ left: "", bottom: "" }) : (this.range = e("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === t.range || "max" === t.range ? " ui-slider-range-" + t.range : ""))) : (this.range && this.range.remove(), this.range = null);
		}, _setupEvents: function _setupEvents() {
			this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles);
		}, _destroy: function _destroy() {
			this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy();
		}, _mouseCapture: function _mouseCapture(t) {
			var i,
			    s,
			    n,
			    a,
			    o,
			    r,
			    h,
			    l,
			    u = this,
			    d = this.options;return d.disabled ? !1 : (this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }, this.elementOffset = this.element.offset(), i = { x: t.pageX, y: t.pageY }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function (t) {
				var i = Math.abs(s - u.values(t));(n > i || n === i && (t === u._lastChangedValue || u.values(t) === d.min)) && (n = i, a = e(this), o = t);
			}), r = this._start(t, o), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, a.addClass("ui-state-active").focus(), h = a.offset(), l = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? { left: 0, top: 0 } : { left: t.pageX - h.left - a.width() / 2, top: t.pageY - h.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0) }, this.handles.hasClass("ui-state-hover") || this._slide(t, o, s), this._animateOff = !0, !0));
		}, _mouseStart: function _mouseStart() {
			return !0;
		}, _mouseDrag: function _mouseDrag(e) {
			var t = { x: e.pageX, y: e.pageY },
			    i = this._normValueFromMouse(t);return this._slide(e, this._handleIndex, i), !1;
		}, _mouseStop: function _mouseStop(e) {
			return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1;
		}, _detectOrientation: function _detectOrientation() {
			this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
		}, _normValueFromMouse: function _normValueFromMouse(e) {
			var t, i, s, n, a;return "horizontal" === this.orientation ? (t = this.elementSize.width, i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / t, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), a = this._valueMin() + s * n, this._trimAlignValue(a);
		}, _start: function _start(e, t) {
			var i = { handle: this.handles[t], value: this.value() };return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", e, i);
		}, _slide: function _slide(e, t, i) {
			var s, n, a;this.options.values && this.options.values.length ? (s = this.values(t ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === t && i > s || 1 === t && s > i) && (i = s), i !== this.values(t) && (n = this.values(), n[t] = i, a = this._trigger("slide", e, { handle: this.handles[t], value: i, values: n }), s = this.values(t ? 0 : 1), a !== !1 && this.values(t, i))) : i !== this.value() && (a = this._trigger("slide", e, { handle: this.handles[t], value: i }), a !== !1 && this.value(i));
		}, _stop: function _stop(e, t) {
			var i = { handle: this.handles[t], value: this.value() };this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("stop", e, i);
		}, _change: function _change(e, t) {
			if (!this._keySliding && !this._mouseSliding) {
				var i = { handle: this.handles[t], value: this.value() };this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._lastChangedValue = t, this._trigger("change", e, i);
			}
		}, value: function value(e) {
			return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0), void 0) : this._value();
		}, values: function values(t, i) {
			var s, n, a;if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(i), this._refreshValue(), this._change(null, t), void 0;if (!arguments.length) return this._values();if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();for (s = this.options.values, n = arguments[0], a = 0; s.length > a; a += 1) {
				s[a] = this._trimAlignValue(n[a]), this._change(null, a);
			}this._refreshValue();
		}, _setOption: function _setOption(t, i) {
			var s,
			    n = 0;switch ("range" === t && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), e.isArray(this.options.values) && (n = this.options.values.length), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!i), this._super(t, i), t) {case "orientation":
					this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(), this.handles.css("horizontal" === i ? "bottom" : "left", "");break;case "value":
					this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;break;case "values":
					for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1) {
						this._change(null, s);
					}this._animateOff = !1;break;case "step":case "min":case "max":
					this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;break;case "range":
					this._animateOff = !0, this._refresh(), this._animateOff = !1;}
		}, _value: function _value() {
			var e = this.options.value;return e = this._trimAlignValue(e);
		}, _values: function _values(e) {
			var t, i, s;if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t);if (this.options.values && this.options.values.length) {
				for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) {
					i[s] = this._trimAlignValue(i[s]);
				}return i;
			}return [];
		}, _trimAlignValue: function _trimAlignValue(e) {
			if (this._valueMin() >= e) return this._valueMin();if (e >= this._valueMax()) return this._valueMax();var t = this.options.step > 0 ? this.options.step : 1,
			    i = (e - this._valueMin()) % t,
			    s = e - i;return 2 * Math.abs(i) >= t && (s += i > 0 ? t : -t), parseFloat(s.toFixed(5));
		}, _calculateNewMax: function _calculateNewMax() {
			var e = this.options.max,
			    t = this._valueMin(),
			    i = this.options.step,
			    s = Math.floor(+(e - t).toFixed(this._precision()) / i) * i;e = s + t, this.max = parseFloat(e.toFixed(this._precision()));
		}, _precision: function _precision() {
			var e = this._precisionOf(this.options.step);return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e;
		}, _precisionOf: function _precisionOf(e) {
			var t = "" + e,
			    i = t.indexOf(".");return -1 === i ? 0 : t.length - i - 1;
		}, _valueMin: function _valueMin() {
			return this.options.min;
		}, _valueMax: function _valueMax() {
			return this.max;
		}, _refreshValue: function _refreshValue() {
			var t,
			    i,
			    s,
			    n,
			    a,
			    o = this.options.range,
			    r = this.options,
			    h = this,
			    l = this._animateOff ? !1 : r.animate,
			    u = {};this.options.values && this.options.values.length ? this.handles.each(function (s) {
				i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())), u["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", e(this).stop(1, 1)[l ? "animate" : "css"](u, r.animate), h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({ left: i + "%" }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({ width: i - t + "%" }, { queue: !1, duration: r.animate })) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({ bottom: i + "%" }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({ height: i - t + "%" }, { queue: !1, duration: r.animate }))), t = i;
			}) : (s = this.value(), n = this._valueMin(), a = this._valueMax(), i = a !== n ? 100 * ((s - n) / (a - n)) : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](u, r.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ width: i + "%" }, r.animate), "max" === o && "horizontal" === this.orientation && this.range[l ? "animate" : "css"]({ width: 100 - i + "%" }, { queue: !1, duration: r.animate }), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ height: i + "%" }, r.animate), "max" === o && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({ height: 100 - i + "%" }, { queue: !1, duration: r.animate }));
		}, _handleEvents: { keydown: function keydown(t) {
				var i,
				    s,
				    n,
				    a,
				    o = e(t.target).data("ui-slider-handle-index");switch (t.keyCode) {case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:
						if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, e(t.target).addClass("ui-state-active"), i = this._start(t, o), i === !1)) return;}switch (a = this.options.step, s = n = this.options.values && this.options.values.length ? this.values(o) : this.value(), t.keyCode) {case e.ui.keyCode.HOME:
						n = this._valueMin();break;case e.ui.keyCode.END:
						n = this._valueMax();break;case e.ui.keyCode.PAGE_UP:
						n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);break;case e.ui.keyCode.PAGE_DOWN:
						n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);break;case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:
						if (s === this._valueMax()) return;n = this._trimAlignValue(s + a);break;case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:
						if (s === this._valueMin()) return;n = this._trimAlignValue(s - a);}this._slide(t, o, n);
			}, keyup: function keyup(t) {
				var i = e(t.target).data("ui-slider-handle-index");this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), e(t.target).removeClass("ui-state-active"));
			} } });
});
/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");+function (a) {
	"use strict";
	var b = a.fn.jquery.split(" ")[0].split(".");if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher");
}(jQuery), +function (a) {
	"use strict";
	function b() {
		var a = document.createElement("bootstrap"),
		    b = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };for (var c in b) {
			if (void 0 !== a.style[c]) return { end: b[c] };
		}return !1;
	}a.fn.emulateTransitionEnd = function (b) {
		var c = !1,
		    d = this;a(this).one("bsTransitionEnd", function () {
			c = !0;
		});var e = function e() {
			c || a(d).trigger(a.support.transition.end);
		};return setTimeout(e, b), this;
	}, a(function () {
		a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = { bindType: a.support.transition.end, delegateType: a.support.transition.end, handle: function handle(b) {
				return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0;
			} });
	});
}(jQuery), +function (a) {
	"use strict";
	function b(b) {
		return this.each(function () {
			var c = a(this),
			    e = c.data("bs.alert");e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c);
		});
	}var c = '[data-dismiss="alert"]',
	    d = function d(b) {
		a(b).on("click", c, this.close);
	};d.VERSION = "3.3.4", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
		function c() {
			g.detach().trigger("closed.bs.alert").remove();
		}var e = a(this),
		    f = e.attr("data-target");f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));var g = a(f);b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c());
	};var e = a.fn.alert;a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
		return a.fn.alert = e, this;
	}, a(document).on("click.bs.alert.data-api", c, d.prototype.close);
}(jQuery), +function (a) {
	"use strict";
	function b(b) {
		return this.each(function () {
			var d = a(this),
			    e = d.data("bs.button"),
			    f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b);
		});
	}var c = function c(b, d) {
		this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1;
	};c.VERSION = "3.3.4", c.DEFAULTS = { loadingText: "loading..." }, c.prototype.setState = function (b) {
		var c = "disabled",
		    d = this.$element,
		    e = d.is("input") ? "val" : "html",
		    f = d.data();b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
			d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c));
		}, this), 0);
	}, c.prototype.toggle = function () {
		var a = !0,
		    b = this.$element.closest('[data-toggle="buttons"]');if (b.length) {
			var c = this.$element.find("input");"radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")), a && c.prop("checked", !this.$element.hasClass("active")).trigger("change");
		} else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));a && this.$element.toggleClass("active");
	};var d = a.fn.button;a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
		return a.fn.button = d, this;
	}, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
		var d = a(c.target);d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), c.preventDefault();
	}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
		a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type));
	});
}(jQuery), +function (a) {
	"use strict";
	function b(b) {
		return this.each(function () {
			var d = a(this),
			    e = d.data("bs.carousel"),
			    f = a.extend({}, c.DEFAULTS, d.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b),
			    g = "string" == typeof b ? b : f.slide;e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle();
		});
	}var c = function c(b, _c2) {
		this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = _c2, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
	};c.VERSION = "3.3.4", c.TRANSITION_DURATION = 600, c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, c.prototype.keydown = function (a) {
		if (!/input|textarea/i.test(a.target.tagName)) {
			switch (a.which) {case 37:
					this.prev();break;case 39:
					this.next();break;default:
					return;}a.preventDefault();
		}
	}, c.prototype.cycle = function (b) {
		return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this;
	}, c.prototype.getItemIndex = function (a) {
		return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active);
	}, c.prototype.getItemForDirection = function (a, b) {
		var c = this.getItemIndex(b),
		    d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;if (d && !this.options.wrap) return b;var e = "prev" == a ? -1 : 1,
		    f = (c + e) % this.$items.length;return this.$items.eq(f);
	}, c.prototype.to = function (a) {
		var b = this,
		    c = this.getItemIndex(this.$active = this.$element.find(".item.active"));return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
			b.to(a);
		}) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
	}, c.prototype.pause = function (b) {
		return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this;
	}, c.prototype.next = function () {
		return this.sliding ? void 0 : this.slide("next");
	}, c.prototype.prev = function () {
		return this.sliding ? void 0 : this.slide("prev");
	}, c.prototype.slide = function (b, d) {
		var e = this.$element.find(".item.active"),
		    f = d || this.getItemForDirection(b, e),
		    g = this.interval,
		    h = "next" == b ? "left" : "right",
		    i = this;if (f.hasClass("active")) return this.sliding = !1;var j = f[0],
		    k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h });if (this.$element.trigger(k), !k.isDefaultPrevented()) {
			if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
				this.$indicators.find(".active").removeClass("active");var l = a(this.$indicators.children()[this.getItemIndex(f)]);l && l.addClass("active");
			}var m = a.Event("slid.bs.carousel", { relatedTarget: j, direction: h });return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
				f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () {
					i.$element.trigger(m);
				}, 0);
			}).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this;
		}
	};var d = a.fn.carousel;a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
		return a.fn.carousel = d, this;
	};var e = function e(c) {
		var d,
		    e = a(this),
		    f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));if (f.hasClass("carousel")) {
			var g = a.extend({}, f.data(), e.data()),
			    h = e.attr("data-slide-to");h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault();
		}
	};a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
		a('[data-ride="carousel"]').each(function () {
			var c = a(this);b.call(c, c.data());
		});
	});
}(jQuery), +function (a) {
	"use strict";
	function b(b) {
		var c,
		    d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");return a(d);
	}function c(b) {
		return this.each(function () {
			var c = a(this),
			    e = c.data("bs.collapse"),
			    f = a.extend({}, d.DEFAULTS, c.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b);!e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]();
		});
	}var d = function d(b, c) {
		this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle();
	};d.VERSION = "3.3.4", d.TRANSITION_DURATION = 350, d.DEFAULTS = { toggle: !0 }, d.prototype.dimension = function () {
		var a = this.$element.hasClass("width");return a ? "width" : "height";
	}, d.prototype.show = function () {
		if (!this.transitioning && !this.$element.hasClass("in")) {
			var b,
			    e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
				var f = a.Event("show.bs.collapse");if (this.$element.trigger(f), !f.isDefaultPrevented()) {
					e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));var g = this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;var h = function h() {
						this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse");
					};if (!a.support.transition) return h.call(this);var i = a.camelCase(["scroll", g].join("-"));this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]);
				}
			}
		}
	}, d.prototype.hide = function () {
		if (!this.transitioning && this.$element.hasClass("in")) {
			var b = a.Event("hide.bs.collapse");if (this.$element.trigger(b), !b.isDefaultPrevented()) {
				var c = this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;var e = function e() {
					this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
				};return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this);
			}
		}
	}, d.prototype.toggle = function () {
		this[this.$element.hasClass("in") ? "hide" : "show"]();
	}, d.prototype.getParent = function () {
		return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
			var e = a(d);this.addAriaAndCollapsedClass(b(e), e);
		}, this)).end();
	}, d.prototype.addAriaAndCollapsedClass = function (a, b) {
		var c = a.hasClass("in");a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c);
	};var e = a.fn.collapse;a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
		return a.fn.collapse = e, this;
	}, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
		var e = a(this);e.attr("data-target") || d.preventDefault();var f = b(e),
		    g = f.data("bs.collapse"),
		    h = g ? "toggle" : e.data();c.call(f, h);
	});
}(jQuery), +function (a) {
	"use strict";
	function b(b) {
		b && 3 === b.which || (a(e).remove(), a(f).each(function () {
			var d = a(this),
			    e = c(d),
			    f = { relatedTarget: this };e.hasClass("open") && (e.trigger(b = a.Event("hide.bs.dropdown", f)), b.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", f)));
		}));
	}function c(b) {
		var c = b.attr("data-target");c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));var d = c && a(c);return d && d.length ? d : b.parent();
	}function d(b) {
		return this.each(function () {
			var c = a(this),
			    d = c.data("bs.dropdown");d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c);
		});
	}var e = ".dropdown-backdrop",
	    f = '[data-toggle="dropdown"]',
	    g = function g(b) {
		a(b).on("click.bs.dropdown", this.toggle);
	};g.VERSION = "3.3.4", g.prototype.toggle = function (d) {
		var e = a(this);if (!e.is(".disabled, :disabled")) {
			var f = c(e),
			    g = f.hasClass("open");if (b(), !g) {
				"ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);var h = { relatedTarget: this };if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger("shown.bs.dropdown", h);
			}return !1;
		}
	}, g.prototype.keydown = function (b) {
		if (/(38|40|27|32)/.test(b.which) && !/input|textarea/i.test(b.target.tagName)) {
			var d = a(this);if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
				var e = c(d),
				    g = e.hasClass("open");if (!g && 27 != b.which || g && 27 == b.which) return 27 == b.which && e.find(f).trigger("focus"), d.trigger("click");var h = " li:not(.disabled):visible a",
				    i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);if (i.length) {
					var j = i.index(b.target);38 == b.which && j > 0 && j--, 40 == b.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus");
				}
			}
		}
	};var h = a.fn.dropdown;a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
		return a.fn.dropdown = h, this;
	}, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
		a.stopPropagation();
	}).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', g.prototype.keydown);
}(jQuery), +function (a) {
	"use strict";
	function b(b, d) {
		return this.each(function () {
			var e = a(this),
			    f = e.data("bs.modal"),
			    g = a.extend({}, c.DEFAULTS, e.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b);f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d);
		});
	}var c = function c(b, _c3) {
		this.options = _c3, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
			this.$element.trigger("loaded.bs.modal");
		}, this));
	};c.VERSION = "3.3.4", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, c.prototype.toggle = function (a) {
		return this.isShown ? this.hide() : this.show(a);
	}, c.prototype.show = function (b) {
		var d = this,
		    e = a.Event("show.bs.modal", { relatedTarget: b });this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
			d.$element.one("mouseup.dismiss.bs.modal", function (b) {
				a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
			});
		}), this.backdrop(function () {
			var e = a.support.transition && d.$element.hasClass("fade");d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in").attr("aria-hidden", !1), d.enforceFocus();var f = a.Event("shown.bs.modal", { relatedTarget: b });e ? d.$dialog.one("bsTransitionEnd", function () {
				d.$element.trigger("focus").trigger(f);
			}).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f);
		}));
	}, c.prototype.hide = function (b) {
		b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal());
	}, c.prototype.enforceFocus = function () {
		a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
			this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus");
		}, this));
	}, c.prototype.escape = function () {
		this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
			27 == a.which && this.hide();
		}, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
	}, c.prototype.resize = function () {
		this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal");
	}, c.prototype.hideModal = function () {
		var a = this;this.$element.hide(), this.backdrop(function () {
			a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal");
		});
	}, c.prototype.removeBackdrop = function () {
		this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
	}, c.prototype.backdrop = function (b) {
		var d = this,
		    e = this.$element.hasClass("fade") ? "fade" : "";if (this.isShown && this.options.backdrop) {
			var f = a.support.transition && e;if (this.$backdrop = a('<div class="modal-backdrop ' + e + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
				return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()));
			}, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b();
		} else if (!this.isShown && this.$backdrop) {
			this.$backdrop.removeClass("in");var g = function g() {
				d.removeBackdrop(), b && b();
			};a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g();
		} else b && b();
	}, c.prototype.handleUpdate = function () {
		this.adjustDialog();
	}, c.prototype.adjustDialog = function () {
		var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;this.$element.css({ paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "" });
	}, c.prototype.resetAdjustments = function () {
		this.$element.css({ paddingLeft: "", paddingRight: "" });
	}, c.prototype.checkScrollbar = function () {
		var a = window.innerWidth;if (!a) {
			var b = document.documentElement.getBoundingClientRect();a = b.right - Math.abs(b.left);
		}this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar();
	}, c.prototype.setScrollbar = function () {
		var a = parseInt(this.$body.css("padding-right") || 0, 10);this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth);
	}, c.prototype.resetScrollbar = function () {
		this.$body.css("padding-right", this.originalBodyPad);
	}, c.prototype.measureScrollbar = function () {
		var a = document.createElement("div");a.className = "modal-scrollbar-measure", this.$body.append(a);var b = a.offsetWidth - a.clientWidth;return this.$body[0].removeChild(a), b;
	};var d = a.fn.modal;a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
		return a.fn.modal = d, this;
	}, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
		var d = a(this),
		    e = d.attr("href"),
		    f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
		    g = f.data("bs.modal") ? "toggle" : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
			a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
				d.is(":visible") && d.trigger("focus");
			});
		}), b.call(f, g, this);
	});
}(jQuery), +function (a) {
	"use strict";
	function b(b) {
		return this.each(function () {
			var d = a(this),
			    e = d.data("bs.tooltip"),
			    f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;(e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]());
		});
	}var c = function c(a, b) {
		this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.init("tooltip", a, b);
	};c.VERSION = "3.3.4", c.TRANSITION_DURATION = 150, c.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, c.prototype.init = function (b, c, d) {
		if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(this.options.viewport.selector || this.options.viewport), this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
			var g = e[f];if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));else if ("manual" != g) {
				var h = "hover" == g ? "mouseenter" : "focusin",
				    i = "hover" == g ? "mouseleave" : "focusout";this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this));
			}
		}this.options.selector ? this._options = a.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle();
	}, c.prototype.getDefaults = function () {
		return c.DEFAULTS;
	}, c.prototype.getOptions = function (b) {
		return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = { show: b.delay, hide: b.delay }), b;
	}, c.prototype.getDelegateOptions = function () {
		var b = {},
		    c = this.getDefaults();return this._options && a.each(this._options, function (a, d) {
			c[a] != d && (b[a] = d);
		}), b;
	}, c.prototype.enter = function (b) {
		var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);return c && c.$tip && c.$tip.is(":visible") ? void (c.hoverState = "in") : (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function () {
			"in" == c.hoverState && c.show();
		}, c.options.delay.show)) : c.show());
	}, c.prototype.leave = function (b) {
		var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function () {
			"out" == c.hoverState && c.hide();
		}, c.options.delay.hide)) : c.hide();
	}, c.prototype.show = function () {
		var b = a.Event("show.bs." + this.type);if (this.hasContent() && this.enabled) {
			this.$element.trigger(b);var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);if (b.isDefaultPrevented() || !d) return;var e = this,
			    f = this.tip(),
			    g = this.getUID(this.type);this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
			    i = /\s?auto?\s?/i,
			    j = i.test(h);j && (h = h.replace(i, "") || "top"), f.detach().css({ top: 0, left: 0, display: "block" }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element);var k = this.getPosition(),
			    l = f[0].offsetWidth,
			    m = f[0].offsetHeight;if (j) {
				var n = h,
				    o = this.options.container ? a(this.options.container) : this.$element.parent(),
				    p = this.getPosition(o);h = "bottom" == h && k.bottom + m > p.bottom ? "top" : "top" == h && k.top - m < p.top ? "bottom" : "right" == h && k.right + l > p.width ? "left" : "left" == h && k.left - l < p.left ? "right" : h, f.removeClass(n).addClass(h);
			}var q = this.getCalculatedOffset(h, k, l, m);this.applyPlacement(q, h);var r = function r() {
				var a = e.hoverState;e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e);
			};a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", r).emulateTransitionEnd(c.TRANSITION_DURATION) : r();
		}
	}, c.prototype.applyPlacement = function (b, c) {
		var d = this.tip(),
		    e = d[0].offsetWidth,
		    f = d[0].offsetHeight,
		    g = parseInt(d.css("margin-top"), 10),
		    h = parseInt(d.css("margin-left"), 10);isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top = b.top + g, b.left = b.left + h, a.offset.setOffset(d[0], a.extend({ using: function using(a) {
				d.css({ top: Math.round(a.top), left: Math.round(a.left) });
			} }, b), 0), d.addClass("in");var i = d[0].offsetWidth,
		    j = d[0].offsetHeight;"top" == c && j != f && (b.top = b.top + f - j);var k = this.getViewportAdjustedDelta(c, b, i, j);k.left ? b.left += k.left : b.top += k.top;var l = /top|bottom/.test(c),
		    m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
		    n = l ? "offsetWidth" : "offsetHeight";d.offset(b), this.replaceArrow(m, d[0][n], l);
	}, c.prototype.replaceArrow = function (a, b, c) {
		this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "");
	}, c.prototype.setContent = function () {
		var a = this.tip(),
		    b = this.getTitle();a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right");
	}, c.prototype.hide = function (b) {
		function d() {
			"in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b();
		}var e = this,
		    f = a(this.$tip),
		    g = a.Event("hide.bs." + this.type);return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this);
	}, c.prototype.fixTitle = function () {
		var a = this.$element;(a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
	}, c.prototype.hasContent = function () {
		return this.getTitle();
	}, c.prototype.getPosition = function (b) {
		b = b || this.$element;var c = b[0],
		    d = "BODY" == c.tagName,
		    e = c.getBoundingClientRect();null == e.width && (e = a.extend({}, e, { width: e.right - e.left, height: e.bottom - e.top }));var f = d ? { top: 0, left: 0 } : b.offset(),
		    g = { scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop() },
		    h = d ? { width: a(window).width(), height: a(window).height() } : null;return a.extend({}, e, g, h, f);
	}, c.prototype.getCalculatedOffset = function (a, b, c, d) {
		return "bottom" == a ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 } : "top" == a ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 } : "left" == a ? { top: b.top + b.height / 2 - d / 2, left: b.left - c } : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width };
	}, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
		var e = { top: 0, left: 0 };if (!this.$viewport) return e;var f = this.options.viewport && this.options.viewport.padding || 0,
		    g = this.getPosition(this.$viewport);if (/right|left/.test(a)) {
			var h = b.top - f - g.scroll,
			    i = b.top + f - g.scroll + d;h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i);
		} else {
			var j = b.left - f,
			    k = b.left + f + c;j < g.left ? e.left = g.left - j : k > g.width && (e.left = g.left + g.width - k);
		}return e;
	}, c.prototype.getTitle = function () {
		var a,
		    b = this.$element,
		    c = this.options;return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title);
	}, c.prototype.getUID = function (a) {
		do {
			a += ~~(1e6 * Math.random());
		} while (document.getElementById(a));return a;
	}, c.prototype.tip = function () {
		return this.$tip = this.$tip || a(this.options.template);
	}, c.prototype.arrow = function () {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
	}, c.prototype.enable = function () {
		this.enabled = !0;
	}, c.prototype.disable = function () {
		this.enabled = !1;
	}, c.prototype.toggleEnabled = function () {
		this.enabled = !this.enabled;
	}, c.prototype.toggle = function (b) {
		var c = this;b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
	}, c.prototype.destroy = function () {
		var a = this;clearTimeout(this.timeout), this.hide(function () {
			a.$element.off("." + a.type).removeData("bs." + a.type);
		});
	};var d = a.fn.tooltip;a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
		return a.fn.tooltip = d, this;
	};
}(jQuery), +function (a) {
	"use strict";
	function b(b) {
		return this.each(function () {
			var d = a(this),
			    e = d.data("bs.popover"),
			    f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;(e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]());
		});
	}var c = function c(a, b) {
		this.init("popover", a, b);
	};if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");c.VERSION = "3.3.4", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
		return c.DEFAULTS;
	}, c.prototype.setContent = function () {
		var a = this.tip(),
		    b = this.getTitle(),
		    c = this.getContent();a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide();
	}, c.prototype.hasContent = function () {
		return this.getTitle() || this.getContent();
	}, c.prototype.getContent = function () {
		var a = this.$element,
		    b = this.options;return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content);
	}, c.prototype.arrow = function () {
		return this.$arrow = this.$arrow || this.tip().find(".arrow");
	};var d = a.fn.popover;a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
		return a.fn.popover = d, this;
	};
}(jQuery), +function (a) {
	"use strict";
	function b(c, d) {
		this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process();
	}function c(c) {
		return this.each(function () {
			var d = a(this),
			    e = d.data("bs.scrollspy"),
			    f = "object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) && c;e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]();
		});
	}b.VERSION = "3.3.4", b.DEFAULTS = { offset: 10 }, b.prototype.getScrollHeight = function () {
		return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
	}, b.prototype.refresh = function () {
		var b = this,
		    c = "offset",
		    d = 0;this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
			var b = a(this),
			    e = b.data("target") || b.attr("href"),
			    f = /^#./.test(e) && a(e);return f && f.length && f.is(":visible") && [[f[c]().top + d, e]] || null;
		}).sort(function (a, b) {
			return a[0] - b[0];
		}).each(function () {
			b.offsets.push(this[0]), b.targets.push(this[1]);
		});
	}, b.prototype.process = function () {
		var a,
		    b = this.$scrollElement.scrollTop() + this.options.offset,
		    c = this.getScrollHeight(),
		    d = this.options.offset + c - this.$scrollElement.height(),
		    e = this.offsets,
		    f = this.targets,
		    g = this.activeTarget;if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);if (g && b < e[0]) return this.activeTarget = null, this.clear();for (a = e.length; a--;) {
			g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a]);
		}
	}, b.prototype.activate = function (b) {
		this.activeTarget = b, this.clear();var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
		    d = a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy");
	}, b.prototype.clear = function () {
		a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
	};var d = a.fn.scrollspy;a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
		return a.fn.scrollspy = d, this;
	}, a(window).on("load.bs.scrollspy.data-api", function () {
		a('[data-spy="scroll"]').each(function () {
			var b = a(this);c.call(b, b.data());
		});
	});
}(jQuery), +function (a) {
	"use strict";
	function b(b) {
		return this.each(function () {
			var d = a(this),
			    e = d.data("bs.tab");e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]();
		});
	}var c = function c(b) {
		this.element = a(b);
	};c.VERSION = "3.3.4", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
		var b = this.element,
		    c = b.closest("ul:not(.dropdown-menu)"),
		    d = b.data("target");if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
			var e = c.find(".active:last a"),
			    f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
			    g = a.Event("show.bs.tab", { relatedTarget: e[0] });if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
				var h = a(d);this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
					e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }), b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] });
				});
			}
		}
	}, c.prototype.activate = function (b, d, e) {
		function f() {
			g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e();
		}var g = d.find("> .active"),
		    h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in");
	};var d = a.fn.tab;a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
		return a.fn.tab = d, this;
	};var e = function e(c) {
		c.preventDefault(), b.call(a(this), "show");
	};a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
}(jQuery), +function (a) {
	"use strict";
	function b(b) {
		return this.each(function () {
			var d = a(this),
			    e = d.data("bs.affix"),
			    f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]();
		});
	}var c = function c(b, d) {
		this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition();
	};c.VERSION = "3.3.4", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = { offset: 0, target: window }, c.prototype.getState = function (a, b, c, d) {
		var e = this.$target.scrollTop(),
		    f = this.$element.offset(),
		    g = this.$target.height();if (null != c && "top" == this.affixed) return c > e ? "top" : !1;if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";var h = null == this.affixed,
		    i = h ? e : f.top,
		    j = h ? g : b;return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1;
	}, c.prototype.getPinnedOffset = function () {
		if (this.pinnedOffset) return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a = this.$target.scrollTop(),
		    b = this.$element.offset();return this.pinnedOffset = b.top - a;
	}, c.prototype.checkPositionWithEventLoop = function () {
		setTimeout(a.proxy(this.checkPosition, this), 1);
	}, c.prototype.checkPosition = function () {
		if (this.$element.is(":visible")) {
			var b = this.$element.height(),
			    d = this.options.offset,
			    e = d.top,
			    f = d.bottom,
			    g = a(document.body).height();"object" != (typeof d === "undefined" ? "undefined" : _typeof(d)) && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));var h = this.getState(g, b, e, f);if (this.affixed != h) {
				null != this.unpin && this.$element.css("top", "");var i = "affix" + (h ? "-" + h : ""),
				    j = a.Event(i + ".bs.affix");if (this.$element.trigger(j), j.isDefaultPrevented()) return;this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix");
			}"bottom" == h && this.$element.offset({ top: g - b - f });
		}
	};var d = a.fn.affix;a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
		return a.fn.affix = d, this;
	}, a(window).on("load", function () {
		a('[data-spy="affix"]').each(function () {
			var c = a(this),
			    d = c.data();d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d);
		});
	});
}(jQuery);
/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.6.0
 *
 * Copyright 2017 Nick Downie
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */
!function (t) {
	if ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module) module.exports = t();else if ("function" == typeof define && define.amd) define([], t);else {
		var e;e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.Chart = t();
	}
}(function () {
	return function t(e, n, i) {
		function a(r, l) {
			if (!n[r]) {
				if (!e[r]) {
					var s = "function" == typeof require && require;if (!l && s) return s(r, !0);if (o) return o(r, !0);var u = new Error("Cannot find module '" + r + "'");throw u.code = "MODULE_NOT_FOUND", u;
				}var d = n[r] = { exports: {} };e[r][0].call(d.exports, function (t) {
					var n = e[r][1][t];return a(n ? n : t);
				}, d, d.exports, t, e, n, i);
			}return n[r].exports;
		}for (var o = "function" == typeof require && require, r = 0; r < i.length; r++) {
			a(i[r]);
		}return a;
	}({ 1: [function (t, e, n) {}, {}], 2: [function (t, e, n) {
			function i(t) {
				if (t) {
					var e = /^#([a-fA-F0-9]{3})$/,
					    n = /^#([a-fA-F0-9]{6})$/,
					    i = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
					    a = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
					    o = /(\w+)/,
					    r = [0, 0, 0],
					    l = 1,
					    s = t.match(e);if (s) {
						s = s[1];for (var u = 0; u < r.length; u++) {
							r[u] = parseInt(s[u] + s[u], 16);
						}
					} else if (s = t.match(n)) {
						s = s[1];for (var u = 0; u < r.length; u++) {
							r[u] = parseInt(s.slice(2 * u, 2 * u + 2), 16);
						}
					} else if (s = t.match(i)) {
						for (var u = 0; u < r.length; u++) {
							r[u] = parseInt(s[u + 1]);
						}l = parseFloat(s[4]);
					} else if (s = t.match(a)) {
						for (var u = 0; u < r.length; u++) {
							r[u] = Math.round(2.55 * parseFloat(s[u + 1]));
						}l = parseFloat(s[4]);
					} else if (s = t.match(o)) {
						if ("transparent" == s[1]) return [0, 0, 0, 0];if (r = y[s[1]], !r) return;
					}for (var u = 0; u < r.length; u++) {
						r[u] = b(r[u], 0, 255);
					}return l = l || 0 == l ? b(l, 0, 1) : 1, r[3] = l, r;
				}
			}function a(t) {
				if (t) {
					var e = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
					    n = t.match(e);if (n) {
						var i = parseFloat(n[4]),
						    a = b(parseInt(n[1]), 0, 360),
						    o = b(parseFloat(n[2]), 0, 100),
						    r = b(parseFloat(n[3]), 0, 100),
						    l = b(isNaN(i) ? 1 : i, 0, 1);return [a, o, r, l];
					}
				}
			}function o(t) {
				if (t) {
					var e = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
					    n = t.match(e);if (n) {
						var i = parseFloat(n[4]),
						    a = b(parseInt(n[1]), 0, 360),
						    o = b(parseFloat(n[2]), 0, 100),
						    r = b(parseFloat(n[3]), 0, 100),
						    l = b(isNaN(i) ? 1 : i, 0, 1);return [a, o, r, l];
					}
				}
			}function r(t) {
				var e = i(t);return e && e.slice(0, 3);
			}function l(t) {
				var e = a(t);return e && e.slice(0, 3);
			}function s(t) {
				var e = i(t);return e ? e[3] : (e = a(t)) ? e[3] : (e = o(t)) ? e[3] : void 0;
			}function u(t) {
				return "#" + x(t[0]) + x(t[1]) + x(t[2]);
			}function d(t, e) {
				return e < 1 || t[3] && t[3] < 1 ? c(t, e) : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
			}function c(t, e) {
				return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")";
			}function h(t, e) {
				if (e < 1 || t[3] && t[3] < 1) return f(t, e);var n = Math.round(t[0] / 255 * 100),
				    i = Math.round(t[1] / 255 * 100),
				    a = Math.round(t[2] / 255 * 100);return "rgb(" + n + "%, " + i + "%, " + a + "%)";
			}function f(t, e) {
				var n = Math.round(t[0] / 255 * 100),
				    i = Math.round(t[1] / 255 * 100),
				    a = Math.round(t[2] / 255 * 100);return "rgba(" + n + "%, " + i + "%, " + a + "%, " + (e || t[3] || 1) + ")";
			}function g(t, e) {
				return e < 1 || t[3] && t[3] < 1 ? p(t, e) : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)";
			}function p(t, e) {
				return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")";
			}function m(t, e) {
				return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")";
			}function v(t) {
				return k[t.slice(0, 3)];
			}function b(t, e, n) {
				return Math.min(Math.max(e, t), n);
			}function x(t) {
				var e = t.toString(16).toUpperCase();return e.length < 2 ? "0" + e : e;
			}var y = t(6);e.exports = { getRgba: i, getHsla: a, getRgb: r, getHsl: l, getHwb: o, getAlpha: s, hexString: u, rgbString: d, rgbaString: c, percentString: h, percentaString: f, hslString: g, hslaString: p, hwbString: m, keyword: v };var k = {};for (var w in y) {
				k[y[w]] = w;
			}
		}, { 6: 6 }], 3: [function (t, e, n) {
			var i = t(5),
			    a = t(2),
			    o = function o(t) {
				if (t instanceof o) return t;if (!(this instanceof o)) return new o(t);this.valid = !1, this.values = { rgb: [0, 0, 0], hsl: [0, 0, 0], hsv: [0, 0, 0], hwb: [0, 0, 0], cmyk: [0, 0, 0, 0], alpha: 1 };var e;"string" == typeof t ? (e = a.getRgba(t), e ? this.setValues("rgb", e) : (e = a.getHsla(t)) ? this.setValues("hsl", e) : (e = a.getHwb(t)) && this.setValues("hwb", e)) : "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (e = t, void 0 !== e.r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e));
			};o.prototype = { isValid: function isValid() {
					return this.valid;
				}, rgb: function rgb() {
					return this.setSpace("rgb", arguments);
				}, hsl: function hsl() {
					return this.setSpace("hsl", arguments);
				}, hsv: function hsv() {
					return this.setSpace("hsv", arguments);
				}, hwb: function hwb() {
					return this.setSpace("hwb", arguments);
				}, cmyk: function cmyk() {
					return this.setSpace("cmyk", arguments);
				}, rgbArray: function rgbArray() {
					return this.values.rgb;
				}, hslArray: function hslArray() {
					return this.values.hsl;
				}, hsvArray: function hsvArray() {
					return this.values.hsv;
				}, hwbArray: function hwbArray() {
					var t = this.values;return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb;
				}, cmykArray: function cmykArray() {
					return this.values.cmyk;
				}, rgbaArray: function rgbaArray() {
					var t = this.values;return t.rgb.concat([t.alpha]);
				}, hslaArray: function hslaArray() {
					var t = this.values;return t.hsl.concat([t.alpha]);
				}, alpha: function alpha(t) {
					return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this);
				}, red: function red(t) {
					return this.setChannel("rgb", 0, t);
				}, green: function green(t) {
					return this.setChannel("rgb", 1, t);
				}, blue: function blue(t) {
					return this.setChannel("rgb", 2, t);
				}, hue: function hue(t) {
					return t && (t %= 360, t = t < 0 ? 360 + t : t), this.setChannel("hsl", 0, t);
				}, saturation: function saturation(t) {
					return this.setChannel("hsl", 1, t);
				}, lightness: function lightness(t) {
					return this.setChannel("hsl", 2, t);
				}, saturationv: function saturationv(t) {
					return this.setChannel("hsv", 1, t);
				}, whiteness: function whiteness(t) {
					return this.setChannel("hwb", 1, t);
				}, blackness: function blackness(t) {
					return this.setChannel("hwb", 2, t);
				}, value: function value(t) {
					return this.setChannel("hsv", 2, t);
				}, cyan: function cyan(t) {
					return this.setChannel("cmyk", 0, t);
				}, magenta: function magenta(t) {
					return this.setChannel("cmyk", 1, t);
				}, yellow: function yellow(t) {
					return this.setChannel("cmyk", 2, t);
				}, black: function black(t) {
					return this.setChannel("cmyk", 3, t);
				}, hexString: function hexString() {
					return a.hexString(this.values.rgb);
				}, rgbString: function rgbString() {
					return a.rgbString(this.values.rgb, this.values.alpha);
				}, rgbaString: function rgbaString() {
					return a.rgbaString(this.values.rgb, this.values.alpha);
				}, percentString: function percentString() {
					return a.percentString(this.values.rgb, this.values.alpha);
				}, hslString: function hslString() {
					return a.hslString(this.values.hsl, this.values.alpha);
				}, hslaString: function hslaString() {
					return a.hslaString(this.values.hsl, this.values.alpha);
				}, hwbString: function hwbString() {
					return a.hwbString(this.values.hwb, this.values.alpha);
				}, keyword: function keyword() {
					return a.keyword(this.values.rgb, this.values.alpha);
				}, rgbNumber: function rgbNumber() {
					var t = this.values.rgb;return t[0] << 16 | t[1] << 8 | t[2];
				}, luminosity: function luminosity() {
					for (var t = this.values.rgb, e = [], n = 0; n < t.length; n++) {
						var i = t[n] / 255;e[n] = i <= .03928 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4);
					}return .2126 * e[0] + .7152 * e[1] + .0722 * e[2];
				}, contrast: function contrast(t) {
					var e = this.luminosity(),
					    n = t.luminosity();return e > n ? (e + .05) / (n + .05) : (n + .05) / (e + .05);
				}, level: function level(t) {
					var e = this.contrast(t);return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : "";
				}, dark: function dark() {
					var t = this.values.rgb,
					    e = (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3;return e < 128;
				}, light: function light() {
					return !this.dark();
				}, negate: function negate() {
					for (var t = [], e = 0; e < 3; e++) {
						t[e] = 255 - this.values.rgb[e];
					}return this.setValues("rgb", t), this;
				}, lighten: function lighten(t) {
					var e = this.values.hsl;return e[2] += e[2] * t, this.setValues("hsl", e), this;
				}, darken: function darken(t) {
					var e = this.values.hsl;return e[2] -= e[2] * t, this.setValues("hsl", e), this;
				}, saturate: function saturate(t) {
					var e = this.values.hsl;return e[1] += e[1] * t, this.setValues("hsl", e), this;
				}, desaturate: function desaturate(t) {
					var e = this.values.hsl;return e[1] -= e[1] * t, this.setValues("hsl", e), this;
				}, whiten: function whiten(t) {
					var e = this.values.hwb;return e[1] += e[1] * t, this.setValues("hwb", e), this;
				}, blacken: function blacken(t) {
					var e = this.values.hwb;return e[2] += e[2] * t, this.setValues("hwb", e), this;
				}, greyscale: function greyscale() {
					var t = this.values.rgb,
					    e = .3 * t[0] + .59 * t[1] + .11 * t[2];return this.setValues("rgb", [e, e, e]), this;
				}, clearer: function clearer(t) {
					var e = this.values.alpha;return this.setValues("alpha", e - e * t), this;
				}, opaquer: function opaquer(t) {
					var e = this.values.alpha;return this.setValues("alpha", e + e * t), this;
				}, rotate: function rotate(t) {
					var e = this.values.hsl,
					    n = (e[0] + t) % 360;return e[0] = n < 0 ? 360 + n : n, this.setValues("hsl", e), this;
				}, mix: function mix(t, e) {
					var n = this,
					    i = t,
					    a = void 0 === e ? .5 : e,
					    o = 2 * a - 1,
					    r = n.alpha() - i.alpha(),
					    l = ((o * r === -1 ? o : (o + r) / (1 + o * r)) + 1) / 2,
					    s = 1 - l;return this.rgb(l * n.red() + s * i.red(), l * n.green() + s * i.green(), l * n.blue() + s * i.blue()).alpha(n.alpha() * a + i.alpha() * (1 - a));
				}, toJSON: function toJSON() {
					return this.rgb();
				}, clone: function clone() {
					var t,
					    e,
					    n = new o(),
					    i = this.values,
					    a = n.values;for (var r in i) {
						i.hasOwnProperty(r) && (t = i[r], e = {}.toString.call(t), "[object Array]" === e ? a[r] = t.slice(0) : "[object Number]" === e ? a[r] = t : console.error("unexpected color value:", t));
					}return n;
				} }, o.prototype.spaces = { rgb: ["red", "green", "blue"], hsl: ["hue", "saturation", "lightness"], hsv: ["hue", "saturation", "value"], hwb: ["hue", "whiteness", "blackness"], cmyk: ["cyan", "magenta", "yellow", "black"] }, o.prototype.maxes = { rgb: [255, 255, 255], hsl: [360, 100, 100], hsv: [360, 100, 100], hwb: [360, 100, 100], cmyk: [100, 100, 100, 100] }, o.prototype.getValues = function (t) {
				for (var e = this.values, n = {}, i = 0; i < t.length; i++) {
					n[t.charAt(i)] = e[t][i];
				}return 1 !== e.alpha && (n.a = e.alpha), n;
			}, o.prototype.setValues = function (t, e) {
				var n,
				    a = this.values,
				    o = this.spaces,
				    r = this.maxes,
				    l = 1;if (this.valid = !0, "alpha" === t) l = e;else if (e.length) a[t] = e.slice(0, t.length), l = e[t.length];else if (void 0 !== e[t.charAt(0)]) {
					for (n = 0; n < t.length; n++) {
						a[t][n] = e[t.charAt(n)];
					}l = e.a;
				} else if (void 0 !== e[o[t][0]]) {
					var s = o[t];for (n = 0; n < t.length; n++) {
						a[t][n] = e[s[n]];
					}l = e.alpha;
				}if (a.alpha = Math.max(0, Math.min(1, void 0 === l ? a.alpha : l)), "alpha" === t) return !1;var u;for (n = 0; n < t.length; n++) {
					u = Math.max(0, Math.min(r[t][n], a[t][n])), a[t][n] = Math.round(u);
				}for (var d in o) {
					d !== t && (a[d] = i[t][d](a[t]));
				}return !0;
			}, o.prototype.setSpace = function (t, e) {
				var n = e[0];return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n), this);
			}, o.prototype.setChannel = function (t, e, n) {
				var i = this.values[t];return void 0 === n ? i[e] : n === i[e] ? this : (i[e] = n, this.setValues(t, i), this);
			}, "undefined" != typeof window && (window.Color = o), e.exports = o;
		}, { 2: 2, 5: 5 }], 4: [function (t, e, n) {
			function i(t) {
				var e,
				    n,
				    i,
				    a = t[0] / 255,
				    o = t[1] / 255,
				    r = t[2] / 255,
				    l = Math.min(a, o, r),
				    s = Math.max(a, o, r),
				    u = s - l;return s == l ? e = 0 : a == s ? e = (o - r) / u : o == s ? e = 2 + (r - a) / u : r == s && (e = 4 + (a - o) / u), e = Math.min(60 * e, 360), e < 0 && (e += 360), i = (l + s) / 2, n = s == l ? 0 : i <= .5 ? u / (s + l) : u / (2 - s - l), [e, 100 * n, 100 * i];
			}function a(t) {
				var e,
				    n,
				    i,
				    a = t[0],
				    o = t[1],
				    r = t[2],
				    l = Math.min(a, o, r),
				    s = Math.max(a, o, r),
				    u = s - l;return n = 0 == s ? 0 : u / s * 1e3 / 10, s == l ? e = 0 : a == s ? e = (o - r) / u : o == s ? e = 2 + (r - a) / u : r == s && (e = 4 + (a - o) / u), e = Math.min(60 * e, 360), e < 0 && (e += 360), i = s / 255 * 1e3 / 10, [e, n, i];
			}function o(t) {
				var e = t[0],
				    n = t[1],
				    a = t[2],
				    o = i(t)[0],
				    r = 1 / 255 * Math.min(e, Math.min(n, a)),
				    a = 1 - 1 / 255 * Math.max(e, Math.max(n, a));return [o, 100 * r, 100 * a];
			}function l(t) {
				var e,
				    n,
				    i,
				    a,
				    o = t[0] / 255,
				    r = t[1] / 255,
				    l = t[2] / 255;return a = Math.min(1 - o, 1 - r, 1 - l), e = (1 - o - a) / (1 - a) || 0, n = (1 - r - a) / (1 - a) || 0, i = (1 - l - a) / (1 - a) || 0, [100 * e, 100 * n, 100 * i, 100 * a];
			}function s(t) {
				return Z[JSON.stringify(t)];
			}function u(t) {
				var e = t[0] / 255,
				    n = t[1] / 255,
				    i = t[2] / 255;e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92, n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92, i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92;var a = .4124 * e + .3576 * n + .1805 * i,
				    o = .2126 * e + .7152 * n + .0722 * i,
				    r = .0193 * e + .1192 * n + .9505 * i;return [100 * a, 100 * o, 100 * r];
			}function d(t) {
				var e,
				    n,
				    i,
				    a = u(t),
				    o = a[0],
				    r = a[1],
				    l = a[2];return o /= 95.047, r /= 100, l /= 108.883, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, l = l > .008856 ? Math.pow(l, 1 / 3) : 7.787 * l + 16 / 116, e = 116 * r - 16, n = 500 * (o - r), i = 200 * (r - l), [e, n, i];
			}function c(t) {
				return B(d(t));
			}function h(t) {
				var e,
				    n,
				    i,
				    a,
				    o,
				    r = t[0] / 360,
				    l = t[1] / 100,
				    s = t[2] / 100;if (0 == l) return o = 255 * s, [o, o, o];n = s < .5 ? s * (1 + l) : s + l - s * l, e = 2 * s - n, a = [0, 0, 0];for (var u = 0; u < 3; u++) {
					i = r + 1 / 3 * -(u - 1), i < 0 && i++, i > 1 && i--, o = 6 * i < 1 ? e + 6 * (n - e) * i : 2 * i < 1 ? n : 3 * i < 2 ? e + (n - e) * (2 / 3 - i) * 6 : e, a[u] = 255 * o;
				}return a;
			}function f(t) {
				var e,
				    n,
				    i = t[0],
				    a = t[1] / 100,
				    o = t[2] / 100;return 0 === o ? [0, 0, 0] : (o *= 2, a *= o <= 1 ? o : 2 - o, n = (o + a) / 2, e = 2 * a / (o + a), [i, 100 * e, 100 * n]);
			}function p(t) {
				return o(h(t));
			}function m(t) {
				return l(h(t));
			}function v(t) {
				return s(h(t));
			}function x(t) {
				var e = t[0] / 60,
				    n = t[1] / 100,
				    i = t[2] / 100,
				    a = Math.floor(e) % 6,
				    o = e - Math.floor(e),
				    r = 255 * i * (1 - n),
				    l = 255 * i * (1 - n * o),
				    s = 255 * i * (1 - n * (1 - o)),
				    i = 255 * i;switch (a) {case 0:
						return [i, s, r];case 1:
						return [l, i, r];case 2:
						return [r, i, s];case 3:
						return [r, l, i];case 4:
						return [s, r, i];case 5:
						return [i, r, l];}
			}function y(t) {
				var e,
				    n,
				    i = t[0],
				    a = t[1] / 100,
				    o = t[2] / 100;return n = (2 - a) * o, e = a * o, e /= n <= 1 ? n : 2 - n, e = e || 0, n /= 2, [i, 100 * e, 100 * n];
			}function k(t) {
				return o(x(t));
			}function w(t) {
				return l(x(t));
			}function M(t) {
				return s(x(t));
			}function S(t) {
				var e,
				    n,
				    i,
				    a,
				    o = t[0] / 360,
				    l = t[1] / 100,
				    s = t[2] / 100,
				    u = l + s;switch (u > 1 && (l /= u, s /= u), e = Math.floor(6 * o), n = 1 - s, i = 6 * o - e, 0 != (1 & e) && (i = 1 - i), a = l + i * (n - l), e) {default:case 6:case 0:
						r = n, g = a, b = l;break;case 1:
						r = a, g = n, b = l;break;case 2:
						r = l, g = n, b = a;break;case 3:
						r = l, g = a, b = n;break;case 4:
						r = a, g = l, b = n;break;case 5:
						r = n, g = l, b = a;}return [255 * r, 255 * g, 255 * b];
			}function C(t) {
				return i(S(t));
			}function D(t) {
				return a(S(t));
			}function I(t) {
				return l(S(t));
			}function A(t) {
				return s(S(t));
			}function P(t) {
				var e,
				    n,
				    i,
				    a = t[0] / 100,
				    o = t[1] / 100,
				    r = t[2] / 100,
				    l = t[3] / 100;return e = 1 - Math.min(1, a * (1 - l) + l), n = 1 - Math.min(1, o * (1 - l) + l), i = 1 - Math.min(1, r * (1 - l) + l), [255 * e, 255 * n, 255 * i];
			}function _(t) {
				return i(P(t));
			}function T(t) {
				return a(P(t));
			}function F(t) {
				return o(P(t));
			}function R(t) {
				return s(P(t));
			}function L(t) {
				var e,
				    n,
				    i,
				    a = t[0] / 100,
				    o = t[1] / 100,
				    r = t[2] / 100;return e = 3.2406 * a + o * -1.5372 + r * -.4986, n = a * -.9689 + 1.8758 * o + .0415 * r, i = .0557 * a + o * -.204 + 1.057 * r, e = e > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92, e = Math.min(Math.max(0, e), 1), n = Math.min(Math.max(0, n), 1), i = Math.min(Math.max(0, i), 1), [255 * e, 255 * n, 255 * i];
			}function V(t) {
				var e,
				    n,
				    i,
				    a = t[0],
				    o = t[1],
				    r = t[2];return a /= 95.047, o /= 100, r /= 108.883, a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, e = 116 * o - 16, n = 500 * (a - o), i = 200 * (o - r), [e, n, i];
			}function O(t) {
				return B(V(t));
			}function z(t) {
				var e,
				    n,
				    i,
				    a,
				    o = t[0],
				    r = t[1],
				    l = t[2];return o <= 8 ? (n = 100 * o / 903.3, a = 7.787 * (n / 100) + 16 / 116) : (n = 100 * Math.pow((o + 16) / 116, 3), a = Math.pow(n / 100, 1 / 3)), e = e / 95.047 <= .008856 ? e = 95.047 * (r / 500 + a - 16 / 116) / 7.787 : 95.047 * Math.pow(r / 500 + a, 3), i = i / 108.883 <= .008859 ? i = 108.883 * (a - l / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(a - l / 200, 3), [e, n, i];
			}function B(t) {
				var e,
				    n,
				    i,
				    a = t[0],
				    o = t[1],
				    r = t[2];return e = Math.atan2(r, o), n = 360 * e / 2 / Math.PI, n < 0 && (n += 360), i = Math.sqrt(o * o + r * r), [a, i, n];
			}function W(t) {
				return L(z(t));
			}function N(t) {
				var e,
				    n,
				    i,
				    a = t[0],
				    o = t[1],
				    r = t[2];return i = r / 360 * 2 * Math.PI, e = o * Math.cos(i), n = o * Math.sin(i), [a, e, n];
			}function E(t) {
				return z(N(t));
			}function H(t) {
				return W(N(t));
			}function q(t) {
				return J[t];
			}function j(t) {
				return i(q(t));
			}function Y(t) {
				return a(q(t));
			}function U(t) {
				return o(q(t));
			}function X(t) {
				return l(q(t));
			}function K(t) {
				return d(q(t));
			}function G(t) {
				return u(q(t));
			}e.exports = { rgb2hsl: i, rgb2hsv: a, rgb2hwb: o, rgb2cmyk: l, rgb2keyword: s, rgb2xyz: u, rgb2lab: d, rgb2lch: c, hsl2rgb: h, hsl2hsv: f, hsl2hwb: p, hsl2cmyk: m, hsl2keyword: v, hsv2rgb: x, hsv2hsl: y, hsv2hwb: k, hsv2cmyk: w, hsv2keyword: M, hwb2rgb: S, hwb2hsl: C, hwb2hsv: D, hwb2cmyk: I, hwb2keyword: A, cmyk2rgb: P, cmyk2hsl: _, cmyk2hsv: T, cmyk2hwb: F, cmyk2keyword: R, keyword2rgb: q, keyword2hsl: j, keyword2hsv: Y, keyword2hwb: U, keyword2cmyk: X, keyword2lab: K, keyword2xyz: G, xyz2rgb: L, xyz2lab: V, xyz2lch: O, lab2xyz: z, lab2rgb: W, lab2lch: B, lch2lab: N, lch2xyz: E, lch2rgb: H };var J = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] },
			    Z = {};for (var Q in J) {
				Z[JSON.stringify(J[Q])] = Q;
			}
		}, {}], 5: [function (t, e, n) {
			var i = t(4),
			    a = function a() {
				return new u();
			};for (var o in i) {
				a[o + "Raw"] = function (t) {
					return function (e) {
						return "number" == typeof e && (e = Array.prototype.slice.call(arguments)), i[t](e);
					};
				}(o);var r = /(\w+)2(\w+)/.exec(o),
				    l = r[1],
				    s = r[2];a[l] = a[l] || {}, a[l][s] = a[o] = function (t) {
					return function (e) {
						"number" == typeof e && (e = Array.prototype.slice.call(arguments));var n = i[t](e);if ("string" == typeof n || void 0 === n) return n;for (var a = 0; a < n.length; a++) {
							n[a] = Math.round(n[a]);
						}return n;
					};
				}(o);
			}var u = function u() {
				this.convs = {};
			};u.prototype.routeSpace = function (t, e) {
				var n = e[0];return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n));
			}, u.prototype.setValues = function (t, e) {
				return this.space = t, this.convs = {}, this.convs[t] = e, this;
			}, u.prototype.getValues = function (t) {
				var e = this.convs[t];if (!e) {
					var n = this.space,
					    i = this.convs[n];e = a[n][t](i), this.convs[t] = e;
				}return e;
			}, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function (t) {
				u.prototype[t] = function (e) {
					return this.routeSpace(t, arguments);
				};
			}), e.exports = a;
		}, { 4: 4 }], 6: [function (t, e, n) {
			e.exports = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] };
		}, {}], 7: [function (t, e, n) {
			var i = t(28)();t(26)(i), t(40)(i), t(22)(i), t(25)(i), t(30)(i), t(21)(i), t(23)(i), t(24)(i), t(29)(i), t(32)(i), t(33)(i), t(31)(i), t(27)(i), t(34)(i), t(35)(i), t(36)(i), t(37)(i), t(38)(i), t(46)(i), t(44)(i), t(45)(i), t(47)(i), t(48)(i), t(49)(i), t(15)(i), t(16)(i), t(17)(i), t(18)(i), t(19)(i), t(20)(i), t(8)(i), t(9)(i), t(10)(i), t(11)(i), t(12)(i), t(13)(i), t(14)(i);var a = [];a.push(t(41)(i), t(42)(i), t(43)(i)), i.plugins.register(a), e.exports = i, "undefined" != typeof window && (window.Chart = i);
		}, { 10: 10, 11: 11, 12: 12, 13: 13, 14: 14, 15: 15, 16: 16, 17: 17, 18: 18, 19: 19, 20: 20, 21: 21, 22: 22, 23: 23, 24: 24, 25: 25, 26: 26, 27: 27, 28: 28, 29: 29, 30: 30, 31: 31, 32: 32, 33: 33, 34: 34, 35: 35, 36: 36, 37: 37, 38: 38, 40: 40, 41: 41, 42: 42, 43: 43, 44: 44, 45: 45, 46: 46, 47: 47, 48: 48, 49: 49, 8: 8, 9: 9 }], 8: [function (t, e, n) {
			"use strict";
			e.exports = function (t) {
				t.Bar = function (e, n) {
					return n.type = "bar", new t(e, n);
				};
			};
		}, {}], 9: [function (t, e, n) {
			"use strict";
			e.exports = function (t) {
				t.Bubble = function (e, n) {
					return n.type = "bubble", new t(e, n);
				};
			};
		}, {}], 10: [function (t, e, n) {
			"use strict";
			e.exports = function (t) {
				t.Doughnut = function (e, n) {
					return n.type = "doughnut", new t(e, n);
				};
			};
		}, {}], 11: [function (t, e, n) {
			"use strict";
			e.exports = function (t) {
				t.Line = function (e, n) {
					return n.type = "line", new t(e, n);
				};
			};
		}, {}], 12: [function (t, e, n) {
			"use strict";
			e.exports = function (t) {
				t.PolarArea = function (e, n) {
					return n.type = "polarArea", new t(e, n);
				};
			};
		}, {}], 13: [function (t, e, n) {
			"use strict";
			e.exports = function (t) {
				t.Radar = function (e, n) {
					return n.type = "radar", new t(e, n);
				};
			};
		}, {}], 14: [function (t, e, n) {
			"use strict";
			e.exports = function (t) {
				var e = { hover: { mode: "single" }, scales: { xAxes: [{ type: "linear", position: "bottom", id: "x-axis-1" }], yAxes: [{ type: "linear", position: "left", id: "y-axis-1" }] }, tooltips: { callbacks: { title: function title() {
								return "";
							}, label: function label(t) {
								return "(" + t.xLabel + ", " + t.yLabel + ")";
							} } } };t.defaults.scatter = e, t.controllers.scatter = t.controllers.line, t.Scatter = function (e, n) {
					return n.type = "scatter", new t(e, n);
				};
			};
		}, {}], 15: [function (t, e, n) {
			"use strict";
			e.exports = function (t) {
				var e = t.helpers;t.defaults.bar = { hover: { mode: "label" }, scales: { xAxes: [{ type: "category", categoryPercentage: .8, barPercentage: .9, gridLines: { offsetGridLines: !0 } }], yAxes: [{ type: "linear" }] } }, t.controllers.bar = t.DatasetController.extend({ dataElementType: t.elements.Rectangle, initialize: function initialize() {
						var e,
						    n = this;t.DatasetController.prototype.initialize.apply(n, arguments), e = n.getMeta(), e.stack = n.getDataset().stack, e.bar = !0;
					}, update: function update(t) {
						var e,
						    n,
						    i = this,
						    a = i.getMeta().data;for (i._ruler = i.getRuler(), e = 0, n = a.length; e < n; ++e) {
							i.updateElement(a[e], e, t);
						}
					}, updateElement: function updateElement(t, n, i) {
						var a = this,
						    o = a.chart,
						    r = a.getMeta(),
						    l = a.getDataset(),
						    s = t.custom || {},
						    u = o.options.elements.rectangle;t._xScale = a.getScaleForId(r.xAxisID), t._yScale = a.getScaleForId(r.yAxisID), t._datasetIndex = a.index, t._index = n, t._model = { datasetLabel: l.label, label: o.data.labels[n], borderSkipped: s.borderSkipped ? s.borderSkipped : u.borderSkipped, backgroundColor: s.backgroundColor ? s.backgroundColor : e.getValueAtIndexOrDefault(l.backgroundColor, n, u.backgroundColor), borderColor: s.borderColor ? s.borderColor : e.getValueAtIndexOrDefault(l.borderColor, n, u.borderColor), borderWidth: s.borderWidth ? s.borderWidth : e.getValueAtIndexOrDefault(l.borderWidth, n, u.borderWidth) }, a.updateElementGeometry(t, n, i), t.pivot();
					}, updateElementGeometry: function updateElementGeometry(t, e, n) {
						var i = this,
						    a = t._model,
						    o = i.getValueScale(),
						    r = o.getBasePixel(),
						    l = o.isHorizontal(),
						    s = i._ruler || i.getRuler(),
						    u = i.calculateBarValuePixels(i.index, e),
						    d = i.calculateBarIndexPixels(i.index, e, s);a.horizontal = l, a.base = n ? r : u.base, a.x = l ? n ? r : u.head : d.center, a.y = l ? d.center : n ? r : u.head, a.height = l ? d.size : void 0, a.width = l ? void 0 : d.size;
					}, getValueScaleId: function getValueScaleId() {
						return this.getMeta().yAxisID;
					}, getIndexScaleId: function getIndexScaleId() {
						return this.getMeta().xAxisID;
					}, getValueScale: function getValueScale() {
						return this.getScaleForId(this.getValueScaleId());
					}, getIndexScale: function getIndexScale() {
						return this.getScaleForId(this.getIndexScaleId());
					}, getStackCount: function getStackCount(t) {
						var e,
						    n,
						    i = this,
						    a = i.chart,
						    o = i.getIndexScale(),
						    r = o.options.stacked,
						    l = void 0 === t ? a.data.datasets.length : t + 1,
						    s = [];for (e = 0; e < l; ++e) {
							n = a.getDatasetMeta(e), n.bar && a.isDatasetVisible(e) && (r === !1 || r === !0 && s.indexOf(n.stack) === -1 || void 0 === r && (void 0 === n.stack || s.indexOf(n.stack) === -1)) && s.push(n.stack);
						}return s.length;
					}, getStackIndex: function getStackIndex(t) {
						return this.getStackCount(t) - 1;
					}, getRuler: function getRuler() {
						var t = this,
						    n = t.getIndexScale(),
						    i = n.options,
						    a = t.getStackCount(),
						    o = n.isHorizontal() ? n.width : n.height,
						    r = o / n.ticks.length,
						    l = r * i.categoryPercentage,
						    s = l / a,
						    u = s * i.barPercentage;return u = Math.min(e.getValueOrDefault(i.barThickness, u), e.getValueOrDefault(i.maxBarThickness, 1 / 0)), { stackCount: a, tickSize: r, categorySize: l, categorySpacing: r - l, fullBarSize: s, barSize: u, barSpacing: s - u, scale: n };
					}, calculateBarValuePixels: function calculateBarValuePixels(t, e) {
						var n,
						    i,
						    a,
						    o,
						    r,
						    l,
						    s = this,
						    u = s.chart,
						    d = s.getMeta(),
						    c = s.getValueScale(),
						    h = u.data.datasets,
						    f = Number(h[t].data[e]),
						    g = c.options.stacked,
						    p = d.stack,
						    m = 0;if (g || void 0 === g && void 0 !== p) for (n = 0; n < t; ++n) {
							i = u.getDatasetMeta(n), i.bar && i.stack === p && i.controller.getValueScaleId() === c.id && u.isDatasetVisible(n) && (a = Number(h[n].data[e]), (f < 0 && a < 0 || f >= 0 && a > 0) && (m += a));
						}return o = c.getPixelForValue(m), r = c.getPixelForValue(m + f), l = (r - o) / 2, { size: l, base: o, head: r, center: r + l / 2 };
					}, calculateBarIndexPixels: function calculateBarIndexPixels(t, e, n) {
						var i = this,
						    a = n.scale,
						    o = i.chart.isCombo,
						    r = i.getStackIndex(t),
						    l = a.getPixelForValue(null, e, t, o),
						    s = n.barSize;return l -= o ? n.tickSize / 2 : 0, l += n.fullBarSize * r, l += n.categorySpacing / 2, l += n.barSpacing / 2, { size: s, base: l, head: l + s, center: l + s / 2 };
					}, draw: function draw() {
						var t,
						    n = this,
						    i = n.chart,
						    a = n.getMeta().data,
						    o = n.getDataset(),
						    r = a.length,
						    l = 0;for (e.canvas.clipArea(i.ctx, i.chartArea); l < r; ++l) {
							t = o.data[l], null === t || void 0 === t || isNaN(t) || a[l].draw();
						}e.canvas.unclipArea(i.ctx);
					}, setHoverStyle: function setHoverStyle(t) {
						var n = this.chart.data.datasets[t._datasetIndex],
						    i = t._index,
						    a = t.custom || {},
						    o = t._model;o.backgroundColor = a.hoverBackgroundColor ? a.hoverBackgroundColor : e.getValueAtIndexOrDefault(n.hoverBackgroundColor, i, e.getHoverColor(o.backgroundColor)), o.borderColor = a.hoverBorderColor ? a.hoverBorderColor : e.getValueAtIndexOrDefault(n.hoverBorderColor, i, e.getHoverColor(o.borderColor)), o.borderWidth = a.hoverBorderWidth ? a.hoverBorderWidth : e.getValueAtIndexOrDefault(n.hoverBorderWidth, i, o.borderWidth);
					}, removeHoverStyle: function removeHoverStyle(t) {
						var n = this.chart.data.datasets[t._datasetIndex],
						    i = t._index,
						    a = t.custom || {},
						    o = t._model,
						    r = this.chart.options.elements.rectangle;o.backgroundColor = a.backgroundColor ? a.backgroundColor : e.getValueAtIndexOrDefault(n.backgroundColor, i, r.backgroundColor), o.borderColor = a.borderColor ? a.borderColor : e.getValueAtIndexOrDefault(n.borderColor, i, r.borderColor), o.borderWidth = a.borderWidth ? a.borderWidth : e.getValueAtIndexOrDefault(n.borderWidth, i, r.borderWidth);
					} }), t.defaults.horizontalBar = { hover: { mode: "label" }, scales: { xAxes: [{ type: "linear", position: "bottom" }], yAxes: [{ position: "left", type: "category", categoryPercentage: .8, barPercentage: .9, gridLines: { offsetGridLines: !0 } }] }, elements: { rectangle: { borderSkipped: "left" } }, tooltips: { callbacks: { title: function title(t, e) {
								var n = "";return t.length > 0 && (t[0].yLabel ? n = t[0].yLabel : e.labels.length > 0 && t[0].index < e.labels.length && (n = e.labels[t[0].index])), n;
							}, label: function label(t, e) {
								var n = e.datasets[t.datasetIndex].label || "";return n + ": " + t.xLabel;
							} } } }, t.controllers.horizontalBar = t.controllers.bar.extend({ getValueScaleId: function getValueScaleId() {
						return this.getMeta().xAxisID;
					}, getIndexScaleId: function getIndexScaleId() {
						return this.getMeta().yAxisID;
					} });
			};
		}, {}], 16: [function (t, e, n) {
			"use strict";
			e.exports = function (t) {
				var e = t.helpers;t.defaults.bubble = { hover: { mode: "single" }, scales: { xAxes: [{ type: "linear", position: "bottom", id: "x-axis-0" }], yAxes: [{ type: "linear", position: "left", id: "y-axis-0" }] }, tooltips: { callbacks: { title: function title() {
								return "";
							}, label: function label(t, e) {
								var n = e.datasets[t.datasetIndex].label || "",
								    i = e.datasets[t.datasetIndex].data[t.index];return n + ": (" + t.xLabel + ", " + t.yLabel + ", " + i.r + ")";
							} } } }, t.controllers.bubble = t.DatasetController.extend({ dataElementType: t.elements.Point, update: function update(t) {
						var n = this,
						    i = n.getMeta(),
						    a = i.data;e.each(a, function (e, i) {
							n.updateElement(e, i, t);
						});
					}, updateElement: function updateElement(n, i, a) {
						var o = this,
						    r = o.getMeta(),
						    l = o.getScaleForId(r.xAxisID),
						    s = o.getScaleForId(r.yAxisID),
						    u = n.custom || {},
						    d = o.getDataset(),
						    c = d.data[i],
						    h = o.chart.options.elements.point,
						    f = o.index;e.extend(n, { _xScale: l, _yScale: s, _datasetIndex: f, _index: i, _model: { x: a ? l.getPixelForDecimal(.5) : l.getPixelForValue("object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) ? c : NaN, i, f, o.chart.isCombo), y: a ? s.getBasePixel() : s.getPixelForValue(c, i, f), radius: a ? 0 : u.radius ? u.radius : o.getRadius(c), hitRadius: u.hitRadius ? u.hitRadius : e.getValueAtIndexOrDefault(d.hitRadius, i, h.hitRadius) } }), t.DatasetController.prototype.removeHoverStyle.call(o, n, h);var g = n._model;g.skip = u.skip ? u.skip : isNaN(g.x) || isNaN(g.y), n.pivot();
					}, getRadius: function getRadius(t) {
						return t.r || this.chart.options.elements.point.radius;
					}, setHoverStyle: function setHoverStyle(n) {
						var i = this;t.DatasetController.prototype.setHoverStyle.call(i, n);var a = i.chart.data.datasets[n._datasetIndex],
						    o = n._index,
						    r = n.custom || {},
						    l = n._model;
						l.radius = r.hoverRadius ? r.hoverRadius : e.getValueAtIndexOrDefault(a.hoverRadius, o, i.chart.options.elements.point.hoverRadius) + i.getRadius(a.data[o]);
					}, removeHoverStyle: function removeHoverStyle(e) {
						var n = this;t.DatasetController.prototype.removeHoverStyle.call(n, e, n.chart.options.elements.point);var i = n.chart.data.datasets[e._datasetIndex].data[e._index],
						    a = e.custom || {},
						    o = e._model;o.radius = a.radius ? a.radius : n.getRadius(i);
					} });
			};
		}, {}], 17: [function (t, e, n) {
			"use strict";
			e.exports = function (t) {
				var e = t.helpers,
				    n = t.defaults;n.doughnut = { animation: { animateRotate: !0, animateScale: !1 }, aspectRatio: 1, hover: { mode: "single" }, legendCallback: function legendCallback(t) {
						var e = [];e.push('<ul class="' + t.id + '-legend">');var n = t.data,
						    i = n.datasets,
						    a = n.labels;if (i.length) for (var o = 0; o < i[0].data.length; ++o) {
							e.push('<li><span style="background-color:' + i[0].backgroundColor[o] + '"></span>'), a[o] && e.push(a[o]), e.push("</li>");
						}return e.push("</ul>"), e.join("");
					}, legend: { labels: { generateLabels: function generateLabels(t) {
								var n = t.data;return n.labels.length && n.datasets.length ? n.labels.map(function (i, a) {
									var o = t.getDatasetMeta(0),
									    r = n.datasets[0],
									    l = o.data[a],
									    s = l && l.custom || {},
									    u = e.getValueAtIndexOrDefault,
									    d = t.options.elements.arc,
									    c = s.backgroundColor ? s.backgroundColor : u(r.backgroundColor, a, d.backgroundColor),
									    h = s.borderColor ? s.borderColor : u(r.borderColor, a, d.borderColor),
									    f = s.borderWidth ? s.borderWidth : u(r.borderWidth, a, d.borderWidth);return { text: i, fillStyle: c, strokeStyle: h, lineWidth: f, hidden: isNaN(r.data[a]) || o.data[a].hidden, index: a };
								}) : [];
							} }, onClick: function onClick(t, e) {
							var n,
							    i,
							    a,
							    o = e.index,
							    r = this.chart;for (n = 0, i = (r.data.datasets || []).length; n < i; ++n) {
								a = r.getDatasetMeta(n), a.data[o] && (a.data[o].hidden = !a.data[o].hidden);
							}r.update();
						} }, cutoutPercentage: 50, rotation: Math.PI * -.5, circumference: 2 * Math.PI, tooltips: { callbacks: { title: function title() {
								return "";
							}, label: function label(t, n) {
								var i = n.labels[t.index],
								    a = ": " + n.datasets[t.datasetIndex].data[t.index];return e.isArray(i) ? (i = i.slice(), i[0] += a) : i += a, i;
							} } } }, n.pie = e.clone(n.doughnut), e.extend(n.pie, { cutoutPercentage: 0 }), t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({ dataElementType: t.elements.Arc, linkScales: e.noop, getRingIndex: function getRingIndex(t) {
						for (var e = 0, n = 0; n < t; ++n) {
							this.chart.isDatasetVisible(n) && ++e;
						}return e;
					}, update: function update(t) {
						var n = this,
						    i = n.chart,
						    a = i.chartArea,
						    o = i.options,
						    r = o.elements.arc,
						    l = a.right - a.left - r.borderWidth,
						    s = a.bottom - a.top - r.borderWidth,
						    u = Math.min(l, s),
						    d = { x: 0, y: 0 },
						    c = n.getMeta(),
						    h = o.cutoutPercentage,
						    f = o.circumference;if (f < 2 * Math.PI) {
							var g = o.rotation % (2 * Math.PI);g += 2 * Math.PI * (g >= Math.PI ? -1 : g < -Math.PI ? 1 : 0);var p = g + f,
							    m = { x: Math.cos(g), y: Math.sin(g) },
							    v = { x: Math.cos(p), y: Math.sin(p) },
							    b = g <= 0 && 0 <= p || g <= 2 * Math.PI && 2 * Math.PI <= p,
							    x = g <= .5 * Math.PI && .5 * Math.PI <= p || g <= 2.5 * Math.PI && 2.5 * Math.PI <= p,
							    y = g <= -Math.PI && -Math.PI <= p || g <= Math.PI && Math.PI <= p,
							    k = g <= .5 * -Math.PI && .5 * -Math.PI <= p || g <= 1.5 * Math.PI && 1.5 * Math.PI <= p,
							    w = h / 100,
							    M = { x: y ? -1 : Math.min(m.x * (m.x < 0 ? 1 : w), v.x * (v.x < 0 ? 1 : w)), y: k ? -1 : Math.min(m.y * (m.y < 0 ? 1 : w), v.y * (v.y < 0 ? 1 : w)) },
							    S = { x: b ? 1 : Math.max(m.x * (m.x > 0 ? 1 : w), v.x * (v.x > 0 ? 1 : w)), y: x ? 1 : Math.max(m.y * (m.y > 0 ? 1 : w), v.y * (v.y > 0 ? 1 : w)) },
							    C = { width: .5 * (S.x - M.x), height: .5 * (S.y - M.y) };u = Math.min(l / C.width, s / C.height), d = { x: (S.x + M.x) * -.5, y: (S.y + M.y) * -.5 };
						}i.borderWidth = n.getMaxBorderWidth(c.data), i.outerRadius = Math.max((u - i.borderWidth) / 2, 0), i.innerRadius = Math.max(h ? i.outerRadius / 100 * h : 0, 0), i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(), i.offsetX = d.x * i.outerRadius, i.offsetY = d.y * i.outerRadius, c.total = n.calculateTotal(), n.outerRadius = i.outerRadius - i.radiusLength * n.getRingIndex(n.index), n.innerRadius = Math.max(n.outerRadius - i.radiusLength, 0), e.each(c.data, function (e, i) {
							n.updateElement(e, i, t);
						});
					}, updateElement: function updateElement(t, n, i) {
						var a = this,
						    o = a.chart,
						    r = o.chartArea,
						    l = o.options,
						    s = l.animation,
						    u = (r.left + r.right) / 2,
						    d = (r.top + r.bottom) / 2,
						    c = l.rotation,
						    h = l.rotation,
						    f = a.getDataset(),
						    g = i && s.animateRotate ? 0 : t.hidden ? 0 : a.calculateCircumference(f.data[n]) * (l.circumference / (2 * Math.PI)),
						    p = i && s.animateScale ? 0 : a.innerRadius,
						    m = i && s.animateScale ? 0 : a.outerRadius,
						    v = e.getValueAtIndexOrDefault;e.extend(t, { _datasetIndex: a.index, _index: n, _model: { x: u + o.offsetX, y: d + o.offsetY, startAngle: c, endAngle: h, circumference: g, outerRadius: m, innerRadius: p, label: v(f.label, n, o.data.labels[n]) } });var b = t._model;this.removeHoverStyle(t), i && s.animateRotate || (0 === n ? b.startAngle = l.rotation : b.startAngle = a.getMeta().data[n - 1]._model.endAngle, b.endAngle = b.startAngle + b.circumference), t.pivot();
					}, removeHoverStyle: function removeHoverStyle(e) {
						t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc);
					}, calculateTotal: function calculateTotal() {
						var t,
						    n = this.getDataset(),
						    i = this.getMeta(),
						    a = 0;return e.each(i.data, function (e, i) {
							t = n.data[i], isNaN(t) || e.hidden || (a += Math.abs(t));
						}), a;
					}, calculateCircumference: function calculateCircumference(t) {
						var e = this.getMeta().total;return e > 0 && !isNaN(t) ? 2 * Math.PI * (t / e) : 0;
					}, getMaxBorderWidth: function getMaxBorderWidth(t) {
						for (var e, n, i = 0, a = this.index, o = t.length, r = 0; r < o; r++) {
							e = t[r]._model ? t[r]._model.borderWidth : 0, n = t[r]._chart ? t[r]._chart.config.data.datasets[a].hoverBorderWidth : 0, i = e > i ? e : i, i = n > i ? n : i;
						}return i;
					} });
			};
		}, {}], 18: [function (t, e, n) {
			"use strict";
			e.exports = function (t) {
				function e(t, e) {
					return n.getValueOrDefault(t.showLine, e.showLines);
				}var n = t.helpers;t.defaults.line = { showLines: !0, spanGaps: !1, hover: { mode: "label" }, scales: { xAxes: [{ type: "category", id: "x-axis-0" }], yAxes: [{ type: "linear", id: "y-axis-0" }] } }, t.controllers.line = t.DatasetController.extend({ datasetElementType: t.elements.Line, dataElementType: t.elements.Point, update: function update(t) {
						var i,
						    a,
						    o,
						    r = this,
						    l = r.getMeta(),
						    s = l.dataset,
						    u = l.data || [],
						    d = r.chart.options,
						    c = d.elements.line,
						    h = r.getScaleForId(l.yAxisID),
						    f = r.getDataset(),
						    g = e(f, d);for (g && (o = s.custom || {}, void 0 !== f.tension && void 0 === f.lineTension && (f.lineTension = f.tension), s._scale = h, s._datasetIndex = r.index, s._children = u, s._model = { spanGaps: f.spanGaps ? f.spanGaps : d.spanGaps, tension: o.tension ? o.tension : n.getValueOrDefault(f.lineTension, c.tension), backgroundColor: o.backgroundColor ? o.backgroundColor : f.backgroundColor || c.backgroundColor, borderWidth: o.borderWidth ? o.borderWidth : f.borderWidth || c.borderWidth, borderColor: o.borderColor ? o.borderColor : f.borderColor || c.borderColor, borderCapStyle: o.borderCapStyle ? o.borderCapStyle : f.borderCapStyle || c.borderCapStyle, borderDash: o.borderDash ? o.borderDash : f.borderDash || c.borderDash, borderDashOffset: o.borderDashOffset ? o.borderDashOffset : f.borderDashOffset || c.borderDashOffset, borderJoinStyle: o.borderJoinStyle ? o.borderJoinStyle : f.borderJoinStyle || c.borderJoinStyle, fill: o.fill ? o.fill : void 0 !== f.fill ? f.fill : c.fill, steppedLine: o.steppedLine ? o.steppedLine : n.getValueOrDefault(f.steppedLine, c.stepped), cubicInterpolationMode: o.cubicInterpolationMode ? o.cubicInterpolationMode : n.getValueOrDefault(f.cubicInterpolationMode, c.cubicInterpolationMode) }, s.pivot()), i = 0, a = u.length; i < a; ++i) {
							r.updateElement(u[i], i, t);
						}for (g && 0 !== s._model.tension && r.updateBezierControlPoints(), i = 0, a = u.length; i < a; ++i) {
							u[i].pivot();
						}
					}, getPointBackgroundColor: function getPointBackgroundColor(t, e) {
						var i = this.chart.options.elements.point.backgroundColor,
						    a = this.getDataset(),
						    o = t.custom || {};return o.backgroundColor ? i = o.backgroundColor : a.pointBackgroundColor ? i = n.getValueAtIndexOrDefault(a.pointBackgroundColor, e, i) : a.backgroundColor && (i = a.backgroundColor), i;
					}, getPointBorderColor: function getPointBorderColor(t, e) {
						var i = this.chart.options.elements.point.borderColor,
						    a = this.getDataset(),
						    o = t.custom || {};return o.borderColor ? i = o.borderColor : a.pointBorderColor ? i = n.getValueAtIndexOrDefault(a.pointBorderColor, e, i) : a.borderColor && (i = a.borderColor), i;
					}, getPointBorderWidth: function getPointBorderWidth(t, e) {
						var i = this.chart.options.elements.point.borderWidth,
						    a = this.getDataset(),
						    o = t.custom || {};return isNaN(o.borderWidth) ? isNaN(a.pointBorderWidth) ? isNaN(a.borderWidth) || (i = a.borderWidth) : i = n.getValueAtIndexOrDefault(a.pointBorderWidth, e, i) : i = o.borderWidth, i;
					}, updateElement: function updateElement(t, e, i) {
						var a,
						    o,
						    r = this,
						    l = r.getMeta(),
						    s = t.custom || {},
						    u = r.getDataset(),
						    d = r.index,
						    c = u.data[e],
						    h = r.getScaleForId(l.yAxisID),
						    f = r.getScaleForId(l.xAxisID),
						    g = r.chart.options.elements.point,
						    p = r.chart.data.labels || [],
						    m = 1 === p.length || 1 === u.data.length || r.chart.isCombo;void 0 !== u.radius && void 0 === u.pointRadius && (u.pointRadius = u.radius), void 0 !== u.hitRadius && void 0 === u.pointHitRadius && (u.pointHitRadius = u.hitRadius), a = f.getPixelForValue("object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) ? c : NaN, e, d, m), o = i ? h.getBasePixel() : r.calculatePointY(c, e, d), t._xScale = f, t._yScale = h, t._datasetIndex = d, t._index = e, t._model = { x: a, y: o, skip: s.skip || isNaN(a) || isNaN(o), radius: s.radius || n.getValueAtIndexOrDefault(u.pointRadius, e, g.radius), pointStyle: s.pointStyle || n.getValueAtIndexOrDefault(u.pointStyle, e, g.pointStyle), backgroundColor: r.getPointBackgroundColor(t, e), borderColor: r.getPointBorderColor(t, e), borderWidth: r.getPointBorderWidth(t, e), tension: l.dataset._model ? l.dataset._model.tension : 0, steppedLine: !!l.dataset._model && l.dataset._model.steppedLine, hitRadius: s.hitRadius || n.getValueAtIndexOrDefault(u.pointHitRadius, e, g.hitRadius) };
					}, calculatePointY: function calculatePointY(t, e, n) {
						var i,
						    a,
						    o,
						    r = this,
						    l = r.chart,
						    s = r.getMeta(),
						    u = r.getScaleForId(s.yAxisID),
						    d = 0,
						    c = 0;if (u.options.stacked) {
							for (i = 0; i < n; i++) {
								if (a = l.data.datasets[i], o = l.getDatasetMeta(i), "line" === o.type && o.yAxisID === u.id && l.isDatasetVisible(i)) {
									var h = Number(u.getRightValue(a.data[e]));h < 0 ? c += h || 0 : d += h || 0;
								}
							}var f = Number(u.getRightValue(t));return f < 0 ? u.getPixelForValue(c + f) : u.getPixelForValue(d + f);
						}return u.getPixelForValue(t);
					}, updateBezierControlPoints: function updateBezierControlPoints() {
						function t(t, e, n) {
							return Math.max(Math.min(t, n), e);
						}var e,
						    i,
						    a,
						    o,
						    r,
						    l = this,
						    s = l.getMeta(),
						    u = l.chart.chartArea,
						    d = s.data || [];if (s.dataset._model.spanGaps && (d = d.filter(function (t) {
							return !t._model.skip;
						})), "monotone" === s.dataset._model.cubicInterpolationMode) n.splineCurveMonotone(d);else for (e = 0, i = d.length; e < i; ++e) {
							a = d[e], o = a._model, r = n.splineCurve(n.previousItem(d, e)._model, o, n.nextItem(d, e)._model, s.dataset._model.tension), o.controlPointPreviousX = r.previous.x, o.controlPointPreviousY = r.previous.y, o.controlPointNextX = r.next.x, o.controlPointNextY = r.next.y;
						}if (l.chart.options.elements.line.capBezierPoints) for (e = 0, i = d.length; e < i; ++e) {
							o = d[e]._model, o.controlPointPreviousX = t(o.controlPointPreviousX, u.left, u.right), o.controlPointPreviousY = t(o.controlPointPreviousY, u.top, u.bottom), o.controlPointNextX = t(o.controlPointNextX, u.left, u.right), o.controlPointNextY = t(o.controlPointNextY, u.top, u.bottom);
						}
					}, draw: function draw() {
						var n = this,
						    i = n.chart,
						    a = n.getMeta(),
						    o = a.data || [],
						    r = i.chartArea,
						    l = o.length,
						    s = 0;for (t.canvasHelpers.clipArea(i.ctx, r), e(n.getDataset(), i.options) && a.dataset.draw(), t.canvasHelpers.unclipArea(i.ctx); s < l; ++s) {
							o[s].draw(r);
						}
					}, setHoverStyle: function setHoverStyle(t) {
						var e = this.chart.data.datasets[t._datasetIndex],
						    i = t._index,
						    a = t.custom || {},
						    o = t._model;o.radius = a.hoverRadius || n.getValueAtIndexOrDefault(e.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius), o.backgroundColor = a.hoverBackgroundColor || n.getValueAtIndexOrDefault(e.pointHoverBackgroundColor, i, n.getHoverColor(o.backgroundColor)), o.borderColor = a.hoverBorderColor || n.getValueAtIndexOrDefault(e.pointHoverBorderColor, i, n.getHoverColor(o.borderColor)), o.borderWidth = a.hoverBorderWidth || n.getValueAtIndexOrDefault(e.pointHoverBorderWidth, i, o.borderWidth);
					}, removeHoverStyle: function removeHoverStyle(t) {
						var e = this,
						    i = e.chart.data.datasets[t._datasetIndex],
						    a = t._index,
						    o = t.custom || {},
						    r = t._model;void 0 !== i.radius && void 0 === i.pointRadius && (i.pointRadius = i.radius), r.radius = o.radius || n.getValueAtIndexOrDefault(i.pointRadius, a, e.chart.options.elements.point.radius), r.backgroundColor = e.getPointBackgroundColor(t, a), r.borderColor = e.getPointBorderColor(t, a), r.borderWidth = e.getPointBorderWidth(t, a);
					} });
			};
		}, {}], 19: [function (t, e, n) {
			"use strict";
			e.exports = function (t) {
				var e = t.helpers;t.defaults.polarArea = { scale: { type: "radialLinear", angleLines: { display: !1 }, gridLines: { circular: !0 }, pointLabels: { display: !1 }, ticks: { beginAtZero: !0 } }, animation: { animateRotate: !0, animateScale: !0 }, startAngle: -.5 * Math.PI, aspectRatio: 1, legendCallback: function legendCallback(t) {
						var e = [];e.push('<ul class="' + t.id + '-legend">');var n = t.data,
						    i = n.datasets,
						    a = n.labels;if (i.length) for (var o = 0; o < i[0].data.length; ++o) {
							e.push('<li><span style="background-color:' + i[0].backgroundColor[o] + '"></span>'), a[o] && e.push(a[o]), e.push("</li>");
						}return e.push("</ul>"), e.join("");
					}, legend: { labels: { generateLabels: function generateLabels(t) {
								var n = t.data;return n.labels.length && n.datasets.length ? n.labels.map(function (i, a) {
									var o = t.getDatasetMeta(0),
									    r = n.datasets[0],
									    l = o.data[a],
									    s = l.custom || {},
									    u = e.getValueAtIndexOrDefault,
									    d = t.options.elements.arc,
									    c = s.backgroundColor ? s.backgroundColor : u(r.backgroundColor, a, d.backgroundColor),
									    h = s.borderColor ? s.borderColor : u(r.borderColor, a, d.borderColor),
									    f = s.borderWidth ? s.borderWidth : u(r.borderWidth, a, d.borderWidth);return { text: i, fillStyle: c, strokeStyle: h, lineWidth: f, hidden: isNaN(r.data[a]) || o.data[a].hidden, index: a };
								}) : [];
							} }, onClick: function onClick(t, e) {
							var n,
							    i,
							    a,
							    o = e.index,
							    r = this.chart;for (n = 0, i = (r.data.datasets || []).length; n < i; ++n) {
								a = r.getDatasetMeta(n), a.data[o].hidden = !a.data[o].hidden;
							}r.update();
						} }, tooltips: { callbacks: { title: function title() {
								return "";
							}, label: function label(t, e) {
								return e.labels[t.index] + ": " + t.yLabel;
							} } } }, t.controllers.polarArea = t.DatasetController.extend({ dataElementType: t.elements.Arc, linkScales: e.noop, update: function update(t) {
						var n = this,
						    i = n.chart,
						    a = i.chartArea,
						    o = n.getMeta(),
						    r = i.options,
						    l = r.elements.arc,
						    s = Math.min(a.right - a.left, a.bottom - a.top);i.outerRadius = Math.max((s - l.borderWidth / 2) / 2, 0), i.innerRadius = Math.max(r.cutoutPercentage ? i.outerRadius / 100 * r.cutoutPercentage : 1, 0), i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(), n.outerRadius = i.outerRadius - i.radiusLength * n.index, n.innerRadius = n.outerRadius - i.radiusLength, o.count = n.countVisibleElements(), e.each(o.data, function (e, i) {
							n.updateElement(e, i, t);
						});
					}, updateElement: function updateElement(t, n, i) {
						for (var a = this, o = a.chart, r = a.getDataset(), l = o.options, s = l.animation, u = o.scale, d = e.getValueAtIndexOrDefault, c = o.data.labels, h = a.calculateCircumference(r.data[n]), f = u.xCenter, g = u.yCenter, p = 0, m = a.getMeta(), v = 0; v < n; ++v) {
							isNaN(r.data[v]) || m.data[v].hidden || ++p;
						}var b = l.startAngle,
						    x = t.hidden ? 0 : u.getDistanceFromCenterForValue(r.data[n]),
						    y = b + h * p,
						    k = y + (t.hidden ? 0 : h),
						    w = s.animateScale ? 0 : u.getDistanceFromCenterForValue(r.data[n]);e.extend(t, { _datasetIndex: a.index, _index: n, _scale: u, _model: { x: f, y: g, innerRadius: 0, outerRadius: i ? w : x, startAngle: i && s.animateRotate ? b : y, endAngle: i && s.animateRotate ? b : k, label: d(c, n, c[n]) } }), a.removeHoverStyle(t), t.pivot();
					}, removeHoverStyle: function removeHoverStyle(e) {
						t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc);
					}, countVisibleElements: function countVisibleElements() {
						var t = this.getDataset(),
						    n = this.getMeta(),
						    i = 0;return e.each(n.data, function (e, n) {
							isNaN(t.data[n]) || e.hidden || i++;
						}), i;
					}, calculateCircumference: function calculateCircumference(t) {
						var e = this.getMeta().count;return e > 0 && !isNaN(t) ? 2 * Math.PI / e : 0;
					} });
			};
		}, {}], 20: [function (t, e, n) {
			"use strict";
			e.exports = function (t) {
				var e = t.helpers;t.defaults.radar = { aspectRatio: 1, scale: { type: "radialLinear" }, elements: { line: { tension: 0 } } }, t.controllers.radar = t.DatasetController.extend({ datasetElementType: t.elements.Line, dataElementType: t.elements.Point, linkScales: e.noop, update: function update(t) {
						var n = this,
						    i = n.getMeta(),
						    a = i.dataset,
						    o = i.data,
						    r = a.custom || {},
						    l = n.getDataset(),
						    s = n.chart.options.elements.line,
						    u = n.chart.scale;void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), e.extend(i.dataset, { _datasetIndex: n.index, _scale: u, _children: o, _loop: !0, _model: { tension: r.tension ? r.tension : e.getValueOrDefault(l.lineTension, s.tension), backgroundColor: r.backgroundColor ? r.backgroundColor : l.backgroundColor || s.backgroundColor, borderWidth: r.borderWidth ? r.borderWidth : l.borderWidth || s.borderWidth, borderColor: r.borderColor ? r.borderColor : l.borderColor || s.borderColor, fill: r.fill ? r.fill : void 0 !== l.fill ? l.fill : s.fill, borderCapStyle: r.borderCapStyle ? r.borderCapStyle : l.borderCapStyle || s.borderCapStyle, borderDash: r.borderDash ? r.borderDash : l.borderDash || s.borderDash, borderDashOffset: r.borderDashOffset ? r.borderDashOffset : l.borderDashOffset || s.borderDashOffset, borderJoinStyle: r.borderJoinStyle ? r.borderJoinStyle : l.borderJoinStyle || s.borderJoinStyle } }), i.dataset.pivot(), e.each(o, function (e, i) {
							n.updateElement(e, i, t);
						}, n), n.updateBezierControlPoints();
					}, updateElement: function updateElement(t, n, i) {
						var a = this,
						    o = t.custom || {},
						    r = a.getDataset(),
						    l = a.chart.scale,
						    s = a.chart.options.elements.point,
						    u = l.getPointPositionForValue(n, r.data[n]);void 0 !== r.radius && void 0 === r.pointRadius && (r.pointRadius = r.radius), void 0 !== r.hitRadius && void 0 === r.pointHitRadius && (r.pointHitRadius = r.hitRadius), e.extend(t, { _datasetIndex: a.index, _index: n, _scale: l, _model: { x: i ? l.xCenter : u.x, y: i ? l.yCenter : u.y, tension: o.tension ? o.tension : e.getValueOrDefault(r.lineTension, a.chart.options.elements.line.tension), radius: o.radius ? o.radius : e.getValueAtIndexOrDefault(r.pointRadius, n, s.radius), backgroundColor: o.backgroundColor ? o.backgroundColor : e.getValueAtIndexOrDefault(r.pointBackgroundColor, n, s.backgroundColor), borderColor: o.borderColor ? o.borderColor : e.getValueAtIndexOrDefault(r.pointBorderColor, n, s.borderColor), borderWidth: o.borderWidth ? o.borderWidth : e.getValueAtIndexOrDefault(r.pointBorderWidth, n, s.borderWidth), pointStyle: o.pointStyle ? o.pointStyle : e.getValueAtIndexOrDefault(r.pointStyle, n, s.pointStyle), hitRadius: o.hitRadius ? o.hitRadius : e.getValueAtIndexOrDefault(r.pointHitRadius, n, s.hitRadius) } }), t._model.skip = o.skip ? o.skip : isNaN(t._model.x) || isNaN(t._model.y);
					}, updateBezierControlPoints: function updateBezierControlPoints() {
						var t = this.chart.chartArea,
						    n = this.getMeta();e.each(n.data, function (i, a) {
							var o = i._model,
							    r = e.splineCurve(e.previousItem(n.data, a, !0)._model, o, e.nextItem(n.data, a, !0)._model, o.tension);o.controlPointPreviousX = Math.max(Math.min(r.previous.x, t.right), t.left), o.controlPointPreviousY = Math.max(Math.min(r.previous.y, t.bottom), t.top), o.controlPointNextX = Math.max(Math.min(r.next.x, t.right), t.left), o.controlPointNextY = Math.max(Math.min(r.next.y, t.bottom), t.top), i.pivot();
						});
					}, setHoverStyle: function setHoverStyle(t) {
						var n = this.chart.data.datasets[t._datasetIndex],
						    i = t.custom || {},
						    a = t._index,
						    o = t._model;o.radius = i.hoverRadius ? i.hoverRadius : e.getValueAtIndexOrDefault(n.pointHoverRadius, a, this.chart.options.elements.point.hoverRadius), o.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : e.getValueAtIndexOrDefault(n.pointHoverBackgroundColor, a, e.getHoverColor(o.backgroundColor)), o.borderColor = i.hoverBorderColor ? i.hoverBorderColor : e.getValueAtIndexOrDefault(n.pointHoverBorderColor, a, e.getHoverColor(o.borderColor)), o.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : e.getValueAtIndexOrDefault(n.pointHoverBorderWidth, a, o.borderWidth);
					}, removeHoverStyle: function removeHoverStyle(t) {
						var n = this.chart.data.datasets[t._datasetIndex],
						    i = t.custom || {},
						    a = t._index,
						    o = t._model,
						    r = this.chart.options.elements.point;o.radius = i.radius ? i.radius : e.getValueAtIndexOrDefault(n.pointRadius, a, r.radius), o.backgroundColor = i.backgroundColor ? i.backgroundColor : e.getValueAtIndexOrDefault(n.pointBackgroundColor, a, r.backgroundColor), o.borderColor = i.borderColor ? i.borderColor : e.getValueAtIndexOrDefault(n.pointBorderColor, a, r.borderColor), o.borderWidth = i.borderWidth ? i.borderWidth : e.getValueAtIndexOrDefault(n.pointBorderWidth, a, r.borderWidth);
					} });
			};
		}, {}], 21: [function (t, e, n) {
			"use strict";
			e.exports = function (t) {
				var e = t.helpers;t.defaults.global.animation = { duration: 1e3, easing: "easeOutQuart", onProgress: e.noop, onComplete: e.noop }, t.Animation = t.Element.extend({ chart: null, currentStep: 0, numSteps: 60, easing: "", render: null, onAnimationProgress: null, onAnimationComplete: null }), t.animationService = { frameDuration: 17, animations: [], dropFrames: 0, request: null, addAnimation: function addAnimation(t, e, n, i) {
						var a,
						    o,
						    r = this.animations;for (e.chart = t, i || (t.animating = !0), a = 0, o = r.length; a < o; ++a) {
							if (r[a].chart === t) return void (r[a] = e);
						}r.push(e), 1 === r.length && this.requestAnimationFrame();
					}, cancelAnimation: function cancelAnimation(t) {
						var n = e.findIndex(this.animations, function (e) {
							return e.chart === t;
						});n !== -1 && (this.animations.splice(n, 1), t.animating = !1);
					}, requestAnimationFrame: function requestAnimationFrame() {
						var t = this;null === t.request && (t.request = e.requestAnimFrame.call(window, function () {
							t.request = null, t.startDigest();
						}));
					}, startDigest: function startDigest() {
						var t = this,
						    e = Date.now(),
						    n = 0;t.dropFrames > 1 && (n = Math.floor(t.dropFrames), t.dropFrames = t.dropFrames % 1), t.advance(1 + n);var i = Date.now();t.dropFrames += (i - e) / t.frameDuration, t.animations.length > 0 && t.requestAnimationFrame();
					}, advance: function advance(t) {
						for (var n, i, a = this.animations, o = 0; o < a.length;) {
							n = a[o], i = n.chart, n.currentStep = (n.currentStep || 0) + t, n.currentStep = Math.min(n.currentStep, n.numSteps), e.callback(n.render, [i, n], i), e.callback(n.onAnimationProgress, [n], i), n.currentStep >= n.numSteps ? (e.callback(n.onAnimationComplete, [n], i), i.animating = !1, a.splice(o, 1)) : ++o;
						}
					} }, Object.defineProperty(t.Animation.prototype, "animationObject", { get: function get() {
						return this;
					} }), Object.defineProperty(t.Animation.prototype, "chartInstance", { get: function get() {
						return this.chart;
					}, set: function set(t) {
						this.chart = t;
					} });
			};
		}, {}], 22: [function (t, e, n) {
			"use strict";
			e.exports = function (t) {
				var e = t.canvasHelpers = {};e.drawPoint = function (e, n, i, a, o) {
					var r, l, s, u, d, c;if ("object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && (r = n.toString(), "[object HTMLImageElement]" === r || "[object HTMLCanvasElement]" === r)) return void e.drawImage(n, a - n.width / 2, o - n.height / 2, n.width, n.height);if (!(isNaN(i) || i <= 0)) {
						switch (n) {default:
								e.beginPath(), e.arc(a, o, i, 0, 2 * Math.PI), e.closePath(), e.fill();break;case "triangle":
								e.beginPath(), l = 3 * i / Math.sqrt(3), d = l * Math.sqrt(3) / 2, e.moveTo(a - l / 2, o + d / 3), e.lineTo(a + l / 2, o + d / 3), e.lineTo(a, o - 2 * d / 3), e.closePath(), e.fill();break;case "rect":
								c = 1 / Math.SQRT2 * i, e.beginPath(), e.fillRect(a - c, o - c, 2 * c, 2 * c), e.strokeRect(a - c, o - c, 2 * c, 2 * c);break;case "rectRounded":
								var h = i / Math.SQRT2,
								    f = a - h,
								    g = o - h,
								    p = Math.SQRT2 * i;t.helpers.drawRoundedRectangle(e, f, g, p, p, i / 2), e.fill();break;case "rectRot":
								c = 1 / Math.SQRT2 * i, e.beginPath(), e.moveTo(a - c, o), e.lineTo(a, o + c), e.lineTo(a + c, o), e.lineTo(a, o - c), e.closePath(), e.fill();break;case "cross":
								e.beginPath(), e.moveTo(a, o + i), e.lineTo(a, o - i), e.moveTo(a - i, o), e.lineTo(a + i, o), e.closePath();break;case "crossRot":
								e.beginPath(), s = Math.cos(Math.PI / 4) * i, u = Math.sin(Math.PI / 4) * i, e.moveTo(a - s, o - u), e.lineTo(a + s, o + u), e.moveTo(a - s, o + u), e.lineTo(a + s, o - u), e.closePath();break;case "star":
								e.beginPath(), e.moveTo(a, o + i), e.lineTo(a, o - i), e.moveTo(a - i, o), e.lineTo(a + i, o), s = Math.cos(Math.PI / 4) * i, u = Math.sin(Math.PI / 4) * i, e.moveTo(a - s, o - u), e.lineTo(a + s, o + u), e.moveTo(a - s, o + u), e.lineTo(a + s, o - u), e.closePath();break;case "line":
								e.beginPath(), e.moveTo(a - i, o), e.lineTo(a + i, o), e.closePath();break;case "dash":
								e.beginPath(), e.moveTo(a, o), e.lineTo(a + i, o), e.closePath();}e.stroke();
					}
				}, e.clipArea = function (t, e) {
					t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip();
				}, e.unclipArea = function (t) {
					t.restore();
				}, e.lineTo = function (t, e, n, i) {
					return n.steppedLine ? ("after" === n.steppedLine ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y), void t.lineTo(n.x, n.y)) : n.tension ? void t.bezierCurveTo(i ? e.controlPointPreviousX : e.controlPointNextX, i ? e.controlPointPreviousY : e.controlPointNextY, i ? n.controlPointNextX : n.controlPointPreviousX, i ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y) : void t.lineTo(n.x, n.y);
				}, t.helpers.canvas = e;
			};
		}, {}], 23: [function (t, e, n) {
			"use strict";
			e.exports = function (t) {
				function e(e) {
					e = e || {};var n = e.data = e.data || {};return n.datasets = n.datasets || [], n.labels = n.labels || [], e.options = a.configMerge(t.defaults.global, t.defaults[e.type], e.options || {}), e;
				}function n(t) {
					var e = t.options;e.scale ? t.scale.options = e.scale : e.scales && e.scales.xAxes.concat(e.scales.yAxes).forEach(function (e) {
						t.scales[e.id].options = e;
					}), t.tooltip._options = e.tooltips;
				}function i(t) {
					return "top" === t || "bottom" === t;
				}var a = t.helpers,
				    o = t.plugins,
				    r = t.platform;t.types = {}, t.instances = {}, t.controllers = {}, a.extend(t.prototype, { construct: function construct(n, i) {
						var o = this;i = e(i);var l = r.acquireContext(n, i),
						    s = l && l.canvas,
						    u = s && s.height,
						    d = s && s.width;return o.id = a.uid(), o.ctx = l, o.canvas = s, o.config = i, o.width = d, o.height = u, o.aspectRatio = u ? d / u : null, o.options = i.options, o._bufferedRender = !1, o.chart = o, o.controller = o, t.instances[o.id] = o, Object.defineProperty(o, "data", { get: function get() {
								return o.config.data;
							}, set: function set(t) {
								o.config.data = t;
							} }), l && s ? (o.initialize(), void o.update()) : void console.error("Failed to create chart: can't acquire context from the given item");
					}, initialize: function initialize() {
						var t = this;return o.notify(t, "beforeInit"), a.retinaScale(t), t.bindEvents(), t.options.responsive && t.resize(!0), t.ensureScalesHaveIDs(), t.buildScales(), t.initToolTip(), o.notify(t, "afterInit"), t;
					}, clear: function clear() {
						return a.clear(this), this;
					}, stop: function stop() {
						return t.animationService.cancelAnimation(this), this;
					}, resize: function resize(t) {
						var e = this,
						    n = e.options,
						    i = e.canvas,
						    r = n.maintainAspectRatio && e.aspectRatio || null,
						    l = Math.floor(a.getMaximumWidth(i)),
						    s = Math.floor(r ? l / r : a.getMaximumHeight(i));if ((e.width !== l || e.height !== s) && (i.width = e.width = l, i.height = e.height = s, i.style.width = l + "px", i.style.height = s + "px", a.retinaScale(e), !t)) {
							var u = { width: l, height: s };o.notify(e, "resize", [u]), e.options.onResize && e.options.onResize(e, u), e.stop(), e.update(e.options.responsiveAnimationDuration);
						}
					}, ensureScalesHaveIDs: function ensureScalesHaveIDs() {
						var t = this.options,
						    e = t.scales || {},
						    n = t.scale;a.each(e.xAxes, function (t, e) {
							t.id = t.id || "x-axis-" + e;
						}), a.each(e.yAxes, function (t, e) {
							t.id = t.id || "y-axis-" + e;
						}), n && (n.id = n.id || "scale");
					}, buildScales: function buildScales() {
						var e = this,
						    n = e.options,
						    o = e.scales = {},
						    r = [];n.scales && (r = r.concat((n.scales.xAxes || []).map(function (t) {
							return { options: t, dtype: "category", dposition: "bottom" };
						}), (n.scales.yAxes || []).map(function (t) {
							return { options: t, dtype: "linear", dposition: "left" };
						}))), n.scale && r.push({ options: n.scale, dtype: "radialLinear", isDefault: !0, dposition: "chartArea" }), a.each(r, function (n) {
							var r = n.options,
							    l = a.getValueOrDefault(r.type, n.dtype),
							    s = t.scaleService.getScaleConstructor(l);if (s) {
								i(r.position) !== i(n.dposition) && (r.position = n.dposition);var u = new s({ id: r.id, options: r, ctx: e.ctx, chart: e });o[u.id] = u, n.isDefault && (e.scale = u);
							}
						}), t.scaleService.addScalesToLayout(this);
					}, buildOrUpdateControllers: function buildOrUpdateControllers() {
						var e = this,
						    n = [],
						    i = [];if (a.each(e.data.datasets, function (a, o) {
							var r = e.getDatasetMeta(o);if (r.type || (r.type = a.type || e.config.type), n.push(r.type), r.controller) r.controller.updateIndex(o);else {
								var l = t.controllers[r.type];if (void 0 === l) throw new Error('"' + r.type + '" is not a chart type.');r.controller = new l(e, o), i.push(r.controller);
							}
						}, e), n.length > 1) for (var o = 1; o < n.length; o++) {
							if (n[o] !== n[o - 1]) {
								e.isCombo = !0;break;
							}
						}return i;
					}, resetElements: function resetElements() {
						var t = this;a.each(t.data.datasets, function (e, n) {
							t.getDatasetMeta(n).controller.reset();
						}, t);
					}, reset: function reset() {
						this.resetElements(), this.tooltip.initialize();
					}, update: function update(t, e) {
						var i = this;if (n(i), o.notify(i, "beforeUpdate") !== !1) {
							i.tooltip._data = i.data;var r = i.buildOrUpdateControllers();a.each(i.data.datasets, function (t, e) {
								i.getDatasetMeta(e).controller.buildOrUpdateElements();
							}, i), i.updateLayout(), a.each(r, function (t) {
								t.reset();
							}), i.updateDatasets(), o.notify(i, "afterUpdate"), i._bufferedRender ? i._bufferedRequest = { lazy: e, duration: t } : i.render(t, e);
						}
					}, updateLayout: function updateLayout() {
						var e = this;o.notify(e, "beforeLayout") !== !1 && (t.layoutService.update(this, this.width, this.height), o.notify(e, "afterScaleUpdate"), o.notify(e, "afterLayout"));
					}, updateDatasets: function updateDatasets() {
						var t = this;if (o.notify(t, "beforeDatasetsUpdate") !== !1) {
							for (var e = 0, n = t.data.datasets.length; e < n; ++e) {
								t.updateDataset(e);
							}o.notify(t, "afterDatasetsUpdate");
						}
					}, updateDataset: function updateDataset(t) {
						var e = this,
						    n = e.getDatasetMeta(t),
						    i = { meta: n, index: t };o.notify(e, "beforeDatasetUpdate", [i]) !== !1 && (n.controller.update(), o.notify(e, "afterDatasetUpdate", [i]));
					}, render: function render(e, n) {
						var i = this;if (o.notify(i, "beforeRender") !== !1) {
							var r = i.options.animation,
							    l = function l(t) {
								o.notify(i, "afterRender"), a.callback(r && r.onComplete, [t], i);
							};if (r && ("undefined" != typeof e && 0 !== e || "undefined" == typeof e && 0 !== r.duration)) {
								var s = new t.Animation({ numSteps: (e || r.duration) / 16.66, easing: r.easing, render: function render(t, e) {
										var n = a.easingEffects[e.easing],
										    i = e.currentStep,
										    o = i / e.numSteps;t.draw(n(o), o, i);
									}, onAnimationProgress: r.onProgress, onAnimationComplete: l });t.animationService.addAnimation(i, s, e, n);
							} else i.draw(), l(new t.Animation({ numSteps: 0, chart: i }));return i;
						}
					}, draw: function draw(t) {
						var e = this;e.clear(), void 0 !== t && null !== t || (t = 1), e.transition(t), o.notify(e, "beforeDraw", [t]) !== !1 && (a.each(e.boxes, function (t) {
							t.draw(e.chartArea);
						}, e), e.scale && e.scale.draw(), e.drawDatasets(t), e.tooltip.draw(), o.notify(e, "afterDraw", [t]));
					}, transition: function transition(t) {
						for (var e = this, n = 0, i = (e.data.datasets || []).length; n < i; ++n) {
							e.isDatasetVisible(n) && e.getDatasetMeta(n).controller.transition(t);
						}e.tooltip.transition(t);
					}, drawDatasets: function drawDatasets(t) {
						var e = this;if (o.notify(e, "beforeDatasetsDraw", [t]) !== !1) {
							for (var n = (e.data.datasets || []).length - 1; n >= 0; --n) {
								e.isDatasetVisible(n) && e.drawDataset(n, t);
							}o.notify(e, "afterDatasetsDraw", [t]);
						}
					}, drawDataset: function drawDataset(t, e) {
						var n = this,
						    i = n.getDatasetMeta(t),
						    a = { meta: i, index: t, easingValue: e };o.notify(n, "beforeDatasetDraw", [a]) !== !1 && (i.controller.draw(e), o.notify(n, "afterDatasetDraw", [a]));
					}, getElementAtEvent: function getElementAtEvent(e) {
						return t.Interaction.modes.single(this, e);
					}, getElementsAtEvent: function getElementsAtEvent(e) {
						return t.Interaction.modes.label(this, e, { intersect: !0 });
					}, getElementsAtXAxis: function getElementsAtXAxis(e) {
						return t.Interaction.modes["x-axis"](this, e, { intersect: !0 });
					}, getElementsAtEventForMode: function getElementsAtEventForMode(e, n, i) {
						var a = t.Interaction.modes[n];return "function" == typeof a ? a(this, e, i) : [];
					}, getDatasetAtEvent: function getDatasetAtEvent(e) {
						return t.Interaction.modes.dataset(this, e, { intersect: !0 });
					}, getDatasetMeta: function getDatasetMeta(t) {
						var e = this,
						    n = e.data.datasets[t];n._meta || (n._meta = {});var i = n._meta[e.id];return i || (i = n._meta[e.id] = { type: null, data: [], dataset: null, controller: null, hidden: null, xAxisID: null, yAxisID: null }), i;
					}, getVisibleDatasetCount: function getVisibleDatasetCount() {
						for (var t = 0, e = 0, n = this.data.datasets.length; e < n; ++e) {
							this.isDatasetVisible(e) && t++;
						}return t;
					}, isDatasetVisible: function isDatasetVisible(t) {
						var e = this.getDatasetMeta(t);return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden;
					}, generateLegend: function generateLegend() {
						return this.options.legendCallback(this);
					}, destroy: function destroy() {
						var e,
						    n,
						    i,
						    l = this,
						    s = l.canvas;for (l.stop(), n = 0, i = l.data.datasets.length; n < i; ++n) {
							e = l.getDatasetMeta(n), e.controller && (e.controller.destroy(), e.controller = null);
						}s && (l.unbindEvents(), a.clear(l), r.releaseContext(l.ctx), l.canvas = null, l.ctx = null), o.notify(l, "destroy"), delete t.instances[l.id];
					}, toBase64Image: function toBase64Image() {
						return this.canvas.toDataURL.apply(this.canvas, arguments);
					}, initToolTip: function initToolTip() {
						var e = this;e.tooltip = new t.Tooltip({ _chart: e, _chartInstance: e, _data: e.data, _options: e.options.tooltips }, e), e.tooltip.initialize();
					}, bindEvents: function bindEvents() {
						var t = this,
						    e = t._listeners = {},
						    n = function n() {
							t.eventHandler.apply(t, arguments);
						};a.each(t.options.events, function (i) {
							r.addEventListener(t, i, n), e[i] = n;
						}), t.options.responsive && (n = function n() {
							t.resize();
						}, r.addEventListener(t, "resize", n), e.resize = n);
					}, unbindEvents: function unbindEvents() {
						var t = this,
						    e = t._listeners;e && (delete t._listeners, a.each(e, function (e, n) {
							r.removeEventListener(t, n, e);
						}));
					}, updateHoverStyle: function updateHoverStyle(t, e, n) {
						var i,
						    a,
						    o,
						    r = n ? "setHoverStyle" : "removeHoverStyle";for (a = 0, o = t.length; a < o; ++a) {
							i = t[a], i && this.getDatasetMeta(i._datasetIndex).controller[r](i);
						}
					}, eventHandler: function eventHandler(t) {
						var e = this,
						    n = e.tooltip;if (o.notify(e, "beforeEvent", [t]) !== !1) {
							e._bufferedRender = !0, e._bufferedRequest = null;var i = e.handleEvent(t);i |= n && n.handleEvent(t), o.notify(e, "afterEvent", [t]);var a = e._bufferedRequest;return a ? e.render(a.duration, a.lazy) : i && !e.animating && (e.stop(), e.render(e.options.hover.animationDuration, !0)), e._bufferedRender = !1, e._bufferedRequest = null, e;
						}
					}, handleEvent: function handleEvent(t) {
						var e = this,
						    n = e.options || {},
						    i = n.hover,
						    o = !1;return e.lastActive = e.lastActive || [], "mouseout" === t.type ? e.active = [] : e.active = e.getElementsAtEventForMode(t, i.mode, i), i.onHover && i.onHover.call(e, t.native, e.active), "mouseup" !== t.type && "click" !== t.type || n.onClick && n.onClick.call(e, t.native, e.active), e.lastActive.length && e.updateHoverStyle(e.lastActive, i.mode, !1), e.active.length && i.mode && e.updateHoverStyle(e.active, i.mode, !0), o = !a.arrayEquals(e.active, e.lastActive), e.lastActive = e.active, o;
					} }), t.Controller = t;
			};
		}, {}], 24: [function (t, e, n) {
			"use strict";
			e.exports = function (t) {
				function e(t, e) {
					return t._chartjs ? void t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", { configurable: !0, enumerable: !1, value: { listeners: [e] } }), void a.forEach(function (e) {
						var n = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
						    a = t[e];Object.defineProperty(t, e, { configurable: !0, enumerable: !1, value: function value() {
								var e = Array.prototype.slice.call(arguments),
								    o = a.apply(this, e);return i.each(t._chartjs.listeners, function (t) {
									"function" == typeof t[n] && t[n].apply(t, e);
								}), o;
							} });
					}));
				}function n(t, e) {
					var n = t._chartjs;if (n) {
						var i = n.listeners,
						    o = i.indexOf(e);
						o !== -1 && i.splice(o, 1), i.length > 0 || (a.forEach(function (e) {
							delete t[e];
						}), delete t._chartjs);
					}
				}var i = t.helpers,
				    a = ["push", "pop", "shift", "splice", "unshift"];t.DatasetController = function (t, e) {
					this.initialize(t, e);
				}, i.extend(t.DatasetController.prototype, { datasetElementType: null, dataElementType: null, initialize: function initialize(t, e) {
						var n = this;n.chart = t, n.index = e, n.linkScales(), n.addElements();
					}, updateIndex: function updateIndex(t) {
						this.index = t;
					}, linkScales: function linkScales() {
						var t = this,
						    e = t.getMeta(),
						    n = t.getDataset();null === e.xAxisID && (e.xAxisID = n.xAxisID || t.chart.options.scales.xAxes[0].id), null === e.yAxisID && (e.yAxisID = n.yAxisID || t.chart.options.scales.yAxes[0].id);
					}, getDataset: function getDataset() {
						return this.chart.data.datasets[this.index];
					}, getMeta: function getMeta() {
						return this.chart.getDatasetMeta(this.index);
					}, getScaleForId: function getScaleForId(t) {
						return this.chart.scales[t];
					}, reset: function reset() {
						this.update(!0);
					}, destroy: function destroy() {
						this._data && n(this._data, this);
					}, createMetaDataset: function createMetaDataset() {
						var t = this,
						    e = t.datasetElementType;return e && new e({ _chart: t.chart, _datasetIndex: t.index });
					}, createMetaData: function createMetaData(t) {
						var e = this,
						    n = e.dataElementType;return n && new n({ _chart: e.chart, _datasetIndex: e.index, _index: t });
					}, addElements: function addElements() {
						var t,
						    e,
						    n = this,
						    i = n.getMeta(),
						    a = n.getDataset().data || [],
						    o = i.data;for (t = 0, e = a.length; t < e; ++t) {
							o[t] = o[t] || n.createMetaData(t);
						}i.dataset = i.dataset || n.createMetaDataset();
					}, addElementAndReset: function addElementAndReset(t) {
						var e = this.createMetaData(t);this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0);
					}, buildOrUpdateElements: function buildOrUpdateElements() {
						var t = this,
						    i = t.getDataset(),
						    a = i.data || (i.data = []);t._data !== a && (t._data && n(t._data, t), e(a, t), t._data = a), t.resyncElements();
					}, update: i.noop, transition: function transition(t) {
						for (var e = this.getMeta(), n = e.data || [], i = n.length, a = 0; a < i; ++a) {
							n[a].transition(t);
						}e.dataset && e.dataset.transition(t);
					}, draw: function draw() {
						var t = this.getMeta(),
						    e = t.data || [],
						    n = e.length,
						    i = 0;for (t.dataset && t.dataset.draw(); i < n; ++i) {
							e[i].draw();
						}
					}, removeHoverStyle: function removeHoverStyle(t, e) {
						var n = this.chart.data.datasets[t._datasetIndex],
						    a = t._index,
						    o = t.custom || {},
						    r = i.getValueAtIndexOrDefault,
						    l = t._model;l.backgroundColor = o.backgroundColor ? o.backgroundColor : r(n.backgroundColor, a, e.backgroundColor), l.borderColor = o.borderColor ? o.borderColor : r(n.borderColor, a, e.borderColor), l.borderWidth = o.borderWidth ? o.borderWidth : r(n.borderWidth, a, e.borderWidth);
					}, setHoverStyle: function setHoverStyle(t) {
						var e = this.chart.data.datasets[t._datasetIndex],
						    n = t._index,
						    a = t.custom || {},
						    o = i.getValueAtIndexOrDefault,
						    r = i.getHoverColor,
						    l = t._model;l.backgroundColor = a.hoverBackgroundColor ? a.hoverBackgroundColor : o(e.hoverBackgroundColor, n, r(l.backgroundColor)), l.borderColor = a.hoverBorderColor ? a.hoverBorderColor : o(e.hoverBorderColor, n, r(l.borderColor)), l.borderWidth = a.hoverBorderWidth ? a.hoverBorderWidth : o(e.hoverBorderWidth, n, l.borderWidth);
					}, resyncElements: function resyncElements() {
						var t = this,
						    e = t.getMeta(),
						    n = t.getDataset().data,
						    i = e.data.length,
						    a = n.length;a < i ? e.data.splice(a, i - a) : a > i && t.insertElements(i, a - i);
					}, insertElements: function insertElements(t, e) {
						for (var n = 0; n < e; ++n) {
							this.addElementAndReset(t + n);
						}
					}, onDataPush: function onDataPush() {
						this.insertElements(this.getDataset().data.length - 1, arguments.length);
					}, onDataPop: function onDataPop() {
						this.getMeta().data.pop();
					}, onDataShift: function onDataShift() {
						this.getMeta().data.shift();
					}, onDataSplice: function onDataSplice(t, e) {
						this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2);
					}, onDataUnshift: function onDataUnshift() {
						this.insertElements(0, arguments.length);
					} }), t.DatasetController.extend = i.inherits;
			};
		}, {}], 25: [function (t, e, n) {
			"use strict";
			var i = t(3);e.exports = function (t) {
				function e(t, e, n, a) {
					var o,
					    r,
					    l,
					    s,
					    u,
					    d,
					    c,
					    h,
					    f,
					    g = Object.keys(n);for (o = 0, r = g.length; o < r; ++o) {
						if (l = g[o], d = n[l], e.hasOwnProperty(l) || (e[l] = d), s = e[l], s !== d && "_" !== l[0]) {
							if (t.hasOwnProperty(l) || (t[l] = s), u = t[l], c = typeof d === "undefined" ? "undefined" : _typeof(d), c === (typeof u === "undefined" ? "undefined" : _typeof(u))) if ("string" === c) {
								if (h = i(u), h.valid && (f = i(d), f.valid)) {
									e[l] = f.mix(h, a).rgbString();continue;
								}
							} else if ("number" === c && isFinite(u) && isFinite(d)) {
								e[l] = u + (d - u) * a;continue;
							}e[l] = d;
						}
					}
				}var n = t.helpers;t.elements = {}, t.Element = function (t) {
					n.extend(this, t), this.initialize.apply(this, arguments);
				}, n.extend(t.Element.prototype, { initialize: function initialize() {
						this.hidden = !1;
					}, pivot: function pivot() {
						var t = this;return t._view || (t._view = n.clone(t._model)), t._start = {}, t;
					}, transition: function transition(t) {
						var n = this,
						    i = n._model,
						    a = n._start,
						    o = n._view;return i && 1 !== t ? (o || (o = n._view = {}), a || (a = n._start = {}), e(a, o, i, t), n) : (n._view = i, n._start = null, n);
					}, tooltipPosition: function tooltipPosition() {
						return { x: this._model.x, y: this._model.y };
					}, hasValue: function hasValue() {
						return n.isNumber(this._model.x) && n.isNumber(this._model.y);
					} }), t.Element.extend = n.inherits;
			};
		}, { 3: 3 }], 26: [function (t, e, n) {
			"use strict";
			var i = t(3);e.exports = function (t) {
				function e(t, e, n) {
					var i;return "string" == typeof t ? (i = parseInt(t, 10), t.indexOf("%") !== -1 && (i = i / 100 * e.parentNode[n])) : i = t, i;
				}function n(t) {
					return void 0 !== t && null !== t && "none" !== t;
				}function a(t, i, a) {
					var o = document.defaultView,
					    r = t.parentNode,
					    l = o.getComputedStyle(t)[i],
					    s = o.getComputedStyle(r)[i],
					    u = n(l),
					    d = n(s),
					    c = Number.POSITIVE_INFINITY;return u || d ? Math.min(u ? e(l, t, a) : c, d ? e(s, r, a) : c) : "none";
				}var o = t.helpers = {};o.each = function (t, e, n, i) {
					var a, r;if (o.isArray(t)) {
						if (r = t.length, i) for (a = r - 1; a >= 0; a--) {
							e.call(n, t[a], a);
						} else for (a = 0; a < r; a++) {
							e.call(n, t[a], a);
						}
					} else if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
						var l = Object.keys(t);for (r = l.length, a = 0; a < r; a++) {
							e.call(n, t[l[a]], l[a]);
						}
					}
				}, o.clone = function (t) {
					var e = {};return o.each(t, function (t, n) {
						o.isArray(t) ? e[n] = t.slice(0) : "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && null !== t ? e[n] = o.clone(t) : e[n] = t;
					}), e;
				}, o.extend = function (t) {
					for (var e = function e(_e, n) {
						t[n] = _e;
					}, n = 1, i = arguments.length; n < i; n++) {
						o.each(arguments[n], e);
					}return t;
				}, o.configMerge = function (e) {
					var n = o.clone(e);return o.each(Array.prototype.slice.call(arguments, 1), function (e) {
						o.each(e, function (e, i) {
							var a = n.hasOwnProperty(i),
							    r = a ? n[i] : {};"scales" === i ? n[i] = o.scaleMerge(r, e) : "scale" === i ? n[i] = o.configMerge(r, t.scaleService.getScaleDefaults(e.type), e) : !a || "object" != (typeof r === "undefined" ? "undefined" : _typeof(r)) || o.isArray(r) || null === r || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) || o.isArray(e) ? n[i] = e : n[i] = o.configMerge(r, e);
						});
					}), n;
				}, o.scaleMerge = function (e, n) {
					var i = o.clone(e);return o.each(n, function (e, n) {
						"xAxes" === n || "yAxes" === n ? i.hasOwnProperty(n) ? o.each(e, function (e, a) {
							var r = o.getValueOrDefault(e.type, "xAxes" === n ? "category" : "linear"),
							    l = t.scaleService.getScaleDefaults(r);a >= i[n].length || !i[n][a].type ? i[n].push(o.configMerge(l, e)) : e.type && e.type !== i[n][a].type ? i[n][a] = o.configMerge(i[n][a], l, e) : i[n][a] = o.configMerge(i[n][a], e);
						}) : (i[n] = [], o.each(e, function (e) {
							var a = o.getValueOrDefault(e.type, "xAxes" === n ? "category" : "linear");i[n].push(o.configMerge(t.scaleService.getScaleDefaults(a), e));
						})) : i.hasOwnProperty(n) && "object" == _typeof(i[n]) && null !== i[n] && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? i[n] = o.configMerge(i[n], e) : i[n] = e;
					}), i;
				}, o.getValueAtIndexOrDefault = function (t, e, n) {
					return void 0 === t || null === t ? n : o.isArray(t) ? e < t.length ? t[e] : n : t;
				}, o.getValueOrDefault = function (t, e) {
					return void 0 === t ? e : t;
				}, o.indexOf = Array.prototype.indexOf ? function (t, e) {
					return t.indexOf(e);
				} : function (t, e) {
					for (var n = 0, i = t.length; n < i; ++n) {
						if (t[n] === e) return n;
					}return -1;
				}, o.where = function (t, e) {
					if (o.isArray(t) && Array.prototype.filter) return t.filter(e);var n = [];return o.each(t, function (t) {
						e(t) && n.push(t);
					}), n;
				}, o.findIndex = Array.prototype.findIndex ? function (t, e, n) {
					return t.findIndex(e, n);
				} : function (t, e, n) {
					n = void 0 === n ? t : n;for (var i = 0, a = t.length; i < a; ++i) {
						if (e.call(n, t[i], i, t)) return i;
					}return -1;
				}, o.findNextWhere = function (t, e, n) {
					void 0 !== n && null !== n || (n = -1);for (var i = n + 1; i < t.length; i++) {
						var a = t[i];if (e(a)) return a;
					}
				}, o.findPreviousWhere = function (t, e, n) {
					void 0 !== n && null !== n || (n = t.length);for (var i = n - 1; i >= 0; i--) {
						var a = t[i];if (e(a)) return a;
					}
				}, o.inherits = function (t) {
					var e = this,
					    n = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
						return e.apply(this, arguments);
					},
					    i = function i() {
						this.constructor = n;
					};return i.prototype = e.prototype, n.prototype = new i(), n.extend = o.inherits, t && o.extend(n.prototype, t), n.__super__ = e.prototype, n;
				}, o.noop = function () {}, o.uid = function () {
					var t = 0;return function () {
						return t++;
					};
				}(), o.isNumber = function (t) {
					return !isNaN(parseFloat(t)) && isFinite(t);
				}, o.almostEquals = function (t, e, n) {
					return Math.abs(t - e) < n;
				}, o.almostWhole = function (t, e) {
					var n = Math.round(t);return n - e < t && n + e > t;
				}, o.max = function (t) {
					return t.reduce(function (t, e) {
						return isNaN(e) ? t : Math.max(t, e);
					}, Number.NEGATIVE_INFINITY);
				}, o.min = function (t) {
					return t.reduce(function (t, e) {
						return isNaN(e) ? t : Math.min(t, e);
					}, Number.POSITIVE_INFINITY);
				}, o.sign = Math.sign ? function (t) {
					return Math.sign(t);
				} : function (t) {
					return t = +t, 0 === t || isNaN(t) ? t : t > 0 ? 1 : -1;
				}, o.log10 = Math.log10 ? function (t) {
					return Math.log10(t);
				} : function (t) {
					return Math.log(t) / Math.LN10;
				}, o.toRadians = function (t) {
					return t * (Math.PI / 180);
				}, o.toDegrees = function (t) {
					return t * (180 / Math.PI);
				}, o.getAngleFromPoint = function (t, e) {
					var n = e.x - t.x,
					    i = e.y - t.y,
					    a = Math.sqrt(n * n + i * i),
					    o = Math.atan2(i, n);return o < -.5 * Math.PI && (o += 2 * Math.PI), { angle: o, distance: a };
				}, o.distanceBetweenPoints = function (t, e) {
					return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
				}, o.aliasPixel = function (t) {
					return t % 2 === 0 ? 0 : .5;
				}, o.splineCurve = function (t, e, n, i) {
					var a = t.skip ? e : t,
					    o = e,
					    r = n.skip ? e : n,
					    l = Math.sqrt(Math.pow(o.x - a.x, 2) + Math.pow(o.y - a.y, 2)),
					    s = Math.sqrt(Math.pow(r.x - o.x, 2) + Math.pow(r.y - o.y, 2)),
					    u = l / (l + s),
					    d = s / (l + s);u = isNaN(u) ? 0 : u, d = isNaN(d) ? 0 : d;var c = i * u,
					    h = i * d;return { previous: { x: o.x - c * (r.x - a.x), y: o.y - c * (r.y - a.y) }, next: { x: o.x + h * (r.x - a.x), y: o.y + h * (r.y - a.y) } };
				}, o.EPSILON = Number.EPSILON || 1e-14, o.splineCurveMonotone = function (t) {
					var e,
					    n,
					    i,
					    a,
					    r = (t || []).map(function (t) {
						return { model: t._model, deltaK: 0, mK: 0 };
					}),
					    l = r.length;for (e = 0; e < l; ++e) {
						if (i = r[e], !i.model.skip) {
							if (n = e > 0 ? r[e - 1] : null, a = e < l - 1 ? r[e + 1] : null, a && !a.model.skip) {
								var s = a.model.x - i.model.x;i.deltaK = 0 !== s ? (a.model.y - i.model.y) / s : 0;
							}!n || n.model.skip ? i.mK = i.deltaK : !a || a.model.skip ? i.mK = n.deltaK : this.sign(n.deltaK) !== this.sign(i.deltaK) ? i.mK = 0 : i.mK = (n.deltaK + i.deltaK) / 2;
						}
					}var u, d, c, h;for (e = 0; e < l - 1; ++e) {
						i = r[e], a = r[e + 1], i.model.skip || a.model.skip || (o.almostEquals(i.deltaK, 0, this.EPSILON) ? i.mK = a.mK = 0 : (u = i.mK / i.deltaK, d = a.mK / i.deltaK, h = Math.pow(u, 2) + Math.pow(d, 2), h <= 9 || (c = 3 / Math.sqrt(h), i.mK = u * c * i.deltaK, a.mK = d * c * i.deltaK)));
					}var f;for (e = 0; e < l; ++e) {
						i = r[e], i.model.skip || (n = e > 0 ? r[e - 1] : null, a = e < l - 1 ? r[e + 1] : null, n && !n.model.skip && (f = (i.model.x - n.model.x) / 3, i.model.controlPointPreviousX = i.model.x - f, i.model.controlPointPreviousY = i.model.y - f * i.mK), a && !a.model.skip && (f = (a.model.x - i.model.x) / 3, i.model.controlPointNextX = i.model.x + f, i.model.controlPointNextY = i.model.y + f * i.mK));
					}
				}, o.nextItem = function (t, e, n) {
					return n ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1];
				}, o.previousItem = function (t, e, n) {
					return n ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1];
				}, o.niceNum = function (t, e) {
					var n,
					    i = Math.floor(o.log10(t)),
					    a = t / Math.pow(10, i);return n = e ? a < 1.5 ? 1 : a < 3 ? 2 : a < 7 ? 5 : 10 : a <= 1 ? 1 : a <= 2 ? 2 : a <= 5 ? 5 : 10, n * Math.pow(10, i);
				};var r = o.easingEffects = { linear: function linear(t) {
						return t;
					}, easeInQuad: function easeInQuad(t) {
						return t * t;
					}, easeOutQuad: function easeOutQuad(t) {
						return -1 * t * (t - 2);
					}, easeInOutQuad: function easeInOutQuad(t) {
						return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
					}, easeInCubic: function easeInCubic(t) {
						return t * t * t;
					}, easeOutCubic: function easeOutCubic(t) {
						return 1 * ((t = t / 1 - 1) * t * t + 1);
					}, easeInOutCubic: function easeInOutCubic(t) {
						return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
					}, easeInQuart: function easeInQuart(t) {
						return t * t * t * t;
					}, easeOutQuart: function easeOutQuart(t) {
						return -1 * ((t = t / 1 - 1) * t * t * t - 1);
					}, easeInOutQuart: function easeInOutQuart(t) {
						return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2);
					}, easeInQuint: function easeInQuint(t) {
						return 1 * (t /= 1) * t * t * t * t;
					}, easeOutQuint: function easeOutQuint(t) {
						return 1 * ((t = t / 1 - 1) * t * t * t * t + 1);
					}, easeInOutQuint: function easeInOutQuint(t) {
						return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
					}, easeInSine: function easeInSine(t) {
						return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1;
					}, easeOutSine: function easeOutSine(t) {
						return 1 * Math.sin(t / 1 * (Math.PI / 2));
					}, easeInOutSine: function easeInOutSine(t) {
						return -.5 * (Math.cos(Math.PI * t / 1) - 1);
					}, easeInExpo: function easeInExpo(t) {
						return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1));
					}, easeOutExpo: function easeOutExpo(t) {
						return 1 === t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1);
					}, easeInOutExpo: function easeInOutExpo(t) {
						return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2);
					}, easeInCirc: function easeInCirc(t) {
						return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1);
					}, easeOutCirc: function easeOutCirc(t) {
						return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t);
					}, easeInOutCirc: function easeInOutCirc(t) {
						return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
					}, easeInElastic: function easeInElastic(t) {
						var e = 1.70158,
						    n = 0,
						    i = 1;return 0 === t ? 0 : 1 === (t /= 1) ? 1 : (n || (n = .3), i < Math.abs(1) ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), -(i * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / n)));
					}, easeOutElastic: function easeOutElastic(t) {
						var e = 1.70158,
						    n = 0,
						    i = 1;return 0 === t ? 0 : 1 === (t /= 1) ? 1 : (n || (n = .3), i < Math.abs(1) ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin((1 * t - e) * (2 * Math.PI) / n) + 1);
					}, easeInOutElastic: function easeInOutElastic(t) {
						var e = 1.70158,
						    n = 0,
						    i = 1;return 0 === t ? 0 : 2 === (t /= .5) ? 1 : (n || (n = 1 * (.3 * 1.5)), i < Math.abs(1) ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), t < 1 ? -.5 * (i * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / n)) : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / n) * .5 + 1);
					}, easeInBack: function easeInBack(t) {
						var e = 1.70158;return 1 * (t /= 1) * t * ((e + 1) * t - e);
					}, easeOutBack: function easeOutBack(t) {
						var e = 1.70158;return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1);
					}, easeInOutBack: function easeInOutBack(t) {
						var e = 1.70158;return (t /= .5) < 1 ? .5 * (t * t * (((e *= 1.525) + 1) * t - e)) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2);
					}, easeInBounce: function easeInBounce(t) {
						return 1 - r.easeOutBounce(1 - t);
					}, easeOutBounce: function easeOutBounce(t) {
						return (t /= 1) < 1 / 2.75 ? 1 * (7.5625 * t * t) : t < 2 / 2.75 ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375);
					}, easeInOutBounce: function easeInOutBounce(t) {
						return t < .5 ? .5 * r.easeInBounce(2 * t) : .5 * r.easeOutBounce(2 * t - 1) + .5;
					} };o.requestAnimFrame = function () {
					return "undefined" == typeof window ? function (t) {
						t();
					} : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
						return window.setTimeout(t, 1e3 / 60);
					};
				}(), o.getRelativePosition = function (t, e) {
					var n,
					    i,
					    a = t.originalEvent || t,
					    r = t.currentTarget || t.srcElement,
					    l = r.getBoundingClientRect(),
					    s = a.touches;s && s.length > 0 ? (n = s[0].clientX, i = s[0].clientY) : (n = a.clientX, i = a.clientY);var u = parseFloat(o.getStyle(r, "padding-left")),
					    d = parseFloat(o.getStyle(r, "padding-top")),
					    c = parseFloat(o.getStyle(r, "padding-right")),
					    h = parseFloat(o.getStyle(r, "padding-bottom")),
					    f = l.right - l.left - u - c,
					    g = l.bottom - l.top - d - h;return n = Math.round((n - l.left - u) / f * r.width / e.currentDevicePixelRatio), i = Math.round((i - l.top - d) / g * r.height / e.currentDevicePixelRatio), { x: n, y: i };
				}, o.addEvent = function (t, e, n) {
					t.addEventListener ? t.addEventListener(e, n) : t.attachEvent ? t.attachEvent("on" + e, n) : t["on" + e] = n;
				}, o.removeEvent = function (t, e, n) {
					t.removeEventListener ? t.removeEventListener(e, n, !1) : t.detachEvent ? t.detachEvent("on" + e, n) : t["on" + e] = o.noop;
				}, o.getConstraintWidth = function (t) {
					return a(t, "max-width", "clientWidth");
				}, o.getConstraintHeight = function (t) {
					return a(t, "max-height", "clientHeight");
				}, o.getMaximumWidth = function (t) {
					var e = t.parentNode,
					    n = parseInt(o.getStyle(e, "padding-left"), 10),
					    i = parseInt(o.getStyle(e, "padding-right"), 10),
					    a = e.clientWidth - n - i,
					    r = o.getConstraintWidth(t);return isNaN(r) ? a : Math.min(a, r);
				}, o.getMaximumHeight = function (t) {
					var e = t.parentNode,
					    n = parseInt(o.getStyle(e, "padding-top"), 10),
					    i = parseInt(o.getStyle(e, "padding-bottom"), 10),
					    a = e.clientHeight - n - i,
					    r = o.getConstraintHeight(t);return isNaN(r) ? a : Math.min(a, r);
				}, o.getStyle = function (t, e) {
					return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e);
				}, o.retinaScale = function (t) {
					var e = t.currentDevicePixelRatio = window.devicePixelRatio || 1;if (1 !== e) {
						var n = t.canvas,
						    i = t.height,
						    a = t.width;n.height = i * e, n.width = a * e, t.ctx.scale(e, e), n.style.height = i + "px", n.style.width = a + "px";
					}
				}, o.clear = function (t) {
					t.ctx.clearRect(0, 0, t.width, t.height);
				}, o.fontString = function (t, e, n) {
					return e + " " + t + "px " + n;
				}, o.longestText = function (t, e, n, i) {
					i = i || {};var a = i.data = i.data || {},
					    r = i.garbageCollect = i.garbageCollect || [];i.font !== e && (a = i.data = {}, r = i.garbageCollect = [], i.font = e), t.font = e;var l = 0;o.each(n, function (e) {
						void 0 !== e && null !== e && o.isArray(e) !== !0 ? l = o.measureText(t, a, r, l, e) : o.isArray(e) && o.each(e, function (e) {
							void 0 === e || null === e || o.isArray(e) || (l = o.measureText(t, a, r, l, e));
						});
					});var s = r.length / 2;if (s > n.length) {
						for (var u = 0; u < s; u++) {
							delete a[r[u]];
						}r.splice(0, s);
					}return l;
				}, o.measureText = function (t, e, n, i, a) {
					var o = e[a];return o || (o = e[a] = t.measureText(a).width, n.push(a)), o > i && (i = o), i;
				}, o.numberOfLabelLines = function (t) {
					var e = 1;return o.each(t, function (t) {
						o.isArray(t) && t.length > e && (e = t.length);
					}), e;
				}, o.drawRoundedRectangle = function (t, e, n, i, a, o) {
					t.beginPath(), t.moveTo(e + o, n), t.lineTo(e + i - o, n), t.quadraticCurveTo(e + i, n, e + i, n + o), t.lineTo(e + i, n + a - o), t.quadraticCurveTo(e + i, n + a, e + i - o, n + a), t.lineTo(e + o, n + a), t.quadraticCurveTo(e, n + a, e, n + a - o), t.lineTo(e, n + o), t.quadraticCurveTo(e, n, e + o, n), t.closePath();
				}, o.color = i ? function (e) {
					return e instanceof CanvasGradient && (e = t.defaults.global.defaultColor), i(e);
				} : function (t) {
					return console.error("Color.js not found!"), t;
				}, o.isArray = Array.isArray ? function (t) {
					return Array.isArray(t);
				} : function (t) {
					return "[object Array]" === Object.prototype.toString.call(t);
				}, o.arrayEquals = function (t, e) {
					var n, i, a, r;if (!t || !e || t.length !== e.length) return !1;for (n = 0, i = t.length; n < i; ++n) {
						if (a = t[n], r = e[n], a instanceof Array && r instanceof Array) {
							if (!o.arrayEquals(a, r)) return !1;
						} else if (a !== r) return !1;
					}return !0;
				}, o.callback = function (t, e, n) {
					t && "function" == typeof t.call && t.apply(n, e);
				}, o.getHoverColor = function (t) {
					return t instanceof CanvasPattern ? t : o.color(t).saturate(.5).darken(.1).rgbString();
				}, o.callCallback = o.callback;
			};
		}, { 3: 3 }], 27: [function (t, e, n) {
			"use strict";
			e.exports = function (t) {
				function e(t, e) {
					return t.native ? { x: t.x, y: t.y } : r.getRelativePosition(t, e);
				}function n(t, e) {
					var n,
					    i,
					    a,
					    o,
					    r,
					    l = t.data.datasets;for (i = 0, o = l.length; i < o; ++i) {
						if (t.isDatasetVisible(i)) for (n = t.getDatasetMeta(i), a = 0, r = n.data.length; a < r; ++a) {
							var s = n.data[a];s._view.skip || e(s);
						}
					}
				}function i(t, e) {
					var i = [];return n(t, function (t) {
						t.inRange(e.x, e.y) && i.push(t);
					}), i;
				}function a(t, e, i, a) {
					var o = Number.POSITIVE_INFINITY,
					    l = [];return a || (a = r.distanceBetweenPoints), n(t, function (t) {
						if (!i || t.inRange(e.x, e.y)) {
							var n = t.getCenterPoint(),
							    r = a(e, n);r < o ? (l = [t], o = r) : r === o && l.push(t);
						}
					}), l;
				}function o(t, n, o) {
					var r = e(n, t),
					    l = function l(t, e) {
						return Math.abs(t.x - e.x);
					},
					    s = o.intersect ? i(t, r) : a(t, r, !1, l),
					    u = [];return s.length ? (t.data.datasets.forEach(function (e, n) {
						if (t.isDatasetVisible(n)) {
							var i = t.getDatasetMeta(n),
							    a = i.data[s[0]._index];a && !a._view.skip && u.push(a);
						}
					}), u) : [];
				}var r = t.helpers;t.Interaction = { modes: { single: function single(t, i) {
							var a = e(i, t),
							    o = [];return n(t, function (t) {
								if (t.inRange(a.x, a.y)) return o.push(t), o;
							}), o.slice(0, 1);
						}, label: o, index: o, dataset: function dataset(t, n, o) {
							var r = e(n, t),
							    l = o.intersect ? i(t, r) : a(t, r, !1);return l.length > 0 && (l = t.getDatasetMeta(l[0]._datasetIndex).data), l;
						}, "x-axis": function xAxis(t, e) {
							return o(t, e, !0);
						}, point: function point(t, n) {
							var a = e(n, t);return i(t, a);
						}, nearest: function nearest(t, n, i) {
							var o = e(n, t),
							    r = a(t, o, i.intersect);return r.length > 1 && r.sort(function (t, e) {
								var n = t.getArea(),
								    i = e.getArea(),
								    a = n - i;return 0 === a && (a = t._datasetIndex - e._datasetIndex), a;
							}), r.slice(0, 1);
						}, x: function x(t, i, a) {
							var o = e(i, t),
							    r = [],
							    l = !1;return n(t, function (t) {
								t.inXRange(o.x) && r.push(t), t.inRange(o.x, o.y) && (l = !0);
							}), a.intersect && !l && (r = []), r;
						}, y: function y(t, i, a) {
							var o = e(i, t),
							    r = [],
							    l = !1;return n(t, function (t) {
								t.inYRange(o.y) && r.push(t), t.inRange(o.x, o.y) && (l = !0);
							}), a.intersect && !l && (r = []), r;
						} } };
			};
		}, {}], 28: [function (t, e, n) {
			"use strict";
			e.exports = function () {
				var t = function t(_t, e) {
					return this.construct(_t, e), this;
				};return t.defaults = { global: { responsive: !0, responsiveAnimationDuration: 0, maintainAspectRatio: !0, events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"], hover: { onHover: null, mode: "nearest", intersect: !0, animationDuration: 400 }, onClick: null, defaultColor: "rgba(0,0,0,0.1)", defaultFontColor: "#666", defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", defaultFontSize: 12, defaultFontStyle: "normal", showLines: !0, elements: {}, legendCallback: function legendCallback(t) {
							var e = [];e.push('<ul class="' + t.id + '-legend">');for (var n = 0; n < t.data.datasets.length; n++) {
								e.push('<li><span style="background-color:' + t.data.datasets[n].backgroundColor + '"></span>'), t.data.datasets[n].label && e.push(t.data.datasets[n].label), e.push("</li>");
							}return e.push("</ul>"), e.join("");
						} } }, t.Chart = t, t;
			};
		}, {}], 29: [function (t, e, n) {
			"use strict";
			e.exports = function (t) {
				function e(t, e) {
					return i.where(t, function (t) {
						return t.position === e;
					});
				}function n(t, e) {
					t.forEach(function (t, e) {
						return t._tmpIndex_ = e, t;
					}), t.sort(function (t, n) {
						var i = e ? n : t,
						    a = e ? t : n;return i.weight === a.weight ? i._tmpIndex_ - a._tmpIndex_ : i.weight - a.weight;
					}), t.forEach(function (t) {
						delete t._tmpIndex_;
					});
				}var i = t.helpers;t.layoutService = { defaults: {}, addBox: function addBox(t, e) {
						t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, t.boxes.push(e);
					}, removeBox: function removeBox(t, e) {
						var n = t.boxes ? t.boxes.indexOf(e) : -1;n !== -1 && t.boxes.splice(n, 1);
					}, configure: function configure(t, e, n) {
						for (var i, a = ["fullWidth", "position", "weight"], o = a.length, r = 0; r < o; ++r) {
							i = a[r], n.hasOwnProperty(i) && (e[i] = n[i]);
						}
					}, update: function update(t, a, o) {
						function r(t) {
							var e,
							    n = t.isHorizontal();n ? (e = t.update(t.fullWidth ? k : I, D), A -= e.height) : (e = t.update(C, S), I -= e.width), P.push({ horizontal: n, minSize: e, box: t });
						}function l(t) {
							var e = i.findNextWhere(P, function (e) {
								return e.box === t;
							});if (e) if (t.isHorizontal()) {
								var n = { left: Math.max(L, _), right: Math.max(V, T), top: 0, bottom: 0 };t.update(t.fullWidth ? k : I, w / 2, n);
							} else t.update(e.minSize.width, A);
						}function s(t) {
							var e = i.findNextWhere(P, function (e) {
								return e.box === t;
							}),
							    n = { left: 0, right: 0, top: O, bottom: z };e && t.update(e.minSize.width, A, n);
						}function u(t) {
							t.isHorizontal() ? (t.left = t.fullWidth ? h : L, t.right = t.fullWidth ? a - f : L + I, t.top = q, t.bottom = q + t.height, q = t.bottom) : (t.left = H, t.right = H + t.width, t.top = O, t.bottom = O + A, H = t.right);
						}if (t) {
							var d = t.options.layout,
							    c = d ? d.padding : null,
							    h = 0,
							    f = 0,
							    g = 0,
							    p = 0;isNaN(c) ? (h = c.left || 0, f = c.right || 0, g = c.top || 0, p = c.bottom || 0) : (h = c, f = c, g = c, p = c);var m = e(t.boxes, "left"),
							    v = e(t.boxes, "right"),
							    b = e(t.boxes, "top"),
							    x = e(t.boxes, "bottom"),
							    y = e(t.boxes, "chartArea");n(m, !0), n(v, !1), n(b, !0), n(x, !1);var k = a - h - f,
							    w = o - g - p,
							    M = k / 2,
							    S = w / 2,
							    C = (a - M) / (m.length + v.length),
							    D = (o - S) / (b.length + x.length),
							    I = k,
							    A = w,
							    P = [];i.each(m.concat(v, b, x), r);var _ = 0,
							    T = 0,
							    F = 0,
							    R = 0;i.each(b.concat(x), function (t) {
								if (t.getPadding) {
									var e = t.getPadding();_ = Math.max(_, e.left), T = Math.max(T, e.right);
								}
							}), i.each(m.concat(v), function (t) {
								if (t.getPadding) {
									var e = t.getPadding();F = Math.max(F, e.top), R = Math.max(R, e.bottom);
								}
							});var L = h,
							    V = f,
							    O = g,
							    z = p;i.each(m.concat(v), l), i.each(m, function (t) {
								L += t.width;
							}), i.each(v, function (t) {
								V += t.width;
							}), i.each(b.concat(x), l), i.each(b, function (t) {
								O += t.height;
							}), i.each(x, function (t) {
								z += t.height;
							}), i.each(m.concat(v), s), L = h, V = f, O = g, z = p, i.each(m, function (t) {
								L += t.width;
							}), i.each(v, function (t) {
								V += t.width;
							}), i.each(b, function (t) {
								O += t.height;
							}), i.each(x, function (t) {
								z += t.height;
							});var B = Math.max(_ - L, 0);L += B, V += Math.max(T - V, 0);var W = Math.max(F - O, 0);O += W, z += Math.max(R - z, 0);var N = o - O - z,
							    E = a - L - V;E === I && N === A || (i.each(m, function (t) {
								t.height = N;
							}), i.each(v, function (t) {
								t.height = N;
							}), i.each(b, function (t) {
								t.fullWidth || (t.width = E);
							}), i.each(x, function (t) {
								t.fullWidth || (t.width = E);
							}), A = N, I = E);var H = h + B,
							    q = g + W;i.each(m.concat(b), u), H += I, q += A, i.each(v, u), i.each(x, u), t.chartArea = { left: L, top: O, right: L + I, bottom: O + A }, i.each(y, function (e) {
								e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(I, A);
							});
						}
					} };
			};
		}, {}], 30: [function (t, e, n) {
			"use strict";
			e.exports = function (t) {
				var e = t.helpers;t.defaults.global.plugins = {}, t.plugins = { _plugins: [], _cacheId: 0, register: function register(t) {
						var e = this._plugins;[].concat(t).forEach(function (t) {
							e.indexOf(t) === -1 && e.push(t);
						}), this._cacheId++;
					}, unregister: function unregister(t) {
						var e = this._plugins;[].concat(t).forEach(function (t) {
							var n = e.indexOf(t);n !== -1 && e.splice(n, 1);
						}), this._cacheId++;
					}, clear: function clear() {
						this._plugins = [], this._cacheId++;
					}, count: function count() {
						return this._plugins.length;
					}, getAll: function getAll() {
						return this._plugins;
					}, notify: function notify(t, e, n) {
						var i,
						    a,
						    o,
						    r,
						    l,
						    s = this.descriptors(t),
						    u = s.length;for (i = 0; i < u; ++i) {
							if (a = s[i], o = a.plugin, l = o[e], "function" == typeof l && (r = [t].concat(n || []), r.push(a.options), l.apply(o, r) === !1)) return !1;
						}return !0;
					}, descriptors: function descriptors(n) {
						var i = n._plugins || (n._plugins = {});if (i.id === this._cacheId) return i.descriptors;var a = [],
						    o = [],
						    r = n && n.config || {},
						    l = t.defaults.global.plugins,
						    s = r.options && r.options.plugins || {};return this._plugins.concat(r.plugins || []).forEach(function (t) {
							var n = a.indexOf(t);if (n === -1) {
								var i = t.id,
								    r = s[i];r !== !1 && (r === !0 && (r = e.clone(l[i])), a.push(t), o.push({ plugin: t, options: r || {} }));
							}
						}), i.descriptors = o, i.id = this._cacheId, o;
					} }, t.pluginService = t.plugins, t.PluginBase = t.Element.extend({});
			};
		}, {}], 31: [function (t, e, n) {
			"use strict";
			e.exports = function (t) {
				function e(t, e, n) {
					return i.isArray(e) ? i.longestText(t, n, e) : t.measureText(e).width;
				}function n(e) {
					var n = i.getValueOrDefault,
					    a = t.defaults.global,
					    o = n(e.fontSize, a.defaultFontSize),
					    r = n(e.fontStyle, a.defaultFontStyle),
					    l = n(e.fontFamily, a.defaultFontFamily);return { size: o, style: r, family: l, font: i.fontString(o, r, l) };
				}var i = t.helpers;t.defaults.scale = { display: !0, position: "left", gridLines: { display: !0, color: "rgba(0, 0, 0, 0.1)", lineWidth: 1, drawBorder: !0, drawOnChartArea: !0, drawTicks: !0, tickMarkLength: 10, zeroLineWidth: 1, zeroLineColor: "rgba(0,0,0,0.25)", zeroLineBorderDash: [], zeroLineBorderDashOffset: 0, offsetGridLines: !1, borderDash: [], borderDashOffset: 0 }, scaleLabel: { labelString: "", display: !1 }, ticks: { beginAtZero: !1, minRotation: 0, maxRotation: 50, mirror: !1, padding: 0, reverse: !1, display: !0, autoSkip: !0, autoSkipPadding: 0, labelOffset: 0, callback: t.Ticks.formatters.values } }, t.Scale = t.Element.extend({ getPadding: function getPadding() {
						var t = this;return { left: t.paddingLeft || 0, top: t.paddingTop || 0, right: t.paddingRight || 0, bottom: t.paddingBottom || 0 };
					}, beforeUpdate: function beforeUpdate() {
						i.callback(this.options.beforeUpdate, [this]);
					}, update: function update(t, e, n) {
						var a = this;return a.beforeUpdate(), a.maxWidth = t, a.maxHeight = e, a.margins = i.extend({ left: 0, right: 0, top: 0, bottom: 0 }, n), a.longestTextCache = a.longestTextCache || {}, a.beforeSetDimensions(), a.setDimensions(), a.afterSetDimensions(), a.beforeDataLimits(), a.determineDataLimits(), a.afterDataLimits(), a.beforeBuildTicks(), a.buildTicks(), a.afterBuildTicks(), a.beforeTickToLabelConversion(), a.convertTicksToLabels(), a.afterTickToLabelConversion(), a.beforeCalculateTickRotation(), a.calculateTickRotation(), a.afterCalculateTickRotation(), a.beforeFit(), a.fit(), a.afterFit(), a.afterUpdate(), a.minSize;
					}, afterUpdate: function afterUpdate() {
						i.callback(this.options.afterUpdate, [this]);
					}, beforeSetDimensions: function beforeSetDimensions() {
						i.callback(this.options.beforeSetDimensions, [this]);
					}, setDimensions: function setDimensions() {
						var t = this;t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0;
					}, afterSetDimensions: function afterSetDimensions() {
						i.callback(this.options.afterSetDimensions, [this]);
					}, beforeDataLimits: function beforeDataLimits() {
						i.callback(this.options.beforeDataLimits, [this]);
					}, determineDataLimits: i.noop, afterDataLimits: function afterDataLimits() {
						i.callback(this.options.afterDataLimits, [this]);
					}, beforeBuildTicks: function beforeBuildTicks() {
						i.callback(this.options.beforeBuildTicks, [this]);
					}, buildTicks: i.noop, afterBuildTicks: function afterBuildTicks() {
						i.callback(this.options.afterBuildTicks, [this]);
					}, beforeTickToLabelConversion: function beforeTickToLabelConversion() {
						i.callback(this.options.beforeTickToLabelConversion, [this]);
					}, convertTicksToLabels: function convertTicksToLabels() {
						var t = this,
						    e = t.options.ticks;t.ticks = t.ticks.map(e.userCallback || e.callback);
					}, afterTickToLabelConversion: function afterTickToLabelConversion() {
						i.callback(this.options.afterTickToLabelConversion, [this]);
					}, beforeCalculateTickRotation: function beforeCalculateTickRotation() {
						i.callback(this.options.beforeCalculateTickRotation, [this]);
					}, calculateTickRotation: function calculateTickRotation() {
						var t = this,
						    e = t.ctx,
						    a = t.options.ticks,
						    o = n(a);e.font = o.font;var r = a.minRotation || 0;if (t.options.display && t.isHorizontal()) for (var l, s, u = i.longestText(e, o.font, t.ticks, t.longestTextCache), d = u, c = t.getPixelForTick(1) - t.getPixelForTick(0) - 6; d > c && r < a.maxRotation;) {
							var h = i.toRadians(r);if (l = Math.cos(h), s = Math.sin(h), s * u > t.maxHeight) {
								r--;break;
							}r++, d = l * u;
						}t.labelRotation = r;
					}, afterCalculateTickRotation: function afterCalculateTickRotation() {
						i.callback(this.options.afterCalculateTickRotation, [this]);
					}, beforeFit: function beforeFit() {
						i.callback(this.options.beforeFit, [this]);
					}, fit: function fit() {
						var t = this,
						    a = t.minSize = { width: 0, height: 0 },
						    o = t.options,
						    r = o.ticks,
						    l = o.scaleLabel,
						    s = o.gridLines,
						    u = o.display,
						    d = t.isHorizontal(),
						    c = n(r),
						    h = 1.5 * n(l).size,
						    f = o.gridLines.tickMarkLength;if (d ? a.width = t.isFullWidth() ? t.maxWidth - t.margins.left - t.margins.right : t.maxWidth : a.width = u && s.drawTicks ? f : 0, d ? a.height = u && s.drawTicks ? f : 0 : a.height = t.maxHeight, l.display && u && (d ? a.height += h : a.width += h), r.display && u) {
							var g = i.longestText(t.ctx, c.font, t.ticks, t.longestTextCache),
							    p = i.numberOfLabelLines(t.ticks),
							    m = .5 * c.size;if (d) {
								t.longestLabelWidth = g;var v = i.toRadians(t.labelRotation),
								    b = Math.cos(v),
								    x = Math.sin(v),
								    y = x * g + c.size * p + m * p;a.height = Math.min(t.maxHeight, a.height + y), t.ctx.font = c.font;var k = t.ticks[0],
								    w = e(t.ctx, k, c.font),
								    M = t.ticks[t.ticks.length - 1],
								    S = e(t.ctx, M, c.font);0 !== t.labelRotation ? (t.paddingLeft = "bottom" === o.position ? b * w + 3 : b * m + 3, t.paddingRight = "bottom" === o.position ? b * m + 3 : b * S + 3) : (t.paddingLeft = w / 2 + 3, t.paddingRight = S / 2 + 3);
							} else r.mirror ? g = 0 : g += t.options.ticks.padding, a.width = Math.min(t.maxWidth, a.width + g), t.paddingTop = c.size / 2, t.paddingBottom = c.size / 2;
						}t.handleMargins(), t.width = a.width, t.height = a.height;
					}, handleMargins: function handleMargins() {
						var t = this;t.margins && (t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0), t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0), t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0), t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0));
					}, afterFit: function afterFit() {
						i.callback(this.options.afterFit, [this]);
					}, isHorizontal: function isHorizontal() {
						return "top" === this.options.position || "bottom" === this.options.position;
					}, isFullWidth: function isFullWidth() {
						return this.options.fullWidth;
					}, getRightValue: function getRightValue(t) {
						return null === t || "undefined" == typeof t ? NaN : "number" != typeof t || isFinite(t) ? "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? t instanceof Date || t.isValid ? t : this.getRightValue(this.isHorizontal() ? t.x : t.y) : t : NaN;
					}, getLabelForIndex: i.noop, getPixelForValue: i.noop, getValueForPixel: i.noop, getPixelForTick: function getPixelForTick(t, e) {
						var n = this;if (n.isHorizontal()) {
							var i = n.width - (n.paddingLeft + n.paddingRight),
							    a = i / Math.max(n.ticks.length - (n.options.gridLines.offsetGridLines ? 0 : 1), 1),
							    o = a * t + n.paddingLeft;e && (o += a / 2);var r = n.left + Math.round(o);return r += n.isFullWidth() ? n.margins.left : 0;
						}var l = n.height - (n.paddingTop + n.paddingBottom);return n.top + t * (l / (n.ticks.length - 1));
					}, getPixelForDecimal: function getPixelForDecimal(t) {
						var e = this;if (e.isHorizontal()) {
							var n = e.width - (e.paddingLeft + e.paddingRight),
							    i = n * t + e.paddingLeft,
							    a = e.left + Math.round(i);return a += e.isFullWidth() ? e.margins.left : 0;
						}return e.top + t * e.height;
					}, getBasePixel: function getBasePixel() {
						return this.getPixelForValue(this.getBaseValue());
					}, getBaseValue: function getBaseValue() {
						var t = this,
						    e = t.min,
						    n = t.max;return t.beginAtZero ? 0 : e < 0 && n < 0 ? n : e > 0 && n > 0 ? e : 0;
					}, draw: function draw(e) {
						var a = this,
						    o = a.options;if (o.display) {
							var r,
							    l,
							    s = a.ctx,
							    u = t.defaults.global,
							    d = o.ticks,
							    c = o.gridLines,
							    h = o.scaleLabel,
							    f = 0 !== a.labelRotation,
							    g = d.autoSkip,
							    p = a.isHorizontal();d.maxTicksLimit && (l = d.maxTicksLimit);var m = i.getValueOrDefault(d.fontColor, u.defaultFontColor),
							    v = n(d),
							    b = c.drawTicks ? c.tickMarkLength : 0,
							    x = i.getValueOrDefault(h.fontColor, u.defaultFontColor),
							    y = n(h),
							    k = i.toRadians(a.labelRotation),
							    w = Math.cos(k),
							    M = a.longestLabelWidth * w;s.fillStyle = m;var S = [];if (p) {
								if (r = !1, (M + d.autoSkipPadding) * a.ticks.length > a.width - (a.paddingLeft + a.paddingRight) && (r = 1 + Math.floor((M + d.autoSkipPadding) * a.ticks.length / (a.width - (a.paddingLeft + a.paddingRight)))), l && a.ticks.length > l) for (; !r || a.ticks.length / (r || 1) > l;) {
									r || (r = 1), r += 1;
								}g || (r = !1);
							}var C = "right" === o.position ? a.left : a.right - b,
							    D = "right" === o.position ? a.left + b : a.right,
							    I = "bottom" === o.position ? a.top : a.bottom - b,
							    A = "bottom" === o.position ? a.top + b : a.bottom;if (i.each(a.ticks, function (t, n) {
								if (void 0 !== t && null !== t) {
									var l = a.ticks.length === n + 1,
									    s = r > 1 && n % r > 0 || n % r === 0 && n + r >= a.ticks.length;if ((!s || l) && void 0 !== t && null !== t) {
										var h, g, m, v;n === ("undefined" != typeof a.zeroLineIndex ? a.zeroLineIndex : 0) ? (h = c.zeroLineWidth, g = c.zeroLineColor, m = c.zeroLineBorderDash, v = c.zeroLineBorderDashOffset) : (h = i.getValueAtIndexOrDefault(c.lineWidth, n), g = i.getValueAtIndexOrDefault(c.color, n), m = i.getValueOrDefault(c.borderDash, u.borderDash), v = i.getValueOrDefault(c.borderDashOffset, u.borderDashOffset));var x,
										    y,
										    w,
										    M,
										    P,
										    _,
										    T,
										    F,
										    R,
										    L,
										    V = "middle",
										    O = "middle";if (p) {
											"bottom" === o.position ? (O = f ? "middle" : "top", V = f ? "right" : "center", L = a.top + b) : (O = f ? "middle" : "bottom", V = f ? "left" : "center", L = a.bottom - b);var z = a.getPixelForTick(n) + i.aliasPixel(h);R = a.getPixelForTick(n, c.offsetGridLines) + d.labelOffset, x = w = P = T = z, y = I, M = A, _ = e.top, F = e.bottom;
										} else {
											var B,
											    W = "left" === o.position,
											    N = d.padding;d.mirror ? (V = W ? "left" : "right", B = N) : (V = W ? "right" : "left", B = b + N), R = W ? a.right - B : a.left + B;var E = a.getPixelForTick(n);E += i.aliasPixel(h), L = a.getPixelForTick(n, c.offsetGridLines), x = C, w = D, P = e.left, T = e.right, y = M = _ = F = E;
										}S.push({ tx1: x, ty1: y, tx2: w, ty2: M, x1: P, y1: _, x2: T, y2: F, labelX: R, labelY: L, glWidth: h, glColor: g, glBorderDash: m, glBorderDashOffset: v, rotation: -1 * k, label: t, textBaseline: O, textAlign: V });
									}
								}
							}), i.each(S, function (t) {
								if (c.display && (s.save(), s.lineWidth = t.glWidth, s.strokeStyle = t.glColor, s.setLineDash && (s.setLineDash(t.glBorderDash), s.lineDashOffset = t.glBorderDashOffset), s.beginPath(), c.drawTicks && (s.moveTo(t.tx1, t.ty1), s.lineTo(t.tx2, t.ty2)), c.drawOnChartArea && (s.moveTo(t.x1, t.y1), s.lineTo(t.x2, t.y2)), s.stroke(), s.restore()), d.display) {
									s.save(), s.translate(t.labelX, t.labelY), s.rotate(t.rotation), s.font = v.font, s.textBaseline = t.textBaseline, s.textAlign = t.textAlign;var e = t.label;if (i.isArray(e)) for (var n = 0, a = 0; n < e.length; ++n) {
										s.fillText("" + e[n], 0, a), a += 1.5 * v.size;
									} else s.fillText(e, 0, 0);s.restore();
								}
							}), h.display) {
								var P,
								    _,
								    T = 0;if (p) P = a.left + (a.right - a.left) / 2, _ = "bottom" === o.position ? a.bottom - y.size / 2 : a.top + y.size / 2;else {
									var F = "left" === o.position;P = F ? a.left + y.size / 2 : a.right - y.size / 2, _ = a.top + (a.bottom - a.top) / 2, T = F ? -.5 * Math.PI : .5 * Math.PI;
								}s.save(), s.translate(P, _), s.rotate(T), s.textAlign = "center", s.textBaseline = "middle", s.fillStyle = x, s.font = y.font, s.fillText(h.labelString, 0, 0), s.restore();
							}if (c.drawBorder) {
								s.lineWidth = i.getValueAtIndexOrDefault(c.lineWidth, 0), s.strokeStyle = i.getValueAtIndexOrDefault(c.color, 0);var R = a.left,
								    L = a.right,
								    V = a.top,
								    O = a.bottom,
								    z = i.aliasPixel(s.lineWidth);p ? (V = O = "top" === o.position ? a.bottom : a.top, V += z, O += z) : (R = L = "left" === o.position ? a.right : a.left, R += z, L += z), s.beginPath(), s.moveTo(R, V), s.lineTo(L, O), s.stroke();
							}
						}
					} });
			};
		}, {}], 32: [function (t, e, n) {
			"use strict";
			e.exports = function (t) {
				var e = t.helpers;t.scaleService = { constructors: {}, defaults: {}, registerScaleType: function registerScaleType(t, n, i) {
						this.constructors[t] = n, this.defaults[t] = e.clone(i);
					}, getScaleConstructor: function getScaleConstructor(t) {
						return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0;
					}, getScaleDefaults: function getScaleDefaults(n) {
						return this.defaults.hasOwnProperty(n) ? e.scaleMerge(t.defaults.scale, this.defaults[n]) : {};
					}, updateScaleDefaults: function updateScaleDefaults(t, n) {
						var i = this.defaults;i.hasOwnProperty(t) && (i[t] = e.extend(i[t], n));
					}, addScalesToLayout: function addScalesToLayout(n) {
						e.each(n.scales, function (e) {
							e.fullWidth = e.options.fullWidth, e.position = e.options.position, e.weight = e.options.weight, t.layoutService.addBox(n, e);
						});
					} };
			};
		}, {}], 33: [function (t, e, n) {
			"use strict";
			e.exports = function (t) {
				var e = t.helpers;t.Ticks = { generators: { linear: function linear(t, n) {
							var i,
							    a = [];if (t.stepSize && t.stepSize > 0) i = t.stepSize;else {
								var o = e.niceNum(n.max - n.min, !1);i = e.niceNum(o / (t.maxTicks - 1), !0);
							}var r = Math.floor(n.min / i) * i,
							    l = Math.ceil(n.max / i) * i;t.min && t.max && t.stepSize && e.almostWhole((t.max - t.min) / t.stepSize, i / 1e3) && (r = t.min, l = t.max);var s = (l - r) / i;s = e.almostEquals(s, Math.round(s), i / 1e3) ? Math.round(s) : Math.ceil(s), a.push(void 0 !== t.min ? t.min : r);for (var u = 1; u < s; ++u) {
								a.push(r + u * i);
							}return a.push(void 0 !== t.max ? t.max : l), a;
						}, logarithmic: function logarithmic(t, n) {
							var i,
							    a,
							    o = [],
							    r = e.getValueOrDefault,
							    l = r(t.min, Math.pow(10, Math.floor(e.log10(n.min)))),
							    s = Math.floor(e.log10(n.max)),
							    u = Math.ceil(n.max / Math.pow(10, s));0 === l ? (i = Math.floor(e.log10(n.minNotZero)), a = Math.floor(n.minNotZero / Math.pow(10, i)), o.push(l), l = a * Math.pow(10, i)) : (i = Math.floor(e.log10(l)), a = Math.floor(l / Math.pow(10, i)));do {
								o.push(l), ++a, 10 === a && (a = 1, ++i), l = a * Math.pow(10, i);
							} while (i < s || i === s && a < u);var d = r(t.max, l);return o.push(d), o;
						} }, formatters: { values: function values(t) {
							return e.isArray(t) ? t : "" + t;
						}, linear: function linear(t, n, i) {
							var a = i.length > 3 ? i[2] - i[1] : i[1] - i[0];Math.abs(a) > 1 && t !== Math.floor(t) && (a = t - Math.floor(t));var o = e.log10(Math.abs(a)),
							    r = "";if (0 !== t) {
								var l = -1 * Math.floor(o);l = Math.max(Math.min(l, 20), 0), r = t.toFixed(l);
							} else r = "0";return r;
						}, logarithmic: function logarithmic(t, n, i) {
							var a = t / Math.pow(10, Math.floor(e.log10(t)));return 0 === t ? "0" : 1 === a || 2 === a || 5 === a || 0 === n || n === i.length - 1 ? t.toExponential() : "";
						} } };
			};
		}, {}], 34: [function (t, e, n) {
			"use strict";
			e.exports = function (t) {
				function e(t, e) {
					var n = s.color(t);return n.alpha(e * n.alpha()).rgbaString();
				}function n(t, e) {
					return e && (s.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
				}function i(t) {
					var e = t._xScale,
					    n = t._yScale || t._scale,
					    i = t._index,
					    a = t._datasetIndex;return { xLabel: e ? e.getLabelForIndex(i, a) : "", yLabel: n ? n.getLabelForIndex(i, a) : "", index: i, datasetIndex: a, x: t._model.x, y: t._model.y };
				}function a(e) {
					var n = t.defaults.global,
					    i = s.getValueOrDefault;return { xPadding: e.xPadding, yPadding: e.yPadding, xAlign: e.xAlign, yAlign: e.yAlign, bodyFontColor: e.bodyFontColor, _bodyFontFamily: i(e.bodyFontFamily, n.defaultFontFamily), _bodyFontStyle: i(e.bodyFontStyle, n.defaultFontStyle), _bodyAlign: e.bodyAlign, bodyFontSize: i(e.bodyFontSize, n.defaultFontSize), bodySpacing: e.bodySpacing, titleFontColor: e.titleFontColor, _titleFontFamily: i(e.titleFontFamily, n.defaultFontFamily), _titleFontStyle: i(e.titleFontStyle, n.defaultFontStyle), titleFontSize: i(e.titleFontSize, n.defaultFontSize), _titleAlign: e.titleAlign, titleSpacing: e.titleSpacing, titleMarginBottom: e.titleMarginBottom, footerFontColor: e.footerFontColor, _footerFontFamily: i(e.footerFontFamily, n.defaultFontFamily), _footerFontStyle: i(e.footerFontStyle, n.defaultFontStyle), footerFontSize: i(e.footerFontSize, n.defaultFontSize), _footerAlign: e.footerAlign, footerSpacing: e.footerSpacing, footerMarginTop: e.footerMarginTop, caretSize: e.caretSize, cornerRadius: e.cornerRadius, backgroundColor: e.backgroundColor, opacity: 0, legendColorBackground: e.multiKeyBackground, displayColors: e.displayColors, borderColor: e.borderColor, borderWidth: e.borderWidth };
				}function o(t, e) {
					var n = t._chart.ctx,
					    i = 2 * e.yPadding,
					    a = 0,
					    o = e.body,
					    r = o.reduce(function (t, e) {
						return t + e.before.length + e.lines.length + e.after.length;
					}, 0);r += e.beforeBody.length + e.afterBody.length;var l = e.title.length,
					    u = e.footer.length,
					    d = e.titleFontSize,
					    c = e.bodyFontSize,
					    h = e.footerFontSize;i += l * d, i += l ? (l - 1) * e.titleSpacing : 0, i += l ? e.titleMarginBottom : 0, i += r * c, i += r ? (r - 1) * e.bodySpacing : 0, i += u ? e.footerMarginTop : 0, i += u * h, i += u ? (u - 1) * e.footerSpacing : 0;var f = 0,
					    g = function g(t) {
						a = Math.max(a, n.measureText(t).width + f);
					};return n.font = s.fontString(d, e._titleFontStyle, e._titleFontFamily), s.each(e.title, g), n.font = s.fontString(c, e._bodyFontStyle, e._bodyFontFamily), s.each(e.beforeBody.concat(e.afterBody), g), f = e.displayColors ? c + 2 : 0, s.each(o, function (t) {
						s.each(t.before, g), s.each(t.lines, g), s.each(t.after, g);
					}), f = 0, n.font = s.fontString(h, e._footerFontStyle, e._footerFontFamily), s.each(e.footer, g), a += 2 * e.xPadding, { width: a, height: i };
				}function r(t, e) {
					var n = t._model,
					    i = t._chart,
					    a = t._chart.chartArea,
					    o = "center",
					    r = "center";n.y < e.height ? r = "top" : n.y > i.height - e.height && (r = "bottom");var l,
					    s,
					    u,
					    d,
					    c,
					    h = (a.left + a.right) / 2,
					    f = (a.top + a.bottom) / 2;"center" === r ? (l = function l(t) {
						return t <= h;
					}, s = function s(t) {
						return t > h;
					}) : (l = function l(t) {
						return t <= e.width / 2;
					}, s = function s(t) {
						return t >= i.width - e.width / 2;
					}), u = function u(t) {
						return t + e.width > i.width;
					}, d = function d(t) {
						return t - e.width < 0;
					}, c = function c(t) {
						return t <= f ? "top" : "bottom";
					}, l(n.x) ? (o = "left", u(n.x) && (o = "center", r = c(n.y))) : s(n.x) && (o = "right", d(n.x) && (o = "center", r = c(n.y)));var g = t._options;return { xAlign: g.xAlign ? g.xAlign : o, yAlign: g.yAlign ? g.yAlign : r };
				}function l(t, e, n) {
					var i = t.x,
					    a = t.y,
					    o = t.caretSize,
					    r = t.caretPadding,
					    l = t.cornerRadius,
					    s = n.xAlign,
					    u = n.yAlign,
					    d = o + r,
					    c = l + r;return "right" === s ? i -= e.width : "center" === s && (i -= e.width / 2), "top" === u ? a += d : a -= "bottom" === u ? e.height + d : e.height / 2, "center" === u ? "left" === s ? i += d : "right" === s && (i -= d) : "left" === s ? i -= c : "right" === s && (i += c), { x: i, y: a };
				}var s = t.helpers;t.defaults.global.tooltips = { enabled: !0, custom: null, mode: "nearest", position: "average", intersect: !0, backgroundColor: "rgba(0,0,0,0.8)", titleFontStyle: "bold", titleSpacing: 2, titleMarginBottom: 6, titleFontColor: "#fff", titleAlign: "left", bodySpacing: 2, bodyFontColor: "#fff", bodyAlign: "left", footerFontStyle: "bold", footerSpacing: 2, footerMarginTop: 6, footerFontColor: "#fff", footerAlign: "left", yPadding: 6, xPadding: 6, caretPadding: 2, caretSize: 5, cornerRadius: 6, multiKeyBackground: "#fff", displayColors: !0, borderColor: "rgba(0,0,0,0)", borderWidth: 0, callbacks: { beforeTitle: s.noop, title: function title(t, e) {
							var n = "",
							    i = e.labels,
							    a = i ? i.length : 0;if (t.length > 0) {
								var o = t[0];o.xLabel ? n = o.xLabel : a > 0 && o.index < a && (n = i[o.index]);
							}return n;
						}, afterTitle: s.noop, beforeBody: s.noop, beforeLabel: s.noop, label: function label(t, e) {
							var n = e.datasets[t.datasetIndex].label || "";return n && (n += ": "), n += t.yLabel;
						}, labelColor: function labelColor(t, e) {
							var n = e.getDatasetMeta(t.datasetIndex),
							    i = n.data[t.index],
							    a = i._view;return { borderColor: a.borderColor, backgroundColor: a.backgroundColor };
						}, afterLabel: s.noop, afterBody: s.noop, beforeFooter: s.noop, footer: s.noop, afterFooter: s.noop } }, t.Tooltip = t.Element.extend({ initialize: function initialize() {
						this._model = a(this._options);
					}, getTitle: function getTitle() {
						var t = this,
						    e = t._options,
						    i = e.callbacks,
						    a = i.beforeTitle.apply(t, arguments),
						    o = i.title.apply(t, arguments),
						    r = i.afterTitle.apply(t, arguments),
						    l = [];return l = n(l, a), l = n(l, o), l = n(l, r);
					}, getBeforeBody: function getBeforeBody() {
						var t = this._options.callbacks.beforeBody.apply(this, arguments);return s.isArray(t) ? t : void 0 !== t ? [t] : [];
					}, getBody: function getBody(t, e) {
						var i = this,
						    a = i._options.callbacks,
						    o = [];return s.each(t, function (t) {
							var r = { before: [], lines: [], after: [] };n(r.before, a.beforeLabel.call(i, t, e)), n(r.lines, a.label.call(i, t, e)), n(r.after, a.afterLabel.call(i, t, e)), o.push(r);
						}), o;
					}, getAfterBody: function getAfterBody() {
						var t = this._options.callbacks.afterBody.apply(this, arguments);return s.isArray(t) ? t : void 0 !== t ? [t] : [];
					}, getFooter: function getFooter() {
						var t = this,
						    e = t._options.callbacks,
						    i = e.beforeFooter.apply(t, arguments),
						    a = e.footer.apply(t, arguments),
						    o = e.afterFooter.apply(t, arguments),
						    r = [];return r = n(r, i), r = n(r, a), r = n(r, o);
					}, update: function update(e) {
						var n,
						    u,
						    d = this,
						    c = d._options,
						    h = d._model,
						    f = d._model = a(c),
						    g = d._active,
						    p = d._data,
						    m = { xAlign: h.xAlign, yAlign: h.yAlign },
						    v = { x: h.x, y: h.y },
						    b = { width: h.width, height: h.height },
						    x = { x: h.caretX, y: h.caretY };if (g.length) {
							f.opacity = 1;var y = [];x = t.Tooltip.positioners[c.position](g, d._eventPosition);var k = [];for (n = 0, u = g.length; n < u; ++n) {
								k.push(i(g[n]));
							}c.filter && (k = k.filter(function (t) {
								return c.filter(t, p);
							})), c.itemSort && (k = k.sort(function (t, e) {
								return c.itemSort(t, e, p);
							})), s.each(k, function (t) {
								y.push(c.callbacks.labelColor.call(d, t, d._chart));
							}), f.title = d.getTitle(k, p), f.beforeBody = d.getBeforeBody(k, p), f.body = d.getBody(k, p), f.afterBody = d.getAfterBody(k, p), f.footer = d.getFooter(k, p), f.x = Math.round(x.x), f.y = Math.round(x.y), f.caretPadding = c.caretPadding, f.labelColors = y, f.dataPoints = k, b = o(this, f), m = r(this, b), v = l(f, b, m);
						} else f.opacity = 0;return f.xAlign = m.xAlign, f.yAlign = m.yAlign, f.x = v.x, f.y = v.y, f.width = b.width, f.height = b.height, f.caretX = x.x, f.caretY = x.y, d._model = f, e && c.custom && c.custom.call(d, f), d;
					}, drawCaret: function drawCaret(t, e) {
						var n = this._chart.ctx,
						    i = this._view,
						    a = this.getCaretPosition(t, e, i);n.lineTo(a.x1, a.y1), n.lineTo(a.x2, a.y2), n.lineTo(a.x3, a.y3);
					}, getCaretPosition: function getCaretPosition(t, e, n) {
						var i,
						    a,
						    o,
						    r,
						    l,
						    s,
						    u = n.caretSize,
						    d = n.cornerRadius,
						    c = n.xAlign,
						    h = n.yAlign,
						    f = t.x,
						    g = t.y,
						    p = e.width,
						    m = e.height;if ("center" === h) l = g + m / 2, "left" === c ? (i = f, a = i - u, o = i, r = l + u, s = l - u) : (i = f + p, a = i + u, o = i, r = l - u, s = l + u);else if ("left" === c ? (a = f + d + u, i = a - u, o = a + u) : "right" === c ? (a = f + p - d - u, i = a - u, o = a + u) : (a = f + p / 2, i = a - u, o = a + u), "top" === h) r = g, l = r - u, s = r;else {
							r = g + m, l = r + u, s = r;var v = o;o = i, i = v;
						}return { x1: i, x2: a, x3: o, y1: r, y2: l, y3: s };
					}, drawTitle: function drawTitle(t, n, i, a) {
						var o = n.title;if (o.length) {
							i.textAlign = n._titleAlign, i.textBaseline = "top";var r = n.titleFontSize,
							    l = n.titleSpacing;i.fillStyle = e(n.titleFontColor, a), i.font = s.fontString(r, n._titleFontStyle, n._titleFontFamily);var u, d;for (u = 0, d = o.length; u < d; ++u) {
								i.fillText(o[u], t.x, t.y), t.y += r + l, u + 1 === o.length && (t.y += n.titleMarginBottom - l);
							}
						}
					}, drawBody: function drawBody(t, n, i, a) {
						var o = n.bodyFontSize,
						    r = n.bodySpacing,
						    l = n.body;i.textAlign = n._bodyAlign, i.textBaseline = "top";var u = e(n.bodyFontColor, a);i.fillStyle = u, i.font = s.fontString(o, n._bodyFontStyle, n._bodyFontFamily);var d = 0,
						    c = function c(e) {
							i.fillText(e, t.x + d, t.y), t.y += o + r;
						};s.each(n.beforeBody, c);var h = n.displayColors;d = h ? o + 2 : 0, s.each(l, function (r, l) {
							s.each(r.before, c), s.each(r.lines, function (r) {
								h && (i.fillStyle = e(n.legendColorBackground, a), i.fillRect(t.x, t.y, o, o), i.strokeStyle = e(n.labelColors[l].borderColor, a), i.strokeRect(t.x, t.y, o, o), i.fillStyle = e(n.labelColors[l].backgroundColor, a), i.fillRect(t.x + 1, t.y + 1, o - 2, o - 2), i.fillStyle = u), c(r);
							}), s.each(r.after, c);
						}), d = 0, s.each(n.afterBody, c), t.y -= r;
					}, drawFooter: function drawFooter(t, n, i, a) {
						var o = n.footer;o.length && (t.y += n.footerMarginTop, i.textAlign = n._footerAlign, i.textBaseline = "top", i.fillStyle = e(n.footerFontColor, a), i.font = s.fontString(n.footerFontSize, n._footerFontStyle, n._footerFontFamily), s.each(o, function (e) {
							i.fillText(e, t.x, t.y), t.y += n.footerFontSize + n.footerSpacing;
						}));
					}, drawBackground: function drawBackground(t, n, i, a, o) {
						i.fillStyle = e(n.backgroundColor, o), i.strokeStyle = e(n.borderColor, o), i.lineWidth = n.borderWidth;var r = n.xAlign,
						    l = n.yAlign,
						    s = t.x,
						    u = t.y,
						    d = a.width,
						    c = a.height,
						    h = n.cornerRadius;i.beginPath(), i.moveTo(s + h, u), "top" === l && this.drawCaret(t, a), i.lineTo(s + d - h, u), i.quadraticCurveTo(s + d, u, s + d, u + h), "center" === l && "right" === r && this.drawCaret(t, a), i.lineTo(s + d, u + c - h), i.quadraticCurveTo(s + d, u + c, s + d - h, u + c), "bottom" === l && this.drawCaret(t, a), i.lineTo(s + h, u + c), i.quadraticCurveTo(s, u + c, s, u + c - h), "center" === l && "left" === r && this.drawCaret(t, a), i.lineTo(s, u + h), i.quadraticCurveTo(s, u, s + h, u), i.closePath(), i.fill(), n.borderWidth > 0 && i.stroke();
					}, draw: function draw() {
						var t = this._chart.ctx,
						    e = this._view;if (0 !== e.opacity) {
							var n = { width: e.width, height: e.height },
							    i = { x: e.x, y: e.y },
							    a = Math.abs(e.opacity < .001) ? 0 : e.opacity,
							    o = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;this._options.enabled && o && (this.drawBackground(i, e, t, n, a), i.x += e.xPadding, i.y += e.yPadding, this.drawTitle(i, e, t, a), this.drawBody(i, e, t, a), this.drawFooter(i, e, t, a));
						}
					}, handleEvent: function handleEvent(t) {
						var e = this,
						    n = e._options,
						    i = !1;if (e._lastActive = e._lastActive || [], "mouseout" === t.type ? e._active = [] : e._active = e._chart.getElementsAtEventForMode(t, n.mode, n), i = !s.arrayEquals(e._active, e._lastActive), !i) return !1;if (e._lastActive = e._active, n.enabled || n.custom) {
							e._eventPosition = { x: t.x, y: t.y };var a = e._model;e.update(!0), e.pivot(), i |= a.x !== e._model.x || a.y !== e._model.y;
						}return i;
					} }), t.Tooltip.positioners = { average: function average(t) {
						if (!t.length) return !1;var e,
						    n,
						    i = 0,
						    a = 0,
						    o = 0;for (e = 0, n = t.length; e < n; ++e) {
							var r = t[e];if (r && r.hasValue()) {
								var l = r.tooltipPosition();i += l.x, a += l.y, ++o;
							}
						}return { x: Math.round(i / o), y: Math.round(a / o) };
					}, nearest: function nearest(t, e) {
						var n,
						    i,
						    a,
						    o = e.x,
						    r = e.y,
						    l = Number.POSITIVE_INFINITY;for (i = 0, a = t.length; i < a; ++i) {
							var u = t[i];if (u && u.hasValue()) {
								var d = u.getCenterPoint(),
								    c = s.distanceBetweenPoints(e, d);c < l && (l = c, n = u);
							}
						}if (n) {
							var h = n.tooltipPosition();o = h.x, r = h.y;
						}return { x: o, y: r };
					} };
			};
		}, {}], 35: [function (t, e, n) {
			"use strict";
			e.exports = function (t) {
				var e = t.helpers,
				    n = t.defaults.global;n.elements.arc = { backgroundColor: n.defaultColor, borderColor: "#fff", borderWidth: 2 }, t.elements.Arc = t.Element.extend({ inLabelRange: function inLabelRange(t) {
						var e = this._view;return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2);
					}, inRange: function inRange(t, n) {
						var i = this._view;if (i) {
							for (var a = e.getAngleFromPoint(i, { x: t, y: n }), o = a.angle, r = a.distance, l = i.startAngle, s = i.endAngle; s < l;) {
								s += 2 * Math.PI;
							}for (; o > s;) {
								o -= 2 * Math.PI;
							}for (; o < l;) {
								o += 2 * Math.PI;
							}var u = o >= l && o <= s,
							    d = r >= i.innerRadius && r <= i.outerRadius;return u && d;
						}return !1;
					}, getCenterPoint: function getCenterPoint() {
						var t = this._view,
						    e = (t.startAngle + t.endAngle) / 2,
						    n = (t.innerRadius + t.outerRadius) / 2;return { x: t.x + Math.cos(e) * n, y: t.y + Math.sin(e) * n };
					}, getArea: function getArea() {
						var t = this._view;return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2));
					}, tooltipPosition: function tooltipPosition() {
						var t = this._view,
						    e = t.startAngle + (t.endAngle - t.startAngle) / 2,
						    n = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;return { x: t.x + Math.cos(e) * n, y: t.y + Math.sin(e) * n };
					}, draw: function draw() {
						var t = this._chart.ctx,
						    e = this._view,
						    n = e.startAngle,
						    i = e.endAngle;t.beginPath(), t.arc(e.x, e.y, e.outerRadius, n, i), t.arc(e.x, e.y, e.innerRadius, i, n, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = "bevel", e.borderWidth && t.stroke();
					} });
			};
		}, {}], 36: [function (t, e, n) {
			"use strict";
			e.exports = function (t) {
				var e = t.helpers,
				    n = t.defaults.global;t.defaults.global.elements.line = { tension: .4, backgroundColor: n.defaultColor, borderWidth: 3, borderColor: n.defaultColor, borderCapStyle: "butt", borderDash: [], borderDashOffset: 0, borderJoinStyle: "miter", capBezierPoints: !0, fill: !0 }, t.elements.Line = t.Element.extend({ draw: function draw() {
						var t,
						    i,
						    a,
						    o,
						    r = this,
						    l = r._view,
						    s = r._chart.ctx,
						    u = l.spanGaps,
						    d = r._children.slice(),
						    c = n.elements.line,
						    h = -1;for (r._loop && d.length && d.push(d[0]), s.save(), s.lineCap = l.borderCapStyle || c.borderCapStyle, s.setLineDash && s.setLineDash(l.borderDash || c.borderDash), s.lineDashOffset = l.borderDashOffset || c.borderDashOffset, s.lineJoin = l.borderJoinStyle || c.borderJoinStyle, s.lineWidth = l.borderWidth || c.borderWidth, s.strokeStyle = l.borderColor || n.defaultColor, s.beginPath(), h = -1, t = 0; t < d.length; ++t) {
							i = d[t], a = e.previousItem(d, t), o = i._view, 0 === t ? o.skip || (s.moveTo(o.x, o.y), h = t) : (a = h === -1 ? a : d[h], o.skip || (h !== t - 1 && !u || h === -1 ? s.moveTo(o.x, o.y) : e.canvas.lineTo(s, a._view, i._view), h = t));
						}s.stroke(), s.restore();
					} });
			};
		}, {}], 37: [function (t, e, n) {
			"use strict";
			e.exports = function (t) {
				function e(t) {
					var e = this._view;return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hitRadius, 2);
				}function n(t) {
					var e = this._view;return !!e && Math.pow(t - e.y, 2) < Math.pow(e.radius + e.hitRadius, 2);
				}var i = t.helpers,
				    a = t.defaults.global,
				    o = a.defaultColor;a.elements.point = { radius: 3, pointStyle: "circle", backgroundColor: o, borderWidth: 1, borderColor: o, hitRadius: 1, hoverRadius: 4, hoverBorderWidth: 1 }, t.elements.Point = t.Element.extend({ inRange: function inRange(t, e) {
						var n = this._view;return !!n && Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2);
					}, inLabelRange: e, inXRange: e, inYRange: n, getCenterPoint: function getCenterPoint() {
						var t = this._view;return { x: t.x, y: t.y };
					}, getArea: function getArea() {
						return Math.PI * Math.pow(this._view.radius, 2);
					}, tooltipPosition: function tooltipPosition() {
						var t = this._view;return { x: t.x, y: t.y, padding: t.radius + t.borderWidth };
					}, draw: function draw(e) {
						var n = this._view,
						    r = this._model,
						    l = this._chart.ctx,
						    s = n.pointStyle,
						    u = n.radius,
						    d = n.x,
						    c = n.y,
						    h = t.helpers.color,
						    f = 1.01,
						    g = 0;n.skip || (l.strokeStyle = n.borderColor || o, l.lineWidth = i.getValueOrDefault(n.borderWidth, a.elements.point.borderWidth), l.fillStyle = n.backgroundColor || o, void 0 !== e && (r.x < e.left || e.right * f < r.x || r.y < e.top || e.bottom * f < r.y) && (r.x < e.left ? g = (d - r.x) / (e.left - r.x) : e.right * f < r.x ? g = (r.x - d) / (r.x - e.right) : r.y < e.top ? g = (c - r.y) / (e.top - r.y) : e.bottom * f < r.y && (g = (r.y - c) / (r.y - e.bottom)), g = Math.round(100 * g) / 100, l.strokeStyle = h(l.strokeStyle).alpha(g).rgbString(), l.fillStyle = h(l.fillStyle).alpha(g).rgbString()), t.canvasHelpers.drawPoint(l, s, u, d, c));
					} });
			};
		}, {}], 38: [function (t, e, n) {
			"use strict";
			e.exports = function (t) {
				function e(t) {
					return void 0 !== t._view.width;
				}function n(t) {
					var n,
					    i,
					    a,
					    o,
					    r = t._view;if (e(t)) {
						var l = r.width / 2;n = r.x - l, i = r.x + l, a = Math.min(r.y, r.base), o = Math.max(r.y, r.base);
					} else {
						var s = r.height / 2;n = Math.min(r.x, r.base), i = Math.max(r.x, r.base), a = r.y - s, o = r.y + s;
					}return { left: n, top: a, right: i, bottom: o };
				}var i = t.defaults.global;i.elements.rectangle = { backgroundColor: i.defaultColor, borderWidth: 0, borderColor: i.defaultColor, borderSkipped: "bottom" }, t.elements.Rectangle = t.Element.extend({ draw: function draw() {
						function t(t) {
							return v[(x + t) % 4];
						}var e,
						    n,
						    i,
						    a,
						    o,
						    r,
						    l,
						    s = this._chart.ctx,
						    u = this._view,
						    d = u.borderWidth;if (u.horizontal ? (e = u.base, n = u.x, i = u.y - u.height / 2, a = u.y + u.height / 2, o = n > e ? 1 : -1, r = 1, l = u.borderSkipped || "left") : (e = u.x - u.width / 2, n = u.x + u.width / 2, i = u.y, a = u.base, o = 1, r = a > i ? 1 : -1, l = u.borderSkipped || "bottom"), d) {
							var c = Math.min(Math.abs(e - n), Math.abs(i - a));d = d > c ? c : d;var h = d / 2,
							    f = e + ("left" !== l ? h * o : 0),
							    g = n + ("right" !== l ? -h * o : 0),
							    p = i + ("top" !== l ? h * r : 0),
							    m = a + ("bottom" !== l ? -h * r : 0);f !== g && (i = p, a = m), p !== m && (e = f, n = g);
						}s.beginPath(), s.fillStyle = u.backgroundColor, s.strokeStyle = u.borderColor, s.lineWidth = d;var v = [[e, a], [e, i], [n, i], [n, a]],
						    b = ["bottom", "left", "top", "right"],
						    x = b.indexOf(l, 0);x === -1 && (x = 0);var y = t(0);s.moveTo(y[0], y[1]);for (var k = 1; k < 4; k++) {
							y = t(k), s.lineTo(y[0], y[1]);
						}s.fill(), d && s.stroke();
					}, height: function height() {
						var t = this._view;return t.base - t.y;
					}, inRange: function inRange(t, e) {
						var i = !1;if (this._view) {
							var a = n(this);i = t >= a.left && t <= a.right && e >= a.top && e <= a.bottom;
						}return i;
					}, inLabelRange: function inLabelRange(t, i) {
						var a = this;if (!a._view) return !1;var o = !1,
						    r = n(a);return o = e(a) ? t >= r.left && t <= r.right : i >= r.top && i <= r.bottom;
					}, inXRange: function inXRange(t) {
						var e = n(this);return t >= e.left && t <= e.right;
					}, inYRange: function inYRange(t) {
						var e = n(this);return t >= e.top && t <= e.bottom;
					}, getCenterPoint: function getCenterPoint() {
						var t,
						    n,
						    i = this._view;return e(this) ? (t = i.x, n = (i.y + i.base) / 2) : (t = (i.x + i.base) / 2, n = i.y), { x: t, y: n };
					}, getArea: function getArea() {
						var t = this._view;return t.width * Math.abs(t.y - t.base);
					}, tooltipPosition: function tooltipPosition() {
						var t = this._view;return { x: t.x, y: t.y };
					} });
			};
		}, {}], 39: [function (t, e, n) {
			"use strict";
			e.exports = function (t) {
				function e(t, e) {
					var n = s.getStyle(t, e),
					    i = n && n.match(/^(\d+)(\.\d+)?px$/);return i ? Number(i[1]) : void 0;
				}function n(t, n) {
					var i = t.style,
					    a = t.getAttribute("height"),
					    o = t.getAttribute("width");if (t._chartjs = { initial: { height: a, width: o, style: { display: i.display, height: i.height, width: i.width } } }, i.display = i.display || "block", null === o || "" === o) {
						var r = e(t, "width");void 0 !== r && (t.width = r);
					}if (null === a || "" === a) if ("" === t.style.height) t.height = t.width / (n.options.aspectRatio || 2);else {
						var l = e(t, "height");void 0 !== r && (t.height = l);
					}return t;
				}function i(t, e, n, i, a) {
					return { type: t, chart: e, native: a || null, x: void 0 !== n ? n : null, y: void 0 !== i ? i : null };
				}function a(t, e) {
					var n = u[t.type] || t.type,
					    a = s.getRelativePosition(t, e);return i(n, e, a.x, a.y, t);
				}function o(t) {
					var e = document.createElement("iframe");return e.className = "chartjs-hidden-iframe", e.style.cssText = "display:block;overflow:hidden;border:0;margin:0;top:0;left:0;bottom:0;right:0;height:100%;width:100%;position:absolute;pointer-events:none;z-index:-1;", e.tabIndex = -1, s.addEvent(e, "load", function () {
						s.addEvent(e.contentWindow || e, "resize", t), t();
					}), e;
				}function r(t, e, n) {
					var a = t._chartjs = { ticking: !1 },
					    r = function r() {
						a.ticking || (a.ticking = !0, s.requestAnimFrame.call(window, function () {
							if (a.resizer) return a.ticking = !1, e(i("resize", n));
						}));
					};a.resizer = o(r), t.insertBefore(a.resizer, t.firstChild);
				}function l(t) {
					if (t && t._chartjs) {
						var e = t._chartjs.resizer;e && (e.parentNode.removeChild(e), t._chartjs.resizer = null), delete t._chartjs;
					}
				}var s = t.helpers,
				    u = { touchstart: "mousedown", touchmove: "mousemove", touchend: "mouseup", pointerenter: "mouseenter", pointerdown: "mousedown", pointermove: "mousemove", pointerup: "mouseup", pointerleave: "mouseout", pointerout: "mouseout" };return { acquireContext: function acquireContext(t, e) {
						"string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);var i = t && t.getContext && t.getContext("2d");return i && i.canvas === t ? (n(t, e), i) : null;
					}, releaseContext: function releaseContext(t) {
						var e = t.canvas;if (e._chartjs) {
							var n = e._chartjs.initial;["height", "width"].forEach(function (t) {
								var i = n[t];void 0 === i || null === i ? e.removeAttribute(t) : e.setAttribute(t, i);
							}), s.each(n.style || {}, function (t, n) {
								e.style[n] = t;
							}), e.width = e.width, delete e._chartjs;
						}
					}, addEventListener: function addEventListener(t, e, n) {
						var i = t.canvas;if ("resize" === e) return void r(i.parentNode, n, t);var o = n._chartjs || (n._chartjs = {}),
						    l = o.proxies || (o.proxies = {}),
						    u = l[t.id + "_" + e] = function (e) {
							n(a(e, t));
						};s.addEvent(i, e, u);
					}, removeEventListener: function removeEventListener(t, e, n) {
						var i = t.canvas;if ("resize" === e) return void l(i.parentNode, n);var a = n._chartjs || {},
						    o = a.proxies || {},
						    r = o[t.id + "_" + e];r && s.removeEvent(i, e, r);
					} };
			};
		}, {}], 40: [function (t, e, n) {
			"use strict";
			var i = t(39);e.exports = function (t) {
				t.platform = { acquireContext: function acquireContext() {}, releaseContext: function releaseContext() {}, addEventListener: function addEventListener() {}, removeEventListener: function removeEventListener() {} }, t.helpers.extend(t.platform, i(t));
			};
		}, { 39: 39 }], 41: [function (t, e, n) {
			"use strict";
			e.exports = function (t) {
				function e(t, e, n) {
					var i,
					    a = t._model || {},
					    o = a.fill;if (void 0 === o && (o = !!a.backgroundColor), o === !1 || null === o) return !1;if (o === !0) return "origin";if (i = parseFloat(o, 10), isFinite(i) && Math.floor(i) === i) return "-" !== o[0] && "+" !== o[0] || (i = e + i), !(i === e || i < 0 || i >= n) && i;switch (o) {case "bottom":
							return "start";case "top":
							return "end";case "zero":
							return "origin";case "origin":case "start":case "end":
							return o;default:
							return !1;}
				}function n(t) {
					var e,
					    n = t.el._model || {},
					    i = t.el._scale || {},
					    a = t.fill,
					    o = null;if (isFinite(a)) return null;if ("start" === a ? o = void 0 === n.scaleBottom ? i.bottom : n.scaleBottom : "end" === a ? o = void 0 === n.scaleTop ? i.top : n.scaleTop : void 0 !== n.scaleZero ? o = n.scaleZero : i.getBasePosition ? o = i.getBasePosition() : i.getBasePixel && (o = i.getBasePixel()), void 0 !== o && null !== o) {
						if (void 0 !== o.x && void 0 !== o.y) return o;if ("number" == typeof o && isFinite(o)) return e = i.isHorizontal(), { x: e ? o : null, y: e ? null : o };
					}return null;
				}function i(t, e, n) {
					var i,
					    a = t[e],
					    o = a.fill,
					    r = [e];if (!n) return o;for (; o !== !1 && r.indexOf(o) === -1;) {
						if (!isFinite(o)) return o;if (i = t[o], !i) return !1;if (i.visible) return o;r.push(o), o = i.fill;
					}return !1;
				}function a(t) {
					var e = t.fill,
					    n = "dataset";return e === !1 ? null : (isFinite(e) || (n = "boundary"), d[n](t));
				}function o(t) {
					return t && !t.skip;
				}function r(t, e, n, i, a) {
					var o;if (i && a) {
						for (t.moveTo(e[0].x, e[0].y), o = 1; o < i; ++o) {
							u.canvas.lineTo(t, e[o - 1], e[o]);
						}for (t.lineTo(n[a - 1].x, n[a - 1].y), o = a - 1; o > 0; --o) {
							u.canvas.lineTo(t, n[o], n[o - 1], !0);
						}
					}
				}function l(t, e, n, i, a, l) {
					var s,
					    u,
					    d,
					    c,
					    h,
					    f,
					    g,
					    p = e.length,
					    m = i.spanGaps,
					    v = [],
					    b = [],
					    x = 0,
					    y = 0;for (t.beginPath(), s = 0, u = p + !!l; s < u; ++s) {
						d = s % p, c = e[d]._view, h = n(c, d, i), f = o(c), g = o(h), f && g ? (x = v.push(c), y = b.push(h)) : x && y && (m ? (f && v.push(c), g && b.push(h)) : (r(t, v, b, x, y), x = y = 0, v = [], b = []));
					}r(t, v, b, x, y), t.closePath(), t.fillStyle = a, t.fill();
				}t.defaults.global.plugins.filler = { propagate: !0 };var s = t.defaults,
				    u = t.helpers,
				    d = { dataset: function dataset(t) {
						var e = t.fill,
						    n = t.chart,
						    i = n.getDatasetMeta(e),
						    a = i && n.isDatasetVisible(e),
						    o = a && i.dataset._children || [];return o.length ? function (t, e) {
							return o[e]._view || null;
						} : null;
					}, boundary: function boundary(t) {
						var e = t.boundary,
						    n = e ? e.x : null,
						    i = e ? e.y : null;return function (t) {
							return { x: null === n ? t.x : n, y: null === i ? t.y : i };
						};
					} };return { id: "filler", afterDatasetsUpdate: function afterDatasetsUpdate(o, r) {
						var l,
						    s,
						    u,
						    d,
						    c = (o.data.datasets || []).length,
						    h = r.propagate,
						    f = [];for (s = 0; s < c; ++s) {
							l = o.getDatasetMeta(s), u = l.dataset, d = null, u && u._model && u instanceof t.elements.Line && (d = { visible: o.isDatasetVisible(s), fill: e(u, s, c), chart: o, el: u }), l.$filler = d, f.push(d);
						}for (s = 0; s < c; ++s) {
							d = f[s], d && (d.fill = i(f, s, h), d.boundary = n(d), d.mapper = a(d));
						}
					}, beforeDatasetDraw: function beforeDatasetDraw(t, e) {
						var n = e.meta.$filler;if (n) {
							var i = n.el,
							    a = i._view,
							    o = i._children || [],
							    r = n.mapper,
							    u = a.backgroundColor || s.global.defaultColor;r && u && o.length && l(t.ctx, o, r, a, u, i._loop);
						}
					} };
			};
		}, {}], 42: [function (t, e, n) {
			"use strict";
			e.exports = function (t) {
				function e(t, e) {
					return t.usePointStyle ? e * Math.SQRT2 : t.boxWidth;
				}function n(e, n) {
					var i = new t.Legend({ ctx: e.ctx, options: n, chart: e });a.configure(e, i, n), a.addBox(e, i), e.legend = i;
				}var i = t.helpers,
				    a = t.layoutService,
				    o = i.noop;return t.defaults.global.legend = { display: !0, position: "top", fullWidth: !0, reverse: !1, weight: 1e3, onClick: function onClick(t, e) {
						var n = e.datasetIndex,
						    i = this.chart,
						    a = i.getDatasetMeta(n);a.hidden = null === a.hidden ? !i.data.datasets[n].hidden : null, i.update();
					}, onHover: null, labels: { boxWidth: 40, padding: 10, generateLabels: function generateLabels(t) {
							var e = t.data;return i.isArray(e.datasets) ? e.datasets.map(function (e, n) {
								return { text: e.label, fillStyle: i.isArray(e.backgroundColor) ? e.backgroundColor[0] : e.backgroundColor, hidden: !t.isDatasetVisible(n), lineCap: e.borderCapStyle, lineDash: e.borderDash, lineDashOffset: e.borderDashOffset, lineJoin: e.borderJoinStyle, lineWidth: e.borderWidth, strokeStyle: e.borderColor, pointStyle: e.pointStyle, datasetIndex: n };
							}, this) : [];
						} } }, t.Legend = t.Element.extend({ initialize: function initialize(t) {
						i.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1;
					}, beforeUpdate: o, update: function update(t, e, n) {
						var i = this;return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize;
					}, afterUpdate: o, beforeSetDimensions: o, setDimensions: function setDimensions() {
						var t = this;t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = { width: 0, height: 0 };
					}, afterSetDimensions: o, beforeBuildLabels: o, buildLabels: function buildLabels() {
						var t = this,
						    e = t.options.labels,
						    n = e.generateLabels.call(t, t.chart);e.filter && (n = n.filter(function (n) {
							return e.filter(n, t.chart.data);
						})), t.options.reverse && n.reverse(), t.legendItems = n;
					}, afterBuildLabels: o, beforeFit: o, fit: function fit() {
						var n = this,
						    a = n.options,
						    o = a.labels,
						    r = a.display,
						    l = n.ctx,
						    s = t.defaults.global,
						    u = i.getValueOrDefault,
						    d = u(o.fontSize, s.defaultFontSize),
						    c = u(o.fontStyle, s.defaultFontStyle),
						    h = u(o.fontFamily, s.defaultFontFamily),
						    f = i.fontString(d, c, h),
						    g = n.legendHitBoxes = [],
						    p = n.minSize,
						    m = n.isHorizontal();if (m ? (p.width = n.maxWidth, p.height = r ? 10 : 0) : (p.width = r ? 10 : 0, p.height = n.maxHeight), r) if (l.font = f, m) {
							var v = n.lineWidths = [0],
							    b = n.legendItems.length ? d + o.padding : 0;l.textAlign = "left", l.textBaseline = "top", i.each(n.legendItems, function (t, i) {
								var a = e(o, d),
								    r = a + d / 2 + l.measureText(t.text).width;v[v.length - 1] + r + o.padding >= n.width && (b += d + o.padding, v[v.length] = n.left), g[i] = { left: 0, top: 0, width: r, height: d }, v[v.length - 1] += r + o.padding;
							}), p.height += b;
						} else {
							var x = o.padding,
							    y = n.columnWidths = [],
							    k = o.padding,
							    w = 0,
							    M = 0,
							    S = d + x;i.each(n.legendItems, function (t, n) {
								var i = e(o, d),
								    a = i + d / 2 + l.measureText(t.text).width;M + S > p.height && (k += w + o.padding, y.push(w), w = 0, M = 0), w = Math.max(w, a), M += S, g[n] = { left: 0, top: 0, width: a, height: d };
							}), k += w, y.push(w), p.width += k;
						}n.width = p.width, n.height = p.height;
					}, afterFit: o, isHorizontal: function isHorizontal() {
						return "top" === this.options.position || "bottom" === this.options.position;
					}, draw: function draw() {
						var n = this,
						    a = n.options,
						    o = a.labels,
						    r = t.defaults.global,
						    l = r.elements.line,
						    s = n.width,
						    u = n.lineWidths;if (a.display) {
							var d,
							    c = n.ctx,
							    h = i.getValueOrDefault,
							    f = h(o.fontColor, r.defaultFontColor),
							    g = h(o.fontSize, r.defaultFontSize),
							    p = h(o.fontStyle, r.defaultFontStyle),
							    m = h(o.fontFamily, r.defaultFontFamily),
							    v = i.fontString(g, p, m);c.textAlign = "left", c.textBaseline = "top", c.lineWidth = .5, c.strokeStyle = f, c.fillStyle = f, c.font = v;var b = e(o, g),
							    x = n.legendHitBoxes,
							    y = function y(e, n, i) {
								if (!(isNaN(b) || b <= 0)) {
									c.save(), c.fillStyle = h(i.fillStyle, r.defaultColor), c.lineCap = h(i.lineCap, l.borderCapStyle), c.lineDashOffset = h(i.lineDashOffset, l.borderDashOffset), c.lineJoin = h(i.lineJoin, l.borderJoinStyle), c.lineWidth = h(i.lineWidth, l.borderWidth), c.strokeStyle = h(i.strokeStyle, r.defaultColor);var o = 0 === h(i.lineWidth, l.borderWidth);if (c.setLineDash && c.setLineDash(h(i.lineDash, l.borderDash)), a.labels && a.labels.usePointStyle) {
										var s = g * Math.SQRT2 / 2,
										    u = s / Math.SQRT2,
										    d = e + u,
										    f = n + u;t.canvasHelpers.drawPoint(c, i.pointStyle, s, d, f);
									} else o || c.strokeRect(e, n, b, g), c.fillRect(e, n, b, g);c.restore();
								}
							},
							    k = function k(t, e, n, i) {
								c.fillText(n.text, b + g / 2 + t, e), n.hidden && (c.beginPath(), c.lineWidth = 2, c.moveTo(b + g / 2 + t, e + g / 2), c.lineTo(b + g / 2 + t + i, e + g / 2), c.stroke());
							},
							    w = n.isHorizontal();d = w ? { x: n.left + (s - u[0]) / 2, y: n.top + o.padding, line: 0 } : { x: n.left + o.padding, y: n.top + o.padding, line: 0 };var M = g + o.padding;i.each(n.legendItems, function (t, e) {
								var i = c.measureText(t.text).width,
								    a = b + g / 2 + i,
								    r = d.x,
								    l = d.y;w ? r + a >= s && (l = d.y += M, d.line++, r = d.x = n.left + (s - u[d.line]) / 2) : l + M > n.bottom && (r = d.x = r + n.columnWidths[d.line] + o.padding, l = d.y = n.top + o.padding, d.line++), y(r, l, t), x[e].left = r, x[e].top = l, k(r, l, t, i), w ? d.x += a + o.padding : d.y += M;
							});
						}
					}, handleEvent: function handleEvent(t) {
						var e = this,
						    n = e.options,
						    i = "mouseup" === t.type ? "click" : t.type,
						    a = !1;if ("mousemove" === i) {
							if (!n.onHover) return;
						} else {
							if ("click" !== i) return;if (!n.onClick) return;
						}var o = t.x,
						    r = t.y;if (o >= e.left && o <= e.right && r >= e.top && r <= e.bottom) for (var l = e.legendHitBoxes, s = 0; s < l.length; ++s) {
							var u = l[s];if (o >= u.left && o <= u.left + u.width && r >= u.top && r <= u.top + u.height) {
								if ("click" === i) {
									n.onClick.call(e, t.native, e.legendItems[s]), a = !0;break;
								}if ("mousemove" === i) {
									n.onHover.call(e, t.native, e.legendItems[s]), a = !0;break;
								}
							}
						}return a;
					} }), { id: "legend", beforeInit: function beforeInit(t) {
						var e = t.options.legend;e && n(t, e);
					}, beforeUpdate: function beforeUpdate(e) {
						var o = e.options.legend,
						    r = e.legend;o ? (o = i.configMerge(t.defaults.global.legend, o), r ? (a.configure(e, r, o), r.options = o) : n(e, o)) : r && (a.removeBox(e, r), delete e.legend);
					}, afterEvent: function afterEvent(t, e) {
						var n = t.legend;n && n.handleEvent(e);
					} };
			};
		}, {}], 43: [function (t, e, n) {
			"use strict";
			e.exports = function (t) {
				function e(e, n) {
					var a = new t.Title({ ctx: e.ctx, options: n, chart: e });i.configure(e, a, n), i.addBox(e, a), e.titleBlock = a;
				}var n = t.helpers,
				    i = t.layoutService,
				    a = n.noop;return t.defaults.global.title = { display: !1, position: "top", fullWidth: !0, weight: 2e3, fontStyle: "bold", padding: 10, text: "" }, t.Title = t.Element.extend({ initialize: function initialize(t) {
						var e = this;n.extend(e, t), e.legendHitBoxes = [];
					}, beforeUpdate: a, update: function update(t, e, n) {
						var i = this;return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize;
					}, afterUpdate: a, beforeSetDimensions: a, setDimensions: function setDimensions() {
						var t = this;t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = { width: 0, height: 0 };
					}, afterSetDimensions: a, beforeBuildLabels: a, buildLabels: a, afterBuildLabels: a, beforeFit: a, fit: function fit() {
						var e = this,
						    i = n.getValueOrDefault,
						    a = e.options,
						    o = t.defaults.global,
						    r = a.display,
						    l = i(a.fontSize, o.defaultFontSize),
						    s = e.minSize;e.isHorizontal() ? (s.width = e.maxWidth, s.height = r ? l + 2 * a.padding : 0) : (s.width = r ? l + 2 * a.padding : 0, s.height = e.maxHeight), e.width = s.width, e.height = s.height;
					}, afterFit: a, isHorizontal: function isHorizontal() {
						var t = this.options.position;return "top" === t || "bottom" === t;
					}, draw: function draw() {
						var e = this,
						    i = e.ctx,
						    a = n.getValueOrDefault,
						    o = e.options,
						    r = t.defaults.global;if (o.display) {
							var l,
							    s,
							    u,
							    d = a(o.fontSize, r.defaultFontSize),
							    c = a(o.fontStyle, r.defaultFontStyle),
							    h = a(o.fontFamily, r.defaultFontFamily),
							    f = n.fontString(d, c, h),
							    g = 0,
							    p = e.top,
							    m = e.left,
							    v = e.bottom,
							    b = e.right;i.fillStyle = a(o.fontColor, r.defaultFontColor), i.font = f, e.isHorizontal() ? (l = m + (b - m) / 2, s = p + (v - p) / 2, u = b - m) : (l = "left" === o.position ? m + d / 2 : b - d / 2, s = p + (v - p) / 2, u = v - p, g = Math.PI * ("left" === o.position ? -.5 : .5)), i.save(), i.translate(l, s), i.rotate(g), i.textAlign = "center", i.textBaseline = "middle", i.fillText(o.text, 0, 0, u), i.restore();
						}
					} }), { id: "title", beforeInit: function beforeInit(t) {
						var n = t.options.title;n && e(t, n);
					}, beforeUpdate: function beforeUpdate(a) {
						var o = a.options.title,
						    r = a.titleBlock;o ? (o = n.configMerge(t.defaults.global.title, o), r ? (i.configure(a, r, o), r.options = o) : e(a, o)) : r && (t.layoutService.removeBox(a, r), delete a.titleBlock);
					} };
			};
		}, {}], 44: [function (t, e, n) {
			"use strict";
			e.exports = function (t) {
				var e = t.helpers,
				    n = { position: "bottom" },
				    i = t.Scale.extend({ getLabels: function getLabels() {
						var t = this.chart.data;return (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels;
					}, determineDataLimits: function determineDataLimits() {
						var t = this,
						    n = t.getLabels();t.minIndex = 0, t.maxIndex = n.length - 1;var i;void 0 !== t.options.ticks.min && (i = e.indexOf(n, t.options.ticks.min), t.minIndex = i !== -1 ? i : t.minIndex), void 0 !== t.options.ticks.max && (i = e.indexOf(n, t.options.ticks.max), t.maxIndex = i !== -1 ? i : t.maxIndex), t.min = n[t.minIndex], t.max = n[t.maxIndex];
					}, buildTicks: function buildTicks() {
						var t = this,
						    e = t.getLabels();t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1);
					}, getLabelForIndex: function getLabelForIndex(t, e) {
						var n = this,
						    i = n.chart.data,
						    a = n.isHorizontal();return i.yLabels && !a ? n.getRightValue(i.datasets[e].data[t]) : n.ticks[t - n.minIndex];
					}, getPixelForValue: function getPixelForValue(t, e, n, i) {
						var a,
						    o = this,
						    r = Math.max(o.maxIndex + 1 - o.minIndex - (o.options.gridLines.offsetGridLines ? 0 : 1), 1);if (void 0 !== t && null !== t && (a = o.isHorizontal() ? t.x : t.y), void 0 !== a || void 0 !== t && isNaN(e)) {
							var l = o.getLabels();t = a || t;var s = l.indexOf(t);e = s !== -1 ? s : e;
						}if (o.isHorizontal()) {
							var u = o.width / r,
							    d = u * (e - o.minIndex);return (o.options.gridLines.offsetGridLines && i || o.maxIndex === o.minIndex && i) && (d += u / 2), o.left + Math.round(d);
						}var c = o.height / r,
						    h = c * (e - o.minIndex);return o.options.gridLines.offsetGridLines && i && (h += c / 2), o.top + Math.round(h);
					}, getPixelForTick: function getPixelForTick(t, e) {
						return this.getPixelForValue(this.ticks[t], t + this.minIndex, null, e);
					}, getValueForPixel: function getValueForPixel(t) {
						var e,
						    n = this,
						    i = Math.max(n.ticks.length - (n.options.gridLines.offsetGridLines ? 0 : 1), 1),
						    a = n.isHorizontal(),
						    o = (a ? n.width : n.height) / i;return t -= a ? n.left : n.top, n.options.gridLines.offsetGridLines && (t -= o / 2), e = t <= 0 ? 0 : Math.round(t / o);
					}, getBasePixel: function getBasePixel() {
						return this.bottom;
					} });t.scaleService.registerScaleType("category", i, n);
			};
		}, {}], 45: [function (t, e, n) {
			"use strict";
			e.exports = function (t) {
				var e = t.helpers,
				    n = { position: "left", ticks: { callback: t.Ticks.formatters.linear } },
				    i = t.LinearScaleBase.extend({ determineDataLimits: function determineDataLimits() {
						function t(t) {
							return l ? t.xAxisID === n.id : t.yAxisID === n.id;
						}var n = this,
						    i = n.options,
						    a = n.chart,
						    o = a.data,
						    r = o.datasets,
						    l = n.isHorizontal(),
						    s = 0,
						    u = 1;n.min = null, n.max = null;var d = i.stacked;if (void 0 === d && e.each(r, function (e, n) {
							if (!d) {
								var i = a.getDatasetMeta(n);a.isDatasetVisible(n) && t(i) && void 0 !== i.stack && (d = !0);
							}
						}), i.stacked || d) {
							var c = {};e.each(r, function (o, r) {
								var l = a.getDatasetMeta(r),
								    s = [l.type, void 0 === i.stacked && void 0 === l.stack ? r : "", l.stack].join(".");void 0 === c[s] && (c[s] = { positiveValues: [], negativeValues: [] });var u = c[s].positiveValues,
								    d = c[s].negativeValues;a.isDatasetVisible(r) && t(l) && e.each(o.data, function (t, e) {
									var a = +n.getRightValue(t);isNaN(a) || l.data[e].hidden || (u[e] = u[e] || 0, d[e] = d[e] || 0, i.relativePoints ? u[e] = 100 : a < 0 ? d[e] += a : u[e] += a);
								});
							}), e.each(c, function (t) {
								var i = t.positiveValues.concat(t.negativeValues),
								    a = e.min(i),
								    o = e.max(i);n.min = null === n.min ? a : Math.min(n.min, a), n.max = null === n.max ? o : Math.max(n.max, o);
							});
						} else e.each(r, function (i, o) {
							var r = a.getDatasetMeta(o);a.isDatasetVisible(o) && t(r) && e.each(i.data, function (t, e) {
								var i = +n.getRightValue(t);isNaN(i) || r.data[e].hidden || (null === n.min ? n.min = i : i < n.min && (n.min = i), null === n.max ? n.max = i : i > n.max && (n.max = i));
							});
						});n.min = isFinite(n.min) ? n.min : s, n.max = isFinite(n.max) ? n.max : u, this.handleTickRangeOptions();
					}, getTickLimit: function getTickLimit() {
						var n,
						    i = this,
						    a = i.options.ticks;if (i.isHorizontal()) n = Math.min(a.maxTicksLimit ? a.maxTicksLimit : 11, Math.ceil(i.width / 50));else {
							var o = e.getValueOrDefault(a.fontSize, t.defaults.global.defaultFontSize);n = Math.min(a.maxTicksLimit ? a.maxTicksLimit : 11, Math.ceil(i.height / (2 * o)));
						}return n;
					}, handleDirectionalChanges: function handleDirectionalChanges() {
						this.isHorizontal() || this.ticks.reverse();
					}, getLabelForIndex: function getLabelForIndex(t, e) {
						return +this.getRightValue(this.chart.data.datasets[e].data[t]);
					}, getPixelForValue: function getPixelForValue(t) {
						var e,
						    n = this,
						    i = n.start,
						    a = +n.getRightValue(t),
						    o = n.end - i;return n.isHorizontal() ? (e = n.left + n.width / o * (a - i), Math.round(e)) : (e = n.bottom - n.height / o * (a - i), Math.round(e));
					}, getValueForPixel: function getValueForPixel(t) {
						var e = this,
						    n = e.isHorizontal(),
						    i = n ? e.width : e.height,
						    a = (n ? t - e.left : e.bottom - t) / i;return e.start + (e.end - e.start) * a;
					}, getPixelForTick: function getPixelForTick(t) {
						return this.getPixelForValue(this.ticksAsNumbers[t]);
					} });t.scaleService.registerScaleType("linear", i, n);
			};
		}, {}], 46: [function (t, e, n) {
			"use strict";
			e.exports = function (t) {
				var e = t.helpers,
				    n = e.noop;t.LinearScaleBase = t.Scale.extend({ handleTickRangeOptions: function handleTickRangeOptions() {
						var t = this,
						    n = t.options,
						    i = n.ticks;if (i.beginAtZero) {
							var a = e.sign(t.min),
							    o = e.sign(t.max);a < 0 && o < 0 ? t.max = 0 : a > 0 && o > 0 && (t.min = 0);
						}void 0 !== i.min ? t.min = i.min : void 0 !== i.suggestedMin && (null === t.min ? t.min = i.suggestedMin : t.min = Math.min(t.min, i.suggestedMin)), void 0 !== i.max ? t.max = i.max : void 0 !== i.suggestedMax && (null === t.max ? t.max = i.suggestedMax : t.max = Math.max(t.max, i.suggestedMax)), t.min === t.max && (t.max++, i.beginAtZero || t.min--);
					}, getTickLimit: n, handleDirectionalChanges: n, buildTicks: function buildTicks() {
						var n = this,
						    i = n.options,
						    a = i.ticks,
						    o = n.getTickLimit();o = Math.max(2, o);var r = { maxTicks: o, min: a.min, max: a.max, stepSize: e.getValueOrDefault(a.fixedStepSize, a.stepSize) },
						    l = n.ticks = t.Ticks.generators.linear(r, n);n.handleDirectionalChanges(), n.max = e.max(l), n.min = e.min(l), a.reverse ? (l.reverse(), n.start = n.max, n.end = n.min) : (n.start = n.min, n.end = n.max);
					}, convertTicksToLabels: function convertTicksToLabels() {
						var e = this;e.ticksAsNumbers = e.ticks.slice(), e.zeroLineIndex = e.ticks.indexOf(0), t.Scale.prototype.convertTicksToLabels.call(e);
					} });
			};
		}, {}], 47: [function (t, e, n) {
			"use strict";
			e.exports = function (t) {
				var e = t.helpers,
				    n = { position: "left", ticks: { callback: t.Ticks.formatters.logarithmic } },
				    i = t.Scale.extend({ determineDataLimits: function determineDataLimits() {
						function t(t) {
							return u ? t.xAxisID === n.id : t.yAxisID === n.id;
						}var n = this,
						    i = n.options,
						    a = i.ticks,
						    o = n.chart,
						    r = o.data,
						    l = r.datasets,
						    s = e.getValueOrDefault,
						    u = n.isHorizontal();n.min = null, n.max = null, n.minNotZero = null;var d = i.stacked;if (void 0 === d && e.each(l, function (e, n) {
							if (!d) {
								var i = o.getDatasetMeta(n);o.isDatasetVisible(n) && t(i) && void 0 !== i.stack && (d = !0);
							}
						}), i.stacked || d) {
							var c = {};e.each(l, function (a, r) {
								var l = o.getDatasetMeta(r),
								    s = [l.type, void 0 === i.stacked && void 0 === l.stack ? r : "", l.stack].join(".");o.isDatasetVisible(r) && t(l) && (void 0 === c[s] && (c[s] = []), e.each(a.data, function (t, e) {
									var a = c[s],
									    o = +n.getRightValue(t);isNaN(o) || l.data[e].hidden || (a[e] = a[e] || 0, i.relativePoints ? a[e] = 100 : a[e] += o);
								}));
							}), e.each(c, function (t) {
								var i = e.min(t),
								    a = e.max(t);n.min = null === n.min ? i : Math.min(n.min, i), n.max = null === n.max ? a : Math.max(n.max, a);
							});
						} else e.each(l, function (i, a) {
							var r = o.getDatasetMeta(a);o.isDatasetVisible(a) && t(r) && e.each(i.data, function (t, e) {
								var i = +n.getRightValue(t);isNaN(i) || r.data[e].hidden || (null === n.min ? n.min = i : i < n.min && (n.min = i), null === n.max ? n.max = i : i > n.max && (n.max = i), 0 !== i && (null === n.minNotZero || i < n.minNotZero) && (n.minNotZero = i));
							});
						});n.min = s(a.min, n.min), n.max = s(a.max, n.max), n.min === n.max && (0 !== n.min && null !== n.min ? (n.min = Math.pow(10, Math.floor(e.log10(n.min)) - 1), n.max = Math.pow(10, Math.floor(e.log10(n.max)) + 1)) : (n.min = 1, n.max = 10));
					}, buildTicks: function buildTicks() {
						var n = this,
						    i = n.options,
						    a = i.ticks,
						    o = { min: a.min, max: a.max },
						    r = n.ticks = t.Ticks.generators.logarithmic(o, n);n.isHorizontal() || r.reverse(), n.max = e.max(r), n.min = e.min(r), a.reverse ? (r.reverse(), n.start = n.max, n.end = n.min) : (n.start = n.min, n.end = n.max);
					}, convertTicksToLabels: function convertTicksToLabels() {
						this.tickValues = this.ticks.slice(), t.Scale.prototype.convertTicksToLabels.call(this);
					}, getLabelForIndex: function getLabelForIndex(t, e) {
						return +this.getRightValue(this.chart.data.datasets[e].data[t]);
					}, getPixelForTick: function getPixelForTick(t) {
						return this.getPixelForValue(this.tickValues[t]);
					}, getPixelForValue: function getPixelForValue(t) {
						var n,
						    i,
						    a,
						    o = this,
						    r = o.start,
						    l = +o.getRightValue(t),
						    s = o.options,
						    u = s.ticks;return o.isHorizontal() ? (a = e.log10(o.end) - e.log10(r), 0 === l ? i = o.left : (n = o.width, i = o.left + n / a * (e.log10(l) - e.log10(r)))) : (n = o.height, 0 !== r || u.reverse ? 0 === o.end && u.reverse ? (a = e.log10(o.start) - e.log10(o.minNotZero), i = l === o.end ? o.top : l === o.minNotZero ? o.top + .02 * n : o.top + .02 * n + .98 * n / a * (e.log10(l) - e.log10(o.minNotZero))) : 0 === l ? i = u.reverse ? o.top : o.bottom : (a = e.log10(o.end) - e.log10(r), n = o.height, i = o.bottom - n / a * (e.log10(l) - e.log10(r))) : (a = e.log10(o.end) - e.log10(o.minNotZero), i = l === r ? o.bottom : l === o.minNotZero ? o.bottom - .02 * n : o.bottom - .02 * n - .98 * n / a * (e.log10(l) - e.log10(o.minNotZero)))), i;
					}, getValueForPixel: function getValueForPixel(t) {
						var n,
						    i,
						    a = this,
						    o = e.log10(a.end) - e.log10(a.start);return a.isHorizontal() ? (i = a.width, n = a.start * Math.pow(10, (t - a.left) * o / i)) : (i = a.height, n = Math.pow(10, (a.bottom - t) * o / i) / a.start), n;
					} });t.scaleService.registerScaleType("logarithmic", i, n);
			};
		}, {}], 48: [function (t, e, n) {
			"use strict";
			e.exports = function (t) {
				function e(t) {
					var e = t.options;return e.angleLines.display || e.pointLabels.display ? t.chart.data.labels.length : 0;
				}function n(t) {
					var e = t.options.pointLabels,
					    n = f.getValueOrDefault(e.fontSize, g.defaultFontSize),
					    i = f.getValueOrDefault(e.fontStyle, g.defaultFontStyle),
					    a = f.getValueOrDefault(e.fontFamily, g.defaultFontFamily),
					    o = f.fontString(n, i, a);return { size: n, style: i, family: a, font: o };
				}function i(t, e, n) {
					return f.isArray(n) ? { w: f.longestText(t, t.font, n), h: n.length * e + 1.5 * (n.length - 1) * e } : { w: t.measureText(n).width, h: e };
				}function a(t, e, n, i, a) {
					return t === i || t === a ? { start: e - n / 2, end: e + n / 2 } : t < i || t > a ? { start: e - n - 5, end: e } : { start: e, end: e + n + 5 };
				}function o(t) {
					var o,
					    r,
					    l,
					    s = n(t),
					    u = Math.min(t.height / 2, t.width / 2),
					    d = { r: t.width, l: 0, t: t.height, b: 0 },
					    c = {};t.ctx.font = s.font, t._pointLabelSizes = [];var h = e(t);for (o = 0; o < h; o++) {
						l = t.getPointPosition(o, u), r = i(t.ctx, s.size, t.pointLabels[o] || ""), t._pointLabelSizes[o] = r;var g = t.getIndexAngle(o),
						    p = f.toDegrees(g) % 360,
						    m = a(p, l.x, r.w, 0, 180),
						    v = a(p, l.y, r.h, 90, 270);m.start < d.l && (d.l = m.start, c.l = g), m.end > d.r && (d.r = m.end, c.r = g), v.start < d.t && (d.t = v.start, c.t = g), v.end > d.b && (d.b = v.end, c.b = g);
					}t.setReductions(u, d, c);
				}function r(t) {
					var e = Math.min(t.height / 2, t.width / 2);t.drawingArea = Math.round(e), t.setCenterPoint(0, 0, 0, 0);
				}function l(t) {
					return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right";
				}function s(t, e, n, i) {
					if (f.isArray(e)) for (var a = n.y, o = 1.5 * i, r = 0; r < e.length; ++r) {
						t.fillText(e[r], n.x, a), a += o;
					} else t.fillText(e, n.x, n.y);
				}function u(t, e, n) {
					90 === t || 270 === t ? n.y -= e.h / 2 : (t > 270 || t < 90) && (n.y -= e.h);
				}function d(t) {
					var i = t.ctx,
					    a = f.getValueOrDefault,
					    o = t.options,
					    r = o.angleLines,
					    d = o.pointLabels;i.lineWidth = r.lineWidth, i.strokeStyle = r.color;var c = t.getDistanceFromCenterForValue(o.reverse ? t.min : t.max),
					    h = n(t);i.textBaseline = "top";for (var p = e(t) - 1; p >= 0; p--) {
						if (r.display) {
							var m = t.getPointPosition(p, c);i.beginPath(), i.moveTo(t.xCenter, t.yCenter), i.lineTo(m.x, m.y), i.stroke(), i.closePath();
						}if (d.display) {
							var v = t.getPointPosition(p, c + 5),
							    b = a(d.fontColor, g.defaultFontColor);i.font = h.font, i.fillStyle = b;var x = t.getIndexAngle(p),
							    y = f.toDegrees(x);i.textAlign = l(y), u(y, t._pointLabelSizes[p], v), s(i, t.pointLabels[p] || "", v, h.size);
						}
					}
				}function c(t, n, i, a) {
					var o = t.ctx;if (o.strokeStyle = f.getValueAtIndexOrDefault(n.color, a - 1), o.lineWidth = f.getValueAtIndexOrDefault(n.lineWidth, a - 1), t.options.gridLines.circular) o.beginPath(), o.arc(t.xCenter, t.yCenter, i, 0, 2 * Math.PI), o.closePath(), o.stroke();else {
						var r = e(t);if (0 === r) return;o.beginPath();var l = t.getPointPosition(0, i);o.moveTo(l.x, l.y);for (var s = 1; s < r; s++) {
							l = t.getPointPosition(s, i), o.lineTo(l.x, l.y);
						}o.closePath(), o.stroke();
					}
				}function h(t) {
					return f.isNumber(t) ? t : 0;
				}var f = t.helpers,
				    g = t.defaults.global,
				    p = { display: !0, animate: !0, position: "chartArea", angleLines: { display: !0, color: "rgba(0, 0, 0, 0.1)", lineWidth: 1 }, gridLines: { circular: !1 }, ticks: { showLabelBackdrop: !0, backdropColor: "rgba(255,255,255,0.75)", backdropPaddingY: 2, backdropPaddingX: 2, callback: t.Ticks.formatters.linear }, pointLabels: { display: !0, fontSize: 10, callback: function callback(t) {
							return t;
						} } },
				    m = t.LinearScaleBase.extend({ setDimensions: function setDimensions() {
						var t = this,
						    e = t.options,
						    n = e.ticks;t.width = t.maxWidth, t.height = t.maxHeight, t.xCenter = Math.round(t.width / 2), t.yCenter = Math.round(t.height / 2);var i = f.min([t.height, t.width]),
						    a = f.getValueOrDefault(n.fontSize, g.defaultFontSize);t.drawingArea = e.display ? i / 2 - (a / 2 + n.backdropPaddingY) : i / 2;
					}, determineDataLimits: function determineDataLimits() {
						var t = this,
						    e = t.chart,
						    n = Number.POSITIVE_INFINITY,
						    i = Number.NEGATIVE_INFINITY;f.each(e.data.datasets, function (a, o) {
							if (e.isDatasetVisible(o)) {
								var r = e.getDatasetMeta(o);f.each(a.data, function (e, a) {
									var o = +t.getRightValue(e);isNaN(o) || r.data[a].hidden || (n = Math.min(o, n), i = Math.max(o, i));
								});
							}
						}), t.min = n === Number.POSITIVE_INFINITY ? 0 : n, t.max = i === Number.NEGATIVE_INFINITY ? 0 : i, t.handleTickRangeOptions();
					}, getTickLimit: function getTickLimit() {
						var t = this.options.ticks,
						    e = f.getValueOrDefault(t.fontSize, g.defaultFontSize);return Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * e)));
					}, convertTicksToLabels: function convertTicksToLabels() {
						var e = this;t.LinearScaleBase.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map(e.options.pointLabels.callback, e);
					}, getLabelForIndex: function getLabelForIndex(t, e) {
						return +this.getRightValue(this.chart.data.datasets[e].data[t]);
					}, fit: function fit() {
						this.options.pointLabels.display ? o(this) : r(this);
					}, setReductions: function setReductions(t, e, n) {
						var i = this,
						    a = e.l / Math.sin(n.l),
						    o = Math.max(e.r - i.width, 0) / Math.sin(n.r),
						    r = -e.t / Math.cos(n.t),
						    l = -Math.max(e.b - i.height, 0) / Math.cos(n.b);a = h(a), o = h(o), r = h(r), l = h(l), i.drawingArea = Math.min(Math.round(t - (a + o) / 2), Math.round(t - (r + l) / 2)), i.setCenterPoint(a, o, r, l);
					}, setCenterPoint: function setCenterPoint(t, e, n, i) {
						var a = this,
						    o = a.width - e - a.drawingArea,
						    r = t + a.drawingArea,
						    l = n + a.drawingArea,
						    s = a.height - i - a.drawingArea;a.xCenter = Math.round((r + o) / 2 + a.left), a.yCenter = Math.round((l + s) / 2 + a.top);
					}, getIndexAngle: function getIndexAngle(t) {
						var n = 2 * Math.PI / e(this),
						    i = this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0,
						    a = i * Math.PI * 2 / 360;return t * n + a;
					}, getDistanceFromCenterForValue: function getDistanceFromCenterForValue(t) {
						var e = this;if (null === t) return 0;var n = e.drawingArea / (e.max - e.min);return e.options.reverse ? (e.max - t) * n : (t - e.min) * n;
					}, getPointPosition: function getPointPosition(t, e) {
						var n = this,
						    i = n.getIndexAngle(t) - Math.PI / 2;return { x: Math.round(Math.cos(i) * e) + n.xCenter, y: Math.round(Math.sin(i) * e) + n.yCenter };
					}, getPointPositionForValue: function getPointPositionForValue(t, e) {
						return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
					}, getBasePosition: function getBasePosition() {
						var t = this,
						    e = t.min,
						    n = t.max;return t.getPointPositionForValue(0, t.beginAtZero ? 0 : e < 0 && n < 0 ? n : e > 0 && n > 0 ? e : 0);
					}, draw: function draw() {
						var t = this,
						    e = t.options,
						    n = e.gridLines,
						    i = e.ticks,
						    a = f.getValueOrDefault;if (e.display) {
							var o = t.ctx,
							    r = a(i.fontSize, g.defaultFontSize),
							    l = a(i.fontStyle, g.defaultFontStyle),
							    s = a(i.fontFamily, g.defaultFontFamily),
							    u = f.fontString(r, l, s);f.each(t.ticks, function (l, s) {
								if (s > 0 || e.reverse) {
									var d = t.getDistanceFromCenterForValue(t.ticksAsNumbers[s]),
									    h = t.yCenter - d;if (n.display && 0 !== s && c(t, n, d, s), i.display) {
										var f = a(i.fontColor, g.defaultFontColor);if (o.font = u, i.showLabelBackdrop) {
											var p = o.measureText(l).width;o.fillStyle = i.backdropColor, o.fillRect(t.xCenter - p / 2 - i.backdropPaddingX, h - r / 2 - i.backdropPaddingY, p + 2 * i.backdropPaddingX, r + 2 * i.backdropPaddingY);
										}o.textAlign = "center", o.textBaseline = "middle", o.fillStyle = f, o.fillText(l, t.xCenter, h);
									}
								}
							}), (e.angleLines.display || e.pointLabels.display) && d(t);
						}
					} });t.scaleService.registerScaleType("radialLinear", m, p);
			};
		}, {}], 49: [function (t, e, n) {
			"use strict";
			var i = t(1);i = "function" == typeof i ? i : window.moment, e.exports = function (t) {
				function e(t, e) {
					var n = t.options.time;if ("string" == typeof n.parser) return i(e, n.parser);if ("function" == typeof n.parser) return n.parser(e);if ("function" == typeof e.getMonth || "number" == typeof e) return i(e);if (e.isValid && e.isValid()) return e;var a = n.format;return "string" != typeof a && a.call ? (console.warn("options.time.format is deprecated and replaced by options.time.parser."), a(e)) : i(e, a);
				}function n(t, e, n, i) {
					for (var a, o = Object.keys(l), r = o.length, s = o.indexOf(t); s < r; s++) {
						a = o[s];var u = l[a],
						    d = u.steps && u.steps[u.steps.length - 1] || u.maxStep;if (void 0 === d || Math.ceil((n - e) / (d * u.size)) <= i) break;
					}return a;
				}function a(t, e, n, i) {
					var a = l[n],
					    o = a.size,
					    r = Math.ceil((e - t) / o),
					    s = 1,
					    u = e - t;if (a.steps) for (var d = a.steps.length, c = 0; c < d && r > i; c++) {
						s = a.steps[c], r = Math.ceil(u / (o * s));
					} else for (; r > i && i > 0;) {
						++s, r = Math.ceil(u / (o * s));
					}return s;
				}function o(t, e, n) {
					var a = [];if (t.maxTicks) {
						var o = t.stepSize;a.push(void 0 !== t.min ? t.min : n.min);for (var r = i(n.min); r.add(o, t.unit).valueOf() < n.max;) {
							a.push(r.valueOf());
						}var l = t.max || n.max;a[a.length - 1] !== l && a.push(l);
					}return a;
				}var r = t.helpers,
				    l = { millisecond: { size: 1, steps: [1, 2, 5, 10, 20, 50, 100, 250, 500] }, second: { size: 1e3, steps: [1, 2, 5, 10, 30] }, minute: { size: 6e4, steps: [1, 2, 5, 10, 30] }, hour: { size: 36e5, steps: [1, 2, 3, 6, 12] }, day: { size: 864e5, steps: [1, 2, 5] }, week: { size: 6048e5, maxStep: 4 }, month: { size: 2628e6, maxStep: 3 }, quarter: { size: 7884e6, maxStep: 4 }, year: { size: 3154e7, maxStep: !1 } },
				    s = { position: "bottom", time: { parser: !1, format: !1, unit: !1, round: !1, displayFormat: !1, isoWeekday: !1, minUnit: "millisecond", displayFormats: { millisecond: "h:mm:ss.SSS a", second: "h:mm:ss a", minute: "h:mm:ss a", hour: "MMM D, hA", day: "ll", week: "ll", month: "MMM YYYY", quarter: "[Q]Q - YYYY", year: "YYYY" } }, ticks: { autoSkip: !1 } };t.Ticks.generators.time = function (t, e) {
					var n,
					    a,
					    r = t.isoWeekday;return "week" === t.unit && r !== !1 ? (n = i(e.min).startOf("isoWeek").isoWeekday(r).valueOf(), a = i(e.max).startOf("isoWeek").isoWeekday(r), e.max - a > 0 && a.add(1, "week"), a = a.valueOf()) : (n = i(e.min).startOf(t.unit).valueOf(), a = i(e.max).startOf(t.unit), e.max - a > 0 && a.add(1, t.unit), a = a.valueOf()), o(t, e, { min: n, max: a });
				};var u = t.Scale.extend({ initialize: function initialize() {
						if (!i) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");t.Scale.prototype.initialize.call(this);
					}, determineDataLimits: function determineDataLimits() {
						var t,
						    n = this,
						    i = n.options.time,
						    a = Number.MAX_SAFE_INTEGER,
						    o = Number.MIN_SAFE_INTEGER,
						    l = n.chart.data,
						    s = { labels: [], datasets: [] };r.each(l.labels, function (r, l) {
							var u = e(n, r);u.isValid() && (i.round && u.startOf(i.round), t = u.valueOf(), a = Math.min(t, a), o = Math.max(t, o), s.labels[l] = t);
						}), r.each(l.datasets, function (l, u) {
							var d = [];"object" == _typeof(l.data[0]) && null !== l.data[0] && n.chart.isDatasetVisible(u) ? r.each(l.data, function (r, l) {
								var s = e(n, n.getRightValue(r));s.isValid() && (i.round && s.startOf(i.round), t = s.valueOf(), a = Math.min(t, a), o = Math.max(t, o), d[l] = t);
							}) : d = s.labels.slice(), s.datasets[u] = d;
						}), n.dataMin = a, n.dataMax = o, n._parsedData = s;
					}, buildTicks: function buildTicks() {
						var i,
						    o,
						    l = this,
						    s = l.options.time,
						    u = l.dataMin,
						    d = l.dataMax;if (s.min) {
							var c = e(l, s.min);s.round && c.round(s.round), i = c.valueOf();
						}s.max && (o = e(l, s.max).valueOf());var h = l.getLabelCapacity(i || u),
						    f = s.unit || n(s.minUnit, i || u, o || d, h);l.displayFormat = s.displayFormats[f];var g = s.stepSize || a(i || u, o || d, f, h);l.ticks = t.Ticks.generators.time({ maxTicks: h, min: i, max: o, stepSize: g, unit: f, isoWeekday: s.isoWeekday }, { min: u, max: d }), l.max = r.max(l.ticks), l.min = r.min(l.ticks);
					}, getLabelForIndex: function getLabelForIndex(t, n) {
						var i = this,
						    a = i.chart.data.labels && t < i.chart.data.labels.length ? i.chart.data.labels[t] : "",
						    o = i.chart.data.datasets[n].data[t];return null !== o && "object" == (typeof o === "undefined" ? "undefined" : _typeof(o)) && (a = i.getRightValue(o)), i.options.time.tooltipFormat && (a = e(i, a).format(i.options.time.tooltipFormat)), a;
					}, tickFormatFunction: function tickFormatFunction(t, e, n) {
						var i = t.format(this.displayFormat),
						    a = this.options.ticks,
						    o = r.getValueOrDefault(a.callback, a.userCallback);return o ? o(i, e, n) : i;
					}, convertTicksToLabels: function convertTicksToLabels() {
						var t = this;t.ticksAsTimestamps = t.ticks, t.ticks = t.ticks.map(function (t) {
							return i(t);
						}).map(t.tickFormatFunction, t);
					}, getPixelForOffset: function getPixelForOffset(t) {
						var e = this,
						    n = e.max - e.min,
						    i = n ? (t - e.min) / n : 0;if (e.isHorizontal()) {
							var a = e.width * i;return e.left + Math.round(a);
						}var o = e.height * i;return e.top + Math.round(o);
					}, getPixelForValue: function getPixelForValue(t, n, i) {
						var a = this,
						    o = null;if (void 0 !== n && void 0 !== i && (o = a._parsedData.datasets[i][n]), null === o && (t && t.isValid || (t = e(a, a.getRightValue(t))), t && t.isValid && t.isValid() && (o = t.valueOf())), null !== o) return a.getPixelForOffset(o);
					}, getPixelForTick: function getPixelForTick(t) {
						return this.getPixelForOffset(this.ticksAsTimestamps[t]);
					}, getValueForPixel: function getValueForPixel(t) {
						var e = this,
						    n = e.isHorizontal() ? e.width : e.height,
						    a = (t - (e.isHorizontal() ? e.left : e.top)) / n;return i(e.min + a * (e.max - e.min));
					}, getLabelWidth: function getLabelWidth(e) {
						var n = this,
						    i = n.options.ticks,
						    a = n.ctx.measureText(e).width,
						    o = Math.cos(r.toRadians(i.maxRotation)),
						    l = Math.sin(r.toRadians(i.maxRotation)),
						    s = r.getValueOrDefault(i.fontSize, t.defaults.global.defaultFontSize);return a * o + s * l;
					}, getLabelCapacity: function getLabelCapacity(t) {
						var e = this;e.displayFormat = e.options.time.displayFormats.millisecond;var n = e.tickFormatFunction(i(t), 0, []),
						    a = e.getLabelWidth(n),
						    o = e.isHorizontal() ? e.width : e.height,
						    r = o / a;return r;
					} });t.scaleService.registerScaleType("time", u, s);
			};
		}, { 1: 1 }] }, {}, [7])(7);
});
/*
 * Swiper 2.7.6
 * Mobile touch slider and framework with hardware accelerated transitions
 *
 * http://www.idangero.us/sliders/swiper/
 *
 * Copyright 2010-2015, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under GPL & MIT
 *
 * Released on: February 11, 2015
*/
var Swiper = function Swiper(a, b) {
	"use strict";
	function c(a, b) {
		return document.querySelectorAll ? (b || document).querySelectorAll(a) : jQuery(a, b);
	}function d(a) {
		return "[object Array]" === Object.prototype.toString.apply(a) ? !0 : !1;
	}function e() {
		var a = G - J;return b.freeMode && (a = G - J), b.slidesPerView > D.slides.length && !b.centeredSlides && (a = 0), 0 > a && (a = 0), a;
	}function f() {
		function a(a) {
			var c,
			    d,
			    e = function e() {
				"undefined" != typeof D && null !== D && (void 0 !== D.imagesLoaded && D.imagesLoaded++, D.imagesLoaded === D.imagesToLoad.length && (D.reInit(), b.onImagesReady && D.fireCallback(b.onImagesReady, D)));
			};a.complete ? e() : (d = a.currentSrc || a.getAttribute("src"), d ? (c = new Image(), c.onload = e, c.onerror = e, c.src = d) : e());
		}var d = D.h.addEventListener,
		    e = "wrapper" === b.eventTarget ? D.wrapper : D.container;if (D.browser.ie10 || D.browser.ie11 ? (d(e, D.touchEvents.touchStart, p), d(document, D.touchEvents.touchMove, q), d(document, D.touchEvents.touchEnd, r)) : (D.support.touch && (d(e, "touchstart", p), d(e, "touchmove", q), d(e, "touchend", r)), b.simulateTouch && (d(e, "mousedown", p), d(document, "mousemove", q), d(document, "mouseup", r))), b.autoResize && d(window, "resize", D.resizeFix), g(), D._wheelEvent = !1, b.mousewheelControl) {
			if (void 0 !== document.onmousewheel && (D._wheelEvent = "mousewheel"), !D._wheelEvent) try {
				new WheelEvent("wheel"), D._wheelEvent = "wheel";
			} catch (f) {}D._wheelEvent || (D._wheelEvent = "DOMMouseScroll"), D._wheelEvent && d(D.container, D._wheelEvent, j);
		}if (b.keyboardControl && d(document, "keydown", i), b.updateOnImagesReady) {
			D.imagesToLoad = c("img", D.container);for (var h = 0; h < D.imagesToLoad.length; h++) {
				a(D.imagesToLoad[h]);
			}
		}
	}function g() {
		var a,
		    d = D.h.addEventListener;if (b.preventLinks) {
			var e = c("a", D.container);for (a = 0; a < e.length; a++) {
				d(e[a], "click", n);
			}
		}if (b.releaseFormElements) {
			var f = c("input, textarea, select", D.container);for (a = 0; a < f.length; a++) {
				d(f[a], D.touchEvents.touchStart, o, !0), D.support.touch && b.simulateTouch && d(f[a], "mousedown", o, !0);
			}
		}if (b.onSlideClick) for (a = 0; a < D.slides.length; a++) {
			d(D.slides[a], "click", k);
		}if (b.onSlideTouch) for (a = 0; a < D.slides.length; a++) {
			d(D.slides[a], D.touchEvents.touchStart, l);
		}
	}function h() {
		var a,
		    d = D.h.removeEventListener;if (b.onSlideClick) for (a = 0; a < D.slides.length; a++) {
			d(D.slides[a], "click", k);
		}if (b.onSlideTouch) for (a = 0; a < D.slides.length; a++) {
			d(D.slides[a], D.touchEvents.touchStart, l);
		}if (b.releaseFormElements) {
			var e = c("input, textarea, select", D.container);for (a = 0; a < e.length; a++) {
				d(e[a], D.touchEvents.touchStart, o, !0), D.support.touch && b.simulateTouch && d(e[a], "mousedown", o, !0);
			}
		}if (b.preventLinks) {
			var f = c("a", D.container);for (a = 0; a < f.length; a++) {
				d(f[a], "click", n);
			}
		}
	}function i(a) {
		var b = a.keyCode || a.charCode;if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey)) {
			if (37 === b || 39 === b || 38 === b || 40 === b) {
				for (var c = !1, d = D.h.getOffset(D.container), e = D.h.windowScroll().left, f = D.h.windowScroll().top, g = D.h.windowWidth(), h = D.h.windowHeight(), i = [[d.left, d.top], [d.left + D.width, d.top], [d.left, d.top + D.height], [d.left + D.width, d.top + D.height]], j = 0; j < i.length; j++) {
					var k = i[j];k[0] >= e && k[0] <= e + g && k[1] >= f && k[1] <= f + h && (c = !0);
				}if (!c) return;
			}N ? ((37 === b || 39 === b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 39 === b && D.swipeNext(), 37 === b && D.swipePrev()) : ((38 === b || 40 === b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 40 === b && D.swipeNext(), 38 === b && D.swipePrev());
		}
	}function j(a) {
		var c = D._wheelEvent,
		    d = 0;if (a.detail) d = -a.detail;else if ("mousewheel" === c) {
			if (b.mousewheelControlForceToAxis) {
				if (N) {
					if (!(Math.abs(a.wheelDeltaX) > Math.abs(a.wheelDeltaY))) return;d = a.wheelDeltaX;
				} else {
					if (!(Math.abs(a.wheelDeltaY) > Math.abs(a.wheelDeltaX))) return;d = a.wheelDeltaY;
				}
			} else d = a.wheelDelta;
		} else if ("DOMMouseScroll" === c) d = -a.detail;else if ("wheel" === c) if (b.mousewheelControlForceToAxis) {
			if (N) {
				if (!(Math.abs(a.deltaX) > Math.abs(a.deltaY))) return;d = -a.deltaX;
			} else {
				if (!(Math.abs(a.deltaY) > Math.abs(a.deltaX))) return;d = -a.deltaY;
			}
		} else d = Math.abs(a.deltaX) > Math.abs(a.deltaY) ? -a.deltaX : -a.deltaY;if (b.freeMode) {
			var f = D.getWrapperTranslate() + d;if (f > 0 && (f = 0), f < -e() && (f = -e()), D.setWrapperTransition(0), D.setWrapperTranslate(f), D.updateActiveSlide(f), 0 === f || f === -e()) return;
		} else new Date().getTime() - V > 60 && (0 > d ? D.swipeNext() : D.swipePrev()), V = new Date().getTime();return b.autoplay && D.stopAutoplay(!0), a.preventDefault ? a.preventDefault() : a.returnValue = !1, !1;
	}function k(a) {
		D.allowSlideClick && (m(a), D.fireCallback(b.onSlideClick, D, a));
	}function l(a) {
		m(a), D.fireCallback(b.onSlideTouch, D, a);
	}function m(a) {
		if (a.currentTarget) D.clickedSlide = a.currentTarget;else {
			var c = a.srcElement;do {
				if (c.className.indexOf(b.slideClass) > -1) break;c = c.parentNode;
			} while (c);D.clickedSlide = c;
		}D.clickedSlideIndex = D.slides.indexOf(D.clickedSlide), D.clickedSlideLoopIndex = D.clickedSlideIndex - (D.loopedSlides || 0);
	}function n(a) {
		return D.allowLinks ? void 0 : (a.preventDefault ? a.preventDefault() : a.returnValue = !1, b.preventLinksPropagation && "stopPropagation" in a && a.stopPropagation(), !1);
	}function o(a) {
		return a.stopPropagation ? a.stopPropagation() : a.returnValue = !1, !1;
	}function p(a) {
		if (b.preventLinks && (D.allowLinks = !0), D.isTouched || b.onlyExternal) return !1;var c = a.target || a.srcElement;document.activeElement && document.activeElement !== document.body && document.activeElement !== c && document.activeElement.blur();var d = "input select textarea".split(" ");if (b.noSwiping && c && t(c)) return !1;if (_ = !1, D.isTouched = !0, $ = "touchstart" === a.type, !$ && "which" in a && 3 === a.which) return D.isTouched = !1, !1;if (!$ || 1 === a.targetTouches.length) {
			D.callPlugins("onTouchStartBegin"), !$ && !D.isAndroid && d.indexOf(c.tagName.toLowerCase()) < 0 && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);var e = $ ? a.targetTouches[0].pageX : a.pageX || a.clientX,
			    f = $ ? a.targetTouches[0].pageY : a.pageY || a.clientY;D.touches.startX = D.touches.currentX = e, D.touches.startY = D.touches.currentY = f, D.touches.start = D.touches.current = N ? e : f, D.setWrapperTransition(0), D.positions.start = D.positions.current = D.getWrapperTranslate(), D.setWrapperTranslate(D.positions.start), D.times.start = new Date().getTime(), I = void 0, b.moveStartThreshold > 0 && (X = !1), b.onTouchStart && D.fireCallback(b.onTouchStart, D, a), D.callPlugins("onTouchStartEnd");
		}
	}function q(a) {
		if (D.isTouched && !b.onlyExternal && (!$ || "mousemove" !== a.type)) {
			var c = $ ? a.targetTouches[0].pageX : a.pageX || a.clientX,
			    d = $ ? a.targetTouches[0].pageY : a.pageY || a.clientY;if ("undefined" == typeof I && N && (I = !!(I || Math.abs(d - D.touches.startY) > Math.abs(c - D.touches.startX))), "undefined" != typeof I || N || (I = !!(I || Math.abs(d - D.touches.startY) < Math.abs(c - D.touches.startX))), I) return void (D.isTouched = !1);if (N) {
				if (!b.swipeToNext && c < D.touches.startX || !b.swipeToPrev && c > D.touches.startX) return;
			} else if (!b.swipeToNext && d < D.touches.startY || !b.swipeToPrev && d > D.touches.startY) return;if (a.assignedToSwiper) return void (D.isTouched = !1);if (a.assignedToSwiper = !0, b.preventLinks && (D.allowLinks = !1), b.onSlideClick && (D.allowSlideClick = !1), b.autoplay && D.stopAutoplay(!0), !$ || 1 === a.touches.length) {
				if (D.isMoved || (D.callPlugins("onTouchMoveStart"), b.loop && (D.fixLoop(), D.positions.start = D.getWrapperTranslate()), b.onTouchMoveStart && D.fireCallback(b.onTouchMoveStart, D)), D.isMoved = !0, a.preventDefault ? a.preventDefault() : a.returnValue = !1, D.touches.current = N ? c : d, D.positions.current = (D.touches.current - D.touches.start) * b.touchRatio + D.positions.start, D.positions.current > 0 && b.onResistanceBefore && D.fireCallback(b.onResistanceBefore, D, D.positions.current), D.positions.current < -e() && b.onResistanceAfter && D.fireCallback(b.onResistanceAfter, D, Math.abs(D.positions.current + e())), b.resistance && "100%" !== b.resistance) {
					var f;if (D.positions.current > 0 && (f = 1 - D.positions.current / J / 2, D.positions.current = .5 > f ? J / 2 : D.positions.current * f), D.positions.current < -e()) {
						var g = (D.touches.current - D.touches.start) * b.touchRatio + (e() + D.positions.start);f = (J + g) / J;var h = D.positions.current - g * (1 - f) / 2,
						    i = -e() - J / 2;D.positions.current = i > h || 0 >= f ? i : h;
					}
				}if (b.resistance && "100%" === b.resistance && (D.positions.current > 0 && (!b.freeMode || b.freeModeFluid) && (D.positions.current = 0), D.positions.current < -e() && (!b.freeMode || b.freeModeFluid) && (D.positions.current = -e())), !b.followFinger) return;if (b.moveStartThreshold) {
					if (Math.abs(D.touches.current - D.touches.start) > b.moveStartThreshold || X) {
						if (!X) return X = !0, void (D.touches.start = D.touches.current);D.setWrapperTranslate(D.positions.current);
					} else D.positions.current = D.positions.start;
				} else D.setWrapperTranslate(D.positions.current);return (b.freeMode || b.watchActiveIndex) && D.updateActiveSlide(D.positions.current), b.grabCursor && (D.container.style.cursor = "move", D.container.style.cursor = "grabbing", D.container.style.cursor = "-moz-grabbin", D.container.style.cursor = "-webkit-grabbing"), Y || (Y = D.touches.current), Z || (Z = new Date().getTime()), D.velocity = (D.touches.current - Y) / (new Date().getTime() - Z) / 2, Math.abs(D.touches.current - Y) < 2 && (D.velocity = 0), Y = D.touches.current, Z = new Date().getTime(), D.callPlugins("onTouchMoveEnd"), b.onTouchMove && D.fireCallback(b.onTouchMove, D, a), !1;
			}
		}
	}function r(a) {
		if (I && D.swipeReset(), !b.onlyExternal && D.isTouched) {
			D.isTouched = !1, b.grabCursor && (D.container.style.cursor = "move", D.container.style.cursor = "grab", D.container.style.cursor = "-moz-grab", D.container.style.cursor = "-webkit-grab"), D.positions.current || 0 === D.positions.current || (D.positions.current = D.positions.start), b.followFinger && D.setWrapperTranslate(D.positions.current), D.times.end = new Date().getTime(), D.touches.diff = D.touches.current - D.touches.start, D.touches.abs = Math.abs(D.touches.diff), D.positions.diff = D.positions.current - D.positions.start, D.positions.abs = Math.abs(D.positions.diff);var c = D.positions.diff,
			    d = D.positions.abs,
			    f = D.times.end - D.times.start;5 > d && 300 > f && D.allowLinks === !1 && (b.freeMode || 0 === d || D.swipeReset(), b.preventLinks && (D.allowLinks = !0), b.onSlideClick && (D.allowSlideClick = !0)), setTimeout(function () {
				"undefined" != typeof D && null !== D && (b.preventLinks && (D.allowLinks = !0), b.onSlideClick && (D.allowSlideClick = !0));
			}, 100);var g = e();if (!D.isMoved && b.freeMode) return D.isMoved = !1, b.onTouchEnd && D.fireCallback(b.onTouchEnd, D, a), void D.callPlugins("onTouchEnd");if (!D.isMoved || D.positions.current > 0 || D.positions.current < -g) return D.swipeReset(), b.onTouchEnd && D.fireCallback(b.onTouchEnd, D, a), void D.callPlugins("onTouchEnd");if (D.isMoved = !1, b.freeMode) {
				if (b.freeModeFluid) {
					var h,
					    i = 1e3 * b.momentumRatio,
					    j = D.velocity * i,
					    k = D.positions.current + j,
					    l = !1,
					    m = 20 * Math.abs(D.velocity) * b.momentumBounceRatio;-g > k && (b.momentumBounce && D.support.transitions ? (-m > k + g && (k = -g - m), h = -g, l = !0, _ = !0) : k = -g), k > 0 && (b.momentumBounce && D.support.transitions ? (k > m && (k = m), h = 0, l = !0, _ = !0) : k = 0), 0 !== D.velocity && (i = Math.abs((k - D.positions.current) / D.velocity)), D.setWrapperTranslate(k), D.setWrapperTransition(i), b.momentumBounce && l && D.wrapperTransitionEnd(function () {
						_ && (b.onMomentumBounce && D.fireCallback(b.onMomentumBounce, D), D.callPlugins("onMomentumBounce"), D.setWrapperTranslate(h), D.setWrapperTransition(300));
					}), D.updateActiveSlide(k);
				}return (!b.freeModeFluid || f >= 300) && D.updateActiveSlide(D.positions.current), b.onTouchEnd && D.fireCallback(b.onTouchEnd, D, a), void D.callPlugins("onTouchEnd");
			}H = 0 > c ? "toNext" : "toPrev", "toNext" === H && 300 >= f && (30 > d || !b.shortSwipes ? D.swipeReset() : D.swipeNext(!0, !0)), "toPrev" === H && 300 >= f && (30 > d || !b.shortSwipes ? D.swipeReset() : D.swipePrev(!0, !0));var n = 0;if ("auto" === b.slidesPerView) {
				for (var o, p = Math.abs(D.getWrapperTranslate()), q = 0, r = 0; r < D.slides.length; r++) {
					if (o = N ? D.slides[r].getWidth(!0, b.roundLengths) : D.slides[r].getHeight(!0, b.roundLengths), q += o, q > p) {
						n = o;break;
					}
				}n > J && (n = J);
			} else n = F * b.slidesPerView;"toNext" === H && f > 300 && (d >= n * b.longSwipesRatio ? D.swipeNext(!0, !0) : D.swipeReset()), "toPrev" === H && f > 300 && (d >= n * b.longSwipesRatio ? D.swipePrev(!0, !0) : D.swipeReset()), b.onTouchEnd && D.fireCallback(b.onTouchEnd, D, a), D.callPlugins("onTouchEnd");
		}
	}function s(a, b) {
		return a && a.getAttribute("class") && a.getAttribute("class").indexOf(b) > -1;
	}function t(a) {
		var c = !1;do {
			s(a, b.noSwipingClass) && (c = !0), a = a.parentElement;
		} while (!c && a.parentElement && !s(a, b.wrapperClass));return !c && s(a, b.wrapperClass) && s(a, b.noSwipingClass) && (c = !0), c;
	}function u(a, b) {
		var c,
		    d = document.createElement("div");return d.innerHTML = b, c = d.firstChild, c.className += " " + a, c.outerHTML;
	}function v(a, c, d) {
		function e() {
			var f = +new Date(),
			    l = f - g;h += i * l / (1e3 / 60), k = "toNext" === j ? h > a : a > h, k ? (D.setWrapperTranslate(Math.ceil(h)), D._DOMAnimating = !0, window.setTimeout(function () {
				e();
			}, 1e3 / 60)) : (b.onSlideChangeEnd && ("to" === c ? d.runCallbacks === !0 && D.fireCallback(b.onSlideChangeEnd, D, j) : D.fireCallback(b.onSlideChangeEnd, D, j)), D.setWrapperTranslate(a), D._DOMAnimating = !1);
		}var f = "to" === c && d.speed >= 0 ? d.speed : b.speed,
		    g = +new Date();if (D.support.transitions || !b.DOMAnimation) D.setWrapperTranslate(a), D.setWrapperTransition(f);else {
			var h = D.getWrapperTranslate(),
			    i = Math.ceil((a - h) / f * (1e3 / 60)),
			    j = h > a ? "toNext" : "toPrev",
			    k = "toNext" === j ? h > a : a > h;if (D._DOMAnimating) return;e();
		}D.updateActiveSlide(a), b.onSlideNext && "next" === c && d.runCallbacks === !0 && D.fireCallback(b.onSlideNext, D, a), b.onSlidePrev && "prev" === c && d.runCallbacks === !0 && D.fireCallback(b.onSlidePrev, D, a), b.onSlideReset && "reset" === c && d.runCallbacks === !0 && D.fireCallback(b.onSlideReset, D, a), "next" !== c && "prev" !== c && "to" !== c || d.runCallbacks !== !0 || w(c);
	}function w(a) {
		if (D.callPlugins("onSlideChangeStart"), b.onSlideChangeStart) if (b.queueStartCallbacks && D.support.transitions) {
			if (D._queueStartCallbacks) return;D._queueStartCallbacks = !0, D.fireCallback(b.onSlideChangeStart, D, a), D.wrapperTransitionEnd(function () {
				D._queueStartCallbacks = !1;
			});
		} else D.fireCallback(b.onSlideChangeStart, D, a);if (b.onSlideChangeEnd) if (D.support.transitions) {
			if (b.queueEndCallbacks) {
				if (D._queueEndCallbacks) return;D._queueEndCallbacks = !0, D.wrapperTransitionEnd(function (c) {
					D.fireCallback(b.onSlideChangeEnd, c, a);
				});
			} else D.wrapperTransitionEnd(function (c) {
				D.fireCallback(b.onSlideChangeEnd, c, a);
			});
		} else b.DOMAnimation || setTimeout(function () {
			D.fireCallback(b.onSlideChangeEnd, D, a);
		}, 10);
	}function x() {
		var a = D.paginationButtons;if (a) for (var b = 0; b < a.length; b++) {
			D.h.removeEventListener(a[b], "click", z);
		}
	}function y() {
		var a = D.paginationButtons;if (a) for (var b = 0; b < a.length; b++) {
			D.h.addEventListener(a[b], "click", z);
		}
	}function z(a) {
		for (var c, d = a.target || a.srcElement, e = D.paginationButtons, f = 0; f < e.length; f++) {
			d === e[f] && (c = f);
		}b.autoplay && D.stopAutoplay(!0), D.swipeTo(c);
	}function A() {
		ab = setTimeout(function () {
			b.loop ? (D.fixLoop(), D.swipeNext(!0, !0)) : D.swipeNext(!0, !0) || (b.autoplayStopOnLast ? (clearTimeout(ab), ab = void 0) : D.swipeTo(0)), D.wrapperTransitionEnd(function () {
				"undefined" != typeof ab && A();
			});
		}, b.autoplay);
	}function B() {
		D.calcSlides(), b.loader.slides.length > 0 && 0 === D.slides.length && D.loadSlides(), b.loop && D.createLoop(), D.init(), f(), b.pagination && D.createPagination(!0), b.loop || b.initialSlide > 0 ? D.swipeTo(b.initialSlide, 0, !1) : D.updateActiveSlide(0), b.autoplay && D.startAutoplay(), D.centerIndex = D.activeIndex, b.onSwiperCreated && D.fireCallback(b.onSwiperCreated, D), D.callPlugins("onSwiperCreated");
	}if (!document.body.outerHTML && document.body.__defineGetter__ && HTMLElement) {
		var C = HTMLElement.prototype;C.__defineGetter__ && C.__defineGetter__("outerHTML", function () {
			return new XMLSerializer().serializeToString(this);
		});
	}if (window.getComputedStyle || (window.getComputedStyle = function (a) {
		return this.el = a, this.getPropertyValue = function (b) {
			var c = /(\-([a-z]){1})/g;return "float" === b && (b = "styleFloat"), c.test(b) && (b = b.replace(c, function () {
				return arguments[2].toUpperCase();
			})), a.currentStyle[b] ? a.currentStyle[b] : null;
		}, this;
	}), Array.prototype.indexOf || (Array.prototype.indexOf = function (a, b) {
		for (var c = b || 0, d = this.length; d > c; c++) {
			if (this[c] === a) return c;
		}return -1;
	}), (document.querySelectorAll || window.jQuery) && "undefined" != typeof a && (a.nodeType || 0 !== c(a).length)) {
		var D = this;D.touches = { start: 0, startX: 0, startY: 0, current: 0, currentX: 0, currentY: 0, diff: 0, abs: 0 }, D.positions = { start: 0, abs: 0, diff: 0, current: 0 }, D.times = { start: 0, end: 0 }, D.id = new Date().getTime(), D.container = a.nodeType ? a : c(a)[0], D.isTouched = !1, D.isMoved = !1, D.activeIndex = 0, D.centerIndex = 0, D.activeLoaderIndex = 0, D.activeLoopIndex = 0, D.previousIndex = null, D.velocity = 0, D.snapGrid = [], D.slidesGrid = [], D.imagesToLoad = [], D.imagesLoaded = 0, D.wrapperLeft = 0, D.wrapperRight = 0, D.wrapperTop = 0, D.wrapperBottom = 0, D.isAndroid = navigator.userAgent.toLowerCase().indexOf("android") >= 0;var E,
		    F,
		    G,
		    H,
		    I,
		    J,
		    K = { eventTarget: "wrapper", mode: "horizontal", touchRatio: 1, speed: 300, freeMode: !1, freeModeFluid: !1, momentumRatio: 1, momentumBounce: !0, momentumBounceRatio: 1, slidesPerView: 1, slidesPerGroup: 1, slidesPerViewFit: !0, simulateTouch: !0, followFinger: !0, shortSwipes: !0, longSwipesRatio: .5, moveStartThreshold: !1, onlyExternal: !1, createPagination: !0, pagination: !1, paginationElement: "span", paginationClickable: !1, paginationAsRange: !0, resistance: !0, scrollContainer: !1, preventLinks: !0, preventLinksPropagation: !1, noSwiping: !1, noSwipingClass: "swiper-no-swiping", initialSlide: 0, keyboardControl: !1, mousewheelControl: !1, mousewheelControlForceToAxis: !1, useCSS3Transforms: !0, autoplay: !1, autoplayDisableOnInteraction: !0, autoplayStopOnLast: !1, loop: !1, loopAdditionalSlides: 0, roundLengths: !1, calculateHeight: !1, cssWidthAndHeight: !1, updateOnImagesReady: !0, releaseFormElements: !0, watchActiveIndex: !1, visibilityFullFit: !1, offsetPxBefore: 0, offsetPxAfter: 0, offsetSlidesBefore: 0, offsetSlidesAfter: 0, centeredSlides: !1, queueStartCallbacks: !1, queueEndCallbacks: !1, autoResize: !0, resizeReInit: !1, DOMAnimation: !0, loader: { slides: [], slidesHTMLType: "inner", surroundGroups: 1, logic: "reload", loadAllSlides: !1 }, swipeToPrev: !0, swipeToNext: !0, slideElement: "div", slideClass: "swiper-slide", slideActiveClass: "swiper-slide-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", wrapperClass: "swiper-wrapper", paginationElementClass: "swiper-pagination-switch", paginationActiveClass: "swiper-active-switch", paginationVisibleClass: "swiper-visible-switch" };b = b || {};for (var L in K) {
			if (L in b && "object" == _typeof(b[L])) for (var M in K[L]) {
				M in b[L] || (b[L][M] = K[L][M]);
			} else L in b || (b[L] = K[L]);
		}D.params = b, b.scrollContainer && (b.freeMode = !0, b.freeModeFluid = !0), b.loop && (b.resistance = "100%");var N = "horizontal" === b.mode,
		    O = ["mousedown", "mousemove", "mouseup"];D.browser.ie10 && (O = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), D.browser.ie11 && (O = ["pointerdown", "pointermove", "pointerup"]), D.touchEvents = { touchStart: D.support.touch || !b.simulateTouch ? "touchstart" : O[0], touchMove: D.support.touch || !b.simulateTouch ? "touchmove" : O[1], touchEnd: D.support.touch || !b.simulateTouch ? "touchend" : O[2] };for (var P = D.container.childNodes.length - 1; P >= 0; P--) {
			if (D.container.childNodes[P].className) for (var Q = D.container.childNodes[P].className.split(/\s+/), R = 0; R < Q.length; R++) {
				Q[R] === b.wrapperClass && (E = D.container.childNodes[P]);
			}
		}D.wrapper = E, D._extendSwiperSlide = function (a) {
			return a.append = function () {
				return b.loop ? a.insertAfter(D.slides.length - D.loopedSlides) : (D.wrapper.appendChild(a), D.reInit()), a;
			}, a.prepend = function () {
				return b.loop ? (D.wrapper.insertBefore(a, D.slides[D.loopedSlides]), D.removeLoopedSlides(), D.calcSlides(), D.createLoop()) : D.wrapper.insertBefore(a, D.wrapper.firstChild), D.reInit(), a;
			}, a.insertAfter = function (c) {
				if ("undefined" == typeof c) return !1;var d;return b.loop ? (d = D.slides[c + 1 + D.loopedSlides], d ? D.wrapper.insertBefore(a, d) : D.wrapper.appendChild(a), D.removeLoopedSlides(), D.calcSlides(), D.createLoop()) : (d = D.slides[c + 1], D.wrapper.insertBefore(a, d)), D.reInit(), a;
			}, a.clone = function () {
				return D._extendSwiperSlide(a.cloneNode(!0));
			}, a.remove = function () {
				D.wrapper.removeChild(a), D.reInit();
			}, a.html = function (b) {
				return "undefined" == typeof b ? a.innerHTML : (a.innerHTML = b, a);
			}, a.index = function () {
				for (var b, c = D.slides.length - 1; c >= 0; c--) {
					a === D.slides[c] && (b = c);
				}return b;
			}, a.isActive = function () {
				return a.index() === D.activeIndex ? !0 : !1;
			}, a.swiperSlideDataStorage || (a.swiperSlideDataStorage = {}), a.getData = function (b) {
				return a.swiperSlideDataStorage[b];
			}, a.setData = function (b, c) {
				return a.swiperSlideDataStorage[b] = c, a;
			}, a.data = function (b, c) {
				return "undefined" == typeof c ? a.getAttribute("data-" + b) : (a.setAttribute("data-" + b, c), a);
			}, a.getWidth = function (b, c) {
				return D.h.getWidth(a, b, c);
			}, a.getHeight = function (b, c) {
				return D.h.getHeight(a, b, c);
			}, a.getOffset = function () {
				return D.h.getOffset(a);
			}, a;
		}, D.calcSlides = function (a) {
			var c = D.slides ? D.slides.length : !1;D.slides = [], D.displaySlides = [];for (var d = 0; d < D.wrapper.childNodes.length; d++) {
				if (D.wrapper.childNodes[d].className) for (var e = D.wrapper.childNodes[d].className, f = e.split(/\s+/), i = 0; i < f.length; i++) {
					f[i] === b.slideClass && D.slides.push(D.wrapper.childNodes[d]);
				}
			}for (d = D.slides.length - 1; d >= 0; d--) {
				D._extendSwiperSlide(D.slides[d]);
			}c !== !1 && (c !== D.slides.length || a) && (h(), g(), D.updateActiveSlide(), D.params.pagination && D.createPagination(), D.callPlugins("numberOfSlidesChanged"));
		}, D.createSlide = function (a, c, d) {
			c = c || D.params.slideClass, d = d || b.slideElement;var e = document.createElement(d);return e.innerHTML = a || "", e.className = c, D._extendSwiperSlide(e);
		}, D.appendSlide = function (a, b, c) {
			return a ? a.nodeType ? D._extendSwiperSlide(a).append() : D.createSlide(a, b, c).append() : void 0;
		}, D.prependSlide = function (a, b, c) {
			return a ? a.nodeType ? D._extendSwiperSlide(a).prepend() : D.createSlide(a, b, c).prepend() : void 0;
		}, D.insertSlideAfter = function (a, b, c, d) {
			return "undefined" == typeof a ? !1 : b.nodeType ? D._extendSwiperSlide(b).insertAfter(a) : D.createSlide(b, c, d).insertAfter(a);
		}, D.removeSlide = function (a) {
			if (D.slides[a]) {
				if (b.loop) {
					if (!D.slides[a + D.loopedSlides]) return !1;D.slides[a + D.loopedSlides].remove(), D.removeLoopedSlides(), D.calcSlides(), D.createLoop();
				} else D.slides[a].remove();return !0;
			}return !1;
		}, D.removeLastSlide = function () {
			return D.slides.length > 0 ? (b.loop ? (D.slides[D.slides.length - 1 - D.loopedSlides].remove(), D.removeLoopedSlides(), D.calcSlides(), D.createLoop()) : D.slides[D.slides.length - 1].remove(), !0) : !1;
		}, D.removeAllSlides = function () {
			for (var a = D.slides.length, b = D.slides.length - 1; b >= 0; b--) {
				D.slides[b].remove(), b === a - 1 && D.setWrapperTranslate(0);
			}
		}, D.getSlide = function (a) {
			return D.slides[a];
		}, D.getLastSlide = function () {
			return D.slides[D.slides.length - 1];
		}, D.getFirstSlide = function () {
			return D.slides[0];
		}, D.activeSlide = function () {
			return D.slides[D.activeIndex];
		}, D.fireCallback = function () {
			var a = arguments[0];if ("[object Array]" === Object.prototype.toString.call(a)) for (var c = 0; c < a.length; c++) {
				"function" == typeof a[c] && a[c](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
			} else "[object String]" === Object.prototype.toString.call(a) ? b["on" + a] && D.fireCallback(b["on" + a], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]) : a(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
		}, D.addCallback = function (a, b) {
			var c,
			    e = this;return e.params["on" + a] ? d(this.params["on" + a]) ? this.params["on" + a].push(b) : "function" == typeof this.params["on" + a] ? (c = this.params["on" + a], this.params["on" + a] = [], this.params["on" + a].push(c), this.params["on" + a].push(b)) : void 0 : (this.params["on" + a] = [], this.params["on" + a].push(b));
		}, D.removeCallbacks = function (a) {
			D.params["on" + a] && (D.params["on" + a] = null);
		};var S = [];for (var T in D.plugins) {
			if (b[T]) {
				var U = D.plugins[T](D, b[T]);U && S.push(U);
			}
		}D.callPlugins = function (a, b) {
			b || (b = {});for (var c = 0; c < S.length; c++) {
				a in S[c] && S[c][a](b);
			}
		}, !D.browser.ie10 && !D.browser.ie11 || b.onlyExternal || D.wrapper.classList.add("swiper-wp8-" + (N ? "horizontal" : "vertical")), b.freeMode && (D.container.className += " swiper-free-mode"), D.initialized = !1, D.init = function (a, c) {
			var d = D.h.getWidth(D.container, !1, b.roundLengths),
			    e = D.h.getHeight(D.container, !1, b.roundLengths);if (d !== D.width || e !== D.height || a) {
				D.width = d, D.height = e;var f, g, h, i, j, k, l;J = N ? d : e;var m = D.wrapper;if (a && D.calcSlides(c), "auto" === b.slidesPerView) {
					var n = 0,
					    o = 0;b.slidesOffset > 0 && (m.style.paddingLeft = "", m.style.paddingRight = "", m.style.paddingTop = "", m.style.paddingBottom = ""), m.style.width = "", m.style.height = "", b.offsetPxBefore > 0 && (N ? D.wrapperLeft = b.offsetPxBefore : D.wrapperTop = b.offsetPxBefore), b.offsetPxAfter > 0 && (N ? D.wrapperRight = b.offsetPxAfter : D.wrapperBottom = b.offsetPxAfter), b.centeredSlides && (N ? (D.wrapperLeft = (J - this.slides[0].getWidth(!0, b.roundLengths)) / 2, D.wrapperRight = (J - D.slides[D.slides.length - 1].getWidth(!0, b.roundLengths)) / 2) : (D.wrapperTop = (J - D.slides[0].getHeight(!0, b.roundLengths)) / 2, D.wrapperBottom = (J - D.slides[D.slides.length - 1].getHeight(!0, b.roundLengths)) / 2)), N ? (D.wrapperLeft >= 0 && (m.style.paddingLeft = D.wrapperLeft + "px"), D.wrapperRight >= 0 && (m.style.paddingRight = D.wrapperRight + "px")) : (D.wrapperTop >= 0 && (m.style.paddingTop = D.wrapperTop + "px"), D.wrapperBottom >= 0 && (m.style.paddingBottom = D.wrapperBottom + "px")), k = 0;var p = 0;for (D.snapGrid = [], D.slidesGrid = [], h = 0, l = 0; l < D.slides.length; l++) {
						f = D.slides[l].getWidth(!0, b.roundLengths), g = D.slides[l].getHeight(!0, b.roundLengths), b.calculateHeight && (h = Math.max(h, g));var q = N ? f : g;if (b.centeredSlides) {
							var r = l === D.slides.length - 1 ? 0 : D.slides[l + 1].getWidth(!0, b.roundLengths),
							    s = l === D.slides.length - 1 ? 0 : D.slides[l + 1].getHeight(!0, b.roundLengths),
							    t = N ? r : s;if (q > J) {
								if (b.slidesPerViewFit) D.snapGrid.push(k + D.wrapperLeft), D.snapGrid.push(k + q - J + D.wrapperLeft);else for (var u = 0; u <= Math.floor(q / (J + D.wrapperLeft)); u++) {
									D.snapGrid.push(0 === u ? k + D.wrapperLeft : k + D.wrapperLeft + J * u);
								}D.slidesGrid.push(k + D.wrapperLeft);
							} else D.snapGrid.push(p), D.slidesGrid.push(p);p += q / 2 + t / 2;
						} else {
							if (q > J) {
								if (b.slidesPerViewFit) D.snapGrid.push(k), D.snapGrid.push(k + q - J);else if (0 !== J) for (var v = 0; v <= Math.floor(q / J); v++) {
									D.snapGrid.push(k + J * v);
								} else D.snapGrid.push(k);
							} else D.snapGrid.push(k);D.slidesGrid.push(k);
						}k += q, n += f, o += g;
					}b.calculateHeight && (D.height = h), N ? (G = n + D.wrapperRight + D.wrapperLeft, b.cssWidthAndHeight && "height" !== b.cssWidthAndHeight || (m.style.width = n + "px"), b.cssWidthAndHeight && "width" !== b.cssWidthAndHeight || (m.style.height = D.height + "px")) : (b.cssWidthAndHeight && "height" !== b.cssWidthAndHeight || (m.style.width = D.width + "px"), b.cssWidthAndHeight && "width" !== b.cssWidthAndHeight || (m.style.height = o + "px"), G = o + D.wrapperTop + D.wrapperBottom);
				} else if (b.scrollContainer) m.style.width = "", m.style.height = "", i = D.slides[0].getWidth(!0, b.roundLengths), j = D.slides[0].getHeight(!0, b.roundLengths), G = N ? i : j, m.style.width = i + "px", m.style.height = j + "px", F = N ? i : j;else {
					if (b.calculateHeight) {
						for (h = 0, j = 0, N || (D.container.style.height = ""), m.style.height = "", l = 0; l < D.slides.length; l++) {
							D.slides[l].style.height = "", h = Math.max(D.slides[l].getHeight(!0), h), N || (j += D.slides[l].getHeight(!0));
						}g = h, D.height = g, N ? j = g : (J = g, D.container.style.height = J + "px");
					} else g = N ? D.height : D.height / b.slidesPerView, b.roundLengths && (g = Math.ceil(g)), j = N ? D.height : D.slides.length * g;for (f = N ? D.width / b.slidesPerView : D.width, b.roundLengths && (f = Math.ceil(f)), i = N ? D.slides.length * f : D.width, F = N ? f : g, b.offsetSlidesBefore > 0 && (N ? D.wrapperLeft = F * b.offsetSlidesBefore : D.wrapperTop = F * b.offsetSlidesBefore), b.offsetSlidesAfter > 0 && (N ? D.wrapperRight = F * b.offsetSlidesAfter : D.wrapperBottom = F * b.offsetSlidesAfter), b.offsetPxBefore > 0 && (N ? D.wrapperLeft = b.offsetPxBefore : D.wrapperTop = b.offsetPxBefore), b.offsetPxAfter > 0 && (N ? D.wrapperRight = b.offsetPxAfter : D.wrapperBottom = b.offsetPxAfter), b.centeredSlides && (N ? (D.wrapperLeft = (J - F) / 2, D.wrapperRight = (J - F) / 2) : (D.wrapperTop = (J - F) / 2, D.wrapperBottom = (J - F) / 2)), N ? (D.wrapperLeft > 0 && (m.style.paddingLeft = D.wrapperLeft + "px"), D.wrapperRight > 0 && (m.style.paddingRight = D.wrapperRight + "px")) : (D.wrapperTop > 0 && (m.style.paddingTop = D.wrapperTop + "px"), D.wrapperBottom > 0 && (m.style.paddingBottom = D.wrapperBottom + "px")), G = N ? i + D.wrapperRight + D.wrapperLeft : j + D.wrapperTop + D.wrapperBottom, parseFloat(i) > 0 && (!b.cssWidthAndHeight || "height" === b.cssWidthAndHeight) && (m.style.width = i + "px"), parseFloat(j) > 0 && (!b.cssWidthAndHeight || "width" === b.cssWidthAndHeight) && (m.style.height = j + "px"), k = 0, D.snapGrid = [], D.slidesGrid = [], l = 0; l < D.slides.length; l++) {
						D.snapGrid.push(k), D.slidesGrid.push(k), k += F, parseFloat(f) > 0 && (!b.cssWidthAndHeight || "height" === b.cssWidthAndHeight) && (D.slides[l].style.width = f + "px"), parseFloat(g) > 0 && (!b.cssWidthAndHeight || "width" === b.cssWidthAndHeight) && (D.slides[l].style.height = g + "px");
					}
				}D.initialized ? (D.callPlugins("onInit"), b.onInit && D.fireCallback(b.onInit, D)) : (D.callPlugins("onFirstInit"), b.onFirstInit && D.fireCallback(b.onFirstInit, D)), D.initialized = !0;
			}
		}, D.reInit = function (a) {
			D.init(!0, a);
		}, D.resizeFix = function (a) {
			D.callPlugins("beforeResizeFix"), D.init(b.resizeReInit || a), b.freeMode ? D.getWrapperTranslate() < -e() && (D.setWrapperTransition(0), D.setWrapperTranslate(-e())) : (D.swipeTo(b.loop ? D.activeLoopIndex : D.activeIndex, 0, !1), b.autoplay && (D.support.transitions && "undefined" != typeof ab ? "undefined" != typeof ab && (clearTimeout(ab), ab = void 0, D.startAutoplay()) : "undefined" != typeof bb && (clearInterval(bb), bb = void 0, D.startAutoplay()))), D.callPlugins("afterResizeFix");
		}, D.destroy = function (a) {
			var c = D.h.removeEventListener,
			    d = "wrapper" === b.eventTarget ? D.wrapper : D.container;if (D.browser.ie10 || D.browser.ie11 ? (c(d, D.touchEvents.touchStart, p), c(document, D.touchEvents.touchMove, q), c(document, D.touchEvents.touchEnd, r)) : (D.support.touch && (c(d, "touchstart", p), c(d, "touchmove", q), c(d, "touchend", r)), b.simulateTouch && (c(d, "mousedown", p), c(document, "mousemove", q), c(document, "mouseup", r))), b.autoResize && c(window, "resize", D.resizeFix), h(), b.paginationClickable && x(), b.mousewheelControl && D._wheelEvent && c(D.container, D._wheelEvent, j), b.keyboardControl && c(document, "keydown", i), b.autoplay && D.stopAutoplay(), a) {
				D.wrapper.removeAttribute("style");for (var e = 0; e < D.slides.length; e++) {
					D.slides[e].removeAttribute("style");
				}
			}D.callPlugins("onDestroy"), window.jQuery && window.jQuery(D.container).data("swiper") && window.jQuery(D.container).removeData("swiper"), window.Zepto && window.Zepto(D.container).data("swiper") && window.Zepto(D.container).removeData("swiper"), D = null;
		}, D.disableKeyboardControl = function () {
			b.keyboardControl = !1, D.h.removeEventListener(document, "keydown", i);
		}, D.enableKeyboardControl = function () {
			b.keyboardControl = !0, D.h.addEventListener(document, "keydown", i);
		};var V = new Date().getTime();if (D.disableMousewheelControl = function () {
			return D._wheelEvent ? (b.mousewheelControl = !1, D.h.removeEventListener(D.container, D._wheelEvent, j), !0) : !1;
		}, D.enableMousewheelControl = function () {
			return D._wheelEvent ? (b.mousewheelControl = !0, D.h.addEventListener(D.container, D._wheelEvent, j), !0) : !1;
		}, b.grabCursor) {
			var W = D.container.style;W.cursor = "move", W.cursor = "grab", W.cursor = "-moz-grab", W.cursor = "-webkit-grab";
		}D.allowSlideClick = !0, D.allowLinks = !0;var X,
		    Y,
		    Z,
		    $ = !1,
		    _ = !0;D.swipeNext = function (a, c) {
			"undefined" == typeof a && (a = !0), !c && b.loop && D.fixLoop(), !c && b.autoplay && D.stopAutoplay(!0), D.callPlugins("onSwipeNext");var d = D.getWrapperTranslate().toFixed(2),
			    f = d;if ("auto" === b.slidesPerView) {
				for (var g = 0; g < D.snapGrid.length; g++) {
					if (-d >= D.snapGrid[g].toFixed(2) && -d < D.snapGrid[g + 1].toFixed(2)) {
						f = -D.snapGrid[g + 1];break;
					}
				}
			} else {
				var h = F * b.slidesPerGroup;f = -(Math.floor(Math.abs(d) / Math.floor(h)) * h + h);
			}return f < -e() && (f = -e()), f === d ? !1 : (v(f, "next", { runCallbacks: a }), !0);
		}, D.swipePrev = function (a, c) {
			"undefined" == typeof a && (a = !0), !c && b.loop && D.fixLoop(), !c && b.autoplay && D.stopAutoplay(!0), D.callPlugins("onSwipePrev");var d,
			    e = Math.ceil(D.getWrapperTranslate());if ("auto" === b.slidesPerView) {
				d = 0;for (var f = 1; f < D.snapGrid.length; f++) {
					if (-e === D.snapGrid[f]) {
						d = -D.snapGrid[f - 1];break;
					}if (-e > D.snapGrid[f] && -e < D.snapGrid[f + 1]) {
						d = -D.snapGrid[f];break;
					}
				}
			} else {
				var g = F * b.slidesPerGroup;d = -(Math.ceil(-e / g) - 1) * g;
			}return d > 0 && (d = 0), d === e ? !1 : (v(d, "prev", { runCallbacks: a }), !0);
		}, D.swipeReset = function (a) {
			"undefined" == typeof a && (a = !0), D.callPlugins("onSwipeReset");{
				var c,
				    d = D.getWrapperTranslate(),
				    f = F * b.slidesPerGroup;-e();
			}if ("auto" === b.slidesPerView) {
				c = 0;for (var g = 0; g < D.snapGrid.length; g++) {
					if (-d === D.snapGrid[g]) return;if (-d >= D.snapGrid[g] && -d < D.snapGrid[g + 1]) {
						c = D.positions.diff > 0 ? -D.snapGrid[g + 1] : -D.snapGrid[g];break;
					}
				}-d >= D.snapGrid[D.snapGrid.length - 1] && (c = -D.snapGrid[D.snapGrid.length - 1]), d <= -e() && (c = -e());
			} else c = 0 > d ? Math.round(d / f) * f : 0, d <= -e() && (c = -e());return b.scrollContainer && (c = 0 > d ? d : 0), c < -e() && (c = -e()), b.scrollContainer && J > F && (c = 0), c === d ? !1 : (v(c, "reset", { runCallbacks: a }), !0);
		}, D.swipeTo = function (a, c, d) {
			a = parseInt(a, 10), D.callPlugins("onSwipeTo", { index: a, speed: c }), b.loop && (a += D.loopedSlides);var f = D.getWrapperTranslate();if (!(!isFinite(a) || a > D.slides.length - 1 || 0 > a)) {
				var g;return g = "auto" === b.slidesPerView ? -D.slidesGrid[a] : -a * F, g < -e() && (g = -e()), g === f ? !1 : ("undefined" == typeof d && (d = !0), v(g, "to", { index: a, speed: c, runCallbacks: d }), !0);
			}
		}, D._queueStartCallbacks = !1, D._queueEndCallbacks = !1, D.updateActiveSlide = function (a) {
			if (D.initialized && 0 !== D.slides.length) {
				D.previousIndex = D.activeIndex, "undefined" == typeof a && (a = D.getWrapperTranslate()), a > 0 && (a = 0);var c;if ("auto" === b.slidesPerView) {
					if (D.activeIndex = D.slidesGrid.indexOf(-a), D.activeIndex < 0) {
						for (c = 0; c < D.slidesGrid.length - 1 && !(-a > D.slidesGrid[c] && -a < D.slidesGrid[c + 1]); c++) {}var d = Math.abs(D.slidesGrid[c] + a),
						    e = Math.abs(D.slidesGrid[c + 1] + a);
						D.activeIndex = e >= d ? c : c + 1;
					}
				} else D.activeIndex = Math[b.visibilityFullFit ? "ceil" : "round"](-a / F);if (D.activeIndex === D.slides.length && (D.activeIndex = D.slides.length - 1), D.activeIndex < 0 && (D.activeIndex = 0), D.slides[D.activeIndex]) {
					if (D.calcVisibleSlides(a), D.support.classList) {
						var f;for (c = 0; c < D.slides.length; c++) {
							f = D.slides[c], f.classList.remove(b.slideActiveClass), D.visibleSlides.indexOf(f) >= 0 ? f.classList.add(b.slideVisibleClass) : f.classList.remove(b.slideVisibleClass);
						}D.slides[D.activeIndex].classList.add(b.slideActiveClass);
					} else {
						var g = new RegExp("\\s*" + b.slideActiveClass),
						    h = new RegExp("\\s*" + b.slideVisibleClass);for (c = 0; c < D.slides.length; c++) {
							D.slides[c].className = D.slides[c].className.replace(g, "").replace(h, ""), D.visibleSlides.indexOf(D.slides[c]) >= 0 && (D.slides[c].className += " " + b.slideVisibleClass);
						}D.slides[D.activeIndex].className += " " + b.slideActiveClass;
					}if (b.loop) {
						var i = D.loopedSlides;D.activeLoopIndex = D.activeIndex - i, D.activeLoopIndex >= D.slides.length - 2 * i && (D.activeLoopIndex = D.slides.length - 2 * i - D.activeLoopIndex), D.activeLoopIndex < 0 && (D.activeLoopIndex = D.slides.length - 2 * i + D.activeLoopIndex), D.activeLoopIndex < 0 && (D.activeLoopIndex = 0);
					} else D.activeLoopIndex = D.activeIndex;b.pagination && D.updatePagination(a);
				}
			}
		}, D.createPagination = function (a) {
			if (b.paginationClickable && D.paginationButtons && x(), D.paginationContainer = b.pagination.nodeType ? b.pagination : c(b.pagination)[0], b.createPagination) {
				var d = "",
				    e = D.slides.length,
				    f = e;b.loop && (f -= 2 * D.loopedSlides);for (var g = 0; f > g; g++) {
					d += "<" + b.paginationElement + ' class="' + b.paginationElementClass + '"></' + b.paginationElement + ">";
				}D.paginationContainer.innerHTML = d;
			}D.paginationButtons = c("." + b.paginationElementClass, D.paginationContainer), a || D.updatePagination(), D.callPlugins("onCreatePagination"), b.paginationClickable && y();
		}, D.updatePagination = function (a) {
			if (b.pagination && !(D.slides.length < 1)) {
				var d = c("." + b.paginationActiveClass, D.paginationContainer);if (d) {
					var e = D.paginationButtons;if (0 !== e.length) {
						for (var f = 0; f < e.length; f++) {
							e[f].className = b.paginationElementClass;
						}var g = b.loop ? D.loopedSlides : 0;if (b.paginationAsRange) {
							D.visibleSlides || D.calcVisibleSlides(a);var h,
							    i = [];for (h = 0; h < D.visibleSlides.length; h++) {
								var j = D.slides.indexOf(D.visibleSlides[h]) - g;b.loop && 0 > j && (j = D.slides.length - 2 * D.loopedSlides + j), b.loop && j >= D.slides.length - 2 * D.loopedSlides && (j = D.slides.length - 2 * D.loopedSlides - j, j = Math.abs(j)), i.push(j);
							}for (h = 0; h < i.length; h++) {
								e[i[h]] && (e[i[h]].className += " " + b.paginationVisibleClass);
							}b.loop ? void 0 !== e[D.activeLoopIndex] && (e[D.activeLoopIndex].className += " " + b.paginationActiveClass) : e[D.activeIndex] && (e[D.activeIndex].className += " " + b.paginationActiveClass);
						} else b.loop ? e[D.activeLoopIndex] && (e[D.activeLoopIndex].className += " " + b.paginationActiveClass + " " + b.paginationVisibleClass) : e[D.activeIndex] && (e[D.activeIndex].className += " " + b.paginationActiveClass + " " + b.paginationVisibleClass);
					}
				}
			}
		}, D.calcVisibleSlides = function (a) {
			var c = [],
			    d = 0,
			    e = 0,
			    f = 0;N && D.wrapperLeft > 0 && (a += D.wrapperLeft), !N && D.wrapperTop > 0 && (a += D.wrapperTop);for (var g = 0; g < D.slides.length; g++) {
				d += e, e = "auto" === b.slidesPerView ? N ? D.h.getWidth(D.slides[g], !0, b.roundLengths) : D.h.getHeight(D.slides[g], !0, b.roundLengths) : F, f = d + e;var h = !1;b.visibilityFullFit ? (d >= -a && -a + J >= f && (h = !0), -a >= d && f >= -a + J && (h = !0)) : (f > -a && -a + J >= f && (h = !0), d >= -a && -a + J > d && (h = !0), -a > d && f > -a + J && (h = !0)), h && c.push(D.slides[g]);
			}0 === c.length && (c = [D.slides[D.activeIndex]]), D.visibleSlides = c;
		};var ab, bb;D.startAutoplay = function () {
			if (D.support.transitions) {
				if ("undefined" != typeof ab) return !1;if (!b.autoplay) return;D.callPlugins("onAutoplayStart"), b.onAutoplayStart && D.fireCallback(b.onAutoplayStart, D), A();
			} else {
				if ("undefined" != typeof bb) return !1;if (!b.autoplay) return;D.callPlugins("onAutoplayStart"), b.onAutoplayStart && D.fireCallback(b.onAutoplayStart, D), bb = setInterval(function () {
					b.loop ? (D.fixLoop(), D.swipeNext(!0, !0)) : D.swipeNext(!0, !0) || (b.autoplayStopOnLast ? (clearInterval(bb), bb = void 0) : D.swipeTo(0));
				}, b.autoplay);
			}
		}, D.stopAutoplay = function (a) {
			if (D.support.transitions) {
				if (!ab) return;ab && clearTimeout(ab), ab = void 0, a && !b.autoplayDisableOnInteraction && D.wrapperTransitionEnd(function () {
					A();
				}), D.callPlugins("onAutoplayStop"), b.onAutoplayStop && D.fireCallback(b.onAutoplayStop, D);
			} else bb && clearInterval(bb), bb = void 0, D.callPlugins("onAutoplayStop"), b.onAutoplayStop && D.fireCallback(b.onAutoplayStop, D);
		}, D.loopCreated = !1, D.removeLoopedSlides = function () {
			if (D.loopCreated) for (var a = 0; a < D.slides.length; a++) {
				D.slides[a].getData("looped") === !0 && D.wrapper.removeChild(D.slides[a]);
			}
		}, D.createLoop = function () {
			if (0 !== D.slides.length) {
				D.loopedSlides = "auto" === b.slidesPerView ? b.loopedSlides || 1 : Math.floor(b.slidesPerView) + b.loopAdditionalSlides, D.loopedSlides > D.slides.length && (D.loopedSlides = D.slides.length);var a,
				    c = "",
				    d = "",
				    e = "",
				    f = D.slides.length,
				    g = Math.floor(D.loopedSlides / f),
				    h = D.loopedSlides % f;for (a = 0; g * f > a; a++) {
					var i = a;if (a >= f) {
						var j = Math.floor(a / f);i = a - f * j;
					}e += D.slides[i].outerHTML;
				}for (a = 0; h > a; a++) {
					d += u(b.slideDuplicateClass, D.slides[a].outerHTML);
				}for (a = f - h; f > a; a++) {
					c += u(b.slideDuplicateClass, D.slides[a].outerHTML);
				}var k = c + e + E.innerHTML + e + d;for (E.innerHTML = k, D.loopCreated = !0, D.calcSlides(), a = 0; a < D.slides.length; a++) {
					(a < D.loopedSlides || a >= D.slides.length - D.loopedSlides) && D.slides[a].setData("looped", !0);
				}D.callPlugins("onCreateLoop");
			}
		}, D.fixLoop = function () {
			var a;D.activeIndex < D.loopedSlides ? (a = D.slides.length - 3 * D.loopedSlides + D.activeIndex, D.swipeTo(a, 0, !1)) : ("auto" === b.slidesPerView && D.activeIndex >= 2 * D.loopedSlides || D.activeIndex > D.slides.length - 2 * b.slidesPerView) && (a = -D.slides.length + D.activeIndex + D.loopedSlides, D.swipeTo(a, 0, !1));
		}, D.loadSlides = function () {
			var a = "";D.activeLoaderIndex = 0;for (var c = b.loader.slides, d = b.loader.loadAllSlides ? c.length : b.slidesPerView * (1 + b.loader.surroundGroups), e = 0; d > e; e++) {
				a += "outer" === b.loader.slidesHTMLType ? c[e] : "<" + b.slideElement + ' class="' + b.slideClass + '" data-swiperindex="' + e + '">' + c[e] + "</" + b.slideElement + ">";
			}D.wrapper.innerHTML = a, D.calcSlides(!0), b.loader.loadAllSlides || D.wrapperTransitionEnd(D.reloadSlides, !0);
		}, D.reloadSlides = function () {
			var a = b.loader.slides,
			    c = parseInt(D.activeSlide().data("swiperindex"), 10);if (!(0 > c || c > a.length - 1)) {
				D.activeLoaderIndex = c;var d = Math.max(0, c - b.slidesPerView * b.loader.surroundGroups),
				    e = Math.min(c + b.slidesPerView * (1 + b.loader.surroundGroups) - 1, a.length - 1);if (c > 0) {
					var f = -F * (c - d);D.setWrapperTranslate(f), D.setWrapperTransition(0);
				}var g;if ("reload" === b.loader.logic) {
					D.wrapper.innerHTML = "";var h = "";for (g = d; e >= g; g++) {
						h += "outer" === b.loader.slidesHTMLType ? a[g] : "<" + b.slideElement + ' class="' + b.slideClass + '" data-swiperindex="' + g + '">' + a[g] + "</" + b.slideElement + ">";
					}D.wrapper.innerHTML = h;
				} else {
					var i = 1e3,
					    j = 0;for (g = 0; g < D.slides.length; g++) {
						var k = D.slides[g].data("swiperindex");d > k || k > e ? D.wrapper.removeChild(D.slides[g]) : (i = Math.min(k, i), j = Math.max(k, j));
					}for (g = d; e >= g; g++) {
						var l;i > g && (l = document.createElement(b.slideElement), l.className = b.slideClass, l.setAttribute("data-swiperindex", g), l.innerHTML = a[g], D.wrapper.insertBefore(l, D.wrapper.firstChild)), g > j && (l = document.createElement(b.slideElement), l.className = b.slideClass, l.setAttribute("data-swiperindex", g), l.innerHTML = a[g], D.wrapper.appendChild(l));
					}
				}D.reInit(!0);
			}
		}, B();
	}
};Swiper.prototype = { plugins: {}, wrapperTransitionEnd: function wrapperTransitionEnd(a, b) {
		"use strict";
		function c(h) {
			if (h.target === f && (a(e), e.params.queueEndCallbacks && (e._queueEndCallbacks = !1), !b)) for (d = 0; d < g.length; d++) {
				e.h.removeEventListener(f, g[d], c);
			}
		}var d,
		    e = this,
		    f = e.wrapper,
		    g = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"];if (a) for (d = 0; d < g.length; d++) {
			e.h.addEventListener(f, g[d], c);
		}
	}, getWrapperTranslate: function getWrapperTranslate(a) {
		"use strict";
		var b,
		    c,
		    d,
		    e,
		    f = this.wrapper;return "undefined" == typeof a && (a = "horizontal" === this.params.mode ? "x" : "y"), this.support.transforms && this.params.useCSS3Transforms ? (d = window.getComputedStyle(f, null), window.WebKitCSSMatrix ? e = new WebKitCSSMatrix("none" === d.webkitTransform ? "" : d.webkitTransform) : (e = d.MozTransform || d.OTransform || d.MsTransform || d.msTransform || d.transform || d.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), b = e.toString().split(",")), "x" === a && (c = window.WebKitCSSMatrix ? e.m41 : parseFloat(16 === b.length ? b[12] : b[4])), "y" === a && (c = window.WebKitCSSMatrix ? e.m42 : parseFloat(16 === b.length ? b[13] : b[5]))) : ("x" === a && (c = parseFloat(f.style.left, 10) || 0), "y" === a && (c = parseFloat(f.style.top, 10) || 0)), c || 0;
	}, setWrapperTranslate: function setWrapperTranslate(a, b, c) {
		"use strict";
		var d,
		    e = this.wrapper.style,
		    f = { x: 0, y: 0, z: 0 };3 === arguments.length ? (f.x = a, f.y = b, f.z = c) : ("undefined" == typeof b && (b = "horizontal" === this.params.mode ? "x" : "y"), f[b] = a), this.support.transforms && this.params.useCSS3Transforms ? (d = this.support.transforms3d ? "translate3d(" + f.x + "px, " + f.y + "px, " + f.z + "px)" : "translate(" + f.x + "px, " + f.y + "px)", e.webkitTransform = e.MsTransform = e.msTransform = e.MozTransform = e.OTransform = e.transform = d) : (e.left = f.x + "px", e.top = f.y + "px"), this.callPlugins("onSetWrapperTransform", f), this.params.onSetWrapperTransform && this.fireCallback(this.params.onSetWrapperTransform, this, f);
	}, setWrapperTransition: function setWrapperTransition(a) {
		"use strict";
		var b = this.wrapper.style;b.webkitTransitionDuration = b.MsTransitionDuration = b.msTransitionDuration = b.MozTransitionDuration = b.OTransitionDuration = b.transitionDuration = a / 1e3 + "s", this.callPlugins("onSetWrapperTransition", { duration: a }), this.params.onSetWrapperTransition && this.fireCallback(this.params.onSetWrapperTransition, this, a);
	}, h: { getWidth: function getWidth(a, b, c) {
			"use strict";
			var d = window.getComputedStyle(a, null).getPropertyValue("width"),
			    e = parseFloat(d);return (isNaN(e) || d.indexOf("%") > 0 || 0 > e) && (e = a.offsetWidth - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-left")) - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-right"))), b && (e += parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-left")) + parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-right"))), c ? Math.ceil(e) : e;
		}, getHeight: function getHeight(a, b, c) {
			"use strict";
			if (b) return a.offsetHeight;var d = window.getComputedStyle(a, null).getPropertyValue("height"),
			    e = parseFloat(d);return (isNaN(e) || d.indexOf("%") > 0 || 0 > e) && (e = a.offsetHeight - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-top")) - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-bottom"))), b && (e += parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-top")) + parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-bottom"))), c ? Math.ceil(e) : e;
		}, getOffset: function getOffset(a) {
			"use strict";
			var b = a.getBoundingClientRect(),
			    c = document.body,
			    d = a.clientTop || c.clientTop || 0,
			    e = a.clientLeft || c.clientLeft || 0,
			    f = window.pageYOffset || a.scrollTop,
			    g = window.pageXOffset || a.scrollLeft;return document.documentElement && !window.pageYOffset && (f = document.documentElement.scrollTop, g = document.documentElement.scrollLeft), { top: b.top + f - d, left: b.left + g - e };
		}, windowWidth: function windowWidth() {
			"use strict";
			return window.innerWidth ? window.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : void 0;
		}, windowHeight: function windowHeight() {
			"use strict";
			return window.innerHeight ? window.innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : void 0;
		}, windowScroll: function windowScroll() {
			"use strict";
			return "undefined" != typeof pageYOffset ? { left: window.pageXOffset, top: window.pageYOffset } : document.documentElement ? { left: document.documentElement.scrollLeft, top: document.documentElement.scrollTop } : void 0;
		}, addEventListener: function addEventListener(a, b, c, d) {
			"use strict";
			"undefined" == typeof d && (d = !1), a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c);
		}, removeEventListener: function removeEventListener(a, b, c, d) {
			"use strict";
			"undefined" == typeof d && (d = !1), a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c);
		} }, setTransform: function setTransform(a, b) {
		"use strict";
		var c = a.style;c.webkitTransform = c.MsTransform = c.msTransform = c.MozTransform = c.OTransform = c.transform = b;
	}, setTranslate: function setTranslate(a, b) {
		"use strict";
		var c = a.style,
		    d = { x: b.x || 0, y: b.y || 0, z: b.z || 0 },
		    e = this.support.transforms3d ? "translate3d(" + d.x + "px," + d.y + "px," + d.z + "px)" : "translate(" + d.x + "px," + d.y + "px)";c.webkitTransform = c.MsTransform = c.msTransform = c.MozTransform = c.OTransform = c.transform = e, this.support.transforms || (c.left = d.x + "px", c.top = d.y + "px");
	}, setTransition: function setTransition(a, b) {
		"use strict";
		var c = a.style;c.webkitTransitionDuration = c.MsTransitionDuration = c.msTransitionDuration = c.MozTransitionDuration = c.OTransitionDuration = c.transitionDuration = b + "ms";
	}, support: { touch: window.Modernizr && Modernizr.touch === !0 || function () {
			"use strict";
			return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
		}(), transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function () {
			"use strict";
			var a = document.createElement("div").style;return "webkitPerspective" in a || "MozPerspective" in a || "OPerspective" in a || "MsPerspective" in a || "perspective" in a;
		}(), transforms: window.Modernizr && Modernizr.csstransforms === !0 || function () {
			"use strict";
			var a = document.createElement("div").style;return "transform" in a || "WebkitTransform" in a || "MozTransform" in a || "msTransform" in a || "MsTransform" in a || "OTransform" in a;
		}(), transitions: window.Modernizr && Modernizr.csstransitions === !0 || function () {
			"use strict";
			var a = document.createElement("div").style;return "transition" in a || "WebkitTransition" in a || "MozTransition" in a || "msTransition" in a || "MsTransition" in a || "OTransition" in a;
		}(), classList: function () {
			"use strict";
			var a = document.createElement("div");return "classList" in a;
		}() }, browser: { ie8: function () {
			"use strict";
			var a = -1;if ("Microsoft Internet Explorer" === navigator.appName) {
				var b = navigator.userAgent,
				    c = new RegExp(/MSIE ([0-9]{1,}[\.0-9]{0,})/);null !== c.exec(b) && (a = parseFloat(RegExp.$1));
			}return -1 !== a && 9 > a;
		}(), ie10: window.navigator.msPointerEnabled, ie11: window.navigator.pointerEnabled } }, (window.jQuery || window.Zepto) && !function (a) {
	"use strict";
	a.fn.swiper = function (b) {
		var c;return this.each(function (d) {
			var e = a(this),
			    f = new Swiper(e[0], b);d || (c = f), e.data("swiper", f);
		}), c;
	};
}(window.jQuery || window.Zepto), "undefined" != typeof module ? module.exports = Swiper : "function" == typeof define && define.amd && define([], function () {
	"use strict";
	return Swiper;
});
/**!
 * MixItUp v2.1.10
 *
 * @copyright Copyright 2015 KunkaLabs Limited.
 * @author    KunkaLabs Limited.
 * @link      https://mixitup.kunkalabs.com
 *
 * @license   Commercial use requires a commercial license.
 *            https://mixitup.kunkalabs.com/licenses/
 *
 *            Non-commercial use permitted under terms of CC-BY-NC license.
 *            http://creativecommons.org/licenses/by-nc/3.0/
 */

(function ($, undf) {
	'use strict';

	/**
  * MixItUp Constructor Function
  * @constructor
  * @extends jQuery
  */

	$.MixItUp = function () {
		var self = this;

		self._execAction('_constructor', 0);

		$.extend(self, {

			/* Public Properties
   ---------------------------------------------------------------------- */

			selectors: {
				target: '.mix',
				filter: '.filter',
				sort: '.sort'
			},

			animation: {
				enable: true,
				effects: 'fade scale',
				duration: 600,
				easing: 'ease',
				perspectiveDistance: '3000',
				perspectiveOrigin: '50% 50%',
				queue: true,
				queueLimit: 1,
				animateChangeLayout: false,
				animateResizeContainer: true,
				animateResizeTargets: false,
				staggerSequence: false,
				reverseOut: false
			},

			callbacks: {
				onMixLoad: false,
				onMixStart: false,
				onMixBusy: false,
				onMixEnd: false,
				onMixFail: false,
				_user: false
			},

			controls: {
				enable: true,
				live: false,
				toggleFilterButtons: false,
				toggleLogic: 'or',
				activeClass: 'active'
			},

			layout: {
				display: 'inline-block',
				containerClass: '',
				containerClassFail: 'fail'
			},

			load: {
				filter: 'all',
				sort: false
			},

			/* Private Properties
   ---------------------------------------------------------------------- */

			_$body: null,
			_$container: null,
			_$targets: null,
			_$parent: null,
			_$sortButtons: null,
			_$filterButtons: null,

			_suckMode: false,
			_mixing: false,
			_sorting: false,
			_clicking: false,
			_loading: true,
			_changingLayout: false,
			_changingClass: false,
			_changingDisplay: false,

			_origOrder: [],
			_startOrder: [],
			_newOrder: [],
			_activeFilter: null,
			_toggleArray: [],
			_toggleString: '',
			_activeSort: 'default:asc',
			_newSort: null,
			_startHeight: null,
			_newHeight: null,
			_incPadding: true,
			_newDisplay: null,
			_newClass: null,
			_targetsBound: 0,
			_targetsDone: 0,
			_queue: [],

			_$show: $(),
			_$hide: $()
		});

		self._execAction('_constructor', 1);
	};

	/**
  * MixItUp Prototype
  * @override
  */

	$.MixItUp.prototype = {
		constructor: $.MixItUp,

		/* Static Properties
  ---------------------------------------------------------------------- */

		_instances: {},
		_handled: {
			_filter: {},
			_sort: {}
		},
		_bound: {
			_filter: {},
			_sort: {}
		},
		_actions: {},
		_filters: {},

		/* Static Methods
  ---------------------------------------------------------------------- */

		/**
   * Extend
   * @since 2.1.0
   * @param {object} new properties/methods
   * @extends {object} prototype
   */

		extend: function extend(extension) {
			for (var key in extension) {
				$.MixItUp.prototype[key] = extension[key];
			}
		},

		/**
   * Add Action
   * @since 2.1.0
   * @param {string} hook name
   * @param {string} namespace
   * @param {function} function to execute
   * @param {number} priority
   * @extends {object} $.MixItUp.prototype._actions
   */

		addAction: function addAction(hook, name, func, priority) {
			$.MixItUp.prototype._addHook('_actions', hook, name, func, priority);
		},

		/**
   * Add Filter
   * @since 2.1.0
   * @param {string} hook name
   * @param {string} namespace
   * @param {function} function to execute
   * @param {number} priority
   * @extends {object} $.MixItUp.prototype._filters
   */

		addFilter: function addFilter(hook, name, func, priority) {
			$.MixItUp.prototype._addHook('_filters', hook, name, func, priority);
		},

		/**
   * Add Hook
   * @since 2.1.0
   * @param {string} type of hook
   * @param {string} hook name
   * @param {function} function to execute
   * @param {number} priority
   * @extends {object} $.MixItUp.prototype._filters
   */

		_addHook: function _addHook(type, hook, name, func, priority) {
			var collection = $.MixItUp.prototype[type],
			    obj = {};

			priority = priority === 1 || priority === 'post' ? 'post' : 'pre';

			obj[hook] = {};
			obj[hook][priority] = {};
			obj[hook][priority][name] = func;

			$.extend(true, collection, obj);
		},

		/* Private Methods
  ---------------------------------------------------------------------- */

		/**
   * Initialise
   * @since 2.0.0
   * @param {object} domNode
   * @param {object} config
   */

		_init: function _init(domNode, config) {
			var self = this;

			self._execAction('_init', 0, arguments);

			config && $.extend(true, self, config);

			self._$body = $('body');
			self._domNode = domNode;
			self._$container = $(domNode);
			self._$container.addClass(self.layout.containerClass);
			self._id = domNode.id;

			self._platformDetect();

			self._brake = self._getPrefixedCSS('transition', 'none');

			self._refresh(true);

			self._$parent = self._$targets.parent().length ? self._$targets.parent() : self._$container;

			if (self.load.sort) {
				self._newSort = self._parseSort(self.load.sort);
				self._newSortString = self.load.sort;
				self._activeSort = self.load.sort;
				self._sort();
				self._printSort();
			}

			self._activeFilter = self.load.filter === 'all' ? self.selectors.target : self.load.filter === 'none' ? '' : self.load.filter;

			self.controls.enable && self._bindHandlers();

			if (self.controls.toggleFilterButtons) {
				self._buildToggleArray();

				for (var i = 0; i < self._toggleArray.length; i++) {
					self._updateControls({ filter: self._toggleArray[i], sort: self._activeSort }, true);
				};
			} else if (self.controls.enable) {
				self._updateControls({ filter: self._activeFilter, sort: self._activeSort });
			}

			self._filter();

			self._init = true;

			self._$container.data('mixItUp', self);

			self._execAction('_init', 1, arguments);

			self._buildState();

			self._$targets.css(self._brake);

			self._goMix(self.animation.enable);
		},

		/**
   * Platform Detect
   * @since 2.0.0
   */

		_platformDetect: function _platformDetect() {
			var self = this,
			    vendorsTrans = ['Webkit', 'Moz', 'O', 'ms'],
			    vendorsRAF = ['webkit', 'moz'],
			    chrome = window.navigator.appVersion.match(/Chrome\/(\d+)\./) || false,
			    ff = typeof InstallTrigger !== 'undefined',
			    prefix = function prefix(el) {
				for (var i = 0; i < vendorsTrans.length; i++) {
					if (vendorsTrans[i] + 'Transition' in el.style) {
						return {
							prefix: '-' + vendorsTrans[i].toLowerCase() + '-',
							vendor: vendorsTrans[i]
						};
					};
				};
				return 'transition' in el.style ? '' : false;
			},
			    transPrefix = prefix(self._domNode);

			self._execAction('_platformDetect', 0);

			self._chrome = chrome ? parseInt(chrome[1], 10) : false;
			self._ff = ff ? parseInt(window.navigator.userAgent.match(/rv:([^)]+)\)/)[1]) : false;
			self._prefix = transPrefix.prefix;
			self._vendor = transPrefix.vendor;
			self._suckMode = window.atob && self._prefix ? false : true;

			self._suckMode && (self.animation.enable = false);
			self._ff && self._ff <= 4 && (self.animation.enable = false);

			/* Polyfills
   ---------------------------------------------------------------------- */

			/**
    * window.requestAnimationFrame
    */

			for (var x = 0; x < vendorsRAF.length && !window.requestAnimationFrame; x++) {
				window.requestAnimationFrame = window[vendorsRAF[x] + 'RequestAnimationFrame'];
			}

			/**
    * Object.getPrototypeOf
    */

			if (typeof Object.getPrototypeOf !== 'function') {
				if (_typeof('test'.__proto__) === 'object') {
					Object.getPrototypeOf = function (object) {
						return object.__proto__;
					};
				} else {
					Object.getPrototypeOf = function (object) {
						return object.constructor.prototype;
					};
				}
			}

			/**
    * Element.nextElementSibling
    */

			if (self._domNode.nextElementSibling === undf) {
				Object.defineProperty(Element.prototype, 'nextElementSibling', {
					get: function get() {
						var el = this.nextSibling;

						while (el) {
							if (el.nodeType === 1) {
								return el;
							}
							el = el.nextSibling;
						}
						return null;
					}
				});
			}

			self._execAction('_platformDetect', 1);
		},

		/**
   * Refresh
   * @since 2.0.0
   * @param {boolean} init
   * @param {boolean} force
   */

		_refresh: function _refresh(init, force) {
			var self = this;

			self._execAction('_refresh', 0, arguments);

			self._$targets = self._$container.find(self.selectors.target);

			for (var i = 0; i < self._$targets.length; i++) {
				var target = self._$targets[i];

				if (target.dataset === undf || force) {

					target.dataset = {};

					for (var j = 0; j < target.attributes.length; j++) {

						var attr = target.attributes[j],
						    name = attr.name,
						    val = attr.value;

						if (name.indexOf('data-') > -1) {
							var dataName = self._helpers._camelCase(name.substring(5, name.length));
							target.dataset[dataName] = val;
						}
					}
				}

				if (target.mixParent === undf) {
					target.mixParent = self._id;
				}
			}

			if (self._$targets.length && init || !self._origOrder.length && self._$targets.length) {
				self._origOrder = [];

				for (var i = 0; i < self._$targets.length; i++) {
					var target = self._$targets[i];

					self._origOrder.push(target);
				}
			}

			self._execAction('_refresh', 1, arguments);
		},

		/**
   * Bind Handlers
   * @since 2.0.0
   */

		_bindHandlers: function _bindHandlers() {
			var self = this,
			    filters = $.MixItUp.prototype._bound._filter,
			    sorts = $.MixItUp.prototype._bound._sort;

			self._execAction('_bindHandlers', 0);

			if (self.controls.live) {
				self._$body.on('click.mixItUp.' + self._id, self.selectors.sort, function () {
					self._processClick($(this), 'sort');
				}).on('click.mixItUp.' + self._id, self.selectors.filter, function () {
					self._processClick($(this), 'filter');
				});
			} else {
				self._$sortButtons = $(self.selectors.sort);
				self._$filterButtons = $(self.selectors.filter);

				self._$sortButtons.on('click.mixItUp.' + self._id, function () {
					self._processClick($(this), 'sort');
				});

				self._$filterButtons.on('click.mixItUp.' + self._id, function () {
					self._processClick($(this), 'filter');
				});
			}

			filters[self.selectors.filter] = filters[self.selectors.filter] === undf ? 1 : filters[self.selectors.filter] + 1;
			sorts[self.selectors.sort] = sorts[self.selectors.sort] === undf ? 1 : sorts[self.selectors.sort] + 1;

			self._execAction('_bindHandlers', 1);
		},

		/**
   * Process Click
   * @since 2.0.0
   * @param {object} $button
   * @param {string} type
   */

		_processClick: function _processClick($button, type) {
			var self = this,
			    trackClick = function trackClick($button, type, off) {
				var proto = $.MixItUp.prototype;

				proto._handled['_' + type][self.selectors[type]] = proto._handled['_' + type][self.selectors[type]] === undf ? 1 : proto._handled['_' + type][self.selectors[type]] + 1;

				if (proto._handled['_' + type][self.selectors[type]] === proto._bound['_' + type][self.selectors[type]]) {
					$button[(off ? 'remove' : 'add') + 'Class'](self.controls.activeClass);
					delete proto._handled['_' + type][self.selectors[type]];
				}
			};

			self._execAction('_processClick', 0, arguments);

			if (!self._mixing || self.animation.queue && self._queue.length < self.animation.queueLimit) {
				self._clicking = true;

				if (type === 'sort') {
					var sort = $button.attr('data-sort');

					if (!$button.hasClass(self.controls.activeClass) || sort.indexOf('random') > -1) {
						$(self.selectors.sort).removeClass(self.controls.activeClass);
						trackClick($button, type);
						self.sort(sort);
					}
				}

				if (type === 'filter') {
					var filter = $button.attr('data-filter'),
					    ndx,
					    seperator = self.controls.toggleLogic === 'or' ? ',' : '';

					if (!self.controls.toggleFilterButtons) {
						if (!$button.hasClass(self.controls.activeClass)) {
							$(self.selectors.filter).removeClass(self.controls.activeClass);
							trackClick($button, type);
							self.filter(filter);
						}
					} else {
						self._buildToggleArray();

						if (!$button.hasClass(self.controls.activeClass)) {
							trackClick($button, type);

							self._toggleArray.push(filter);
						} else {
							trackClick($button, type, true);
							ndx = self._toggleArray.indexOf(filter);
							self._toggleArray.splice(ndx, 1);
						}

						self._toggleArray = $.grep(self._toggleArray, function (n) {
							return n;
						});

						self._toggleString = self._toggleArray.join(seperator);

						self.filter(self._toggleString);
					}
				}

				self._execAction('_processClick', 1, arguments);
			} else {
				if (typeof self.callbacks.onMixBusy === 'function') {
					self.callbacks.onMixBusy.call(self._domNode, self._state, self);
				}
				self._execAction('_processClickBusy', 1, arguments);
			}
		},

		/**
   * Build Toggle Array
   * @since 2.0.0
   */

		_buildToggleArray: function _buildToggleArray() {
			var self = this,
			    activeFilter = self._activeFilter.replace(/\s/g, '');

			self._execAction('_buildToggleArray', 0, arguments);

			if (self.controls.toggleLogic === 'or') {
				self._toggleArray = activeFilter.split(',');
			} else {
				self._toggleArray = activeFilter.split('.');

				!self._toggleArray[0] && self._toggleArray.shift();

				for (var i = 0, filter; filter = self._toggleArray[i]; i++) {
					self._toggleArray[i] = '.' + filter;
				}
			}

			self._execAction('_buildToggleArray', 1, arguments);
		},

		/**
   * Update Controls
   * @since 2.0.0
   * @param {object} command
   * @param {boolean} multi
   */

		_updateControls: function _updateControls(command, multi) {
			var self = this,
			    output = {
				filter: command.filter,
				sort: command.sort
			},
			    update = function update($el, filter) {
				try {
					multi && type === 'filter' && !(output.filter === 'none' || output.filter === '') ? $el.filter(filter).addClass(self.controls.activeClass) : $el.removeClass(self.controls.activeClass).filter(filter).addClass(self.controls.activeClass);
				} catch (e) {}
			},
			    type = 'filter',
			    $el = null;

			self._execAction('_updateControls', 0, arguments);

			command.filter === undf && (output.filter = self._activeFilter);
			command.sort === undf && (output.sort = self._activeSort);
			output.filter === self.selectors.target && (output.filter = 'all');

			for (var i = 0; i < 2; i++) {
				$el = self.controls.live ? $(self.selectors[type]) : self['_$' + type + 'Buttons'];
				$el && update($el, '[data-' + type + '="' + output[type] + '"]');
				type = 'sort';
			}

			self._execAction('_updateControls', 1, arguments);
		},

		/**
   * Filter (private)
   * @since 2.0.0
   */

		_filter: function _filter() {
			var self = this;

			self._execAction('_filter', 0);

			for (var i = 0; i < self._$targets.length; i++) {
				var $target = $(self._$targets[i]);

				if ($target.is(self._activeFilter)) {
					self._$show = self._$show.add($target);
				} else {
					self._$hide = self._$hide.add($target);
				}
			}

			self._execAction('_filter', 1);
		},

		/**
   * Sort (private)
   * @since 2.0.0
   */

		_sort: function _sort() {
			var self = this,
			    arrayShuffle = function arrayShuffle(oldArray) {
				var newArray = oldArray.slice(),
				    len = newArray.length,
				    i = len;

				while (i--) {
					var p = parseInt(Math.random() * len);
					var t = newArray[i];
					newArray[i] = newArray[p];
					newArray[p] = t;
				};
				return newArray;
			};

			self._execAction('_sort', 0);

			self._startOrder = [];

			for (var i = 0; i < self._$targets.length; i++) {
				var target = self._$targets[i];

				self._startOrder.push(target);
			}

			switch (self._newSort[0].sortBy) {
				case 'default':
					self._newOrder = self._origOrder;
					break;
				case 'random':
					self._newOrder = arrayShuffle(self._startOrder);
					break;
				case 'custom':
					self._newOrder = self._newSort[0].order;
					break;
				default:
					self._newOrder = self._startOrder.concat().sort(function (a, b) {
						return self._compare(a, b);
					});
			}

			self._execAction('_sort', 1);
		},

		/**
   * Compare Algorithm
   * @since 2.0.0
   * @param {string|number} a
   * @param {string|number} b
   * @param {number} depth (recursion)
   * @return {number}
   */

		_compare: function _compare(a, b, depth) {
			depth = depth ? depth : 0;

			var self = this,
			    order = self._newSort[depth].order,
			    getData = function getData(el) {
				return el.dataset[self._newSort[depth].sortBy] || 0;
			},
			    attrA = isNaN(getData(a) * 1) ? getData(a).toLowerCase() : getData(a) * 1,
			    attrB = isNaN(getData(b) * 1) ? getData(b).toLowerCase() : getData(b) * 1;

			if (attrA < attrB) return order === 'asc' ? -1 : 1;
			if (attrA > attrB) return order === 'asc' ? 1 : -1;
			if (attrA === attrB && self._newSort.length > depth + 1) return self._compare(a, b, depth + 1);

			return 0;
		},

		/**
   * Print Sort
   * @since 2.0.0
   * @param {boolean} reset
   */

		_printSort: function _printSort(reset) {
			var self = this,
			    order = reset ? self._startOrder : self._newOrder,
			    targets = self._$parent[0].querySelectorAll(self.selectors.target),
			    nextSibling = targets.length ? targets[targets.length - 1].nextElementSibling : null,
			    frag = document.createDocumentFragment();

			self._execAction('_printSort', 0, arguments);

			for (var i = 0; i < targets.length; i++) {
				var target = targets[i],
				    whiteSpace = target.nextSibling;

				if (target.style.position === 'absolute') continue;

				if (whiteSpace && whiteSpace.nodeName === '#text') {
					self._$parent[0].removeChild(whiteSpace);
				}

				self._$parent[0].removeChild(target);
			}

			for (var i = 0; i < order.length; i++) {
				var el = order[i];

				if (self._newSort[0].sortBy === 'default' && self._newSort[0].order === 'desc' && !reset) {
					var firstChild = frag.firstChild;
					frag.insertBefore(el, firstChild);
					frag.insertBefore(document.createTextNode(' '), el);
				} else {
					frag.appendChild(el);
					frag.appendChild(document.createTextNode(' '));
				}
			}

			nextSibling ? self._$parent[0].insertBefore(frag, nextSibling) : self._$parent[0].appendChild(frag);

			self._execAction('_printSort', 1, arguments);
		},

		/**
   * Parse Sort
   * @since 2.0.0
   * @param {string} sortString
   * @return {array} newSort
   */

		_parseSort: function _parseSort(sortString) {
			var self = this,
			    rules = typeof sortString === 'string' ? sortString.split(' ') : [sortString],
			    newSort = [];

			for (var i = 0; i < rules.length; i++) {
				var rule = typeof sortString === 'string' ? rules[i].split(':') : ['custom', rules[i]],
				    ruleObj = {
					sortBy: self._helpers._camelCase(rule[0]),
					order: rule[1] || 'asc'
				};

				newSort.push(ruleObj);

				if (ruleObj.sortBy === 'default' || ruleObj.sortBy === 'random') break;
			}

			return self._execFilter('_parseSort', newSort, arguments);
		},

		/**
   * Parse Effects
   * @since 2.0.0
   * @return {object} effects
   */

		_parseEffects: function _parseEffects() {
			var self = this,
			    effects = {
				opacity: '',
				transformIn: '',
				transformOut: '',
				filter: ''
			},
			    parse = function parse(effect, extract, reverse) {
				if (self.animation.effects.indexOf(effect) > -1) {
					if (extract) {
						var propIndex = self.animation.effects.indexOf(effect + '(');
						if (propIndex > -1) {
							var str = self.animation.effects.substring(propIndex),
							    match = /\(([^)]+)\)/.exec(str),
							    val = match[1];

							return { val: val };
						}
					}
					return true;
				} else {
					return false;
				}
			},
			    negate = function negate(value, invert) {
				if (invert) {
					return value.charAt(0) === '-' ? value.substr(1, value.length) : '-' + value;
				} else {
					return value;
				}
			},
			    buildTransform = function buildTransform(key, invert) {
				var transforms = [['scale', '.01'], ['translateX', '20px'], ['translateY', '20px'], ['translateZ', '20px'], ['rotateX', '90deg'], ['rotateY', '90deg'], ['rotateZ', '180deg']];

				for (var i = 0; i < transforms.length; i++) {
					var prop = transforms[i][0],
					    def = transforms[i][1],
					    inverted = invert && prop !== 'scale';

					effects[key] += parse(prop) ? prop + '(' + negate(parse(prop, true).val || def, inverted) + ') ' : '';
				}
			};

			effects.opacity = parse('fade') ? parse('fade', true).val || '0' : '1';

			buildTransform('transformIn');

			self.animation.reverseOut ? buildTransform('transformOut', true) : effects.transformOut = effects.transformIn;

			effects.transition = {};

			effects.transition = self._getPrefixedCSS('transition', 'all ' + self.animation.duration + 'ms ' + self.animation.easing + ', opacity ' + self.animation.duration + 'ms linear');

			self.animation.stagger = parse('stagger') ? true : false;
			self.animation.staggerDuration = parseInt(parse('stagger') ? parse('stagger', true).val ? parse('stagger', true).val : 100 : 100);

			return self._execFilter('_parseEffects', effects);
		},

		/**
   * Build State
   * @since 2.0.0
   * @param {boolean} future
   * @return {object} futureState
   */

		_buildState: function _buildState(future) {
			var self = this,
			    state = {};

			self._execAction('_buildState', 0);

			state = {
				activeFilter: self._activeFilter === '' ? 'none' : self._activeFilter,
				activeSort: future && self._newSortString ? self._newSortString : self._activeSort,
				fail: !self._$show.length && self._activeFilter !== '',
				$targets: self._$targets,
				$show: self._$show,
				$hide: self._$hide,
				totalTargets: self._$targets.length,
				totalShow: self._$show.length,
				totalHide: self._$hide.length,
				display: future && self._newDisplay ? self._newDisplay : self.layout.display
			};

			if (future) {
				return self._execFilter('_buildState', state);
			} else {
				self._state = state;

				self._execAction('_buildState', 1);
			}
		},

		/**
   * Go Mix
   * @since 2.0.0
   * @param {boolean} animate
   */

		_goMix: function _goMix(animate) {
			var self = this,
			    phase1 = function phase1() {
				if (self._chrome && self._chrome === 31) {
					chromeFix(self._$parent[0]);
				}

				self._setInter();

				phase2();
			},
			    phase2 = function phase2() {
				var scrollTop = window.pageYOffset,
				    scrollLeft = window.pageXOffset,
				    docHeight = document.documentElement.scrollHeight;

				self._getInterMixData();

				self._setFinal();

				self._getFinalMixData();

				window.pageYOffset !== scrollTop && window.scrollTo(scrollLeft, scrollTop);

				self._prepTargets();

				if (window.requestAnimationFrame) {
					requestAnimationFrame(phase3);
				} else {
					setTimeout(function () {
						phase3();
					}, 20);
				}
			},
			    phase3 = function phase3() {
				self._animateTargets();

				if (self._targetsBound === 0) {
					self._cleanUp();
				}
			},
			    chromeFix = function chromeFix(grid) {
				var parent = grid.parentElement,
				    placeholder = document.createElement('div'),
				    frag = document.createDocumentFragment();

				parent.insertBefore(placeholder, grid);
				frag.appendChild(grid);
				parent.replaceChild(grid, placeholder);
			},
			    futureState = self._buildState(true);

			self._execAction('_goMix', 0, arguments);

			!self.animation.duration && (animate = false);

			self._mixing = true;

			self._$container.removeClass(self.layout.containerClassFail);

			if (typeof self.callbacks.onMixStart === 'function') {
				self.callbacks.onMixStart.call(self._domNode, self._state, futureState, self);
			}

			self._$container.trigger('mixStart', [self._state, futureState, self]);

			self._getOrigMixData();

			if (animate && !self._suckMode) {

				window.requestAnimationFrame ? requestAnimationFrame(phase1) : phase1();
			} else {
				self._cleanUp();
			}

			self._execAction('_goMix', 1, arguments);
		},

		/**
   * Get Target Data
   * @since 2.0.0
   */

		_getTargetData: function _getTargetData(el, stage) {
			var self = this,
			    elStyle;

			el.dataset[stage + 'PosX'] = el.offsetLeft;
			el.dataset[stage + 'PosY'] = el.offsetTop;

			if (self.animation.animateResizeTargets) {
				elStyle = !self._suckMode ? window.getComputedStyle(el) : {
					marginBottom: '',
					marginRight: ''
				};

				el.dataset[stage + 'MarginBottom'] = parseInt(elStyle.marginBottom);
				el.dataset[stage + 'MarginRight'] = parseInt(elStyle.marginRight);
				el.dataset[stage + 'Width'] = el.offsetWidth;
				el.dataset[stage + 'Height'] = el.offsetHeight;
			}
		},

		/**
   * Get Original Mix Data
   * @since 2.0.0
   */

		_getOrigMixData: function _getOrigMixData() {
			var self = this,
			    parentStyle = !self._suckMode ? window.getComputedStyle(self._$parent[0]) : { boxSizing: '' },
			    parentBS = parentStyle.boxSizing || parentStyle[self._vendor + 'BoxSizing'];

			self._incPadding = parentBS === 'border-box';

			self._execAction('_getOrigMixData', 0);

			!self._suckMode && (self.effects = self._parseEffects());

			self._$toHide = self._$hide.filter(':visible');
			self._$toShow = self._$show.filter(':hidden');
			self._$pre = self._$targets.filter(':visible');

			self._startHeight = self._incPadding ? self._$parent.outerHeight() : self._$parent.height();

			for (var i = 0; i < self._$pre.length; i++) {
				var el = self._$pre[i];

				self._getTargetData(el, 'orig');
			}

			self._execAction('_getOrigMixData', 1);
		},

		/**
   * Set Intermediate Positions
   * @since 2.0.0
   */

		_setInter: function _setInter() {
			var self = this;

			self._execAction('_setInter', 0);

			if (self._changingLayout && self.animation.animateChangeLayout) {
				self._$toShow.css('display', self._newDisplay);

				if (self._changingClass) {
					self._$container.removeClass(self.layout.containerClass).addClass(self._newClass);
				}
			} else {
				self._$toShow.css('display', self.layout.display);
			}

			self._execAction('_setInter', 1);
		},

		/**
   * Get Intermediate Mix Data
   * @since 2.0.0
   */

		_getInterMixData: function _getInterMixData() {
			var self = this;

			self._execAction('_getInterMixData', 0);

			for (var i = 0; i < self._$toShow.length; i++) {
				var el = self._$toShow[i];

				self._getTargetData(el, 'inter');
			}

			for (var i = 0; i < self._$pre.length; i++) {
				var el = self._$pre[i];

				self._getTargetData(el, 'inter');
			}

			self._execAction('_getInterMixData', 1);
		},

		/**
   * Set Final Positions
   * @since 2.0.0
   */

		_setFinal: function _setFinal() {
			var self = this;

			self._execAction('_setFinal', 0);

			self._sorting && self._printSort();

			self._$toHide.removeStyle('display');

			if (self._changingLayout && self.animation.animateChangeLayout) {
				self._$pre.css('display', self._newDisplay);
			}

			self._execAction('_setFinal', 1);
		},

		/**
   * Get Final Mix Data
   * @since 2.0.0
   */

		_getFinalMixData: function _getFinalMixData() {
			var self = this;

			self._execAction('_getFinalMixData', 0);

			for (var i = 0; i < self._$toShow.length; i++) {
				var el = self._$toShow[i];

				self._getTargetData(el, 'final');
			}

			for (var i = 0; i < self._$pre.length; i++) {
				var el = self._$pre[i];

				self._getTargetData(el, 'final');
			}

			self._newHeight = self._incPadding ? self._$parent.outerHeight() : self._$parent.height();

			self._sorting && self._printSort(true);

			self._$toShow.removeStyle('display');

			self._$pre.css('display', self.layout.display);

			if (self._changingClass && self.animation.animateChangeLayout) {
				self._$container.removeClass(self._newClass).addClass(self.layout.containerClass);
			}

			self._execAction('_getFinalMixData', 1);
		},

		/**
   * Prepare Targets
   * @since 2.0.0
   */

		_prepTargets: function _prepTargets() {
			var self = this,
			    transformCSS = {
				_in: self._getPrefixedCSS('transform', self.effects.transformIn),
				_out: self._getPrefixedCSS('transform', self.effects.transformOut)
			};

			self._execAction('_prepTargets', 0);

			if (self.animation.animateResizeContainer) {
				self._$parent.css('height', self._startHeight + 'px');
			}

			for (var i = 0; i < self._$toShow.length; i++) {
				var el = self._$toShow[i],
				    $el = $(el);

				el.style.opacity = self.effects.opacity;
				el.style.display = self._changingLayout && self.animation.animateChangeLayout ? self._newDisplay : self.layout.display;

				$el.css(transformCSS._in);

				if (self.animation.animateResizeTargets) {
					el.style.width = el.dataset.finalWidth + 'px';
					el.style.height = el.dataset.finalHeight + 'px';
					el.style.marginRight = -(el.dataset.finalWidth - el.dataset.interWidth) + el.dataset.finalMarginRight * 1 + 'px';
					el.style.marginBottom = -(el.dataset.finalHeight - el.dataset.interHeight) + el.dataset.finalMarginBottom * 1 + 'px';
				}
			}

			for (var i = 0; i < self._$pre.length; i++) {
				var el = self._$pre[i],
				    $el = $(el),
				    translate = {
					x: el.dataset.origPosX - el.dataset.interPosX,
					y: el.dataset.origPosY - el.dataset.interPosY
				},
				    transformCSS = self._getPrefixedCSS('transform', 'translate(' + translate.x + 'px,' + translate.y + 'px)');

				$el.css(transformCSS);

				if (self.animation.animateResizeTargets) {
					el.style.width = el.dataset.origWidth + 'px';
					el.style.height = el.dataset.origHeight + 'px';

					if (el.dataset.origWidth - el.dataset.finalWidth) {
						el.style.marginRight = -(el.dataset.origWidth - el.dataset.interWidth) + el.dataset.origMarginRight * 1 + 'px';
					}

					if (el.dataset.origHeight - el.dataset.finalHeight) {
						el.style.marginBottom = -(el.dataset.origHeight - el.dataset.interHeight) + el.dataset.origMarginBottom * 1 + 'px';
					}
				}
			}

			self._execAction('_prepTargets', 1);
		},

		/**
   * Animate Targets
   * @since 2.0.0
   */

		_animateTargets: function _animateTargets() {
			var self = this;

			self._execAction('_animateTargets', 0);

			self._targetsDone = 0;
			self._targetsBound = 0;

			self._$parent.css(self._getPrefixedCSS('perspective', self.animation.perspectiveDistance + 'px')).css(self._getPrefixedCSS('perspective-origin', self.animation.perspectiveOrigin));

			if (self.animation.animateResizeContainer) {
				self._$parent.css(self._getPrefixedCSS('transition', 'height ' + self.animation.duration + 'ms ease')).css('height', self._newHeight + 'px');
			}

			for (var i = 0; i < self._$toShow.length; i++) {
				var el = self._$toShow[i],
				    $el = $(el),
				    translate = {
					x: el.dataset.finalPosX - el.dataset.interPosX,
					y: el.dataset.finalPosY - el.dataset.interPosY
				},
				    delay = self._getDelay(i),
				    toShowCSS = {};

				el.style.opacity = '';

				for (var j = 0; j < 2; j++) {
					var a = j === 0 ? a = self._prefix : '';

					if (self._ff && self._ff <= 20) {
						toShowCSS[a + 'transition-property'] = 'all';
						toShowCSS[a + 'transition-timing-function'] = self.animation.easing + 'ms';
						toShowCSS[a + 'transition-duration'] = self.animation.duration + 'ms';
					}

					toShowCSS[a + 'transition-delay'] = delay + 'ms';
					toShowCSS[a + 'transform'] = 'translate(' + translate.x + 'px,' + translate.y + 'px)';
				}

				if (self.effects.transform || self.effects.opacity) {
					self._bindTargetDone($el);
				}

				self._ff && self._ff <= 20 ? $el.css(toShowCSS) : $el.css(self.effects.transition).css(toShowCSS);
			}

			for (var i = 0; i < self._$pre.length; i++) {
				var el = self._$pre[i],
				    $el = $(el),
				    translate = {
					x: el.dataset.finalPosX - el.dataset.interPosX,
					y: el.dataset.finalPosY - el.dataset.interPosY
				},
				    delay = self._getDelay(i);

				if (!(el.dataset.finalPosX === el.dataset.origPosX && el.dataset.finalPosY === el.dataset.origPosY)) {
					self._bindTargetDone($el);
				}

				$el.css(self._getPrefixedCSS('transition', 'all ' + self.animation.duration + 'ms ' + self.animation.easing + ' ' + delay + 'ms'));
				$el.css(self._getPrefixedCSS('transform', 'translate(' + translate.x + 'px,' + translate.y + 'px)'));

				if (self.animation.animateResizeTargets) {
					if (el.dataset.origWidth - el.dataset.finalWidth && el.dataset.finalWidth * 1) {
						el.style.width = el.dataset.finalWidth + 'px';
						el.style.marginRight = -(el.dataset.finalWidth - el.dataset.interWidth) + el.dataset.finalMarginRight * 1 + 'px';
					}

					if (el.dataset.origHeight - el.dataset.finalHeight && el.dataset.finalHeight * 1) {
						el.style.height = el.dataset.finalHeight + 'px';
						el.style.marginBottom = -(el.dataset.finalHeight - el.dataset.interHeight) + el.dataset.finalMarginBottom * 1 + 'px';
					}
				}
			}

			if (self._changingClass) {
				self._$container.removeClass(self.layout.containerClass).addClass(self._newClass);
			}

			for (var i = 0; i < self._$toHide.length; i++) {
				var el = self._$toHide[i],
				    $el = $(el),
				    delay = self._getDelay(i),
				    toHideCSS = {};

				for (var j = 0; j < 2; j++) {
					var a = j === 0 ? a = self._prefix : '';

					toHideCSS[a + 'transition-delay'] = delay + 'ms';
					toHideCSS[a + 'transform'] = self.effects.transformOut;
					toHideCSS.opacity = self.effects.opacity;
				}

				$el.css(self.effects.transition).css(toHideCSS);

				if (self.effects.transform || self.effects.opacity) {
					self._bindTargetDone($el);
				};
			}

			self._execAction('_animateTargets', 1);
		},

		/**
   * Bind Targets TransitionEnd
   * @since 2.0.0
   * @param {object} $el
   */

		_bindTargetDone: function _bindTargetDone($el) {
			var self = this,
			    el = $el[0];

			self._execAction('_bindTargetDone', 0, arguments);

			if (!el.dataset.bound) {

				el.dataset.bound = true;
				self._targetsBound++;

				$el.on('webkitTransitionEnd.mixItUp transitionend.mixItUp', function (e) {
					if ((e.originalEvent.propertyName.indexOf('transform') > -1 || e.originalEvent.propertyName.indexOf('opacity') > -1) && $(e.originalEvent.target).is(self.selectors.target)) {
						$el.off('.mixItUp');
						delete el.dataset.bound;
						self._targetDone();
					}
				});
			}

			self._execAction('_bindTargetDone', 1, arguments);
		},

		/**
   * Target Done
   * @since 2.0.0
   */

		_targetDone: function _targetDone() {
			var self = this;

			self._execAction('_targetDone', 0);

			self._targetsDone++;

			self._targetsDone === self._targetsBound && self._cleanUp();

			self._execAction('_targetDone', 1);
		},

		/**
   * Clean Up
   * @since 2.0.0
   */

		_cleanUp: function _cleanUp() {
			var self = this,
			    targetStyles = self.animation.animateResizeTargets ? 'transform opacity width height margin-bottom margin-right' : 'transform opacity',
			    unBrake = function unBrake() {
				self._$targets.removeStyle('transition', self._prefix);
			};

			self._execAction('_cleanUp', 0);

			!self._changingLayout ? self._$show.css('display', self.layout.display) : self._$show.css('display', self._newDisplay);

			self._$targets.css(self._brake);

			self._$targets.removeStyle(targetStyles, self._prefix).removeAttr('data-inter-pos-x data-inter-pos-y data-final-pos-x data-final-pos-y data-orig-pos-x data-orig-pos-y data-orig-height data-orig-width data-final-height data-final-width data-inter-width data-inter-height data-orig-margin-right data-orig-margin-bottom data-inter-margin-right data-inter-margin-bottom data-final-margin-right data-final-margin-bottom');

			self._$hide.removeStyle('display');

			self._$parent.removeStyle('height transition perspective-distance perspective perspective-origin-x perspective-origin-y perspective-origin perspectiveOrigin', self._prefix);

			if (self._sorting) {
				self._printSort();
				self._activeSort = self._newSortString;
				self._sorting = false;
			}

			if (self._changingLayout) {
				if (self._changingDisplay) {
					self.layout.display = self._newDisplay;
					self._changingDisplay = false;
				}

				if (self._changingClass) {
					self._$parent.removeClass(self.layout.containerClass).addClass(self._newClass);
					self.layout.containerClass = self._newClass;
					self._changingClass = false;
				}

				self._changingLayout = false;
			}

			self._refresh();

			self._buildState();

			if (self._state.fail) {
				self._$container.addClass(self.layout.containerClassFail);
			}

			self._$show = $();
			self._$hide = $();

			if (window.requestAnimationFrame) {
				requestAnimationFrame(unBrake);
			}

			self._mixing = false;

			if (typeof self.callbacks._user === 'function') {
				self.callbacks._user.call(self._domNode, self._state, self);
			}

			if (typeof self.callbacks.onMixEnd === 'function') {
				self.callbacks.onMixEnd.call(self._domNode, self._state, self);
			}

			self._$container.trigger('mixEnd', [self._state, self]);

			if (self._state.fail) {
				typeof self.callbacks.onMixFail === 'function' && self.callbacks.onMixFail.call(self._domNode, self._state, self);
				self._$container.trigger('mixFail', [self._state, self]);
			}

			if (self._loading) {
				typeof self.callbacks.onMixLoad === 'function' && self.callbacks.onMixLoad.call(self._domNode, self._state, self);
				self._$container.trigger('mixLoad', [self._state, self]);
			}

			if (self._queue.length) {
				self._execAction('_queue', 0);

				self.multiMix(self._queue[0][0], self._queue[0][1], self._queue[0][2]);
				self._queue.splice(0, 1);
			}

			self._execAction('_cleanUp', 1);

			self._loading = false;
		},

		/**
   * Get Prefixed CSS
   * @since 2.0.0
   * @param {string} property
   * @param {string} value
   * @param {boolean} prefixValue
   * @return {object} styles
   */

		_getPrefixedCSS: function _getPrefixedCSS(property, value, prefixValue) {
			var self = this,
			    styles = {},
			    prefix = '',
			    i = -1;

			for (i = 0; i < 2; i++) {
				prefix = i === 0 ? self._prefix : '';
				prefixValue ? styles[prefix + property] = prefix + value : styles[prefix + property] = value;
			}

			return self._execFilter('_getPrefixedCSS', styles, arguments);
		},

		/**
   * Get Delay
   * @since 2.0.0
   * @param {number} i
   * @return {number} delay
   */

		_getDelay: function _getDelay(i) {
			var self = this,
			    n = typeof self.animation.staggerSequence === 'function' ? self.animation.staggerSequence.call(self._domNode, i, self._state) : i,
			    delay = self.animation.stagger ? n * self.animation.staggerDuration : 0;

			return self._execFilter('_getDelay', delay, arguments);
		},

		/**
   * Parse MultiMix Arguments
   * @since 2.0.0
   * @param {array} args
   * @return {object} output
   */

		_parseMultiMixArgs: function _parseMultiMixArgs(args) {
			var self = this,
			    output = {
				command: null,
				animate: self.animation.enable,
				callback: null
			};

			for (var i = 0; i < args.length; i++) {
				var arg = args[i];

				if (arg !== null) {
					if ((typeof arg === "undefined" ? "undefined" : _typeof(arg)) === 'object' || typeof arg === 'string') {
						output.command = arg;
					} else if (typeof arg === 'boolean') {
						output.animate = arg;
					} else if (typeof arg === 'function') {
						output.callback = arg;
					}
				}
			}

			return self._execFilter('_parseMultiMixArgs', output, arguments);
		},

		/**
   * Parse Insert Arguments
   * @since 2.0.0
   * @param {array} args
   * @return {object} output
   */

		_parseInsertArgs: function _parseInsertArgs(args) {
			var self = this,
			    output = {
				index: 0,
				$object: $(),
				multiMix: { filter: self._state.activeFilter },
				callback: null
			};

			for (var i = 0; i < args.length; i++) {
				var arg = args[i];

				if (typeof arg === 'number') {
					output.index = arg;
				} else if ((typeof arg === "undefined" ? "undefined" : _typeof(arg)) === 'object' && arg instanceof $) {
					output.$object = arg;
				} else if ((typeof arg === "undefined" ? "undefined" : _typeof(arg)) === 'object' && self._helpers._isElement(arg)) {
					output.$object = $(arg);
				} else if ((typeof arg === "undefined" ? "undefined" : _typeof(arg)) === 'object' && arg !== null) {
					output.multiMix = arg;
				} else if (typeof arg === 'boolean' && !arg) {
					output.multiMix = false;
				} else if (typeof arg === 'function') {
					output.callback = arg;
				}
			}

			return self._execFilter('_parseInsertArgs', output, arguments);
		},

		/**
   * Execute Action
   * @since 2.0.0
   * @param {string} methodName
   * @param {boolean} isPost
   * @param {array} args
   */

		_execAction: function _execAction(methodName, isPost, args) {
			var self = this,
			    context = isPost ? 'post' : 'pre';

			if (!self._actions.isEmptyObject && self._actions.hasOwnProperty(methodName)) {
				for (var key in self._actions[methodName][context]) {
					self._actions[methodName][context][key].call(self, args);
				}
			}
		},

		/**
   * Execute Filter
   * @since 2.0.0
   * @param {string} methodName
   * @param {mixed} value
   * @return {mixed} value
   */

		_execFilter: function _execFilter(methodName, value, args) {
			var self = this;

			if (!self._filters.isEmptyObject && self._filters.hasOwnProperty(methodName)) {
				for (var key in self._filters[methodName]) {
					return self._filters[methodName][key].call(self, args);
				}
			} else {
				return value;
			}
		},

		/* Helpers
  ---------------------------------------------------------------------- */

		_helpers: {

			/**
    * CamelCase
    * @since 2.0.0
    * @param {string}
    * @return {string}
    */

			_camelCase: function _camelCase(string) {
				return string.replace(/-([a-z])/g, function (g) {
					return g[1].toUpperCase();
				});
			},

			/**
    * Is Element
    * @since 2.1.3
    * @param {object} element to test
    * @return {boolean}
    */

			_isElement: function _isElement(el) {
				if (window.HTMLElement) {
					return el instanceof HTMLElement;
				} else {
					return el !== null && el.nodeType === 1 && el.nodeName === 'string';
				}
			}
		},

		/* Public Methods
  ---------------------------------------------------------------------- */

		/**
   * Is Mixing
   * @since 2.0.0
   * @return {boolean}
   */

		isMixing: function isMixing() {
			var self = this;

			return self._execFilter('isMixing', self._mixing);
		},

		/**
   * Filter (public)
   * @since 2.0.0
   * @param {array} arguments
   */

		filter: function filter() {
			var self = this,
			    args = self._parseMultiMixArgs(arguments);

			self._clicking && (self._toggleString = '');

			self.multiMix({ filter: args.command }, args.animate, args.callback);
		},

		/**
   * Sort (public)
   * @since 2.0.0
   * @param {array} arguments
   */

		sort: function sort() {
			var self = this,
			    args = self._parseMultiMixArgs(arguments);

			self.multiMix({ sort: args.command }, args.animate, args.callback);
		},

		/**
   * Change Layout (public)
   * @since 2.0.0
   * @param {array} arguments
   */

		changeLayout: function changeLayout() {
			var self = this,
			    args = self._parseMultiMixArgs(arguments);

			self.multiMix({ changeLayout: args.command }, args.animate, args.callback);
		},

		/**
   * MultiMix
   * @since 2.0.0
   * @param {array} arguments
   */

		multiMix: function multiMix() {
			var self = this,
			    args = self._parseMultiMixArgs(arguments);

			self._execAction('multiMix', 0, arguments);

			if (!self._mixing) {
				if (self.controls.enable && !self._clicking) {
					self.controls.toggleFilterButtons && self._buildToggleArray();
					self._updateControls(args.command, self.controls.toggleFilterButtons);
				}

				self._queue.length < 2 && (self._clicking = false);

				delete self.callbacks._user;
				if (args.callback) self.callbacks._user = args.callback;

				var sort = args.command.sort,
				    filter = args.command.filter,
				    changeLayout = args.command.changeLayout;

				self._refresh();

				if (sort) {
					self._newSort = self._parseSort(sort);
					self._newSortString = sort;

					self._sorting = true;
					self._sort();
				}

				if (filter !== undf) {
					filter = filter === 'all' ? self.selectors.target : filter;

					self._activeFilter = filter;
				}

				self._filter();

				if (changeLayout) {
					self._newDisplay = typeof changeLayout === 'string' ? changeLayout : changeLayout.display || self.layout.display;
					self._newClass = changeLayout.containerClass || '';

					if (self._newDisplay !== self.layout.display || self._newClass !== self.layout.containerClass) {
						self._changingLayout = true;

						self._changingClass = self._newClass !== self.layout.containerClass;
						self._changingDisplay = self._newDisplay !== self.layout.display;
					}
				}

				self._$targets.css(self._brake);

				self._goMix(args.animate ^ self.animation.enable ? args.animate : self.animation.enable);

				self._execAction('multiMix', 1, arguments);
			} else {
				if (self.animation.queue && self._queue.length < self.animation.queueLimit) {
					self._queue.push(arguments);

					self.controls.enable && !self._clicking && self._updateControls(args.command);

					self._execAction('multiMixQueue', 1, arguments);
				} else {
					if (typeof self.callbacks.onMixBusy === 'function') {
						self.callbacks.onMixBusy.call(self._domNode, self._state, self);
					}
					self._$container.trigger('mixBusy', [self._state, self]);

					self._execAction('multiMixBusy', 1, arguments);
				}
			}
		},

		/**
   * Insert
   * @since 2.0.0
   * @param {array} arguments
   */

		insert: function insert() {
			var self = this,
			    args = self._parseInsertArgs(arguments),
			    callback = typeof args.callback === 'function' ? args.callback : null,
			    frag = document.createDocumentFragment(),
			    target = function () {
				self._refresh();

				if (self._$targets.length) {
					return args.index < self._$targets.length || !self._$targets.length ? self._$targets[args.index] : self._$targets[self._$targets.length - 1].nextElementSibling;
				} else {
					return self._$parent[0].children[0];
				}
			}();

			self._execAction('insert', 0, arguments);

			if (args.$object) {
				for (var i = 0; i < args.$object.length; i++) {
					var el = args.$object[i];

					frag.appendChild(el);
					frag.appendChild(document.createTextNode(' '));
				}

				self._$parent[0].insertBefore(frag, target);
			}

			self._execAction('insert', 1, arguments);

			if (_typeof(args.multiMix) === 'object') {
				self.multiMix(args.multiMix, callback);
			}
		},

		/**
   * Prepend
   * @since 2.0.0
   * @param {array} arguments
   */

		prepend: function prepend() {
			var self = this,
			    args = self._parseInsertArgs(arguments);

			self.insert(0, args.$object, args.multiMix, args.callback);
		},

		/**
   * Append
   * @since 2.0.0
   * @param {array} arguments
   */

		append: function append() {
			var self = this,
			    args = self._parseInsertArgs(arguments);

			self.insert(self._state.totalTargets, args.$object, args.multiMix, args.callback);
		},

		/**
   * Get Option
   * @since 2.0.0
   * @param {string} string
   * @return {mixed} value
   */

		getOption: function getOption(string) {
			var self = this,
			    getProperty = function getProperty(obj, prop) {
				var parts = prop.split('.'),
				    last = parts.pop(),
				    l = parts.length,
				    i = 1,
				    current = parts[0] || prop;

				while ((obj = obj[current]) && i < l) {
					current = parts[i];
					i++;
				}

				if (obj !== undf) {
					return obj[last] !== undf ? obj[last] : obj;
				}
			};

			return string ? self._execFilter('getOption', getProperty(self, string), arguments) : self;
		},

		/**
   * Set Options
   * @since 2.0.0
   * @param {object} config
   */

		setOptions: function setOptions(config) {
			var self = this;

			self._execAction('setOptions', 0, arguments);

			(typeof config === "undefined" ? "undefined" : _typeof(config)) === 'object' && $.extend(true, self, config);

			self._execAction('setOptions', 1, arguments);
		},

		/**
   * Get State
   * @since 2.0.0
   * @return {object} state
   */

		getState: function getState() {
			var self = this;

			return self._execFilter('getState', self._state, self);
		},

		/**
   * Force Refresh
   * @since 2.1.2
   */

		forceRefresh: function forceRefresh() {
			var self = this;

			self._refresh(false, true);
		},

		/**
   * Destroy
   * @since 2.0.0
   * @param {boolean} hideAll
   */

		destroy: function destroy(hideAll) {
			var self = this,
			    filters = $.MixItUp.prototype._bound._filter,
			    sorts = $.MixItUp.prototype._bound._sort;

			self._execAction('destroy', 0, arguments);

			self._$body.add($(self.selectors.sort)).add($(self.selectors.filter)).off('.mixItUp');

			for (var i = 0; i < self._$targets.length; i++) {
				var target = self._$targets[i];

				hideAll && (target.style.display = '');

				delete target.mixParent;
			}

			self._execAction('destroy', 1, arguments);

			if (filters[self.selectors.filter] && filters[self.selectors.filter] > 1) {
				filters[self.selectors.filter]--;
			} else if (filters[self.selectors.filter] === 1) {
				delete filters[self.selectors.filter];
			}

			if (sorts[self.selectors.sort] && sorts[self.selectors.sort] > 1) {
				sorts[self.selectors.sort]--;
			} else if (sorts[self.selectors.sort] === 1) {
				delete sorts[self.selectors.sort];
			}

			delete $.MixItUp.prototype._instances[self._id];
		}

	};

	/* jQuery Methods
 ---------------------------------------------------------------------- */

	/**
  * jQuery .mixItUp() method
  * @since 2.0.0
  * @extends $.fn
  */

	$.fn.mixItUp = function () {
		var args = arguments,
		    dataReturn = [],
		    eachReturn,
		    _instantiate = function _instantiate(domNode, settings) {
			var instance = new $.MixItUp(),
			    rand = function rand() {
				return ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6).toUpperCase();
			};

			instance._execAction('_instantiate', 0, arguments);

			domNode.id = !domNode.id ? 'MixItUp' + rand() : domNode.id;

			if (!instance._instances[domNode.id]) {
				instance._instances[domNode.id] = instance;
				instance._init(domNode, settings);
			}

			instance._execAction('_instantiate', 1, arguments);
		};

		eachReturn = this.each(function () {
			if (args && typeof args[0] === 'string') {
				var instance = $.MixItUp.prototype._instances[this.id];
				if (args[0] === 'isLoaded') {
					dataReturn.push(instance ? true : false);
				} else {
					var data = instance[args[0]](args[1], args[2], args[3]);
					if (data !== undf) dataReturn.push(data);
				}
			} else {
				_instantiate(this, args[0]);
			}
		});

		if (dataReturn.length) {
			return dataReturn.length > 1 ? dataReturn : dataReturn[0];
		} else {
			return eachReturn;
		}
	};

	/**
  * jQuery .removeStyle() method
  * @since 2.0.0
  * @extends $.fn
  */

	$.fn.removeStyle = function (style, prefix) {
		prefix = prefix ? prefix : '';

		return this.each(function () {
			var el = this,
			    styles = style.split(' ');

			for (var i = 0; i < styles.length; i++) {
				for (var j = 0; j < 4; j++) {
					switch (j) {
						case 0:
							var prop = styles[i];
							break;
						case 1:
							var prop = $.MixItUp.prototype._helpers._camelCase(prop);
							break;
						case 2:
							var prop = prefix + styles[i];
							break;
						case 3:
							var prop = $.MixItUp.prototype._helpers._camelCase(prefix + styles[i]);
					}

					if (el.style[prop] !== undf && typeof el.style[prop] !== 'unknown' && el.style[prop].length > 0) {
						el.style[prop] = '';
					}

					if (!prefix && j === 1) break;
				}
			}

			if (el.attributes && el.attributes.style && el.attributes.style !== undf && el.attributes.style.value === '') {
				el.attributes.removeNamedItem('style');
			}
		});
	};
})(jQuery);
!function (t) {
	t.fn.viewportChecker = function (e) {
		var o = { classToAdd: "visible", classToRemove: "invisible", offset: 100, repeat: !1, invertBottomOffset: !0, callbackFunction: function callbackFunction() {}, scrollHorizontal: !1 };t.extend(o, e);var a = this,
		    s = { height: t(window).height(), width: t(window).width() },
		    l = -1 != navigator.userAgent.toLowerCase().indexOf("webkit") ? "body" : "html";return this.checkElements = function () {
			var e, i;o.scrollHorizontal ? (e = t(l).scrollLeft(), i = e + s.width) : (e = t(l).scrollTop(), i = e + s.height), a.each(function () {
				var a = t(this),
				    s = {},
				    l = {};if (a.data("vp-add-class") && (l.classToAdd = a.data("vp-add-class")), a.data("vp-remove-class") && (l.classToRemove = a.data("vp-remove-class")), a.data("vp-offset") && (l.offset = a.data("vp-offset")), a.data("vp-repeat") && (l.repeat = a.data("vp-repeat")), a.data("vp-scrollHorizontal") && (l.scrollHorizontal = a.data("vp-scrollHorizontal")), a.data("vp-invertBottomOffset") && (l.scrollHorizontal = a.data("vp-invertBottomOffset")), t.extend(s, o), t.extend(s, l), !a.hasClass(s.classToAdd) || s.repeat) {
					var d = s.scrollHorizontal ? Math.round(a.offset().left) + s.offset : Math.round(a.offset().top) + s.offset,
					    n = s.scrollHorizontal ? d + a.width() : d + a.height();s.invertBottomOffset && (n -= 2 * s.offset), i > d && n > e ? (a.removeClass(s.classToRemove), a.addClass(s.classToAdd), s.callbackFunction(a, "add")) : a.hasClass(s.classToAdd) && s.repeat && (a.removeClass(s.classToAdd), s.callbackFunction(a, "remove"));
				}
			});
		}, t(window).bind("load scroll touchmove MSPointerMove", this.checkElements), t(window).resize(function () {
			s = { height: t(window).height(), width: t(window).width() }, a.checkElements();
		}), this.checkElements(), this;
	};
}(jQuery);
(function ($) {
	$.fn.countTo = function (options) {
		options = options || {};

		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from: $(this).data('from'),
				to: $(this).data('to'),
				speed: $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals: $(this).data('decimals')
			}, options);

			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
			    increment = (settings.to - settings.from) / loops;

			// references & variables that will change with each update
			var self = this,
			    $self = $(this),
			    loopCount = 0,
			    value = settings.from,
			    data = $self.data('countTo') || {};

			$self.data('countTo', data);

			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);

			// initialize the element with the starting value
			render(value);

			function updateTimer() {
				value += increment;
				loopCount++;

				render(value);

				if (typeof settings.onUpdate == 'function') {
					settings.onUpdate.call(self, value);
				}

				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;

					if (typeof settings.onComplete == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}

			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.text(formattedValue);
			}
		});
	};

	$.fn.countTo.defaults = {
		from: 0, // the number the element should start at
		to: 0, // the number the element should end at
		speed: 1000, // how long it should take to count between the target numbers
		refreshInterval: 100, // how often the element should be updated
		decimals: 0, // the number of decimal places to show
		formatter: formatter, // handler for formatting the value before rendering
		onUpdate: null, // callback method for every time the element is updated
		onComplete: null // callback method for when the element finishes updating
	};

	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
})(jQuery);

/*
 * easy-autocomplete
 * jQuery plugin for autocompletion
 * 
 * @author Łukasz Pawełczak (http://github.com/pawelczak)
 * @version 1.1.3
 * Copyright MIT License: https://github.com/pawelczak/easy-autocomplete/blob/master/LICENSE.txt
 */

var EasyAutocomplete = function (a) {
	return a.Configuration = function (a) {
		function b() {
			"xml" === a.dataType && (a.getValue || (a.getValue = function (a) {
				return $(a).text();
			}), a.list || (a.list = {}), a.list.sort || (a.list.sort = {}), a.list.sort.method = function (b, c) {
				return b = a.getValue(b), c = a.getValue(c), c > b ? -1 : b > c ? 1 : 0;
			}, a.list.match || (a.list.match = {}), a.list.match.method = function (b, c) {
				return b = a.getValue(b), c = a.getValue(c), b === c ? !0 : !1;
			});
		}function c() {
			function b(a, c) {
				var d = a || {};for (var e in a) {
					void 0 !== c[e] && null !== c[e] && ("object" != _typeof(c[e]) || c[e] instanceof Array ? d[e] = c[e] : b(a[e], c[e]));
				}return d;
			}g = b(g, a);
		}function d() {
			if ("list-required" !== g.url && "function" != typeof g.url) {
				var a = g.url;g.url = function () {
					return a;
				};
			}if (void 0 !== g.ajaxSettings.url && "function" != typeof g.ajaxSettings.url) {
				var a = g.ajaxSettings.url;g.ajaxSettings.url = function () {
					return a;
				};
			}if ("string" == typeof g.listLocation) {
				var b = g.listLocation;g.listLocation = function (a) {
					return a[b];
				};
			}if ("string" == typeof g.getValue) {
				var c = g.getValue;g.getValue = function (a) {
					return a[c];
				};
			}
		}function e() {
			g.ajaxSettings = void 0 !== a.ajaxSettings && "object" == _typeof(a.ajaxSettings) ? a.ajaxSettings : {};
		}function f(a) {
			return void 0 !== g[a] && null !== g[a] ? !0 : !1;
		}var g = { data: "list-required", url: "list-required", dataType: "json", listLocation: function listLocation(a) {
				return a;
			}, xmlElementName: "", getValue: function getValue(a) {
				return a;
			}, autocompleteOff: !0, placeholder: !1, ajaxCallback: function ajaxCallback() {}, matchResponseProperty: !1, list: { sort: { enabled: !1, method: function method(a, b) {
						return a = g.getValue(a), b = g.getValue(b), b > a ? -1 : a > b ? 1 : 0;
					} }, maxNumberOfElements: 6, match: { enabled: !1, caseSensitive: !1, method: function method(a, b) {
						return a = g.getValue(a), b = g.getValue(b), a === b ? !0 : !1;
					} }, showAnimation: { type: "normal", time: 400, callback: function callback() {} }, hideAnimation: { type: "normal", time: 400, callback: function callback() {} }, topBar: function topBar() {}, bottomBar: function bottomBar() {}, onClickEvent: function onClickEvent() {}, onLoadEvent: function onLoadEvent() {}, onMouseOverEvent: function onMouseOverEvent() {}, onMouseOutEvent: function onMouseOutEvent() {} }, highlightPhrase: !0, theme: "", cssClasses: "" };b(), c(), e(), d(), this.get = function (a) {
			return g[a];
		}, this.equals = function (a, b) {
			return f(a) && g[a] === b ? !0 : !1;
		}, this.checkDataUrlProperties = function () {
			return "list-required" === g.url && "list-required" === g.data ? !1 : !0;
		}, this.checkRequiredProperties = function () {
			for (var a in g) {
				if ("required" === g[a]) return logger.error("Option " + a + " must be defined"), !1;
			}return !0;
		};
	}, a;
}(EasyAutocomplete || {}),
    EasyAutocomplete = function (a) {
	return a.Logger = function () {
		this.error = function (a) {
			console.log("ERROR: " + a);
		}, this.warning = function (a) {
			console.log("WARNING: " + a);
		};
	}, a;
}(EasyAutocomplete || {}),
    EasyAutocomplete = function (a) {
	return a.Constans = function () {
		var a = { CONTAINER_CLASS: "easy-autocomplete-container", CONTAINER_ID: "eac-container-", WRAPPER_CSS_CLASS: "easy-autocomplete" };this.getValue = function (b) {
			return a[b];
		};
	}, a;
}(EasyAutocomplete || {}),
    EasyAutocomplete = function (a) {
	return a.proccess = function (a, b, c) {
		function d(b, c) {
			var d = [],
			    e = "";if (a.get("list").match.enabled) for (var f = 0, g = b.length; g > f; f += 1) {
				e = a.get("getValue")(b[f]), a.get("list").match.caseSensitive || ("string" == typeof e && (e = e.toLowerCase()), c = c.toLowerCase()), e.search(c) > -1 && d.push(b[f]);
			} else d = b;return d;
		}function e(b) {
			return b.length > a.get("list").maxNumberOfElements && (b = b.slice(0, a.get("list").maxNumberOfElements)), b;
		}function f(b) {
			return a.get("list").sort.enabled && b.sort(a.get("list").sort.method), b;
		}var g = c;return b = d(b, g), b = e(b), b = f(b);
	}, a;
}(EasyAutocomplete || {}),
    EasyAutocomplete = function (a) {
	return a.Template = function (a) {
		var b = { basic: { type: "basic", method: function method(a) {
					return a;
				} }, description: { type: "description", fields: { description: "description" }, method: function method(a) {
					return a + " - description";
				}, cssClass: "eac-description" }, iconLeft: { type: "iconLeft", fields: { icon: "" }, method: function method(a) {
					return a;
				}, cssClass: "eac-icon-left" }, iconRight: { type: "iconRight", fields: { iconSrc: "" }, method: function method(a) {
					return a;
				}, cssClass: "eac-icon-right" }, custom: { type: "custom", method: function method() {} } },
		    c = function c(a) {
			var c = a.fields;if ("description" === a.type) {
				var d = function d(a, b) {
					return a + " - <span>" + b[c.description] + "</span>";
				};return d;
			}if ("iconRight" === a.type) {
				var d = "";return "string" == typeof c.iconSrc ? d = function d(a, b) {
					return a + "<img class='eac-icon' src='" + b[c.iconSrc] + "' />";
				} : "function" == typeof c.iconSrc && (d = function d(a, b) {
					return a + "<img class='eac-icon' src='" + c.iconSrc(b) + "' />";
				}), d;
			}if ("iconLeft" === a.type) {
				var d = "";return "string" == typeof c.iconSrc ? d = function d(a, b) {
					return "<img class='eac-icon' src='" + b[c.iconSrc] + "' />" + a;
				} : "function" == typeof c.iconSrc && (d = function d(a, b) {
					return "<img class='eac-icon' src='" + c.iconSrc(b) + "' />" + a;
				}), d;
			}return "custom" === a.type ? a.method : b.basic.method;
		};prepareBuildMethod = function prepareBuildMethod(a) {
			return a && a.type && a.type && b[a.type] ? c(a) : b.basic.method;
		}, templateClass = function templateClass(a) {
			var c = function c() {
				return "";
			};return a && a.type && a.type && b[a.type] ? function () {
				var c = b[a.type].cssClass;return function () {
					return c;
				};
			}() : c;
		}, this.getTemplateClass = templateClass(a), this.build = prepareBuildMethod(a);
	}, a;
}(EasyAutocomplete || {}),
    EasyAutocomplete = function (a) {
	return a.main = function (b, c) {
		function d() {
			return n.checkDataUrlProperties() ? n.checkRequiredProperties() ? (e(), void g()) : void o.error("Will not work without mentioned properties.") : void o.error("One of options variables 'data' or 'url' must be defined.");
		}function e() {
			function a() {
				var a = $("<div>"),
				    c = m.getValue("WRAPPER_CSS_CLASS");n.get("theme") && (c += " eac-" + n.get("theme")), n.get("cssClasses") && (c += " " + n.get("cssClasses")), "" !== p.getTemplateClass() && (c += " " + p.getTemplateClass()), a.addClass(c), s.wrap(a), b();
			}function b() {
				var a = s.outerWidth();s.parent().css("width", a);
			}function c() {
				s.unwrap();
			}function d() {
				var a = $("<div>").addClass(m.getValue("CONTAINER_CLASS"));a.attr("id", f()).prepend($("<ul>")), function () {
					a.on("show", function () {
						switch (n.get("list").showAnimation.type) {case "slide":
								var b = n.get("list").showAnimation.time,
								    c = n.get("list").showAnimation.callback;a.find("ul").slideDown(b, c);break;case "fade":
								var b = n.get("list").showAnimation.time,
								    c = n.get("list").showAnimation.callback;a.find("ul").fadeIn(b), c;break;default:
								a.find("ul").show();}
					}).on("hide", function () {
						switch (n.get("list").hideAnimation.type) {case "slide":
								var b = n.get("list").hideAnimation.time,
								    c = n.get("list").hideAnimation.callback;a.find("ul").slideUp(b, c);break;case "fade":
								var b = n.get("list").hideAnimation.time,
								    c = n.get("list").hideAnimation.callback;a.find("ul").fadeOut(b, c);break;default:
								a.find("ul").hide();}
					}).on("selectElement", function () {
						a.find("ul li").removeClass("selected"), a.find("ul li:nth-child(" + (v + 1) + ")").addClass("selected");
					}).on("loadElements", function (b, c, d) {
						var e = "",
						    f = ($("<ul>"), a.find("ul"));f.empty().detach();for (var h = 0, i = c.length; i > h; h += 1) {
							e = $("<li><div class='eac-item'></div></li>"), function () {
								var a = h,
								    b = n.get("getValue")(c[a]);e.find(" > div").on("click", function () {
									s.val(b), j(a), n.get("list").onClickEvent();
								}).mouseover(function () {
									v = a, j(a), n.get("list").onMouseOverEvent();
								}).mouseout(function () {
									n.get("list").onMouseOutEvent();
								}).html(p.build(g(b, d), c[a]));
							}(), f.append(e);
						}a.empty(), a.append(n.get("list").topBar(d)), a.append(f), a.append(n.get("list").bottomBar(d)), n.get("list").onLoadEvent();
					});
				}(), s.after(a);
			}function e() {
				s.next("." + m.getValue("CONTAINER_CLASS")).remove();
			}function g(a, b) {
				return n.get("highlightPhrase") && "" !== b ? h(a, b) : a;
			}function h(a, b) {
				return (a + "").replace(new RegExp("(" + b + ")", "gi"), "<b>$1</b>");
			}s.parent().hasClass(m.getValue("WRAPPER_CSS_CLASS")) && (e(), c()), a(), d(), t = $("#" + f()), n.get("placeholder") && s.attr("placeholder", n.get("placeholder"));
		}function f() {
			var a = s.attr("id");if (void 0 === a || null === a) {
				do {
					a = m.getValue("CONTAINER_ID") + Math.rand(1e4);
				} while (0 === $("#" + a).length);
			} else a = m.getValue("CONTAINER_ID") + a;return a;
		}function g() {
			function a() {
				r("autocompleteOff", !0) && g(), b(), c(), d(), e(), f();
			}function b() {
				s.off("keyup").keyup(function (a) {
					function b() {
						function a(a) {
							var b = [];return $(a).find(n.get("xmlElementName")).each(function () {
								b.push(this);
							}), b;
						}function b() {
							var a = new Object(),
							    b = n.get("ajaxSettings") || {};for (set in b) {
								a[set] = b[set];
							}return a;
						}function c(a, b) {
							return n.get("matchResponseProperty") !== !1 || "string" == typeof n.get("matchResponseProperty") ? b[n.get("matchResponseProperty")] == a ? !0 : !1 : !0;
						}var d = s.val();"list-required" !== n.get("data") && (u = q(n, n.get("data"), s.val()), k(u, d), h());var e = b();(void 0 === e.url || "" === e.url) && (e.url = n.get("url")), (void 0 === e.dataType || "" === e.dataType) && (e.dataType = n.get("dataType")), void 0 !== e.url && "list-required" !== e.url && (e.url = e.url(d), $.ajax(e).done(function (b) {
							u = n.get("listLocation")(b), "XML" === n.get("dataType").toUpperCase() && (u = a(u));var e = u.length;0 !== e && (c(d, b) && (u = q(n, u, s.val()), k(u, d), h()), n.get("ajaxCallback")());
						}).fail(function () {
							o.warning("Fail to load response data");
						}).always(function () {}));
					}switch (a.keyCode) {case 27:
							i(), l();break;case 38:
							a.preventDefault(), u.length > 0 && v > 0 && (v -= 1, s.val(n.get("getValue")(u[v])), j(v));break;case 40:
							a.preventDefault(), u.length > 0 && v < u.length - 1 && (v += 1, s.val(n.get("getValue")(u[v])), j(v));break;default:
							(a.keyCode > 40 || 8 === a.keyCode) && b();}
				});
			}function c() {
				s.on("keydown", function (a) {
					a = a || window.event;var b = a.keyCode;return 38 === b ? (suppressKeypress = !0, !1) : void 0;
				}).keydown(function (a) {
					13 === a.keyCode && v > -1 && (s.val(n.get("getValue")(u[v])), v = -1, i(), a.preventDefault());
				});
			}function d() {
				s.off("keypress");
			}function e() {
				s.focus(function () {
					"" !== s.val() && u.length > 0 && (v = -1, h());
				});
			}function f() {
				s.blur(function () {
					setTimeout(function () {
						v = -1, i();
					}, 250);
				});
			}function g() {
				s.attr("autocomplete", "off");
			}a();
		}function h() {
			t.trigger("show"), j(v);
		}function i() {
			t.trigger("hide");
		}function j(a) {
			t.trigger("selectElement", a);
		}function k(a, b) {
			t.trigger("loadElements", [a, b]);
		}function l() {
			s.trigger("blur");
		}var m = new a.Constans(),
		    n = new a.Configuration(c),
		    o = new a.Logger(),
		    p = new a.Template(c.template),
		    q = a.proccess,
		    r = n.equals,
		    s = b,
		    t = "",
		    u = [],
		    v = -1;this.getConstants = function () {
			return m;
		}, this.getConfiguration = function () {
			return n;
		}, this.getContainer = function () {
			return t;
		}, this.build = function () {
			e();
		}, this.init = function () {
			d();
		};
	}, a;
}(EasyAutocomplete || {});$.fn.easyAutocomplete = function (a) {
	new EasyAutocomplete.main(this, a).init();
};
// Magnific Popup v1.0.0 by Dmitry Semenov
// http://bit.ly/magnific-popup#build=inline+image+iframe+gallery+retina+imagezoom+fastclick
(function (a) {
	typeof define == "function" && define.amd ? define(["jquery"], a) : (typeof exports === "undefined" ? "undefined" : _typeof(exports)) == "object" ? a(require("jquery")) : a(window.jQuery || window.Zepto);
})(function (a) {
	var b = "Close",
	    c = "BeforeClose",
	    d = "AfterClose",
	    e = "BeforeAppend",
	    f = "MarkupParse",
	    g = "Open",
	    h = "Change",
	    i = "mfp",
	    j = "." + i,
	    k = "mfp-ready",
	    l = "mfp-removing",
	    m = "mfp-prevent-close",
	    n,
	    o = function o() {},
	    p = !!window.jQuery,
	    q,
	    r = a(window),
	    s,
	    t,
	    u,
	    v,
	    w = function w(a, b) {
		n.ev.on(i + a + j, b);
	},
	    x = function x(b, c, d, e) {
		var f = document.createElement("div");return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f;
	},
	    y = function y(b, c) {
		n.ev.triggerHandler(i + b, c), n.st.callbacks && (b = b.charAt(0).toLowerCase() + b.slice(1), n.st.callbacks[b] && n.st.callbacks[b].apply(n, a.isArray(c) ? c : [c]));
	},
	    z = function z(b) {
		if (b !== v || !n.currTemplate.closeBtn) n.currTemplate.closeBtn = a(n.st.closeMarkup.replace("%title%", n.st.tClose)), v = b;return n.currTemplate.closeBtn;
	},
	    A = function A() {
		a.magnificPopup.instance || (n = new o(), n.init(), a.magnificPopup.instance = n);
	},
	    B = function B() {
		var a = document.createElement("p").style,
		    b = ["ms", "O", "Moz", "Webkit"];if (a.transition !== undefined) return !0;while (b.length) {
			if (b.pop() + "Transition" in a) return !0;
		}return !1;
	};o.prototype = { constructor: o, init: function init() {
			var b = navigator.appVersion;n.isIE7 = b.indexOf("MSIE 7.") !== -1, n.isIE8 = b.indexOf("MSIE 8.") !== -1, n.isLowIE = n.isIE7 || n.isIE8, n.isAndroid = /android/gi.test(b), n.isIOS = /iphone|ipad|ipod/gi.test(b), n.supportsTransition = B(), n.probablyMobile = n.isAndroid || n.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), s = a(document), n.popupsCache = {};
		}, open: function open(b) {
			var c;if (b.isObj === !1) {
				n.items = b.items.toArray(), n.index = 0;var d = b.items,
				    e;for (c = 0; c < d.length; c++) {
					e = d[c], e.parsed && (e = e.el[0]);if (e === b.el[0]) {
						n.index = c;break;
					}
				}
			} else n.items = a.isArray(b.items) ? b.items : [b.items], n.index = b.index || 0;if (n.isOpen) {
				n.updateItemHTML();return;
			}n.types = [], u = "", b.mainEl && b.mainEl.length ? n.ev = b.mainEl.eq(0) : n.ev = s, b.key ? (n.popupsCache[b.key] || (n.popupsCache[b.key] = {}), n.currTemplate = n.popupsCache[b.key]) : n.currTemplate = {}, n.st = a.extend(!0, {}, a.magnificPopup.defaults, b), n.fixedContentPos = n.st.fixedContentPos === "auto" ? !n.probablyMobile : n.st.fixedContentPos, n.st.modal && (n.st.closeOnContentClick = !1, n.st.closeOnBgClick = !1, n.st.showCloseBtn = !1, n.st.enableEscapeKey = !1), n.bgOverlay || (n.bgOverlay = x("bg").on("click" + j, function () {
				n.close();
			}), n.wrap = x("wrap").attr("tabindex", -1).on("click" + j, function (a) {
				n._checkIfClose(a.target) && n.close();
			}), n.container = x("container", n.wrap)), n.contentContainer = x("content"), n.st.preloader && (n.preloader = x("preloader", n.container, n.st.tLoading));var h = a.magnificPopup.modules;for (c = 0; c < h.length; c++) {
				var i = h[c];i = i.charAt(0).toUpperCase() + i.slice(1), n["init" + i].call(n);
			}y("BeforeOpen"), n.st.showCloseBtn && (n.st.closeBtnInside ? (w(f, function (a, b, c, d) {
				c.close_replaceWith = z(d.type);
			}), u += " mfp-close-btn-in") : n.wrap.append(z())), n.st.alignTop && (u += " mfp-align-top"), n.fixedContentPos ? n.wrap.css({ overflow: n.st.overflowY, overflowX: "hidden", overflowY: n.st.overflowY }) : n.wrap.css({ top: r.scrollTop(), position: "absolute" }), (n.st.fixedBgPos === !1 || n.st.fixedBgPos === "auto" && !n.fixedContentPos) && n.bgOverlay.css({ height: s.height(), position: "absolute" }), n.st.enableEscapeKey && s.on("keyup" + j, function (a) {
				a.keyCode === 27 && n.close();
			}), r.on("resize" + j, function () {
				n.updateSize();
			}), n.st.closeOnContentClick || (u += " mfp-auto-cursor"), u && n.wrap.addClass(u);var l = n.wH = r.height(),
			    m = {};if (n.fixedContentPos && n._hasScrollBar(l)) {
				var o = n._getScrollbarSize();o && (m.marginRight = o);
			}n.fixedContentPos && (n.isIE7 ? a("body, html").css("overflow", "hidden") : m.overflow = "hidden");var p = n.st.mainClass;return n.isIE7 && (p += " mfp-ie7"), p && n._addClassToMFP(p), n.updateItemHTML(), y("BuildControls"), a("html").css(m), n.bgOverlay.add(n.wrap).prependTo(n.st.prependTo || a(document.body)), n._lastFocusedEl = document.activeElement, setTimeout(function () {
				n.content ? (n._addClassToMFP(k), n._setFocus()) : n.bgOverlay.addClass(k), s.on("focusin" + j, n._onFocusIn);
			}, 16), n.isOpen = !0, n.updateSize(l), y(g), b;
		}, close: function close() {
			if (!n.isOpen) return;y(c), n.isOpen = !1, n.st.removalDelay && !n.isLowIE && n.supportsTransition ? (n._addClassToMFP(l), setTimeout(function () {
				n._close();
			}, n.st.removalDelay)) : n._close();
		}, _close: function _close() {
			y(b);var c = l + " " + k + " ";n.bgOverlay.detach(), n.wrap.detach(), n.container.empty(), n.st.mainClass && (c += n.st.mainClass + " "), n._removeClassFromMFP(c);if (n.fixedContentPos) {
				var e = { marginRight: "" };n.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e);
			}s.off("keyup" + j + " focusin" + j), n.ev.off(j), n.wrap.attr("class", "mfp-wrap").removeAttr("style"), n.bgOverlay.attr("class", "mfp-bg"), n.container.attr("class", "mfp-container"), n.st.showCloseBtn && (!n.st.closeBtnInside || n.currTemplate[n.currItem.type] === !0) && n.currTemplate.closeBtn && n.currTemplate.closeBtn.detach(), n._lastFocusedEl && a(n._lastFocusedEl).focus(), n.currItem = null, n.content = null, n.currTemplate = null, n.prevHeight = 0, y(d);
		}, updateSize: function updateSize(a) {
			if (n.isIOS) {
				var b = document.documentElement.clientWidth / window.innerWidth,
				    c = window.innerHeight * b;n.wrap.css("height", c), n.wH = c;
			} else n.wH = a || r.height();n.fixedContentPos || n.wrap.css("height", n.wH), y("Resize");
		}, updateItemHTML: function updateItemHTML() {
			var b = n.items[n.index];n.contentContainer.detach(), n.content && n.content.detach(), b.parsed || (b = n.parseEl(n.index));var c = b.type;y("BeforeChange", [n.currItem ? n.currItem.type : "", c]), n.currItem = b;if (!n.currTemplate[c]) {
				var d = n.st[c] ? n.st[c].markup : !1;y("FirstMarkupParse", d), d ? n.currTemplate[c] = a(d) : n.currTemplate[c] = !0;
			}t && t !== b.type && n.container.removeClass("mfp-" + t + "-holder");var e = n["get" + c.charAt(0).toUpperCase() + c.slice(1)](b, n.currTemplate[c]);n.appendContent(e, c), b.preloaded = !0, y(h, b), t = b.type, n.container.prepend(n.contentContainer), y("AfterChange");
		}, appendContent: function appendContent(a, b) {
			n.content = a, a ? n.st.showCloseBtn && n.st.closeBtnInside && n.currTemplate[b] === !0 ? n.content.find(".mfp-close").length || n.content.append(z()) : n.content = a : n.content = "", y(e), n.container.addClass("mfp-" + b + "-holder"), n.contentContainer.append(n.content);
		}, parseEl: function parseEl(b) {
			var c = n.items[b],
			    d;c.tagName ? c = { el: a(c) } : (d = c.type, c = { data: c, src: c.src });if (c.el) {
				var e = n.types;for (var f = 0; f < e.length; f++) {
					if (c.el.hasClass("mfp-" + e[f])) {
						d = e[f];break;
					}
				}c.src = c.el.attr("data-mfp-src"), c.src || (c.src = c.el.attr("href"));
			}return c.type = d || n.st.type || "inline", c.index = b, c.parsed = !0, n.items[b] = c, y("ElementParse", c), n.items[b];
		}, addGroup: function addGroup(a, b) {
			var c = function c(_c4) {
				_c4.mfpEl = this, n._openClick(_c4, a, b);
			};b || (b = {});var d = "click.magnificPopup";b.mainEl = a, b.items ? (b.isObj = !0, a.off(d).on(d, c)) : (b.isObj = !1, b.delegate ? a.off(d).on(d, b.delegate, c) : (b.items = a, a.off(d).on(d, c)));
		}, _openClick: function _openClick(b, c, d) {
			var e = d.midClick !== undefined ? d.midClick : a.magnificPopup.defaults.midClick;if (!e && (b.which === 2 || b.ctrlKey || b.metaKey)) return;var f = d.disableOn !== undefined ? d.disableOn : a.magnificPopup.defaults.disableOn;if (f) if (a.isFunction(f)) {
				if (!f.call(n)) return !0;
			} else if (r.width() < f) return !0;b.type && (b.preventDefault(), n.isOpen && b.stopPropagation()), d.el = a(b.mfpEl), d.delegate && (d.items = c.find(d.delegate)), n.open(d);
		}, updateStatus: function updateStatus(a, b) {
			if (n.preloader) {
				q !== a && n.container.removeClass("mfp-s-" + q), !b && a === "loading" && (b = n.st.tLoading);var c = { status: a, text: b };y("UpdateStatus", c), a = c.status, b = c.text, n.preloader.html(b), n.preloader.find("a").on("click", function (a) {
					a.stopImmediatePropagation();
				}), n.container.addClass("mfp-s-" + a), q = a;
			}
		}, _checkIfClose: function _checkIfClose(b) {
			if (a(b).hasClass(m)) return;var c = n.st.closeOnContentClick,
			    d = n.st.closeOnBgClick;if (c && d) return !0;if (!n.content || a(b).hasClass("mfp-close") || n.preloader && b === n.preloader[0]) return !0;if (b !== n.content[0] && !a.contains(n.content[0], b)) {
				if (d && a.contains(document, b)) return !0;
			} else if (c) return !0;return !1;
		}, _addClassToMFP: function _addClassToMFP(a) {
			n.bgOverlay.addClass(a), n.wrap.addClass(a);
		}, _removeClassFromMFP: function _removeClassFromMFP(a) {
			this.bgOverlay.removeClass(a), n.wrap.removeClass(a);
		}, _hasScrollBar: function _hasScrollBar(a) {
			return (n.isIE7 ? s.height() : document.body.scrollHeight) > (a || r.height());
		}, _setFocus: function _setFocus() {
			(n.st.focus ? n.content.find(n.st.focus).eq(0) : n.wrap).focus();
		}, _onFocusIn: function _onFocusIn(b) {
			if (b.target !== n.wrap[0] && !a.contains(n.wrap[0], b.target)) return n._setFocus(), !1;
		}, _parseMarkup: function _parseMarkup(b, c, d) {
			var e;d.data && (c = a.extend(d.data, c)), y(f, [b, c, d]), a.each(c, function (a, c) {
				if (c === undefined || c === !1) return !0;e = a.split("_");if (e.length > 1) {
					var d = b.find(j + "-" + e[0]);if (d.length > 0) {
						var f = e[1];f === "replaceWith" ? d[0] !== c[0] && d.replaceWith(c) : f === "img" ? d.is("img") ? d.attr("src", c) : d.replaceWith('<img src="' + c + '" class="' + d.attr("class") + '" />') : d.attr(e[1], c);
					}
				} else b.find(j + "-" + a).html(c);
			});
		}, _getScrollbarSize: function _getScrollbarSize() {
			if (n.scrollbarSize === undefined) {
				var a = document.createElement("div");a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), n.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a);
			}return n.scrollbarSize;
		} }, a.magnificPopup = { instance: null, proto: o.prototype, modules: [], open: function open(b, c) {
			return A(), b ? b = a.extend(!0, {}, b) : b = {}, b.isObj = !0, b.index = c || 0, this.instance.open(b);
		}, close: function close() {
			return a.magnificPopup.instance && a.magnificPopup.instance.close();
		}, registerModule: function registerModule(b, c) {
			c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b);
		}, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>', tClose: "Close (Esc)", tLoading: "Loading..." } }, a.fn.magnificPopup = function (b) {
		A();var c = a(this);if (typeof b == "string") {
			if (b === "open") {
				var d,
				    e = p ? c.data("magnificPopup") : c[0].magnificPopup,
				    f = parseInt(arguments[1], 10) || 0;e.items ? d = e.items[f] : (d = c, e.delegate && (d = d.find(e.delegate)), d = d.eq(f)), n._openClick({ mfpEl: d }, c, e);
			} else n.isOpen && n[b].apply(n, Array.prototype.slice.call(arguments, 1));
		} else b = a.extend(!0, {}, b), p ? c.data("magnificPopup", b) : c[0].magnificPopup = b, n.addGroup(c, b);return c;
	};var C = "inline",
	    D,
	    E,
	    F,
	    G = function G() {
		F && (E.after(F.addClass(D)).detach(), F = null);
	};a.magnificPopup.registerModule(C, { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function initInline() {
				n.types.push(C), w(b + "." + C, function () {
					G();
				});
			}, getInline: function getInline(b, c) {
				G();if (b.src) {
					var d = n.st.inline,
					    e = a(b.src);if (e.length) {
						var f = e[0].parentNode;f && f.tagName && (E || (D = d.hiddenClass, E = x(D), D = "mfp-" + D), F = e.after(E).detach().removeClass(D)), n.updateStatus("ready");
					} else n.updateStatus("error", d.tNotFound), e = a("<div>");return b.inlineElement = e, e;
				}return n.updateStatus("ready"), n._parseMarkup(c, {}, b), c;
			} } });var H,
	    I = function I(b) {
		if (b.data && b.data.title !== undefined) return b.data.title;var c = n.st.image.titleSrc;if (c) {
			if (a.isFunction(c)) return c.call(n, b);if (b.el) return b.el.attr(c) || "";
		}return "";
	};a.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function initImage() {
				var c = n.st.image,
				    d = ".image";n.types.push("image"), w(g + d, function () {
					n.currItem.type === "image" && c.cursor && a(document.body).addClass(c.cursor);
				}), w(b + d, function () {
					c.cursor && a(document.body).removeClass(c.cursor), r.off("resize" + j);
				}), w("Resize" + d, n.resizeImage), n.isLowIE && w("AfterChange", n.resizeImage);
			}, resizeImage: function resizeImage() {
				var a = n.currItem;if (!a || !a.img) return;if (n.st.image.verticalFit) {
					var b = 0;n.isLowIE && (b = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", n.wH - b);
				}
			}, _onImageHasSize: function _onImageHasSize(a) {
				a.img && (a.hasSize = !0, H && clearInterval(H), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (n.content && n.content.removeClass("mfp-loading"), a.imgHidden = !1));
			}, findImageSize: function findImageSize(a) {
				var b = 0,
				    c = a.img[0],
				    d = function d(e) {
					H && clearInterval(H), H = setInterval(function () {
						if (c.naturalWidth > 0) {
							n._onImageHasSize(a);return;
						}b > 200 && clearInterval(H), b++, b === 3 ? d(10) : b === 40 ? d(50) : b === 100 && d(500);
					}, e);
				};d(1);
			}, getImage: function getImage(b, c) {
				var d = 0,
				    e = function e() {
					b && (b.img[0].complete ? (b.img.off(".mfploader"), b === n.currItem && (n._onImageHasSize(b), n.updateStatus("ready")), b.hasSize = !0, b.loaded = !0, y("ImageLoadComplete")) : (d++, d < 200 ? setTimeout(e, 100) : f()));
				},
				    f = function f() {
					b && (b.img.off(".mfploader"), b === n.currItem && (n._onImageHasSize(b), n.updateStatus("error", g.tError.replace("%url%", b.src))), b.hasSize = !0, b.loaded = !0, b.loadError = !0);
				},
				    g = n.st.image,
				    h = c.find(".mfp-img");if (h.length) {
					var i = document.createElement("img");i.className = "mfp-img", b.el && b.el.find("img").length && (i.alt = b.el.find("img").attr("alt")), b.img = a(i).on("load.mfploader", e).on("error.mfploader", f), i.src = b.src, h.is("img") && (b.img = b.img.clone()), i = b.img[0], i.naturalWidth > 0 ? b.hasSize = !0 : i.width || (b.hasSize = !1);
				}return n._parseMarkup(c, { title: I(b), img_replaceWith: b.img }, b), n.resizeImage(), b.hasSize ? (H && clearInterval(H), b.loadError ? (c.addClass("mfp-loading"), n.updateStatus("error", g.tError.replace("%url%", b.src))) : (c.removeClass("mfp-loading"), n.updateStatus("ready")), c) : (n.updateStatus("loading"), b.loading = !0, b.hasSize || (b.imgHidden = !0, c.addClass("mfp-loading"), n.findImageSize(b)), c);
			} } });var J,
	    K = function K() {
		return J === undefined && (J = document.createElement("p").style.MozTransform !== undefined), J;
	};a.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function opener(a) {
				return a.is("img") ? a : a.find("img");
			} }, proto: { initZoom: function initZoom() {
				var a = n.st.zoom,
				    d = ".zoom",
				    e;if (!a.enabled || !n.supportsTransition) return;var f = a.duration,
				    g = function g(b) {
					var c = b.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
					    d = "all " + a.duration / 1e3 + "s " + a.easing,
					    e = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
					    f = "transition";return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, c.css(e), c;
				},
				    h = function h() {
					n.content.css("visibility", "visible");
				},
				    i,
				    j;w("BuildControls" + d, function () {
					if (n._allowZoom()) {
						clearTimeout(i), n.content.css("visibility", "hidden"), e = n._getItemToZoom();if (!e) {
							h();return;
						}j = g(e), j.css(n._getOffset()), n.wrap.append(j), i = setTimeout(function () {
							j.css(n._getOffset(!0)), i = setTimeout(function () {
								h(), setTimeout(function () {
									j.remove(), e = j = null, y("ZoomAnimationEnded");
								}, 16);
							}, f);
						}, 16);
					}
				}), w(c + d, function () {
					if (n._allowZoom()) {
						clearTimeout(i), n.st.removalDelay = f;if (!e) {
							e = n._getItemToZoom();if (!e) return;j = g(e);
						}j.css(n._getOffset(!0)), n.wrap.append(j), n.content.css("visibility", "hidden"), setTimeout(function () {
							j.css(n._getOffset());
						}, 16);
					}
				}), w(b + d, function () {
					n._allowZoom() && (h(), j && j.remove(), e = null);
				});
			}, _allowZoom: function _allowZoom() {
				return n.currItem.type === "image";
			}, _getItemToZoom: function _getItemToZoom() {
				return n.currItem.hasSize ? n.currItem.img : !1;
			}, _getOffset: function _getOffset(b) {
				var c;b ? c = n.currItem.img : c = n.st.zoom.opener(n.currItem.el || n.currItem);var d = c.offset(),
				    e = parseInt(c.css("padding-top"), 10),
				    f = parseInt(c.css("padding-bottom"), 10);d.top -= a(window).scrollTop() - e;var g = { width: c.width(), height: (p ? c.innerHeight() : c[0].offsetHeight) - f - e };return K() ? g["-moz-transform"] = g.transform = "translate(" + d.left + "px," + d.top + "px)" : (g.left = d.left, g.top = d.top), g;
			} } });var L = "iframe",
	    M = "//about:blank",
	    N = function N(a) {
		if (n.currTemplate[L]) {
			var b = n.currTemplate[L].find("iframe");b.length && (a || (b[0].src = M), n.isIE8 && b.css("display", a ? "block" : "none"));
		}
	};a.magnificPopup.registerModule(L, { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function initIframe() {
				n.types.push(L), w("BeforeChange", function (a, b, c) {
					b !== c && (b === L ? N() : c === L && N(!0));
				}), w(b + "." + L, function () {
					N();
				});
			}, getIframe: function getIframe(b, c) {
				var d = b.src,
				    e = n.st.iframe;a.each(e.patterns, function () {
					if (d.indexOf(this.index) > -1) return this.id && (typeof this.id == "string" ? d = d.substr(d.lastIndexOf(this.id) + this.id.length, d.length) : d = this.id.call(this, d)), d = this.src.replace("%id%", d), !1;
				});var f = {};return e.srcAction && (f[e.srcAction] = d), n._parseMarkup(c, f, b), n.updateStatus("ready"), c;
			} } });var O = function O(a) {
		var b = n.items.length;return a > b - 1 ? a - b : a < 0 ? b + a : a;
	},
	    P = function P(a, b, c) {
		return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
	};a.magnificPopup.registerModule("gallery", { options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function initGallery() {
				var c = n.st.gallery,
				    d = ".mfp-gallery",
				    e = Boolean(a.fn.mfpFastClick);n.direction = !0;if (!c || !c.enabled) return !1;u += " mfp-gallery", w(g + d, function () {
					c.navigateByImgClick && n.wrap.on("click" + d, ".mfp-img", function () {
						if (n.items.length > 1) return n.next(), !1;
					}), s.on("keydown" + d, function (a) {
						a.keyCode === 37 ? n.prev() : a.keyCode === 39 && n.next();
					});
				}), w("UpdateStatus" + d, function (a, b) {
					b.text && (b.text = P(b.text, n.currItem.index, n.items.length));
				}), w(f + d, function (a, b, d, e) {
					var f = n.items.length;d.counter = f > 1 ? P(c.tCounter, e.index, f) : "";
				}), w("BuildControls" + d, function () {
					if (n.items.length > 1 && c.arrows && !n.arrowLeft) {
						var b = c.arrowMarkup,
						    d = n.arrowLeft = a(b.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(m),
						    f = n.arrowRight = a(b.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(m),
						    g = e ? "mfpFastClick" : "click";d[g](function () {
							n.prev();
						}), f[g](function () {
							n.next();
						}), n.isIE7 && (x("b", d[0], !1, !0), x("a", d[0], !1, !0), x("b", f[0], !1, !0), x("a", f[0], !1, !0)), n.container.append(d.add(f));
					}
				}), w(h + d, function () {
					n._preloadTimeout && clearTimeout(n._preloadTimeout), n._preloadTimeout = setTimeout(function () {
						n.preloadNearbyImages(), n._preloadTimeout = null;
					}, 16);
				}), w(b + d, function () {
					s.off(d), n.wrap.off("click" + d), n.arrowLeft && e && n.arrowLeft.add(n.arrowRight).destroyMfpFastClick(), n.arrowRight = n.arrowLeft = null;
				});
			}, next: function next() {
				n.direction = !0, n.index = O(n.index + 1), n.updateItemHTML();
			}, prev: function prev() {
				n.direction = !1, n.index = O(n.index - 1), n.updateItemHTML();
			}, goTo: function goTo(a) {
				n.direction = a >= n.index, n.index = a, n.updateItemHTML();
			}, preloadNearbyImages: function preloadNearbyImages() {
				var a = n.st.gallery.preload,
				    b = Math.min(a[0], n.items.length),
				    c = Math.min(a[1], n.items.length),
				    d;for (d = 1; d <= (n.direction ? c : b); d++) {
					n._preloadItem(n.index + d);
				}for (d = 1; d <= (n.direction ? b : c); d++) {
					n._preloadItem(n.index - d);
				}
			}, _preloadItem: function _preloadItem(b) {
				b = O(b);if (n.items[b].preloaded) return;var c = n.items[b];c.parsed || (c = n.parseEl(b)), y("LazyLoad", c), c.type === "image" && (c.img = a('<img class="mfp-img" />').on("load.mfploader", function () {
					c.hasSize = !0;
				}).on("error.mfploader", function () {
					c.hasSize = !0, c.loadError = !0, y("LazyLoadError", c);
				}).attr("src", c.src)), c.preloaded = !0;
			} } });var Q = "retina";a.magnificPopup.registerModule(Q, { options: { replaceSrc: function replaceSrc(a) {
				return a.src.replace(/\.\w+$/, function (a) {
					return "@2x" + a;
				});
			}, ratio: 1 }, proto: { initRetina: function initRetina() {
				if (window.devicePixelRatio > 1) {
					var a = n.st.retina,
					    b = a.ratio;b = isNaN(b) ? b() : b, b > 1 && (w("ImageHasSize." + Q, function (a, c) {
						c.img.css({ "max-width": c.img[0].naturalWidth / b, width: "100%" });
					}), w("ElementParse." + Q, function (c, d) {
						d.src = a.replaceSrc(d, b);
					}));
				}
			} } }), function () {
		var b = 1e3,
		    c = "ontouchstart" in window,
		    d = function d() {
			r.off("touchmove" + f + " touchend" + f);
		},
		    e = "mfpFastClick",
		    f = "." + e;a.fn.mfpFastClick = function (e) {
			return a(this).each(function () {
				var g = a(this),
				    h;if (c) {
					var i, j, k, l, m, n;g.on("touchstart" + f, function (a) {
						l = !1, n = 1, m = a.originalEvent ? a.originalEvent.touches[0] : a.touches[0], j = m.clientX, k = m.clientY, r.on("touchmove" + f, function (a) {
							m = a.originalEvent ? a.originalEvent.touches : a.touches, n = m.length, m = m[0];if (Math.abs(m.clientX - j) > 10 || Math.abs(m.clientY - k) > 10) l = !0, d();
						}).on("touchend" + f, function (a) {
							d();if (l || n > 1) return;h = !0, a.preventDefault(), clearTimeout(i), i = setTimeout(function () {
								h = !1;
							}, b), e();
						});
					});
				}g.on("click" + f, function () {
					h || e();
				});
			});
		}, a.fn.destroyMfpFastClick = function () {
			a(this).off("touchstart" + f + " click" + f), c && r.off("touchmove" + f + " touchend" + f);
		};
	}(), A();
});
/*
 * Note that this is toastr v2.1.3, the "latest" version in url has no more maintenance,
 * please go to https://cdnjs.com/libraries/toastr.js and pick a certain version you want to use,
 * make sure you copy the url from the website since the url may change between versions.
 * */
!function (e) {
	e(["jquery"], function (e) {
		return function () {
			function t(e, t, n) {
				return g({ type: O.error, iconClass: m().iconClasses.error, message: e, optionsOverride: n, title: t });
			}function n(t, n) {
				return t || (t = m()), v = e("#" + t.containerId), v.length ? v : (n && (v = d(t)), v);
			}function o(e, t, n) {
				return g({ type: O.info, iconClass: m().iconClasses.info, message: e, optionsOverride: n, title: t });
			}function s(e) {
				C = e;
			}function i(e, t, n) {
				return g({ type: O.success, iconClass: m().iconClasses.success, message: e, optionsOverride: n, title: t });
			}function a(e, t, n) {
				return g({ type: O.warning, iconClass: m().iconClasses.warning, message: e, optionsOverride: n, title: t });
			}function r(e, t) {
				var o = m();v || n(o), u(e, o, t) || l(o);
			}function c(t) {
				var o = m();return v || n(o), t && 0 === e(":focus", t).length ? void h(t) : void (v.children().length && v.remove());
			}function l(t) {
				for (var n = v.children(), o = n.length - 1; o >= 0; o--) {
					u(e(n[o]), t);
				}
			}function u(t, n, o) {
				var s = !(!o || !o.force) && o.force;return !(!t || !s && 0 !== e(":focus", t).length) && (t[n.hideMethod]({ duration: n.hideDuration, easing: n.hideEasing, complete: function complete() {
						h(t);
					} }), !0);
			}function d(t) {
				return v = e("<div/>").attr("id", t.containerId).addClass(t.positionClass), v.appendTo(e(t.target)), v;
			}function p() {
				return { tapToDismiss: !0, toastClass: "toast", containerId: "toast-container", debug: !1, showMethod: "fadeIn", showDuration: 300, showEasing: "swing", onShown: void 0, hideMethod: "fadeOut", hideDuration: 1e3, hideEasing: "swing", onHidden: void 0, closeMethod: !1, closeDuration: !1, closeEasing: !1, closeOnHover: !0, extendedTimeOut: 1e3, iconClasses: { error: "toast-error", info: "toast-info", success: "toast-success", warning: "toast-warning" }, iconClass: "toast-info", positionClass: "toast-top-right", timeOut: 5e3, titleClass: "toast-title", messageClass: "toast-message", escapeHtml: !1, target: "body", closeHtml: '<button type="button">&times;</button>', closeClass: "toast-close-button", newestOnTop: !0, preventDuplicates: !1, progressBar: !1, progressClass: "toast-progress", rtl: !1 };
			}function f(e) {
				C && C(e);
			}function g(t) {
				function o(e) {
					return null == e && (e = ""), e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
				}function s() {
					c(), u(), d(), p(), g(), C(), l(), i();
				}function i() {
					var e = "";switch (t.iconClass) {case "toast-success":case "toast-info":
							e = "polite";break;default:
							e = "assertive";}I.attr("aria-live", e);
				}function a() {
					E.closeOnHover && I.hover(H, D), !E.onclick && E.tapToDismiss && I.click(b), E.closeButton && j && j.click(function (e) {
						e.stopPropagation ? e.stopPropagation() : void 0 !== e.cancelBubble && e.cancelBubble !== !0 && (e.cancelBubble = !0), E.onCloseClick && E.onCloseClick(e), b(!0);
					}), E.onclick && I.click(function (e) {
						E.onclick(e), b();
					});
				}function r() {
					I.hide(), I[E.showMethod]({ duration: E.showDuration, easing: E.showEasing, complete: E.onShown }), E.timeOut > 0 && (k = setTimeout(b, E.timeOut), F.maxHideTime = parseFloat(E.timeOut), F.hideEta = new Date().getTime() + F.maxHideTime, E.progressBar && (F.intervalId = setInterval(x, 10)));
				}function c() {
					t.iconClass && I.addClass(E.toastClass).addClass(y);
				}function l() {
					E.newestOnTop ? v.prepend(I) : v.append(I);
				}function u() {
					if (t.title) {
						var e = t.title;E.escapeHtml && (e = o(t.title)), M.append(e).addClass(E.titleClass), I.append(M);
					}
				}function d() {
					if (t.message) {
						var e = t.message;E.escapeHtml && (e = o(t.message)), B.append(e).addClass(E.messageClass), I.append(B);
					}
				}function p() {
					E.closeButton && (j.addClass(E.closeClass).attr("role", "button"), I.prepend(j));
				}function g() {
					E.progressBar && (q.addClass(E.progressClass), I.prepend(q));
				}function C() {
					E.rtl && I.addClass("rtl");
				}function O(e, t) {
					if (e.preventDuplicates) {
						if (t.message === w) return !0;w = t.message;
					}return !1;
				}function b(t) {
					var n = t && E.closeMethod !== !1 ? E.closeMethod : E.hideMethod,
					    o = t && E.closeDuration !== !1 ? E.closeDuration : E.hideDuration,
					    s = t && E.closeEasing !== !1 ? E.closeEasing : E.hideEasing;if (!e(":focus", I).length || t) return clearTimeout(F.intervalId), I[n]({ duration: o, easing: s, complete: function complete() {
							h(I), clearTimeout(k), E.onHidden && "hidden" !== P.state && E.onHidden(), P.state = "hidden", P.endTime = new Date(), f(P);
						} });
				}function D() {
					(E.timeOut > 0 || E.extendedTimeOut > 0) && (k = setTimeout(b, E.extendedTimeOut), F.maxHideTime = parseFloat(E.extendedTimeOut), F.hideEta = new Date().getTime() + F.maxHideTime);
				}function H() {
					clearTimeout(k), F.hideEta = 0, I.stop(!0, !0)[E.showMethod]({ duration: E.showDuration, easing: E.showEasing });
				}function x() {
					var e = (F.hideEta - new Date().getTime()) / F.maxHideTime * 100;q.width(e + "%");
				}var E = m(),
				    y = t.iconClass || E.iconClass;if ("undefined" != typeof t.optionsOverride && (E = e.extend(E, t.optionsOverride), y = t.optionsOverride.iconClass || y), !O(E, t)) {
					T++, v = n(E, !0);var k = null,
					    I = e("<div/>"),
					    M = e("<div/>"),
					    B = e("<div/>"),
					    q = e("<div/>"),
					    j = e(E.closeHtml),
					    F = { intervalId: null, hideEta: null, maxHideTime: null },
					    P = { toastId: T, state: "visible", startTime: new Date(), options: E, map: t };return s(), r(), a(), f(P), E.debug && console && console.log(P), I;
				}
			}function m() {
				return e.extend({}, p(), b.options);
			}function h(e) {
				v || (v = n()), e.is(":visible") || (e.remove(), e = null, 0 === v.children().length && (v.remove(), w = void 0));
			}var v,
			    C,
			    w,
			    T = 0,
			    O = { error: "error", info: "info", success: "success", warning: "warning" },
			    b = { clear: r, remove: c, error: t, getContainer: n, info: o, options: {}, subscribe: s, success: i, version: "2.1.3", warning: a };return b;
		}();
	});
}("function" == typeof define && define.amd ? define : function (e, t) {
	"undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : window.toastr = t(window.jQuery);
});
//# sourceMappingURL=toastr.js.map
/*-------------------------------------------------------------------------------------------------------------------------------*/
/*This is main JS file that contains custom style rules used in this template*/
/*-------------------------------------------------------------------------------------------------------------------------------*/
/* Template Name: Site Title*/
/* Version: 1.0 Initial Release*/
/* Build Date: 22-04-2015*/
/* Author: Unbranded*/
/* Website: http://moonart.net.ua/site/ 
/* Copyright: (C) 2015 */
/*-------------------------------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------*/
/* TABLE OF CONTENTS: */
/*--------------------------------------------------------*/
/* 01 - VARIABLES */
/* 02 - page calculations */
/* 03 - function on document ready */
/* 04 - function on page load */
/* 05 - function on page resize */
/* 06 - swiper sliders */
/* 07 - buttons, clicks, hovers */
/*-------------------------------------------------------------------------------------------------------------------------------*/

$(function () {

	"use strict";

	/*================*/
	/* 01 - VARIABLES */
	/*================*/

	var swipers = [],
	    winW,
	    winH,
	    winScr,
	    _isresponsive,
	    smPoint = 768,
	    mdPoint = 992,
	    lgPoint = 1200,
	    addPoint = 1600,
	    _ismobile = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i);

	/*========================*/
	/* 02 - page calculations */
	/*========================*/
	function pageCalculations() {
		winW = $(window).width();
		winH = $(window).height();
		if ($('.menu-button').is(':visible')) _isresponsive = true;else _isresponsive = false;
		if (winW <= 992) $(".header-menu").css({ "max-height": winH - 20 + "px" });
	};

	/*=================================*/
	/* 03 - function on document ready */
	/*=================================*/
	pageCalculations();

	//center all images inside containers
	$('.center-image').each(function () {
		var bgSrc = $(this).attr('src');
		$(this).parent().addClass('background-block').css({ 'background-image': 'url(' + bgSrc + ')' });
		$(this).hide();
	});

	/*============================*/
	/* 04 - function on page load */
	/*============================*/
	$(window).load(function () {
		$(".be-loader").fadeOut();
		initSwiper();
		notification();
		//$('.isotope-grid').isotope({
		//	itemSelector: '.isotope-item ',
		//	percentPosition: true
		//});
		setTimeout(function () {
			$('.tab-wrapper.style-2 .tab-info').addClass('none');
		}, 100);
	});

	/*==============================*/
	/* 05 - function on page resize */
	/*==============================*/
	$(window).resize(function () {
		resizeCall();
		notification();
	});

	function resizeCall() {
		pageCalculations();

		$('.swiper-container.initialized[data-slides-per-view="responsive"]').each(function () {
			var thisSwiper = swipers['swiper-' + $(this).attr('id')],
			    $t = $(this),
			    slidesPerViewVar = updateSlidesPerView($t);
			thisSwiper.params.slidesPerView = slidesPerViewVar;
			thisSwiper.reInit();
			var paginationSpan = $t.find('.pagination span');
			var paginationSlice = paginationSpan.hide().slice(0, paginationSpan.length + 1 - slidesPerViewVar);
			if (paginationSlice.length <= 1 || slidesPerViewVar >= $t.find('.swiper-slide').length) $t.addClass('pagination-hidden');else $t.removeClass('pagination-hidden');
			paginationSlice.show();
			updateSlidesPerView(this);
		});
		var a = $(window).height() - 70;
		$("#one").css("max-height", a + "px");
	};

	/*=====================*/
	/* 06 - swiper sliders */
	/*=====================*/
	function initSwiper() {
		var initIterator = 0;
		$('.swiper-container').each(function () {
			var $t = $(this);

			var index = 'swiper-unique-id-' + initIterator;

			$t.addClass('swiper-' + index + ' initialized').attr('id', index);
			$t.find('.pagination').addClass('pagination-' + index);

			var autoPlayVar = parseInt($t.attr('data-autoplay'), 10);
			var centerVar = parseInt($t.attr('data-center'), 10);
			var simVar = $t.closest('.circle-description-slide-box').length ? false : true;

			var slidesPerViewVar = $t.attr('data-slides-per-view');
			if (slidesPerViewVar == 'responsive') {
				slidesPerViewVar = updateSlidesPerView($t);
			} else slidesPerViewVar = parseInt(slidesPerViewVar, 10);

			var loopVar = parseInt($t.attr('data-loop'), 10);
			var speedVar = parseInt($t.attr('data-speed'), 10);

			var slidesPerGroup = parseInt($t.attr('data-slides-per-group'), 10);
			if (!slidesPerGroup) {
				slidesPerGroup = 1;
			}

			swipers['swiper-' + index] = new Swiper('.swiper-' + index, {
				speed: speedVar,
				pagination: '.pagination-' + index,
				loop: loopVar,
				paginationClickable: true,
				autoplay: autoPlayVar,
				slidesPerView: slidesPerViewVar,
				slidesPerGroup: slidesPerGroup,
				keyboardControl: true,
				calculateHeight: true,
				simulateTouch: simVar,
				centeredSlides: centerVar,
				roundLengths: true,
				onSlideChangeEnd: function onSlideChangeEnd(swiper) {
					var activeIndex = loopVar === 1 ? swiper.activeLoopIndex : swiper.activeIndex;
					var qVal = $t.find('.swiper-slide-active').attr('data-val');
					$t.find('.swiper-slide[data-val="' + qVal + '"]').addClass('active');
				},
				onSlideChangeStart: function onSlideChangeStart(swiper) {
					$t.find('.swiper-slide.active').removeClass('active');
					if ($t.hasClass('thumbnails-preview')) {
						var activeIndex = loopVar === 1 ? swiper.activeLoopIndex : swiper.activeIndex;
						swipers['swiper-' + $t.next().attr('id')].swipeTo(activeIndex);
						$t.next().find('.current').removeClass('current');
						$t.next().find('.swiper-slide[data-val="' + activeIndex + '"]').addClass('current');
					}
				},
				onSlideClick: function onSlideClick(swiper) {
					if ($t.hasClass('thumbnails')) {
						swipers['swiper-' + $t.prev().attr('id')].swipeTo(swiper.clickedSlideIndex);
					}
				},
				onResize: function onResize(swiper) {
					var browserWidthResize2 = $(window).width();
					if (browserWidthResize2 < 750) {
						swiper.params.slidesPerGroup = 1;
					} else {
						swiper.params.slidesPerGroup = slidesPerGroup;
						swiper.resizeFix(true);
					}
				}
			});
			swipers['swiper-' + index].reInit();
			if ($t.attr('data-slides-per-view') == 'responsive') {
				var paginationSpan = $t.find('.pagination span');
				var paginationSlice = paginationSpan.hide().slice(0, paginationSpan.length + 1 - slidesPerViewVar);
				if (paginationSlice.length <= 1 || slidesPerViewVar >= $t.find('.swiper-slide').length) $t.addClass('pagination-hidden');else $t.removeClass('pagination-hidden');
				paginationSlice.show();
			}
			initIterator++;
		});
	};

	function updateSlidesPerView(swiperContainer) {
		if (winW >= addPoint) return parseInt($(swiperContainer).attr('data-add-slides'), 10);else if (winW >= lgPoint) return parseInt($(swiperContainer).attr('data-lg-slides'), 10);else if (winW >= mdPoint) return parseInt($(swiperContainer).attr('data-md-slides'), 10);else if (winW >= smPoint) return parseInt($(swiperContainer).attr('data-sm-slides'), 10);else return parseInt($(swiperContainer).attr('data-xs-slides'), 10);
		// else return 0;
	};

	//swiper arrows
	$('.swiper-arrow-left.be-out').on('click', function () {
		swipers['swiper-' + $(this).parent().parent().find(".swiper-container").attr('id')].swipePrev();
		return false;
	});

	$('.swiper-arrow-right.be-out').on('click', function () {
		swipers['swiper-' + $(this).parent().parent().find(".swiper-container").attr('id')].swipeNext();
		return false;
	});

	$('.swiper-arrow-left').on('click', function () {
		if (!$(this).hasClass("be-out")) swipers['swiper-' + $(this).parent().attr('id')].swipePrev();
	});

	$('.swiper-arrow-right').on('click', function () {
		if (!$(this).hasClass("be-out")) swipers['swiper-' + $(this).parent().attr('id')].swipeNext();
	});

	/*==============================*/
	/* 07 - buttons, clicks, hovers */
	/*==============================*/

	// central images background
	$('.be-center-image').each(function () {
		var bgSrc = $(this).attr('src');
		$(this).parent().css({ 'background-image': 'url(' + bgSrc + ')' });
		$(this).hide();
	});

	// top menu
	$(".cmn-toggle-switch").on("click", function () {
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			$('body').removeClass('menu-open');
		} else {
			$(this).addClass("active");
			$('body').addClass('menu-open');
		}
		$(".header-menu").stop().slideToggle();
		$(".large-popup").slideUp();
		return false;
	});

	$(".header-menu i").on("click", function () {
		if ($(window).width() < 1200) {
			if ($(this).hasClass("fa-angle-down")) {
				$(this).removeClass("fa-angle-down");
				$(this).addClass("fa-angle-up");
				$(this).parent().find("ul:first").stop().slideToggle();
			} else {
				$(this).removeClass("fa-angle-up");
				$(this).addClass("fa-angle-down");
				$(this).parent().find("ul:first").stop().slideToggle();
			}
		}
	});

	$(".filter-block a").on("click", function () {
		$(".filter-block li").removeClass("be-active");
		if ($(window).width() > 1199) {
			$(".be-popup").fadeOut();
			$(this).parent().find(".be-popup").fadeIn();
		} else {
			$(".be-popup").slideUp();
			$(this).parent().find(".be-popup").slideDown();
		}
		$(this).parent().addClass("be-active");
		$(".be-fixed-filter").addClass("active-fixed");
	});
	$(".be-fixed-filter, .be-popup .fa").on("click", function () {
		$(".filter-block li").removeClass("be-active");
		if ($(window).width() > 1199) $(".be-popup").fadeOut();else $(".be-popup").slideUp();
		$(".be-fixed-filter").removeClass("active-fixed");
	});

	//
	$(".color").on("click", function () {
		$(".color").removeClass("active-color");
		$(this).addClass("active-color");
	});

	$(".be-drop-down").on("click", function () {
		$(this).toggleClass("be-dropdown-active");
		$(this).find(".drop-down-list").stop().slideToggle();
	});
	$(".drop-down-list li").on("click", function () {
		var new_value = $(this).find("a").text();
		$(this).parent().parent().find(".be-dropdown-content").text(new_value);
		return false;
	});

	$('.creative_filds_block').on('click', 'a', function (e) {
		e.preventDefault();
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	});

	//

	$(".login_block .btn-login").on("click", function () {
		$(".large-popup.login").slideToggle();
		return false;
	});

	$(".be-signup-link").on("click", function () {
		$(".large-popup.login").slideDown();
		return false;
	});
	$(".large-popup.login .close-button").on("click", function () {
		$(".large-popup.login").slideUp();
	});

	$(".be-register").on("click", function () {
		$(".large-popup.register").slideDown();
		return false;
	});
	$(".large-popup.register .close-button").on("click", function () {
		$(".large-popup.register").slideUp();
	});
	$(".btn-share").on("click", function () {
		$(".share-buttons").animate({ width: 'toggle' }, 350);
	});
	$(".btn-message").on("click", function (event) {
		event.stopPropagation();
		var $tgt = jQuery(event.target);
		if ($tgt.is('.close-button')) {
			$(this).find(".message-popup").slideUp();
		} else {
			$(this).find(".message-popup").slideDown();
		}
	});
	$(".btn-rename").on("click", function (event) {
		event.stopPropagation();
		var $tgt = jQuery(event.target);
		if ($tgt.is('.close-button')) {
			$(this).find(".message-popup").slideUp();
		} else {
			$(this).find(".message-popup").slideDown();
		}
	});

	$(".edit-collection").on("click", function () {
		$(this).find(".c_edit").slideToggle();
		return false;
	});

	$(".s_keywords a").eq(0).on("click", function () {
		$(this).parent().find(".color-6").fadeOut();
	});

	$(".s_keywords i").on("click", function () {
		if ($(this).parent().index() != 0) $(this).parent().fadeOut();
	});
	/*notification*/
	$(".messages-popup").on("click", function () {
		$(".notofications-block").hide();
		$(".messages-block").slideToggle();
		return false;
	});
	$(".notofications-popup").on("click", function () {
		$(".messages-block").hide();
		$(".notofications-block").slideToggle();
		return false;
	});
	function notification() {
		$('.noto-body').css("max-height", winH - 150);
	};

	/*accordion*/
	$('.accordion').each(function () {
		$(this).find('.acc-title').on("click", function () {
			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
				$(this).siblings('.acc-body').slideUp();
			} else {
				$(this).closest('.accordion').find('.active').removeClass('active');
				$(this).closest('.accordion').find('.acc-body').slideUp('slow');
				$(this).toggleClass('active');
				$(this).siblings('.acc-body').slideToggle('slow');
			}
		});
	});

	//statistic counters
	$('.number-counters').viewportChecker({
		classToAdd: 'counted',
		offset: 100,
		callbackFunction: function callbackFunction(elem, action) {
			elem.find('.stat-number').countTo();
		}
	});

	//Tabs
	var tabFinish = 0;
	$('.nav-tab-item').on('click', function () {
		var $t = $(this);
		if (tabFinish || $t.hasClass('active')) return false;
		tabFinish = 1;
		$t.closest('.nav-tab').find('.nav-tab-item').removeClass('active');
		$t.addClass('active');
		var index = $t.parent().parent().find('.nav-tab-item').index(this);
		$t.closest('.tab-wrapper').find('.tab-info:visible').fadeOut(500, function () {
			$t.closest('.tab-wrapper').find('.tab-info').eq(index).fadeIn(500, function () {
				tabFinish = 0;
			});
		});
	});

	/*table sorting*/
	$('.table-sotring').each(function () {
		$(this).tablesorter();
	});

	$('.select-all').change(function () {
		if ($(this).prop('checked')) {
			$(this).closest('form').find('.noto-entry .form-checkbox input').prop('checked', true);
		} else {
			$(this).closest('form').find('.noto-entry .form-checkbox input').prop('checked', false);
		}
	});

	var post_id = 1;
	$("a.add_section").on("click", function () {

		$(".creative_filds_block ul").append("<li><a href='#" + post_id + "'>New section</a>");
		$("._editor-content_").append('<div class="affix-block" id="' + post_id + '"><div class="be-large-post"><div class="info-block style-2"><div class="be-large-post-align"><h3 class="info-block-label">New section</h3></div><i class="fa fa-times close-w"></i></div><div class="be-large-post-align"><div class="row"><div class="input-col col-xs-12"><div class="form-group focus-2"><div class="form-label">Section Title</div><input class="form-input" type="text" placeholder="About Me"></div></div><div class="input-col col-xs-12"><div class="form-group focus-2"><div class="form-label">Description</div><textarea class="form-input" required="" placeholder="Something about you"></textarea></div></div></div></div></div></div>');
		$("#scrollspy li a[href^='#']").on('click', function (e) {
			e.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(this.hash).offset().top
			}, 1200, function () {
				window.location.hash = hash;
			});
			return false;
		});

		$(".close-w").on("click", function () {
			var id = $(this).parent().parent().parent().attr("id");
			$(this).parent().parent().parent().fadeOut();
			$(".creative_filds_block a").each(function () {
				if ($(this).attr("href") == "#" + id) {
					$(this).parent().fadeOut();
				}
			});
		});
		post_id++;
	});

	$('.to').on('click', function (e) {
		e.preventDefault();
		$('html,body').stop().animate({ scrollTop: $('.be-comment-block').offset().top - 50 }, 800);
	});

	$('.m-close').on('click', function () {
		$('.noto-popup').slideUp();
	});

	$('.theme-config .open').on('click', function () {
		$('.theme-config').toggleClass('active');
	});

	$('.m-color').on('click', function () {
		var colour = $(this).data('colour');
		var index = $(this).index();
		$('.logo-c').hide();
		$('.logo-c').eq(index).show();
		$('.m-color').removeClass('active');
		$(this).addClass('active');
		$('#color-link').attr('href', colour);
	});

	$('.color3').on('click', function () {
		$('body').addClass('body-color2');
		$('body').removeClass('body-color3 body-color4');
	});

	$('.color6').on('click', function () {
		$('body').addClass('body-color3');
		$('body').removeClass('body-color2 body-color4');
	});

	$('.color8').on('click', function () {
		$('body').addClass('body-color4');
		$('body').removeClass('body-color2 body-color3');
	});

	$('.color1').on('click', function () {
		$('body').removeClass('body-color2 body-color4 body-color3');
	});

	$('.color11').on('click', function () {
		$('body').addClass('body-color5');
		$('body').removeClass('body-color6 body-color7');
	});

	$('.color12').on('click', function () {
		$('body').addClass('body-color6');
		$('body').removeClass('body-color5 body-color7');
	});

	$('.color13').on('click', function () {
		$('body').addClass('body-color7');
		$('body').removeClass('body-color5 body-color6');
	});

	$('.color10').on('click', function () {
		$('body').removeClass('body-color5 body-color6 body-color7');
	});

	$('.s-color').on('click', function () {
		$('.s-color').removeClass('active');
		$(this).addClass('active');
	});

	$('#media').on('click', function () {
		$('.embed').slideDown();
	});

	$('.open-custom').on('click', function (e) {
		e.preventDefault();
		$(this).next('.inner-filter-info').fadeToggle();
	});

	$('.en-nav').on('click', function (e) {
		e.preventDefault();
		$('.en-nav').removeClass('active');
		$(this).addClass('active');
	});

	$('#content-w').on('click', function (e) {
		$('.cover-popup').add('.setting-popup').fadeOut();
	});

	$('#cover-w').on('click', function (e) {
		$('.cover-popup').fadeIn();
		$('.setting-popup').fadeOut();
	});

	$('#setting-w').on('click', function (e) {
		$('.cover-popup').fadeOut();
		$('.setting-popup').fadeIn();
	});

	$('#add-brand').on('click', function (e) {
		$('.mini-popup-wrapper').fadeOut();
		$('.brand-popup').fadeIn();
	});

	$('#add-school').on('click', function (e) {
		$('.mini-popup-wrapper').fadeOut();
		$('.school-popup').fadeIn();
	});

	$('#tools').on('click', function (e) {
		$('.mini-popup-wrapper').fadeOut();
		$('.tools-popup').fadeIn();
	});

	$('#team').on('click', function (e) {
		$('.mini-popup-wrapper').fadeOut();
		$('.team-popup').fadeIn();
	});

	$('#add-agency').on('click', function (e) {
		$('.mini-popup-wrapper').fadeOut();
		$('.agencies-popup').fadeIn();
	});

	$('.close-mini').on('click', function (e) {
		$(this).closest('.mini-popup-wrapper').fadeOut();
	});

	$('.close-media').on('click', function (e) {
		$('.embed').slideUp();
	});

	//MIX UP
	if ($('#container-mix').length) {
		$('#container-mix').mixItUp({
			animation: {
				duration: 400,
				effects: 'fade translateZ(-360px) stagger(34ms)',
				easing: 'ease'
			}
		});
	};

	if ($('#slider-range-max').length) {
		// $('.color-i').length && $('.color-i').colorPicker();

		$("#slider-range-max").slider({
			range: "max",
			min: 1,
			max: 10,
			value: 2,
			slide: function slide(event, ui) {
				$("#amount").val(ui.value);
			}
		});
		$("#amount").val($("#slider-range-max").slider("value"));

		$("#slider-head").slider({
			range: "max",
			min: 1,
			max: 10,
			value: 2,
			slide: function slide(event, ui) {
				$("#amount-h").val(ui.value);
			}
		});
		$("#amount-h").val($("#slider-head").slider("value"));
	}

	$('.popup-gallery').length && $('.popup-gallery').magnificPopup({
		delegate: 'a.popup-a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function titleSrc(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});

	//Follow action
	$('.be-follow-type').on('click', function (e) {
		e.preventDefault();
		$(this).text('FOLLOWING').css({ 'padding': 5, 'textAlign': "center" });
	});

	// $('.like-btn').on('click', function (e) {
	// 	e.preventDefault();
	// 	$(this).html('YOU LIKED PROJECT');
	// });

	$('.add-btn').on('click', function (e) {
		e.preventDefault();
		$(this).html('YOU ADDED TO COLLECTION');
	});

	$('.send-btn').on('click', function (e) {
		e.preventDefault();
		$('.send-m').slideDown();
	});

	$('.close-m').on('click', function (e) {
		e.preventDefault();
		$('.send-m').slideUp();
	});

	$('.parrent-page').on('click', function () {
		$(this).find('ul').slideToggle();
	});
});