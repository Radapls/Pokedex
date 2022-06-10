import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BusquedaPokemon } from 'src/app/services/pokedex.services';

@Component({
  selector: 'app-poke-table',
  templateUrl: './poke-table.component.html',
  styleUrls: ['./poke-table.component.css']
})
export class PokeTableComponent implements OnInit {

  @Output()
  public pokemonName   = new EventEmitter<string>();

  public displayedColumns: string[] = ['name'];
  public data: any[] = [];
  public dataSource = new MatTableDataSource<any>(this.data);
  public pokedata = [];

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  
  constructor(private busquedapokemon: BusquedaPokemon) { }
  
  ngOnInit(): void {
    this.getPokemons();
  }

 public getPokemons(){

  
   let pokedata;

    for(let i = 1; i <= 150; i++){
      this.busquedapokemon.getPokemons(i).subscribe(
        res => {
          pokedata = {
            name: res.name
          };
          this.data.push(pokedata);
          this.dataSource = new MatTableDataSource<any>(this.data);
          this.dataSource.paginator = this.paginator; 
          console.log(res)

        }
      );
    }
  }

  getRow(row: any){
    this.pokemonName.emit(row.name)
  }
}
