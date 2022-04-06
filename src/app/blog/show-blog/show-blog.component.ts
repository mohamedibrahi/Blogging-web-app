import { Component, OnInit } from '@angular/core';
import { SharedService } from "src/app/shared.service";

@Component({
  selector: 'app-show-blog',
  templateUrl: './show-blog.component.html',
  styleUrls: ['./show-blog.component.scss']
})
export class ShowBlogComponent implements OnInit {
  blogList:any = [];
  modalTitle:any;
  activateAddEditBlogCom:boolean = false;
  blog:any;
  totalLength:any;
page:number=1;
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.refreshBlogList();
  }
  refreshBlogList() {
    this.sharedService.getBlogList().subscribe(data =>{
      this.blogList = data;
      this.totalLength=this.blogList.length;
    });
  }

  AddBlog(){
    this.blog={
      body:'',
      title:"",
      creationDate:""
    }
    this.modalTitle = "Add Blog";
    this.activateAddEditBlogCom = true;
  }

  EditBlog(item: any){
    this.blog = item;
    this.activateAddEditBlogCom = true;
    this.modalTitle = "Update Blog";
  }

  deleteClick(item: any){
    if(confirm('Are you sure??')){
      this.sharedService.deleteBlog(item.id).subscribe(data =>{
        alert(data.toString());
        this.refreshBlogList();
      })
    }
  }

  closeClick(){
    this.activateAddEditBlogCom=false;
    this.refreshBlogList();
  }

}
