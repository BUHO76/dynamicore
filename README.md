# Dynamicore — Prueba Front-End

> 🇲🇽 [Español](#español) · 🇺🇸 [English](#english)

---

## Español

Repositorio con los dos proyectos de la prueba técnica de Front-End de Dynamicore.

| Carpeta | Sección | Tecnología | Contenido |
|---|---|---|---|
| [`seccion-1-react/`](./seccion-1-react) | Sección 1 | React 19 + Vite (JavaScript) | Tarea 1 `UserList`, Tarea 2 `UserForm` |
| [`seccion-2-react-native/`](./seccion-2-react-native) | Sección 2 | React Native 0.87 (CLI, sin Expo) | Tarea 1 `App` (lista + formulario), Tarea 2 `MapScreen` |

### Estructura

```text
dynamicore/
├── README.md
├── seccion-1-react/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── main.jsx
│       ├── App.jsx                  # Monta UserList (con datos de ejemplo) y UserForm
│       └── components/
│           ├── UserList.jsx         # Tarea 1 — código base
│           └── UserForm.jsx         # Tarea 2 — código base
└── seccion-2-react-native/
    ├── index.js                     # Registra App
    ├── App.js                       # Tarea 1 — código base
    ├── src/screens/MapScreen.js     # Tarea 2 — código base (aún no montado en App)
    ├── android/
    ├── ios/
    └── package.json
```

### Requisitos previos

| Herramienta | Versión | Necesaria para |
|---|---|---|
| Node.js | ≥ 22.11 | Ambos proyectos |
| npm | ≥ 10 | Ambos proyectos |
| Xcode + CocoaPods + Ruby/Bundler | Xcode 16+ | iOS (solo macOS) |
| Android Studio, Android SDK, JDK 17 | — | Android |
| Watchman (recomendado) | — | React Native en macOS |

Para preparar el entorno de React Native sigue la guía oficial: <https://reactnative.dev/docs/set-up-your-environment>.

Editor sugerido: Visual Studio Code.

### Sección 1 — React (web)

```bash
cd seccion-1-react
npm install
npm run dev        # abre http://localhost:5173
```

Otros scripts:

```bash
npm run build      # build de producción en dist/
npm run preview    # sirve el build localmente
npm run lint       # oxlint
```

### Sección 2 — React Native (móvil)

```bash
cd seccion-2-react-native
npm install
```

**iOS** (solo macOS):

```bash
bundle install                 # solo la primera vez
cd ios && bundle exec pod install && cd ..
npm run ios                    # o: npx react-native run-ios
```

**Android** (con un emulador abierto o un dispositivo conectado):

El mapa en Android necesita una API key de Google Maps (Google Cloud Console → *Maps SDK for Android*). Agrégala en `android/local.properties` (archivo ignorado por git, nunca se sube al repositorio):

```properties
MAPS_API_KEY=tu_api_key
```

```bash
npm run android                # o: npx react-native run-android
```

Usa un emulador con imagen *Google Play* (Google Maps lo requiere).

Metro (el bundler) se inicia solo; si no, ejecútalo en otra terminal con `npm start`.

Pruebas y lint:

```bash
npm test
npm run lint
```

#### Notas de la Sección 2

- `App.js` es el componente raíz registrado en `index.js`.
- `src/screens/MapScreen.js` contiene el código base de la Tarea 2 y usa `react-native-maps` y `@react-native-community/geolocation` (ya instaladas). **No funciona en Expo Go**; por eso el proyecto usa React Native CLI.
- Para que el mapa y la ubicación funcionen en el dispositivo se requiere configuración nativa (permisos de ubicación en iOS/Android y, en Android, una API key de Google Maps). Consulta la documentación de cada librería.
- Nunca subas API keys al repositorio.

---

## English

Repository containing both projects for the Dynamicore Front-End technical test.

| Folder | Section | Tech | Contents |
|---|---|---|---|
| [`seccion-1-react/`](./seccion-1-react) | Section 1 | React 19 + Vite (JavaScript) | Task 1 `UserList`, Task 2 `UserForm` |
| [`seccion-2-react-native/`](./seccion-2-react-native) | Section 2 | React Native 0.87 (CLI, no Expo) | Task 1 `App` (list + form), Task 2 `MapScreen` |

See the [structure tree above](#estructura).

### Prerequisites

| Tool | Version | Needed for |
|---|---|---|
| Node.js | ≥ 22.11 | Both projects |
| npm | ≥ 10 | Both projects |
| Xcode + CocoaPods + Ruby/Bundler | Xcode 16+ | iOS (macOS only) |
| Android Studio, Android SDK, JDK 17 | — | Android |
| Watchman (recommended) | — | React Native on macOS |

Set up the React Native environment with the official guide: <https://reactnative.dev/docs/set-up-your-environment>.

Suggested editor: Visual Studio Code.

### Section 1 — React (web)

```bash
cd seccion-1-react
npm install
npm run dev        # opens http://localhost:5173
```

Other scripts: `npm run build`, `npm run preview`, `npm run lint`.

### Section 2 — React Native (mobile)

```bash
cd seccion-2-react-native
npm install
```

**iOS** (macOS only):

```bash
bundle install                 # first time only
cd ios && bundle exec pod install && cd ..
npm run ios
```

**Android** (with an emulator running or a device connected):

The Android map needs a Google Maps API key (Google Cloud Console → *Maps SDK for Android*). Add it to `android/local.properties` (git-ignored, never committed):

```properties
MAPS_API_KEY=your_api_key
```

```bash
npm run android
```

Use an emulator with a *Google Play* system image (required by Google Maps).

Metro starts automatically; otherwise run `npm start` in a separate terminal. Tests and lint: `npm test`, `npm run lint`.

#### Section 2 notes

- `App.js` is the root component registered in `index.js`.
- `src/screens/MapScreen.js` holds the Task 2 starter code and uses `react-native-maps` and `@react-native-community/geolocation` (already installed). **It does not run in Expo Go**, which is why this project uses the React Native CLI.
- The map and location features need native configuration to work on a device (location permissions on iOS/Android and, on Android, a Google Maps API key). See each library's documentation.
- Never commit API keys to the repository.
