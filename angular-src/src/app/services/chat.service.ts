import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map';

import * as io from 'socket.io-client';
import { Message } from "../models/message.model";
import { AuthService } from "./auth.service";

@Injectable()
export class ChatService {
  private socket: any;
  private chatWith: string;
  private serverUrl: string = "http://localhost:8080";
  private apiUrl: string = "http://localhost:8080/messages"; //!CHANGE this with the backend url

  //build
  // private apiUrl: string = "/messages";
  // private serverUrl: string = "/";

  constructor(private authService: AuthService, private http: Http) { }

  connect(username: string, callback: Function = ()=>{}): void {
    // initialize the connection
    this.socket = io(this.serverUrl);

    this.socket.on("connect", () => {
      this.sendUser(username);
      console.log("connected to the chat server");
      callback();
    });
  }

  isConnected(): boolean {
    if (this.socket != null) {
      return true;
    } else {
      return false;
    }
  }

  sendUser(username: string): void {
    this.socket.emit("username", {username: username});
  }

  disconnect(): void {
    this.socket.disconnect();
  }

  setChatWith(name: string): void {
    this.chatWith = name;
  }

  getChatWith(): string {
    return this.chatWith || "chat-room";
  }

  getMessages(): any {
    let url: string = this.apiUrl;
    let authToken = this.authService.getUserData().token;

    // prepare the request
    let headers = new Headers({
      "Content-Type": "application/json",
      "Authorization": authToken
    });
    let options = new RequestOptions({ headers: headers });

    // POST
    let observableReq = this.http.get(url, options)
                                 .map(this.extractData);

    return observableReq;
  }

  receiveMessage(): any {
    let observable = new Observable(observer => {
      this.socket.on("message", (data: Message) => {
        observer.next(data);
      });
    });

    return observable;
  }

  receivePrivateMessage(): any {
    let observable = new Observable(observer => {
      this.socket.on("private-msg", (data: Message) => {
        observer.next(data);
      });
    });

    return observable;
  }

  receiveActiveList(): any {
    let observable = new Observable(observer => {
      this.socket.on("active", (data) => {
        observer.next(data);
      });
    });

    return observable;
  }

  sendMessage(message: Message): void {
    this.socket.emit("message", {message: message, to: this.chatWith});
  }

  getActiveList(): void {
    this.socket.emit("getactive");
  }

  extractData(res: Response): any {
    let body = res.json();
    return body || { };
  }

}
