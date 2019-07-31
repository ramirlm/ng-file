import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-file';
  uploadedFiles: Array < File > ;

  constructor(private http: HttpClient) {
  }

  fileChange(element) {
      this.uploadedFiles = element.target.files;
  }

  upload() {
    const formData = new FormData();
    formData.append('file', this.uploadedFiles[0], this.uploadedFiles[0].name);

    this.http.post('http://localhost:8080/', formData) //TODO TO ENV FILE
    .subscribe((response) => {
         console.log('response received is ', response);
    });
  }

}
