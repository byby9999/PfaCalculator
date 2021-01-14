import { Injectable } from '@angular/core';
import { NormaJudet } from '../_models/NormaJudet';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Injectable({
  providedIn: 'root'
})
export class JudeteService {
list: NormaJudet[];
sublist: NormaJudet[];
constructor() { }

loadData(): NormaJudet[] {
  this.list = [
    {
      judet: 'Alba',
      norma: 30000,
      subnorme: []
    },
    {
      judet: 'Arad',
      norma: 45100,
      subnorme: [
        {
          desc: 'Orase',
           norma: 41800
        },
        {
          desc: 'Comune',
           norma: 39600
        }
      ]
    },
    {
      judet: 'Arges',
      norma: 30000,
      subnorme: []
    },
    {
      judet: 'Bacau',
      norma: 22800,
      subnorme: []
    },
    {
      judet: 'Bihor',
      norma: 65650,
      subnorme: []
    },
    {
      judet: 'Bistrita Nasaud',
      norma: 32900,
      subnorme: [
        {
          desc: 'Cartiere apartinand Mun. Bistrita',
          norma: 31200
        },
        {
          desc: 'Orase (Beclean, Nasaud, Singeorz-Bai)',
          norma: 26400
        },
        {
          desc: 'Cartiere apartinand oraselor',
          norma: 25800
        },
        {
          desc: 'Comune',
          norma: 25700
        },
      ]
    },
    {
      judet: 'Botosani',
      norma: 22800,
      subnorme: []
    },
    {
      judet: 'Brasov',
      norma: 40200,
      subnorme: [
        {
          desc: 'Municipiu neresedinta de judet',
          norma: 37200
        },
        {
          desc: 'Orase',
          norma: 35200
        },
        {
          desc: 'Comune, sate',
          norma: 33200
        }
      ]
    },
    {
      judet: 'Braila',
      norma: 35000,
      subnorme: [
        {
          desc: 'Orase',
          norma: 30000
        },
        {
          desc: 'Comune',
          norma: 25000
        }
      ]
    },
    {
      judet: 'Buzau + Rm. Sarat',
      norma: 32100,
      subnorme: [
        {
        desc: 'Orase in afara de Buzau si Rm. Sarat',
        norma: 30500
      },
      {
        desc: 'Comune',
        norma: 30400
      }]
    },
    {
      judet: 'Bucuresti',
      norma: 32000,
      subnorme: []
    },
    {
      judet: 'Caras Severin',
      norma: 25000,
      subnorme: []
    },
    {
      judet: 'Calarasi',
      norma: 22800,
      subnorme: []
    },
    {
      judet: 'Cluj',
      norma: 65500,
      subnorme: []
    },
    {
      judet: 'Constanta',
      norma: 80000,
      subnorme: []
    },
    {
      judet: 'Covasna',
      norma: 30000,
      subnorme: []
    },
    {
      judet: 'Dambovita',
      norma: 27000,
      subnorme: []
    },
    {
      judet: 'Dolj',
      norma: 36936,
      subnorme: []
    },
    {
      judet: 'Galati',
      norma: 30000,
      subnorme: []
    },
    {
      judet: 'Giurgiu',
      norma: 32450,
      subnorme: []
    },
    {
      judet: 'Gorj',
      norma: 25960,
      subnorme: []
    },
    {
      judet: 'Harghita',
      norma: 39600,
      subnorme: []
    },
    {
      judet: 'Hunedoara',
      norma: 40000,
      subnorme: []
    },
    {
      judet: 'Ialomita',
      norma: 27000,
      subnorme: []
    },
    {
      judet: 'Iasi',
      norma: 35000,
      subnorme: []
    },
    {
      judet: 'Ilfov',
      norma: 41000,
      subnorme: []
    },
    {
      judet: 'Maramures',
      norma: 32000,
      subnorme: []
    },
    {
      judet: 'Mehedinti',
      norma: 30000,
      subnorme: []
    },
    {
      judet: 'Mures',
      norma: 48750,
      subnorme: []
    },
    {
      judet: 'Neamt',
      norma: 30000,
      subnorme: []
    },
    {
      judet: 'Olt',
      norma: 55000,
      subnorme: []
    },
    {
      judet: 'Prahova',
      norma: 28000,
      subnorme: []
    },
    {
      judet: 'Satu Mare',
      norma: 47700,
      subnorme: []
    },
    {
      judet: 'Salaj',
      norma: 28300,
      subnorme: []
    },
    {
      judet: 'Sibiu',
      norma: 42500,
      subnorme: []
    },
    {
      judet: 'Suceava',
      norma: 39500,
      subnorme: []
    },
    {
      judet: 'Teleorman',
      norma: 27500,
      subnorme: []
    },
    {
      judet: 'Timis',
      norma: 43000,
      subnorme: []
    },
    {
      judet: 'Tulcea',
      norma: 22800,
      subnorme: []
    },
    {
      judet: 'Vaslui',
      norma: 28200,
      subnorme: []
    },
    {
      judet: 'Valcea',
      norma: 39300,
      subnorme: []
    },
    {
      judet: 'Vrancea',
      norma: 33400,
      subnorme: []
    }
  ];
  return this.list;
}
}
