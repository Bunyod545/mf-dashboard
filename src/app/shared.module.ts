import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    ContentComponent
  ],
})
export class SharedModule {}
