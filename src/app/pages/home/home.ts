import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit{

  movies:any[] = [];
  loading = true;

  constructor(private http:HttpClient,private router:Router){}

  ngOnInit(): void {
      this.http.get<any>('http://localhost:5001/api/movies')
    .subscribe((res)=>{
      this.movies = res;
    })
 
    
  }
  goToMovieDetail(data:any){
     this.router.navigate([`/movies/${data}`])
  }

}
