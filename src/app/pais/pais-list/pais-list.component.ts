import { Component, Input, OnInit } from '@angular/core';
import { PaisModel } from '../pais-model';
import { PaisService } from '../pais.service';

@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html',
  styleUrls: ['./pais-list.component.css'],
  standalone: false,
})
export class PaisListComponent implements OnInit {

  paises: Array<PaisModel> = [];
  selectedPais!: PaisModel;
  isSelected: boolean = false;
  oldestPaisName: string = "";
  oldestPaisYear: number = 9999
  

  constructor(private paisService: PaisService) { }

  ngOnInit() {
    this.getPaises();
  }

  onSelected(paisDetail: PaisModel) {
    this.selectedPais = paisDetail;
    this.isSelected = true;
  }

  getPaises(): void {
    this.paisService.getPaises().subscribe(data =>{ this.paises = data; this.getOldestPais()})
  ;
  }

  getOldestPais(): void {
    let biggestDifference = 0;
    let actualPais = this.paises[0]
    for (let index = 0; index < this.paises.length; index++) {
      let pais: PaisModel = this.paises[index];
      let dif = 2025 - pais.formation_year;
      if (dif> biggestDifference){
        actualPais = pais;
        biggestDifference = dif;
      }
    }
    this.oldestPaisName = actualPais.name;
    this.oldestPaisYear = actualPais.formation_year;
  }

  

}
