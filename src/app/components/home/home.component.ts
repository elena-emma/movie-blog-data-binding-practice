import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Server1Component } from './server-1/server-1.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Server1Component, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  allowNewServer= false;
  serverCreationStatus = 'No server was created';
  serverName = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)

  }
  ngOnInit() {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created. The name of the server is ' + this.serverName;
    
  }

  onUpdateServerName(event: Event) {
   this.serverName = (<HTMLInputElement>event.target).value;
  }
}
