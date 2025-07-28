import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';


import * as awesom from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
 mapMarker: any;
  building: any;
  mobile: any;
  email: any;
  birthday: any;
  badge: any;
  home: any;
    ngOnInit(): void {
    // this.mapMarker = awesom.faMapMarker;
    // this.building = awesom.faCity;
    // this.email = awesom.faMailBulk;
    // this.mobile = awesom.faMobile;
    // this.birthday = awesom.faBirthdayCake;
    // this.badge = awesom.faGraduationCap;
    // this.home = awesom.faLaptopHouse;
  }
}
