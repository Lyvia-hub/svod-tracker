import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[] = [
    {
      label: "",
      icon: ""
    }
  ];

  constructor() { }

  ngOnInit(): void {

    this.items = [
      {
        label: 'SVOD Tracker',
        icon: ''
      },
      {
        label: 'SVOD Tracker',
        icon: ''
      },
      {
        label: 'Accueil',
        icon: 'pi pi-fw pi-home'
      },
      {
        label: 'Netflix',
        icon: 'pi pi-fw pi-video'
      },
      {
        label: 'Amazon',
        icon: 'pi pi-fw pi-amazon',
      },
      {
        label: 'Disney +',
        icon: 'pi pi-fw pi-video',
      },
      {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Signin',
            icon: 'pi pi-fw pi-user-plus',
          },
          {
            label: 'Login',
            icon: 'pi pi-fw pi-user-edit',
          },
          {
            label: 'Logout',
            icon: 'pi pi-fw pi-power-off',
          }
        ]
      }
    ];
  }

}
