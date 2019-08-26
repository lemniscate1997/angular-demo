import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseModule } from './base/base.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';

import { AuthGuard } from './shared/auth.guard';
import { StudyResolver } from './shared/study-resolve.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BaseModule,
    SharedModule,
    UserModule
  ],
  providers: [
    AuthGuard,
    StudyResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
