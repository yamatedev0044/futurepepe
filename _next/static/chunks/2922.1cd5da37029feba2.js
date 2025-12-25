"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2922],
  {
    26440: (e, n, t) => {
      var a = t(12115),
        A = (function (e) {
          return e && "object" == typeof e && "default" in e
            ? e
            : { default: e };
        })(a);
      !(function (e) {
        if (!e || "undefined" == typeof window) return;
        let n = document.createElement("style");
        n.setAttribute("type", "text/css"),
          (n.innerHTML = e),
          document.head.appendChild(n);
      })(
        '.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}'
      ),
        a.forwardRef(function (e, n) {
          let {
              style: t = {},
              className: i = "",
              autoFill: r = !1,
              play: l = !0,
              pauseOnHover: o = !1,
              pauseOnClick: s = !1,
              direction: d = "left",
              speed: c = 50,
              delay: m = 0,
              loop: u = 0,
              gradient: f = !1,
              gradientColor: g = "white",
              gradientWidth: h = 200,
              onFinish: p,
              onCycleComplete: v,
              onMount: w,
              children: b,
            } = e,
            [B, E] = a.useState(0),
            [x, y] = a.useState(0),
            [C, S] = a.useState(1),
            [R, N] = a.useState(!1),
            U = a.useRef(null),
            k = n || U,
            M = a.useRef(null),
            V = a.useCallback(() => {
              if (M.current && k.current) {
                let e = k.current.getBoundingClientRect(),
                  n = M.current.getBoundingClientRect(),
                  t = e.width,
                  a = n.width;
                ("up" === d || "down" === d) &&
                  ((t = e.height), (a = n.height)),
                  r && t && a ? S(a < t ? Math.ceil(t / a) : 1) : S(1),
                  E(t),
                  y(a);
              }
            }, [r, k, d]);
          a.useEffect(() => {
            if (R && (V(), M.current && k.current)) {
              let e = new ResizeObserver(() => V());
              return (
                e.observe(k.current),
                e.observe(M.current),
                () => {
                  e && e.disconnect();
                }
              );
            }
          }, [V, k, R]),
            a.useEffect(() => {
              V();
            }, [V, b]),
            a.useEffect(() => {
              N(!0);
            }, []),
            a.useEffect(() => {
              "function" == typeof w && w();
            }, []);
          let G = a.useMemo(
              () => (r ? (x * C) / c : x < B ? B / c : x / c),
              [r, B, x, C, c]
            ),
            j = a.useMemo(
              () =>
                Object.assign(Object.assign({}, t), {
                  "--pause-on-hover": !l || o ? "paused" : "running",
                  "--pause-on-click":
                    !l || (o && !s) || s ? "paused" : "running",
                  "--width": "up" === d || "down" === d ? "100vh" : "100%",
                  "--transform":
                    "up" === d
                      ? "rotate(-90deg)"
                      : "down" === d
                      ? "rotate(90deg)"
                      : "none",
                }),
              [t, l, o, s, d]
            ),
            W = a.useMemo(
              () => ({
                "--gradient-color": g,
                "--gradient-width":
                  "number" == typeof h ? "".concat(h, "px") : h,
              }),
              [g, h]
            ),
            X = a.useMemo(
              () => ({
                "--play": l ? "running" : "paused",
                "--direction": "left" === d ? "normal" : "reverse",
                "--duration": "".concat(G, "s"),
                "--delay": "".concat(m, "s"),
                "--iteration-count": u ? "".concat(u) : "infinite",
                "--min-width": r ? "auto" : "100%",
              }),
              [l, d, G, m, u, r]
            ),
            Z = a.useMemo(
              () => ({
                "--transform":
                  "up" === d
                    ? "rotate(90deg)"
                    : "down" === d
                    ? "rotate(-90deg)"
                    : "none",
              }),
              [d]
            ),
            H = a.useCallback(
              (e) =>
                [...Array(Number.isFinite(e) && e >= 0 ? e : 0)].map((e, n) =>
                  A.default.createElement(
                    a.Fragment,
                    { key: n },
                    a.Children.map(b, (e) =>
                      A.default.createElement(
                        "div",
                        { style: Z, className: "rfm-child" },
                        e
                      )
                    )
                  )
                ),
              [Z, b]
            );
          return R
            ? A.default.createElement(
                "div",
                { ref: k, style: j, className: "rfm-marquee-container " + i },
                f &&
                  A.default.createElement("div", {
                    style: W,
                    className: "rfm-overlay",
                  }),
                A.default.createElement(
                  "div",
                  {
                    className: "rfm-marquee",
                    style: X,
                    onAnimationIteration: v,
                    onAnimationEnd: p,
                  },
                  A.default.createElement(
                    "div",
                    { className: "rfm-initial-child-container", ref: M },
                    a.Children.map(b, (e) =>
                      A.default.createElement(
                        "div",
                        { style: Z, className: "rfm-child" },
                        e
                      )
                    )
                  ),
                  H(C - 1)
                ),
                A.default.createElement(
                  "div",
                  { className: "rfm-marquee", style: X },
                  H(C)
                )
              )
            : null;
        });
    },
    42922: (e, n, t) => {
      t.r(n), t.d(n, { default: () => c });
      var a = t(95155);
      t(66766), t(12115), t(26440), t(74681);
      let A = {
          src: "/_next/static/media/logoone.9b0d19cd.png",
          height: 45,
          width: 256,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAADFBMVEX5+fn5+fn5+fn39/ed9U5DAAAABHRSTlNvWmGHvsdmzAAAAAlwSFlzAAALEwAACxMBAJqcGAAAABFJREFUeJxjYGBkYGBgYmYEAAAdAAgynUX0AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 1,
        },
        i = {
          src: "/_next/static/media/logotwo.59f2e76d.png",
          height: 55,
          width: 255,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAD1BMVEVWWlZtcGxGSkViZWFSVlE3HaweAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGUlEQVR4nAXBAQEAAACCIK3+bw5IawdkBPUBMgAcorfAlgAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 2,
        },
        r = {
          src: "/_next/static/media/logothree.8535f226.png",
          height: 61,
          width: 309,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAD1BMVEX5+fn4+Pj29vb19fX29vZR+P+bAAAABXRSTlNWSjkzdAkoiokAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAYSURBVHicBcGBAQAABMCghv9vVpooHBsPAJQAD6b1/NcAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 2,
        },
        l = {
          src: "/_next/static/media/logofour.bb4013d0.png",
          height: 49,
          width: 231,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAGFBMVEX////////////////////+/v7+/v7///8aDULRAAAACHRSTlONan5hnFI/NVOmqZAAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAaSURBVHicY2BgZGZkZ2NlZmBhYGBiZGBiAAABhwAknbRHfAAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 2,
        },
        o = {
          src: "/_next/static/media/logofive.187deac1.png",
          height: 55,
          width: 269,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAElBMVEX///////////////////////+65XQCAAAABnRSTlMzFiRtUoLnjK1wAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGklEQVR4nGNgZmZkYGBkZGJgZWVgYWFgYgAAASIAIOzrXWoAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 2,
        };
      var s = t(31996);
      let d = t(59694).Ay.div.withConfig({ componentId: "sc-96fe22d-0" })([
          ".slick-slide{opacity:1;transform:unset !important;}",
        ]),
        c = () =>
          (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)(d, {
              className: "relative py-8",
              children: (0, a.jsx)("div", {
                className: "",
                children: (0, a.jsx)("div", {
                  className: "grid gap-3 grid-cols-12",
                  children: (0, a.jsx)("div", {
                    className: "col-span-12",
                    children: (0, a.jsx)(s.A, {
                      ...{
                        speed: 5e3,
                        autoplay: !0,
                        autoplaySpeed: 0,
                        centerMode: !0,
                        cssEase: "linear",
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        variableWidth: !0,
                        infinite: !0,
                        initialSlide: 1,
                        arrows: !1,
                        buttons: !1,
                      },
                      children: [A, i, r, l, o].map((e, n) =>
                        (0, a.jsx)(
                          "div",
                          {
                            className: "px-4 md:px-[40px]",
                            children: (0, a.jsx)("div", {
                              className: "images_logoWrap",
                              children: (0, a.jsx)("img", {
                                src: e.src,
                                alt: "Logo ".concat(n + 1),
                                width: 3e5,
                                height: 1e5,
                                className:
                                  "max-w-full md:h-[38px] h-[32px] w-auto object-contain",
                              }),
                            }),
                          },
                          n
                        )
                      ),
                    }),
                  }),
                }),
              }),
            }),
          });
    },
  },
]);
