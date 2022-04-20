import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopFilterService {

  private _seachInfo = new BehaviorSubject <string>('');
  searchInfo$ = this._seachInfo.asObservable();

  constructor() { }

  sendSearch(search:string){
    this._seachInfo.next(search.toUpperCase());
  }
}
