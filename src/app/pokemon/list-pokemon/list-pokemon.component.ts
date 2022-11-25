import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css'],
  //providers:[PokemonService]
})
export class ListPokemonComponent implements OnInit {
  pokemonList:Pokemon[];

  constructor(private router:Router,private pokemonService:PokemonService) {}

  ngOnInit(): void {
    this.pokemonList=this.pokemonService.getPokemonList();
  }

  gotoPokemon(pokemon:Pokemon)
  {
    this.router.navigate(["/pokemon",pokemon.id]);
    
  }
}
