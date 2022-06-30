import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { dataAll, dataToy, listdata } from '../data';

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

  dataShow:listdata[] = []
  newCategoray:number = 0
  dataReturn:dataReturn = {
    mode: '',
    nameReturn: ''
  }
  constructor(public dialogRef: MatDialogRef<DialogSearchComponent>, @Inject(MAT_DIALOG_DATA) public data: any,) { 
    this.dataShow = this.getData()
    this.newCategoray = dataAll.length-1
  }
  ngOnInit(): void {
  
  }

  closeDialog(name:string,mode:number) {
    if(name != null && mode != null){
      this.dataReturn.mode = (mode >= this.newCategoray)?"สื่อการสอน":"ใบงาน"
      this.dataReturn.nameReturn = name
      this.dialogRef.close(this.dataReturn);
    }
  }

  getData():listdata[]{

    let dataShow:listdata[] = []
    dataAll.forEach((element:listdata) => {
      dataShow.push(element)
    });
    dataToy.forEach((element:listdata) => {
      dataShow.push(element)
    });

    return dataShow
  }
}
