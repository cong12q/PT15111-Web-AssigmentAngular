import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { BookService } from 'src/app/_services/book.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  cateID=0;
  books=[];
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.cateID = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getBooks();
  }
getBooks(){
  this.bookService.getBooks().subscribe(data=>{
    console.log(data);
    this.books=data;
  })
}
}
