import { Component } from '@angular/core';
import { PokedexService } from './services/pokedex.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public pokedex: any;
  public search: string = '';
  public pokemon: any;
  public buscar: any;

  constructor(private pokedexService: PokedexService) {}

  public SearchPokemon(): void {
    this.pokemon = null;
    this.pokedexService
      .getPokedex(this.search)
      .subscribe((data) => (this.pokemon = data));
  }

  public CallPokemon(pokemonName: string): void {
    this.pokemon = null;
    this.pokedexService
      .getPokedex(pokemonName)
      .subscribe((data) => (this.pokemon = data));
  }
}
