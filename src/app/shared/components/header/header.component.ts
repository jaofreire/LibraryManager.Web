import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] 
})
export class HeaderComponent {

  constructor(private route: Router){
  }

  navigateTo(path: string){
    this.route.navigate([path])
  }
}
