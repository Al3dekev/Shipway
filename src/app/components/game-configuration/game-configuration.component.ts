import { Component, OnInit } from '@angular/core';

import{ PlayGameService} from "../../services/play-game.service";

@Component({
  selector: 'app-game-configuration',
  templateUrl: './game-configuration.component.html',
  styleUrls: ['./game-configuration.component.less']
})
export class GameConfigurationComponent implements OnInit {

  constructor(private pgs:PlayGameService) {

  }


  BackButton(){
    this.pgs.setEnteringConfigMenu(false);
  }



  ngOnInit() {
  }

}
