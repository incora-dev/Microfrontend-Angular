import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { LoaderComponent } from './core/components/loader/loader.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { MicrofrontendService } from './core/services/microfrontends/microfrontend.service';

export function initializeApp(
  mfService: MicrofrontendService
): () => Promise<void> {
  return () => mfService.initialise();
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(APP_ROUTES, { relativeLinkResolution: 'legacy' }),
  ],
  providers: [
    MicrofrontendService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
      deps: [MicrofrontendService],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
