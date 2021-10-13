import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxCommonUiLibService } from 'ngx-common-ui-lib';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

export interface RegisterFormValues {
  email: string;
  password: string;
}
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  @Output() formSubmitted = new EventEmitter<RegisterFormValues>();
  faFilm = faFilm;

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private service: NgxCommonUiLibService) {
    this.registerForm = this.fb.group({
      email: this.fb.control('', [Validators.email, Validators.required]),
      password: this.fb.control('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.service.print();
  }

  submit(){
    this.formSubmitted.emit(this.registerForm.value);
  }

}
