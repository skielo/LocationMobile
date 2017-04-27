import { Injectable } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, AngularFireAuth, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class Databaseservice {

  constructor(private _af: AngularFire) {
  }

  public listAccounts(): FirebaseListObservable<any[]>{
    return this._af.database.list('/accounts');
  }
}
