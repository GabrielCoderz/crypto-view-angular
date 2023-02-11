import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  public darkMode: boolean = true

  constructor() { }

  ngOnInit(): void {
    if(this.darkMode) {
      document.body.classList.toggle('darkMode');
    }
  }

  changed() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('darkMode');
  }

}
