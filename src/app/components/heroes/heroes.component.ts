import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe, heroesService } from '../servicios/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[]=[];

  constructor(private heroesService:heroesService, private router:Router) { 
    
  }

  ngOnInit(): void {

    this.heroes= this.heroesService.getData();

    console.log(this.heroes);

  }

  verHeroe(id:number){

    this.router.navigate(['/heroe',id]);

    console.log(id);
  }

}
