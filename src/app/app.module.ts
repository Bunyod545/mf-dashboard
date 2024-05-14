import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { defaultImportModules, defaultProviders } from '../../libs/mf-core/default-modules';
import { ContentComponent } from './content/content.component';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    defaultImportModules
  ],
  providers: [
    defaultProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
