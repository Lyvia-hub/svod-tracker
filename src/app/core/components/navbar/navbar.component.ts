import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  homePath: string = 'home';
  loginPath: string = 'login';
  signinPath: string = 'signin';
  moviesPath: string = 'movies';
  tvShowsPath: string = 'tv-shows';
  dashboardPath: string = '/user/dashboard';

  user!: User | null;
  private subscription: Subscription = new Subscription;

  constructor(private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.subscription = this.authService.user$.subscribe(user => this.user = user);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public isActive(page: string): boolean {
    return this.router.isActive(page, true);
  }

  public navigate(page: string): void {
    this.router.navigate([page]);
  }

  logout() {
    this.authService.logout();
  }
}
