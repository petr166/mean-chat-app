import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { Message } from "../../models/message.model";

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})

export class ChatRoomComponent implements OnInit {
  messageList: Array<Message>;
  sendForm: FormGroup;
  message: string;
  username: string;

  constructor(private formBuilder: FormBuilder, private el: ElementRef) { }

  ngOnInit() {
    this.username = "petru";

    this.messageList = [
      { created: new Date(), from: "petru", text: "Hi there!" },
      { created: new Date(), from: "alex", text: "Hello!" },
      { created: new Date(), from: "petru", text: "How are you?" },
      { created: new Date(), from: "alex", text: "Fine, thanks" },
      { created: new Date(), from: "petru", text: "Hi there!" },
      { created: new Date(), from: "alex", text: "Hello!" },
      { created: new Date(), from: "petru", text: "How are you?" },
      { created: new Date(), from: "alex", text: "Fine, thanks" },
      { created: new Date(), from: "petru", text: "Hi there!" },
      { created: new Date(), from: "alex", text: "Hello!" },
      { created: new Date(), from: "petru", text: "How are you?" },
      { created: new Date(), from: "alex", text: "Fine, thanks" },
      { created: new Date(), from: "petru", text: "Hi there!" },
      { created: new Date(), from: "alex", text: "Hello!" },
      { created: new Date(), from: "petru", text: "How are you?" },
      { created: new Date(), from: "alex", text: "Fine, thanks" },
      { created: new Date(), from: "petru", text: "Hi there!" },
      { created: new Date(), from: "alex", text: "Hello!" },
      { created: new Date(), from: "petru", text: "How are you?" },
      { created: new Date(), from: "alex", text: "Fine, thanks" },
      { created: new Date(), from: "petru", text: "Hi there!" },
      { created: new Date(), from: "alex", text: "Hello!" },
      { created: new Date(), from: "petru", text: "How are you?" },
      { created: new Date(), from: "alex", text: "Fine, thanks" },
      { created: new Date(), from: "petru", text: "Hi there!" },
      { created: new Date(), from: "alex", text: "Hello!" },
      { created: new Date(), from: "petru", text: "How are you?" },
      { created: new Date(), from: "alex", text: "Fine, thanks" },
      { created: new Date(), from: "petru", text: "Hi there!" },
      { created: new Date(), from: "alex", text: "Hello!" },
      { created: new Date(), from: "petru", text: "How are you?" },
      { created: new Date(), from: "alex", text: "Fine, thanks" }
    ];

    this.sendForm = this.formBuilder.group({
      message: ['', Validators.required ]
    });

  }

  onSendSubmit(): void {
    let newMessage: Message = {
      created: new Date(),
      from: this.username,
      text: this.sendForm.value.message
    };
    console.log(newMessage);
    this.messageList.push(newMessage);
    this.scrollToBottom();

    this.sendForm.setValue({message: ""});
  }

  scrollToBottom(): void {
    let element: any = this.el.nativeElement.querySelector('.msg-container');
    element.scrollTop = element.scrollHeight;
  }

}
