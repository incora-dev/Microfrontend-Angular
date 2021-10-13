import { LoadRemoteModuleOptions } from "src/app/utils/federation-utils";

export type Microfrontend = LoadRemoteModuleOptions & {
  displayName: string;
  routePath: string;
  ngModuleName: string;
  canActivate?: any[]
};
