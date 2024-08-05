import { Injectable } from '@angular/core';
import {CookieOptions, CookieService} from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  expireDate: Date = new Date();
  options: CookieOptions = {
    expires:  this.expireDate.setMinutes(this.expireDate.getMinutes() + 60),
    domain: 'https://localhost:4200',
    sameSite: 'Strict',
    secure: true,
  }

  constructor(private cookieService: CookieService) { }

  setCookieValue(key: string, value: string){
    this.cookieService.set(key, value, this.options)
  }

  getCookieValue(key: string){
    return this.cookieService.get(key);
  }
}
