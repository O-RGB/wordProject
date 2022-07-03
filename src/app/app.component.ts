import { Component, ElementRef, Inject, NgZone, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { filter, take, throttleTime } from 'rxjs/operators';
import { DialogSearchComponent } from './dialog-search/dialog-search.component';
import { CreateDataService } from './data/create-data.service';
import { productDataModel, productModel, promotion, select } from './data/data-interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ระบบสร้างรายการ';
  labelPosition: any = 'file'
  i: number = 0
  j: number = 0
  word: string = ""


  focus: string = ''
  load: boolean = false

  disableMode: boolean = false



  constructor(public dialog: MatDialog,
    private _ngZone: NgZone,
    private datService: CreateDataService,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router) {
    // setTimeout(() => {


    //   this.route.queryParams.subscribe(params => {
    //     this.focus = params['focus'];

    //     this.datatoy = this.datService.getDataToy(this.focus)
    //     this.dataWork= this.datService.getDataMain(this.focus)
    //     console.log(this.datatoy)
    //     this.load = true




    // });

    router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd))
      .subscribe(event => {
        console.log(event["url"])
        if (event["url"].length != 1) {
          this.focus = decodeURIComponent(event["url"].split("/")[1])
          console.log(this.focus)
          this.datatoy = this.datService.getDataToy(this.focus)
          this.dataWork = this.datService.getDataMain(this.focus)
          this.ShowData = this.dataWork
          this.disableMode = true
          this.load = true
        } else {
          this.datatoy = this.datService.getDataToy()
          this.dataWork = this.datService.getDataMain()
          this.ShowData = this.dataWork
          this.load = true
        }

        if (this.dataWork.length == 0) {
          if (this.datatoy.length != 0) {
            this.ShowData = this.datatoy
          }
        }
      });


    // }, 50);
    // this.load = true
  }
  ngOnInit(): void {
    // this.ShowData = this.dataWork
    // if (this.dataWork.length == 0) {
    //   if (this.datatoy.length != 0) {
    //     this.ShowData = this.datatoy
    //   }
    // }

  }

  selectionTemp: string[] = []
  @ViewChild('scrollOrder') private scrollOrder!: ElementRef;
  checkSelectionTemp() {
    let tempSelection: string[] = []
    setTimeout(() => {

      if (this.labelPosition == 'file') {
        this.ShowData.forEach((data: productModel) =>
          data.list.forEach((list: productDataModel) => {
            if (list.selection.selection_file) {
              tempSelection.push(list.name)
            }
          })
        )

      }else if (this.labelPosition == 'print') {
        this.ShowData.forEach((data: productModel) =>
          data.list.forEach((list: productDataModel) => {
            if (list.selection.selection_print) {
              tempSelection.push(list.name + "(ปริ้น)")
            }
          })
        )

      }else if (this.labelPosition == '*') {
        this.ShowData.forEach((data: productModel) =>
          data.list.forEach((list: productDataModel) => {
            if (list.selection.selection_print && list.selection.selection_file){
              tempSelection.push(list.name + "(ไฟล์)(ปริ้น)")
            } else if (list.selection.selection_print) {
              tempSelection.push(list.name + "(ไฟล์)")
            } else if (list.selection.selection_file) {
              tempSelection.push(list.name + "(ปริ้น)")
            }  
          })
        )

      }

      this.selectionTemp = tempSelection
      try {
        this.scrollOrder.nativeElement.scrollTop = this.scrollOrder.nativeElement.scrollHeight;
      } catch (err) { }

    }, 50);

  }

  snackBarIsShow: boolean = false
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
    this.snackBarIsShow = true
  }

  close() {
    this._snackBar.dismiss()
  }

  @ViewChild('autosize', { static: false }) autosize: CdkTextareaAutosize | undefined;
  triggerResize() {
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize!.resizeToFitContent(true));
  }


  ShowData: productModel[] = []
  datatoy: productModel[] = []
  dataWork: productModel[] = []
  public openDialog(i: number, j: number): void {
    this.i = i
    this.j = j
    this.checkSelectionTemp()
    if (this.labelPosition == "*") {
      if (!this.ShowData[this.i].list[this.j].selection.selection_all) {
        const dialogRef = this.dialog.open(DialogAnimationsExampleDialog,
          { data: { name: this.ShowData[this.i].list[this.j].name, printMode: this.ShowData[this.i].list[this.j].price_print }, });

        dialogRef.afterClosed().subscribe(result => {
          if (result == undefined) {
            this.ShowData[this.i].list[this.j].selection.selection_all = false
            this.ShowData[this.i].list[this.j].selection.selection_file = false
            this.ShowData[this.i].list[this.j].selection.selection_print = false
            this.ShowData[this.i].list[this.j].print_selection = 1
          } else {
            this.ShowData[this.i].list[this.j].selection = result
            this.ShowData[this.i].list[this.j].print_selection = 1
          }
          this.checkSelectionTemp()
        });
      }

    }

    if (this.ShowData[this.i].special) {
      if (this.ShowData[this.i].special == "NUMPXXX") {
        // this.openSnackBar('ทุก ๆ 10 หน่วยจะแถม 2 ฟรี','')
        this.NUMPXXX(this.ShowData[this.i])
      }
    }

  }

  NUMPXXXPROMO: number = 0
  NUMPXXX(data: productModel) {
    setTimeout(() => {

      let checkTrue = data.list.map((data: productDataModel) => data.selection.selection_file)
      let temp = checkTrue.some(x => x === true)
      if (temp) {
        let count = checkTrue.filter(Boolean).length;
        if (count == 50) {
          this.openSnackBar('🍀(50 หน่วย)🍀 🔥ราคาเพียง 390 บาท🔥', '')
          this.NUMPXXXPROMO = 110
          setTimeout(() => {
            this.close()
          }, 3000);
        } else {

          let config = [10, 22, 34, 48]
          if (config.includes(count)) {
            this.openSnackBar('🍀(' + (count.toString()[0]) + '0 หน่วย)🍀 \n🔥ทุก ๆ 10 หน่วยจะแถม 2 ฟรี🔥', '')
          } else if (config.includes(count - 1)) {
            this.openSnackBar('🍀(' + (count.toString()[0]) + '0 หน่วย) (แถม ' + (Number(count.toString()[1])) + ')🍀 \n🔥เลือกหน่วยฟรีอีก 1🔥', '')
          } else if (config.includes(count - 2)) {
            this.openSnackBar('🍀รายการตอนนี้🍀 (' + (count.toString()[0]) + '0 หน่วย) (แถม ' + (Number(count.toString()[1])) + ')', '')
            this.NUMPXXXPROMO = (Number(count.toString()[0]) * 2) * 10
            setTimeout(() => {
              this.close()
            }, 3000);
          } else {
            this.close()
            if (count < 12) {
              this.NUMPXXXPROMO = 0
            }
          }
        }
      }
      else {
        this.close()
        this.NUMPXXXPROMO = 0
      }
    }, 200);
  }

  selectAll(i: number) {
    let checkTrue = this.ShowData[i].list.map((data: productDataModel) => data.selection.selection_file)
    let temp = checkTrue.every(x => x === true)
    if (temp) {
      this.ShowData[i].list.forEach(data => { data.selection.selection_file = false })
      this.ShowData[i].selectAll = true
      this.NUMPXXXPROMO = 0


    } else {
      this.ShowData[i].list.forEach(data => { data.selection.selection_file = true })
      this.ShowData[i].selectAll = false
      if (this.ShowData[i].special) {
        this.NUMPXXX(this.ShowData[i])
      }
    }
  }


  dialogSearchShow: boolean = false
  public dialogSearch() {
    if (this.dialogSearchShow == false) {
      const dialogRef = this.dialog.open(DialogSearchComponent)

      this.dialogSearchShow = true
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          if (result.mode == 'ใบงาน') {
            this.onSeacrh(result.nameReturn)
          } else {
            this.showAllData(true)
            setTimeout(() => {
              this.onSeacrh(result.nameReturn)
            }, 200);
          }
        }
        this.dialogSearchShow = false
      })
    }
  }

  public upPrintNumber(i: number, j: number, updown: boolean) {
    if (updown) {
      this.ShowData[i].list[j].print_selection++
    } else {
      if (this.ShowData[i].list[j].print_selection > 1)
        this.ShowData[i].list[j].print_selection--
    }
  }

  public controlCreateword() {
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
    this.toWorking()
    this.copyMessage('')
  }

  public getStarMode() {
    if (this.labelPosition == '*') {

    }


  }

  isshowAll: boolean = false
  public showAllData(searchMode: boolean = false) {
    if (!searchMode) {
      if (!this.isshowAll) {
        this.ShowData = this.ShowData.concat(this.datatoy)
        this.isshowAll = true
      } else {
        this.ShowData = []
        this.ShowData = this.dataWork
        this.isshowAll = false
      }
    } else {
      if (!this.isshowAll) {
        this.ShowData = []
        this.ShowData = this.dataWork
        this.isshowAll = false
        this.ShowData = this.ShowData.concat(this.datatoy)
        this.isshowAll = true
      }
    }
  }




  public checkCreateWord(getPrice: boolean = false): any {
    this.word = '🔥🔥รายการนะครับ🔥🔥\n'
    let width = 0
    let price = 0
    this.ShowData.forEach((x: productModel, indexI: number) => {

      let dataPromotion = []
      let isFull
      let tempPrice = 0
      //special
      let detactNUMPXXXStart = 0//นับจำนวนบรรทัดเพื่อลบออกแล้วแสดงแค่ number
      let detactNUMPXXXEnd = 0//นับจำนวนบรรทัดเพื่อลบออกแล้วแสดงแค่ number
      x.list.forEach((d: productDataModel, index: number) => {


        let checkByMode = false
        if (this.labelPosition == 'file') {
          checkByMode = d.selection.selection_file
        } else if (this.labelPosition == 'print') {
          checkByMode = d.selection.selection_print
        } else if (this.labelPosition == '*') {
          checkByMode = d.selection.selection_all
        }


        if (checkByMode) {
          let pro: boolean[] = []
          let lastId: string = ""
          if (d.link != null) {
            let promotions = d.link
            promotions.forEach((element: promotion) => {
              element.id.forEach((id, index) => {
                this.ShowData.filter((data: productModel) => data.category == x.category).filter((list: any) => {
                  list.list.forEach((e: any) => {
                    if (e.id == id) {
                      if (e.selection.selection_file == true) {
                        pro.push(true)
                      }
                      else {
                        pro.push(false)
                      }
                    }
                  })
                })
                if (index == element.id.length - 1) {
                  lastId = id
                }
              })
            });
          }

          //special NUMPXXX
          // if (x.special) {
          //   if (x.special == "NUMPXXX") {
          //     if(detactNUMPXXXStart == 0)
          //     detactNUMPXXXStart = this.word.split("\n").length
          //   }
          // }


          this.word += '✅ ' + x.mode + ' ' + d.name +
            ((this.labelPosition == 'print') ? ((x.mode == 'ชิ้นงาน') ? ' (ชิ้นงาน)' : ' (ปริ้น)') : ' (ไฟล์)') + '\n'
          if (this.labelPosition == 'print') this.word += '🟩 ' + d.print_selection + ' ชุด\n'


          this.word += '🟩 ราคา '
          if (this.labelPosition == "file") {
            this.word += d.price_fire
            price += d.price_fire
            tempPrice += d.price_fire
          } else if (this.labelPosition == "print") {
            this.word += d.price_print * d.print_selection
            price += d.price_print * d.print_selection
          }
          this.word += ' บาท' + '\n'




          let checkPromotion = pro.every(v => v === true)
          let checkIdLast = d.id == lastId

          if (checkPromotion && checkIdLast && this.labelPosition == "file") {
            this.word += "💥" + d.link![0].name + " \n💥ลดราคาเหลือ " + d.link_price + " บาท\n\n"
            price -= tempPrice
            price += d.link_price!
          } else {
            this.word += '\n'
          }

          width += (1 * d.print_selection)
          // console.log(this.word)

          //special NUMPXXX
          // if (x.special) {
          //   if (x.special == "NUMPXXX") {
          //     detactNUMPXXXEnd  =  this.word.split("\n").length
          //   }
          // }

        }




      })

      // if(detactNUMPXXXStart > 0 && detactNUMPXXXEnd > 0){
      //   console.log(detactNUMPXXXStart)
      //   console.log(detactNUMPXXXEnd)

      //   let temp = this.word.split("\n")
      //   for (let index = detactNUMPXXXStart; index <= detactNUMPXXXEnd-1; index++) {
      //     temp.splice(index, 1);
      //   }
      // }

    })

    if (this.labelPosition == 'print' || this.labelPosition == '*') {
      this.word += '✅ ค่าส่ง' + '\n'
      console.log(width)
      let price_print = (width <= 1) ? 30 : (width <= 2) ? 40 : (width <= 3) ? 45 : (width <= 4) ? 50 : (width <= 5) ? 60 : 60
      console.log(price_print)

      this.word += '🟩 ราคา ' + price_print + ' บาท \n\n'
      price += price_print
    }

    //special
    if (this.NUMPXXXPROMO > 0) {
      price -= this.NUMPXXXPROMO
      this.word += "💥" + 'ส่วนลดราคาแถมตามหน่วย ' + (this.NUMPXXXPROMO.toString()[0]) + ' หน่วย' + " \n💥ลดราคา -" + this.NUMPXXXPROMO + " บาท\n\n"
      // let temp = this.word.split("\n")
    }

    //.
    //.
    //.
    //special

    this.word += '🍀 ราคารวม\n'
    this.word += '❤️' + price + ' บาทครับผม\n'

    if (getPrice) return price
  }

  defaultMode() {

  }



  public clean() {
    this.word = ''
    this.NUMPXXXPROMO = 0
    this.ShowData.forEach((x: productModel) => {
      x.selectAll = false
      x.list.forEach((d: productDataModel) => {
        d.selection.selection_all = false
        d.selection.selection_file = false
        d.selection.selection_print = false
        d.print_selection = 1
      })
    })
    this.checkSelectionTemp()
  }

  public toWorking() {
    setTimeout(() => {
      var e = document.getElementById("working")!
      e.scrollIntoView({ block: 'center', behavior: 'smooth' });

    }, 100);
  }

  public toTop() {
    setTimeout(() => {
      var e = document.getElementById("top")!
      e.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }

  public onSeacrh(id: string) {
    var el = document.getElementById(id)!
    el.scrollIntoView({ block: 'center', behavior: 'smooth' })

    el.style.fontWeight = 'bold';
    el.style.backgroundColor = '#84FFAF';
    el.style.color = '#000000';
    setTimeout(() => {
      el.style.fontWeight = 'normal';
      el.style.backgroundColor = 'unset';
      el.style.color = '#A2A2A2';
    }, 2000);
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
    this.openSnackBar('🧡คัดลอกแล้ว!!🧡', '')
    setTimeout(() => {
      this.newMes = 'คัดลอก'
      this.close()
    }, 1000);
  }

}


@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: './dialog-animations-example-dialog.html',
})
export class DialogAnimationsExampleDialog {
  select: select = {
    selection_all: false,
    selection_file: false,
    selection_print: false
  }
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>, @Inject(MAT_DIALOG_DATA) public data: any,) { }
  closeDialog(mode: string) {
    if (mode == 'file') {
      this.select.selection_file = true
      this.select.selection_print = false
    } else if (mode == 'print') {
      this.select.selection_file = false
      this.select.selection_print = true
    } else if (mode == '*') {
      this.select.selection_file = true
      this.select.selection_print = true
    }

    this.select.selection_all = true

    this.dialogRef.close(this.select);
  }
}


