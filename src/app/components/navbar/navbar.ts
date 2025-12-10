import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router ,RouterLinkActive,RouterLink} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule,RouterLinkActive,NgIf,RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
     isLoggedIn = false;
     userName = '';

     constructor(private router:Router){}

     ngOnInit():void{
      const token = localStorage.getItem('token');
      const storedUser = localStorage.getItem('user');

      this.isLoggedIn = !!token;

      if(storedUser){
        const userObj = JSON.parse(storedUser);
        this.userName = userObj.name;
      }
     }

     logout(){
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.isLoggedIn = false;
      this.router.navigate(['/'])
     }
}
