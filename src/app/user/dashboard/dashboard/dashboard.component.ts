import { Component } from '@angular/core';
import { LayoutService } from 'src/app/core/services/layout.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private layoutService: LayoutService) { }

  toggleSidenav() {
    this.layoutService.toggleSidenav();
  }

}
