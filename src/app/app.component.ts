import { Component } from '@angular/core';
import {StartGameService} from "./services/start-game.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  private _title = 'Shipway';



  constructor(public sgs:StartGameService){
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

}
