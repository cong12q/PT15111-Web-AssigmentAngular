import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenreService } from 'src/app/_services/genre.service';

@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent implements OnInit {

 genreID=0;
  newName="";
  genres=[];
  constructor(
    private route: ActivatedRoute,
    private GenreService: GenreService
  ) { }

  ngOnInit(): void {
    this.genreID = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getGenre();
  }

  getGenre(){
    this.GenreService.getGenre().subscribe(data=>{
      console.log(data);
      this.genres=data;
    })
  }
  addGenre(){
    const data = {
      name: this.newName
    };
    this.GenreService.addGenre(data)
    .subscribe((obj: any) => {
      console.log(obj);
      this.genres.push(obj);
      this.newName = "";
    })
  }

}
