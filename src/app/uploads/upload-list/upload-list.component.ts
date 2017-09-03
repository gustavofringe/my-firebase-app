import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { UploadService } from '../shared/upload.service';
import { Upload } from '../shared/upload';

@Component({
    selector: "upload-list",
    templateUrl: './upload-list.component.html',
    styleUrls: ['./upload-list.component.scss']
})
export class UploadListComponent implements OnInit {

    uploads: FirebaseListObservable<Upload[]>;
    showSpinner = true;

    constructor(private upSvc: UploadService) { }

    ngOnInit() {
        this.uploads = this.upSvc.getUploads({limitToLast: 5})
        this.uploads.subscribe(() => this.showSpinner = false);
    }


}
