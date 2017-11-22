import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";

import { AppComponent } from './app.component';

var firestoreConfig = {
  apiKey: "AIzaSyDP3MZj-ZK2at3yT7Ud4jen6LT6wjYRcJs",
  authDomain: "firestorex-431a0.firebaseapp.com",
  databaseURL: "https://firestorex-431a0.firebaseio.com",
  projectId: "firestorex-431a0",
  storageBucket: "firestorex-431a0.appspot.com",
  messagingSenderId: "797498861688"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    AngularFireModule.initializeApp(firestoreConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
