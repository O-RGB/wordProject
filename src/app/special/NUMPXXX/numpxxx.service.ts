import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { productDataModel, productModel } from 'src/app/data/data-interface';

@Injectable({
  providedIn: 'root'
})
export class NUMPXXXService {
  NUMPXXXPROMO: number = 0;

  constructor(private _snackBar: MatSnackBar) { }

  snackBarIsShow:boolean = false
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
    this.snackBarIsShow = true
  }

  close(){
    this._snackBar.dismiss()
  }

  NUMPXXX(data:productModel):number{
    // setTimeout(() => {
      this.NUMPXXXPROMO = 0
      let checkTrue = data.list.map((data:productDataModel) => data.selection.selection_file)
      let temp = checkTrue.some(x => x === true)
      if(temp)
      {
        let count = checkTrue.filter(Boolean).length;
        if(count == 50){
          this.openSnackBar('🍀(50 หน่วย)🍀 🔥ราคาเพียง 390 บาท🔥','')
          this.NUMPXXXPROMO = 110
          setTimeout(() => {
            this.close()
          }, 3000);
        }else{
          this.NUMPXXXPROMO = 0
          let config = [10,22,34,48]
          if(config.includes(count)){
            this.openSnackBar('🍀('+(count.toString()[0])+'0 หน่วย)🍀 \n🔥ทุก ๆ 10 หน่วยจะแถม 2 ฟรี🔥','')
          }else if(config.includes(count-1)){
            this.openSnackBar('🍀('+(count.toString()[0])+'0 หน่วย) (แถม '+(Number(count.toString()[1]))+')🍀 \n🔥เลือกหน่วยฟรีอีก 1🔥','')
          }else if(config.includes(count-2)){
            this.openSnackBar('🍀รายการตอนนี้🍀 ('+(count.toString()[0])+'0 หน่วย) (แถม '+(Number(count.toString()[1]))+')','')
            this.NUMPXXXPROMO = (Number(count.toString()[0])*2)*10
            setTimeout(() => {
              this.close()
            }, 3000);
          }else{
            this.close()
            this.NUMPXXXPROMO = 0
          }
        }
      }
      else{
        this.close()
        this.NUMPXXXPROMO = 0
      }
      return this.NUMPXXXPROMO
    // }, 200);
    // return 0
  }
}
