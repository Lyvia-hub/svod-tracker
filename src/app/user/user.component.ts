import { Component, OnDestroy, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/core/services/layout.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {

  isSidenavCollapsed!: boolean;
  private subscription: Subscription = new Subscription;

  constructor(private layoutService: LayoutService) { }

  ngOnInit(): void {
    this.subscription =
      this.layoutService.isSidenavCollapsed$.subscribe(
        (isSidenavCollapsed) => this.isSidenavCollapsed = isSidenavCollapsed
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
