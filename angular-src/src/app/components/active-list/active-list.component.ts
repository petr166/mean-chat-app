import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-active-list',
  templateUrl: './active-list.component.html',
  styleUrls: ['./active-list.component.scss']
})
export class ActiveListComponent implements OnInit {
  @Input() users: Array<String>;

  constructor() { }

  ngOnInit() {
  }

}
