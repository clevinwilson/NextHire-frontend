import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SolidButtonComponent } from './components/solid-button/solid-button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OutlineButtonComponent } from './components/outline-button/outline-button.component';
import { IconCardComponent } from './components/icon-card/icon-card.component';
import { JobInfoCardComponent } from './components/job-info-card/job-info-card.component';

@NgModule({
    imports: [CommonModule],
    declarations: [SolidButtonComponent, NavbarComponent, OutlineButtonComponent, IconCardComponent, JobInfoCardComponent],
    exports: [SolidButtonComponent, NavbarComponent, OutlineButtonComponent, IconCardComponent, JobInfoCardComponent]
})
export class SharedModule {}
