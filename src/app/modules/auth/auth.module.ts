import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './authauth-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [LoginComponent, SignupComponent],
    imports: [CommonModule, AuthRoutingModule, SharedModule, ReactiveFormsModule],
    exports: []
})
export class AuthModule {}
