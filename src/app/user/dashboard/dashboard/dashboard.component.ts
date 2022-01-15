import { Component } from '@angular/core';
import { LayoutService } from 'src/app/core/services/layout.service';
import { Program } from 'src/app/shared/models/program';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  sourceProducts!: Program[];

  targetProducts!: Program[];

  isDisplay = false;
  btnIcon = "add_circle_outline";
  btnText = "Ajouter un programme";


  constructor(private layoutService: LayoutService) { }

  toggleSidenav() {
    this.layoutService.toggleSidenav();
  }

  toggleForm() {
    this.isDisplay = !this.isDisplay;
    if (this.isDisplay) {
      this.btnIcon = "do_not_disturb_on";
      this.btnText = "Masquer le formulaire";
    } else {
      this.btnIcon = "add_circle_outline";
      this.btnText = "Ajouter un programme";
    }


  }

}
