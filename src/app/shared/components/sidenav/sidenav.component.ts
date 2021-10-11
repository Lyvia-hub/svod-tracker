import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  prefix: string = 'app';
  dashboardPath: string = `${this.prefix}/dashboard`;
  profilPath: string = `${this.prefix}/profil`;

  constructor(private router: Router) { }

  ngOnInit() { }

  public navigate(page: string): void {
    this.router.navigate([page]);
  }
}
