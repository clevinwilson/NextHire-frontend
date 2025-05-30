import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { LayoutModule } from './core/layout/layout.module';
import { reducers } from './store/reducers';

@NgModule({
    declarations: [AppComponent],
    imports: [
        CommonModule,
        BrowserModule,
        AuthModule,
        LayoutModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
