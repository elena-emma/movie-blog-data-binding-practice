import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-server-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './server-1.component.html',
  styles: [
    `
      .online {
        color: white;
      }
    `],
})
export class Server1Component {
  serverId: number = 10;
  serverStatus: string = 'offline';
  @Input() serverName: string = '';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor() {
    return this.serverStatus === 'offline' ? 'red' : 'green';
  }
}
