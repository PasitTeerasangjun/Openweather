import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { withInterceptors } from '@angular/common/http';
import { Observable, map, throwError } from 'rxjs';


export interface Weather {
  name: string;
  description: string;
  main: string;
  country: string;
  temp: number;
  feels_like: number;
  speed : number;
  deg : number
  gust : number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private data: DataService, private router: Router) { }

  

  

  ngOnInit(): void{
    this.weather_loop();
  }

  list:any = ['Bangkok', 'London', 'Paris', 'Moscow', 'New York', 'Tokyo', 'Seoul', 'Sydney', 'Cairo', 'Berlin'];
  stats: boolean = true;

  weather_list: any[] = [];
  show_weather_list: any[] = [];

  //mock_data -- >
  data_weather: Weather[] = [
                            {name: 'bangkok' , description: 'Unknown', main: 'Unknown', country: 'TH', temp: 273, feels_like: 273, speed : -1, deg : -1, gust : -1},
                            {name: 'London', description: 'Unknown', main: 'Unknown', country: 'UK', temp: 273, feels_like: 273, speed : -1, deg : -1, gust : -1},
                            {name: 'Paris', description: 'Unknown', main: 'Unknown', country: 'FR', temp: 273, feels_like: 273, speed : -1, deg : -1, gust : -1},
                            {name: 'Moscow', description: 'Unknown', main: 'Unknown', country: 'RU', temp: 273, feels_like: 273, speed : -1, deg : -1, gust : -1},
                            {name: 'New York', description: 'Unknown', main: 'Unknown', country: 'US', temp: 273, feels_like: 273, speed : -1, deg : -1, gust : -1},
                            {name: 'Tokyo', description: 'Unknown', main: 'Unknown', country: 'JP', temp: 273, feels_like: 273, speed : -1, deg : -1, gust : -1},
                            {name: 'Seoul', description: 'Unknown', main: 'Unknown', country: 'KR', temp: 273, feels_like: 273, speed : -1, deg : -1, gust : -1},
                            {name: 'Sydney', description: 'Unknown', main: 'Unknown', country: 'AU', temp: 273, feels_like: 273, speed : -1, deg : -1, gust : -1},
                            {name: 'Cairo', description: 'Unknown', main: 'Unknown', country: 'EG', temp: 273, feels_like: 273, speed : -1, deg : -1, gust : -1},
                            {name: 'Berlin', description: 'Unknown', main: 'Unknown', country: 'DE', temp: 273, feels_like: 273, speed : -1, deg : -1, gust : -1}
                          ];
          
  show_weather: Weather[] = [
                            {name: 'Unknown' , description: 'Unknown', main: 'Unknown', country: 'Unknown', temp: 273, feels_like: 273, speed : -1, deg : -1, gust : -1},
                          ];

  City: string = "";

  //loop weather ngOninit
  weather_loop(){ 
    for(let i = 0; i < 10; i++){
      this.getweather(this.list[i]);
      
    }
  }

  getweather(name: string) {
    this.data.getdata(name).subscribe((res: any) => {
      this.weather_list.push(res)
      // console.log(this.weather_list)
      this.convertData(this.weather_list);
    }
    );
  }

  checkweather(name: string) {
    this.data.getdata(name).subscribe((res: any) => {
      this.show_weather_list.push(res)
      this.stats = false;
      this.convertData(this.show_weather_list);
    });
  }
  
  convertData(data: any) {
    let _data = [];
    for (let i = 0; i < data.length; i++) {
      _data.push({
        name: data[i]['name'] || " ",
        description: data[i]['weather'][0]['description'] || " ",
        main: data[i]['weather'][0]['main'] || " ",
        country: data[i]['sys']['country'] || " ",
        temp: data[i]['main']['temp'] || "0",
        feels_like: data[i]['main']['feels_like'] || "0",
        speed : data[i]['wind']['speed'] || "0",
        deg : data[i]['wind']['deg'] || "0",
        gust : data[i]['wind']['gust'] || "0"
      });
    }

    //console.log(_data);
    // console.log(this.data_weather);
    if(this.stats == true){
      this.data_weather = _data;

    }else if(this.stats == false){
      this.show_weather = _data;
      // console.log(this.show_weather);
      
    }
    //console.log(this.show_weather_list);
    this.show_weather_list = []
  }

  
  check(event: KeyboardEvent) {
    if (event.key === "Enter") {
      this.checkweather(this.City);
      this.City = "";
    }
  }

  click(name : string){
    this.City = name;
    this.checkweather(this.City);
    this.City = "";
  }

  get_stats(data : boolean){
    this.stats = data;
    console.log(this.stats);
  }

}
