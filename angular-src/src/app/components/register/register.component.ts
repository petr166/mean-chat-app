import { Component, OnInit } from '@angular/core';
import { ValidateService } from "../../services/validate.service";
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from "../../services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  name: string;
  username: string;
  email: string;
  password: string;

  constructor(
    private validateService: ValidateService,
    private flashMessagesService: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    let user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password,
    }

    if (!this.validateService.validateRegister(user)) {
      this.flashMessagesService.show("Please fill in all the fields.", {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessagesService.show("Please fill in a valid e-mail.", {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    this.authService.registerUser(user)
      .subscribe(data => {
        if (data.success) {
          this.flashMessagesService.show("You registered successfuly!", {cssClass: 'alert-success', timeout: 3000});
          this.router.navigate(["/login"]);
        } else {
          this.flashMessagesService.show("Something went wrong. Please try again.", {cssClass: 'alert-danger', timeout: 3000});
        }
      });

    console.log("formData:", user);
  }

}
