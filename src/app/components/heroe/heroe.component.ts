import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {heroesService } from '../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',

})
export class HeroeComponent implements OnInit {


  heroe:any={};

  constructor(private heroesService:heroesService,private activatedRoute:ActivatedRoute) {

   this.activatedRoute.params.subscribe((params)=>{

    console.log(params['id']);

    this.heroe=this.heroesService.getHeroe(params['id']);

    console.log(this.heroe);
   })
   }

  ngOnInit(): void {
  }

}
