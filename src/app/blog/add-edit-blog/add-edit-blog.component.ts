import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from "src/app/shared.service";
@Component({
  selector: 'app-add-edit-blog',
  templateUrl: './add-edit-blog.component.html',
  styleUrls: ['./add-edit-blog.component.scss']
})
export class AddEditBlogComponent implements OnInit {

  @Input() blog:any;
  id:number = 0;
  title: string ="";
  body: string ="";
  creationDate:string="";

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.id = this.blog.id;
    this.title = this.blog.title;
    this.body = this.blog.body;
    this.creationDate = this.blog.creationDate;
  }
  addBlog(){
    var val = {id:this.id,
      title:this.title,
      body:this.body,
      creationDate:this.creationDate
    };
      this.service.addBlog(val).subscribe(res =>{
        alert(res.toString());
      })
  }

  updateBlog(){
    var val = {id:this.id,
      title:this.title,
      tody:this.body,
      creationDate:this.creationDate};
      this.service.updateBlog(val).subscribe(res =>{
        alert(res.toString());
    })
  }
}
