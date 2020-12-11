import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { heroesService } from '../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  
})
export class BuscadorComponent implements OnInit {


  heroes:any[]=[];

  parametro:string='';

  constructor(private activatedRoute:ActivatedRoute,private heroesService:heroesService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((paramns)=>{

      console.log(paramns['value']);

      this.parametro=paramns['value'];

      this.heroes = this.heroesService.buscarHeroes(paramns['value']);

      console.log(this.heroes);
    })
  }

}
