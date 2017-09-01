import {Component, Directive, HostListener, OnInit, Output, ViewChild} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
@Directive({
    selector: '[confirm]'
})
export class AppComponent implements OnInit {
    getDismissReason: any;
    closeResult: string;
    public form;
    user: Observable<firebase.User>;
    items: FirebaseListObservable<any[]>;
    titleVal: string = '';
    sentenceVal: string = '';
    contentVal: string = '';
    titleAlert:string = 'This field is required';
    @Output('confirm-click') click: any = new EventEmitter();
    constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase, public modalService: NgbModal) {
        this.items = af.list('/product-card', {
            query: {
                limitToLast: 50
            }
        });
        this.user = this.afAuth.authState;
    }


    ngOnInit() {
        this.form = new FormGroup({
            title: new FormControl("", Validators.compose([
                Validators.required,
                Validators.minLength(4),
                Validators.pattern(/([a-z|A-Z|0-9])/gi)
            ])),
            sentence: new FormControl("", Validators.compose([
                Validators.required,
                Validators.maxLength(100),
                Validators.pattern(/([a-z|A-Z|0-9!?-_@])/gi)
            ])),
            content: new FormControl("", Validators.compose([
                Validators.required,
                Validators.maxLength(2000),
                Validators.pattern(/([a-z|A-Z|0-9!?-_@])/gi)
            ])),
            image: new FormControl('')
        });
    }


    login() {
        this.afAuth.auth.signInAnonymously();
    }

    logout() {
        this.afAuth.auth.signOut();
    }

    delete(item) {
        this.items.remove(item);
    }

    onSubmit(user) {
        this.items.push(user);
        this.titleVal = '';
        this.sentenceVal = '';
        this.contentVal = '';
    }
}
