import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateDataService } from '../data/create-data.service';
import { productModel } from '../data/data-interface';


export interface dataReturn{
  mode:string
  nameReturn:string
}

@Component({
  selector: 'app-dialog-search',
  templateUrl: './dialog-search.component.html',
  styleUrls: ['./dialog-search.component.css']
})
export class DialogSearchComponent implements OnInit {

  dataShow:productModel[] = []
  newCategoray:number = 0
  dataReturn:dataReturn = {
    mode: '',
    nameReturn: ''
  }
  constructor(public dialogRef: MatDialogRef<DialogSearchComponent>, @Inject(MAT_DIALOG_DATA) public data: any,private dataService:CreateDataService) { 
    this.dataShow = this.getData()
    this.newCategoray = this.dataService.getDataMain().length-1
  }
  ngOnInit(): void {
  
  }

  closeDialog(name:string,mode:number,setMode?:string) {
    console.log(name,mode)
    if(name != null && mode != null && mode != -1){
      this.dataReturn.mode = (mode >= this.newCategoray)?"สื่อการสอน":"ใบงาน"
      this.dataReturn.nameReturn = name
      this.dialogRef.close(this.dataReturn);
    }
    else if(setMode){
      this.dataReturn.mode = setMode
      this.dataReturn.nameReturn = name
      this.dialogRef.close(this.dataReturn);
    }
  }

  getData():productModel[]{

    let dataShow:productModel[] = []
    this.dataService.getDataMain().forEach((element:productModel) => {
      dataShow.push(element)
    });
    this.dataService.getDataToy().forEach((element:productModel) => {
      dataShow.push(element)
    });

    return dataShow
  }
}
