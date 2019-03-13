import { Component, OnInit } from '@angular/core';
import {AlertSenderService} from "../../../services/alert-sender.service";

@Component({
  selector: 'enemy-ship',
  templateUrl: './enemy-ship.component.html',
  styleUrls: ['./enemy-ship.component.less']
})
export class EnemyShipComponent implements OnInit {

  constructor(private alSender:AlertSenderService) {
    this.alSender.addAlertInView("spawn");
  }

  ngOnInit() {
  }

}
