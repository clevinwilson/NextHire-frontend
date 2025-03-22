import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutManagerComponent } from './layout-manager/layout-manager.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

@NgModule({
    declarations: [LayoutManagerComponent, PublicLayoutComponent, AuthLayoutComponent, AdminLayoutComponent],
    imports: [LayoutRoutingModule, RouterOutlet],
    exports: [LayoutRoutingModule, LayoutManagerComponent]
})
export class LayoutModule {}
