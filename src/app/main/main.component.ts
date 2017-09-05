import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Lightbox } from 'angular2-lightbox';
import $ from "jquery";

//interface

interface NasaObjects {
  id: number,
  img_src: string,
  earth_date: string,
  camera: {
    name: string,
    full_name: string
  },
  rover: {
      id:number,
      launch_date: string,
      landing_date:string,
      name:string,
      status:string,
      max_sol: string
  }
}


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})



export class MainComponent implements OnInit {


  constructor(private HttpClient: HttpClient, private Lightbox: Lightbox) {}
//get objects
photos: NasaObjects[]

pictures: any[]


getNasaObjects(){
    
   $(".message p").text("");

    let $rover= $("#rover").val();
    let $sol= $("#sol").val();;
    let $camera=$("#camera").val();;

    //send headers
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', 'http://localhost:4200');
    
    this.HttpClient.get<[NasaObjects]>("https://api.nasa.gov/mars-photos/api/v1/rovers/"+ $rover+"/photos?sol="+ $sol +"&camera="+ $camera+"&api_key=L0OKi18jjqONwhq8KzImICmy4eOd2fnfe5rCOsnu",{headers}).subscribe((response)=>{

    
    //get the array into a var  
    let $nasaObjects= response["photos"];
    //loop and push to the photos property

    //init the property photos
    this.photos=[];
    this.pictures=[];
    if($nasaObjects.length > 0){
      $nasaObjects.forEach(element => {
        this.photos.push(element);

        const pics={
        src:  element["img_src"]
        }

        this.pictures.push(pics);
      });
    }else{
      $(".message p").text("No results found");
    }

    

   
    });


}
  open(index: number){
    this.Lightbox.open(this.pictures,index);
  }

  ngOnInit() {

  }


}