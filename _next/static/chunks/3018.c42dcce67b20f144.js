"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3018],
  {
    63018: (e, t, a) => {
      a.r(t), a.d(t, { default: () => m });
      var o = a(95155),
        i = a(12115);
      a(66766);
      var l = a(50802),
        r = a(39676),
        s = a(59694),
        n = a(74681),
        c = a(6874),
        d = a.n(c);
      l.Ay.registerPlugin(r.L);
      let h = (0, s.i7)(["0%{width:0;}100%{width:17ch;}"]),
        p = s.Ay.div.withConfig({ componentId: "sc-52f189b-0" })(
          [
            ".text{animation:",
            " 3s steps(17) forwards;}.outside{-webkit-clip-path:polygon( 90.12% 100%,100% 64.46%,100% 0%,70.71% 0%,12.42% 0%,0% 29.29%,0% 100%,29.29% 100% );clip-path:polygon( 90.12% 100%,100% 64.46%,100% 0%,70.71% 0%,12.42% 0%,0% 29.29%,0% 100%,29.29% 100% );.inside{position:absolute;top:1.5px;left:1.5px;right:1.5px;bottom:1.5px;background-color:#26fa0f;color:#000;-webkit-clip-path:polygon( 90.12% 100%,100% 64.46%,100% 0%,70.71% 0%,12.42% 0%,0% 29.29%,0% 100%,29.29% 100% );clip-path:polygon( 90.12% 100%,100% 64.46%,100% 0%,70.71% 0%,12.42% 0%,0% 29.29%,0% 100%,29.29% 100% );}}.readystory{.outside{background-color:#26fa0f;.inside{background-color:#000;color:#26fa0f !important;}}}@media (max-width:460px){.inside{font-size:11px;}}",
          ],
          h
        ),
        m = () => (
          (0, r.L)(() => {
            l.Ay.fromTo(
              ".banner_content",
              { y: 100, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 2,
                stagger: 0.2,
                ease: "power3.out",
              }
            );
          }),
          (0, i.useEffect)(() => {
            let e = () => {
              let e = "abcdefghijklmnopqrstuvwxyz1234567890!@#$^&*()_+-=;[]/~`",
                t = e[Math.floor(Math.random() * e.length)];
              return Math.random() > 0.5 ? t : t.toUpperCase();
            };
            document.querySelectorAll(".decrypt-btn").forEach((t) => {
              let a = t.textContent.trim().split(""),
                o = [];
              a.forEach((t, a) => (o[a] = e())),
                (t.onpointerover = () => {
                  let i = l.Ay.timeline(),
                    r = 0;
                  i.fromTo(
                    t,
                    { textContent: o.join(""), color: "#000" },
                    {
                      duration: a.length / 20,
                      ease: "power4.in",
                      delay: 0.1,
                      color: "#000",
                      onUpdate: () => {
                        let l = Math.floor(i.progress() * a.length);
                        if (r !== l) {
                          r = l;
                          for (let t = 0; t < a.length; t++) o[t] = e();
                          t.textContent =
                            a.slice(0, l).join("") + o.slice(l).join("");
                        }
                      },
                    }
                  );
                });
            });
          }, []),
          (0, o.jsx)(o.Fragment, {
            children: (0, o.jsxs)("section", {
              id: "hero",
              className: "herosec relative z-[99]",
              children: [
                (0, o.jsx)("img", {
                  src: n.Xe + "home.webp",
                  alt: "",
                  className:
                    "max-w-full h-full w-full object-cover md:block hidden",
                  height: "10000",
                  width: "10000",
                }),
                (0, o.jsx)("img", {
                  src: n.Xe + "mobile/homeMobile.gif",
                  alt: "",
                  className:
                    "max-w-full h-full w-full object-cover md:hidden max-h-[650px]",
                  height: "10000",
                  width: "10000",
                }),
                (0, o.jsx)("div", {
                  className: "container",
                  children: (0, o.jsx)("div", {
                    className: "grid gap-3 grid-cols-12",
                    children: (0, o.jsx)("div", {
                      className: "col-span-12",
                      children: (0, o.jsxs)(p, {
                        className:
                          "banner_content absolute bottom-[30px] z-[9] mx-auto w-full px-3 max-w-[max-content] left-0 right-0 text-center",
                        children: [
                          (0, o.jsxs)("div", {
                            className:
                              "typewriter d-inline-block relative md:p-4 p-3  bg-black",
                            children: [
                              (0, o.jsx)("img", {
                                src: n.Xe + "topright.png",
                                alt: "",
                                height: 1e4,
                                width: 1e4,
                                className:
                                  "max-w-full h-auto w-auto absolute top-0 right-0",
                              }),
                              (0, o.jsx)("img", {
                                src: n.Xe + "topleft.png",
                                alt: "",
                                height: 1e4,
                                width: 1e4,
                                className:
                                  "max-w-full h-auto w-auto absolute top-0 left-0",
                              }),
                              (0, o.jsx)("img", {
                                src: n.Xe + "bottomright.png",
                                alt: "",
                                height: 1e4,
                                width: 1e4,
                                className:
                                  "max-w-full h-auto w-auto absolute bottom-0 right-0",
                              }),
                              (0, o.jsx)("img", {
                                src: n.Xe + "bottomleft.png",
                                alt: "",
                                height: 1e4,
                                width: 1e4,
                                className:
                                  "max-w-full h-auto w-auto absolute bottom-0 left-0",
                              }),
                              (0, o.jsx)("span", {
                                className:
                                  "text overflow-hidden md:whitespace-nowrap w-0 md:text-[16px] text-[14px] font-normal themeClr tracking-[2px]",
                                children:
                                  '"The first Pepe was just the beginning... Adapt or disappear.',
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              ],
            }),
          })
        );
    },
  },
]);
