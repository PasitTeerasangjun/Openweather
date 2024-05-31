import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

export interface Weather {
  name: string;
  description: string;
  main: string;
  country: string;
  temp: number;
  feels_like: number;
  speed: number;
  deg: number;
}

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {

  list: string = "";
  @Input() weather_lists: any;

  constructor(private route: ActivatedRoute, private data: DataService) { }  // Inject the SharedService

  ngOnInit(): void {
    // console.log(this.weather_lists);
  }

  getWeatherMessage(main: string): string {
    switch (main) {
      case 'Clouds':
        return '- Today is cloudy. It might not be the sunniest day, but it\'s still a great day!';
      case 'Clear':
        return '- Today is clear and sunny. It\'s a perfect day to go outside!';
      case 'Rain':
        return '- Today is rainy. Don\'t forget to take an umbrella!';
      case 'Snow':
        return '- Today is snowy. Stay warm and drive safely!';
      case 'Mist':
        return '- Today is misty. Visibility might be low, so be careful.';
      case 'Thunderstorm':
        return '- Today is stormy with thunderstorms. It\'s best to stay indoors.';
      case 'Drizzle':
        return '- Today has light drizzle. You might need a light jacket.';
      default:
        return '- Weather condition unknown. Stay prepared for any situation!';
    }
  }

  getweatherimg(main: String): string {
    switch (main) {
      case 'Clouds':
        return 'https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png';
      case 'Clear':
        return 'https://ssl.gstatic.com/onebox/weather/64/sunny.png';
      case 'Rain':
        return 'https://ssl.gstatic.com/onebox/weather/64/rain.png';
      case 'Snow':
        return 'https://ssl.gstatic.com/onebox/weather/64/snow.png';
      case 'Mist':
        return 'https://ssl.gstatic.com/onebox/weather/64/mist.png';
      case 'Thunderstorm':
        return 'https://ssl.gstatic.com/onebox/weather/64/thunderstorms.png';
      case 'Drizzle':
        return 'https://ssl.gstatic.com/onebox/weather/64/rain_light.png';
      default:
        return 'https://ssl.gstatic.com/onebox/weather/64/sunny.png';
    }
  }

  getwindspeed(speed: number): string {
    if(speed <= -1) {
      return '- Wind speed condition unknown. Stay prepared for any situation!'
    } else if (speed < 2) {
      return '- The wind is calm. It\'s a perfect day for outdoor activities.';
    } else if (speed < 4) {
      return '- There is a light breeze. It\'s a good day for a walk in the park.';
    } else if (speed < 6) {
      return '- The wind is moderate. You might want to secure lightweight outdoor items.';
    } else if (speed < 8) {
      return '- There is a fresh breeze. Be cautious if you are cycling or engaging in outdoor sports.';
    } else {
      return '- It is quite windy. It\'s advisable to stay indoors and avoid any outdoor activities.';
    }
  }

  getWindGustDetails(gust: number): string {
    if (gust <= -1) {
      return '- Gust condition unknown. Stay prepared for any situation!';
    } else if (gust < 5) {
      return '- Gusts are light and did not affect activities much.';
    } else if (gust < 10) {
      return '- Moderate gusts, it might be a bit breezy.';
    } else if (gust < 15) {
      return '- Strong gusts, be cautious with outdoor activities.';
    } else {
      return '- Very strong gusts, it is recommended to stay indoors.';
    }
  }

  getWindDirectionDetails(deg: number): string {
    if (deg <= -1) {
      return '- Wind Direction condition unknown. Stay prepared for any situation!';
    } else if (deg >= 0 && deg <= 22.5) {
      return '- Wind is coming from the North.';
    } else if (deg <= 67.5) {
      return '- Wind is coming from the North-East.';
    } else if (deg <= 112.5) {
      return '- Wind is coming from the East.';
    } else if (deg <= 157.5) {
      return '- Wind is coming from the South-East.';
    } else if (deg <= 202.5) {
      return '- Wind is coming from the South.';
    } else if (deg <= 247.5) {
      return '- Wind is coming from the South-West.';
    } else if (deg <= 292.5) {
      return '- Wind is coming from the West.';
    } else if (deg <= 337.5) {
      return '- Wind is coming from the North-West.';
    } else {
      return '- Wind is coming from the North.';
    }
  }


}

