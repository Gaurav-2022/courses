import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  imports: [CommonModule],
  templateUrl: './movie.html',
  styleUrl: './movie.scss',
})
export class Movie {

  movies:any[] = [];
  loading = true;

  constructor(private http:HttpClient,private router:Router){}

  ngOnInit(): void {
    
 
    
  }
}
