import { Component, inject } from '@angular/core';
import { UserService } from '../../../../sevice/user.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authService = inject(UserService);
  router = inject(Router);
  userForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.required,
    ]),
  });
  loginSubmit() {
    // console.log(this.userForm.value);
    this.authService.login(this.userForm.value).subscribe({
      next: (data) => {
        alert('ok')
        localStorage.setItem('token', (data as { accessToken: string }).accessToken)
        this.router.navigate(['product/list'])
      },
      error: (error) => {
        // show error
        console.error(error.message);
      },
    });
  }
}
