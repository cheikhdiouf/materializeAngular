import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemons';
import { Pokemon } from './pokemon';

@Injectable()
export class PokemonService {

  getPokemonList():Pokemon[]
  {
      return POKEMONS;
  }

  getPokemenById(pokemonId:number):Pokemon|undefined
  {
return POKEMONS.find(pokemon=>pokemon.id==pokemonId)
  }

  getPokemonTyList():String[]
  {
    return ["Feu","Plante","Poison","Eau","Insecte","Normal","Vol","Fée","Psy","Electrik","Combat","grey" ];
  }


}
 