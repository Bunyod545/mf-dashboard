import { CommonModule } from '@angular/common';
import { InjectionToken, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbActionsModule,
  NbContextMenuModule,
  NbIconModule,
  NbSearchModule,
  NbSelectModule,
  NbThemeModule,
  NbThemeService,
  NbUserModule
} from '@nebular/theme';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    NbEvaIconsModule,
    NbIconModule,
    NbSelectModule,
    NbActionsModule,
    NbSearchModule,
    NbUserModule,
    NbContextMenuModule,
    NbThemeModule
  ],
  providers: [
    NbThemeService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
