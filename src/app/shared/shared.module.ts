import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SolidButtonComponent } from './components/solid-button/solid-button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OutlineButtonComponent } from './components/outline-button/outline-button.component';
import { IconCardComponent } from './components/icon-card/icon-card.component';
import { JobInfoCardComponent } from './components/job-info-card/job-info-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { CompanyCardComponent } from './components/company-card/company-card.component';
import { SearchCardComponent } from './components/search-card/search-card.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        SolidButtonComponent,
        NavbarComponent,
        OutlineButtonComponent,
        IconCardComponent,
        JobInfoCardComponent,
        FooterComponent,
        CompanyCardComponent,
        SearchCardComponent
    ],
    exports: [
        SolidButtonComponent,
        NavbarComponent,
        OutlineButtonComponent,
        IconCardComponent,
        JobInfoCardComponent,
        FooterComponent,
        CompanyCardComponent,
        SearchCardComponent
    ]
})
export class SharedModule {}
