import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LayoutService } from 'src/app/core/services/layout.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  dashboardPath: string = 'user/dashboard';
  profilPath: string = 'user/profil';

  constructor(
    private router: Router,
    private layoutService: LayoutService) { }

  public navigate(page: string): void {
    this.router.navigate([page]);
  }

  public isActive(page: string): boolean {
    return this.router.isActive(page, true);
  }

  toggleSidenav() {
    this.layoutService.toggleSidenav();
  }
}
