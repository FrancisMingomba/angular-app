import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";
import { Navbar } from "../navbar/navbar";

@Component({
  selector: 'homecomponent',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './homecomponent.html',
  styleUrl: './homecomponent.css'
})
export class Homecomponent {
   imagePath: string = "images/picture1.png";
   imageUrl: string = "images/picture1.png";
   imageSource: string = "images/image1.jpeg";
  imagepath: string = "images/bannerimage1.png";
  

}
