import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { take } from 'rxjs/operators';
import { Toastr } from 'src/app/shared/models/toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  // flux
  private toastr: BehaviorSubject<Toastr | null> = new BehaviorSubject<Toastr | null>(null);

  //Observable: affiche le toastr ou rien
  readonly toastr$: Observable<Toastr | null> = this.toastr.asObservable();

  showToastr(toastr: Toastr): void {
    timer(0, 5000).pipe(take(2)).subscribe(i => {
      if (i === 0) {
        //affiche le toastr pendant 3 secondes
        this.toastr.next(toastr);
      } else {
        this.toastr.next(null);
      }
    });
  }

  closeToastr() {
    this.toastr.next(null);
  }
}
