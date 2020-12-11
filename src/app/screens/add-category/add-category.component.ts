import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/_services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  cateID=0;
  newCateName="";
  cates=[];
  index=0;
  constructor(
    private route: ActivatedRoute,
    private CateService: CategoryService
  ) { }

  ngOnInit(): void {
    this.cateID = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getCate();
  }

  getCate(){
    this.CateService.getCategory().subscribe(data=>{
      console.log(data);
      this.cates=data;
    })
  }
  addCate(){
    const data = {
      name: this.newCateName
    };
    this.CateService.addCategory(data)
    .subscribe((obj: any) => {
      console.log(obj);
      this.cates.push(obj);
      this.newCateName = "";
    })
  }
      
    
}
