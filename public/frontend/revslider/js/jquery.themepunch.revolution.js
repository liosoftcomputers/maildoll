/**************************************************************************
 * jquery.themepunch.revolution.js - jQuery Plugin for Revolution Slider
 * @version: 5.4.8 (10.06.2018)
 * @requires jQuery v1.7 or later (tested on 1.9)
 * @author ThemePunch
 **************************************************************************/
! function (jQuery, undefined) {
    "use strict";
    var version = {
        core: "5.4.8",
        "revolution.extensions.actions.min.js": "2.1.0",
        "revolution.extensions.carousel.min.js": "1.2.1",
        "revolution.extensions.kenburn.min.js": "1.3.1",
        "revolution.extensions.layeranimation.min.js": "3.6.5",
        "revolution.extensions.navigation.min.js": "1.3.5",
        "revolution.extensions.parallax.min.js": "2.2.3",
        "revolution.extensions.slideanims.min.js": "1.8",
        "revolution.extensions.video.min.js": "2.2.2"
    };
    jQuery.fn.extend({
        revolution: function (i) {
            var e = {
                delay: 9e3,
                responsiveLevels: 4064,
                visibilityLevels: [2048, 1024, 778, 480],
                gridwidth: 960,
                gridheight: 500,
                minHeight: 0,
                autoHeight: "off",
                sliderType: "standard",
                sliderLayout: "auto",
                fullScreenAutoWidth: "off",
                fullScreenAlignForce: "off",
                fullScreenOffsetContainer: "",
                fullScreenOffset: "0",
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLimit: 0,
                hideSliderAtLimit: 0,
                disableProgressBar: "off",
                stopAtSlide: -1,
                stopAfterLoops: -1,
                shadow: 0,
                dottedOverlay: "none",
                startDelay: 0,
                lazyType: "smart",
                spinner: "spinner0",
                shuffle: "off",
                viewPort: {
                    enable: !1,
                    outof: "wait",
                    visible_area: "60%",
                    presize: !1
                },
                fallbacks: {
                    isJoomla: !1,
                    panZoomDisableOnMobile: "off",
                    simplifyAll: "on",
                    nextSlideOnWindowFocus: "off",
                    disableFocusListener: !0,
                    ignoreHeightChanges: "off",
                    ignoreHeightChangesSize: 0,
                    allowHTML5AutoPlayOnAndroid: !0
                },
                parallax: {
                    type: "off",
                    levels: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
                    origo: "enterpoint",
                    speed: 400,
                    bgparallax: "off",
                    opacity: "on",
                    disable_onmobile: "off",
                    ddd_shadow: "on",
                    ddd_bgfreeze: "off",
                    ddd_overflow: "visible",
                    ddd_layer_overflow: "visible",
                    ddd_z_correction: 65,
                    ddd_path: "mouse"
                },
                scrolleffect: {
                    fade: "off",
                    blur: "off",
                    scale: "off",
                    grayscale: "off",
                    maxblur: 10,
                    on_layers: "off",
                    on_slidebg: "off",
                    on_static_layers: "off",
                    on_parallax_layers: "off",
                    on_parallax_static_layers: "off",
                    direction: "both",
                    multiplicator: 1.35,
                    multiplicator_layers: .5,
                    tilt: 30,
                    disable_on_mobile: "on"
                },
                carousel: {
                    easing: punchgs.Power3.easeInOut,
                    speed: 800,
                    showLayersAllTime: "off",
                    horizontal_align: "center",
                    vertical_align: "center",
                    infinity: "on",
                    space: 0,
                    maxVisibleItems: 3,
                    stretch: "off",
                    fadeout: "on",
                    maxRotation: 0,
                    minScale: 0,
                    vary_fade: "off",
                    vary_rotation: "on",
                    vary_scale: "off",
                    border_radius: "0px",
                    padding_top: 0,
                    padding_bottom: 0
                },
                navigation: {
                    keyboardNavigation: "off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation: "off",
                    onHoverStop: "on",
                    touch: {
                        touchenabled: "off",
                        touchOnDesktop: "off",
                        swipe_treshold: 75,
                        swipe_min_touches: 1,
                        drag_block_vertical: !1,
                        swipe_direction: "horizontal"
                    },
                    arrows: {
                        style: "",
                        enable: !1,
                        hide_onmobile: !1,
                        hide_onleave: !0,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        tmp: "",
                        rtl: !1,
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 20,
                            v_offset: 0,
                            container: "slider"
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 20,
                            v_offset: 0,
                            container: "slider"
                        }
                    },
                    bullets: {
                        container: "slider",
                        rtl: !1,
                        style: "",
                        enable: !1,
                        hide_onmobile: !1,
                        hide_onleave: !0,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        direction: "horizontal",
                        h_align: "left",
                        v_align: "center",
                        space: 0,
                        h_offset: 20,
                        v_offset: 0,
                        tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>'
                    },
                    thumbnails: {
                        container: "slider",
                        rtl: !1,
                        style: "",
                        enable: !1,
                        width: 100,
                        height: 50,
                        min_width: 100,
                        wrapper_padding: 2,
                        wrapper_color: "#f5f5f5",
                        wrapper_opacity: 1,
                        tmp: '<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>',
                        visibleAmount: 5,
                        hide_onmobile: !1,
                        hide_onleave: !0,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        direction: "horizontal",
                        span: !1,
                        position: "inner",
                        space: 2,
                        h_align: "left",
                        v_align: "center",
                        h_offset: 20,
                        v_offset: 0
                    },
                    tabs: {
                        container: "slider",
                        rtl: !1,
                        style: "",
                        enable: !1,
                        width: 100,
                        min_width: 100,
                        height: 50,
                        wrapper_padding: 10,
                        wrapper_color: "#f5f5f5",
                        wrapper_opacity: 1,
                        tmp: '<span class="tp-tab-image"></span>',
                        visibleAmount: 5,
                        hide_onmobile: !1,
                        hide_onleave: !0,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        direction: "horizontal",
                        span: !1,
                        space: 0,
                        position: "inner",
                        h_align: "left",
                        v_align: "center",
                        h_offset: 20,
                        v_offset: 0
                    }
                },
                extensions: "extensions/",
                extensions_suffix: ".min.js",
                debugMode: !1
            };
            return i = jQuery.extend(!0, {}, e, i), this.each(function () {
                var e = jQuery(this);
                i.minHeight = i.minHeight != undefined ? parseInt(i.minHeight, 0) : i.minHeight, i.scrolleffect.on = "on" === i.scrolleffect.fade || "on" === i.scrolleffect.scale || "on" === i.scrolleffect.blur || "on" === i.scrolleffect.grayscale, "hero" == i.sliderType && e.find(">ul>li").each(function (e) {
                    0 < e && jQuery(this).remove()
                }), i.jsFileLocation = i.jsFileLocation || getScriptLocation("themepunch.revolution.min.js"), i.jsFileLocation = i.jsFileLocation + i.extensions, i.scriptsneeded = getNeededScripts(i, e), i.curWinRange = 0, i.rtl = !0, i.navigation != undefined && i.navigation.touch != undefined && (i.navigation.touch.swipe_min_touches = 5 < i.navigation.touch.swipe_min_touches ? 1 : i.navigation.touch.swipe_min_touches), jQuery(this).on("scriptsloaded", function () {
                    if (i.modulesfailing) return e.html('<div style="margin:auto;line-height:40px;font-size:14px;color:#fff;padding:15px;background:#e74c3c;margin:20px 0px;">!! Error at loading Slider Revolution 5.0 Extrensions.' + i.errorm + "</div>").show(), !1;
                    _R.migration != undefined && (i = _R.migration(e, i)), punchgs.force3D = !0, "on" !== i.simplifyAll && punchgs.TweenLite.lagSmoothing(1e3, 16), prepareOptions(e, i), initSlider(e, i)
                }), e[0].opt = i, waitForScripts(e, i)
            })
        },
        getRSVersion: function (e) {
            if (!0 === e) return jQuery("body").data("tp_rs_version");
            var i = jQuery("body").data("tp_rs_version"),
                t = "";
            for (var a in t += "---------------------------------------------------------\n", t += "    Currently Loaded Slider Revolution & SR Modules :\n", t += "---------------------------------------------------------\n", i) t += i[a].alias + ": " + i[a].ver + "\n";
            return t += "---------------------------------------------------------\n"
        },
        revremoveslide: function (r) {
            return this.each(function () {
                var e = jQuery(this),
                    i = e[0].opt;
                if (!(r < 0 || r > i.slideamount) && e != undefined && 0 < e.length && 0 < jQuery("body").find("#" + e.attr("id")).length && i && 0 < i.li.length && (0 < r || r <= i.li.length)) {
                    var t = jQuery(i.li[r]),
                        a = t.data("index"),
                        n = !1;
                    i.slideamount = i.slideamount - 1, i.realslideamount = i.realslideamount - 1, removeNavWithLiref(".tp-bullet", a, i), removeNavWithLiref(".tp-tab", a, i), removeNavWithLiref(".tp-thumb", a, i), t.hasClass("active-revslide") && (n = !0), t.remove(), i.li = removeArray(i.li, r), i.carousel && i.carousel.slides && (i.carousel.slides = removeArray(i.carousel.slides, r)), i.thumbs = removeArray(i.thumbs, r), _R.updateNavIndexes && _R.updateNavIndexes(i), n && e.revnext(), punchgs.TweenLite.set(i.li, {
                        minWidth: "99%"
                    }), punchgs.TweenLite.set(i.li, {
                        minWidth: "100%"
                    })
                }
            })
        },
        revaddcallback: function (e) {
            return this.each(function () {
                this.opt && (this.opt.callBackArray === undefined && (this.opt.callBackArray = new Array), this.opt.callBackArray.push(e))
            })
        },
        revgetparallaxproc: function () {
            return jQuery(this)[0].opt.scrollproc
        },
        revdebugmode: function () {
            return this.each(function () {
                var e = jQuery(this);
                e[0].opt.debugMode = !0, containerResized(e, e[0].opt)
            })
        },
        revscroll: function (i) {
            return this.each(function () {
                var e = jQuery(this);
                jQuery("body,html").animate({
                    scrollTop: e.offset().top + e.height() - i + "px"
                }, {
                    duration: 400
                })
            })
        },
        revredraw: function (e) {
            return this.each(function () {
                var e = jQuery(this);
                containerResized(e, e[0].opt)
            })
        },
        revkill: function (e) {
            var i = this,
                t = jQuery(this);
            if (punchgs.TweenLite.killDelayedCallsTo(_R.showHideNavElements), t != undefined && 0 < t.length && 0 < jQuery("body").find("#" + t.attr("id")).length) {
                t.data("conthover", 1), t.data("conthover-changed", 1), t.trigger("revolution.slide.onpause");
                var a = t.parent().find(".tp-bannertimer"),
                    n = t[0].opt;
                n.tonpause = !0, t.trigger("stoptimer");
                var r = "resize.revslider-" + t.attr("id");
                jQuery(window).unbind(r), punchgs.TweenLite.killTweensOf(t.find("*"), !1), punchgs.TweenLite.killTweensOf(t, !1), t.unbind("hover, mouseover, mouseenter,mouseleave, resize");
                r = "resize.revslider-" + t.attr("id");
                jQuery(window).off(r), t.find("*").each(function () {
                    var e = jQuery(this);
                    e.unbind("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer"), e.off("on, hover, mouseenter,mouseleave,mouseover, resize"), e.data("mySplitText", null), e.data("ctl", null), e.data("tween") != undefined && e.data("tween").kill(), e.data("kenburn") != undefined && e.data("kenburn").kill(), e.data("timeline_out") != undefined && e.data("timeline_out").kill(), e.data("timeline") != undefined && e.data("timeline").kill(), e.remove(), e.empty(), e = null
                }), punchgs.TweenLite.killTweensOf(t.find("*"), !1), punchgs.TweenLite.killTweensOf(t, !1), a.remove();
                try {
                    t.closest(".forcefullwidth_wrapper_tp_banner").remove()
                } catch (e) {}
                try {
                    t.closest(".rev_slider_wrapper").remove()
                } catch (e) {}
                try {
                    t.remove()
                } catch (e) {}
                return t.empty(), t.html(), n = t = null, delete i.c, delete i.opt, delete i.container, !0
            }
            return !1
        },
        revpause: function () {
            return this.each(function () {
                var e = jQuery(this);
                e != undefined && 0 < e.length && 0 < jQuery("body").find("#" + e.attr("id")).length && (e.data("conthover", 1), e.data("conthover-changed", 1), e.trigger("revolution.slide.onpause"), e[0].opt.tonpause = !0, e.trigger("stoptimer"))
            })
        },
        revresume: function () {
            return this.each(function () {
                var e = jQuery(this);
                e != undefined && 0 < e.length && 0 < jQuery("body").find("#" + e.attr("id")).length && (e.data("conthover", 0), e.data("conthover-changed", 1), e.trigger("revolution.slide.onresume"), e[0].opt.tonpause = !1, e.trigger("starttimer"))
            })
        },
        revstart: function () {
            var e = jQuery(this);
            if (e != undefined && 0 < e.length && 0 < jQuery("body").find("#" + e.attr("id")).length && e[0].opt !== undefined) return e[0].opt.sliderisrunning ? (console.log("Slider Is Running Already"), !1) : ((e[0].opt.c = e)[0].opt.ul = e.find(">ul"), runSlider(e, e[0].opt), !0)
        },
        revnext: function () {
            return this.each(function () {
                var e = jQuery(this);
                e != undefined && 0 < e.length && 0 < jQuery("body").find("#" + e.attr("id")).length && _R.callingNewSlide(e, 1)
            })
        },
        revprev: function () {
            return this.each(function () {
                var e = jQuery(this);
                e != undefined && 0 < e.length && 0 < jQuery("body").find("#" + e.attr("id")).length && _R.callingNewSlide(e, -1)
            })
        },
        revmaxslide: function () {
            return jQuery(this).find(".tp-revslider-mainul >li").length
        },
        revcurrentslide: function () {
            var e = jQuery(this);
            if (e != undefined && 0 < e.length && 0 < jQuery("body").find("#" + e.attr("id")).length) return parseInt(e[0].opt.act, 0) + 1
        },
        revlastslide: function () {
            return jQuery(this).find(".tp-revslider-mainul >li").length
        },
        revshowslide: function (i) {
            return this.each(function () {
                var e = jQuery(this);
                e != undefined && 0 < e.length && 0 < jQuery("body").find("#" + e.attr("id")).length && _R.callingNewSlide(e, "to" + (i - 1))
            })
        },
        revcallslidewithid: function (i) {
            return this.each(function () {
                var e = jQuery(this);
                e != undefined && 0 < e.length && 0 < jQuery("body").find("#" + e.attr("id")).length && _R.callingNewSlide(e, i)
            })
        }
    });
    var _R = jQuery.fn.revolution;
    jQuery.extend(!0, _R, {
        getversion: function () {
            return version
        },
        compare_version: function (e) {
            var i = jQuery("body").data("tp_rs_version");
            return (i = i === undefined ? new Object : i).Core === undefined && (i.Core = new Object, i.Core.alias = "Slider Revolution Core", i.Core.name = "jquery.themepunch.revolution.min.js", i.Core.ver = _R.getversion().core), "stop" != e.check && (_R.getversion().core < e.min_core ? (e.check === undefined && (console.log("%cSlider Revolution Warning (Core:" + _R.getversion().core + ")", "color:#c0392b;font-weight:bold;"), console.log("%c     Core is older than expected (" + e.min_core + ") from " + e.alias, "color:#333"), console.log("%c     Please update Slider Revolution to the latest version.", "color:#333"), console.log("%c     It might be required to purge and clear Server/Client side Caches.", "color:#333")), e.check = "stop") : _R.getversion()[e.name] != undefined && e.version < _R.getversion()[e.name] && (e.check === undefined && (console.log("%cSlider Revolution Warning (Core:" + _R.getversion().core + ")", "color:#c0392b;font-weight:bold;"), console.log("%c     " + e.alias + " (" + e.version + ") is older than requiered (" + _R.getversion()[e.name] + ")", "color:#333"), console.log("%c     Please update Slider Revolution to the latest version.", "color:#333"), console.log("%c     It might be required to purge and clear Server/Client side Caches.", "color:#333")), e.check = "stop")), i[e.alias] === undefined && (i[e.alias] = new Object, i[e.alias].alias = e.alias, i[e.alias].ver = e.version, i[e.alias].name = e.name), jQuery("body").data("tp_rs_version", i), e
        },
        currentSlideIndex: function (e) {
            var i = e.c.find(".active-revslide").index();
            return i = -1 == i ? 0 : i
        },
        simp: function (e, i, t) {
            var a = Math.abs(e) - Math.floor(Math.abs(e / i)) * i;
            return t ? a : e < 0 ? -1 * a : a
        },
        iOSVersion: function () {
            var e = !1;
            return navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) ? navigator.userAgent.match(/OS 4_\d like Mac OS X/i) && (e = !0) : e = !1, e
        },
        isIE: function (e, i) {
            var t = jQuery('<div style="display:none;"/>').appendTo(jQuery("body"));
            t.html("\x3c!--[if " + (i || "") + " IE " + (e || "") + "]><a>&nbsp;</a><![endif]--\x3e");
            var a = t.find("a").length;
            return t.remove(), a
        },
        is_mobile: function () {
            var e = ["android", "webos", "iphone", "ipad", "blackberry", "Android", "webos", , "iPod", "iPhone", "iPad", "Blackberry", "BlackBerry"],
                i = !1;
            for (var t in e) 1 < navigator.userAgent.split(e[t]).length && (i = !0);
            return i
        },
        is_android: function () {
            var e = ["android", "Android"],
                i = !1;
            for (var t in e) 1 < navigator.userAgent.split(e[t]).length && (i = !0);
            return i
        },
        callBackHandling: function (e, t, a) {
            try {
                e.callBackArray && jQuery.each(e.callBackArray, function (e, i) {
                    i && i.inmodule && i.inmodule === t && i.atposition && i.atposition === a && i.callback && i.callback.call()
                })
            } catch (e) {
                console.log("Call Back Failed")
            }
        },
        get_browser: function () {
            var e, i = navigator.appName,
                t = navigator.userAgent,
                a = t.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
            return a && null != (e = t.match(/version\/([\.\d]+)/i)) && (a[2] = e[1]), (a = a ? [a[1], a[2]] : [i, navigator.appVersion, "-?"])[0]
        },
        get_browser_version: function () {
            var e, i = navigator.appName,
                t = navigator.userAgent,
                a = t.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
            return a && null != (e = t.match(/version\/([\.\d]+)/i)) && (a[2] = e[1]), (a = a ? [a[1], a[2]] : [i, navigator.appVersion, "-?"])[1]
        },
        isSafari11: function () {
            var e = jQuery.trim(_R.get_browser().toLowerCase());
            return -1 === jQuery.trim(navigator.userAgent.toLowerCase()).search("edge") && "msie" !== e && e.match(/safari|chrome/)
        },
        getHorizontalOffset: function (e, i) {
            var t = gWiderOut(e, ".outer-left"),
                a = gWiderOut(e, ".outer-right");
            switch (i) {
                case "left":
                    return t;
                case "right":
                    return a;
                case "both":
                    return t + a
            }
        },
        callingNewSlide: function (e, i) {
            var t = 0 < e.find(".next-revslide").length ? e.find(".next-revslide").index() : 0 < e.find(".processing-revslide").length ? e.find(".processing-revslide").index() : e.find(".active-revslide").index(),
                a = 0,
                n = e[0].opt;
            e.find(".next-revslide").removeClass("next-revslide"), e.find(".active-revslide").hasClass("tp-invisible-slide") && (t = n.last_shown_slide), i && jQuery.isNumeric(i) || i.match(/to/g) ? (a = 1 === i || -1 === i ? (a = t + i) < 0 ? n.slideamount - 1 : a >= n.slideamount ? 0 : a : (i = jQuery.isNumeric(i) ? i : parseInt(i.split("to")[1], 0)) < 0 ? 0 : i > n.slideamount - 1 ? n.slideamount - 1 : i, e.find(".tp-revslider-slidesli:eq(" + a + ")").addClass("next-revslide")) : i && e.find(".tp-revslider-slidesli").each(function () {
                var e = jQuery(this);
                e.data("index") === i && e.addClass("next-revslide")
            }), a = e.find(".next-revslide").index(), e.trigger("revolution.nextslide.waiting"), t === a && t === n.last_shown_slide || a !== t && -1 != a ? swapSlide(e) : e.find(".next-revslide").removeClass("next-revslide")
        },
        slotSize: function (e, i) {
            i.slotw = Math.ceil(i.width / i.slots), "fullscreen" == i.sliderLayout ? i.sloth = Math.ceil(jQuery(window).height() / i.slots) : i.sloth = Math.ceil(i.height / i.slots), "on" == i.autoHeight && e !== undefined && "" !== e && (i.sloth = Math.ceil(e.height() / i.slots))
        },
        setSize: function (e) {
            var i = (e.top_outer || 0) + (e.bottom_outer || 0),
                t = parseInt(e.carousel.padding_top || 0, 0),
                a = parseInt(e.carousel.padding_bottom || 0, 0),
                n = e.gridheight[e.curWinRange],
                r = 0,
                o = -1 === e.nextSlide || e.nextSlide === undefined ? 0 : e.nextSlide;
            if (e.paddings = e.paddings === undefined ? {
                    top: parseInt(e.c.parent().css("paddingTop"), 0) || 0,
                    bottom: parseInt(e.c.parent().css("paddingBottom"), 0) || 0
                } : e.paddings, e.rowzones && 0 < e.rowzones.length)
                for (var s = 0; s < e.rowzones[o].length; s++) r += e.rowzones[o][s][0].offsetHeight;
            if (n = (n = n < e.minHeight ? e.minHeight : n) < r ? r : n, "fullwidth" == e.sliderLayout && "off" == e.autoHeight && punchgs.TweenLite.set(e.c, {
                    maxHeight: n + "px"
                }), e.c.css({
                    marginTop: t,
                    marginBottom: a
                }), e.width = e.ul.width(), e.height = e.ul.height(), setScale(e), e.height = Math.round(e.gridheight[e.curWinRange] * (e.width / e.gridwidth[e.curWinRange])), e.height > e.gridheight[e.curWinRange] && "on" != e.autoHeight && (e.height = e.gridheight[e.curWinRange]), "fullscreen" == e.sliderLayout || e.infullscreenmode) {
                e.height = e.bw * e.gridheight[e.curWinRange];
                e.c.parent().width();
                var l = jQuery(window).height();
                if (e.fullScreenOffsetContainer != undefined) {
                    try {
                        var d = e.fullScreenOffsetContainer.split(",");
                        d && jQuery.each(d, function (e, i) {
                            l = 0 < jQuery(i).length ? l - jQuery(i).outerHeight(!0) : l
                        })
                    } catch (e) {}
                    try {
                        1 < e.fullScreenOffset.split("%").length && e.fullScreenOffset != undefined && 0 < e.fullScreenOffset.length ? l -= jQuery(window).height() * parseInt(e.fullScreenOffset, 0) / 100 : e.fullScreenOffset != undefined && 0 < e.fullScreenOffset.length && (l -= parseInt(e.fullScreenOffset, 0))
                    } catch (e) {}
                }
                l = l < e.minHeight ? e.minHeight : l, l -= i, e.c.parent().height(l), e.c.closest(".rev_slider_wrapper").height(l), e.c.css({
                    height: "100%"
                }), e.height = l, e.minHeight != undefined && e.height < e.minHeight && (e.height = e.minHeight), e.height = parseInt(r, 0) > parseInt(e.height, 0) ? r : e.height
            } else e.minHeight != undefined && e.height < e.minHeight && (e.height = e.minHeight), e.height = parseInt(r, 0) > parseInt(e.height, 0) ? r : e.height, e.c.height(e.height);
            var c = {
                height: t + a + i + e.height + e.paddings.top + e.paddings.bottom
            };
            e.c.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css(c), e.c.closest(".rev_slider_wrapper").css(c), setScale(e)
        },
        enterInViewPort: function (t) {
            t.waitForCountDown && (countDown(t.c, t), t.waitForCountDown = !1), t.waitForFirstSlide && (swapSlide(t.c), t.waitForFirstSlide = !1, setTimeout(function () {
                t.c.removeClass("tp-waitforfirststart")
            }, 500)), "playing" != t.sliderlaststatus && t.sliderlaststatus != undefined || t.c.trigger("starttimer"), t.lastplayedvideos != undefined && 0 < t.lastplayedvideos.length && jQuery.each(t.lastplayedvideos, function (e, i) {
                _R.playVideo(i, t)
            })
        },
        leaveViewPort: function (t) {
            t.sliderlaststatus = t.sliderstatus, t.c.trigger("stoptimer"), t.playingvideos != undefined && 0 < t.playingvideos.length && (t.lastplayedvideos = jQuery.extend(!0, [], t.playingvideos), t.playingvideos && jQuery.each(t.playingvideos, function (e, i) {
                t.leaveViewPortBasedStop = !0, _R.stopVideo && _R.stopVideo(i, t)
            }))
        },
        unToggleState: function (e) {
            e != undefined && 0 < e.length && jQuery.each(e, function (e, i) {
                i.removeClass("rs-toggle-content-active")
            })
        },
        toggleState: function (e) {
            e != undefined && 0 < e.length && jQuery.each(e, function (e, i) {
                i.addClass("rs-toggle-content-active")
            })
        },
        swaptoggleState: function (e) {
            e != undefined && 0 < e.length && jQuery.each(e, function (e, i) {
                jQuery(i).hasClass("rs-toggle-content-active") ? jQuery(i).removeClass("rs-toggle-content-active") : jQuery(i).addClass("rs-toggle-content-active")
            })
        },
        lastToggleState: function (e) {
            var t = 0;
            return e != undefined && 0 < e.length && jQuery.each(e, function (e, i) {
                t = i.hasClass("rs-toggle-content-active")
            }), t
        }
    });
    var _ISM = _R.is_mobile(),
        _ANDROID = _R.is_android(),
        checkIDS = function (e, i) {
            if (e.anyid = e.anyid === undefined ? [] : e.anyid, -1 != jQuery.inArray(i.attr("id"), e.anyid)) {
                var t = i.attr("id") + "_" + Math.round(9999 * Math.random());
                i.attr("id", t)
            }
            e.anyid.push(i.attr("id"))
        },
        removeArray = function (e, t) {
            var a = [];
            return jQuery.each(e, function (e, i) {
                e != t && a.push(i)
            }), a
        },
        removeNavWithLiref = function (e, i, t) {
            t.c.find(e).each(function () {
                var e = jQuery(this);
                e.data("liref") === i && e.remove()
            })
        },
        lAjax = function (i, t) {
            return !jQuery("body").data(i) && (t.filesystem ? (t.errorm === undefined && (t.errorm = "<br>Local Filesystem Detected !<br>Put this to your header:"), console.warn("Local Filesystem detected !"), t.errorm = t.errorm + '<br>&lt;script type="text/javascript" src="' + t.jsFileLocation + i + t.extensions_suffix + '"&gt;&lt;/script&gt;', console.warn(t.jsFileLocation + i + t.extensions_suffix + " could not be loaded !"), console.warn("Please use a local Server or work online or make sure that you load all needed Libraries manually in your Document."), console.log(" "), !(t.modulesfailing = !0)) : (jQuery.ajax({
                url: t.jsFileLocation + i + t.extensions_suffix + "?version=" + version.core,
                dataType: "script",
                cache: !0,
                error: function (e) {
                    console.warn("Slider Revolution 5.0 Error !"), console.error("Failure at Loading:" + i + t.extensions_suffix + " on Path:" + t.jsFileLocation), console.info(e)
                }
            }), void jQuery("body").data(i, !0)))
        },
        getNeededScripts = function (t, e) {
            var i = new Object,
                a = t.navigation;
            return i.kenburns = !1, i.parallax = !1, i.carousel = !1, i.navigation = !1, i.videos = !1, i.actions = !1, i.layeranim = !1, i.migration = !1, e.data("version") && e.data("version").toString().match(/5./gi) ? (e.find("img").each(function () {
                "on" == jQuery(this).data("kenburns") && (i.kenburns = !0)
            }), ("carousel" == t.sliderType || "on" == a.keyboardNavigation || "on" == a.mouseScrollNavigation || "on" == a.touch.touchenabled || a.arrows.enable || a.bullets.enable || a.thumbnails.enable || a.tabs.enable) && (i.navigation = !0), e.find(".tp-caption, .tp-static-layer, .rs-background-video-layer").each(function () {
                var e = jQuery(this);
                (e.data("ytid") != undefined || 0 < e.find("iframe").length && 0 < e.find("iframe").attr("src").toLowerCase().indexOf("youtube")) && (i.videos = !0), (e.data("vimeoid") != undefined || 0 < e.find("iframe").length && 0 < e.find("iframe").attr("src").toLowerCase().indexOf("vimeo")) && (i.videos = !0), e.data("actions") !== undefined && (i.actions = !0), i.layeranim = !0
            }), e.find("li").each(function () {
                jQuery(this).data("link") && jQuery(this).data("link") != undefined && (i.layeranim = !0, i.actions = !0)
            }), !i.videos && (0 < e.find(".rs-background-video-layer").length || 0 < e.find(".tp-videolayer").length || 0 < e.find(".tp-audiolayer").length || 0 < e.find("iframe").length || 0 < e.find("video").length) && (i.videos = !0), "carousel" == t.sliderType && (i.carousel = !0), ("off" !== t.parallax.type || t.viewPort.enable || "true" == t.viewPort.enable || "true" === t.scrolleffect.on || t.scrolleffect.on) && (i.parallax = !0)) : (i.kenburns = !0, i.parallax = !0, i.carousel = !1, i.navigation = !0, i.videos = !0, i.actions = !0, i.layeranim = !0, i.migration = !0), "hero" == t.sliderType && (i.carousel = !1, i.navigation = !1), window.location.href.match(/file:/gi) && (i.filesystem = !0, t.filesystem = !0), i.videos && void 0 === _R.isVideoPlaying && lAjax("revolution.extension.video", t), i.carousel && void 0 === _R.prepareCarousel && lAjax("revolution.extension.carousel", t), i.carousel || void 0 !== _R.animateSlide || lAjax("revolution.extension.slideanims", t), i.actions && void 0 === _R.checkActions && lAjax("revolution.extension.actions", t), i.layeranim && void 0 === _R.handleStaticLayers && lAjax("revolution.extension.layeranimation", t), i.kenburns && void 0 === _R.stopKenBurn && lAjax("revolution.extension.kenburn", t), i.navigation && void 0 === _R.createNavigation && lAjax("revolution.extension.navigation", t), i.migration && void 0 === _R.migration && lAjax("revolution.extension.migration", t), i.parallax && void 0 === _R.checkForParallax && lAjax("revolution.extension.parallax", t), t.addons != undefined && 0 < t.addons.length && jQuery.each(t.addons, function (e, i) {
                "object" == typeof i && i.fileprefix != undefined && lAjax(i.fileprefix, t)
            }), i
        },
        waitForScripts = function (e, i) {
            var t = !0,
                a = i.scriptsneeded;
            i.addons != undefined && 0 < i.addons.length && jQuery.each(i.addons, function (e, i) {
                "object" == typeof i && i.init != undefined && _R[i.init] === undefined && (t = !1)
            }), a.filesystem || "undefined" != typeof punchgs && t && (!a.kenburns || a.kenburns && void 0 !== _R.stopKenBurn) && (!a.navigation || a.navigation && void 0 !== _R.createNavigation) && (!a.carousel || a.carousel && void 0 !== _R.prepareCarousel) && (!a.videos || a.videos && void 0 !== _R.resetVideo) && (!a.actions || a.actions && void 0 !== _R.checkActions) && (!a.layeranim || a.layeranim && void 0 !== _R.handleStaticLayers) && (!a.migration || a.migration && void 0 !== _R.migration) && (!a.parallax || a.parallax && void 0 !== _R.checkForParallax) && (a.carousel || !a.carousel && void 0 !== _R.animateSlide) ? e.trigger("scriptsloaded") : setTimeout(function () {
                waitForScripts(e, i)
            }, 50)
        },
        getScriptLocation = function (e) {
            var i = new RegExp("themepunch.revolution.min.js", "gi"),
                t = "";
            return jQuery("script").each(function () {
                var e = jQuery(this).attr("src");
                e && e.match(i) && (t = e)
            }), t = (t = (t = t.replace("jquery.themepunch.revolution.min.js", "")).replace("jquery.themepunch.revolution.js", "")).split("?")[0]
        },
        setCurWinRange = function (e, i) {
            var t = 9999,
                a = 0,
                n = 0,
                r = 0,
                o = jQuery(window).width(),
                s = i && 9999 == e.responsiveLevels ? e.visibilityLevels : e.responsiveLevels;
            s && s.length && jQuery.each(s, function (e, i) {
                o < i && (0 == a || i < a) && (r = e, a = t = i), i < o && a < i && (a = i, n = e)
            }), a < t && (r = n), i ? e.forcedWinRange = r : e.curWinRange = r
        },
        prepareOptions = function (e, i) {
            i.carousel.maxVisibleItems = i.carousel.maxVisibleItems < 1 ? 999 : i.carousel.maxVisibleItems, i.carousel.vertical_align = "top" === i.carousel.vertical_align ? "0%" : "bottom" === i.carousel.vertical_align ? "100%" : "50%"
        },
        gWiderOut = function (e, i) {
            var t = 0;
            return e.find(i).each(function () {
                var e = jQuery(this);
                !e.hasClass("tp-forcenotvisible") && t < e.outerWidth() && (t = e.outerWidth())
            }), t
        },
        initSlider = function (container, opt) {
            if (container == undefined) return !1;
            container.data("aimg") != undefined && ("enabled" == container.data("aie8") && _R.isIE(8) || "enabled" == container.data("amobile") && _ISM) && container.html('<img class="tp-slider-alternative-image" src="' + container.data("aimg") + '">'), container.find(">ul").addClass("tp-revslider-mainul"), opt.c = container, opt.ul = container.find(".tp-revslider-mainul"), opt.ul.find(">li").each(function (e) {
                var i = jQuery(this);
                "on" == i.data("hideslideonmobile") && _ISM && i.remove(), (i.data("invisible") || !0 === i.data("invisible")) && (i.addClass("tp-invisible-slide"), i.appendTo(opt.ul))
            }), opt.addons != undefined && 0 < opt.addons.length && jQuery.each(opt.addons, function (i, obj) {
                "object" == typeof obj && obj.init != undefined && _R[obj.init](eval(obj.params))
            }), opt.cid = container.attr("id"), opt.ul.css({
                visibility: "visible"
            }), opt.slideamount = opt.ul.find(">li").not(".tp-invisible-slide").length, opt.realslideamount = opt.ul.find(">li").length, opt.slayers = container.find(".tp-static-layers"), opt.slayers.data("index", "staticlayers"), 1 != opt.waitForInit && (container[0].opt = opt, runSlider(container, opt))
        },
        onFullScreenChange = function () {
            jQuery("body").data("rs-fullScreenMode", !jQuery("body").data("rs-fullScreenMode")), jQuery("body").data("rs-fullScreenMode") && setTimeout(function () {
                jQuery(window).trigger("resize")
            }, 200)
        },
        runSlider = function (t, x) {
            if (x.sliderisrunning = !0, x.ul.find(">li").each(function (e) {
                    jQuery(this).data("originalindex", e)
                }), x.allli = x.ul.find(">li"), jQuery.each(x.allli, function (e, i) {
                    (i = jQuery(i)).data("origindex", i.index())
                }), x.li = x.ul.find(">li").not(".tp-invisible-slide"), "on" == x.shuffle) {
                var e = new Object,
                    i = x.ul.find(">li:first-child");
                e.fstransition = i.data("fstransition"), e.fsmasterspeed = i.data("fsmasterspeed"), e.fsslotamount = i.data("fsslotamount");
                for (var a = 0; a < x.slideamount; a++) {
                    var n = Math.round(Math.random() * x.slideamount);
                    x.ul.find(">li:eq(" + n + ")").prependTo(x.ul)
                }
                var r = x.ul.find(">li:first-child");
                r.data("fstransition", e.fstransition), r.data("fsmasterspeed", e.fsmasterspeed), r.data("fsslotamount", e.fsslotamount), x.allli = x.ul.find(">li"), x.li = x.ul.find(">li").not(".tp-invisible-slide")
            }
            if (x.inli = x.ul.find(">li.tp-invisible-slide"), x.thumbs = new Array, x.slots = 4, x.act = -1, x.firststart = 1, x.loadqueue = new Array, x.syncload = 0, x.conw = t.width(), x.conh = t.height(), 1 < x.responsiveLevels.length ? x.responsiveLevels[0] = 9999 : x.responsiveLevels = 9999, jQuery.each(x.allli, function (e, i) {
                    var t = (i = jQuery(i)).find(".rev-slidebg") || i.find("img").first(),
                        a = 0;
                    i.addClass("tp-revslider-slidesli"), i.data("index") === undefined && i.data("index", "rs-" + Math.round(999999 * Math.random()));
                    var n = new Object;
                    n.params = new Array, n.id = i.data("index"), n.src = i.data("thumb") !== undefined ? i.data("thumb") : t.data("lazyload") !== undefined ? t.data("lazyload") : t.attr("src"), i.data("title") !== undefined && n.params.push({
                        from: RegExp("\\{\\{title\\}\\}", "g"),
                        to: i.data("title")
                    }), i.data("description") !== undefined && n.params.push({
                        from: RegExp("\\{\\{description\\}\\}", "g"),
                        to: i.data("description")
                    });
                    for (a = 1; a <= 10; a++) i.data("param" + a) !== undefined && n.params.push({
                        from: RegExp("\\{\\{param" + a + "\\}\\}", "g"),
                        to: i.data("param" + a)
                    });
                    if (x.thumbs.push(n), i.data("link") != undefined) {
                        var r = i.data("link"),
                            o = i.data("target") || "_self",
                            s = "back" === i.data("slideindex") ? 0 : 60,
                            l = i.data("linktoslide"),
                            d = l;
                        l != undefined && "next" != l && "prev" != l && x.allli.each(function () {
                            var e = jQuery(this);
                            e.data("origindex") + 1 == d && (l = e.data("index"))
                        }), "slide" != r && (l = "no");
                        var c = '<div class="tp-caption slidelink" style="cursor:pointer;width:100%;height:100%;z-index:' + s + ';" data-x="center" data-y="center" data-basealign="slide" ',
                            u = ' data-frames=\'[{"delay":0,"speed":100,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]\'';
                        c = "no" == l ? c + u + " >" : c + "data-actions='" + ("scroll_under" === l ? '[{"event":"click","action":"scrollbelow","offset":"100px","delay":"0"}]' : "prev" === l ? '[{"event":"click","action":"jumptoslide","slide":"prev","delay":"0.2"}]' : "next" === l ? '[{"event":"click","action":"jumptoslide","slide":"next","delay":"0.2"}]' : '[{"event":"click","action":"jumptoslide","slide":"' + l + '","delay":"0.2"}]') + "'" + u + " >", c += '<a style="width:100%;height:100%;display:block"', c = "slide" != r ? c + ' target="' + o + '" href="' + r + '"' : c, c += '><span style="width:100%;height:100%;display:block"></span></a></div>', i.append(c)
                    }
                }), x.rle = x.responsiveLevels.length || 1, x.gridwidth = cArray(x.gridwidth, x.rle), x.gridheight = cArray(x.gridheight, x.rle), "on" == x.simplifyAll && (_R.isIE(8) || _R.iOSVersion()) && (t.find(".tp-caption").each(function () {
                    var e = jQuery(this);
                    e.removeClass("customin customout").addClass("fadein fadeout"), e.data("splitin", ""), e.data("speed", 400)
                }), x.allli.each(function () {
                    var e = jQuery(this);
                    e.data("transition", "fade"), e.data("masterspeed", 500), e.data("slotamount", 1), (e.find(".rev-slidebg") || e.find(">img").first()).data("kenburns", "off")
                })), x.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), x.autoHeight = "fullscreen" == x.sliderLayout ? "on" : x.autoHeight, "fullwidth" == x.sliderLayout && "off" == x.autoHeight && t.css({
                    maxHeight: x.gridheight[x.curWinRange] + "px"
                }), "auto" != x.sliderLayout && 0 == t.closest(".forcefullwidth_wrapper_tp_banner").length && ("fullscreen" !== x.sliderLayout || "on" != x.fullScreenAutoWidth)) {
                var o = t.parent(),
                    s = o.css("marginBottom"),
                    l = o.css("marginTop"),
                    d = t.attr("id") + "_forcefullwidth";
                s = s === undefined ? 0 : s, l = l === undefined ? 0 : l, o.wrap('<div class="forcefullwidth_wrapper_tp_banner" id="' + d + '" style="position:relative;width:100%;height:auto;margin-top:' + l + ";margin-bottom:" + s + '"></div>'), t.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:' + t.height() + 'px"></div>'), t.parent().css({
                    marginTop: "0px",
                    marginBottom: "0px"
                }), t.parent().css({
                    position: "absolute"
                })
            }
            if (x.shadow !== undefined && 0 < x.shadow && (t.parent().addClass("tp-shadow" + x.shadow), t.parent().append('<div class="tp-shadowcover"></div>'), t.parent().find(".tp-shadowcover").css({
                    backgroundColor: t.parent().css("backgroundColor"),
                    backgroundImage: t.parent().css("backgroundImage")
                })), setCurWinRange(x), setCurWinRange(x, !0), !t.hasClass("revslider-initialised")) {
                t.addClass("revslider-initialised"), t.addClass("tp-simpleresponsive"), t.attr("id") == undefined && t.attr("id", "revslider-" + Math.round(1e3 * Math.random() + 5)), checkIDS(x, t), x.firefox13 = !1, x.ie = !jQuery.support.opacity, x.ie9 = 9 == document.documentMode, x.origcd = x.delay;
                var c = jQuery.fn.jquery.split("."),
                    u = parseFloat(c[0]),
                    p = parseFloat(c[1]);
                parseFloat(c[2] || "0");
                1 == u && p < 7 && t.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' + c + " <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"), 1 < u && (x.ie = !1);
                var j = new Object;
                j.addedyt = 0, j.addedvim = 0, j.addedvid = 0, x.scrolleffect.on && (x.scrolleffect.layers = new Array), t.find(".tp-caption, .rs-background-video-layer").each(function (e) {
                    var n = jQuery(this),
                        i = n.data(),
                        t = i.autoplayonlyfirsttime,
                        a = i.autoplay,
                        r = (i.videomp4 !== undefined || i.videowebm !== undefined || i.videoogv, n.hasClass("tp-audiolayer")),
                        o = i.videoloop,
                        s = !0,
                        l = !1;
                    i.startclasses = n.attr("class"), i.isparallaxlayer = 0 <= i.startclasses.indexOf("rs-parallax"), n.hasClass("tp-static-layer") && _R.handleStaticLayers && (_R.handleStaticLayers(n, x), x.scrolleffect.on && ("on" === x.scrolleffect.on_parallax_static_layers && i.isparallaxlayer || "on" === x.scrolleffect.on_static_layers && !i.isparallaxlayer) && (l = !0), s = !1);
                    var d = n.data("noposteronmobile") || n.data("noPosterOnMobile") || n.data("posteronmobile") || n.data("posterOnMobile") || n.data("posterOnMObile");
                    n.data("noposteronmobile", d);
                    var c = 0;
                    if (n.find("iframe").each(function () {
                            punchgs.TweenLite.set(jQuery(this), {
                                autoAlpha: 0
                            }), c++
                        }), 0 < c && n.data("iframes", !0), n.hasClass("tp-caption")) {
                        var u = n.hasClass("slidelink") ? "width:100% !important;height:100% !important;" : "",
                            p = n.data(),
                            f = "",
                            h = p.type,
                            g = "row" === h || "column" === h ? "relative" : "absolute",
                            v = "";
                        "row" === h ? (n.addClass("rev_row").removeClass("tp-resizeme"), v = "rev_row_wrap") : "column" === h ? (f = p.verticalalign === undefined ? " vertical-align:bottom;" : " vertical-align:" + p.verticalalign + ";", v = "rev_column", n.addClass("rev_column_inner").removeClass("tp-resizeme"), n.data("width", "auto"), punchgs.TweenLite.set(n, {
                            width: "auto"
                        })) : "group" === h && n.removeClass("tp-resizeme");
                        var m = "",
                            y = "";
                        "row" !== h && "group" !== h && "column" !== h ? (m = "display:" + n.css("display") + ";", 0 < n.closest(".rev_column").length ? (n.addClass("rev_layer_in_column"), s = !1) : 0 < n.closest(".rev_group").length && (n.addClass("rev_layer_in_group"), s = !1)) : "column" === h && (s = !1), p.wrapper_class !== undefined && (v = v + " " + p.wrapper_class), p.wrapper_id !== undefined && (y = 'id="' + p.wrapper_id + '"');
                        var w = "";
                        n.hasClass("tp-no-events") && (w = ";pointer-events:none"), n.wrap("<div " + y + ' class="tp-parallax-wrap ' + v + '" style="' + f + " " + u + "position:" + g + ";" + m + ";visibility:hidden" + w + '"><div class="tp-loop-wrap" style="' + u + "position:" + g + ";" + m + ';"><div class="tp-mask-wrap" style="' + u + "position:" + g + ";" + m + ';" ></div></div></div>'), s && x.scrolleffect.on && ("on" === x.scrolleffect.on_parallax_layers && i.isparallaxlayer || "on" === x.scrolleffect.on_layers && !i.isparallaxlayer) && x.scrolleffect.layers.push(n.parent()), l && x.scrolleffect.layers.push(n.parent()), "column" === h && (n.append('<div class="rev_column_bg rev_column_bg_man_sized" style="visibility:hidden"></div>'), n.closest(".tp-parallax-wrap").append('<div class="rev_column_bg rev_column_bg_auto_sized"></div>'));
                        var b = n.closest(".tp-loop-wrap");
                        jQuery.each(["pendulum", "rotate", "slideloop", "pulse", "wave"], function (e, i) {
                            var t = n.find(".rs-" + i),
                                a = t.data() || "";
                            "" != a && (b.data(a), b.addClass("rs-" + i), t.children(0).unwrap(), n.data("loopanimation", "on"))
                        }), n.attr("id") === undefined && n.attr("id", "layer-" + Math.round(999999999 * Math.random())), checkIDS(x, n), punchgs.TweenLite.set(n, {
                            visibility: "hidden"
                        })
                    }
                    var _ = n.data("actions");
                    _ !== undefined && _R.checkActions(n, x, _), checkHoverDependencies(n, x), _R.checkVideoApis && (j = _R.checkVideoApis(n, x, j)), r || 1 != t && "true" != t && "1sttime" != a || "loopandnoslidestop" == o || n.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-once"), r || 1 != a && "true" != a && "on" != a && "no1sttime" != a || "loopandnoslidestop" == o || n.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-always")
                }), t[0].addEventListener("mouseenter", function () {
                    t.trigger("tp-mouseenter"), x.overcontainer = !0
                }, {
                    passive: !0
                }), t[0].addEventListener("mouseover", function () {
                    t.trigger("tp-mouseover"), x.overcontainer = !0
                }, {
                    passive: !0
                }), t[0].addEventListener("mouseleave", function () {
                    t.trigger("tp-mouseleft"), x.overcontainer = !1
                }, {
                    passive: !0
                }), t.find(".tp-caption video").each(function (e) {
                    var i = jQuery(this);
                    i.removeClass("video-js vjs-default-skin"), i.attr("preload", ""), i.css({
                        display: "none"
                    })
                }), "standard" !== x.sliderType && (x.lazyType = "all"), loadImages(t.find(".tp-static-layers"), x, 0, !0), waitForCurrentImages(t.find(".tp-static-layers"), x, function () {
                    t.find(".tp-static-layers img").each(function () {
                        var e = jQuery(this),
                            i = e.data("lazyload") != undefined ? e.data("lazyload") : e.attr("src"),
                            t = getLoadObj(x, i);
                        e.attr("src", t.src)
                    })
                }), x.rowzones = [], x.allli.each(function (e) {
                    var i = jQuery(this);
                    x.rowzones[e] = [], i.find(".rev_row_zone").each(function () {
                        x.rowzones[e].push(jQuery(this))
                    }), "all" != x.lazyType && ("smart" != x.lazyType || 0 != e && 1 != e && e != x.slideamount && e != x.slideamount - 1) || (loadImages(i, x, e), waitForCurrentImages(i, x, function () {}))
                });
                var f = getUrlVars("#")[0];
                if (f.length < 9 && 1 < f.split("slide").length) {
                    var h = parseInt(f.split("slide")[1], 0);
                    h < 1 && (h = 1), h > x.slideamount && (h = x.slideamount), x.startWithSlide = h - 1
                }
                t.append('<div class="tp-loader ' + x.spinner + '"><div class="dot1"></div><div class="dot2"></div><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'), x.loader = t.find(".tp-loader"), 0 === t.find(".tp-bannertimer").length && t.append('<div class="tp-bannertimer" style="visibility:hidden"></div>'), t.find(".tp-bannertimer").css({
                    width: "0%"
                }), x.ul.css({
                    display: "block"
                }), prepareSlides(t, x), ("off" !== x.parallax.type || x.scrolleffect.on) && _R.checkForParallax && _R.checkForParallax(t, x), _R.setSize(x), "hero" !== x.sliderType && _R.createNavigation && _R.createNavigation(t, x), _R.resizeThumbsTabs && _R.resizeThumbsTabs && _R.resizeThumbsTabs(x), contWidthManager(x);
                var g = x.viewPort;
                x.inviewport = !1, g != undefined && g.enable && (jQuery.isNumeric(g.visible_area) || -1 !== g.visible_area.indexOf("%") && (g.visible_area = parseInt(g.visible_area) / 100), _R.scrollTicker && _R.scrollTicker(x, t)), "carousel" === x.sliderType && _R.prepareCarousel && (punchgs.TweenLite.set(x.ul, {
                    opacity: 0
                }), _R.prepareCarousel(x, new punchgs.TimelineLite, undefined, 0), x.onlyPreparedSlide = !0), setTimeout(function () {
                    if (!g.enable || g.enable && x.inviewport || g.enable && !x.inviewport && "wait" == !g.outof) swapSlide(t);
                    else if (x.c.addClass("tp-waitforfirststart"), x.waitForFirstSlide = !0, g.presize) {
                        var e = jQuery(x.li[0]);
                        loadImages(e, x, 0, !0), waitForCurrentImages(e.find(".tp-layers"), x, function () {
                            _R.animateTheCaptions({
                                slide: e,
                                opt: x,
                                preset: !0
                            })
                        })
                    }
                    _R.manageNavigation && _R.manageNavigation(x), 1 < x.slideamount && (!g.enable || g.enable && x.inviewport ? countDown(t, x) : x.waitForCountDown = !0), setTimeout(function () {
                        t.trigger("revolution.slide.onloaded")
                    }, 100)
                }, x.startDelay), x.startDelay = 0, jQuery("body").data("rs-fullScreenMode", !1), window.addEventListener("fullscreenchange", onFullScreenChange, {
                    passive: !0
                }), window.addEventListener("mozfullscreenchange", onFullScreenChange, {
                    passive: !0
                }), window.addEventListener("webkitfullscreenchange", onFullScreenChange, {
                    passive: !0
                });
                var v = "resize.revslider-" + t.attr("id");
                jQuery(window).on(v, function () {
                    if (t == undefined) return !1;
                    0 != jQuery("body").find(t) && contWidthManager(x);
                    var e = !1;
                    if ("fullscreen" == x.sliderLayout) {
                        var i = jQuery(window).height();
                        "mobile" == x.fallbacks.ignoreHeightChanges && _ISM || "always" == x.fallbacks.ignoreHeightChanges ? (x.fallbacks.ignoreHeightChangesSize = x.fallbacks.ignoreHeightChangesSize == undefined ? 0 : x.fallbacks.ignoreHeightChangesSize, e = i != x.lastwindowheight && Math.abs(i - x.lastwindowheight) > x.fallbacks.ignoreHeightChangesSize) : e = i != x.lastwindowheight
                    }(t.outerWidth(!0) != x.width || t.is(":hidden") || e) && (x.lastwindowheight = jQuery(window).height(), containerResized(t, x))
                }), hideSliderUnder(t, x), contWidthManager(x), x.fallbacks.disableFocusListener || "true" == x.fallbacks.disableFocusListener || !0 === x.fallbacks.disableFocusListener || (t.addClass("rev_redraw_on_blurfocus"), tabBlurringCheck())
            }
        },
        cArray = function (e, i) {
            if (!jQuery.isArray(e)) {
                var t = e;
                (e = new Array).push(t)
            }
            if (e.length < i) {
                t = e[e.length - 1];
                for (var a = 0; a < i - e.length + 2; a++) e.push(t)
            }
            return e
        },
        checkHoverDependencies = function (e, n) {
            var i = e.data();
            ("sliderenter" === i.start || i.frames !== undefined && i.frames[0] != undefined && "sliderenter" === i.frames[0].delay) && (n.layersonhover === undefined && (n.c.on("tp-mouseenter", function () {
                n.layersonhover && jQuery.each(n.layersonhover, function (e, i) {
                    var t = i.data("closestli") || i.closest(".tp-revslider-slidesli"),
                        a = i.data("staticli") || i.closest(".tp-static-layers");
                    i.data("closestli") === undefined && (i.data("closestli", t), i.data("staticli", a)), (0 < t.length && t.hasClass("active-revslide") || t.hasClass("processing-revslide") || 0 < a.length) && (i.data("animdirection", "in"), _R.playAnimationFrame && _R.playAnimationFrame({
                        caption: i,
                        opt: n,
                        frame: "frame_0",
                        triggerdirection: "in",
                        triggerframein: "frame_0",
                        triggerframeout: "frame_999"
                    }), i.data("triggerstate", "on"))
                })
            }), n.c.on("tp-mouseleft", function () {
                n.layersonhover && jQuery.each(n.layersonhover, function (e, i) {
                    i.data("animdirection", "out"), i.data("triggered", !0), i.data("triggerstate", "off"), _R.stopVideo && _R.stopVideo(i, n), _R.playAnimationFrame && _R.playAnimationFrame({
                        caption: i,
                        opt: n,
                        frame: "frame_999",
                        triggerdirection: "out",
                        triggerframein: "frame_0",
                        triggerframeout: "frame_999"
                    })
                })
            }), n.layersonhover = new Array), n.layersonhover.push(e))
        },
        contWidthManager = function (e) {
            var i = _R.getHorizontalOffset(e.c, "left");
            if ("auto" == e.sliderLayout || "fullscreen" === e.sliderLayout && "on" == e.fullScreenAutoWidth) "fullscreen" == e.sliderLayout && "on" == e.fullScreenAutoWidth ? punchgs.TweenLite.set(e.ul, {
                left: 0,
                width: e.c.width()
            }) : punchgs.TweenLite.set(e.ul, {
                left: i,
                width: e.c.width() - _R.getHorizontalOffset(e.c, "both")
            });
            else {
                var t = Math.ceil(e.c.closest(".forcefullwidth_wrapper_tp_banner").offset().left - i);
                punchgs.TweenLite.set(e.c.parent(), {
                    left: 0 - t + "px",
                    width: jQuery(window).width() - _R.getHorizontalOffset(e.c, "both")
                })
            }
            e.slayers && "fullwidth" != e.sliderLayout && "fullscreen" != e.sliderLayout && punchgs.TweenLite.set(e.slayers, {
                left: i
            })
        },
        cv = function (e, i) {
            return e === undefined ? i : e
        },
        hideSliderUnder = function (e, i, t) {
            var a = e.parent();
            jQuery(window).width() < i.hideSliderAtLimit ? (e.trigger("stoptimer"), "none" != a.css("display") && a.data("olddisplay", a.css("display")), a.css({
                display: "none"
            })) : e.is(":hidden") && t && (a.data("olddisplay") != undefined && "undefined" != a.data("olddisplay") && "none" != a.data("olddisplay") ? a.css({
                display: a.data("olddisplay")
            }) : a.css({
                display: "block"
            }), e.trigger("restarttimer"), setTimeout(function () {
                containerResized(e, i)
            }, 150)), _R.hideUnHideNav && _R.hideUnHideNav(i)
        },
        containerResized = function (e, i) {
            if (e.trigger("revolution.slide.beforeredraw"), 1 == i.infullscreenmode && (i.minHeight = jQuery(window).height()), setCurWinRange(i), setCurWinRange(i, !0), !_R.resizeThumbsTabs || !0 === _R.resizeThumbsTabs(i)) {
                if (hideSliderUnder(e, i, !0), contWidthManager(i), "carousel" == i.sliderType && _R.prepareCarousel(i, !0), e === undefined) return !1;
                _R.setSize(i), i.conw = i.c.width(), i.conh = i.infullscreenmode ? i.minHeight : i.c.height();
                var t = e.find(".active-revslide .slotholder"),
                    a = e.find(".processing-revslide .slotholder");
                removeSlots(e, i, e, 2), "standard" === i.sliderType && (punchgs.TweenLite.set(a.find(".defaultimg"), {
                    opacity: 0
                }), t.find(".defaultimg").css({
                    opacity: 1
                })), "carousel" === i.sliderType && i.lastconw != i.conw && (clearTimeout(i.pcartimer), i.pcartimer = setTimeout(function () {
                    _R.prepareCarousel(i, !0), "carousel" == i.sliderType && "on" === i.carousel.showLayersAllTime && jQuery.each(i.li, function (e) {
                        _R.animateTheCaptions({
                            slide: jQuery(i.li[e]),
                            opt: i,
                            recall: !0
                        })
                    })
                }, 100), i.lastconw = i.conw), _R.manageNavigation && _R.manageNavigation(i), _R.animateTheCaptions && 0 < e.find(".active-revslide").length && _R.animateTheCaptions({
                    slide: e.find(".active-revslide"),
                    opt: i,
                    recall: !0
                }), "on" == a.data("kenburns") && _R.startKenBurn(a, i, a.data("kbtl") !== undefined ? a.data("kbtl").progress() : 0), "on" == t.data("kenburns") && _R.startKenBurn(t, i, t.data("kbtl") !== undefined ? t.data("kbtl").progress() : 0), _R.animateTheCaptions && 0 < e.find(".processing-revslide").length && _R.animateTheCaptions({
                    slide: e.find(".processing-revslide"),
                    opt: i,
                    recall: !0
                }), _R.manageNavigation && _R.manageNavigation(i)
            }
            e.trigger("revolution.slide.afterdraw")
        },
        setScale = function (e) {
            e.bw = e.width / e.gridwidth[e.curWinRange], e.bh = e.height / e.gridheight[e.curWinRange], e.bh > e.bw ? e.bh = e.bw : e.bw = e.bh, (1 < e.bh || 1 < e.bw) && (e.bw = 1, e.bh = 1)
        },
        prepareSlides = function (e, u) {
            if (e.find(".tp-caption").each(function () {
                    var e = jQuery(this);
                    e.data("transition") !== undefined && e.addClass(e.data("transition"))
                }), u.ul.css({
                    overflow: "hidden",
                    width: "100%",
                    height: "100%",
                    maxHeight: e.parent().css("maxHeight")
                }), "on" == u.autoHeight && (u.ul.css({
                    overflow: "hidden",
                    width: "100%",
                    height: "100%",
                    maxHeight: "none"
                }), e.css({
                    maxHeight: "none"
                }), e.parent().css({
                    maxHeight: "none"
                })), u.allli.each(function (e) {
                    var i = jQuery(this),
                        t = i.data("originalindex");
                    (u.startWithSlide != undefined && t == u.startWithSlide || u.startWithSlide === undefined && 0 == e) && i.addClass("next-revslide"), i.css({
                        width: "100%",
                        height: "100%",
                        overflow: "hidden"
                    })
                }), "carousel" === u.sliderType) {
                u.ul.css({
                    overflow: "visible"
                }).wrap('<div class="tp-carousel-wrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden;"></div>');
                var i = '<div style="clear:both;display:block;width:100%;height:1px;position:relative;margin-bottom:-1px"></div>';
                u.c.parent().prepend(i), u.c.parent().append(i), _R.prepareCarousel(u)
            }
            e.parent().css({
                overflow: "visible"
            }), u.allli.find(">img").each(function (e) {
                var i = jQuery(this),
                    t = i.closest("li"),
                    a = t.find(".rs-background-video-layer");
                a.addClass("defaultvid").css({
                    zIndex: 30
                }), i.addClass("defaultimg"), "on" == u.fallbacks.panZoomDisableOnMobile && _ISM && (i.data("kenburns", "off"), i.data("bgfit", "cover"));
                var n = t.data("mediafilter");
                n = "none" === n || n === undefined ? "" : n, i.wrap('<div class="slotholder" style="position:absolute; top:0px; left:0px; z-index:0;width:100%;height:100%;"></div>'), a.appendTo(t.find(".slotholder"));
                var r = i.data();
                i.closest(".slotholder").data(r), 0 < a.length && r.bgparallax != undefined && (a.data("bgparallax", r.bgparallax), a.data("showcoveronpause", "on")), "none" != u.dottedOverlay && u.dottedOverlay != undefined && i.closest(".slotholder").append('<div class="tp-dottedoverlay ' + u.dottedOverlay + '"></div>');
                var o = i.attr("src");
                r.src = o, r.bgfit = r.bgfit || "cover", r.bgrepeat = r.bgrepeat || "no-repeat", r.bgposition = r.bgposition || "center center";
                i.closest(".slotholder");
                var s = i.data("bgcolor"),
                    l = "";
                l = s !== undefined && 0 <= s.indexOf("gradient") ? '"background:' + s + ';width:100%;height:100%;"' : '"background-color:' + s + ";background-repeat:" + r.bgrepeat + ";background-image:url(" + o + ");background-size:" + r.bgfit + ";background-position:" + r.bgposition + ';width:100%;height:100%;"', i.data("mediafilter", n), n = "on" === i.data("kenburns") ? "" : n;
                var d = jQuery('<div class="tp-bgimg defaultimg ' + n + '" data-bgcolor="' + s + '" style=' + l + "></div>");
                i.parent().append(d);
                var c = document.createComment("Runtime Modification - Img tag is Still Available for SEO Goals in Source - " + i.get(0).outerHTML);
                i.replaceWith(c), d.data(r), d.attr("src", o), "standard" !== u.sliderType && "undefined" !== u.sliderType || d.css({
                    opacity: 0
                })
            }), u.scrolleffect.on && "on" === u.scrolleffect.on_slidebg && (u.allslotholder = new Array, u.allli.find(".slotholder").each(function () {
                jQuery(this).wrap('<div style="display:block;position:absolute;top:0px;left:0px;width:100%;height:100%" class="slotholder_fadeoutwrap"></div>')
            }), u.allslotholder = u.c.find(".slotholder_fadeoutwrap"))
        },
        removeSlots = function (e, i, t, a) {
            i.removePrepare = i.removePrepare + a, t.find(".slot, .slot-circle-wrapper").each(function () {
                jQuery(this).remove()
            }), i.transition = 0, i.removePrepare = 0
        },
        cutParams = function (e) {
            var i = e;
            return e != undefined && 0 < e.length && (i = e.split("?")[0]), i
        },
        relativeRedir = function (e) {
            return location.pathname.replace(/(.*)\/[^/]*/, "$1/" + e)
        },
        abstorel = function (e, i) {
            var t = e.split("/"),
                a = i.split("/");
            t.pop();
            for (var n = 0; n < a.length; n++) "." != a[n] && (".." == a[n] ? t.pop() : t.push(a[n]));
            return t.join("/")
        },
        imgLoaded = function (l, e, d) {
            e.syncload--, e.loadqueue && jQuery.each(e.loadqueue, function (e, i) {
                var t = i.src.replace(/\.\.\/\.\.\//gi, ""),
                    a = self.location.href,
                    n = document.location.origin,
                    r = a.substring(0, a.length - 1) + "/" + t,
                    o = n + "/" + t,
                    s = abstorel(self.location.href, i.src);
                a = a.substring(0, a.length - 1) + t, (cutParams(n += t) === cutParams(decodeURIComponent(l.src)) || cutParams(a) === cutParams(decodeURIComponent(l.src)) || cutParams(s) === cutParams(decodeURIComponent(l.src)) || cutParams(o) === cutParams(decodeURIComponent(l.src)) || cutParams(r) === cutParams(decodeURIComponent(l.src)) || cutParams(i.src) === cutParams(decodeURIComponent(l.src)) || cutParams(i.src).replace(/^.*\/\/[^\/]+/, "") === cutParams(decodeURIComponent(l.src)).replace(/^.*\/\/[^\/]+/, "") || "file://" === window.location.origin && cutParams(l.src).match(new RegExp(t))) && (i.progress = d, i.width = l.width, i.height = l.height)
            }), progressImageLoad(e)
        },
        progressImageLoad = function (a) {
            3 != a.syncload && a.loadqueue && jQuery.each(a.loadqueue, function (e, i) {
                if (i.progress.match(/prepared/g) && a.syncload <= 3) {
                    if (a.syncload++, "img" == i.type) {
                        var t = new Image;
                        t.onload = function () {
                            imgLoaded(this, a, "loaded"), i.error = !1
                        }, t.onerror = function () {
                            imgLoaded(this, a, "failed"), i.error = !0
                        }, t.src = i.src
                    } else jQuery.get(i.src, function (e) {
                        i.innerHTML = (new XMLSerializer).serializeToString(e.documentElement), i.progress = "loaded", a.syncload--, progressImageLoad(a)
                    }).fail(function () {
                        i.progress = "failed", a.syncload--, progressImageLoad(a)
                    });
                    i.progress = "inload"
                }
            })
        },
        addToLoadQueue = function (t, e, i, a, n) {
            var r = !1;
            if (e.loadqueue && jQuery.each(e.loadqueue, function (e, i) {
                    i.src === t && (r = !0)
                }), !r) {
                var o = new Object;
                o.src = t, o.starttoload = jQuery.now(), o.type = a || "img", o.prio = i, o.progress = "prepared", o.static = n, e.loadqueue.push(o)
            }
        },
        loadImages = function (e, a, n, r) {
            e.find("img,.defaultimg, .tp-svg-layer").each(function () {
                var e = jQuery(this),
                    i = e.data("lazyload") !== undefined && "undefined" !== e.data("lazyload") ? e.data("lazyload") : e.data("svg_src") != undefined ? e.data("svg_src") : e.attr("src"),
                    t = e.data("svg_src") != undefined ? "svg" : "img";
                e.data("start-to-load", jQuery.now()), addToLoadQueue(i, a, n, t, r)
            }), progressImageLoad(a)
        },
        getLoadObj = function (e, t) {
            var a = new Object;
            return e.loadqueue && jQuery.each(e.loadqueue, function (e, i) {
                i.src == t && (a = i)
            }), a
        },
        waitForCurrentImages = function (o, s, e) {
            var l = !1;
            o.find("img,.defaultimg, .tp-svg-layer").each(function () {
                var e = jQuery(this),
                    i = e.data("lazyload") != undefined ? e.data("lazyload") : e.data("svg_src") != undefined ? e.data("svg_src") : e.attr("src"),
                    t = getLoadObj(s, i);
                if (e.data("loaded") === undefined && t !== undefined && t.progress && t.progress.match(/loaded/g)) {
                    if (e.attr("src", t.src), "img" == t.type)
                        if (e.hasClass("defaultimg")) _R.isIE(8) ? defimg.attr("src", t.src) : -1 == t.src.indexOf("images/transparent.png") && -1 == t.src.indexOf("assets/transparent.png") || e.data("bgcolor") === undefined ? e.css({
                            backgroundImage: 'url("' + t.src + '")'
                        }) : e.data("bgcolor") !== undefined && e.css({
                            background: e.data("bgcolor")
                        }), o.data("owidth", t.width), o.data("oheight", t.height), o.find(".slotholder").data("owidth", t.width), o.find(".slotholder").data("oheight", t.height);
                        else {
                            var a = e.data("ww"),
                                n = e.data("hh");
                            e.data("owidth", t.width), e.data("oheight", t.height), a = a == undefined || "auto" == a || "" == a ? t.width : a, n = n == undefined || "auto" == n || "" == n ? t.height : n, !jQuery.isNumeric(a) && 0 < a.indexOf("%") && (n = a), e.data("ww", a), e.data("hh", n)
                        }
                    else "svg" == t.type && "loaded" == t.progress && (e.append('<div class="tp-svg-innercontainer"></div>'), e.find(".tp-svg-innercontainer").append(t.innerHTML));
                    e.data("loaded", !0)
                }
                if (t && t.progress && t.progress.match(/inprogress|inload|prepared/g) && (!t.error && jQuery.now() - e.data("start-to-load") < 5e3 ? l = !0 : (t.progress = "failed", t.reported_img || (t.reported_img = !0, console.warn(i + "  Could not be loaded !")))), 1 == s.youtubeapineeded && (!window.YT || YT.Player == undefined) && (l = !0, 5e3 < jQuery.now() - s.youtubestarttime && 1 != s.youtubewarning)) {
                    s.youtubewarning = !0;
                    var r = "YouTube Api Could not be loaded !";
                    "https:" === location.protocol && (r += " Please Check and Renew SSL Certificate !"), console.error(r), s.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>' + r + "</strong></div>")
                }
                if (1 == s.vimeoapineeded && !window.Vimeo && (l = !0, 5e3 < jQuery.now() - s.vimeostarttime && 1 != s.vimeowarning)) {
                    s.vimeowarning = !0;
                    r = "Vimeo Api Could not be loaded !";
                    "https:" === location.protocol && (r += " Please Check and Renew SSL Certificate !"), console.error(r), s.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>' + r + "</strong></div>")
                }
            }), !_ISM && s.audioqueue && 0 < s.audioqueue.length && jQuery.each(s.audioqueue, function (e, i) {
                i.status && "prepared" === i.status && jQuery.now() - i.start < i.waittime && (l = !0)
            }), jQuery.each(s.loadqueue, function (e, i) {
                !0 !== i.static || "loaded" == i.progress && "failed" !== i.progress || ("failed" == i.progress ? i.reported || (i.reported = !0, console.warn("Static Image " + i.src + "  Could not be loaded in time. Error Exists:" + i.error)) : !i.error && jQuery.now() - i.starttoload < 5e3 ? l = !0 : i.reported || (i.reported = !0, console.warn("Static Image " + i.src + "  Could not be loaded within 5s! Error Exists:" + i.error)))
            }), l ? punchgs.TweenLite.delayedCall(.18, waitForCurrentImages, [o, s, e]) : punchgs.TweenLite.delayedCall(.18, e)
        },
        swapSlide = function (e) {
            var i = e[0].opt;
            if (clearTimeout(i.waitWithSwapSlide), 0 < e.find(".processing-revslide").length) return i.waitWithSwapSlide = setTimeout(function () {
                swapSlide(e)
            }, 150), !1;
            var t = e.find(".active-revslide"),
                a = e.find(".next-revslide"),
                n = a.find(".defaultimg");
            if ("carousel" !== i.sliderType || i.carousel.fadein || (punchgs.TweenLite.to(i.ul, 1, {
                    opacity: 1
                }), i.carousel.fadein = !0), a.index() === t.index() && !0 !== i.onlyPreparedSlide) return a.removeClass("next-revslide"), !1;
            !0 === i.onlyPreparedSlide && (i.onlyPreparedSlide = !1, jQuery(i.li[0]).addClass("processing-revslide")), a.removeClass("next-revslide").addClass("processing-revslide"), -1 === a.index() && "carousel" === i.sliderType && (a = jQuery(i.li[0])), a.data("slide_on_focus_amount", a.data("slide_on_focus_amount") + 1 || 1), "on" == i.stopLoop && a.index() == i.lastslidetoshow - 1 && (e.find(".tp-bannertimer").css({
                visibility: "hidden"
            }), e.trigger("revolution.slide.onstop"), i.noloopanymore = 1), a.index() === i.slideamount - 1 && (i.looptogo = i.looptogo - 1, i.looptogo <= 0 && (i.stopLoop = "on")), i.tonpause = !0, e.trigger("stoptimer"), i.cd = 0, "off" === i.spinner && (i.loader !== undefined ? i.loader.css({
                display: "none"
            }) : i.loadertimer = setTimeout(function () {
                i.loader !== undefined && i.loader.css({
                    display: "block"
                })
            }, 50)), loadImages(a, i, 1), _R.preLoadAudio && _R.preLoadAudio(a, i, 1), waitForCurrentImages(a, i, function () {
                a.find(".rs-background-video-layer").each(function () {
                    var e = jQuery(this);
                    e.hasClass("HasListener") || (e.data("bgvideo", 1), _R.manageVideoLayer && _R.manageVideoLayer(e, i)), 0 == e.find(".rs-fullvideo-cover").length && e.append('<div class="rs-fullvideo-cover"></div>')
                }), swapSlideProgress(n, e)
            })
        },
        swapSlideProgress = function (e, i) {
            var t = i.find(".active-revslide"),
                a = i.find(".processing-revslide"),
                n = t.find(".slotholder"),
                r = a.find(".slotholder"),
                o = i[0].opt;
            o.tonpause = !1, o.cd = 0, clearTimeout(o.loadertimer), o.loader !== undefined && o.loader.css({
                display: "none"
            }), _R.setSize(o), _R.slotSize(e, o), _R.manageNavigation && _R.manageNavigation(o);
            var s = {};
            s.nextslide = a, s.currentslide = t, i.trigger("revolution.slide.onbeforeswap", s), o.transition = 1, o.videoplaying = !1, a.data("delay") != undefined ? (o.cd = 0, o.delay = a.data("delay")) : o.delay = o.origcd, "true" == a.data("ssop") || !0 === a.data("ssop") ? o.ssop = !0 : o.ssop = !1, i.trigger("nulltimer");
            var l = t.index(),
                d = a.index();
            o.sdir = d < l ? 1 : 0, "arrow" == o.sc_indicator && (0 == l && d == o.slideamount - 1 && (o.sdir = 1), l == o.slideamount - 1 && 0 == d && (o.sdir = 0)), o.lsdir = o.lsdir === undefined ? o.sdir : o.lsdir, o.dirc = o.lsdir != o.sdir, o.lsdir = o.sdir, t.index() != a.index() && 1 != o.firststart && _R.removeTheCaptions && _R.removeTheCaptions(t, o), a.hasClass("rs-pause-timer-once") || a.hasClass("rs-pause-timer-always") ? o.videoplaying = !0 : i.trigger("restarttimer"), a.removeClass("rs-pause-timer-once");
            var c;
            if (o.currentSlide = t.index(), o.nextSlide = a.index(), "carousel" == o.sliderType) c = new punchgs.TimelineLite, _R.prepareCarousel(o, c), letItFree(i, r, n, a, t, c), o.transition = 0, o.firststart = 0;
            else {
                (c = new punchgs.TimelineLite({
                    onComplete: function () {
                        letItFree(i, r, n, a, t, c)
                    }
                })).add(punchgs.TweenLite.set(r.find(".defaultimg"), {
                    opacity: 0
                })), c.pause(), _R.animateTheCaptions && _R.animateTheCaptions({
                    slide: a,
                    opt: o,
                    preset: !0
                }), 1 == o.firststart && (punchgs.TweenLite.set(t, {
                    autoAlpha: 0
                }), o.firststart = 0), punchgs.TweenLite.set(t, {
                    zIndex: 18
                }), punchgs.TweenLite.set(a, {
                    autoAlpha: 0,
                    zIndex: 20
                }), "prepared" == a.data("differentissplayed") && (a.data("differentissplayed", "done"), a.data("transition", a.data("savedtransition")), a.data("slotamount", a.data("savedslotamount")), a.data("masterspeed", a.data("savedmasterspeed"))), a.data("fstransition") != undefined && "done" != a.data("differentissplayed") && (a.data("savedtransition", a.data("transition")), a.data("savedslotamount", a.data("slotamount")), a.data("savedmasterspeed", a.data("masterspeed")), a.data("transition", a.data("fstransition")), a.data("slotamount", a.data("fsslotamount")), a.data("masterspeed", a.data("fsmasterspeed")), a.data("differentissplayed", "prepared")), a.data("transition") == undefined && a.data("transition", "random"), 0;
                var u = a.data("transition") !== undefined ? a.data("transition").split(",") : "fade",
                    p = a.data("nexttransid") == undefined ? -1 : a.data("nexttransid");
                "on" == a.data("randomtransition") ? p = Math.round(Math.random() * u.length) : p += 1, p == u.length && (p = 0), a.data("nexttransid", p);
                var f = u[p];
                o.ie && ("boxfade" == f && (f = "boxslide"), "slotfade-vertical" == f && (f = "slotzoom-vertical"), "slotfade-horizontal" == f && (f = "slotzoom-horizontal")), _R.isIE(8) && (f = 11), c = _R.animateSlide(0, f, i, a, t, r, n, c), "on" == r.data("kenburns") && (_R.startKenBurn(r, o), c.add(punchgs.TweenLite.set(r, {
                    autoAlpha: 0
                }))), c.pause()
            }
            _R.scrollHandling && (_R.scrollHandling(o, !0, 0), c.eventCallback("onUpdate", function () {
                _R.scrollHandling(o, !0, 0)
            })), "off" != o.parallax.type && o.parallax.firstgo == undefined && _R.scrollHandling && (o.parallax.firstgo = !0, o.lastscrolltop = -999, _R.scrollHandling(o, !0, 0), setTimeout(function () {
                o.lastscrolltop = -999, _R.scrollHandling(o, !0, 0)
            }, 210), setTimeout(function () {
                o.lastscrolltop = -999, _R.scrollHandling(o, !0, 0)
            }, 420)), _R.animateTheCaptions ? "carousel" === o.sliderType && "on" === o.carousel.showLayersAllTime ? (jQuery.each(o.li, function (e) {
                o.carousel.allLayersStarted ? _R.animateTheCaptions({
                    slide: jQuery(o.li[e]),
                    opt: o,
                    recall: !0
                }) : o.li[e] === a ? _R.animateTheCaptions({
                    slide: jQuery(o.li[e]),
                    maintimeline: c,
                    opt: o,
                    startslideanimat: 0
                }) : _R.animateTheCaptions({
                    slide: jQuery(o.li[e]),
                    opt: o,
                    startslideanimat: 0
                })
            }), o.carousel.allLayersStarted = !0) : _R.animateTheCaptions({
                slide: a,
                opt: o,
                maintimeline: c,
                startslideanimat: 0
            }) : c != undefined && setTimeout(function () {
                c.resume()
            }, 30), punchgs.TweenLite.to(a, .001, {
                autoAlpha: 1
            })
        },
        letItFree = function (e, i, t, a, n, r) {
            var o = e[0].opt;
            "carousel" === o.sliderType || (o.removePrepare = 0, punchgs.TweenLite.to(i.find(".defaultimg"), .001, {
                zIndex: 20,
                autoAlpha: 1,
                onComplete: function () {
                    removeSlots(e, o, a, 1)
                }
            }), a.index() != n.index() && punchgs.TweenLite.to(n, .2, {
                zIndex: 18,
                autoAlpha: 0,
                onComplete: function () {
                    removeSlots(e, o, n, 1)
                }
            })), e.find(".active-revslide").removeClass("active-revslide"), e.find(".processing-revslide").removeClass("processing-revslide").addClass("active-revslide"), o.act = a.index(), o.c.attr("data-slideactive", e.find(".active-revslide").data("index")), "scroll" != o.parallax.type && "scroll+mouse" != o.parallax.type && "mouse+scroll" != o.parallax.type || (o.lastscrolltop = -999, _R.scrollHandling(o)), r.clear(), t.data("kbtl") != undefined && (t.data("kbtl").reverse(), t.data("kbtl").timeScale(25)), "on" == i.data("kenburns") && (i.data("kbtl") != undefined ? (i.data("kbtl").timeScale(1), i.data("kbtl").play()) : _R.startKenBurn(i, o)), a.find(".rs-background-video-layer").each(function (e) {
                if (_ISM && !o.fallbacks.allowHTML5AutoPlayOnAndroid) return !1;
                var i = jQuery(this);
                _R.resetVideo(i, o, !1, !0), punchgs.TweenLite.fromTo(i, 1, {
                    autoAlpha: 0
                }, {
                    autoAlpha: 1,
                    ease: punchgs.Power3.easeInOut,
                    delay: .2,
                    onComplete: function () {
                        _R.animcompleted && _R.animcompleted(i, o)
                    }
                })
            }), n.find(".rs-background-video-layer").each(function (e) {
                if (_ISM) return !1;
                var i = jQuery(this);
                _R.stopVideo && (_R.resetVideo(i, o), _R.stopVideo(i, o)), punchgs.TweenLite.to(i, 1, {
                    autoAlpha: 0,
                    ease: punchgs.Power3.easeInOut,
                    delay: .2
                })
            });
            var s = {};
            if (s.slideIndex = a.index() + 1, s.slideLIIndex = a.index(), s.slide = a, s.currentslide = a, s.prevslide = n, o.last_shown_slide = n.index(), e.trigger("revolution.slide.onchange", s), e.trigger("revolution.slide.onafterswap", s), o.startWithSlide !== undefined && "done" !== o.startWithSlide && "carousel" === o.sliderType) {
                for (var l = o.startWithSlide, d = 0; d <= o.li.length - 1; d++) {
                    jQuery(o.li[d]).data("originalindex") === o.startWithSlide && (l = d)
                }
                0 !== l && _R.callingNewSlide(o.c, l), o.startWithSlide = "done"
            }
            o.duringslidechange = !1;
            var c = n.data("slide_on_focus_amount"),
                u = n.data("hideafterloop");
            0 != u && u <= c && o.c.revremoveslide(n.index());
            var p = -1 === o.nextSlide || o.nextSlide === undefined ? 0 : o.nextSlide;
            o.rowzones != undefined && (p = p > o.rowzones.length ? o.rowzones.length : p), o.rowzones != undefined && 0 < o.rowzones.length && o.rowzones[p] != undefined && 0 <= p && p <= o.rowzones.length && 0 < o.rowzones[p].length && _R.setSize(o)
        },
        removeAllListeners = function (e, i) {
            e.children().each(function () {
                try {
                    jQuery(this).die("click")
                } catch (e) {}
                try {
                    jQuery(this).die("mouseenter")
                } catch (e) {}
                try {
                    jQuery(this).die("mouseleave")
                } catch (e) {}
                try {
                    jQuery(this).unbind("hover")
                } catch (e) {}
            });
            try {
                e.die("click", "mouseenter", "mouseleave")
            } catch (e) {}
            clearInterval(i.cdint), e = null
        },
        countDown = function (e, i) {
            i.cd = 0, i.loop = 0, i.stopAfterLoops != undefined && -1 < i.stopAfterLoops ? i.looptogo = i.stopAfterLoops : i.looptogo = 9999999, i.stopAtSlide != undefined && -1 < i.stopAtSlide ? i.lastslidetoshow = i.stopAtSlide : i.lastslidetoshow = 999, i.stopLoop = "off", 0 == i.looptogo && (i.stopLoop = "on");
            var t = e.find(".tp-bannertimer");
            e.on("stoptimer", function () {
                var e = jQuery(this).find(".tp-bannertimer");
                e[0].tween.pause(), "on" == i.disableProgressBar && e.css({
                    visibility: "hidden"
                }), i.sliderstatus = "paused", _R.unToggleState(i.slidertoggledby)
            }), e.on("starttimer", function () {
                i.forcepause_viatoggle || (1 != i.conthover && 1 != i.videoplaying && i.width > i.hideSliderAtLimit && 1 != i.tonpause && 1 != i.overnav && 1 != i.ssop && (1 === i.noloopanymore || i.viewPort.enable && !i.inviewport || (t.css({
                    visibility: "visible"
                }), t[0].tween.resume(), i.sliderstatus = "playing")), "on" == i.disableProgressBar && t.css({
                    visibility: "hidden"
                }), _R.toggleState(i.slidertoggledby))
            }), e.on("restarttimer", function () {
                if (!i.forcepause_viatoggle) {
                    var e = jQuery(this).find(".tp-bannertimer");
                    if (i.mouseoncontainer && "on" == i.navigation.onHoverStop && !_ISM) return !1;
                    1 === i.noloopanymore || i.viewPort.enable && !i.inviewport || 1 == i.ssop || (e.css({
                        visibility: "visible"
                    }), e[0].tween.kill(), e[0].tween = punchgs.TweenLite.fromTo(e, i.delay / 1e3, {
                        width: "0%"
                    }, {
                        force3D: "auto",
                        width: "100%",
                        ease: punchgs.Linear.easeNone,
                        onComplete: a,
                        delay: 1
                    }), i.sliderstatus = "playing"), "on" == i.disableProgressBar && e.css({
                        visibility: "hidden"
                    }), _R.toggleState(i.slidertoggledby)
                }
            }), e.on("nulltimer", function () {
                t[0].tween.kill(), t[0].tween = punchgs.TweenLite.fromTo(t, i.delay / 1e3, {
                    width: "0%"
                }, {
                    force3D: "auto",
                    width: "100%",
                    ease: punchgs.Linear.easeNone,
                    onComplete: a,
                    delay: 1
                }), t[0].tween.pause(0), "on" == i.disableProgressBar && t.css({
                    visibility: "hidden"
                }), i.sliderstatus = "paused"
            });
            var a = function () {
                0 == jQuery("body").find(e).length && (removeAllListeners(e, i), clearInterval(i.cdint)), e.trigger("revolution.slide.slideatend"), 1 == e.data("conthover-changed") && (i.conthover = e.data("conthover"), e.data("conthover-changed", 0)), _R.callingNewSlide(e, 1)
            };
            t[0].tween = punchgs.TweenLite.fromTo(t, i.delay / 1e3, {
                width: "0%"
            }, {
                force3D: "auto",
                width: "100%",
                ease: punchgs.Linear.easeNone,
                onComplete: a,
                delay: 1
            }), 1 < i.slideamount && (0 != i.stopAfterLoops || 1 != i.stopAtSlide) ? e.trigger("starttimer") : (i.noloopanymore = 1, e.trigger("nulltimer")), e.on("tp-mouseenter", function () {
                i.mouseoncontainer = !0, "on" != i.navigation.onHoverStop || _ISM || (e.trigger("stoptimer"), e.trigger("revolution.slide.onpause"))
            }), e.on("tp-mouseleft", function () {
                i.mouseoncontainer = !1, 1 != e.data("conthover") && "on" == i.navigation.onHoverStop && (1 == i.viewPort.enable && i.inviewport || 0 == i.viewPort.enable) && (e.trigger("revolution.slide.onresume"), e.trigger("starttimer"))
            })
        },
        vis = function () {
            var i, t, e = {
                hidden: "visibilitychange",
                webkitHidden: "webkitvisibilitychange",
                mozHidden: "mozvisibilitychange",
                msHidden: "msvisibilitychange"
            };
            for (i in e)
                if (i in document) {
                    t = e[i];
                    break
                } return function (e) {
                return e && document.addEventListener(t, e, {
                    pasive: !0
                }), !document[i]
            }
        }(),
        restartOnFocus = function () {
            jQuery(".rev_redraw_on_blurfocus").each(function () {
                var e = jQuery(this)[0].opt;
                if (e == undefined || e.c == undefined || 0 === e.c.length) return !1;
                1 != e.windowfocused && (e.windowfocused = !0, punchgs.TweenLite.delayedCall(.3, function () {
                    "on" == e.fallbacks.nextSlideOnWindowFocus && e.c.revnext(), e.c.revredraw(), "playing" == e.lastsliderstatus && e.c.revresume()
                }))
            })
        },
        lastStatBlur = function () {
            jQuery(".rev_redraw_on_blurfocus").each(function () {
                var e = jQuery(this)[0].opt;
                e.windowfocused = !1, e.lastsliderstatus = e.sliderstatus, e.c.revpause();
                var i = e.c.find(".active-revslide .slotholder"),
                    t = e.c.find(".processing-revslide .slotholder");
                "on" == t.data("kenburns") && _R.stopKenBurn(t, e), "on" == i.data("kenburns") && _R.stopKenBurn(i, e)
            })
        },
        tabBlurringCheck = function () {
            var e = document.documentMode === undefined,
                i = window.chrome;
            1 !== jQuery("body").data("revslider_focus_blur_listener") && (jQuery("body").data("revslider_focus_blur_listener", 1), e && !i ? jQuery(window).on("focusin", function () {
                restartOnFocus()
            }).on("focusout", function () {
                lastStatBlur()
            }) : window.addEventListener ? (window.addEventListener("focus", function (e) {
                restartOnFocus()
            }, {
                capture: !1,
                passive: !0
            }), window.addEventListener("blur", function (e) {
                lastStatBlur()
            }, {
                capture: !1,
                passive: !0
            })) : (window.attachEvent("focus", function (e) {
                restartOnFocus()
            }), window.attachEvent("blur", function (e) {
                lastStatBlur()
            })))
        },
        getUrlVars = function (e) {
            for (var i, t = [], a = window.location.href.slice(window.location.href.indexOf(e) + 1).split("_"), n = 0; n < a.length; n++) a[n] = a[n].replace("%3D", "="), i = a[n].split("="), t.push(i[0]), t[i[0]] = i[1];
            return t
        }
}(jQuery);
