import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor() { }

  goToGithub(){
    window.open("https://github.com/b-vrushabh/The-Lone-Ranger", "_blank");
  }

  ngOnInit() {
  }

}
