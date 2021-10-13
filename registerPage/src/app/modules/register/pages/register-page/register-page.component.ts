import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { RegisterFormValues } from '../../components/register-form/register-form.component';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  formSubmitted (values: RegisterFormValues) {
    this.auth.register(values).subscribe((res) => {
      localStorage.setItem('token', res.token);
      const busEvent = new CustomEvent('app-event-bus', {
        bubbles: true,
        detail: {
          eventType: 'auth-register'
        }
      });
      dispatchEvent(busEvent);
    });
  }

}
