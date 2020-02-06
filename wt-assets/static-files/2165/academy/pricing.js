function checkWebPSupport(e) { var t = document.documentElement,
        i = new Image;
    i.onload = i.onerror = function() { isSupported = 2 === i.height, isSupported && (t.className.indexOf("no-webp") >= 0 ? t.className = t.className.replace(/\bno-webp\b/, "webp") : t.className += " webp", webpSupport = !0) }, i.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA" }

function shuffle(e) { for (var t, i, n = e.length; n; t = parseInt(Math.random() * n), i = e[--n], e[n] = e[t], e[t] = i); return e }
var storageURL = "https://cdn.nws.ai/thenewsroom.io/v10",
    sectionsMediaURL = storageURL + "/media/",
    JSONStorageURL = "https://chargecdn.s3.amazonaws.com/json/nws.ai",
    domReady = function(e) { "interactive" === document.readyState || "complete" === document.readyState ? e() : document.addEventListener("DOMContentLoaded", e) };
! function() { if ("function" == typeof NodeList.prototype.forEach) return !1;
    NodeList.prototype.forEach = Array.prototype.forEach }(), mobileBrowser = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent), URL_REGEXP = /^((?:http|ftp)s?:\/\/|)(?:(?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?\.)+(?:[A-Z]{2,6}\.?|[A-Z0-9-]{2,}\.?)|localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(?::\d+)?(?:\/?|[\/?]\S+)$/i;
var webpSupport = !1,
    updatePageURL = function(e) { if (history.pushState) { var t = window.location.protocol + "//" + window.location.host + window.location.pathname + "#" + e;
            window.history.pushState({ path: t }, "", t) } },
    addClassOnScroll = function(e, t, i) { document.querySelectorAll(e).forEach(function(e) { var n = e.offsetHeight,
                o = window.innerHeight,
                a = e.getBoundingClientRect().top,
                s = !0,
                r = function() { window.scrollY, o = window.innerHeight, (a = e.getBoundingClientRect().top) < o - i && a + n > i && (e.classList.add(t), s = !1) };
            r(), 1 == s && window.addEventListener("scroll", function e() { 1 == s ? r() : window.removeEventListener("scroll", e, !0) }, !0) }) },
    setVideoDurationAttribute = function(e) { document.querySelectorAll(e).forEach(function(e) { var t = setInterval(function() { if (e.readyState > 0) { var i, n = parseInt(e.duration / 60, 10),
                        o = (e.duration % 60).toFixed(),
                        a = "min";
                    n < 0 && (a = "sec"), i = n + ":" + o + " " + a, e.setAttribute("video-duration", i), e.parentNode.querySelector(".VideoEl-controls") && e.parentNode.querySelector(".VideoEl-controls .VideoEl-bigPlayBtn span").setAttribute("video-duration", i), clearInterval(t) } }, 200) }) },
    addVideoContainer = function(e) { document.querySelectorAll(e).forEach(function(e) { var t = document.createElement("div");
            t.classList.add("VideoEl-container"), e.parentNode.insertBefore(t, e), t.append(e) }) },
    playVideo = function(e) { e.play(), e.parentNode.classList.remove("is-paused"), e.parentNode.classList.add("is-playing"), e.parentNode.querySelector(".VideoEl-controls .VideoEl-bigPlayBtn") && updateBigVideoButton(e) },
    pauseVideo = function(e) { e.pause(), e.parentNode.classList.remove("is-playing"), e.parentNode.classList.add("is-paused"), e.parentNode.querySelector(".VideoEl-controls .VideoEl-bigPlayBtn") && updateBigVideoButton(e) },
    addBigVideoButton = function(e, t, i) { var n = document.querySelector(e); if (n) { var o = '<div class="VideoEl-controls"><a href="" class="VideoEl-bigPlayBtn"><span class="Btn Btn--light" play-cont="' + t + '" pause-cont="' + i + '"></span></a></div>';
            n.insertAdjacentHTML("beforebegin", o), updateBigVideoButton(n);
            n.parentNode.querySelector(".VideoEl-bigPlayBtn").addEventListener("click", function(e) { e.preventDefault(), 1 == n.paused ? playVideo(n) : pauseVideo(n), updateBigVideoButton(n) }) } },
    updateBigVideoButton = function(e) { var t = e.parentNode.querySelector(".VideoEl-bigPlayBtn span");
        1 == e.paused ? t.innerHTML = t.getAttribute("play-cont") : t.innerHTML = t.getAttribute("pause-cont") },
    playPauseVideoOnScroll = function(e, t) { var i = document.querySelectorAll(e),
            n = window;
        mobileBrowser || (n = document.querySelector("body")), i.forEach(function(e) { pauseVideo(e); var i = e.offsetHeight,
                o = window.innerHeight,
                a = e.getBoundingClientRect().top,
                s = function() { n.scrollTop;
                    o = window.innerHeight, a = e.getBoundingClientRect().top, a < o - t && a + i > t ? e.hasAttribute("autoplay") && playVideo(e) : pauseVideo(e) },
                r = setInterval(function() { e.readyState > 0 && (s(), clearInterval(r)) }, 200);
            n.addEventListener("scroll", function() { s() }) }) },
    generateStoriesGallery = function(e, t, i, n) { var o = document.querySelector(e); if (o) { for (var a = "", s = []; s.length < i;) { var r = Math.floor(Math.random() * n) + 1;
                s.includes(r) || s.push(r) }
            s.forEach(function(e) { a += '<li><img src="' + t + e + '.jpg" alt="" loading="lazy"></li>' }); var c = "<ul>" + a + "</ul>";
            o.insertAdjacentHTML("beforeend", c), setTimeout(function() { o.classList.add("is-loaded") }, 750) } },
    makeMeSticky = function(e) { document.querySelectorAll(e).forEach(function(e) { var t = e.offsetHeight,
                i = window.innerHeight,
                n = function() { t = e.offsetHeight, i = window.innerHeight, e.className.indexOf("is-sticky--bottom") && (e.style.top = t > i ? i - t + "px" : "0") },
                o = setInterval(function() { t > 0 && (n(), clearInterval(o)) }, 1e3);
            window.addEventListener("resize", function() { n() }) }) },
    scrollPageToEl = function(e, t) { document.querySelectorAll(e).forEach(function(e) { e.addEventListener("click", function(e) { e.preventDefault(), document.querySelector(t).scrollIntoView({ behavior: "smooth" }) }) }) };
if (document.querySelector(".ContactForm")) var contactForm = document.querySelector(".ContactForm");
if (contactForm) { contactForm.addEventListener("submit", function(e) { e.preventDefault(); var t = "";
        t = "first_name=" + document.querySelector("#form-FirstName").value + "&last_name=" + document.querySelector("#form-LastName").value + "&company=" + document.querySelector("#form-CompanyName").value + "&website=" + document.querySelector("#form-Website").value + "&email=" + document.querySelector("#form-Email").value + "&phone=" + document.querySelector("#form-Phone").value; var i = new XMLHttpRequest;
        i.open("POST", "/scripts/contact.py", !0), i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), i.onreadystatechange = function() { i.readyState == XMLHttpRequest.DONE && 200 == i.status && contactForm.classList.add("is-done") }, i.send(t) }); var contactFormResendBtn = contactForm.querySelector(".ResendBtn");
    contactFormResendBtn.addEventListener("click", function(e) { e.preventDefault(), contactForm.reset(), contactForm.classList.remove("is-done") }) }
var visualSideGuidesFn = function() { document.querySelectorAll(".VisualSideGuides-list-item").forEach(function(e, t) { var i = document.createElement("div"),
                n = "";
            e.classList.contains("is-circled") && (n = '<div class="VisualSideGuides-list-item-fx-circle"></div>'), i.classList.add("VisualSideGuides-list-item-fx"), i.innerHTML = '<div class="VisualSideGuides-list-item-fx-line"></div>' + n, e.prepend(i) }) },
    storyLoadOnLoadFn = function() { var e, t = document.querySelector(".MainPage").dataset.page,
            i = JSONStorageURL + "/pagesStories.json",
            n = new XMLHttpRequest;
        n.open("GET", i), n.responseType = "json", n.send(), n.onload = function() { e = n.response, e[t] && e[t].forEach(function(e, t) { var i = document.querySelector("." + e.section + " .PageSection-sub--content"),
                    n = document.querySelector("." + e.section + " .PageSection-main-visual"),
                    o = document.querySelector("." + e.section + " .PageSection-actions-content .Btn span"),
                    a = "350",
                    s = "620"; if (e.cssClasses && n && n.classList.add(e.cssClasses), e.cssStyles && n && n.setAttribute("style", e.cssStyles), e.width && (a = e.width), e.height && (s = e.height), e.story && n) n.innerHTML = '<iframe src="' + e.story + '" width="' + a + '" height="' + s + '" title="' + e.title + '" loading="lazy">';
                else if (e.img && n) { var r = "";
                    r = 1 == webpSupport ? sectionsMediaURL + e.img + ".webp" : sectionsMediaURL + e.img + "." + e.ext, n.innerHTML = '<img src="' + r + '" width="' + a + '" height="' + s + '" class="is-unset" alt="' + e.title + '" loading="lazy">' } else if (e.video) { var c = sectionsMediaURL + e.video,
                        l = "",
                        d = ".jpg";
                    1 == webpSupport && (d = ".webp"), document.querySelector("." + e.section) && document.querySelector("." + e.section).classList.contains("is-split") && (l = "is-autoW"), n && (n.innerHTML = '<video poster="' + c + d + "?v=" + e.version + '" width="' + a + '" height="' + s + '" class="' + l + '" loop muted autoplay playsinline><source src="' + c + '.mp4" type="video/mp4"><source src="' + c + '.webm" type="video/webm">Your browser does not support the video tag.</video>', addVideoContainer("." + e.section + " .PageSection-main-visual video"), "IntroSection" != e.section && playPauseVideoOnScroll(["." + e.section + " .PageSection-main-visual video"], 100)) } if ("is-iphonised" == e.cssClasses) { var u = "";
                    u = 1 == webpSupport ? '<source type="image/webp" srcset="' + storageURL + '/media/iPhone-shape.webp">' : '<source type="image/png" srcset="' + storageURL + '/media/iPhone-shape.png">', n.innerHTML += '<div class="iPhoneFrame"><picture> ' + u + '<img src="' + storageURL + '/media/iPhone-shape.png" width="380" height="760" alt="" loading="lazy"></picture></div>' } if (e.desc) { var m = '<p class="PageSection-desc"><span class="PageSection-desc-content">' + e.desc + "</span></p>";
                    i && i.insertAdjacentHTML("afterbegin", m) } if (e.title) { var p, f, v;
                    p = e.titleType ? e.titleType : "h2", f = e.titleCSSClass ? e.titleCSSClass : ""; var v = "<" + p + ' class="PageSection-title ' + f + '"><span class="PageSection-title-content">' + e.title + "</span></" + p + ">";
                    i && i.insertAdjacentHTML("afterbegin", v) } if (e.label) { var y = '<label class="PageSection-label"><span class="PageSection-label-content">' + e.label + "</span></label>";
                    i && i.insertAdjacentHTML("afterbegin", y) }
                e.btn && o && (o.innerHTML = e.btn) }) } },
    storyLoadOnClickFn = function() { var e = document.querySelectorAll("[data-storylandingsection]");
        e && e.forEach(function(e, t) { var i, n = document.querySelector("." + e.dataset.storylandingsection),
                o = n.querySelector(".PageSection-main-visual"),
                a = n.querySelector("iframe"),
                s = e.querySelectorAll("[data-storyurl]");
            a.src = s[0].dataset.storyurl, a.title = s[0].dataset.storytitle + " Story", s[0].classList.add("is-active"), s.forEach(function(e, t) { e.classList.contains("is-active") && (i = e), e.addEventListener("click", function(t) { t.preventDefault(), o && o.classList.add("is-loading"), setTimeout(function() { a.src = e.dataset.storyurl, a.title = e.dataset.storytitle + " Story" }, 250), a.onload = function() { o.classList.remove("is-loading") }, null != i && i.classList.remove("is-active"), e.classList.add("is-active"), i = e }) }) }) },
    validateEmail = function(e, t) { return /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!abc.com)(?!xyz.com)(?!pqr.com)(?!rediffmail.com)(?!live.com)(?!outlook.com)(?!me.com)(?!msn.com)(?!ymail.com)([\w-]+\.)+[\w-]{2,4})?$/.test(e) ? e : (document.querySelector(t).innerHTML = "Please use a work email.", !1) },
    passEmailToPricing = function(e) { localStorage.setItem("email", e) };
domReady(function() { checkWebPSupport(), mobileBrowser || document.querySelector("html").classList.add("is-desktop"); var e, t = ""; if ("" != (e = "html" === window.location.pathname.split("/")[1].split(".")[1] ? window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1).split(".")[0].split("-") : window.location.pathname.split("/")[1].split("-")) && "index" != e)
        for (i = 0; i < e.length; i++) { var n = e[i];
            i > 0 && (n = n.charAt(0).toUpperCase() + n.slice(1)), t += n } else t = "homepage";
    document.querySelector(".MainPage").classList.add("MainPage--" + t), document.querySelector(".MainPage").dataset.page = t, addVideoContainer("video"), playPauseVideoOnScroll(["video"], 100), makeMeSticky(".is-sticky"), document.querySelector(".MainHeader-menu-trigger").addEventListener("click", function(e) { e.preventDefault(), document.querySelector(".MainPage").classList.toggle("is-menu-open") }), document.querySelector("html").addEventListener("click", function(e) { var t = document.querySelector(".MainPage");
        e.target.className.indexOf("MainHeader-menu") < 0 && t.className.indexOf("is-menu-open") > -1 && t.classList.remove("is-menu-open") }), scrollPageToEl(".ReqDemoBtn", ".ContactSection"), visualSideGuidesFn(), storyLoadOnLoadFn(), roundCarouselsFn(), tabbablePanesFn() });
var roundCarouselsFn = function() { var e, t = document.querySelectorAll(".RoundCarousel"); if (t) { var n = JSONStorageURL + "/roundCarousels.json",
                o = new XMLHttpRequest;
            o.open("GET", n), o.responseType = "json", o.send();
            void 0 == e && function() { o.onload = function() { e = o.response, a() } }(); var a = function() { t.forEach(function(t, n) { var o = t.getAttribute("data-carousel"); if (e[o]) { var a, s = "",
                            r = []; for (i = 0; i < e[o].length; i++) r.push(i);
                        shuffle(r).forEach(function(t, i) { var n, a, r, c, l = e[o][t].title,
                                d = e[o][t].img,
                                u = sectionsMediaURL + e[o][t].imgLocation,
                                m = "jpg",
                                p = e[o][t].version,
                                f = e[o][t].url;
                            1 == webpSupport ? m = "webp" : e[o][t].ext && (m = e[o][t].ext), n = 'type="image/' + m + '"', a = d + "." + m + "?v=" + p, r = "<source " + n + ' media="(max-width: 1023px)" srcset="' + u + "max1023/" + a + " 1x, " + u + "max1023/2x/" + a + ' 2x"><source ' + n + ' media="(min-width: 1024px)" srcset="' + u + "min1024/" + a + " 1x, " + u + "min1024/2x/" + a + ' 2x">', c = '<div class="RoundCarousel-item " data-storyURL="' + f + '" data-storytitle="' + l + '"><div class="RoundCarousel-item-visual"><picture>' + r + '<img src="' + u + "min1024/" + a + '" width="120" height="120" alt="' + l + '" loading="lazy"></picture></div><div class="RoundCarousel-item-title">' + l + "</div></div>", s += c }), a = '<div class="RoundCarousel-items">' + s + "</div>", t.innerHTML = a, storyLoadOnClickFn(), scrollPageToEl('[data-carousel="' + o + '"]', "." + t.dataset.storylandingsection) } }) } } },
    tabbablePanesFn = function() { var e, t = document.querySelector(".MainPage").dataset.page,
            n = storageURL + "/media/tabbablePanes/",
            o = JSONStorageURL + "/tabbablePanes.json",
            a = new XMLHttpRequest;
        a.open("GET", o), a.responseType = "json", a.send(), a.onload = function() { if (e = a.response, e[t])
                for (i = 0; i < e[t].length; i++) { var o = e[t][i].name,
                        s = document.querySelector("." + o); if (s) { var r = e[t][i].panes,
                            c = s.querySelector(".Tabbable-nav-items"),
                            l = s.querySelector(".Tabbable-panes-items"); if (r) { var d = 0;
                            r.forEach(function(e, t) { var i, a = e.title; if (c.insertAdjacentHTML("beforeend", '<a class="Tabbable-nav-item">' + a + "</a>"), e.video) { var u = n + e.video,
                                        m = o + "-vid" + d,
                                        p = ".jpg";
                                    1 == webpSupport && (p = ".webp"), d += 1, i = '<video poster="' + u + p + "?v=" + e.version + '" width="1280" height="814" playsinline preload="metadata" class="' + m + '"><source src="' + u + ".mp4?v=" + e.version + '" type="video/mp4"><source src="' + u + ".webm?v=" + e.version + '" type="video/webm">Your browser does not support the video tag.</video>' } else if (e.img) { var f, v, y = "jpg",
                                        S = "";
                                    1 == webpSupport && (y = "webp"), f = 'type="image/' + y + '"', v = e.img + "." + y + "?v=" + e.version, S = "<source " + f + ' media="(max-width: 599px)" srcset="' + n + "max599/" + v + " 1x, " + n + "max599/2x/" + v + ' 2x"><source ' + f + ' media="(max-width: 1023px)" srcset="' + n + "max1023/" + v + " 1x, " + n + "max1023/2x/" + v + ' 2x"><source ' + f + ' media="(min-width: 1024px)" srcset="' + n + "min1024/" + v + " 1x, " + n + "min1024/2x/" + v + ' 2x">', i = "<picture>" + S + '<img src="' + n + "min1024/" + v + '" width="1280" height="814" alt="" loading="lazy"></picture>' }
                                l.insertAdjacentHTML("beforeend", '<div class="Tabbable-panes-item"><div class="PageSection-main-visual">' + i + "</div></div>"), e.video && (addVideoContainer("." + m), addBigVideoButton("." + m, "Play Video", "Pause")), r.length <= 1 && s.classList.add("is-lonely") }), tabbableNavFn() } } } } },
    tabbableNavFn = function() { var e = document.querySelectorAll(".Tabbable");
        e && e.forEach(function(e, t) { var i = e.querySelectorAll(".Tabbable-nav-item"),
                n = e.querySelector(".Tabbable-nav-marker"),
                o = e.querySelectorAll(".Tabbable-panes-item"); if (i) { var a = 1;
                i[0] && i[0].classList.add("is-active"); var s = function() { var e = function() { var e = i[a].offsetWidth,
                            t = i[a].offsetLeft;
                        n.style.width = e + "px", n.style.left = t + "px" };
                    window.onresize = function(t) { e() }, e() };
                i.forEach(function(e, t) { e.classList.contains("is-active") && (a = t, o[t].classList.add("is-active"), s()), e.addEventListener("click", function(e) { if (e.preventDefault(), t != a) { var n = o[a].querySelector("video");
                            n && 0 == n.paused && pauseVideo(n), i[a].classList.remove("is-active"), o[a].classList.remove("is-active"), i[t].classList.add("is-active"), o[t].classList.add("is-active"), a = t, s() } }) }) } }) };
domReady(function() {}), domReady(function() { var e, t = document.querySelector(".MainPage").dataset.page,
        i = document.querySelector(".MainHeader-menu");
    t && (e = i.querySelector('[data-pagebutton="' + t + '"]')) && e.classList.add("is-active"); var n = document.querySelectorAll(".MainHeader-menu-dropdown-caret");
    n && n.forEach(function(e, t) { var i = e.parentElement,
            n = i.previousElementSibling.lastChild.getBoundingClientRect().x - i.previousElementSibling.getBoundingClientRect().x;
        e.style.left = n + "px", i.setAttribute("style", "transform-origin: " + n + "px top") }); var o = document.querySelector(".MainHeader-menu-items-secondary");
    document.querySelector(".MainPage--adFormats") || document.querySelector(".MainPage--brandedContent") || document.querySelector(".MainPage--amplifyContent") || document.querySelector(".MainPage--promotedStories") || document.querySelector(".MainPage--programmaticDelivery") || document.querySelector(".MainPage--contentExamples") ? (o.innerHTML = '<li><a href="#" class="MainHeader-menu-item-button is-important ReqDemoBtn">Request a demo</a></li>', scrollPageToEl(".ReqDemoBtn", ".ContactSection")) : o.innerHTML = '<li><a href="https://studio.nws.ai" class="MainHeader-menu-item-button">My Account</a></li><li><a href="pricing.html" class="MainHeader-menu-item-button is-important">Sign-up now</a></li>' }), domReady(function() { document.querySelector(".MainPage--amplifyContent") && (document.querySelector(".MainHeader").classList.add("is-light"), document.querySelector(".ContactSection").classList.add("is-dark", "is-fullW")); var e = document.querySelector(".GuidedPhoneSection-guidesSwitch input"),
        t = document.querySelector(".VisualSideGuides"),
        i = function() { e && (e.checked ? t.classList.remove("is-visible") : t.classList.add("is-visible")) };
    e && (e.onclick = function(e) { i() }, i()) }), domReady(function() { document.querySelector(".MainPage--brandedContent") && (document.querySelector(".MainHeader").classList.add("is-light"), document.querySelector(".ContactSection").classList.add("is-dark", "is-fullW")); var e = document.querySelector(".GuidedPhoneSection-guidesSwitch input"),
        t = document.querySelector(".VisualSideGuides"),
        i = function() { e && (e.checked ? t.classList.remove("is-visible") : t.classList.add("is-visible")) };
    e && (e.onclick = function(e) { i() }, i()) }), domReady(function() { mobileBrowser || generateStoriesGallery(".StoriesGallery-side", storageURL + "/img/story-cards/ss", 10, 11), setVideoDurationAttribute([".GameChanging-main-vid"]), addBigVideoButton(".GameChanging-main-vid", "Play Video", "Pause") });
var updatePricePlansBigFn = function() { var e = JSONStorageURL + "/pricePlans.json",
        t = new XMLHttpRequest;
    t.open("GET", e), t.responseType = "json", t.send(); var i, n, o, a, s = function() { t.onload = function() { i = t.response } },
        r = ".PricePlansSection-plan",
        c = document.querySelector(".PricePlansSection-entitySwitch input"),
        l = document.querySelector(".PricePlansSection-periodSwitch input"),
        d = new Intl.NumberFormat("en-US", { minimumFractionDigits: "0" });! function() { "agency" != window.location.hash.substr(1) && "publisher" != window.location.hash.substr(1) || (o = window.location.hash.substr(1), c && "agency" == o && (c.checked = !0)) }(); var u = function() { void 0 != o ? (n = o, o = void 0) : c && (n = c.checked ? "agency" : "publisher", updatePageURL(n)) };
    c && (c.onclick = function(e) { p() }); var m = function() { l && (a = l.checked ? "yearly" : "monthly") };
    l && (l.onclick = function(e) { p() }); var p = function() { u(), m(); var e = function() { pricePlans = document.querySelectorAll(r), pricePlans.forEach(function(e, t) { var o = e.querySelector(r + "-name"),
                        s = e.querySelector(r + "-description"),
                        c = e.querySelector(r + "-features-title"),
                        l = e.querySelector(r + "-features-list"),
                        u = e.querySelectorAll(".PricePlansSection-plan-price"),
                        m = e.querySelector(r + "-CTAbtn"),
                        p = e.querySelector(r + "-bottomInfo"),
                        f = i[n][t].ctatext,
                        v = i[n][t].bottomInfo;
                    o.innerHTML = i[n][t].name, s.innerHTML = i[n][t].description, c.innerHTML = i[n][t].featuresTitle, i[n][t].isPopular ? e.classList.add("is-popular") : e.classList.contains("is-popular") && e.classList.remove("is-popular"); var y = i[n][t].featuresList,
                        S = i[n][t].featuresListHighlights;
                    l.innerHTML = "", y.forEach(function(e, t) { var i = "<li>";
                        S && S.includes(t + 1) && (i = '<li class="is-highlight">'), l.innerHTML += i + e + "</li>" }); var g = i[n][t].price; "yearly" == a && "number" == typeof g && (g -= 20 * g / 100), u.forEach(function(e) { var t;
                        t = "number" == typeof g ? "$" + d.format(Math.round(g)) + " / month" : g, e.innerHTML = t }), m && (m.querySelector("span").innerHTML = f || "Get " + i[n][t].name + " for $" + d.format(Math.round(g)), i[n][t].contactBtn ? (m.classList.add("is-transparent", "is-bordered", "ReqDemoBtn"), scrollPageToEl(".ReqDemoBtn", ".ContactSection")) : m.dataset.plantype = i[n][t].name.split(" ").join("_").toLowerCase()), p && v && (p.innerHTML = i[n][t].bottomInfo) }), f() };
            void 0 != i ? function() { var t = document.querySelector(".PricePlansSection-plans");
                t.innerHTML = "", i[n].forEach(function(e, i) { t.insertAdjacentHTML("afterbegin", '<div class="PricePlansSection-plan"><div class="PricePlansSection-plan-inner"><div class="PricePlansSection-plan-name"></div><div class="PricePlansSection-plan-price"></div><div class="PricePlansSection-plan-description"></div><div class="PricePlansSection-plan-features"><div class="PricePlansSection-plan-features-title"></div><ul class="PricePlansSection-plan-features-list"></ul></div><a class="Btn Btn--dark PricePlansSection-plan-CTAbtn"><span class="u-fw-medium"></span></a><div class="PricePlansSection-plan-bottomInfo"></div></div></div>') }), e() }() : (s(), setTimeout(function() { p() }, 10)) },
        f = function() { document.querySelectorAll(r + "-CTAbtn").forEach(function(e, t) { e.dataset.plantype && (e.onclick = function(t) { t.preventDefault(); var i = "";
                    localStorage.getItem("email") && (i = "&email=" + localStorage.getItem("email")), pricePlanType = e.getAttribute("data-plantype"), window.open("https://studio.nws.ai/register?plan=" + pricePlanType + "&cycle=" + a + "&entity=" + n + i, "_blank").location }) }) };
    p() };
domReady(function() { document.querySelector(".PricePlansSection") && (updatePricePlansBigFn(), window.onbeforeunload = function() { localStorage.removeItem("email") }) }), domReady(function() { document.querySelector(".MainPage--programmaticDelivery") && (document.querySelector(".MainHeader").classList.add("is-light"), document.querySelector(".ContactSection").classList.add("is-dark", "is-fullW")) }), domReady(function() { document.querySelector(".MainPage--promotedStories") && (document.querySelector(".MainHeader").classList.add("is-light"), document.querySelector(".ContactSection").classList.add("is-dark", "is-fullW")) }), domReady(function() { document.querySelector(".MainPage--socialDisplay") && (document.querySelector(".MainHeader").classList.add("is-light"), document.querySelector(".ContactSection").classList.add("is-dark", "is-fullW")); var e = document.querySelector(".GuidedPhoneSection-guidesSwitch input"),
        t = document.querySelector(".VisualSideGuides"),
        i = function() { e && (e.checked ? t.classList.remove("is-visible") : t.classList.add("is-visible")) };
    e && (e.onclick = function(e) { i() }, i()) });
//# sourceMappingURL=main.min.js.map