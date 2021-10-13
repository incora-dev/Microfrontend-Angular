const webpack = require("webpack");

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:4201/",
    uniqueName: "register",
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "register",
      library: { type: "var", name: "register" },
      filename: "remoteEntry.js",
      exposes: {
        RegisterPageModule:
          "./src/app/modules/register/register-page.module.ts",
      },
      shared: {
        "@angular/core": { singleton: true, requiredVersion: 'auto' },
        "@angular/common": { singleton: true, requiredVersion: 'auto' },
        "@angular/router": { singleton: true, requiredVersion: 'auto' },
        "ngx-common-ui-lib": { singleton: true, requiredVersion: 'auto'},
        // "ngx-common-ui-lib": { singleton: true, requiredVersion: 'auto' }, // async loading (less bundle size if packages already presented in shell)
        // "ngx-common-ui-lib": { singleton: true, requiredVersion: '^0.0.13' }, // pass required lib version
        // "ngx-common-ui-lib": { eager: true, singleton: true }, // sync loading
      },
    }),
  ],
};
