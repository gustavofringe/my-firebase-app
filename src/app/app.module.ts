import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './app.component';

export const firebaseConfig = {
    apiKey: "AIzaSyD9mtQ8vsTFqp-tdVLBZgvk83RicYlTJHg",
    authDomain: "angularfirebase-1cf3d.firebaseapp.com",
    databaseURL: "https://angularfirebase-1cf3d.firebaseio.com",
    projectId: "angularfirebase-1cf3d",
    storageBucket: "angularfirebase-1cf3d.appspot.com",
    messagingSenderId: "209746225879"
};

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        NgbModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
