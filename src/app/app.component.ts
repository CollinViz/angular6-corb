import { Component, OnInit } from '@angular/core';
import { PhpCrudApiService } from './php-crud-api.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  displayedColumns: string[] = ['id', 'name'];
  dataSource:any;
  NewName:string="";
  constructor(private api:PhpCrudApiService ) { 
    this.loadDataGird();
  }
  loadDataGird(){
    this.api.getTableData("categories","").subscribe((categories:any)=>{
      this.dataSource = categories.records;
    })
  }
  ngOnInit() {

  }

  addNoError(){

    if(this.NewName!=""){
      this.api.CreateTableData("categories",{id:0,name:this.NewName}).subscribe((dataID)=>{
        this.loadDataGird();
        this.NewName="";
      })
    }else{
      console.log("No Cat found");
      
    }
  }
  addError(){
    if(this.NewName!=""){
      this.api.CreateTableData("categories",{id:0,name:this.NewName,SomeOther:"Stuff not need"}).subscribe((dataID)=>{
        this.loadDataGird();
        this.NewName="";
      })
    }else{
      console.log("No Cat found");
    }
  }
}
