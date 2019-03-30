import { Component, OnInit } from '@angular/core';

import{ PlayGameService} from "../../services/play-game.service";
import {FormGroup,FormControl} from "@angular/forms";
import {StartGameService} from "../../services/start-game.service";
import {ShipService} from "../../services/ship.service";

@Component({
  selector: 'app-game-configuration',
  templateUrl: './game-configuration.component.html',
  styleUrls: ['./game-configuration.component.less']
})
export class GameConfigurationComponent implements OnInit {




  private _colorType1:string="#6fdbd5";
  private _colorType2:string="#dd71bf";



  private _gameForm = new FormGroup({
    shipName: new FormControl("Normandy"),
    shipColor: new FormControl(this.colorType1),
    //Remplacer vars de la classe par celles du formcontrol
  });


  constructor(private sgs:StartGameService, private ss:ShipService) {

  }


  BackButton(){
    this.sgs.EnteringConfigMenu = false;
  }

  startGameBtn(){

    //PROD MODE
    this.sgs.EnteringConfigMenu = false;
    this.sgs.startTheGame = true;

    this.setPlayerShipProperties();
    this.setEnemyShipProperties();

  }

  /**
   * Player properties
   */
  setPlayerShipProperties(){
    this.ss.playerShipColor = this.gameForm.value.shipColor;
    this.ss.playerShipName = this.gameForm.value.shipName;

    if(this.ss.playerShipColor == this.colorType1){
      return true
    }else{
      return false
    }
  }

  /**
   * AI properties
   */
  setEnemyShipProperties(){

    if(this.setPlayerShipProperties() == true){
      this.ss.enemyShipColor = this.colorType2;
    } else{
      this.ss.enemyShipColor = this.colorType1;
    }
  }

  /**
   * useless method
   */
  clickTestColor(){
    console.log(this._gameForm.value);
    console.log(this._gameForm.value.shipName);
    console.log(this._gameForm.value.shipColor);
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
    return this._gameForm.value.shipName;
  }

  get shipColor(){
    return this._gameForm.value.shipColor;
  }

  get gameForm(): FormGroup {
    return this._gameForm;
  }

  set gameForm(value: FormGroup) {
    this._gameForm = value;
  }

  ngOnInit() {
  }

}
