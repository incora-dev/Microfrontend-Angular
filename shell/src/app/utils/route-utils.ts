import { loadRemoteModule } from './federation-utils';
import { Routes } from '@angular/router';
import { APP_ROUTES } from '../app.routes';
import { Microfrontend } from '../core/services/microfrontends/microfrontend.types';

export function buildRoutes(options: Microfrontend[]): Routes {
  const lazyRoutes: Routes = options.map((o) => ({
    path: o.routePath,
    loadChildren: () => loadRemoteModule(o).then((m) => m[o.ngModuleName]),
    canActivate: o.canActivate,
    pathMatch: 'full'
  }));

  return [
    ...APP_ROUTES,
    ...lazyRoutes
  ];
}
