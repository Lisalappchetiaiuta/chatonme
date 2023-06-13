import { Component, OnInit } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { SharedService } from '../services/shared-service.service';

@Component({
  selector: 'app-shared-component',
  templateUrl: './shared-component.component.html',
  styleUrls: ['./shared-component.component.scss'],
})
export class SharedComponent implements OnInit {
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    // Crea la connessione SignalR
    const connection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5000/chatHub')
      .build();

    // Registra il gestore degli eventi per il messaggio ricevuto
    connection.on('ReceiveMessage', (user, message) => {
      console.log(`${user}: ${message}`);
      this.sharedService.addMessage(`${user}: ${message}`);
    });

    // Avvia la connessione
    connection.start().catch(err => console.error(err.toString()));
  }
}
