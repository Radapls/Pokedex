import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PokedexService } from 'src/app/services/pokedex.services';

@Component({
  selector: 'app-poke-table',
  templateUrl: './poke-table.component.html',
  styleUrls: ['./poke-table.component.css']
})
export class PokeTableComponent implements OnInit {

  @Output()
  public pokemonName = new EventEmitter<string>();

  public displayedColumns: string[] = ['name'];
  public dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  constructor(private pokeService: PokedexService) {}

  ngOnInit(): void {
    this.pokeService.getAllPokemon('151').subscribe(
      res => {
        // Update the dataSource with fetched data
        this.dataSource.data = res.results;
        // Assign the paginator
        this.dataSource.paginator = this.paginator;
      },
      err => console.error('Failed to fetch Pokémon data', err)
    );
  }

  getRow(row: any) {
    // Emit the selected Pokémon name
    this.pokemonName.emit(row.name);
  }
}
