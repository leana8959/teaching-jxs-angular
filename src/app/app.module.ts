import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button'

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonInput } from './pokemon-input/pokemon-input.component';
import { FilterPokemonPipe } from './filter-pokemon.pipe';
import { PokeinfoComponent } from './pokeinfo/pokeinfo.component';


@NgModule({
  declarations: [
    AppComponent,
    PokemonInput,
    FilterPokemonPipe,
    PokeinfoComponent
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
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
