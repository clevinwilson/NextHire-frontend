import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrl: './signup.component.scss'
})
export class SignupComponent {
    formSubmitted: boolean = false;

    form = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });

    onFormSubmit() {
        this.formSubmitted = true;
        if (this.form.valid) {
            const formData = this.form.value;
            console.log('Form submitted successfully:', formData);
        } else if (this.form.invalid) {
            this.form.markAllAsTouched();
            console.log('Form is invalid. Please correct the errors.');
        }
    }

    get emailIsInvalidErrorMessage(): string {
        const emailControl = this.form.controls.email;
        if ((emailControl.touched || this.formSubmitted) && emailControl.invalid) {
            if (this.form.controls.email.hasError('required')) {
                return 'Email is required';
            } else if (this.form.controls.email.hasError('email')) {
                return 'Email must be a valid email address.';
            }
        }
        return '';
    }

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
}
