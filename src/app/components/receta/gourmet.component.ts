import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatosService} from '../../servicios/platos.service';
@Component({
  selector: 'app-gourmet',
  templateUrl: './gourmet.component.html',
  styles: [
  ],
})
export class RecetaComponent implements OnInit {
  heroes:any[] = []
  constructor(private Rutas:ActivatedRoute,
              private _empleeService: PlatosService ) {
               }
  ngOnInit() {
    }
}
