import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";
import { MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'homecomponent',
  imports: [RouterOutlet, RouterLink, MatIconModule],
  templateUrl: './homecomponent.html',
  styleUrl: './homecomponent.css'
})
export class Homecomponent {
   imagePath: string = "images/pc2.jpg";
   imageUrl: string = "images/picture1.png";
  imgUrl: string = "images/pc4.jpg";
   imageSource: string = "images/pc1.jpg";
   imagepath: string = "images/bannerimage1.png";
  

}
