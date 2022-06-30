import { Injectable } from '@angular/core';
import { product } from './data-class';

@Injectable({
  providedIn: 'root'
})
export class CreateDataService {

  private MainProduct:product[] = []
  private ToyProduct:product[] = []
  //รหัสสินค้า, ชื่อสินค้า, ราคาสินค้า, ราคาแบบปริ้น (ถ้ารับปริ้น || -1), Word โปรโมชัน (ถ้ามี), รหัสสินค้าที่ซื้อด้วยกัน (ถ้ามี), ราคาเมื่อซื้อตรงตามโปรโมชันแล้ว (ถ้ามี)
  private constructor() {
    this.createMainData()
    this.createToyData()
  }

  private createMainData(){
    var productTemp = new product('คณิตศาสตร์', 'ใบงาน')
    productTemp.createData('MATH001', 'คณิตศาสตร์ อ.1', 99, 240, "ซื้อคณิตศาสตร์ครบ 3 ชั้น", ["MATH001", "MATH002", "MATH003"], 280)
    productTemp.createData('MATH002', 'คณิตศาสตร์ อ.2', 99, 240, "ซื้อคณิตศาสตร์ครบ 3 ชั้น", ["MATH001", "MATH002", "MATH003"], 280)
    productTemp.createData('MATH003', 'คณิตศาสตร์ อ.3', 99, 240, "ซื้อคณิตศาสตร์ครบ 3 ชั้น", ["MATH001", "MATH002", "MATH003"], 280)
    this.MainProduct.push(productTemp)

    productTemp = new product('ใบงานพื้นฐาน', 'ใบงาน')
    productTemp.createData('ZIP001', 'พื้นฐาน อ.1', 99, 230, "ซื้อใบงานพื้นฐานครบ 3 ชั้น", ["ZIP001", "ZIP002", "ZIP003"], 280)
    productTemp.createData('ZIP002', 'พื้นฐาน อ.2', 99, 240, "ซื้อใบงานพื้นฐานครบ 3 ชั้น", ["ZIP001", "ZIP002", "ZIP003"], 280)
    productTemp.createData('ZIP003', 'พื้นฐาน อ.3', 99, 240, "ซื้อใบงานพื้นฐานครบ 3 ชั้น", ["ZIP001", "ZIP002", "ZIP003"], 280)
    this.MainProduct.push(productTemp)

    productTemp = new product('ใบงานลีลามือ', 'ใบงาน')
    productTemp.createData('HAND001', 'ใบงานลีลามือ', 99, 230)
    productTemp.createData('HAND002', 'ใบงานลีลามือ (ชุด 2)', 69)
    this.MainProduct.push(productTemp)

    productTemp = new product('ใบงานเชาว์ปัญญา', 'ใบงาน')
    productTemp.createData('PROB001', 'เชาว์ปัญญา อ.1', 99, -1, "ซื้อคณิตศาสตร์ครบ 3 ชั้น", ["PROB001", "PROB002", "PROB003"], 280)
    productTemp.createData('PROB002', 'เชาว์ปัญญา อ.2', 99, -1, "ซื้อคณิตศาสตร์ครบ 3 ชั้น", ["PROB001", "PROB002", "PROB003"], 280)
    productTemp.createData('PROB003', 'เชาว์ปัญญา อ.3', 99, -1, "ซื้อคณิตศาสตร์ครบ 3 ชั้น", ["PROB001", "PROB002", "PROB003"], 280)
    this.MainProduct.push(productTemp)

    productTemp = new product('ใบงานภาษาไทย', 'ใบงาน')
    productTemp.createData('TH001', 'พื้นฐาน ภาษาไทย', 99, 240)
    productTemp.createData('TH002', 'คำพื้นฐานภาษาไทย (เขียนเอง)', 99, 149, "ซื้อคำพื้นฐานภาษาไทยครบ 2 เรื่อง", ["TH002", "TH003"], 99)
    productTemp.createData('TH003', 'คำพื้นฐานภาษาไทย (เส้นประ)',  99, 149, "ซื้อคำพื้นฐานภาษาไทยครบ 2 เรื่อง", ["TH002", "TH003"], 99)
    productTemp.createData('TH004', 'แบบฝึกหัดประสมคำพื้นฐาน', 29)
    this.MainProduct.push(productTemp)

    productTemp = new product('ใบงานภาษาไทย', 'ใบงาน')
    productTemp.createData('ENG001', 'คำพื้นฐานอังกฤษ (เขียนเอง)', 99, 149, "ซื้อคำพื้นฐานอังกฤษครบ 2 เรื่อง", ["ENG001", "ENG002"], 99)
    productTemp.createData('ENG002', 'คำพื้นฐานอังกฤษ (เส้นประ)', 99, 149, "ซื้อคำพื้นฐานอังกฤษครบ 2 เรื่อง", ["ENG001", "ENG002"], 99)
    this.MainProduct.push(productTemp)

    productTemp = new product('แบบฝึกหัดพื้นฐาน', 'ใบงาน')
    productTemp.createData('SOL001', 'แบบฝึกหัดคัด ก - ฮ', 40)
    productTemp.createData('SOL002', 'แบบฝึกหัดคัด A - B', 30)
    productTemp.createData('SOL003', 'แบบฝึกหัดคัด 1 - 10', 20)
    productTemp.createData('SOL004', 'แบบฝึกหัดคัด 1 - 100', 59)
    this.MainProduct.push(productTemp)
  }

  private createToyData(){
    var productTemp = new product('ไม้บรรทัด', 'สื่อการสอน')
    productTemp.createData('TOYS001', 'ไม้บรรทัดสระไทย', 50, 259)
    productTemp.createData('TOYS002', 'ไม้บรรทัดภาษาอังกฤษ', 50, 259)
    productTemp.createData('TOYS003', 'ไม้บรรทัดฝึกคูณ', 50, 259)
    this.ToyProduct.push(productTemp)

    var productTemp = new product('บิงโก', 'สื่อการสอน')
    productTemp.createData('BIN001', 'บิงโก การบวก', 38, 259)
    productTemp.createData('BIN002', 'บิงโก การลบ', 38, 259)
    productTemp.createData('BIN003', 'บิงโก การคูณ', 38, 259)
    productTemp.createData('BIN004', 'บิงโก การหาร', 38, 259)
    productTemp.createData('BIN005', 'บิงโก การคูณหารเศษส่วน', 38, 259)
    productTemp.createData('BIN006', 'บิงโก การบวกลบเศษส่วน', 38, 259)
    productTemp.createData('BIN007', 'บิงโก การบวกลบทศนิยม', 38, 259)
    productTemp.createData('BIN008', 'บิงโก ความสัมพันธ์เศษส่วนทศนิยม', 38, 259)
    productTemp.createData('BIN009', 'บิงโก จำนวนเฉพาะ', 38, 259)
    productTemp.createData('BIN010', 'บิงโก จำนวนนับ', 38, 259)
    productTemp.createData('BIN011', 'บิงโก ร้อยละ', 38, 259)
    productTemp.createData('BIN012', 'บิงโก ปริมาตรทรงสี่เหลี่ยมมุมฉาก', 38, 259)
    productTemp.createData('BIN013', 'บิงโก พยัญชนะไทย', 38, 259)
    productTemp.createData('BIN014', 'บิงโก อักษรภาษาอังกฤษ', 38, 259)
    this.ToyProduct.push(productTemp)

    var productTemp = new product('โดมิโน', 'สื่อการสอน')
    productTemp.createData('DOBI001', 'โดมิโน การบวก', 38, 129)
    productTemp.createData('DOBI002', 'โดมิโน การลบ', 38, 129)
    productTemp.createData('DOBI003', 'โดมิโน การคูณ', 38, 129)
    productTemp.createData('DOBI004', 'โดมิโน การหาร', 38, 129)
    productTemp.createData('DOBI005', 'โดมิโน กระจาย', 38, 129)
    productTemp.createData('DOBI006', 'โดมิโน เงา', 38, 129)
    productTemp.createData('DOBI007', 'โดมิโน เงิน', 38, 129)
    productTemp.createData('DOBI008', 'โดมิโน การคูณหารทศนิยม', 38, 129)
    productTemp.createData('DOBI009', 'โดมิโน การบวกลบทศนิยม', 38, 129)
    productTemp.createData('DOBI010', 'โดมิโน คณิตศาสตร์อนุบาล', 38)
    productTemp.createData('DOBI011', 'โดมิโน ทศนิยม', 38, 129)
    productTemp.createData('DOBI012', 'โดมิโน รูปทรง 2D', 38, 129)
    productTemp.createData('DOBI013', 'โดมิโน รูปทรง 3D', 38, 129)
    productTemp.createData('DOBI014', 'โดมิโน เวลา', 38, 129)
    productTemp.createData('DOBI015', 'โดมิโน เศษส่วน', 38, 129)
    productTemp.createData('DOBI016', 'โดมิโน สมการ', 38, 129)
    productTemp.createData('DOBI017', 'โดมิโน สัตว์ ผัก ผลไม้', 38)
    this.ToyProduct.push(productTemp)

    var productTemp = new product('ธง', 'สื่อการสอน')
    productTemp.createData('TONG001', 'ธง A-Z (ใหม่)', 50)
    productTemp.createData('TONG002', 'ธง ก-ฮ (ใหม่)', 50)
    productTemp.createData('TONG003', 'ธง A-Z', 30)
    productTemp.createData('TONG004', 'ธง ก-ฮ', 30)
    productTemp.createData('TONG005', 'ธง ดาราศาสตร์', 30)
    productTemp.createData('TONG006', 'ธง ทศนิยม', 50)
    productTemp.createData('TONG007', 'ธง เรขาคณิตสองมิติ', 30)
    productTemp.createData('TONG008', 'ธง เศษส่วน', 50)
    productTemp.createData('TONG009', 'ธง สัตว์โลกน่ารัก', 50)
    this.ToyProduct.push(productTemp)
  }

  public getDataMain():product[]{
    return this.MainProduct
  }

  public getDataToy():product[]{
    return this.ToyProduct
  }
}
