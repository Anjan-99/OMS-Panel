!(function (e) {
  function t(t) {
    for (
      var n, l, r = t[0], c = t[1], i = t[2], u = 0, p = [];
      u < r.length;
      u++
    )
      (l = r[u]),
        Object.prototype.hasOwnProperty.call(s, l) && s[l] && p.push(s[l][0]),
        (s[l] = 0);
    for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
    for (d && d(t); p.length; ) p.shift()();
    return o.push.apply(o, i || []), a();
  }
  function a() {
    for (var e, t = 0; t < o.length; t++) {
      for (var a = o[t], n = !0, r = 1; r < a.length; r++) {
        var c = a[r];
        0 !== s[c] && (n = !1);
      }
      n && (o.splice(t--, 1), (e = l((l.s = a[0]))));
    }
    return e;
  }
  var n = {},
    s = { 1: 0 },
    o = [];
  function l(t) {
    if (n[t]) return n[t].exports;
    var a = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, l), (a.l = !0), a.exports;
  }
  (l.m = e),
    (l.c = n),
    (l.d = function (e, t, a) {
      l.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (l.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (l.t = function (e, t) {
      if ((1 & t && (e = l(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (l.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          l.d(
            a,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return a;
    }),
    (l.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return l.d(t, "a", t), t;
    }),
    (l.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (l.p = "");
  var r = (window.webpackJsonp = window.webpackJsonp || []),
    c = r.push.bind(r);
  (r.push = t), (r = r.slice());
  for (var i = 0; i < r.length; i++) t(r[i]);
  var d = c;
  o.push([160, 3]), a();
})({
  160: function (e, t, a) {
    a(184), (e.exports = a(181));
  },
  161: function (e, t) {
    const a = ".dropup, .dropright, .dropdown, .dropleft",
      n = document.querySelectorAll(a);
    let s = void 0;
    n.forEach((e) => {
      e.addEventListener("mousedown", (e) => {
        e.stopPropagation(),
          e.target.dataset.toggle &&
            "dropdown" === e.target.dataset.toggle &&
            (s = e.currentTarget);
      }),
        e.addEventListener("hide.bs.dropdown", (t) => {
          t.stopPropagation();
          const n = s ? s.parentElement.closest(a) : void 0;
          n && n === e && t.preventDefault(), (s = void 0);
        });
    });
  },
  174: function (e, t) {
    const a = document.querySelectorAll("[data-map]");
    "undefined" != typeof mapboxgl &&
      a.forEach((e) => {
        const t = {
          ...(e.dataset.map ? JSON.parse(e.dataset.map) : {}),
          ...{
            container: e,
            style: "mapbox://styles/mapbox/light-v9",
            scrollZoom: !1,
            interactive: !1,
          },
        };
        (mapboxgl.accessToken =
          "pk.eyJ1IjoiZ29vZHRoZW1lcyIsImEiOiJjanU5eHR4N2cybDU5NGVwOHZwNGprb3E0In0.msdw9q16dh8v4azJXUdiXg"),
          new mapboxgl.Map(t);
      });
  },
  179: function (e, t, a) {
    var n = {
      "./af": 18,
      "./af.js": 18,
      "./ar": 19,
      "./ar-dz": 20,
      "./ar-dz.js": 20,
      "./ar-kw": 21,
      "./ar-kw.js": 21,
      "./ar-ly": 22,
      "./ar-ly.js": 22,
      "./ar-ma": 23,
      "./ar-ma.js": 23,
      "./ar-sa": 24,
      "./ar-sa.js": 24,
      "./ar-tn": 25,
      "./ar-tn.js": 25,
      "./ar.js": 19,
      "./az": 26,
      "./az.js": 26,
      "./be": 27,
      "./be.js": 27,
      "./bg": 28,
      "./bg.js": 28,
      "./bm": 29,
      "./bm.js": 29,
      "./bn": 30,
      "./bn.js": 30,
      "./bo": 31,
      "./bo.js": 31,
      "./br": 32,
      "./br.js": 32,
      "./bs": 33,
      "./bs.js": 33,
      "./ca": 34,
      "./ca.js": 34,
      "./cs": 35,
      "./cs.js": 35,
      "./cv": 36,
      "./cv.js": 36,
      "./cy": 37,
      "./cy.js": 37,
      "./da": 38,
      "./da.js": 38,
      "./de": 39,
      "./de-at": 40,
      "./de-at.js": 40,
      "./de-ch": 41,
      "./de-ch.js": 41,
      "./de.js": 39,
      "./dv": 42,
      "./dv.js": 42,
      "./el": 43,
      "./el.js": 43,
      "./en-au": 44,
      "./en-au.js": 44,
      "./en-ca": 45,
      "./en-ca.js": 45,
      "./en-gb": 46,
      "./en-gb.js": 46,
      "./en-ie": 47,
      "./en-ie.js": 47,
      "./en-il": 48,
      "./en-il.js": 48,
      "./en-in": 49,
      "./en-in.js": 49,
      "./en-nz": 50,
      "./en-nz.js": 50,
      "./en-sg": 51,
      "./en-sg.js": 51,
      "./eo": 52,
      "./eo.js": 52,
      "./es": 53,
      "./es-do": 54,
      "./es-do.js": 54,
      "./es-us": 55,
      "./es-us.js": 55,
      "./es.js": 53,
      "./et": 56,
      "./et.js": 56,
      "./eu": 57,
      "./eu.js": 57,
      "./fa": 58,
      "./fa.js": 58,
      "./fi": 59,
      "./fi.js": 59,
      "./fil": 60,
      "./fil.js": 60,
      "./fo": 61,
      "./fo.js": 61,
      "./fr": 62,
      "./fr-ca": 63,
      "./fr-ca.js": 63,
      "./fr-ch": 64,
      "./fr-ch.js": 64,
      "./fr.js": 62,
      "./fy": 65,
      "./fy.js": 65,
      "./ga": 66,
      "./ga.js": 66,
      "./gd": 67,
      "./gd.js": 67,
      "./gl": 68,
      "./gl.js": 68,
      "./gom-deva": 69,
      "./gom-deva.js": 69,
      "./gom-latn": 70,
      "./gom-latn.js": 70,
      "./gu": 71,
      "./gu.js": 71,
      "./he": 72,
      "./he.js": 72,
      "./hi": 73,
      "./hi.js": 73,
      "./hr": 74,
      "./hr.js": 74,
      "./hu": 75,
      "./hu.js": 75,
      "./hy-am": 76,
      "./hy-am.js": 76,
      "./id": 77,
      "./id.js": 77,
      "./is": 78,
      "./is.js": 78,
      "./it": 79,
      "./it-ch": 80,
      "./it-ch.js": 80,
      "./it.js": 79,
      "./ja": 81,
      "./ja.js": 81,
      "./jv": 82,
      "./jv.js": 82,
      "./ka": 83,
      "./ka.js": 83,
      "./kk": 84,
      "./kk.js": 84,
      "./km": 85,
      "./km.js": 85,
      "./kn": 86,
      "./kn.js": 86,
      "./ko": 87,
      "./ko.js": 87,
      "./ku": 88,
      "./ku.js": 88,
      "./ky": 89,
      "./ky.js": 89,
      "./lb": 90,
      "./lb.js": 90,
      "./lo": 91,
      "./lo.js": 91,
      "./lt": 92,
      "./lt.js": 92,
      "./lv": 93,
      "./lv.js": 93,
      "./me": 94,
      "./me.js": 94,
      "./mi": 95,
      "./mi.js": 95,
      "./mk": 96,
      "./mk.js": 96,
      "./ml": 97,
      "./ml.js": 97,
      "./mn": 98,
      "./mn.js": 98,
      "./mr": 99,
      "./mr.js": 99,
      "./ms": 100,
      "./ms-my": 101,
      "./ms-my.js": 101,
      "./ms.js": 100,
      "./mt": 102,
      "./mt.js": 102,
      "./my": 103,
      "./my.js": 103,
      "./nb": 104,
      "./nb.js": 104,
      "./ne": 105,
      "./ne.js": 105,
      "./nl": 106,
      "./nl-be": 107,
      "./nl-be.js": 107,
      "./nl.js": 106,
      "./nn": 108,
      "./nn.js": 108,
      "./oc-lnc": 109,
      "./oc-lnc.js": 109,
      "./pa-in": 110,
      "./pa-in.js": 110,
      "./pl": 111,
      "./pl.js": 111,
      "./pt": 112,
      "./pt-br": 113,
      "./pt-br.js": 113,
      "./pt.js": 112,
      "./ro": 114,
      "./ro.js": 114,
      "./ru": 115,
      "./ru.js": 115,
      "./sd": 116,
      "./sd.js": 116,
      "./se": 117,
      "./se.js": 117,
      "./si": 118,
      "./si.js": 118,
      "./sk": 119,
      "./sk.js": 119,
      "./sl": 120,
      "./sl.js": 120,
      "./sq": 121,
      "./sq.js": 121,
      "./sr": 122,
      "./sr-cyrl": 123,
      "./sr-cyrl.js": 123,
      "./sr.js": 122,
      "./ss": 124,
      "./ss.js": 124,
      "./sv": 125,
      "./sv.js": 125,
      "./sw": 126,
      "./sw.js": 126,
      "./ta": 127,
      "./ta.js": 127,
      "./te": 128,
      "./te.js": 128,
      "./tet": 129,
      "./tet.js": 129,
      "./tg": 130,
      "./tg.js": 130,
      "./th": 131,
      "./th.js": 131,
      "./tk": 132,
      "./tk.js": 132,
      "./tl-ph": 133,
      "./tl-ph.js": 133,
      "./tlh": 134,
      "./tlh.js": 134,
      "./tr": 135,
      "./tr.js": 135,
      "./tzl": 136,
      "./tzl.js": 136,
      "./tzm": 137,
      "./tzm-latn": 138,
      "./tzm-latn.js": 138,
      "./tzm.js": 137,
      "./ug-cn": 139,
      "./ug-cn.js": 139,
      "./uk": 140,
      "./uk.js": 140,
      "./ur": 141,
      "./ur.js": 141,
      "./uz": 142,
      "./uz-latn": 143,
      "./uz-latn.js": 143,
      "./uz.js": 142,
      "./vi": 144,
      "./vi.js": 144,
      "./x-pseudo": 145,
      "./x-pseudo.js": 145,
      "./yo": 146,
      "./yo.js": 146,
      "./zh-cn": 147,
      "./zh-cn.js": 147,
      "./zh-hk": 148,
      "./zh-hk.js": 148,
      "./zh-mo": 149,
      "./zh-mo.js": 149,
      "./zh-tw": 150,
      "./zh-tw.js": 150,
    };
    function s(e) {
      var t = o(e);
      return a(t);
    }
    function o(e) {
      if (!a.o(n, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      return n[e];
    }
    (s.keys = function () {
      return Object.keys(n);
    }),
      (s.resolve = o),
      (e.exports = s),
      (s.id = 179);
  },
  181: function (e, t, a) {},
  184: function (e, t, a) {
    "use strict";
    a.r(t);
    var n = a(2),
      s = a(151),
      o = a.n(s);
    document.querySelectorAll("[data-autosize]").forEach((e) => {
      o()(e);
    });
    var l = a(6);
    const r = document.querySelectorAll(".checklist");
    r &&
      new l.Sortable(r, {
        draggable: ".form-check",
        handle: ".form-check-label",
        mirror: { constrainDimensions: !0 },
      });
    var c = a(152),
      i = a.n(c);
    document.querySelectorAll("[data-choices]").forEach((e) => {
      const t = {
        ...(e.dataset.choices ? JSON.parse(e.dataset.choices) : {}),
        ...{
          shouldSort: !1,
          classNames: {
            containerInner: e.className,
            input: "form-control",
            inputCloned: "form-control-sm",
            listDropdown: "dropdown-menu",
            itemChoice: "dropdown-item",
            activeState: "show",
            selectedState: "active",
          },
          callbackOnCreateTemplates: function (e) {
            return {
              choice: (t, a) => {
                const n = `${t.item} ${t.itemChoice} ${
                    a.disabled ? t.itemDisabled : t.itemSelectable
                  }`,
                  s = a.disabled
                    ? 'data-choice-disabled aria-disabled="true"'
                    : "data-choice-selectable",
                  o = a.groupId > 0 ? 'role="treeitem"' : 'role="option"',
                  l = this.config.itemSelectText,
                  r =
                    a.customProperties && a.customProperties.avatarSrc
                      ? `\n            <div class="avatar avatar-xs mr-3">\n              <img class="avatar-img rounded-circle" src="${a.customProperties.avatarSrc}" alt="${a.label}" >\n            </div> ${a.label}\n          `
                      : a.label;
                return e(
                  `\n            <div class="${n}" data-select-text="${l}" data-choice ${s} data-id="${a.id}" data-value="${a.value}" ${o}>\n              ${r}\n            </div>\n          `
                );
              },
            };
          },
        },
      };
      new i.a(e, t);
    });
    a(161);
    var d = a(5),
      u = a.n(d);
    (u.a.autoDiscover = !1),
      (u.a.thumbnailWidth = null),
      (u.a.thumbnailHeight = null);
    document.querySelectorAll("[data-dropzone]").forEach((e) => {
      let t = void 0;
      const a = e.dataset.dropzone ? JSON.parse(e.dataset.dropzone) : {},
        n = {
          previewsContainer: e.querySelector(".dz-preview"),
          previewTemplate: e.querySelector(".dz-preview").innerHTML,
          init: function () {
            this.on("addedfile", function (e) {
              1 == a.maxFiles && t && this.removeFile(t), (t = e);
            });
          },
        },
        s = { ...a, ...n };
      (e.querySelector(".dz-preview").innerHTML = ""), new u.a(e, s);
    });
    var p = a(153),
      f = a.n(p);
    document.querySelectorAll("[data-flatpickr]").forEach((e) => {
      const t = e.dataset.flatpickr ? JSON.parse(e.dataset.flatpickr) : {};
      f()(e, t);
    });
    var b = a(7),
      h = a.n(b),
      g = a(154),
      y = a.n(g),
      m = a(155),
      j = a.n(m);
    const v = document.querySelectorAll(".highlight");
    h.a.registerLanguage("xml", y.a),
      h.a.registerLanguage("javascript", j.a),
      v.forEach((e) => {
        h.a.highlightBlock(e);
      });
    var k = a(156),
      A = a.n(k);
    const w = document.querySelectorAll("[data-inputmask]");
    A()({ rightAlign: !1 }).mask(w);
    const S = document.querySelectorAll(".kanban-category"),
      E = document.querySelectorAll(".kanban-add-link"),
      C = document.querySelectorAll(".kanban-add-form");
    function x(e) {
      const t = e.closest(".kanban-add"),
        a = t.querySelector(".card"),
        n = t.querySelector(".kanban-add-link"),
        s = t.querySelector(".kanban-add-form");
      n.classList.toggle("d-none"),
        s.classList.toggle("d-none"),
        a &&
          a.classList.contains("card-sm") &&
          (a.classList.contains("card-flush")
            ? a.classList.remove("card-flush")
            : a.classList.add("card-flush"));
    }
    S &&
      new l.Sortable(S, {
        draggable: ".kanban-item",
        mirror: { constrainDimensions: !0 },
      }),
      E.forEach((e) => {
        e.addEventListener("click", () => {
          x(e);
        });
      }),
      C.forEach((e) => {
        e.addEventListener("reset", function () {
          x(e);
        }),
          e.addEventListener("submit", function (e) {
            e.preventDefault();
          });
      });
    var O = a(3),
      D = a.n(O);
    (function () {
      const e = document.querySelectorAll("[data-list]"),
        t = document.querySelectorAll("[data-sort]");
      function a(e, t, a) {
        const n = [].slice.call(e).filter(function (e) {
          return e.checked;
        });
        t &&
          (n.length ? t.classList.add("show") : t.classList.remove("show"),
          (a.innerHTML = n.length));
      }
      void 0 !== D.a &&
        e &&
        [].forEach.call(e, function (e) {
          !(function (e) {
            const t = e.querySelector(".list-alert"),
              n = e.querySelector(".list-alert-count"),
              s = e.querySelector(".list-alert .close"),
              o = e.querySelectorAll(".list-checkbox"),
              l = e.querySelector(".list-checkbox-all"),
              r = e.querySelector(".list-pagination-prev"),
              c = e.querySelector(".list-pagination-next"),
              i = e.dataset.list && JSON.parse(e.dataset.list),
              d = Object.assign(
                {
                  listClass: "list",
                  searchClass: "list-search",
                  sortClass: "list-sort",
                },
                i
              ),
              u = new D.a(e, d);
            c &&
              c.addEventListener("click", function (e) {
                e.preventDefault();
                const t = u.i + u.page;
                t <= u.size() && u.show(t, u.page);
              }),
              r &&
                r.addEventListener("click", function (e) {
                  e.preventDefault();
                  const t = u.i - u.page;
                  t > 0 && u.show(t, u.page);
                }),
              o &&
                [].forEach.call(o, function (e) {
                  e.addEventListener("change", function () {
                    a(o, t, n), l && (l.checked = !1);
                  });
                }),
              l &&
                l.addEventListener("change", function () {
                  [].forEach.call(o, function (e) {
                    e.checked = l.checked;
                  }),
                    a(o, t, n);
                }),
              s &&
                s.addEventListener("click", function (e) {
                  e.preventDefault(),
                    l && (l.checked = !1),
                    [].forEach.call(o, function (e) {
                      e.checked = !1;
                    }),
                    a(o, t, n);
                });
          })(e);
        }),
        void 0 !== D.a &&
          t &&
          [].forEach.call(t, function (e) {
            e.addEventListener("click", function (e) {
              e.preventDefault();
            });
          });
    })(),
      a(174);
    document.querySelectorAll(".navbar-nav .collapse").forEach((e) => {
      const t = new n.a(e, { toggle: !1 });
      e.addEventListener("show.bs.collapse", (a) => {
        a.stopPropagation();
        e.parentElement
          .closest(".collapse")
          .querySelectorAll(".collapse")
          .forEach((e) => {
            const a = n.a.getInstance(e);
            a !== t && a.hide();
          });
      }),
        e.addEventListener("hide.bs.collapse", (t) => {
          t.stopPropagation();
          e.querySelectorAll(".collapse").forEach((e) => {
            n.a.getInstance(e).hide();
          });
        });
    });
    document.querySelectorAll('[data-toggle="popover"]').forEach((e) => {
      new n.b(e);
    });
    document.querySelectorAll('[data-toggle="tooltip"]').forEach((e) => {
      new n.d(e);
    });
    var L = a(157),
      q = a.n(L);
    document.querySelectorAll("[data-quill]").forEach((e) => {
      const t = {
        ...(e.dataset.quill ? JSON.parse(e.dataset.quill) : {}),
        modules: {
          toolbar: [
            ["bold", "italic"],
            ["link", "blockquote", "code", "image"],
            [{ list: "ordered" }, { list: "bullet" }],
          ],
        },
        theme: "snow",
      };
      new q.a(e, t);
    });
    document.querySelectorAll('[data-toggle="wizard"]').forEach((e) => {
      e.addEventListener("click", function (t) {
        t.preventDefault();
        new n.c(e).show(), e.classList.remove("active");
      });
    });
    var z = a(1),
      I = a.n(z);
    a(180);
    N("--bs-chart-gray-300"),
      N("--bs-chart-gray-600"),
      N("--bs-chart-gray-700"),
      N("--bs-chart-gray-800"),
      N("--bs-chart-gray-900");
    const T = {
        100: N("--bs-chart-primary-100"),
        300: N("--bs-chart-primary-300"),
        700: "#2C7BE5",
      },
      J = (N("--bs-dark"), N("--bs-white"), "transparent"),
      B = "Cerebri Sans",
      M = document.querySelectorAll('[data-toggle="chart"]'),
      F = document.querySelectorAll('[data-toggle="legend"]');
    function N(e) {
      return getComputedStyle(document.documentElement).getPropertyValue(e);
    }
    function $(e) {
      let t = void 0;
      return (
        I.a.helpers.each(I.a.instances, function (a) {
          e == a.chart.canvas && (t = a);
        }),
        t
      );
    }
    (I.a.defaults.global.responsive = !0),
      (I.a.defaults.global.maintainAspectRatio = !1),
      (I.a.defaults.global.defaultColor = N("--bs-chart-default-color")),
      (I.a.defaults.global.defaultFontColor = N(
        "--bs-chart-default-font-color"
      )),
      (I.a.defaults.global.defaultFontFamily = B),
      (I.a.defaults.global.defaultFontSize = 13),
      (I.a.defaults.global.layout.padding = 0),
      (I.a.defaults.global.legend.display = !1),
      (I.a.defaults.global.legend.position = "bottom"),
      (I.a.defaults.global.legend.labels.usePointStyle = !0),
      (I.a.defaults.global.legend.labels.padding = 16),
      (I.a.defaults.global.elements.point.radius = 0),
      (I.a.defaults.global.elements.point.backgroundColor = T[700]),
      (I.a.defaults.global.elements.line.tension = 0.4),
      (I.a.defaults.global.elements.line.borderWidth = 3),
      (I.a.defaults.global.elements.line.borderColor = T[700]),
      (I.a.defaults.global.elements.line.backgroundColor = J),
      (I.a.defaults.global.elements.line.borderCapStyle = "rounded"),
      (I.a.defaults.global.elements.rectangle.backgroundColor = T[700]),
      (I.a.defaults.global.elements.rectangle.borderColor = T[700]),
      (I.a.defaults.global.elements.rectangle.maxBarThickness = 10),
      (I.a.defaults.global.elements.arc.backgroundColor = T[700]),
      (I.a.defaults.global.elements.arc.borderColor = N(
        "--bs-chart-arc-border-color"
      )),
      (I.a.defaults.global.elements.arc.borderWidth = 4),
      (I.a.defaults.global.elements.arc.hoverBorderColor = N(
        "--bs-chart-arc-hover-border-color"
      )),
      (I.a.defaults.global.tooltips.enabled = !1),
      (I.a.defaults.global.tooltips.mode = "index"),
      (I.a.defaults.global.tooltips.intersect = !1),
      (I.a.defaults.global.tooltips.custom = function (e) {
        let t = document.getElementById("chart-tooltip");
        const a = this._chart.config.type;
        if (
          (t ||
            ((t = document.createElement("div")),
            t.setAttribute("id", "chart-tooltip"),
            t.setAttribute("role", "tooltip"),
            t.classList.add("popover"),
            t.classList.add("bs-popover-top"),
            document.body.appendChild(t)),
          0 === e.opacity)
        )
          return void (t.style.visibility = "hidden");
        if (e.body) {
          const n = e.title || [],
            s = e.body.map(function (e) {
              return e.lines;
            });
          let o = '<div class="popover-arrow"></div>';
          n.forEach(function (e) {
            o += '<h3 class="popover-header text-center">' + e + "</h3>";
          }),
            s.forEach(function (t, n) {
              const s = e.labelColors[n],
                l =
                  '<span class="popover-body-indicator" style="background-color: ' +
                  ("line" === a && "rgba(0,0,0,0.1)" !== s.borderColor
                    ? s.borderColor
                    : s.backgroundColor) +
                  '"></span>',
                r =
                  t.length > 1
                    ? "justify-content-left"
                    : "justify-content-center";
              o +=
                '<div class="popover-body d-flex align-items-center ' +
                r +
                '">' +
                l +
                t +
                "</div>";
            }),
            (t.innerHTML = o);
        }
        const n = this._chart.canvas.getBoundingClientRect(),
          s =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0,
          o =
            window.pageXOffset ||
            document.documentElement.scrollLeft ||
            document.body.scrollLeft ||
            0,
          l = n.top + s,
          r = n.left + o,
          c = t.offsetWidth,
          i = t.offsetHeight,
          d = l + e.caretY - i - 16,
          u = r + e.caretX - c / 2;
        (t.style.top = d + "px"),
          (t.style.left = u + "px"),
          (t.style.visibility = "visible");
      }),
      (I.a.defaults.global.tooltips.callbacks.label = function (e, t) {
        let a = "";
        const n = e.yLabel,
          s = t.datasets[e.datasetIndex],
          o = s.label,
          l = s.yAxisID ? s.yAxisID : 0,
          r = this._chart.options.scales.yAxes,
          c = r[0];
        l &&
          r.filter(function (e) {
            return e.id == l;
          })[0];
        const i = c.ticks.callback;
        return (
          t.datasets.filter(function (e) {
            return !e.hidden;
          }).length > 1 &&
            (a = '<span class="popover-body-label mr-auto">' + o + "</span>"),
          (a += '<span class="popover-body-value">' + i(n) + "</span>"),
          a
        );
      }),
      (I.a.defaults.doughnut.cutoutPercentage = 83),
      (I.a.defaults.doughnut.tooltips.callbacks.title = function (e, t) {
        return t.labels[e[0].index];
      }),
      (I.a.defaults.doughnut.tooltips.callbacks.label = function (e, t) {
        const a = t.datasets[0].data[e.index],
          n = this._chart.options.tooltips.callbacks,
          s = n.afterLabel() ? n.afterLabel() : "";
        return (
          '<span class="popover-body-value">' +
          (n.beforeLabel() ? n.beforeLabel() : "") +
          a +
          s +
          "</span>"
        );
      }),
      (I.a.defaults.doughnut.legendCallback = function (e) {
        const t = e.data;
        let a = "";
        return (
          t.labels.forEach(function (e, n) {
            const s = t.datasets[0].backgroundColor[n];
            (a += '<span class="chart-legend-item">'),
              (a +=
                '<i class="chart-legend-indicator" style="background-color: ' +
                s +
                '"></i>'),
              (a += e),
              (a += "</span>");
          }),
          a
        );
      }),
      I.a.scaleService.updateScaleDefaults("linear", {
        gridLines: {
          borderDash: [2],
          borderDashOffset: [2],
          color: N("--bs-chart-grid-line-color"),
          drawBorder: !1,
          drawTicks: !1,
          zeroLineColor: N("--bs-chart-grid-zero-line-color"),
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
        },
        ticks: { beginAtZero: !0, padding: 10, stepSize: 10 },
      }),
      I.a.scaleService.updateScaleDefaults("category", {
        gridLines: { drawBorder: !1, drawOnChartArea: !1, drawTicks: !1 },
        ticks: { padding: 20 },
      }),
      M.forEach(function (e) {
        const t = e.dataset.trigger;
        e.addEventListener(t, function () {
          !(function (e) {
            const t = e.dataset.target,
              a = e.dataset.action,
              n = parseInt(e.dataset.dataset),
              s = $(document.querySelector(t));
            if ("toggle" === a) {
              const e = s.data.datasets,
                t = e.filter(function (e) {
                  return !e.hidden;
                })[0];
              let a = e.filter(function (e) {
                return 1e3 === e.order;
              })[0];
              if (!a) {
                a = {};
                for (const e in t) "_meta" !== e && (a[e] = t[e]);
                (a.order = 1e3), (a.hidden = !0), e.push(a);
              }
              const o = e[n] === t ? a : e[n];
              for (const e in t) "_meta" !== e && (t[e] = o[e]);
              s.update();
            }
            if ("add" === a) {
              const e = s.data.datasets[n],
                t = e.hidden;
              e.hidden = !t;
            }
            s.update();
          })(e);
        });
      }),
      document.addEventListener("DOMContentLoaded", function () {
        F.forEach(function (e) {
          !(function (e) {
            const t = $(e).generateLegend(),
              a = e.dataset.target;
            document.querySelector(a).innerHTML = t;
          })(e);
        });
      });
    const P = document.getElementById("audienceChart");
    P &&
      new I.a(P, {
        type: "line",
        options: {
          scales: {
            yAxes: [
              {
                id: "yAxisOne",
                type: "linear",
                display: "auto",
                gridLines: { color: "#283E59", zeroLineColor: "#283E59" },
                ticks: {
                  callback: function (e) {
                    return e + "k";
                  },
                },
              },
              {
                id: "yAxisTwo",
                type: "linear",
                display: "auto",
                gridLines: { color: "#283E59", zeroLineColor: "#283E59" },
                ticks: {
                  callback: function (e) {
                    return e + "%";
                  },
                },
              },
            ],
          },
        },
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "Customers",
              data: [0, 10, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40],
              yAxisID: "yAxisOne",
            },
            {
              label: "Sessions",
              data: [50, 75, 35, 25, 55, 87, 67, 53, 25, 80, 87, 45],
              yAxisID: "yAxisOne",
              hidden: !0,
            },
            {
              label: "Conversion",
              data: [40, 57, 25, 50, 57, 32, 46, 28, 59, 34, 52, 48],
              yAxisID: "yAxisTwo",
              hidden: !0,
            },
          ],
        },
      });
    const _ = document.getElementById("conversionsChart");
    _ &&
      new I.a(_, {
        type: "bar",
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  callback: function (e) {
                    return e + "%";
                  },
                },
              },
            ],
          },
        },
        data: {
          labels: [
            "Oct 1",
            "Oct 2",
            "Oct 3",
            "Oct 4",
            "Oct 5",
            "Oct 6",
            "Oct 7",
            "Oct 8",
            "Oct 9",
            "Oct 10",
            "Oct 11",
            "Oct 12",
          ],
          datasets: [
            {
              label: "2020",
              data: [25, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20, 32],
            },
            {
              label: "2019",
              data: [15, 10, 20, 12, 7, 0, 8, 16, 18, 16, 10, 22],
              backgroundColor: "#d2ddec",
              hidden: !0,
            },
          ],
        },
      });
    const H = document.getElementById("trafficChart");
    H &&
      new I.a(H, {
        type: "doughnut",
        options: {
          tooltips: {
            callbacks: {
              afterLabel: function () {
                return "%";
              },
            },
          },
        },
        data: {
          labels: ["Direct", "Organic", "Referral"],
          datasets: [
            {
              data: [60, 25, 15],
              backgroundColor: ["#2C7BE5", "#A6C5F7", "#D2DDEC"],
            },
            {
              data: [15, 45, 20],
              backgroundColor: ["#2C7BE5", "#A6C5F7", "#D2DDEC"],
              hidden: !0,
            },
          ],
        },
      });
    const W = document.getElementById("trafficChartAlt");
    W &&
      new I.a(W, {
        type: "doughnut",
        options: {
          tooltips: {
            callbacks: {
              afterLabel: function () {
                return "%";
              },
            },
          },
        },
        data: {
          labels: ["Direct", "Organic", "Referral"],
          datasets: [
            {
              data: [60, 25, 15],
              backgroundColor: ["#2C7BE5", "#A6C5F7", "#D2DDEC"],
            },
            {
              data: [15, 45, 20],
              backgroundColor: ["#2C7BE5", "#A6C5F7", "#D2DDEC"],
              hidden: !0,
            },
          ],
        },
      });
    const R = document.getElementById("salesChart");
    R &&
      new I.a(R, {
        type: "line",
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  callback: function (e) {
                    return "$" + e + "k";
                  },
                },
              },
            ],
          },
        },
        data: {
          labels: [
            "Oct 1",
            "Oct 3",
            "Oct 6",
            "Oct 9",
            "Oct 12",
            "Oct 5",
            "Oct 18",
            "Oct 21",
            "Oct 24",
            "Oct 27",
            "Oct 30",
          ],
          datasets: [
            { label: "All", data: [0, 10, 5, 15, 10, 20, 15, 25, 20, 30, 25] },
            {
              label: "Direct",
              data: [7, 40, 12, 27, 34, 17, 19, 30, 28, 32, 24],
              hidden: !0,
            },
            {
              label: "Organic",
              data: [2, 12, 35, 25, 36, 25, 34, 16, 4, 14, 15],
              hidden: !0,
            },
          ],
        },
      });
    const Z = document.getElementById("ordersChart");
    Z &&
      new I.a(Z, {
        type: "bar",
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  callback: function (e) {
                    return "$" + e + "k";
                  },
                },
              },
            ],
          },
        },
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "Sales",
              data: [25, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20, 32],
            },
            {
              label: "Affiliate",
              data: [15, 10, 20, 12, 7, 0, 8, 16, 18, 16, 10, 22],
              backgroundColor: "#d2ddec",
              hidden: !0,
            },
          ],
        },
      });
    const U = document.getElementById("earningsChart");
    U &&
      new I.a(U, {
        type: "bar",
        options: {
          scales: {
            yAxes: [
              {
                id: "yAxisOne",
                type: "linear",
                display: "auto",
                ticks: {
                  callback: function (e) {
                    return "$" + e + "k";
                  },
                },
              },
              {
                id: "yAxisTwo",
                type: "linear",
                display: "auto",
                ticks: {
                  callback: function (e) {
                    return e + "k";
                  },
                },
              },
              {
                id: "yAxisThree",
                type: "linear",
                display: "auto",
                ticks: {
                  callback: function (e) {
                    return e + "%";
                  },
                },
              },
            ],
          },
        },
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
          ],
          datasets: [
            {
              label: "Earnings",
              data: [
                18, 10, 5, 15, 10, 20, 15, 25, 20, 26, 25, 29, 18, 10, 5, 15,
                10, 20,
              ],
              yAxisID: "yAxisOne",
            },
            {
              label: "Sessions",
              data: [
                50, 75, 35, 25, 55, 87, 67, 53, 25, 80, 87, 45, 50, 75, 35, 25,
                55, 19,
              ],
              yAxisID: "yAxisTwo",
              hidden: !0,
            },
            {
              label: "Bounce",
              data: [
                40, 57, 25, 50, 57, 32, 46, 28, 59, 34, 52, 48, 40, 57, 25, 50,
                57, 29,
              ],
              yAxisID: "yAxisThree",
              hidden: !0,
            },
          ],
        },
      });
    const X = document.getElementById("weeklyHoursChart");
    X &&
      new I.a(X, {
        type: "bar",
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  callback: function (e) {
                    return e + "hrs";
                  },
                },
              },
            ],
          },
        },
        data: {
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [{ data: [21, 12, 28, 15, 5, 12, 17, 2] }],
        },
      });
    const G = document.getElementById("overviewChart");
    G &&
      new I.a(G, {
        type: "line",
        options: {
          scales: {
            yAxes: [
              {
                id: "yAxisOne",
                type: "linear",
                display: "auto",
                ticks: {
                  callback: function (e) {
                    return "$" + e + "k";
                  },
                },
              },
              {
                id: "yAxisTwo",
                type: "linear",
                display: "auto",
                ticks: {
                  callback: function (e) {
                    return e + "hrs";
                  },
                },
              },
            ],
          },
        },
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "Earned",
              data: [0, 10, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40],
              yAxisID: "yAxisOne",
            },
            {
              label: "Hours Worked",
              data: [7, 35, 12, 27, 34, 17, 19, 30, 28, 32, 24, 39],
              yAxisID: "yAxisTwo",
              hidden: !0,
            },
          ],
        },
      });
    const V = document.getElementById("sparklineChart");
    V &&
      new I.a(V, {
        type: "line",
        options: {
          scales: { yAxes: [{ display: !1 }], xAxes: [{ display: !1 }] },
          elements: { line: { borderWidth: 2 }, point: { hoverRadius: 0 } },
          tooltips: {
            custom: function () {
              return !1;
            },
          },
        },
        data: {
          labels: new Array(12),
          datasets: [{ data: [0, 15, 10, 25, 30, 15, 40, 50, 80, 60, 55, 65] }],
        },
      });
    const Y = document.querySelectorAll(
      "#sparklineChartSocialOne, #sparklineChartSocialTwo, #sparklineChartSocialThree, #sparklineChartSocialFour"
    );
    Y &&
      [].forEach.call(Y, function (e) {
        new I.a(e, {
          type: "line",
          options: {
            scales: { yAxes: [{ display: !1 }], xAxes: [{ display: !1 }] },
            elements: {
              line: { borderWidth: 2, borderColor: "#D2DDEC" },
              point: { hoverRadius: 0 },
            },
            tooltips: {
              custom: function () {
                return !1;
              },
            },
          },
          data: {
            labels: new Array(12),
            datasets: [
              { data: [0, 15, 10, 25, 30, 15, 40, 50, 80, 60, 55, 65] },
            ],
          },
        });
      });
    const K = document.getElementById("feedChart");
    K &&
      new I.a(K, {
        type: "bar",
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  callback: function (e) {
                    return "$" + e + "k";
                  },
                },
              },
            ],
          },
        },
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "Sales",
              data: [25, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20, 32],
            },
            {
              label: "Affiliate",
              data: [15, 10, 20, 12, 7, 0, 8, 16, 18, 16, 10, 22],
              backgroundColor: "#d2ddec",
              hidden: !0,
            },
          ],
        },
      });
  },
});
//# sourceMappingURL=theme.bundle.js.map
