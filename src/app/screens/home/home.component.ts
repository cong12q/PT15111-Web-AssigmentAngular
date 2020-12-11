import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/_services/book.service';
import { CategoryService } from '../../_services/category.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cates = [];
  newCateName = "";
  books=[]
  constructor(private cateService: CategoryService,
    private bookService: BookService,
    
    ) { }

  ngOnInit(): void {
    this.getCates(),
    this.getBooks()
  }

  getCates(){
    this.cateService.getCategory().subscribe(data => {
      console.log(data);
      this.cates = data;
    });
  }

  addCate(){
    const data = {
      name: this.newCateName
    };
    this.cateService.addCategory(data)
    .subscribe((obj: any) => {
      this.cates.push(obj);
      this.newCateName = "";
    })
  }

  getBooks(){
    this.bookService.getBooks().subscribe(data=>{
      console.log(data);
      this.books = data;
    })
  }

}
