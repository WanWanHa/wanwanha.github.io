! function() {
    var e = {
            679: function(e, t, n) {
                "use strict";
                var r = n(864),
                    i = {
                        childContextTypes: !0,
                        contextType: !0,
                        contextTypes: !0,
                        defaultProps: !0,
                        displayName: !0,
                        getDefaultProps: !0,
                        getDerivedStateFromError: !0,
                        getDerivedStateFromProps: !0,
                        mixins: !0,
                        propTypes: !0,
                        type: !0
                    },
                    a = {
                        name: !0,
                        length: !0,
                        prototype: !0,
                        caller: !0,
                        callee: !0,
                        arguments: !0,
                        arity: !0
                    },
                    o = {
                        $$typeof: !0,
                        compare: !0,
                        defaultProps: !0,
                        displayName: !0,
                        propTypes: !0,
                        type: !0
                    },
                    s = {};

                function l(e) {
                    return r.isMemo(e) ? o : s[e.$$typeof] || i
                }
                s[r.ForwardRef] = {
                    $$typeof: !0,
                    render: !0,
                    defaultProps: !0,
                    displayName: !0,
                    propTypes: !0
                }, s[r.Memo] = o;
                var c = Object.defineProperty,
                    u = Object.getOwnPropertyNames,
                    d = Object.getOwnPropertySymbols,
                    p = Object.getOwnPropertyDescriptor,
                    f = Object.getPrototypeOf,
                    h = Object.prototype;
                e.exports = function e(t, n, r) {
                    if ("string" != typeof n) {
                        if (h) {
                            var i = f(n);
                            i && i !== h && e(t, i, r)
                        }
                        var o = u(n);
                        d && (o = o.concat(d(n)));
                        for (var s = l(t), m = l(n), g = 0; g < o.length; ++g) {
                            var v = o[g];
                            if (!(a[v] || r && r[v] || m && m[v] || s && s[v])) {
                                var b = p(n, v);
                                try {
                                    c(t, v, b)
                                } catch (e) {}
                            }
                        }
                    }
                    return t
                }
            },
            885: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.CASE_SENSITIVE_TAG_NAMES_MAP = t.CASE_SENSITIVE_TAG_NAMES = void 0, t.CASE_SENSITIVE_TAG_NAMES = ["animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "linearGradient", "radialGradient", "textPath"], t.CASE_SENSITIVE_TAG_NAMES_MAP = t.CASE_SENSITIVE_TAG_NAMES.reduce((function(e, t) {
                    return e[t.toLowerCase()] = t, e
                }), {})
            },
            276: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = "html",
                    r = "head",
                    i = "body",
                    a = /<([a-zA-Z]+[0-9]?)/,
                    o = /<head[^]*>/i,
                    s = /<body[^]*>/i,
                    l = function(e, t) {
                        throw new Error("This browser does not support `document.implementation.createHTMLDocument`")
                    },
                    c = function(e, t) {
                        throw new Error("This browser does not support `DOMParser.prototype.parseFromString`")
                    },
                    u = "object" == typeof window && window.DOMParser;
                if ("function" == typeof u) {
                    var d = new u;
                    l = c = function(e, t) {
                        return t && (e = "<".concat(t, ">").concat(e, "</").concat(t, ">")), d.parseFromString(e, "text/html")
                    }
                }
                if ("object" == typeof document && document.implementation) {
                    var p = document.implementation.createHTMLDocument();
                    l = function(e, t) {
                        if (t) {
                            var n = p.documentElement.querySelector(t);
                            return n && (n.innerHTML = e), p
                        }
                        return p.documentElement.innerHTML = e, p
                    }
                }
                var f, h = "object" == typeof document && document.createElement("template");
                h && h.content && (f = function(e) {
                    return h.innerHTML = e, h.content.childNodes
                }), t.default = function(e) {
                    var t, u, d = e.match(a),
                        p = d && d[1] ? d[1].toLowerCase() : "";
                    switch (p) {
                        case n:
                            var h = c(e);
                            return o.test(e) || null === (t = null == (g = h.querySelector(r)) ? void 0 : g.parentNode) || void 0 === t || t.removeChild(g), s.test(e) || null === (u = null == (g = h.querySelector(i)) ? void 0 : g.parentNode) || void 0 === u || u.removeChild(g), h.querySelectorAll(n);
                        case r:
                        case i:
                            var m = l(e).querySelectorAll(p);
                            return s.test(e) && o.test(e) ? m[0].parentNode.childNodes : m;
                        default:
                            return f ? f(e) : (g = l(e, i).querySelector(i)).childNodes;
                            var g
                    }
                }
            },
            152: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = r(n(276)),
                    a = n(507),
                    o = /<(![a-zA-Z\s]+)>/;
                t.default = function(e) {
                    if ("string" != typeof e) throw new TypeError("First argument must be a string");
                    if (!e) return [];
                    var t = e.match(o),
                        n = t ? t[1] : void 0;
                    return (0, a.formatDOM)((0, i.default)(e), null, n)
                }
            },
            507: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.formatDOM = t.formatAttributes = void 0;
                var r = n(584),
                    i = n(885);

                function a(e) {
                    for (var t = {}, n = 0, r = e.length; n < r; n++) {
                        var i = e[n];
                        t[i.name] = i.value
                    }
                    return t
                }

                function o(e) {
                    return function(e) {
                        return i.CASE_SENSITIVE_TAG_NAMES_MAP[e]
                    }(e = e.toLowerCase()) || e
                }
                t.formatAttributes = a, t.formatDOM = function e(t, n, i) {
                    void 0 === n && (n = null);
                    for (var s, l = [], c = 0, u = t.length; c < u; c++) {
                        var d = t[c];
                        switch (d.nodeType) {
                            case 1:
                                var p = o(d.nodeName);
                                (s = new r.Element(p, a(d.attributes))).children = e("template" === p ? d.content.childNodes : d.childNodes, s);
                                break;
                            case 3:
                                s = new r.Text(d.nodeValue);
                                break;
                            case 8:
                                s = new r.Comment(d.nodeValue);
                                break;
                            default:
                                continue
                        }
                        var f = l[c - 1] || null;
                        f && (f.next = s), s.parent = n, s.prev = f, s.next = null, l.push(s)
                    }
                    return i && ((s = new r.ProcessingInstruction(i.substring(0, i.indexOf(" ")).toLowerCase(), i)).next = l[0] || null, s.parent = n, l.unshift(s), l[1] && (l[1].prev = l[0])), l
                }
            },
            953: function(e, t) {
                "use strict";
                var n;
                Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.Doctype = t.CDATA = t.Tag = t.Style = t.Script = t.Comment = t.Directive = t.Text = t.Root = t.isTag = t.ElementType = void 0,
                    function(e) {
                        e.Root = "root", e.Text = "text", e.Directive = "directive", e.Comment = "comment", e.Script = "script", e.Style = "style", e.Tag = "tag", e.CDATA = "cdata", e.Doctype = "doctype"
                    }(n = t.ElementType || (t.ElementType = {})), t.isTag = function(e) {
                        return e.type === n.Tag || e.type === n.Script || e.type === n.Style
                    }, t.Root = n.Root, t.Text = n.Text, t.Directive = n.Directive, t.Comment = n.Comment, t.Script = n.Script, t.Style = n.Style, t.Tag = n.Tag, t.CDATA = n.CDATA, t.Doctype = n.Doctype
            },
            584: function(e, t, n) {
                "use strict";
                var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                        void 0 === r && (r = n);
                        var i = Object.getOwnPropertyDescriptor(t, n);
                        i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
                            enumerable: !0,
                            get: function() {
                                return t[n]
                            }
                        }), Object.defineProperty(e, r, i)
                    } : function(e, t, n, r) {
                        void 0 === r && (r = n), e[r] = t[n]
                    }),
                    i = this && this.__exportStar || function(e, t) {
                        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.DomHandler = void 0;
                var a = n(953),
                    o = n(642);
                i(n(642), t);
                var s = {
                        withStartIndices: !1,
                        withEndIndices: !1,
                        xmlMode: !1
                    },
                    l = function() {
                        function e(e, t, n) {
                            this.dom = [], this.root = new o.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, "function" == typeof t && (n = t, t = s), "object" == typeof e && (t = e, e = void 0), this.callback = null != e ? e : null, this.options = null != t ? t : s, this.elementCB = null != n ? n : null
                        }
                        return e.prototype.onparserinit = function(e) {
                            this.parser = e
                        }, e.prototype.onreset = function() {
                            this.dom = [], this.root = new o.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null
                        }, e.prototype.onend = function() {
                            this.done || (this.done = !0, this.parser = null, this.handleCallback(null))
                        }, e.prototype.onerror = function(e) {
                            this.handleCallback(e)
                        }, e.prototype.onclosetag = function() {
                            this.lastNode = null;
                            var e = this.tagStack.pop();
                            this.options.withEndIndices && (e.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(e)
                        }, e.prototype.onopentag = function(e, t) {
                            var n = this.options.xmlMode ? a.ElementType.Tag : void 0,
                                r = new o.Element(e, t, void 0, n);
                            this.addNode(r), this.tagStack.push(r)
                        }, e.prototype.ontext = function(e) {
                            var t = this.lastNode;
                            if (t && t.type === a.ElementType.Text) t.data += e, this.options.withEndIndices && (t.endIndex = this.parser.endIndex);
                            else {
                                var n = new o.Text(e);
                                this.addNode(n), this.lastNode = n
                            }
                        }, e.prototype.oncomment = function(e) {
                            if (this.lastNode && this.lastNode.type === a.ElementType.Comment) this.lastNode.data += e;
                            else {
                                var t = new o.Comment(e);
                                this.addNode(t), this.lastNode = t
                            }
                        }, e.prototype.oncommentend = function() {
                            this.lastNode = null
                        }, e.prototype.oncdatastart = function() {
                            var e = new o.Text(""),
                                t = new o.CDATA([e]);
                            this.addNode(t), e.parent = t, this.lastNode = e
                        }, e.prototype.oncdataend = function() {
                            this.lastNode = null
                        }, e.prototype.onprocessinginstruction = function(e, t) {
                            var n = new o.ProcessingInstruction(e, t);
                            this.addNode(n)
                        }, e.prototype.handleCallback = function(e) {
                            if ("function" == typeof this.callback) this.callback(e, this.dom);
                            else if (e) throw e
                        }, e.prototype.addNode = function(e) {
                            var t = this.tagStack[this.tagStack.length - 1],
                                n = t.children[t.children.length - 1];
                            this.options.withStartIndices && (e.startIndex = this.parser.startIndex), this.options.withEndIndices && (e.endIndex = this.parser.endIndex), t.children.push(e), n && (e.prev = n, n.next = e), e.parent = t, this.lastNode = null
                        }, e
                    }();
                t.DomHandler = l, t.default = l
            },
            642: function(e, t, n) {
                "use strict";
                var r, i = this && this.__extends || (r = function(e, t) {
                        return r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        }, r(e, t)
                    }, function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                        function __() {
                            this.constructor = e
                        }
                        r(e, t), e.prototype = null === t ? Object.create(t) : (__.prototype = t.prototype, new __)
                    }),
                    a = this && this.__assign || function() {
                        return a = Object.assign || function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                            return e
                        }, a.apply(this, arguments)
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.cloneNode = t.hasChildren = t.isDocument = t.isDirective = t.isComment = t.isText = t.isCDATA = t.isTag = t.Element = t.Document = t.CDATA = t.NodeWithChildren = t.ProcessingInstruction = t.Comment = t.Text = t.DataNode = t.Node = void 0;
                var o = n(953),
                    s = function() {
                        function e() {
                            this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null
                        }
                        return Object.defineProperty(e.prototype, "parentNode", {
                            get: function() {
                                return this.parent
                            },
                            set: function(e) {
                                this.parent = e
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "previousSibling", {
                            get: function() {
                                return this.prev
                            },
                            set: function(e) {
                                this.prev = e
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "nextSibling", {
                            get: function() {
                                return this.next
                            },
                            set: function(e) {
                                this.next = e
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.cloneNode = function(e) {
                            return void 0 === e && (e = !1), E(this, e)
                        }, e
                    }();
                t.Node = s;
                var l = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return n.data = t, n
                    }
                    return i(t, e), Object.defineProperty(t.prototype, "nodeValue", {
                        get: function() {
                            return this.data
                        },
                        set: function(e) {
                            this.data = e
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(s);
                t.DataNode = l;
                var c = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.type = o.ElementType.Text, t
                    }
                    return i(t, e), Object.defineProperty(t.prototype, "nodeType", {
                        get: function() {
                            return 3
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(l);
                t.Text = c;
                var u = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.type = o.ElementType.Comment, t
                    }
                    return i(t, e), Object.defineProperty(t.prototype, "nodeType", {
                        get: function() {
                            return 8
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(l);
                t.Comment = u;
                var d = function(e) {
                    function t(t, n) {
                        var r = e.call(this, n) || this;
                        return r.name = t, r.type = o.ElementType.Directive, r
                    }
                    return i(t, e), Object.defineProperty(t.prototype, "nodeType", {
                        get: function() {
                            return 1
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(l);
                t.ProcessingInstruction = d;
                var p = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return n.children = t, n
                    }
                    return i(t, e), Object.defineProperty(t.prototype, "firstChild", {
                        get: function() {
                            var e;
                            return null !== (e = this.children[0]) && void 0 !== e ? e : null
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "lastChild", {
                        get: function() {
                            return this.children.length > 0 ? this.children[this.children.length - 1] : null
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "childNodes", {
                        get: function() {
                            return this.children
                        },
                        set: function(e) {
                            this.children = e
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(s);
                t.NodeWithChildren = p;
                var f = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.type = o.ElementType.CDATA, t
                    }
                    return i(t, e), Object.defineProperty(t.prototype, "nodeType", {
                        get: function() {
                            return 4
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(p);
                t.CDATA = f;
                var h = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.type = o.ElementType.Root, t
                    }
                    return i(t, e), Object.defineProperty(t.prototype, "nodeType", {
                        get: function() {
                            return 9
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(p);
                t.Document = h;
                var m = function(e) {
                    function t(t, n, r, i) {
                        void 0 === r && (r = []), void 0 === i && (i = "script" === t ? o.ElementType.Script : "style" === t ? o.ElementType.Style : o.ElementType.Tag);
                        var a = e.call(this, r) || this;
                        return a.name = t, a.attribs = n, a.type = i, a
                    }
                    return i(t, e), Object.defineProperty(t.prototype, "nodeType", {
                        get: function() {
                            return 1
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "tagName", {
                        get: function() {
                            return this.name
                        },
                        set: function(e) {
                            this.name = e
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "attributes", {
                        get: function() {
                            var e = this;
                            return Object.keys(this.attribs).map((function(t) {
                                var n, r;
                                return {
                                    name: t,
                                    value: e.attribs[t],
                                    namespace: null === (n = e["x-attribsNamespace"]) || void 0 === n ? void 0 : n[t],
                                    prefix: null === (r = e["x-attribsPrefix"]) || void 0 === r ? void 0 : r[t]
                                }
                            }))
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(p);

                function g(e) {
                    return (0, o.isTag)(e)
                }

                function v(e) {
                    return e.type === o.ElementType.CDATA
                }

                function b(e) {
                    return e.type === o.ElementType.Text
                }

                function y(e) {
                    return e.type === o.ElementType.Comment
                }

                function C(e) {
                    return e.type === o.ElementType.Directive
                }

                function _(e) {
                    return e.type === o.ElementType.Root
                }

                function E(e, t) {
                    var n;
                    if (void 0 === t && (t = !1), b(e)) n = new c(e.data);
                    else if (y(e)) n = new u(e.data);
                    else if (g(e)) {
                        var r = t ? w(e.children) : [],
                            i = new m(e.name, a({}, e.attribs), r);
                        r.forEach((function(e) {
                            return e.parent = i
                        })), null != e.namespace && (i.namespace = e.namespace), e["x-attribsNamespace"] && (i["x-attribsNamespace"] = a({}, e["x-attribsNamespace"])), e["x-attribsPrefix"] && (i["x-attribsPrefix"] = a({}, e["x-attribsPrefix"])), n = i
                    } else if (v(e)) {
                        r = t ? w(e.children) : [];
                        var o = new f(r);
                        r.forEach((function(e) {
                            return e.parent = o
                        })), n = o
                    } else if (_(e)) {
                        r = t ? w(e.children) : [];
                        var s = new h(r);
                        r.forEach((function(e) {
                            return e.parent = s
                        })), e["x-mode"] && (s["x-mode"] = e["x-mode"]), n = s
                    } else {
                        if (!C(e)) throw new Error("Not implemented yet: ".concat(e.type));
                        var l = new d(e.name, e.data);
                        null != e["x-name"] && (l["x-name"] = e["x-name"], l["x-publicId"] = e["x-publicId"], l["x-systemId"] = e["x-systemId"]), n = l
                    }
                    return n.startIndex = e.startIndex, n.endIndex = e.endIndex, null != e.sourceCodeLocation && (n.sourceCodeLocation = e.sourceCodeLocation), n
                }

                function w(e) {
                    for (var t = e.map((function(e) {
                            return E(e, !0)
                        })), n = 1; n < t.length; n++) t[n].prev = t[n - 1], t[n - 1].next = t[n];
                    return t
                }
                t.Element = m, t.isTag = g, t.isCDATA = v, t.isText = b, t.isComment = y, t.isDirective = C, t.isDocument = _, t.hasChildren = function(e) {
                    return Object.prototype.hasOwnProperty.call(e, "children")
                }, t.cloneNode = E
            },
            484: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = n(726),
                    i = n(606),
                    a = ["checked", "value"],
                    o = ["input", "select", "textarea"],
                    s = {
                        reset: !0,
                        submit: !0
                    };

                function l(e) {
                    return r.possibleStandardNames[e]
                }
                t.default = function(e, t) {
                    void 0 === e && (e = {});
                    var n = {},
                        c = Boolean(e.type && s[e.type]);
                    for (var u in e) {
                        var d = e[u];
                        if ((0, r.isCustomAttribute)(u)) n[u] = d;
                        else {
                            var p = u.toLowerCase(),
                                f = l(p);
                            if (f) {
                                var h = (0, r.getPropertyInfo)(f);
                                switch (a.includes(f) && o.includes(t) && !c && (f = l("default" + p)), n[f] = d, h && h.type) {
                                    case r.BOOLEAN:
                                        n[f] = !0;
                                        break;
                                    case r.OVERLOADED_BOOLEAN:
                                        "" === d && (n[f] = !0)
                                }
                            } else i.PRESERVE_CUSTOM_ATTRIBUTES && (n[u] = d)
                        }
                    }
                    return (0, i.setStyleProp)(e.style, n), n
                }
            },
            670: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = n(196),
                    a = r(n(484)),
                    o = n(606),
                    s = {
                        cloneElement: i.cloneElement,
                        createElement: i.createElement,
                        isValidElement: i.isValidElement
                    };

                function l(e) {
                    return o.PRESERVE_CUSTOM_ATTRIBUTES && "tag" === e.type && (0, o.isCustomComponent)(e.name, e.attribs)
                }
                t.default = function e(t, n) {
                    for (var r = [], i = "function" == typeof(null == n ? void 0 : n.replace), c = (null == n ? void 0 : n.transform) || o.returnFirstArg, u = (null == n ? void 0 : n.library) || s, d = u.cloneElement, p = u.createElement, f = u.isValidElement, h = t.length, m = 0; m < h; m++) {
                        var g = t[m];
                        if (i) {
                            var v = n.replace(g);
                            if (f(v)) {
                                h > 1 && (v = d(v, {
                                    key: v.key || m
                                })), r.push(c(v, g, m));
                                continue
                            }
                        }
                        if ("text" !== g.type) {
                            var b = g,
                                y = {};
                            l(b) ? ((0, o.setStyleProp)(b.attribs.style, b.attribs), y = b.attribs) : b.attribs && (y = (0, a.default)(b.attribs, b.name));
                            var C = void 0;
                            switch (g.type) {
                                case "script":
                                case "style":
                                    g.children[0] && (y.dangerouslySetInnerHTML = {
                                        __html: g.children[0].data
                                    });
                                    break;
                                case "tag":
                                    "textarea" === g.name && g.children[0] ? y.defaultValue = g.children[0].data : g.children && g.children.length && (C = e(g.children, n));
                                    break;
                                default:
                                    continue
                            }
                            h > 1 && (y.key = m), r.push(c(p(g.name, y, C), g, m))
                        } else {
                            var _ = !g.data.trim().length;
                            if (_ && g.parent && !(0, o.canTextBeChildOfNode)(g.parent)) continue;
                            if ((null == n ? void 0 : n.trim) && _) continue;
                            r.push(c(g.data, g, m))
                        }
                    }
                    return 1 === r.length ? r[0] : r
                }
            },
            426: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.htmlToDOM = t.domToReact = t.attributesToProps = t.Text = t.ProcessingInstruction = t.Element = t.Comment = void 0;
                var i = r(n(152));
                t.htmlToDOM = i.default;
                var a = r(n(484));
                t.attributesToProps = a.default;
                var o = r(n(670));
                t.domToReact = o.default;
                var s = n(384);
                Object.defineProperty(t, "Comment", {
                    enumerable: !0,
                    get: function() {
                        return s.Comment
                    }
                }), Object.defineProperty(t, "Element", {
                    enumerable: !0,
                    get: function() {
                        return s.Element
                    }
                }), Object.defineProperty(t, "ProcessingInstruction", {
                    enumerable: !0,
                    get: function() {
                        return s.ProcessingInstruction
                    }
                }), Object.defineProperty(t, "Text", {
                    enumerable: !0,
                    get: function() {
                        return s.Text
                    }
                });
                var l = {
                    lowerCaseAttributeNames: !1
                };
                t.default = function(e, t) {
                    if ("string" != typeof e) throw new TypeError("First argument must be a string");
                    return e ? (0, o.default)((0, i.default)(e, (null == t ? void 0 : t.htmlparser2) || l), t) : []
                }
            },
            606: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.returnFirstArg = t.canTextBeChildOfNode = t.ELEMENTS_WITH_NO_TEXT_CHILDREN = t.PRESERVE_CUSTOM_ATTRIBUTES = t.setStyleProp = t.isCustomComponent = void 0;
                var i = n(196),
                    a = r(n(476)),
                    o = new Set(["annotation-xml", "color-profile", "font-face", "font-face-src", "font-face-uri", "font-face-format", "font-face-name", "missing-glyph"]);
                t.isCustomComponent = function(e, t) {
                    return e.includes("-") ? !o.has(e) : Boolean(t && "string" == typeof t.is)
                };
                var s = {
                    reactCompat: !0
                };
                t.setStyleProp = function(e, t) {
                    if ("string" == typeof e)
                        if (e.trim()) try {
                            t.style = (0, a.default)(e, s)
                        } catch (e) {
                            t.style = {}
                        } else t.style = {}
                }, t.PRESERVE_CUSTOM_ATTRIBUTES = Number(i.version.split(".")[0]) >= 16, t.ELEMENTS_WITH_NO_TEXT_CHILDREN = new Set(["tr", "tbody", "thead", "tfoot", "colgroup", "table", "head", "html", "frameset"]), t.canTextBeChildOfNode = function(e) {
                    return !t.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(e.name)
                }, t.returnFirstArg = function(e) {
                    return e
                }
            },
            908: function(e, t) {
                "use strict";
                var n;
                Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.Doctype = t.CDATA = t.Tag = t.Style = t.Script = t.Comment = t.Directive = t.Text = t.Root = t.isTag = t.ElementType = void 0,
                    function(e) {
                        e.Root = "root", e.Text = "text", e.Directive = "directive", e.Comment = "comment", e.Script = "script", e.Style = "style", e.Tag = "tag", e.CDATA = "cdata", e.Doctype = "doctype"
                    }(n = t.ElementType || (t.ElementType = {})), t.isTag = function(e) {
                        return e.type === n.Tag || e.type === n.Script || e.type === n.Style
                    }, t.Root = n.Root, t.Text = n.Text, t.Directive = n.Directive, t.Comment = n.Comment, t.Script = n.Script, t.Style = n.Style, t.Tag = n.Tag, t.CDATA = n.CDATA, t.Doctype = n.Doctype
            },
            384: function(e, t, n) {
                "use strict";
                var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                        void 0 === r && (r = n);
                        var i = Object.getOwnPropertyDescriptor(t, n);
                        i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
                            enumerable: !0,
                            get: function() {
                                return t[n]
                            }
                        }), Object.defineProperty(e, r, i)
                    } : function(e, t, n, r) {
                        void 0 === r && (r = n), e[r] = t[n]
                    }),
                    i = this && this.__exportStar || function(e, t) {
                        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.DomHandler = void 0;
                var a = n(908),
                    o = n(79);
                i(n(79), t);
                var s = {
                        withStartIndices: !1,
                        withEndIndices: !1,
                        xmlMode: !1
                    },
                    l = function() {
                        function e(e, t, n) {
                            this.dom = [], this.root = new o.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, "function" == typeof t && (n = t, t = s), "object" == typeof e && (t = e, e = void 0), this.callback = null != e ? e : null, this.options = null != t ? t : s, this.elementCB = null != n ? n : null
                        }
                        return e.prototype.onparserinit = function(e) {
                            this.parser = e
                        }, e.prototype.onreset = function() {
                            this.dom = [], this.root = new o.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null
                        }, e.prototype.onend = function() {
                            this.done || (this.done = !0, this.parser = null, this.handleCallback(null))
                        }, e.prototype.onerror = function(e) {
                            this.handleCallback(e)
                        }, e.prototype.onclosetag = function() {
                            this.lastNode = null;
                            var e = this.tagStack.pop();
                            this.options.withEndIndices && (e.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(e)
                        }, e.prototype.onopentag = function(e, t) {
                            var n = this.options.xmlMode ? a.ElementType.Tag : void 0,
                                r = new o.Element(e, t, void 0, n);
                            this.addNode(r), this.tagStack.push(r)
                        }, e.prototype.ontext = function(e) {
                            var t = this.lastNode;
                            if (t && t.type === a.ElementType.Text) t.data += e, this.options.withEndIndices && (t.endIndex = this.parser.endIndex);
                            else {
                                var n = new o.Text(e);
                                this.addNode(n), this.lastNode = n
                            }
                        }, e.prototype.oncomment = function(e) {
                            if (this.lastNode && this.lastNode.type === a.ElementType.Comment) this.lastNode.data += e;
                            else {
                                var t = new o.Comment(e);
                                this.addNode(t), this.lastNode = t
                            }
                        }, e.prototype.oncommentend = function() {
                            this.lastNode = null
                        }, e.prototype.oncdatastart = function() {
                            var e = new o.Text(""),
                                t = new o.CDATA([e]);
                            this.addNode(t), e.parent = t, this.lastNode = e
                        }, e.prototype.oncdataend = function() {
                            this.lastNode = null
                        }, e.prototype.onprocessinginstruction = function(e, t) {
                            var n = new o.ProcessingInstruction(e, t);
                            this.addNode(n)
                        }, e.prototype.handleCallback = function(e) {
                            if ("function" == typeof this.callback) this.callback(e, this.dom);
                            else if (e) throw e
                        }, e.prototype.addNode = function(e) {
                            var t = this.tagStack[this.tagStack.length - 1],
                                n = t.children[t.children.length - 1];
                            this.options.withStartIndices && (e.startIndex = this.parser.startIndex), this.options.withEndIndices && (e.endIndex = this.parser.endIndex), t.children.push(e), n && (e.prev = n, n.next = e), e.parent = t, this.lastNode = null
                        }, e
                    }();
                t.DomHandler = l, t.default = l
            },
            79: function(e, t, n) {
                "use strict";
                var r, i = this && this.__extends || (r = function(e, t) {
                        return r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        }, r(e, t)
                    }, function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                        function __() {
                            this.constructor = e
                        }
                        r(e, t), e.prototype = null === t ? Object.create(t) : (__.prototype = t.prototype, new __)
                    }),
                    a = this && this.__assign || function() {
                        return a = Object.assign || function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                            return e
                        }, a.apply(this, arguments)
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.cloneNode = t.hasChildren = t.isDocument = t.isDirective = t.isComment = t.isText = t.isCDATA = t.isTag = t.Element = t.Document = t.CDATA = t.NodeWithChildren = t.ProcessingInstruction = t.Comment = t.Text = t.DataNode = t.Node = void 0;
                var o = n(908),
                    s = function() {
                        function e() {
                            this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null
                        }
                        return Object.defineProperty(e.prototype, "parentNode", {
                            get: function() {
                                return this.parent
                            },
                            set: function(e) {
                                this.parent = e
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "previousSibling", {
                            get: function() {
                                return this.prev
                            },
                            set: function(e) {
                                this.prev = e
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "nextSibling", {
                            get: function() {
                                return this.next
                            },
                            set: function(e) {
                                this.next = e
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.cloneNode = function(e) {
                            return void 0 === e && (e = !1), E(this, e)
                        }, e
                    }();
                t.Node = s;
                var l = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return n.data = t, n
                    }
                    return i(t, e), Object.defineProperty(t.prototype, "nodeValue", {
                        get: function() {
                            return this.data
                        },
                        set: function(e) {
                            this.data = e
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(s);
                t.DataNode = l;
                var c = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.type = o.ElementType.Text, t
                    }
                    return i(t, e), Object.defineProperty(t.prototype, "nodeType", {
                        get: function() {
                            return 3
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(l);
                t.Text = c;
                var u = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.type = o.ElementType.Comment, t
                    }
                    return i(t, e), Object.defineProperty(t.prototype, "nodeType", {
                        get: function() {
                            return 8
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(l);
                t.Comment = u;
                var d = function(e) {
                    function t(t, n) {
                        var r = e.call(this, n) || this;
                        return r.name = t, r.type = o.ElementType.Directive, r
                    }
                    return i(t, e), Object.defineProperty(t.prototype, "nodeType", {
                        get: function() {
                            return 1
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(l);
                t.ProcessingInstruction = d;
                var p = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return n.children = t, n
                    }
                    return i(t, e), Object.defineProperty(t.prototype, "firstChild", {
                        get: function() {
                            var e;
                            return null !== (e = this.children[0]) && void 0 !== e ? e : null
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "lastChild", {
                        get: function() {
                            return this.children.length > 0 ? this.children[this.children.length - 1] : null
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "childNodes", {
                        get: function() {
                            return this.children
                        },
                        set: function(e) {
                            this.children = e
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(s);
                t.NodeWithChildren = p;
                var f = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.type = o.ElementType.CDATA, t
                    }
                    return i(t, e), Object.defineProperty(t.prototype, "nodeType", {
                        get: function() {
                            return 4
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(p);
                t.CDATA = f;
                var h = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.type = o.ElementType.Root, t
                    }
                    return i(t, e), Object.defineProperty(t.prototype, "nodeType", {
                        get: function() {
                            return 9
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(p);
                t.Document = h;
                var m = function(e) {
                    function t(t, n, r, i) {
                        void 0 === r && (r = []), void 0 === i && (i = "script" === t ? o.ElementType.Script : "style" === t ? o.ElementType.Style : o.ElementType.Tag);
                        var a = e.call(this, r) || this;
                        return a.name = t, a.attribs = n, a.type = i, a
                    }
                    return i(t, e), Object.defineProperty(t.prototype, "nodeType", {
                        get: function() {
                            return 1
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "tagName", {
                        get: function() {
                            return this.name
                        },
                        set: function(e) {
                            this.name = e
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "attributes", {
                        get: function() {
                            var e = this;
                            return Object.keys(this.attribs).map((function(t) {
                                var n, r;
                                return {
                                    name: t,
                                    value: e.attribs[t],
                                    namespace: null === (n = e["x-attribsNamespace"]) || void 0 === n ? void 0 : n[t],
                                    prefix: null === (r = e["x-attribsPrefix"]) || void 0 === r ? void 0 : r[t]
                                }
                            }))
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(p);

                function g(e) {
                    return (0, o.isTag)(e)
                }

                function v(e) {
                    return e.type === o.ElementType.CDATA
                }

                function b(e) {
                    return e.type === o.ElementType.Text
                }

                function y(e) {
                    return e.type === o.ElementType.Comment
                }

                function C(e) {
                    return e.type === o.ElementType.Directive
                }

                function _(e) {
                    return e.type === o.ElementType.Root
                }

                function E(e, t) {
                    var n;
                    if (void 0 === t && (t = !1), b(e)) n = new c(e.data);
                    else if (y(e)) n = new u(e.data);
                    else if (g(e)) {
                        var r = t ? w(e.children) : [],
                            i = new m(e.name, a({}, e.attribs), r);
                        r.forEach((function(e) {
                            return e.parent = i
                        })), null != e.namespace && (i.namespace = e.namespace), e["x-attribsNamespace"] && (i["x-attribsNamespace"] = a({}, e["x-attribsNamespace"])), e["x-attribsPrefix"] && (i["x-attribsPrefix"] = a({}, e["x-attribsPrefix"])), n = i
                    } else if (v(e)) {
                        r = t ? w(e.children) : [];
                        var o = new f(r);
                        r.forEach((function(e) {
                            return e.parent = o
                        })), n = o
                    } else if (_(e)) {
                        r = t ? w(e.children) : [];
                        var s = new h(r);
                        r.forEach((function(e) {
                            return e.parent = s
                        })), e["x-mode"] && (s["x-mode"] = e["x-mode"]), n = s
                    } else {
                        if (!C(e)) throw new Error("Not implemented yet: ".concat(e.type));
                        var l = new d(e.name, e.data);
                        null != e["x-name"] && (l["x-name"] = e["x-name"], l["x-publicId"] = e["x-publicId"], l["x-systemId"] = e["x-systemId"]), n = l
                    }
                    return n.startIndex = e.startIndex, n.endIndex = e.endIndex, null != e.sourceCodeLocation && (n.sourceCodeLocation = e.sourceCodeLocation), n
                }

                function w(e) {
                    for (var t = e.map((function(e) {
                            return E(e, !0)
                        })), n = 1; n < t.length; n++) t[n].prev = t[n - 1], t[n - 1].next = t[n];
                    return t
                }
                t.Element = m, t.isTag = g, t.isCDATA = v, t.isText = b, t.isComment = y, t.isDirective = C, t.isDocument = _, t.hasChildren = function(e) {
                    return Object.prototype.hasOwnProperty.call(e, "children")
                }, t.cloneNode = E
            },
            139: function(e) {
                var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
                    n = /\n/g,
                    r = /^\s*/,
                    i = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
                    a = /^:\s*/,
                    o = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
                    s = /^[;\s]*/,
                    l = /^\s+|\s+$/g,
                    c = "";

                function u(e) {
                    return e ? e.replace(l, c) : c
                }
                e.exports = function(e, l) {
                    if ("string" != typeof e) throw new TypeError("First argument must be a string");
                    if (!e) return [];
                    l = l || {};
                    var d = 1,
                        p = 1;

                    function f(e) {
                        var t = e.match(n);
                        t && (d += t.length);
                        var r = e.lastIndexOf("\n");
                        p = ~r ? e.length - r : p + e.length
                    }

                    function h() {
                        var e = {
                            line: d,
                            column: p
                        };
                        return function(t) {
                            return t.position = new m(e), y(), t
                        }
                    }

                    function m(e) {
                        this.start = e, this.end = {
                            line: d,
                            column: p
                        }, this.source = l.source
                    }
                    m.prototype.content = e;
                    var g = [];

                    function v(t) {
                        var n = new Error(l.source + ":" + d + ":" + p + ": " + t);
                        if (n.reason = t, n.filename = l.source, n.line = d, n.column = p, n.source = e, !l.silent) throw n;
                        g.push(n)
                    }

                    function b(t) {
                        var n = t.exec(e);
                        if (n) {
                            var r = n[0];
                            return f(r), e = e.slice(r.length), n
                        }
                    }

                    function y() {
                        b(r)
                    }

                    function C(e) {
                        var t;
                        for (e = e || []; t = _();) !1 !== t && e.push(t);
                        return e
                    }

                    function _() {
                        var t = h();
                        if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
                            for (var n = 2; c != e.charAt(n) && ("*" != e.charAt(n) || "/" != e.charAt(n + 1));) ++n;
                            if (n += 2, c === e.charAt(n - 1)) return v("End of comment missing");
                            var r = e.slice(2, n - 2);
                            return p += 2, f(r), e = e.slice(n), p += 2, t({
                                type: "comment",
                                comment: r
                            })
                        }
                    }

                    function E() {
                        var e = h(),
                            n = b(i);
                        if (n) {
                            if (_(), !b(a)) return v("property missing ':'");
                            var r = b(o),
                                l = e({
                                    type: "declaration",
                                    property: u(n[0].replace(t, c)),
                                    value: r ? u(r[0].replace(t, c)) : c
                                });
                            return b(s), l
                        }
                    }
                    return y(),
                        function() {
                            var e, t = [];
                            for (C(t); e = E();) !1 !== e && (t.push(e), C(t));
                            return t
                        }()
                }
            },
            921: function(e, t) {
                "use strict";
                var n = "function" == typeof Symbol && Symbol.for,
                    r = n ? Symbol.for("react.element") : 60103,
                    i = n ? Symbol.for("react.portal") : 60106,
                    a = n ? Symbol.for("react.fragment") : 60107,
                    o = n ? Symbol.for("react.strict_mode") : 60108,
                    s = n ? Symbol.for("react.profiler") : 60114,
                    l = n ? Symbol.for("react.provider") : 60109,
                    c = n ? Symbol.for("react.context") : 60110,
                    u = n ? Symbol.for("react.async_mode") : 60111,
                    d = n ? Symbol.for("react.concurrent_mode") : 60111,
                    p = n ? Symbol.for("react.forward_ref") : 60112,
                    f = n ? Symbol.for("react.suspense") : 60113,
                    h = n ? Symbol.for("react.suspense_list") : 60120,
                    m = n ? Symbol.for("react.memo") : 60115,
                    g = n ? Symbol.for("react.lazy") : 60116,
                    v = n ? Symbol.for("react.block") : 60121,
                    b = n ? Symbol.for("react.fundamental") : 60117,
                    y = n ? Symbol.for("react.responder") : 60118,
                    C = n ? Symbol.for("react.scope") : 60119;

                function _(e) {
                    if ("object" == typeof e && null !== e) {
                        var t = e.$$typeof;
                        switch (t) {
                            case r:
                                switch (e = e.type) {
                                    case u:
                                    case d:
                                    case a:
                                    case s:
                                    case o:
                                    case f:
                                        return e;
                                    default:
                                        switch (e = e && e.$$typeof) {
                                            case c:
                                            case p:
                                            case g:
                                            case m:
                                            case l:
                                                return e;
                                            default:
                                                return t
                                        }
                                }
                            case i:
                                return t
                        }
                    }
                }

                function E(e) {
                    return _(e) === d
                }
                t.AsyncMode = u, t.ConcurrentMode = d, t.ContextConsumer = c, t.ContextProvider = l, t.Element = r, t.ForwardRef = p, t.Fragment = a, t.Lazy = g, t.Memo = m, t.Portal = i, t.Profiler = s, t.StrictMode = o, t.Suspense = f, t.isAsyncMode = function(e) {
                    return E(e) || _(e) === u
                }, t.isConcurrentMode = E, t.isContextConsumer = function(e) {
                    return _(e) === c
                }, t.isContextProvider = function(e) {
                    return _(e) === l
                }, t.isElement = function(e) {
                    return "object" == typeof e && null !== e && e.$$typeof === r
                }, t.isForwardRef = function(e) {
                    return _(e) === p
                }, t.isFragment = function(e) {
                    return _(e) === a
                }, t.isLazy = function(e) {
                    return _(e) === g
                }, t.isMemo = function(e) {
                    return _(e) === m
                }, t.isPortal = function(e) {
                    return _(e) === i
                }, t.isProfiler = function(e) {
                    return _(e) === s
                }, t.isStrictMode = function(e) {
                    return _(e) === o
                }, t.isSuspense = function(e) {
                    return _(e) === f
                }, t.isValidElementType = function(e) {
                    return "string" == typeof e || "function" == typeof e || e === a || e === d || e === s || e === o || e === f || e === h || "object" == typeof e && null !== e && (e.$$typeof === g || e.$$typeof === m || e.$$typeof === l || e.$$typeof === c || e.$$typeof === p || e.$$typeof === b || e.$$typeof === y || e.$$typeof === C || e.$$typeof === v)
                }, t.typeOf = _
            },
            864: function(e, t, n) {
                "use strict";
                e.exports = n(921)
            },
            726: function(e, t, n) {
                "use strict";

                function r(e, t, n, r, i, a, o) {
                    this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o
                }
                const i = {};
                ["children", "dangerouslySetInnerHTML", "defaultValue", "defaultChecked", "innerHTML", "suppressContentEditableWarning", "suppressHydrationWarning", "style"].forEach((e => {
                    i[e] = new r(e, 0, !1, e, null, !1, !1)
                })), [
                    ["acceptCharset", "accept-charset"],
                    ["className", "class"],
                    ["htmlFor", "for"],
                    ["httpEquiv", "http-equiv"]
                ].forEach((([e, t]) => {
                    i[e] = new r(e, 1, !1, t, null, !1, !1)
                })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((e => {
                    i[e] = new r(e, 2, !1, e.toLowerCase(), null, !1, !1)
                })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((e => {
                    i[e] = new r(e, 2, !1, e, null, !1, !1)
                })), ["allowFullScreen", "async", "autoFocus", "autoPlay", "controls", "default", "defer", "disabled", "disablePictureInPicture", "disableRemotePlayback", "formNoValidate", "hidden", "loop", "noModule", "noValidate", "open", "playsInline", "readOnly", "required", "reversed", "scoped", "seamless", "itemScope"].forEach((e => {
                    i[e] = new r(e, 3, !1, e.toLowerCase(), null, !1, !1)
                })), ["checked", "multiple", "muted", "selected"].forEach((e => {
                    i[e] = new r(e, 3, !0, e, null, !1, !1)
                })), ["capture", "download"].forEach((e => {
                    i[e] = new r(e, 4, !1, e, null, !1, !1)
                })), ["cols", "rows", "size", "span"].forEach((e => {
                    i[e] = new r(e, 6, !1, e, null, !1, !1)
                })), ["rowSpan", "start"].forEach((e => {
                    i[e] = new r(e, 5, !1, e.toLowerCase(), null, !1, !1)
                }));
                const a = /[\-\:]([a-z])/g,
                    o = e => e[1].toUpperCase();
                ["accent-height", "alignment-baseline", "arabic-form", "baseline-shift", "cap-height", "clip-path", "clip-rule", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "dominant-baseline", "enable-background", "fill-opacity", "fill-rule", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-name", "glyph-orientation-horizontal", "glyph-orientation-vertical", "horiz-adv-x", "horiz-origin-x", "image-rendering", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "overline-position", "overline-thickness", "paint-order", "panose-1", "pointer-events", "rendering-intent", "shape-rendering", "stop-color", "stop-opacity", "strikethrough-position", "strikethrough-thickness", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-anchor", "text-decoration", "text-rendering", "underline-position", "underline-thickness", "unicode-bidi", "unicode-range", "units-per-em", "v-alphabetic", "v-hanging", "v-ideographic", "v-mathematical", "vector-effect", "vert-adv-y", "vert-origin-x", "vert-origin-y", "word-spacing", "writing-mode", "xmlns:xlink", "x-height"].forEach((e => {
                    const t = e.replace(a, o);
                    i[t] = new r(t, 1, !1, e, null, !1, !1)
                })), ["xlink:actuate", "xlink:arcrole", "xlink:role", "xlink:show", "xlink:title", "xlink:type"].forEach((e => {
                    const t = e.replace(a, o);
                    i[t] = new r(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
                })), ["xml:base", "xml:lang", "xml:space"].forEach((e => {
                    const t = e.replace(a, o);
                    i[t] = new r(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
                })), ["tabIndex", "crossOrigin"].forEach((e => {
                    i[e] = new r(e, 1, !1, e.toLowerCase(), null, !1, !1)
                })), i.xlinkHref = new r("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((e => {
                    i[e] = new r(e, 1, !1, e.toLowerCase(), null, !0, !0)
                }));
                const {
                    CAMELCASE: s,
                    SAME: l,
                    possibleStandardNames: c
                } = n(229), u = RegExp.prototype.test.bind(new RegExp("^(data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")), d = Object.keys(c).reduce(((e, t) => {
                    const n = c[t];
                    return n === l ? e[t] = t : n === s ? e[t.toLowerCase()] = t : e[t] = n, e
                }), {});
                t.BOOLEAN = 3, t.BOOLEANISH_STRING = 2, t.NUMERIC = 5, t.OVERLOADED_BOOLEAN = 4, t.POSITIVE_NUMERIC = 6, t.RESERVED = 0, t.STRING = 1, t.getPropertyInfo = function(e) {
                    return i.hasOwnProperty(e) ? i[e] : null
                }, t.isCustomAttribute = u, t.possibleStandardNames = d
            },
            229: function(e, t) {
                t.SAME = 0, t.CAMELCASE = 1, t.possibleStandardNames = {
                    accept: 0,
                    acceptCharset: 1,
                    "accept-charset": "acceptCharset",
                    accessKey: 1,
                    action: 0,
                    allowFullScreen: 1,
                    alt: 0,
                    as: 0,
                    async: 0,
                    autoCapitalize: 1,
                    autoComplete: 1,
                    autoCorrect: 1,
                    autoFocus: 1,
                    autoPlay: 1,
                    autoSave: 1,
                    capture: 0,
                    cellPadding: 1,
                    cellSpacing: 1,
                    challenge: 0,
                    charSet: 1,
                    checked: 0,
                    children: 0,
                    cite: 0,
                    class: "className",
                    classID: 1,
                    className: 1,
                    cols: 0,
                    colSpan: 1,
                    content: 0,
                    contentEditable: 1,
                    contextMenu: 1,
                    controls: 0,
                    controlsList: 1,
                    coords: 0,
                    crossOrigin: 1,
                    dangerouslySetInnerHTML: 1,
                    data: 0,
                    dateTime: 1,
                    default: 0,
                    defaultChecked: 1,
                    defaultValue: 1,
                    defer: 0,
                    dir: 0,
                    disabled: 0,
                    disablePictureInPicture: 1,
                    disableRemotePlayback: 1,
                    download: 0,
                    draggable: 0,
                    encType: 1,
                    enterKeyHint: 1,
                    for: "htmlFor",
                    form: 0,
                    formMethod: 1,
                    formAction: 1,
                    formEncType: 1,
                    formNoValidate: 1,
                    formTarget: 1,
                    frameBorder: 1,
                    headers: 0,
                    height: 0,
                    hidden: 0,
                    high: 0,
                    href: 0,
                    hrefLang: 1,
                    htmlFor: 1,
                    httpEquiv: 1,
                    "http-equiv": "httpEquiv",
                    icon: 0,
                    id: 0,
                    innerHTML: 1,
                    inputMode: 1,
                    integrity: 0,
                    is: 0,
                    itemID: 1,
                    itemProp: 1,
                    itemRef: 1,
                    itemScope: 1,
                    itemType: 1,
                    keyParams: 1,
                    keyType: 1,
                    kind: 0,
                    label: 0,
                    lang: 0,
                    list: 0,
                    loop: 0,
                    low: 0,
                    manifest: 0,
                    marginWidth: 1,
                    marginHeight: 1,
                    max: 0,
                    maxLength: 1,
                    media: 0,
                    mediaGroup: 1,
                    method: 0,
                    min: 0,
                    minLength: 1,
                    multiple: 0,
                    muted: 0,
                    name: 0,
                    noModule: 1,
                    nonce: 0,
                    noValidate: 1,
                    open: 0,
                    optimum: 0,
                    pattern: 0,
                    placeholder: 0,
                    playsInline: 1,
                    poster: 0,
                    preload: 0,
                    profile: 0,
                    radioGroup: 1,
                    readOnly: 1,
                    referrerPolicy: 1,
                    rel: 0,
                    required: 0,
                    reversed: 0,
                    role: 0,
                    rows: 0,
                    rowSpan: 1,
                    sandbox: 0,
                    scope: 0,
                    scoped: 0,
                    scrolling: 0,
                    seamless: 0,
                    selected: 0,
                    shape: 0,
                    size: 0,
                    sizes: 0,
                    span: 0,
                    spellCheck: 1,
                    src: 0,
                    srcDoc: 1,
                    srcLang: 1,
                    srcSet: 1,
                    start: 0,
                    step: 0,
                    style: 0,
                    summary: 0,
                    tabIndex: 1,
                    target: 0,
                    title: 0,
                    type: 0,
                    useMap: 1,
                    value: 0,
                    width: 0,
                    wmode: 0,
                    wrap: 0,
                    about: 0,
                    accentHeight: 1,
                    "accent-height": "accentHeight",
                    accumulate: 0,
                    additive: 0,
                    alignmentBaseline: 1,
                    "alignment-baseline": "alignmentBaseline",
                    allowReorder: 1,
                    alphabetic: 0,
                    amplitude: 0,
                    arabicForm: 1,
                    "arabic-form": "arabicForm",
                    ascent: 0,
                    attributeName: 1,
                    attributeType: 1,
                    autoReverse: 1,
                    azimuth: 0,
                    baseFrequency: 1,
                    baselineShift: 1,
                    "baseline-shift": "baselineShift",
                    baseProfile: 1,
                    bbox: 0,
                    begin: 0,
                    bias: 0,
                    by: 0,
                    calcMode: 1,
                    capHeight: 1,
                    "cap-height": "capHeight",
                    clip: 0,
                    clipPath: 1,
                    "clip-path": "clipPath",
                    clipPathUnits: 1,
                    clipRule: 1,
                    "clip-rule": "clipRule",
                    color: 0,
                    colorInterpolation: 1,
                    "color-interpolation": "colorInterpolation",
                    colorInterpolationFilters: 1,
                    "color-interpolation-filters": "colorInterpolationFilters",
                    colorProfile: 1,
                    "color-profile": "colorProfile",
                    colorRendering: 1,
                    "color-rendering": "colorRendering",
                    contentScriptType: 1,
                    contentStyleType: 1,
                    cursor: 0,
                    cx: 0,
                    cy: 0,
                    d: 0,
                    datatype: 0,
                    decelerate: 0,
                    descent: 0,
                    diffuseConstant: 1,
                    direction: 0,
                    display: 0,
                    divisor: 0,
                    dominantBaseline: 1,
                    "dominant-baseline": "dominantBaseline",
                    dur: 0,
                    dx: 0,
                    dy: 0,
                    edgeMode: 1,
                    elevation: 0,
                    enableBackground: 1,
                    "enable-background": "enableBackground",
                    end: 0,
                    exponent: 0,
                    externalResourcesRequired: 1,
                    fill: 0,
                    fillOpacity: 1,
                    "fill-opacity": "fillOpacity",
                    fillRule: 1,
                    "fill-rule": "fillRule",
                    filter: 0,
                    filterRes: 1,
                    filterUnits: 1,
                    floodOpacity: 1,
                    "flood-opacity": "floodOpacity",
                    floodColor: 1,
                    "flood-color": "floodColor",
                    focusable: 0,
                    fontFamily: 1,
                    "font-family": "fontFamily",
                    fontSize: 1,
                    "font-size": "fontSize",
                    fontSizeAdjust: 1,
                    "font-size-adjust": "fontSizeAdjust",
                    fontStretch: 1,
                    "font-stretch": "fontStretch",
                    fontStyle: 1,
                    "font-style": "fontStyle",
                    fontVariant: 1,
                    "font-variant": "fontVariant",
                    fontWeight: 1,
                    "font-weight": "fontWeight",
                    format: 0,
                    from: 0,
                    fx: 0,
                    fy: 0,
                    g1: 0,
                    g2: 0,
                    glyphName: 1,
                    "glyph-name": "glyphName",
                    glyphOrientationHorizontal: 1,
                    "glyph-orientation-horizontal": "glyphOrientationHorizontal",
                    glyphOrientationVertical: 1,
                    "glyph-orientation-vertical": "glyphOrientationVertical",
                    glyphRef: 1,
                    gradientTransform: 1,
                    gradientUnits: 1,
                    hanging: 0,
                    horizAdvX: 1,
                    "horiz-adv-x": "horizAdvX",
                    horizOriginX: 1,
                    "horiz-origin-x": "horizOriginX",
                    ideographic: 0,
                    imageRendering: 1,
                    "image-rendering": "imageRendering",
                    in2: 0,
                    in: 0,
                    inlist: 0,
                    intercept: 0,
                    k1: 0,
                    k2: 0,
                    k3: 0,
                    k4: 0,
                    k: 0,
                    kernelMatrix: 1,
                    kernelUnitLength: 1,
                    kerning: 0,
                    keyPoints: 1,
                    keySplines: 1,
                    keyTimes: 1,
                    lengthAdjust: 1,
                    letterSpacing: 1,
                    "letter-spacing": "letterSpacing",
                    lightingColor: 1,
                    "lighting-color": "lightingColor",
                    limitingConeAngle: 1,
                    local: 0,
                    markerEnd: 1,
                    "marker-end": "markerEnd",
                    markerHeight: 1,
                    markerMid: 1,
                    "marker-mid": "markerMid",
                    markerStart: 1,
                    "marker-start": "markerStart",
                    markerUnits: 1,
                    markerWidth: 1,
                    mask: 0,
                    maskContentUnits: 1,
                    maskUnits: 1,
                    mathematical: 0,
                    mode: 0,
                    numOctaves: 1,
                    offset: 0,
                    opacity: 0,
                    operator: 0,
                    order: 0,
                    orient: 0,
                    orientation: 0,
                    origin: 0,
                    overflow: 0,
                    overlinePosition: 1,
                    "overline-position": "overlinePosition",
                    overlineThickness: 1,
                    "overline-thickness": "overlineThickness",
                    paintOrder: 1,
                    "paint-order": "paintOrder",
                    panose1: 0,
                    "panose-1": "panose1",
                    pathLength: 1,
                    patternContentUnits: 1,
                    patternTransform: 1,
                    patternUnits: 1,
                    pointerEvents: 1,
                    "pointer-events": "pointerEvents",
                    points: 0,
                    pointsAtX: 1,
                    pointsAtY: 1,
                    pointsAtZ: 1,
                    prefix: 0,
                    preserveAlpha: 1,
                    preserveAspectRatio: 1,
                    primitiveUnits: 1,
                    property: 0,
                    r: 0,
                    radius: 0,
                    refX: 1,
                    refY: 1,
                    renderingIntent: 1,
                    "rendering-intent": "renderingIntent",
                    repeatCount: 1,
                    repeatDur: 1,
                    requiredExtensions: 1,
                    requiredFeatures: 1,
                    resource: 0,
                    restart: 0,
                    result: 0,
                    results: 0,
                    rotate: 0,
                    rx: 0,
                    ry: 0,
                    scale: 0,
                    security: 0,
                    seed: 0,
                    shapeRendering: 1,
                    "shape-rendering": "shapeRendering",
                    slope: 0,
                    spacing: 0,
                    specularConstant: 1,
                    specularExponent: 1,
                    speed: 0,
                    spreadMethod: 1,
                    startOffset: 1,
                    stdDeviation: 1,
                    stemh: 0,
                    stemv: 0,
                    stitchTiles: 1,
                    stopColor: 1,
                    "stop-color": "stopColor",
                    stopOpacity: 1,
                    "stop-opacity": "stopOpacity",
                    strikethroughPosition: 1,
                    "strikethrough-position": "strikethroughPosition",
                    strikethroughThickness: 1,
                    "strikethrough-thickness": "strikethroughThickness",
                    string: 0,
                    stroke: 0,
                    strokeDasharray: 1,
                    "stroke-dasharray": "strokeDasharray",
                    strokeDashoffset: 1,
                    "stroke-dashoffset": "strokeDashoffset",
                    strokeLinecap: 1,
                    "stroke-linecap": "strokeLinecap",
                    strokeLinejoin: 1,
                    "stroke-linejoin": "strokeLinejoin",
                    strokeMiterlimit: 1,
                    "stroke-miterlimit": "strokeMiterlimit",
                    strokeWidth: 1,
                    "stroke-width": "strokeWidth",
                    strokeOpacity: 1,
                    "stroke-opacity": "strokeOpacity",
                    suppressContentEditableWarning: 1,
                    suppressHydrationWarning: 1,
                    surfaceScale: 1,
                    systemLanguage: 1,
                    tableValues: 1,
                    targetX: 1,
                    targetY: 1,
                    textAnchor: 1,
                    "text-anchor": "textAnchor",
                    textDecoration: 1,
                    "text-decoration": "textDecoration",
                    textLength: 1,
                    textRendering: 1,
                    "text-rendering": "textRendering",
                    to: 0,
                    transform: 0,
                    typeof: 0,
                    u1: 0,
                    u2: 0,
                    underlinePosition: 1,
                    "underline-position": "underlinePosition",
                    underlineThickness: 1,
                    "underline-thickness": "underlineThickness",
                    unicode: 0,
                    unicodeBidi: 1,
                    "unicode-bidi": "unicodeBidi",
                    unicodeRange: 1,
                    "unicode-range": "unicodeRange",
                    unitsPerEm: 1,
                    "units-per-em": "unitsPerEm",
                    unselectable: 0,
                    vAlphabetic: 1,
                    "v-alphabetic": "vAlphabetic",
                    values: 0,
                    vectorEffect: 1,
                    "vector-effect": "vectorEffect",
                    version: 0,
                    vertAdvY: 1,
                    "vert-adv-y": "vertAdvY",
                    vertOriginX: 1,
                    "vert-origin-x": "vertOriginX",
                    vertOriginY: 1,
                    "vert-origin-y": "vertOriginY",
                    vHanging: 1,
                    "v-hanging": "vHanging",
                    vIdeographic: 1,
                    "v-ideographic": "vIdeographic",
                    viewBox: 1,
                    viewTarget: 1,
                    visibility: 0,
                    vMathematical: 1,
                    "v-mathematical": "vMathematical",
                    vocab: 0,
                    widths: 0,
                    wordSpacing: 1,
                    "word-spacing": "wordSpacing",
                    writingMode: 1,
                    "writing-mode": "writingMode",
                    x1: 0,
                    x2: 0,
                    x: 0,
                    xChannelSelector: 1,
                    xHeight: 1,
                    "x-height": "xHeight",
                    xlinkActuate: 1,
                    "xlink:actuate": "xlinkActuate",
                    xlinkArcrole: 1,
                    "xlink:arcrole": "xlinkArcrole",
                    xlinkHref: 1,
                    "xlink:href": "xlinkHref",
                    xlinkRole: 1,
                    "xlink:role": "xlinkRole",
                    xlinkShow: 1,
                    "xlink:show": "xlinkShow",
                    xlinkTitle: 1,
                    "xlink:title": "xlinkTitle",
                    xlinkType: 1,
                    "xlink:type": "xlinkType",
                    xmlBase: 1,
                    "xml:base": "xmlBase",
                    xmlLang: 1,
                    "xml:lang": "xmlLang",
                    xmlns: 0,
                    "xml:space": "xmlSpace",
                    xmlnsXlink: 1,
                    "xmlns:xlink": "xmlnsXlink",
                    xmlSpace: 1,
                    y1: 0,
                    y2: 0,
                    y: 0,
                    yChannelSelector: 1,
                    z: 0,
                    zoomAndPan: 1
                }
            },
            476: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = r(n(174)),
                    a = n(678);
                t.default = function(e, t) {
                    var n = {};
                    return e && "string" == typeof e ? ((0, i.default)(e, (function(e, r) {
                        e && r && (n[(0, a.camelCase)(e, t)] = r)
                    })), n) : n
                }
            },
            678: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.camelCase = void 0;
                var n = /^--[a-zA-Z0-9-]+$/,
                    r = /-([a-z])/g,
                    i = /^[^-]+$/,
                    a = /^-(webkit|moz|ms|o|khtml)-/,
                    o = /^-(ms)-/,
                    s = function(e, t) {
                        return t.toUpperCase()
                    },
                    l = function(e, t) {
                        return "".concat(t, "-")
                    };
                t.camelCase = function(e, t) {
                    return void 0 === t && (t = {}),
                        function(e) {
                            return !e || i.test(e) || n.test(e)
                        }(e) ? e : (e = e.toLowerCase(), (e = t.reactCompat ? e.replace(o, l) : e.replace(a, l)).replace(r, s))
                }
            },
            174: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = r(n(139));
                t.default = function(e, t) {
                    var n = null;
                    if (!e || "string" != typeof e) return n;
                    var r = (0, i.default)(e),
                        a = "function" == typeof t;
                    return r.forEach((function(e) {
                        if ("declaration" === e.type) {
                            var r = e.property,
                                i = e.value;
                            a ? t(r, i, e) : i && ((n = n || {})[r] = i)
                        }
                    })), n
                }
            },
            196: function(e) {
                "use strict";
                e.exports = window.React
            }
        },
        t = {};

    function n(r) {
        var i = t[r];
        if (void 0 !== i) return i.exports;
        var a = t[r] = {
            exports: {}
        };
        return e[r].call(a.exports, a, a.exports, n), a.exports
    }
    n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, {
                a: t
            }), t
        }, n.d = function(e, t) {
            for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        function() {
            "use strict";
            var e = window.wp.element,
                t = window.wp.data,
                r = window.wp.editPost,
                i = window.wp.plugins,
                a = window.wp.blockEditor,
                o = window.wp.components;
            const s = 32,
                l = 24,
                c = 16,
                u = 1.2,
                d = 1,
                p = "currentColor",
                f = "none",
                h = "#fff",
                m = {
                    stroke: p,
                    strokeWidth: 1.4,
                    fill: f,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                },
                g = {
                    fill: p,
                    stroke: f
                },
                v = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, e.createElement)("svg", {
                        width: s,
                        height: s,
                        viewBox: "0 0 30 30",
                        fill: f,
                        ...t
                    }, (0, e.createElement)("path", {
                        d: "M5 0C2.23858 0 0 2.23858 0 5V25C0 27.7614 2.23858 30 5 30H25C27.7614 30 30 27.7614 30 25V5C30 2.23858 27.7614 0 25 0H5ZM26.1432 10.7265C26.1459 10.7262 26.1487 10.7259 26.1514 10.7256L26.1349 10.7269C26.1377 10.7267 26.1405 10.7266 26.1432 10.7265ZM26.1432 10.7265C21.9125 11.174 19.2481 11.1414 18.4509 11.1007C18.3687 11.1071 18.3417 10.9723 18.4048 10.9331C20.7044 9.21451 21.5524 7.98503 21.7865 7.59037C21.8319 7.53551 21.776 7.45429 21.7102 7.45939C20.6151 7.42458 13.7358 7.29097 9.63266 7.95161C6.00268 8.5242 3.84948 11.2753 3.86235 14.851C3.87523 18.4266 6.09129 21.3863 9.29387 22.1304C17.4168 23.9986 22.9334 18.0944 23.8439 17.0311C23.9057 16.975 23.8485 16.8768 23.7649 16.8661L19.5924 16.8476C19.4937 16.8553 19.4654 16.7035 19.5615 16.6618C24.5276 14.3256 25.9654 11.5273 26.2442 10.8553C26.2709 10.7871 26.2208 10.7249 26.1432 10.7265Z",
                        ...g,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        ...n
                    }))
                },
                b = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, e.createElement)("svg", {
                        width: c,
                        height: c,
                        viewBox: "0 0 24 24",
                        fill: f,
                        ...t
                    }, (0, e.createElement)("path", {
                        d: "M4.5 12.75l6 6 9-13.5",
                        ...m,
                        strokeWidth: u,
                        ...n
                    }))
                },
                y = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, e.createElement)("svg", {
                        width: c,
                        height: c,
                        viewBox: "0 0 16 16",
                        fill: f,
                        ...t
                    }, (0, e.createElement)("path", {
                        d: "M7.56635 2.55746C7.52322 2.69734 7.5 2.84596 7.5 3C7.5 3.27614 7.72386 3.5 8 3.5H11C11.2761 3.5 11.5 3.27614 11.5 3C11.5 2.84596 11.4768 2.69734 11.4337 2.55746M7.56635 2.55746C7.75517 1.94505 8.32561 1.5 9 1.5H10C10.6744 1.5 11.2448 1.94505 11.4337 2.55746M7.56635 2.55746C7.31591 2.57239 7.06625 2.59019 6.81739 2.61085C6.06333 2.67344 5.5 3.31549 5.5 4.07215V5.5M11.4337 2.55746C11.6841 2.57239 11.9338 2.59019 12.1826 2.61085C12.9367 2.67344 13.5 3.31549 13.5 4.07214V11C13.5 11.8284 12.8284 12.5 12 12.5H10.5M5.5 5.5H3.25C2.83579 5.5 2.5 5.83579 2.5 6.25V13.75C2.5 14.1642 2.83579 14.5 3.25 14.5H9.75C10.1642 14.5 10.5 14.1642 10.5 13.75V12.5M5.5 5.5H9.75C10.1642 5.5 10.5 5.83579 10.5 6.25V12.5M5 10.5L6 11.5L8 9",
                        ...m,
                        strokeWidth: u,
                        ...n
                    }))
                },
                C = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, e.createElement)("svg", {
                        width: c,
                        height: c,
                        viewBox: "0 0 24 24",
                        fill: f,
                        ...t
                    }, (0, e.createElement)("path", {
                        d: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
                        ...m,
                        strokeWidth: u,
                        ...n
                    }))
                },
                _ = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, e.createElement)("svg", {
                        width: c,
                        height: c,
                        viewBox: "0 0 24 24",
                        fill: f,
                        ...t
                    }, (0, e.createElement)("path", {
                        d: "M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75",
                        ...m,
                        strokeWidth: u,
                        ...n
                    }))
                },
                E = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, e.createElement)("svg", {
                        width: c,
                        height: c,
                        viewBox: "0 0 16 16",
                        fill: f,
                        ...t
                    }, (0, e.createElement)("path", {
                        d: "M7.36484 2.23437H3.36484C2.03936 2.23437 0.964844 3.30889 0.964844 4.63437V12.6344C0.964844 13.9599 2.03936 15.0344 3.36484 15.0344H11.3648C12.6903 15.0344 13.7648 13.9599 13.7648 12.6344L13.7648 8.63441M4.96484 11.0344L7.8755 10.4479C8.03002 10.4168 8.1719 10.3407 8.28332 10.2292L14.7991 3.70982C15.1115 3.39725 15.1113 2.8906 14.7986 2.57829L13.4184 1.19957C13.1058 0.887393 12.5994 0.887605 12.2871 1.20005L5.77069 7.72008C5.65948 7.83135 5.58354 7.97294 5.55238 8.12714L4.96484 11.0344Z",
                        ...m,
                        strokeWidth: u,
                        ...n
                    }))
                },
                w = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, e.createElement)("svg", {
                        width: l,
                        height: l,
                        viewBox: "0 0 20 20",
                        fill: f,
                        ...t
                    }, (0, e.createElement)("g", {
                        clipPath: "url(#zip_ai_svg_clip0_4606_13338)"
                    }, (0, e.createElement)("path", {
                        d: "M10.0013 6.66675V10.0001M10.0013 13.3334H10.0096M18.3346 10.0001C18.3346 14.6025 14.6037 18.3334 10.0013 18.3334C5.39893 18.3334 1.66797 14.6025 1.66797 10.0001C1.66797 5.39771 5.39893 1.66675 10.0013 1.66675C14.6037 1.66675 18.3346 5.39771 18.3346 10.0001Z",
                        ...m,
                        ...n
                    })), (0, e.createElement)("defs", {}, (0, e.createElement)("clipPath", {
                        id: "zip_ai_svg_clip0_4606_13338"
                    }, (0, e.createElement)("rect", {
                        width: 20,
                        height: 20,
                        fill: h
                    }))))
                },
                x = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, e.createElement)("svg", {
                        width: c,
                        height: c,
                        viewBox: "0 0 16 16",
                        fill: f,
                        ...t
                    }, (0, e.createElement)("path", {
                        d: "M10.6807 6.23235H14.0091V6.23117M1.98828 13.0963V9.76791M1.98828 9.76791L5.31671 9.76791M1.98828 9.76791L4.10888 11.8899C4.76923 12.5515 5.60726 13.0534 6.5751 13.3127C9.50916 14.0989 12.525 12.3577 13.3112 9.42365M2.68601 6.57664C3.47219 3.64258 6.48804 1.90137 9.42211 2.68755C10.3899 2.94688 11.228 3.44883 11.8883 4.11042L14.0091 6.23117M14.0091 2.90395V6.23117",
                        ...m,
                        strokeWidth: u,
                        ...n
                    }))
                },
                k = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, e.createElement)("svg", {
                        width: c,
                        height: c,
                        viewBox: "0 0 14 14",
                        fill: f,
                        ...t
                    }, (0, e.createElement)("path", {
                        d: "M2.1875 2.1875V4.8125M2.1875 2.1875H4.8125M2.1875 2.1875L5.25 5.25M2.1875 11.8125V9.1875M2.1875 11.8125H4.8125M2.1875 11.8125L5.25 8.75M11.8125 2.1875L9.1875 2.1875M11.8125 2.1875V4.8125M11.8125 2.1875L8.75 5.25M11.8125 11.8125H9.1875M11.8125 11.8125V9.1875M11.8125 11.8125L8.75 8.75",
                        ...m,
                        strokeWidth: u,
                        ...n
                    }))
                },
                S = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, e.createElement)("svg", {
                        width: c,
                        height: c,
                        viewBox: "0 0 16 16",
                        fill: f,
                        ...t
                    }, (0, e.createElement)("path", {
                        d: "M6 6L6 3M6 6L3 6M6 6L2.5 2.5M6 10L6 13M6 10L3 10M6 10L2.5 13.5M10 6H13M10 6V3M10 6L13.5 2.5M10 10H13M10 10L10 13M10 10L13.5 13.5",
                        ...m,
                        strokeWidth: u,
                        ...n
                    }))
                },
                O = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return {
                        left: (0, e.createElement)("svg", {
                            width: c,
                            height: c,
                            viewBox: "0 0 16 16",
                            fill: f,
                            ...t
                        }, (0, e.createElement)("path", {
                            d: "M9.06 4L10 4.94L6.94667 8L10 11.06L9.06 12L5.06 8L9.06 4Z",
                            ...m,
                            strokeWidth: u,
                            ...n
                        })),
                        right: (0, e.createElement)("svg", {
                            width: c,
                            height: c,
                            viewBox: "0 0 16 16",
                            fill: f,
                            ...t
                        }, (0, e.createElement)("path", {
                            d: "M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z",
                            ...m,
                            strokeWidth: u,
                            ...n
                        }))
                    }
                },
                M = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, e.createElement)("svg", {
                        width: c,
                        height: c,
                        viewBox: "0 0 16 16",
                        fill: f,
                        ...t
                    }, (0, e.createElement)("path", {
                        d: "M10.1213 10.1213C9.84276 10.3999 9.51204 10.6209 9.14806 10.7717C8.78408 10.9224 8.39397 11 8 11C7.60603 11 7.21592 10.9224 6.85194 10.7717C6.48796 10.6209 6.15724 10.3999 5.87867 10.1213M14 8C14 8.78793 13.8448 9.56815 13.5433 10.2961C13.2417 11.0241 12.7998 11.6855 12.2426 12.2426C11.6855 12.7998 11.0241 13.2417 10.2961 13.5433C9.56815 13.8448 8.78793 14 8 14C7.21207 14 6.43185 13.8448 5.7039 13.5433C4.97595 13.2417 4.31451 12.7998 3.75736 12.2426C3.20021 11.6855 2.75825 11.0241 2.45672 10.2961C2.15519 9.56815 2 8.78793 2 8C2 6.4087 2.63214 4.88258 3.75736 3.75736C4.88258 2.63214 6.4087 2 8 2C9.5913 2 11.1174 2.63214 12.2426 3.75736C13.3679 4.88258 14 6.4087 14 8ZM6.5 6.5C6.5 6.776 6.388 7 6.25 7C6.112 7 6 6.776 6 6.5C6 6.224 6.112 6 6.25 6C6.388 6 6.5 6.224 6.5 6.5ZM6.25 6.5H6.25533V6.51H6.25V6.5ZM10 6.5C10 6.776 9.888 7 9.75 7C9.612 7 9.5 6.776 9.5 6.5C9.5 6.224 9.612 6 9.75 6C9.888 6 10 6.224 10 6.5ZM9.75 6.5H9.75533V6.51H9.75V6.5Z",
                        ...m,
                        strokeWidth: u,
                        ...n
                    }))
                },
                T = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, e.createElement)("svg", {
                        width: c,
                        height: c,
                        viewBox: "0 0 16 16",
                        fill: f,
                        ...t
                    }, (0, e.createElement)("path", {
                        d: "M7 14L10.5 6.5L14 14M8 12H13M2 3.74733C3.32693 3.58221 4.66283 3.49961 6 3.5M6 3.5C6.74667 3.5 7.48867 3.52533 8.22267 3.576M6 3.5V2M8.22267 3.576C7.45067 7.10533 5.12667 10.0533 2 11.668M8.22267 3.576C8.82 3.61667 9.41267 3.674 10 3.74733M6.94067 9.41067C5.84731 8.29908 4.98076 6.98533 4.38933 5.54267",
                        ...m,
                        strokeWidth: u,
                        ...n
                    }))
                },
                L = e => e.filter(Boolean).join(" "),
                I = async e => {
                    if (window.navigator.clipboard && window.isSecureContext) await window.navigator.clipboard.writeText(e);
                    else {
                        const t = document.createElement("textarea");
                        t.value = e, t.style.position = "absolute", t.style.left = "-999999px", t.style.opacity = "0", document.body.prepend(t), t.select();
                        try {
                            document.execCommand("copy")
                        } catch (e) {
                            console.error(e)
                        } finally {
                            t.remove()
                        }
                    }
                };
            var z = window.wp.richText,
                P = window.wp.i18n,
                A = window.wp.apiFetch,
                V = n.n(A);
            const R = async e => {
                    const {
                        userCommand: t,
                        previousMessages: n,
                        useSystemMessage: r
                    } = e, i = [];
                    n ? .length && n.forEach((e => {
                        i.push({
                            role: e.role,
                            content: e.message
                        })
                    })), i.push({
                        role: "user",
                        content: t
                    });
                    const a = {
                        message_array: i,
                        use_system_message: r
                    };
                    return V()({
                        path: "zip_ai/generate",
                        method: "POST",
                        data: a
                    })
                },
                N = {
                    color: "#64748b"
                },
                D = (0, e.createContext)({
                    chatLog: [],
                    setChatLog: null,
                    isOpen: !1,
                    setIsOpen: null,
                    isRichText: !1,
                    updateContent: null,
                    currentText: ""
                }),
                H = (0, e.createElement)("div", {
                    className: "zip-ai-sidebar__chat-loader"
                }, (0, e.createElement)("div", {
                    className: "zip-ai-sidebar__chat-loader--dot dot-1"
                }), (0, e.createElement)("div", {
                    className: "zip-ai-sidebar__chat-loader--dot dot-2"
                }), (0, e.createElement)("div", {
                    className: "zip-ai-sidebar__chat-loader--dot dot-3"
                })),
                F = (e, t) => e ? .filter((e => "ai" === e.from || "content" === e.from)) ? .pop() ? .message || t,
                j = (e, t, n) => {
                    let r;
                    switch (t) {
                        case "progress":
                            r = e ? .progress;
                            break;
                        case "success":
                            r = e ? .success, setTimeout((() => {
                                n("default")
                            }), 750);
                            break;
                        default:
                            r = e.default
                    }
                    return r
                },
                B = t => {
                    const {
                        message: n
                    } = t, [r, i] = (0, e.useState)("default");
                    if (!n) return null;
                    const a = n.split("\n"),
                        o = a.shift(),
                        s = a.join("\n").trim(),
                        l = {
                            default: _(N),
                            progress: C(N),
                            success: b(N)
                        };
                    return (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-bubble--code-block"
                    }, (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-bubble--code-block-title"
                    }, o, (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-bubble--code-block-actions"
                    }, (0, e.createElement)("button", {
                        className: "zip-ai-sidebar__chat-bubble--code-block-button",
                        onClick: async () => {
                            try {
                                i("progress"), await I(s), i("success")
                            } catch (e) {
                                console.error(e), i("default")
                            }
                        }
                    }, j(l, r, i)))), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-bubble--code-block-content"
                    }, (0, e.createElement)("code", null, s)))
                };
            var U = t => {
                const {
                    chatBubble: n,
                    updateContent: r,
                    closeModal: i,
                    setGenerating: a,
                    regeneratingId: o,
                    setRegeneratingId: s,
                    aiResponseError: l,
                    setAiResponseError: c,
                    setUserInput: u = null,
                    setRefreshFilters: d = null,
                    editCheck: p = null,
                    setEditCheck: f = null
                } = t, {
                    chatLog: h,
                    setChatLog: m
                } = (0, e.useContext)(D), [g, v] = (0, e.useState)(0), [y, w] = (0, e.useState)("default"), [k, S] = (0, e.useState)({
                    enabled: !1,
                    value: n ? .message
                }), M = n ? .variations ? .length && n.variations.length > 1;
                (0, e.useEffect)((() => {
                    !o && "ai" === n ? .from && M && v(n.variations.length - 1)
                }), [o]), (0, e.useEffect)((() => {
                    "ai" === n ? .from && n ? .id && M && (h[n.id].message = n.variations[g], m([...h]))
                }), [g]), (0, e.useEffect)((() => {
                    "ai" === n ? .from && n ? .variations && n ? .id && n.id !== h ? .length - 1 && (h[n.id].variations = [], m([...h]))
                }), [h ? .length]);
                let T, z, A = n ? .action;
                const V = l ? n ? .id === h ? .length - 2 : n ? .id === h ? .length - 1;
                switch (n ? .from) {
                    case "content":
                        T = (0, P.__)("Content:", "zip-ai");
                        break;
                    case "user":
                        T = (0, P.__)("You:", "zip-ai"), z = p ? void 0 : [{
                            icon: E(N),
                            execute: () => {
                                null !== f && f(!0), k.enabled = !0, S({ ...k
                                })
                            }
                        }];
                        break;
                    case "ai":
                        if (T = (0, P.__)("Zip:", "zip-ai"), !n ? .variations ? .length && n ? .message && V && (n.variations = [n ? .message]), z = [], A = {
                                execute: async () => {
                                    if (null !== r) r(n ? .message);
                                    else try {
                                        await I(n ? .message)
                                    } catch {}
                                    i()
                                },
                                label: null !== r ? (0, P.__)("Use This", "zip-ai") : (0, P.__)("Copy & Close", "zip-ai")
                            }, z.push({
                                multiIcons: {
                                    default: _(N),
                                    progress: C(N),
                                    success: b(N)
                                },
                                execute: async () => {
                                    try {
                                        w("progress"), await I(n ? .message), w("success")
                                    } catch (e) {
                                        console.error(e), w("default")
                                    }
                                }
                            }), !V || !n ? .variations ? .length) break;
                        z.push({
                            icon: x(N),
                            execute: () => {
                                W({
                                    chatBubble: n,
                                    regenerationCommand: "Rephrase the last assistant message, ensuring that it abides by the last user command.",
                                    setGenerating: a,
                                    setRegeneratingId: s,
                                    setAiResponseError: c,
                                    chatLog: h,
                                    setChatLog: m
                                })
                            }
                        })
                }
                const R = () => (0, e.createElement)(e.Fragment, null, (T || z) && (0, e.createElement)("div", {
                    className: "zip-ai-sidebar__chat-bubble--header"
                }, T && (0, e.createElement)("h3", {
                    className: "zip-ai-sidebar__chat-bubble--user"
                }, T), z && (0, e.createElement)("div", {
                    className: L(["zip-ai-sidebar__chat-bubble--interaction", "user" === n ? .from && "zip-ai-sidebar__chat-bubble--interaction-on-hover"])
                }, z.map(((t, r) => (0, e.createElement)("button", {
                    key: r,
                    onClick: () => t ? .execute(),
                    disabled: n.id === o
                }, "ai" === n ? .from && t ? .multiIcons ? j(t.multiIcons, y, w) : t ? .icon))))), "user" === n ? .from && k ? .enabled ? (() => {
                    const t = () => {
                        if (null === u || null === d) return S({
                            enabled: !1,
                            value: n ? .message
                        }), void(null !== f && f(!1));
                        const e = h[n.id - 1] ? .message || "",
                            t = k.value,
                            r = h.slice(0, n.id);
                        $({
                            textContent: e,
                            textCommand: t,
                            setGenerating: a,
                            setText: u,
                            setRefreshFilters: d,
                            setAiResponseError: c,
                            chatLog: r,
                            fallbackChatlog: h,
                            setChatLog: m
                        }), k.enabled = !1, S({ ...k
                        }), null !== f && f(!1)
                    };
                    return (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-editor"
                    }, (0, e.createElement)("input", {
                        className: L(["zip-ai-sidebar__chat-editor--input", !k ? .value && "zip-ai-sidebar__chat-editor--input-error"]),
                        type: "text",
                        value: k.value,
                        onChange: e => {
                            k.value = e.target.value, S({ ...k
                            })
                        },
                        onKeyDown: e => {
                            "Enter" === e.key && (k.value = e.target.value, S({ ...k
                            }), t())
                        }
                    }), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-editor--actions"
                    }, (0, e.createElement)("button", {
                        className: "zip-ai-sidebar__chat-editor--action-primary",
                        onClick: () => {
                            t()
                        },
                        disabled: "" === k ? .value ? .trim()
                    }, (0, P.__)("Update", "zip-ai")), (0, e.createElement)("button", {
                        onClick: () => {
                            S({
                                enabled: !1,
                                value: n ? .message
                            }), f(!1)
                        }
                    }, (0, P.__)("Cancel", "zip-ai"))), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-editor--info"
                    }, (0, P.__)("Note: All subsequent messages will be deleted after you update.", "zip-ai")))
                })() : (0, e.createElement)(e.Fragment, null, n ? .type || n.id !== o ? (0, e.createElement)(e.Fragment, null, (0, e.createElement)("p", {
                    className: "zip-ai-sidebar__chat-bubble--message"
                }, "ai" === n ? .from ? (t => {
                    if (!t) return null;
                    const n = t => {
                            if (!t.includes("`")) return t;
                            const n = [];
                            return t.split("`").forEach(((t, r) => {
                                0 == r % 2 ? n.push(t) : n.push((0, e.createElement)("span", {
                                    className: "zip-ai-sidebar__chat-bubble--code"
                                }, t))
                            })), n
                        },
                        r = t.split("```");
                    if (1 === r.length) return n(t);
                    const i = [];
                    return r.forEach(((t, r) => {
                        0 == r % 2 && i.push(n(t)), 1 == r % 2 && i.push((0, e.createElement)(B, {
                            message: t
                        }))
                    })), i
                })(n ? .message) : n ? .message), A && (0, e.createElement)("div", {
                    className: "zip-ai-sidebar__chat-bubble--footer"
                }, (0, e.createElement)("button", {
                    className: "zip-ai-sidebar__chat-bubble--action",
                    onClick: () => {
                        A ? .execute()
                    }
                }, A ? .label || (0, P.__)("Click Here", "zip-ai")), V && M ? (0, e.createElement)("div", {
                    className: "zip-ai-sidebar__chat-bubble--pagination"
                }, (0, e.createElement)("button", {
                    onClick: () => {
                        v(g - 1)
                    },
                    disabled: 0 === g
                }, O(N).left), (0, e.createElement)("span", null, (0, P.sprintf)(
                    // translators: %1$d is the current page, %2$d is the total number of pages.
                    (0, P.__)("%1$d / %2$d", "zip-ai"), g + 1, n.variations.length)), (0, e.createElement)("button", {
                    onClick: () => {
                        v(g + 1)
                    },
                    disabled: g === n.variations.length - 1
                }, O(N).right)) : (0, e.createElement)(e.Fragment, null))) : H));
                return (0, e.createElement)("div", {
                    className: L(["zip-ai-sidebar__chat-bubble", n ? .type && `zip-ai-sidebar__chat-bubble--type-${n.type}`, n ? .icon && "zip-ai-sidebar__chat-bubble--has-icon"])
                }, n ? .icon ? (0, e.createElement)(e.Fragment, null, (0, e.createElement)("div", {
                    className: "zip-ai-sidebar__chat-bubble--icon-wrapper"
                }, n.icon), (0, e.createElement)("div", {
                    className: "zip-ai-sidebar__chat-bubble--icon-content"
                }, R())) : R())
            };
            const $ = e => {
                    const {
                        startingText: t = "",
                        textContent: n,
                        textCommand: r,
                        setGenerating: i,
                        setText: a,
                        setRefreshFilters: o,
                        setAiResponseError: s,
                        chatLog: l,
                        setChatLog: c,
                        fallbackChatlog: u = null,
                        oneClickCommand: d = null,
                        setValidForSaving: p = null,
                        useSystemMessage: f = !0
                    } = e, h = u || l || [];
                    let m = l.length,
                        g = [...l, {
                            id: m,
                            from: "user",
                            message: d || (l ? .length || t ? r : n)
                        }];
                    ++m, i(!0), s(""), c([...g]);
                    const v = (e => {
                        const t = [];
                        return e.forEach((e => {
                            t.push({
                                role: "ai" === e.from ? "assistant" : "user",
                                message: e.message
                            })
                        })), t
                    })(h);
                    R({
                        userCommand: r || n,
                        previousMessages: v,
                        useSystemMessage: f
                    }).then((e => {
                        const t = e.data;
                        i(!1), e.success ? (t.message.startsWith('"') && t.message.endsWith('"') && (t.message = t.message.slice(1, -1)), g = [...g, {
                            id: m,
                            from: "ai",
                            message: t.message.trim()
                        }], a(""), c([...g]), "function" == typeof p && p(!0)) : (s(t.message), c([...h])), o(!0)
                    })).catch((() => {
                        i(!1)
                    })), o(!0)
                },
                W = e => {
                    const {
                        chatBubble: t,
                        regenerationCommand: n,
                        setGenerating: r,
                        setRegeneratingId: i,
                        setAiResponseError: a,
                        chatLog: o,
                        setChatLog: s
                    } = e, l = [];
                    o[t.id - 2] ? .message && l.push({
                        role: "assistant",
                        message: o[t.id - 2].message
                    }), l.push({
                        role: "user",
                        message: o[t.id - 1].message
                    }, {
                        role: "assistant",
                        message: t.variations[0]
                    }), t ? .variations ? .length && t.variations.length > 1 && t.variations.forEach(((e, t) => {
                        0 !== t && l.push({
                            role: "user",
                            message: n
                        }, {
                            role: "assistant",
                            message: e
                        })
                    })), i(t.id), r(!0), a(""), R({
                        userCommand: n,
                        previousMessages: l,
                        useSystemMessage: !1
                    }).then((e => {
                        const n = e.data;
                        r(!1), i(null), e.success ? (n.message.startsWith('"') && n.message.endsWith('"') && (n.message = n.message.slice(1, -1)), o.forEach(((e, r) => {
                            t.id === e.id && (o[r].message = n.message.trim(), o[r].variations.push(n.message.trim()), s([...o]))
                        }))) : a(n.message)
                    })).catch((() => {
                        r(!1), i(null)
                    }))
                };
            var Z = n(426),
                G = Z.default || Z,
                q = t => {
                    const {
                        chatLogId: n,
                        isAuthorized: r,
                        generationRef: i,
                        currentText: a,
                        userInput: o,
                        setUserInput: s,
                        setRefreshFilters: l,
                        generating: u,
                        setGenerating: d,
                        setAiResponseError: p,
                        validForSaving: h,
                        setValidForSaving: g
                    } = t, {
                        chatLog: v,
                        setChatLog: b
                    } = (0, e.useContext)(D);
                    let y = zip_ai_react ? .collab_product_details;
                    "object" == typeof y && null !== y || (y = {});
                    const {
                        ai_assistant_authorized_disable_url: C,
                        ai_assistant_unauthorized_disable_url: _
                    } = y, E = () => {
                        let e, t;
                        v ? .length || a ? (e = F(v, a), t = o) : e = o, $({
                            startingText: a,
                            textContent: e,
                            textCommand: t,
                            setGenerating: d,
                            setText: s,
                            setRefreshFilters: l,
                            setAiResponseError: p,
                            chatLog: v,
                            setChatLog: b,
                            setValidForSaving: g
                        })
                    };
                    return (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__input-prompt"
                    }, (0, e.createElement)("textarea", {
                        className: "zip-ai-sidebar__input-prompt--text",
                        onChange: e => {
                            s(e.target ? .value || "")
                        },
                        onKeyDown: e => {
                            "Enter" !== e.key || e.shiftKey || (e.preventDefault(), "" !== o.trim() && E())
                        },
                        rows: "3",
                        ref: i,
                        value: o,
                        disabled: u || !r,
                        placeholder: u ? (0, P.__)("Generating…", "zip-ai") : v ? .length || "" === a ? (0, P.__)("How can I help you?", "zip-ai") : a
                    }), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__input-prompt--disclaimer"
                    }, r && C || !r && _ ? G((0, P.sprintf)(
                        // Translators: %1$s is the opening link tag, %2$s is the closing link tag.
                        (0, P.__)("AI Assistant can make mistakes. Want to %1$sdisable it?%2$s", "zip-ai"), `<a href="${r?C:_}" target="_blank">`, "</a>")) : (0, P.__)("AI Assistant can make mistakes.", "zip-ai")), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__input-prompt--footer"
                    }, (0, e.createElement)("button", {
                        className: "zip-ai-sidebar__input-prompt--button",
                        onClick: () => E(),
                        disabled: "" === o.trim() || u || !r
                    }, function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return (0, e.createElement)("svg", {
                            width: c,
                            height: c,
                            viewBox: "0 0 16 16",
                            fill: f,
                            ...t
                        }, (0, e.createElement)("path", {
                            d: "M3.33333 2V4.66667M2 3.33333H4.66667M4 11.3333V14M2.66667 12.6667H5.33333M8.66667 2L10.1905 6.57143L14 8L10.1905 9.42857L8.66667 14L7.14286 9.42857L3.33333 8L7.14286 6.57143L8.66667 2Z",
                            ...m,
                            ...n
                        }))
                    }({
                        color: "#fff"
                    }), (0, P.__)("Write for me", "zip-ai")), h && (0, e.createElement)("button", {
                        className: "zip-ai-sidebar__input-prompt--button secondary-variant",
                        onClick: () => {
                            localStorage.removeItem(`zipAiPreservedChatlog${n}`), g(!1), b(a ? [{
                                id: 0,
                                from: "content",
                                message: a
                            }] : []), l(!0)
                        },
                        disabled: u
                    }, function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return (0, e.createElement)("svg", {
                            width: c,
                            height: c,
                            viewBox: "0 0 16 16",
                            fill: f,
                            ...t
                        }, (0, e.createElement)("path", {
                            d: "M4 12L12 4M4 4L12 12",
                            ...m,
                            ...n
                        }))
                    }({
                        color: "#fff"
                    }), (0, P.__)("Clear Chat", "zip-ai"))))
                };
            const Y = {
                    color: "#64748b"
                },
                X = (e, t, n) => {
                    t(e), n ? .current ? .focus()
                },
                K = [{
                    value: "Arabic",
                    label: (0, P.__)("Arabic", "zip-ai")
                }, {
                    value: "Azerbaijani",
                    label: (0, P.__)("Azerbaijani", "zip-ai")
                }, {
                    value: "Bengali",
                    label: (0, P.__)("Bengali", "zip-ai")
                }, {
                    value: "Belarusian",
                    label: (0, P.__)("Belarusian", "zip-ai")
                }, {
                    value: "Bulgarian",
                    label: (0, P.__)("Bulgarian", "zip-ai")
                }, {
                    value: "Chinese",
                    label: (0, P.__)("Chinese (Simplified)", "zip-ai")
                }, {
                    value: "Croatian",
                    label: (0, P.__)("Croatian", "zip-ai")
                }, {
                    value: "Czech",
                    label: (0, P.__)("Czech", "zip-ai")
                }, {
                    value: "Danish",
                    label: (0, P.__)("Danish", "zip-ai")
                }, {
                    value: "Dutch",
                    label: (0, P.__)("Dutch", "zip-ai")
                }, {
                    value: "English",
                    label: (0, P.__)("English", "zip-ai")
                }, {
                    value: "Estonian",
                    label: (0, P.__)("Estonian", "zip-ai")
                }, {
                    value: "Finnish",
                    label: (0, P.__)("Finnish", "zip-ai")
                }, {
                    value: "Filipino",
                    label: (0, P.__)("Filipino", "zip-ai")
                }, {
                    value: "French",
                    label: (0, P.__)("French", "zip-ai")
                }, {
                    value: "Georgian",
                    label: (0, P.__)("Georgian", "zip-ai")
                }, {
                    value: "German",
                    label: (0, P.__)("German", "zip-ai")
                }, {
                    value: "Greek",
                    label: (0, P.__)("Greek", "zip-ai")
                }, {
                    value: "Hebrew",
                    label: (0, P.__)("Hebrew", "zip-ai")
                }, {
                    value: "Hindi",
                    label: (0, P.__)("Hindi", "zip-ai")
                }, {
                    value: "Hungarian",
                    label: (0, P.__)("Hungarian", "zip-ai")
                }, {
                    value: "Indonesian",
                    label: (0, P.__)("Indonesian", "zip-ai")
                }, {
                    value: "Italian",
                    label: (0, P.__)("Italian", "zip-ai")
                }, {
                    value: "Japanese",
                    label: (0, P.__)("Japanese", "zip-ai")
                }, {
                    value: "Kazakh",
                    label: (0, P.__)("Kazakh", "zip-ai")
                }, {
                    value: "Korean",
                    label: (0, P.__)("Korean", "zip-ai")
                }, {
                    value: "Latvian",
                    label: (0, P.__)("Latvian", "zip-ai")
                }, {
                    value: "Lithuanian",
                    label: (0, P.__)("Lithuanian", "zip-ai")
                }, {
                    value: "Macedonian",
                    label: (0, P.__)("Macedonian", "zip-ai")
                }, {
                    value: "Malay",
                    label: (0, P.__)("Malay", "zip-ai")
                }, {
                    value: "Norwegian",
                    label: (0, P.__)("Norwegian", "zip-ai")
                }, {
                    value: "Polish",
                    label: (0, P.__)("Polish", "zip-ai")
                }, {
                    value: "Portuguese",
                    label: (0, P.__)("Portuguese", "zip-ai")
                }, {
                    value: "Romanian",
                    label: (0, P.__)("Romanian", "zip-ai")
                }, {
                    value: "Russian",
                    label: (0, P.__)("Russian", "zip-ai")
                }, {
                    value: "Serbian",
                    label: (0, P.__)("Serbian", "zip-ai")
                }, {
                    value: "Slovak",
                    label: (0, P.__)("Slovak", "zip-ai")
                }, {
                    value: "Slovenian",
                    label: (0, P.__)("Slovenian", "zip-ai")
                }, {
                    value: "Spanish",
                    label: (0, P.__)("Spanish", "zip-ai")
                }, {
                    value: "Swahili",
                    label: (0, P.__)("Swahili", "zip-ai")
                }, {
                    value: "Swedish",
                    label: (0, P.__)("Swedish", "zip-ai")
                }, {
                    value: "Thai",
                    label: (0, P.__)("Thai", "zip-ai")
                }, {
                    value: "Turkish",
                    label: (0, P.__)("Turkish", "zip-ai")
                }, {
                    value: "Ukrainian",
                    label: (0, P.__)("Ukrainian", "zip-ai")
                }, {
                    value: "Urdu",
                    label: (0, P.__)("Urdu", "zip-ai")
                }, {
                    value: "Vietnamese",
                    label: (0, P.__)("Vietnamese", "zip-ai")
                }],
                J = [{
                    value: "friendly",
                    label: (0, P.__)("Friendly", "zip-ai")
                }, {
                    value: "formal",
                    label: (0, P.__)("Formal", "zip-ai")
                }, {
                    value: "casual",
                    label: (0, P.__)("Casual", "zip-ai")
                }, {
                    value: "professional",
                    label: (0, P.__)("Professional", "zip-ai")
                }, {
                    value: "informative",
                    label: (0, P.__)("Informative", "zip-ai")
                }, {
                    value: "playful",
                    label: (0, P.__)("Playful", "zip-ai")
                }, {
                    value: "serious",
                    label: (0, P.__)("Serious", "zip-ai")
                }, {
                    value: "humorous",
                    label: (0, P.__)("Humorous", "zip-ai")
                }, {
                    value: "polite",
                    label: (0, P.__)("Polite", "zip-ai")
                }, {
                    value: "emotional",
                    label: (0, P.__)("Emotional", "zip-ai")
                }];

            function Q(e) {
                return Q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, Q(e)
            }

            function ee(e) {
                var t = function(e, t) {
                    if ("object" !== Q(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, "string");
                        if ("object" !== Q(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(e)
                }(e);
                return "symbol" === Q(t) ? t : String(t)
            }

            function te(e, t, n) {
                return (t = ee(t)) in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function ne(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function re(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ne(Object(n), !0).forEach((function(t) {
                        te(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ne(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function ie() {
                return ie = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, ie.apply(this, arguments)
            }
            var ae = n(196),
                oe = function() {
                    function e(e) {
                        var t = this;
                        this._insertTag = function(e) {
                            var n;
                            n = 0 === t.tags.length ? t.insertionPoint ? t.insertionPoint.nextSibling : t.prepend ? t.container.firstChild : t.before : t.tags[t.tags.length - 1].nextSibling, t.container.insertBefore(e, n), t.tags.push(e)
                        }, this.isSpeedy = void 0 === e.speedy || e.speedy, this.tags = [], this.ctr = 0, this.nonce = e.nonce, this.key = e.key, this.container = e.container, this.prepend = e.prepend, this.insertionPoint = e.insertionPoint, this.before = null
                    }
                    var t = e.prototype;
                    return t.hydrate = function(e) {
                        e.forEach(this._insertTag)
                    }, t.insert = function(e) {
                        this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(function(e) {
                            var t = document.createElement("style");
                            return t.setAttribute("data-emotion", e.key), void 0 !== e.nonce && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t
                        }(this));
                        var t = this.tags[this.tags.length - 1];
                        if (this.isSpeedy) {
                            var n = function(e) {
                                if (e.sheet) return e.sheet;
                                for (var t = 0; t < document.styleSheets.length; t++)
                                    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
                            }(t);
                            try {
                                n.insertRule(e, n.cssRules.length)
                            } catch (e) {}
                        } else t.appendChild(document.createTextNode(e));
                        this.ctr++
                    }, t.flush = function() {
                        this.tags.forEach((function(e) {
                            return e.parentNode && e.parentNode.removeChild(e)
                        })), this.tags = [], this.ctr = 0
                    }, e
                }(),
                se = Math.abs,
                le = String.fromCharCode,
                ce = Object.assign;

            function ue(e) {
                return e.trim()
            }

            function de(e, t, n) {
                return e.replace(t, n)
            }

            function pe(e, t) {
                return e.indexOf(t)
            }

            function fe(e, t) {
                return 0 | e.charCodeAt(t)
            }

            function he(e, t, n) {
                return e.slice(t, n)
            }

            function me(e) {
                return e.length
            }

            function ge(e) {
                return e.length
            }

            function ve(e, t) {
                return t.push(e), e
            }
            var be = 1,
                ye = 1,
                Ce = 0,
                _e = 0,
                Ee = 0,
                we = "";

            function xe(e, t, n, r, i, a, o) {
                return {
                    value: e,
                    root: t,
                    parent: n,
                    type: r,
                    props: i,
                    children: a,
                    line: be,
                    column: ye,
                    length: o,
                    return: ""
                }
            }

            function ke(e, t) {
                return ce(xe("", null, null, "", null, null, 0), e, {
                    length: -e.length
                }, t)
            }

            function Se() {
                return Ee = _e > 0 ? fe(we, --_e) : 0, ye--, 10 === Ee && (ye = 1, be--), Ee
            }

            function Oe() {
                return Ee = _e < Ce ? fe(we, _e++) : 0, ye++, 10 === Ee && (ye = 1, be++), Ee
            }

            function Me() {
                return fe(we, _e)
            }

            function Te() {
                return _e
            }

            function Le(e, t) {
                return he(we, e, t)
            }

            function Ie(e) {
                switch (e) {
                    case 0:
                    case 9:
                    case 10:
                    case 13:
                    case 32:
                        return 5;
                    case 33:
                    case 43:
                    case 44:
                    case 47:
                    case 62:
                    case 64:
                    case 126:
                    case 59:
                    case 123:
                    case 125:
                        return 4;
                    case 58:
                        return 3;
                    case 34:
                    case 39:
                    case 40:
                    case 91:
                        return 2;
                    case 41:
                    case 93:
                        return 1
                }
                return 0
            }

            function ze(e) {
                return be = ye = 1, Ce = me(we = e), _e = 0, []
            }

            function Pe(e) {
                return we = "", e
            }

            function Ae(e) {
                return ue(Le(_e - 1, Ne(91 === e ? e + 2 : 40 === e ? e + 1 : e)))
            }

            function Ve(e) {
                for (;
                    (Ee = Me()) && Ee < 33;) Oe();
                return Ie(e) > 2 || Ie(Ee) > 3 ? "" : " "
            }

            function Re(e, t) {
                for (; --t && Oe() && !(Ee < 48 || Ee > 102 || Ee > 57 && Ee < 65 || Ee > 70 && Ee < 97););
                return Le(e, Te() + (t < 6 && 32 == Me() && 32 == Oe()))
            }

            function Ne(e) {
                for (; Oe();) switch (Ee) {
                    case e:
                        return _e;
                    case 34:
                    case 39:
                        34 !== e && 39 !== e && Ne(Ee);
                        break;
                    case 40:
                        41 === e && Ne(e);
                        break;
                    case 92:
                        Oe()
                }
                return _e
            }

            function De(e, t) {
                for (; Oe() && e + Ee !== 57 && (e + Ee !== 84 || 47 !== Me()););
                return "/*" + Le(t, _e - 1) + "*" + le(47 === e ? e : Oe())
            }

            function He(e) {
                for (; !Ie(Me());) Oe();
                return Le(e, _e)
            }
            var Fe = "-ms-",
                je = "-moz-",
                Be = "-webkit-",
                Ue = "comm",
                $e = "rule",
                We = "decl",
                Ze = "@keyframes";

            function Ge(e, t) {
                for (var n = "", r = ge(e), i = 0; i < r; i++) n += t(e[i], i, e, t) || "";
                return n
            }

            function qe(e, t, n, r) {
                switch (e.type) {
                    case "@layer":
                        if (e.children.length) break;
                    case "@import":
                    case We:
                        return e.return = e.return || e.value;
                    case Ue:
                        return "";
                    case Ze:
                        return e.return = e.value + "{" + Ge(e.children, r) + "}";
                    case $e:
                        e.value = e.props.join(",")
                }
                return me(n = Ge(e.children, r)) ? e.return = e.value + "{" + n + "}" : ""
            }

            function Ye(e) {
                return Pe(Xe("", null, null, null, [""], e = ze(e), 0, [0], e))
            }

            function Xe(e, t, n, r, i, a, o, s, l) {
                for (var c = 0, u = 0, d = o, p = 0, f = 0, h = 0, m = 1, g = 1, v = 1, b = 0, y = "", C = i, _ = a, E = r, w = y; g;) switch (h = b, b = Oe()) {
                    case 40:
                        if (108 != h && 58 == fe(w, d - 1)) {
                            -1 != pe(w += de(Ae(b), "&", "&\f"), "&\f") && (v = -1);
                            break
                        }
                    case 34:
                    case 39:
                    case 91:
                        w += Ae(b);
                        break;
                    case 9:
                    case 10:
                    case 13:
                    case 32:
                        w += Ve(h);
                        break;
                    case 92:
                        w += Re(Te() - 1, 7);
                        continue;
                    case 47:
                        switch (Me()) {
                            case 42:
                            case 47:
                                ve(Je(De(Oe(), Te()), t, n), l);
                                break;
                            default:
                                w += "/"
                        }
                        break;
                    case 123 * m:
                        s[c++] = me(w) * v;
                    case 125 * m:
                    case 59:
                    case 0:
                        switch (b) {
                            case 0:
                            case 125:
                                g = 0;
                            case 59 + u:
                                -1 == v && (w = de(w, /\f/g, "")), f > 0 && me(w) - d && ve(f > 32 ? Qe(w + ";", r, n, d - 1) : Qe(de(w, " ", "") + ";", r, n, d - 2), l);
                                break;
                            case 59:
                                w += ";";
                            default:
                                if (ve(E = Ke(w, t, n, c, u, i, s, y, C = [], _ = [], d), a), 123 === b)
                                    if (0 === u) Xe(w, t, E, E, C, a, d, s, _);
                                    else switch (99 === p && 110 === fe(w, 3) ? 100 : p) {
                                        case 100:
                                        case 108:
                                        case 109:
                                        case 115:
                                            Xe(e, E, E, r && ve(Ke(e, E, E, 0, 0, i, s, y, i, C = [], d), _), i, _, d, s, r ? C : _);
                                            break;
                                        default:
                                            Xe(w, E, E, E, [""], _, 0, s, _)
                                    }
                        }
                        c = u = f = 0, m = v = 1, y = w = "", d = o;
                        break;
                    case 58:
                        d = 1 + me(w), f = h;
                    default:
                        if (m < 1)
                            if (123 == b) --m;
                            else if (125 == b && 0 == m++ && 125 == Se()) continue;
                        switch (w += le(b), b * m) {
                            case 38:
                                v = u > 0 ? 1 : (w += "\f", -1);
                                break;
                            case 44:
                                s[c++] = (me(w) - 1) * v, v = 1;
                                break;
                            case 64:
                                45 === Me() && (w += Ae(Oe())), p = Me(), u = d = me(y = w += He(Te())), b++;
                                break;
                            case 45:
                                45 === h && 2 == me(w) && (m = 0)
                        }
                }
                return a
            }

            function Ke(e, t, n, r, i, a, o, s, l, c, u) {
                for (var d = i - 1, p = 0 === i ? a : [""], f = ge(p), h = 0, m = 0, g = 0; h < r; ++h)
                    for (var v = 0, b = he(e, d + 1, d = se(m = o[h])), y = e; v < f; ++v)(y = ue(m > 0 ? p[v] + " " + b : de(b, /&\f/g, p[v]))) && (l[g++] = y);
                return xe(e, t, n, 0 === i ? $e : s, l, c, u)
            }

            function Je(e, t, n) {
                return xe(e, t, n, Ue, le(Ee), he(e, 2, -2), 0)
            }

            function Qe(e, t, n, r) {
                return xe(e, t, n, We, he(e, 0, r), he(e, r + 1, -1), r)
            }
            var et = function(e, t, n) {
                    for (var r = 0, i = 0; r = i, i = Me(), 38 === r && 12 === i && (t[n] = 1), !Ie(i);) Oe();
                    return Le(e, _e)
                },
                tt = new WeakMap,
                nt = function(e) {
                    if ("rule" === e.type && e.parent && !(e.length < 1)) {
                        for (var t = e.value, n = e.parent, r = e.column === n.column && e.line === n.line;
                            "rule" !== n.type;)
                            if (!(n = n.parent)) return;
                        if ((1 !== e.props.length || 58 === t.charCodeAt(0) || tt.get(n)) && !r) {
                            tt.set(e, !0);
                            for (var i = [], a = function(e, t) {
                                    return Pe(function(e, t) {
                                        var n = -1,
                                            r = 44;
                                        do {
                                            switch (Ie(r)) {
                                                case 0:
                                                    38 === r && 12 === Me() && (t[n] = 1), e[n] += et(_e - 1, t, n);
                                                    break;
                                                case 2:
                                                    e[n] += Ae(r);
                                                    break;
                                                case 4:
                                                    if (44 === r) {
                                                        e[++n] = 58 === Me() ? "&\f" : "", t[n] = e[n].length;
                                                        break
                                                    }
                                                default:
                                                    e[n] += le(r)
                                            }
                                        } while (r = Oe());
                                        return e
                                    }(ze(e), t))
                                }(t, i), o = n.props, s = 0, l = 0; s < a.length; s++)
                                for (var c = 0; c < o.length; c++, l++) e.props[l] = i[s] ? a[s].replace(/&\f/g, o[c]) : o[c] + " " + a[s]
                        }
                    }
                },
                rt = function(e) {
                    if ("decl" === e.type) {
                        var t = e.value;
                        108 === t.charCodeAt(0) && 98 === t.charCodeAt(2) && (e.return = "", e.value = "")
                    }
                };

            function it(e, t) {
                switch (function(e, t) {
                    return 45 ^ fe(e, 0) ? (((t << 2 ^ fe(e, 0)) << 2 ^ fe(e, 1)) << 2 ^ fe(e, 2)) << 2 ^ fe(e, 3) : 0
                }(e, t)) {
                    case 5103:
                        return Be + "print-" + e + e;
                    case 5737:
                    case 4201:
                    case 3177:
                    case 3433:
                    case 1641:
                    case 4457:
                    case 2921:
                    case 5572:
                    case 6356:
                    case 5844:
                    case 3191:
                    case 6645:
                    case 3005:
                    case 6391:
                    case 5879:
                    case 5623:
                    case 6135:
                    case 4599:
                    case 4855:
                    case 4215:
                    case 6389:
                    case 5109:
                    case 5365:
                    case 5621:
                    case 3829:
                        return Be + e + e;
                    case 5349:
                    case 4246:
                    case 4810:
                    case 6968:
                    case 2756:
                        return Be + e + je + e + Fe + e + e;
                    case 6828:
                    case 4268:
                        return Be + e + Fe + e + e;
                    case 6165:
                        return Be + e + Fe + "flex-" + e + e;
                    case 5187:
                        return Be + e + de(e, /(\w+).+(:[^]+)/, Be + "box-$1$2" + Fe + "flex-$1$2") + e;
                    case 5443:
                        return Be + e + Fe + "flex-item-" + de(e, /flex-|-self/, "") + e;
                    case 4675:
                        return Be + e + Fe + "flex-line-pack" + de(e, /align-content|flex-|-self/, "") + e;
                    case 5548:
                        return Be + e + Fe + de(e, "shrink", "negative") + e;
                    case 5292:
                        return Be + e + Fe + de(e, "basis", "preferred-size") + e;
                    case 6060:
                        return Be + "box-" + de(e, "-grow", "") + Be + e + Fe + de(e, "grow", "positive") + e;
                    case 4554:
                        return Be + de(e, /([^-])(transform)/g, "$1" + Be + "$2") + e;
                    case 6187:
                        return de(de(de(e, /(zoom-|grab)/, Be + "$1"), /(image-set)/, Be + "$1"), e, "") + e;
                    case 5495:
                    case 3959:
                        return de(e, /(image-set\([^]*)/, Be + "$1$`$1");
                    case 4968:
                        return de(de(e, /(.+:)(flex-)?(.*)/, Be + "box-pack:$3" + Fe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Be + e + e;
                    case 4095:
                    case 3583:
                    case 4068:
                    case 2532:
                        return de(e, /(.+)-inline(.+)/, Be + "$1$2") + e;
                    case 8116:
                    case 7059:
                    case 5753:
                    case 5535:
                    case 5445:
                    case 5701:
                    case 4933:
                    case 4677:
                    case 5533:
                    case 5789:
                    case 5021:
                    case 4765:
                        if (me(e) - 1 - t > 6) switch (fe(e, t + 1)) {
                            case 109:
                                if (45 !== fe(e, t + 4)) break;
                            case 102:
                                return de(e, /(.+:)(.+)-([^]+)/, "$1" + Be + "$2-$3$1" + je + (108 == fe(e, t + 3) ? "$3" : "$2-$3")) + e;
                            case 115:
                                return ~pe(e, "stretch") ? it(de(e, "stretch", "fill-available"), t) + e : e
                        }
                        break;
                    case 4949:
                        if (115 !== fe(e, t + 1)) break;
                    case 6444:
                        switch (fe(e, me(e) - 3 - (~pe(e, "!important") && 10))) {
                            case 107:
                                return de(e, ":", ":" + Be) + e;
                            case 101:
                                return de(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Be + (45 === fe(e, 14) ? "inline-" : "") + "box$3$1" + Be + "$2$3$1" + Fe + "$2box$3") + e
                        }
                        break;
                    case 5936:
                        switch (fe(e, t + 11)) {
                            case 114:
                                return Be + e + Fe + de(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
                            case 108:
                                return Be + e + Fe + de(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
                            case 45:
                                return Be + e + Fe + de(e, /[svh]\w+-[tblr]{2}/, "lr") + e
                        }
                        return Be + e + Fe + e + e
                }
                return e
            }
            var at = [function(e, t, n, r) {
                    if (e.length > -1 && !e.return) switch (e.type) {
                        case We:
                            e.return = it(e.value, e.length);
                            break;
                        case Ze:
                            return Ge([ke(e, {
                                value: de(e.value, "@", "@" + Be)
                            })], r);
                        case $e:
                            if (e.length) return function(e, t) {
                                return e.map(t).join("")
                            }(e.props, (function(t) {
                                switch (function(e, t) {
                                    return (e = t.exec(e)) ? e[0] : e
                                }(t, /(::plac\w+|:read-\w+)/)) {
                                    case ":read-only":
                                    case ":read-write":
                                        return Ge([ke(e, {
                                            props: [de(t, /:(read-\w+)/, ":-moz-$1")]
                                        })], r);
                                    case "::placeholder":
                                        return Ge([ke(e, {
                                            props: [de(t, /:(plac\w+)/, ":" + Be + "input-$1")]
                                        }), ke(e, {
                                            props: [de(t, /:(plac\w+)/, ":-moz-$1")]
                                        }), ke(e, {
                                            props: [de(t, /:(plac\w+)/, Fe + "input-$1")]
                                        })], r)
                                }
                                return ""
                            }))
                    }
                }],
                ot = function(e) {
                    var t = e.key;
                    if ("css" === t) {
                        var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
                        Array.prototype.forEach.call(n, (function(e) {
                            -1 !== e.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e), e.setAttribute("data-s", ""))
                        }))
                    }
                    var r, i, a = e.stylisPlugins || at,
                        o = {},
                        s = [];
                    r = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + t + ' "]'), (function(e) {
                        for (var t = e.getAttribute("data-emotion").split(" "), n = 1; n < t.length; n++) o[t[n]] = !0;
                        s.push(e)
                    }));
                    var l, c, u, d, p = [qe, (d = function(e) {
                            l.insert(e)
                        }, function(e) {
                            e.root || (e = e.return) && d(e)
                        })],
                        f = (c = [nt, rt].concat(a, p), u = ge(c), function(e, t, n, r) {
                            for (var i = "", a = 0; a < u; a++) i += c[a](e, t, n, r) || "";
                            return i
                        });
                    i = function(e, t, n, r) {
                        l = n, Ge(Ye(e ? e + "{" + t.styles + "}" : t.styles), f), r && (h.inserted[t.name] = !0)
                    };
                    var h = {
                        key: t,
                        sheet: new oe({
                            key: t,
                            container: r,
                            nonce: e.nonce,
                            speedy: e.speedy,
                            prepend: e.prepend,
                            insertionPoint: e.insertionPoint
                        }),
                        nonce: e.nonce,
                        inserted: o,
                        registered: {},
                        insert: i
                    };
                    return h.sheet.hydrate(s), h
                },
                st = function(e, t, n) {
                    var r = e.key + "-" + t.name;
                    !1 === n && void 0 === e.registered[r] && (e.registered[r] = t.styles)
                },
                lt = {
                    animationIterationCount: 1,
                    aspectRatio: 1,
                    borderImageOutset: 1,
                    borderImageSlice: 1,
                    borderImageWidth: 1,
                    boxFlex: 1,
                    boxFlexGroup: 1,
                    boxOrdinalGroup: 1,
                    columnCount: 1,
                    columns: 1,
                    flex: 1,
                    flexGrow: 1,
                    flexPositive: 1,
                    flexShrink: 1,
                    flexNegative: 1,
                    flexOrder: 1,
                    gridRow: 1,
                    gridRowEnd: 1,
                    gridRowSpan: 1,
                    gridRowStart: 1,
                    gridColumn: 1,
                    gridColumnEnd: 1,
                    gridColumnSpan: 1,
                    gridColumnStart: 1,
                    msGridRow: 1,
                    msGridRowSpan: 1,
                    msGridColumn: 1,
                    msGridColumnSpan: 1,
                    fontWeight: 1,
                    lineHeight: 1,
                    opacity: 1,
                    order: 1,
                    orphans: 1,
                    tabSize: 1,
                    widows: 1,
                    zIndex: 1,
                    zoom: 1,
                    WebkitLineClamp: 1,
                    fillOpacity: 1,
                    floodOpacity: 1,
                    stopOpacity: 1,
                    strokeDasharray: 1,
                    strokeDashoffset: 1,
                    strokeMiterlimit: 1,
                    strokeOpacity: 1,
                    strokeWidth: 1
                };

            function ct(e) {
                var t = Object.create(null);
                return function(n) {
                    return void 0 === t[n] && (t[n] = e(n)), t[n]
                }
            }
            var ut = /[A-Z]|^ms/g,
                dt = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
                pt = function(e) {
                    return 45 === e.charCodeAt(1)
                },
                ft = function(e) {
                    return null != e && "boolean" != typeof e
                },
                ht = ct((function(e) {
                    return pt(e) ? e : e.replace(ut, "-$&").toLowerCase()
                })),
                mt = function(e, t) {
                    switch (e) {
                        case "animation":
                        case "animationName":
                            if ("string" == typeof t) return t.replace(dt, (function(e, t, n) {
                                return vt = {
                                    name: t,
                                    styles: n,
                                    next: vt
                                }, t
                            }))
                    }
                    return 1 === lt[e] || pt(e) || "number" != typeof t || 0 === t ? t : t + "px"
                };

            function gt(e, t, n) {
                if (null == n) return "";
                if (void 0 !== n.__emotion_styles) return n;
                switch (typeof n) {
                    case "boolean":
                        return "";
                    case "object":
                        if (1 === n.anim) return vt = {
                            name: n.name,
                            styles: n.styles,
                            next: vt
                        }, n.name;
                        if (void 0 !== n.styles) {
                            var r = n.next;
                            if (void 0 !== r)
                                for (; void 0 !== r;) vt = {
                                    name: r.name,
                                    styles: r.styles,
                                    next: vt
                                }, r = r.next;
                            return n.styles + ";"
                        }
                        return function(e, t, n) {
                            var r = "";
                            if (Array.isArray(n))
                                for (var i = 0; i < n.length; i++) r += gt(e, t, n[i]) + ";";
                            else
                                for (var a in n) {
                                    var o = n[a];
                                    if ("object" != typeof o) null != t && void 0 !== t[o] ? r += a + "{" + t[o] + "}" : ft(o) && (r += ht(a) + ":" + mt(a, o) + ";");
                                    else if (!Array.isArray(o) || "string" != typeof o[0] || null != t && void 0 !== t[o[0]]) {
                                        var s = gt(e, t, o);
                                        switch (a) {
                                            case "animation":
                                            case "animationName":
                                                r += ht(a) + ":" + s + ";";
                                                break;
                                            default:
                                                r += a + "{" + s + "}"
                                        }
                                    } else
                                        for (var l = 0; l < o.length; l++) ft(o[l]) && (r += ht(a) + ":" + mt(a, o[l]) + ";")
                                }
                            return r
                        }(e, t, n);
                    case "function":
                        if (void 0 !== e) {
                            var i = vt,
                                a = n(e);
                            return vt = i, gt(e, t, a)
                        }
                }
                if (null == t) return n;
                var o = t[n];
                return void 0 !== o ? o : n
            }
            var vt, bt = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
                yt = function(e, t, n) {
                    if (1 === e.length && "object" == typeof e[0] && null !== e[0] && void 0 !== e[0].styles) return e[0];
                    var r = !0,
                        i = "";
                    vt = void 0;
                    var a = e[0];
                    null == a || void 0 === a.raw ? (r = !1, i += gt(n, t, a)) : i += a[0];
                    for (var o = 1; o < e.length; o++) i += gt(n, t, e[o]), r && (i += a[o]);
                    bt.lastIndex = 0;
                    for (var s, l = ""; null !== (s = bt.exec(i));) l += "-" + s[1];
                    var c = function(e) {
                        for (var t, n = 0, r = 0, i = e.length; i >= 4; ++r, i -= 4) t = 1540483477 * (65535 & (t = 255 & e.charCodeAt(r) | (255 & e.charCodeAt(++r)) << 8 | (255 & e.charCodeAt(++r)) << 16 | (255 & e.charCodeAt(++r)) << 24)) + (59797 * (t >>> 16) << 16), n = 1540483477 * (65535 & (t ^= t >>> 24)) + (59797 * (t >>> 16) << 16) ^ 1540483477 * (65535 & n) + (59797 * (n >>> 16) << 16);
                        switch (i) {
                            case 3:
                                n ^= (255 & e.charCodeAt(r + 2)) << 16;
                            case 2:
                                n ^= (255 & e.charCodeAt(r + 1)) << 8;
                            case 1:
                                n = 1540483477 * (65535 & (n ^= 255 & e.charCodeAt(r))) + (59797 * (n >>> 16) << 16)
                        }
                        return (((n = 1540483477 * (65535 & (n ^= n >>> 13)) + (59797 * (n >>> 16) << 16)) ^ n >>> 15) >>> 0).toString(36)
                    }(i) + l;
                    return {
                        name: c,
                        styles: i,
                        next: vt
                    }
                },
                Ct = !!ae.useInsertionEffect && ae.useInsertionEffect,
                _t = Ct || function(e) {
                    return e()
                },
                Et = (Ct || ae.useLayoutEffect, {}.hasOwnProperty),
                wt = ae.createContext("undefined" != typeof HTMLElement ? ot({
                    key: "css"
                }) : null);
            wt.Provider;
            var xt = function(e) {
                    return (0, ae.forwardRef)((function(t, n) {
                        var r = (0, ae.useContext)(wt);
                        return e(t, r, n)
                    }))
                },
                kt = ae.createContext({}),
                St = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
                Ot = function(e) {
                    var t = e.cache,
                        n = e.serialized,
                        r = e.isStringTag;
                    return st(t, n, r), _t((function() {
                        return function(e, t, n) {
                            st(e, t, n);
                            var r = e.key + "-" + t.name;
                            if (void 0 === e.inserted[t.name]) {
                                var i = t;
                                do {
                                    e.insert(t === i ? "." + r : "", i, e.sheet, !0), i = i.next
                                } while (void 0 !== i)
                            }
                        }(t, n, r)
                    })), null
                },
                Mt = xt((function(e, t, n) {
                    var r = e.css;
                    "string" == typeof r && void 0 !== t.registered[r] && (r = t.registered[r]);
                    var i = e[St],
                        a = [r],
                        o = "";
                    "string" == typeof e.className ? o = function(e, t, n) {
                        var r = "";
                        return n.split(" ").forEach((function(n) {
                            void 0 !== e[n] ? t.push(e[n] + ";") : r += n + " "
                        })), r
                    }(t.registered, a, e.className) : null != e.className && (o = e.className + " ");
                    var s = yt(a, void 0, ae.useContext(kt));
                    o += t.key + "-" + s.name;
                    var l = {};
                    for (var c in e) Et.call(e, c) && "css" !== c && c !== St && (l[c] = e[c]);
                    return l.ref = n, l.className = o, ae.createElement(ae.Fragment, null, ae.createElement(Ot, {
                        cache: t,
                        serialized: s,
                        isStringTag: "string" == typeof i
                    }), ae.createElement(i, l))
                })),
                Tt = Mt,
                Lt = (n(679), function(e, t) {
                    var n = arguments;
                    if (null == t || !Et.call(t, "css")) return ae.createElement.apply(void 0, n);
                    var r = n.length,
                        i = new Array(r);
                    i[0] = Tt, i[1] = function(e, t) {
                        var n = {};
                        for (var r in t) Et.call(t, r) && (n[r] = t[r]);
                        return n[St] = e, n
                    }(e, t);
                    for (var a = 2; a < r; a++) i[a] = n[a];
                    return ae.createElement.apply(null, i)
                });

            function It() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return yt(t)
            }

            function zt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Pt(e, t) {
                if (e) {
                    if ("string" == typeof e) return zt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? zt(e, t) : void 0
                }
            }

            function At(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, a, o, s = [],
                            l = !0,
                            c = !1;
                        try {
                            if (a = (n = n.call(e)).next, 0 === t) {
                                if (Object(n) !== n) return;
                                l = !1
                            } else
                                for (; !(l = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); l = !0);
                        } catch (e) {
                            c = !0, i = e
                        } finally {
                            try {
                                if (!l && null != n.return && (o = n.return(), Object(o) !== o)) return
                            } finally {
                                if (c) throw i
                            }
                        }
                        return s
                    }
                }(e, t) || Pt(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Vt(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                }
                return i
            }
            var Rt = window.ReactDOM;
            const Nt = Math.min,
                Dt = Math.max,
                Ht = Math.round,
                Ft = Math.floor,
                jt = e => ({
                    x: e,
                    y: e
                });

            function Bt(e) {
                return Wt(e) ? (e.nodeName || "").toLowerCase() : "#document"
            }

            function Ut(e) {
                var t;
                return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
            }

            function $t(e) {
                var t;
                return null == (t = (Wt(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
            }

            function Wt(e) {
                return e instanceof Node || e instanceof Ut(e).Node
            }

            function Zt(e) {
                return e instanceof Element || e instanceof Ut(e).Element
            }

            function Gt(e) {
                return e instanceof HTMLElement || e instanceof Ut(e).HTMLElement
            }

            function qt(e) {
                return "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof Ut(e).ShadowRoot)
            }

            function Yt(e) {
                const {
                    overflow: t,
                    overflowX: n,
                    overflowY: r,
                    display: i
                } = Xt(e);
                return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i)
            }

            function Xt(e) {
                return Ut(e).getComputedStyle(e)
            }

            function Kt(e) {
                const t = function(e) {
                    if ("html" === Bt(e)) return e;
                    const t = e.assignedSlot || e.parentNode || qt(e) && e.host || $t(e);
                    return qt(t) ? t.host : t
                }(e);
                return function(e) {
                    return ["html", "body", "#document"].includes(Bt(e))
                }(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Gt(t) && Yt(t) ? t : Kt(t)
            }

            function Jt(e, t, n) {
                var r;
                void 0 === t && (t = []), void 0 === n && (n = !0);
                const i = Kt(e),
                    a = i === (null == (r = e.ownerDocument) ? void 0 : r.body),
                    o = Ut(i);
                return a ? t.concat(o, o.visualViewport || [], Yt(i) ? i : [], o.frameElement && n ? Jt(o.frameElement) : []) : t.concat(i, Jt(i, [], n))
            }

            function Qt(e) {
                return Zt(e) ? e : e.contextElement
            }

            function en(e) {
                const t = Qt(e);
                if (!Gt(t)) return jt(1);
                const n = t.getBoundingClientRect(),
                    {
                        width: r,
                        height: i,
                        $: a
                    } = function(e) {
                        const t = Xt(e);
                        let n = parseFloat(t.width) || 0,
                            r = parseFloat(t.height) || 0;
                        const i = Gt(e),
                            a = i ? e.offsetWidth : n,
                            o = i ? e.offsetHeight : r,
                            s = Ht(n) !== a || Ht(r) !== o;
                        return s && (n = a, r = o), {
                            width: n,
                            height: r,
                            $: s
                        }
                    }(t);
                let o = (a ? Ht(n.width) : n.width) / r,
                    s = (a ? Ht(n.height) : n.height) / i;
                return o && Number.isFinite(o) || (o = 1), s && Number.isFinite(s) || (s = 1), {
                    x: o,
                    y: s
                }
            }
            const tn = jt(0);

            function nn(e) {
                const t = Ut(e);
                return "undefined" != typeof CSS && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none") && t.visualViewport ? {
                    x: t.visualViewport.offsetLeft,
                    y: t.visualViewport.offsetTop
                } : tn
            }

            function rn(e, t, n, r) {
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                const i = e.getBoundingClientRect(),
                    a = Qt(e);
                let o = jt(1);
                t && (r ? Zt(r) && (o = en(r)) : o = en(e));
                const s = function(e, t, n) {
                    return void 0 === t && (t = !1), !(!n || t && n !== Ut(e)) && t
                }(a, n, r) ? nn(a) : jt(0);
                let l = (i.left + s.x) / o.x,
                    c = (i.top + s.y) / o.y,
                    u = i.width / o.x,
                    d = i.height / o.y;
                if (a) {
                    const e = Ut(a),
                        t = r && Zt(r) ? Ut(r) : r;
                    let n = e.frameElement;
                    for (; n && r && t !== e;) {
                        const e = en(n),
                            t = n.getBoundingClientRect(),
                            r = Xt(n),
                            i = t.left + (n.clientLeft + parseFloat(r.paddingLeft)) * e.x,
                            a = t.top + (n.clientTop + parseFloat(r.paddingTop)) * e.y;
                        l *= e.x, c *= e.y, u *= e.x, d *= e.y, l += i, c += a, n = Ut(n).frameElement
                    }
                }
                return p = {
                    width: u,
                    height: d,
                    x: l,
                    y: c
                }, { ...p,
                    top: p.y,
                    left: p.x,
                    right: p.x + p.width,
                    bottom: p.y + p.height
                };
                var p
            }
            var an = ae.useLayoutEffect,
                on = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"],
                sn = function() {};

            function ln(e, t) {
                return t ? "-" === t[0] ? e + t : e + "__" + t : e
            }

            function cn(e, t) {
                for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
                var a = [].concat(r);
                if (t && e)
                    for (var o in t) t.hasOwnProperty(o) && t[o] && a.push("".concat(ln(e, o)));
                return a.filter((function(e) {
                    return e
                })).map((function(e) {
                    return String(e).trim()
                })).join(" ")
            }
            var un = function(e) {
                    return t = e, Array.isArray(t) ? e.filter(Boolean) : "object" === Q(e) && null !== e ? [e] : [];
                    var t
                },
                dn = function(e) {
                    return e.className, e.clearValue, e.cx, e.getStyles, e.getClassNames, e.getValue, e.hasValue, e.isMulti, e.isRtl, e.options, e.selectOption, e.selectProps, e.setValue, e.theme, re({}, Vt(e, on))
                },
                pn = function(e, t, n) {
                    var r = e.cx,
                        i = e.getStyles,
                        a = e.getClassNames,
                        o = e.className;
                    return {
                        css: i(t, e),
                        className: r(null != n ? n : {}, a(t, e), o)
                    }
                };

            function fn(e) {
                return [document.documentElement, document.body, window].indexOf(e) > -1
            }

            function hn(e) {
                return fn(e) ? window.pageYOffset : e.scrollTop
            }

            function mn(e, t) {
                fn(e) ? window.scrollTo(0, t) : e.scrollTop = t
            }

            function gn(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 200,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : sn,
                    i = hn(e),
                    a = t - i,
                    o = 0;
                ! function t() {
                    var s, l = a * ((s = (s = o += 10) / n - 1) * s * s + 1) + i;
                    mn(e, l), o < n ? window.requestAnimationFrame(t) : r(e)
                }()
            }

            function vn(e, t) {
                var n = e.getBoundingClientRect(),
                    r = t.getBoundingClientRect(),
                    i = t.offsetHeight / 3;
                r.bottom + i > n.bottom ? mn(e, Math.min(t.offsetTop + t.clientHeight - e.offsetHeight + i, e.scrollHeight)) : r.top - i < n.top && mn(e, Math.max(t.offsetTop - i, 0))
            }

            function bn() {
                try {
                    return document.createEvent("TouchEvent"), !0
                } catch (e) {
                    return !1
                }
            }
            var yn = !1,
                Cn = {
                    get passive() {
                        return yn = !0
                    }
                },
                En = "undefined" != typeof window ? window : {};
            En.addEventListener && En.removeEventListener && (En.addEventListener("p", sn, Cn), En.removeEventListener("p", sn, !1));
            var wn = yn;

            function xn(e) {
                return null != e
            }

            function kn(e, t, n) {
                return e ? t : n
            }
            var Sn = ["children", "innerProps"],
                On = ["children", "innerProps"];
            var Mn, Tn, Ln, In = function(e) {
                    return "auto" === e ? "bottom" : e
                },
                zn = (0, ae.createContext)(null),
                Pn = function(e) {
                    var t = e.children,
                        n = e.minMenuHeight,
                        r = e.maxMenuHeight,
                        i = e.menuPlacement,
                        a = e.menuPosition,
                        o = e.menuShouldScrollIntoView,
                        s = e.theme,
                        l = ((0, ae.useContext)(zn) || {}).setPortalPlacement,
                        c = (0, ae.useRef)(null),
                        u = At((0, ae.useState)(r), 2),
                        d = u[0],
                        p = u[1],
                        f = At((0, ae.useState)(null), 2),
                        h = f[0],
                        m = f[1],
                        g = s.spacing.controlHeight;
                    return an((function() {
                        var e = c.current;
                        if (e) {
                            var t = "fixed" === a,
                                s = function(e) {
                                    var t = e.maxHeight,
                                        n = e.menuEl,
                                        r = e.minHeight,
                                        i = e.placement,
                                        a = e.shouldScroll,
                                        o = e.isFixedPosition,
                                        s = e.controlHeight,
                                        l = function(e) {
                                            var t = getComputedStyle(e),
                                                n = "absolute" === t.position,
                                                r = /(auto|scroll)/;
                                            if ("fixed" === t.position) return document.documentElement;
                                            for (var i = e; i = i.parentElement;)
                                                if (t = getComputedStyle(i), (!n || "static" !== t.position) && r.test(t.overflow + t.overflowY + t.overflowX)) return i;
                                            return document.documentElement
                                        }(n),
                                        c = {
                                            placement: "bottom",
                                            maxHeight: t
                                        };
                                    if (!n || !n.offsetParent) return c;
                                    var u, d = l.getBoundingClientRect().height,
                                        p = n.getBoundingClientRect(),
                                        f = p.bottom,
                                        h = p.height,
                                        m = p.top,
                                        g = n.offsetParent.getBoundingClientRect().top,
                                        v = o || fn(u = l) ? window.innerHeight : u.clientHeight,
                                        b = hn(l),
                                        y = parseInt(getComputedStyle(n).marginBottom, 10),
                                        C = parseInt(getComputedStyle(n).marginTop, 10),
                                        _ = g - C,
                                        E = v - m,
                                        w = _ + b,
                                        x = d - b - m,
                                        k = f - v + b + y,
                                        S = b + m - C,
                                        O = 160;
                                    switch (i) {
                                        case "auto":
                                        case "bottom":
                                            if (E >= h) return {
                                                placement: "bottom",
                                                maxHeight: t
                                            };
                                            if (x >= h && !o) return a && gn(l, k, O), {
                                                placement: "bottom",
                                                maxHeight: t
                                            };
                                            if (!o && x >= r || o && E >= r) return a && gn(l, k, O), {
                                                placement: "bottom",
                                                maxHeight: o ? E - y : x - y
                                            };
                                            if ("auto" === i || o) {
                                                var M = t,
                                                    T = o ? _ : w;
                                                return T >= r && (M = Math.min(T - y - s, t)), {
                                                    placement: "top",
                                                    maxHeight: M
                                                }
                                            }
                                            if ("bottom" === i) return a && mn(l, k), {
                                                placement: "bottom",
                                                maxHeight: t
                                            };
                                            break;
                                        case "top":
                                            if (_ >= h) return {
                                                placement: "top",
                                                maxHeight: t
                                            };
                                            if (w >= h && !o) return a && gn(l, S, O), {
                                                placement: "top",
                                                maxHeight: t
                                            };
                                            if (!o && w >= r || o && _ >= r) {
                                                var L = t;
                                                return (!o && w >= r || o && _ >= r) && (L = o ? _ - C : w - C), a && gn(l, S, O), {
                                                    placement: "top",
                                                    maxHeight: L
                                                }
                                            }
                                            return {
                                                placement: "bottom",
                                                maxHeight: t
                                            };
                                        default:
                                            throw new Error('Invalid placement provided "'.concat(i, '".'))
                                    }
                                    return c
                                }({
                                    maxHeight: r,
                                    menuEl: e,
                                    minHeight: n,
                                    placement: i,
                                    shouldScroll: o && !t,
                                    isFixedPosition: t,
                                    controlHeight: g
                                });
                            p(s.maxHeight), m(s.placement), null == l || l(s.placement)
                        }
                    }), [r, i, a, o, n, l, g]), t({
                        ref: c,
                        placerProps: re(re({}, e), {}, {
                            placement: h || In(i),
                            maxHeight: d
                        })
                    })
                },
                An = function(e, t) {
                    var n = e.theme,
                        r = n.spacing.baseUnit,
                        i = n.colors;
                    return re({
                        textAlign: "center"
                    }, t ? {} : {
                        color: i.neutral40,
                        padding: "".concat(2 * r, "px ").concat(3 * r, "px")
                    })
                },
                Vn = An,
                Rn = An,
                Nn = ["size"],
                Dn = ["innerProps", "isRtl", "size"],
                Hn = {
                    name: "8mmkcg",
                    styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
                },
                Fn = function(e) {
                    var t = e.size,
                        n = Vt(e, Nn);
                    return Lt("svg", ie({
                        height: t,
                        width: t,
                        viewBox: "0 0 20 20",
                        "aria-hidden": "true",
                        focusable: "false",
                        css: Hn
                    }, n))
                },
                jn = function(e) {
                    return Lt(Fn, ie({
                        size: 20
                    }, e), Lt("path", {
                        d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
                    }))
                },
                Bn = function(e) {
                    return Lt(Fn, ie({
                        size: 20
                    }, e), Lt("path", {
                        d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
                    }))
                },
                Un = function(e, t) {
                    var n = e.isFocused,
                        r = e.theme,
                        i = r.spacing.baseUnit,
                        a = r.colors;
                    return re({
                        label: "indicatorContainer",
                        display: "flex",
                        transition: "color 150ms"
                    }, t ? {} : {
                        color: n ? a.neutral60 : a.neutral20,
                        padding: 2 * i,
                        ":hover": {
                            color: n ? a.neutral80 : a.neutral40
                        }
                    })
                },
                $n = Un,
                Wn = Un,
                Zn = function() {
                    var e = It.apply(void 0, arguments),
                        t = "animation-" + e.name;
                    return {
                        name: t,
                        styles: "@keyframes " + t + "{" + e.styles + "}",
                        anim: 1,
                        toString: function() {
                            return "_EMO_" + this.name + "_" + this.styles + "_EMO_"
                        }
                    }
                }(Mn || (Tn = ["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"], Ln || (Ln = Tn.slice(0)), Mn = Object.freeze(Object.defineProperties(Tn, {
                    raw: {
                        value: Object.freeze(Ln)
                    }
                })))),
                Gn = function(e) {
                    var t = e.delay,
                        n = e.offset;
                    return Lt("span", {
                        css: It({
                            animation: "".concat(Zn, " 1s ease-in-out ").concat(t, "ms infinite;"),
                            backgroundColor: "currentColor",
                            borderRadius: "1em",
                            display: "inline-block",
                            marginLeft: n ? "1em" : void 0,
                            height: "1em",
                            verticalAlign: "top",
                            width: "1em"
                        }, "", "")
                    })
                },
                qn = ["data"],
                Yn = ["innerRef", "isDisabled", "isHidden", "inputClassName"],
                Xn = {
                    gridArea: "1 / 2",
                    font: "inherit",
                    minWidth: "2px",
                    border: 0,
                    margin: 0,
                    outline: 0,
                    padding: 0
                },
                Kn = {
                    flex: "1 1 auto",
                    display: "inline-grid",
                    gridArea: "1 / 1 / 2 / 3",
                    gridTemplateColumns: "0 min-content",
                    "&:after": re({
                        content: 'attr(data-value) " "',
                        visibility: "hidden",
                        whiteSpace: "pre"
                    }, Xn)
                },
                Jn = function(e) {
                    return re({
                        label: "input",
                        color: "inherit",
                        background: 0,
                        opacity: e ? 0 : 1,
                        width: "100%"
                    }, Xn)
                },
                Qn = function(e) {
                    var t = e.children,
                        n = e.innerProps;
                    return Lt("div", n, t)
                },
                er = {
                    ClearIndicator: function(e) {
                        var t = e.children,
                            n = e.innerProps;
                        return Lt("div", ie({}, pn(e, "clearIndicator", {
                            indicator: !0,
                            "clear-indicator": !0
                        }), n), t || Lt(jn, null))
                    },
                    Control: function(e) {
                        var t = e.children,
                            n = e.isDisabled,
                            r = e.isFocused,
                            i = e.innerRef,
                            a = e.innerProps,
                            o = e.menuIsOpen;
                        return Lt("div", ie({
                            ref: i
                        }, pn(e, "control", {
                            control: !0,
                            "control--is-disabled": n,
                            "control--is-focused": r,
                            "control--menu-is-open": o
                        }), a, {
                            "aria-disabled": n || void 0
                        }), t)
                    },
                    DropdownIndicator: function(e) {
                        var t = e.children,
                            n = e.innerProps;
                        return Lt("div", ie({}, pn(e, "dropdownIndicator", {
                            indicator: !0,
                            "dropdown-indicator": !0
                        }), n), t || Lt(Bn, null))
                    },
                    DownChevron: Bn,
                    CrossIcon: jn,
                    Group: function(e) {
                        var t = e.children,
                            n = e.cx,
                            r = e.getStyles,
                            i = e.getClassNames,
                            a = e.Heading,
                            o = e.headingProps,
                            s = e.innerProps,
                            l = e.label,
                            c = e.theme,
                            u = e.selectProps;
                        return Lt("div", ie({}, pn(e, "group", {
                            group: !0
                        }), s), Lt(a, ie({}, o, {
                            selectProps: u,
                            theme: c,
                            getStyles: r,
                            getClassNames: i,
                            cx: n
                        }), l), Lt("div", null, t))
                    },
                    GroupHeading: function(e) {
                        var t = dn(e);
                        t.data;
                        var n = Vt(t, qn);
                        return Lt("div", ie({}, pn(e, "groupHeading", {
                            "group-heading": !0
                        }), n))
                    },
                    IndicatorsContainer: function(e) {
                        var t = e.children,
                            n = e.innerProps;
                        return Lt("div", ie({}, pn(e, "indicatorsContainer", {
                            indicators: !0
                        }), n), t)
                    },
                    IndicatorSeparator: function(e) {
                        var t = e.innerProps;
                        return Lt("span", ie({}, t, pn(e, "indicatorSeparator", {
                            "indicator-separator": !0
                        })))
                    },
                    Input: function(e) {
                        var t = e.cx,
                            n = e.value,
                            r = dn(e),
                            i = r.innerRef,
                            a = r.isDisabled,
                            o = r.isHidden,
                            s = r.inputClassName,
                            l = Vt(r, Yn);
                        return Lt("div", ie({}, pn(e, "input", {
                            "input-container": !0
                        }), {
                            "data-value": n || ""
                        }), Lt("input", ie({
                            className: t({
                                input: !0
                            }, s),
                            ref: i,
                            style: Jn(o),
                            disabled: a
                        }, l)))
                    },
                    LoadingIndicator: function(e) {
                        var t = e.innerProps,
                            n = e.isRtl,
                            r = e.size,
                            i = void 0 === r ? 4 : r,
                            a = Vt(e, Dn);
                        return Lt("div", ie({}, pn(re(re({}, a), {}, {
                            innerProps: t,
                            isRtl: n,
                            size: i
                        }), "loadingIndicator", {
                            indicator: !0,
                            "loading-indicator": !0
                        }), t), Lt(Gn, {
                            delay: 0,
                            offset: n
                        }), Lt(Gn, {
                            delay: 160,
                            offset: !0
                        }), Lt(Gn, {
                            delay: 320,
                            offset: !n
                        }))
                    },
                    Menu: function(e) {
                        var t = e.children,
                            n = e.innerRef,
                            r = e.innerProps;
                        return Lt("div", ie({}, pn(e, "menu", {
                            menu: !0
                        }), {
                            ref: n
                        }, r), t)
                    },
                    MenuList: function(e) {
                        var t = e.children,
                            n = e.innerProps,
                            r = e.innerRef,
                            i = e.isMulti;
                        return Lt("div", ie({}, pn(e, "menuList", {
                            "menu-list": !0,
                            "menu-list--is-multi": i
                        }), {
                            ref: r
                        }, n), t)
                    },
                    MenuPortal: function(e) {
                        var t = e.appendTo,
                            n = e.children,
                            r = e.controlElement,
                            i = e.innerProps,
                            a = e.menuPlacement,
                            o = e.menuPosition,
                            s = (0, ae.useRef)(null),
                            l = (0, ae.useRef)(null),
                            c = At((0, ae.useState)(In(a)), 2),
                            u = c[0],
                            d = c[1],
                            p = (0, ae.useMemo)((function() {
                                return {
                                    setPortalPlacement: d
                                }
                            }), []),
                            f = At((0, ae.useState)(null), 2),
                            h = f[0],
                            m = f[1],
                            g = (0, ae.useCallback)((function() {
                                if (r) {
                                    var e = function(e) {
                                            var t = e.getBoundingClientRect();
                                            return {
                                                bottom: t.bottom,
                                                height: t.height,
                                                left: t.left,
                                                right: t.right,
                                                top: t.top,
                                                width: t.width
                                            }
                                        }(r),
                                        t = "fixed" === o ? 0 : window.pageYOffset,
                                        n = e[u] + t;
                                    n === (null == h ? void 0 : h.offset) && e.left === (null == h ? void 0 : h.rect.left) && e.width === (null == h ? void 0 : h.rect.width) || m({
                                        offset: n,
                                        rect: e
                                    })
                                }
                            }), [r, o, u, null == h ? void 0 : h.offset, null == h ? void 0 : h.rect.left, null == h ? void 0 : h.rect.width]);
                        an((function() {
                            g()
                        }), [g]);
                        var v = (0, ae.useCallback)((function() {
                            "function" == typeof l.current && (l.current(), l.current = null), r && s.current && (l.current = function(e, t, n, r) {
                                void 0 === r && (r = {});
                                const {
                                    ancestorScroll: i = !0,
                                    ancestorResize: a = !0,
                                    elementResize: o = "function" == typeof ResizeObserver,
                                    layoutShift: s = "function" == typeof IntersectionObserver,
                                    animationFrame: l = !1
                                } = r, c = Qt(e), u = i || a ? [...c ? Jt(c) : [], ...Jt(t)] : [];
                                u.forEach((e => {
                                    i && e.addEventListener("scroll", n, {
                                        passive: !0
                                    }), a && e.addEventListener("resize", n)
                                }));
                                const d = c && s ? function(e, t) {
                                    let n, r = null;
                                    const i = $t(e);

                                    function a() {
                                        clearTimeout(n), r && r.disconnect(), r = null
                                    }
                                    return function o(s, l) {
                                        void 0 === s && (s = !1), void 0 === l && (l = 1), a();
                                        const {
                                            left: c,
                                            top: u,
                                            width: d,
                                            height: p
                                        } = e.getBoundingClientRect();
                                        if (s || t(), !d || !p) return;
                                        const f = {
                                            rootMargin: -Ft(u) + "px " + -Ft(i.clientWidth - (c + d)) + "px " + -Ft(i.clientHeight - (u + p)) + "px " + -Ft(c) + "px",
                                            threshold: Dt(0, Nt(1, l)) || 1
                                        };
                                        let h = !0;

                                        function m(e) {
                                            const t = e[0].intersectionRatio;
                                            if (t !== l) {
                                                if (!h) return o();
                                                t ? o(!1, t) : n = setTimeout((() => {
                                                    o(!1, 1e-7)
                                                }), 100)
                                            }
                                            h = !1
                                        }
                                        try {
                                            r = new IntersectionObserver(m, { ...f,
                                                root: i.ownerDocument
                                            })
                                        } catch (e) {
                                            r = new IntersectionObserver(m, f)
                                        }
                                        r.observe(e)
                                    }(!0), a
                                }(c, n) : null;
                                let p, f = -1,
                                    h = null;
                                o && (h = new ResizeObserver((e => {
                                    let [r] = e;
                                    r && r.target === c && h && (h.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame((() => {
                                        h && h.observe(t)
                                    }))), n()
                                })), c && !l && h.observe(c), h.observe(t));
                                let m = l ? rn(e) : null;
                                return l && function t() {
                                    const r = rn(e);
                                    !m || r.x === m.x && r.y === m.y && r.width === m.width && r.height === m.height || n(), m = r, p = requestAnimationFrame(t)
                                }(), n(), () => {
                                    u.forEach((e => {
                                        i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n)
                                    })), d && d(), h && h.disconnect(), h = null, l && cancelAnimationFrame(p)
                                }
                            }(r, s.current, g, {
                                elementResize: "ResizeObserver" in window
                            }))
                        }), [r, g]);
                        an((function() {
                            v()
                        }), [v]);
                        var b = (0, ae.useCallback)((function(e) {
                            s.current = e, v()
                        }), [v]);
                        if (!t && "fixed" !== o || !h) return null;
                        var y = Lt("div", ie({
                            ref: b
                        }, pn(re(re({}, e), {}, {
                            offset: h.offset,
                            position: o,
                            rect: h.rect
                        }), "menuPortal", {
                            "menu-portal": !0
                        }), i), n);
                        return Lt(zn.Provider, {
                            value: p
                        }, t ? (0, Rt.createPortal)(y, t) : y)
                    },
                    LoadingMessage: function(e) {
                        var t = e.children,
                            n = void 0 === t ? "Loading..." : t,
                            r = e.innerProps,
                            i = Vt(e, On);
                        return Lt("div", ie({}, pn(re(re({}, i), {}, {
                            children: n,
                            innerProps: r
                        }), "loadingMessage", {
                            "menu-notice": !0,
                            "menu-notice--loading": !0
                        }), r), n)
                    },
                    NoOptionsMessage: function(e) {
                        var t = e.children,
                            n = void 0 === t ? "No options" : t,
                            r = e.innerProps,
                            i = Vt(e, Sn);
                        return Lt("div", ie({}, pn(re(re({}, i), {}, {
                            children: n,
                            innerProps: r
                        }), "noOptionsMessage", {
                            "menu-notice": !0,
                            "menu-notice--no-options": !0
                        }), r), n)
                    },
                    MultiValue: function(e) {
                        var t = e.children,
                            n = e.components,
                            r = e.data,
                            i = e.innerProps,
                            a = e.isDisabled,
                            o = e.removeProps,
                            s = e.selectProps,
                            l = n.Container,
                            c = n.Label,
                            u = n.Remove;
                        return Lt(l, {
                            data: r,
                            innerProps: re(re({}, pn(e, "multiValue", {
                                "multi-value": !0,
                                "multi-value--is-disabled": a
                            })), i),
                            selectProps: s
                        }, Lt(c, {
                            data: r,
                            innerProps: re({}, pn(e, "multiValueLabel", {
                                "multi-value__label": !0
                            })),
                            selectProps: s
                        }, t), Lt(u, {
                            data: r,
                            innerProps: re(re({}, pn(e, "multiValueRemove", {
                                "multi-value__remove": !0
                            })), {}, {
                                "aria-label": "Remove ".concat(t || "option")
                            }, o),
                            selectProps: s
                        }))
                    },
                    MultiValueContainer: Qn,
                    MultiValueLabel: Qn,
                    MultiValueRemove: function(e) {
                        var t = e.children,
                            n = e.innerProps;
                        return Lt("div", ie({
                            role: "button"
                        }, n), t || Lt(jn, {
                            size: 14
                        }))
                    },
                    Option: function(e) {
                        var t = e.children,
                            n = e.isDisabled,
                            r = e.isFocused,
                            i = e.isSelected,
                            a = e.innerRef,
                            o = e.innerProps;
                        return Lt("div", ie({}, pn(e, "option", {
                            option: !0,
                            "option--is-disabled": n,
                            "option--is-focused": r,
                            "option--is-selected": i
                        }), {
                            ref: a,
                            "aria-disabled": n
                        }, o), t)
                    },
                    Placeholder: function(e) {
                        var t = e.children,
                            n = e.innerProps;
                        return Lt("div", ie({}, pn(e, "placeholder", {
                            placeholder: !0
                        }), n), t)
                    },
                    SelectContainer: function(e) {
                        var t = e.children,
                            n = e.innerProps,
                            r = e.isDisabled,
                            i = e.isRtl;
                        return Lt("div", ie({}, pn(e, "container", {
                            "--is-disabled": r,
                            "--is-rtl": i
                        }), n), t)
                    },
                    SingleValue: function(e) {
                        var t = e.children,
                            n = e.isDisabled,
                            r = e.innerProps;
                        return Lt("div", ie({}, pn(e, "singleValue", {
                            "single-value": !0,
                            "single-value--is-disabled": n
                        }), r), t)
                    },
                    ValueContainer: function(e) {
                        var t = e.children,
                            n = e.innerProps,
                            r = e.isMulti,
                            i = e.hasValue;
                        return Lt("div", ie({}, pn(e, "valueContainer", {
                            "value-container": !0,
                            "value-container--is-multi": r,
                            "value-container--has-value": i
                        }), n), t)
                    }
                },
                tr = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];

            function nr(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, ee(r.key), r)
                }
            }

            function rr(e, t) {
                return rr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, rr(e, t)
            }

            function ir(e) {
                return ir = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, ir(e)
            }

            function ar(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = ir(e);
                    if (t) {
                        var i = ir(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return function(e, t) {
                        if (t && ("object" === Q(t) || "function" == typeof t)) return t;
                        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(e) {
                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(e)
                    }(this, n)
                }
            }

            function or(e) {
                return function(e) {
                    if (Array.isArray(e)) return zt(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || Pt(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var sr = Number.isNaN || function(e) {
                return "number" == typeof e && e != e
            };

            function lr(e, t) {
                if (e.length !== t.length) return !1;
                for (var n = 0; n < e.length; n++)
                    if (!((r = e[n]) === (i = t[n]) || sr(r) && sr(i))) return !1;
                var r, i;
                return !0
            }
            for (var cr = {
                    name: "7pg0cj-a11yText",
                    styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
                }, ur = function(e) {
                    return Lt("span", ie({
                        css: cr
                    }, e))
                }, dr = {
                    guidance: function(e) {
                        var t = e.isSearchable,
                            n = e.isMulti,
                            r = e.isDisabled,
                            i = e.tabSelectsValue;
                        switch (e.context) {
                            case "menu":
                                return "Use Up and Down to choose options".concat(r ? "" : ", press Enter to select the currently focused option", ", press Escape to exit the menu").concat(i ? ", press Tab to select the option and exit the menu" : "", ".");
                            case "input":
                                return "".concat(e["aria-label"] || "Select", " is focused ").concat(t ? ",type to refine list" : "", ", press Down to open the menu, ").concat(n ? " press left to focus selected values" : "");
                            case "value":
                                return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
                            default:
                                return ""
                        }
                    },
                    onChange: function(e) {
                        var t = e.action,
                            n = e.label,
                            r = void 0 === n ? "" : n,
                            i = e.labels,
                            a = e.isDisabled;
                        switch (t) {
                            case "deselect-option":
                            case "pop-value":
                            case "remove-value":
                                return "option ".concat(r, ", deselected.");
                            case "clear":
                                return "All selected options have been cleared.";
                            case "initial-input-focus":
                                return "option".concat(i.length > 1 ? "s" : "", " ").concat(i.join(","), ", selected.");
                            case "select-option":
                                return "option ".concat(r, a ? " is disabled. Select another option." : ", selected.");
                            default:
                                return ""
                        }
                    },
                    onFocus: function(e) {
                        var t = e.context,
                            n = e.focused,
                            r = e.options,
                            i = e.label,
                            a = void 0 === i ? "" : i,
                            o = e.selectValue,
                            s = e.isDisabled,
                            l = e.isSelected,
                            c = function(e, t) {
                                return e && e.length ? "".concat(e.indexOf(t) + 1, " of ").concat(e.length) : ""
                            };
                        if ("value" === t && o) return "value ".concat(a, " focused, ").concat(c(o, n), ".");
                        if ("menu" === t) {
                            var u = s ? " disabled" : "",
                                d = "".concat(l ? "selected" : "focused").concat(u);
                            return "option ".concat(a, " ").concat(d, ", ").concat(c(r, n), ".")
                        }
                        return ""
                    },
                    onFilter: function(e) {
                        var t = e.inputValue,
                            n = e.resultsMessage;
                        return "".concat(n).concat(t ? " for search term " + t : "", ".")
                    }
                }, pr = function(e) {
                    var t = e.ariaSelection,
                        n = e.focusedOption,
                        r = e.focusedValue,
                        i = e.focusableOptions,
                        a = e.isFocused,
                        o = e.selectValue,
                        s = e.selectProps,
                        l = e.id,
                        c = s.ariaLiveMessages,
                        u = s.getOptionLabel,
                        d = s.inputValue,
                        p = s.isMulti,
                        f = s.isOptionDisabled,
                        h = s.isSearchable,
                        m = s.menuIsOpen,
                        g = s.options,
                        v = s.screenReaderStatus,
                        b = s.tabSelectsValue,
                        y = s["aria-label"],
                        C = s["aria-live"],
                        _ = (0, ae.useMemo)((function() {
                            return re(re({}, dr), c || {})
                        }), [c]),
                        E = (0, ae.useMemo)((function() {
                            var e, n = "";
                            if (t && _.onChange) {
                                var r = t.option,
                                    i = t.options,
                                    a = t.removedValue,
                                    s = t.removedValues,
                                    l = t.value,
                                    c = a || r || (e = l, Array.isArray(e) ? null : e),
                                    d = c ? u(c) : "",
                                    p = i || s || void 0,
                                    h = p ? p.map(u) : [],
                                    m = re({
                                        isDisabled: c && f(c, o),
                                        label: d,
                                        labels: h
                                    }, t);
                                n = _.onChange(m)
                            }
                            return n
                        }), [t, _, f, o, u]),
                        w = (0, ae.useMemo)((function() {
                            var e = "",
                                t = n || r,
                                a = !!(n && o && o.includes(n));
                            if (t && _.onFocus) {
                                var s = {
                                    focused: t,
                                    label: u(t),
                                    isDisabled: f(t, o),
                                    isSelected: a,
                                    options: i,
                                    context: t === n ? "menu" : "value",
                                    selectValue: o
                                };
                                e = _.onFocus(s)
                            }
                            return e
                        }), [n, r, u, f, _, i, o]),
                        x = (0, ae.useMemo)((function() {
                            var e = "";
                            if (m && g.length && _.onFilter) {
                                var t = v({
                                    count: i.length
                                });
                                e = _.onFilter({
                                    inputValue: d,
                                    resultsMessage: t
                                })
                            }
                            return e
                        }), [i, d, m, _, g, v]),
                        k = (0, ae.useMemo)((function() {
                            var e = "";
                            if (_.guidance) {
                                var t = r ? "value" : m ? "menu" : "input";
                                e = _.guidance({
                                    "aria-label": y,
                                    context: t,
                                    isDisabled: n && f(n, o),
                                    isMulti: p,
                                    isSearchable: h,
                                    tabSelectsValue: b
                                })
                            }
                            return e
                        }), [y, n, r, p, f, h, m, _, o, b]),
                        S = "".concat(w, " ").concat(x, " ").concat(k),
                        O = Lt(ae.Fragment, null, Lt("span", {
                            id: "aria-selection"
                        }, E), Lt("span", {
                            id: "aria-context"
                        }, S)),
                        M = "initial-input-focus" === (null == t ? void 0 : t.action);
                    return Lt(ae.Fragment, null, Lt(ur, {
                        id: l
                    }, M && O), Lt(ur, {
                        "aria-live": C,
                        "aria-atomic": "false",
                        "aria-relevant": "additions text"
                    }, a && !M && O))
                }, fr = [{
                    base: "A",
                    letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"
                }, {
                    base: "AA",
                    letters: "Ꜳ"
                }, {
                    base: "AE",
                    letters: "ÆǼǢ"
                }, {
                    base: "AO",
                    letters: "Ꜵ"
                }, {
                    base: "AU",
                    letters: "Ꜷ"
                }, {
                    base: "AV",
                    letters: "ꜸꜺ"
                }, {
                    base: "AY",
                    letters: "Ꜽ"
                }, {
                    base: "B",
                    letters: "BⒷＢḂḄḆɃƂƁ"
                }, {
                    base: "C",
                    letters: "CⒸＣĆĈĊČÇḈƇȻꜾ"
                }, {
                    base: "D",
                    letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"
                }, {
                    base: "DZ",
                    letters: "ǱǄ"
                }, {
                    base: "Dz",
                    letters: "ǲǅ"
                }, {
                    base: "E",
                    letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"
                }, {
                    base: "F",
                    letters: "FⒻＦḞƑꝻ"
                }, {
                    base: "G",
                    letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"
                }, {
                    base: "H",
                    letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"
                }, {
                    base: "I",
                    letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"
                }, {
                    base: "J",
                    letters: "JⒿＪĴɈ"
                }, {
                    base: "K",
                    letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"
                }, {
                    base: "L",
                    letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"
                }, {
                    base: "LJ",
                    letters: "Ǉ"
                }, {
                    base: "Lj",
                    letters: "ǈ"
                }, {
                    base: "M",
                    letters: "MⓂＭḾṀṂⱮƜ"
                }, {
                    base: "N",
                    letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"
                }, {
                    base: "NJ",
                    letters: "Ǌ"
                }, {
                    base: "Nj",
                    letters: "ǋ"
                }, {
                    base: "O",
                    letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"
                }, {
                    base: "OI",
                    letters: "Ƣ"
                }, {
                    base: "OO",
                    letters: "Ꝏ"
                }, {
                    base: "OU",
                    letters: "Ȣ"
                }, {
                    base: "P",
                    letters: "PⓅＰṔṖƤⱣꝐꝒꝔ"
                }, {
                    base: "Q",
                    letters: "QⓆＱꝖꝘɊ"
                }, {
                    base: "R",
                    letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"
                }, {
                    base: "S",
                    letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"
                }, {
                    base: "T",
                    letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"
                }, {
                    base: "TZ",
                    letters: "Ꜩ"
                }, {
                    base: "U",
                    letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"
                }, {
                    base: "V",
                    letters: "VⓋＶṼṾƲꝞɅ"
                }, {
                    base: "VY",
                    letters: "Ꝡ"
                }, {
                    base: "W",
                    letters: "WⓌＷẀẂŴẆẄẈⱲ"
                }, {
                    base: "X",
                    letters: "XⓍＸẊẌ"
                }, {
                    base: "Y",
                    letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"
                }, {
                    base: "Z",
                    letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"
                }, {
                    base: "a",
                    letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"
                }, {
                    base: "aa",
                    letters: "ꜳ"
                }, {
                    base: "ae",
                    letters: "æǽǣ"
                }, {
                    base: "ao",
                    letters: "ꜵ"
                }, {
                    base: "au",
                    letters: "ꜷ"
                }, {
                    base: "av",
                    letters: "ꜹꜻ"
                }, {
                    base: "ay",
                    letters: "ꜽ"
                }, {
                    base: "b",
                    letters: "bⓑｂḃḅḇƀƃɓ"
                }, {
                    base: "c",
                    letters: "cⓒｃćĉċčçḉƈȼꜿↄ"
                }, {
                    base: "d",
                    letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ"
                }, {
                    base: "dz",
                    letters: "ǳǆ"
                }, {
                    base: "e",
                    letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"
                }, {
                    base: "f",
                    letters: "fⓕｆḟƒꝼ"
                }, {
                    base: "g",
                    letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"
                }, {
                    base: "h",
                    letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"
                }, {
                    base: "hv",
                    letters: "ƕ"
                }, {
                    base: "i",
                    letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"
                }, {
                    base: "j",
                    letters: "jⓙｊĵǰɉ"
                }, {
                    base: "k",
                    letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"
                }, {
                    base: "l",
                    letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"
                }, {
                    base: "lj",
                    letters: "ǉ"
                }, {
                    base: "m",
                    letters: "mⓜｍḿṁṃɱɯ"
                }, {
                    base: "n",
                    letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"
                }, {
                    base: "nj",
                    letters: "ǌ"
                }, {
                    base: "o",
                    letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"
                }, {
                    base: "oi",
                    letters: "ƣ"
                }, {
                    base: "ou",
                    letters: "ȣ"
                }, {
                    base: "oo",
                    letters: "ꝏ"
                }, {
                    base: "p",
                    letters: "pⓟｐṕṗƥᵽꝑꝓꝕ"
                }, {
                    base: "q",
                    letters: "qⓠｑɋꝗꝙ"
                }, {
                    base: "r",
                    letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"
                }, {
                    base: "s",
                    letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"
                }, {
                    base: "t",
                    letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"
                }, {
                    base: "tz",
                    letters: "ꜩ"
                }, {
                    base: "u",
                    letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"
                }, {
                    base: "v",
                    letters: "vⓥｖṽṿʋꝟʌ"
                }, {
                    base: "vy",
                    letters: "ꝡ"
                }, {
                    base: "w",
                    letters: "wⓦｗẁẃŵẇẅẘẉⱳ"
                }, {
                    base: "x",
                    letters: "xⓧｘẋẍ"
                }, {
                    base: "y",
                    letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"
                }, {
                    base: "z",
                    letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ"
                }], hr = new RegExp("[" + fr.map((function(e) {
                    return e.letters
                })).join("") + "]", "g"), mr = {}, gr = 0; gr < fr.length; gr++)
                for (var vr = fr[gr], br = 0; br < vr.letters.length; br++) mr[vr.letters[br]] = vr.base;
            var yr = function(e) {
                    return e.replace(hr, (function(e) {
                        return mr[e]
                    }))
                },
                Cr = function(e, t) {
                    void 0 === t && (t = lr);
                    var n = null;

                    function r() {
                        for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
                        if (n && n.lastThis === this && t(r, n.lastArgs)) return n.lastResult;
                        var a = e.apply(this, r);
                        return n = {
                            lastResult: a,
                            lastArgs: r,
                            lastThis: this
                        }, a
                    }
                    return r.clear = function() {
                        n = null
                    }, r
                }(yr),
                _r = function(e) {
                    return e.replace(/^\s+|\s+$/g, "")
                },
                Er = function(e) {
                    return "".concat(e.label, " ").concat(e.value)
                },
                wr = ["innerRef"];

            function xr(e) {
                var t = e.innerRef,
                    n = function(e) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                        var i = Object.entries(e).filter((function(e) {
                            var t = At(e, 1)[0];
                            return !n.includes(t)
                        }));
                        return i.reduce((function(e, t) {
                            var n = At(t, 2),
                                r = n[0],
                                i = n[1];
                            return e[r] = i, e
                        }), {})
                    }(Vt(e, wr), "onExited", "in", "enter", "exit", "appear");
                return Lt("input", ie({
                    ref: t
                }, n, {
                    css: It({
                        label: "dummyInput",
                        background: 0,
                        border: 0,
                        caretColor: "transparent",
                        fontSize: "inherit",
                        gridArea: "1 / 1 / 2 / 3",
                        outline: 0,
                        padding: 0,
                        width: 1,
                        color: "transparent",
                        left: -100,
                        opacity: 0,
                        position: "relative",
                        transform: "scale(.01)"
                    }, "", "")
                }))
            }
            var kr = ["boxSizing", "height", "overflow", "paddingRight", "position"],
                Sr = {
                    boxSizing: "border-box",
                    overflow: "hidden",
                    position: "relative",
                    height: "100%"
                };

            function Or(e) {
                e.preventDefault()
            }

            function Mr(e) {
                e.stopPropagation()
            }

            function Tr() {
                var e = this.scrollTop,
                    t = this.scrollHeight,
                    n = e + this.offsetHeight;
                0 === e ? this.scrollTop = 1 : n === t && (this.scrollTop = e - 1)
            }

            function Lr() {
                return "ontouchstart" in window || navigator.maxTouchPoints
            }
            var Ir = !("undefined" == typeof window || !window.document || !window.document.createElement),
                zr = 0,
                Pr = {
                    capture: !1,
                    passive: !1
                },
                Ar = function(e) {
                    var t = e.target;
                    return t.ownerDocument.activeElement && t.ownerDocument.activeElement.blur()
                },
                Vr = {
                    name: "1kfdb0e",
                    styles: "position:fixed;left:0;bottom:0;right:0;top:0"
                };

            function Rr(e) {
                var t = e.children,
                    n = e.lockEnabled,
                    r = e.captureEnabled,
                    i = function(e) {
                        var t = e.isEnabled,
                            n = e.onBottomArrive,
                            r = e.onBottomLeave,
                            i = e.onTopArrive,
                            a = e.onTopLeave,
                            o = (0, ae.useRef)(!1),
                            s = (0, ae.useRef)(!1),
                            l = (0, ae.useRef)(0),
                            c = (0, ae.useRef)(null),
                            u = (0, ae.useCallback)((function(e, t) {
                                if (null !== c.current) {
                                    var l = c.current,
                                        u = l.scrollTop,
                                        d = l.scrollHeight,
                                        p = l.clientHeight,
                                        f = c.current,
                                        h = t > 0,
                                        m = d - p - u,
                                        g = !1;
                                    m > t && o.current && (r && r(e), o.current = !1), h && s.current && (a && a(e), s.current = !1), h && t > m ? (n && !o.current && n(e), f.scrollTop = d, g = !0, o.current = !0) : !h && -t > u && (i && !s.current && i(e), f.scrollTop = 0, g = !0, s.current = !0), g && function(e) {
                                        e.cancelable && e.preventDefault(), e.stopPropagation()
                                    }(e)
                                }
                            }), [n, r, i, a]),
                            d = (0, ae.useCallback)((function(e) {
                                u(e, e.deltaY)
                            }), [u]),
                            p = (0, ae.useCallback)((function(e) {
                                l.current = e.changedTouches[0].clientY
                            }), []),
                            f = (0, ae.useCallback)((function(e) {
                                var t = l.current - e.changedTouches[0].clientY;
                                u(e, t)
                            }), [u]),
                            h = (0, ae.useCallback)((function(e) {
                                if (e) {
                                    var t = !!wn && {
                                        passive: !1
                                    };
                                    e.addEventListener("wheel", d, t), e.addEventListener("touchstart", p, t), e.addEventListener("touchmove", f, t)
                                }
                            }), [f, p, d]),
                            m = (0, ae.useCallback)((function(e) {
                                e && (e.removeEventListener("wheel", d, !1), e.removeEventListener("touchstart", p, !1), e.removeEventListener("touchmove", f, !1))
                            }), [f, p, d]);
                        return (0, ae.useEffect)((function() {
                                if (t) {
                                    var e = c.current;
                                    return h(e),
                                        function() {
                                            m(e)
                                        }
                                }
                            }), [t, h, m]),
                            function(e) {
                                c.current = e
                            }
                    }({
                        isEnabled: void 0 === r || r,
                        onBottomArrive: e.onBottomArrive,
                        onBottomLeave: e.onBottomLeave,
                        onTopArrive: e.onTopArrive,
                        onTopLeave: e.onTopLeave
                    }),
                    a = function(e) {
                        var t = e.isEnabled,
                            n = e.accountForScrollbars,
                            r = void 0 === n || n,
                            i = (0, ae.useRef)({}),
                            a = (0, ae.useRef)(null),
                            o = (0, ae.useCallback)((function(e) {
                                if (Ir) {
                                    var t = document.body,
                                        n = t && t.style;
                                    if (r && kr.forEach((function(e) {
                                            var t = n && n[e];
                                            i.current[e] = t
                                        })), r && zr < 1) {
                                        var a = parseInt(i.current.paddingRight, 10) || 0,
                                            o = document.body ? document.body.clientWidth : 0,
                                            s = window.innerWidth - o + a || 0;
                                        Object.keys(Sr).forEach((function(e) {
                                            var t = Sr[e];
                                            n && (n[e] = t)
                                        })), n && (n.paddingRight = "".concat(s, "px"))
                                    }
                                    t && Lr() && (t.addEventListener("touchmove", Or, Pr), e && (e.addEventListener("touchstart", Tr, Pr), e.addEventListener("touchmove", Mr, Pr))), zr += 1
                                }
                            }), [r]),
                            s = (0, ae.useCallback)((function(e) {
                                if (Ir) {
                                    var t = document.body,
                                        n = t && t.style;
                                    zr = Math.max(zr - 1, 0), r && zr < 1 && kr.forEach((function(e) {
                                        var t = i.current[e];
                                        n && (n[e] = t)
                                    })), t && Lr() && (t.removeEventListener("touchmove", Or, Pr), e && (e.removeEventListener("touchstart", Tr, Pr), e.removeEventListener("touchmove", Mr, Pr)))
                                }
                            }), [r]);
                        return (0, ae.useEffect)((function() {
                                if (t) {
                                    var e = a.current;
                                    return o(e),
                                        function() {
                                            s(e)
                                        }
                                }
                            }), [t, o, s]),
                            function(e) {
                                a.current = e
                            }
                    }({
                        isEnabled: n
                    });
                return Lt(ae.Fragment, null, n && Lt("div", {
                    onClick: Ar,
                    css: Vr
                }), t((function(e) {
                    i(e), a(e)
                })))
            }
            var Nr = {
                    name: "1a0ro4n-requiredInput",
                    styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
                },
                Dr = function(e) {
                    var t = e.name,
                        n = e.onFocus;
                    return Lt("input", {
                        required: !0,
                        name: t,
                        tabIndex: -1,
                        "aria-hidden": "true",
                        onFocus: n,
                        css: Nr,
                        value: "",
                        onChange: function() {}
                    })
                },
                Hr = {
                    clearIndicator: Wn,
                    container: function(e) {
                        var t = e.isDisabled;
                        return {
                            label: "container",
                            direction: e.isRtl ? "rtl" : void 0,
                            pointerEvents: t ? "none" : void 0,
                            position: "relative"
                        }
                    },
                    control: function(e, t) {
                        var n = e.isDisabled,
                            r = e.isFocused,
                            i = e.theme,
                            a = i.colors,
                            o = i.borderRadius;
                        return re({
                            label: "control",
                            alignItems: "center",
                            cursor: "default",
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                            minHeight: i.spacing.controlHeight,
                            outline: "0 !important",
                            position: "relative",
                            transition: "all 100ms"
                        }, t ? {} : {
                            backgroundColor: n ? a.neutral5 : a.neutral0,
                            borderColor: n ? a.neutral10 : r ? a.primary : a.neutral20,
                            borderRadius: o,
                            borderStyle: "solid",
                            borderWidth: 1,
                            boxShadow: r ? "0 0 0 1px ".concat(a.primary) : void 0,
                            "&:hover": {
                                borderColor: r ? a.primary : a.neutral30
                            }
                        })
                    },
                    dropdownIndicator: $n,
                    group: function(e, t) {
                        var n = e.theme.spacing;
                        return t ? {} : {
                            paddingBottom: 2 * n.baseUnit,
                            paddingTop: 2 * n.baseUnit
                        }
                    },
                    groupHeading: function(e, t) {
                        var n = e.theme,
                            r = n.colors,
                            i = n.spacing;
                        return re({
                            label: "group",
                            cursor: "default",
                            display: "block"
                        }, t ? {} : {
                            color: r.neutral40,
                            fontSize: "75%",
                            fontWeight: 500,
                            marginBottom: "0.25em",
                            paddingLeft: 3 * i.baseUnit,
                            paddingRight: 3 * i.baseUnit,
                            textTransform: "uppercase"
                        })
                    },
                    indicatorsContainer: function() {
                        return {
                            alignItems: "center",
                            alignSelf: "stretch",
                            display: "flex",
                            flexShrink: 0
                        }
                    },
                    indicatorSeparator: function(e, t) {
                        var n = e.isDisabled,
                            r = e.theme,
                            i = r.spacing.baseUnit,
                            a = r.colors;
                        return re({
                            label: "indicatorSeparator",
                            alignSelf: "stretch",
                            width: 1
                        }, t ? {} : {
                            backgroundColor: n ? a.neutral10 : a.neutral20,
                            marginBottom: 2 * i,
                            marginTop: 2 * i
                        })
                    },
                    input: function(e, t) {
                        var n = e.isDisabled,
                            r = e.value,
                            i = e.theme,
                            a = i.spacing,
                            o = i.colors;
                        return re(re({
                            visibility: n ? "hidden" : "visible",
                            transform: r ? "translateZ(0)" : ""
                        }, Kn), t ? {} : {
                            margin: a.baseUnit / 2,
                            paddingBottom: a.baseUnit / 2,
                            paddingTop: a.baseUnit / 2,
                            color: o.neutral80
                        })
                    },
                    loadingIndicator: function(e, t) {
                        var n = e.isFocused,
                            r = e.size,
                            i = e.theme,
                            a = i.colors,
                            o = i.spacing.baseUnit;
                        return re({
                            label: "loadingIndicator",
                            display: "flex",
                            transition: "color 150ms",
                            alignSelf: "center",
                            fontSize: r,
                            lineHeight: 1,
                            marginRight: r,
                            textAlign: "center",
                            verticalAlign: "middle"
                        }, t ? {} : {
                            color: n ? a.neutral60 : a.neutral20,
                            padding: 2 * o
                        })
                    },
                    loadingMessage: Rn,
                    menu: function(e, t) {
                        var n, r = e.placement,
                            i = e.theme,
                            a = i.borderRadius,
                            o = i.spacing,
                            s = i.colors;
                        return re((te(n = {
                            label: "menu"
                        }, function(e) {
                            return e ? {
                                bottom: "top",
                                top: "bottom"
                            }[e] : "bottom"
                        }(r), "100%"), te(n, "position", "absolute"), te(n, "width", "100%"), te(n, "zIndex", 1), n), t ? {} : {
                            backgroundColor: s.neutral0,
                            borderRadius: a,
                            boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
                            marginBottom: o.menuGutter,
                            marginTop: o.menuGutter
                        })
                    },
                    menuList: function(e, t) {
                        var n = e.maxHeight,
                            r = e.theme.spacing.baseUnit;
                        return re({
                            maxHeight: n,
                            overflowY: "auto",
                            position: "relative",
                            WebkitOverflowScrolling: "touch"
                        }, t ? {} : {
                            paddingBottom: r,
                            paddingTop: r
                        })
                    },
                    menuPortal: function(e) {
                        var t = e.rect,
                            n = e.offset,
                            r = e.position;
                        return {
                            left: t.left,
                            position: r,
                            top: n,
                            width: t.width,
                            zIndex: 1
                        }
                    },
                    multiValue: function(e, t) {
                        var n = e.theme,
                            r = n.spacing,
                            i = n.borderRadius,
                            a = n.colors;
                        return re({
                            label: "multiValue",
                            display: "flex",
                            minWidth: 0
                        }, t ? {} : {
                            backgroundColor: a.neutral10,
                            borderRadius: i / 2,
                            margin: r.baseUnit / 2
                        })
                    },
                    multiValueLabel: function(e, t) {
                        var n = e.theme,
                            r = n.borderRadius,
                            i = n.colors,
                            a = e.cropWithEllipsis;
                        return re({
                            overflow: "hidden",
                            textOverflow: a || void 0 === a ? "ellipsis" : void 0,
                            whiteSpace: "nowrap"
                        }, t ? {} : {
                            borderRadius: r / 2,
                            color: i.neutral80,
                            fontSize: "85%",
                            padding: 3,
                            paddingLeft: 6
                        })
                    },
                    multiValueRemove: function(e, t) {
                        var n = e.theme,
                            r = n.spacing,
                            i = n.borderRadius,
                            a = n.colors,
                            o = e.isFocused;
                        return re({
                            alignItems: "center",
                            display: "flex"
                        }, t ? {} : {
                            borderRadius: i / 2,
                            backgroundColor: o ? a.dangerLight : void 0,
                            paddingLeft: r.baseUnit,
                            paddingRight: r.baseUnit,
                            ":hover": {
                                backgroundColor: a.dangerLight,
                                color: a.danger
                            }
                        })
                    },
                    noOptionsMessage: Vn,
                    option: function(e, t) {
                        var n = e.isDisabled,
                            r = e.isFocused,
                            i = e.isSelected,
                            a = e.theme,
                            o = a.spacing,
                            s = a.colors;
                        return re({
                            label: "option",
                            cursor: "default",
                            display: "block",
                            fontSize: "inherit",
                            width: "100%",
                            userSelect: "none",
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                        }, t ? {} : {
                            backgroundColor: i ? s.primary : r ? s.primary25 : "transparent",
                            color: n ? s.neutral20 : i ? s.neutral0 : "inherit",
                            padding: "".concat(2 * o.baseUnit, "px ").concat(3 * o.baseUnit, "px"),
                            ":active": {
                                backgroundColor: n ? void 0 : i ? s.primary : s.primary50
                            }
                        })
                    },
                    placeholder: function(e, t) {
                        var n = e.theme,
                            r = n.spacing,
                            i = n.colors;
                        return re({
                            label: "placeholder",
                            gridArea: "1 / 1 / 2 / 3"
                        }, t ? {} : {
                            color: i.neutral50,
                            marginLeft: r.baseUnit / 2,
                            marginRight: r.baseUnit / 2
                        })
                    },
                    singleValue: function(e, t) {
                        var n = e.isDisabled,
                            r = e.theme,
                            i = r.spacing,
                            a = r.colors;
                        return re({
                            label: "singleValue",
                            gridArea: "1 / 1 / 2 / 3",
                            maxWidth: "100%",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap"
                        }, t ? {} : {
                            color: n ? a.neutral40 : a.neutral80,
                            marginLeft: i.baseUnit / 2,
                            marginRight: i.baseUnit / 2
                        })
                    },
                    valueContainer: function(e, t) {
                        var n = e.theme.spacing,
                            r = e.isMulti,
                            i = e.hasValue,
                            a = e.selectProps.controlShouldRenderValue;
                        return re({
                            alignItems: "center",
                            display: r && i && a ? "flex" : "grid",
                            flex: 1,
                            flexWrap: "wrap",
                            WebkitOverflowScrolling: "touch",
                            position: "relative",
                            overflow: "hidden"
                        }, t ? {} : {
                            padding: "".concat(n.baseUnit / 2, "px ").concat(2 * n.baseUnit, "px")
                        })
                    }
                },
                Fr = {
                    borderRadius: 4,
                    colors: {
                        primary: "#2684FF",
                        primary75: "#4C9AFF",
                        primary50: "#B2D4FF",
                        primary25: "#DEEBFF",
                        danger: "#DE350B",
                        dangerLight: "#FFBDAD",
                        neutral0: "hsl(0, 0%, 100%)",
                        neutral5: "hsl(0, 0%, 95%)",
                        neutral10: "hsl(0, 0%, 90%)",
                        neutral20: "hsl(0, 0%, 80%)",
                        neutral30: "hsl(0, 0%, 70%)",
                        neutral40: "hsl(0, 0%, 60%)",
                        neutral50: "hsl(0, 0%, 50%)",
                        neutral60: "hsl(0, 0%, 40%)",
                        neutral70: "hsl(0, 0%, 30%)",
                        neutral80: "hsl(0, 0%, 20%)",
                        neutral90: "hsl(0, 0%, 10%)"
                    },
                    spacing: {
                        baseUnit: 4,
                        controlHeight: 38,
                        menuGutter: 8
                    }
                },
                jr = {
                    "aria-live": "polite",
                    backspaceRemovesValue: !0,
                    blurInputOnSelect: bn(),
                    captureMenuScroll: !bn(),
                    classNames: {},
                    closeMenuOnSelect: !0,
                    closeMenuOnScroll: !1,
                    components: {},
                    controlShouldRenderValue: !0,
                    escapeClearsValue: !1,
                    filterOption: function(e, t) {
                        if (e.data.__isNew__) return !0;
                        var n = re({
                                ignoreCase: !0,
                                ignoreAccents: !0,
                                stringify: Er,
                                trim: !0,
                                matchFrom: "any"
                            }, undefined),
                            r = n.ignoreCase,
                            i = n.ignoreAccents,
                            a = n.stringify,
                            o = n.trim,
                            s = n.matchFrom,
                            l = o ? _r(t) : t,
                            c = o ? _r(a(e)) : a(e);
                        return r && (l = l.toLowerCase(), c = c.toLowerCase()), i && (l = Cr(l), c = yr(c)), "start" === s ? c.substr(0, l.length) === l : c.indexOf(l) > -1
                    },
                    formatGroupLabel: function(e) {
                        return e.label
                    },
                    getOptionLabel: function(e) {
                        return e.label
                    },
                    getOptionValue: function(e) {
                        return e.value
                    },
                    isDisabled: !1,
                    isLoading: !1,
                    isMulti: !1,
                    isRtl: !1,
                    isSearchable: !0,
                    isOptionDisabled: function(e) {
                        return !!e.isDisabled
                    },
                    loadingMessage: function() {
                        return "Loading..."
                    },
                    maxMenuHeight: 300,
                    minMenuHeight: 140,
                    menuIsOpen: !1,
                    menuPlacement: "bottom",
                    menuPosition: "absolute",
                    menuShouldBlockScroll: !1,
                    menuShouldScrollIntoView: ! function() {
                        try {
                            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                        } catch (e) {
                            return !1
                        }
                    }(),
                    noOptionsMessage: function() {
                        return "No options"
                    },
                    openMenuOnFocus: !1,
                    openMenuOnClick: !0,
                    options: [],
                    pageSize: 5,
                    placeholder: "Select...",
                    screenReaderStatus: function(e) {
                        var t = e.count;
                        return "".concat(t, " result").concat(1 !== t ? "s" : "", " available")
                    },
                    styles: {},
                    tabIndex: 0,
                    tabSelectsValue: !0,
                    unstyled: !1
                };

            function Br(e, t, n, r) {
                return {
                    type: "option",
                    data: t,
                    isDisabled: qr(e, t, n),
                    isSelected: Yr(e, t, n),
                    label: Zr(e, t),
                    value: Gr(e, t),
                    index: r
                }
            }

            function Ur(e, t) {
                return e.options.map((function(n, r) {
                    if ("options" in n) {
                        var i = n.options.map((function(n, r) {
                            return Br(e, n, t, r)
                        })).filter((function(t) {
                            return Wr(e, t)
                        }));
                        return i.length > 0 ? {
                            type: "group",
                            data: n,
                            options: i,
                            index: r
                        } : void 0
                    }
                    var a = Br(e, n, t, r);
                    return Wr(e, a) ? a : void 0
                })).filter(xn)
            }

            function $r(e) {
                return e.reduce((function(e, t) {
                    return "group" === t.type ? e.push.apply(e, or(t.options.map((function(e) {
                        return e.data
                    })))) : e.push(t.data), e
                }), [])
            }

            function Wr(e, t) {
                var n = e.inputValue,
                    r = void 0 === n ? "" : n,
                    i = t.data,
                    a = t.isSelected,
                    o = t.label,
                    s = t.value;
                return (!Kr(e) || !a) && Xr(e, {
                    label: o,
                    value: s,
                    data: i
                }, r)
            }
            var Zr = function(e, t) {
                    return e.getOptionLabel(t)
                },
                Gr = function(e, t) {
                    return e.getOptionValue(t)
                };

            function qr(e, t, n) {
                return "function" == typeof e.isOptionDisabled && e.isOptionDisabled(t, n)
            }

            function Yr(e, t, n) {
                if (n.indexOf(t) > -1) return !0;
                if ("function" == typeof e.isOptionSelected) return e.isOptionSelected(t, n);
                var r = Gr(e, t);
                return n.some((function(t) {
                    return Gr(e, t) === r
                }))
            }

            function Xr(e, t, n) {
                return !e.filterOption || e.filterOption(t, n)
            }
            var Kr = function(e) {
                    var t = e.hideSelectedOptions,
                        n = e.isMulti;
                    return void 0 === t ? n : t
                },
                Jr = 1,
                Qr = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t && rr(e, t)
                    }(a, e);
                    var t, n, r, i = ar(a);

                    function a(e) {
                        var t;
                        if (function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, a), (t = i.call(this, e)).state = {
                                ariaSelection: null,
                                focusedOption: null,
                                focusedValue: null,
                                inputIsHidden: !1,
                                isFocused: !1,
                                selectValue: [],
                                clearFocusValueOnUpdate: !1,
                                prevWasFocused: !1,
                                inputIsHiddenAfterUpdate: void 0,
                                prevProps: void 0
                            }, t.blockOptionHover = !1, t.isComposing = !1, t.commonProps = void 0, t.initialTouchX = 0, t.initialTouchY = 0, t.instancePrefix = "", t.openAfterFocus = !1, t.scrollToFocusedOptionOnUpdate = !1, t.userIsDragging = void 0, t.controlRef = null, t.getControlRef = function(e) {
                                t.controlRef = e
                            }, t.focusedOptionRef = null, t.getFocusedOptionRef = function(e) {
                                t.focusedOptionRef = e
                            }, t.menuListRef = null, t.getMenuListRef = function(e) {
                                t.menuListRef = e
                            }, t.inputRef = null, t.getInputRef = function(e) {
                                t.inputRef = e
                            }, t.focus = t.focusInput, t.blur = t.blurInput, t.onChange = function(e, n) {
                                var r = t.props,
                                    i = r.onChange,
                                    a = r.name;
                                n.name = a, t.ariaOnChange(e, n), i(e, n)
                            }, t.setValue = function(e, n, r) {
                                var i = t.props,
                                    a = i.closeMenuOnSelect,
                                    o = i.isMulti,
                                    s = i.inputValue;
                                t.onInputChange("", {
                                    action: "set-value",
                                    prevInputValue: s
                                }), a && (t.setState({
                                    inputIsHiddenAfterUpdate: !o
                                }), t.onMenuClose()), t.setState({
                                    clearFocusValueOnUpdate: !0
                                }), t.onChange(e, {
                                    action: n,
                                    option: r
                                })
                            }, t.selectOption = function(e) {
                                var n = t.props,
                                    r = n.blurInputOnSelect,
                                    i = n.isMulti,
                                    a = n.name,
                                    o = t.state.selectValue,
                                    s = i && t.isOptionSelected(e, o),
                                    l = t.isOptionDisabled(e, o);
                                if (s) {
                                    var c = t.getOptionValue(e);
                                    t.setValue(o.filter((function(e) {
                                        return t.getOptionValue(e) !== c
                                    })), "deselect-option", e)
                                } else {
                                    if (l) return void t.ariaOnChange(e, {
                                        action: "select-option",
                                        option: e,
                                        name: a
                                    });
                                    i ? t.setValue([].concat(or(o), [e]), "select-option", e) : t.setValue(e, "select-option")
                                }
                                r && t.blurInput()
                            }, t.removeValue = function(e) {
                                var n = t.props.isMulti,
                                    r = t.state.selectValue,
                                    i = t.getOptionValue(e),
                                    a = r.filter((function(e) {
                                        return t.getOptionValue(e) !== i
                                    })),
                                    o = kn(n, a, a[0] || null);
                                t.onChange(o, {
                                    action: "remove-value",
                                    removedValue: e
                                }), t.focusInput()
                            }, t.clearValue = function() {
                                var e = t.state.selectValue;
                                t.onChange(kn(t.props.isMulti, [], null), {
                                    action: "clear",
                                    removedValues: e
                                })
                            }, t.popValue = function() {
                                var e = t.props.isMulti,
                                    n = t.state.selectValue,
                                    r = n[n.length - 1],
                                    i = n.slice(0, n.length - 1),
                                    a = kn(e, i, i[0] || null);
                                t.onChange(a, {
                                    action: "pop-value",
                                    removedValue: r
                                })
                            }, t.getValue = function() {
                                return t.state.selectValue
                            }, t.cx = function() {
                                for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                return cn.apply(void 0, [t.props.classNamePrefix].concat(n))
                            }, t.getOptionLabel = function(e) {
                                return Zr(t.props, e)
                            }, t.getOptionValue = function(e) {
                                return Gr(t.props, e)
                            }, t.getStyles = function(e, n) {
                                var r = t.props.unstyled,
                                    i = Hr[e](n, r);
                                i.boxSizing = "border-box";
                                var a = t.props.styles[e];
                                return a ? a(i, n) : i
                            }, t.getClassNames = function(e, n) {
                                var r, i;
                                return null === (r = (i = t.props.classNames)[e]) || void 0 === r ? void 0 : r.call(i, n)
                            }, t.getElementId = function(e) {
                                return "".concat(t.instancePrefix, "-").concat(e)
                            }, t.getComponents = function() {
                                return e = t.props, re(re({}, er), e.components);
                                var e
                            }, t.buildCategorizedOptions = function() {
                                return Ur(t.props, t.state.selectValue)
                            }, t.getCategorizedOptions = function() {
                                return t.props.menuIsOpen ? t.buildCategorizedOptions() : []
                            }, t.buildFocusableOptions = function() {
                                return $r(t.buildCategorizedOptions())
                            }, t.getFocusableOptions = function() {
                                return t.props.menuIsOpen ? t.buildFocusableOptions() : []
                            }, t.ariaOnChange = function(e, n) {
                                t.setState({
                                    ariaSelection: re({
                                        value: e
                                    }, n)
                                })
                            }, t.onMenuMouseDown = function(e) {
                                0 === e.button && (e.stopPropagation(), e.preventDefault(), t.focusInput())
                            }, t.onMenuMouseMove = function(e) {
                                t.blockOptionHover = !1
                            }, t.onControlMouseDown = function(e) {
                                if (!e.defaultPrevented) {
                                    var n = t.props.openMenuOnClick;
                                    t.state.isFocused ? t.props.menuIsOpen ? "INPUT" !== e.target.tagName && "TEXTAREA" !== e.target.tagName && t.onMenuClose() : n && t.openMenu("first") : (n && (t.openAfterFocus = !0), t.focusInput()), "INPUT" !== e.target.tagName && "TEXTAREA" !== e.target.tagName && e.preventDefault()
                                }
                            }, t.onDropdownIndicatorMouseDown = function(e) {
                                if (!(e && "mousedown" === e.type && 0 !== e.button || t.props.isDisabled)) {
                                    var n = t.props,
                                        r = n.isMulti,
                                        i = n.menuIsOpen;
                                    t.focusInput(), i ? (t.setState({
                                        inputIsHiddenAfterUpdate: !r
                                    }), t.onMenuClose()) : t.openMenu("first"), e.preventDefault()
                                }
                            }, t.onClearIndicatorMouseDown = function(e) {
                                e && "mousedown" === e.type && 0 !== e.button || (t.clearValue(), e.preventDefault(), t.openAfterFocus = !1, "touchend" === e.type ? t.focusInput() : setTimeout((function() {
                                    return t.focusInput()
                                })))
                            }, t.onScroll = function(e) {
                                "boolean" == typeof t.props.closeMenuOnScroll ? e.target instanceof HTMLElement && fn(e.target) && t.props.onMenuClose() : "function" == typeof t.props.closeMenuOnScroll && t.props.closeMenuOnScroll(e) && t.props.onMenuClose()
                            }, t.onCompositionStart = function() {
                                t.isComposing = !0
                            }, t.onCompositionEnd = function() {
                                t.isComposing = !1
                            }, t.onTouchStart = function(e) {
                                var n = e.touches,
                                    r = n && n.item(0);
                                r && (t.initialTouchX = r.clientX, t.initialTouchY = r.clientY, t.userIsDragging = !1)
                            }, t.onTouchMove = function(e) {
                                var n = e.touches,
                                    r = n && n.item(0);
                                if (r) {
                                    var i = Math.abs(r.clientX - t.initialTouchX),
                                        a = Math.abs(r.clientY - t.initialTouchY);
                                    t.userIsDragging = i > 5 || a > 5
                                }
                            }, t.onTouchEnd = function(e) {
                                t.userIsDragging || (t.controlRef && !t.controlRef.contains(e.target) && t.menuListRef && !t.menuListRef.contains(e.target) && t.blurInput(), t.initialTouchX = 0, t.initialTouchY = 0)
                            }, t.onControlTouchEnd = function(e) {
                                t.userIsDragging || t.onControlMouseDown(e)
                            }, t.onClearIndicatorTouchEnd = function(e) {
                                t.userIsDragging || t.onClearIndicatorMouseDown(e)
                            }, t.onDropdownIndicatorTouchEnd = function(e) {
                                t.userIsDragging || t.onDropdownIndicatorMouseDown(e)
                            }, t.handleInputChange = function(e) {
                                var n = t.props.inputValue,
                                    r = e.currentTarget.value;
                                t.setState({
                                    inputIsHiddenAfterUpdate: !1
                                }), t.onInputChange(r, {
                                    action: "input-change",
                                    prevInputValue: n
                                }), t.props.menuIsOpen || t.onMenuOpen()
                            }, t.onInputFocus = function(e) {
                                t.props.onFocus && t.props.onFocus(e), t.setState({
                                    inputIsHiddenAfterUpdate: !1,
                                    isFocused: !0
                                }), (t.openAfterFocus || t.props.openMenuOnFocus) && t.openMenu("first"), t.openAfterFocus = !1
                            }, t.onInputBlur = function(e) {
                                var n = t.props.inputValue;
                                t.menuListRef && t.menuListRef.contains(document.activeElement) ? t.inputRef.focus() : (t.props.onBlur && t.props.onBlur(e), t.onInputChange("", {
                                    action: "input-blur",
                                    prevInputValue: n
                                }), t.onMenuClose(), t.setState({
                                    focusedValue: null,
                                    isFocused: !1
                                }))
                            }, t.onOptionHover = function(e) {
                                t.blockOptionHover || t.state.focusedOption === e || t.setState({
                                    focusedOption: e
                                })
                            }, t.shouldHideSelectedOptions = function() {
                                return Kr(t.props)
                            }, t.onValueInputFocus = function(e) {
                                e.preventDefault(), e.stopPropagation(), t.focus()
                            }, t.onKeyDown = function(e) {
                                var n = t.props,
                                    r = n.isMulti,
                                    i = n.backspaceRemovesValue,
                                    a = n.escapeClearsValue,
                                    o = n.inputValue,
                                    s = n.isClearable,
                                    l = n.isDisabled,
                                    c = n.menuIsOpen,
                                    u = n.onKeyDown,
                                    d = n.tabSelectsValue,
                                    p = n.openMenuOnFocus,
                                    f = t.state,
                                    h = f.focusedOption,
                                    m = f.focusedValue,
                                    g = f.selectValue;
                                if (!(l || "function" == typeof u && (u(e), e.defaultPrevented))) {
                                    switch (t.blockOptionHover = !0, e.key) {
                                        case "ArrowLeft":
                                            if (!r || o) return;
                                            t.focusValue("previous");
                                            break;
                                        case "ArrowRight":
                                            if (!r || o) return;
                                            t.focusValue("next");
                                            break;
                                        case "Delete":
                                        case "Backspace":
                                            if (o) return;
                                            if (m) t.removeValue(m);
                                            else {
                                                if (!i) return;
                                                r ? t.popValue() : s && t.clearValue()
                                            }
                                            break;
                                        case "Tab":
                                            if (t.isComposing) return;
                                            if (e.shiftKey || !c || !d || !h || p && t.isOptionSelected(h, g)) return;
                                            t.selectOption(h);
                                            break;
                                        case "Enter":
                                            if (229 === e.keyCode) break;
                                            if (c) {
                                                if (!h) return;
                                                if (t.isComposing) return;
                                                t.selectOption(h);
                                                break
                                            }
                                            return;
                                        case "Escape":
                                            c ? (t.setState({
                                                inputIsHiddenAfterUpdate: !1
                                            }), t.onInputChange("", {
                                                action: "menu-close",
                                                prevInputValue: o
                                            }), t.onMenuClose()) : s && a && t.clearValue();
                                            break;
                                        case " ":
                                            if (o) return;
                                            if (!c) {
                                                t.openMenu("first");
                                                break
                                            }
                                            if (!h) return;
                                            t.selectOption(h);
                                            break;
                                        case "ArrowUp":
                                            c ? t.focusOption("up") : t.openMenu("last");
                                            break;
                                        case "ArrowDown":
                                            c ? t.focusOption("down") : t.openMenu("first");
                                            break;
                                        case "PageUp":
                                            if (!c) return;
                                            t.focusOption("pageup");
                                            break;
                                        case "PageDown":
                                            if (!c) return;
                                            t.focusOption("pagedown");
                                            break;
                                        case "Home":
                                            if (!c) return;
                                            t.focusOption("first");
                                            break;
                                        case "End":
                                            if (!c) return;
                                            t.focusOption("last");
                                            break;
                                        default:
                                            return
                                    }
                                    e.preventDefault()
                                }
                            }, t.instancePrefix = "react-select-" + (t.props.instanceId || ++Jr), t.state.selectValue = un(e.value), e.menuIsOpen && t.state.selectValue.length) {
                            var n = t.buildFocusableOptions(),
                                r = n.indexOf(t.state.selectValue[0]);
                            t.state.focusedOption = n[r]
                        }
                        return t
                    }
                    return t = a, n = [{
                        key: "componentDidMount",
                        value: function() {
                            this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && vn(this.menuListRef, this.focusedOptionRef)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            var t = this.props,
                                n = t.isDisabled,
                                r = t.menuIsOpen,
                                i = this.state.isFocused;
                            (i && !n && e.isDisabled || i && r && !e.menuIsOpen) && this.focusInput(), i && n && !e.isDisabled ? this.setState({
                                isFocused: !1
                            }, this.onMenuClose) : i || n || !e.isDisabled || this.inputRef !== document.activeElement || this.setState({
                                isFocused: !0
                            }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && (vn(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.stopListeningComposition(), this.stopListeningToTouch(), document.removeEventListener("scroll", this.onScroll, !0)
                        }
                    }, {
                        key: "onMenuOpen",
                        value: function() {
                            this.props.onMenuOpen()
                        }
                    }, {
                        key: "onMenuClose",
                        value: function() {
                            this.onInputChange("", {
                                action: "menu-close",
                                prevInputValue: this.props.inputValue
                            }), this.props.onMenuClose()
                        }
                    }, {
                        key: "onInputChange",
                        value: function(e, t) {
                            this.props.onInputChange(e, t)
                        }
                    }, {
                        key: "focusInput",
                        value: function() {
                            this.inputRef && this.inputRef.focus()
                        }
                    }, {
                        key: "blurInput",
                        value: function() {
                            this.inputRef && this.inputRef.blur()
                        }
                    }, {
                        key: "openMenu",
                        value: function(e) {
                            var t = this,
                                n = this.state,
                                r = n.selectValue,
                                i = n.isFocused,
                                a = this.buildFocusableOptions(),
                                o = "first" === e ? 0 : a.length - 1;
                            if (!this.props.isMulti) {
                                var s = a.indexOf(r[0]);
                                s > -1 && (o = s)
                            }
                            this.scrollToFocusedOptionOnUpdate = !(i && this.menuListRef), this.setState({
                                inputIsHiddenAfterUpdate: !1,
                                focusedValue: null,
                                focusedOption: a[o]
                            }, (function() {
                                return t.onMenuOpen()
                            }))
                        }
                    }, {
                        key: "focusValue",
                        value: function(e) {
                            var t = this.state,
                                n = t.selectValue,
                                r = t.focusedValue;
                            if (this.props.isMulti) {
                                this.setState({
                                    focusedOption: null
                                });
                                var i = n.indexOf(r);
                                r || (i = -1);
                                var a = n.length - 1,
                                    o = -1;
                                if (n.length) {
                                    switch (e) {
                                        case "previous":
                                            o = 0 === i ? 0 : -1 === i ? a : i - 1;
                                            break;
                                        case "next":
                                            i > -1 && i < a && (o = i + 1)
                                    }
                                    this.setState({
                                        inputIsHidden: -1 !== o,
                                        focusedValue: n[o]
                                    })
                                }
                            }
                        }
                    }, {
                        key: "focusOption",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "first",
                                t = this.props.pageSize,
                                n = this.state.focusedOption,
                                r = this.getFocusableOptions();
                            if (r.length) {
                                var i = 0,
                                    a = r.indexOf(n);
                                n || (a = -1), "up" === e ? i = a > 0 ? a - 1 : r.length - 1 : "down" === e ? i = (a + 1) % r.length : "pageup" === e ? (i = a - t) < 0 && (i = 0) : "pagedown" === e ? (i = a + t) > r.length - 1 && (i = r.length - 1) : "last" === e && (i = r.length - 1), this.scrollToFocusedOptionOnUpdate = !0, this.setState({
                                    focusedOption: r[i],
                                    focusedValue: null
                                })
                            }
                        }
                    }, {
                        key: "getTheme",
                        value: function() {
                            return this.props.theme ? "function" == typeof this.props.theme ? this.props.theme(Fr) : re(re({}, Fr), this.props.theme) : Fr
                        }
                    }, {
                        key: "getCommonProps",
                        value: function() {
                            var e = this.clearValue,
                                t = this.cx,
                                n = this.getStyles,
                                r = this.getClassNames,
                                i = this.getValue,
                                a = this.selectOption,
                                o = this.setValue,
                                s = this.props,
                                l = s.isMulti,
                                c = s.isRtl,
                                u = s.options;
                            return {
                                clearValue: e,
                                cx: t,
                                getStyles: n,
                                getClassNames: r,
                                getValue: i,
                                hasValue: this.hasValue(),
                                isMulti: l,
                                isRtl: c,
                                options: u,
                                selectOption: a,
                                selectProps: s,
                                setValue: o,
                                theme: this.getTheme()
                            }
                        }
                    }, {
                        key: "hasValue",
                        value: function() {
                            return this.state.selectValue.length > 0
                        }
                    }, {
                        key: "hasOptions",
                        value: function() {
                            return !!this.getFocusableOptions().length
                        }
                    }, {
                        key: "isClearable",
                        value: function() {
                            var e = this.props,
                                t = e.isClearable,
                                n = e.isMulti;
                            return void 0 === t ? n : t
                        }
                    }, {
                        key: "isOptionDisabled",
                        value: function(e, t) {
                            return qr(this.props, e, t)
                        }
                    }, {
                        key: "isOptionSelected",
                        value: function(e, t) {
                            return Yr(this.props, e, t)
                        }
                    }, {
                        key: "filterOption",
                        value: function(e, t) {
                            return Xr(this.props, e, t)
                        }
                    }, {
                        key: "formatOptionLabel",
                        value: function(e, t) {
                            if ("function" == typeof this.props.formatOptionLabel) {
                                var n = this.props.inputValue,
                                    r = this.state.selectValue;
                                return this.props.formatOptionLabel(e, {
                                    context: t,
                                    inputValue: n,
                                    selectValue: r
                                })
                            }
                            return this.getOptionLabel(e)
                        }
                    }, {
                        key: "formatGroupLabel",
                        value: function(e) {
                            return this.props.formatGroupLabel(e)
                        }
                    }, {
                        key: "startListeningComposition",
                        value: function() {
                            document && document.addEventListener && (document.addEventListener("compositionstart", this.onCompositionStart, !1), document.addEventListener("compositionend", this.onCompositionEnd, !1))
                        }
                    }, {
                        key: "stopListeningComposition",
                        value: function() {
                            document && document.removeEventListener && (document.removeEventListener("compositionstart", this.onCompositionStart), document.removeEventListener("compositionend", this.onCompositionEnd))
                        }
                    }, {
                        key: "startListeningToTouch",
                        value: function() {
                            document && document.addEventListener && (document.addEventListener("touchstart", this.onTouchStart, !1), document.addEventListener("touchmove", this.onTouchMove, !1), document.addEventListener("touchend", this.onTouchEnd, !1))
                        }
                    }, {
                        key: "stopListeningToTouch",
                        value: function() {
                            document && document.removeEventListener && (document.removeEventListener("touchstart", this.onTouchStart), document.removeEventListener("touchmove", this.onTouchMove), document.removeEventListener("touchend", this.onTouchEnd))
                        }
                    }, {
                        key: "renderInput",
                        value: function() {
                            var e = this.props,
                                t = e.isDisabled,
                                n = e.isSearchable,
                                r = e.inputId,
                                i = e.inputValue,
                                a = e.tabIndex,
                                o = e.form,
                                s = e.menuIsOpen,
                                l = e.required,
                                c = this.getComponents().Input,
                                u = this.state,
                                d = u.inputIsHidden,
                                p = u.ariaSelection,
                                f = this.commonProps,
                                h = r || this.getElementId("input"),
                                m = re(re(re({
                                    "aria-autocomplete": "list",
                                    "aria-expanded": s,
                                    "aria-haspopup": !0,
                                    "aria-errormessage": this.props["aria-errormessage"],
                                    "aria-invalid": this.props["aria-invalid"],
                                    "aria-label": this.props["aria-label"],
                                    "aria-labelledby": this.props["aria-labelledby"],
                                    "aria-required": l,
                                    role: "combobox"
                                }, s && {
                                    "aria-controls": this.getElementId("listbox"),
                                    "aria-owns": this.getElementId("listbox")
                                }), !n && {
                                    "aria-readonly": !0
                                }), this.hasValue() ? "initial-input-focus" === (null == p ? void 0 : p.action) && {
                                    "aria-describedby": this.getElementId("live-region")
                                } : {
                                    "aria-describedby": this.getElementId("placeholder")
                                });
                            return n ? ae.createElement(c, ie({}, f, {
                                autoCapitalize: "none",
                                autoComplete: "off",
                                autoCorrect: "off",
                                id: h,
                                innerRef: this.getInputRef,
                                isDisabled: t,
                                isHidden: d,
                                onBlur: this.onInputBlur,
                                onChange: this.handleInputChange,
                                onFocus: this.onInputFocus,
                                spellCheck: "false",
                                tabIndex: a,
                                form: o,
                                type: "text",
                                value: i
                            }, m)) : ae.createElement(xr, ie({
                                id: h,
                                innerRef: this.getInputRef,
                                onBlur: this.onInputBlur,
                                onChange: sn,
                                onFocus: this.onInputFocus,
                                disabled: t,
                                tabIndex: a,
                                inputMode: "none",
                                form: o,
                                value: ""
                            }, m))
                        }
                    }, {
                        key: "renderPlaceholderOrValue",
                        value: function() {
                            var e = this,
                                t = this.getComponents(),
                                n = t.MultiValue,
                                r = t.MultiValueContainer,
                                i = t.MultiValueLabel,
                                a = t.MultiValueRemove,
                                o = t.SingleValue,
                                s = t.Placeholder,
                                l = this.commonProps,
                                c = this.props,
                                u = c.controlShouldRenderValue,
                                d = c.isDisabled,
                                p = c.isMulti,
                                f = c.inputValue,
                                h = c.placeholder,
                                m = this.state,
                                g = m.selectValue,
                                v = m.focusedValue,
                                b = m.isFocused;
                            if (!this.hasValue() || !u) return f ? null : ae.createElement(s, ie({}, l, {
                                key: "placeholder",
                                isDisabled: d,
                                isFocused: b,
                                innerProps: {
                                    id: this.getElementId("placeholder")
                                }
                            }), h);
                            if (p) return g.map((function(t, o) {
                                var s = t === v,
                                    c = "".concat(e.getOptionLabel(t), "-").concat(e.getOptionValue(t));
                                return ae.createElement(n, ie({}, l, {
                                    components: {
                                        Container: r,
                                        Label: i,
                                        Remove: a
                                    },
                                    isFocused: s,
                                    isDisabled: d,
                                    key: c,
                                    index: o,
                                    removeProps: {
                                        onClick: function() {
                                            return e.removeValue(t)
                                        },
                                        onTouchEnd: function() {
                                            return e.removeValue(t)
                                        },
                                        onMouseDown: function(e) {
                                            e.preventDefault()
                                        }
                                    },
                                    data: t
                                }), e.formatOptionLabel(t, "value"))
                            }));
                            if (f) return null;
                            var y = g[0];
                            return ae.createElement(o, ie({}, l, {
                                data: y,
                                isDisabled: d
                            }), this.formatOptionLabel(y, "value"))
                        }
                    }, {
                        key: "renderClearIndicator",
                        value: function() {
                            var e = this.getComponents().ClearIndicator,
                                t = this.commonProps,
                                n = this.props,
                                r = n.isDisabled,
                                i = n.isLoading,
                                a = this.state.isFocused;
                            if (!this.isClearable() || !e || r || !this.hasValue() || i) return null;
                            var o = {
                                onMouseDown: this.onClearIndicatorMouseDown,
                                onTouchEnd: this.onClearIndicatorTouchEnd,
                                "aria-hidden": "true"
                            };
                            return ae.createElement(e, ie({}, t, {
                                innerProps: o,
                                isFocused: a
                            }))
                        }
                    }, {
                        key: "renderLoadingIndicator",
                        value: function() {
                            var e = this.getComponents().LoadingIndicator,
                                t = this.commonProps,
                                n = this.props,
                                r = n.isDisabled,
                                i = n.isLoading,
                                a = this.state.isFocused;
                            return e && i ? ae.createElement(e, ie({}, t, {
                                innerProps: {
                                    "aria-hidden": "true"
                                },
                                isDisabled: r,
                                isFocused: a
                            })) : null
                        }
                    }, {
                        key: "renderIndicatorSeparator",
                        value: function() {
                            var e = this.getComponents(),
                                t = e.DropdownIndicator,
                                n = e.IndicatorSeparator;
                            if (!t || !n) return null;
                            var r = this.commonProps,
                                i = this.props.isDisabled,
                                a = this.state.isFocused;
                            return ae.createElement(n, ie({}, r, {
                                isDisabled: i,
                                isFocused: a
                            }))
                        }
                    }, {
                        key: "renderDropdownIndicator",
                        value: function() {
                            var e = this.getComponents().DropdownIndicator;
                            if (!e) return null;
                            var t = this.commonProps,
                                n = this.props.isDisabled,
                                r = this.state.isFocused,
                                i = {
                                    onMouseDown: this.onDropdownIndicatorMouseDown,
                                    onTouchEnd: this.onDropdownIndicatorTouchEnd,
                                    "aria-hidden": "true"
                                };
                            return ae.createElement(e, ie({}, t, {
                                innerProps: i,
                                isDisabled: n,
                                isFocused: r
                            }))
                        }
                    }, {
                        key: "renderMenu",
                        value: function() {
                            var e = this,
                                t = this.getComponents(),
                                n = t.Group,
                                r = t.GroupHeading,
                                i = t.Menu,
                                a = t.MenuList,
                                o = t.MenuPortal,
                                s = t.LoadingMessage,
                                l = t.NoOptionsMessage,
                                c = t.Option,
                                u = this.commonProps,
                                d = this.state.focusedOption,
                                p = this.props,
                                f = p.captureMenuScroll,
                                h = p.inputValue,
                                m = p.isLoading,
                                g = p.loadingMessage,
                                v = p.minMenuHeight,
                                b = p.maxMenuHeight,
                                y = p.menuIsOpen,
                                C = p.menuPlacement,
                                _ = p.menuPosition,
                                E = p.menuPortalTarget,
                                w = p.menuShouldBlockScroll,
                                x = p.menuShouldScrollIntoView,
                                k = p.noOptionsMessage,
                                S = p.onMenuScrollToTop,
                                O = p.onMenuScrollToBottom;
                            if (!y) return null;
                            var M, T = function(t, n) {
                                var r = t.type,
                                    i = t.data,
                                    a = t.isDisabled,
                                    o = t.isSelected,
                                    s = t.label,
                                    l = t.value,
                                    p = d === i,
                                    f = a ? void 0 : function() {
                                        return e.onOptionHover(i)
                                    },
                                    h = a ? void 0 : function() {
                                        return e.selectOption(i)
                                    },
                                    m = "".concat(e.getElementId("option"), "-").concat(n),
                                    g = {
                                        id: m,
                                        onClick: h,
                                        onMouseMove: f,
                                        onMouseOver: f,
                                        tabIndex: -1
                                    };
                                return ae.createElement(c, ie({}, u, {
                                    innerProps: g,
                                    data: i,
                                    isDisabled: a,
                                    isSelected: o,
                                    key: m,
                                    label: s,
                                    type: r,
                                    value: l,
                                    isFocused: p,
                                    innerRef: p ? e.getFocusedOptionRef : void 0
                                }), e.formatOptionLabel(t.data, "menu"))
                            };
                            if (this.hasOptions()) M = this.getCategorizedOptions().map((function(t) {
                                if ("group" === t.type) {
                                    var i = t.data,
                                        a = t.options,
                                        o = t.index,
                                        s = "".concat(e.getElementId("group"), "-").concat(o),
                                        l = "".concat(s, "-heading");
                                    return ae.createElement(n, ie({}, u, {
                                        key: s,
                                        data: i,
                                        options: a,
                                        Heading: r,
                                        headingProps: {
                                            id: l,
                                            data: t.data
                                        },
                                        label: e.formatGroupLabel(t.data)
                                    }), t.options.map((function(e) {
                                        return T(e, "".concat(o, "-").concat(e.index))
                                    })))
                                }
                                if ("option" === t.type) return T(t, "".concat(t.index))
                            }));
                            else if (m) {
                                var L = g({
                                    inputValue: h
                                });
                                if (null === L) return null;
                                M = ae.createElement(s, u, L)
                            } else {
                                var I = k({
                                    inputValue: h
                                });
                                if (null === I) return null;
                                M = ae.createElement(l, u, I)
                            }
                            var z = {
                                    minMenuHeight: v,
                                    maxMenuHeight: b,
                                    menuPlacement: C,
                                    menuPosition: _,
                                    menuShouldScrollIntoView: x
                                },
                                P = ae.createElement(Pn, ie({}, u, z), (function(t) {
                                    var n = t.ref,
                                        r = t.placerProps,
                                        o = r.placement,
                                        s = r.maxHeight;
                                    return ae.createElement(i, ie({}, u, z, {
                                        innerRef: n,
                                        innerProps: {
                                            onMouseDown: e.onMenuMouseDown,
                                            onMouseMove: e.onMenuMouseMove,
                                            id: e.getElementId("listbox")
                                        },
                                        isLoading: m,
                                        placement: o
                                    }), ae.createElement(Rr, {
                                        captureEnabled: f,
                                        onTopArrive: S,
                                        onBottomArrive: O,
                                        lockEnabled: w
                                    }, (function(t) {
                                        return ae.createElement(a, ie({}, u, {
                                            innerRef: function(n) {
                                                e.getMenuListRef(n), t(n)
                                            },
                                            isLoading: m,
                                            maxHeight: s,
                                            focusedOption: d
                                        }), M)
                                    })))
                                }));
                            return E || "fixed" === _ ? ae.createElement(o, ie({}, u, {
                                appendTo: E,
                                controlElement: this.controlRef,
                                menuPlacement: C,
                                menuPosition: _
                            }), P) : P
                        }
                    }, {
                        key: "renderFormField",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.delimiter,
                                r = t.isDisabled,
                                i = t.isMulti,
                                a = t.name,
                                o = t.required,
                                s = this.state.selectValue;
                            if (o && !this.hasValue() && !r) return ae.createElement(Dr, {
                                name: a,
                                onFocus: this.onValueInputFocus
                            });
                            if (a && !r) {
                                if (i) {
                                    if (n) {
                                        var l = s.map((function(t) {
                                            return e.getOptionValue(t)
                                        })).join(n);
                                        return ae.createElement("input", {
                                            name: a,
                                            type: "hidden",
                                            value: l
                                        })
                                    }
                                    var c = s.length > 0 ? s.map((function(t, n) {
                                        return ae.createElement("input", {
                                            key: "i-".concat(n),
                                            name: a,
                                            type: "hidden",
                                            value: e.getOptionValue(t)
                                        })
                                    })) : ae.createElement("input", {
                                        name: a,
                                        type: "hidden",
                                        value: ""
                                    });
                                    return ae.createElement("div", null, c)
                                }
                                var u = s[0] ? this.getOptionValue(s[0]) : "";
                                return ae.createElement("input", {
                                    name: a,
                                    type: "hidden",
                                    value: u
                                })
                            }
                        }
                    }, {
                        key: "renderLiveRegion",
                        value: function() {
                            var e = this.commonProps,
                                t = this.state,
                                n = t.ariaSelection,
                                r = t.focusedOption,
                                i = t.focusedValue,
                                a = t.isFocused,
                                o = t.selectValue,
                                s = this.getFocusableOptions();
                            return ae.createElement(pr, ie({}, e, {
                                id: this.getElementId("live-region"),
                                ariaSelection: n,
                                focusedOption: r,
                                focusedValue: i,
                                isFocused: a,
                                selectValue: o,
                                focusableOptions: s
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.getComponents(),
                                t = e.Control,
                                n = e.IndicatorsContainer,
                                r = e.SelectContainer,
                                i = e.ValueContainer,
                                a = this.props,
                                o = a.className,
                                s = a.id,
                                l = a.isDisabled,
                                c = a.menuIsOpen,
                                u = this.state.isFocused,
                                d = this.commonProps = this.getCommonProps();
                            return ae.createElement(r, ie({}, d, {
                                className: o,
                                innerProps: {
                                    id: s,
                                    onKeyDown: this.onKeyDown
                                },
                                isDisabled: l,
                                isFocused: u
                            }), this.renderLiveRegion(), ae.createElement(t, ie({}, d, {
                                innerRef: this.getControlRef,
                                innerProps: {
                                    onMouseDown: this.onControlMouseDown,
                                    onTouchEnd: this.onControlTouchEnd
                                },
                                isDisabled: l,
                                isFocused: u,
                                menuIsOpen: c
                            }), ae.createElement(i, ie({}, d, {
                                isDisabled: l
                            }), this.renderPlaceholderOrValue(), this.renderInput()), ae.createElement(n, ie({}, d, {
                                isDisabled: l
                            }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField())
                        }
                    }], r = [{
                        key: "getDerivedStateFromProps",
                        value: function(e, t) {
                            var n = t.prevProps,
                                r = t.clearFocusValueOnUpdate,
                                i = t.inputIsHiddenAfterUpdate,
                                a = t.ariaSelection,
                                o = t.isFocused,
                                s = t.prevWasFocused,
                                l = e.options,
                                c = e.value,
                                u = e.menuIsOpen,
                                d = e.inputValue,
                                p = e.isMulti,
                                f = un(c),
                                h = {};
                            if (n && (c !== n.value || l !== n.options || u !== n.menuIsOpen || d !== n.inputValue)) {
                                var m = u ? function(e, t) {
                                        return $r(Ur(e, t))
                                    }(e, f) : [],
                                    g = r ? function(e, t) {
                                        var n = e.focusedValue,
                                            r = e.selectValue.indexOf(n);
                                        if (r > -1) {
                                            if (t.indexOf(n) > -1) return n;
                                            if (r < t.length) return t[r]
                                        }
                                        return null
                                    }(t, f) : null,
                                    v = function(e, t) {
                                        var n = e.focusedOption;
                                        return n && t.indexOf(n) > -1 ? n : t[0]
                                    }(t, m);
                                h = {
                                    selectValue: f,
                                    focusedOption: v,
                                    focusedValue: g,
                                    clearFocusValueOnUpdate: !1
                                }
                            }
                            var b = null != i && e !== n ? {
                                    inputIsHidden: i,
                                    inputIsHiddenAfterUpdate: void 0
                                } : {},
                                y = a,
                                C = o && s;
                            return o && !C && (y = {
                                value: kn(p, f, f[0] || null),
                                options: f,
                                action: "initial-input-focus"
                            }, C = !s), "initial-input-focus" === (null == a ? void 0 : a.action) && (y = null), re(re(re({}, h), b), {}, {
                                prevProps: e,
                                ariaSelection: y,
                                prevWasFocused: C
                            })
                        }
                    }], n && nr(t.prototype, n), r && nr(t, r), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), a
                }(ae.Component);
            Qr.defaultProps = jr;
            var ei = (0, ae.forwardRef)((function(e, t) {
                    var n = function(e) {
                        var t = e.defaultInputValue,
                            n = void 0 === t ? "" : t,
                            r = e.defaultMenuIsOpen,
                            i = void 0 !== r && r,
                            a = e.defaultValue,
                            o = void 0 === a ? null : a,
                            s = e.inputValue,
                            l = e.menuIsOpen,
                            c = e.onChange,
                            u = e.onInputChange,
                            d = e.onMenuClose,
                            p = e.onMenuOpen,
                            f = e.value,
                            h = Vt(e, tr),
                            m = At((0, ae.useState)(void 0 !== s ? s : n), 2),
                            g = m[0],
                            v = m[1],
                            b = At((0, ae.useState)(void 0 !== l ? l : i), 2),
                            y = b[0],
                            C = b[1],
                            _ = At((0, ae.useState)(void 0 !== f ? f : o), 2),
                            E = _[0],
                            w = _[1],
                            x = (0, ae.useCallback)((function(e, t) {
                                "function" == typeof c && c(e, t), w(e)
                            }), [c]),
                            k = (0, ae.useCallback)((function(e, t) {
                                var n;
                                "function" == typeof u && (n = u(e, t)), v(void 0 !== n ? n : e)
                            }), [u]),
                            S = (0, ae.useCallback)((function() {
                                "function" == typeof p && p(), C(!0)
                            }), [p]),
                            O = (0, ae.useCallback)((function() {
                                "function" == typeof d && d(), C(!1)
                            }), [d]),
                            M = void 0 !== s ? s : g,
                            T = void 0 !== l ? l : y,
                            L = void 0 !== f ? f : E;
                        return re(re({}, h), {}, {
                            inputValue: M,
                            menuIsOpen: T,
                            onChange: x,
                            onInputChange: k,
                            onMenuClose: O,
                            onMenuOpen: S,
                            value: L
                        })
                    }(e);
                    return ae.createElement(Qr, ie({
                        ref: t
                    }, n))
                })),
                ti = ei,
                ni = t => {
                    const {
                        filter: {
                            icon: n = null,
                            feature: r,
                            clickEvent: i = null,
                            classNames: a = [],
                            disabled: o = !1,
                            options: s = []
                        },
                        type: l = "button"
                    } = t, [c, u] = (0, e.useState)(null);
                    return "select" === l ? (() => {
                        const t = "#e2e8f0",
                            a = "#aaa",
                            l = "#50575e",
                            d = {
                                fontFamily: "Inter",
                                fontSize: "0.75rem",
                                fontWeight: "400",
                                lineHeight: "1rem"
                            },
                            p = {
                                container: e => ({ ...e,
                                    maxWidth: "100%"
                                }),
                                control: (e, n) => {
                                    let {
                                        isDisabled: r
                                    } = n;
                                    return { ...e,
                                        ...d,
                                        minHeight: "30px",
                                        height: "30px",
                                        cursor: r ? "progress" : "pointer",
                                        opacity: r ? "0.5" : "1",
                                        backgroundColor: "#fff",
                                        color: l,
                                        border: `1px solid ${t}`,
                                        borderRadius: "100px",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "6px",
                                        boxShadow: "none",
                                        "&:hover": {
                                            borderColor: a
                                        }
                                    }
                                },
                                valueContainer: e => ({ ...e,
                                    height: "30px",
                                    padding: "0 8px",
                                    display: "flex",
                                    gap: "6px",
                                    overflow: "hidden"
                                }),
                                input: e => ({ ...e,
                                    height: "30px",
                                    padding: 0,
                                    margin: 0
                                }),
                                placeholder: e => ({ ...e,
                                    ...d,
                                    color: l,
                                    margin: 0
                                }),
                                singleValue: e => ({ ...e,
                                    maxWidth: "100px"
                                }),
                                indicatorsContainer: e => ({ ...e,
                                    height: "30px"
                                }),
                                option: e => ({ ...e,
                                    ...d
                                })
                            };
                        return (0, e.createElement)("div", {
                            className: "zip-ai-sidebar__filters--select-div"
                        }, (0, e.createElement)(ti, {
                            placeholder: r,
                            options: s,
                            value: c,
                            onChange: e => (e => {
                                i(e), u(null)
                            })(e),
                            isDisabled: o,
                            isSearchable: !0,
                            isMulti: !1,
                            isOpen: !0,
                            menuPlacement: "top",
                            components: {
                                ValueContainer: t => {
                                    let {
                                        children: r,
                                        ...i
                                    } = t;
                                    return er.ValueContainer && (0, e.createElement)(er.ValueContainer, i, !!r && n, r)
                                }
                            },
                            styles: p
                        }))
                    })() : (0, e.createElement)("button", {
                        className: L(["zip-ai-sidebar__filters--label", ...a]),
                        onClick: i,
                        disabled: o
                    }, n, r)
                },
                ri = t => {
                    const {
                        generationRef: n,
                        currentText: r,
                        setUserInput: i,
                        refreshFilters: a,
                        setRefreshFilters: o,
                        generating: s,
                        setGenerating: l,
                        setAiResponseError: c,
                        setValidForSaving: u
                    } = t, {
                        chatLog: d,
                        setChatLog: p
                    } = (0, e.useContext)(D), f = e => {
                        let {
                            textCommand: t,
                            oneClickCommand: n,
                            useSystemMessage: a
                        } = e;
                        const s = F(d, r);
                        $({
                            textContent: s,
                            textCommand: t,
                            setGenerating: l,
                            setText: i,
                            setRefreshFilters: o,
                            setAiResponseError: c,
                            chatLog: d,
                            setChatLog: p,
                            oneClickCommand: n,
                            setValidForSaving: u,
                            useSystemMessage: a
                        })
                    }, h = ((e, t) => ({
                        title: (0, P.__)("Draft with AI", "zip-ai"),
                        filters: [{
                            feature: (0, P.__)("Write an attractive heading about…", "zip-ai"),
                            clickEvent: () => {
                                X((0, P.__)("Write an attractive heading about ", "zip-ai"), e, t)
                            }
                        }, {
                            feature: (0, P.__)("Write a sub-heading for…", "zip-ai"),
                            clickEvent: () => {
                                X((0, P.__)("Write a sub-heading for ", "zip-ai"), e, t)
                            }
                        }]
                    }))(i, n), m = (e => ({
                        filters: [{
                            icon: y(Y),
                            feature: (0, P.__)("Fix Grammar", "zip-ai"),
                            clickEvent: () => {
                                e({
                                    textCommand: "Fix the grammar and any spelling mistakes in the last message.",
                                    oneClickCommand: (0, P.__)("Fix any grammatical mistakes.", "zip-ai"),
                                    useSystemMessage: !1
                                })
                            }
                        }, {
                            icon: k({
                                width: 14,
                                height: 14,
                                ...Y
                            }),
                            feature: (0, P.__)("Make Longer", "zip-ai"),
                            clickEvent: () => {
                                e({
                                    textCommand: "Rewrite it by making it 5 to 10 words longer - and keep it in the same language as the last message.",
                                    oneClickCommand: (0, P.__)("Make it longer.", "zip-ai"),
                                    useSystemMessage: !1
                                })
                            }
                        }, {
                            icon: S(Y),
                            feature: (0, P.__)("Make Shorter", "zip-ai"),
                            clickEvent: () => {
                                e({
                                    textCommand: "Make it shorter - and keep it in the same language as the last message.",
                                    oneClickCommand: (0, P.__)("Make it shorter.", "zip-ai"),
                                    useSystemMessage: !1
                                })
                            }
                        }]
                    }))(f), g = (e => ({
                        filters: [{
                            icon: T(Y),
                            feature: (0, P.__)("Translate", "zip-ai"),
                            options: K,
                            clickEvent: t => {
                                e({
                                    textCommand: `Translate it to ${t.value}.`
                                        /* translators: %s: language name */
                                        ,
                                    oneClickCommand: (0, P.sprintf)((0, P.__)("Translate to %s.", "zip-ai"), t.label),
                                    useSystemMessage: !1
                                })
                            }
                        }, {
                            icon: M(Y),
                            feature: (0, P.__)("Change Tone", "zip-ai"),
                            options: J,
                            clickEvent: t => {
                                e({
                                    textCommand: `Rewrite in a ${t.value} tone - keep it in the same language, and keep it the exact same length.`
                                        /* translators: %s: tone name */
                                        ,
                                    oneClickCommand: (0, P.sprintf)((0, P.__)("Change tone to %s.", "zip-ai"), t.label),
                                    useSystemMessage: !1
                                })
                            }
                        }]
                    }))(f), [v, b] = (0, e.useState)(r || d ? .length ? m : h), C = navigator ? .clipboard && !d ? .length && {
                        feature: (0, P.__)("Paste from clipboard", "zip-ai"),
                        clickEvent: async () => {
                            l(!0);
                            const e = await navigator.clipboard.readText().then((e => e)).catch((() => ""));
                            e && (d.push({
                                id: 0,
                                from: "content",
                                message: e
                            }), p([...d]), o(!0)), l(!1)
                        }
                    }, [_, E] = (0, e.useState)(r || d ? .length ? g : []);
                    return (0, e.useEffect)((() => {
                        a && (o(!1), b(r || d ? .length ? m : h), E(r || d ? .length ? g : []))
                    }), [a]), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__filters"
                    }, (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__filters--section"
                    }, v.filters.map(((t, n) => (0, e.createElement)(ni, {
                        key: n,
                        filter: { ...t,
                            disabled: s
                        }
                    }))), C && (0, e.createElement)(ni, {
                        filter: { ...C,
                            disabled: s
                        }
                    })), _ ? .filters ? .length > 0 && (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__filters--section"
                    }, _.filters.map(((t, n) => (0, e.createElement)(ni, {
                        type: "select",
                        key: n,
                        filter: { ...t,
                            disabled: s
                        }
                    })))))
                },
                ii = t => {
                    const {
                        setIsAuthorized: n
                    } = t, [r, i] = (0, e.useState)((0, P.__)("Get Started with 1000 Free Monthly Credits", "zip-ai")), [a, o] = (0, e.useState)((0, P.__)("The possibilities are endless!", "zip-ai"));
                    let s = zip_ai_react ? .collab_product_details;
                    "object" == typeof s && null !== s || (s = {
                        product_primary_color: "#007cba"
                    });
                    const {
                        product_name: c,
                        product_logo: u,
                        product_primary_color: b,
                        ai_assistant_learn_more_url: y
                    } = s;
                    return (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window"
                    }, (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder"
                    }, (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder-logos"
                    }, u && (0, e.createElement)(e.Fragment, null, G(u), (0, e.createElement)("svg", {
                        width: "13",
                        height: "12",
                        viewBox: "0 0 13 12",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, (0, e.createElement)("path", {
                        d: "M12.3125 5.75C12.3125 6.24219 11.9023 6.65234 11.4375 6.65234H7.5V10.5898C7.5 11.0547 7.08984 11.4375 6.625 11.4375C6.13281 11.4375 5.75 11.0547 5.75 10.5898V6.65234H1.8125C1.32031 6.65234 0.9375 6.24219 0.9375 5.75C0.9375 5.28516 1.32031 4.90234 1.8125 4.90234H5.75V0.964844C5.75 0.472656 6.13281 0.0625 6.625 0.0625C7.08984 0.0625 7.5 0.472656 7.5 0.964844V4.90234H11.4375C11.9023 4.875 12.3125 5.28516 12.3125 5.75Z",
                        fill: "#555d66"
                    }))), v({
                        width: 32,
                        height: 32,
                        color: "#ff580e"
                    })), (0, e.createElement)("h3", {
                        className: "zip-ai-sidebar__chat-window--placeholder-heading"
                    }, c ? (0, P.sprintf)( /* translators: %s: Plugin Name */
                        (0, P.__)("Build 10x Faster with %s & ZipWP", "zip-ai"), c) : (0, P.__)("Build 10x Faster with ZipWP", "zip-ai")), (0, e.createElement)("p", {
                        className: "zip-ai-sidebar__chat-window--placeholder-subheading"
                    }, c ? (0, P.sprintf)( /* translators: %s: Plugin Name */
                        (0, P.__)("%s offers AI features powered by ZipWP to help you build your website 10 times faster.", "zip-ai"), c) : (0, P.__)("ZipWP offers AI features to help you build your website 10 times faster.", "zip-ai")), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder-grid"
                    }, (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder-grid-item"
                    }, function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return (0, e.createElement)("svg", {
                            width: l,
                            height: l,
                            viewBox: "0 0 20 20",
                            fill: f,
                            ...t
                        }, (0, e.createElement)("g", {
                            clipPath: "url(#zip_ai_translucent_set_translate_clip)"
                        }, (0, e.createElement)("mask", {
                            id: "zip_ai_translucent_set_translate_mask",
                            style: {
                                maskType: "luminance"
                            },
                            maskUnits: "userSpaceOnUse",
                            x: 0,
                            y: 0,
                            width: 20,
                            height: 20
                        }, (0, e.createElement)("path", {
                            d: "M20 0H0V20H20V0Z",
                            fill: f
                        })), (0, e.createElement)("g", {
                            mask: "url(#zip_ai_translucent_set_translate_mask)"
                        }, (0, e.createElement)("path", {
                            d: "M17.0894 9.95182e-08H2.86902C2.10845 0.0011001 1.37934 0.303724 0.841531 0.841531C0.303724 1.37934 0.00109989 2.10845 0 2.86902V17.131C0.00109989 17.8915 0.303724 18.6207 0.841531 19.1584C1.37934 19.6963 2.10845 19.9989 2.86902 20H17.131C17.8916 19.9989 18.6207 19.6963 19.1584 19.1584C19.6962 18.6207 19.9989 17.8915 20 17.131V2.84407C19.9826 2.08372 19.6683 1.36038 19.1243 0.828843C18.5804 0.297306 17.8499 -0.00019865 17.0894 9.95182e-08Z",
                            ...g,
                            fill: h
                        })), (0, e.createElement)("path", {
                            d: "M15.2118 6.56641H9.524L10.3498 13.3547L8.85156 15.1588L9.096 15.5257H15.2118L15.6702 15.1588V6.99453L15.2118 6.56641Z",
                            ...g,
                            fillOpacity: .25
                        }), (0, e.createElement)("path", {
                            d: "M8.60323 10.2789C8.58423 10.1838 7.92954 6.91022 7.90873 6.80647C7.87635 6.64416 7.73379 6.52734 7.56829 6.52734H6.87379C6.70829 6.52734 6.56573 6.64416 6.53329 6.80647C6.51223 6.91197 5.85685 10.1888 5.83884 10.2788C5.80123 10.467 5.9232 10.6498 6.11124 10.6875C6.29929 10.7251 6.48223 10.6031 6.51985 10.415L6.74179 9.30528H7.70029L7.92223 10.4151C7.95985 10.6032 8.14292 10.7251 8.33085 10.6875C8.51885 10.6498 8.64085 10.467 8.60323 10.2789ZM6.88067 8.61078L7.15848 7.22184H7.2836L7.56142 8.61078H6.88067Z",
                            ...g
                        }), (0, e.createElement)("path", {
                            d: "M14.1681 9.30583H13.1264V8.95858C13.1264 8.76683 12.9709 8.61133 12.7792 8.61133C12.5874 8.61133 12.4319 8.76683 12.4319 8.95858V9.30583H11.3902C11.1984 9.30583 11.043 9.46127 11.043 9.65308C11.043 9.84483 11.1984 10.0003 11.3902 10.0003H11.4742C11.6721 10.6395 11.97 11.1301 12.2978 11.5233C12.031 11.7673 11.761 11.9675 11.5205 12.1598C11.3708 12.2796 11.3465 12.4981 11.4663 12.6479C11.5862 12.7977 11.8047 12.8218 11.9543 12.7021C12.1962 12.5086 12.486 12.2936 12.7792 12.0246C13.0725 12.2938 13.3628 12.5092 13.604 12.7021C13.7537 12.8219 13.9722 12.7976 14.092 12.6479C14.2118 12.4981 14.1875 12.2796 14.0378 12.1598C13.7979 11.9679 13.5276 11.7676 13.2605 11.5233C13.5883 11.1301 13.8862 10.6395 14.0841 10.0003H14.1681C14.3599 10.0003 14.5153 9.84483 14.5153 9.65308C14.5153 9.46127 14.3599 9.30583 14.1681 9.30583ZM12.7792 11.013C12.5575 10.7347 12.3581 10.4026 12.2078 9.99802H13.3505C13.2002 10.4026 13.0008 10.7347 12.7792 11.013Z",
                            ...g
                        }), (0, e.createElement)("path", {
                            d: "M14.885 6.18079H9.87539L9.72657 4.98671C9.66151 4.46651 9.21714 4.07422 8.69289 4.07422H5.11594C4.54153 4.07422 4.07422 4.54153 4.07422 5.11593V12.7784C4.07422 13.3527 4.54153 13.82 5.11594 13.82H8.04395L8.19089 15.0142C8.25576 15.5333 8.70014 15.9267 9.22458 15.9267H14.885C15.4593 15.9267 15.9266 15.4594 15.9266 14.8849V7.22254C15.9266 6.6481 15.4593 6.18079 14.885 6.18079ZM5.11594 13.1256C4.92447 13.1256 4.7687 12.9698 4.7687 12.7784V5.11593C4.7687 4.92447 4.92447 4.76869 5.11594 4.76869H8.69289C8.86764 4.76869 9.01576 4.89944 9.03745 5.07274C9.08776 5.47637 9.99132 12.7252 10.0413 13.1256H5.11594ZM8.8597 14.7634L8.74364 13.82H9.67526L8.8597 14.7634ZM15.2321 14.8849C15.2321 15.0764 15.0764 15.2322 14.885 15.2322H9.37251L10.6944 13.7031C10.7621 13.6267 10.7924 13.5254 10.7784 13.4247L9.96195 6.87529H14.885C15.0764 6.87529 15.2321 7.03104 15.2321 7.22254V14.8849Z",
                            ...g
                        })), (0, e.createElement)("defs", {}, (0, e.createElement)("clipPath", {
                            id: "zip_ai_translucent_set_translate_clip"
                        }, (0, e.createElement)("rect", {
                            width: 20,
                            height: 20,
                            fill: h
                        }))))
                    }({
                        width: 32,
                        height: 32,
                        color: b
                    }), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder-grid-item-heading"
                    }, (0, P.__)("Translate Your Pages", "zip-ai"))), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder-grid-item"
                    }, function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return (0, e.createElement)("svg", {
                            width: l,
                            height: l,
                            viewBox: "0 0 20 20",
                            fill: "none",
                            ...t
                        }, (0, e.createElement)("g", {
                            clipPath: "url(#zip_ai_translucent_set_pencil_clip)"
                        }, (0, e.createElement)("mask", {
                            id: "zip_ai_translucent_set_pencil_mask",
                            style: {
                                maskType: "luminance"
                            },
                            maskUnits: "userSpaceOnUse",
                            x: 0,
                            y: 0,
                            width: 20,
                            height: 20
                        }, (0, e.createElement)("path", {
                            d: "M20 0H0V20H20V0Z",
                            fill: h
                        })), (0, e.createElement)("g", {
                            mask: "url(#zip_ai_translucent_set_pencil_mask)"
                        }, (0, e.createElement)("path", {
                            d: "M17.0894 9.94679e-08H2.86902C2.10845 0.00109999 1.37934 0.303724 0.841531 0.841531C0.303724 1.37934 0.00109989 2.10845 0 2.86902V17.131C0.00109989 17.8916 0.303724 18.6207 0.841531 19.1584C1.37934 19.6962 2.10845 19.9989 2.86902 20H17.131C17.8916 19.9989 18.6207 19.6962 19.1584 19.1584C19.6962 18.6207 19.9989 17.8916 20 17.131V2.84407C19.9826 2.08372 19.6683 1.36038 19.1243 0.828844C18.5804 0.297305 17.8499 -0.0001986 17.0894 9.94679e-08Z",
                            fill: f
                        })), (0, e.createElement)("path", {
                            d: "M10.8966 6.22266L5.72334 11.3959C5.59051 11.5288 5.52409 11.5952 5.48042 11.6768C5.43676 11.7583 5.41833 11.8505 5.38149 12.0347L4.77038 15.0903C4.7288 15.2982 4.70801 15.4021 4.76714 15.4612C4.82627 15.5203 4.93021 15.4995 5.13809 15.458L8.19368 14.8468C8.37787 14.81 8.46999 14.7916 8.55156 14.7479C8.63318 14.7043 8.69962 14.6378 8.83243 14.505L14.0057 9.33172L10.8966 6.22266Z",
                            ...g,
                            fillOpacity: .25
                        }), (0, e.createElement)("path", {
                            d: "M8.34623 14.6906C8.22654 14.7584 8.09511 14.791 7.95842 14.825C7.94836 14.8275 7.93823 14.83 7.92811 14.8326L5.67534 15.3958L5.6602 15.3995C5.65418 15.401 5.64809 15.4026 5.64196 15.4041C5.54567 15.4282 5.43676 15.4555 5.3441 15.4646C5.24089 15.4747 5.05387 15.4738 4.90307 15.323C4.75227 15.1721 4.75134 14.9851 4.76144 14.882C4.7705 14.7893 4.79779 14.6803 4.82193 14.5841C4.82346 14.5779 4.82499 14.5718 4.82649 14.5658L5.39347 12.2979C5.396 12.2878 5.39851 12.2777 5.40101 12.2676C5.43499 12.1309 5.46765 11.9995 5.5354 11.8798C5.60315 11.7601 5.69905 11.6645 5.79882 11.565C5.80616 11.5577 5.81353 11.5503 5.82091 11.543L11.6877 5.67624L11.7044 5.65948C11.8984 5.46552 12.0697 5.29411 12.2265 5.17453C12.3964 5.04491 12.5923 4.94141 12.8367 4.94141C13.0811 4.94141 13.277 5.04491 13.4469 5.17453C13.6037 5.2941 13.775 5.46551 13.969 5.65947L13.9857 5.67624L14.5498 6.24029L14.5665 6.25708C14.7605 6.45096 14.9319 6.62239 15.0515 6.77908C15.1811 6.94896 15.2846 7.14496 15.2846 7.38933C15.2846 7.63377 15.1811 7.82971 15.0515 7.99958C14.9319 8.15633 14.7605 8.32771 14.5665 8.52164L14.5498 8.53839L8.68304 14.4051C8.67567 14.4125 8.66829 14.4199 8.66098 14.4272C8.56154 14.527 8.46586 14.6229 8.34623 14.6906ZM8.34623 14.6906L8.16148 14.3643",
                            ...m,
                            strokeWidth: d
                        }), (0, e.createElement)("path", {
                            d: "M10.8945 6.22266L14.0037 9.33173",
                            ...m,
                            strokeWidth: d
                        })), (0, e.createElement)("defs", {}, (0, e.createElement)("clipPath", {
                            id: "zip_ai_translucent_set_pencil_clip"
                        }, (0, e.createElement)("rect", {
                            width: 20,
                            height: 20,
                            fill: h
                        }))))
                    }({
                        width: 32,
                        height: 32,
                        color: b
                    }), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder-grid-item-heading"
                    }, (0, P.__)("Write Content for Pages", "zip-ai"))), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder-grid-item"
                    }, function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return (0, e.createElement)("svg", {
                            width: l,
                            height: l,
                            viewBox: "0 0 20 20",
                            fill: f,
                            ...t
                        }, (0, e.createElement)("g", {
                            clipPath: "url(#zip_ai_translucent_set_code_clip)"
                        }, (0, e.createElement)("mask", {
                            id: "zip_ai_translucent_set_code_mask",
                            style: {
                                maskType: "luminance"
                            },
                            maskUnits: "userSpaceOnUse",
                            x: 0,
                            y: 0,
                            width: 20,
                            height: 20
                        }, (0, e.createElement)("path", {
                            d: "M20 0H0V20H20V0Z",
                            fill: h
                        })), (0, e.createElement)("g", {
                            mask: "url(#zip_ai_translucent_set_code_mask)"
                        }, (0, e.createElement)("path", {
                            d: "M17.0894 9.94679e-08H2.86902C2.10845 0.00109999 1.37934 0.303724 0.841531 0.841531C0.303724 1.37934 0.00109989 2.10845 0 2.86902V17.131C0.00109989 17.8916 0.303724 18.6207 0.841531 19.1584C1.37934 19.6962 2.10845 19.9989 2.86902 20H17.131C17.8916 19.9989 18.6207 19.6962 19.1584 19.1584C19.6962 18.6207 19.9989 17.8916 20 17.131V2.84407C19.9826 2.08372 19.6683 1.36038 19.1243 0.828844C18.5804 0.297305 17.8499 -0.0001986 17.0894 9.94679e-08Z",
                            fill: f
                        })), (0, e.createElement)("path", {
                            d: "M7.10807 7.05957L3.66406 9.86632L7.10807 12.6731",
                            ...m,
                            strokeWidth: d
                        }), (0, e.createElement)("path", {
                            d: "M12.8945 12.6731L16.3385 9.86632L12.8945 7.05957",
                            ...m,
                            strokeWidth: d
                        }), (0, e.createElement)("path", {
                            d: "M11.07 5.93262L8.92969 14.0682",
                            ...m,
                            strokeWidth: d
                        })), (0, e.createElement)("defs", {}, (0, e.createElement)("clipPath", {
                            id: "zip_ai_translucent_set_code_clip"
                        }, (0, e.createElement)("rect", {
                            width: 20,
                            height: 20,
                            fill: h
                        }))))
                    }({
                        width: 32,
                        height: 32,
                        color: b
                    }), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder-grid-item-heading"
                    }, (0, P.__)("Generate Custom Code", "zip-ai"))), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder-grid-item"
                    }, function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return (0, e.createElement)("svg", {
                            width: l,
                            height: l,
                            viewBox: "0 0 20 20",
                            fill: f,
                            ...t
                        }, (0, e.createElement)("path", {
                            d: "M9.64707 4.57713L9.64707 4.57713L9.64911 4.57618C9.86656 4.47461 10.11 4.47461 10.3275 4.57618L10.3274 4.57618L10.3295 4.57713L15.4525 6.94209C15.4714 6.95246 15.4861 6.9665 15.4945 6.97869C15.4977 6.98334 15.4993 6.98653 15.4999 6.98825C15.4995 7.00094 15.4961 7.01005 15.4901 7.01903C15.4829 7.02978 15.4704 7.04221 15.4525 7.05205L10.3295 9.41701L10.3295 9.417L10.3275 9.41795C10.11 9.51953 9.86656 9.51953 9.64911 9.41795L9.64707 9.41701L4.52488 7.05241C4.51721 7.04796 4.51352 7.04351 4.51089 7.03912C4.50777 7.03393 4.5 7.01825 4.5 6.98534C4.5 6.97323 4.50311 6.96473 4.50697 6.95851C4.51044 6.9529 4.51595 6.94688 4.52487 6.94173L9.64707 4.57713Z",
                            ...m,
                            strokeWidth: d,
                            fill: p,
                            fillOpacity: .25
                        }), (0, e.createElement)("path", {
                            d: "M15.6719 9.49569C15.8594 9.58953 16 9.77721 16 9.98836C16 10.223 15.8594 10.4106 15.6719 10.5045L10.5391 12.874C10.1875 13.0382 9.78906 13.0382 9.4375 12.874L4.30469 10.5045C4.11719 10.4106 4 10.223 4 9.98836C4 9.77721 4.11719 9.58953 4.30469 9.49569L5.57031 8.90918L9.13281 10.5514C9.67188 10.8095 10.3047 10.8095 10.8438 10.5514L14.4062 8.90918L15.6719 9.49569Z",
                            ...g,
                            fillOpacity: .25
                        }), (0, e.createElement)("path", {
                            d: "M14.4062 11.9121L10.8438 13.5543C10.3047 13.8124 9.67188 13.8124 9.13281 13.5543L5.57031 11.9121L4.30469 12.4986C4.11719 12.5925 4 12.7801 4 12.9913C4 13.2259 4.11719 13.4136 4.30469 13.5074L9.4375 15.8769C9.78906 16.0411 10.1875 16.0411 10.5391 15.8769L15.6719 13.5074C15.8594 13.4136 16 13.2259 16 12.9913C16 12.7801 15.8594 12.5925 15.6719 12.4986L14.4062 11.9121Z",
                            ...g,
                            fillOpacity: .25
                        }))
                    }({
                        width: 32,
                        height: 32,
                        color: b
                    }), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder-grid-item-heading"
                    }, (0, P.__)("Customize Templates", "zip-ai"))), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder-grid-item"
                    }, function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return (0, e.createElement)("svg", {
                            width: l,
                            height: l,
                            viewBox: "0 0 20 20",
                            fill: f,
                            ...t
                        }, (0, e.createElement)("g", {
                            clipPath: "url(#zip_ai_translucent_set_description_clip)"
                        }, (0, e.createElement)("mask", {
                            id: "zip_ai_translucent_set_description_mask",
                            style: {
                                maskType: "luminance"
                            },
                            maskUnits: "userSpaceOnUse",
                            x: 0,
                            y: 0,
                            width: 20,
                            height: 20
                        }, (0, e.createElement)("path", {
                            d: "M20 0H0V20H20V0Z",
                            fill: h
                        })), (0, e.createElement)("g", {
                            mask: "url(#zip_ai_translucent_set_description_mask)"
                        }, (0, e.createElement)("path", {
                            d: "M17.0894 9.95182e-08H2.86902C2.10845 0.0011001 1.37934 0.303724 0.841531 0.841531C0.303724 1.37934 0.00109989 2.10845 0 2.86902V17.131C0.00109989 17.8915 0.303724 18.6207 0.841531 19.1584C1.37934 19.6963 2.10845 19.9989 2.86902 20H17.131C17.8916 19.9989 18.6207 19.6963 19.1584 19.1584C19.6962 18.6207 19.9989 17.8915 20 17.131V2.84407C19.9826 2.08372 19.6683 1.36038 19.1243 0.828843C18.5804 0.297306 17.8499 -0.00019865 17.0894 9.95182e-08Z",
                            fill: f
                        })), (0, e.createElement)("path", {
                            d: "M15.6076 12.8594H4.39062",
                            ...m,
                            strokeWidth: d
                        }), (0, e.createElement)("path", {
                            d: "M15.6076 14.8594H4.39062",
                            ...m,
                            strokeWidth: d
                        }), (0, e.createElement)("path", {
                            d: "M13.5742 16.8594H6.42578",
                            ...m,
                            strokeWidth: d
                        }), (0, e.createElement)("path", {
                            d: "M7.00476 4.83761H6.31051C6.28332 4.83761 6.26969 4.83761 6.25838 4.83551C6.20757 4.82605 6.16781 4.78629 6.15836 4.73548C6.15625 4.72414 6.15625 4.71054 6.15625 4.68334C6.15625 4.41135 6.15625 4.27535 6.17733 4.16202C6.27188 3.65383 6.66944 3.25624 7.17763 3.16171C7.29094 3.14063 7.42694 3.14062 7.69894 3.14062H12.25C12.5219 3.14062 12.6579 3.14063 12.7713 3.16171C13.2795 3.25624 13.6771 3.65383 13.7716 4.16202C13.7927 4.27535 13.7927 4.41135 13.7927 4.68334C13.7927 4.71054 13.7927 4.72414 13.7906 4.73548C13.7811 4.78629 13.7414 4.82605 13.6906 4.83551C13.6792 4.83761 13.6656 4.83761 13.6384 4.83761H12.9442V7.42855C12.9442 8.60711 12.9442 9.19636 12.5781 9.56249C12.2119 9.92855 11.6227 9.92855 10.4442 9.92855H9.50476C8.32626 9.92855 7.73694 9.92855 7.37088 9.56249C7.00476 9.19636 7.00476 8.60711 7.00476 7.42855V4.83761Z",
                            ...g,
                            fillOpacity: .25
                        }), (0, e.createElement)("path", {
                            d: "M7.00476 4.83761V7.42855C7.00476 8.60711 7.00476 9.19636 7.37088 9.56249C7.73694 9.92855 8.32626 9.92855 9.50476 9.92855H10.4442C11.6227 9.92855 12.2119 9.92855 12.5781 9.56249C12.9442 9.19636 12.9442 8.60711 12.9442 7.42855V4.83761M7.00476 4.83761H12.9442M7.00476 4.83761H6.31051C6.28332 4.83761 6.26969 4.83761 6.25838 4.83551C6.20757 4.82605 6.16781 4.78629 6.15836 4.73548C6.15625 4.72414 6.15625 4.71054 6.15625 4.68334C6.15625 4.41135 6.15625 4.27535 6.17733 4.16202C6.27188 3.65383 6.66944 3.25624 7.17763 3.16171C7.29094 3.14063 7.42694 3.14062 7.69894 3.14062H12.25C12.5219 3.14062 12.6579 3.14063 12.7713 3.16171C13.2795 3.25624 13.6771 3.65383 13.7716 4.16202C13.7927 4.27535 13.7927 4.41135 13.7927 4.68334C13.7927 4.71054 13.7927 4.72414 13.7906 4.73548C13.7811 4.78629 13.7414 4.82605 13.6906 4.83551C13.6792 4.83761 13.6656 4.83761 13.6384 4.83761H12.9442",
                            ...m,
                            strokeWidth: d
                        }), (0, e.createElement)("path", {
                            d: "M9.125 8.23145H10.822",
                            ...m,
                            strokeWidth: d
                        })), (0, e.createElement)("defs", {}, (0, e.createElement)("clipPath", {
                            id: "zip_ai_translucent_set_description_clip"
                        }, (0, e.createElement)("rect", {
                            width: 20,
                            height: 20,
                            fill: h
                        }))))
                    }({
                        width: 32,
                        height: 32,
                        color: b
                    }), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder-grid-item-heading"
                    }, (0, P.__)("Craft Product Descriptions", "zip-ai"))), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder-grid-item"
                    }, function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return (0, e.createElement)("svg", {
                            width: 20,
                            height: 20,
                            viewBox: "0 0 20 20",
                            fill: f,
                            ...t
                        }, (0, e.createElement)("g", {
                            clipPath: "url(#zip_ai_translucent_set_chat_bubble_clip)"
                        }, (0, e.createElement)("mask", {
                            id: "zip_ai_translucent_set_chat_bubble_mask",
                            style: {
                                maskType: "luminance"
                            },
                            maskUnits: "userSpaceOnUse",
                            x: 0,
                            y: 0,
                            width: 20,
                            height: 20
                        }, (0, e.createElement)("path", {
                            d: "M20 0H0V20H20V0Z",
                            fill: h
                        })), (0, e.createElement)("g", {
                            mask: "url(#zip_ai_translucent_set_chat_bubble_mask)"
                        }, (0, e.createElement)("path", {
                            d: "M17.0894 9.95178e-08H2.86902C2.10845 0.0011001 1.37934 0.303726 0.841531 0.841532C0.303724 1.37934 0.00109989 2.10845 0 2.86902V17.131C0.00109989 17.8916 0.303724 18.6207 0.841531 19.1584C1.37934 19.6963 2.10845 19.9989 2.86902 20H17.131C17.8916 19.9989 18.6207 19.6963 19.1584 19.1584C19.6962 18.6207 19.9989 17.8916 20 17.131V2.84408C19.9826 2.08373 19.6683 1.36038 19.1243 0.828844C18.5804 0.297307 17.8499 -0.00019865 17.0894 9.95178e-08Z",
                            fill: f
                        })), (0, e.createElement)("path", {
                            d: "M4.41797 12.358V6.41956L6.88217 4.40285L13.1931 4.21387L15.4984 6.41956V11.6964L14.5535 13.1324L12.5885 14.1053H10.8124L8.16704 15.6643L7.57623 15.2486L7.78911 14.1053H7.57623L6.01714 13.6527L4.41797 12.358Z",
                            ...g,
                            fillOpacity: .25
                        }), (0, e.createElement)("path", {
                            d: "M10.0022 8.344H7.5135C7.25581 8.344 7.04688 8.14281 7.04688 7.89463C7.04688 7.6465 7.25581 7.44531 7.5135 7.44531H10.0022C10.2599 7.44531 10.4689 7.6465 10.4689 7.89463C10.4689 8.14281 10.2599 8.344 10.0022 8.344Z",
                            ...g
                        }), (0, e.createElement)("path", {
                            d: "M7.04688 10.2912C7.04688 10.043 7.25581 9.8418 7.5135 9.8418H12.491C12.7487 9.8418 12.9576 10.043 12.9576 10.2912C12.9576 10.5394 12.7487 10.7405 12.491 10.7405H7.5135C7.25581 10.7405 7.04688 10.5394 7.04688 10.2912Z",
                            ...g
                        }), (0, e.createElement)("path", {
                            d: "M9.35681 3.84961H10.643C11.4964 3.84961 12.1655 3.84961 12.7033 3.89192C13.2509 3.935 13.7033 4.02419 14.1128 4.2251C14.786 4.55539 15.3333 5.08242 15.6763 5.73065C15.8849 6.12496 15.9775 6.56058 16.0223 7.08796C16.0662 7.60577 16.0662 8.25015 16.0662 9.07196V10.7236C16.0662 10.8773 16.0662 10.9709 16.0622 11.0524C15.9749 12.827 14.5006 14.2467 12.6578 14.3307C12.5731 14.3346 12.4662 14.3346 12.2888 14.3346H12.2711L12.2242 14.3346C11.6847 14.3379 11.1591 14.5001 10.7181 14.7995L10.6874 14.8204L9.06312 15.9377C8.12706 16.5815 6.897 15.6517 7.32419 14.6232C7.38162 14.485 7.27594 14.3346 7.12131 14.3346H6.74688C5.19315 14.3346 3.93359 13.1216 3.93359 11.6255V9.07196C3.93359 8.25015 3.93359 7.60577 3.97753 7.08796C4.02226 6.56058 4.11488 6.12496 4.32352 5.73065C4.66651 5.08242 5.21381 4.55539 5.88697 4.2251C6.29644 4.02419 6.74888 3.935 7.29644 3.89192C7.83425 3.84961 8.50338 3.84961 9.35681 3.84961ZM7.37244 4.78765C6.88256 4.82619 6.56669 4.90026 6.31069 5.02586C5.81312 5.26998 5.40859 5.65953 5.15507 6.13865C5.02465 6.38515 4.94772 6.68933 4.9077 7.16108C4.86723 7.63808 4.86687 8.24577 4.86687 9.09208V11.6255C4.86687 12.6253 5.70858 13.4358 6.74688 13.4358H7.12131C7.93619 13.4358 8.49337 14.2284 8.19075 14.957C8.10969 15.1521 8.34306 15.3285 8.52069 15.2064L10.1804 14.0648C10.7772 13.6599 11.4882 13.4404 12.2183 13.4359L12.2711 13.4358C12.4713 13.4358 12.5541 13.4358 12.6137 13.433C13.9757 13.3709 15.0654 12.3216 15.1299 11.01C15.1328 10.9524 15.1329 10.8818 15.1329 10.709V9.09208C15.1329 8.24577 15.1326 7.63808 15.0921 7.16108C15.052 6.68933 14.9751 6.38515 14.8447 6.13865C14.5912 5.65953 14.1866 5.26998 13.6891 5.02586C13.4331 4.90026 13.1172 4.82619 12.6273 4.78765C12.132 4.74867 11.5009 4.74832 10.6221 4.74832H9.37769C8.49888 4.74832 7.86781 4.74867 7.37244 4.78765Z",
                            ...g,
                            fillRule: "evenodd",
                            clipRule: "evenodd"
                        })), (0, e.createElement)("defs", {}, (0, e.createElement)("clipPath", {
                            id: "zip_ai_translucent_set_chat_bubble_clip"
                        }, (0, e.createElement)("rect", {
                            width: 20,
                            height: 20,
                            fill: h
                        }))))
                    }({
                        width: 32,
                        height: 32,
                        color: b
                    }), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder-grid-item-heading"
                    }, (0, P.__)("Engage with Comments", "zip-ai")))), (0, e.createElement)("p", {
                        className: "zip-ai-sidebar__chat-window--placeholder-padded-content"
                    }, a), (0, e.createElement)("button", {
                        className: "zip-ai-sidebar__chat-window--placeholder-button",
                        onClick: e => {
                            e.preventDefault();
                            const t = e.target;
                            t.disabled = !0;
                            const r = (screen.width - 480) / 2,
                                a = (screen.height - 720) / 2,
                                s = window.open(zip_ai_react.auth_middleware, "ZipAiAuthorization", `width=480,height=720,top=${a},left=${r},scrollbars=0`),
                                l = new FormData;
                            l.append("action", "verify_zip_ai_authenticity"), l.append("nonce", zip_ai_react.ajax_nonce);
                            let c = 0;
                            i((0, P.__)("Getting Started…", "zip-ai")), o(G((0, P.sprintf)(
                                // Translators: %1$s is the opening link tag, %2$s is the closing link tag.
                                (0, P.__)("Get started from %1$shere%2$s.", "zip-ai"), '<a href="javascript:void(0);">', "</a>"), {
                                replace: e => {
                                    const {
                                        name: t
                                    } = e;
                                    return "a" === t && (e.attribs.onClick = () => s.focus()), e
                                }
                            }));
                            const u = setInterval((() => {
                                (s.closed || 300 === c) && (s.closed || s.close(), clearInterval(u), i((0, P.__)("Get Started with 1000 Free Monthly Credits", "zip-ai")), o((0, P.__)("Something went wrong, please try again.", "zip-ai")), t.disabled = !1), fetch(zip_ai_react.ajax_url, {
                                    method: "POST",
                                    credentials: "same-origin",
                                    body: l
                                }).then((e => e.json())).then((e => {
                                    e ? .success && e ? .data ? .is_authorized && (s.close(), localStorage.setItem("zipAiAuthorizationStatus", !0), n(!0), i((0, P.__)("Get Ready!", "zip-ai")), o((0, P.__)("The possibilities are endless!", "zip-ai")), t.disabled = !1, clearInterval(u))
                                })), c++
                            }), 500)
                        }
                    }, r), y && (0, e.createElement)("a", {
                        className: "zip-ai-sidebar__chat-window--placeholder-subheading zip-ai-sidebar__chat-window--placeholder-link",
                        href: y,
                        target: "_blank",
                        rel: "noreferrer"
                    }, (0, P.__)("Learn more", "zip-ai"))))
                },
                ai = t => {
                    const {
                        generating: n,
                        updateContent: r,
                        closeModal: i,
                        aiResponseError: a,
                        setGenerating: o,
                        setAiResponseError: l,
                        setUserInput: c,
                        setRefreshFilters: u
                    } = t, {
                        chatLog: d,
                        setChatLog: p
                    } = (0, e.useContext)(D), [m, v] = (0, e.useState)(null), [b, y] = (0, e.useState)(!1), C = (0, e.useRef)(null);
                    return (0, e.useEffect)((() => {
                        C ? .current && (C.current.scrollTop = C.current ? .scrollHeight)
                    }), [C ? .current ? .lastChild, d]), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window",
                        ref: C
                    }, d ? .length || a ? (0, e.createElement)(e.Fragment, null, d ? .length > 0 && d.map(((t, n) => (0, e.createElement)(U, {
                        key: n,
                        chatBubble: t,
                        updateContent: r,
                        closeModal: i,
                        setGenerating: o,
                        regeneratingId: m,
                        setRegeneratingId: v,
                        aiResponseError: a,
                        setAiResponseError: l,
                        setUserInput: c,
                        setRefreshFilters: u,
                        editCheck: b,
                        setEditCheck: y
                    }))), n && !m && H, a && (() => {
                        const t = {
                            type: "error",
                            icon: w(),
                            message: a,
                            action: {
                                execute: () => {
                                    const e = d.filter((e => "error" !== e.from));
                                    l(""), p(e)
                                },
                                label: (0, P.__)("Dismiss", "zip-ai")
                            }
                        };
                        return (0, e.createElement)(U, {
                            chatBubble: t
                        })
                    })()) : (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder"
                    }, function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return (0, e.createElement)("svg", {
                            width: s,
                            height: s,
                            viewBox: "0 0 46 38",
                            fill: f,
                            ...t
                        }, (0, e.createElement)("path", {
                            d: "M45.7944 6.79093C37.0923 7.71351 31.6121 7.64643 29.9733 7.56252C29.8043 7.57565 29.7488 7.29831 29.8786 7.21782C34.6033 3.68213 36.3454 1.15273 36.8265 0.340805C36.9198 0.227939 36.8048 0.0608401 36.6696 0.0713457C34.4197 -0.000281308 20.2857 -0.275155 11.8556 1.08398C4.39756 2.26197 -0.0263403 7.92187 0.000118012 15.278C0.0265763 22.6341 4.57961 28.7231 11.1595 30.2538C27.8487 34.0973 39.1828 21.9505 41.0535 19.7632C41.1806 19.6477 41.0629 19.4456 40.8912 19.4238L32.3186 19.3857C32.1158 19.4015 32.0576 19.0891 32.255 19.0034C42.4581 14.1971 45.4122 8.44013 45.9851 7.05777C46.0419 6.91253 45.9296 6.78043 45.7606 6.79356L45.7944 6.79093Z",
                            fill: h
                        }), (0, e.createElement)("path", {
                            d: "M45.7944 6.79093C37.0923 7.71351 31.6121 7.64643 29.9733 7.56252C29.8043 7.57565 29.7488 7.29831 29.8786 7.21782C34.6033 3.68213 36.3454 1.15273 36.8265 0.340805C36.9198 0.227939 36.8048 0.0608401 36.6696 0.0713457C34.4197 -0.000281308 20.2857 -0.275155 11.8556 1.08398C4.39756 2.26197 -0.0263403 7.92187 0.000118012 15.278C0.0265763 22.6341 4.57961 28.7231 11.1595 30.2538C27.8487 34.0973 39.1828 21.9505 41.0535 19.7632C41.1806 19.6477 41.0629 19.4456 40.8912 19.4238L32.3186 19.3857C32.1158 19.4015 32.0576 19.0891 32.255 19.0034C42.4581 14.1971 45.4122 8.44013 45.9851 7.05777C46.0419 6.91253 45.9296 6.78043 45.7606 6.79356L45.7944 6.79093Z",
                            ...g
                        }), (0, e.createElement)("path", {
                            d: "M45.7944 6.79093C37.0923 7.71351 31.6121 7.64643 29.9733 7.56252C29.8043 7.57565 29.7488 7.29831 29.8786 7.21782C34.6033 3.68213 36.3454 1.15273 36.8265 0.340805C36.9198 0.227939 36.8048 0.0608401 36.6696 0.0713457C34.4197 -0.000281308 20.2857 -0.275155 11.8556 1.08398C4.39756 2.26197 -0.0263403 7.92187 0.000118012 15.278C0.0265763 22.6341 4.57961 28.7231 11.1595 30.2538C27.8487 34.0973 39.1828 21.9505 41.0535 19.7632C41.1806 19.6477 41.0629 19.4456 40.8912 19.4238L32.3186 19.3857C32.1158 19.4015 32.0576 19.0891 32.255 19.0034C42.4581 14.1971 45.4122 8.44013 45.9851 7.05777C46.0419 6.91253 45.9296 6.78043 45.7606 6.79356L45.7944 6.79093Z",
                            fill: "url(#zip_ai_assistant_radial_gradient)",
                            fillOpacity: .24
                        }), (0, e.createElement)("path", {
                            d: "M14 30H24L15.6247 36.7002C14.9699 37.2241 14 36.7579 14 35.9194V30Z",
                            ...g
                        }), (0, e.createElement)("circle", {
                            cx: 12,
                            cy: 16,
                            r: 2,
                            fill: h
                        }), (0, e.createElement)("circle", {
                            cx: 18,
                            cy: 16,
                            r: 2,
                            fill: h
                        }), (0, e.createElement)("circle", {
                            cx: 24,
                            cy: 16,
                            r: 2,
                            fill: h
                        }), (0, e.createElement)("defs", {}, (0, e.createElement)("radialGradient", {
                            id: "zip_ai_assistant_radial_gradient",
                            cx: 0,
                            cy: 0,
                            r: 1,
                            gradientUnits: "userSpaceOnUse",
                            gradientTransform: "translate(22.1175 0.0883958) rotate(85.5649) scale(30.5533 46.5526)"
                        }, (0, e.createElement)("stop", {
                            stopColor: h
                        }), (0, e.createElement)("stop", {
                            offset: 1,
                            stopColor: h,
                            stopOpacity: 0
                        }))))
                    }({
                        width: 48,
                        height: 48,
                        color: "#ff580e"
                    }), (0, e.createElement)("h3", {
                        className: "zip-ai-sidebar__chat-window--placeholder-heading"
                    }, (0, P.__)("Hi there! I'm here to assist you.", "zip-ai")), (0, e.createElement)("p", {
                        className: "zip-ai-sidebar__chat-window--placeholder-subheading"
                    }, (0, P.__)("Choose a prompt bellow or write on your own. Ask me about what you need.", "zip-ai"))))
                },
                oi = n => {
                    const {
                        chatLogId: r,
                        setIsOpen: i,
                        setAdminIsOpen: a,
                        isSidebar: o = !1,
                        updateContent: s,
                        currentText: l = ""
                    } = n, c = (0, e.useRef)(null), u = (0, e.useRef)(null), d = (0, e.useRef)(null), p = JSON.parse(localStorage.getItem(`zipAiPreservedChatlog${r}`)) || [], f = JSON.parse(localStorage.getItem("zipAiAuthorizationStatus")) || zip_ai_react ? .is_authorized || !1, [h, m] = (0, e.useState)(p), [g, v] = (0, e.useState)(f), [b, y] = (0, e.useState)(""), [C, _] = (0, e.useState)(""), [E, w] = (0, e.useState)(!1), [x, k] = (0, e.useState)(!1), [S, O] = (0, e.useState)(p.length > 0);
                    (0, e.useEffect)((() => {
                        const e = h ? .length ? {
                            from: h[h.length - 1] ? .from,
                            message: h[h.length - 1] ? .message
                        } : null;
                        l && "content" !== e ? .from && l !== e ? .message && (h.push({
                            id: h ? .length ? h[h.length - 1].id + 1 : 0,
                            from: "content",
                            message: l
                        }), m([...h]))
                    }), []), (0, e.useEffect)((() => {
                        d ? .current && d.current ? .focus()
                    }), [d, x]);
                    const M = () => {
                        c ? .current.classList.add("close-it"), u ? .current.classList.add("close-it"), setTimeout((() => {
                            "content" === h[h.length - 1] ? .from && (h.pop(), m([...h])), S && localStorage.setItem(`zipAiPreservedChatlog${r}`, JSON.stringify(h.slice(-20))), o && (0, t.dispatch)("core/edit-post").closeGeneralSidebar("zip-ai-page-settings-panel"), i(!1), a && a(!1)
                        }), 150)
                    };
                    return (0, e.createElement)(D.Provider, {
                        value: {
                            chatLog: h,
                            setChatLog: m
                        }
                    }, (0, e.createElement)("div", {
                        className: "zip-ai-sidebar-overlay",
                        ref: c,
                        onClick: e => {
                            if (e.target === c ? .current) return M()
                        },
                        onKeyDown: e => {
                            if ("Escape" === e.key) return M()
                        },
                        role: "button",
                        tabIndex: "0"
                    }, (0, e.createElement)("div", {
                        className: "zip-ai-sidebar",
                        ref: u
                    }, (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__header"
                    }, (0, e.createElement)("h2", {
                        className: "zip-ai-sidebar__header--title"
                    }, (0, P.__)("AI Assistant", "zip-ai")), (0, e.createElement)("button", {
                        className: "zip-ai-sidebar__header--close",
                        onClick: () => M()
                    }, (0, e.createElement)("span", {
                        className: "dashicons dashicons-arrow-right-alt"
                    }))), g ? (0, e.createElement)(e.Fragment, null, (0, e.createElement)(ai, {
                        generating: x,
                        updateContent: s,
                        closeModal: M,
                        aiResponseError: b,
                        setGenerating: k,
                        setAiResponseError: y,
                        setUserInput: _,
                        setRefreshFilters: w
                    }), (0, e.createElement)(ri, {
                        generationRef: d,
                        currentText: l,
                        userInput: C,
                        setUserInput: _,
                        refreshFilters: E,
                        setRefreshFilters: w,
                        generating: x,
                        setGenerating: k,
                        setAiResponseError: y,
                        setValidForSaving: O
                    })) : (0, e.createElement)(ii, {
                        setIsAuthorized: v,
                        closeModal: M
                    }), (0, e.createElement)(q, {
                        chatLogId: r,
                        isAuthorized: g,
                        generationRef: d,
                        currentText: l,
                        userInput: C,
                        setUserInput: _,
                        setRefreshFilters: w,
                        generating: x,
                        setGenerating: k,
                        setAiResponseError: y,
                        validForSaving: S,
                        setValidForSaving: O
                    }))))
                };
            const si = "zipai/chat",
                li = document.querySelector("#zip-ai-sidebar"),
                ci = document.querySelector("#zip-ai-sidebar-admin-trigger"),
                ui = document.querySelector("#wp-admin-bar-zip-ai-assistant"),
                di = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4294967295;
                    return Math.floor(Math.random() * (t - e + 1)) + e
                }(),
                pi = t => {
                    const {
                        onChange: n,
                        value: r = {
                            text: ""
                        },
                        isRichText: i = !0,
                        isAdmin: s = !1,
                        setAdminIsOpen: l = null
                    } = t, [c, u] = (0, e.useState)(!1), [d, p] = (0, e.useState)(!1), f = (0, e.useRef)(null);
                    (0, e.useEffect)((() => {
                        i && !s || m()
                    }), []), (0, e.useEffect)((() => {
                        if (c && (document.body.style.overflow = "hidden"), i && !s && !c && d) {
                            let e = { ...r
                            };
                            e.end = e.text.length, e = (0, z.toggleFormat)(e, {
                                type: si
                            }), n(e), p(!1)
                        }
                        const t = setTimeout((() => {
                            var t;
                            c && (f.current = null !== (t = f.current) && void 0 !== t ? t : (0, e.createRoot)(s ? ci : li), f.current ? .render((0, e.createElement)(oi, {
                                chatLogId: di,
                                setIsOpen: u,
                                setAdminIsOpen: l,
                                isSidebar: !i && !s,
                                updateContent: i && !s ? h : null,
                                currentText: g(r.text)
                            })))
                        }));
                        return () => {
                            document.body.style.overflow = "", clearTimeout(t);
                            const e = f.current;
                            f.current = void 0, setTimeout((() => {
                                e ? .unmount()
                            }))
                        }
                    }), [c]);
                    const h = e => {
                            let t = { ...r
                            };
                            t = (0, z.replace)(r, r.text, e), n(t)
                        },
                        m = () => {
                            u(!0)
                        },
                        g = e => {
                            if (s && !i) return document.getSelection().toString().trim().replace(/\n$/, "") || "";
                            if (!i) return "";
                            if (["Your Attractive Heading", "Engage Your Visitors"].includes(e)) return "";
                            let t = { ...r
                            };
                            return 0 === t.start && t.end === t.text.length || d || (t.start = 0, t.end = t.text.length, t = (0, z.applyFormat)(t, {
                                type: si
                            }), n(t), p(!0)), e
                        };
                    return i ? (0, e.createElement)(a.BlockControls, null, (0, e.createElement)(o.Toolbar, {
                        className: "zip-ai-toolbar",
                        label: "Zip AI"
                    }, (0, e.createElement)(o.ToolbarButton, {
                        onClick: m,
                        icon: v(),
                        label: (0, P.__)("AI Assistant", "zip-ai")
                    }))) : null
                },
                fi = () => (0, e.createElement)(e.Fragment, null, (0, e.createElement)(r.PluginSidebarMoreMenuItem, {
                    target: "zip-ai-page-settings-panel",
                    icon: v()
                }, (0, P.__)("AI Assistant", "zip-ai")), (0, e.createElement)(r.PluginSidebar, {
                    isPinnable: !0,
                    icon: v(),
                    name: "zip-ai-page-settings-panel",
                    title: (0, P.__)("AI Assistant", "zip-ai"),
                    className: "zip-ai-sidebar"
                }, (0, e.createElement)(pi, {
                    isRichText: !1
                }))),
                hi = () => {
                    const [t, n] = (0, e.useState)(!1);
                    return (0, e.useEffect)((() => {
                        ui.addEventListener("click", (e => {
                            e.preventDefault(), n(!0)
                        }))
                    }), []), t ? (0, e.createElement)(pi, {
                        isRichText: !1,
                        isAdmin: !0,
                        setAdminIsOpen: n
                    }) : null
                };
            if (zip_ai_react ? .is_ai_assistant_enabled) {
                zip_ai_react ? .is_customize_preview || (0, z.registerFormatType)(si, {
                    tagName: "span",
                    className: "zip-ai-highlighted",
                    edit: pi,
                    title: (0, P.__)("AI Assistant", "zip-ai")
                }), (0, t.select)("core/editor") && (0, i.registerPlugin)("zip-ai-page-level-settings", {
                    render: fi
                }), ci && ui && (0, e.createRoot)(ci).render((0, e.createElement)(hi, null));
                const n = () => {
                    localStorage.removeItem(`zipAiPreservedChatlog${di}`)
                };
                window.addEventListener("beforeunload", n)
            }
        }()
}();