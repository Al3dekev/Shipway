import { Component, OnInit } from '@angular/core';

import{ PlayGameService} from "../../services/play-game.service";
import {FormGroup,FormControl} from "@angular/forms";

@Component({
  selector: 'app-game-configuration',
  templateUrl: './game-configuration.component.html',
  styleUrls: ['./game-configuration.component.less']
})
export class GameConfigurationComponent implements OnInit {




  private _colorType1:string="#6fdbd5";
  private _colorType2:string="#dd71bf";

  gameForm = new FormGroup({
    shipName: new FormControl("Normandy"),
    shipColor: new FormControl(this.colorType1),
    //Remplacer vars de la classe par celles du formcontrol
  });


  constructor(private pgs:PlayGameService) {

  }


  BackButton(){
    this.pgs.EnteringConfigMenu = false;
  }

  startGameBtn(){

    //PROD MODE
    this.pgs.EnteringConfigMenu = false;
    this.pgs.startTheGame = true;

    this.setPlayerShipProperties();
    this.setEnemyShipProperties();

  }

  setPlayerShipProperties(){
    this.pgs.playerShipColor = this.gameForm.value.shipColor;
    this.pgs.playerShipName = this.gameForm.value.shipName;

    if(this.pgs.playerShipColor == this.colorType1){
      return true
    }else{
      return false
    }
  }

  setEnemyShipProperties(){


    if(this.setPlayerShipProperties() == true){
      this.pgs.enemyShipColor = this.colorType2;
    } else{
      this.pgs.enemyShipColor = this.colorType1;
    }
  }

  clickTestColor(){
    console.log(this.gameForm.value);
    console.log(this.gameForm.value.shipName);
    console.log(this.gameForm.value.shipColor);
  }


  get colorType1(): string {
    return this._colorType1;
  }

  set colorType1(value: string) {
    this._colorType1 = value;
  }
  get colorType2(): string {
    return this._colorType2;
  }
  set colorType2(value: string) {
    this._colorType2 = value;
  }


  //about form
  get shipName(){
    return this.gameForm.value.shipName;
  }

  get shipColor(){
    return this.gameForm.value.shipColor;
  }


  ngOnInit() {
  }

}
