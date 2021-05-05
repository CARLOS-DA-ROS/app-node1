import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { PlatosService, InterfPlat} from '../../servicios/platos.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './plato.component.html'
})

export class PlatoComponent {
  platos:InterfPlat[]= [];
  plato:any = {};
  constructor(private activatedRoute:ActivatedRoute,
              private _platService: PlatosService)
              {
                this.activatedRoute.params.subscribe(params => {
                this.plato = this._platService.getplato(params['id']);
               });
      };
  }


