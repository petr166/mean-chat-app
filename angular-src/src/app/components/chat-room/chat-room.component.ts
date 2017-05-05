import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { Message } from "../../models/message.model";
import { ChatService } from "../../services/chat.service";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})

export class ChatRoomComponent implements OnInit {
  messageList: Array<Message>;
  userList: Array<String>;
  showActive: boolean = false;
  sendForm: FormGroup;
  username: string;
  receiveMessageObs: any;
  receiveActiveObs: any;

  constructor(
    private formBuilder: FormBuilder,
    private el: ElementRef,
    private authService: AuthService,
    private chatService: ChatService
  ) { }

  ngOnInit() {
    let userData = this.authService.getUserData();
    this.username = userData.user.username;

    this.sendForm = this.formBuilder.group({
      message: ['', Validators.required ]
    });

    this.chatService.getMessages()
      .subscribe(data => {
        for (let message of data.messages) {
          this.checkMine(message);
        }
        this.messageList = data.messages;
        this.scrollToBottom();
      });

    this.connectToChat();

    this.chatService.getActiveList();

  }

  connectToChat(): void {
    let connected = this.chatService.isConnected();
    if (connected == true) {
      this.initReceivers();
    } else {
      this.chatService.connect(this.username, () => {
        this.initReceivers();
      });
    }
  }

  initReceivers(): void {
    this.receiveMessageObs = this.chatService.receiveMessage()
      .subscribe(message => {
        this.checkMine(message);
        this.messageList.push(message);
        this.scrollToBottom();
      });

    this.receiveActiveObs = this.chatService.receiveActiveList()
      .subscribe(users => {
        this.userList = users;
      });
  }

  onSendSubmit(): void {
    let newMessage: Message = {
      created: new Date(),
      from: this.username,
      text: this.sendForm.value.message
    };
    this.chatService.sendMessage(newMessage);
    newMessage.mine = true;
    this.messageList.push(newMessage);
    this.scrollToBottom();

    this.sendForm.setValue({message: ""});
  }

  checkMine(message: Message): void {
    if (message.from == this.username) {
      message.mine = true;
    }
  }

  onUsersClick(): void {
    this.showActive = !this.showActive;
  }

  scrollToBottom(): void {
    let element: any = this.el.nativeElement.querySelector('.msg-container');
    setTimeout(() => {
      element.scrollTop = element.scrollHeight;
    }, 100);
  }

}
