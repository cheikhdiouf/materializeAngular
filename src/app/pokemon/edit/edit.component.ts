import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit',
  //templateUrl: './edit.component.html',
  template:`<h2 class="center"> Editer{{pokemon?.name}}</h2>
  <p *ngIf="pokemon" class="center">
      <img [src]="pokemon.picture">
  </p>
  <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,

  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  pokemon:Pokemon|undefined;
  constructor(private pokemonService:PokemonService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const pokemonId:string|null=this.route.snapshot.paramMap.get("id");

    if(pokemonId)
    {
      this.pokemon=this.pokemonService.getPokemenById(+pokemonId)
    }
    else{
      this.pokemon=undefined;
    }
  }
}
