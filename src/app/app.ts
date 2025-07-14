
import { Component } from '@angular/core';
import { Navbar } from "./navbar/navbar";
import { Componentone } from "./componentone/componentone";
import { Componenttwo } from "./componenttwo/componenttwo";
import { Componenthree } from "./componenthree/componenthree";
import { Innercontainer } from "./innercontainer/innercontainer";
import { Line } from "./line/line";
import { Componentfour } from "./componentfour/componentfour";
import { Componentfive } from "./componentfive/componentfive";
import { Footercomponent } from "./footercomponent/footercomponent";
import { RouterOutlet, RouterLink } from '@angular/router';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
           
          ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-app';
}
