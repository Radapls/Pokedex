import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

interface TEST {
    count: number;
    results: Array<{
        name: string;
        url: string;
    }>
}
@Injectable()
export class PokedexService {
    public _url: string = `https://pokeapi.co/api/v2/pokemon/?offset=20&limit=150`
    constructor(
        private http: HttpClient
    ) { }



    baseUrl = environment.baseUrl;

    public getAllPokemon(limit: string) {
        return this.http.get<TEST>(`${this.baseUrl}/pokemon/?offset=0&limit=${limit}`)
    }
    public getPokedex(name: string): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}/pokemon/${name}`);
    }

    public getPokemonName(index: number) {
        return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`)
    }
}


