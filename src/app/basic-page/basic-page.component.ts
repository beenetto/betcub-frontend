import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})

export class BasicPageComponent implements OnInit {

    content: String = "";

    constructor(activatedRoute: ActivatedRoute, private http: Http) {
        this.http
            .get('http://localhost:3000/' +
                 activatedRoute.snapshot.url[0].path)
            .map(res => res.json().content)
            .subscribe(
                content => this.content = content,
                this.handleError
            );
    }

    extractData(res: Response) {
		let body = res.json();
		return body || { };
	}

    ngOnInit() {}

    handleError (error: any) {
		let errMsg = (error.message) ? error.message :
		error.status ? `${error.status} - ${error.statusText}` : 'Server error';

		console.error(errMsg); // log to console instead

		return Observable.throw(errMsg);
	}

}
