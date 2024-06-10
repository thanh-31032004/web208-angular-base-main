import { Component, inject } from '@angular/core';
import { UserService } from '../../../../sevice/user.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  authService = inject(UserService);
  router = inject(Router)
  registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.required,
    ]),
  });

  handleSubmit() {
    console.log(this.registerForm.value);
    this.authService.register(this.registerForm.value).subscribe({
      next: () => {
        alert('ok')
        this.router.navigate(['login'])
      },
      error: (error) => {
        // show error
        console.error(error.message);
      },
    });
  }
}
