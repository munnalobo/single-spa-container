import { registerApplication, start, LifeCycles } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import<LifeCycles>(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "single-spa-1",
  app: () =>
    System.import<LifeCycles>(
      "http://localhost:4202/main.js"
    ),
  activeWhen: ["/app1"],
});

// registerApplication({
//   name: "@neuron/navbar",
//   app: () => System.import("@neuron/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
