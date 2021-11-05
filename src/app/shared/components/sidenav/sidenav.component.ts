import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LayoutService } from 'src/app/core/services/layout.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  dashboardPath: string = 'user/dashboard';
  profilPath: string = 'user/profil';

  constructor(
    private router: Router,
    private layoutService: LayoutService) { }

  ngOnInit() { }

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
