import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HousingLocation} from "../housinglocation";
import {RouterLink} from "@angular/router";

@Component({

  imports: [CommonModule, RouterLink],
  selector: 'app-housing-location',
  standalone: true,
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}

