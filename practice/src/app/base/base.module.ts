import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    declarations: [
        HeaderComponent,
        SidebarComponent,
        FooterComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        FooterComponent
    ],
    providers: []
})

export class BaseModule { }
