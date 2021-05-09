import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ActividadPersonaComponent } from './components/actividad-persona/actividad-persona.component';
import { CreateComponent } from './components/centro_medico/create/create.component';
import { ListComponent } from './components/centro_medico/list/list.component';
import { FormsModule } from '@angular/forms';
import { UpdateCentroMComponent } from './components/centro_medico/update-centro-m/update-centro-m.component';
import { DetalleCentroMComponent } from './components/centro_medico/detalle-centro-m/detalle-centro-m.component';
import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { CrearActividadComponent } from './components/actividad-persona/crear-actividad/crear-actividad.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ActividadPersonaComponent,
    CreateComponent,
    ListComponent,
    UpdateCentroMComponent,
    DetalleCentroMComponent,
    CrearActividadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
