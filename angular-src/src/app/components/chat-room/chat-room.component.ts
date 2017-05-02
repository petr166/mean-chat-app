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
      { created: new Date('01 Jan 2017'), from: "petru", text: "Hi there!" },
      { created: new Date('01 Jan 2017'), from: "alex", text: "Hello!" },
      { created: new Date('01 Jan 2017'), from: "petru", text: "How are you?" },
      { created: new Date('01 Jan 2017'), from: "alex", text: "Fine, thanks" },
      { created: new Date('01 Jan 2017'), from: "petru", text: "Hi there!" },
      { mine:true, created: new Date(), from: "alex", text: "Fine, thanks sdjakfjnk asfdnjk sadfjnk sadfjknsdfam,asd,fjnksd fannkja nkjsdfkn sfadn knjafsdk ksdfkml mkl" },
      { created: new Date(), from: "marc", text: "Fine, thanks sdjakfjnk asfdnjk sadfjnk sadfjknsdfam,asd,fjnksd fannkja nkjsdfkn sfadn knjafsdk ksdfkml mkl" },
      { created: new Date(), from: "alex", text: "Fine, thanks sdjakfjnk asfdnjk sadfjnk sadfjknsdfam,asd,fjnksd fannkja nkjsdfkn sfadn knjafsdk ksdfkml mkl" },
      { mine:true, created: new Date(), from: "cornel", text: "Fine, thanks sdjakfjnk asfdnjk sadfjnk sadfjknsdfam,asd,fjnksd fannkja nkjsdfkn sfadn knjafsdk ksdfkml mkl" }
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
    newMessage.mine = true;
    this.messageList.push(newMessage);
    this.scrollToBottom();

    this.sendForm.setValue({message: ""});
  }

  scrollToBottom(): void {
    let element: any = this.el.nativeElement.querySelector('.msg-container');
    element.scrollTop = element.scrollHeight;
  }

}
