import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './app.component';
import {environment} from '../environments/environment';
export const firebaseConfig = environment.firebaseConfig;

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpModule,
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        NgbModule.forRoot(),
        AngularFireModule.initializeApp(firebaseConfig),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
