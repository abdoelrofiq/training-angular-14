import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { sharedImports } from '../../shared/modules.shared';
import { LoginService } from 'src/app/services/login.service';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ...sharedImports],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private loginService: LoginService, private dialog: MatDialog) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
    if (this.loginService.isLoggedIn()) {
      this.router.navigate(['/products']);
    }
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      console.log('Login:', { username, password });
      try {
        const response = await firstValueFrom(
          this.loginService.login({ username, password })
        );

        if (response.success && response.token) {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/products']);
        }
      } catch (error: any) {
        this.dialog.open(DialogComponent, {
          data: {
            message: error?.error?.message || 'Login gagal',
            isConfirm: false,
            header: 'Failed',
          },
        });
      }
    }
  }

}
