import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class PokedexService {
public _url: string = `https://pokeapi.co/api/v2/pokemon/`
    constructor(
        private http: HttpClient
    ) {
    }
    public getPokedex(name: string): Observable<any>{
        console.log(this._url + name);
        return this.http.get<any>(this._url + name);
    }
}

@Injectable()
export class BusquedaPokemon{
    
    baseUrl = environment.baseUrl;
        constructor(private http: HttpClient) { }

        getPokemons(index: number){
            return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`)
        }
        
    }