import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { BookService } from 'src/app/_services/book.service';
import { CategoryService } from 'src/app/_services/category.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
bookID=0;
book=[];
cates=[];
  constructor(private route: ActivatedRoute,
    private BookService: BookService,
    ) { }

  ngOnInit(): void {
     // //lay id 
     this.bookID = parseInt(this.route.snapshot.paramMap.get('id'));
     this.getBooks();
  }

  getBooks(){
    this.BookService.getBooks().subscribe(books =>{
      console.log(books);
      this.book= books;
    })
  }

}
