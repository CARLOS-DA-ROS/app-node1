
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//RUTAS
import { APP_ROUTING } from './app-routing.module';

//SERVICIOS
import {PlatosService} from './servicios/platos.service';

//PIPES
import { PassPipe } from './pass.pipe';

//COMPONENTES
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { PlatoComponent } from './components/plato/plato.component';
import { RecetaComponent } from './components/receta/gourmet.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    PlatoComponent,
    RecetaComponent,
    PassPipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule
  ],
  providers: [
    PlatosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
