import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class Apiservice {

  async commonGetCall(url: any) {
    try {
      const res = await axios.get(url);
      return res
    } catch {
      return { data: [] };
    }
  }

  async commonPostCall(url: any, data: any) {
    try {
      const res = await axios.post(url, data);
      return res
    } catch (error) {
      return { data: [] };
    }

  }

}
