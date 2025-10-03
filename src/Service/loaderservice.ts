import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Loaderservice {

  public isLogin: any = sessionStorage.getItem('isLogin') || 'no';
  public menuID: any = sessionStorage.getItem('menuID') || 'no';

}
