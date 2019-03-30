import { Component, OnInit } from '@angular/core';
import {AlertSenderService} from "../../../services/alert-sender.service";
import {PlayGameService} from "../../../services/play-game.service";

@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.less']
})
export class AlertBoxComponent implements OnInit {








  constructor(public ats:AlertSenderService) {
  }




  ngOnInit() {
  }

}
