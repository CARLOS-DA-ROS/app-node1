
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { PlatosService, InterfPlat} from '../../servicios/platos.service';

@Component({
    selector: 'app-body',
    styleUrls: ['./body.component.css'],
    templateUrl: './body.component.html'
})
export class BodyComponent implements OnInit{
    mostrar = false;
    platos:InterfPlat[] = [];
    constructor(private _platService:PlatosService,
                private _router:Router) {}
    ngOnInit(){this.platos = this._platService.getplatos();}
    }
      