import {OnInit} from "@angular/core";
import {PlateauService} from "../../services/plateau.service";


export class EntitySpawner implements OnInit{


  constructor(private ps:PlateauService){

  }

  spawnShips(){
    //changing with turn
    this.ps.plateauDynamicSize.forEach(obj=>{
      if(obj.coo.col == 3 && obj.coo.row == 1){
        obj.status = 1;
      } else if(obj.coo.col == 3 && obj.coo.row == this.ps.rowSize){
      }

    })
  }


  /**
   * true = spawning in Upper Plateau
   * false: Lower Plateau
   * @param bool
   */
  spawnPlateauLocation(bool:boolean){

    let col = this.plateauTabSize[0];
    let dividedLength = (col-1)/2;
    let row = this.plateauTabSize[1];
    //let plateauLength = this._plateauDynamicSize.length;

    if(bool){
      let upperSide = dividedLength+1;
      console.log("spawnPlateauLocation TRUE: "+upperSide);
      return upperSide;
    } else{
      let lowerSide = ((col*row)-(dividedLength));
      console.log("spawnPlateauLocation FALSE: "+lowerSide);
      return lowerSide;
    }
  }


  ngOnInit(): void {

  }

}
