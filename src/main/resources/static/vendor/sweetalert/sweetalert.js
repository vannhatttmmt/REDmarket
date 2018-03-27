!function (n, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : n.Sweetalert2 = t()
}(this, function () {
    "use strict";
    var n = {
            title: "",
            titleText: "",
            text: "",
            html: "",
            footer: "",
            type: null,
            toast: !1,
            customClass: "",
            target: "body",
            backdrop: !0,
            animation: !0,
            allowOutsideClick: !0,
            allowEscapeKey: !0,
            allowEnterKey: !0,
            showConfirmButton: !0,
            showCancelButton: !1,
            preConfirm: null,
            confirmButtonText: "OK",
            confirmButtonAriaLabel: "",
            confirmButtonColor: null,
            confirmButtonClass: null,
            cancelButtonText: "Cancel",
            cancelButtonAriaLabel: "",
            cancelButtonColor: null,
            cancelButtonClass: null,
            buttonsStyling: !0,
            reverseButtons: !1,
            focusConfirm: !0,
            focusCancel: !1,
            showCloseButton: !1,
            closeButtonAriaLabel: "Close this dialog",
            showLoaderOnConfirm: !1,
            imageUrl: null,
            imageWidth: null,
            imageHeight: null,
            imageAlt: "",
            imageClass: null,
            timer: null,
            width: null,
            padding: null,
            background: null,
            input: null,
            inputPlaceholder: "",
            inputValue: "",
            inputOptions: {},
            inputAutoTrim: !0,
            inputClass: null,
            inputAttributes: {},
            inputValidator: null,
            grow: !1,
            position: "center",
            progressSteps: [],
            currentProgressStep: null,
            progressStepsDistance: null,
            onBeforeOpen: null,
            onOpen: null,
            onClose: null,
            useRejections: !1,
            expectRejections: !1
        }, t = ["useRejections", "expectRejections"], e = function (n) {
            var t = {};
            for (var e in n) t[n[e]] = "swal2-" + n[e];
            return t
        },
        o = e(["container", "shown", "iosfix", "popup", "modal", "no-backdrop", "toast", "toast-shown", "overlay", "fade", "show", "hide", "noanimation", "close", "title", "header", "content", "actions", "confirm", "cancel", "footer", "icon", "image", "input", "has-input", "file", "range", "select", "radio", "checkbox", "textarea", "inputerror", "validationerror", "progresssteps", "activeprogressstep", "progresscircle", "progressline", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen"]),
        a = e(["success", "warning", "info", "question", "error"]), s = "SweetAlert2:", r = function (n) {
            if (n instanceof Map) return n;
            var t = new Map;
            return Object.keys(n).forEach(function (e) {
                t.set(e, n[e])
            }), t
        }, i = function (n) {
            console.warn(s + " " + n)
        }, l = function (n) {
            console.error(s + " " + n)
        }, c = [], p = function (n) {
            -1 === c.indexOf(n) && (c.push(n), i(n))
        }, w = function (n) {
            return "function" == typeof n ? n() : n
        }, u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
            return typeof n
        } : function (n) {
            return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
        }, d = Object.assign || function (n) {
            for (var t = 1; t < arguments.length; t++) {
                var e = arguments[t];
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o])
            }
            return n
        }, f = function () {
            return function (n, t) {
                if (Array.isArray(n)) return n;
                if (Symbol.iterator in Object(n)) return function (n, t) {
                    var e = [], o = !0, a = !1, s = void 0;
                    try {
                        for (var r, i = n[Symbol.iterator](); !(o = (r = i.next()).done) && (e.push(r.value), !t || e.length !== t); o = !0) ;
                    } catch (n) {
                        a = !0, s = n
                    } finally {
                        try {
                            !o && i.return && i.return()
                        } finally {
                            if (a) throw s
                        }
                    }
                    return e
                }(n, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(), m = d({}, n), b = [], g = void 0, h = void 0, x = function (n) {
            for (var t in n) A.isValidParameter(t) || i('Unknown parameter "' + t + '"'), A.isDeprecatedParameter(t) && p('The parameter "' + t + '" is deprecated and will be removed in the next major release.')
        }, k = function (n) {
            (!n.target || "string" == typeof n.target && !document.querySelector(n.target) || "string" != typeof n.target && !n.target.appendChild) && (i('Target parameter is not valid, defaulting to "body"'), n.target = "body");
            var t = void 0, e = L(), s = "string" == typeof n.target ? document.querySelector(n.target) : n.target;
            t = e && s && e.parentNode !== s.parentNode ? B(n) : e || B(n), n.width && (t.style.width = "number" == typeof n.width ? n.width + "px" : n.width), n.padding && (t.style.padding = "number" == typeof n.padding ? n.padding + "px" : n.padding), n.background && (t.style.background = n.background);
            for (var r = window.getComputedStyle(t).getPropertyValue("background-color"), c = t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"), p = 0; p < c.length; p++) c[p].style.backgroundColor = r;
            var w = P(), u = z(), d = V().querySelector("#" + o.content), f = I(), m = N(), b = R(), g = M(), h = H();
            if (n.titleText ? u.innerText = n.titleText : n.title && (u.innerHTML = n.title.split("\n").join("<br />")), "string" == typeof n.backdrop ? P().style.background = n.backdrop : n.backdrop || G([document.documentElement, document.body], o["no-backdrop"]), n.html ? X(n.html, d) : n.text ? (d.textContent = n.text, nn(d)) : tn(d), n.position in o ? G(w, o[n.position]) : (i('The "position" parameter is not valid, defaulting to "center"'), G(w, o.center)), n.grow && "string" == typeof n.grow) {
                var x = "grow-" + n.grow;
                x in o && G(w, o[x])
            }
            n.showCloseButton ? (g.setAttribute("aria-label", n.closeButtonAriaLabel), nn(g)) : tn(g), t.className = o.popup, n.toast ? (G([document.documentElement, document.body], o["toast-shown"]), G(t, o.toast)) : G(t, o.modal), n.customClass && G(t, n.customClass);
            var k = O(), y = parseInt(null === n.currentProgressStep ? A.getQueueStep() : n.currentProgressStep, 10);
            n.progressSteps && n.progressSteps.length ? (nn(k), en(k), y >= n.progressSteps.length && i("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), n.progressSteps.forEach(function (t, e) {
                var a = document.createElement("li");
                if (G(a, o.progresscircle), a.innerHTML = t, e === y && G(a, o.activeprogressstep), k.appendChild(a), e !== n.progressSteps.length - 1) {
                    var s = document.createElement("li");
                    G(s, o.progressline), n.progressStepsDistance && (s.style.width = n.progressStepsDistance), k.appendChild(s)
                }
            })) : tn(k);
            for (var v = T(), C = 0; C < v.length; C++) tn(v[C]);
            if (n.type) {
                var S = !1;
                for (var E in a) if (n.type === E) {
                    S = !0;
                    break
                }
                if (!S) return l("Unknown alert type: " + n.type), !1;
                var j = t.querySelector("." + o.icon + "." + a[n.type]);
                if (nn(j), n.animation) switch (n.type) {
                    case"success":
                        G(j, "swal2-animate-success-icon"), G(j.querySelector(".swal2-success-line-tip"), "swal2-animate-success-line-tip"), G(j.querySelector(".swal2-success-line-long"), "swal2-animate-success-line-long");
                        break;
                    case"error":
                        G(j, "swal2-animate-error-icon"), G(j.querySelector(".swal2-x-mark"), "swal2-animate-x-mark")
                }
            }
            var Y = q();
            if (n.imageUrl ? (Y.setAttribute("src", n.imageUrl), Y.setAttribute("alt", n.imageAlt), nn(Y), n.imageWidth ? Y.setAttribute("width", n.imageWidth) : Y.removeAttribute("width"), n.imageHeight ? Y.setAttribute("height", n.imageHeight) : Y.removeAttribute("height"), Y.className = o.image, n.imageClass && G(Y, n.imageClass)) : tn(Y), n.showCancelButton ? b.style.display = "inline-block" : tn(b), n.showConfirmButton ? an(m, "display") : tn(m), n.showConfirmButton || n.showCancelButton ? nn(f) : tn(f), m.innerHTML = n.confirmButtonText, b.innerHTML = n.cancelButtonText, m.setAttribute("aria-label", n.confirmButtonAriaLabel), b.setAttribute("aria-label", n.cancelButtonAriaLabel), m.className = o.confirm, G(m, n.confirmButtonClass), b.className = o.cancel, G(b, n.cancelButtonClass), n.buttonsStyling) {
                G([m, b], o.styled), n.confirmButtonColor && (m.style.backgroundColor = n.confirmButtonColor), n.cancelButtonColor && (b.style.backgroundColor = n.cancelButtonColor);
                var Z = window.getComputedStyle(m).getPropertyValue("background-color");
                m.style.borderLeftColor = Z, m.style.borderRightColor = Z
            } else F([m, b], o.styled), m.style.backgroundColor = m.style.borderLeftColor = m.style.borderRightColor = "", b.style.backgroundColor = b.style.borderLeftColor = b.style.borderRightColor = "";
            X(n.footer, h), !0 === n.animation ? F(t, o.noanimation) : G(t, o.noanimation), n.showLoaderOnConfirm && !n.preConfirm && i("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request")
        }, y = function () {
            null === C.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (C.previousBodyPadding = document.body.style.paddingRight, document.body.style.paddingRight = ln() + "px")
        }, v = function () {
            if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && !Q(document.body, o.iosfix)) {
                var n = document.body.scrollTop;
                document.body.style.top = -1 * n + "px", G(document.body, o.iosfix)
            }
        }, A = function n() {
            for (var t = arguments.length, e = Array(t), a = 0; a < t; a++) e[a] = arguments[a];
            if ("undefined" != typeof window) {
                if ("undefined" == typeof Promise && l("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"), void 0 === e[0]) return l("SweetAlert2 expects at least 1 attribute!"), !1;
                var s = d({}, m);
                switch (u(e[0])) {
                    case"string":
                        s.title = e[0], s.html = e[1], s.type = e[2];
                        break;
                    case"object":
                        if (x(e[0]), d(s, e[0]), s.extraParams = e[0].extraParams, "email" === s.input && null === s.inputValidator) {
                            var i = function (n) {
                                return new Promise(function (t, e) {
                                    /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(n) ? t() : e("Invalid email address")
                                })
                            };
                            s.inputValidator = s.expectRejections ? i : n.adaptInputValidator(i)
                        }
                        if ("url" === s.input && null === s.inputValidator) {
                            var c = function (n) {
                                return new Promise(function (t, e) {
                                    /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(n) ? t() : e("Invalid URL")
                                })
                            };
                            s.inputValidator = s.expectRejections ? c : n.adaptInputValidator(c)
                        }
                        break;
                    default:
                        return l('Unexpected type of argument! Expected "string" or "object", got ' + u(e[0])), !1
                }
                k(s);
                var p = P(), b = L();
                return new Promise(function (t, e) {
                    var a = function (e) {
                        n.closePopup(s.onClose), s.useRejections ? t(e) : t({value: e})
                    }, i = function (o) {
                        n.closePopup(s.onClose), s.useRejections ? e(o) : t({dismiss: o})
                    }, c = function (t) {
                        n.closePopup(s.onClose), e(t)
                    };
                    s.timer && (b.timeout = setTimeout(function () {
                        return i("timer")
                    }, s.timer));
                    var d = function (n) {
                        if (!(n = n || s.input)) return null;
                        switch (n) {
                            case"select":
                            case"textarea":
                            case"file":
                                return J(E, o[n]);
                            case"checkbox":
                                return b.querySelector("." + o.checkbox + " input");
                            case"radio":
                                return b.querySelector("." + o.radio + " input:checked") || b.querySelector("." + o.radio + " input:first-child");
                            case"range":
                                return b.querySelector("." + o.range + " input");
                            default:
                                return J(E, o.input)
                        }
                    };
                    s.input && setTimeout(function () {
                        var n = d();
                        n && W(n)
                    }, 0);
                    for (var m = function (t) {
                        if (s.showLoaderOnConfirm && n.showLoading(), s.preConfirm) {
                            n.resetValidationError();
                            var e = Promise.resolve().then(function () {
                                return s.preConfirm(t, s.extraParams)
                            });
                            s.expectRejections ? e.then(function (n) {
                                return a(n || t)
                            }, function (t) {
                                n.hideLoading(), t && n.showValidationError(t)
                            }) : e.then(function (e) {
                                on(Y()) ? n.hideLoading() : a(e || t)
                            }, function (n) {
                                return c(n)
                            })
                        } else a(t)
                    }, x = function (t) {
                        var e = t || window.event, o = e.target || e.srcElement, a = N(), r = R(),
                            l = a && (a === o || a.contains(o)), p = r && (r === o || r.contains(o));
                        switch (e.type) {
                            case"click":
                                if (l && n.isVisible()) if (n.disableButtons(), s.input) {
                                    var w = function () {
                                        var n = d();
                                        if (!n) return null;
                                        switch (s.input) {
                                            case"checkbox":
                                                return n.checked ? 1 : 0;
                                            case"radio":
                                                return n.checked ? n.value : null;
                                            case"file":
                                                return n.files.length ? n.files[0] : null;
                                            default:
                                                return s.inputAutoTrim ? n.value.trim() : n.value
                                        }
                                    }();
                                    if (s.inputValidator) {
                                        n.disableInput();
                                        var u = Promise.resolve().then(function () {
                                            return s.inputValidator(w, s.extraParams)
                                        });
                                        s.expectRejections ? u.then(function () {
                                            n.enableButtons(), n.enableInput(), m(w)
                                        }, function (t) {
                                            n.enableButtons(), n.enableInput(), t && n.showValidationError(t)
                                        }) : u.then(function (t) {
                                            n.enableButtons(), n.enableInput(), t ? n.showValidationError(t) : m(w)
                                        }, function (n) {
                                            return c(n)
                                        })
                                    } else m(w)
                                } else m(!0); else p && n.isVisible() && (n.disableButtons(), i("cancel"))
                        }
                    }, A = b.querySelectorAll("button"), S = 0; S < A.length; S++) A[S].onclick = x, A[S].onmouseover = x, A[S].onmouseout = x, A[S].onmousedown = x;
                    if (M().onclick = function () {
                            i("close")
                        }, s.toast) b.onclick = function (t) {
                        t.target !== b || s.showConfirmButton || s.showCancelButton || s.allowOutsideClick && (n.closePopup(s.onClose), i("overlay"))
                    }; else {
                        var B = !1;
                        b.onmousedown = function () {
                            p.onmouseup = function (n) {
                                p.onmouseup = void 0, n.target === p && (B = !0)
                            }
                        }, p.onmousedown = function () {
                            b.onmouseup = function (n) {
                                b.onmouseup = void 0, (n.target === b || b.contains(n.target)) && (B = !0)
                            }
                        }, p.onclick = function (n) {
                            B ? B = !1 : n.target === p && w(s.allowOutsideClick) && i("overlay")
                        }
                    }
                    var E = V(), T = I(), j = N(), X = R();
                    s.reverseButtons ? j.parentNode.insertBefore(X, j) : j.parentNode.insertBefore(j, X);
                    var $ = function (n, t) {
                        for (var e = U(s.focusCancel), o = 0; o < e.length; o++) {
                            (n += t) === e.length ? n = 0 : -1 === n && (n = e.length - 1);
                            var a = e[n];
                            if (on(a)) return a.focus()
                        }
                    };
                    s.toast && h && (window.onkeydown = g, h = !1), s.toast || h || (g = window.onkeydown, h = !0, window.onkeydown = function (t) {
                        var e = t || window.event;
                        if ("Enter" !== e.key || e.isComposing) if ("Tab" === e.key) {
                            for (var o = e.target || e.srcElement, a = U(s.focusCancel), r = -1, l = 0; l < a.length; l++) if (o === a[l]) {
                                r = l;
                                break
                            }
                            e.shiftKey ? $(r, -1) : $(r, 1), e.stopPropagation(), e.preventDefault()
                        } else -1 !== ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Left", "Right", "Up", "Down"].indexOf(e.key) ? document.activeElement === j && on(X) ? X.focus() : document.activeElement === X && on(j) && j.focus() : "Escape" !== e.key && "Esc" !== e.key || !0 !== w(s.allowEscapeKey) || i("esc"); else if (e.target === d()) {
                            if (-1 !== ["textarea", "file"].indexOf(s.input)) return;
                            n.clickConfirm(), e.preventDefault()
                        }
                    }), n.hideLoading = n.disableLoading = function () {
                        s.showConfirmButton || (tn(j), s.showCancelButton || tn(I())), F([b, T], o.loading), b.removeAttribute("aria-busy"), b.removeAttribute("data-loading"), j.disabled = !1, X.disabled = !1
                    }, n.getTitle = function () {
                        return z()
                    }, n.getContent = function () {
                        return V()
                    }, n.getInput = function () {
                        return d()
                    }, n.getImage = function () {
                        return q()
                    }, n.getButtonsWrapper = function () {
                        return Z()
                    }, n.getActions = function () {
                        return I()
                    }, n.getConfirmButton = function () {
                        return N()
                    }, n.getCancelButton = function () {
                        return R()
                    }, n.getFooter = function () {
                        return H()
                    }, n.isLoading = function () {
                        return K()
                    }, n.enableButtons = function () {
                        j.disabled = !1, X.disabled = !1
                    }, n.disableButtons = function () {
                        j.disabled = !0, X.disabled = !0
                    }, n.enableConfirmButton = function () {
                        j.disabled = !1
                    }, n.disableConfirmButton = function () {
                        j.disabled = !0
                    }, n.enableInput = function () {
                        var n = d();
                        if (!n) return !1;
                        if ("radio" === n.type) for (var t = n.parentNode.parentNode.querySelectorAll("input"), e = 0; e < t.length; e++) t[e].disabled = !1; else n.disabled = !1
                    }, n.disableInput = function () {
                        var n = d();
                        if (!n) return !1;
                        if (n && "radio" === n.type) for (var t = n.parentNode.parentNode.querySelectorAll("input"), e = 0; e < t.length; e++) t[e].disabled = !0; else n.disabled = !0
                    }, n.showValidationError = function (n) {
                        var t = Y();
                        t.innerHTML = n;
                        var e = window.getComputedStyle(b);
                        t.style.marginLeft = "-" + e.getPropertyValue("padding-left"), t.style.marginRight = "-" + e.getPropertyValue("padding-right"), nn(t);
                        var a = d();
                        a && (a.setAttribute("aria-invalid", !0), a.setAttribute("aria-describedBy", o.validationerror), W(a), G(a, o.inputerror))
                    }, n.resetValidationError = function () {
                        var n = Y();
                        tn(n);
                        var t = d();
                        t && (t.removeAttribute("aria-invalid"), t.removeAttribute("aria-describedBy"), F(t, o.inputerror))
                    }, n.getProgressSteps = function () {
                        return s.progressSteps
                    }, n.setProgressSteps = function (n) {
                        s.progressSteps = n, k(s)
                    }, n.showProgressSteps = function () {
                        nn(O())
                    }, n.hideProgressSteps = function () {
                        tn(O())
                    }, n.enableButtons(), n.hideLoading(), n.resetValidationError(), s.input && G(document.body, o["has-input"]);
                    for (var _ = ["input", "file", "range", "select", "radio", "checkbox", "textarea"], en = void 0, an = 0; an < _.length; an++) {
                        var rn = o[_[an]], ln = J(E, rn);
                        if (en = d(_[an])) {
                            for (var cn in en.attributes) if (en.attributes.hasOwnProperty(cn)) {
                                var pn = en.attributes[cn].name;
                                "type" !== pn && "value" !== pn && en.removeAttribute(pn)
                            }
                            for (var wn in s.inputAttributes) en.setAttribute(wn, s.inputAttributes[wn])
                        }
                        ln.className = rn, s.inputClass && G(ln, s.inputClass), tn(ln)
                    }
                    var un, dn, fn, mn, bn, gn = void 0;
                    switch (s.input) {
                        case"text":
                        case"email":
                        case"password":
                        case"number":
                        case"tel":
                        case"url":
                            (en = J(E, o.input)).value = s.inputValue, en.placeholder = s.inputPlaceholder, en.type = s.input, nn(en);
                            break;
                        case"file":
                            (en = J(E, o.file)).placeholder = s.inputPlaceholder, en.type = s.input, nn(en);
                            break;
                        case"range":
                            var hn = J(E, o.range), xn = hn.querySelector("input"), kn = hn.querySelector("output");
                            xn.value = s.inputValue, xn.type = s.input, kn.value = s.inputValue, nn(hn);
                            break;
                        case"select":
                            var yn = J(E, o.select);
                            if (yn.innerHTML = "", s.inputPlaceholder) {
                                var vn = document.createElement("option");
                                vn.innerHTML = s.inputPlaceholder, vn.value = "", vn.disabled = !0, vn.selected = !0, yn.appendChild(vn)
                            }
                            gn = function (n) {
                                n = r(n);
                                var t = !0, e = !1, o = void 0;
                                try {
                                    for (var a, i = n[Symbol.iterator](); !(t = (a = i.next()).done); t = !0) {
                                        var l = f(a.value, 2), c = l[0], p = l[1], w = document.createElement("option");
                                        w.value = c, w.innerHTML = p, s.inputValue.toString() === c.toString() && (w.selected = !0), yn.appendChild(w)
                                    }
                                } catch (n) {
                                    e = !0, o = n
                                } finally {
                                    try {
                                        !t && i.return && i.return()
                                    } finally {
                                        if (e) throw o
                                    }
                                }
                                nn(yn), yn.focus()
                            };
                            break;
                        case"radio":
                            var An = J(E, o.radio);
                            An.innerHTML = "", gn = function (n) {
                                n = r(n);
                                var t = !0, e = !1, a = void 0;
                                try {
                                    for (var i, l = n[Symbol.iterator](); !(t = (i = l.next()).done); t = !0) {
                                        var c = f(i.value, 2), p = c[0], w = c[1], u = document.createElement("input"),
                                            d = document.createElement("label");
                                        u.type = "radio", u.name = o.radio, u.value = p, s.inputValue.toString() === p.toString() && (u.checked = !0), d.innerHTML = w, d.insertBefore(u, d.firstChild), An.appendChild(d)
                                    }
                                } catch (n) {
                                    e = !0, a = n
                                } finally {
                                    try {
                                        !t && l.return && l.return()
                                    } finally {
                                        if (e) throw a
                                    }
                                }
                                nn(An);
                                var m = An.querySelectorAll("input");
                                m.length && m[0].focus()
                            };
                            break;
                        case"checkbox":
                            var Cn = J(E, o.checkbox), Sn = d("checkbox");
                            Sn.type = "checkbox", Sn.value = 1, Sn.id = o.checkbox, Sn.checked = Boolean(s.inputValue);
                            var Bn = Cn.getElementsByTagName("span");
                            Bn.length && Cn.removeChild(Bn[0]), (Bn = document.createElement("span")).innerHTML = s.inputPlaceholder, Cn.appendChild(Bn), nn(Cn);
                            break;
                        case"textarea":
                            var En = J(E, o.textarea);
                            En.value = s.inputValue, En.placeholder = s.inputPlaceholder, nn(En);
                            break;
                        case null:
                            break;
                        default:
                            l('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "' + s.input + '"')
                    }
                    "select" !== s.input && "radio" !== s.input || (s.inputOptions instanceof Promise ? (n.showLoading(), s.inputOptions.then(function (t) {
                        n.hideLoading(), gn(t)
                    })) : "object" === u(s.inputOptions) ? gn(s.inputOptions) : l("Unexpected type of inputOptions! Expected object, Map or Promise, got " + u(s.inputOptions))), un = s.animation, dn = s.onBeforeOpen, fn = s.onOpen, mn = P(), bn = L(), null !== dn && "function" == typeof dn && dn(bn), un ? (G(bn, o.show), G(mn, o.fade), F(bn, o.hide)) : F(bn, o.fade), nn(bn), mn.style.overflowY = "hidden", sn && !Q(bn, o.noanimation) ? bn.addEventListener(sn, function n() {
                        bn.removeEventListener(sn, n), mn.style.overflowY = "auto"
                    }) : mn.style.overflowY = "auto", G([document.documentElement, document.body, mn], o.shown), D() && (y(), v()), C.previousActiveElement = document.activeElement, null !== fn && "function" == typeof fn && setTimeout(function () {
                        fn(bn)
                    }), s.toast || (w(s.allowEnterKey) ? s.focusCancel && on(X) ? X.focus() : s.focusConfirm && on(j) ? j.focus() : $(-1, 1) : document.activeElement && document.activeElement.blur()), P().scrollTop = 0
                })
            }
        };
    A.isVisible = function () {
        return !!L()
    }, A.queue = function (n) {
        b = n;
        var t = function () {
            b = [], document.body.removeAttribute("data-swal2-queue-step")
        }, e = [];
        return new Promise(function (n, o) {
            !function o(a, s) {
                a < b.length ? (document.body.setAttribute("data-swal2-queue-step", a), A(b[a]).then(function (r) {
                    void 0 !== r.value ? (e.push(r.value), o(a + 1, s)) : (t(), n({dismiss: r.dismiss}))
                })) : (t(), n({value: e}))
            }(0)
        })
    }, A.getQueueStep = function () {
        return document.body.getAttribute("data-swal2-queue-step")
    }, A.insertQueueStep = function (n, t) {
        return t && t < b.length ? b.splice(t, 0, n) : b.push(n)
    }, A.deleteQueueStep = function (n) {
        void 0 !== b[n] && b.splice(n, 1)
    }, A.close = A.closePopup = A.closeModal = A.closeToast = function (n) {
        var t = P(), e = L();
        if (e) {
            F(e, o.show), G(e, o.hide), clearTimeout(e.timeout), $() || (rn(), window.onkeydown = g, h = !1);
            var a = function () {
                t.parentNode && t.parentNode.removeChild(t), F([document.documentElement, document.body], [o.shown, o["no-backdrop"], o["has-input"], o["toast-shown"]]), D() && (null !== C.previousBodyPadding && (document.body.style.paddingRight = C.previousBodyPadding, C.previousBodyPadding = null), function () {
                    if (Q(document.body, o.iosfix)) {
                        var n = parseInt(document.body.style.top, 10);
                        F(document.body, o.iosfix), document.body.style.top = "", document.body.scrollTop = -1 * n
                    }
                }())
            };
            sn && !Q(e, o.noanimation) ? e.addEventListener(sn, function n() {
                e.removeEventListener(sn, n), Q(e, o.hide) && a()
            }) : a(), null !== n && "function" == typeof n && setTimeout(function () {
                n(e)
            })
        }
    }, A.clickConfirm = function () {
        return N().click()
    }, A.clickCancel = function () {
        return R().click()
    }, A.showLoading = A.enableLoading = function () {
        var n = L();
        n || A(""), n = L();
        var t = I(), e = N(), a = R();
        nn(t), nn(e, "inline-block"), G([n, t], o.loading), e.disabled = !0, a.disabled = !0, n.setAttribute("data-loading", !0), n.setAttribute("aria-busy", !0), n.focus()
    }, A.isValidParameter = function (t) {
        return n.hasOwnProperty(t) || "extraParams" === t
    }, A.isDeprecatedParameter = function (n) {
        return -1 !== t.indexOf(n)
    }, A.setDefaults = function (n) {
        if (!n || "object" !== (void 0 === n ? "undefined" : u(n))) return l("the argument for setDefaults() is required and has to be a object");
        x(n);
        for (var t in n) A.isValidParameter(t) && (m[t] = n[t])
    }, A.resetDefaults = function () {
        m = d({}, n)
    }, A.adaptInputValidator = function (n) {
        return function (t, e) {
            return n.call(this, t, e).then(function () {
            }, function (n) {
                return n
            })
        }
    }, A.noop = function () {
    }, A.version = "7.9.0", A.default = A, "undefined" != typeof window && "object" === u(window._swalDefaults) && A.setDefaults(window._swalDefaults);
    var C = {previousActiveElement: null, previousBodyPadding: null}, S = function () {
            return "undefined" == typeof window || "undefined" == typeof document
        }, B = function (n) {
            var t = P();
            if (t && (t.parentNode.removeChild(t), F([document.documentElement, document.body], [o["no-backdrop"], o["has-input"], o["toast-shown"]])), !S()) {
                var e = document.createElement("div");
                e.className = o.container, e.innerHTML = E, ("string" == typeof n.target ? document.querySelector(n.target) : n.target).appendChild(e);
                var a = L(), s = V(), r = J(s, o.input), i = J(s, o.file), c = s.querySelector("." + o.range + " input"),
                    p = s.querySelector("." + o.range + " output"), w = J(s, o.select),
                    u = s.querySelector("." + o.checkbox + " input"), d = J(s, o.textarea);
                a.setAttribute("aria-live", n.toast ? "polite" : "assertive");
                var f = function () {
                    A.isVisible() && A.resetValidationError()
                };
                return r.oninput = f, i.onchange = f, w.onchange = f, u.onchange = f, d.oninput = f, c.oninput = function () {
                    f(), p.value = c.value
                }, c.onchange = function () {
                    f(), c.previousSibling.value = c.value
                }, a
            }
            l("SweetAlert2 requires document to initialize")
        },
        E = ('\n <div role="dialog" aria-modal="true" aria-labelledby="' + o.title + '" aria-describedby="' + o.content + '" class="' + o.popup + '" tabindex="-1">\n   <div class="' + o.header + '">\n     <ul class="' + o.progresssteps + '"></ul>\n     <div class="' + o.icon + " " + a.error + '">\n       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n     </div>\n     <div class="' + o.icon + " " + a.question + '">?</div>\n     <div class="' + o.icon + " " + a.warning + '">!</div>\n     <div class="' + o.icon + " " + a.info + '">i</div>\n     <div class="' + o.icon + " " + a.success + '">\n       <div class="swal2-success-circular-line-left"></div>\n       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n       <div class="swal2-success-circular-line-right"></div>\n     </div>\n     <img class="' + o.image + '" />\n     <h2 class="' + o.title + '" id="' + o.title + '"></h2>\n     <button type="button" class="' + o.close + '">×</button>\n   </div>\n   <div class="' + o.content + '">\n     <div id="' + o.content + '"></div>\n     <input class="' + o.input + '" />\n     <input type="file" class="' + o.file + '" />\n     <div class="' + o.range + '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="' + o.select + '"></select>\n     <div class="' + o.radio + '"></div>\n     <label for="' + o.checkbox + '" class="' + o.checkbox + '">\n       <input type="checkbox" />\n     </label>\n     <textarea class="' + o.textarea + '"></textarea>\n     <div class="' + o.validationerror + '" id="' + o.validationerror + '"></div>\n   </div>\n   <div class="' + o.actions + '">\n     <button type="button" class="' + o.confirm + '">OK</button>\n     <button type="button" class="' + o.cancel + '">Cancel</button>\n   </div>\n   <div class="' + o.footer + '">\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, ""),
        P = function () {
            return document.body.querySelector("." + o.container)
        }, L = function () {
            return P() ? P().querySelector("." + o.popup) : null
        }, T = function () {
            return L().querySelectorAll("." + o.icon)
        }, j = function (n) {
            return P() ? P().querySelector("." + n) : null
        }, z = function () {
            return j(o.title)
        }, V = function () {
            return j(o.content)
        }, q = function () {
            return j(o.image)
        }, O = function () {
            return j(o.progresssteps)
        }, Y = function () {
            return j(o.validationerror)
        }, N = function () {
            return j(o.confirm)
        }, R = function () {
            return j(o.cancel)
        }, Z = function () {
            return p("swal.getButtonsWrapper() is deprecated and will be removed in the next major release, use swal.getActions() instead"), j(o.actions)
        }, I = function () {
            return j(o.actions)
        }, H = function () {
            return j(o.footer)
        }, M = function () {
            return j(o.close)
        }, U = function () {
            var n = Array.prototype.slice.call(L().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function (n, t) {
                    return (n = parseInt(n.getAttribute("tabindex"))) > (t = parseInt(t.getAttribute("tabindex"))) ? 1 : n < t ? -1 : 0
                }),
                t = Array.prototype.slice.call(L().querySelectorAll('button, input:not([type=hidden]), textarea, select, a, [tabindex="0"]'));
            return function (n) {
                var t = [], e = !0, o = !1, a = void 0;
                try {
                    for (var s, r = n[Symbol.iterator](); !(e = (s = r.next()).done); e = !0) {
                        var i = s.value;
                        -1 === t.indexOf(i) && t.push(i)
                    }
                } catch (n) {
                    o = !0, a = n
                } finally {
                    try {
                        !e && r.return && r.return()
                    } finally {
                        if (o) throw a
                    }
                }
                return t
            }(n.concat(t))
        }, X = function (n, t) {
            if (!n) return tn(t);
            if ("object" === (void 0 === n ? "undefined" : u(n))) if (t.innerHTML = "", 0 in n) for (var e = 0; e in n; e++) t.appendChild(n[e].cloneNode(!0)); else t.appendChild(n.cloneNode(!0)); else n && (t.innerHTML = n);
            nn(t)
        }, D = function () {
            return !document.body.classList.contains(o["toast-shown"])
        }, $ = function () {
            return document.body.classList.contains(o["toast-shown"])
        }, K = function () {
            return L().hasAttribute("data-loading")
        }, Q = function (n, t) {
            return !!n.classList && n.classList.contains(t)
        }, W = function (n) {
            if (n.focus(), "file" !== n.type) {
                var t = n.value;
                n.value = "", n.value = t
            }
        }, _ = function (n, t, e) {
            n && t && ("string" == typeof t && (t = t.split(/\s+/).filter(Boolean)), t.forEach(function (t) {
                n.forEach ? n.forEach(function (n) {
                    e ? n.classList.add(t) : n.classList.remove(t)
                }) : e ? n.classList.add(t) : n.classList.remove(t)
            }))
        }, G = function (n, t) {
            _(n, t, !0)
        }, F = function (n, t) {
            _(n, t, !1)
        }, J = function (n, t) {
            for (var e = 0; e < n.childNodes.length; e++) if (Q(n.childNodes[e], t)) return n.childNodes[e]
        }, nn = function (n, t) {
            t || (t = n.id === o.content ? "block" : "flex"), n.style.opacity = "", n.style.display = t
        }, tn = function (n) {
            n.style.opacity = "", n.style.display = "none"
        }, en = function (n) {
            for (; n.firstChild;) n.removeChild(n.firstChild)
        }, on = function (n) {
            return n && (n.offsetWidth || n.offsetHeight || n.getClientRects().length)
        }, an = function (n, t) {
            n.style.removeProperty ? n.style.removeProperty(t) : n.style.removeAttribute(t)
        }, sn = function () {
            if (S()) return !1;
            var n = document.createElement("div"), t = {
                WebkitAnimation: "webkitAnimationEnd",
                OAnimation: "oAnimationEnd oanimationend",
                animation: "animationend"
            };
            for (var e in t) if (t.hasOwnProperty(e) && void 0 !== n.style[e]) return t[e];
            return !1
        }(), rn = function () {
            if (C.previousActiveElement && C.previousActiveElement.focus) {
                var n = window.scrollX, t = window.scrollY;
                C.previousActiveElement.focus(), void 0 !== n && void 0 !== t && window.scrollTo(n, t)
            }
        }, ln = function () {
            if ("ontouchstart" in window || navigator.msMaxTouchPoints) return 0;
            var n = document.createElement("div");
            n.style.width = "50px", n.style.height = "50px", n.style.overflow = "scroll", document.body.appendChild(n);
            var t = n.offsetWidth - n.clientWidth;
            return document.body.removeChild(n), t
        };
    return function () {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        if (S()) return !1;
        var t = document.head || document.getElementsByTagName("head")[0], e = document.createElement("style");
        e.type = "text/css", t.appendChild(e), e.styleSheet ? e.styleSheet.cssText = n : e.appendChild(document.createTextNode(n))
    }("body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch; }\n  body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast .swal2-actions {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    -ms-flex-item-align: stretch;\n        align-self: stretch;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    height: 2.2em; }\n  body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast .swal2-loading {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast .swal2-input {\n    height: 2em;\n    font-size: 1em;\n    margin: .3125em auto; }\n  body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast .swal2-validationerror {\n    font-size: 1em; }\n\nbody.swal2-toast-shown > .swal2-container {\n  position: fixed;\n  background-color: transparent; }\n  body.swal2-toast-shown > .swal2-container.swal2-shown {\n    background-color: transparent; }\n  body.swal2-toast-shown > .swal2-container.swal2-top {\n    top: 0;\n    left: 50%;\n    bottom: auto;\n    right: auto;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n  body.swal2-toast-shown > .swal2-container.swal2-top-end, body.swal2-toast-shown > .swal2-container.swal2-top-right {\n    top: 0;\n    left: auto;\n    bottom: auto;\n    right: 0; }\n  body.swal2-toast-shown > .swal2-container.swal2-top-start, body.swal2-toast-shown > .swal2-container.swal2-top-left {\n    top: 0;\n    left: 0;\n    bottom: auto;\n    right: auto; }\n  body.swal2-toast-shown > .swal2-container.swal2-center-start, body.swal2-toast-shown > .swal2-container.swal2-center-left {\n    top: 50%;\n    left: 0;\n    bottom: auto;\n    right: auto;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n  body.swal2-toast-shown > .swal2-container.swal2-center {\n    top: 50%;\n    left: 50%;\n    bottom: auto;\n    right: auto;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n  body.swal2-toast-shown > .swal2-container.swal2-center-end, body.swal2-toast-shown > .swal2-container.swal2-center-right {\n    top: 50%;\n    left: auto;\n    bottom: auto;\n    right: 0;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n  body.swal2-toast-shown > .swal2-container.swal2-bottom-start, body.swal2-toast-shown > .swal2-container.swal2-bottom-left {\n    top: auto;\n    left: 0;\n    bottom: 0;\n    right: auto; }\n  body.swal2-toast-shown > .swal2-container.swal2-bottom {\n    top: auto;\n    left: 50%;\n    bottom: 0;\n    right: auto;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n  body.swal2-toast-shown > .swal2-container.swal2-bottom-end, body.swal2-toast-shown > .swal2-container.swal2-bottom-right {\n    top: auto;\n    left: auto;\n    bottom: 0;\n    right: 0; }\n\n.swal2-popup.swal2-toast {\n  width: auto;\n  padding: 0.625em;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  overflow-y: hidden;\n  -webkit-box-shadow: 0 0 10px #d9d9d9;\n          box-shadow: 0 0 10px #d9d9d9; }\n  .swal2-popup.swal2-toast .swal2-header {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n  .swal2-popup.swal2-toast .swal2-title {\n    font-size: 1em;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    margin: 0 .6em; }\n  .swal2-popup.swal2-toast .swal2-close {\n    position: initial; }\n  .swal2-popup.swal2-toast .swal2-content {\n    font-size: 0.875em;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n  .swal2-popup.swal2-toast .swal2-icon {\n    width: 32px;\n    min-width: 32px;\n    height: 32px;\n    margin: 0; }\n    .swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring {\n      width: 32px;\n      height: 32px; }\n    .swal2-popup.swal2-toast .swal2-icon.swal2-info, .swal2-popup.swal2-toast .swal2-icon.swal2-warning, .swal2-popup.swal2-toast .swal2-icon.swal2-question {\n      font-size: 26px;\n      line-height: 32px; }\n    .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'] {\n      top: 14px;\n      width: 22px; }\n      .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='left'] {\n        left: 5px; }\n      .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='right'] {\n        right: 5px; }\n  .swal2-popup.swal2-toast .swal2-actions {\n    margin: 0 .3125em;\n    height: auto; }\n  .swal2-popup.swal2-toast .swal2-styled {\n    margin: 0 .3125em;\n    padding: .3125em .625em;\n    font-size: 1em; }\n    .swal2-popup.swal2-toast .swal2-styled:focus {\n      -webkit-box-shadow: 0 0 0 1px #fff, 0 0 0 2px rgba(50, 100, 150, 0.4);\n              box-shadow: 0 0 0 1px #fff, 0 0 0 2px rgba(50, 100, 150, 0.4); }\n  .swal2-popup.swal2-toast .swal2-success {\n    border-color: #a5dc86; }\n    .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'] {\n      border-radius: 50%;\n      position: absolute;\n      width: 32px;\n      height: 45px;\n      -webkit-transform: rotate(45deg);\n              transform: rotate(45deg); }\n      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'][class$='left'] {\n        border-radius: 64px 0 0 64px;\n        top: -4px;\n        left: -15px;\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg);\n        -webkit-transform-origin: 32px 32px;\n                transform-origin: 32px 32px; }\n      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'][class$='right'] {\n        border-radius: 0 64px 64px 0;\n        top: -5px;\n        left: 14px;\n        -webkit-transform-origin: 0 32px;\n                transform-origin: 0 32px; }\n    .swal2-popup.swal2-toast .swal2-success .swal2-success-ring {\n      width: 32px;\n      height: 32px; }\n    .swal2-popup.swal2-toast .swal2-success .swal2-success-fix {\n      width: 7px;\n      height: 43px;\n      left: 7px;\n      top: 0; }\n    .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'] {\n      height: 5px; }\n      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'][class$='tip'] {\n        width: 12px;\n        left: 3px;\n        top: 18px; }\n      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'][class$='long'] {\n        width: 22px;\n        right: 3px;\n        top: 15px; }\n  .swal2-popup.swal2-toast.swal2-show {\n    -webkit-animation: showSweetToast .5s;\n            animation: showSweetToast .5s; }\n  .swal2-popup.swal2-toast.swal2-hide {\n    -webkit-animation: hideSweetToast .2s forwards;\n            animation: hideSweetToast .2s forwards; }\n  .swal2-popup.swal2-toast .swal2-animate-success-line-tip {\n    -webkit-animation: animate-toast-success-tip .75s;\n            animation: animate-toast-success-tip .75s; }\n  .swal2-popup.swal2-toast .swal2-animate-success-line-long {\n    -webkit-animation: animate-toast-success-long .75s;\n            animation: animate-toast-success-long .75s; }\n\n@-webkit-keyframes showSweetToast {\n  0% {\n    -webkit-transform: translateY(-10px) rotateZ(2deg);\n            transform: translateY(-10px) rotateZ(2deg);\n    opacity: 0; }\n  33% {\n    -webkit-transform: translateY(0) rotateZ(-2deg);\n            transform: translateY(0) rotateZ(-2deg);\n    opacity: .5; }\n  66% {\n    -webkit-transform: translateY(5px) rotateZ(2deg);\n            transform: translateY(5px) rotateZ(2deg);\n    opacity: .7; }\n  100% {\n    -webkit-transform: translateY(0) rotateZ(0);\n            transform: translateY(0) rotateZ(0);\n    opacity: 1; } }\n\n@keyframes showSweetToast {\n  0% {\n    -webkit-transform: translateY(-10px) rotateZ(2deg);\n            transform: translateY(-10px) rotateZ(2deg);\n    opacity: 0; }\n  33% {\n    -webkit-transform: translateY(0) rotateZ(-2deg);\n            transform: translateY(0) rotateZ(-2deg);\n    opacity: .5; }\n  66% {\n    -webkit-transform: translateY(5px) rotateZ(2deg);\n            transform: translateY(5px) rotateZ(2deg);\n    opacity: .7; }\n  100% {\n    -webkit-transform: translateY(0) rotateZ(0);\n            transform: translateY(0) rotateZ(0);\n    opacity: 1; } }\n\n@-webkit-keyframes hideSweetToast {\n  0% {\n    opacity: 1; }\n  33% {\n    opacity: .5; }\n  100% {\n    -webkit-transform: rotateZ(1deg);\n            transform: rotateZ(1deg);\n    opacity: 0; } }\n\n@keyframes hideSweetToast {\n  0% {\n    opacity: 1; }\n  33% {\n    opacity: .5; }\n  100% {\n    -webkit-transform: rotateZ(1deg);\n            transform: rotateZ(1deg);\n    opacity: 0; } }\n\n@-webkit-keyframes animate-toast-success-tip {\n  0% {\n    width: 0;\n    left: 1px;\n    top: 9px; }\n  54% {\n    width: 0;\n    left: 2px;\n    top: 2px; }\n  70% {\n    width: 26px;\n    left: -4px;\n    top: 10px; }\n  84% {\n    width: 8px;\n    left: 12px;\n    top: 17px; }\n  100% {\n    width: 12px;\n    left: 3px;\n    top: 18px; } }\n\n@keyframes animate-toast-success-tip {\n  0% {\n    width: 0;\n    left: 1px;\n    top: 9px; }\n  54% {\n    width: 0;\n    left: 2px;\n    top: 2px; }\n  70% {\n    width: 26px;\n    left: -4px;\n    top: 10px; }\n  84% {\n    width: 8px;\n    left: 12px;\n    top: 17px; }\n  100% {\n    width: 12px;\n    left: 3px;\n    top: 18px; } }\n\n@-webkit-keyframes animate-toast-success-long {\n  0% {\n    width: 0;\n    right: 22px;\n    top: 26px; }\n  65% {\n    width: 0;\n    right: 15px;\n    top: 20px; }\n  84% {\n    width: 18px;\n    right: 0;\n    top: 15px; }\n  100% {\n    width: 22px;\n    right: 3px;\n    top: 15px; } }\n\n@keyframes animate-toast-success-long {\n  0% {\n    width: 0;\n    right: 22px;\n    top: 26px; }\n  65% {\n    width: 0;\n    right: 15px;\n    top: 20px; }\n  84% {\n    width: 18px;\n    right: 0;\n    top: 15px; }\n  100% {\n    width: 22px;\n    right: 3px;\n    top: 15px; } }\n\nhtml.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown),\nbody.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) {\n  overflow-y: hidden;\n  height: auto; }\n\nbody.swal2-iosfix {\n  position: fixed;\n  left: 0;\n  right: 0; }\n\nbody.swal2-no-backdrop .swal2-shown {\n  top: auto;\n  bottom: auto;\n  left: auto;\n  right: auto;\n  background-color: transparent; }\n  body.swal2-no-backdrop .swal2-shown > .swal2-modal {\n    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);\n            box-shadow: 0 0 10px rgba(0, 0, 0, 0.4); }\n  body.swal2-no-backdrop .swal2-shown.swal2-top {\n    top: 0;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n  body.swal2-no-backdrop .swal2-shown.swal2-top-start, body.swal2-no-backdrop .swal2-shown.swal2-top-left {\n    top: 0;\n    left: 0; }\n  body.swal2-no-backdrop .swal2-shown.swal2-top-end, body.swal2-no-backdrop .swal2-shown.swal2-top-right {\n    top: 0;\n    right: 0; }\n  body.swal2-no-backdrop .swal2-shown.swal2-center {\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n  body.swal2-no-backdrop .swal2-shown.swal2-center-start, body.swal2-no-backdrop .swal2-shown.swal2-center-left {\n    top: 50%;\n    left: 0;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n  body.swal2-no-backdrop .swal2-shown.swal2-center-end, body.swal2-no-backdrop .swal2-shown.swal2-center-right {\n    top: 50%;\n    right: 0;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n  body.swal2-no-backdrop .swal2-shown.swal2-bottom {\n    bottom: 0;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n  body.swal2-no-backdrop .swal2-shown.swal2-bottom-start, body.swal2-no-backdrop .swal2-shown.swal2-bottom-left {\n    bottom: 0;\n    left: 0; }\n  body.swal2-no-backdrop .swal2-shown.swal2-bottom-end, body.swal2-no-backdrop .swal2-shown.swal2-bottom-right {\n    bottom: 0;\n    right: 0; }\n\n.swal2-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: fixed;\n  padding: 10px;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow-x: hidden;\n  background-color: transparent;\n  z-index: 1060; }\n  .swal2-container.swal2-top {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start; }\n  .swal2-container.swal2-top-start, .swal2-container.swal2-top-left {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n  .swal2-container.swal2-top-end, .swal2-container.swal2-top-right {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n  .swal2-container.swal2-center {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .swal2-container.swal2-center-start, .swal2-container.swal2-center-left {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n  .swal2-container.swal2-center-end, .swal2-container.swal2-center-right {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n  .swal2-container.swal2-bottom {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; }\n  .swal2-container.swal2-bottom-start, .swal2-container.swal2-bottom-left {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n  .swal2-container.swal2-bottom-end, .swal2-container.swal2-bottom-right {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n  .swal2-container.swal2-grow-fullscreen > .swal2-modal {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    -ms-flex-item-align: stretch;\n        align-self: stretch;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .swal2-container.swal2-grow-row > .swal2-modal {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .swal2-container.swal2-grow-column {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    .swal2-container.swal2-grow-column.swal2-top, .swal2-container.swal2-grow-column.swal2-center, .swal2-container.swal2-grow-column.swal2-bottom {\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n    .swal2-container.swal2-grow-column.swal2-top-start, .swal2-container.swal2-grow-column.swal2-center-start, .swal2-container.swal2-grow-column.swal2-bottom-start, .swal2-container.swal2-grow-column.swal2-top-left, .swal2-container.swal2-grow-column.swal2-center-left, .swal2-container.swal2-grow-column.swal2-bottom-left {\n      -webkit-box-align: start;\n          -ms-flex-align: start;\n              align-items: flex-start; }\n    .swal2-container.swal2-grow-column.swal2-top-end, .swal2-container.swal2-grow-column.swal2-center-end, .swal2-container.swal2-grow-column.swal2-bottom-end, .swal2-container.swal2-grow-column.swal2-top-right, .swal2-container.swal2-grow-column.swal2-center-right, .swal2-container.swal2-grow-column.swal2-bottom-right {\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end; }\n    .swal2-container.swal2-grow-column > .swal2-modal {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important;\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      -ms-flex-line-pack: center;\n          align-content: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n  .swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right) > .swal2-modal {\n    margin: auto; }\n  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n    .swal2-container .swal2-modal {\n      margin: 0 !important; } }\n  .swal2-container.swal2-fade {\n    -webkit-transition: background-color .1s;\n    transition: background-color .1s; }\n  .swal2-container.swal2-shown {\n    background-color: rgba(0, 0, 0, 0.4); }\n\n.swal2-popup {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background-color: #fff;\n  font-family: inherit;\n  font-size: 1rem;\n  padding: 1.25em;\n  border-radius: .3125em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  overflow-x: hidden;\n  overflow-y: auto;\n  display: none;\n  position: relative;\n  width: 32em;\n  max-width: 100%; }\n  .swal2-popup:focus {\n    outline: none; }\n  .swal2-popup.swal2-loading {\n    overflow-y: hidden; }\n  .swal2-popup .swal2-header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .swal2-popup .swal2-title {\n    color: #595959;\n    font-size: 1.875em;\n    text-align: center;\n    font-weight: 600;\n    text-transform: none;\n    position: relative;\n    margin: 0 0 .4em;\n    padding: 0;\n    display: block;\n    word-wrap: break-word; }\n  .swal2-popup .swal2-actions {\n    margin-top: 1.25em;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n    .swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled[disabled] {\n      opacity: .4; }\n    .swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:hover {\n      background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNikAQAACIAHF/uBd8AAAAASUVORK5CYII=\"); }\n    .swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:active {\n      background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNiMAYAADwANpiOMBYAAAAASUVORK5CYII=\"); }\n    .swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-confirm {\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      border: .25em solid transparent;\n      border-color: transparent;\n      width: 2.5em;\n      height: 2.5em;\n      padding: 0;\n      margin: .46875em;\n      background-color: transparent !important;\n      color: transparent;\n      cursor: default;\n      border-radius: 100%;\n      -webkit-animation: rotate-loading 1.5s linear 0s infinite normal;\n              animation: rotate-loading 1.5s linear 0s infinite normal;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none; }\n    .swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-cancel {\n      margin-left: 30px;\n      margin-right: 30px; }\n    .swal2-popup .swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after {\n      display: inline-block;\n      content: '';\n      margin-left: 5px;\n      height: 15px;\n      width: 15px;\n      border: 3px solid #999999;\n      -webkit-box-shadow: 1px 1px 1px #fff;\n              box-shadow: 1px 1px 1px #fff;\n      border-right-color: transparent;\n      border-radius: 50%;\n      -webkit-animation: rotate-loading 1.5s linear 0s infinite normal;\n              animation: rotate-loading 1.5s linear 0s infinite normal; }\n  .swal2-popup .swal2-styled {\n    border: 0;\n    border-radius: .25em;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    color: #fff;\n    font-size: 1.0625em;\n    font-weight: 500;\n    margin: 0 .3125em;\n    padding: .625em 2em; }\n    .swal2-popup .swal2-styled:not([disabled]) {\n      cursor: pointer; }\n    .swal2-popup .swal2-styled.swal2-confirm {\n      background-color: #3085d6; }\n    .swal2-popup .swal2-styled.swal2-cancel {\n      background-color: #aaa; }\n    .swal2-popup .swal2-styled:focus {\n      outline: none;\n      -webkit-box-shadow: 0 0 0 2px #fff, 0 0 0 4px rgba(50, 100, 150, 0.4);\n              box-shadow: 0 0 0 2px #fff, 0 0 0 4px rgba(50, 100, 150, 0.4); }\n    .swal2-popup .swal2-styled::-moz-focus-inner {\n      border: 0; }\n  .swal2-popup .swal2-footer {\n    font-size: 1em;\n    border-top: 1px solid #eee;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    margin-top: 1.25em;\n    padding-top: 1em; }\n  .swal2-popup .swal2-image {\n    margin: 1.25em auto;\n    max-width: 100%; }\n  .swal2-popup .swal2-close {\n    background: transparent;\n    border: 0;\n    margin: 0;\n    padding: 0;\n    width: 1.2em;\n    min-width: 1.2em;\n    height: 1.2em;\n    font-size: calc(2.5em - 0.25em);\n    line-height: 1.2em;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    font-family: serif;\n    position: absolute;\n    top: 5px;\n    right: 8px;\n    cursor: pointer;\n    color: #cccccc;\n    -webkit-transition: color .1s ease;\n    transition: color .1s ease; }\n    .swal2-popup .swal2-close:hover {\n      color: #d55; }\n  .swal2-popup > .swal2-input,\n  .swal2-popup > .swal2-file,\n  .swal2-popup > .swal2-textarea,\n  .swal2-popup > .swal2-select,\n  .swal2-popup > .swal2-radio,\n  .swal2-popup > .swal2-checkbox {\n    display: none; }\n  .swal2-popup .swal2-content {\n    font-size: 1.125em;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    font-weight: 300;\n    margin: 0;\n    padding: 0;\n    line-height: normal;\n    color: #545454;\n    word-wrap: break-word; }\n  .swal2-popup #swal2-content {\n    text-align: center; }\n  .swal2-popup .swal2-input,\n  .swal2-popup .swal2-file,\n  .swal2-popup .swal2-textarea,\n  .swal2-popup .swal2-select,\n  .swal2-popup .swal2-radio,\n  .swal2-popup .swal2-checkbox {\n    margin: 1em auto; }\n  .swal2-popup .swal2-input,\n  .swal2-popup .swal2-file,\n  .swal2-popup .swal2-textarea {\n    width: 100%;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    font-size: 1.125em;\n    border-radius: 3px;\n    border: 1px solid #d9d9d9;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06);\n            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06);\n    -webkit-transition: border-color .3s, -webkit-box-shadow .3s;\n    transition: border-color .3s, -webkit-box-shadow .3s;\n    transition: border-color .3s, box-shadow .3s;\n    transition: border-color .3s, box-shadow .3s, -webkit-box-shadow .3s; }\n    .swal2-popup .swal2-input.swal2-inputerror,\n    .swal2-popup .swal2-file.swal2-inputerror,\n    .swal2-popup .swal2-textarea.swal2-inputerror {\n      border-color: #f27474 !important;\n      -webkit-box-shadow: 0 0 2px #f27474 !important;\n              box-shadow: 0 0 2px #f27474 !important; }\n    .swal2-popup .swal2-input:focus,\n    .swal2-popup .swal2-file:focus,\n    .swal2-popup .swal2-textarea:focus {\n      outline: none;\n      border: 1px solid #b4dbed;\n      -webkit-box-shadow: 0 0 3px #c4e6f5;\n              box-shadow: 0 0 3px #c4e6f5; }\n    .swal2-popup .swal2-input::-webkit-input-placeholder,\n    .swal2-popup .swal2-file::-webkit-input-placeholder,\n    .swal2-popup .swal2-textarea::-webkit-input-placeholder {\n      color: #cccccc; }\n    .swal2-popup .swal2-input:-ms-input-placeholder,\n    .swal2-popup .swal2-file:-ms-input-placeholder,\n    .swal2-popup .swal2-textarea:-ms-input-placeholder {\n      color: #cccccc; }\n    .swal2-popup .swal2-input::-ms-input-placeholder,\n    .swal2-popup .swal2-file::-ms-input-placeholder,\n    .swal2-popup .swal2-textarea::-ms-input-placeholder {\n      color: #cccccc; }\n    .swal2-popup .swal2-input::placeholder,\n    .swal2-popup .swal2-file::placeholder,\n    .swal2-popup .swal2-textarea::placeholder {\n      color: #cccccc; }\n  .swal2-popup .swal2-range input {\n    width: 80%; }\n  .swal2-popup .swal2-range output {\n    width: 20%;\n    font-weight: 600;\n    text-align: center; }\n  .swal2-popup .swal2-range input,\n  .swal2-popup .swal2-range output {\n    font-size: 1.125em;\n    height: 2.625em;\n    line-height: 2.625em;\n    margin: 1em auto;\n    padding: 0; }\n  .swal2-popup .swal2-input {\n    height: 2.625em;\n    padding: 0 .75em; }\n    .swal2-popup .swal2-input[type='number'] {\n      max-width: 10em; }\n  .swal2-popup .swal2-file {\n    font-size: 1.125em; }\n  .swal2-popup .swal2-textarea {\n    height: 6.75em;\n    padding: .75em; }\n  .swal2-popup .swal2-select {\n    color: #545454;\n    font-size: 1.125em;\n    padding: .375em .625em;\n    min-width: 50%;\n    max-width: 100%; }\n  .swal2-popup .swal2-radio,\n  .swal2-popup .swal2-checkbox {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .swal2-popup .swal2-radio label,\n    .swal2-popup .swal2-checkbox label {\n      font-size: 1.125em;\n      margin: 0 .6em; }\n    .swal2-popup .swal2-radio input,\n    .swal2-popup .swal2-checkbox input {\n      margin: 0 .4em; }\n  .swal2-popup .swal2-validationerror {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    background-color: #f0f0f0;\n    overflow: hidden;\n    padding: .625em;\n    color: gray;\n    font-size: 1em;\n    font-weight: 300;\n    display: none; }\n    .swal2-popup .swal2-validationerror::before {\n      content: '!';\n      display: inline-block;\n      width: 1.5em;\n      height: 1.5em;\n      border-radius: 50%;\n      background-color: #ea7d7d;\n      color: #fff;\n      line-height: 1.5em;\n      font-weight: 600;\n      text-align: center;\n      margin: 0 .625em; }\n\n@supports (-ms-accelerator: true) {\n  .swal2-range input {\n    width: 100% !important; }\n  .swal2-range output {\n    display: none; } }\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .swal2-range input {\n    width: 100% !important; }\n  .swal2-range output {\n    display: none; } }\n\n.swal2-icon {\n  width: 80px;\n  height: 80px;\n  line-height: 80px;\n  border: 4px solid transparent;\n  border-radius: 50%;\n  margin: 1.25em auto 1.875em;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: relative;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  .swal2-icon.swal2-error {\n    border-color: #f27474; }\n    .swal2-icon.swal2-error .swal2-x-mark {\n      position: relative;\n      -webkit-box-flex: 1;\n          -ms-flex-positive: 1;\n              flex-grow: 1; }\n    .swal2-icon.swal2-error [class^='swal2-x-mark-line'] {\n      position: absolute;\n      height: 5px;\n      width: 47px;\n      background-color: #f27474;\n      display: block;\n      top: 37px;\n      border-radius: 2px; }\n      .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='left'] {\n        -webkit-transform: rotate(45deg);\n                transform: rotate(45deg);\n        left: 17px; }\n      .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='right'] {\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg);\n        right: 16px; }\n  .swal2-icon.swal2-warning, .swal2-icon.swal2-info, .swal2-icon.swal2-question {\n    font-family: inherit;\n    font-size: 3.75em;\n    margin: .333333em auto .5em; }\n  .swal2-icon.swal2-warning {\n    color: #f8bb86;\n    border-color: #facea8; }\n  .swal2-icon.swal2-info {\n    color: #3fc3ee;\n    border-color: #9de0f6; }\n  .swal2-icon.swal2-question {\n    color: #87adbd;\n    border-color: #c9dae1; }\n  .swal2-icon.swal2-success {\n    border-color: #a5dc86; }\n    .swal2-icon.swal2-success [class^='swal2-success-circular-line'] {\n      border-radius: 50%;\n      position: absolute;\n      width: 60px;\n      height: 120px;\n      -webkit-transform: rotate(45deg);\n              transform: rotate(45deg); }\n      .swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='left'] {\n        border-radius: 120px 0 0 120px;\n        top: -7px;\n        left: -33px;\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg);\n        -webkit-transform-origin: 60px 60px;\n                transform-origin: 60px 60px; }\n      .swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='right'] {\n        border-radius: 0 120px 120px 0;\n        top: -11px;\n        left: 30px;\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg);\n        -webkit-transform-origin: 0 60px;\n                transform-origin: 0 60px; }\n    .swal2-icon.swal2-success .swal2-success-ring {\n      width: 80px;\n      height: 80px;\n      border: 4px solid rgba(165, 220, 134, 0.2);\n      border-radius: 50%;\n      -webkit-box-sizing: content-box;\n              box-sizing: content-box;\n      position: absolute;\n      left: -4px;\n      top: -4px;\n      z-index: 2; }\n    .swal2-icon.swal2-success .swal2-success-fix {\n      width: 7px;\n      height: 90px;\n      position: absolute;\n      left: 26px;\n      top: 8px;\n      z-index: 1;\n      -webkit-transform: rotate(-45deg);\n              transform: rotate(-45deg); }\n    .swal2-icon.swal2-success [class^='swal2-success-line'] {\n      height: 5px;\n      background-color: #a5dc86;\n      display: block;\n      border-radius: 2px;\n      position: absolute;\n      z-index: 2; }\n      .swal2-icon.swal2-success [class^='swal2-success-line'][class$='tip'] {\n        width: 25px;\n        left: 14px;\n        top: 46px;\n        -webkit-transform: rotate(45deg);\n                transform: rotate(45deg); }\n      .swal2-icon.swal2-success [class^='swal2-success-line'][class$='long'] {\n        width: 47px;\n        right: 8px;\n        top: 38px;\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg); }\n\n.swal2-progresssteps {\n  font-weight: 600;\n  padding: 0;\n  margin: 0 0 1.25em;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .swal2-progresssteps li {\n    display: inline-block;\n    position: relative; }\n  .swal2-progresssteps .swal2-progresscircle {\n    background: #3085d6;\n    border-radius: 2em;\n    color: #fff;\n    height: 2em;\n    line-height: 2em;\n    text-align: center;\n    width: 2em;\n    z-index: 20; }\n    .swal2-progresssteps .swal2-progresscircle:first-child {\n      margin-left: 0; }\n    .swal2-progresssteps .swal2-progresscircle:last-child {\n      margin-right: 0; }\n    .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep {\n      background: #3085d6; }\n      .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep ~ .swal2-progresscircle {\n        background: #add8e6; }\n      .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep ~ .swal2-progressline {\n        background: #add8e6; }\n  .swal2-progresssteps .swal2-progressline {\n    background: #3085d6;\n    height: .4em;\n    width: 2.5em;\n    margin: 0 -1px;\n    z-index: 10; }\n\n[class^='swal2'] {\n  -webkit-tap-highlight-color: transparent; }\n\n@-webkit-keyframes showSweetAlert {\n  0% {\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7); }\n  45% {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05); }\n  80% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes showSweetAlert {\n  0% {\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7); }\n  45% {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05); }\n  80% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@-webkit-keyframes hideSweetAlert {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n    opacity: 0; } }\n\n@keyframes hideSweetAlert {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n    opacity: 0; } }\n\n.swal2-show {\n  -webkit-animation: showSweetAlert .3s;\n          animation: showSweetAlert .3s; }\n  .swal2-show.swal2-noanimation {\n    -webkit-animation: none;\n            animation: none; }\n\n.swal2-hide {\n  -webkit-animation: hideSweetAlert .15s forwards;\n          animation: hideSweetAlert .15s forwards; }\n  .swal2-hide.swal2-noanimation {\n    -webkit-animation: none;\n            animation: none; }\n\n[dir='rtl'] .swal2-close {\n  left: 8px;\n  right: auto; }\n\n@-webkit-keyframes animate-success-tip {\n  0% {\n    width: 0;\n    left: 1px;\n    top: 19px; }\n  54% {\n    width: 0;\n    left: 2px;\n    top: 17px; }\n  70% {\n    width: 50px;\n    left: -6px;\n    top: 35px; }\n  84% {\n    width: 17px;\n    left: 21px;\n    top: 48px; }\n  100% {\n    width: 25px;\n    left: 14px;\n    top: 45px; } }\n\n@keyframes animate-success-tip {\n  0% {\n    width: 0;\n    left: 1px;\n    top: 19px; }\n  54% {\n    width: 0;\n    left: 2px;\n    top: 17px; }\n  70% {\n    width: 50px;\n    left: -6px;\n    top: 35px; }\n  84% {\n    width: 17px;\n    left: 21px;\n    top: 48px; }\n  100% {\n    width: 25px;\n    left: 14px;\n    top: 45px; } }\n\n@-webkit-keyframes animate-success-long {\n  0% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  65% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  84% {\n    width: 55px;\n    right: 0;\n    top: 35px; }\n  100% {\n    width: 47px;\n    right: 8px;\n    top: 38px; } }\n\n@keyframes animate-success-long {\n  0% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  65% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  84% {\n    width: 55px;\n    right: 0;\n    top: 35px; }\n  100% {\n    width: 47px;\n    right: 8px;\n    top: 38px; } }\n\n@-webkit-keyframes rotatePlaceholder {\n  0% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  5% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  12% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg); }\n  100% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg); } }\n\n@keyframes rotatePlaceholder {\n  0% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  5% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  12% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg); }\n  100% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg); } }\n\n.swal2-animate-success-line-tip {\n  -webkit-animation: animate-success-tip .75s;\n          animation: animate-success-tip .75s; }\n\n.swal2-animate-success-line-long {\n  -webkit-animation: animate-success-long .75s;\n          animation: animate-success-long .75s; }\n\n.swal2-success.swal2-animate-success-icon .swal2-success-circular-line-right {\n  -webkit-animation: rotatePlaceholder 4.25s ease-in;\n          animation: rotatePlaceholder 4.25s ease-in; }\n\n@-webkit-keyframes animate-error-icon {\n  0% {\n    -webkit-transform: rotateX(100deg);\n            transform: rotateX(100deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg);\n    opacity: 1; } }\n\n@keyframes animate-error-icon {\n  0% {\n    -webkit-transform: rotateX(100deg);\n            transform: rotateX(100deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg);\n    opacity: 1; } }\n\n.swal2-animate-error-icon {\n  -webkit-animation: animate-error-icon .5s;\n          animation: animate-error-icon .5s; }\n\n@-webkit-keyframes animate-x-mark {\n  0% {\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  50% {\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  80% {\n    -webkit-transform: scale(1.15);\n            transform: scale(1.15);\n    margin-top: -6px; }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    margin-top: 0;\n    opacity: 1; } }\n\n@keyframes animate-x-mark {\n  0% {\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  50% {\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  80% {\n    -webkit-transform: scale(1.15);\n            transform: scale(1.15);\n    margin-top: -6px; }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    margin-top: 0;\n    opacity: 1; } }\n\n.swal2-animate-x-mark {\n  -webkit-animation: animate-x-mark .5s;\n          animation: animate-x-mark .5s; }\n\n@-webkit-keyframes rotate-loading {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes rotate-loading {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n"), A
}), "undefined" != typeof window && window.Sweetalert2 && (window.sweetAlert = window.swal = window.Sweetalert2);