import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: any[];
  constructor(private service: MoviesService, private activatedRoute: ActivatedRoute ) { }
  
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(queryResults=>{
      let q = queryResults['q'];
      this.service.searchMovies(q).subscribe(res=>this.movies=res.Search);
    }
    )
  }

}
