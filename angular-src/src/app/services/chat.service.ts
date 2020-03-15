import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import * as io from 'socket.io-client';
import { Message } from '../models/message.model';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';

@Injectable()
export class ChatService {
  private socket: any;
  private apiUrl: string = `${environment.backendUrl}/messages`;
  private usersUrl: string = `${environment.backendUrl}/users`;

  constructor(public authService: AuthService, public http: Http) {}

  connect(username: string, callback: Function = () => {}): void {
    // initialize the connection
    this.socket = io(environment.chatUrl, { path: environment.chatPath });

    this.socket.on('error', error => {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    });

    this.socket.on('connect', () => {
      this.sendUser(username);
      console.log('connected to the chat server');
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
    this.socket.emit('username', { username: username });
  }

  disconnect(): void {
    this.socket.disconnect();
  }

  getConversation(name1: string, name2: string): any {
    let url = this.apiUrl;
    if (name2 != 'chat-room') {
      let route = '/' + name1 + '/' + name2;
      url += route;
    }

    let authToken = this.authService.getUserData().token;

    // prepare the request
    let headers = new Headers({
      'Content-Type': 'application/json',
      Authorization: authToken,
    });
    let options = new RequestOptions({ headers: headers });

    // POST
    let observableReq = this.http.get(url, options).map(this.extractData);

    return observableReq;
  }

  getUserList(): any {
    let url = this.usersUrl;

    let authToken = this.authService.getUserData().token;

    // prepare the request
    let headers = new Headers({
      'Content-Type': 'application/json',
      Authorization: authToken,
    });
    let options = new RequestOptions({ headers: headers });

    // POST
    let observableReq = this.http.get(url, options).map(this.extractData);

    return observableReq;
  }

  receiveMessage(): any {
    let observable = new Observable(observer => {
      this.socket.on('message', (data: Message) => {
        observer.next(data);
      });
    });

    return observable;
  }

  receiveActiveList(): any {
    let observable = new Observable(observer => {
      this.socket.on('active', data => {
        observer.next(data);
      });
    });

    return observable;
  }

  sendMessage(message: Message, chatWith: string): void {
    this.socket.emit('message', { message: message, to: chatWith });
  }

  getActiveList(): void {
    this.socket.emit('getactive');
  }

  extractData(res: Response): any {
    let body = res.json();
    return body || {};
  }
}
