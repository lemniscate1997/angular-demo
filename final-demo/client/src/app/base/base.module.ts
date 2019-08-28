import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderbarComponent } from './components/headerbar/headerbar.component';
import { BaseService } from './services/base.service';

@NgModule({
  declarations: [SidebarComponent, HeaderbarComponent],
  imports: [
    CommonModule,
  ],
  exports: [SidebarComponent, HeaderbarComponent],
  providers: [BaseService]
})
export class BaseModule { }
