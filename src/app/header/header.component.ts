import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

/**
 * 
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  userPictureOnly: boolean = false;
  user: any;
  
  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];

  currentTheme = 'default';

  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  constructor(private themeService: NbThemeService) {
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }
  

  toggleSidebar(): boolean {
    return false;
  }
  
  navigateHome() {
    return false;
  }
}
