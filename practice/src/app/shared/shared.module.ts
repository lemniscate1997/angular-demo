import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { InfoComponent } from './components/info/info.component';

import { CollapseModule } from 'ngx-bootstrap';

@NgModule({
    declarations: [
        InfoComponent
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        CollapseModule.forRoot()
    ],
    exports: [
        // CarouselModule
    ],
    providers: []
})

export class SharedModule { }
