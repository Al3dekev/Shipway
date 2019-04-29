import { Component, OnInit } from '@angular/core';
import {AlertSenderService} from "../../../services/alert-sender.service";
import {Ship} from "../ship";
import {ShipService} from "../../../services/ship.service";

@Component({
  selector: 'enemy-ship',
  templateUrl: './enemy-ship.component.html',
  styleUrls: ['./enemy-ship.component.less']
})
export class EnemyShipComponent extends Ship implements OnInit {

  constructor(public ss:ShipService, private alSender:AlertSenderService) {
    super();
    this.alSender.addAlertInView("spawn");
    console.log("initialisation de PLAYER SHIP");
    this.name = this.ss.enemyShipName;
    this.color = this.ss.enemyShipColor;
    this.ss.enemyShipHealth = this.propHealness;
    console.log(this.color)
  }

  ngOnInit() {
  }

}
