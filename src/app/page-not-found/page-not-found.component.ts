
import { style } from '@angular/animations';
import { Component } from '@angular/core';

 @Component({
   selector: 'app-page-not-found',
   template:`<div class='center'>
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png"/>
    
         <p>Hey, cette page n'existe pas !</p>
         <a routerLink="/pokemon" class="waves-effect waves-teal btn-flat">
         <button type="button" class="btn btn-success"> Retourner à l' accueil</button>
        
         </a>
       </div>`
  // templateUrl: './page-not-found.component.html',
  //styleUrls: ['./page-not-found.component.css']
   

 })
 export class PageNotFoundComponent {

   constructor() { }


 }
