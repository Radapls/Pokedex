import { Component, ElementRef, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import { BusquedaPokemon, PokedexService } from './services/pokedex.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  public pokedex: any;
  public search: string = "";
  public pokemon: any;
  public buscar: any;
  
    

  constructor(private pokedexService: PokedexService ) {
    this.pokedexService.getPokedex(``).subscribe((resp: any)=>{
        console.log(resp)
        this.pokedex = resp
      })
    this.pokedexService.getPokedex  
  }

  public SearchPokemon(): void
  {
    this.pokemon = null
    console.log(this.search)
    this.pokedexService.getPokedex(this.search).subscribe(data => this.pokemon = data)
    console.log(this.pokemon)

  }

  public CallPokemon(pokemonName: string): void  {
    this.pokemon = null
    this.pokedexService.getPokedex(pokemonName).subscribe(data => this.pokemon = data)
  }
}

