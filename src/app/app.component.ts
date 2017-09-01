import {Component} from '@angular/core';

import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public form;

    ngOnInit() {
        this.form = new FormGroup({
            title: new FormControl("", Validators.required),
            sentence: new FormControl(""),
            content: new FormControl("")
        });
    }

    onSubmit(user) {
        console.log(user);
    }
}
