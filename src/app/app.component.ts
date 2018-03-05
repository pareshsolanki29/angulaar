import { Component, OnInit } from '@angular/core';
import {Portfolio} from '../models/portfolio.interface'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public portfolio: Portfolio;
  public ngOnInit(): void{
    this.portfolio = {
      firstName : 'Paresh',
      lastName : ' Solanki',
      middleName : 'Bhana',
      subHeading : 'Designer|Developer|Explorer',
      socialMedia : [
        {
          icon:'fa fa-linkedin fa-2x',
        link:'https://www.linkedin.com/in/pareshsolanki29/',
        color:'#0077B5'
      },
        {
        icon:'fa fa-github fa-2x',
        link:'https://github.com/pareshsolanki29',
        color:'#6e5494'
      }
      ],
      introduction: ' Hello, I am Paresh, Front Developer and Designer',
      changeLog: [],
      updates:[],
      speakerBio: ' Paresh is a Designer|Developer|Explorer, actively seeking roles in technology. Using Nature as his inspiration'
      
    };
 }
}
