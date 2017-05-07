import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from "../../services/auth.service";
import { ChatService } from "../../services/chat.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private chatService: ChatService
  ) { }

  ngOnInit() {
  }

  onLogoutClick(): boolean {
    this.chatService.disconnect();
    this.authService.logout();
    this.router.navigate(["/login"]);
    return false;
  }

}
