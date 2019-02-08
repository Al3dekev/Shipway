import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plateau',
  templateUrl: './plateau.component.html',
  styleUrls: ['./plateau.component.less']
})
export class PlateauComponent implements OnInit {





  private _plateauSize:number[] = [5,5];
  private _plateauDynamicallySize: Array<{id:number,status:number}> = [];



  constructor() { }

  /**
   * 0: FreeSpace
   * 1: Ship
   */
  transformPlateau(){
    let col = this.plateauSize[0];
    let row = this.plateauSize[1];

    let i = 0;
    let j = 0;
    let id = 0;
    let freeSpace = 0;

    for(i;i<col;i++){



      //row
      for(j=0;j<row;j++){
        id++;
        console.log(id);
        this.plateauDynamicallySize.push({
          id: id,
          status: freeSpace
        });
      }
      j=0;
    }


  }


  get plateauDynamicallySize(): Array<{ id: number; status: number }> {
    return this._plateauDynamicallySize;
  }

  set plateauDynamicallySize(value: Array<{ id: number; status: number }>) {
    this._plateauDynamicallySize = value;
  }

  shipMoving(){

  }


  get plateauSize(): number[] {
    return this._plateauSize;
  }

  set plateauSize(value: number[]) {
    this._plateauSize = value;
  }

  /*

    /!***
     * in tab,
     * 0: free square space
     * 1:ship in there
     *!/
    transformPlateau(){ // IN ARRAY

      let col = this.plateauSize[0];
      let row = this.plateauSize[1];

      console.log("varcol: "+col);
      console.log("varrow: "+row);

      // Should be updated to be more dynamic. That is the simplest solution
      //let tab:number[][] = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]; // 33
      let i=0;
      let j=0;

      let add = 0;

      //col
      for(i;i<col;i++){

        console.log("col iter: "+i);

        //row
        for(j=0;j<row;j++){
          console.log("row iter: "+j);
          this.plateauDynamicallySize[i][j] = add;
          //tab[i][j] = add;
          //console.log("tab["+(i)+"]["+(j)+"]= "+tab[i][j]);
          console.log("tab["+(i)+"]["+(j)+"]= "+this.plateauDynamicallySize[i][j]);
        }
        j=0;
      }


    }
  */

  ngOnInit() {
    this.transformPlateau();
  }

}
