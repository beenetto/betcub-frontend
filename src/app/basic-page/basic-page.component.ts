import { Component, OnInit } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SharedService } from '../services/shared.service';
import { Subscription, Observable } from 'rxjs';


@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css'] })

export class BasicPageComponent implements OnInit {

    content: String = "";

    constructor(private activatedRoute: ActivatedRoute, private http: Http) {

        this.http.get(SharedService.SERVICE_ROOT +
                SharedService.ENDPOINT[activatedRoute.snapshot.url[0].path])
            .map(res => res.json().content)
            .subscribe(
                content => this.content = content,
                error => Observable.throw(error));
    }

    ngOnInit() {}

}
