import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { AuthService } from "../../services/auth.service";
import { ChatService } from "../../services/chat.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private flashMessagesService: FlashMessagesService,
    private chatService: ChatService
  ) { }

  ngOnInit() {
    this.checkLoggedIn();

    this.loginForm = this.formBuilder.group({
      //controlname: ['initial value', rules]
      username: ['', [ Validators.required, Validators.minLength(4), Validators.maxLength(14) ]],
      password: ['', [ Validators.required, Validators.minLength(4) ]]
    });
  }

  checkLoggedIn(): void {
    if (this.authService.loggedIn()) {
      this.router.navigate(["/"]);
    }
  }

  onLoginSubmit(): void {
    this.authService.authenticateUser(this.loginForm.value)
      .subscribe(data => {
        if (data.success == true) {
          this.authService.storeUserData(data.token, data.user);
          this.chatService.connect(data.user.username);
          this.router.navigate(["/chat"]);
        } else {
          this.flashMessagesService.show(data.msg, {cssClass: "alert-danger", timeout: 3000});
        }
      });
  }
}
