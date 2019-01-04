importScripts('/innovaciondocente/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "innovaciondocente",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/innovaciondocente/_nuxt/app.0224536514a43778184b625e535200ab.css",
    "revision": "0224536514a43778184b625e535200ab"
  },
  {
    "url": "/innovaciondocente/_nuxt/app.cadf406685aac7affd68.js",
    "revision": "8466b1dbf7311d5238331a3f1c1a1b3c"
  },
  {
    "url": "/innovaciondocente/_nuxt/layouts/default.d57434d1fb6b0de3721c.js",
    "revision": "8dc8e6409d894f1e8dcd8583532cbf25"
  },
  {
    "url": "/innovaciondocente/_nuxt/layouts/empty.0b3599dbc3993e4b8b94.js",
    "revision": "2c7a10e019dac7502f070b0f8ae64cf1"
  },
  {
    "url": "/innovaciondocente/_nuxt/manifest.fdfad9ca4292f9f5c27c.js",
    "revision": "8b068fe4db3544dc3f040ba5fe3e6507"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/acerca-nosotros/index.fd6348c49968d6f60de6.js",
    "revision": "b7a73e6f3218e84a4a3a976f5c40bfac"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/acerca-nosotros/nuestro-equipo.4f89ca6b7d7e8f80f7d3.js",
    "revision": "e7d2353e59b5a59c4713a60ab756d879"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/acerca-nosotros/nuestros-servicios.afaa4ad284aa38aaf72d.js",
    "revision": "de97aaa4c9cbda95ab5c4a3eda181bb4"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/cafe-cientifico/_id.b4702cfbd0dd6eb8aa09.js",
    "revision": "1109cd5a43789c5c4c2ca986298750f4"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/cafe-cientifico/index.48ea2a23292b2bf081b2.js",
    "revision": "a25f291e06e2e60f9662f232412df37f"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/cafe-cientifico/inscripcion.2b3d2aad102b7d418a6a.js",
    "revision": "8eba95fcaf73e4e1e7a869d8a2b3c7a0"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/desarrollo-asignatura/asesoramiento.4744e0da89544319eed6.js",
    "revision": "580209e40047e62fd743ee021660fb8c"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/desarrollo-asignatura/elaborar.26efd7d2c6c75f7809fb.js",
    "revision": "f2678ba4313381255a18beb44dd0765d"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/desarrollo-asignatura/index.1cf9cfcd996f80787fd6.js",
    "revision": "896f84630703393f10802b0fc8dad573"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/desarrollo-asignatura/recursos.d66dfde72da7f79ffe5f.js",
    "revision": "ea66b2420a12ff29778081a1290db78e"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/desarrollo-asignatura/repositorio.eb7eb22bd55c91bbb9fe.js",
    "revision": "6e7fc14336c3b20fcf16838e34bda7c7"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/jornadas-de-reflexion/index.af69fd1ed8f444682846.js",
    "revision": "ba221dae90c24d84af9c12e73ea20b54"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/jornadas-de-reflexion/jornadas-anteriores.3661681522f889dae692.js",
    "revision": "cbbdcf499d079c8c25b0b7e3b4f9cc66"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/jornadas-de-reflexion/jornadas-anteriores/_id.e767ddb5fe397048a2a8.js",
    "revision": "97c886b3f2855d39d5fd90b1cda907d6"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/jornadas-de-reflexion/jornadas-anteriores/index.7d048e3b16a7cbd589d2.js",
    "revision": "8743cdf4d952426cd523113818cbf7f9"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/programa-formacion/_id.3284742ec3de9dd341de.js",
    "revision": "3f597db9df71a585a05ea2d20575b2fe"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/programa-formacion/cursos-especificos.ffc8219a3cb59258852a.js",
    "revision": "e9fd8831d19ab85c477c91fd73789bac"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/programa-formacion/cursos.bce51b5dcc82fe8f417e.js",
    "revision": "dda818a4406deef12749354fadaa5610"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/programa-formacion/index.947e334a565c3cab0498.js",
    "revision": "67dc51a5916cb6e00654b03f135886ab"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/formacion-docente/programa-formacion/innovaTics.e0f87f3ad6cd28fd6e43.js",
    "revision": "33b964d350450f993eb9a4378ead1d9e"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/index.5cc56727cd1dd5e73171.js",
    "revision": "c3717a9ec7d7d3fd10708b21276d14df"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/innovacion-docente/ayudante-catedra/index.5205bc672d245dff873f.js",
    "revision": "1c274983c283c57e11efb38836dcd68f"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/innovacion-docente/buenas-practicas/index.39152a4d832ce99a511e.js",
    "revision": "f7540e39fb066032b962b3515c94b82c"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/innovacion-docente/buenas-practicas/index/_id.2c196013dbb1509135da.js",
    "revision": "4f0d9d0014a16759e213edc51b083672"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/innovacion-docente/buenas-practicas/index/index.604a2a7715708156b69a.js",
    "revision": "780cbe51a38a7dd4d19796c330a13746"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/innovacion-docente/convocatorias/index.646dbf12a01e3ac23bc3.js",
    "revision": "e390a76239383b8d3c5ed56ed301080d"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/innovacion-docente/proyecto-mentores/index.b130eea048aef88b6ee4.js",
    "revision": "ecf220e73b098b8d9b00f978fb625f2f"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/innovacion-docente/proyectos-actuales/index.228a143d73de5c76dfc1.js",
    "revision": "a64b1e4edbd7a379513c3922db77b8f3"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/innovacion-docente/proyectos-innovacion/_id.96280230f662cbd0838d.js",
    "revision": "79bd2adef00d1137cb43be07f5cc4089"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/innovacion-docente/proyectos-innovacion/index.65ceb9c1d0fd9193789f.js",
    "revision": "c242a22ec734b502571cb70f05e07c42"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/observatorio-edutendencias/noticias/_id.c4555623bcb786c03392.js",
    "revision": "d5f47af8fd877806590e6997a9355d12"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/observatorio-edutendencias/noticias/index.7f619a2424efbf90a995.js",
    "revision": "366405d4b505c92af8a1f9d3ebd5f486"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/observatorio-edutendencias/tips-innovacion/index.60c155e31cb32921dd97.js",
    "revision": "7f94427367088488e32ff12283dbf263"
  },
  {
    "url": "/innovaciondocente/_nuxt/pages/observatorio-edutendencias/tips-innovacion/tips.d5cd96538141119546ef.js",
    "revision": "125765e84a06fb86b2b77a435e657a70"
  },
  {
    "url": "/innovaciondocente/_nuxt/vendor.17c5925ab44fcea94bcc.js",
    "revision": "331252de2ae12bdfa346ef5c04f0fc94"
  }
])


workboxSW.router.registerRoute(new RegExp('/innovaciondocente/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/innovaciondocente/.*'), workboxSW.strategies.networkFirst({}), 'GET')

