import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastrService } from '../../services/toastr.service';
import { Toastr } from 'src/app/shared/models/toastr';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.scss']
})
export class ToastrComponent implements OnInit {

  toastr$: Observable<Toastr | null> | undefined;

  constructor(private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.toastr$ = this.toastrService.toastr$;
  }

  closeToastr() {
    this.toastrService.closeToastr();
  }

}
