import {OnInit} from "@angular/core";
import {PlateauService} from "../../services/plateau.service";
import {TurnService} from "../../services/turn.service";


export class EntitySpawner implements OnInit{


  constructor(private ps:PlateauService, private ts:TurnService){

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
   *
   *
   * Plateau Status:
   * 0: FreeSpace
   * 1: PlayerShip
   * 2: EnemyShip
   * 3: Movement Action btn
   * 4: Attack Action btn
   *
   * @param numEntityTurn
   */
  spawnShipOnPlateau(numEntityTurn:number){


    this.ps.plateauDynamicSize.forEach(obj =>{

    });
    //let plateauLength = this._plateauDynamicSize.length;

    this.ps.plateauDynamicSize.forEach(obj =>{
      if(numEntityTurn == this.ts.PlayerShipTurn && obj.coo.col == this.ps.middleRowNumber && obj.coo.row == 1){
        console.log("spawnPlateauLocation TRUE: ");

        obj.status = this.ts.PlayerShipTurn;
      } else if(numEntityTurn == this.ts.EnemyShipTurn && obj.coo.col == this.ps.middleRowNumber && obj.coo.row == this.ps.rowSize){
        console.log("spawnPlateauLocation TRUE: ");

        obj.status = this.ts.EnemyShipTurn;
      }
    });


  }


  spawnAttackBtn(){



    if("btn Attack in ActionBox selected"){

      this.ps.plateauDynamicSize.forEach(obj =>{

        //coo du ship (ou btn)
        //etudier les murs autour du ship
        //si has wall false, continuer
        //si has_wall true, checker chaque mur
        //si up = true, break
        //else, faire +1 sur la coo en question pour faire déployer le nouveau bouton
        //mettre la coo de objet nouvellement apparu comme coo de référence pour continuer la boucle et recommencer


        while("current btn.up" !== "obj.wall.up"){

        }


      });
      //up


    }


    //faire le systeme avec l'arret si mur sur un coté concerné du déplacement


    //var c+1 et r+1 pour chaque mises en place
    //affecter ça sur chaque boucle for, contenant un for each pour chercher la coo concerné et lui ajouter l'element
    //appliquer changement avec editLocation? dans ce cas ajouter les coo comme arg a editLocation
    if(""){

    }


    while(""){

    }

    this.ps.plateauDynamicSize.forEach(obj =>{

    })

  }

  spawnMoveBtn(){

  }


  ngOnInit(): void {

  }

}
