import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getdata(name: string): Observable<any> {
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=4292f3ab8265e10b0afbb0c69dee9715`;
    // console.log(api);
    return this.http.get(api).pipe(
      map((res: any) => {
        // console.log(res);
        return res;
      })
    );
  }
}
