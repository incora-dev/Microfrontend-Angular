import {
  ViewContainerRef,
  Component,
  ComponentFactoryResolver,
  OnInit,
  AfterViewInit,
  Injector,
  ViewChild,
  OnDestroy
} from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { fromEvent, Subscription } from 'rxjs';
import { AuthService } from './core/services/auth/auth.service';
import { loadRemoteModule } from './utils/federation-utils';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild('header', { read: ViewContainerRef, static: true })
  headerContainer!: ViewContainerRef;

  @ViewChild('footer', { read: ViewContainerRef, static: true })
  footerContainer!: ViewContainerRef;

  $eventBus: Subscription | undefined;
  loadingRouteConfig = false;

  constructor(private injector: Injector,
    private resolver: ComponentFactoryResolver,
    public auth: AuthService,
    private router: Router
    ) {}

  onEventHandler(e: CustomEvent) {
    if (e.detail.eventType === 'auth-register') {
      const isLogged = Boolean(localStorage.getItem('token'));
      this.auth.isLogged = isLogged;
      if (isLogged) {
        this.router.navigate(['/']);
      } else {
        this.router.navigate(['/signup']);
      }
    }
  }

  ngOnInit() {
    this.$eventBus = fromEvent<CustomEvent>(window, 'app-event-bus').subscribe((e) => this.onEventHandler(e));
    this.router.events.subscribe(event => {
      if (event instanceof RouteConfigLoadStart) {
          this.loadingRouteConfig = true;
      } else if (event instanceof RouteConfigLoadEnd) {
          this.loadingRouteConfig = false;
      }
    });
  }

  ngAfterViewInit(): void {
    // load header
    loadRemoteModule({
      ...environment.microfrontends.layout,
      exposedModule: environment.microfrontends.layout.exposedModule[0],
    })
      .then(module => {
        const factory = this.resolver.resolveComponentFactory(module.HeaderComponent);
        this.headerContainer?.createComponent(factory, undefined, this.injector);
      });

    // load footer
    loadRemoteModule({
      ...environment.microfrontends.layout,
      exposedModule: environment.microfrontends.layout.exposedModule[1],
    })
      .then(module => {
        const factory = this.resolver.resolveComponentFactory(module.FooterComponent);
        this.footerContainer?.createComponent(factory, undefined, this.injector);
      });
  }

  ngOnDestroy(): void {
    this.$eventBus?.unsubscribe();
  }
}
