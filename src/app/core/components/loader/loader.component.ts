import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/core/services/loader.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  isLoading$: Observable<boolean> | undefined;

  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.isLoading$ = this.loaderService.isLoading$;
  }

}
