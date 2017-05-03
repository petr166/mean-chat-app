import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as io from 'socket.io-client';
import { Message } from "../models/message.model";

@Injectable()
export class ChatService {
  private serverUrl: string = "http://localhost:8080";
  private socket: any;

  constructor() { }

  connect(callback: Function): void {
    // initialize the connection
    this.socket = io(this.serverUrl);

    this.socket.on("connect", () => {
      console.log("connected to the chat server");
    });

    callback();
  }

  receiveMessage(): any {
    let observable = new Observable(observer => {
      this.socket.on("message", (data: Message) => {
        observer.next(data);
      });
    });

    return observable;
  }

  sendMessage(message: Message): void {
    this.socket.emit("message", message);
  }

}
