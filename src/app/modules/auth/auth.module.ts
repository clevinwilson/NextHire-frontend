import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './authauth-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { SignupComponent } from './signup/signup.component';

@NgModule({
    declarations: [LoginComponent, SignupComponent],
    imports: [CommonModule, AuthRoutingModule, SharedModule],
    exports: []
})
export class AuthModule {}
