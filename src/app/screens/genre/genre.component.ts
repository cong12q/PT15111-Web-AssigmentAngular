import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { BookService } from 'src/app/_services/book.service';
@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
genreID=0;
genres=[];
books=[];
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.genreID = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getBooks();
  }


  getBooks(){
    this.bookService.getBooks().subscribe(data=>{
      this.books = data;
    })
  }



}
