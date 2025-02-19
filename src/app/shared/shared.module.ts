import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SolidButtonComponent } from './components/solid-button/solid-button.component';

@NgModule({
    imports: [CommonModule],
    declarations: [SolidButtonComponent],
    exports: [SolidButtonComponent]
})
export class SharedModule {}
