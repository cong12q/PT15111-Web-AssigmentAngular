import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/_services/category.service';
import { GenreService } from 'src/app/_services/genre.service';

@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.css']
})
export class ClientLayoutComponent implements OnInit {

  cates=[];
  newCateName = "";
  books=[];
  genres=[];
  constructor(
    private genreService: GenreService,
    private cateService: CategoryService,
    ) { }

  ngOnInit(): void {
    this.getGenres()
  }

  getCates(){
    this.cateService.getCategory().subscribe(data => {
      console.log(data);
      this.cates = data;
    });
  }

  getGenres(){
    this.genreService.getGenre().subscribe(data => {
      console.log(data);
      this.genres = data;
    });
  }

}
