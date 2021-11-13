import { Component } from '@angular/core';
import { Aboutusmodel } from 'src/models/Aboutus models';
import { CardsServices } from 'src/service/Cards.services';

 

@Component({
  selector: 'app-About',
  templateUrl: './app.About.html'
  
})
export class AppAbout {

 
  title = 'About';
    public carddata:any =[];
  
    constructor(private crd:CardsServices){}
    
  
    ngOnInit(){
      this.data();
  
    }
    cardObj: Aboutusmodel = new Aboutusmodel;
    cardsContainer:Aboutusmodel[]=[];
    data(){
      this.crd.getdata().subscribe((data:any)=>{
        this.carddata=data;
        for(let x of this.carddata) {
          this.cardObj=new Aboutusmodel();
          debugger;
          this.cardObj.Course=x.Course;
          this.cardObj.fee=x.fee;
          this.cardObj.Tenure=x.Tenure;
          //  this.cardObj.Exp=x.Exp;
          this.cardObj.Type=x.Type;

          this.cardsContainer.push(this.cardObj);
          console.log("card con.",this.cardsContainer);
          
        };
        console.log("data ",this.carddata);
        console.log("card obj",this.cardObj);

      })
  
    }
  
 
  }
  
