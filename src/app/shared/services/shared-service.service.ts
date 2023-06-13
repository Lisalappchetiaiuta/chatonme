import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { SharedModel } from '../models/shared-model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private dbPath = '/messages';
  messagesRef: AngularFireList<SharedModel>;

  constructor(private db: AngularFireDatabase) {
    this.messagesRef = db.list<SharedModel>(this.dbPath);
  }

  addMessage(message: string) {
    const sharedMessage: SharedModel = { user: 'Anonymous', message: message };
    return this.messagesRef.push(sharedMessage);
  }

  getMessages(): AngularFireList<SharedModel> {
    return this.messagesRef;
  }
}
