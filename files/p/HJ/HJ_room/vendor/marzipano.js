// Marzipano - a 360° media viewer for the modern web (v0.9.0)
//
// Copyright 2016 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
! function (t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var e;
        e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.Marzipano = t()
    }
}(function () {
    var t;
    return function () {
        function t(e, i, r) {
            function n(s, a) {
                if (!i[s]) {
                    if (!e[s]) {
                        var l = "function" == typeof require && require;
                        if (!a && l) return l(s, !0);
                        if (o) return o(s, !0);
                        var h = new Error("Cannot find module '" + s + "'");
                        throw h.code = "MODULE_NOT_FOUND", h
                    }
                    var u = i[s] = {
                        exports: {}
                    };
                    e[s][0].call(u.exports, function (t) {
                        return n(e[s][1][t] || t)
                    }, u, u.exports, t, e, i, r)
                }
                return i[s].exports
            }
            for (var o = "function" == typeof require && require, s = 0; s < r.length; s++) n(r[s]);
            return n
        }
        return t
    }()({
        1: [function (e, i, r) {
            ! function (e, r, n) {
                void 0 !== i && i.exports ? i.exports = n() : "function" == typeof t && t.amd ? t("bowser", n) : e.bowser = n()
            }(this, 0, function () {
                function t(t) {
                    function e(e) {
                        var i = t.match(e);
                        return i && i.length > 1 && i[1] || ""
                    }

                    function i(e) {
                        var i = t.match(e);
                        return i && i.length > 1 && i[2] || ""
                    }
                    var n, o = e(/(ipod|iphone|ipad)/i).toLowerCase(),
                        a = /like android/i.test(t),
                        l = !a && /android/i.test(t),
                        h = /nexus\s*[0-6]\s*/i.test(t),
                        u = !h && /nexus\s*[0-9]+/i.test(t),
                        c = /CrOS/.test(t),
                        p = /silk/i.test(t),
                        d = /sailfish/i.test(t),
                        f = /tizen/i.test(t),
                        m = /(web|hpw)(o|0)s/i.test(t),
                        v = /windows phone/i.test(t),
                        _ = (/SamsungBrowser/i.test(t), !v && /windows/i.test(t)),
                        y = !o && !p && /macintosh/i.test(t),
                        g = !l && !d && !f && !m && /linux/i.test(t),
                        x = i(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
                        w = e(/version\/(\d+(\.\d+)?)/i),
                        M = /tablet/i.test(t) && !/tablet pc/i.test(t),
                        b = !M && /[^-]mobi/i.test(t),
                        S = /xbox/i.test(t);
                    /opera/i.test(t) ? n = {
                        name: "Opera",
                        opera: s,
                        version: w || e(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
                    } : /opr\/|opios/i.test(t) ? n = {
                        name: "Opera",
                        opera: s,
                        version: e(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || w
                    } : /SamsungBrowser/i.test(t) ? n = {
                        name: "Samsung Internet for Android",
                        samsungBrowser: s,
                        version: w || e(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
                    } : /Whale/i.test(t) ? n = {
                        name: "NAVER Whale browser",
                        whale: s,
                        version: e(/(?:whale)[\s\/](\d+(?:\.\d+)+)/i)
                    } : /MZBrowser/i.test(t) ? n = {
                        name: "MZ Browser",
                        mzbrowser: s,
                        version: e(/(?:MZBrowser)[\s\/](\d+(?:\.\d+)+)/i)
                    } : /coast/i.test(t) ? n = {
                        name: "Opera Coast",
                        coast: s,
                        version: w || e(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
                    } : /focus/i.test(t) ? n = {
                        name: "Focus",
                        focus: s,
                        version: e(/(?:focus)[\s\/](\d+(?:\.\d+)+)/i)
                    } : /yabrowser/i.test(t) ? n = {
                        name: "Yandex Browser",
                        yandexbrowser: s,
                        version: w || e(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
                    } : /ucbrowser/i.test(t) ? n = {
                        name: "UC Browser",
                        ucbrowser: s,
                        version: e(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
                    } : /mxios/i.test(t) ? n = {
                        name: "Maxthon",
                        maxthon: s,
                        version: e(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
                    } : /epiphany/i.test(t) ? n = {
                        name: "Epiphany",
                        epiphany: s,
                        version: e(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
                    } : /puffin/i.test(t) ? n = {
                        name: "Puffin",
                        puffin: s,
                        version: e(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
                    } : /sleipnir/i.test(t) ? n = {
                        name: "Sleipnir",
                        sleipnir: s,
                        version: e(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
                    } : /k-meleon/i.test(t) ? n = {
                        name: "K-Meleon",
                        kMeleon: s,
                        version: e(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
                    } : v ? (n = {
                        name: "Windows Phone",
                        osname: "Windows Phone",
                        windowsphone: s
                    }, x ? (n.msedge = s, n.version = x) : (n.msie = s, n.version = e(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? n = {
                        name: "Internet Explorer",
                        msie: s,
                        version: e(/(?:msie |rv:)(\d+(\.\d+)?)/i)
                    } : c ? n = {
                        name: "Chrome",
                        osname: "Chrome OS",
                        chromeos: s,
                        chromeBook: s,
                        chrome: s,
                        version: e(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
                    } : /edg([ea]|ios)/i.test(t) ? n = {
                        name: "Microsoft Edge",
                        msedge: s,
                        version: x
                    } : /vivaldi/i.test(t) ? n = {
                        name: "Vivaldi",
                        vivaldi: s,
                        version: e(/vivaldi\/(\d+(\.\d+)?)/i) || w
                    } : d ? n = {
                        name: "Sailfish",
                        osname: "Sailfish OS",
                        sailfish: s,
                        version: e(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
                    } : /seamonkey\//i.test(t) ? n = {
                        name: "SeaMonkey",
                        seamonkey: s,
                        version: e(/seamonkey\/(\d+(\.\d+)?)/i)
                    } : /firefox|iceweasel|fxios/i.test(t) ? (n = {
                        name: "Firefox",
                        firefox: s,
                        version: e(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
                    }, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (n.firefoxos = s, n.osname = "Firefox OS")) : p ? n = {
                        name: "Amazon Silk",
                        silk: s,
                        version: e(/silk\/(\d+(\.\d+)?)/i)
                    } : /phantom/i.test(t) ? n = {
                        name: "PhantomJS",
                        phantom: s,
                        version: e(/phantomjs\/(\d+(\.\d+)?)/i)
                    } : /slimerjs/i.test(t) ? n = {
                        name: "SlimerJS",
                        slimer: s,
                        version: e(/slimerjs\/(\d+(\.\d+)?)/i)
                    } : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? n = {
                        name: "BlackBerry",
                        osname: "BlackBerry OS",
                        blackberry: s,
                        version: w || e(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
                    } : m ? (n = {
                        name: "WebOS",
                        osname: "WebOS",
                        webos: s,
                        version: w || e(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
                    }, /touchpad\//i.test(t) && (n.touchpad = s)) : /bada/i.test(t) ? n = {
                        name: "Bada",
                        osname: "Bada",
                        bada: s,
                        version: e(/dolfin\/(\d+(\.\d+)?)/i)
                    } : f ? n = {
                        name: "Tizen",
                        osname: "Tizen",
                        tizen: s,
                        version: e(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || w
                    } : /qupzilla/i.test(t) ? n = {
                        name: "QupZilla",
                        qupzilla: s,
                        version: e(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || w
                    } : /chromium/i.test(t) ? n = {
                        name: "Chromium",
                        chromium: s,
                        version: e(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || w
                    } : /chrome|crios|crmo/i.test(t) ? n = {
                        name: "Chrome",
                        chrome: s,
                        version: e(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
                    } : l ? n = {
                        name: "Android",
                        version: w
                    } : /safari|applewebkit/i.test(t) ? (n = {
                        name: "Safari",
                        safari: s
                    }, w && (n.version = w)) : o ? (n = {
                        name: "iphone" == o ? "iPhone" : "ipad" == o ? "iPad" : "iPod"
                    }, w && (n.version = w)) : n = /googlebot/i.test(t) ? {
                        name: "Googlebot",
                        googlebot: s,
                        version: e(/googlebot\/(\d+(\.\d+))/i) || w
                    } : {
                        name: e(/^(.*)\/(.*) /),
                        version: i(/^(.*)\/(.*) /)
                    }, !n.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (n.name = n.name || "Blink", n.blink = s) : (n.name = n.name || "Webkit", n.webkit = s), !n.version && w && (n.version = w)) : !n.opera && /gecko\//i.test(t) && (n.name = n.name || "Gecko", n.gecko = s, n.version = n.version || e(/gecko\/(\d+(\.\d+)?)/i)), n.windowsphone || !l && !n.silk ? !n.windowsphone && o ? (n[o] = s, n.ios = s, n.osname = "iOS") : y ? (n.mac = s, n.osname = "macOS") : S ? (n.xbox = s, n.osname = "Xbox") : _ ? (n.windows = s, n.osname = "Windows") : g && (n.linux = s, n.osname = "Linux") : (n.android = s, n.osname = "Android");
                    var E = "";
                    n.windows ? E = function (t) {
                        switch (t) {
                            case "NT":
                                return "NT";
                            case "XP":
                                return "XP";
                            case "NT 5.0":
                                return "2000";
                            case "NT 5.1":
                                return "XP";
                            case "NT 5.2":
                                return "2003";
                            case "NT 6.0":
                                return "Vista";
                            case "NT 6.1":
                                return "7";
                            case "NT 6.2":
                                return "8";
                            case "NT 6.3":
                                return "8.1";
                            case "NT 10.0":
                                return "10";
                            default:
                                return undefined
                        }
                    }(e(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : n.windowsphone ? E = e(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : n.mac ? (E = e(/Mac OS X (\d+([_\.\s]\d+)*)/i), E = E.replace(/[_\s]/g, ".")) : o ? (E = e(/os (\d+([_\s]\d+)*) like mac os x/i), E = E.replace(/[_\s]/g, ".")) : l ? E = e(/android[ \/-](\d+(\.\d+)*)/i) : n.webos ? E = e(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : n.blackberry ? E = e(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : n.bada ? E = e(/bada\/(\d+(\.\d+)*)/i) : n.tizen && (E = e(/tizen[\/\s](\d+(\.\d+)*)/i)), E && (n.osversion = E);
                    var I = !n.windows && E.split(".")[0];
                    return M || u || "ipad" == o || l && (3 == I || I >= 4 && !b) || n.silk ? n.tablet = s : (b || "iphone" == o || "ipod" == o || l || h || n.blackberry || n.webos || n.bada) && (n.mobile = s), n.msedge || n.msie && n.version >= 10 || n.yandexbrowser && n.version >= 15 || n.vivaldi && n.version >= 1 || n.chrome && n.version >= 20 || n.samsungBrowser && n.version >= 4 || n.whale && 1 === r([n.version, "1.0"]) || n.mzbrowser && 1 === r([n.version, "6.0"]) || n.focus && 1 === r([n.version, "1.0"]) || n.firefox && n.version >= 20 || n.safari && n.version >= 6 || n.opera && n.version >= 10 || n.ios && n.osversion && n.osversion.split(".")[0] >= 6 || n.blackberry && n.version >= 10.1 || n.chromium && n.version >= 20 ? n.a = s : n.msie && n.version < 10 || n.chrome && n.version < 20 || n.firefox && n.version < 20 || n.safari && n.version < 6 || n.opera && n.version < 10 || n.ios && n.osversion && n.osversion.split(".")[0] < 6 || n.chromium && n.version < 20 ? n.c = s : n.x = s, n
                }

                function e(t) {
                    return t.split(".").length
                }

                function i(t, e) {
                    var i, r = [];
                    if (Array.prototype.map) return Array.prototype.map.call(t, e);
                    for (i = 0; i < t.length; i++) r.push(e(t[i]));
                    return r
                }

                function r(t) {
                    for (var r = Math.max(e(t[0]), e(t[1])), n = i(t, function (t) {
                            var n = r - e(t);
                            return t += new Array(n + 1).join(".0"), i(t.split("."), function (t) {
                                return new Array(20 - t.length).join("0") + t
                            }).reverse()
                        }); --r >= 0;) {
                        if (n[0][r] > n[1][r]) return 1;
                        if (n[0][r] !== n[1][r]) return -1;
                        if (0 === r) return 0
                    }
                }

                function n(e, i, n) {
                    var o = a;
                    "string" == typeof i && (n = i, i = void 0), void 0 === i && (i = !1), n && (o = t(n));
                    var s = "" + o.version;
                    for (var l in e)
                        if (e.hasOwnProperty(l) && o[l]) {
                            if ("string" != typeof e[l]) throw new Error("Browser version in the minVersion map should be a string: " + l + ": " + String(e));
                            return r([s, e[l]]) < 0
                        } return i
                }

                function o(t, e, i) {
                    return !n(t, e, i)
                }
                var s = !0,
                    a = t("undefined" != typeof navigator ? navigator.userAgent || "" : "");
                return a.test = function (t) {
                    for (var e = 0; e < t.length; ++e) {
                        var i = t[e];
                        if ("string" == typeof i && i in a) return !0
                    }
                    return !1
                }, a.isUnsupportedBrowser = n, a.compareVersions = r, a.check = o, a._detect = t, a.detect = t, a
            })
        }, {}],
        2: [function (t, e, i) {
            i.glMatrix = t("./gl-matrix/common.js"), i.mat2 = t("./gl-matrix/mat2.js"), i.mat2d = t("./gl-matrix/mat2d.js"), i.mat3 = t("./gl-matrix/mat3.js"), i.mat4 = t("./gl-matrix/mat4.js"), i.quat = t("./gl-matrix/quat.js"), i.vec2 = t("./gl-matrix/vec2.js"), i.vec3 = t("./gl-matrix/vec3.js"), i.vec4 = t("./gl-matrix/vec4.js")
        }, {
            "./gl-matrix/common.js": 3,
            "./gl-matrix/mat2.js": 4,
            "./gl-matrix/mat2d.js": 5,
            "./gl-matrix/mat3.js": 6,
            "./gl-matrix/mat4.js": 7,
            "./gl-matrix/quat.js": 8,
            "./gl-matrix/vec2.js": 9,
            "./gl-matrix/vec3.js": 10,
            "./gl-matrix/vec4.js": 11
        }],
        3: [function (t, e, i) {
            var r = {};
            r.EPSILON = 1e-6, r.ARRAY_TYPE = "undefined" != typeof Float32Array ? Float32Array : Array, r.RANDOM = Math.random, r.ENABLE_SIMD = !1, r.SIMD_AVAILABLE = r.ARRAY_TYPE === this.Float32Array && "undefined" != typeof SIMD, r.USE_SIMD = r.ENABLE_SIMD && r.SIMD_AVAILABLE, r.setMatrixArrayType = function (t) {
                r.ARRAY_TYPE = t
            };
            var n = Math.PI / 180;
            r.toRadian = function (t) {
                return t * n
            }, r.equals = function (t, e) {
                return Math.abs(t - e) <= r.EPSILON * Math.max(1, Math.abs(t), Math.abs(e))
            }, e.exports = r
        }, {}],
        4: [function (t, e, i) {
            var r = t("./common.js"),
                n = {};
            n.create = function () {
                var t = new r.ARRAY_TYPE(4);
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t
            }, n.clone = function (t) {
                var e = new r.ARRAY_TYPE(4);
                return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e
            }, n.copy = function (t, e) {
                return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
            }, n.identity = function (t) {
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t
            }, n.fromValues = function (t, e, i, n) {
                var o = new r.ARRAY_TYPE(4);
                return o[0] = t, o[1] = e, o[2] = i, o[3] = n, o
            }, n.set = function (t, e, i, r, n) {
                return t[0] = e, t[1] = i, t[2] = r, t[3] = n, t
            }, n.transpose = function (t, e) {
                if (t === e) {
                    var i = e[1];
                    t[1] = e[2], t[2] = i
                } else t[0] = e[0], t[1] = e[2], t[2] = e[1], t[3] = e[3];
                return t
            }, n.invert = function (t, e) {
                var i = e[0],
                    r = e[1],
                    n = e[2],
                    o = e[3],
                    s = i * o - n * r;
                return s ? (s = 1 / s, t[0] = o * s, t[1] = -r * s, t[2] = -n * s, t[3] = i * s, t) : null
            }, n.adjoint = function (t, e) {
                var i = e[0];
                return t[0] = e[3], t[1] = -e[1], t[2] = -e[2], t[3] = i, t
            }, n.determinant = function (t) {
                return t[0] * t[3] - t[2] * t[1]
            }, n.multiply = function (t, e, i) {
                var r = e[0],
                    n = e[1],
                    o = e[2],
                    s = e[3],
                    a = i[0],
                    l = i[1],
                    h = i[2],
                    u = i[3];
                return t[0] = r * a + o * l, t[1] = n * a + s * l, t[2] = r * h + o * u, t[3] = n * h + s * u, t
            }, n.mul = n.multiply, n.rotate = function (t, e, i) {
                var r = e[0],
                    n = e[1],
                    o = e[2],
                    s = e[3],
                    a = Math.sin(i),
                    l = Math.cos(i);
                return t[0] = r * l + o * a, t[1] = n * l + s * a, t[2] = r * -a + o * l, t[3] = n * -a + s * l, t
            }, n.scale = function (t, e, i) {
                var r = e[0],
                    n = e[1],
                    o = e[2],
                    s = e[3],
                    a = i[0],
                    l = i[1];
                return t[0] = r * a, t[1] = n * a, t[2] = o * l, t[3] = s * l, t
            }, n.fromRotation = function (t, e) {
                var i = Math.sin(e),
                    r = Math.cos(e);
                return t[0] = r, t[1] = i, t[2] = -i, t[3] = r, t
            }, n.fromScaling = function (t, e) {
                return t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = e[1], t
            }, n.str = function (t) {
                return "mat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
            }, n.frob = function (t) {
                return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2))
            }, n.LDU = function (t, e, i, r) {
                return t[2] = r[2] / r[0], i[0] = r[0], i[1] = r[1], i[3] = r[3] - t[2] * i[1], [t, e, i]
            }, n.add = function (t, e, i) {
                return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t[2] = e[2] + i[2], t[3] = e[3] + i[3], t
            }, n.subtract = function (t, e, i) {
                return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t[2] = e[2] - i[2], t[3] = e[3] - i[3], t
            }, n.sub = n.subtract, n.exactEquals = function (t, e) {
                return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3]
            }, n.equals = function (t, e) {
                var i = t[0],
                    n = t[1],
                    o = t[2],
                    s = t[3],
                    a = e[0],
                    l = e[1],
                    h = e[2],
                    u = e[3];
                return Math.abs(i - a) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(a)) && Math.abs(n - l) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(l)) && Math.abs(o - h) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(h)) && Math.abs(s - u) <= r.EPSILON * Math.max(1, Math.abs(s), Math.abs(u))
            }, n.multiplyScalar = function (t, e, i) {
                return t[0] = e[0] * i, t[1] = e[1] * i, t[2] = e[2] * i, t[3] = e[3] * i, t
            }, n.multiplyScalarAndAdd = function (t, e, i, r) {
                return t[0] = e[0] + i[0] * r, t[1] = e[1] + i[1] * r, t[2] = e[2] + i[2] * r, t[3] = e[3] + i[3] * r, t
            }, e.exports = n
        }, {
            "./common.js": 3
        }],
        5: [function (t, e, i) {
            var r = t("./common.js"),
                n = {};
            n.create = function () {
                var t = new r.ARRAY_TYPE(6);
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
            }, n.clone = function (t) {
                var e = new r.ARRAY_TYPE(6);
                return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e
            }, n.copy = function (t, e) {
                return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t
            }, n.identity = function (t) {
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
            }, n.fromValues = function (t, e, i, n, o, s) {
                var a = new r.ARRAY_TYPE(6);
                return a[0] = t, a[1] = e, a[2] = i, a[3] = n, a[4] = o, a[5] = s, a
            }, n.set = function (t, e, i, r, n, o, s) {
                return t[0] = e, t[1] = i, t[2] = r, t[3] = n, t[4] = o, t[5] = s, t
            }, n.invert = function (t, e) {
                var i = e[0],
                    r = e[1],
                    n = e[2],
                    o = e[3],
                    s = e[4],
                    a = e[5],
                    l = i * o - r * n;
                return l ? (l = 1 / l, t[0] = o * l, t[1] = -r * l, t[2] = -n * l, t[3] = i * l, t[4] = (n * a - o * s) * l, t[5] = (r * s - i * a) * l, t) : null
            }, n.determinant = function (t) {
                return t[0] * t[3] - t[1] * t[2]
            }, n.multiply = function (t, e, i) {
                var r = e[0],
                    n = e[1],
                    o = e[2],
                    s = e[3],
                    a = e[4],
                    l = e[5],
                    h = i[0],
                    u = i[1],
                    c = i[2],
                    p = i[3],
                    d = i[4],
                    f = i[5];
                return t[0] = r * h + o * u, t[1] = n * h + s * u, t[2] = r * c + o * p, t[3] = n * c + s * p, t[4] = r * d + o * f + a, t[5] = n * d + s * f + l, t
            }, n.mul = n.multiply, n.rotate = function (t, e, i) {
                var r = e[0],
                    n = e[1],
                    o = e[2],
                    s = e[3],
                    a = e[4],
                    l = e[5],
                    h = Math.sin(i),
                    u = Math.cos(i);
                return t[0] = r * u + o * h, t[1] = n * u + s * h, t[2] = r * -h + o * u, t[3] = n * -h + s * u, t[4] = a, t[5] = l, t
            }, n.scale = function (t, e, i) {
                var r = e[0],
                    n = e[1],
                    o = e[2],
                    s = e[3],
                    a = e[4],
                    l = e[5],
                    h = i[0],
                    u = i[1];
                return t[0] = r * h, t[1] = n * h, t[2] = o * u, t[3] = s * u, t[4] = a, t[5] = l, t
            }, n.translate = function (t, e, i) {
                var r = e[0],
                    n = e[1],
                    o = e[2],
                    s = e[3],
                    a = e[4],
                    l = e[5],
                    h = i[0],
                    u = i[1];
                return t[0] = r, t[1] = n, t[2] = o, t[3] = s, t[4] = r * h + o * u + a, t[5] = n * h + s * u + l, t
            }, n.fromRotation = function (t, e) {
                var i = Math.sin(e),
                    r = Math.cos(e);
                return t[0] = r, t[1] = i, t[2] = -i, t[3] = r, t[4] = 0, t[5] = 0, t
            }, n.fromScaling = function (t, e) {
                return t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = e[1], t[4] = 0, t[5] = 0, t
            }, n.fromTranslation = function (t, e) {
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = e[0], t[5] = e[1], t
            }, n.str = function (t) {
                return "mat2d(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ")"
            }, n.frob = function (t) {
                return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + 1)
            }, n.add = function (t, e, i) {
                return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t[2] = e[2] + i[2], t[3] = e[3] + i[3], t[4] = e[4] + i[4], t[5] = e[5] + i[5], t
            }, n.subtract = function (t, e, i) {
                return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t[2] = e[2] - i[2], t[3] = e[3] - i[3], t[4] = e[4] - i[4], t[5] = e[5] - i[5], t
            }, n.sub = n.subtract, n.multiplyScalar = function (t, e, i) {
                return t[0] = e[0] * i, t[1] = e[1] * i, t[2] = e[2] * i, t[3] = e[3] * i, t[4] = e[4] * i, t[5] = e[5] * i, t
            }, n.multiplyScalarAndAdd = function (t, e, i, r) {
                return t[0] = e[0] + i[0] * r, t[1] = e[1] + i[1] * r, t[2] = e[2] + i[2] * r, t[3] = e[3] + i[3] * r, t[4] = e[4] + i[4] * r, t[5] = e[5] + i[5] * r, t
            }, n.exactEquals = function (t, e) {
                return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5]
            }, n.equals = function (t, e) {
                var i = t[0],
                    n = t[1],
                    o = t[2],
                    s = t[3],
                    a = t[4],
                    l = t[5],
                    h = e[0],
                    u = e[1],
                    c = e[2],
                    p = e[3],
                    d = e[4],
                    f = e[5];
                return Math.abs(i - h) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(h)) && Math.abs(n - u) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(u)) && Math.abs(o - c) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(c)) && Math.abs(s - p) <= r.EPSILON * Math.max(1, Math.abs(s), Math.abs(p)) && Math.abs(a - d) <= r.EPSILON * Math.max(1, Math.abs(a), Math.abs(d)) && Math.abs(l - f) <= r.EPSILON * Math.max(1, Math.abs(l), Math.abs(f))
            }, e.exports = n
        }, {
            "./common.js": 3
        }],
        6: [function (t, e, i) {
            var r = t("./common.js"),
                n = {};
            n.create = function () {
                var t = new r.ARRAY_TYPE(9);
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
            }, n.fromMat4 = function (t, e) {
                return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[4], t[4] = e[5], t[5] = e[6], t[6] = e[8], t[7] = e[9], t[8] = e[10], t
            }, n.clone = function (t) {
                var e = new r.ARRAY_TYPE(9);
                return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e
            }, n.copy = function (t, e) {
                return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t
            }, n.fromValues = function (t, e, i, n, o, s, a, l, h) {
                var u = new r.ARRAY_TYPE(9);
                return u[0] = t, u[1] = e, u[2] = i, u[3] = n, u[4] = o, u[5] = s, u[6] = a, u[7] = l, u[8] = h, u
            }, n.set = function (t, e, i, r, n, o, s, a, l, h) {
                return t[0] = e, t[1] = i, t[2] = r, t[3] = n, t[4] = o, t[5] = s, t[6] = a, t[7] = l, t[8] = h, t
            }, n.identity = function (t) {
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
            }, n.transpose = function (t, e) {
                if (t === e) {
                    var i = e[1],
                        r = e[2],
                        n = e[5];
                    t[1] = e[3], t[2] = e[6], t[3] = i, t[5] = e[7], t[6] = r, t[7] = n
                } else t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8];
                return t
            }, n.invert = function (t, e) {
                var i = e[0],
                    r = e[1],
                    n = e[2],
                    o = e[3],
                    s = e[4],
                    a = e[5],
                    l = e[6],
                    h = e[7],
                    u = e[8],
                    c = u * s - a * h,
                    p = -u * o + a * l,
                    d = h * o - s * l,
                    f = i * c + r * p + n * d;
                return f ? (f = 1 / f, t[0] = c * f, t[1] = (-u * r + n * h) * f, t[2] = (a * r - n * s) * f, t[3] = p * f, t[4] = (u * i - n * l) * f, t[5] = (-a * i + n * o) * f, t[6] = d * f, t[7] = (-h * i + r * l) * f, t[8] = (s * i - r * o) * f, t) : null
            }, n.adjoint = function (t, e) {
                var i = e[0],
                    r = e[1],
                    n = e[2],
                    o = e[3],
                    s = e[4],
                    a = e[5],
                    l = e[6],
                    h = e[7],
                    u = e[8];
                return t[0] = s * u - a * h, t[1] = n * h - r * u, t[2] = r * a - n * s, t[3] = a * l - o * u, t[4] = i * u - n * l, t[5] = n * o - i * a, t[6] = o * h - s * l, t[7] = r * l - i * h, t[8] = i * s - r * o, t
            }, n.determinant = function (t) {
                var e = t[0],
                    i = t[1],
                    r = t[2],
                    n = t[3],
                    o = t[4],
                    s = t[5],
                    a = t[6],
                    l = t[7],
                    h = t[8];
                return e * (h * o - s * l) + i * (-h * n + s * a) + r * (l * n - o * a)
            }, n.multiply = function (t, e, i) {
                var r = e[0],
                    n = e[1],
                    o = e[2],
                    s = e[3],
                    a = e[4],
                    l = e[5],
                    h = e[6],
                    u = e[7],
                    c = e[8],
                    p = i[0],
                    d = i[1],
                    f = i[2],
                    m = i[3],
                    v = i[4],
                    _ = i[5],
                    y = i[6],
                    g = i[7],
                    x = i[8];
                return t[0] = p * r + d * s + f * h, t[1] = p * n + d * a + f * u, t[2] = p * o + d * l + f * c, t[3] = m * r + v * s + _ * h, t[4] = m * n + v * a + _ * u, t[5] = m * o + v * l + _ * c, t[6] = y * r + g * s + x * h, t[7] = y * n + g * a + x * u, t[8] = y * o + g * l + x * c, t
            }, n.mul = n.multiply, n.translate = function (t, e, i) {
                var r = e[0],
                    n = e[1],
                    o = e[2],
                    s = e[3],
                    a = e[4],
                    l = e[5],
                    h = e[6],
                    u = e[7],
                    c = e[8],
                    p = i[0],
                    d = i[1];
                return t[0] = r, t[1] = n, t[2] = o, t[3] = s, t[4] = a, t[5] = l, t[6] = p * r + d * s + h, t[7] = p * n + d * a + u, t[8] = p * o + d * l + c, t
            }, n.rotate = function (t, e, i) {
                var r = e[0],
                    n = e[1],
                    o = e[2],
                    s = e[3],
                    a = e[4],
                    l = e[5],
                    h = e[6],
                    u = e[7],
                    c = e[8],
                    p = Math.sin(i),
                    d = Math.cos(i);
                return t[0] = d * r + p * s, t[1] = d * n + p * a, t[2] = d * o + p * l, t[3] = d * s - p * r, t[4] = d * a - p * n, t[5] = d * l - p * o, t[6] = h, t[7] = u, t[8] = c, t
            }, n.scale = function (t, e, i) {
                var r = i[0],
                    n = i[1];
                return t[0] = r * e[0], t[1] = r * e[1], t[2] = r * e[2], t[3] = n * e[3], t[4] = n * e[4], t[5] = n * e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t
            }, n.fromTranslation = function (t, e) {
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = e[0], t[7] = e[1], t[8] = 1, t
            }, n.fromRotation = function (t, e) {
                var i = Math.sin(e),
                    r = Math.cos(e);
                return t[0] = r, t[1] = i, t[2] = 0, t[3] = -i, t[4] = r, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
            }, n.fromScaling = function (t, e) {
                return t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = e[1], t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
            }, n.fromMat2d = function (t, e) {
                return t[0] = e[0], t[1] = e[1], t[2] = 0, t[3] = e[2], t[4] = e[3], t[5] = 0, t[6] = e[4], t[7] = e[5], t[8] = 1, t
            }, n.fromQuat = function (t, e) {
                var i = e[0],
                    r = e[1],
                    n = e[2],
                    o = e[3],
                    s = i + i,
                    a = r + r,
                    l = n + n,
                    h = i * s,
                    u = r * s,
                    c = r * a,
                    p = n * s,
                    d = n * a,
                    f = n * l,
                    m = o * s,
                    v = o * a,
                    _ = o * l;
                return t[0] = 1 - c - f, t[3] = u - _, t[6] = p + v, t[1] = u + _, t[4] = 1 - h - f, t[7] = d - m, t[2] = p - v, t[5] = d + m, t[8] = 1 - h - c, t
            }, n.normalFromMat4 = function (t, e) {
                var i = e[0],
                    r = e[1],
                    n = e[2],
                    o = e[3],
                    s = e[4],
                    a = e[5],
                    l = e[6],
                    h = e[7],
                    u = e[8],
                    c = e[9],
                    p = e[10],
                    d = e[11],
                    f = e[12],
                    m = e[13],
                    v = e[14],
                    _ = e[15],
                    y = i * a - r * s,
                    g = i * l - n * s,
                    x = i * h - o * s,
                    w = r * l - n * a,
                    M = r * h - o * a,
                    b = n * h - o * l,
                    S = u * m - c * f,
                    E = u * v - p * f,
                    I = u * _ - d * f,
                    D = c * v - p * m,
                    T = c * _ - d * m,
                    L = p * _ - d * v,
                    F = y * L - g * T + x * D + w * I - M * E + b * S;
                return F ? (F = 1 / F, t[0] = (a * L - l * T + h * D) * F, t[1] = (l * I - s * L - h * E) * F, t[2] = (s * T - a * I + h * S) * F, t[3] = (n * T - r * L - o * D) * F, t[4] = (i * L - n * I + o * E) * F, t[5] = (r * I - i * T - o * S) * F, t[6] = (m * b - v * M + _ * w) * F, t[7] = (v * x - f * b - _ * g) * F, t[8] = (f * M - m * x + _ * y) * F, t) : null
            }, n.str = function (t) {
                return "mat3(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ")"
            }, n.frob = function (t) {
                return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2))
            }, n.add = function (t, e, i) {
                return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t[2] = e[2] + i[2], t[3] = e[3] + i[3], t[4] = e[4] + i[4], t[5] = e[5] + i[5], t[6] = e[6] + i[6], t[7] = e[7] + i[7], t[8] = e[8] + i[8], t
            }, n.subtract = function (t, e, i) {
                return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t[2] = e[2] - i[2], t[3] = e[3] - i[3], t[4] = e[4] - i[4], t[5] = e[5] - i[5], t[6] = e[6] - i[6], t[7] = e[7] - i[7], t[8] = e[8] - i[8], t
            }, n.sub = n.subtract, n.multiplyScalar = function (t, e, i) {
                return t[0] = e[0] * i, t[1] = e[1] * i, t[2] = e[2] * i, t[3] = e[3] * i, t[4] = e[4] * i, t[5] = e[5] * i, t[6] = e[6] * i, t[7] = e[7] * i, t[8] = e[8] * i, t
            }, n.multiplyScalarAndAdd = function (t, e, i, r) {
                return t[0] = e[0] + i[0] * r, t[1] = e[1] + i[1] * r, t[2] = e[2] + i[2] * r, t[3] = e[3] + i[3] * r, t[4] = e[4] + i[4] * r, t[5] = e[5] + i[5] * r, t[6] = e[6] + i[6] * r, t[7] = e[7] + i[7] * r, t[8] = e[8] + i[8] * r, t
            }, n.exactEquals = function (t, e) {
                return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7] && t[8] === e[8]
            }, n.equals = function (t, e) {
                var i = t[0],
                    n = t[1],
                    o = t[2],
                    s = t[3],
                    a = t[4],
                    l = t[5],
                    h = t[6],
                    u = t[7],
                    c = t[8],
                    p = e[0],
                    d = e[1],
                    f = e[2],
                    m = e[3],
                    v = e[4],
                    _ = e[5],
                    y = e[6],
                    g = e[7],
                    x = e[8];
                return Math.abs(i - p) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(p)) && Math.abs(n - d) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(d)) && Math.abs(o - f) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(f)) && Math.abs(s - m) <= r.EPSILON * Math.max(1, Math.abs(s), Math.abs(m)) && Math.abs(a - v) <= r.EPSILON * Math.max(1, Math.abs(a), Math.abs(v)) && Math.abs(l - _) <= r.EPSILON * Math.max(1, Math.abs(l), Math.abs(_)) && Math.abs(h - y) <= r.EPSILON * Math.max(1, Math.abs(h), Math.abs(y)) && Math.abs(u - g) <= r.EPSILON * Math.max(1, Math.abs(u), Math.abs(g)) && Math.abs(c - x) <= r.EPSILON * Math.max(1, Math.abs(c), Math.abs(x))
            }, e.exports = n
        }, {
            "./common.js": 3
        }],
        7: [function (t, e, i) {
            var r = t("./common.js"),
                n = {
                    scalar: {},
                    SIMD: {}
                };
            n.create = function () {
                var t = new r.ARRAY_TYPE(16);
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
            }, n.clone = function (t) {
                var e = new r.ARRAY_TYPE(16);
                return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e
            }, n.copy = function (t, e) {
                return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t
            }, n.fromValues = function (t, e, i, n, o, s, a, l, h, u, c, p, d, f, m, v) {
                var _ = new r.ARRAY_TYPE(16);
                return _[0] = t, _[1] = e, _[2] = i, _[3] = n, _[4] = o, _[5] = s, _[6] = a, _[7] = l, _[8] = h, _[9] = u, _[10] = c, _[11] = p, _[12] = d, _[13] = f, _[14] = m, _[15] = v, _
            }, n.set = function (t, e, i, r, n, o, s, a, l, h, u, c, p, d, f, m, v) {
                return t[0] = e, t[1] = i, t[2] = r, t[3] = n, t[4] = o, t[5] = s, t[6] = a, t[7] = l, t[8] = h, t[9] = u, t[10] = c, t[11] = p, t[12] = d, t[13] = f, t[14] = m, t[15] = v, t
            }, n.identity = function (t) {
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
            }, n.scalar.transpose = function (t, e) {
                if (t === e) {
                    var i = e[1],
                        r = e[2],
                        n = e[3],
                        o = e[6],
                        s = e[7],
                        a = e[11];
                    t[1] = e[4], t[2] = e[8], t[3] = e[12], t[4] = i, t[6] = e[9], t[7] = e[13], t[8] = r, t[9] = o, t[11] = e[14], t[12] = n, t[13] = s, t[14] = a
                } else t[0] = e[0], t[1] = e[4], t[2] = e[8], t[3] = e[12], t[4] = e[1], t[5] = e[5], t[6] = e[9], t[7] = e[13], t[8] = e[2], t[9] = e[6], t[10] = e[10], t[11] = e[14], t[12] = e[3], t[13] = e[7], t[14] = e[11], t[15] = e[15];
                return t
            }, n.SIMD.transpose = function (t, e) {
                var i, r, n, o, s, a, l, h, u, c;
                return i = SIMD.Float32x4.load(e, 0), r = SIMD.Float32x4.load(e, 4), n = SIMD.Float32x4.load(e, 8), o = SIMD.Float32x4.load(e, 12), s = SIMD.Float32x4.shuffle(i, r, 0, 1, 4, 5), a = SIMD.Float32x4.shuffle(n, o, 0, 1, 4, 5), l = SIMD.Float32x4.shuffle(s, a, 0, 2, 4, 6), h = SIMD.Float32x4.shuffle(s, a, 1, 3, 5, 7), SIMD.Float32x4.store(t, 0, l), SIMD.Float32x4.store(t, 4, h), s = SIMD.Float32x4.shuffle(i, r, 2, 3, 6, 7), a = SIMD.Float32x4.shuffle(n, o, 2, 3, 6, 7), u = SIMD.Float32x4.shuffle(s, a, 0, 2, 4, 6), c = SIMD.Float32x4.shuffle(s, a, 1, 3, 5, 7), SIMD.Float32x4.store(t, 8, u), SIMD.Float32x4.store(t, 12, c), t
            }, n.transpose = r.USE_SIMD ? n.SIMD.transpose : n.scalar.transpose, n.scalar.invert = function (t, e) {
                var i = e[0],
                    r = e[1],
                    n = e[2],
                    o = e[3],
                    s = e[4],
                    a = e[5],
                    l = e[6],
                    h = e[7],
                    u = e[8],
                    c = e[9],
                    p = e[10],
                    d = e[11],
                    f = e[12],
                    m = e[13],
                    v = e[14],
                    _ = e[15],
                    y = i * a - r * s,
                    g = i * l - n * s,
                    x = i * h - o * s,
                    w = r * l - n * a,
                    M = r * h - o * a,
                    b = n * h - o * l,
                    S = u * m - c * f,
                    E = u * v - p * f,
                    I = u * _ - d * f,
                    D = c * v - p * m,
                    T = c * _ - d * m,
                    L = p * _ - d * v,
                    F = y * L - g * T + x * D + w * I - M * E + b * S;
                return F ? (F = 1 / F, t[0] = (a * L - l * T + h * D) * F, t[1] = (n * T - r * L - o * D) * F, t[2] = (m * b - v * M + _ * w) * F, t[3] = (p * M - c * b - d * w) * F, t[4] = (l * I - s * L - h * E) * F, t[5] = (i * L - n * I + o * E) * F, t[6] = (v * x - f * b - _ * g) * F, t[7] = (u * b - p * x + d * g) * F, t[8] = (s * T - a * I + h * S) * F, t[9] = (r * I - i * T - o * S) * F, t[10] = (f * M - m * x + _ * y) * F, t[11] = (c * x - u * M - d * y) * F, t[12] = (a * E - s * D - l * S) * F, t[13] = (i * D - r * E + n * S) * F, t[14] = (m * g - f * w - v * y) * F, t[15] = (u * w - c * g + p * y) * F, t) : null
            }, n.SIMD.invert = function (t, e) {
                var i, r, n, o, s, a, l, h, u, c, p = SIMD.Float32x4.load(e, 0),
                    d = SIMD.Float32x4.load(e, 4),
                    f = SIMD.Float32x4.load(e, 8),
                    m = SIMD.Float32x4.load(e, 12);
                return s = SIMD.Float32x4.shuffle(p, d, 0, 1, 4, 5), r = SIMD.Float32x4.shuffle(f, m, 0, 1, 4, 5), i = SIMD.Float32x4.shuffle(s, r, 0, 2, 4, 6), r = SIMD.Float32x4.shuffle(r, s, 1, 3, 5, 7), s = SIMD.Float32x4.shuffle(p, d, 2, 3, 6, 7), o = SIMD.Float32x4.shuffle(f, m, 2, 3, 6, 7), n = SIMD.Float32x4.shuffle(s, o, 0, 2, 4, 6), o = SIMD.Float32x4.shuffle(o, s, 1, 3, 5, 7), s = SIMD.Float32x4.mul(n, o), s = SIMD.Float32x4.swizzle(s, 1, 0, 3, 2), a = SIMD.Float32x4.mul(r, s), l = SIMD.Float32x4.mul(i, s), s = SIMD.Float32x4.swizzle(s, 2, 3, 0, 1), a = SIMD.Float32x4.sub(SIMD.Float32x4.mul(r, s), a), l = SIMD.Float32x4.sub(SIMD.Float32x4.mul(i, s), l), l = SIMD.Float32x4.swizzle(l, 2, 3, 0, 1), s = SIMD.Float32x4.mul(r, n), s = SIMD.Float32x4.swizzle(s, 1, 0, 3, 2), a = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, s), a), u = SIMD.Float32x4.mul(i, s), s = SIMD.Float32x4.swizzle(s, 2, 3, 0, 1), a = SIMD.Float32x4.sub(a, SIMD.Float32x4.mul(o, s)), u = SIMD.Float32x4.sub(SIMD.Float32x4.mul(i, s), u), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), s = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(r, 2, 3, 0, 1), o), s = SIMD.Float32x4.swizzle(s, 1, 0, 3, 2), n = SIMD.Float32x4.swizzle(n, 2, 3, 0, 1), a = SIMD.Float32x4.add(SIMD.Float32x4.mul(n, s), a), h = SIMD.Float32x4.mul(i, s), s = SIMD.Float32x4.swizzle(s, 2, 3, 0, 1), a = SIMD.Float32x4.sub(a, SIMD.Float32x4.mul(n, s)), h = SIMD.Float32x4.sub(SIMD.Float32x4.mul(i, s), h), h = SIMD.Float32x4.swizzle(h, 2, 3, 0, 1), s = SIMD.Float32x4.mul(i, r), s = SIMD.Float32x4.swizzle(s, 1, 0, 3, 2), h = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, s), h), u = SIMD.Float32x4.sub(SIMD.Float32x4.mul(n, s), u), s = SIMD.Float32x4.swizzle(s, 2, 3, 0, 1), h = SIMD.Float32x4.sub(SIMD.Float32x4.mul(o, s), h), u = SIMD.Float32x4.sub(u, SIMD.Float32x4.mul(n, s)), s = SIMD.Float32x4.mul(i, o), s = SIMD.Float32x4.swizzle(s, 1, 0, 3, 2), l = SIMD.Float32x4.sub(l, SIMD.Float32x4.mul(n, s)), h = SIMD.Float32x4.add(SIMD.Float32x4.mul(r, s), h), s = SIMD.Float32x4.swizzle(s, 2, 3, 0, 1), l = SIMD.Float32x4.add(SIMD.Float32x4.mul(n, s), l), h = SIMD.Float32x4.sub(h, SIMD.Float32x4.mul(r, s)), s = SIMD.Float32x4.mul(i, n), s = SIMD.Float32x4.swizzle(s, 1, 0, 3, 2), l = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, s), l), u = SIMD.Float32x4.sub(u, SIMD.Float32x4.mul(r, s)), s = SIMD.Float32x4.swizzle(s, 2, 3, 0, 1), l = SIMD.Float32x4.sub(l, SIMD.Float32x4.mul(o, s)), u = SIMD.Float32x4.add(SIMD.Float32x4.mul(r, s), u), c = SIMD.Float32x4.mul(i, a), c = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), c), c = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(c, 1, 0, 3, 2), c), s = SIMD.Float32x4.reciprocalApproximation(c), c = SIMD.Float32x4.sub(SIMD.Float32x4.add(s, s), SIMD.Float32x4.mul(c, SIMD.Float32x4.mul(s, s))), (c = SIMD.Float32x4.swizzle(c, 0, 0, 0, 0)) ? (SIMD.Float32x4.store(t, 0, SIMD.Float32x4.mul(c, a)), SIMD.Float32x4.store(t, 4, SIMD.Float32x4.mul(c, l)), SIMD.Float32x4.store(t, 8, SIMD.Float32x4.mul(c, h)), SIMD.Float32x4.store(t, 12, SIMD.Float32x4.mul(c, u)), t) : null
            }, n.invert = r.USE_SIMD ? n.SIMD.invert : n.scalar.invert, n.scalar.adjoint = function (t, e) {
                var i = e[0],
                    r = e[1],
                    n = e[2],
                    o = e[3],
                    s = e[4],
                    a = e[5],
                    l = e[6],
                    h = e[7],
                    u = e[8],
                    c = e[9],
                    p = e[10],
                    d = e[11],
                    f = e[12],
                    m = e[13],
                    v = e[14],
                    _ = e[15];
                return t[0] = a * (p * _ - d * v) - c * (l * _ - h * v) + m * (l * d - h * p), t[1] = -(r * (p * _ - d * v) - c * (n * _ - o * v) + m * (n * d - o * p)), t[2] = r * (l * _ - h * v) - a * (n * _ - o * v) + m * (n * h - o * l), t[3] = -(r * (l * d - h * p) - a * (n * d - o * p) + c * (n * h - o * l)), t[4] = -(s * (p * _ - d * v) - u * (l * _ - h * v) + f * (l * d - h * p)), t[5] = i * (p * _ - d * v) - u * (n * _ - o * v) + f * (n * d - o * p), t[6] = -(i * (l * _ - h * v) - s * (n * _ - o * v) + f * (n * h - o * l)), t[7] = i * (l * d - h * p) - s * (n * d - o * p) + u * (n * h - o * l), t[8] = s * (c * _ - d * m) - u * (a * _ - h * m) + f * (a * d - h * c), t[9] = -(i * (c * _ - d * m) - u * (r * _ - o * m) + f * (r * d - o * c)), t[10] = i * (a * _ - h * m) - s * (r * _ - o * m) + f * (r * h - o * a), t[11] = -(i * (a * d - h * c) - s * (r * d - o * c) + u * (r * h - o * a)), t[12] = -(s * (c * v - p * m) - u * (a * v - l * m) + f * (a * p - l * c)), t[13] = i * (c * v - p * m) - u * (r * v - n * m) + f * (r * p - n * c), t[14] = -(i * (a * v - l * m) - s * (r * v - n * m) + f * (r * l - n * a)), t[15] = i * (a * p - l * c) - s * (r * p - n * c) + u * (r * l - n * a), t
            }, n.SIMD.adjoint = function (t, e) {
                var i, r, n, o, s, a, l, h, u, c, p, d, f;
                return i = SIMD.Float32x4.load(e, 0), r = SIMD.Float32x4.load(e, 4), n = SIMD.Float32x4.load(e, 8), o = SIMD.Float32x4.load(e, 12), u = SIMD.Float32x4.shuffle(i, r, 0, 1, 4, 5), a = SIMD.Float32x4.shuffle(n, o, 0, 1, 4, 5), s = SIMD.Float32x4.shuffle(u, a, 0, 2, 4, 6), a = SIMD.Float32x4.shuffle(a, u, 1, 3, 5, 7), u = SIMD.Float32x4.shuffle(i, r, 2, 3, 6, 7), h = SIMD.Float32x4.shuffle(n, o, 2, 3, 6, 7), l = SIMD.Float32x4.shuffle(u, h, 0, 2, 4, 6), h = SIMD.Float32x4.shuffle(h, u, 1, 3, 5, 7), u = SIMD.Float32x4.mul(l, h), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), c = SIMD.Float32x4.mul(a, u), p = SIMD.Float32x4.mul(s, u), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), c = SIMD.Float32x4.sub(SIMD.Float32x4.mul(a, u), c), p = SIMD.Float32x4.sub(SIMD.Float32x4.mul(s, u), p), p = SIMD.Float32x4.swizzle(p, 2, 3, 0, 1), u = SIMD.Float32x4.mul(a, l), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), c = SIMD.Float32x4.add(SIMD.Float32x4.mul(h, u), c), f = SIMD.Float32x4.mul(s, u), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), c = SIMD.Float32x4.sub(c, SIMD.Float32x4.mul(h, u)), f = SIMD.Float32x4.sub(SIMD.Float32x4.mul(s, u), f), f = SIMD.Float32x4.swizzle(f, 2, 3, 0, 1), u = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(a, 2, 3, 0, 1), h), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), l = SIMD.Float32x4.swizzle(l, 2, 3, 0, 1), c = SIMD.Float32x4.add(SIMD.Float32x4.mul(l, u), c), d = SIMD.Float32x4.mul(s, u), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), c = SIMD.Float32x4.sub(c, SIMD.Float32x4.mul(l, u)), d = SIMD.Float32x4.sub(SIMD.Float32x4.mul(s, u), d), d = SIMD.Float32x4.swizzle(d, 2, 3, 0, 1), u = SIMD.Float32x4.mul(s, a), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), d = SIMD.Float32x4.add(SIMD.Float32x4.mul(h, u), d), f = SIMD.Float32x4.sub(SIMD.Float32x4.mul(l, u), f), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), d = SIMD.Float32x4.sub(SIMD.Float32x4.mul(h, u), d), f = SIMD.Float32x4.sub(f, SIMD.Float32x4.mul(l, u)), u = SIMD.Float32x4.mul(s, h), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), p = SIMD.Float32x4.sub(p, SIMD.Float32x4.mul(l, u)), d = SIMD.Float32x4.add(SIMD.Float32x4.mul(a, u), d), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), p = SIMD.Float32x4.add(SIMD.Float32x4.mul(l, u), p), d = SIMD.Float32x4.sub(d, SIMD.Float32x4.mul(a, u)), u = SIMD.Float32x4.mul(s, l), u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2), p = SIMD.Float32x4.add(SIMD.Float32x4.mul(h, u), p), f = SIMD.Float32x4.sub(f, SIMD.Float32x4.mul(a, u)), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), p = SIMD.Float32x4.sub(p, SIMD.Float32x4.mul(h, u)), f = SIMD.Float32x4.add(SIMD.Float32x4.mul(a, u), f), SIMD.Float32x4.store(t, 0, c), SIMD.Float32x4.store(t, 4, p), SIMD.Float32x4.store(t, 8, d), SIMD.Float32x4.store(t, 12, f), t
            }, n.adjoint = r.USE_SIMD ? n.SIMD.adjoint : n.scalar.adjoint, n.determinant = function (t) {
                var e = t[0],
                    i = t[1],
                    r = t[2],
                    n = t[3],
                    o = t[4],
                    s = t[5],
                    a = t[6],
                    l = t[7],
                    h = t[8],
                    u = t[9],
                    c = t[10],
                    p = t[11],
                    d = t[12],
                    f = t[13],
                    m = t[14],
                    v = t[15];
                return (e * s - i * o) * (c * v - p * m) - (e * a - r * o) * (u * v - p * f) + (e * l - n * o) * (u * m - c * f) + (i * a - r * s) * (h * v - p * d) - (i * l - n * s) * (h * m - c * d) + (r * l - n * a) * (h * f - u * d)
            }, n.SIMD.multiply = function (t, e, i) {
                var r = SIMD.Float32x4.load(e, 0),
                    n = SIMD.Float32x4.load(e, 4),
                    o = SIMD.Float32x4.load(e, 8),
                    s = SIMD.Float32x4.load(e, 12),
                    a = SIMD.Float32x4.load(i, 0),
                    l = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(a, 0, 0, 0, 0), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(a, 1, 1, 1, 1), n), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(a, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(a, 3, 3, 3, 3), s))));
                SIMD.Float32x4.store(t, 0, l);
                var h = SIMD.Float32x4.load(i, 4),
                    u = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 0, 0, 0, 0), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 1, 1, 1, 1), n), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 3, 3, 3, 3), s))));
                SIMD.Float32x4.store(t, 4, u);
                var c = SIMD.Float32x4.load(i, 8),
                    p = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c, 0, 0, 0, 0), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c, 1, 1, 1, 1), n), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c, 3, 3, 3, 3), s))));
                SIMD.Float32x4.store(t, 8, p);
                var d = SIMD.Float32x4.load(i, 12),
                    f = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(d, 0, 0, 0, 0), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(d, 1, 1, 1, 1), n), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(d, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(d, 3, 3, 3, 3), s))));
                return SIMD.Float32x4.store(t, 12, f), t
            }, n.scalar.multiply = function (t, e, i) {
                var r = e[0],
                    n = e[1],
                    o = e[2],
                    s = e[3],
                    a = e[4],
                    l = e[5],
                    h = e[6],
                    u = e[7],
                    c = e[8],
                    p = e[9],
                    d = e[10],
                    f = e[11],
                    m = e[12],
                    v = e[13],
                    _ = e[14],
                    y = e[15],
                    g = i[0],
                    x = i[1],
                    w = i[2],
                    M = i[3];
                return t[0] = g * r + x * a + w * c + M * m, t[1] = g * n + x * l + w * p + M * v, t[2] = g * o + x * h + w * d + M * _, t[3] = g * s + x * u + w * f + M * y, g = i[4], x = i[5], w = i[6], M = i[7], t[4] = g * r + x * a + w * c + M * m, t[5] = g * n + x * l + w * p + M * v, t[6] = g * o + x * h + w * d + M * _, t[7] = g * s + x * u + w * f + M * y, g = i[8], x = i[9], w = i[10], M = i[11], t[8] = g * r + x * a + w * c + M * m, t[9] = g * n + x * l + w * p + M * v, t[10] = g * o + x * h + w * d + M * _, t[11] = g * s + x * u + w * f + M * y, g = i[12], x = i[13], w = i[14], M = i[15], t[12] = g * r + x * a + w * c + M * m, t[13] = g * n + x * l + w * p + M * v, t[14] = g * o + x * h + w * d + M * _, t[15] = g * s + x * u + w * f + M * y, t
            }, n.multiply = r.USE_SIMD ? n.SIMD.multiply : n.scalar.multiply, n.mul = n.multiply, n.scalar.translate = function (t, e, i) {
                var r, n, o, s, a, l, h, u, c, p, d, f, m = i[0],
                    v = i[1],
                    _ = i[2];
                return e === t ? (t[12] = e[0] * m + e[4] * v + e[8] * _ + e[12], t[13] = e[1] * m + e[5] * v + e[9] * _ + e[13], t[14] = e[2] * m + e[6] * v + e[10] * _ + e[14], t[15] = e[3] * m + e[7] * v + e[11] * _ + e[15]) : (r = e[0], n = e[1], o = e[2], s = e[3], a = e[4], l = e[5], h = e[6], u = e[7], c = e[8], p = e[9], d = e[10], f = e[11], t[0] = r, t[1] = n, t[2] = o, t[3] = s, t[4] = a, t[5] = l, t[6] = h, t[7] = u, t[8] = c, t[9] = p, t[10] = d, t[11] = f, t[12] = r * m + a * v + c * _ + e[12], t[13] = n * m + l * v + p * _ + e[13], t[14] = o * m + h * v + d * _ + e[14], t[15] = s * m + u * v + f * _ + e[15]), t
            }, n.SIMD.translate = function (t, e, i) {
                var r = SIMD.Float32x4.load(e, 0),
                    n = SIMD.Float32x4.load(e, 4),
                    o = SIMD.Float32x4.load(e, 8),
                    s = SIMD.Float32x4.load(e, 12),
                    a = SIMD.Float32x4(i[0], i[1], i[2], 0);
                e !== t && (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11]), r = SIMD.Float32x4.mul(r, SIMD.Float32x4.swizzle(a, 0, 0, 0, 0)), n = SIMD.Float32x4.mul(n, SIMD.Float32x4.swizzle(a, 1, 1, 1, 1)), o = SIMD.Float32x4.mul(o, SIMD.Float32x4.swizzle(a, 2, 2, 2, 2));
                var l = SIMD.Float32x4.add(r, SIMD.Float32x4.add(n, SIMD.Float32x4.add(o, s)));
                return SIMD.Float32x4.store(t, 12, l), t
            }, n.translate = r.USE_SIMD ? n.SIMD.translate : n.scalar.translate, n.scalar.scale = function (t, e, i) {
                var r = i[0],
                    n = i[1],
                    o = i[2];
                return t[0] = e[0] * r, t[1] = e[1] * r, t[2] = e[2] * r, t[3] = e[3] * r, t[4] = e[4] * n, t[5] = e[5] * n, t[6] = e[6] * n, t[7] = e[7] * n, t[8] = e[8] * o, t[9] = e[9] * o, t[10] = e[10] * o, t[11] = e[11] * o, t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t
            }, n.SIMD.scale = function (t, e, i) {
                var r, n, o, s = SIMD.Float32x4(i[0], i[1], i[2], 0);
                return r = SIMD.Float32x4.load(e, 0), SIMD.Float32x4.store(t, 0, SIMD.Float32x4.mul(r, SIMD.Float32x4.swizzle(s, 0, 0, 0, 0))), n = SIMD.Float32x4.load(e, 4), SIMD.Float32x4.store(t, 4, SIMD.Float32x4.mul(n, SIMD.Float32x4.swizzle(s, 1, 1, 1, 1))), o = SIMD.Float32x4.load(e, 8), SIMD.Float32x4.store(t, 8, SIMD.Float32x4.mul(o, SIMD.Float32x4.swizzle(s, 2, 2, 2, 2))), t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t
            }, n.scale = r.USE_SIMD ? n.SIMD.scale : n.scalar.scale, n.rotate = function (t, e, i, n) {
                var o, s, a, l, h, u, c, p, d, f, m, v, _, y, g, x, w, M, b, S, E, I, D, T, L = n[0],
                    F = n[1],
                    C = n[2],
                    P = Math.sqrt(L * L + F * F + C * C);
                return Math.abs(P) < r.EPSILON ? null : (P = 1 / P, L *= P, F *= P, C *= P, o = Math.sin(i), s = Math.cos(i), a = 1 - s, l = e[0], h = e[1], u = e[2], c = e[3], p = e[4], d = e[5], f = e[6], m = e[7], v = e[8], _ = e[9], y = e[10], g = e[11], x = L * L * a + s, w = F * L * a + C * o, M = C * L * a - F * o, b = L * F * a - C * o, S = F * F * a + s, E = C * F * a + L * o, I = L * C * a + F * o, D = F * C * a - L * o, T = C * C * a + s, t[0] = l * x + p * w + v * M, t[1] = h * x + d * w + _ * M, t[2] = u * x + f * w + y * M, t[3] = c * x + m * w + g * M, t[4] = l * b + p * S + v * E, t[5] = h * b + d * S + _ * E, t[6] = u * b + f * S + y * E, t[7] = c * b + m * S + g * E, t[8] = l * I + p * D + v * T, t[9] = h * I + d * D + _ * T, t[10] = u * I + f * D + y * T, t[11] = c * I + m * D + g * T, e !== t && (t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t)
            }, n.scalar.rotateX = function (t, e, i) {
                var r = Math.sin(i),
                    n = Math.cos(i),
                    o = e[4],
                    s = e[5],
                    a = e[6],
                    l = e[7],
                    h = e[8],
                    u = e[9],
                    c = e[10],
                    p = e[11];
                return e !== t && (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[4] = o * n + h * r, t[5] = s * n + u * r, t[6] = a * n + c * r, t[7] = l * n + p * r, t[8] = h * n - o * r, t[9] = u * n - s * r, t[10] = c * n - a * r, t[11] = p * n - l * r, t
            }, n.SIMD.rotateX = function (t, e, i) {
                var r = SIMD.Float32x4.splat(Math.sin(i)),
                    n = SIMD.Float32x4.splat(Math.cos(i));
                e !== t && (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]);
                var o = SIMD.Float32x4.load(e, 4),
                    s = SIMD.Float32x4.load(e, 8);
                return SIMD.Float32x4.store(t, 4, SIMD.Float32x4.add(SIMD.Float32x4.mul(o, n), SIMD.Float32x4.mul(s, r))), SIMD.Float32x4.store(t, 8, SIMD.Float32x4.sub(SIMD.Float32x4.mul(s, n), SIMD.Float32x4.mul(o, r))), t
            }, n.rotateX = r.USE_SIMD ? n.SIMD.rotateX : n.scalar.rotateX, n.scalar.rotateY = function (t, e, i) {
                var r = Math.sin(i),
                    n = Math.cos(i),
                    o = e[0],
                    s = e[1],
                    a = e[2],
                    l = e[3],
                    h = e[8],
                    u = e[9],
                    c = e[10],
                    p = e[11];
                return e !== t && (t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[0] = o * n - h * r, t[1] = s * n - u * r, t[2] = a * n - c * r, t[3] = l * n - p * r, t[8] = o * r + h * n, t[9] = s * r + u * n, t[10] = a * r + c * n, t[11] = l * r + p * n, t
            }, n.SIMD.rotateY = function (t, e, i) {
                var r = SIMD.Float32x4.splat(Math.sin(i)),
                    n = SIMD.Float32x4.splat(Math.cos(i));
                e !== t && (t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]);
                var o = SIMD.Float32x4.load(e, 0),
                    s = SIMD.Float32x4.load(e, 8);
                return SIMD.Float32x4.store(t, 0, SIMD.Float32x4.sub(SIMD.Float32x4.mul(o, n), SIMD.Float32x4.mul(s, r))), SIMD.Float32x4.store(t, 8, SIMD.Float32x4.add(SIMD.Float32x4.mul(o, r), SIMD.Float32x4.mul(s, n))), t
            }, n.rotateY = r.USE_SIMD ? n.SIMD.rotateY : n.scalar.rotateY, n.scalar.rotateZ = function (t, e, i) {
                var r = Math.sin(i),
                    n = Math.cos(i),
                    o = e[0],
                    s = e[1],
                    a = e[2],
                    l = e[3],
                    h = e[4],
                    u = e[5],
                    c = e[6],
                    p = e[7];
                return e !== t && (t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[0] = o * n + h * r, t[1] = s * n + u * r, t[2] = a * n + c * r, t[3] = l * n + p * r, t[4] = h * n - o * r, t[5] = u * n - s * r, t[6] = c * n - a * r, t[7] = p * n - l * r, t
            }, n.SIMD.rotateZ = function (t, e, i) {
                var r = SIMD.Float32x4.splat(Math.sin(i)),
                    n = SIMD.Float32x4.splat(Math.cos(i));
                e !== t && (t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]);
                var o = SIMD.Float32x4.load(e, 0),
                    s = SIMD.Float32x4.load(e, 4);
                return SIMD.Float32x4.store(t, 0, SIMD.Float32x4.add(SIMD.Float32x4.mul(o, n), SIMD.Float32x4.mul(s, r))), SIMD.Float32x4.store(t, 4, SIMD.Float32x4.sub(SIMD.Float32x4.mul(s, n), SIMD.Float32x4.mul(o, r))), t
            }, n.rotateZ = r.USE_SIMD ? n.SIMD.rotateZ : n.scalar.rotateZ, n.fromTranslation = function (t, e) {
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = e[0], t[13] = e[1], t[14] = e[2], t[15] = 1, t
            }, n.fromScaling = function (t, e) {
                return t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = e[1], t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = e[2], t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
            }, n.fromRotation = function (t, e, i) {
                var n, o, s, a = i[0],
                    l = i[1],
                    h = i[2],
                    u = Math.sqrt(a * a + l * l + h * h);
                return Math.abs(u) < r.EPSILON ? null : (u = 1 / u, a *= u, l *= u, h *= u, n = Math.sin(e), o = Math.cos(e), s = 1 - o, t[0] = a * a * s + o, t[1] = l * a * s + h * n, t[2] = h * a * s - l * n, t[3] = 0, t[4] = a * l * s - h * n, t[5] = l * l * s + o, t[6] = h * l * s + a * n, t[7] = 0, t[8] = a * h * s + l * n, t[9] = l * h * s - a * n, t[10] = h * h * s + o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t)
            }, n.fromXRotation = function (t, e) {
                var i = Math.sin(e),
                    r = Math.cos(e);
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = r, t[6] = i, t[7] = 0, t[8] = 0, t[9] = -i, t[10] = r, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
            }, n.fromYRotation = function (t, e) {
                var i = Math.sin(e),
                    r = Math.cos(e);
                return t[0] = r, t[1] = 0, t[2] = -i, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = i, t[9] = 0, t[10] = r, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
            }, n.fromZRotation = function (t, e) {
                var i = Math.sin(e),
                    r = Math.cos(e);
                return t[0] = r, t[1] = i, t[2] = 0, t[3] = 0, t[4] = -i, t[5] = r, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
            }, n.fromRotationTranslation = function (t, e, i) {
                var r = e[0],
                    n = e[1],
                    o = e[2],
                    s = e[3],
                    a = r + r,
                    l = n + n,
                    h = o + o,
                    u = r * a,
                    c = r * l,
                    p = r * h,
                    d = n * l,
                    f = n * h,
                    m = o * h,
                    v = s * a,
                    _ = s * l,
                    y = s * h;
                return t[0] = 1 - (d + m), t[1] = c + y, t[2] = p - _, t[3] = 0, t[4] = c - y, t[5] = 1 - (u + m), t[6] = f + v, t[7] = 0, t[8] = p + _, t[9] = f - v, t[10] = 1 - (u + d), t[11] = 0, t[12] = i[0], t[13] = i[1], t[14] = i[2], t[15] = 1, t
            }, n.getTranslation = function (t, e) {
                return t[0] = e[12], t[1] = e[13], t[2] = e[14], t
            }, n.getScaling = function (t, e) {
                var i = e[0],
                    r = e[1],
                    n = e[2],
                    o = e[4],
                    s = e[5],
                    a = e[6],
                    l = e[8],
                    h = e[9],
                    u = e[10];
                return t[0] = Math.sqrt(i * i + r * r + n * n), t[1] = Math.sqrt(o * o + s * s + a * a), t[2] = Math.sqrt(l * l + h * h + u * u), t
            }, n.getRotation = function (t, e) {
                var i = e[0] + e[5] + e[10],
                    r = 0;
                return i > 0 ? (r = 2 * Math.sqrt(i + 1), t[3] = .25 * r, t[0] = (e[6] - e[9]) / r, t[1] = (e[8] - e[2]) / r, t[2] = (e[1] - e[4]) / r) : e[0] > e[5] & e[0] > e[10] ? (r = 2 * Math.sqrt(1 + e[0] - e[5] - e[10]), t[3] = (e[6] - e[9]) / r, t[0] = .25 * r, t[1] = (e[1] + e[4]) / r, t[2] = (e[8] + e[2]) / r) : e[5] > e[10] ? (r = 2 * Math.sqrt(1 + e[5] - e[0] - e[10]), t[3] = (e[8] - e[2]) / r, t[0] = (e[1] + e[4]) / r, t[1] = .25 * r, t[2] = (e[6] + e[9]) / r) : (r = 2 * Math.sqrt(1 + e[10] - e[0] - e[5]), t[3] = (e[1] - e[4]) / r, t[0] = (e[8] + e[2]) / r, t[1] = (e[6] + e[9]) / r, t[2] = .25 * r), t
            }, n.fromRotationTranslationScale = function (t, e, i, r) {
                var n = e[0],
                    o = e[1],
                    s = e[2],
                    a = e[3],
                    l = n + n,
                    h = o + o,
                    u = s + s,
                    c = n * l,
                    p = n * h,
                    d = n * u,
                    f = o * h,
                    m = o * u,
                    v = s * u,
                    _ = a * l,
                    y = a * h,
                    g = a * u,
                    x = r[0],
                    w = r[1],
                    M = r[2];
                return t[0] = (1 - (f + v)) * x, t[1] = (p + g) * x, t[2] = (d - y) * x, t[3] = 0, t[4] = (p - g) * w, t[5] = (1 - (c + v)) * w, t[6] = (m + _) * w, t[7] = 0, t[8] = (d + y) * M, t[9] = (m - _) * M, t[10] = (1 - (c + f)) * M, t[11] = 0, t[12] = i[0], t[13] = i[1], t[14] = i[2], t[15] = 1, t
            }, n.fromRotationTranslationScaleOrigin = function (t, e, i, r, n) {
                var o = e[0],
                    s = e[1],
                    a = e[2],
                    l = e[3],
                    h = o + o,
                    u = s + s,
                    c = a + a,
                    p = o * h,
                    d = o * u,
                    f = o * c,
                    m = s * u,
                    v = s * c,
                    _ = a * c,
                    y = l * h,
                    g = l * u,
                    x = l * c,
                    w = r[0],
                    M = r[1],
                    b = r[2],
                    S = n[0],
                    E = n[1],
                    I = n[2];
                return t[0] = (1 - (m + _)) * w, t[1] = (d + x) * w, t[2] = (f - g) * w, t[3] = 0, t[4] = (d - x) * M, t[5] = (1 - (p + _)) * M, t[6] = (v + y) * M, t[7] = 0, t[8] = (f + g) * b, t[9] = (v - y) * b, t[10] = (1 - (p + m)) * b, t[11] = 0, t[12] = i[0] + S - (t[0] * S + t[4] * E + t[8] * I), t[13] = i[1] + E - (t[1] * S + t[5] * E + t[9] * I), t[14] = i[2] + I - (t[2] * S + t[6] * E + t[10] * I), t[15] = 1, t
            }, n.fromQuat = function (t, e) {
                var i = e[0],
                    r = e[1],
                    n = e[2],
                    o = e[3],
                    s = i + i,
                    a = r + r,
                    l = n + n,
                    h = i * s,
                    u = r * s,
                    c = r * a,
                    p = n * s,
                    d = n * a,
                    f = n * l,
                    m = o * s,
                    v = o * a,
                    _ = o * l;
                return t[0] = 1 - c - f, t[1] = u + _, t[2] = p - v, t[3] = 0, t[4] = u - _, t[5] = 1 - h - f, t[6] = d + m, t[7] = 0, t[8] = p + v, t[9] = d - m, t[10] = 1 - h - c, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
            }, n.frustum = function (t, e, i, r, n, o, s) {
                var a = 1 / (i - e),
                    l = 1 / (n - r),
                    h = 1 / (o - s);
                return t[0] = 2 * o * a, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 2 * o * l, t[6] = 0, t[7] = 0, t[8] = (i + e) * a, t[9] = (n + r) * l, t[10] = (s + o) * h, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = s * o * 2 * h, t[15] = 0, t
            }, n.perspective = function (t, e, i, r, n) {
                var o = 1 / Math.tan(e / 2),
                    s = 1 / (r - n);
                return t[0] = o / i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = o, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = (n + r) * s, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = 2 * n * r * s, t[15] = 0, t
            }, n.perspectiveFromFieldOfView = function (t, e, i, r) {
                var n = Math.tan(e.upDegrees * Math.PI / 180),
                    o = Math.tan(e.downDegrees * Math.PI / 180),
                    s = Math.tan(e.leftDegrees * Math.PI / 180),
                    a = Math.tan(e.rightDegrees * Math.PI / 180),
                    l = 2 / (s + a),
                    h = 2 / (n + o);
                return t[0] = l, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = h, t[6] = 0, t[7] = 0, t[8] = -(s - a) * l * .5, t[9] = (n - o) * h * .5, t[10] = r / (i - r), t[11] = -1, t[12] = 0, t[13] = 0, t[14] = r * i / (i - r), t[15] = 0, t
            }, n.ortho = function (t, e, i, r, n, o, s) {
                var a = 1 / (e - i),
                    l = 1 / (r - n),
                    h = 1 / (o - s);
                return t[0] = -2 * a, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * l, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * h, t[11] = 0, t[12] = (e + i) * a, t[13] = (n + r) * l, t[14] = (s + o) * h, t[15] = 1, t
            }, n.lookAt = function (t, e, i, o) {
                var s, a, l, h, u, c, p, d, f, m, v = e[0],
                    _ = e[1],
                    y = e[2],
                    g = o[0],
                    x = o[1],
                    w = o[2],
                    M = i[0],
                    b = i[1],
                    S = i[2];
                return Math.abs(v - M) < r.EPSILON && Math.abs(_ - b) < r.EPSILON && Math.abs(y - S) < r.EPSILON ? n.identity(t) : (p = v - M, d = _ - b, f = y - S, m = 1 / Math.sqrt(p * p + d * d + f * f), p *= m, d *= m, f *= m, s = x * f - w * d, a = w * p - g * f, l = g * d - x * p, m = Math.sqrt(s * s + a * a + l * l), m ? (m = 1 / m, s *= m, a *= m, l *= m) : (s = 0, a = 0, l = 0), h = d * l - f * a, u = f * s - p * l, c = p * a - d * s, m = Math.sqrt(h * h + u * u + c * c), m ? (m = 1 / m, h *= m, u *= m, c *= m) : (h = 0, u = 0, c = 0), t[0] = s, t[1] = h, t[2] = p, t[3] = 0, t[4] = a, t[5] = u, t[6] = d, t[7] = 0, t[8] = l, t[9] = c, t[10] = f, t[11] = 0, t[12] = -(s * v + a * _ + l * y), t[13] = -(h * v + u * _ + c * y), t[14] = -(p * v + d * _ + f * y), t[15] = 1, t)
            }, n.str = function (t) {
                return "mat4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ", " + t[9] + ", " + t[10] + ", " + t[11] + ", " + t[12] + ", " + t[13] + ", " + t[14] + ", " + t[15] + ")"
            }, n.frob = function (t) {
                return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2) + Math.pow(t[9], 2) + Math.pow(t[10], 2) + Math.pow(t[11], 2) + Math.pow(t[12], 2) + Math.pow(t[13], 2) + Math.pow(t[14], 2) + Math.pow(t[15], 2))
            }, n.add = function (t, e, i) {
                return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t[2] = e[2] + i[2], t[3] = e[3] + i[3], t[4] = e[4] + i[4], t[5] = e[5] + i[5], t[6] = e[6] + i[6], t[7] = e[7] + i[7], t[8] = e[8] + i[8], t[9] = e[9] + i[9], t[10] = e[10] + i[10], t[11] = e[11] + i[11], t[12] = e[12] + i[12], t[13] = e[13] + i[13], t[14] = e[14] + i[14], t[15] = e[15] + i[15], t
            }, n.subtract = function (t, e, i) {
                return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t[2] = e[2] - i[2], t[3] = e[3] - i[3], t[4] = e[4] - i[4], t[5] = e[5] - i[5], t[6] = e[6] - i[6], t[7] = e[7] - i[7], t[8] = e[8] - i[8], t[9] = e[9] - i[9], t[10] = e[10] - i[10], t[11] = e[11] - i[11], t[12] = e[12] - i[12], t[13] = e[13] - i[13], t[14] = e[14] - i[14], t[15] = e[15] - i[15], t
            }, n.sub = n.subtract, n.multiplyScalar = function (t, e, i) {
                return t[0] = e[0] * i, t[1] = e[1] * i, t[2] = e[2] * i, t[3] = e[3] * i, t[4] = e[4] * i, t[5] = e[5] * i, t[6] = e[6] * i, t[7] = e[7] * i, t[8] = e[8] * i, t[9] = e[9] * i, t[10] = e[10] * i, t[11] = e[11] * i, t[12] = e[12] * i, t[13] = e[13] * i, t[14] = e[14] * i, t[15] = e[15] * i, t
            }, n.multiplyScalarAndAdd = function (t, e, i, r) {
                return t[0] = e[0] + i[0] * r, t[1] = e[1] + i[1] * r, t[2] = e[2] + i[2] * r, t[3] = e[3] + i[3] * r, t[4] = e[4] + i[4] * r, t[5] = e[5] + i[5] * r, t[6] = e[6] + i[6] * r, t[7] = e[7] + i[7] * r, t[8] = e[8] + i[8] * r, t[9] = e[9] + i[9] * r, t[10] = e[10] + i[10] * r, t[11] = e[11] + i[11] * r, t[12] = e[12] + i[12] * r, t[13] = e[13] + i[13] * r, t[14] = e[14] + i[14] * r, t[15] = e[15] + i[15] * r, t
            }, n.exactEquals = function (t, e) {
                return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7] && t[8] === e[8] && t[9] === e[9] && t[10] === e[10] && t[11] === e[11] && t[12] === e[12] && t[13] === e[13] && t[14] === e[14] && t[15] === e[15]
            }, n.equals = function (t, e) {
                var i = t[0],
                    n = t[1],
                    o = t[2],
                    s = t[3],
                    a = t[4],
                    l = t[5],
                    h = t[6],
                    u = t[7],
                    c = t[8],
                    p = t[9],
                    d = t[10],
                    f = t[11],
                    m = t[12],
                    v = t[13],
                    _ = t[14],
                    y = t[15],
                    g = e[0],
                    x = e[1],
                    w = e[2],
                    M = e[3],
                    b = e[4],
                    S = e[5],
                    E = e[6],
                    I = e[7],
                    D = e[8],
                    T = e[9],
                    L = e[10],
                    F = e[11],
                    C = e[12],
                    P = e[13],
                    z = e[14],
                    R = e[15];
                return Math.abs(i - g) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(g)) && Math.abs(n - x) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(x)) && Math.abs(o - w) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(w)) && Math.abs(s - M) <= r.EPSILON * Math.max(1, Math.abs(s), Math.abs(M)) && Math.abs(a - b) <= r.EPSILON * Math.max(1, Math.abs(a), Math.abs(b)) && Math.abs(l - S) <= r.EPSILON * Math.max(1, Math.abs(l), Math.abs(S)) && Math.abs(h - E) <= r.EPSILON * Math.max(1, Math.abs(h), Math.abs(E)) && Math.abs(u - I) <= r.EPSILON * Math.max(1, Math.abs(u), Math.abs(I)) && Math.abs(c - D) <= r.EPSILON * Math.max(1, Math.abs(c), Math.abs(D)) && Math.abs(p - T) <= r.EPSILON * Math.max(1, Math.abs(p), Math.abs(T)) && Math.abs(d - L) <= r.EPSILON * Math.max(1, Math.abs(d), Math.abs(L)) && Math.abs(f - F) <= r.EPSILON * Math.max(1, Math.abs(f), Math.abs(F)) && Math.abs(m - C) <= r.EPSILON * Math.max(1, Math.abs(m), Math.abs(C)) && Math.abs(v - P) <= r.EPSILON * Math.max(1, Math.abs(v), Math.abs(P)) && Math.abs(_ - z) <= r.EPSILON * Math.max(1, Math.abs(_), Math.abs(z)) && Math.abs(y - R) <= r.EPSILON * Math.max(1, Math.abs(y), Math.abs(R))
            }, e.exports = n
        }, {
            "./common.js": 3
        }],
        8: [function (t, e, i) {
            var r = t("./common.js"),
                n = t("./mat3.js"),
                o = t("./vec3.js"),
                s = t("./vec4.js"),
                a = {};
            a.create = function () {
                var t = new r.ARRAY_TYPE(4);
                return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t
            }, a.rotationTo = function () {
                var t = o.create(),
                    e = o.fromValues(1, 0, 0),
                    i = o.fromValues(0, 1, 0);
                return function (r, n, s) {
                    var l = o.dot(n, s);
                    return l < -.999999 ? (o.cross(t, e, n), o.length(t) < 1e-6 && o.cross(t, i, n), o.normalize(t, t), a.setAxisAngle(r, t, Math.PI), r) : l > .999999 ? (r[0] = 0, r[1] = 0, r[2] = 0, r[3] = 1, r) : (o.cross(t, n, s), r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = 1 + l, a.normalize(r, r))
                }
            }(), a.setAxes = function () {
                var t = n.create();
                return function (e, i, r, n) {
                    return t[0] = r[0], t[3] = r[1], t[6] = r[2], t[1] = n[0], t[4] = n[1], t[7] = n[2], t[2] = -i[0], t[5] = -i[1], t[8] = -i[2], a.normalize(e, a.fromMat3(e, t))
                }
            }(), a.clone = s.clone, a.fromValues = s.fromValues, a.copy = s.copy, a.set = s.set, a.identity = function (t) {
                return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t
            }, a.setAxisAngle = function (t, e, i) {
                i *= .5;
                var r = Math.sin(i);
                return t[0] = r * e[0], t[1] = r * e[1], t[2] = r * e[2], t[3] = Math.cos(i), t
            }, a.getAxisAngle = function (t, e) {
                var i = 2 * Math.acos(e[3]),
                    r = Math.sin(i / 2);
                return 0 != r ? (t[0] = e[0] / r, t[1] = e[1] / r, t[2] = e[2] / r) : (t[0] = 1, t[1] = 0, t[2] = 0), i
            }, a.add = s.add, a.multiply = function (t, e, i) {
                var r = e[0],
                    n = e[1],
                    o = e[2],
                    s = e[3],
                    a = i[0],
                    l = i[1],
                    h = i[2],
                    u = i[3];
                return t[0] = r * u + s * a + n * h - o * l, t[1] = n * u + s * l + o * a - r * h, t[2] = o * u + s * h + r * l - n * a, t[3] = s * u - r * a - n * l - o * h, t
            }, a.mul = a.multiply, a.scale = s.scale, a.rotateX = function (t, e, i) {
                i *= .5;
                var r = e[0],
                    n = e[1],
                    o = e[2],
                    s = e[3],
                    a = Math.sin(i),
                    l = Math.cos(i);
                return t[0] = r * l + s * a, t[1] = n * l + o * a, t[2] = o * l - n * a, t[3] = s * l - r * a, t
            }, a.rotateY = function (t, e, i) {
                i *= .5;
                var r = e[0],
                    n = e[1],
                    o = e[2],
                    s = e[3],
                    a = Math.sin(i),
                    l = Math.cos(i);
                return t[0] = r * l - o * a, t[1] = n * l + s * a, t[2] = o * l + r * a, t[3] = s * l - n * a, t
            }, a.rotateZ = function (t, e, i) {
                i *= .5;
                var r = e[0],
                    n = e[1],
                    o = e[2],
                    s = e[3],
                    a = Math.sin(i),
                    l = Math.cos(i);
                return t[0] = r * l + n * a, t[1] = n * l - r * a, t[2] = o * l + s * a, t[3] = s * l - o * a, t
            }, a.calculateW = function (t, e) {
                var i = e[0],
                    r = e[1],
                    n = e[2];
                return t[0] = i, t[1] = r, t[2] = n, t[3] = Math.sqrt(Math.abs(1 - i * i - r * r - n * n)), t
            }, a.dot = s.dot, a.lerp = s.lerp, a.slerp = function (t, e, i, r) {
                var n, o, s, a, l, h = e[0],
                    u = e[1],
                    c = e[2],
                    p = e[3],
                    d = i[0],
                    f = i[1],
                    m = i[2],
                    v = i[3];
                return o = h * d + u * f + c * m + p * v, o < 0 && (o = -o, d = -d, f = -f, m = -m, v = -v), 1 - o > 1e-6 ? (n = Math.acos(o), s = Math.sin(n), a = Math.sin((1 - r) * n) / s, l = Math.sin(r * n) / s) : (a = 1 - r, l = r), t[0] = a * h + l * d, t[1] = a * u + l * f, t[2] = a * c + l * m, t[3] = a * p + l * v, t
            }, a.sqlerp = function () {
                var t = a.create(),
                    e = a.create();
                return function (i, r, n, o, s, l) {
                    return a.slerp(t, r, s, l), a.slerp(e, n, o, l), a.slerp(i, t, e, 2 * l * (1 - l)), i
                }
            }(), a.invert = function (t, e) {
                var i = e[0],
                    r = e[1],
                    n = e[2],
                    o = e[3],
                    s = i * i + r * r + n * n + o * o,
                    a = s ? 1 / s : 0;
                return t[0] = -i * a, t[1] = -r * a, t[2] = -n * a, t[3] = o * a, t
            }, a.conjugate = function (t, e) {
                return t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t[3] = e[3], t
            }, a.length = s.length, a.len = a.length, a.squaredLength = s.squaredLength, a.sqrLen = a.squaredLength, a.normalize = s.normalize, a.fromMat3 = function (t, e) {
                var i, r = e[0] + e[4] + e[8];
                if (r > 0) i = Math.sqrt(r + 1), t[3] = .5 * i, i = .5 / i, t[0] = (e[5] - e[7]) * i, t[1] = (e[6] - e[2]) * i, t[2] = (e[1] - e[3]) * i;
                else {
                    var n = 0;
                    e[4] > e[0] && (n = 1), e[8] > e[3 * n + n] && (n = 2);
                    var o = (n + 1) % 3,
                        s = (n + 2) % 3;
                    i = Math.sqrt(e[3 * n + n] - e[3 * o + o] - e[3 * s + s] + 1), t[n] = .5 * i, i = .5 / i, t[3] = (e[3 * o + s] - e[3 * s + o]) * i, t[o] = (e[3 * o + n] + e[3 * n + o]) * i, t[s] = (e[3 * s + n] + e[3 * n + s]) * i
                }
                return t
            }, a.str = function (t) {
                return "quat(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
            }, a.exactEquals = s.exactEquals, a.equals = s.equals, e.exports = a
        }, {
            "./common.js": 3,
            "./mat3.js": 6,
            "./vec3.js": 10,
            "./vec4.js": 11
        }],
        9: [function (t, e, i) {
            var r = t("./common.js"),
                n = {};
            n.create = function () {
                var t = new r.ARRAY_TYPE(2);
                return t[0] = 0, t[1] = 0, t
            }, n.clone = function (t) {
                var e = new r.ARRAY_TYPE(2);
                return e[0] = t[0], e[1] = t[1], e
            }, n.fromValues = function (t, e) {
                var i = new r.ARRAY_TYPE(2);
                return i[0] = t, i[1] = e, i
            }, n.copy = function (t, e) {
                return t[0] = e[0], t[1] = e[1], t
            }, n.set = function (t, e, i) {
                return t[0] = e, t[1] = i, t
            }, n.add = function (t, e, i) {
                return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t
            }, n.subtract = function (t, e, i) {
                return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t
            }, n.sub = n.subtract, n.multiply = function (t, e, i) {
                return t[0] = e[0] * i[0], t[1] = e[1] * i[1], t
            }, n.mul = n.multiply, n.divide = function (t, e, i) {
                return t[0] = e[0] / i[0], t[1] = e[1] / i[1], t
            }, n.div = n.divide, n.ceil = function (t, e) {
                return t[0] = Math.ceil(e[0]), t[1] = Math.ceil(e[1]), t
            }, n.floor = function (t, e) {
                return t[0] = Math.floor(e[0]), t[1] = Math.floor(e[1]), t
            }, n.min = function (t, e, i) {
                return t[0] = Math.min(e[0], i[0]), t[1] = Math.min(e[1], i[1]), t
            }, n.max = function (t, e, i) {
                return t[0] = Math.max(e[0], i[0]), t[1] = Math.max(e[1], i[1]), t
            }, n.round = function (t, e) {
                return t[0] = Math.round(e[0]), t[1] = Math.round(e[1]), t
            }, n.scale = function (t, e, i) {
                return t[0] = e[0] * i, t[1] = e[1] * i, t
            }, n.scaleAndAdd = function (t, e, i, r) {
                return t[0] = e[0] + i[0] * r, t[1] = e[1] + i[1] * r, t
            }, n.distance = function (t, e) {
                var i = e[0] - t[0],
                    r = e[1] - t[1];
                return Math.sqrt(i * i + r * r)
            }, n.dist = n.distance, n.squaredDistance = function (t, e) {
                var i = e[0] - t[0],
                    r = e[1] - t[1];
                return i * i + r * r
            }, n.sqrDist = n.squaredDistance, n.length = function (t) {
                var e = t[0],
                    i = t[1];
                return Math.sqrt(e * e + i * i)
            }, n.len = n.length, n.squaredLength = function (t) {
                var e = t[0],
                    i = t[1];
                return e * e + i * i
            }, n.sqrLen = n.squaredLength, n.negate = function (t, e) {
                return t[0] = -e[0], t[1] = -e[1], t
            }, n.inverse = function (t, e) {
                return t[0] = 1 / e[0], t[1] = 1 / e[1], t
            }, n.normalize = function (t, e) {
                var i = e[0],
                    r = e[1],
                    n = i * i + r * r;
                return n > 0 && (n = 1 / Math.sqrt(n), t[0] = e[0] * n, t[1] = e[1] * n), t
            }, n.dot = function (t, e) {
                return t[0] * e[0] + t[1] * e[1]
            }, n.cross = function (t, e, i) {
                var r = e[0] * i[1] - e[1] * i[0];
                return t[0] = t[1] = 0, t[2] = r, t
            }, n.lerp = function (t, e, i, r) {
                var n = e[0],
                    o = e[1];
                return t[0] = n + r * (i[0] - n), t[1] = o + r * (i[1] - o), t
            }, n.random = function (t, e) {
                e = e || 1;
                var i = 2 * r.RANDOM() * Math.PI;
                return t[0] = Math.cos(i) * e, t[1] = Math.sin(i) * e, t
            }, n.transformMat2 = function (t, e, i) {
                var r = e[0],
                    n = e[1];
                return t[0] = i[0] * r + i[2] * n, t[1] = i[1] * r + i[3] * n, t
            }, n.transformMat2d = function (t, e, i) {
                var r = e[0],
                    n = e[1];
                return t[0] = i[0] * r + i[2] * n + i[4], t[1] = i[1] * r + i[3] * n + i[5], t
            }, n.transformMat3 = function (t, e, i) {
                var r = e[0],
                    n = e[1];
                return t[0] = i[0] * r + i[3] * n + i[6], t[1] = i[1] * r + i[4] * n + i[7], t
            }, n.transformMat4 = function (t, e, i) {
                var r = e[0],
                    n = e[1];
                return t[0] = i[0] * r + i[4] * n + i[12], t[1] = i[1] * r + i[5] * n + i[13], t
            }, n.forEach = function () {
                var t = n.create();
                return function (e, i, r, n, o, s) {
                    var a, l;
                    for (i || (i = 2), r || (r = 0), l = n ? Math.min(n * i + r, e.length) : e.length, a = r; a < l; a += i) t[0] = e[a], t[1] = e[a + 1], o(t, t, s), e[a] = t[0], e[a + 1] = t[1];
                    return e
                }
            }(), n.str = function (t) {
                return "vec2(" + t[0] + ", " + t[1] + ")"
            }, n.exactEquals = function (t, e) {
                return t[0] === e[0] && t[1] === e[1]
            }, n.equals = function (t, e) {
                var i = t[0],
                    n = t[1],
                    o = e[0],
                    s = e[1];
                return Math.abs(i - o) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(o)) && Math.abs(n - s) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(s))
            }, e.exports = n
        }, {
            "./common.js": 3
        }],
        10: [function (t, e, i) {
            var r = t("./common.js"),
                n = {};
            n.create = function () {
                var t = new r.ARRAY_TYPE(3);
                return t[0] = 0, t[1] = 0, t[2] = 0, t
            }, n.clone = function (t) {
                var e = new r.ARRAY_TYPE(3);
                return e[0] = t[0], e[1] = t[1], e[2] = t[2], e
            }, n.fromValues = function (t, e, i) {
                var n = new r.ARRAY_TYPE(3);
                return n[0] = t, n[1] = e, n[2] = i, n
            }, n.copy = function (t, e) {
                return t[0] = e[0], t[1] = e[1], t[2] = e[2], t
            }, n.set = function (t, e, i, r) {
                return t[0] = e, t[1] = i, t[2] = r, t
            }, n.add = function (t, e, i) {
                return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t[2] = e[2] + i[2], t
            }, n.subtract = function (t, e, i) {
                return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t[2] = e[2] - i[2], t
            }, n.sub = n.subtract, n.multiply = function (t, e, i) {
                return t[0] = e[0] * i[0], t[1] = e[1] * i[1], t[2] = e[2] * i[2], t
            }, n.mul = n.multiply, n.divide = function (t, e, i) {
                return t[0] = e[0] / i[0], t[1] = e[1] / i[1], t[2] = e[2] / i[2], t
            }, n.div = n.divide, n.ceil = function (t, e) {
                return t[0] = Math.ceil(e[0]), t[1] = Math.ceil(e[1]), t[2] = Math.ceil(e[2]), t
            }, n.floor = function (t, e) {
                return t[0] = Math.floor(e[0]), t[1] = Math.floor(e[1]), t[2] = Math.floor(e[2]), t
            }, n.min = function (t, e, i) {
                return t[0] = Math.min(e[0], i[0]), t[1] = Math.min(e[1], i[1]), t[2] = Math.min(e[2], i[2]), t
            }, n.max = function (t, e, i) {
                return t[0] = Math.max(e[0], i[0]), t[1] = Math.max(e[1], i[1]), t[2] = Math.max(e[2], i[2]), t
            }, n.round = function (t, e) {
                return t[0] = Math.round(e[0]), t[1] = Math.round(e[1]), t[2] = Math.round(e[2]), t
            }, n.scale = function (t, e, i) {
                return t[0] = e[0] * i, t[1] = e[1] * i, t[2] = e[2] * i, t
            }, n.scaleAndAdd = function (t, e, i, r) {
                return t[0] = e[0] + i[0] * r, t[1] = e[1] + i[1] * r, t[2] = e[2] + i[2] * r, t
            }, n.distance = function (t, e) {
                var i = e[0] - t[0],
                    r = e[1] - t[1],
                    n = e[2] - t[2];
                return Math.sqrt(i * i + r * r + n * n)
            }, n.dist = n.distance, n.squaredDistance = function (t, e) {
                var i = e[0] - t[0],
                    r = e[1] - t[1],
                    n = e[2] - t[2];
                return i * i + r * r + n * n
            }, n.sqrDist = n.squaredDistance, n.length = function (t) {
                var e = t[0],
                    i = t[1],
                    r = t[2];
                return Math.sqrt(e * e + i * i + r * r)
            }, n.len = n.length, n.squaredLength = function (t) {
                var e = t[0],
                    i = t[1],
                    r = t[2];
                return e * e + i * i + r * r
            }, n.sqrLen = n.squaredLength, n.negate = function (t, e) {
                return t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t
            }, n.inverse = function (t, e) {
                return t[0] = 1 / e[0], t[1] = 1 / e[1], t[2] = 1 / e[2], t
            }, n.normalize = function (t, e) {
                var i = e[0],
                    r = e[1],
                    n = e[2],
                    o = i * i + r * r + n * n;
                return o > 0 && (o = 1 / Math.sqrt(o), t[0] = e[0] * o, t[1] = e[1] * o, t[2] = e[2] * o), t
            }, n.dot = function (t, e) {
                return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
            }, n.cross = function (t, e, i) {
                var r = e[0],
                    n = e[1],
                    o = e[2],
                    s = i[0],
                    a = i[1],
                    l = i[2];
                return t[0] = n * l - o * a, t[1] = o * s - r * l, t[2] = r * a - n * s, t
            }, n.lerp = function (t, e, i, r) {
                var n = e[0],
                    o = e[1],
                    s = e[2];
                return t[0] = n + r * (i[0] - n), t[1] = o + r * (i[1] - o), t[2] = s + r * (i[2] - s), t
            }, n.hermite = function (t, e, i, r, n, o) {
                var s = o * o,
                    a = s * (2 * o - 3) + 1,
                    l = s * (o - 2) + o,
                    h = s * (o - 1),
                    u = s * (3 - 2 * o);
                return t[0] = e[0] * a + i[0] * l + r[0] * h + n[0] * u, t[1] = e[1] * a + i[1] * l + r[1] * h + n[1] * u, t[2] = e[2] * a + i[2] * l + r[2] * h + n[2] * u, t
            }, n.bezier = function (t, e, i, r, n, o) {
                var s = 1 - o,
                    a = s * s,
                    l = o * o,
                    h = a * s,
                    u = 3 * o * a,
                    c = 3 * l * s,
                    p = l * o;
                return t[0] = e[0] * h + i[0] * u + r[0] * c + n[0] * p, t[1] = e[1] * h + i[1] * u + r[1] * c + n[1] * p, t[2] = e[2] * h + i[2] * u + r[2] * c + n[2] * p, t
            }, n.random = function (t, e) {
                e = e || 1;
                var i = 2 * r.RANDOM() * Math.PI,
                    n = 2 * r.RANDOM() - 1,
                    o = Math.sqrt(1 - n * n) * e;
                return t[0] = Math.cos(i) * o, t[1] = Math.sin(i) * o, t[2] = n * e, t
            }, n.transformMat4 = function (t, e, i) {
                var r = e[0],
                    n = e[1],
                    o = e[2],
                    s = i[3] * r + i[7] * n + i[11] * o + i[15];
                return s = s || 1, t[0] = (i[0] * r + i[4] * n + i[8] * o + i[12]) / s, t[1] = (i[1] * r + i[5] * n + i[9] * o + i[13]) / s, t[2] = (i[2] * r + i[6] * n + i[10] * o + i[14]) / s, t
            }, n.transformMat3 = function (t, e, i) {
                var r = e[0],
                    n = e[1],
                    o = e[2];
                return t[0] = r * i[0] + n * i[3] + o * i[6], t[1] = r * i[1] + n * i[4] + o * i[7], t[2] = r * i[2] + n * i[5] + o * i[8], t
            }, n.transformQuat = function (t, e, i) {
                var r = e[0],
                    n = e[1],
                    o = e[2],
                    s = i[0],
                    a = i[1],
                    l = i[2],
                    h = i[3],
                    u = h * r + a * o - l * n,
                    c = h * n + l * r - s * o,
                    p = h * o + s * n - a * r,
                    d = -s * r - a * n - l * o;
                return t[0] = u * h + d * -s + c * -l - p * -a, t[1] = c * h + d * -a + p * -s - u * -l, t[2] = p * h + d * -l + u * -a - c * -s, t
            }, n.rotateX = function (t, e, i, r) {
                var n = [],
                    o = [];
                return n[0] = e[0] - i[0], n[1] = e[1] - i[1], n[2] = e[2] - i[2], o[0] = n[0], o[1] = n[1] * Math.cos(r) - n[2] * Math.sin(r), o[2] = n[1] * Math.sin(r) + n[2] * Math.cos(r), t[0] = o[0] + i[0], t[1] = o[1] + i[1], t[2] = o[2] + i[2], t
            }, n.rotateY = function (t, e, i, r) {
                var n = [],
                    o = [];
                return n[0] = e[0] - i[0], n[1] = e[1] - i[1], n[2] = e[2] - i[2], o[0] = n[2] * Math.sin(r) + n[0] * Math.cos(r), o[1] = n[1], o[2] = n[2] * Math.cos(r) - n[0] * Math.sin(r), t[0] = o[0] + i[0], t[1] = o[1] + i[1], t[2] = o[2] + i[2], t
            }, n.rotateZ = function (t, e, i, r) {
                var n = [],
                    o = [];
                return n[0] = e[0] - i[0], n[1] = e[1] - i[1], n[2] = e[2] - i[2], o[0] = n[0] * Math.cos(r) - n[1] * Math.sin(r), o[1] = n[0] * Math.sin(r) + n[1] * Math.cos(r), o[2] = n[2], t[0] = o[0] + i[0], t[1] = o[1] + i[1], t[2] = o[2] + i[2], t
            }, n.forEach = function () {
                var t = n.create();
                return function (e, i, r, n, o, s) {
                    var a, l;
                    for (i || (i = 3), r || (r = 0), l = n ? Math.min(n * i + r, e.length) : e.length, a = r; a < l; a += i) t[0] = e[a], t[1] = e[a + 1], t[2] = e[a + 2], o(t, t, s), e[a] = t[0], e[a + 1] = t[1], e[a + 2] = t[2];
                    return e
                }
            }(), n.angle = function (t, e) {
                var i = n.fromValues(t[0], t[1], t[2]),
                    r = n.fromValues(e[0], e[1], e[2]);
                n.normalize(i, i), n.normalize(r, r);
                var o = n.dot(i, r);
                return o > 1 ? 0 : o < -1 ? Math.PI : Math.acos(o)
            }, n.str = function (t) {
                return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
            }, n.exactEquals = function (t, e) {
                return t[0] === e[0] && t[1] === e[1] && t[2] === e[2]
            }, n.equals = function (t, e) {
                var i = t[0],
                    n = t[1],
                    o = t[2],
                    s = e[0],
                    a = e[1],
                    l = e[2];
                return Math.abs(i - s) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(s)) && Math.abs(n - a) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(a)) && Math.abs(o - l) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(l))
            }, e.exports = n
        }, {
            "./common.js": 3
        }],
        11: [function (t, e, i) {
            var r = t("./common.js"),
                n = {};
            n.create = function () {
                var t = new r.ARRAY_TYPE(4);
                return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t
            }, n.clone = function (t) {
                var e = new r.ARRAY_TYPE(4);
                return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e
            }, n.fromValues = function (t, e, i, n) {
                var o = new r.ARRAY_TYPE(4);
                return o[0] = t, o[1] = e, o[2] = i, o[3] = n, o
            }, n.copy = function (t, e) {
                return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
            }, n.set = function (t, e, i, r, n) {
                return t[0] = e, t[1] = i, t[2] = r, t[3] = n, t
            }, n.add = function (t, e, i) {
                return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t[2] = e[2] + i[2], t[3] = e[3] + i[3], t
            }, n.subtract = function (t, e, i) {
                return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t[2] = e[2] - i[2], t[3] = e[3] - i[3], t
            }, n.sub = n.subtract, n.multiply = function (t, e, i) {
                return t[0] = e[0] * i[0], t[1] = e[1] * i[1], t[2] = e[2] * i[2], t[3] = e[3] * i[3], t
            }, n.mul = n.multiply, n.divide = function (t, e, i) {
                return t[0] = e[0] / i[0], t[1] = e[1] / i[1], t[2] = e[2] / i[2], t[3] = e[3] / i[3], t
            }, n.div = n.divide, n.ceil = function (t, e) {
                return t[0] = Math.ceil(e[0]), t[1] = Math.ceil(e[1]), t[2] = Math.ceil(e[2]), t[3] = Math.ceil(e[3]), t
            }, n.floor = function (t, e) {
                return t[0] = Math.floor(e[0]), t[1] = Math.floor(e[1]), t[2] = Math.floor(e[2]), t[3] = Math.floor(e[3]), t
            }, n.min = function (t, e, i) {
                return t[0] = Math.min(e[0], i[0]), t[1] = Math.min(e[1], i[1]), t[2] = Math.min(e[2], i[2]), t[3] = Math.min(e[3], i[3]), t
            }, n.max = function (t, e, i) {
                return t[0] = Math.max(e[0], i[0]), t[1] = Math.max(e[1], i[1]), t[2] = Math.max(e[2], i[2]), t[3] = Math.max(e[3], i[3]), t
            }, n.round = function (t, e) {
                return t[0] = Math.round(e[0]), t[1] = Math.round(e[1]), t[2] = Math.round(e[2]), t[3] = Math.round(e[3]), t
            }, n.scale = function (t, e, i) {
                return t[0] = e[0] * i, t[1] = e[1] * i, t[2] = e[2] * i, t[3] = e[3] * i, t
            }, n.scaleAndAdd = function (t, e, i, r) {
                return t[0] = e[0] + i[0] * r, t[1] = e[1] + i[1] * r, t[2] = e[2] + i[2] * r, t[3] = e[3] + i[3] * r, t
            }, n.distance = function (t, e) {
                var i = e[0] - t[0],
                    r = e[1] - t[1],
                    n = e[2] - t[2],
                    o = e[3] - t[3];
                return Math.sqrt(i * i + r * r + n * n + o * o)
            }, n.dist = n.distance, n.squaredDistance = function (t, e) {
                var i = e[0] - t[0],
                    r = e[1] - t[1],
                    n = e[2] - t[2],
                    o = e[3] - t[3];
                return i * i + r * r + n * n + o * o
            }, n.sqrDist = n.squaredDistance, n.length = function (t) {
                var e = t[0],
                    i = t[1],
                    r = t[2],
                    n = t[3];
                return Math.sqrt(e * e + i * i + r * r + n * n)
            }, n.len = n.length, n.squaredLength = function (t) {
                var e = t[0],
                    i = t[1],
                    r = t[2],
                    n = t[3];
                return e * e + i * i + r * r + n * n
            }, n.sqrLen = n.squaredLength, n.negate = function (t, e) {
                return t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t[3] = -e[3], t
            }, n.inverse = function (t, e) {
                return t[0] = 1 / e[0], t[1] = 1 / e[1], t[2] = 1 / e[2], t[3] = 1 / e[3], t
            }, n.normalize = function (t, e) {
                var i = e[0],
                    r = e[1],
                    n = e[2],
                    o = e[3],
                    s = i * i + r * r + n * n + o * o;
                return s > 0 && (s = 1 / Math.sqrt(s), t[0] = i * s, t[1] = r * s, t[2] = n * s, t[3] = o * s), t
            }, n.dot = function (t, e) {
                return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3]
            }, n.lerp = function (t, e, i, r) {
                var n = e[0],
                    o = e[1],
                    s = e[2],
                    a = e[3];
                return t[0] = n + r * (i[0] - n), t[1] = o + r * (i[1] - o), t[2] = s + r * (i[2] - s), t[3] = a + r * (i[3] - a), t
            }, n.random = function (t, e) {
                return e = e || 1, t[0] = r.RANDOM(), t[1] = r.RANDOM(), t[2] = r.RANDOM(), t[3] = r.RANDOM(), n.normalize(t, t), n.scale(t, t, e), t
            }, n.transformMat4 = function (t, e, i) {
                var r = e[0],
                    n = e[1],
                    o = e[2],
                    s = e[3];
                return t[0] = i[0] * r + i[4] * n + i[8] * o + i[12] * s, t[1] = i[1] * r + i[5] * n + i[9] * o + i[13] * s, t[2] = i[2] * r + i[6] * n + i[10] * o + i[14] * s, t[3] = i[3] * r + i[7] * n + i[11] * o + i[15] * s, t
            }, n.transformQuat = function (t, e, i) {
                var r = e[0],
                    n = e[1],
                    o = e[2],
                    s = i[0],
                    a = i[1],
                    l = i[2],
                    h = i[3],
                    u = h * r + a * o - l * n,
                    c = h * n + l * r - s * o,
                    p = h * o + s * n - a * r,
                    d = -s * r - a * n - l * o;
                return t[0] = u * h + d * -s + c * -l - p * -a, t[1] = c * h + d * -a + p * -s - u * -l, t[2] = p * h + d * -l + u * -a - c * -s, t[3] = e[3], t
            }, n.forEach = function () {
                var t = n.create();
                return function (e, i, r, n, o, s) {
                    var a, l;
                    for (i || (i = 4), r || (r = 0), l = n ? Math.min(n * i + r, e.length) : e.length, a = r; a < l; a += i) t[0] = e[a], t[1] = e[a + 1], t[2] = e[a + 2], t[3] = e[a + 3], o(t, t, s), e[a] = t[0], e[a + 1] = t[1], e[a + 2] = t[2], e[a + 3] = t[3];
                    return e
                }
            }(), n.str = function (t) {
                return "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
            }, n.exactEquals = function (t, e) {
                return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3]
            }, n.equals = function (t, e) {
                var i = t[0],
                    n = t[1],
                    o = t[2],
                    s = t[3],
                    a = e[0],
                    l = e[1],
                    h = e[2],
                    u = e[3];
                return Math.abs(i - a) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(a)) && Math.abs(n - l) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(l)) && Math.abs(o - h) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(h)) && Math.abs(s - u) <= r.EPSILON * Math.max(1, Math.abs(s), Math.abs(u))
            }, e.exports = n
        }, {
            "./common.js": 3
        }],
        12: [function (e, i, r) {
            ! function (e, r, n, o) {
                "use strict";

                function s(t, e, i) {
                    return setTimeout(d(t, i), e)
                }

                function a(t, e, i) {
                    return !!Array.isArray(t) && (l(t, i[e], i), !0)
                }

                function l(t, e, i) {
                    var r;
                    if (t)
                        if (t.forEach) t.forEach(e, i);
                        else if (t.length !== o)
                        for (r = 0; r < t.length;) e.call(i, t[r], r, t), r++;
                    else
                        for (r in t) t.hasOwnProperty(r) && e.call(i, t[r], r, t)
                }

                function h(t, e, i) {
                    for (var r = Object.keys(e), n = 0; n < r.length;)(!i || i && t[r[n]] === o) && (t[r[n]] = e[r[n]]), n++;
                    return t
                }

                function u(t, e) {
                    return h(t, e, !0)
                }

                function c(t) {
                    if (Object.create) return Object.create(t);
                    var e = function () {};
                    e.prototype = t;
                    var i = new e;
                    return e.prototype = null, i
                }

                function p(t, e, i) {
                    var r, n = e.prototype;
                    r = t.prototype = c(n), r.constructor = t, r._super = n, i && h(r, i)
                }

                function d(t, e) {
                    return function () {
                        return t.apply(e, arguments)
                    }
                }

                function f(t, e) {
                    return typeof t == dt ? t.apply(e ? e[0] || o : o, e) : t
                }

                function m(t, e) {
                    return t === o ? e : t
                }

                function v(t, e, i) {
                    l(x(e), function (e) {
                        t.addEventListener(e, i, !1)
                    })
                }

                function _(t, e, i) {
                    l(x(e), function (e) {
                        t.removeEventListener(e, i, !1)
                    })
                }

                function y(t, e) {
                    for (; t;) {
                        if (t == e) return !0;
                        t = t.parentNode
                    }
                    return !1
                }

                function g(t, e) {
                    return t.indexOf(e) > -1
                }

                function x(t) {
                    return t.trim().split(/\s+/g)
                }

                function w(t, e, i) {
                    if (t.indexOf && !i) return t.indexOf(e);
                    for (var r = 0; r < t.length;) {
                        if (i && t[r][i] == e || !i && t[r] === e) return r;
                        r++
                    }
                    return -1
                }

                function M(t) {
                    return Array.prototype.slice.call(t, 0)
                }

                function b(t, e, i) {
                    for (var r = [], n = [], o = 0; o < t.length;) {
                        var s = e ? t[o][e] : t[o];
                        w(n, s) < 0 && r.push(t[o]), n[o] = s, o++
                    }
                    return i && (r = e ? r.sort(function (t, i) {
                        return t[e] > i[e]
                    }) : r.sort()), r
                }

                function S(t, e) {
                    for (var i, r, n = e[0].toUpperCase() + e.slice(1), s = 0; s < ct.length;) {
                        if (i = ct[s], (r = i ? i + n : e) in t) return r;
                        s++
                    }
                    return o
                }

                function E() {
                    return _t++
                }

                function I(t) {
                    var i = t.ownerDocument || t;
                    return i.defaultView || i.parentWindow || e
                }

                function D(t, e) {
                    var i = this;
                    this.manager = t, this.callback = e, this.element = t.element,
                        this.target = t.options.inputTarget, this.domHandler = function (e) {
                            f(t.options.enable, [t]) && i.handler(e)
                        }, this.init()
                }

                function T(t) {
                    var e = t.options.inputClass;
                    return new(e || (xt ? q : wt ? W : gt ? G : B))(t, L)
                }

                function L(t, e, i) {
                    var r = i.pointers.length,
                        n = i.changedPointers.length,
                        o = e & bt && r - n == 0,
                        s = e & (Et | It) && r - n == 0;
                    i.isFirst = !!o, i.isFinal = !!s, o && (t.session = {}), i.eventType = e, F(t, i), t.emit("hammer.input", i), t.recognize(i), t.session.prevInput = i
                }

                function F(t, e) {
                    var i = t.session,
                        r = e.pointers,
                        n = r.length;
                    i.firstInput || (i.firstInput = z(e)), n > 1 && !i.firstMultiple ? i.firstMultiple = z(e) : 1 === n && (i.firstMultiple = !1);
                    var o = i.firstInput,
                        s = i.firstMultiple,
                        a = s ? s.center : o.center,
                        l = e.center = R(r);
                    e.timeStamp = vt(), e.deltaTime = e.timeStamp - o.timeStamp, e.angle = H(a, l), e.distance = k(a, l), C(i, e), e.offsetDirection = O(e.deltaX, e.deltaY), e.scale = s ? Y(s.pointers, r) : 1, e.rotation = s ? N(s.pointers, r) : 0, P(i, e);
                    var h = t.element;
                    y(e.srcEvent.target, h) && (h = e.srcEvent.target), e.target = h
                }

                function C(t, e) {
                    var i = e.center,
                        r = t.offsetDelta || {},
                        n = t.prevDelta || {},
                        o = t.prevInput || {};
                    e.eventType !== bt && o.eventType !== Et || (n = t.prevDelta = {
                        x: o.deltaX || 0,
                        y: o.deltaY || 0
                    }, r = t.offsetDelta = {
                        x: i.x,
                        y: i.y
                    }), e.deltaX = n.x + (i.x - r.x), e.deltaY = n.y + (i.y - r.y)
                }

                function P(t, e) {
                    var i, r, n, s, a = t.lastInterval || e,
                        l = e.timeStamp - a.timeStamp;
                    if (e.eventType != It && (l > Mt || a.velocity === o)) {
                        var h = a.deltaX - e.deltaX,
                            u = a.deltaY - e.deltaY,
                            c = A(l, h, u);
                        r = c.x, n = c.y, i = mt(c.x) > mt(c.y) ? c.x : c.y, s = O(h, u), t.lastInterval = e
                    } else i = a.velocity, r = a.velocityX, n = a.velocityY, s = a.direction;
                    e.velocity = i, e.velocityX = r, e.velocityY = n, e.direction = s
                }

                function z(t) {
                    for (var e = [], i = 0; i < t.pointers.length;) e[i] = {
                        clientX: ft(t.pointers[i].clientX),
                        clientY: ft(t.pointers[i].clientY)
                    }, i++;
                    return {
                        timeStamp: vt(),
                        pointers: e,
                        center: R(e),
                        deltaX: t.deltaX,
                        deltaY: t.deltaY
                    }
                }

                function R(t) {
                    var e = t.length;
                    if (1 === e) return {
                        x: ft(t[0].clientX),
                        y: ft(t[0].clientY)
                    };
                    for (var i = 0, r = 0, n = 0; n < e;) i += t[n].clientX, r += t[n].clientY, n++;
                    return {
                        x: ft(i / e),
                        y: ft(r / e)
                    }
                }

                function A(t, e, i) {
                    return {
                        x: e / t || 0,
                        y: i / t || 0
                    }
                }

                function O(t, e) {
                    return t === e ? Dt : mt(t) >= mt(e) ? t > 0 ? Tt : Lt : e > 0 ? Ft : Ct
                }

                function k(t, e, i) {
                    i || (i = At);
                    var r = e[i[0]] - t[i[0]],
                        n = e[i[1]] - t[i[1]];
                    return Math.sqrt(r * r + n * n)
                }

                function H(t, e, i) {
                    i || (i = At);
                    var r = e[i[0]] - t[i[0]],
                        n = e[i[1]] - t[i[1]];
                    return 180 * Math.atan2(n, r) / Math.PI
                }

                function N(t, e) {
                    return H(e[1], e[0], Ot) - H(t[1], t[0], Ot)
                }

                function Y(t, e) {
                    return k(e[0], e[1], Ot) / k(t[0], t[1], Ot)
                }

                function B() {
                    this.evEl = Ht, Yt ? this.evDoc = Nt : this.evWin = Nt, this.allow = !0, this.pressed = !1, D.apply(this, arguments)
                }

                function q() {
                    this.evEl = jt, this.evWin = Xt, D.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
                }

                function j() {
                    this.evTarget = Vt, this.evWin = Gt, this.started = !1, D.apply(this, arguments)
                }

                function X(t, e) {
                    var i = M(t.touches),
                        r = M(t.changedTouches);
                    return e & (Et | It) && (i = b(i.concat(r), "identifier", !0)), [i, r]
                }

                function W() {
                    this.evTarget = Zt, this.targetIds = {}, D.apply(this, arguments)
                }

                function V(t, e) {
                    var i = M(t.touches),
                        r = this.targetIds;
                    if (e & (bt | St) && 1 === i.length) return r[i[0].identifier] = !0, [i, i];
                    var n, o, s = M(t.changedTouches),
                        a = [],
                        l = this.target;
                    if (o = i.filter(function (t) {
                            return y(t.target, l)
                        }), e === bt)
                        for (n = 0; n < o.length;) r[o[n].identifier] = !0, n++;
                    for (n = 0; n < s.length;) r[s[n].identifier] && a.push(s[n]), e & (Et | It) && delete r[s[n].identifier], n++;
                    return a.length ? [b(o.concat(a), "identifier", !0), a] : void 0
                }

                function G() {
                    D.apply(this, arguments);
                    var t = d(this.handler, this);
                    this.touch = new W(this.manager, t), this.mouse = new B(this.manager, t)
                }

                function U(t, e) {
                    this.manager = t, this.set(e)
                }

                function Z(t) {
                    if (g(t, te)) return te;
                    var e = g(t, ee),
                        i = g(t, ie);
                    return e && i ? ee + " " + ie : e || i ? e ? ee : ie : g(t, Jt) ? Jt : $t
                }

                function K(t) {
                    this.id = E(), this.manager = null, this.options = u(t || {}, this.defaults), this.options.enable = m(this.options.enable, !0), this.state = re, this.simultaneous = {}, this.requireFail = []
                }

                function Q(t) {
                    return t & le ? "cancel" : t & se ? "end" : t & oe ? "move" : t & ne ? "start" : ""
                }

                function $(t) {
                    return t == Ct ? "down" : t == Ft ? "up" : t == Tt ? "left" : t == Lt ? "right" : ""
                }

                function J(t, e) {
                    var i = e.manager;
                    return i ? i.get(t) : t
                }

                function tt() {
                    K.apply(this, arguments)
                }

                function et() {
                    tt.apply(this, arguments), this.pX = null, this.pY = null
                }

                function it() {
                    tt.apply(this, arguments)
                }

                function rt() {
                    K.apply(this, arguments), this._timer = null, this._input = null
                }

                function nt() {
                    tt.apply(this, arguments)
                }

                function ot() {
                    tt.apply(this, arguments)
                }

                function st() {
                    K.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
                }

                function at(t, e) {
                    return e = e || {}, e.recognizers = m(e.recognizers, at.defaults.preset), new lt(t, e)
                }

                function lt(t, e) {
                    e = e || {}, this.options = u(e, at.defaults), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = t, this.input = T(this), this.touchAction = new U(this, this.options.touchAction), ht(this, !0), l(e.recognizers, function (t) {
                        var e = this.add(new t[0](t[1]));
                        t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
                    }, this)
                }

                function ht(t, e) {
                    var i = t.element;
                    i.style && l(t.options.cssProps, function (t, r) {
                        i.style[S(i.style, r)] = e ? t : ""
                    })
                }

                function ut(t, e) {
                    var i = r.createEvent("Event");
                    i.initEvent(t, !0, !0), i.gesture = e, e.target.dispatchEvent(i)
                }
                var ct = ["", "webkit", "moz", "MS", "ms", "o"],
                    pt = r.createElement("div"),
                    dt = "function",
                    ft = Math.round,
                    mt = Math.abs,
                    vt = Date.now,
                    _t = 1,
                    yt = /mobile|tablet|ip(ad|hone|od)|android/i,
                    gt = "ontouchstart" in e,
                    xt = S(e, "PointerEvent") !== o,
                    wt = gt && yt.test(navigator.userAgent),
                    Mt = 25,
                    bt = 1,
                    St = 2,
                    Et = 4,
                    It = 8,
                    Dt = 1,
                    Tt = 2,
                    Lt = 4,
                    Ft = 8,
                    Ct = 16,
                    Pt = Tt | Lt,
                    zt = Ft | Ct,
                    Rt = Pt | zt,
                    At = ["x", "y"],
                    Ot = ["clientX", "clientY"];
                D.prototype = {
                    handler: function () {},
                    init: function () {
                        this.evEl && v(this.element, this.evEl, this.domHandler), this.evTarget && v(this.target, this.evTarget, this.domHandler), this.evWin && v(I(this.element), this.evWin, this.domHandler), this.evDoc && v(r, this.evDoc, this.domHandler), this.evBody && v(r.body, this.evBody, this.domHandler)
                    },
                    destroy: function () {
                        this.evEl && _(this.element, this.evEl, this.domHandler), this.evTarget && _(this.target, this.evTarget, this.domHandler), this.evWin && _(I(this.element), this.evWin, this.domHandler), this.evDoc && _(r, this.evDoc, this.domHandler), this.evBody && _(r.body, this.evBody, this.domHandler)
                    }
                };
                var kt = {
                        mousedown: bt,
                        mousemove: St,
                        mouseup: Et
                    },
                    Ht = "mousedown",
                    Nt = "mousemove mouseup",
                    Yt = e.navigator.userAgent.indexOf("MSIE 8") > 0;
                p(B, D, {
                    handler: function (t) {
                        var e = kt[t.type],
                            i = 0;
                        Yt && (i = 1), e & bt && t.button === i && (this.pressed = !0), e & St && t.button !== i && (e = Et), this.pressed && this.allow && (e & Et && (this.pressed = !1), this.callback(this.manager, e, {
                            pointers: [t],
                            changedPointers: [t],
                            pointerType: "mouse",
                            srcEvent: t
                        }))
                    }
                });
                var Bt = {
                        pointerdown: bt,
                        pointermove: St,
                        pointerup: Et,
                        pointercancel: It,
                        pointerout: It
                    },
                    qt = {
                        2: "touch",
                        3: "pen",
                        4: "mouse",
                        5: "kinect"
                    },
                    jt = "pointerdown",
                    Xt = "pointermove pointerup pointercancel";
                e.MSPointerEvent && (jt = "MSPointerDown", Xt = "MSPointerMove MSPointerUp MSPointerCancel"), p(q, D, {
                    handler: function (t) {
                        var e = this.store,
                            i = !1,
                            r = t.type.toLowerCase().replace("ms", ""),
                            n = Bt[r],
                            o = qt[t.pointerType] || t.pointerType,
                            s = "touch" == o,
                            a = w(e, t.pointerId, "pointerId");
                        n & bt && (0 === t.button || s) ? a < 0 && (e.push(t), a = e.length - 1) : n & (Et | It) && (i = !0), a < 0 || (e[a] = t, this.callback(this.manager, n, {
                            pointers: e,
                            changedPointers: [t],
                            pointerType: o,
                            srcEvent: t
                        }), i && e.splice(a, 1))
                    }
                });
                var Wt = {
                        touchstart: bt,
                        touchmove: St,
                        touchend: Et,
                        touchcancel: It
                    },
                    Vt = "touchstart",
                    Gt = "touchstart touchmove touchend touchcancel";
                p(j, D, {
                    handler: function (t) {
                        var e = Wt[t.type];
                        if (e === bt && (this.started = !0), this.started) {
                            var i = X.call(this, t, e);
                            e & (Et | It) && i[0].length - i[1].length == 0 && (this.started = !1), this.callback(this.manager, e, {
                                pointers: i[0],
                                changedPointers: i[1],
                                pointerType: "touch",
                                srcEvent: t
                            })
                        }
                    }
                });
                var Ut = {
                        touchstart: bt,
                        touchmove: St,
                        touchend: Et,
                        touchcancel: It
                    },
                    Zt = "touchstart touchmove touchend touchcancel";
                p(W, D, {
                    handler: function (t) {
                        var e = Ut[t.type],
                            i = V.call(this, t, e);
                        i && this.callback(this.manager, e, {
                            pointers: i[0],
                            changedPointers: i[1],
                            pointerType: "touch",
                            srcEvent: t
                        })
                    }
                }), p(G, D, {
                    handler: function (t, e, i) {
                        var r = "touch" == i.pointerType,
                            n = "mouse" == i.pointerType;
                        if (r) this.mouse.allow = !1;
                        else if (n && !this.mouse.allow) return;
                        e & (Et | It) && (this.mouse.allow = !0), this.callback(t, e, i)
                    },
                    destroy: function () {
                        this.touch.destroy(), this.mouse.destroy()
                    }
                });
                var Kt = S(pt.style, "touchAction"),
                    Qt = Kt !== o,
                    $t = "auto",
                    Jt = "manipulation",
                    te = "none",
                    ee = "pan-x",
                    ie = "pan-y";
                U.prototype = {
                    set: function (t) {
                        "compute" == t && (t = this.compute()), Qt && this.manager.element.style && (this.manager.element.style[Kt] = t), this.actions = t.toLowerCase().trim()
                    },
                    update: function () {
                        this.set(this.manager.options.touchAction)
                    },
                    compute: function () {
                        var t = [];
                        return l(this.manager.recognizers, function (e) {
                            f(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
                        }), Z(t.join(" "))
                    },
                    preventDefaults: function (t) {
                        if (!Qt) {
                            var e = t.srcEvent,
                                i = t.offsetDirection;
                            if (this.manager.session.prevented) return void e.preventDefault();
                            var r = this.actions,
                                n = g(r, te),
                                o = g(r, ie),
                                s = g(r, ee);
                            return n || o && i & Pt || s && i & zt ? this.preventSrc(e) : void 0
                        }
                    },
                    preventSrc: function (t) {
                        this.manager.session.prevented = !0, t.preventDefault()
                    }
                };
                var re = 1,
                    ne = 2,
                    oe = 4,
                    se = 8,
                    ae = se,
                    le = 16;
                K.prototype = {
                    defaults: {},
                    set: function (t) {
                        return h(this.options, t), this.manager && this.manager.touchAction.update(), this
                    },
                    recognizeWith: function (t) {
                        if (a(t, "recognizeWith", this)) return this;
                        var e = this.simultaneous;
                        return t = J(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this
                    },
                    dropRecognizeWith: function (t) {
                        return a(t, "dropRecognizeWith", this) ? this : (t = J(t, this), delete this.simultaneous[t.id], this)
                    },
                    requireFailure: function (t) {
                        if (a(t, "requireFailure", this)) return this;
                        var e = this.requireFail;
                        return t = J(t, this), -1 === w(e, t) && (e.push(t), t.requireFailure(this)), this
                    },
                    dropRequireFailure: function (t) {
                        if (a(t, "dropRequireFailure", this)) return this;
                        t = J(t, this);
                        var e = w(this.requireFail, t);
                        return e > -1 && this.requireFail.splice(e, 1), this
                    },
                    hasRequireFailures: function () {
                        return this.requireFail.length > 0
                    },
                    canRecognizeWith: function (t) {
                        return !!this.simultaneous[t.id]
                    },
                    emit: function (t) {
                        function e(e) {
                            i.manager.emit(i.options.event + (e ? Q(r) : ""), t)
                        }
                        var i = this,
                            r = this.state;
                        r < se && e(!0), e(), r >= se && e(!0)
                    },
                    tryEmit: function (t) {
                        if (this.canEmit()) return this.emit(t);
                        this.state = 32
                    },
                    canEmit: function () {
                        for (var t = 0; t < this.requireFail.length;) {
                            if (!(this.requireFail[t].state & (32 | re))) return !1;
                            t++
                        }
                        return !0
                    },
                    recognize: function (t) {
                        var e = h({}, t);
                        if (!f(this.options.enable, [this, e])) return this.reset(), void(this.state = 32);
                        this.state & (ae | le | 32) && (this.state = re), this.state = this.process(e), this.state & (ne | oe | se | le) && this.tryEmit(e)
                    },
                    process: function (t) {},
                    getTouchAction: function () {},
                    reset: function () {}
                }, p(tt, K, {
                    defaults: {
                        pointers: 1
                    },
                    attrTest: function (t) {
                        var e = this.options.pointers;
                        return 0 === e || t.pointers.length === e
                    },
                    process: function (t) {
                        var e = this.state,
                            i = t.eventType,
                            r = e & (ne | oe),
                            n = this.attrTest(t);
                        return r && (i & It || !n) ? e | le : r || n ? i & Et ? e | se : e & ne ? e | oe : ne : 32
                    }
                }), p(et, tt, {
                    defaults: {
                        event: "pan",
                        threshold: 10,
                        pointers: 1,
                        direction: Rt
                    },
                    getTouchAction: function () {
                        var t = this.options.direction,
                            e = [];
                        return t & Pt && e.push(ie), t & zt && e.push(ee), e
                    },
                    directionTest: function (t) {
                        var e = this.options,
                            i = !0,
                            r = t.distance,
                            n = t.direction,
                            o = t.deltaX,
                            s = t.deltaY;
                        return n & e.direction || (e.direction & Pt ? (n = 0 === o ? Dt : o < 0 ? Tt : Lt, i = o != this.pX, r = Math.abs(t.deltaX)) : (n = 0 === s ? Dt : s < 0 ? Ft : Ct, i = s != this.pY, r = Math.abs(t.deltaY))), t.direction = n, i && r > e.threshold && n & e.direction
                    },
                    attrTest: function (t) {
                        return tt.prototype.attrTest.call(this, t) && (this.state & ne || !(this.state & ne) && this.directionTest(t))
                    },
                    emit: function (t) {
                        this.pX = t.deltaX, this.pY = t.deltaY;
                        var e = $(t.direction);
                        e && this.manager.emit(this.options.event + e, t), this._super.emit.call(this, t)
                    }
                }), p(it, tt, {
                    defaults: {
                        event: "pinch",
                        threshold: 0,
                        pointers: 2
                    },
                    getTouchAction: function () {
                        return [te]
                    },
                    attrTest: function (t) {
                        return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & ne)
                    },
                    emit: function (t) {
                        if (this._super.emit.call(this, t), 1 !== t.scale) {
                            var e = t.scale < 1 ? "in" : "out";
                            this.manager.emit(this.options.event + e, t)
                        }
                    }
                }), p(rt, K, {
                    defaults: {
                        event: "press",
                        pointers: 1,
                        time: 500,
                        threshold: 5
                    },
                    getTouchAction: function () {
                        return [$t]
                    },
                    process: function (t) {
                        var e = this.options,
                            i = t.pointers.length === e.pointers,
                            r = t.distance < e.threshold,
                            n = t.deltaTime > e.time;
                        if (this._input = t, !r || !i || t.eventType & (Et | It) && !n) this.reset();
                        else if (t.eventType & bt) this.reset(), this._timer = s(function () {
                            this.state = ae, this.tryEmit()
                        }, e.time, this);
                        else if (t.eventType & Et) return ae;
                        return 32
                    },
                    reset: function () {
                        clearTimeout(this._timer)
                    },
                    emit: function (t) {
                        this.state === ae && (t && t.eventType & Et ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = vt(), this.manager.emit(this.options.event, this._input)))
                    }
                }), p(nt, tt, {
                    defaults: {
                        event: "rotate",
                        threshold: 0,
                        pointers: 2
                    },
                    getTouchAction: function () {
                        return [te]
                    },
                    attrTest: function (t) {
                        return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & ne)
                    }
                }), p(ot, tt, {
                    defaults: {
                        event: "swipe",
                        threshold: 10,
                        velocity: .65,
                        direction: Pt | zt,
                        pointers: 1
                    },
                    getTouchAction: function () {
                        return et.prototype.getTouchAction.call(this)
                    },
                    attrTest: function (t) {
                        var e, i = this.options.direction;
                        return i & (Pt | zt) ? e = t.velocity : i & Pt ? e = t.velocityX : i & zt && (e = t.velocityY), this._super.attrTest.call(this, t) && i & t.direction && t.distance > this.options.threshold && mt(e) > this.options.velocity && t.eventType & Et
                    },
                    emit: function (t) {
                        var e = $(t.direction);
                        e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
                    }
                }), p(st, K, {
                    defaults: {
                        event: "tap",
                        pointers: 1,
                        taps: 1,
                        interval: 300,
                        time: 250,
                        threshold: 2,
                        posThreshold: 10
                    },
                    getTouchAction: function () {
                        return [Jt]
                    },
                    process: function (t) {
                        var e = this.options,
                            i = t.pointers.length === e.pointers,
                            r = t.distance < e.threshold,
                            n = t.deltaTime < e.time;
                        if (this.reset(), t.eventType & bt && 0 === this.count) return this.failTimeout();
                        if (r && n && i) {
                            if (t.eventType != Et) return this.failTimeout();
                            var o = !this.pTime || t.timeStamp - this.pTime < e.interval,
                                a = !this.pCenter || k(this.pCenter, t.center) < e.posThreshold;
                            this.pTime = t.timeStamp, this.pCenter = t.center, a && o ? this.count += 1 : this.count = 1, this._input = t;
                            if (0 === this.count % e.taps) return this.hasRequireFailures() ? (this._timer = s(function () {
                                this.state = ae, this.tryEmit()
                            }, e.interval, this), ne) : ae
                        }
                        return 32
                    },
                    failTimeout: function () {
                        return this._timer = s(function () {
                            this.state = 32
                        }, this.options.interval, this), 32
                    },
                    reset: function () {
                        clearTimeout(this._timer)
                    },
                    emit: function () {
                        this.state == ae && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
                    }
                }), at.VERSION = "2.0.4", at.defaults = {
                    domEvents: !1,
                    touchAction: "compute",
                    enable: !0,
                    inputTarget: null,
                    inputClass: null,
                    preset: [[nt, {
                        enable: !1
                    }], [it, {
                        enable: !1
                    }, ["rotate"]], [ot, {
                        direction: Pt
                    }], [et, {
                        direction: Pt
                    }, ["swipe"]], [st], [st, {
                        event: "doubletap",
                        taps: 2
                    }, ["tap"]], [rt]],
                    cssProps: {
                        userSelect: "none",
                        touchSelect: "none",
                        touchCallout: "none",
                        contentZooming: "none",
                        userDrag: "none",
                        tapHighlightColor: "rgba(0,0,0,0)"
                    }
                };
                lt.prototype = {
                    set: function (t) {
                        return h(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
                    },
                    stop: function (t) {
                        this.session.stopped = t ? 2 : 1
                    },
                    recognize: function (t) {
                        var e = this.session;
                        if (!e.stopped) {
                            this.touchAction.preventDefaults(t);
                            var i, r = this.recognizers,
                                n = e.curRecognizer;
                            (!n || n && n.state & ae) && (n = e.curRecognizer = null);
                            for (var o = 0; o < r.length;) i = r[o], 2 === e.stopped || n && i != n && !i.canRecognizeWith(n) ? i.reset() : i.recognize(t), !n && i.state & (ne | oe | se) && (n = e.curRecognizer = i), o++
                        }
                    },
                    get: function (t) {
                        if (t instanceof K) return t;
                        for (var e = this.recognizers, i = 0; i < e.length; i++)
                            if (e[i].options.event == t) return e[i];
                        return null
                    },
                    add: function (t) {
                        if (a(t, "add", this)) return this;
                        var e = this.get(t.options.event);
                        return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
                    },
                    remove: function (t) {
                        if (a(t, "remove", this)) return this;
                        var e = this.recognizers;
                        return t = this.get(t), e.splice(w(e, t), 1), this.touchAction.update(), this
                    },
                    on: function (t, e) {
                        var i = this.handlers;
                        return l(x(t), function (t) {
                            i[t] = i[t] || [], i[t].push(e)
                        }), this
                    },
                    off: function (t, e) {
                        var i = this.handlers;
                        return l(x(t), function (t) {
                            e ? i[t].splice(w(i[t], e), 1) : delete i[t]
                        }), this
                    },
                    emit: function (t, e) {
                        this.options.domEvents && ut(t, e);
                        var i = this.handlers[t] && this.handlers[t].slice();
                        if (i && i.length) {
                            e.type = t, e.preventDefault = function () {
                                e.srcEvent.preventDefault()
                            };
                            for (var r = 0; r < i.length;) i[r](e), r++
                        }
                    },
                    destroy: function () {
                        this.element && ht(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
                    }
                }, h(at, {
                    INPUT_START: bt,
                    INPUT_MOVE: St,
                    INPUT_END: Et,
                    INPUT_CANCEL: It,
                    STATE_POSSIBLE: re,
                    STATE_BEGAN: ne,
                    STATE_CHANGED: oe,
                    STATE_ENDED: se,
                    STATE_RECOGNIZED: ae,
                    STATE_CANCELLED: le,
                    STATE_FAILED: 32,
                    DIRECTION_NONE: Dt,
                    DIRECTION_LEFT: Tt,
                    DIRECTION_RIGHT: Lt,
                    DIRECTION_UP: Ft,
                    DIRECTION_DOWN: Ct,
                    DIRECTION_HORIZONTAL: Pt,
                    DIRECTION_VERTICAL: zt,
                    DIRECTION_ALL: Rt,
                    Manager: lt,
                    Input: D,
                    TouchAction: U,
                    TouchInput: W,
                    MouseInput: B,
                    PointerEventInput: q,
                    TouchMouseInput: G,
                    SingleTouchInput: j,
                    Recognizer: K,
                    AttrRecognizer: tt,
                    Tap: st,
                    Pan: et,
                    Swipe: ot,
                    Pinch: it,
                    Rotate: nt,
                    Press: rt,
                    on: v,
                    off: _,
                    each: l,
                    merge: u,
                    extend: h,
                    inherit: p,
                    bindFn: d,
                    prefixed: S
                }), typeof t == dt && t.amd ? t(function () {
                    return at
                }) : void 0 !== i && i.exports ? i.exports = at : e.Hammer = at
            }(window, document)
        }, {}],
        13: [function (t, e, i) {
            "use strict";

            function r() {}

            function n(t) {
                for (var e in r.prototype) r.prototype.hasOwnProperty(e) && (t.prototype[e] = r.prototype[e])
            }
            r.prototype.addEventListener = function (t, e) {
                var i = this.__events = this.__events || {},
                    r = i[t] = i[t] || [];
                r.indexOf(e) < 0 && r.push(e)
            }, r.prototype.removeEventListener = function (t, e) {
                var i = this.__events = this.__events || {},
                    r = i[t];
                if (r) {
                    var n = r.indexOf(e);
                    n >= 0 && r.splice(n, 1)
                }
            }, r.prototype.emit = function (t, e) {
                var i = this.__events = this.__events || {},
                    r = i[t],
                    n = Array.prototype.slice.call(arguments, 1);
                if (r)
                    for (var o = 0; o < r.length; o++) {
                        var s = r[o];
                        s.apply(this, n)
                    }
            }, e.exports = n
        }, {}],
        14: [function (t, e, i) {
            "use strict";

            function r(t, e, i, r, n) {
                if (n = n || {}, n.perspective = n.perspective || {}, n.perspective.extraTransforms = null != n.perspective.extraTransforms ? n.perspective.extraTransforms : "", (n.perspective.radius || n.perspective.extraTransforms) && !o()) throw new Error("CSS transforms on hotspots are not supported on this browser");
                this._domElement = t, this._parentDomElement = e, this._view = i, this._coords = {}, this._perspective = {}, this.setPosition(r), this._parentDomElement.appendChild(this._domElement), this.setPerspective(n.perspective), this._visible = !0, this._position = {
                    x: 0,
                    y: 0
                }
            }
            var n = t("minimal-event-emitter"),
                o = t("./support/Css"),
                s = t("./util/positionAbsolutely"),
                a = t("./util/dom").setTransform,
                l = t("./util/clearOwnProperties");
            n(r), r.prototype.destroy = function () {
                this._parentDomElement.removeChild(this._domElement), l(this)
            }, r.prototype.domElement = function () {
                return this._domElement
            }, r.prototype.position = function () {
                return this._coords
            }, r.prototype.setPosition = function (t) {
                for (var e in t) this._coords[e] = t[e];
                this._update()
            }, r.prototype.perspective = function () {
                return this._perspective
            }, r.prototype.setPerspective = function (t) {
                for (var e in t) this._perspective[e] = t[e];
                this._update()
            }, r.prototype.show = function () {
                this._visible || (this._visible = !0, this._update())
            }, r.prototype.hide = function () {
                this._visible && (this._visible = !1, this._update())
            }, r.prototype._update = function () {
                var t, e, i = this._domElement,
                    r = this._coords,
                    n = this._position,
                    o = !1;
                if (this._visible) {
                    var s = this._view;
                    this._perspective.radius ? (o = !0, this._setEmbeddedPosition(s, r)) : (s.coordinatesToScreen(r, n), t = n.x, e = n.y, null != t && null != e && (o = !0, this._setPosition(t, e)))
                }
                o ? (i.style.display = "block", i.style.position = "absolute") : (i.style.display = "none", i.style.position = "")
            }, r.prototype._setEmbeddedPosition = function (t, e) {
                var i = t.coordinatesToPerspectiveTransform(e, this._perspective.radius, this._perspective.extraTransforms);
                a(this._domElement, i)
            }, r.prototype._setPosition = function (t, e) {
                s(this._domElement, t, e, this._perspective.extraTransforms)
            }, e.exports = r
        }, {
            "./support/Css": 81,
            "./util/clearOwnProperties": 90,
            "./util/dom": 99,
            "./util/positionAbsolutely": 110,
            "minimal-event-emitter": 13
        }],
        15: [function (t, e, i) {
            "use strict";

            function r(t, e, i, r, n) {
                n = n || {}, this._parentDomElement = t, this._stage = e, this._view = i, this._renderLoop = r, this._hotspots = [], this._visible = !0, this._rect = n.rect, this._visibilityOrRectChanged = !0, this._stageWidth = null, this._stageHeight = null, this._tmpRect = {}, this._hotspotContainerWrapper = document.createElement("div"), h(this._hotspotContainerWrapper), f(this._hotspotContainerWrapper, "none"), this._parentDomElement.appendChild(this._hotspotContainerWrapper), this._hotspotContainer = document.createElement("div"), h(this._hotspotContainer), f(this._hotspotContainer, "all"), this._hotspotContainerWrapper.appendChild(this._hotspotContainer), this._updateHandler = this._update.bind(this), this._renderLoop.addEventListener("afterRender", this._updateHandler)
            }
            var n = t("minimal-event-emitter"),
                o = t("./Hotspot"),
                s = t("./util/calcRect"),
                a = t("./support/cssPointerEvents"),
                l = t("./util/positionAbsolutely"),
                h = t("./util/dom").setAbsolute,
                u = t("./util/dom").setOverflowHidden,
                c = t("./util/dom").setOverflowVisible,
                p = t("./util/dom").setNullSize,
                d = t("./util/dom").setPixelSize,
                f = t("./util/dom").setWithVendorPrefix("pointer-events"),
                m = t("./util/clearOwnProperties");
            n(r), r.prototype.destroy = function () {
                for (; this._hotspots.length;) this.destroyHotspot(this._hotspots[0]);
                this._parentDomElement.removeChild(this._hotspotContainerWrapper), this._renderLoop.removeEventListener("afterRender", this._updateHandler), m(this)
            }, r.prototype.domElement = function () {
                return this._hotspotContainer
            }, r.prototype.setRect = function (t) {
                t && !a() && "undefined" != typeof console && console.warn("Using a rect effect is not fully supported on this browser. Hotspots may not be shown."), this._rect = t, this._visibilityOrRectChanged = !0
            }, r.prototype.rect = function () {
                return this._rect
            }, r.prototype.createHotspot = function (t, e, i) {
                e = e || {};
                var r = new o(t, this._hotspotContainer, this._view, e, i);
                return this._hotspots.push(r), r._update(), this.emit("hotspotsChange"), r
            }, r.prototype.hasHotspot = function (t) {
                return this._hotspots.indexOf(t) >= 0
            }, r.prototype.listHotspots = function () {
                return [].concat(this._hotspots)
            }, r.prototype.destroyHotspot = function (t) {
                var e = this._hotspots.indexOf(t);
                if (e < 0) throw new Error("No such hotspot");
                this._hotspots.splice(e, 1), t.destroy(), this.emit("hotspotsChange")
            }, r.prototype.hide = function () {
                this._visible && (this._visible = !1, this._visibilityOrRectChanged = !0, this._update())
            }, r.prototype.show = function () {
                this._visible || (this._visible = !0, this._visibilityOrRectChanged = !0, this._update())
            }, r.prototype._update = function () {
                var t = this._hotspotContainerWrapper,
                    e = this._stage.width(),
                    i = this._stage.height(),
                    r = this._tmpRect;
                if (this._visibilityOrRectChanged || this._rect && (e !== this._stageWidth || i !== this._stageHeight)) {
                    var n = this._visible && !(this._rect && !a());
                    t.style.display = n ? "block" : "none", n && (this._rect ? (s(e, i, this._rect, r), l(t, e * r.x, i * r.y), d(t, e * r.width, i * r.height), u(t)) : (l(t, 0, 0), p(t), c(t))), this._stageWidth = e, this._stageHeight = i, this._visibilityOrRectChanged = !1
                }
                for (var o = 0; o < this._hotspots.length; o++) this._hotspots[o]._update()
            }, e.exports = r
        }, {
            "./Hotspot": 14,
            "./support/cssPointerEvents": 84,
            "./util/calcRect": 86,
            "./util/clearOwnProperties": 90,
            "./util/dom": 99,
            "./util/positionAbsolutely": 110,
            "minimal-event-emitter": 13
        }],
        16: [function (t, e, i) {
            "use strict";

            function r(t, e, i, r, n) {
                n = n || {};
                var o = this;
                this._source = t, this._geometry = e, this._view = i, this._textureStore = r, this._effects = n.effects || {}, this._fixedLevelIndex = null, this._viewChangeHandler = function () {
                    o.emit("viewChange", o.view())
                }, this._view.addEventListener("change", this._viewChangeHandler), this._textureStoreChangeHandler = function () {
                    o.emit("textureStoreChange", o.textureStore())
                }, this._textureStore.addEventListener("textureLoad", this._textureStoreChangeHandler), this._textureStore.addEventListener("textureError", this._textureStoreChangeHandler), this._textureStore.addEventListener("textureInvalid", this._textureStoreChangeHandler)
            }
            var n = t("minimal-event-emitter"),
                o = t("./util/extend"),
                s = t("./util/clearOwnProperties");
            n(r), r.prototype.destroy = function () {
                this._view.removeEventListener("change", this._viewChangeHandler), this._textureStore.removeEventListener("textureLoad", this._textureStoreChangeHandler), this._textureStore.removeEventListener("textureError", this._textureStoreChangeHandler), this._textureStore.removeEventListener("textureInvalid", this._textureStoreChangeHandler), s(this)
            }, r.prototype.source = function () {
                return this._source
            }, r.prototype.geometry = function () {
                return this._geometry
            }, r.prototype.view = function () {
                return this._view
            }, r.prototype.textureStore = function () {
                return this._textureStore
            }, r.prototype.effects = function () {
                return this._effects
            }, r.prototype.setEffects = function (t) {
                this._effects = t, this.emit("effectsChange", this._effects)
            }, r.prototype.mergeEffects = function (t) {
                o(this._effects, t), this.emit("effectsChange", this._effects)
            }, r.prototype.fixedLevel = function () {
                return this._fixedLevelIndex
            }, r.prototype.setFixedLevel = function (t) {
                if (t !== this._fixedLevelIndex) {
                    if (null != t && (t >= this._geometry.levelList.length || t < 0)) throw new Error("Level index out of range: " + t);
                    this._fixedLevelIndex = t, this.emit("fixedLevelChange", this._fixedLevelIndex)
                }
            }, r.prototype._selectLevel = function () {
                return null != this._fixedLevelIndex ? this._geometry.levelList[this._fixedLevelIndex] : this._view.selectLevel(this._geometry.selectableLevelList)
            }, r.prototype.visibleTiles = function (t) {
                var e = this._selectLevel();
                return this._geometry.visibleTiles(this._view, e, t)
            }, r.prototype.pinLevel = function (t) {
                for (var e = this._geometry.levelList[t], i = this._geometry.levelTiles(e), r = 0; r < i.length; r++) this._textureStore.pin(i[r])
            }, r.prototype.unpinLevel = function (t) {
                for (var e = this._geometry.levelList[t], i = this._geometry.levelTiles(e), r = 0; r < i.length; r++) this._textureStore.unpin(i[r])
            }, r.prototype.pinFirstLevel = function () {
                return this.pinLevel(0)
            }, r.prototype.unpinFirstLevel = function () {
                return this.unpinLevel(0)
            }, e.exports = r
        }, {
            "./util/clearOwnProperties": 90,
            "./util/extend": 100,
            "minimal-event-emitter": 13
        }],
        17: [function (t, e, i) {
            "use strict";

            function r(t) {
                this.constructor.super_.apply(this, arguments), this.message = t
            }
            t("./util/inherits")(r, Error), e.exports = r
        }, {
            "./util/inherits": 103
        }],
        18: [function (t, e, i) {
            "use strict";

            function r(t) {
                var e = this;
                this._stage = t, this._running = !1, this._rendering = !1, this._requestHandle = null, this._boundLoop = this._loop.bind(this), this._renderInvalidHandler = function () {
                    e._rendering || e.renderOnNextFrame()
                }, this._stage.addEventListener("renderInvalid", this._renderInvalidHandler)
            }
            var n = t("minimal-event-emitter"),
                o = t("./util/clearOwnProperties");
            n(r), r.prototype.destroy = function () {
                this.stop(), this._stage.removeEventListener("renderInvalid", this._renderInvalidHandler), o(this)
            }, r.prototype.stage = function () {
                return this._stage
            }, r.prototype.start = function () {
                this._running = !0, this.renderOnNextFrame()
            }, r.prototype.stop = function () {
                this._requestHandle && (window.cancelAnimationFrame(this._requestHandle), this._requestHandle = null), this._running = !1
            }, r.prototype.renderOnNextFrame = function () {
                this._running && !this._requestHandle && (this._requestHandle = window.requestAnimationFrame(this._boundLoop))
            }, r.prototype._loop = function () {
                if (!this._running) throw new Error("Render loop running while in stopped state");
                this._requestHandle = null, this._rendering = !0, this.emit("beforeRender"), this._rendering = !1, this._stage.render(), this.emit("afterRender")
            }, e.exports = r
        }, {
            "./util/clearOwnProperties": 90,
            "minimal-event-emitter": 13
        }],
        19: [function (t, e, i) {
            "use strict";

            function r(t, e) {
                this._viewer = t, this._view = e, this._layers = [], this._hotspotContainer = new s(t._controlContainer, t.stage(), this._view, t.renderLoop()), this._movement = null, this._movementStartTime = null, this._movementStep = null, this._movementParams = null, this._movementCallback = null, this._updateMovementHandler = this._updateMovement.bind(this), this._updateHotspotContainerHandler = this._updateHotspotContainer.bind(this), this._viewer.addEventListener("sceneChange", this._updateHotspotContainerHandler), this._viewChangeHandler = this.emit.bind(this, "viewChange"), this._view.addEventListener("change", this._viewChangeHandler), this._updateHotspotContainer()
            }
            var n = t("./Layer"),
                o = t("./TextureStore"),
                s = t("./HotspotContainer"),
                a = t("minimal-event-emitter"),
                l = t("./util/now"),
                h = t("./util/noop"),
                u = t("./util/type"),
                c = t("./util/defaults"),
                p = t("./util/clearOwnProperties");
            a(r), r.prototype.destroy = function () {
                this._view.removeEventListener("change", this._viewChangeHandler), this._viewer.removeEventListener("sceneChange", this._updateHotspotContainerHandler), this._movement && this.stopMovement(), this._hotspotContainer.destroy(), this.destroyAllLayers(), p(this)
            }, r.prototype.hotspotContainer = function () {
                return this._hotspotContainer
            }, r.prototype.layer = function () {
                return this._layers[0]
            }, r.prototype.listLayers = function () {
                return [].concat(this._layers)
            }, r.prototype.view = function () {
                return this._view
            }, r.prototype.viewer = function () {
                return this._viewer
            }, r.prototype.visible = function () {
                return this._viewer.scene() === this
            }, r.prototype.createLayer = function (t) {
                t = t || {};
                var e = t.textureStoreOpts || {},
                    i = t.layerOpts || {},
                    r = t.source,
                    s = t.geometry,
                    a = this._view,
                    l = this._viewer.stage(),
                    h = new o(r, l, e),
                    u = new n(r, s, a, h, i);
                return this._layers.push(u), t.pinFirstLevel && u.pinFirstLevel(), this.emit("layerChange"), u
            }, r.prototype.destroyLayer = function (t) {
                var e = this._layers.indexOf(t);
                if (e < 0) throw new Error("No such layer in scene");
                this._layers.splice(e, 1), this.emit("layerChange"), t.textureStore().destroy(), t.destroy()
            }, r.prototype.destroyAllLayers = function () {
                for (; this._layers.length > 0;) this.destroyLayer(this._layers[0])
            }, r.prototype.switchTo = function (t, e) {
                return this._viewer.switchScene(this, t, e)
            }, r.prototype.lookTo = function (t, e, i) {
                if (e = e || {}, i = i || h, "object" !== u(t)) throw new Error("Target view parameters must be an object");
                var r = null != e.transitionDuration ? e.transitionDuration : 1e3,
                    n = null == e.shortest || e.shortest,
                    o = this._view,
                    s = o.parameters(),
                    a = {};
                c(a, t), c(a, s), n && o.normalizeToClosest && o.normalizeToClosest(a, a);
                var l = function (t) {
                        return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                    },
                    p = function () {
                        var t = !1;
                        return function (e, i) {
                            if (i >= r && t) return null;
                            var n = Math.min(i / r, 1);
                            for (var o in e) {
                                var h = s[o],
                                    u = a[o];
                                e[o] = h + l(n) * (u - h)
                            }
                            return t = i >= r, e
                        }
                    },
                    d = this._viewer.controls().enabled();
                this._viewer.controls().disable(), this.startMovement(p, function () {
                    d && this._viewer.controls().enable(), i()
                })
            }, r.prototype.startMovement = function (t, e) {
                var i = this._viewer.renderLoop();
                this._movement && this.stopMovement();
                var r = t();
                if ("function" != typeof r) throw new Error("Bad movement");
                this._movement = t, this._movementStep = r, this._movementStartTime = l(), this._movementParams = {}, this._movementCallback = e, i.addEventListener("beforeRender", this._updateMovementHandler), i.renderOnNextFrame()
            }, r.prototype.stopMovement = function () {
                var t = this._viewer.renderLoop();
                this._movementCallback && this._movementCallback(), t.removeEventListener("beforeRender", this._updateMovementHandler), this._movement = null, this._movementStep = null, this._movementStartTime = null, this._movementParams = null, this._movementCallback = null
            }, r.prototype.movement = function () {
                return this._movement
            }, r.prototype._updateMovement = function () {
                if (!this._movement) throw new Error("Should not call update");
                var t = this._viewer.renderLoop(),
                    e = this._view,
                    i = l() - this._movementStartTime,
                    r = this._movementStep,
                    n = this._movementParams;
                n = e.parameters(n), n = r(n, i), null == n ? this.stopMovement() : (e.setParameters(n), t.renderOnNextFrame())
            }, r.prototype._updateHotspotContainer = function () {
                this.visible() ? this._hotspotContainer.show() : this._hotspotContainer.hide()
            }, e.exports = r
        }, {
            "./HotspotContainer": 15,
            "./Layer": 16,
            "./TextureStore": 20,
            "./util/clearOwnProperties": 90,
            "./util/defaults": 95,
            "./util/noop": 106,
            "./util/now": 107,
            "./util/type": 115,
            "minimal-event-emitter": 13
        }],
        20: [function (t, e, i) {
            "use strict";

            function r() {}

            function n(t, e) {
                var i = this,
                    n = y++;
                i._id = n, i._store = t, i._tile = e, i._asset = null, i._texture = null, i._changeHandler = function () {
                    t.emit("textureInvalid", e)
                };
                var o = t.source(),
                    s = t.stage(),
                    a = o.loadAsset.bind(o),
                    l = s.createTexture.bind(s),
                    h = p(c(a), l);
                t.emit("textureStartLoad", e), m && console.log("loading", n, e), i._cancel = h(s, e, function (o, s, a, l) {
                    if (i._cancel = null, o) return a && a.destroy(), l && l.destroy(), void(o instanceof r ? (t.emit("textureCancel", e), m && console.log("cancel", n, e)) : (t.emit("textureError", e, o), m && console.log("error", n, e)));
                    i._texture = l, a.isDynamic() ? (i._asset = a, a.addEventListener("change", i._changeHandler)) : a.destroy(), t.emit("textureLoad", e), m && console.log("load", n, e)
                })
            }

            function o(t, e, i) {
                i = u(i || {}, _), this._source = t, this._stage = e, this._state = v.IDLE, this._delimCount = 0, this._itemMap = new s, this._visible = new a,
                    this._previouslyVisible = new l(i.previouslyVisibleCacheSize), this._pinMap = new s, this._newVisible = new a, this._noLongerVisible = [], this._visibleAgain = [], this._evicted = []
            }
            var s = t("./collections/Map"),
                a = t("./collections/Set"),
                l = t("./collections/LruSet"),
                h = t("minimal-event-emitter"),
                u = t("./util/defaults"),
                c = t("./util/retry"),
                p = t("./util/chain"),
                d = t("./util/inherits"),
                f = t("./util/clearOwnProperties"),
                m = "undefined" != typeof MARZIPANODEBUG && MARZIPANODEBUG.textureStore,
                v = {
                    IDLE: 0,
                    START: 1,
                    MARK: 2,
                    END: 3
                },
                _ = {
                    previouslyVisibleCacheSize: 512
                },
                y = 0;
            d(r, Error), n.prototype.asset = function () {
                return this._asset
            }, n.prototype.texture = function () {
                return this._texture
            }, n.prototype.destroy = function () {
                var t = this._id,
                    e = this._store,
                    i = this._tile,
                    n = this._asset,
                    o = this._texture,
                    s = this._cancel;
                if (s) return void s(new r("Texture load cancelled"));
                n && (n.removeEventListener("change", this._changeHandler), n.destroy()), o && o.destroy(), e.emit("textureUnload", i), m && console.log("unload", t, i), f(this)
            }, h(n), h(o), o.prototype.destroy = function () {
                this.clear(), f(this)
            }, o.prototype.stage = function () {
                return this._stage
            }, o.prototype.source = function () {
                return this._source
            }, o.prototype.clear = function () {
                var t = this;
                t._evicted.length = 0, t._itemMap.forEach(function (e) {
                    t._evicted.push(e)
                }), t._evicted.forEach(function (e) {
                    t._unloadTile(e)
                }), t._itemMap.clear(), t._visible.clear(), t._previouslyVisible.clear(), t._pinMap.clear(), t._newVisible.clear(), t._noLongerVisible.length = 0, t._visibleAgain.length = 0, t._evicted.length = 0
            }, o.prototype.clearNotPinned = function () {
                var t = this;
                t._evicted.length = 0, t._itemMap.forEach(function (e) {
                    t._pinMap.has(e) || t._evicted.push(e)
                }), t._evicted.forEach(function (e) {
                    t._unloadTile(e)
                }), t._visible.clear(), t._previouslyVisible.clear(), t._evicted.length = 0
            }, o.prototype.startFrame = function () {
                if (this._state !== v.IDLE && this._state !== v.START) throw new Error("TextureStore: startFrame called out of sequence");
                this._state = v.START, this._delimCount++
            }, o.prototype.markTile = function (t) {
                if (this._state !== v.START && this._state !== v.MARK) throw new Error("TextureStore: markTile called out of sequence");
                this._state = v.MARK;
                var e = this._itemMap.get(t),
                    i = e && e.texture(),
                    r = e && e.asset();
                i && r && i.refresh(t, r), this._newVisible.add(t)
            }, o.prototype.endFrame = function () {
                if (this._state !== v.START && this._state !== v.MARK && this._state !== v.END) throw new Error("TextureStore: endFrame called out of sequence");
                this._state = v.END, --this._delimCount || (this._update(), this._state = v.IDLE)
            }, o.prototype._update = function () {
                var t = this;
                t._noLongerVisible.length = 0, t._visible.forEach(function (e) {
                    t._newVisible.has(e) || t._noLongerVisible.push(e)
                }), t._visibleAgain.length = 0, t._newVisible.forEach(function (e) {
                    t._previouslyVisible.has(e) && t._visibleAgain.push(e)
                }), t._visibleAgain.forEach(function (e) {
                    t._previouslyVisible.remove(e)
                }), t._evicted.length = 0, t._noLongerVisible.forEach(function (e) {
                    var i = t._itemMap.get(e);
                    if (i && i.texture()) {
                        var r = t._previouslyVisible.add(e);
                        null != r && t._evicted.push(r)
                    } else i && t._unloadTile(e)
                }), t._evicted.forEach(function (e) {
                    t._pinMap.has(e) || t._unloadTile(e)
                }), t._newVisible.forEach(function (e) {
                    t._itemMap.get(e) || t._loadTile(e)
                });
                var e = t._visible;
                t._visible = t._newVisible, t._newVisible = e, t._newVisible.clear(), t._noLongerVisible.length = 0, t._visibleAgain.length = 0, t._evicted.length = 0
            }, o.prototype._loadTile = function (t) {
                if (this._itemMap.has(t)) throw new Error("TextureStore: loading texture already in cache");
                var e = new n(this, t);
                this._itemMap.set(t, e)
            }, o.prototype._unloadTile = function (t) {
                var e = this._itemMap.del(t);
                if (!e) throw new Error("TextureStore: unloading texture not in cache");
                e.destroy()
            }, o.prototype.asset = function (t) {
                var e = this._itemMap.get(t);
                return e ? e.asset() : null
            }, o.prototype.texture = function (t) {
                var e = this._itemMap.get(t);
                return e ? e.texture() : null
            }, o.prototype.pin = function (t) {
                var e = (this._pinMap.get(t) || 0) + 1;
                return this._pinMap.set(t, e), this._itemMap.has(t) || this._loadTile(t), e
            }, o.prototype.unpin = function (t) {
                var e = this._pinMap.get(t);
                if (!e) throw new Error("TextureStore: unpin when not pinned");
                return e--, e > 0 ? this._pinMap.set(t, e) : (this._pinMap.del(t), this._visible.has(t) || this._previouslyVisible.has(t) || this._unloadTile(t)), e
            }, o.prototype.query = function (t) {
                var e = this._itemMap.get(t),
                    i = this._pinMap.get(t) || 0;
                return {
                    visible: this._visible.has(t),
                    previouslyVisible: this._previouslyVisible.has(t),
                    hasAsset: null != e && null != e.asset(),
                    hasTexture: null != e && null != e.texture(),
                    pinned: 0 !== i,
                    pinCount: i
                }
            }, e.exports = o
        }, {
            "./collections/LruSet": 29,
            "./collections/Map": 30,
            "./collections/Set": 31,
            "./util/chain": 88,
            "./util/clearOwnProperties": 90,
            "./util/defaults": 95,
            "./util/inherits": 103,
            "./util/retry": 113,
            "minimal-event-emitter": 13
        }],
        21: [function (t, e, i) {
            "use strict";

            function r() {
                this._stack = [], this._visited = new n, this._vertices = null
            }
            var n = t("./collections/Set");
            r.prototype.search = function (t, e, i) {
                var r = this._stack,
                    n = this._visited,
                    o = this._vertices,
                    s = 0;
                for (this._clear(), r.push(e); r.length > 0;) {
                    var a = r.pop();
                    if (!n.has(a) && t.intersects(a.vertices(o))) {
                        n.add(a);
                        for (var l = a.neighbors(), h = 0; h < l.length; h++) r.push(l[h]);
                        i.push(a), s++
                    }
                }
                return this._vertices = o, this._clear(), s
            }, r.prototype._clear = function () {
                this._stack.length = 0, this._visited.clear()
            }, e.exports = r
        }, {
            "./collections/Set": 31
        }],
        22: [function (t, e, i) {
            "use strict";

            function r(t) {
                t = o(t || {}, a), this._duration = t.duration, this._startTime = null, this._handle = null, this._check = this._check.bind(this)
            }
            var n = t("minimal-event-emitter"),
                o = t("./util/defaults"),
                s = t("./util/now"),
                a = {
                    duration: Infinity
                };
            n(r), r.prototype.start = function () {
                this._startTime = s(), null == this._handle && this._duration < Infinity && this._setup(this._duration)
            }, r.prototype.started = function () {
                return null != this._startTime
            }, r.prototype.stop = function () {
                this._startTime = null, null != this._handle && (clearTimeout(this._handle), this._handle = null)
            }, r.prototype._setup = function (t) {
                this._handle = setTimeout(this._check, t)
            }, r.prototype._teardown = function () {
                clearTimeout(this._handle), this._handle = null
            }, r.prototype._check = function () {
                var t = s(),
                    e = t - this._startTime,
                    i = this._duration - e;
                this._teardown(), i <= 0 ? (this.emit("timeout"), this._startTime = null) : i < Infinity && this._setup(i)
            }, r.prototype.duration = function () {
                return this._duration
            }, r.prototype.setDuration = function (t) {
                this._duration = t, null != this._startTime && this._check()
            }, e.exports = r
        }, {
            "./util/defaults": 95,
            "./util/now": 107,
            "minimal-event-emitter": 13
        }],
        23: [function (t, e, i) {
            "use strict";

            function r(t, e) {
                e = e || {}, this._domElement = t, y(t);
                var i;
                if (e.stageType) {
                    if (!(i = E[e.stageType])) throw new Error("Unknown stage type: " + e.stageType)
                } else {
                    for (var r = 0; r < I.length; r++)
                        if (I[r].supported()) {
                            i = I[r];
                            break
                        } if (!i) throw new Error("None of the stage types are supported")
                }
                this._stage = new i(e.stage), _(this._stage), this._domElement.appendChild(this._stage.domElement()), this._controlContainer = document.createElement("div"), g(this._controlContainer), x(this._controlContainer), o.ios && this._controlContainer.addEventListener("touchmove", function (t) {
                    t.preventDefault()
                });
                var n = document.createElement("div");
                g(n), x(n), w(n), this._controlContainer.appendChild(n), t.appendChild(this._controlContainer), this._size = {}, this.updateSize(), this._updateSizeListener = this.updateSize.bind(this), window.addEventListener("resize", this._updateSizeListener), this._renderLoop = new a(this._stage), this._controls = new l, this._controlMethods = v(this._controls, this._controlContainer, e.controls), this._controls.attach(this._renderLoop), this._hammerManagerTouch = m.get(this._controlContainer, "touch"), this._hammerManagerMouse = m.get(this._controlContainer, "mouse"), this._dragCursor = new f(this._controls, "mouseViewDrag", t, e.cursors && e.cursors.drag || {}), this._renderLoop.start(), this._scenes = [], this._currentScene = null, this._replacedScene = null, this._cancelCurrentTween = null, this._layerChangeHandler = this._updateSceneLayers.bind(this), this._viewChangeHandler = this.emit.bind(this, "viewChange"), this._idleTimer = new u, this._idleTimer.start(), this._resetIdleTimerHandler = this._resetIdleTimer.bind(this), this.addEventListener("viewChange", this._resetIdleTimerHandler), this._enterIdleHandler = this._enterIdle.bind(this), this._idleTimer.addEventListener("timeout", this._enterIdleHandler), this._leaveIdleHandler = this._leaveIdle.bind(this), this._controls.addEventListener("active", this._leaveIdleHandler), this.addEventListener("sceneChange", this._leaveIdleHandler), this._idleMovement = null
            }

            function n(t, e, i) {
                e.listLayers().forEach(function (e) {
                    e.mergeEffects({
                        opacity: t
                    })
                }), e._hotspotContainer.domElement().style.opacity = t
            }
            var o = t("bowser"),
                s = t("minimal-event-emitter"),
                a = t("./RenderLoop"),
                l = t("./controls/Controls"),
                h = t("./Scene"),
                u = t("./Timer"),
                c = t("./stages/WebGl"),
                p = t("./stages/Css"),
                d = t("./stages/Flash"),
                f = t("./controls/ControlCursor"),
                m = t("./controls/HammerGestures"),
                v = t("./controls/registerDefaultControls"),
                _ = t("./renderers/registerDefaultRenderers"),
                y = t("./util/dom").setOverflowHidden,
                g = t("./util/dom").setAbsolute,
                x = t("./util/dom").setFullSize,
                w = t("./util/dom").setBlocking,
                M = t("./util/tween"),
                b = t("./util/noop"),
                S = t("./util/clearOwnProperties"),
                E = {
                    webgl: c,
                    css: p,
                    flash: d
                },
                I = [c, p, d];
            s(r), r.prototype.destroy = function () {
                window.removeEventListener("resize", this._updateSizeListener), this._currentScene && this._removeSceneEventListeners(this._currentScene), this._replacedScene && this._removeSceneEventListeners(this._replacedScene), this._dragCursor.destroy();
                for (var t in this._controlMethods) this._controlMethods[t].destroy();
                for (; this._scenes.length;) this.destroyScene(this._scenes[0]);
                this._domElement.removeChild(this._stage.domElement()), this._stage.destroy(), this._renderLoop.destroy(), this._controls.destroy(), this._controls = null, this._cancelCurrentTween && this._cancelCurrentTween(), S(this)
            }, r.prototype.updateSize = function () {
                var t = this._size;
                t.width = this._domElement.clientWidth, t.height = this._domElement.clientHeight, this._stage.setSize(t)
            }, r.prototype.stage = function () {
                return this._stage
            }, r.prototype.renderLoop = function () {
                return this._renderLoop
            }, r.prototype.controls = function () {
                return this._controls
            }, r.prototype.domElement = function () {
                return this._domElement
            }, r.prototype.createScene = function (t) {
                t = t || {};
                var e = this.createEmptyScene({
                    view: t.view
                });
                return e.createLayer({
                    source: t.source,
                    geometry: t.geometry,
                    pinFirstLevel: t.pinFirstLevel,
                    textureStoreOpts: t.textureStoreOpts,
                    layerOpts: t.layerOpts
                }), e
            }, r.prototype.createEmptyScene = function (t) {
                t = t || {};
                var e = new h(this, t.view);
                return this._scenes.push(e), e
            }, r.prototype._updateSceneLayers = function () {
                var t, e, i = this._stage,
                    r = this._currentScene,
                    n = this._replacedScene,
                    o = i.listLayers(),
                    s = [];
                if (n && (s = s.concat(n.listLayers())), r && (s = s.concat(r.listLayers())), 1 !== Math.abs(o.length - s.length)) throw new Error("Stage and scene out of sync");
                if (s.length < o.length)
                    for (t = 0; t < o.length; t++)
                        if (e = o[t], s.indexOf(e) < 0) {
                            this._removeLayerFromStage(e);
                            break
                        } if (s.length > o.length)
                    for (t = 0; t < s.length; t++) e = s[t], o.indexOf(e) < 0 && this._addLayerToStage(e, t)
            }, r.prototype._addLayerToStage = function (t, e) {
                t.pinFirstLevel(), this._stage.addLayer(t, e)
            }, r.prototype._removeLayerFromStage = function (t) {
                this._stage.removeLayer(t), t.unpinFirstLevel(), t.textureStore().clearNotPinned()
            }, r.prototype._addSceneEventListeners = function (t) {
                t.addEventListener("layerChange", this._layerChangeHandler), t.addEventListener("viewChange", this._viewChangeHandler)
            }, r.prototype._removeSceneEventListeners = function (t) {
                t.removeEventListener("layerChange", this._layerChangeHandler), t.removeEventListener("viewChange", this._viewChangeHandler)
            }, r.prototype.destroyScene = function (t) {
                var e = this._scenes.indexOf(t);
                if (e < 0) throw new Error("No such scene in viewer");
                var i, r;
                if (this._currentScene === t) {
                    for (this._removeSceneEventListeners(t), r = t.listLayers(), i = 0; i < r.length; i++) this._removeLayerFromStage(r[i]);
                    this._cancelCurrentTween && (this._cancelCurrentTween(), this._cancelCurrentTween = null), this._currentScene = null, this.emit("sceneChange")
                }
                if (this._replacedScene === t) {
                    for (this._removeSceneEventListeners(t), r = t.listLayers(), i = 0; i < r.length; i++) this._removeLayerFromStage(r[i]);
                    this._replacedScene = null
                }
                this._scenes.splice(e, 1), t.destroy()
            }, r.prototype.destroyAllScenes = function () {
                for (; this._scenes.length > 0;) this.destroyScene(this._scenes[0])
            }, r.prototype.hasScene = function (t) {
                return this._scenes.indexOf(t) >= 0
            }, r.prototype.listScenes = function () {
                return [].concat(this._scenes)
            }, r.prototype.scene = function () {
                return this._currentScene
            }, r.prototype.view = function () {
                var t = this._currentScene;
                return t ? t.view() : null
            }, r.prototype.lookTo = function (t, e, i) {
                var r = this._currentScene;
                r && r.lookTo(t, e, i)
            }, r.prototype.startMovement = function (t, e) {
                var i = this._currentScene;
                i && i.startMovement(t, e)
            }, r.prototype.stopMovement = function () {
                var t = this._currentScene;
                t && t.stopMovement()
            }, r.prototype.setIdleMovement = function (t, e) {
                this._idleTimer.setDuration(t), this._idleMovement = e
            }, r.prototype.breakIdleMovement = function () {
                this._leaveIdle(), this._resetIdleTimer()
            }, r.prototype._resetIdleTimer = function () {
                this._idleTimer.start()
            }, r.prototype._enterIdle = function () {
                var t = this._currentScene,
                    e = this._idleMovement;
                t && e && t.startMovement(e)
            }, r.prototype._leaveIdle = function () {
                var t = this._currentScene;
                t && t.movement() === this._idleMovement && t.stopMovement()
            };
            r.prototype.switchScene = function (t, e, i) {
                function r(e) {
                    d(e, t, l)
                }

                function o() {
                    if (s._replacedScene) {
                        s._removeSceneEventListeners(s._replacedScene), h = s._replacedScene.listLayers();
                        for (var t = 0; t < h.length; t++) s._removeLayerFromStage(h[t]);
                        s._replacedScene = null
                    }
                    s._cancelCurrentTween = null, i()
                }
                var s = this;
                e = e || {}, i = i || b;
                var a = this._stage,
                    l = this._currentScene;
                if (l === t) return void i();
                if (this._scenes.indexOf(t) < 0) throw new Error("No such scene in viewer");
                this._cancelCurrentTween && (this._cancelCurrentTween(), this._cancelCurrentTween = null);
                var h = l ? l.listLayers() : [],
                    u = t.listLayers(),
                    c = a.listLayers();
                if (l && (c.length !== h.length || c.length > 1 && c[0] != h[0])) throw new Error("Stage not in sync with viewer");
                for (var p = null != e.transitionDuration ? e.transitionDuration : 1e3, d = null != e.transitionUpdate ? e.transitionUpdate : n, f = 0; f < u.length; f++) this._addLayerToStage(u[f]);
                this._cancelCurrentTween = M(p, r, o), this._currentScene = t, this._replacedScene = l, this.emit("sceneChange"), this.emit("viewChange"), this._addSceneEventListeners(t)
            }, e.exports = r
        }, {
            "./RenderLoop": 18,
            "./Scene": 19,
            "./Timer": 22,
            "./controls/ControlCursor": 36,
            "./controls/Controls": 37,
            "./controls/HammerGestures": 41,
            "./controls/registerDefaultControls": 48,
            "./renderers/registerDefaultRenderers": 69,
            "./stages/Css": 76,
            "./stages/Flash": 77,
            "./stages/WebGl": 80,
            "./util/clearOwnProperties": 90,
            "./util/dom": 99,
            "./util/noop": 106,
            "./util/tween": 114,
            bowser: 1,
            "minimal-event-emitter": 13
        }],
        24: [function (t, e, i) {
            "use strict";

            function r(t) {
                this.constructor.super_.call(this, t), this._timestamp = 0
            }
            var n = t("./Static"),
                o = t("../util/inherits"),
                s = t("minimal-event-emitter"),
                a = t("../util/clearOwnProperties");
            o(r, n), s(r), r.prototype.destroy = function () {
                a(this)
            }, r.prototype.timestamp = function () {
                return this._timestamp
            }, r.prototype.isDynamic = function () {
                return !0
            }, r.prototype.markDirty = function () {
                this._timestamp++, this.emit("change")
            }, e.exports = r
        }, {
            "../util/clearOwnProperties": 90,
            "../util/inherits": 103,
            "./Static": 26,
            "minimal-event-emitter": 13
        }],
        25: [function (t, e, i) {
            "use strict";

            function r(t, e) {
                this._flashElement = t, this._imageId = e
            }
            var n = t("minimal-event-emitter"),
                o = t("../util/clearOwnProperties");
            n(r), r.prototype.destroy = function () {
                this._flashElement.unloadImage(this._imageId), o(this)
            }, r.prototype.element = function () {
                return this._imageId
            }, r.prototype.width = function () {
                return 0
            }, r.prototype.height = function () {
                return 0
            }, r.prototype.timestamp = function () {
                return 0
            }, r.prototype.isDynamic = function () {
                return !1
            }, e.exports = r
        }, {
            "../util/clearOwnProperties": 90,
            "minimal-event-emitter": 13
        }],
        26: [function (t, e, i) {
            "use strict";

            function r(t) {
                var e = !1;
                for (var i in a)
                    if (n[i] && t instanceof n[i]) {
                        e = !0, this._widthProp = a[i][0], this._heightProp = a[i][1];
                        break
                    } if (!e) throw new Error("Unsupported pixel source");
                this._element = t
            }
            var n = t("../util/global"),
                o = t("minimal-event-emitter"),
                s = t("../util/clearOwnProperties"),
                a = {
                    HTMLImageElement: ["naturalWidth", "naturalHeight"],
                    HTMLCanvasElement: ["width", "height"],
                    ImageBitmap: ["width", "height"]
                };
            o(r), r.prototype.destroy = function () {
                s(this)
            }, r.prototype.element = function () {
                return this._element
            }, r.prototype.width = function () {
                return this._element[this._widthProp]
            }, r.prototype.height = function () {
                return this._element[this._heightProp]
            }, r.prototype.timestamp = function () {
                return 0
            }, r.prototype.isDynamic = function () {
                return !1
            }, e.exports = r
        }, {
            "../util/clearOwnProperties": 90,
            "../util/global": 101,
            "minimal-event-emitter": 13
        }],
        27: [function (t, e, i) {
            "use strict";

            function r(t) {
                t = n(t || {}, o);
                var e = t.yawSpeed,
                    i = t.pitchSpeed,
                    r = t.fovSpeed,
                    s = t.yawAccel,
                    a = t.pitchAccel,
                    l = t.fovAccel,
                    h = t.targetPitch,
                    u = t.targetFov;
                return function () {
                    var t, n, o, c, p = 0,
                        d = 0,
                        f = 0,
                        m = 0,
                        v = 0,
                        _ = 0,
                        y = 0;
                    return function (g, x) {
                        if (t = (x - p) / 1e3, v = Math.min(d + t * s, e), n = v * t, g.yaw = g.yaw + n, null != h && g.pitch !== h) {
                            var w = .5 * f * f / a;
                            _ = Math.abs(h - g.pitch) > w ? Math.min(f + t * a, i) : Math.max(f - t * a, 0), o = _ * t, h < g.pitch && (g.pitch = Math.max(h, g.pitch - o)), h > g.pitch && (g.pitch = Math.min(h, g.pitch + o))
                        }
                        if (null != u && g.fov !== h) {
                            var M = .5 * m * m / l;
                            y = Math.abs(u - g.fov) > M ? Math.min(m + t * l, r) : Math.max(m - t * l, 0), c = y * t, u < g.fov && (g.fov = Math.max(u, g.fov - c)), u > g.fov && (g.fov = Math.min(u, g.fov + c))
                        }
                        return p = x, d = v, f = _, m = y, g
                    }
                }
            }
            var n = t("./util/defaults"),
                o = {
                    yawSpeed: .1,
                    pitchSpeed: .1,
                    fovSpeed: .1,
                    yawAccel: .01,
                    pitchAccel: .01,
                    fovAccel: .01,
                    targetPitch: 0,
                    targetFov: null
                };
            e.exports = r
        }, {
            "./util/defaults": 95
        }],
        28: [function (t, e, i) {
            "use strict";

            function r(t) {
                if (!isFinite(t) || Math.floor(t) !== t || t < 0) throw new Error("LruMap: invalid capacity");
                this._capacity = t, this._keys = new Array(this._capacity), this._values = new Array(this._capacity), this._start = 0, this._size = 0
            }
            var n = t("../util/mod");
            r.prototype._index = function (t) {
                return n(this._start + t, this._capacity)
            }, r.prototype.get = function (t) {
                for (var e = 0; e < this._size; e++) {
                    var i = this._keys[this._index(e)];
                    if (t.equals(i)) return this._values[this._index(e)]
                }
                return null
            }, r.prototype.set = function (t, e) {
                if (0 === this._capacity) return t;
                this.del(t);
                var i = this._size === this._capacity ? this._keys[this._index(0)] : null;
                return this._keys[this._index(this._size)] = t, this._values[this._index(this._size)] = e, this._size < this._capacity ? this._size++ : this._start = this._index(1), i
            }, r.prototype.del = function (t) {
                for (var e = 0; e < this._size; e++)
                    if (t.equals(this._keys[this._index(e)])) {
                        for (var i = this._values[this._index(e)], r = e; r < this._size - 1; r++) this._keys[this._index(r)] = this._keys[this._index(r + 1)], this._values[this._index(r)] = this._values[this._index(r + 1)];
                        return this._size--, i
                    } return null
            }, r.prototype.has = function (t) {
                for (var e = 0; e < this._size; e++)
                    if (t.equals(this._keys[this._index(e)])) return !0;
                return !1
            }, r.prototype.size = function () {
                return this._size
            }, r.prototype.clear = function () {
                this._keys.length = 0, this._values.length = 0, this._start = 0, this._size = 0
            }, r.prototype.forEach = function (t) {
                for (var e = 0, i = 0; i < this._size; i++) t(this._keys[this._index(i)], this._values[this._index(i)]), e += 1;
                return e
            }, e.exports = r
        }, {
            "../util/mod": 105
        }],
        29: [function (t, e, i) {
            "use strict";

            function r(t) {
                if (!isFinite(t) || Math.floor(t) !== t || t < 0) throw new Error("LruSet: invalid capacity");
                this._capacity = t, this._elements = new Array(this._capacity), this._start = 0, this._size = 0
            }
            var n = t("../util/mod");
            r.prototype._index = function (t) {
                return n(this._start + t, this._capacity)
            }, r.prototype.add = function (t) {
                if (0 === this._capacity) return t;
                this.remove(t);
                var e = this._size === this._capacity ? this._elements[this._index(0)] : null;
                return this._elements[this._index(this._size)] = t, this._size < this._capacity ? this._size++ : this._start = this._index(1), e
            }, r.prototype.remove = function (t) {
                for (var e = 0; e < this._size; e++) {
                    var i = this._elements[this._index(e)];
                    if (t.equals(i)) {
                        for (var r = e; r < this._size - 1; r++) this._elements[this._index(r)] = this._elements[this._index(r + 1)];
                        return this._size--, i
                    }
                }
                return null
            }, r.prototype.has = function (t) {
                for (var e = 0; e < this._size; e++)
                    if (t.equals(this._elements[this._index(e)])) return !0;
                return !1
            }, r.prototype.size = function () {
                return this._size
            }, r.prototype.clear = function () {
                this._elements.length = 0, this._start = 0, this._size = 0
            }, r.prototype.forEach = function (t) {
                for (var e = 0, i = 0; i < this._size; i++) t(this._elements[this._index(i)]), e += 1;
                return e
            }, e.exports = r
        }, {
            "../util/mod": 105
        }],
        30: [function (t, e, i) {
            "use strict";

            function r(t) {
                if (null != t && (!isFinite(t) || Math.floor(t) !== t || t < 1)) throw new Error("Map: invalid capacity");
                this._capacity = t || o, this._keyBuckets = [], this._valBuckets = [];
                for (var e = 0; e < this._capacity; e++) this._keyBuckets.push([]), this._valBuckets.push([]);
                this._size = 0
            }
            var n = t("../util/mod"),
                o = 64;
            r.prototype.get = function (t) {
                for (var e = n(t.hash(), this._capacity), i = this._keyBuckets[e], r = 0; r < i.length; r++) {
                    var o = i[r];
                    if (t.equals(o)) {
                        return this._valBuckets[e][r]
                    }
                }
                return null
            }, r.prototype.set = function (t, e) {
                for (var i = n(t.hash(), this._capacity), r = this._keyBuckets[i], o = this._valBuckets[i], s = 0; s < r.length; s++) {
                    var a = r[s];
                    if (t.equals(a)) {
                        var l = o[s];
                        return r[s] = t, o[s] = e, l
                    }
                }
                return r.push(t), o.push(e), this._size++, null
            }, r.prototype.del = function (t) {
                for (var e = n(t.hash(), this._capacity), i = this._keyBuckets[e], r = this._valBuckets[e], o = 0; o < i.length; o++) {
                    var s = i[o];
                    if (t.equals(s)) {
                        for (var a = r[o], l = o; l < i.length - 1; l++) i[l] = i[l + 1], r[l] = r[l + 1];
                        return i.length = i.length - 1, r.length = r.length - 1, this._size--, a
                    }
                }
                return null
            }, r.prototype.has = function (t) {
                for (var e = n(t.hash(), this._capacity), i = this._keyBuckets[e], r = 0; r < i.length; r++) {
                    var o = i[r];
                    if (t.equals(o)) return !0
                }
                return !1
            }, r.prototype.size = function () {
                return this._size
            }, r.prototype.clear = function () {
                for (var t = 0; t < this._capacity; t++) this._keyBuckets[t].length = 0, this._valBuckets[t].length = 0;
                this._size = 0
            }, r.prototype.forEach = function (t) {
                for (var e = 0, i = 0; i < this._capacity; i++)
                    for (var r = this._keyBuckets[i], n = this._valBuckets[i], o = 0; o < r.length; o++) t(r[o], n[o]), e += 1;
                return e
            }, e.exports = r
        }, {
            "../util/mod": 105
        }],
        31: [function (t, e, i) {
            "use strict";

            function r(t) {
                if (null != t && (!isFinite(t) || Math.floor(t) !== t || t < 1)) throw new Error("Set: invalid capacity");
                this._capacity = this._capacity || o, this._buckets = [];
                for (var e = 0; e < this._capacity; e++) this._buckets.push([]);
                this._size = 0
            }
            var n = t("../util/mod"),
                o = 64;
            r.prototype.add = function (t) {
                for (var e = n(t.hash(), this._capacity), i = this._buckets[e], r = 0; r < i.length; r++) {
                    var o = i[r];
                    if (t.equals(o)) return i[r] = t, o
                }
                return i.push(t), this._size++, null
            }, r.prototype.remove = function (t) {
                for (var e = n(t.hash(), this._capacity), i = this._buckets[e], r = 0; r < i.length; r++) {
                    var o = i[r];
                    if (t.equals(o)) {
                        for (var s = r; s < i.length - 1; s++) i[s] = i[s + 1];
                        return i.length = i.length - 1, this._size--, o
                    }
                }
                return null
            }, r.prototype.has = function (t) {
                for (var e = n(t.hash(), this._capacity), i = this._buckets[e], r = 0; r < i.length; r++) {
                    var o = i[r];
                    if (t.equals(o)) return !0
                }
                return !1
            }, r.prototype.size = function () {
                return this._size
            }, r.prototype.clear = function () {
                for (var t = 0; t < this._capacity; t++) this._buckets[t].length = 0;
                this._size = 0
            }, r.prototype.forEach = function (t) {
                for (var e = 0, i = 0; i < this._capacity; i++)
                    for (var r = this._buckets[i], n = 0; n < r.length; n++) t(r[n]), e += 1;
                return e
            }, e.exports = r
        }, {
            "../util/mod": 105
        }],
        32: [function (t, e, i) {
            "use strict";

            function r(t) {
                this._concurrency = t && t.concurrency || 1, this._paused = t && !!t.paused || !1, this._pool = [];
                for (var e = 0; e < this._concurrency; e++) this._pool.push(new n(t));
                this._next = 0
            }
            var n = t("./WorkQueue"),
                o = t("../util/mod");
            r.prototype.length = function () {
                for (var t = 0, e = 0; e < this._pool.length; e++) t += this._pool[e].length();
                return t
            }, r.prototype.push = function (t, e) {
                var i = this._next,
                    r = this._pool[i].push(t, e);
                return this._next = o(this._next + 1, this._concurrency), r
            }, r.prototype.pause = function () {
                if (!this._paused) {
                    this._paused = !0;
                    for (var t = 0; t < this._concurrency; t++) this._pool[t].pause()
                }
            }, r.prototype.resume = function () {
                if (this._paused) {
                    this._paused = !1;
                    for (var t = 0; t < this._concurrency; t++) this._pool[t].resume()
                }
            }, e.exports = r
        }, {
            "../util/mod": 105,
            "./WorkQueue": 33
        }],
        33: [function (t, e, i) {
            "use strict";

            function r(t, e) {
                this.fn = t, this.cb = e, this.cfn = null
            }

            function n(t) {
                this._queue = [], this._delay = t && t.delay || 0, this._paused = t && !!t.paused || !1, this._currentTask = null, this._lastFinished = null
            }
            var o = t("../util/now");
            n.prototype.length = function () {
                return this._queue.length
            }, n.prototype.push = function (t, e) {
                var i = new r(t, e),
                    n = this._cancel.bind(this, i);
                return this._queue.push(i), this._next(), n
            }, n.prototype.pause = function () {
                this._paused || (this._paused = !0)
            }, n.prototype.resume = function () {
                this._paused && (this._paused = !1, this._next())
            }, n.prototype._start = function (t) {
                if (this._currentTask) throw new Error("WorkQueue: called start while running task");
                this._currentTask = t;
                var e = this._finish.bind(this, t);
                if (t.cfn = t.fn(e), "function" != typeof t.cfn) throw new Error("WorkQueue: function is not cancellable")
            }, n.prototype._finish = function (t) {
                var e = Array.prototype.slice.call(arguments, 1);
                if (this._currentTask !== t) throw new Error("WorkQueue: called finish on wrong task");
                t.cb.apply(null, e), this._currentTask = null, this._lastFinished = o(), this._next()
            }, n.prototype._cancel = function (t) {
                var e = Array.prototype.slice.call(arguments, 1);
                if (this._currentTask === t) t.cfn.apply(null, e);
                else {
                    var i = this._queue.indexOf(t);
                    i >= 0 && (this._queue.splice(i, 1), t.cb.apply(null, e))
                }
            }, n.prototype._next = function () {
                if (!this._paused && this._queue.length && !this._currentTask) {
                    if (null != this._lastFinished) {
                        var t = o() - this._lastFinished,
                            e = this._delay - t;
                        if (e > 0) return void setTimeout(this._next.bind(this), e)
                    }
                    var i = this._queue.shift();
                    this._start(i)
                }
            }, e.exports = n
        }, {
            "../util/now": 107
        }],
        34: [function (t, e, i) {
            "use strict";

            function r(t) {
                var e = t || {};
                return e.colorOffset = e.colorOffset || a.create(), e.colorMatrix = e.colorMatrix || l.create(), e
            }

            function n(t, e, i) {
                o(i, t, e.colorMatrix), a.add(i, i, e.colorOffset)
            }

            function o(t, e, i) {
                var r = e[0],
                    n = e[1],
                    o = e[2],
                    s = e[3];
                return t[0] = i[0] * r + i[1] * n + i[2] * o + i[3] * s, t[1] = i[4] * r + i[5] * n + i[6] * o + i[7] * s, t[2] = i[8] * r + i[9] * n + i[10] * o + i[11] * s, t[3] = i[12] * r + i[13] * n + i[14] * o + i[15] * s, t
            }

            function s(t, e) {
                for (var i = t.width, r = t.height, o = t.data, s = 0; s < i * r; s++) a.set(h, o[4 * s + 0] / 255, o[4 * s + 1] / 255, o[4 * s + 2] / 255, o[4 * s + 3] / 255), n(h, e, h), o[4 * s + 0] = 255 * h[0], o[4 * s + 1] = 255 * h[1], o[4 * s + 2] = 255 * h[2], o[4 * s + 3] = 255 * h[3]
            }
            var a = t("gl-matrix").vec4,
                l = t("gl-matrix").mat4,
                h = a.create();
            e.exports = {
                identity: r,
                applyToPixel: n,
                applyToImageData: s
            }
        }, {
            "gl-matrix": 2
        }],
        35: [function (t, e, i) {
            "use strict";

            function r(t) {
                t = t || {}, this._methods = [], this._parameters = ["x", "y", "axisScaledX", "axisScaledY", "zoom", "yaw", "pitch", "roll"], this._now = t.nowForTesting || s, this._composedOffsets = {}, this._composeReturn = {
                    offsets: this._composedOffsets,
                    changing: null
                }
            }
            var n = t("minimal-event-emitter"),
                o = t("./Dynamics"),
                s = t("../util/now"),
                a = t("../util/clearOwnProperties");
            n(r), r.prototype.add = function (t) {
                if (!this.has(t)) {
                    var e = {};
                    this._parameters.forEach(function (t) {
                        e[t] = {
                            dynamics: new o,
                            time: null
                        }
                    });
                    var i = this._updateDynamics.bind(this, e),
                        r = {
                            instance: t,
                            dynamics: e,
                            parameterDynamicsHandler: i
                        };
                    t.addEventListener("parameterDynamics", i), this._methods.push(r)
                }
            }, r.prototype.remove = function (t) {
                var e = this._indexOfInstance(t);
                if (e >= 0) {
                    var i = this._methods.splice(e, 1)[0];
                    i.instance.removeEventListener("parameterDynamics", i.parameterDynamicsHandler)
                }
            }, r.prototype.has = function (t) {
                return this._indexOfInstance(t) >= 0
            }, r.prototype._indexOfInstance = function (t) {
                for (var e = 0; e < this._methods.length; e++)
                    if (this._methods[e].instance === t) return e;
                return -1
            }, r.prototype.list = function () {
                for (var t = [], e = 0; e < this._methods.length; e++) t.push(this._methods[e].instance);
                return t
            }, r.prototype._updateDynamics = function (t, e, i) {
                var r = t[e];
                if (!r) throw new Error("Unknown control parameter " + e);
                var n = this._now();
                r.dynamics.update(i, (n - r.time) / 1e3), r.time = n, this.emit("change")
            }, r.prototype._resetComposedOffsets = function () {
                for (var t = 0; t < this._parameters.length; t++) this._composedOffsets[this._parameters[t]] = 0
            }, r.prototype.offsets = function () {
                var t, e = !1,
                    i = this._now();
                this._resetComposedOffsets();
                for (var r = 0; r < this._methods.length; r++)
                    for (var n = this._methods[r].dynamics, o = 0; o < this._parameters.length; o++) {
                        t = this._parameters[o];
                        var s = n[t],
                            a = s.dynamics;
                        null != a.offset && (this._composedOffsets[t] += a.offset, a.offset = null);
                        var l = (i - s.time) / 1e3,
                            h = a.offsetFromVelocity(l);
                        h && (this._composedOffsets[t] += h);
                        var u = a.velocityAfter(l);
                        a.velocity = u, u && (e = !0), s.time = i
                    }
                return this._composeReturn.changing = e, this._composeReturn
            }, r.prototype.destroy = function () {
                for (var t = this.list(), e = 0; e < t.length; e++) this.remove(t[e]);
                a(this)
            }, e.exports = r
        }, {
            "../util/clearOwnProperties": 90,
            "../util/now": 107,
            "./Dynamics": 39,
            "minimal-event-emitter": 13
        }],
        36: [function (t, e, i) {
            "use strict";

            function r(t, e, i, r) {
                r = n(r || {}, s), this._element = i, this._controls = t, this._id = e, this._attached = !1, this._setActiveCursor = this._setCursor.bind(this, r.active), this._setInactiveCursor = this._setCursor.bind(this, r.inactive), this._setDisabledCursor = this._setCursor.bind(this, r.disabled), this._setOriginalCursor = this._setCursor.bind(this, this._element.style.cursor), this._updateAttachmentHandler = this._updateAttachment.bind(this), t.addEventListener("methodEnabled", this._updateAttachmentHandler), t.addEventListener("methodDisabled", this._updateAttachmentHandler), t.addEventListener("enabled", this._updateAttachmentHandler), t.addEventListener("disabled", this._updateAttachmentHandler), this._updateAttachment()
            }
            var n = t("../util/defaults"),
                o = t("../util/clearOwnProperties"),
                s = {
                    active: "move",
                    inactive: "default",
                    disabled: "default"
                };
            r.prototype.destroy = function () {
                this._detachFromControlMethod(this._controls.method(this._id)), this._setOriginalCursor(), this._controls.removeEventListener("methodEnabled", this._updateAttachmentHandler), this._controls.removeEventListener("methodDisabled", this._updateAttachmentHandler), this._controls.removeEventListener("enabled", this._updateAttachmentHandler), this._controls.removeEventListener("disabled", this._updateAttachmentHandler), o(this)
            }, r.prototype._updateAttachment = function () {
                var t = this._controls,
                    e = this._id;
                t.enabled() && t.method(e).enabled ? this._attachToControlMethod(t.method(e)) : this._detachFromControlMethod(t.method(e))
            }, r.prototype._attachToControlMethod = function (t) {
                this._attached || (t.instance.addEventListener("active", this._setActiveCursor), t.instance.addEventListener("inactive", this._setInactiveCursor), t.active ? this._setActiveCursor() : this._setInactiveCursor(), this._attached = !0)
            }, r.prototype._detachFromControlMethod = function (t) {
                this._attached && (t.instance.removeEventListener("active", this._setActiveCursor), t.instance.removeEventListener("inactive", this._setInactiveCursor), this._setDisabledCursor(), this._attached = !1)
            }, r.prototype._setCursor = function (t) {
                this._element.style.cursor = t
            }, e.exports = r
        }, {
            "../util/clearOwnProperties": 90,
            "../util/defaults": 95
        }],
        37: [function (t, e, i) {
            "use strict";

            function r(t) {
                t = t || {}, this._methods = {}, this._methodGroups = {}, this._composer = new o, this._enabled = !t || !t.enabled || !!t.enabled, this._activeCount = 0, this.updatedViews_ = [], this._attachedRenderLoop = null
            }
            var n = t("minimal-event-emitter"),
                o = t("./Composer"),
                s = t("../util/clearOwnProperties"),
                a = "undefined" != typeof MARZIPANODEBUG && MARZIPANODEBUG.controls;
            n(r), r.prototype.destroy = function () {
                this.detach(), this._composer.destroy(), s(this)
            }, r.prototype.methods = function () {
                var t = {};
                for (var e in this._methods) t[e] = this._methods[e];
                return t
            }, r.prototype.method = function (t) {
                return this._methods[t]
            }, r.prototype.registerMethod = function (t, e, i) {
                if (this._methods[t]) throw new Error("Control method already registered with id " + t);
                this._methods[t] = {
                    instance: e,
                    enabled: !1,
                    active: !1,
                    activeHandler: this._handleActive.bind(this, t),
                    inactiveHandler: this._handleInactive.bind(this, t)
                }, i && this.enableMethod(t, e)
            }, r.prototype.unregisterMethod = function (t) {
                var e = this._methods[t];
                if (!e) throw new Error("No control method registered with id " + t);
                e.enabled && this.disableMethod(t), delete this._methods[t]
            }, r.prototype.enableMethod = function (t) {
                var e = this._methods[t];
                if (!e) throw new Error("No control method registered with id " + t);
                e.enabled || (e.enabled = !0, e.active && this._incrementActiveCount(), this._listen(t), this._updateComposer(), this.emit("methodEnabled", t))
            }, r.prototype.disableMethod = function (t) {
                var e = this._methods[t];
                if (!e) throw new Error("No control method registered with id " + t);
                e.enabled && (e.enabled = !1, e.active && this._decrementActiveCount(), this._unlisten(t), this._updateComposer(), this.emit("methodDisabled", t))
            }, r.prototype.addMethodGroup = function (t, e) {
                this._methodGroups[t] = e
            }, r.prototype.removeMethodGroup = function (t) {
                delete this._methodGroups[t]
            }, r.prototype.methodGroups = function () {
                var t = {};
                for (var e in this._methodGroups) t[e] = this._methodGroups[e];
                return t
            }, r.prototype.enableMethodGroup = function (t) {
                var e = this;
                e._methodGroups[t].forEach(function (t) {
                    e.enableMethod(t)
                })
            }, r.prototype.disableMethodGroup = function (t) {
                var e = this;
                e._methodGroups[t].forEach(function (t) {
                    e.disableMethod(t)
                })
            }, r.prototype.enabled = function () {
                return this._enabled
            }, r.prototype.enable = function () {
                this._enabled = !0, this._activeCount > 0 && this.emit("active"), this.emit("enabled"), this._updateComposer()
            }, r.prototype.disable = function () {
                this._enabled = !1, this._activeCount > 0 && this.emit("inactive"), this.emit("disabled"), this._updateComposer()
            }, r.prototype.attach = function (t) {
                this._attachedRenderLoop && this.detach(), this._attachedRenderLoop = t, this._beforeRenderHandler = this._updateViewsWithControls.bind(this), this._changeHandler = t.renderOnNextFrame.bind(t), this._attachedRenderLoop.addEventListener("beforeRender", this._beforeRenderHandler), this._composer.addEventListener("change", this._changeHandler)
            }, r.prototype.detach = function () {
                this._attachedRenderLoop && (this._attachedRenderLoop.removeEventListener("beforeRender", this._beforeRenderHandler), this._composer.removeEventListener("change", this._changeHandler), this._beforeRenderHandler = null, this._changeHandler = null, this._attachedRenderLoop = null)
            }, r.prototype.attached = function () {
                return null != this._attachedRenderLoop
            }, r.prototype._listen = function (t) {
                var e = this._methods[t];
                if (!e) throw new Error("Bad method id");
                e.instance.addEventListener("active", e.activeHandler), e.instance.addEventListener("inactive", e.inactiveHandler)
            }, r.prototype._unlisten = function (t) {
                var e = this._methods[t];
                if (!e) throw new Error("Bad method id");
                e.instance.removeEventListener("active", e.activeHandler), e.instance.removeEventListener("inactive", e.inactiveHandler)
            }, r.prototype._handleActive = function (t) {
                var e = this._methods[t];
                if (!e) throw new Error("Bad method id");
                if (!e.enabled) throw new Error("Should not receive event from disabled control method");
                e.active || (e.active = !0, this._incrementActiveCount())
            }, r.prototype._handleInactive = function (t) {
                var e = this._methods[t];
                if (!e) throw new Error("Bad method id");
                if (!e.enabled) throw new Error("Should not receive event from disabled control method");
                e.active && (e.active = !1, this._decrementActiveCount())
            }, r.prototype._incrementActiveCount = function () {
                this._activeCount++, a && this._checkActiveCount(), this._enabled && 1 === this._activeCount && this.emit("active")
            }, r.prototype._decrementActiveCount = function () {
                this._activeCount--, a && this._checkActiveCount(), this._enabled && 0 === this._activeCount && this.emit("inactive")
            }, r.prototype._checkActiveCount = function () {
                var t = 0;
                for (var e in this._methods) {
                    var i = this._methods[e];
                    i.enabled && i.active && t++
                }
                if (t != this._activeCount) throw new Error("Bad control state")
            }, r.prototype._updateComposer = function () {
                var t = this._composer;
                for (var e in this._methods) {
                    var i = this._methods[e],
                        r = this._enabled && i.enabled;
                    r && !t.has(i.instance) && t.add(i.instance), !r && t.has(i.instance) && t.remove(i.instance)
                }
            }, r.prototype._updateViewsWithControls = function () {
                var t = this._composer.offsets();
                t.changing && this._attachedRenderLoop.renderOnNextFrame(), this.updatedViews_.length = 0;
                for (var e = this._attachedRenderLoop.stage().listLayers(), i = 0; i < e.length; i++) {
                    var r = e[i].view();
                    this.updatedViews_.indexOf(r) < 0 && (e[i].view().updateWithControlParameters(t.offsets), this.updatedViews_.push(r))
                }
            }, e.exports = r
        }, {
            "../util/clearOwnProperties": 90,
            "./Composer": 35,
            "minimal-event-emitter": 13
        }],
        38: [function (t, e, i) {
            "use strict";

            function r(t, e, i) {
                this._element = t, this._opts = a(i || {}, u), this._startEvent = null, this._lastEvent = null, this._active = !1, this._dynamics = {
                    x: new o,
                    y: new o
                }, this._hammer = s.get(t, e), this._hammer.on("hammer.input", this._handleHammerEvent.bind(this)), this._hammer.on("panstart", this._handleStart.bind(this)), this._hammer.on("panmove", this._handleMove.bind(this)), this._hammer.on("panend", this._handleEnd.bind(this)), this._hammer.on("pancancel", this._handleEnd.bind(this))
            }
            var n = t("minimal-event-emitter"),
                o = t("./Dynamics"),
                s = t("./HammerGestures"),
                a = t("../util/defaults"),
                l = t("./util").maxFriction,
                h = t("../util/clearOwnProperties"),
                u = {
                    friction: 6,
                    maxFrictionTime: .3
                },
                c = "undefined" != typeof MARZIPANODEBUG && MARZIPANODEBUG.controls;
            n(r), r.prototype.destroy = function () {
                this._hammer.release(), h(this)
            }, r.prototype._handleHammerEvent = function (t) {
                if (t.isFirst) {
                    if (c && this._active) throw new Error("DragControlMethod active detected when already active");
                    this._active = !0, this.emit("active")
                }
                if (t.isFinal) {
                    if (c && !this._active) throw new Error("DragControlMethod inactive detected when already inactive");
                    this._active = !1, this.emit("inactive")
                }
            }, r.prototype._handleStart = function (t) {
                t.preventDefault(), this._startEvent = t
            }, r.prototype._handleMove = function (t) {
                t.preventDefault(), this._startEvent && (this._updateDynamicsMove(t), this.emit("parameterDynamics", "axisScaledX", this._dynamics.x), this.emit("parameterDynamics", "axisScaledY", this._dynamics.y))
            }, r.prototype._handleEnd = function (t) {
                t.preventDefault(), this._startEvent && (this._updateDynamicsRelease(t), this.emit("parameterDynamics", "axisScaledX", this._dynamics.x), this.emit("parameterDynamics", "axisScaledY", this._dynamics.y)), this._startEvent = !1, this._lastEvent = !1
            }, r.prototype._updateDynamicsMove = function (t) {
                var e = t.deltaX,
                    i = t.deltaY,
                    r = this._lastEvent || this._startEvent;
                r && (e -= r.deltaX, i -= r.deltaY);
                var n = this._element.getBoundingClientRect(),
                    o = n.right - n.left,
                    s = n.bottom - n.top;
                e /= o, i /= s, this._dynamics.x.reset(), this._dynamics.y.reset(), this._dynamics.x.offset = -e, this._dynamics.y.offset = -i, this._lastEvent = t
            };
            var p = [null, null];
            r.prototype._updateDynamicsRelease = function (t) {
                var e = this._element.getBoundingClientRect(),
                    i = e.right - e.left,
                    r = e.bottom - e.top,
                    n = 1e3 * t.velocityX / i,
                    o = 1e3 * t.velocityY / r;
                this._dynamics.x.reset(), this._dynamics.y.reset(), this._dynamics.x.velocity = n, this._dynamics.y.velocity = o, l(this._opts.friction, this._dynamics.x.velocity, this._dynamics.y.velocity, this._opts.maxFrictionTime, p), this._dynamics.x.friction = p[0], this._dynamics.y.friction = p[1]
            }, e.exports = r
        }, {
            "../util/clearOwnProperties": 90,
            "../util/defaults": 95,
            "./Dynamics": 39,
            "./HammerGestures": 41,
            "./util": 49,
            "minimal-event-emitter": 13
        }],
        39: [function (t, e, i) {
            "use strict";

            function r() {
                this.velocity = null, this.friction = null, this.offset = null
            }

            function n(t, e) {
                return t < 0 ? Math.min(0, t + e) : t > 0 ? Math.max(0, t - e) : 0
            }
            r.equals = function (t, e) {
                return t.velocity === e.velocity && t.friction === e.friction && t.offset === e.offset
            }, r.prototype.equals = function (t) {
                return r.equals(this, t)
            }, r.prototype.update = function (t, e) {
                t.offset && (this.offset = this.offset || 0, this.offset += t.offset);
                var i = this.offsetFromVelocity(e);
                i && (this.offset = this.offset || 0, this.offset += i), this.velocity = t.velocity, this.friction = t.friction
            }, r.prototype.reset = function () {
                this.velocity = null, this.friction = null, this.offset = null
            }, r.prototype.velocityAfter = function (t) {
                return this.velocity ? this.friction ? n(this.velocity, this.friction * t) : this.velocity : null
            }, r.prototype.offsetFromVelocity = function (t) {
                t = Math.min(t, this.nullVelocityTime());
                var e = this.velocityAfter(t);
                return (this.velocity + e) / 2 * t
            }, r.prototype.nullVelocityTime = function () {
                return null == this.velocity ? 0 : this.velocity && !this.friction ? Infinity : Math.abs(this.velocity / this.friction)
            }, e.exports = r
        }, {}],
        40: [function (t, e, i) {
            "use strict";

            function r(t, e, i, r) {
                if (!t) throw new Error("ElementPressControlMethod: element must be defined");
                if (!e) throw new Error("ElementPressControlMethod: parameter must be defined");
                if (!i) throw new Error("ElementPressControlMethod: velocity must be defined");
                if (!r) throw new Error("ElementPressControlMethod: friction must be defined");
                this._element = t, this._pressHandler = this._handlePress.bind(this), this._releaseHandler = this._handleRelease.bind(this), t.addEventListener("mousedown", this._pressHandler), t.addEventListener("mouseup", this._releaseHandler), t.addEventListener("mouseleave", this._releaseHandler), t.addEventListener("touchstart", this._pressHandler), t.addEventListener("touchmove", this._releaseHandler), t.addEventListener("touchend", this._releaseHandler), this._parameter = e, this._velocity = i, this._friction = r, this._dynamics = new o, this._pressing = !1
            }
            var n = t("minimal-event-emitter"),
                o = t("./Dynamics"),
                s = t("../util/clearOwnProperties");
            n(r), r.prototype.destroy = function () {
                this._element.removeEventListener("mousedown", this._pressHandler), this._element.removeEventListener("mouseup", this._releaseHandler), this._element.removeEventListener("mouseleave", this._releaseHandler), this._element.removeEventListener("touchstart", this._pressHandler), this._element.removeEventListener("touchmove", this._releaseHandler), this._element.removeEventListener("touchend", this._releaseHandler), s(this)
            }, r.prototype._handlePress = function () {
                this._pressing = !0, this._dynamics.velocity = this._velocity, this._dynamics.friction = 0, this.emit("parameterDynamics", this._parameter, this._dynamics), this.emit("active")
            }, r.prototype._handleRelease = function () {
                this._pressing && (this._dynamics.friction = this._friction, this.emit("parameterDynamics", this._parameter, this._dynamics), this.emit("inactive")), this._pressing = !1
            }, e.exports = r
        }, {
            "../util/clearOwnProperties": 90,
            "./Dynamics": 39,
            "minimal-event-emitter": 13
        }],
        41: [function (t, e, i) {
            "use strict";

            function r(t, e) {
                return t[h] || (t[h] = l++), e + t[h]
            }

            function n() {
                this._managers = {}, this._refCount = {}
            }

            function o(t, e, i, r) {
                this._manager = e, this._element = i, this._type = r, this._hammerGestures = t, this._eventHandlers = []
            }
            var s = t("hammerjs"),
                a = t("bowser"),
                l = 1,
                h = "MarzipanoHammerElementId";
            n.prototype.get = function (t, e) {
                var i = r(t, e);
                return this._managers[i] || (this._managers[i] = this._createManager(t, e), this._refCount[i] = 0), this._refCount[i]++, new o(this, this._managers[i], t, e)
            }, n.prototype._createManager = function (t, e) {
                var i = new s.Manager(t);
                return "mouse" === e ? i.add(new s.Pan({
                    direction: s.DIRECTION_ALL,
                    threshold: 0
                })) : "touch" !== e && "pen" !== e && "kinect" !== e || (i.add(new s.Pan({
                    direction: s.DIRECTION_ALL,
                    threshold: 20,
                    pointers: 1
                })), a.msie && parseFloat(a.version) < 10 || i.add(new s.Pinch)), i
            }, n.prototype._releaseHandle = function (t, e) {
                var i = r(t, e);
                this._refCount[i] && (--this._refCount[i] || (this._managers[i].destroy(), delete this._managers[i], delete this._refCount[i]))
            }, o.prototype.on = function (t, e) {
                var i = this._type,
                    r = function (t) {
                        i === t.pointerType && e(t)
                    };
                this._eventHandlers.push({
                    events: t,
                    handler: r
                }), this._manager.on(t, r)
            }, o.prototype.release = function () {
                for (var t = 0; t < this._eventHandlers.length; t++) {
                    var e = this._eventHandlers[t];
                    this._manager.off(e.events, e.handler)
                }
                this._hammerGestures._releaseHandle(this._element, this._type), this._manager = null, this._element = null, this._type = null, this._hammerGestures = null
            }, o.prototype.manager = function () {
                return this._manager
            }, e.exports = new n
        }, {
            bowser: 1,
            hammerjs: 12
        }],
        42: [function (t, e, i) {
            "use strict";

            function r(t, e, i, r, n) {
                if (!t) throw new Error("KeyControlMethod: keyCode must be defined");
                if (!e) throw new Error("KeyControlMethod: parameter must be defined");
                if (!i) throw new Error("KeyControlMethod: velocity must be defined");
                if (!r) throw new Error("KeyControlMethod: friction must be defined");
                n = n || document, this._keyCode = t, this._parameter = e, this._velocity = i, this._friction = r, this._element = n, this._keydownHandler = this._handlePress.bind(this), this._keyupHandler = this._handleRelease.bind(this), this._blurHandler = this._handleBlur.bind(this), this._element.addEventListener("keydown", this._keydownHandler), this._element.addEventListener("keyup", this._keyupHandler), window.addEventListener("blur", this._blurHandler), this._dynamics = new o, this._pressing = !1
            }
            var n = t("minimal-event-emitter"),
                o = t("./Dynamics"),
                s = t("../util/clearOwnProperties");
            n(r), r.prototype.destroy = function () {
                this._element.removeEventListener("keydown", this._keydownHandler), this._element.removeEventListener("keyup", this._keyupHandler), window.removeEventListener("blur", this._blurHandler), s(this)
            }, r.prototype._handlePress = function (t) {
                t.keyCode === this._keyCode && (this._pressing = !0, this._dynamics.velocity = this._velocity, this._dynamics.friction = 0, this.emit("parameterDynamics", this._parameter, this._dynamics), this.emit("active"))
            }, r.prototype._handleRelease = function (t) {
                t.keyCode === this._keyCode && (this._pressing && (this._dynamics.friction = this._friction, this.emit("parameterDynamics", this._parameter, this._dynamics), this.emit("inactive")), this._pressing = !1)
            }, r.prototype._handleBlur = function () {
                this._dynamics.velocity = 0, this.emit("parameterDynamics", this._parameter, this._dynamics), this.emit("inactive"), this._pressing = !1
            }, e.exports = r
        }, {
            "../util/clearOwnProperties": 90,
            "./Dynamics": 39,
            "minimal-event-emitter": 13
        }],
        43: [function (t, e, i) {
            "use strict";

            function r(t, e, i) {
                this._hammer = s.get(t, e), this._lastEvent = null, this._active = !1, this._dynamics = new o, this._hammer.on("pinchstart", this._handleStart.bind(this)), this._hammer.on("pinch", this._handleEvent.bind(this)), this._hammer.on("pinchend", this._handleEnd.bind(this)), this._hammer.on("pinchcancel", this._handleEnd.bind(this))
            }
            var n = t("minimal-event-emitter"),
                o = t("./Dynamics"),
                s = t("./HammerGestures"),
                a = t("../util/clearOwnProperties");
            n(r), r.prototype.destroy = function () {
                this._hammer.release(), a(this)
            }, r.prototype._handleStart = function () {
                this._active || (this._active = !0, this.emit("active"))
            }, r.prototype._handleEnd = function () {
                this._lastEvent = null, this._active && (this._active = !1, this.emit("inactive"))
            }, r.prototype._handleEvent = function (t) {
                var e = t.scale;
                this._lastEvent && (e /= this._lastEvent.scale), this._dynamics.offset = -1 * (e - 1), this.emit("parameterDynamics", "zoom", this._dynamics), this._lastEvent = t
            }, e.exports = r
        }, {
            "../util/clearOwnProperties": 90,
            "./Dynamics": 39,
            "./HammerGestures": 41,
            "minimal-event-emitter": 13
        }],
        44: [function (t, e, i) {
            "use strict";

            function r(t, e, i) {
                this._element = t, this._opts = a(i || {}, u), this._active = !1, this._hammer = s.get(t, e), this._dynamics = {
                    x: new o,
                    y: new o
                }, this._hammer.on("panstart", this._handleStart.bind(this)), this._hammer.on("panmove", this._handleMove.bind(this)), this._hammer.on("panend", this._handleRelease.bind(this)), this._hammer.on("pancancel", this._handleRelease.bind(this))
            }
            var n = t("minimal-event-emitter"),
                o = t("./Dynamics"),
                s = t("./HammerGestures"),
                a = t("../util/defaults"),
                l = t("./util").maxFriction,
                h = t("../util/clearOwnProperties"),
                u = {
                    speed: 8,
                    friction: 6,
                    maxFrictionTime: .3
                };
            n(r), r.prototype.destroy = function () {
                this._hammer.release(), h(this)
            }, r.prototype._handleStart = function (t) {
                t.preventDefault(), this._active || (this._active = !0, this.emit("active"))
            }, r.prototype._handleMove = function (t) {
                t.preventDefault(), this._updateDynamics(t, !1)
            }, r.prototype._handleRelease = function (t) {
                t.preventDefault(), this._updateDynamics(t, !0), this._active && (this._active = !1, this.emit("inactive"))
            };
            var c = [null, null];
            r.prototype._updateDynamics = function (t, e) {
                var i = this._element.getBoundingClientRect(),
                    r = i.right - i.left,
                    n = i.bottom - i.top,
                    o = Math.max(r, n),
                    s = t.deltaX / o * this._opts.speed,
                    a = t.deltaY / o * this._opts.speed;
                this._dynamics.x.reset(), this._dynamics.y.reset(), this._dynamics.x.velocity = s, this._dynamics.y.velocity = a, e && (l(this._opts.friction, this._dynamics.x.velocity, this._dynamics.y.velocity, this._opts.maxFrictionTime, c), this._dynamics.x.friction = c[0], this._dynamics.y.friction = c[1]), this.emit("parameterDynamics", "x", this._dynamics.x), this.emit("parameterDynamics", "y", this._dynamics.y)
            }, e.exports = r
        }, {
            "../util/clearOwnProperties": 90,
            "../util/defaults": 95,
            "./Dynamics": 39,
            "./HammerGestures": 41,
            "./util": 49,
            "minimal-event-emitter": 13
        }],
        45: [function (t, e, i) {
            "use strict";

            function r(t, e) {
                this._opts = l(e || {}, u), this._dynamics = new s, this._eventList = [];
                var i = this._opts.frictionTime ? this.withSmoothing : this.withoutSmoothing;
                this._wheelListener = new a(t, i.bind(this))
            }

            function n(t) {
                var e = 1 == t.deltaMode ? 20 : 1;
                return t.deltaY * e
            }
            var o = t("minimal-event-emitter"),
                s = t("./Dynamics"),
                a = t("./WheelListener"),
                l = t("../util/defaults"),
                h = t("../util/clearOwnProperties"),
                u = {
                    frictionTime: .2,
                    zoomDelta: .001
                };
            o(r), r.prototype.destroy = function () {
                this._wheelListener.destroy(), h(this)
            }, r.prototype.withoutSmoothing = function (t) {
                this._dynamics.offset = n(t) * this._opts.zoomDelta, this.emit("parameterDynamics", "zoom", this._dynamics), t.preventDefault(), this.emit("active"), this.emit("inactive")
            }, r.prototype.withSmoothing = function (t) {
                var e = t.timeStamp;
                for (this._eventList.push(t); this._eventList[0].timeStamp < e - 1e3 * this._opts.frictionTime;) this._eventList.shift(0);
                for (var i = 0, r = 0; r < this._eventList.length; r++) {
                    i += n(this._eventList[r]) * this._opts.zoomDelta / this._opts.frictionTime
                }
                this._dynamics.velocity = i, this._dynamics.friction = Math.abs(i) / this._opts.frictionTime, this.emit("parameterDynamics", "zoom", this._dynamics), t.preventDefault(), this.emit("active"), this.emit("inactive")
            }, e.exports = r
        }, {
            "../util/clearOwnProperties": 90,
            "../util/defaults": 95,
            "./Dynamics": 39,
            "./WheelListener": 47,
            "minimal-event-emitter": 13
        }],
        46: [function (t, e, i) {
            "use strict";

            function r(t) {
                if (!t) throw new Error("VelocityControlMethod: parameter must be defined");
                this._parameter = t, this._dynamics = new o
            }
            var n = t("minimal-event-emitter"),
                o = t("./Dynamics"),
                s = t("../util/clearOwnProperties");
            n(r), r.prototype.destroy = function () {
                s(this)
            }, r.prototype.setVelocity = function (t) {
                this._dynamics.velocity = t, this.emit("parameterDynamics", this._parameter, this._dynamics)
            }, r.prototype.setFriction = function (t) {
                this._dynamics.friction = t, this.emit("parameterDynamics", this._parameter, this._dynamics)
            }, e.exports = r
        }, {
            "../util/clearOwnProperties": 90,
            "./Dynamics": 39,
            "minimal-event-emitter": 13
        }],
        47: [function (t, e, i) {
            "use strict";

            function r(t, e, i) {
                var r = o();
                if ("wheel" === r) this._fun = e, this._elem = t, this._elem.addEventListener("wheel", this._fun, i);
                else {
                    if ("mousewheel" !== r) throw new Error("Browser does not support mouse wheel events");
                    this._fun = n(e), this._elem = t, this._elem.addEventListener("mousewheel", this._fun, i)
                }
            }

            function n(t) {
                return function (e) {
                    e || (e = window.event);
                    var i = {
                        originalEvent: e,
                        target: e.target || e.srcElement,
                        type: "wheel",
                        deltaMode: 1,
                        deltaX: 0,
                        deltaZ: 0,
                        timeStamp: e.timeStamp || Date.now(),
                        preventDefault: e.preventDefault.bind(e)
                    };
                    return i.deltaY = -.025 * e.wheelDelta, e.wheelDeltaX && (i.deltaX = -.025 * e.wheelDeltaX), t(i)
                }
            }

            function o() {
                return a !== undefined ? a : a = "onwheel" in document.createElement("div") ? "wheel" : document.onmousewheel !== undefined ? "mousewheel" : null
            }
            var s = t("../util/clearOwnProperties");
            r.prototype.destroy = function () {
                this._elem.removeEventListener(o(), this._fun), s(this)
            };
            var a;
            e.exports = r
        }, {
            "../util/clearOwnProperties": 90
        }],
        48: [function (t, e, i) {
            "use strict";

            function r(t, e, i) {
                i = n(i || {}, u);
                var r = {
                    mouseViewDrag: new o(e, "mouse"),
                    mouseViewQtvr: new s(e, "mouse"),
                    touchView: new o(e, "touch"),
                    pinch: new l(e, "touch"),
                    leftArrowKey: new h(37, "x", -.7, 3),
                    rightArrowKey: new h(39, "x", .7, 3),
                    upArrowKey: new h(38, "y", -.7, 3),
                    downArrowKey: new h(40, "y", .7, 3),
                    plusKey: new h(107, "zoom", -.7, 3),
                    minusKey: new h(109, "zoom", .7, 3),
                    wKey: new h(87, "y", -.7, 3),
                    aKey: new h(65, "x", -.7, 3),
                    sKey: new h(83, "y", .7, 3),
                    dKey: new h(68, "x", .7, 3),
                    qKey: new h(81, "roll", .7, 3),
                    eKey: new h(69, "roll", -.7, 3)
                };
                !1 !== i.scrollZoom && (r.scrollZoom = new a(e));
                var c = {
                        arrowKeys: ["leftArrowKey", "rightArrowKey", "upArrowKey", "downArrowKey"],
                        plusMinusKeys: ["plusKey", "minusKey"],
                        wasdKeys: ["wKey", "aKey", "sKey", "dKey"],
                        qeKeys: ["qKey", "eKey"]
                    },
                    p = ["scrollZoom", "touchView", "pinch"];
                switch (i.mouseViewMode) {
                    case "drag":
                        p.push("mouseViewDrag");
                        break;
                    case "qtvr":
                        p.push("mouseViewQtvr");
                        break;
                    default:
                        throw new Error("Unknown mouse view mode: " + i.mouseViewMode)
                }
                for (var d in r) {
                    var f = r[d];
                    t.registerMethod(d, f), p.indexOf(d) >= 0 && t.enableMethod(d)
                }
                for (var m in c) {
                    var v = c[m];
                    t.addMethodGroup(m, v)
                }
                return r
            }
            var n = t("../util/defaults"),
                o = t("./Drag"),
                s = t("./Qtvr"),
                a = t("./ScrollZoom"),
                l = t("./PinchZoom"),
                h = t("./Key"),
                u = {
                    mouseViewMode: "drag"
                };
            e.exports = r
        }, {
            "../util/defaults": 95,
            "./Drag": 38,
            "./Key": 42,
            "./PinchZoom": 43,
            "./Qtvr": 44,
            "./ScrollZoom": 45
        }],
        49: [function (t, e, i) {
            "use strict";

            function r(t, e, i, r, o) {
                var s = Math.sqrt(Math.pow(e, 2) + Math.pow(i, 2));
                t = Math.max(t, s / r), n(e, i, t, o), o[0] = Math.abs(o[0]), o[1] = Math.abs(o[1])
            }

            function n(t, e, i, r) {
                var n = Math.atan(e / t);
                r[0] = i * Math.cos(n), r[1] = i * Math.sin(n)
            }
            e.exports = {
                maxFriction: r,
                changeVectorNorm: n
            }
        }, {}],
        50: [function (t, e, i) {
            "use strict";

            function r(t, e, i, r) {
                e && _.rotateZ(t, t, M, e), i && _.rotateX(t, t, M, i), r && _.rotateY(t, t, M, r)
            }

            function n(t, e, i, r, n) {
                this.face = t, this.x = e, this.y = i, this.z = r, this._geometry = n, this._level = n.levelList[r]
            }

            function o(t) {
                if (this.constructor.super_.call(this, t), this._size = t.size, this._tileSize = t.tileSize, this._size % this._tileSize != 0) throw new Error("Level size is not multiple of tile size: " + this._size + " " + this._tileSize)
            }

            function s(t) {
                if ("array" !== v(t)) throw new Error("Level list must be an array");
                this.levelList = p(t, o), this.selectableLevelList = d(this.levelList);
                for (var e = 1; e < this.levelList.length; e++) this.levelList[e]._validateWithParentLevel(this.levelList[e - 1]);
                this._tileSearcher = new h(this), this._neighborsCache = new u(g), this._vec = y.create(), this._viewSize = {}
            }
            for (var a = t("../util/inherits"), l = t("../util/hash"), h = t("../TileSearcher"), u = t("../collections/LruMap"), c = t("./Level"), p = t("./common").makeLevelList, d = t("./common").makeSelectableLevelList, f = t("../util/clamp"), m = t("../util/cmp"), v = t("../util/type"), _ = t("gl-matrix").vec3, y = t("gl-matrix").vec4, g = 64, x = "fudlrb", w = {
                    f: {
                        x: 0,
                        y: 0
                    },
                    b: {
                        x: 0,
                        y: Math.PI
                    },
                    l: {
                        x: 0,
                        y: Math.PI / 2
                    },
                    r: {
                        x: 0,
                        y: -Math.PI / 2
                    },
                    u: {
                        x: Math.PI / 2,
                        y: 0
                    },
                    d: {
                        x: -Math.PI / 2,
                        y: 0
                    }
                }, M = _.create(), b = {}, S = 0; S < x.length; S++) {
                var E = x[S],
                    I = w[E],
                    D = _.fromValues(0, 0, -1);
                r(D, 0, I.x, I.y), b[E] = D
            }
            var T = {
                    f: ["l", "r", "u", "d"],
                    b: ["r", "l", "u", "d"],
                    l: ["b", "f", "u", "d"],
                    r: ["f", "b", "u", "d"],
                    u: ["l", "r", "b", "f"],
                    d: ["l", "r", "f", "b"]
                },
                L = [[0, 1], [1, 0], [0, -1], [-1, 0]];
            n.prototype.rotX = function () {
                return w[this.face].x
            }, n.prototype.rotY = function () {
                return w[this.face].y
            }, n.prototype.centerX = function () {
                return (this.x + .5) / this._level.numHorizontalTiles() - .5
            }, n.prototype.centerY = function () {
                return .5 - (this.y + .5) / this._level.numVerticalTiles()
            }, n.prototype.scaleX = function () {
                return 1 / this._level.numHorizontalTiles()
            }, n.prototype.scaleY = function () {
                return 1 / this._level.numVerticalTiles()
            }, n.prototype.width = function () {
                return this._level.tileWidth()
            }, n.prototype.height = function () {
                return this._level.tileHeight()
            }, n.prototype.levelWidth = function () {
                return this._level.width()
            }, n.prototype.levelHeight = function () {
                return this._level.height()
            }, n.prototype.atTopLevel = function () {
                return 0 === this.z
            }, n.prototype.atBottomLevel = function () {
                return this.z === this._geometry.levelList.length - 1
            }, n.prototype.atTopEdge = function () {
                return 0 === this.y
            }, n.prototype.atBottomEdge = function () {
                return this.y === this._level.numVerticalTiles() - 1
            }, n.prototype.atLeftEdge = function () {
                return 0 === this.x
            }, n.prototype.atRightEdge = function () {
                return this.x === this._level.numHorizontalTiles() - 1
            }, n.prototype.padTop = function () {
                return this.atTopEdge() && /[fu]/.test(this.face)
            }, n.prototype.padBottom = function () {
                return !this.atBottomEdge() || /[fd]/.test(this.face)
            }, n.prototype.padLeft = function () {
                return this.atLeftEdge() && /[flud]/.test(this.face)
            }, n.prototype.padRight = function () {
                return !this.atRightEdge() || /[frud]/.test(this.face)
            }, n.prototype.vertices = function (t) {
                function e(t, e, n) {
                    _.set(t, e, n, -.5), r(t, 0, i.x, i.y)
                }
                t || (t = [_.create(), _.create(), _.create(), _.create()]);
                var i = w[this.face],
                    n = this.centerX() - this.scaleX() / 2,
                    o = this.centerX() + this.scaleX() / 2,
                    s = this.centerY() - this.scaleY() / 2,
                    a = this.centerY() + this.scaleY() / 2;
                return e(t[0], n, a), e(t[1], o, a), e(t[2], o, s), e(t[3], n, s), t
            }, n.prototype.parent = function () {
                if (this.atTopLevel()) return null;
                var t = this.face,
                    e = this.z,
                    i = this.x,
                    r = this.y,
                    o = this._geometry,
                    s = o.levelList[e],
                    a = o.levelList[e - 1];
                return new n(t, Math.floor(i / s.numHorizontalTiles() * a.numHorizontalTiles()), Math.floor(r / s.numVerticalTiles() * a.numVerticalTiles()), e - 1, o)
            }, n.prototype.children = function (t) {
                if (this.atBottomLevel()) return null;
                var e = this.face,
                    i = this.z,
                    r = this.x,
                    o = this.y,
                    s = this._geometry,
                    a = s.levelList[i],
                    l = s.levelList[i + 1],
                    h = l.numHorizontalTiles() / a.numHorizontalTiles(),
                    u = l.numVerticalTiles() / a.numVerticalTiles();
                t = t || [];
                for (var c = 0; c < h; c++)
                    for (var p = 0; p < u; p++) {
                        var d = h * r + c,
                            f = u * o + p,
                            m = i + 1;
                        t.push(new n(e, d, f, m, s))
                    }
                return t
            }, n.prototype.neighbors = function () {
                var t = this._geometry,
                    e = t._neighborsCache,
                    i = e.get(this);
                if (i) return i;
                for (var o = t._vec, s = this.face, a = this.x, l = this.y, h = this.z, u = this._level, c = u.numHorizontalTiles(), p = u.numVerticalTiles(), d = [], m = 0; m < L.length; m++) {
                    var v = L[m][0],
                        y = L[m][1],
                        g = a + v,
                        x = l + y,
                        M = h,
                        b = s;
                    if (g < 0 || g >= c || x < 0 || x >= p) {
                        var S = this.centerX(),
                            E = this.centerY();
                        g < 0 ? (_.set(o, -.5, E, -.5), b = T[s][0]) : g >= c ? (_.set(o, .5, E, -.5), b = T[s][1]) : x < 0 ? (_.set(o, S, .5, -.5), b = T[s][2]) : x >= p && (_.set(o, S, -.5, -.5), b = T[s][3]);
                        var I;
                        I = w[s], r(o, 0, I.x, I.y), I = w[b], r(o, 0, -I.x, -I.y), g = f(Math.floor((.5 + o[0]) * c), 0, c - 1), x = f(Math.floor((.5 - o[1]) * p), 0, p - 1)
                    }
                    d.push(new n(b, g, x, M, t))
                }
                return e.set(this, d), d
            }, n.prototype.hash = function () {
                return l(x.indexOf(this.face), this.z, this.y, this.x)
            }, n.prototype.equals = function (t) {
                return this.geometry === t.geometry && this.face === t.face && this.z === t.z && this.y === t.y && this.x === t.x
            }, n.prototype.cmp = function (t) {
                return m(this.z, t.z) || m(x.indexOf(this.face), x.indexOf(t.face)) || m(this.y, t.y) || m(this.x, t.x)
            }, n.prototype.str = function () {
                return "CubeTile(" + tile.face + ", " + tile.x + ", " + tile.y + ", " + tile.z + ")"
            }, a(o, c), o.prototype.width = function () {
                return this._size
            }, o.prototype.height = function () {
                return this._size
            }, o.prototype.tileWidth = function () {
                return this._tileSize
            }, o.prototype.tileHeight = function () {
                return this._tileSize
            }, o.prototype._validateWithParentLevel = function (t) {
                var e = this.width(),
                    i = this.height(),
                    r = this.tileWidth(),
                    n = this.tileHeight(),
                    o = this.numHorizontalTiles(),
                    s = this.numVerticalTiles(),
                    a = t.width(),
                    l = t.height(),
                    h = t.tileWidth(),
                    u = t.tileHeight(),
                    c = t.numHorizontalTiles(),
                    p = t.numVerticalTiles();
                if (e % a != 0) throw new Error("Level width must be multiple of parent level: " + e + " vs. " + a);
                if (i % l != 0) throw new Error("Level height must be multiple of parent level: " + i + " vs. " + l);
                if (o % c != 0) throw new Error("Number of horizontal tiles must be multiple of parent level: " + o + " (" + e + "/" + r + ") vs. " + c + " (" + a + "/" + h + ")");
                if (s % p != 0) throw new Error("Number of vertical tiles must be multiple of parent level: " + s + " (" + i + "/" + n + ") vs. " + p + " (" + l + "/" + u + ")")
            }, s.prototype.maxTileSize = function () {
                for (var t = 0, e = 0; e < this.levelList.length; e++) {
                    var i = this.levelList[e];
                    t = Math.max(t, i.tileWidth, i.tileHeight)
                }
                return t
            }, s.prototype.levelTiles = function (t, e) {
                var i = this.levelList.indexOf(t),
                    r = t.numHorizontalTiles() - 1,
                    o = t.numVerticalTiles() - 1;
                e = e || [];
                for (var s = 0; s < x.length; s++)
                    for (var a = x[s], l = 0; l <= r; l++)
                        for (var h = 0; h <= o; h++) e.push(new n(a, l, h, i, this));
                return e
            }, s.prototype._closestTile = function (t, e) {
                var i = this._vec;
                y.set(i, 0, 0, 1, 1), y.transformMat4(i, i, t.inverseProjection());
                var o = Infinity,
                    s = null;
                for (var a in b) {
                    var l = b[a],
                        h = 1 - _.dot(l, i);
                    h < o && (o = h, s = a)
                }
                for (var u = Math.max(Math.abs(i[0]), Math.abs(i[1]), Math.abs(i[2])) / .5, c = 0; c < 3; c++) i[c] = i[c] / u;
                var p = w[s];
                r(i, 0, -p.x, -p.y);
                var d = this.levelList.indexOf(e),
                    m = e.numHorizontalTiles(),
                    v = e.numVerticalTiles();
                return new n(s, f(Math.floor((.5 + i[0]) * m), 0, m - 1), f(Math.floor((.5 - i[1]) * v), 0, v - 1), d, this)
            }, s.prototype.visibleTiles = function (t, e, i) {
                var r = this._viewSize,
                    n = this._tileSearcher;
                if (i = i || [], t.size(r), 0 === r.width || 0 === r.height) return i;
                var o = this._closestTile(t, e);
                if (!n.search(t, o, i)) throw new Error("Starting tile is not visible");
                return i
            }, s.Tile = s.prototype.Tile = n, s.type = s.prototype.type = "cube", n.type = n.prototype.type = "cube", e.exports = s
        }, {
            "../TileSearcher": 21,
            "../collections/LruMap": 28,
            "../util/clamp": 89,
            "../util/cmp": 91,
            "../util/hash": 102,
            "../util/inherits": 103,
            "../util/type": 115,
            "./Level": 53,
            "./common": 54,
            "gl-matrix": 2
        }],
        51: [function (t, e, i) {
            "use strict";

            function r(t, e) {
                this.z = t, this._geometry = e, this._level = e.levelList[t]
            }

            function n(t) {
                this.constructor.super_.call(this, t), this._width = t.width
            }

            function o(t) {
                if ("array" !== c(t)) throw new Error("Level list must be an array");
                this.levelList = h.makeLevelList(t, n), this.selectableLevelList = h.makeSelectableLevelList(this.levelList)
            }
            var s = t("../util/inherits"),
                a = t("../util/hash"),
                l = t("../util/cmp"),
                h = t("./common"),
                u = t("./Level"),
                c = t("../util/type");
            r.prototype.rotX = function () {
                return 0
            }, r.prototype.rotY = function () {
                return 0
            }, r.prototype.centerX = function () {
                return .5
            }, r.prototype.centerY = function () {
                return .5
            }, r.prototype.scaleX = function () {
                return 1
            }, r.prototype.scaleY = function () {
                return 1
            }, r.prototype.width = function () {
                return this._level.tileWidth()
            }, r.prototype.height = function () {
                return this._level.tileHeight()
            }, r.prototype.levelWidth = function () {
                return this._level.width()
            }, r.prototype.levelHeight = function () {
                return this._level.height()
            }, r.prototype.atTopLevel = function () {
                return 0 === this.z
            }, r.prototype.atBottomLevel = function () {
                return this.z === this._geometry.levelList.length - 1
            }, r.prototype.atTopEdge = function () {
                return !0
            }, r.prototype.atBottomEdge = function () {
                return !0
            }, r.prototype.atLeftEdge = function () {
                return !0
            }, r.prototype.atRightEdge = function () {
                return !0
            }, r.prototype.padTop = function () {
                return !1
            }, r.prototype.padBottom = function () {
                return !1
            }, r.prototype.padLeft = function () {
                return !1
            }, r.prototype.padRight = function () {
                return !1
            }, r.prototype.parent = function () {
                return this.atTopLevel() ? null : new r(this.z - 1, this._geometry)
            }, r.prototype.children = function (t) {
                return this.atBottomLevel() ? null : (t = t || [], t.push(new r(this.z + 1, this._geometry)), t)
            }, r.prototype.neighbors = function () {
                return []
            }, r.prototype.hash = function () {
                return a(this.z)
            }, r.prototype.equals = function (t) {
                return this.geometry === t.geometry && this.z === t.z
            }, r.prototype.cmp = function (t) {
                return l(this.z, t.z)
            }, r.prototype.str = function () {
                return "EquirectTile(" + tile.z + ")"
            }, s(n, u), n.prototype.width = function () {
                return this._width
            }, n.prototype.height = function () {
                return this._width / 2
            }, n.prototype.tileWidth = function () {
                return this._width
            }, n.prototype.tileHeight = function () {
                return this._width / 2
            }, o.prototype.maxTileSize = function () {
                for (var t = 0, e = 0; e < this.levelList.length; e++) {
                    var i = this.levelList[e];
                    t = Math.max(t, i.tileWidth, i.tileHeight)
                }
                return t
            }, o.prototype.levelTiles = function (t, e) {
                var i = this.levelList.indexOf(t);
                return e = e || [], e.push(new r(i, this)), e
            }, o.prototype.visibleTiles = function (t, e, i) {
                var n = new r(this.levelList.indexOf(e), this);
                i = i || [], i.length = 0, i.push(n)
            }, o.Tile = o.prototype.Tile = r, o.type = o.prototype.type = "equirect", r.type = r.prototype.type = "equirect", e.exports = o
        }, {
            "../util/cmp": 91,
            "../util/hash": 102,
            "../util/inherits": 103,
            "../util/type": 115,
            "./Level": 53,
            "./common": 54
        }],
        52: [function (t, e, i) {
            "use strict";

            function r(t, e, i, r) {
                this.x = t, this.y = e, this.z = i, this._geometry = r, this._level = r.levelList[i]
            }

            function n(t) {
                this.constructor.super_.call(this, t), this._width = t.width, this._height = t.height, this._tileWidth = t.tileWidth, this._tileHeight = t.tileHeight
            }

            function o(t) {
                if ("array" !== v(t)) throw new Error("Level list must be an array");
                this.levelList = c(t, n), this.selectableLevelList = p(this.levelList);
                for (var e = 1; e < this.levelList.length; e++) this.levelList[e]._validateWithParentLevel(this.levelList[e - 1]);
                this._tileSearcher = new l(this), this._neighborsCache = new h(g), this._vec = y.create(), this._viewSize = {}
            }
            var s = t("../util/inherits"),
                a = t("../util/hash"),
                l = t("../TileSearcher"),
                h = t("../collections/LruMap"),
                u = t("./Level"),
                c = t("./common").makeLevelList,
                p = t("./common").makeSelectableLevelList,
                d = t("../util/clamp"),
                f = t("../util/mod"),
                m = t("../util/cmp"),
                v = t("../util/type"),
                _ = t("gl-matrix").vec2,
                y = t("gl-matrix").vec4,
                g = 64,
                x = [[0, 1], [1, 0], [0, -1], [-1, 0]];
            r.prototype.rotX = function () {
                    return 0
                }, r.prototype.rotY = function () {
                    return 0
                }, r.prototype.centerX = function () {
                    var t = this._level.width(),
                        e = this._level.tileWidth();
                    return (this.x * e + .5 * this.width()) / t - .5
                }, r.prototype.centerY = function () {
                    var t = this._level.height(),
                        e = this._level.tileHeight();
                    return .5 - (this.y * e + .5 * this.height()) / t
                }, r.prototype.scaleX = function () {
                    var t = this._level.width();
                    return this.width() / t
                }, r.prototype.scaleY = function () {
                    var t = this._level.height();
                    return this.height() / t
                }, r.prototype.width = function () {
                    var t = this._level.width(),
                        e = this._level.tileWidth();
                    if (this.atRightEdge()) {
                        return f(t, e) || e
                    }
                    return e
                }, r.prototype.height = function () {
                    var t = this._level.height(),
                        e = this._level.tileHeight();
                    if (this.atBottomEdge()) {
                        return f(t, e) || e
                    }
                    return e
                }, r.prototype.levelWidth = function () {
                    return this._level.width()
                }, r.prototype.levelHeight = function () {
                    return this._level.height()
                }, r.prototype.atTopLevel = function () {
                    return 0 === this.z
                }, r.prototype.atBottomLevel = function () {
                    return this.z === this._geometry.levelList.length - 1
                }, r.prototype.atTopEdge = function () {
                    return 0 === this.y
                }, r.prototype.atBottomEdge = function () {
                    return this.y === this._level.numVerticalTiles() - 1
                },
                r.prototype.atLeftEdge = function () {
                    return 0 === this.x
                }, r.prototype.atRightEdge = function () {
                    return this.x === this._level.numHorizontalTiles() - 1
                }, r.prototype.padTop = function () {
                    return !1
                }, r.prototype.padBottom = function () {
                    return !this.atBottomEdge()
                }, r.prototype.padLeft = function () {
                    return !1
                }, r.prototype.padRight = function () {
                    return !this.atRightEdge()
                }, r.prototype.vertices = function (t) {
                    t || (t = [_.create(), _.create(), _.create(), _.create()]);
                    var e = this.centerX() - this.scaleX() / 2,
                        i = this.centerX() + this.scaleX() / 2,
                        r = this.centerY() - this.scaleY() / 2,
                        n = this.centerY() + this.scaleY() / 2;
                    return _.set(t[0], e, n), _.set(t[1], i, n), _.set(t[2], i, r), _.set(t[3], e, r), t
                }, r.prototype.parent = function () {
                    if (this.atTopLevel()) return null;
                    var t = this._geometry,
                        e = this.z - 1;
                    return new r(Math.floor(this.x / 2), Math.floor(this.y / 2), e, t)
                }, r.prototype.children = function (t) {
                    if (this.atBottomLevel()) return null;
                    var e = this._geometry,
                        i = this.z + 1;
                    return t = t || [], t.push(new r(2 * this.x, 2 * this.y, i, e)), t.push(new r(2 * this.x, 2 * this.y + 1, i, e)), t.push(new r(2 * this.x + 1, 2 * this.y, i, e)), t.push(new r(2 * this.x + 1, 2 * this.y + 1, i, e)), t
                }, r.prototype.neighbors = function () {
                    var t = this._geometry,
                        e = t._neighborsCache,
                        i = e.get(this);
                    if (i) return i;
                    for (var n = this.x, o = this.y, s = this.z, a = this._level, l = a.numHorizontalTiles() - 1, h = a.numVerticalTiles() - 1, u = [], c = 0; c < x.length; c++) {
                        var p = x[c][0],
                            d = x[c][1],
                            f = n + p,
                            m = o + d,
                            v = s;
                        0 <= f && f <= l && 0 <= m && m <= h && u.push(new r(f, m, v, t))
                    }
                    return e.set(this, u), u
                }, r.prototype.hash = function () {
                    return a(this.z, this.y, this.x)
                }, r.prototype.equals = function (t) {
                    return this.geometry === t.geometry && this.z === t.z && this.y === t.y && this.x === t.x
                }, r.prototype.cmp = function (t) {
                    return m(this.z, t.z) || m(this.y, t.y) || m(this.x, t.x)
                }, r.prototype.str = function () {
                    return "FlatTile(" + tile.x + ", " + tile.y + ", " + tile.z + ")"
                }, s(n, u), n.prototype.width = function () {
                    return this._width
                }, n.prototype.height = function () {
                    return this._height
                }, n.prototype.tileWidth = function () {
                    return this._tileWidth
                }, n.prototype.tileHeight = function () {
                    return this._tileHeight
                }, n.prototype._validateWithParentLevel = function (t) {
                    var e = this.width(),
                        i = this.height(),
                        r = this.tileWidth(),
                        n = this.tileHeight(),
                        o = t.width(),
                        s = t.height(),
                        a = t.tileWidth(),
                        l = t.tileHeight();
                    return e % o != 0 ? new Error("Level width must be multiple of parent level: " + e + " vs. " + o) : i % s != 0 ? new Error("Level height must be multiple of parent level: " + i + " vs. " + s) : r % a != 0 ? new Error("Level tile width must be multiple of parent level: " + r + " vs. " + a) : n % l != 0 ? new Error("Level tile height must be multiple of parent level: " + n + " vs. " + l) : void 0
                }, o.prototype.maxTileSize = function () {
                    for (var t = 0, e = 0; e < this.levelList.length; e++) {
                        var i = this.levelList[e];
                        t = Math.max(t, i.tileWidth, i.tileHeight)
                    }
                    return t
                }, o.prototype.levelTiles = function (t, e) {
                    var i = this.levelList.indexOf(t),
                        n = t.numHorizontalTiles() - 1,
                        o = t.numVerticalTiles() - 1;
                    e || (e = []);
                    for (var s = 0; s <= n; s++)
                        for (var a = 0; a <= o; a++) e.push(new r(s, a, i, this));
                    return e
                }, o.prototype._closestTile = function (t, e) {
                    var i = this._vec;
                    y.set(i, 0, 0, 1, 1), y.transformMat4(i, i, t.inverseProjection());
                    var n = .5 + i[0],
                        o = .5 - i[1],
                        s = this.levelList.indexOf(e),
                        a = e.width(),
                        l = e.height(),
                        h = e.tileWidth(),
                        u = e.tileHeight(),
                        c = e.numHorizontalTiles(),
                        p = e.numVerticalTiles();
                    return new r(d(Math.floor(n * a / h), 0, c - 1), d(Math.floor(o * l / u), 0, p - 1), s, this)
                }, o.prototype.visibleTiles = function (t, e, i) {
                    var r = this._viewSize,
                        n = this._tileSearcher;
                    if (i = i || [], t.size(r), 0 === r.width || 0 === r.height) return i;
                    var o = this._closestTile(t, e);
                    if (!n.search(t, o, i)) throw new Error("Starting tile is not visible");
                    return i
                }, o.Tile = o.prototype.Tile = r, o.type = o.prototype.type = "flat", r.type = r.prototype.type = "flat", e.exports = o
        }, {
            "../TileSearcher": 21,
            "../collections/LruMap": 28,
            "../util/clamp": 89,
            "../util/cmp": 91,
            "../util/hash": 102,
            "../util/inherits": 103,
            "../util/mod": 105,
            "../util/type": 115,
            "./Level": 53,
            "./common": 54,
            "gl-matrix": 2
        }],
        53: [function (t, e, i) {
            "use strict";

            function r(t) {
                this._fallbackOnly = !!t.fallbackOnly
            }
            r.prototype.numHorizontalTiles = function () {
                return Math.ceil(this.width() / this.tileWidth())
            }, r.prototype.numVerticalTiles = function () {
                return Math.ceil(this.height() / this.tileHeight())
            }, r.prototype.fallbackOnly = function () {
                return this._fallbackOnly
            }, e.exports = r
        }, {}],
        54: [function (t, e, i) {
            "use strict";

            function r(t, e) {
                for (var i = [], r = 0; r < t.length; r++) i.push(new e(t[r]));
                return i.sort(function (t, e) {
                    return o(t.width(), e.width())
                }), i
            }

            function n(t) {
                for (var e = [], i = 0; i < t.length; i++) t[i]._fallbackOnly || e.push(t[i]);
                if (!e.length) throw new Error("No selectable levels in list");
                return e
            }
            var o = t("../util/cmp");
            e.exports = {
                makeLevelList: r,
                makeSelectableLevelList: n
            }
        }, {
            "../util/cmp": 91
        }],
        55: [function (t, e, i) {
            "use strict";
            e.exports = {
                WebGlStage: t("./stages/WebGl"),
                CssStage: t("./stages/Css"),
                FlashStage: t("./stages/Flash"),
                WebGlCubeRenderer: t("./renderers/WebGlCube"),
                WebGlFlatRenderer: t("./renderers/WebGlFlat"),
                WebGlEquirectRenderer: t("./renderers/WebGlEquirect"),
                CssCubeRenderer: t("./renderers/CssCube"),
                CssFlatRenderer: t("./renderers/CssFlat"),
                FlashCubeRenderer: t("./renderers/FlashCube"),
                FlashFlatRenderer: t("./renderers/FlashFlat"),
                registerDefaultRenderers: t("./renderers/registerDefaultRenderers"),
                CubeGeometry: t("./geometries/Cube"),
                FlatGeometry: t("./geometries/Flat"),
                EquirectGeometry: t("./geometries/Equirect"),
                RectilinearView: t("./views/Rectilinear"),
                FlatView: t("./views/Flat"),
                ImageUrlSource: t("./sources/ImageUrl"),
                SingleAssetSource: t("./sources/SingleAsset"),
                StaticAsset: t("./assets/Static"),
                DynamicAsset: t("./assets/Dynamic"),
                TextureStore: t("./TextureStore"),
                Layer: t("./Layer"),
                RenderLoop: t("./RenderLoop"),
                KeyControlMethod: t("./controls/Key"),
                DragControlMethod: t("./controls/Drag"),
                QtvrControlMethod: t("./controls/Qtvr"),
                ScrollZoomControlMethod: t("./controls/ScrollZoom"),
                PinchZoomControlMethod: t("./controls/PinchZoom"),
                VelocityControlMethod: t("./controls/Velocity"),
                ElementPressControlMethod: t("./controls/ElementPress"),
                Controls: t("./controls/Controls"),
                Dynamics: t("./controls/Dynamics"),
                Viewer: t("./Viewer"),
                Scene: t("./Scene"),
                Hotspot: t("./Hotspot"),
                HotspotContainer: t("./HotspotContainer"),
                colorEffects: t("./colorEffects"),
                registerDefaultControls: t("./controls/registerDefaultControls"),
                autorotate: t("./autorotate"),
                util: {
                    async: t("./util/async"),
                    cancelize: t("./util/cancelize"),
                    chain: t("./util/chain"),
                    clamp: t("./util/clamp"),
                    clearOwnProperties: t("./util/clearOwnProperties"),
                    cmp: t("./util/cmp"),
                    compose: t("./util/compose"),
                    convertFov: t("./util/convertFov"),
                    decimal: t("./util/decimal"),
                    defaults: t("./util/defaults"),
                    defer: t("./util/defer"),
                    degToRad: t("./util/degToRad"),
                    delay: t("./util/delay"),
                    dom: t("./util/dom"),
                    extend: t("./util/extend"),
                    hash: t("./util/hash"),
                    inherits: t("./util/inherits"),
                    mod: t("./util/mod"),
                    noop: t("./util/noop"),
                    now: t("./util/now"),
                    once: t("./util/once"),
                    pixelRatio: t("./util/pixelRatio"),
                    radToDeg: t("./util/radToDeg"),
                    real: t("./util/real"),
                    retry: t("./util/retry"),
                    tween: t("./util/tween"),
                    type: t("./util/type")
                },
                dependencies: {
                    bowser: t("bowser"),
                    glMatrix: t("gl-matrix"),
                    eventEmitter: t("minimal-event-emitter"),
                    hammerjs: t("hammerjs")
                }
            }
        }, {
            "./Hotspot": 14,
            "./HotspotContainer": 15,
            "./Layer": 16,
            "./RenderLoop": 18,
            "./Scene": 19,
            "./TextureStore": 20,
            "./Viewer": 23,
            "./assets/Dynamic": 24,
            "./assets/Static": 26,
            "./autorotate": 27,
            "./colorEffects": 34,
            "./controls/Controls": 37,
            "./controls/Drag": 38,
            "./controls/Dynamics": 39,
            "./controls/ElementPress": 40,
            "./controls/Key": 42,
            "./controls/PinchZoom": 43,
            "./controls/Qtvr": 44,
            "./controls/ScrollZoom": 45,
            "./controls/Velocity": 46,
            "./controls/registerDefaultControls": 48,
            "./geometries/Cube": 50,
            "./geometries/Equirect": 51,
            "./geometries/Flat": 52,
            "./renderers/CssCube": 59,
            "./renderers/CssFlat": 60,
            "./renderers/FlashCube": 62,
            "./renderers/FlashFlat": 63,
            "./renderers/WebGlCube": 66,
            "./renderers/WebGlEquirect": 67,
            "./renderers/WebGlFlat": 68,
            "./renderers/registerDefaultRenderers": 69,
            "./sources/ImageUrl": 74,
            "./sources/SingleAsset": 75,
            "./stages/Css": 76,
            "./stages/Flash": 77,
            "./stages/WebGl": 80,
            "./util/async": 85,
            "./util/cancelize": 87,
            "./util/chain": 88,
            "./util/clamp": 89,
            "./util/clearOwnProperties": 90,
            "./util/cmp": 91,
            "./util/compose": 92,
            "./util/convertFov": 93,
            "./util/decimal": 94,
            "./util/defaults": 95,
            "./util/defer": 96,
            "./util/degToRad": 97,
            "./util/delay": 98,
            "./util/dom": 99,
            "./util/extend": 100,
            "./util/hash": 102,
            "./util/inherits": 103,
            "./util/mod": 105,
            "./util/noop": 106,
            "./util/now": 107,
            "./util/once": 108,
            "./util/pixelRatio": 109,
            "./util/radToDeg": 111,
            "./util/real": 112,
            "./util/retry": 113,
            "./util/tween": 114,
            "./util/type": 115,
            "./views/Flat": 116,
            "./views/Rectilinear": 117,
            bowser: 1,
            "gl-matrix": 2,
            hammerjs: 12,
            "minimal-event-emitter": 13
        }],
        56: [function (t, e, i) {
            "use strict";

            function r(t) {
                if ("flash" !== t.type) throw new Error("Stage type incompatible with loader");
                this._stage = t
            }
            var n = t("../assets/Flash"),
                o = t("../NetworkError"),
                s = t("../util/once");
            r.prototype.loadImage = function (t, e, i) {
                function r(e, s) {
                    s === f && (l.removeFlashCallbackListener("imageLoaded", r), e ? i(new o("Network error: " + t)) : i(null, new n(h, f)))
                }

                function a() {
                    h.cancelImage(f), l.removeFlashCallbackListener("imageLoaded", r), i.apply(null, arguments)
                }
                var l = this._stage,
                    h = l.flashElement(),
                    u = e && e.x || 0,
                    c = e && e.y || 0,
                    p = e && e.width || 1,
                    d = e && e.height || 1,
                    f = h.loadImage(t, p, d, u, c);
                return i = s(i), l.addFlashCallbackListener("imageLoaded", r), a
            }, e.exports = r
        }, {
            "../NetworkError": 17,
            "../assets/Flash": 25,
            "../util/once": 108
        }],
        57: [function (t, e, i) {
            "use strict";

            function r(t) {
                if ("webgl" !== t.type && "css" !== t.type) throw new Error("Stage type incompatible with loader");
                this._stage = t
            }
            var n = t("../assets/Static"),
                o = t("../NetworkError"),
                s = t("../util/once");
            r.prototype.loadImage = function (t, e, i) {
                function r() {
                    a.onload = a.onerror = null, a.src = "", i.apply(null, arguments)
                }
                var a = new Image;
                a.crossOrigin = "anonymous";
                var l = e && e.x || 0,
                    h = e && e.y || 0,
                    u = e && e.width || 1,
                    c = e && e.height || 1;
                return i = s(i), a.onload = function () {
                    if (0 === l && 0 === h && 1 === u && 1 === c) i(null, new n(a));
                    else {
                        l *= a.naturalWidth, h *= a.naturalHeight, u *= a.naturalWidth, c *= a.naturalHeight;
                        var t = document.createElement("canvas");
                        t.width = u, t.height = c;
                        t.getContext("2d").drawImage(a, l, h, u, c, 0, 0, u, c), i(null, new n(t))
                    }
                }, a.onerror = function () {
                    i(new o("Network error: " + t))
                }, a.src = t, r
            }, e.exports = r
        }, {
            "../NetworkError": 17,
            "../assets/Static": 26,
            "../util/once": 108
        }],
        58: [function (t, e, i) {
            "use strict";

            function r(t, e) {
                return t.cmp(e)
            }

            function n(t, e, i) {
                this._root = t, this._browserQuirks = e;
                var r = document.createElement("div");
                t.appendChild(r), r.style.position = "absolute", a(r), l(r), this._browserQuirks.useNullTransform && h(r), this.domElement = r, this._oldTileList = [], this._newTileList = [], this._textureMap = new o
            }
            var o = t("../collections/Map"),
                s = t("../util/decimal"),
                a = t("../util/dom").setOverflowHidden,
                l = t("../util/dom").setNoPointerEvents,
                h = t("../util/dom").setNullTransform,
                u = t("../util/dom").setTransform,
                c = t("../util/clearOwnProperties"),
                p = "undefined" != typeof MARZIPANODEBUG && MARZIPANODEBUG.css;
            n.prototype.destroy = function () {
                this._root.removeChild(this.domElement), c(this)
            }, n.prototype.startLayer = function (t, e) {
                var i = this.domElement,
                    r = this._root.clientWidth,
                    n = this._root.clientHeight;
                i.style.left = s(r * e.left) + "px", i.style.top = s(n * e.top) + "px", i.style.width = s(r * e.width) + "px", i.style.height = s(n * e.height) + "px";
                var o = 1,
                    a = t.effects();
                a && null != a.opacity && (o = a.opacity), i.style.opacity = o, this._newTileList.length = 0, this._textureMap.clear()
            }, n.prototype.renderTile = function (t, e) {
                this._newTileList.push(t), this._textureMap.set(t, e)
            }, n.prototype.endLayer = function (t, e) {
                var i, n, o, s, a, l, h, c, d = this.domElement,
                    f = this._oldTileList,
                    m = this._newTileList,
                    v = this._textureMap,
                    _ = t.view();
                if (d.children.length !== f.length) throw new Error("DOM not in sync with tile list");
                for (m.sort(r), i = 0, o = f[i], h = d.firstChild, n = 0; n < m.length; n++) {
                    for (s = m[n]; i < f.length && !(o.cmp(s) >= 0);) c = h.nextSibling, d.removeChild(h), h = c, o = f[++i];
                    if (a = v.get(s), !(l = a ? a._canvas : null)) throw new Error("Rendering tile with missing texture");
                    if (o && 0 === o.cmp(s)) {
                        if (l != h) throw new Error("DOM not in sync with tile list");
                        h = h.nextSibling, o = f[++i]
                    } else d.insertBefore(l, h);
                    u(l, this.calculateTransform(s, a, _)), p && l.setAttribute("data-tile", s.str())
                }
                for (; h;) c = h.nextSibling, d.removeChild(h), h = c;
                if (d.children.length !== m.length) throw new Error("DOM not in sync with tile list");
                var y = this._oldTileList;
                this._oldTileList = this._newTileList, this._newTileList = y
            }, e.exports = n
        }, {
            "../collections/Map": 30,
            "../util/clearOwnProperties": 90,
            "../util/decimal": 94,
            "../util/dom": 99
        }],
        59: [function (t, e, i) {
            "use strict";

            function r(t, e) {
                this.constructor.super_.call(this, t, e, n)
            }
            var n = t("../geometries/Cube").Tile,
                o = t("./CssBase"),
                s = t("../util/decimal");
            t("../util/inherits")(r, o), r.prototype.calculateTransform = function (t, e, i) {
                var r = this._browserQuirks.padSize,
                    n = this._browserQuirks.reverseLevelDepth,
                    o = this._browserQuirks.perspectiveNudge,
                    a = "",
                    l = n ? 256 - t.z : t.levelWidth(),
                    h = i.size(),
                    u = h.width,
                    c = h.height;
                a += "translate3d(" + s(u / 2) + "px, " + s(c / 2) + "px, 0px) ";
                var p = .5 * c / Math.tan(i.fov() / 2),
                    d = p + o;
                a += "perspective(" + s(p) + "px) translateZ(" + s(d) + "px) ";
                var f = -i.roll(),
                    m = -i.pitch(),
                    v = i.yaw();
                a += "rotateZ(" + s(f) + "rad) rotateX(" + s(m) + "rad) rotateY(" + s(v) + "rad) ";
                var _ = -t.rotX(),
                    y = t.rotY();
                a += "rotateX(" + s(_) + "rad) rotateY(" + s(y) + "rad) ";
                var g = t.centerX() - t.scaleX() / 2,
                    x = -(t.centerY() + t.scaleY() / 2),
                    w = g * l,
                    M = x * l,
                    b = -l / 2;
                if (a += "translate3d(" + s(w) + "px, " + s(M) + "px, " + s(b) + "px) ", n) {
                    var S = l * t.scaleX() / t.width(),
                        E = l * t.scaleY() / t.height();
                    a += "scale(" + s(S) + ", " + s(E) + ") "
                }
                var I = t.padLeft() ? r : 0,
                    D = t.padTop() ? r : 0;
                return 0 === I && 0 === D || (a += "translate3d(" + s(-I) + "px, " + s(-D) + "px, 0) "), a
            }, e.exports = r
        }, {
            "../geometries/Cube": 50,
            "../util/decimal": 94,
            "../util/inherits": 103,
            "./CssBase": 58
        }],
        60: [function (t, e, i) {
            "use strict";

            function r(t, e) {
                this.constructor.super_.call(this, t, e, n)
            }
            var n = t("../geometries/Flat").Tile,
                o = t("./CssBase"),
                s = t("../util/decimal");
            t("../util/inherits")(r, o), r.prototype.calculateTransform = function (t, e, i) {
                var r = this._browserQuirks.padSize,
                    n = "",
                    o = i.width(),
                    a = i.height();
                n += "translateX(" + s(o / 2) + "px) translateY(" + s(a / 2) + "px) ";
                var l = o / i._zoomX(),
                    h = a / i._zoomY(),
                    u = t.centerX() - t.scaleX() / 2 + .5,
                    c = .5 - t.centerY() - t.scaleY() / 2,
                    p = u * l,
                    d = c * h;
                n += "translateX(" + s(p) + "px) translateY(" + s(d) + "px) ";
                var f = -i.x() * l,
                    m = -i.y() * h;
                n += "translateX(" + s(f) + "px) translateY(" + s(m) + "px) ";
                var v = t.padLeft() ? r : 0,
                    _ = t.padTop() ? r : 0;
                0 === v && 0 === _ || (n += "translateX(" + s(-v) + "px) translateY(" + s(-_) + "px) ");
                var y = l / t.levelWidth(),
                    g = h / t.levelHeight();
                return n += "scale(" + s(y) + ", " + s(g) + ") "
            }, e.exports = r
        }, {
            "../geometries/Flat": 52,
            "../util/decimal": 94,
            "../util/inherits": 103,
            "./CssBase": 58
        }],
        61: [function (t, e, i) {
            "use strict";

            function r(t, e) {
                return t.cmp(e)
            }

            function n(t, e, i, r) {
                this._flashElement = t, this._layerId = e, this._quirks = i, this._tileList = [], this._textureMap = new o, this._layerCreated = !1
            }
            var o = t("../collections/Map"),
                s = t("../util/clearOwnProperties");
            n.prototype.destroy = function () {
                this._layerCreated && this._flashElement.destroyLayer(this._layerId), s(this)
            }, n.prototype.startLayer = function (t, e) {
                this._flashElement.isReady && this._flashElement.isReady() && (this._layerCreated || (this._flashElement.createLayer(this._layerId), this._layerCreated = !0), this._tileList.length = 0, this._textureMap.clear())
            }, n.prototype.renderTile = function (t, e) {
                this._tileList.push(t), this._textureMap.set(t, e)
            }, n.prototype.endLayer = function (t, e) {
                if (this._flashElement.isReady && this._flashElement.isReady()) {
                    this._tileList.sort(r), this._renderOnFlash(t, e)
                }
            }, e.exports = n
        }, {
            "../collections/Map": 30,
            "../util/clearOwnProperties": 90
        }],
        62: [function (t, e, i) {
            "use strict";

            function r(t, e, i) {
                this.constructor.super_.call(this, t, e, i, o), this._flashTileList = []
            }
            var n = t("./FlashBase"),
                o = t("../geometries/Cube").Tile,
                s = t("../util/inherits"),
                a = t("../util/radToDeg");
            s(r, n), r.prototype._renderOnFlash = function (t, e) {
                var i = this._flashElement,
                    r = this._layerId,
                    n = this._quirks.padSize,
                    o = this._tileList,
                    s = this._textureMap,
                    l = this._flashTileList;
                l.length = 0;
                for (var h = 0; h < o.length; h++) {
                    var u = o[h],
                        c = s.get(u);
                    if (!c) throw new Error("Rendering tile with missing texture");
                    var p = u.padTop() ? n : 0,
                        d = u.padBottom() ? n : 0,
                        f = u.padLeft() ? n : 0,
                        m = u.padRight() ? n : 0;
                    l.push({
                        textureId: c._textureId,
                        face: u.face,
                        width: u.width(),
                        height: u.height(),
                        centerX: u.centerX(),
                        centerY: u.centerY(),
                        rotX: a(u.rotX()),
                        rotY: a(u.rotY()),
                        levelSize: u.levelWidth(),
                        padTop: p,
                        padBottom: d,
                        padLeft: f,
                        padRight: m
                    })
                }
                var v = this._flashElement.clientWidth,
                    _ = this._flashElement.clientHeight,
                    y = v * e.x,
                    g = _ * e.y,
                    x = v * e.width,
                    w = _ * e.height,
                    M = 1,
                    b = t.effects();
                b && null != b.opacity && (M = b.opacity);
                var S = t.view(),
                    E = S.yaw(),
                    I = S.pitch(),
                    D = S.roll(),
                    T = S.fov();
                i.drawCubeTiles(r, x, w, y, g, M, E, I, D, T, l)
            }, e.exports = r
        }, {
            "../geometries/Cube": 50,
            "../util/inherits": 103,
            "../util/radToDeg": 111,
            "./FlashBase": 61
        }],
        63: [function (t, e, i) {
            "use strict";

            function r(t, e, i) {
                this.constructor.super_.call(this, t, e, i, o), this._flashTileList = []
            }
            var n = t("./FlashBase"),
                o = t("../geometries/Flat").Tile;
            t("../util/inherits")(r, n), r.prototype._renderOnFlash = function (t, e) {
                var i = this._flashElement,
                    r = this._layerId,
                    n = this._quirks.padSize,
                    o = this._tileList,
                    s = this._textureMap,
                    a = this._flashTileList;
                a.length = 0;
                for (var l = 0; l < o.length; l++) {
                    var h = o[l],
                        u = s.get(h);
                    if (!u) throw new Error("Rendering tile with missing texture");
                    var c = h.padTop() ? n : 0,
                        p = h.padBottom() ? n : 0,
                        d = h.padLeft() ? n : 0,
                        f = h.padRight() ? n : 0;
                    a.push({
                        textureId: u._textureId,
                        width: h.width(),
                        height: h.height(),
                        centerX: h.centerX(),
                        centerY: h.centerY(),
                        scaleX: h.scaleX(),
                        scaleY: h.scaleY(),
                        levelWidth: h.levelWidth(),
                        levelHeight: h.levelHeight(),
                        padTop: c,
                        padBottom: p,
                        padLeft: d,
                        padRight: f
                    })
                }
                var m = this._flashElement.clientWidth,
                    v = this._flashElement.clientHeight,
                    _ = m * e.x,
                    y = v * e.y,
                    g = m * e.width,
                    x = v * e.height,
                    w = 1,
                    M = t.effects();
                M && null != M.opacity && (w = M.opacity);
                var b = t.view(),
                    S = b.x(),
                    E = b.y(),
                    I = b._zoomX(),
                    D = b._zoomY();
                i.drawFlatTiles(r, g, x, _, y, w, S, E, I, D, a)
            }, e.exports = r
        }, {
            "../geometries/Flat": 52,
            "../util/inherits": 103,
            "./FlashBase": 61
        }],
        64: [function (t, e, i) {
            "use strict";

            function r(t) {
                this.gl = t, this.projMatrix = n.create(), this.viewportMatrix = n.create(), this.translateVector = o.create(), this.scaleVector = o.create(), this.constantBuffers = l(t, x, w, M), this.shaderProgram = u(t, y, g, b, S)
            }
            var n = t("gl-matrix").mat4,
                o = t("gl-matrix").vec3,
                s = t("../util/clearOwnProperties"),
                a = t("./WebGlCommon"),
                l = a.createConstantBuffers,
                h = a.destroyConstantBuffers,
                u = a.createShaderProgram,
                c = a.destroyShaderProgram,
                p = a.enableAttributes,
                d = a.disableAttributes,
                f = a.setViewport,
                m = a.setupPixelEffectUniforms,
                v = a.setDepth,
                _ = a.setTexture,
                y = t("../shaders/vertexNormal"),
                g = t("../shaders/fragmentNormal"),
                x = [0, 1, 2, 0, 2, 3],
                w = [-.5, -.5, 0, .5, -.5, 0, .5, .5, 0, -.5, .5, 0],
                M = [0, 0, 1, 0, 1, 1, 0, 1],
                b = ["aVertexPosition", "aTextureCoord"],
                S = ["uDepth", "uOpacity", "uSampler", "uProjMatrix", "uViewportMatrix", "uColorOffset", "uColorMatrix"];
            r.prototype.destroy = function () {
                h(this.gl, this.constantBuffers), c(this.gl, this.shaderProgram), s(this)
            }, r.prototype.startLayer = function (t, e) {
                var i = this.gl,
                    r = this.shaderProgram,
                    n = this.constantBuffers,
                    o = this.viewportMatrix;
                i.useProgram(r), p(i, r), f(i, t, e, o), i.uniformMatrix4fv(r.uViewportMatrix, !1, o), i.bindBuffer(i.ARRAY_BUFFER, n.vertexPositions), i.vertexAttribPointer(r.aVertexPosition, 3, i.FLOAT, i.FALSE, 0, 0), i.bindBuffer(i.ARRAY_BUFFER, n.textureCoords), i.vertexAttribPointer(r.aTextureCoord, 2, i.FLOAT, i.FALSE, 0, 0), m(i, t.effects(), {
                    opacity: r.uOpacity,
                    colorOffset: r.uColorOffset,
                    colorMatrix: r.uColorMatrix
                })
            }, r.prototype.endLayer = function (t, e) {
                var i = this.gl,
                    r = this.shaderProgram;
                d(i, r)
            }, r.prototype.renderTile = function (t, e, i, r) {
                var o = this.gl,
                    s = this.shaderProgram,
                    a = this.constantBuffers,
                    l = this.projMatrix,
                    h = this.translateVector,
                    u = this.scaleVector;
                h[0] = t.centerX(), h[1] = t.centerY(), h[2] = -.5, u[0] = t.scaleX(), u[1] = t.scaleY(), u[2] = 1, n.copy(l, i.view().projection()), n.rotateX(l, l, t.rotX()), n.rotateY(l, l, t.rotY()), n.translate(l, l, h), n.scale(l, l, u), o.uniformMatrix4fv(s.uProjMatrix, !1, l), v(o, s, r, t.z), _(o, s, e), o.bindBuffer(o.ELEMENT_ARRAY_BUFFER, a.vertexIndices), o.drawElements(o.TRIANGLES, x.length, o.UNSIGNED_SHORT, 0)
            }, e.exports = r
        }, {
            "../shaders/fragmentNormal": 71,
            "../shaders/vertexNormal": 73,
            "../util/clearOwnProperties": 90,
            "./WebGlCommon": 65,
            "gl-matrix": 2
        }],
        65: [function (t, e, i) {
            "use strict";

            function r(t, e, i) {
                var r = t.createShader(e);
                if (t.shaderSource(r, i), t.compileShader(r), !t.getShaderParameter(r, t.COMPILE_STATUS)) throw t.getShaderInfoLog(r);
                return r
            }

            function n(t, e, i, n, o) {
                var s = r(t, t.VERTEX_SHADER, e),
                    a = r(t, t.FRAGMENT_SHADER, i),
                    l = t.createProgram();
                if (t.attachShader(l, s), t.attachShader(l, a), t.linkProgram(l), !t.getProgramParameter(l, t.LINK_STATUS)) throw t.getProgramInfoLog(l);
                for (var h = 0; h < n.length; h++) {
                    var u = n[h];
                    if (l[u] = t.getAttribLocation(l, u), -1 === l[u]) throw new Error("Shader program has no " + u + " attribute")
                }
                for (var c = 0; c < o.length; c++) {
                    var p = o[c];
                    if (l[p] = t.getUniformLocation(l, p), -1 === l[p]) throw new Error("Shader program has no " + p + " uniform")
                }
                return l
            }

            function o(t, e) {
                for (var i = t.getAttachedShaders(e), r = 0; r < i.length; r++) {
                    var n = i[r];
                    t.detachShader(e, n), t.deleteShader(n)
                }
                t.deleteProgram(e)
            }

            function s(t, e, i, r) {
                var n = t.createBuffer();
                return t.bindBuffer(e, n), t.bufferData(e, r, i), n
            }

            function a(t, e, i, r) {
                return {
                    vertexIndices: s(t, t.ELEMENT_ARRAY_BUFFER, t.STATIC_DRAW, new Uint16Array(e)),
                    vertexPositions: s(t, t.ARRAY_BUFFER, t.STATIC_DRAW, new Float32Array(i)),
                    textureCoords: s(t, t.ARRAY_BUFFER, t.STATIC_DRAW, new Float32Array(r))
                }
            }

            function l(t, e) {
                t.deleteBuffer(e.vertexIndices), t.deleteBuffer(e.vertexPositions), t.deleteBuffer(e.textureCoords)
            }

            function h(t, e) {
                for (var i = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), r = 0; r < i; r++) t.enableVertexAttribArray(r)
            }

            function u(t, e) {
                for (var i = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), r = 0; r < i; r++) t.disableVertexAttribArray(r)
            }

            function c(t, e, i) {
                t.activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, i._texture), t.uniform1i(e.uSampler, 0)
            }

            function p(t, e, i, r) {
                var n = ((i + 1) * v - r) / (v * m);
                t.uniform1f(e.uDepth, n)
            }

            function d(t, e, i) {
                var r = w;
                e && null != e.opacity && (r = e.opacity), t.uniform1f(i.opacity, r);
                var n = M;
                e && e.colorOffset && (n = e.colorOffset), t.uniform4fv(i.colorOffset, n);
                var o = b;
                e && e.colorMatrix && (o = e.colorMatrix), t.uniformMatrix4fv(i.colorMatrix, !1, o)
            }

            function f(t, e, i, r) {
                if (0 === i.x && 1 === i.width && 0 === i.y && 1 === i.height) return t.viewport(0, 0, t.drawingBufferWidth, t.drawingBufferHeight), void x.identity(r);
                var n = i.x,
                    o = _(n, 0, 1),
                    s = o - n,
                    a = 1 - o,
                    l = _(i.width - s, 0, a),
                    h = i.width - l,
                    u = 1 - i.height - i.y,
                    c = _(u, 0, 1),
                    p = c - u,
                    d = 1 - c,
                    f = _(i.height - p, 0, d),
                    m = i.height - f;
                g.set(E, i.width / l, i.height / f, 1), g.set(S, (h - s) / l, (m - p) / f, 0), x.identity(r), x.translate(r, r, S), x.scale(r, r, E), t.viewport(t.drawingBufferWidth * o, t.drawingBufferHeight * c, t.drawingBufferWidth * l, t.drawingBufferHeight * f)
            }
            var m = 256,
                v = 256,
                _ = t("../util/clamp"),
                y = t("gl-matrix").vec4,
                g = t("gl-matrix").vec3,
                x = t("gl-matrix").mat4,
                w = 1,
                M = y.create(),
                b = x.create();
            x.identity(b);
            var S = g.create(),
                E = g.create();
            e.exports = {
                createShaderProgram: n,
                destroyShaderProgram: o,
                createConstantBuffers: a,
                destroyConstantBuffers: l,
                enableAttributes: h,
                disableAttributes: u,
                setTexture: c,
                setDepth: p,
                setViewport: f,
                setupPixelEffectUniforms: d
            }
        }, {
            "../util/clamp": 89,
            "gl-matrix": 2
        }],
        66: [function (t, e, i) {
            "use strict";

            function r() {
                this.constructor.super_.apply(this, arguments)
            }
            var n = t("./WebGlBase");
            t("../util/inherits")(r, n), e.exports = r
        }, {
            "../util/inherits": 103,
            "./WebGlBase": 64
        }],
        67: [function (t, e, i) {
            "use strict";

            function r(t) {
                this.gl = t, this.invProjMatrix = n.create(), this.viewportMatrix = n.create(), this.constantBuffers = a(t, g, x, w), this.shaderProgram = h(t, _, y, M, b)
            }
            var n = t("gl-matrix").mat4,
                o = t("../util/clearOwnProperties"),
                s = t("./WebGlCommon"),
                a = s.createConstantBuffers,
                l = s.destroyConstantBuffers,
                h = s.createShaderProgram,
                u = s.destroyShaderProgram,
                c = s.enableAttributes,
                p = s.disableAttributes,
                d = s.setViewport,
                f = s.setupPixelEffectUniforms,
                m = s.setDepth,
                v = s.setTexture,
                _ = t("../shaders/vertexEquirect"),
                y = t("../shaders/fragmentEquirect"),
                g = [0, 1, 2, 0, 2, 3],
                x = [-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0],
                w = [0, 0, 1, 0, 1, 1, 0, 1],
                M = ["aVertexPosition"],
                b = ["uDepth", "uOpacity", "uSampler", "uInvProjMatrix", "uViewportMatrix", "uColorOffset", "uColorMatrix", "uTextureX", "uTextureY", "uTextureWidth", "uTextureHeight"];
            r.prototype.destroy = function () {
                l(this.gl, this.constantBuffers), u(this.gl, this.shaderProgram), o(this)
            }, r.prototype.startLayer = function (t, e) {
                var i = this.gl,
                    r = this.shaderProgram,
                    o = this.constantBuffers,
                    s = this.invProjMatrix,
                    a = this.viewportMatrix;
                i.useProgram(r), c(i, r), d(i, t, e, a), i.uniformMatrix4fv(r.uViewportMatrix, !1, a), i.bindBuffer(i.ARRAY_BUFFER, o.vertexPositions), i.vertexAttribPointer(r.aVertexPosition, 3, i.FLOAT, i.FALSE, 0, 0), i.bindBuffer(i.ARRAY_BUFFER, o.textureCoords), n.copy(s, t.view().projection()), n.invert(s, s), i.uniformMatrix4fv(r.uInvProjMatrix, !1, s);
                var l = t.effects().textureCrop || {},
                    h = null != l.x ? l.x : 0,
                    u = null != l.y ? l.y : 0,
                    p = null != l.width ? l.width : 1,
                    m = null != l.height ? l.height : 1;
                i.uniform1f(r.uTextureX, h), i.uniform1f(r.uTextureY, u), i.uniform1f(r.uTextureWidth, p), i.uniform1f(r.uTextureHeight, m), f(i, t.effects(), {
                    opacity: r.uOpacity,
                    colorOffset: r.uColorOffset,
                    colorMatrix: r.uColorMatrix
                })
            }, r.prototype.endLayer = function (t, e) {
                var i = this.gl,
                    r = this.shaderProgram;
                p(i, r)
            }, r.prototype.renderTile = function (t, e, i, r) {
                var n = this.gl,
                    o = this.shaderProgram,
                    s = this.constantBuffers;
                m(n, o, r, t.z), v(n, o, e), n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, s.vertexIndices), n.drawElements(n.TRIANGLES, g.length, n.UNSIGNED_SHORT, 0)
            }, e.exports = r
        }, {
            "../shaders/fragmentEquirect": 70,
            "../shaders/vertexEquirect": 72,
            "../util/clearOwnProperties": 90,
            "./WebGlCommon": 65,
            "gl-matrix": 2
        }],
        68: [function (t, e, i) {
            "use strict";

            function r() {
                this.constructor.super_.apply(this, arguments)
            }
            var n = t("./WebGlBase");
            t("../util/inherits")(r, n), e.exports = r
        }, {
            "../util/inherits": 103,
            "./WebGlBase": 64
        }],
        69: [function (t, e, i) {
            "use strict";

            function r(t) {
                switch (t.type) {
                    case "webgl":
                        t.registerRenderer("flat", "flat", o), t.registerRenderer("cube", "rectilinear", n), t.registerRenderer("equirect", "rectilinear", s);
                        break;
                    case "css":
                        t.registerRenderer("flat", "flat", l), t.registerRenderer("cube", "rectilinear", a);
                        break;
                    case "flash":
                        t.registerRenderer("flat", "flat", u), t.registerRenderer("cube", "rectilinear", h);
                        break;
                    default:
                        throw new Error("Unknown stage type: " + t.type)
                }
            }
            var n = t("./WebGlCube"),
                o = t("./WebGlFlat"),
                s = t("./WebGlEquirect"),
                a = t("./CssCube"),
                l = t("./CssFlat"),
                h = t("./FlashCube"),
                u = t("./FlashFlat");
            e.exports = r
        }, {
            "./CssCube": 59,
            "./CssFlat": 60,
            "./FlashCube": 62,
            "./FlashFlat": 63,
            "./WebGlCube": 66,
            "./WebGlEquirect": 67,
            "./WebGlFlat": 68
        }],
        70: [function (t, e, i) {
            "use strict";
            e.exports = ["#ifdef GL_FRAGMENT_PRECISION_HIGH", "precision highp float;", "#else", "precision mediump float", "#endif", "uniform sampler2D uSampler;", "uniform float uOpacity;", "uniform float uTextureX;", "uniform float uTextureY;", "uniform float uTextureWidth;", "uniform float uTextureHeight;", "uniform vec4 uColorOffset;", "uniform mat4 uColorMatrix;", "varying vec4 vRay;", "const float PI = 3.14159265358979323846264;", "void main(void) {", "  float r = inversesqrt(vRay.x * vRay.x + vRay.y * vRay.y + vRay.z * vRay.z);", "  float phi  = acos(vRay.y * r);", "  float theta = atan(vRay.x, -1.0*vRay.z);", "  float s = 0.5 + 0.5 * theta / PI;", "  float t = 1.0 - phi / PI;", "  s = s * uTextureWidth + uTextureX;", "  t = t * uTextureHeight + uTextureY;", "  vec4 color = texture2D(uSampler, vec2(s, t)) * uColorMatrix + uColorOffset;", "  gl_FragColor = vec4(color.rgba * uOpacity);", "}"].join("\n")
        }, {}],
        71: [function (t, e, i) {
            "use strict";
            e.exports = ["#ifdef GL_FRAGMENT_PRECISION_HIGH", "precision highp float;", "#else", "precision mediump float;", "#endif", "uniform sampler2D uSampler;", "uniform float uOpacity;", "uniform vec4 uColorOffset;", "uniform mat4 uColorMatrix;", "varying vec2 vTextureCoord;", "void main(void) {", "  vec4 color = texture2D(uSampler, vTextureCoord) * uColorMatrix + uColorOffset;", "  gl_FragColor = vec4(color.rgba * uOpacity);", "}"].join("\n")
        }, {}],
        72: [function (t, e, i) {
            "use strict";
            e.exports = ["attribute vec3 aVertexPosition;", "uniform float uDepth;", "uniform mat4 uViewportMatrix;", "uniform mat4 uInvProjMatrix;", "varying vec4 vRay;", "void main(void) {", "  vRay = uInvProjMatrix * vec4(aVertexPosition.xy, 1.0, 1.0);", "  gl_Position = uViewportMatrix * vec4(aVertexPosition.xy, uDepth, 1.0);", "}"].join("\n")
        }, {}],
        73: [function (t, e, i) {
            "use strict";
            e.exports = ["attribute vec3 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform float uDepth;", "uniform mat4 uViewportMatrix;", "uniform mat4 uProjMatrix;", "varying vec2 vTextureCoord;", "void main(void) {", "  gl_Position = uViewportMatrix * uProjMatrix * vec4(aVertexPosition.xy, 0.0, 1.0);", "  gl_Position.z = uDepth * gl_Position.w;", "  vTextureCoord = aTextureCoord;", "}"].join("\n")
        }, {}],
        74: [function (t, e, i) {
            "use strict";

            function r(t, e) {
                e = e || {}, this._loadPool = new a({
                    concurrency: e.concurrency || c
                }), this._retryDelay = e.retryDelay || p, this._retryMap = {}, this._sourceFromTile = t
            }

            function n(t) {
                var e = "\\{(" + t + ")\\}";
                return new RegExp(e, "g")
            }
            var o = t("minimal-event-emitter"),
                s = t("../NetworkError"),
                a = t("../collections/WorkPool"),
                l = t("../util/chain"),
                h = t("../util/delay"),
                u = (t("../util/now"), {
                    x: "x",
                    y: "y",
                    z: "z",
                    f: "face"
                }),
                c = 4,
                p = 1e4;
            o(r), r.prototype.loadAsset = function (t, e, i) {
                var r, n = this,
                    o = this._retryDelay,
                    a = this._retryMap,
                    u = this._sourceFromTile(e),
                    c = u.url,
                    p = u.rect,
                    d = t.loadImage.bind(t, c, p),
                    f = function (t) {
                        return n._loadPool.push(d, function (i, r) {
                            i ? (i instanceof s && (a[c] = v(), n.emit("networkError", r, i)), t(i, e)) : (delete a[c], t(null, e, r))
                        })
                    },
                    m = a[c];
                if (null != m) {
                    var v = v(),
                        _ = v - m;
                    _ < o ? r = o - _ : (r = 0, delete a[c])
                }
                var y = h.bind(null, r);
                return l(y, f)(i)
            }, r.fromString = function (t, e) {
                function i(e) {
                    var i = t;
                    for (var r in u) {
                        var o = u[r],
                            s = n(r),
                            a = e.hasOwnProperty(o) ? e[o] : "";
                        i = i.replace(s, a)
                    }
                    return {
                        url: i
                    }
                }

                function o(t) {
                    return 0 === t.z ? s(t) : i(t)
                }

                function s(t) {
                    var i = a.indexOf(t.face) / 6;
                    return {
                        url: e.cubeMapPreviewUrl,
                        rect: {
                            x: 0,
                            y: i,
                            width: 1,
                            height: 1 / 6
                        }
                    }
                }
                e = e || {};
                var a = e && e.cubeMapPreviewFaceOrder || "bdflru";
                return new r(e.cubeMapPreviewUrl ? o : i, e)
            }, e.exports = r
        }, {
            "../NetworkError": 17,
            "../collections/WorkPool": 32,
            "../util/chain": 88,
            "../util/delay": 98,
            "../util/now": 107,
            "minimal-event-emitter": 13
        }],
        75: [function (t, e, i) {
            "use strict";

            function r(t) {
                this._asset = t
            }
            r.prototype.asset = function () {
                return this._asset
            }, r.prototype.loadAsset = function (t, e, i) {
                function r() {
                    clearTimeout(o), i.apply(null, arguments)
                }
                var n = this,
                    o = setTimeout(function () {
                        i(null, e, n._asset)
                    }, 0);
                return r
            }, e.exports = r
        }, {}],
        76: [function (t, e, i) {
            "use strict";

            function r(t) {
                this.constructor.super_.call(this, t), this._loader = new s(this), this._domElement = document.createElement("div"), u(this._domElement), c(this._domElement)
            }

            function n(t, e, i) {
                var r = document.createElement("canvas");
                u(r), p(r), this._canvas = r, this._timestamp = null, this.refresh(e, i)
            }
            var o = t("./Stage"),
                s = t("../loaders/HtmlImage"),
                a = t("../support/Css"),
                l = t("bowser"),
                h = t("../util/inherits"),
                u = t("../util/dom").setAbsolute,
                c = t("../util/dom").setFullSize,
                p = t("../util/dom").setNullTransformOrigin,
                d = t("../util/clearOwnProperties"),
                f = {
                    padSize: l.ios ? 0 : 3,
                    reverseLevelDepth: l.ios,
                    useNullTransform: l.ios,
                    perspectiveNudge: l.webkit || l.gecko ? .001 : 0
                };
            h(r, o), r.prototype.destroy = function () {
                this.constructor.super_.prototype.destroy.call(this)
            }, r.supported = function () {
                return a()
            }, r.prototype.domElement = function () {
                return this._domElement
            }, r.prototype.setSizeForType = function () {}, r.prototype.loadImage = function (t, e, i) {
                return this._loader.loadImage(t, e, i)
            }, r.prototype.validateLayer = function (t) {}, r.prototype.createRenderer = function (t) {
                return new t(this._domElement, f)
            }, r.prototype.destroyRenderer = function (t) {
                t.destroy()
            }, r.prototype.startFrame = function () {}, r.prototype.endFrame = function () {}, r.prototype.takeSnapshot = function () {
                throw new Error("CssStage: takeSnapshot not implemented")
            }, r.type = r.prototype.type = "css", n.prototype.refresh = function (t, e) {
                var i = e.timestamp();
                if (i !== this._timestamp) {
                    this._timestamp = i;
                    var r = this._canvas,
                        n = r.getContext("2d"),
                        o = e.element(),
                        s = t.width(),
                        a = t.height(),
                        l = f.padSize,
                        h = t.padTop() ? l : 0,
                        u = t.padBottom() ? l : 0,
                        c = t.padLeft() ? l : 0,
                        p = t.padRight() ? l : 0;
                    r.width = c + s + p, r.height = h + a + u, n.drawImage(o, c, h, s, a);
                    var d;
                    for (d = 0; d < h; d++) n.drawImage(r, c, h, s, 1, c, d, s, 1);
                    for (d = 0; d < c; d++) n.drawImage(r, c, h, 1, a, d, h, 1, a);
                    for (d = 0; d < u; d++) n.drawImage(r, c, h + a - 1, s, 1, c, h + a + d, s, 1);
                    for (d = 0; d < p; d++) n.drawImage(r, c + s - 1, h, 1, a, c + s + d, h, 1, a)
                }
            }, n.prototype.destroy = function () {
                d(this)
            }, r.TextureClass = r.prototype.TextureClass = n, e.exports = r
        }, {
            "../loaders/HtmlImage": 57,
            "../support/Css": 81,
            "../util/clearOwnProperties": 90,
            "../util/dom": 99,
            "../util/inherits": 103,
            "./Stage": 79,
            bowser: 1
        }],
        77: [function (t, e, i) {
            "use strict";

            function r() {
                return window[g].__next++
            }

            function n(t) {
                if (this.constructor.super_.call(this, t), this._wmode = t && t.wmode || _, this._swfPath = t && t.swfPath || y, !y) throw new Error("Missing SWF path");
                this._flashStageId = r(), this._callbacksObj = window[g][this._flashStageId] = {},
                    this._stageCallbacksObjVarName = g + "[" + this._flashStageId + "]", this._callbackListeners = {};
                for (var e = 0; e < x.length; e++) this._callbacksObj[x[e]] = this._callListeners(x[e]);
                this._loader = new l(this), this._loadImageQueue = new u, this._loadImageQueue.pause(), this._flashReady = !1, this._nextLayerId = 0;
                var i = o(this._swfPath, this._flashStageId, this._stageCallbacksObjVarName);
                this._domElement = i.root, this._blockingElement = i.blocking, this._flashElement = i.flash, this._checkReadyTimer = setInterval(this._checkReady.bind(this), 50)
            }

            function o(t, e, i) {
                var r = document.createElement("div");
                d(r), f(r);
                var n = "marzipano-flash-stage-" + e,
                    o = '<object id="' + n + '" name="' + n + '" type="application/x-shockwave-flash" data="' + t + '">',
                    s = "";
                s += '<param name="movie" value="' + t + '" />', s += '<param name="allowscriptaccess" value="always" />', s += '<param name="flashvars" value="callbacksObjName=' + i + '" />', s += '<param name="wmode" value="transparent" />', o += s, o += "</object>";
                var a = document.createElement("div");
                a.innerHTML = o;
                var l = a.firstChild;
                d(l), f(l), r.appendChild(l);
                var h = document.createElement("div");
                return d(h), f(h), m(h), r.appendChild(h), {
                    root: r,
                    flash: l,
                    blocking: h
                }
            }

            function s(t, e, i) {
                var r = i.element(),
                    n = e.width(),
                    o = e.height(),
                    s = w.padSize,
                    a = e.padTop() ? s : 0,
                    l = e.padBottom() ? s : 0,
                    h = e.padLeft() ? s : 0,
                    u = e.padRight() ? s : 0,
                    c = t._flashElement.createTexture(r, n, o, a, l, h, u);
                this._stage = t, this._textureId = c
            }
            var a = t("./Stage"),
                l = t("../loaders/FlashImage"),
                h = t("../support/Flash"),
                u = t("../collections/WorkQueue"),
                c = t("../util/inherits"),
                p = t("../util/defer"),
                d = t("../util/dom").setAbsolute,
                f = t("../util/dom").setFullSize,
                m = t("../util/dom").setBlocking,
                v = t("../util/clearOwnProperties"),
                _ = "transparent",
                y = function () {
                    var t = document.currentScript;
                    if (!t) {
                        var e = document.getElementsByTagName("script");
                        t = e.length ? e[e.length - 1] : null
                    }
                    if (!t) return null;
                    var i = t.src,
                        r = i.lastIndexOf("/");
                    return (i = r >= 0 ? i.slice(0, r + 1) : "") + "marzipano.swf"
                }(),
                g = "MarzipanoFlashCallbackMap";
            g in window || (window[g] = {
                __next: 0
            });
            var x = ["imageLoaded"],
                w = {
                    padSize: 3
                };
            c(n, a), n.prototype.destroy = function () {
                window[g][this._flashStageId] = null, null != this._checkReadyTimer && clearInterval(this._checkReadyTimer), this.constructor.super_.prototype.destroy.call(this)
            }, n.supported = function () {
                return h()
            }, n.prototype.domElement = function () {
                return this._domElement
            }, n.prototype.flashElement = function () {
                return this._flashElement
            }, n.prototype.setSizeForType = function () {}, n.prototype.loadImage = function (t, e, i) {
                var r = this._loader.loadImage.bind(this._loader, t, e);
                return this._loadImageQueue.push(r, i)
            }, n.prototype.validateLayer = function (t) {}, n.prototype.addFlashCallbackListener = function (t, e) {
                this._callbackListeners[t] = this._callbackListeners[t] || [], this._callbackListeners[t].push(e)
            }, n.prototype.removeFlashCallbackListener = function (t, e) {
                var i = this._callbackListeners[t] || [],
                    r = i.indexOf(e);
                r >= 0 && i.splice(r, 1)
            }, n.prototype._callListeners = function (t) {
                var e = this;
                return function () {
                    for (var i = e._callbackListeners[t] || [], r = 0; r < i.length; r++) {
                        p(i[r], arguments)
                    }
                }
            }, n.prototype._checkReady = function () {
                return !!(this._flashElement && this._flashElement.isReady && this._flashElement.isReady()) && (this._flashReady = !0, clearTimeout(this._checkReadyTimer), this._checkReadyTimer = null, this._loadImageQueue.resume(), this.emit("renderInvalid"), !0)
            }, n.prototype.createRenderer = function (t) {
                return new t(this._flashElement, ++this._nextLayerId, w)
            }, n.prototype.destroyRenderer = function (t) {
                t.destroy()
            }, n.prototype.startFrame = function () {}, n.prototype.endFrame = function () {}, n.prototype.takeSnapshot = function (t) {
                "object" == typeof t && null != t || (t = {});
                var e = t.quality;
                if (void 0 === e && (e = 75), "number" != typeof e || e < 0 || e > 100) throw new Error("FlashStage: Snapshot quality needs to be a number between 0 and 100");
                return this._flashElement.takeSnapshot(e)
            }, n.type = n.prototype.type = "flash", s.prototype.refresh = function (t, e) {}, s.prototype.destroy = function () {
                this._stage._flashElement.destroyTexture(this._textureId), v(this)
            }, n.TextureClass = n.prototype.TextureClass = s, e.exports = n
        }, {
            "../collections/WorkQueue": 33,
            "../loaders/FlashImage": 56,
            "../support/Flash": 82,
            "../util/clearOwnProperties": 90,
            "../util/defer": 96,
            "../util/dom": 99,
            "../util/inherits": 103,
            "./Stage": 79
        }],
        78: [function (t, e, i) {
            "use strict";

            function r() {
                this._renderers = {}
            }
            r.prototype.set = function (t, e, i) {
                this._renderers[t] || (this._renderers[t] = {}), this._renderers[t][e] = i
            }, r.prototype.get = function (t, e) {
                return this._renderers[t] && this._renderers[t][e] || null
            }, e.exports = r
        }, {}],
        79: [function (t, e, i) {
            "use strict";

            function r(t, e) {
                return t.cmp(e)
            }

            function n(t, e) {
                return -t.cmp(e)
            }

            function o(t) {
                this._progressive = !(!t || !t.progressive), this._layers = [], this._renderers = [], this._tilesToLoad = [], this._tilesToRender = [], this._tmpVisible = [], this._tmpChildren = [], this._width = 0, this._height = 0, this._tmpRect = {}, this._tmpSize = {}, this._createTextureWorkQueue = new a, this._emitRenderInvalid = this._emitRenderInvalid.bind(this), this._rendererRegistry = new p
            }
            var s = t("minimal-event-emitter"),
                a = t("../collections/WorkQueue"),
                l = t("../util/calcRect"),
                h = t("../util/async"),
                u = t("../util/cancelize"),
                c = t("../util/clearOwnProperties"),
                p = t("./RendererRegistry");
            s(o), o.prototype.destroy = function () {
                this.removeAllLayers(), c(this)
            }, o.prototype.registerRenderer = function (t, e, i) {
                return this._rendererRegistry.set(t, e, i)
            }, o.prototype.domElement = function () {
                throw new Error("Stage implementation must override domElement")
            }, o.prototype.width = function () {
                return this._width
            }, o.prototype.height = function () {
                return this._height
            }, o.prototype.size = function (t) {
                return t = t || {}, t.width = this._width, t.height = this._height, t
            }, o.prototype.setSize = function (t) {
                this._width = t.width, this._height = t.height, this.setSizeForType(), this.emit("resize"), this._emitRenderInvalid()
            }, o.prototype.setSizeForType = function (t) {
                throw new Error("Stage implementation must override setSizeForType")
            }, o.prototype.loadImage = function () {
                throw new Error("Stage implementation must override loadImage")
            }, o.prototype._emitRenderInvalid = function () {
                this.emit("renderInvalid")
            }, o.prototype.validateLayer = function (t) {
                throw new Error("Stage implementation must override validateLayer")
            }, o.prototype.listLayers = function () {
                return [].concat(this._layers)
            }, o.prototype.hasLayer = function (t) {
                return this._layers.indexOf(t) >= 0
            }, o.prototype.addLayer = function (t, e) {
                if (this._layers.indexOf(t) >= 0) throw new Error("Layer already in stage");
                if (null == e && (e = this._layers.length), e < 0 || e > this._layers.length) throw new Error("Invalid layer position");
                this.validateLayer(t);
                var i = t.geometry().type,
                    r = t.view().type,
                    n = this._rendererRegistry.get(i, r);
                if (!n) throw new Error("No " + this.type + " renderer avaiable for " + i + " geometry and " + r + " view");
                var o = this.createRenderer(n);
                this._layers.splice(e, 0, t), this._renderers.splice(e, 0, o), t.addEventListener("viewChange", this._emitRenderInvalid), t.addEventListener("effectsChange", this._emitRenderInvalid), t.addEventListener("fixedLevelChange", this._emitRenderInvalid), t.addEventListener("textureStoreChange", this._emitRenderInvalid), this._emitRenderInvalid()
            }, o.prototype.moveLayer = function (t, e) {
                var i = this._layers.indexOf(t);
                if (i < 0) throw new Error("No such layer in stage");
                if (e < 0 || e >= this._layers.length) throw new Error("Invalid layer position");
                t = this._layers.splice(i, 1)[0];
                var r = this._renderers.splice(i, 1)[0];
                this._layers.splice(e, 0, t), this._renderers.splice(e, 0, r), this._emitRenderInvalid()
            }, o.prototype.removeLayer = function (t) {
                var e = this._layers.indexOf(t);
                if (e < 0) throw new Error("No such layer in stage");
                var i = this._layers.splice(e, 1)[0],
                    r = this._renderers.splice(e, 1)[0];
                this.destroyRenderer(r), i.removeEventListener("viewChange", this._emitRenderInvalid), i.removeEventListener("effectsChange", this._emitRenderInvalid), i.removeEventListener("fixedLevelChange", this._emitRenderInvalid), i.removeEventListener("textureStoreChange", this._emitRenderInvalid), this._emitRenderInvalid()
            }, o.prototype.removeAllLayers = function () {
                for (; this._layers.length > 0;) this.removeLayer(this._layers[0])
            }, o.prototype.startFrame = function () {
                throw new Error("Stage implementation must override startFrame")
            }, o.prototype.endFrame = function () {
                throw new Error("Stage implementation must override endFrame")
            }, o.prototype.render = function () {
                var t, e, i, r = this._tilesToLoad,
                    n = this._tilesToRender,
                    o = !0,
                    s = this._width,
                    a = this._height,
                    h = this._tmpRect,
                    u = this._tmpSize;
                if (!(s <= 0 || a <= 0)) {
                    for (this.startFrame(), t = 0; t < this._layers.length; t++) this._layers[t].textureStore().startFrame();
                    for (t = 0; t < this._layers.length; t++) {
                        var c, p, d = this._layers[t],
                            f = d.effects(),
                            m = d.view(),
                            v = d.textureStore(),
                            _ = this._renderers[t],
                            y = this._layers.length - t;
                        if (l(s, a, f && f.rect, h), !(h.width <= 0 || h.height <= 0)) {
                            for (u.width = h.width * this._width, u.height = h.height * this._height, m.setSize(u), _.startLayer(d, h), i = this._collectTiles(d, v), e = 0; e < r.length; e++) c = r[e], v.markTile(c);
                            for (e = 0; e < n.length; e++) c = n[e], p = v.texture(c), _.renderTile(c, p, d, y);
                            d.emit("renderComplete", i), i || (o = !1), _.endLayer(d, h)
                        }
                    }
                    for (t = 0; t < this._layers.length; t++) this._layers[t].textureStore().endFrame();
                    this.endFrame(), this.emit("renderComplete", o)
                }
            }, o.prototype._collectTiles = function (t, e) {
                var i = this._tilesToLoad,
                    o = this._tilesToRender,
                    s = this._tmpVisible;
                i.length = 0, o.length = 0, s.length = 0, t.visibleTiles(s);
                for (var a = !0, l = 0; l < s.length; l++) {
                    var h, u = s[l];
                    this._collectTileToLoad(u), e.texture(u) ? (h = !1, this._collectTileToRender(u)) : (h = this._collectChildren(u, e), a = !1), this._collectParents(u, e, h)
                }
                return i.sort(r), o.sort(n), a
            }, o.prototype._collectChildren = function (t, e) {
                var i = this._tmpChildren,
                    r = !0;
                do {
                    if (i.length = 0, !t.children(i)) break;
                    r = !1;
                    for (var n = 0; n < i.length; n++) t = i[n], e.texture(t) ? (this._collectTileToLoad(t), this._collectTileToRender(t)) : r = !0
                } while (r && 1 === i.length);
                return r
            }, o.prototype._collectParents = function (t, e, i) {
                for (var r = this._progressive;
                    (r || i) && null != (t = t.parent());) {
                    if (i)
                        if (e.texture(t)) this._collectTileToRender(t), i = !1;
                        else if (!this._progressive) continue;
                    this._collectTileToLoad(t) || (r = !1)
                }
                return i
            }, o.prototype._collectTileToLoad = function (t) {
                return this._collectTileIntoList(t, this._tilesToLoad)
            }, o.prototype._collectTileToRender = function (t) {
                return this._collectTileIntoList(t, this._tilesToRender)
            }, o.prototype._collectTileIntoList = function (t, e) {
                for (var i = !1, r = 0; r < e.length; r++)
                    if (t.equals(e[r])) {
                        i = !0;
                        break
                    } return i || e.push(t), !i
            }, o.prototype.createTexture = function (t, e, i) {
                function r() {
                    return new n.TextureClass(n, t, e)
                }
                var n = this,
                    o = u(h(r));
                return this._createTextureWorkQueue.push(o, function (r, n) {
                    i(r, t, e, n)
                })
            }, e.exports = o
        }, {
            "../collections/WorkQueue": 33,
            "../util/async": 85,
            "../util/calcRect": 86,
            "../util/cancelize": 87,
            "../util/clearOwnProperties": 90,
            "./RendererRegistry": 78,
            "minimal-event-emitter": 13
        }],
        80: [function (t, e, i) {
            "use strict";

            function r(t, e) {
                var i = {
                    alpha: !0,
                    premultipliedAlpha: !0,
                    antialias: !(!e || !e.antialias),
                    preserveDrawingBuffer: !(!e || !e.preserveDrawingBuffer)
                };
                v && "undefined" != typeof WebGLDebugUtils && (console.log("Using WebGL lost context simulator"), t = WebGLDebugUtils.makeLostContextSimulatingCanvas(t));
                var r = t.getContext && (t.getContext("webgl", i) || t.getContext("experimental-webgl", i));
                if (!r) throw new Error("Could not get WebGL context");
                return v && "undefined" != typeof WebGLDebugUtils && (r = WebGLDebugUtils.makeDebugContext(r), console.log("Using WebGL debug context")), r
            }

            function n(t) {
                t = t || {};
                var e = this;
                this.constructor.super_.call(this, t), this._generateMipmaps = null != t.generateMipmaps && t.generateMipmaps, this._loader = new a(this), this._domElement = document.createElement("canvas"), d(this._domElement), f(this._domElement), this._gl = r(this._domElement, t), this._handleContextLoss = function () {
                    e.emit("webglcontextlost"), e._gl = null
                }, this._domElement.addEventListener("webglcontextlost", this._handleContextLoss), this._rendererInstances = []
            }

            function o(t, e, i) {
                this._stage = t, this._gl = t._gl, this._texture = null, this._timestamp = null, this._width = this._height = null, this.refresh(e, i)
            }
            var s = t("./Stage"),
                a = t("../loaders/HtmlImage"),
                l = t("../support/WebGl"),
                h = t("bowser"),
                u = t("../util/inherits"),
                c = t("../util/pixelRatio"),
                p = t("../util/ispot"),
                d = t("../util/dom").setAbsolute,
                f = t("../util/dom").setFullSize,
                m = t("../util/clearOwnProperties"),
                v = "undefined" != typeof MARZIPANODEBUG && MARZIPANODEBUG.webGl,
                _ = {
                    videoUseTexImage2D: h.chrome
                };
            u(n, s), n.prototype.destroy = function () {
                this._domElement.removeEventListener("webglcontextlost", this._handleContextLoss), this.constructor.super_.prototype.destroy.call(this)
            }, n.supported = function () {
                return l()
            }, n.prototype.domElement = function () {
                return this._domElement
            }, n.prototype.webGlContext = function () {
                return this._gl
            }, n.prototype.setSizeForType = function () {
                var t = c();
                this._domElement.width = t * this._width, this._domElement.height = t * this._height
            }, n.prototype.loadImage = function (t, e, i) {
                return this._loader.loadImage(t, e, i)
            }, n.prototype.maxTextureSize = function () {
                return this._gl.getParameter(this._gl.MAX_TEXTURE_SIZE)
            }, n.prototype.validateLayer = function (t) {
                var e = t.geometry().maxTileSize(),
                    i = this.maxTextureSize();
                if (e > i) throw new Error("Layer has level with tile size larger than maximum texture size (" + e + " vs. " + i + ")")
            }, n.prototype.createRenderer = function (t) {
                for (var e = this._rendererInstances, i = 0; i < e.length; i++)
                    if (e[i] instanceof t) return e[i];
                var r = new t(this._gl);
                return e.push(r), r
            }, n.prototype.destroyRenderer = function (t) {
                var e = this._rendererInstances;
                if (this._renderers.indexOf(t) < 0) {
                    t.destroy();
                    var i = e.indexOf(t);
                    i >= 0 && e.splice(i, 1)
                }
            }, n.prototype.startFrame = function () {
                var t = this._gl;
                if (!t) throw new Error("Bad WebGL context - maybe context was lost?");
                t.viewport(0, 0, t.drawingBufferWidth, t.drawingBufferHeight), t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT), t.enable(t.DEPTH_TEST), t.enable(t.BLEND), t.blendFunc(t.ONE, t.ONE_MINUS_SRC_ALPHA)
            }, n.prototype.endFrame = function () {}, n.prototype.takeSnapshot = function (t) {
                "object" == typeof t && null != t || (t = {});
                var e = t.quality;
                if (void 0 === e && (e = 75), "number" != typeof e || e < 0 || e > 100) throw new Error("WebGLStage: Snapshot quality needs to be a number between 0 and 100");
                return this.render(), this._domElement.toDataURL("image/jpeg", e / 100)
            }, n.type = n.prototype.type = "webgl", o.prototype.refresh = function (t, e) {
                var i, r = this._gl,
                    n = this._stage,
                    o = e.timestamp();
                if (o !== this._timestamp) {
                    var s = e.element(),
                        a = e.width(),
                        l = e.height();
                    if (a !== this._width || l !== this._height) {
                        var h = n.maxTextureSize();
                        if (a > h) throw new Error("Texture width larger than max size (" + a + " vs. " + h + ")");
                        if (l > h) throw new Error("Texture height larger than max size (" + l + " vs. " + h + ")");
                        this._texture && r.deleteTexture(i), i = this._texture = r.createTexture(), r.bindTexture(r.TEXTURE_2D, i), r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, !0), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, s)
                    } else i = this._texture, r.bindTexture(r.TEXTURE_2D, i), r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, !0), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0), s instanceof HTMLVideoElement && _.videoUseTexImage2D ? r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, s) : r.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, r.RGBA, r.UNSIGNED_BYTE, s);
                    n._generateMipmaps && p(a) && p(l) ? (r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR_MIPMAP_LINEAR), r.generateMipmap(r.TEXTURE_2D)) : (r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR)), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), r.bindTexture(r.TEXTURE_2D, null), this._timestamp = o, this._width = a, this._height = l
                }
            }, o.prototype.destroy = function () {
                this._texture && this._gl.deleteTexture(this._texture), m(this)
            }, n.TextureClass = n.prototype.TextureClass = o, e.exports = n
        }, {
            "../loaders/HtmlImage": 57,
            "../support/WebGl": 83,
            "../util/clearOwnProperties": 90,
            "../util/dom": 99,
            "../util/inherits": 103,
            "../util/ispot": 104,
            "../util/pixelRatio": 109,
            "./Stage": 79,
            bowser: 1
        }],
        81: [function (t, e, i) {
            "use strict";

            function r() {
                var t = s("perspective"),
                    e = document.createElement("div"),
                    i = "undefined" != typeof e.style[t];
                if (i && "WebkitPerspective" === t) {
                    var r = "__marzipano_test_css3d_support__",
                        n = document.createElement("style");
                    n.textContent = "@media(-webkit-transform-3d){#" + r + "{height: 3px;})", document.getElementsByTagName("head")[0].appendChild(n), e.id = r, document.body.appendChild(e), i = e.offsetHeight > 0, n.parentNode.removeChild(n), e.parentNode.removeChild(e)
                }
                return i
            }

            function n() {
                return o !== undefined ? o : o = r()
            }
            var o, s = t("../util/dom").prefixProperty;
            e.exports = n
        }, {
            "../util/dom": 99
        }],
        82: [function (t, e, i) {
            "use strict";

            function r() {
                var t = null,
                    e = navigator.plugins,
                    i = navigator.mimeTypes,
                    r = null;
                if (e && e["Shockwave Flash"] && i && i["application/x-shockwave-flash"] && i["application/x-shockwave-flash"].enabledPlugin) r = e["Shockwave Flash"].description, r = r.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), t = [0, 0, 0], t[0] = parseInt(r.replace(/^(.*)\..*$/, "$1"), 10), t[1] = parseInt(r.replace(/^.*\.(.*)\s.*$/, "$1"), 10), t[2] = /[a-zA-Z]/.test(r) ? parseInt(r.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0;
                else if (window.ActiveXObject) try {
                    var n = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                    n && (r = n.GetVariable("$version")) && (r = r.split(" ")[1].split(","), t = [parseInt(r[0], 10), parseInt(r[1], 10), parseInt(r[2], 10)])
                } catch (o) {}
                return t
            }

            function n() {
                var t = r();
                return t && (t[0] >= 11 || 10 === t[0] && t[1] >= 1)
            }

            function o() {
                return s !== undefined ? s : s = n()
            }
            var s;
            e.exports = o
        }, {}],
        83: [function (t, e, i) {
            "use strict";

            function r() {
                var t = document.createElement("canvas");
                return !(!t.getContext || !t.getContext("webgl") && !t.getContext("experimental-webgl"))
            }

            function n() {
                return o !== undefined ? o : o = r()
            }
            var o;
            e.exports = n
        }, {}],
        84: [function (t, e, i) {
            "use strict";

            function r() {
                var t = document.createElement("a").style;
                t.cssText = "pointer-events:auto";
                var e = "auto" === t.pointerEvents,
                    i = s.msie && parseFloat(s.version) < 11;
                return e && !i
            }

            function n() {
                return o !== undefined ? o : o = r()
            }
            var o, s = t("bowser");
            e.exports = n
        }, {
            bowser: 1
        }],
        85: [function (t, e, i) {
            "use strict";

            function r(t) {
                return function (e) {
                    var i, r;
                    try {
                        r = t()
                    } catch (n) {
                        i = n
                    } finally {
                        i ? e(i) : e(null, r)
                    }
                }
            }
            e.exports = r
        }, {}],
        86: [function (t, e, i) {
            "use strict";

            function r(t, e, i, r) {
                r = r || {};
                var n;
                n = null != i && null != i.absoluteWidth ? i.absoluteWidth / t : null != i && null != i.relativeWidth ? i.relativeWidth : 1;
                var o;
                o = i && null != i.absoluteHeight ? i.absoluteHeight / e : null != i && null != i.relativeHeight ? i.relativeHeight : 1;
                var s;
                s = null != i && null != i.absoluteX ? i.absoluteX / t : null != i && null != i.relativeX ? i.relativeX : 0;
                var a;
                return a = null != i && null != i.absoluteY ? i.absoluteY / e : null != i && null != i.relativeY ? i.relativeY : 0, r.x = s, r.y = a, r.width = n, r.height = o, r
            }
            e.exports = r
        }, {}],
        87: [function (t, e, i) {
            "use strict";

            function r(t) {
                return function () {
                    function e() {
                        r.apply(null, arguments)
                    }
                    if (!arguments.length) throw new Error("cancelized: expected at least one argument");
                    var i = Array.prototype.slice.call(arguments, 0),
                        r = i[i.length - 1] = n(i[i.length - 1]);
                    return t.apply(null, i), e
                }
            }
            var n = t("./once");
            e.exports = r
        }, {
            "./once": 108
        }],
        88: [function (t, e, i) {
            "use strict";

            function r() {
                var t = Array.prototype.slice.call(arguments, 0);
                return function () {
                    function e() {
                        if (arguments[0]) return o = s = null, void l.apply(null, arguments);
                        if (!r.length) return o = s = null, void l.apply(null, arguments);
                        o = r.shift();
                        var t = o,
                            i = Array.prototype.slice.call(arguments, 1);
                        i.push(e);
                        var n = o.apply(null, i);
                        if (t === o) {
                            if ("function" != typeof n) throw new Error("chain: chaining on non-cancellable function");
                            s = n
                        }
                    }

                    function i() {
                        s && s.apply(null, arguments)
                    }
                    var r = t.slice(0),
                        o = null,
                        s = null,
                        a = arguments.length ? Array.prototype.slice.call(arguments, 0, arguments.length - 1) : [],
                        l = arguments.length ? arguments[arguments.length - 1] : n;
                    return a.unshift(null), e.apply(null, a), i
                }
            }
            var n = t("./noop");
            e.exports = r
        }, {
            "./noop": 106
        }],
        89: [function (t, e, i) {
            "use strict";

            function r(t, e, i) {
                return Math.min(Math.max(t, e), i)
            }
            e.exports = r
        }, {}],
        90: [function (t, e, i) {
            "use strict";

            function r(t) {
                for (var e in t) t.hasOwnProperty(e) && (t[e] = undefined)
            }
            e.exports = r
        }, {}],
        91: [function (t, e, i) {
            "use strict";

            function r(t, e) {
                return t < e ? -1 : t > e ? 1 : 0
            }
            e.exports = r
        }, {}],
        92: [function (t, e, i) {
            "use strict";

            function r() {
                var t = arguments;
                return function (e) {
                    for (var i = e, r = 0; r < t.length; r++) {
                        i = t[r].call(null, i)
                    }
                    return i
                }
            }
            e.exports = r
        }, {}],
        93: [function (t, e, i) {
            "use strict";

            function r(t, e, i) {
                return 2 * Math.atan(i * Math.tan(t / 2) / e)
            }

            function n(t, e, i) {
                return r(t, e, i)
            }

            function o(t, e, i) {
                return r(t, e, Math.sqrt(e * e + i * i))
            }

            function s(t, e, i) {
                return r(t, i, e)
            }

            function a(t, e, i) {
                return r(t, i, Math.sqrt(e * e + i * i))
            }

            function l(t, e, i) {
                return r(t, Math.sqrt(e * e + i * i), e)
            }

            function h(t, e, i) {
                return r(t, Math.sqrt(e * e + i * i), i)
            }
            e.exports = {
                convert: r,
                htov: n,
                htod: o,
                vtoh: s,
                vtod: a,
                dtoh: l,
                dtov: h
            }
        }, {}],
        94: [function (t, e, i) {
            "use strict";

            function r(t) {
                return t.toPrecision(15)
            }
            e.exports = r
        }, {}],
        95: [function (t, e, i) {
            "use strict";

            function r(t, e) {
                for (var i in e) i in t || (t[i] = e[i]);
                return t
            }
            e.exports = r
        }, {}],
        96: [function (t, e, i) {
            "use strict";

            function r(t, e) {
                function i() {
                    e && e.length > 0 ? t.apply(null, e) : t()
                }
                setTimeout(i, 0)
            }
            e.exports = r
        }, {}],
        97: [function (t, e, i) {
            "use strict";

            function r(t) {
                return t * Math.PI / 180
            }
            e.exports = r
        }, {}],
        98: [function (t, e, i) {
            "use strict";

            function r(t, e) {
                function i() {
                    null != n && (n = null, e(null))
                }

                function r() {
                    null != n && (clearTimeout(n), n = null, e.apply(null, arguments))
                }
                var n = null;
                return n = setTimeout(i, t), r
            }
            e.exports = r
        }, {}],
        99: [function (t, e, i) {
            "use strict";

            function r(t) {
                for (var e = document.documentElement.style, i = ["Moz", "Webkit", "Khtml", "O", "ms"], r = 0; r < i.length; r++) {
                    var n = i[r],
                        o = t[0].toUpperCase() + t.slice(1),
                        s = n + o;
                    if (s in e) return s
                }
                return t
            }

            function n(t) {
                var e = r(t);
                return function (t) {
                    return t.style[e]
                }
            }

            function o(t) {
                var e = r(t);
                return function (t, i) {
                    return t.style[e] = i
                }
            }

            function s(t) {
                _(t, "translateZ(0)")
            }

            function a(t) {
                y(t, "0 0 0")
            }

            function l(t) {
                t.style.position = "absolute"
            }

            function h(t, e, i) {
                t.style.left = e + "px", t.style.top = i + "px"
            }

            function u(t, e, i) {
                t.style.width = e + "px", t.style.height = i + "px"
            }

            function c(t) {
                t.style.width = t.style.height = 0
            }

            function p(t) {
                t.style.width = t.style.height = "100%"
            }

            function d(t) {
                t.style.overflow = "hidden"
            }

            function f(t) {
                t.style.overflow = "visible"
            }

            function m(t) {
                t.style.pointerEvents = "none"
            }

            function v(t) {
                t.style.backgroundColor = "#000", t.style.opacity = "0", t.style.filter = "alpha(opacity=0)"
            }
            var _ = o("transform"),
                y = o("transformOrigin");
            e.exports = {
                prefixProperty: r,
                getWithVendorPrefix: n,
                setWithVendorPrefix: o,
                setTransform: _,
                setTransformOrigin: y,
                setNullTransform: s,
                setNullTransformOrigin: a,
                setAbsolute: l,
                setPixelPosition: h,
                setPixelSize: u,
                setNullSize: c,
                setFullSize: p,
                setOverflowHidden: d,
                setOverflowVisible: f,
                setNoPointerEvents: m,
                setBlocking: v
            }
        }, {}],
        100: [function (t, e, i) {
            "use strict";

            function r(t, e) {
                for (var i in e) t[i] = e[i];
                return t
            }
            e.exports = r
        }, {}],
        101: [function (t, e, i) {
            (function (t) {
                "use strict";
                var i = function () {
                    return "undefined" != typeof window ? window : "undefined" != typeof self ? self : void 0 !== t ? t : null
                }();
                e.exports = i
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        102: [function (t, e, i) {
            "use strict";

            function r() {
                for (var t = 0, e = 0; e < arguments.length; e++) {
                    var i = arguments[e];
                    t += i, t += i << 10, t ^= i >> 6
                }
                return t += t << 3, t ^= t >> 11, t += t << 15, t >= 0 ? t : -t
            }
            e.exports = r
        }, {}],
        103: [function (t, e, i) {
            "use strict";

            function r(t, e) {
                t.super_ = e;
                var i = function () {};
                i.prototype = e.prototype, t.prototype = new i, t.prototype.constructor = t
            }
            e.exports = r
        }, {}],
        104: [function (t, e, i) {
            "use strict";

            function r(t) {
                return 0 == (t & t - 1)
            }
            e.exports = r
        }, {}],
        105: [function (t, e, i) {
            "use strict";

            function r(t, e) {
                return (+t % (e = +e) + e) % e
            }
            e.exports = r
        }, {}],
        106: [function (t, e, i) {
            "use strict";

            function r() {}
            e.exports = r
        }, {}],
        107: [function (t, e, i) {
            "use strict";
            e.exports = function () {
                return "undefined" != typeof performance && performance.now ? function () {
                    return performance.now()
                } : function () {
                    return Date.now()
                }
            }()
        }, {}],
        108: [function (t, e, i) {
            "use strict";

            function r(t) {
                var e, i = !1;
                return function () {
                    return i || (i = !0, e = t.apply(null, arguments)), e
                }
            }
            e.exports = r
        }, {}],
        109: [function (t, e, i) {
            "use strict";

            function r() {
                if ("undefined" != typeof window) {
                    if (window.devicePixelRatio) return window.devicePixelRatio;
                    var t = window.screen;
                    if (t && t.deviceXDPI && t.logicalXDPI) return t.deviceXDPI / t.logicalXDPI;
                    if (t && t.systemXDPI && t.logicalXDPI) return t.systemXDPI / t.logicalXDPI
                }
                return n
            }
            var n = 1;
            e.exports = r
        }, {}],
        110: [function (t, e, i) {
            "use strict";

            function r(t, e, i, r) {
                if (r = r || "", n()) {
                    var l = "translateX(" + a(e) + "px) translateY(" + a(i) + "px) translateZ(0) " + r;
                    o(t, l)
                } else s(t, e, i)
            }
            var n = t("../support/Css"),
                o = t("./dom").setTransform,
                s = t("./dom").setPixelPosition,
                a = t("./decimal");
            e.exports = r
        }, {
            "../support/Css": 81,
            "./decimal": 94,
            "./dom": 99
        }],
        111: [function (t, e, i) {
            "use strict";

            function r(t) {
                return 180 * t / Math.PI
            }
            e.exports = r
        }, {}],
        112: [function (t, e, i) {
            "use strict";

            function r(t) {
                return "number" == typeof t && isFinite(t)
            }
            e.exports = r
        }, {}],
        113: [function (t, e, i) {
            "use strict";

            function r(t) {
                return function () {
                    function e() {
                        !arguments[0] || s ? r.apply(null, arguments) : o = t.apply(null, i)
                    }
                    var i = arguments.length ? Array.prototype.slice.call(arguments, 0, arguments.length - 1) : [],
                        r = arguments.length ? arguments[arguments.length - 1] : n,
                        o = null,
                        s = !1;
                    return i.push(e), e(!0),
                        function () {
                            s = !0, o.apply(null, arguments)
                        }
                }
            }
            var n = t("./noop");
            e.exports = r
        }, {
            "./noop": 106
        }],
        114: [function (t, e, i) {
            "use strict";

            function r(t, e, i) {
                function r() {
                    if (!o) {
                        var a = (n() - s) / t;
                        a < 1 ? (e(a), requestAnimationFrame(r)) : (e(1), i())
                    }
                }
                var o = !1,
                    s = n();
                return e(0), requestAnimationFrame(r),
                    function () {
                        o = !0, i.apply(null, arguments)
                    }
            }
            var n = t("./now");
            e.exports = r
        }, {
            "./now": 107
        }],
        115: [function (t, e, i) {
            "use strict";

            function r(t) {
                var e = typeof t;
                if ("object" === e) {
                    if (null === t) return "null";
                    if ("[object Array]" === Object.prototype.toString.call(t)) return "array";
                    if ("[object RegExp]" === Object.prototype.toString.call(t)) return "regexp"
                }
                return e
            }
            e.exports = r
        }, {}],
        116: [function (t, e, i) {
            "use strict";

            function r(t, e) {
                if (!t || null == t.mediaAspectRatio) throw new Error("mediaAspectRatio must be defined");
                this._x = t && null != t.x ? t.x : d, this._y = t && null != t.y ? t.y : f, this._zoom = t && null != t.zoom ? t.zoom : m, this._mediaAspectRatio = t.mediaAspectRatio, this._width = t && null != t.width ? t.width : c, this._height = t && null != t.height ? t.height : p, this._limiter = e || null, this._projMatrix = o.create(), this._invProjMatrix = o.create(), this._frustum = [0, 0, 0, 0], this._projectionChanged = !0, this._params = {}, this._vec = s.create(), this._update()
            }
            var n = t("minimal-event-emitter"),
                o = t("gl-matrix").mat4,
                s = t("gl-matrix").vec4,
                a = t("../util/pixelRatio"),
                l = t("../util/real"),
                h = t("../util/clamp"),
                u = t("../util/clearOwnProperties"),
                c = 0,
                p = 0,
                d = .5,
                f = .5,
                m = 1,
                v = [1, 0, 1, 0],
                _ = [-1, -1, 1, 1];
            n(r), r.prototype.destroy = function () {
                u(this)
            }, r.prototype.x = function () {
                return this._x
            }, r.prototype.y = function () {
                return this._y
            }, r.prototype.zoom = function () {
                return this._zoom
            }, r.prototype.mediaAspectRatio = function () {
                return this._mediaAspectRatio
            }, r.prototype.width = function () {
                return this._width
            }, r.prototype.height = function () {
                return this._height
            }, r.prototype.size = function (t) {
                return t = t || {}, t.width = this._width, t.height = this._height, t
            }, r.prototype.parameters = function (t) {
                return t = t || {}, t.x = this._x, t.y = this._y, t.zoom = this._zoom, t.mediaAspectRatio = this._mediaAspectRatio, t
            }, r.prototype.limiter = function () {
                return this._limiter
            }, r.prototype.setX = function (t) {
                this._resetParams(), this._params.x = t, this._update(this._params)
            }, r.prototype.setY = function (t) {
                this._resetParams(), this._params.y = t, this._update(this._params)
            }, r.prototype.setZoom = function (t) {
                this._resetParams(), this._params.zoom = t, this._update(this._params)
            }, r.prototype.offsetX = function (t) {
                this.setX(this._x + t)
            }, r.prototype.offsetY = function (t) {
                this.setY(this._y + t)
            }, r.prototype.offsetZoom = function (t) {
                this.setZoom(this._zoom + t)
            }, r.prototype.setMediaAspectRatio = function (t) {
                this._resetParams(), this._params.mediaAspectRatio = t, this._update(this._params)
            }, r.prototype.setSize = function (t) {
                this._resetParams(), this._params.width = t.width, this._params.height = t.height, this._update(this._params)
            }, r.prototype.setParameters = function (t) {
                this._resetParams(), this._params.x = t.x, this._params.y = t.y, this._params.zoom = t.zoom, this._params.mediaAspectRatio = t.mediaAspectRatio, this._update(this._params)
            }, r.prototype.setLimiter = function (t) {
                this._limiter = t || null, this._update()
            }, r.prototype._resetParams = function () {
                var t = this._params;
                t.x = null, t.y = null, t.zoom = null, t.mediaAspectRatio = null, t.width = null, t.height = null
            }, r.prototype._update = function (t) {
                null == t && (this._resetParams(), t = this._params);
                var e = this._x,
                    i = this._y,
                    r = this._zoom,
                    n = this._mediaAspectRatio,
                    o = this._width,
                    s = this._height;
                if (t.x = null != t.x ? t.x : e, t.y = null != t.y ? t.y : i, t.zoom = null != t.zoom ? t.zoom : r, t.mediaAspectRatio = null != t.mediaAspectRatio ? t.mediaAspectRatio : n, t.width = null != t.width ? t.width : o, t.height = null != t.height ? t.height : s, this._limiter && !(t = this._limiter(t))) throw new Error("Bad view limiter");
                var a = t.x,
                    u = t.y,
                    c = t.zoom,
                    p = t.mediaAspectRatio,
                    d = t.width,
                    f = t.height;
                if (!(l(a) && l(u) && l(c) && l(p) && l(d) && l(f))) throw new Error("Bad view - suspect a broken limiter");
                c = h(c, 1e-6, Infinity), this._x = a, this._y = u, this._zoom = c, this._mediaAspectRatio = p, this._width = d, this._height = f, a === e && u === i && c === r && p === n && d === o && f === s || (this._projectionChanged = !0, this.emit("change")), d === o && f === s || this.emit("resize")
            }, r.prototype._zoomX = function () {
                return this._zoom
            }, r.prototype._zoomY = function () {
                var t = this._mediaAspectRatio,
                    e = this._width / this._height,
                    i = this._zoom,
                    r = i * t / e;
                return isNaN(r) && (r = i), r
            }, r.prototype.updateWithControlParameters = function (t) {
                var e = this.zoom(),
                    i = this._zoomX(),
                    r = this._zoomY();
                this.offsetX(t.axisScaledX * i + t.x * e), this.offsetY(t.axisScaledY * r + t.y * e), this.offsetZoom(t.zoom * e)
            }, r.prototype._updateProjection = function () {
                var t = this._projMatrix,
                    e = this._invProjMatrix,
                    i = this._frustum;
                if (this._projectionChanged) {
                    var r = this._x,
                        n = this._y,
                        s = this._zoomX(),
                        a = this._zoomY(),
                        l = i[0] = .5 - n + .5 * a,
                        h = i[1] = r - .5 + .5 * s,
                        u = i[2] = .5 - n - .5 * a,
                        c = i[3] = r - .5 - .5 * s;
                    o.ortho(t, c, h, u, l, -1, 1), o.invert(e, t), this._projectionChanged = !1
                }
            }, r.prototype.projection = function () {
                return this._updateProjection(), this._projMatrix
            }, r.prototype.inverseProjection = function () {
                return this._updateProjection(), this._invProjMatrix
            }, r.prototype.intersects = function (t) {
                this._updateProjection();
                for (var e = this._frustum, i = 0; i < e.length; i++) {
                    for (var r = e[i], n = v[i], o = _[i], s = !1, a = 0; a < t.length; a++) {
                        var l = t[a];
                        if (o < 0 && l[n] < r || o > 0 && l[n] > r) {
                            s = !0;
                            break
                        }
                    }
                    if (!s) return !1
                }
                return !0
            }, r.prototype.selectLevel = function (t) {
                for (var e = a() * this.width(), i = this._zoom, r = 0; r < t.length; r++) {
                    var n = t[r];
                    if (i * n.width() >= e) return n
                }
                return t[t.length - 1]
            }, r.prototype.coordinatesToScreen = function (t, e) {
                var i = this._vec;
                e || (e = {});
                var r = this._width,
                    n = this._height;
                if (r <= 0 || n <= 0) return e.x = null, e.y = null, null;
                var o = t && null != t.x ? t.x : d,
                    a = t && null != t.y ? t.y : f;
                s.set(i, o - .5, .5 - a, -1, 1), s.transformMat4(i, i, this.projection());
                for (var l = 0; l < 3; l++) i[l] /= i[3];
                return e.x = r * (i[0] + 1) / 2, e.y = n * (1 - i[1]) / 2, e
            }, r.prototype.screenToCoordinates = function (t, e) {
                var i = this._vec;
                e || (e = {});
                var r = this._width,
                    n = this._height,
                    o = 2 * t.x / r - 1,
                    a = 1 - 2 * t.y / n;
                return s.set(i, o, a, 1, 1), s.transformMat4(i, i, this.inverseProjection()), e.x = .5 + i[0], e.y = .5 - i[1], e
            }, r.limit = {
                x: function (t, e) {
                    return function (i) {
                        return i.x = h(i.x, t, e), i
                    }
                },
                y: function (t, e) {
                    return function (i) {
                        return i.y = h(i.y, t, e), i
                    }
                },
                zoom: function (t, e) {
                    return function (i) {
                        return i.zoom = h(i.zoom, t, e), i
                    }
                },
                resolution: function (t) {
                    return function (e) {
                        if (e.width <= 0 || e.height <= 0) return e;
                        var i = e.width,
                            r = a() * i / t;
                        return e.zoom = h(e.zoom, r, Infinity), e
                    }
                },
                visibleX: function (t, e) {
                    return function (i) {
                        var r = e - t;
                        i.zoom > r && (i.zoom = r);
                        var n = t + .5 * i.zoom,
                            o = e - .5 * i.zoom;
                        return i.x = h(i.x, n, o), i
                    }
                },
                visibleY: function (t, e) {
                    return function (i) {
                        if (i.width <= 0 || i.height <= 0) return i;
                        var r = i.width / i.height,
                            n = r / i.mediaAspectRatio,
                            o = (e - t) * n;
                        i.zoom > o && (i.zoom = o);
                        var s = t + .5 * i.zoom / n,
                            a = e - .5 * i.zoom / n;
                        return i.y = h(i.y, s, a), i
                    }
                },
                letterbox: function () {
                    return function (t) {
                        if (t.width <= 0 || t.height <= 0) return t;
                        var e = t.width / t.height,
                            i = e / t.mediaAspectRatio;
                        t.mediaAspectRatio >= e && (t.zoom = Math.min(t.zoom, 1)), t.mediaAspectRatio <= e && (t.zoom = Math.min(t.zoom, i));
                        var r, n;
                        t.zoom > 1 ? r = n = .5 : (r = 0 + .5 * t.zoom / 1, n = 1 - .5 * t.zoom / 1);
                        var o, s;
                        return t.zoom > i ? o = s = .5 : (o = 0 + .5 * t.zoom / i, s = 1 - .5 * t.zoom / i), t.x = h(t.x, r, n), t.y = h(t.y, o, s), t
                    }
                }
            }, r.type = r.prototype.type = "flat", e.exports = r
        }, {
            "../util/clamp": 89,
            "../util/clearOwnProperties": 90,
            "../util/pixelRatio": 109,
            "../util/real": 112,
            "gl-matrix": 2,
            "minimal-event-emitter": 13
        }],
        117: [function (t, e, i) {
            "use strict";

            function r(t, e) {
                this._yaw = t && null != t.yaw ? t.yaw : _, this._pitch = t && null != t.pitch ? t.pitch : y, this._roll = t && null != t.roll ? t.roll : g, this._fov = t && null != t.fov ? t.fov : x, this._width = t && null != t.width ? t.width : m, this._height = t && null != t.height ? t.height : v, this._projectionCenterX = t && null != t.projectionCenterX ? t.projectionCenterX : w,
                    this._projectionCenterY = t && null != t.projectionCenterY ? t.projectionCenterY : M, this._limiter = e || null, this._projMatrix = o.create(), this._invProjMatrix = o.create(), this._frustum = [s.create(), s.create(), s.create(), s.create(), s.create()], this._projectionChanged = !0, this._params = {}, this._fovs = {}, this._tmpVec = s.create(), this._update()
            }
            var n = t("minimal-event-emitter"),
                o = t("gl-matrix").mat4,
                s = t("gl-matrix").vec4,
                a = t("../util/pixelRatio"),
                l = t("../util/convertFov"),
                h = t("../util/mod"),
                u = t("../util/real"),
                c = t("../util/clamp"),
                p = t("../util/decimal"),
                d = t("../util/compose"),
                f = t("../util/clearOwnProperties"),
                m = 0,
                v = 0,
                _ = 0,
                y = 0,
                g = 0,
                x = Math.PI / 4,
                w = 0,
                M = 0;
            n(r), r.prototype.destroy = function () {
                f(this)
            }, r.prototype.yaw = function () {
                return this._yaw
            }, r.prototype.pitch = function () {
                return this._pitch
            }, r.prototype.roll = function () {
                return this._roll
            }, r.prototype.projectionCenterX = function () {
                return this._projectionCenterX
            }, r.prototype.projectionCenterY = function () {
                return this._projectionCenterY
            }, r.prototype.fov = function () {
                return this._fov
            }, r.prototype.width = function () {
                return this._width
            }, r.prototype.height = function () {
                return this._height
            }, r.prototype.size = function (t) {
                return t = t || {}, t.width = this._width, t.height = this._height, t
            }, r.prototype.parameters = function (t) {
                return t = t || {}, t.yaw = this._yaw, t.pitch = this._pitch, t.roll = this._roll, t.fov = this._fov, t
            }, r.prototype.limiter = function () {
                return this._limiter
            }, r.prototype.setYaw = function (t) {
                this._resetParams(), this._params.yaw = t, this._update(this._params)
            }, r.prototype.setPitch = function (t) {
                this._resetParams(), this._params.pitch = t, this._update(this._params)
            }, r.prototype.setRoll = function (t) {
                this._resetParams(), this._params.roll = t, this._update(this._params)
            }, r.prototype.setFov = function (t) {
                this._resetParams(), this._params.fov = t, this._update(this._params)
            }, r.prototype.setProjectionCenterX = function (t) {
                this._resetParams(), this._params.projectionCenterX = t, this._update(this._params)
            }, r.prototype.setProjectionCenterY = function (t) {
                this._resetParams(), this._params.projectionCenterY = t, this._update(this._params)
            }, r.prototype.offsetYaw = function (t) {
                this.setYaw(this._yaw + t)
            }, r.prototype.offsetPitch = function (t) {
                this.setPitch(this._pitch + t)
            }, r.prototype.offsetRoll = function (t) {
                this.setRoll(this._roll + t)
            }, r.prototype.offsetFov = function (t) {
                this.setFov(this._fov + t)
            }, r.prototype.setSize = function (t) {
                this._resetParams(), this._params.width = t.width, this._params.height = t.height, this._update(this._params)
            }, r.prototype.setParameters = function (t) {
                this._resetParams(), this._params.yaw = t.yaw, this._params.pitch = t.pitch, this._params.roll = t.roll, this._params.fov = t.fov, this._params.projectionCenterX = t.projectionCenterX, this._params.projectionCenterY = t.projectionCenterY, this._update(this._params)
            }, r.prototype.setLimiter = function (t) {
                this._limiter = t || null, this._update()
            }, r.prototype._resetParams = function () {
                var t = this._params;
                t.yaw = null, t.pitch = null, t.roll = null, t.fov = null, t.width = null, t.height = null
            }, r.prototype._update = function (t) {
                null == t && (this._resetParams(), t = this._params);
                var e = this._yaw,
                    i = this._pitch,
                    r = this._roll,
                    n = this._fov,
                    o = this._projectionCenterX,
                    s = this._projectionCenterY,
                    a = this._width,
                    l = this._height;
                if (t.yaw = null != t.yaw ? t.yaw : e, t.pitch = null != t.pitch ? t.pitch : i, t.roll = null != t.roll ? t.roll : r, t.fov = null != t.fov ? t.fov : n, t.width = null != t.width ? t.width : a, t.height = null != t.height ? t.height : l, t.projectionCenterX = null != t.projectionCenterX ? t.projectionCenterX : o, t.projectionCenterY = null != t.projectionCenterY ? t.projectionCenterY : s, this._limiter && !(t = this._limiter(t))) throw new Error("Bad view limiter");
                t = this._normalize(t);
                var h = t.yaw,
                    c = t.pitch,
                    p = t.roll,
                    d = t.fov,
                    f = t.width,
                    m = t.height,
                    v = t.projectionCenterX,
                    _ = t.projectionCenterY;
                if (!(u(h) && u(c) && u(p) && u(d) && u(f) && u(m) && u(v) && u(_))) throw new Error("Bad view - suspect a broken limiter");
                this._yaw = h, this._pitch = c, this._roll = p, this._fov = d, this._width = f, this._height = m, this._projectionCenterX = v, this._projectionCenterY = _, h === e && c === i && p === r && d === n && f === a && m === l && v === o && _ === s || (this._projectionChanged = !0, this.emit("change")), f === a && m === l || this.emit("resize")
            }, r.prototype._normalize = function (t) {
                this._normalizeCoordinates(t);
                var e = l.htov(Math.PI, t.width, t.height),
                    i = isNaN(e) ? Math.PI : Math.min(Math.PI, e);
                return t.fov = c(t.fov, 1e-6, i - 1e-6), t
            }, r.prototype._normalizeCoordinates = function (t) {
                return "yaw" in t && (t.yaw = h(t.yaw - Math.PI, -2 * Math.PI) + Math.PI), "pitch" in t && (t.pitch = h(t.pitch - Math.PI, -2 * Math.PI) + Math.PI), "roll" in t && (t.roll = h(t.roll - Math.PI, -2 * Math.PI) + Math.PI), t
            }, r.prototype.normalizeToClosest = function (t, e) {
                var i = this._yaw,
                    r = this._pitch,
                    n = t.yaw,
                    o = t.pitch,
                    s = n - 2 * Math.PI,
                    a = n + 2 * Math.PI;
                Math.abs(s - i) < Math.abs(n - i) ? n = s : Math.abs(a - i) < Math.abs(n - i) && (n = a);
                var l = o - 2 * Math.PI,
                    h = o + 2 * Math.PI;
                return Math.abs(l - r) < Math.abs(o - r) ? o = l : Math.abs(l - r) < Math.abs(o - r) && (o = h), e = e || {}, e.yaw = n, e.pitch = o, e
            }, r.prototype.updateWithControlParameters = function (t) {
                var e = this._fov,
                    i = l.vtoh(e, this._width, this._height);
                isNaN(i) && (i = e), this.offsetYaw(t.axisScaledX * i + 2 * t.x * i + t.yaw), this.offsetPitch(t.axisScaledY * e + 2 * t.y * i + t.pitch), this.offsetRoll(-t.roll), this.offsetFov(t.zoom * e)
            }, r.prototype._updateProjection = function () {
                var t = this._projMatrix,
                    e = this._invProjMatrix,
                    i = this._frustum;
                if (this._projectionChanged) {
                    var r = this._width,
                        n = this._height,
                        s = this._fov,
                        a = l.vtoh(s, r, n),
                        h = r / n,
                        u = this._projectionCenterX,
                        c = this._projectionCenterY;
                    if (0 !== u || 0 !== c) {
                        var p = Math.atan(2 * u * Math.tan(a / 2)),
                            d = Math.atan(2 * c * Math.tan(s / 2)),
                            f = this._fovs;
                        f.leftDegrees = 180 * (a / 2 + p) / Math.PI, f.rightDegrees = 180 * (a / 2 - p) / Math.PI, f.upDegrees = 180 * (s / 2 + d) / Math.PI, f.downDegrees = 180 * (s / 2 - d) / Math.PI, o.perspectiveFromFieldOfView(t, f, -1, 1)
                    } else o.perspective(t, s, h, -1, 1);
                    o.rotateZ(t, t, this._roll), o.rotateX(t, t, this._pitch), o.rotateY(t, t, this._yaw), o.invert(e, t), this._matrixToFrustum(t, i), this._projectionChanged = !1
                }
            }, r.prototype._matrixToFrustum = function (t, e) {
                s.set(e[0], t[3] + t[0], t[7] + t[4], t[11] + t[8], 0), s.set(e[1], t[3] - t[0], t[7] - t[4], t[11] - t[8], 0), s.set(e[2], t[3] + t[1], t[7] + t[5], t[11] + t[9], 0), s.set(e[3], t[3] - t[1], t[7] - t[5], t[11] - t[9], 0), s.set(e[4], t[3] + t[2], t[7] + t[6], t[11] + t[10], 0)
            }, r.prototype.projection = function () {
                return this._updateProjection(), this._projMatrix
            }, r.prototype.inverseProjection = function () {
                return this._updateProjection(), this._invProjMatrix
            }, r.prototype.intersects = function (t) {
                this._updateProjection();
                for (var e = this._frustum, i = this._tmpVec, r = 0; r < e.length; r++) {
                    for (var n = e[r], o = !1, a = 0; a < t.length; a++) {
                        var l = t[a];
                        s.set(i, l[0], l[1], l[2], 0), s.dot(n, i) >= 0 && (o = !0)
                    }
                    if (!o) return !1
                }
                return !0
            }, r.prototype.selectLevel = function (t) {
                for (var e = a() * this._height, i = Math.tan(.5 * this._fov), r = 0; r < t.length; r++) {
                    var n = t[r];
                    if (i * n.height() >= e) return n
                }
                return t[t.length - 1]
            }, r.prototype.coordinatesToScreen = function (t, e) {
                var i = this._tmpVec;
                e || (e = {});
                var r = this._width,
                    n = this._height;
                if (r <= 0 || n <= 0) return e.x = null, e.y = null, null;
                var o = t.yaw,
                    a = t.pitch,
                    l = Math.sin(o) * Math.cos(a),
                    h = -Math.sin(t.pitch),
                    u = -Math.cos(o) * Math.cos(a);
                return s.set(i, l, h, u, 1), s.transformMat4(i, i, this.projection()), i[3] >= 0 ? (e.x = r * (i[0] / i[3] + 1) / 2, e.y = n * (1 - i[1] / i[3]) / 2, e) : (e.x = null, e.y = null, null)
            }, r.prototype.screenToCoordinates = function (t, e) {
                var i = this._tmpVec;
                e || (e = {});
                var r = this._width,
                    n = this._height,
                    o = 2 * t.x / r - 1,
                    a = 1 - 2 * t.y / n;
                s.set(i, o, a, 1, 1), s.transformMat4(i, i, this.inverseProjection());
                var l = Math.sqrt(i[0] * i[0] + i[1] * i[1] + i[2] * i[2]);
                return e.yaw = Math.atan2(i[0], -i[2]), e.pitch = Math.acos(i[1] / l) - Math.PI / 2, this._normalizeCoordinates(e), e
            }, r.prototype.coordinatesToPerspectiveTransform = function (t, e, i) {
                i = i || "";
                var r = this._height,
                    n = this._width,
                    o = this._fov,
                    s = .5 * r / Math.tan(o / 2),
                    a = "";
                return a += "translateX(" + p(n / 2) + "px) ", a += "translateY(" + p(r / 2) + "px) ", a += "translateX(-50%) translateY(-50%) ", a += "perspective(" + p(s) + "px) ", a += "translateZ(" + p(s) + "px) ", a += "rotateZ(" + p(-this._roll) + "rad) ", a += "rotateX(" + p(-this._pitch) + "rad) ", a += "rotateY(" + p(this._yaw) + "rad) ", a += "rotateY(" + p(-t.yaw) + "rad) ", a += "rotateX(" + p(t.pitch) + "rad) ", a += "translateZ(" + p(-e) + "px) ", a += i + " "
            }, r.limit = {
                yaw: function (t, e) {
                    return function (i) {
                        return i.yaw = c(i.yaw, t, e), i
                    }
                },
                pitch: function (t, e) {
                    return function (i) {
                        return i.pitch = c(i.pitch, t, e), i
                    }
                },
                roll: function (t, e) {
                    return function (i) {
                        return i.roll = c(i.roll, t, e), i
                    }
                },
                hfov: function (t, e) {
                    return function (i) {
                        var r = i.width,
                            n = i.height;
                        if (r > 0 && n > 0) {
                            var o = l.htov(t, r, n),
                                s = l.htov(e, r, n);
                            i.fov = c(i.fov, o, s)
                        }
                        return i
                    }
                },
                vfov: function (t, e) {
                    return function (i) {
                        return i.fov = c(i.fov, t, e), i
                    }
                },
                resolution: function (t) {
                    return function (e) {
                        var i = e.height;
                        if (i) {
                            var r = a() * i,
                                n = 2 * Math.atan(r / t);
                            e.fov = c(e.fov, n, Infinity)
                        }
                        return e
                    }
                },
                traditional: function (t, e, i) {
                    return i = null != i ? i : e, d(r.limit.resolution(t), r.limit.vfov(0, e), r.limit.hfov(0, i), r.limit.pitch(-Math.PI / 2, Math.PI / 2))
                }
            }, r.type = r.prototype.type = "rectilinear", e.exports = r
        }, {
            "../util/clamp": 89,
            "../util/clearOwnProperties": 90,
            "../util/compose": 92,
            "../util/convertFov": 93,
            "../util/decimal": 94,
            "../util/mod": 105,
            "../util/pixelRatio": 109,
            "../util/real": 112,
            "gl-matrix": 2,
            "minimal-event-emitter": 13
        }]
    }, {}, [55])(55)
});