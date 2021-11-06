import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-profil-edit',
  templateUrl: './profil-edit.component.html',
  styleUrls: ['./profil-edit.component.scss']
})
export class ProfilEditComponent implements OnInit {

  profilEditForm!: FormGroup;
  user!: User | null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = this.authService.currentUser;

    this.profilEditForm = this.fb.group({
      name: [this.user?.name, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
        Validators.pattern('^[a-zA-Z0-9_-]*$')
      ]],
      avatar: [this.user?.avatar, [
        Validators.pattern('https ?://.+')
      ]],
      email: [this.user?.email, [
        Validators.required,
        Validators.email
      ]]
    });
  }

  get name() {
    return this.profilEditForm.get('name') as FormControl;
  }

  get avatar() {
    return this.profilEditForm.get('avatar') as FormControl;
  }

  get email() {
    return this.profilEditForm.get('email') as FormControl
  }

  submit() {
    if (this.user) {

      this.user.name = this.profilEditForm.get('name')?.value;
      this.user.avatar = this.profilEditForm.get('avatar')?.value;
      this.user.email = this.profilEditForm.get('email')?.value;

      this.authService.updateUserState(this.user).subscribe();
      this.router.navigate(['./user/profil']);
    }
  }

}
