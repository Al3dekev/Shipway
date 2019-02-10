import { Component } from '@angular/core';
import{PlayGameService} from "./services/play-game.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Shipway';

  constructor(public pgs:PlayGameService){
  }



}
