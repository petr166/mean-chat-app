import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

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
  userList: Array<any>;
  showActive: boolean;
  sendForm: FormGroup;
  username: string;
  chatWith: string;
  receiveMessageObs: any;
  receiveActiveObs: any;
  receivePrivateObs: any;
  noMsg: boolean;
  conversationId: string;
  notify: boolean;
  notification: any = {timeout:null};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private el: ElementRef,
    private authService: AuthService,
    private chatService: ChatService
  ) { }

  ngOnInit() {
    let userData = this.authService.getUserData();
    this.username = userData.user.username;

    this.route.params.subscribe((params: Params) => {
      this.chatWith = params.chatWith;
    });

    this.sendForm = this.formBuilder.group({
      message: ['', Validators.required ]
    });

    this.getMessages(this.chatWith);

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

  getMessages(name: string): void {
    this.chatService.getConversation(this.username, name)
      .subscribe(data => {
        if (data.success == true) {
          this.conversationId = data.conversation._id || data.conversation._doc._id;
          let messages = data.conversation.messages || data.conversation._doc.messages;
          if (messages && messages.length > 0) {
            for (let message of messages) {
              this.checkMine(message);
            }
            this.noMsg = false;
            this.messageList = messages;
            this.scrollToBottom();
          } else {
            this.noMsg = true;
            this.messageList = [];
          }
        } else {
          this.onNewConv("chat-room");
        }
      });
  }

  initReceivers(): void {
    this.receiveMessageObs = this.chatService.receiveMessage()
      .subscribe(message => {
        this.checkMine(message);
        if (message.conversationId == this.conversationId) {
          this.noMsg = false;
          this.messageList.push(message);
          this.scrollToBottom();
          this.msgSound();
        } else {
          if (this.notification.timeout) {clearTimeout(this.notification.timeout)};
          this.notification = {
            from: message.from,
            inChatRoom: message.inChatRoom,
            text: message.text,
            timeout: setTimeout(()=>{ this.notify = false }, 4000)
          };
          this.notify = true;
          this.notifSound();
        }
      });

    this.receiveActiveObs = this.chatService.receiveActiveList()
      .subscribe(users => {
        for (let i = 0; i < users.length; i++) {
          if (users[i].username == this.username) {
            users.splice(i, 1);
            break;
          }
        }
        this.userList = users;
      });
  }

  onSendSubmit(): void {
    let newMessage: Message = {
      created: new Date(),
      from: this.username,
      text: this.sendForm.value.message,
      conversationId: this.conversationId,
      inChatRoom: this.chatWith == "chat-room"
    };

    this.chatService.sendMessage(newMessage, this.chatWith);
    newMessage.mine = true;
    this.noMsg = false;
    this.messageList.push(newMessage);
    this.scrollToBottom();
    this.msgSound();
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

  onNewConv(username: string) {
    if (this.chatWith != username) {
      this.router.navigate(['/chat', username]);
      this.getMessages(username);
    } else {
      this.getMessages(username);
    }
    this.showActive = false;
  }

  notifSound(): void {
    let sound: any = this.el.nativeElement.querySelector('#notifSound');
    sound.play();
  }

  msgSound(): void {
    let sound: any = this.el.nativeElement.querySelector('#msgSound');
    sound.load();
    sound.play();
  }

  scrollToBottom(): void {
    let element: any = this.el.nativeElement.querySelector('.msg-container');
    setTimeout(() => {
      element.scrollTop = element.scrollHeight;
    }, 100);
  }

}
