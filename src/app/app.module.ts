import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { LayoutModule } from './core/layout/layout.module';

@NgModule({
    declarations: [AppComponent],
    imports: [CommonModule, BrowserModule, AuthModule, LayoutModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
