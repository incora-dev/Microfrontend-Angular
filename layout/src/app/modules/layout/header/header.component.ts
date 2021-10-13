import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  $eventBus?: Subscription;

  constructor(public auth: AuthService) { }

  onEventHandler(e: CustomEvent) {
    if (e.detail.eventType === 'auth-register') {
      this.auth.isLogged = Boolean(localStorage.getItem('token'));
    }
  }

  ngOnInit() {
    this.$eventBus = fromEvent<CustomEvent>(window, 'app-event-bus').subscribe((e) => this.onEventHandler(e));
  }

  ngOnDestroy() {
    this.$eventBus?.unsubscribe();
  }

}
