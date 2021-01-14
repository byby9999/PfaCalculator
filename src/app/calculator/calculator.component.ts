import { Component, OnInit } from '@angular/core';
import { NormaJudet } from '../_models/NormaJudet';
import { JudeteService } from '../_services/Judete.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  judete: NormaJudet[];
  brutLunar: number;
  norma: number;
  normaSub: number;
  minEconomie: number;
  mineconomie12: number;
  cas: number;
  cass: number;
  impozitVenit: number;
  totalTaxe: number;
  servers: any;

  constructor(private judService: JudeteService) {
  }

  ngOnInit() {
    this.brutLunar = 5000;
    this.minEconomie = 2230; // 2020
    this.mineconomie12 = 12 * this.minEconomie;
    this.judete = this.judService.loadData();
    this.norma = 22800;

    this.servers = [
      {
          name: 'server1',
          versions:
          [
              '10.x'
          ]
      },
      {
          name: 'server2',
          versions:
          [
              '1', '2'
          ]
      }
  ]
  }

  calculateTaxes() {
    this.mineconomie12 = 12 * this.minEconomie;
    console.log('Min eco x 12 = ' + this.mineconomie12);
    this.cas = 0.25 * this.mineconomie12;
    this.cass = 0.1 * this.mineconomie12;
    this.impozitVenit = 0.1 * this.norma;
    this.totalTaxe = this.impozitVenit + this.cas + this.cass;
  }

  schimbaJudet(event: any) {
    console.log(event);
  }

  setNorma() {
    this.norma = +this.norma;
    this.calculateTaxes();
  }
}
