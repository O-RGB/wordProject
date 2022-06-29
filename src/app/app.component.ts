import { Component, Inject, NgZone, ViewChild } from '@angular/core';
import { data, dataAll, listdata, select } from './data';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';

// export interface listdata {
//   category: string
//   list: data[]
// }
// export interface data {
//   name: string
//   price_fire: number
//   price_print: number
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wordProject';
  labelPosition: any = 'file'
  i: number = 0
  j: number = 0
  word: string = ""


  constructor(public dialog: MatDialog, private _ngZone: NgZone) { }
  @ViewChild('autosize', { static: false }) autosize: CdkTextareaAutosize | undefined;
  triggerResize() {
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize!.resizeToFitContent(true));
  }


  datatest: listdata[] = dataAll
  public openDialog(i: number, j: number): void {
    this.i = i
    this.j = j
    if (this.labelPosition == "*") {
      if (!this.datatest[this.i].list[this.j].selection.selection_all) {
        const dialogRef = this.dialog.open(DialogAnimationsExampleDialog,
          { data: { name: this.datatest[this.i].list[this.j].name }, });

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed', result);
          if (result == undefined) {
            this.datatest[this.i].list[this.j].selection.selection_all = false
            this.datatest[this.i].list[this.j].selection.selection_file = false
            this.datatest[this.i].list[this.j].selection.selection_print = false
            this.datatest[this.i].list[this.j].print_selection = 1
          }else{
            this.datatest[this.i].list[this.j].selection = result
            this.datatest[this.i].list[this.j].print_selection = 1
          }

        });
      }

    }



  }

  public upPrintNumber(i: number, j: number, updown:boolean){
    if(updown){
      this.datatest[i].list[j].print_selection ++
    }else{
      if(this.datatest[i].list[j].print_selection > 1)
      this.datatest[i].list[j].print_selection --
    }
  }

  public controlCreateword(){
    if (this.labelPosition == 'file' || this.labelPosition == 'print') {
      this.checkCreateWord()
    } else if (this.labelPosition == '*') {
      let tempFile = ""
      let tempPrint = ""

      this.labelPosition = 'file'
      let price = 0
      price += this.checkCreateWord(true)
      tempFile = this.word
      
      this.labelPosition = 'print'
      price += this.checkCreateWord(true)
      tempPrint = this.word

      this.labelPosition = '*'
      console.log("1===",tempFile)
      console.log("2===",tempPrint)
      console.log("3===",price)

      this.word = "------[รายการแบบไฟล์]-------\n"
      this.word += tempFile
      this.word += "\n\n"

      this.word += "------[รายการแบบปริ้น]-------\n"
      this.word += tempPrint
      this.word += "\n\n"

      this.word += "------[ราคารวมทั้งหมด]-------\n"
      this.word += price + ' บาทครับผม'
      this.word += "\n\n"
    }
  }

  public getStarMode(){
    if(this.labelPosition == '*'){

    }

  }


  public checkCreateWord(getPrice:boolean = false):any {
    this.word = '#รายการนะครับ\n'
    let width = 0
    let price = 0
    this.datatest.forEach((x: listdata) => {
      let isFull
      x.list.forEach((d: data) => {

        let checkByMode = false
        if (this.labelPosition == 'file') {
          checkByMode = d.selection.selection_file
        } else if (this.labelPosition == 'print') {
          checkByMode = d.selection.selection_print
        } else if (this.labelPosition == '*') {
          checkByMode = d.selection.selection_all
        }


        if (checkByMode) {
          this.word += '- ' + x.mode + ' ' + d.name +
            ((this.labelPosition == 'print') ? ((x.mode == 'ชิ้นงาน') ? ' (ชิ้นงาน)' : ' (ปริ้น)') : ' (ไฟล์)') + '\n'
          if(this.labelPosition == 'print') this.word += '* '+ d.print_selection + ' ชุด\n'
          this.word += 'ราคา '
          if (this.labelPosition == "file") {
            this.word += d.price_fire
            price += d.price_fire
          } else if (this.labelPosition == "print") {
            this.word += d.price_print * d.print_selection
            price += d.price_print * d.print_selection
          }
          this.word += ' บาท' + '\n\n'
          width += 1* d.print_selection

        }
      })
    })

    if (this.labelPosition == 'print' || this.labelPosition == '*') {
      this.word += '- ค่าส่ง' + '\n'
      let price_print = (width <= 1) ? 30 : (width <= 2) ? 40 : (width <= 3) ? 45 : (width <= 4) ? 50 : (width <= 5) ? 60 : 60
      this.word += 'ราคา ' + price_print + ' บาท \n\n'
      price += price_print
    }

    this.word += '- ราคารวม\n'
    this.word += price + ' บาทครับผม\n'

    if(getPrice) return price
  }



  public clean() {
    this.word = ''
    this.datatest.forEach((x: listdata) =>
      x.list.forEach((d: data) => {
        d.selection.selection_all = false
        d.selection.selection_file = false
        d.selection.selection_print = false
        d.print_selection = 1
        console.log(d)
      }))
  }


  newMes: string = 'คัดลอก'
  copyMessage(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.word;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.newMes = "Copy!!"
    setTimeout(() => {
      this.newMes = 'คัดลอก'
    }, 1000);
  }

}


@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: './dialog-animations-example-dialog.html',
})
export class DialogAnimationsExampleDialog {
  select:select = {
    selection_all: false,
    selection_file: false,
    selection_print: false
  }
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>, @Inject(MAT_DIALOG_DATA) public data: any,) { }
  closeDialog(mode: string) {
    if(mode == 'file'){
      this.select.selection_file = true
      this.select.selection_print = false
    }else if(mode == 'print'){
      this.select.selection_file = false
      this.select.selection_print = true
    }else if(mode == '*'){
      this.select.selection_file = true
      this.select.selection_print = true
    }

    this.select.selection_all = true

    this.dialogRef.close(this.select);
  }
}