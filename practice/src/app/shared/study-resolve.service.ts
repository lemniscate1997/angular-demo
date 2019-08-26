import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class StudyResolver implements Resolve<any> {

    constructor() { }

    resolve(): Observable<any> {
        return of('My Page');
    }
}
