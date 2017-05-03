import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map';

import * as io from 'socket.io-client';
import { Message } from "../models/message.model";
import { AuthService } from "./auth.service";

@Injectable()
export class ChatService {
  private serverUrl: string = "http://localhost:8080";
  private socket: any;
  private apiUrl: string = "http://localhost:8080/messages"; //!CHANGE this with the backend url

  constructor(private authService: AuthService, private http: Http) { }

  connect(callback: Function): void {
    // initialize the connection
    this.socket = io(this.serverUrl);

    this.socket.on("connect", () => {
      console.log("connected to the chat server");
    });

    callback();
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

  sendMessage(message: Message): void {
    this.socket.emit("message", message);
  }

  extractData(res: Response): any {
    let body = res.json();
    return body || { };
  }

}
