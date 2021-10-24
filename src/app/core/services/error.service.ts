import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { ToastrService } from './toastr.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private toastrService: ToastrService) { }

  handleError(error: any) {
    // Appelle le service toastr pour afficher
    this.toastrService.showToastr({
      category: 'danger',
      message: error.error.error.message
    });
    // retourne l'erreur levée
    return throwError(error);
  }
}
