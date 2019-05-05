import { Component, OnInit } from '@angular/core';
import {EntitySpawner} from "../entitySpawner";

@Component({
  selector: 'app-action-box',
  templateUrl: './action-box.component.html',
  styleUrls: ['./action-box.component.less']
})
export class ActionBoxComponent implements OnInit{




  constructor(private entitySpawn:EntitySpawner) {
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
