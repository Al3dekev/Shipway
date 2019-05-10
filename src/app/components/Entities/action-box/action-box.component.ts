import { Component, OnInit } from '@angular/core';
import {EntitySpawner} from "../entitySpawner";
import {ActionService} from "../../../services/action.service";

@Component({
  selector: 'app-action-box',
  templateUrl: './action-box.component.html',
  styleUrls: ['./action-box.component.less']
})
export class ActionBoxComponent implements OnInit{




  constructor(private entitySpawn:EntitySpawner, private actS:ActionService) {
  }

    AttackAction() {
      this.entitySpawn.spawnAttackBtn();

    }

    MovementAction(){

    }

    SkipAction(){

    }

  ngOnInit() {
  }

}
