import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleNavMenu(){
    console.log("clicked");
    
    let navMenu = document.getElementById('toggleIt');
    console.log(navMenu);
    navMenu?.classList.toggle('collapse')
  }
}
