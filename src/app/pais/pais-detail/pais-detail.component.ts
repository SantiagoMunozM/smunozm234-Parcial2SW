import { Component, Input, OnInit } from '@angular/core';
import { PaisModel } from '../pais-model';

@Component({
  selector: 'app-pais-detail',
  templateUrl: './pais-detail.component.html',
  styleUrls: ['./pais-detail.component.css'],
  standalone: false,
})
export class PaisDetailComponent implements OnInit {

  @Input() pais!: PaisModel;

  constructor() { }

  ngOnInit() {
  }

}
