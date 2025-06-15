import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { SolidButtonComponent } from '../../../shared/components/solid-button/solid-button.component';
import { AuthApiService } from '../services/auth-api.service';
import { AuthService } from '../../../core/auth/auth.service';
import { StoreService } from '../services/store.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterModule, SolidButtonComponent]
})
export class LoginComponent {
    formSubmitted: boolean = false;
    errorMessage: string | null = null; // To display API error messages
    isLoading: boolean = false;
    private authApiService = inject(AuthApiService);
    private authService = inject(AuthService);
    private router = inject(Router);
    private storeService = inject(StoreService);

    form = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)]),
        rememberMe: new FormControl(false, Validators.requiredTrue)
    });

    /**
     * Returns the error message for the email field if it is invalid.
     * This method checks if the email control has been touched or if the form has been submitted,
     */
    get emailIsInvalidErrorMessage(): string {
        const emailControl = this.form.controls.email;
        if ((emailControl.touched || this.formSubmitted) && emailControl.invalid) {
            if (this.form.controls.email.hasError('required')) {
                return 'Email is required';
            } else if (this.form.controls.email.hasError('email')) {
                return 'Email must be a valid email address.';
            } else if (emailControl.hasError('emailTaken')) {
                return 'This email is already taken.';
            }
        }
        return '';
    }

    /**
     * Returns the error message for the password field if it is invalid.
     * This method checks if the password control has been touched or if the form has been submitted,
     * and returns appropriate error messages based on validation rules.
     */
    get passwordIsInvalidErrorMessage(): string {
        const passwordControl = this.form.controls.password;
        if ((passwordControl.touched || this.formSubmitted) && passwordControl.invalid) {
            if (this.form.controls.password.hasError('required')) {
                return 'Password is required';
            } else if (this.form.controls.password.hasError('minlength')) {
                return 'Password must be at least 8 characters long.';
            }
        }
        return '';
    }

    /**
     * Handles the form submission for user registration.
     * Validates the form, sends the registration request to the backend,
     * and handles the response or errors accordingly.
     */
    onFormSubmit() {
        this.formSubmitted = true;
        if (this.form.valid) {
            const formData = this.form.value;
            const email = formData.email;
            const password = formData.password;
            this.isLoading = true;

            this.authApiService.loginUser({ email: email!, password: password! }).subscribe({
                next: (response) => {
                    this.isLoading = false;
                    if (response.user) {
                        this.authService.setToken(response.token);
                        this.storeService.setUser(response.user, response.token);
                        this.router.navigate(['/']);
                        this.form.reset();
                        this.formSubmitted = false;
                    } else {
                        this.errorMessage = response.message || 'Registration failed. Please try again.';
                    }
                },
                error: (error: HttpErrorResponse) => {
                    this.isLoading = false;
                    console.error('Registration failed:', error);

                    if (error.error && error.error.message) {
                        this.errorMessage = error.error.message;
                    } else if (error.status === 409) {
                        this.errorMessage = 'An account with this email already exists.';
                    } else if (error.status >= 400 && error.status < 500) {
                        this.errorMessage = 'Invalid Email or Password.';
                    } else {
                        this.errorMessage = 'An unexpected error occurred. Please try again later.';
                    }
                },
                complete: () => {
                    // This block is executed when the observable completes (after next or error)
                    console.log('Registration request complete.');
                }
            });
        } else if (this.form.invalid) {
            this.form.markAllAsTouched();
            console.log('Form is invalid. Please correct the errors.');
        }
    }
}
