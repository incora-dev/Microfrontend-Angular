export const environment = {
  production: true,

  microfrontends: {
    dashboard: {
      remoteEntry: 'http://localhost:4204/remoteEntry.js',
      remoteName: 'dashboard',
      exposedModule: ['DashboardModule'],
    },
    tablePage: {
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      remoteName: 'table',
      exposedModule: ['TablePageModule'],
    },
    registerPage : {
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      remoteName: 'register',
      exposedModule: ['RegisterPageModule'],
    },
    staticPage: {
      remoteEntry: 'http://localhost:4203/remoteEntry.js',
      remoteName: 'staticPage',
      exposedModule: ['StaticPageModule'],
    },
    layout: {
      remoteEntry: 'http://localhost:4205/remoteEntry.js',
      remoteName: 'layout',
      exposedModule: ['Header', 'Footer', 'LayoutModule'],
    }
  }
};
