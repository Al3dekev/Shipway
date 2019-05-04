import { Component, OnInit } from '@angular/core';
import {ArrayEntity} from "../ArrayEntity";

@Component({
  selector: 'app-action-box',
  templateUrl: './action-box.component.html',
  styleUrls: ['./action-box.component.less']
})
export class ActionBoxComponent extends ArrayEntity  implements OnInit{

  constructor() {
    super()
  }

  ngOnInit() {
  }

}
