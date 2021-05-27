import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  loggedInCheck(): void {

    if (!this.userService.isSignedIn) {
      alert("Morate biti ulogovani da biste dodali novi oglas!");
      this.router.navigate(['/login']);
    }

  }

}
