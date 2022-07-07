# **Frontend Starter ©2k22**

<br/>

## **Architecture**

```bash
├── dist/                   // Fichiers compilés par Webpack
|  ├── css/
|  |  └── ...
|  ├── js/
|  |  └── ...
|  └── svg/
|     └── sprite.svg        // Sprite svg à importer dans le body
|
├── node_modules/
|  └── ...
|
├── src/
|  ├── css/
|  |  ├── .../
|  |  ├── app.css           // Fichier css à importer dans le thème
|  |  └── editor.css        // Fichier css à importer dans l\'admin WP
|  ├── js/
|  |  ├── .../
|  |  └── app.js            // Fichier js à importer dans le thème
|  └── svg/
|  |  └── ...
|
├── tailwind.config/
|  ├── functions.js         // Fichier contenant différentes fonctions utilitaires
|  └── values.js            // Fichier contenant différents tableaux de valeurs
|
├── .eslintrc               // Config de ESLint
├── .gitignore              
├── .stylelintrc            // Config de StyleLint
├── package.json
├── postcss.config.js       // Config de PostCSS
├── README.md
├── tailwind.config.js      // Config de Tailwind CSS
└── webpack.config.js       // Config de Webpack
```

<br/>

## **Plugins Webpack**

### **[MiniCssExtractPlugin](https://webpack.js.org/plugins/mini-css-extract-plugin/)**

Ce plugin permet à Webpack de lire des fichiers CSS et de les compiler en CSS pur (et non en CSS imbriqué dans du JS).

### **[RemoveEmptyScriptsPlugin](https://github.com/webdiscus/webpack-remove-empty-scripts)** ###

Ce plugin permet de ne pas générer de fichier JS équivalents à des fichiers ne contenant pas de JS. Par exemple, sans **RemoveEmptyScriptsPlugin** les fichiers CSS n'ayant pas d'équivalent en JS (editor.css  entre autres) auraient quand même un homologue (editor.js) qui serait un module vide.

Grâce à RemoveEmptyScriptsPlugin, ces fichiers ne sont pas distribués dans les outputs au moment de compiler.

### **[SpriteLoaderPlugin](https://github.com/JetBrains/svg-sprite-loader)** ###

Ce plugin permet de générer un sprite en se basant sur des SVG importés.

**Il est nécessaire d'importer tous les svg dans son fichier JS initial pour générer le sprite.**

Pour ce faire, utiliser le script d'import dynamique ci-dessous :

```javascript
function requireAll(r) {
    r.keys().forEach(r);
}
  
requireAll(require.context('../path-to-svg-folder/', true, /\.svg$/));
```

### **[CssMinimizerPlugin](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/)** ###

Ce plugin a pour rôle de minifier le fichier CSS en output pour en optimiser le poids.

### **[BrowserSyncPlugin](https://www.npmjs.com/package/browser-sync-webpack-plugin)** ###

Ce plugin va venir implémenter le BrowserSync dans notre contexte webpack. il peut être appelé lorsqu'on éxécute `yarn serve`ou ignoré en éxécutant `yarn dev` à la place.

### **[ESLintPlugin](https://webpack.js.org/plugins/eslint-webpack-plugin/), [StylelintPlugin](https://webpack.js.org/plugins/stylelint-webpack-plugin/)** ###

Combinés, ces plugins permettent d'embarquer des linters afin de détecter des erreurs de code au moment du développement.

<br/>