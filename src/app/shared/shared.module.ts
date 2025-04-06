import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SolidButtonComponent } from './components/solid-button/solid-button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OutlineButtonComponent } from './components/outline-button/outline-button.component';

@NgModule({
    imports: [CommonModule],
    declarations: [SolidButtonComponent, NavbarComponent, OutlineButtonComponent],
    exports: [SolidButtonComponent, NavbarComponent, OutlineButtonComponent]
})
export class SharedModule {}
