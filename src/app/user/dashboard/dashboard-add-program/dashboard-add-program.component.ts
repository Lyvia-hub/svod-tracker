import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard-add-program',
  templateUrl: './dashboard-add-program.component.html',
  styleUrls: ['./dashboard-add-program.component.scss']
})
export class DashboardAddProgramComponent implements OnInit {

  addProgramForm!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.addProgramForm = this.fb.group({
      'title': ['', [
        Validators.required
      ]],
      'type': ['', [
        Validators.required
      ]],
      'genres': '',
      'releaseDate': '',
      'platform': '',
      'viewingDate': '',
      'synopsis': '',
      'seen': ['', [
        Validators.required
      ]]
    });
  }

  get title() { return this.addProgramForm.get('title') }
  get type() { return this.addProgramForm.get('type') }
  get genres() { return this.addProgramForm.get('genres') }
  get realeaseDate() { return this.addProgramForm.get('releaseDate') }
  get platform() { return this.addProgramForm.get('platform') }
  get viewingDate() { return this.addProgramForm.get('viewingDate') }
  get synopsis() { return this.addProgramForm.get('synopsis') }
  get seen() { return this.addProgramForm.get('seen') }

  submit() {
    console.log(this.title?.value);
    console.log(this.type?.value);
    console.log(this.genres?.value);
    console.log(this.realeaseDate?.value);
    console.log(this.platform?.value);
    console.log(this.viewingDate?.value);
    console.log(this.seen?.value);
    console.log(this.synopsis?.value);
  }

}
