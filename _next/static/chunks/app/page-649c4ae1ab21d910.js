(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8974],
  {
    33792: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => c });
      var s = a(95155),
        n = a(12115),
        o = a(54784),
        i = a(59694),
        r = a(35695);
      function c() {
        let e = (0, r.usePathname)(),
          [t, a] = (0, n.useState)(!1);
        (0, n.useEffect)(() => {
          a(!0), setTimeout(() => a(!1), 3e3);
        }, []);
        let [i, c] = (0, n.useState)(!0);
        return (
          console.log(e, "asdfasd"),
          (0, n.useEffect)(() => {
            let e = () => {
              window.innerWidth < 575 ? c(!1) : c(!0);
            };
            return (
              e(),
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, []),
          (0, n.useEffect)(() => {
            let e = new URLSearchParams(window.location.search),
              t = e.get("uhash"),
              a = e.get("zone"),
              s = e.get("campaign"),
              n = e.get("subid");
            t &&
              a &&
              s &&
              (localStorage.setItem("cz_uhash", t),
              localStorage.setItem("cz_zone", a),
              localStorage.setItem("cz_campaign", s)),
              n && localStorage.setItem("keitaro_click_id", n);
          }, []),
          (0, s.jsx)(s.Fragment, { children: (0, s.jsx)(o.default, {}) })
        );
      }
      i.Ay.button.withConfig({ componentId: "sc-98ea29ef-0" })([
        "@media (max-height:620px){transform:unset !important;top:111px !important;svg{max-height:481px;}}",
      ]);
    },
    37918: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 33792));
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [1360, 2300, 5033, 4526, 4784, 8441, 1684, 7358], () => t(37918)),
      (_N_E = e.O());
  },
]);
