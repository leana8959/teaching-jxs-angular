import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button'

import { PokeapiService } from './services/pokemon-api.service';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonInput } from './pokemon-input/pokemon-input.component';
import { FilterPokemonPipe } from './filter-pokemon.pipe';
import { PokemonInfo } from './pokemon-info/pokemon-info.component';


@NgModule({
  declarations: [
    AppComponent,
    PokemonInput,
    FilterPokemonPipe,
    PokemonInfo
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(),
    PokeapiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
