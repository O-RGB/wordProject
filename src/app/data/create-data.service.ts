import { Injectable } from '@angular/core';
import { product } from './data-class';
import { productDataModel, productNode } from './data-interface';

@Injectable({
  providedIn: 'root'
})
export class CreateDataService {

  private MainProduct: product[] = []
  private ToyProduct: product[] = []
  private mode: string[] = ['ใบงาน', 'สื่อการสอน']
  //รหัสสินค้า, ชื่อสินค้า, ราคาสินค้า, ราคาแบบปริ้น (ถ้ารับปริ้น || -1), Word โปรโมชัน (ถ้ามี), รหัสสินค้าที่ซื้อด้วยกัน (ถ้ามี), ราคาเมื่อซื้อตรงตามโปรโมชันแล้ว (ถ้ามี)
  private constructor() {
    this.createMainData()
    this.createToyData()
  }

  private createMainData() {
    var productTemp = new product('คณิตศาสตร์', this.mode[0])
    productTemp.createData('MATH001', 'คณิตศาสตร์ อ.1', 99, 240, "ซื้อคณิตศาสตร์ครบ 3 ชั้น", ["MATH001", "MATH002", "MATH003"], 280)
    productTemp.createData('MATH002', 'คณิตศาสตร์ อ.2', 99, 240, "ซื้อคณิตศาสตร์ครบ 3 ชั้น", ["MATH001", "MATH002", "MATH003"], 280)
    productTemp.createData('MATH003', 'คณิตศาสตร์ อ.3', 99, 240, "ซื้อคณิตศาสตร์ครบ 3 ชั้น", ["MATH001", "MATH002", "MATH003"], 280)
    productTemp.createData('MATH004', 'คณิตศาสตร์ ป.1 (เทอม 1)', 150, 200,)
    productTemp.createData('MATH005', 'คณิตศาสตร์ ป.1 (เทอม 2)', 150, 200,)
    productTemp.createData('MATH006', 'คณิตศาสตร์ ป.6 (เทอม 1)', 100, 200,)
    productTemp.createData('MATH007', 'คณิตศาสตร์ ป.6 (เทอม 2)', 100, 200,)
    this.MainProduct.push(productTemp)

    productTemp = new product('ใบงานพื้นฐาน', this.mode[0])
    productTemp.createData('ZIP001', 'พื้นฐาน อ.1', 99, 230, "ซื้อใบงานพื้นฐานครบ 3 ชั้น", ["ZIP001", "ZIP002", "ZIP003"], 280)
    productTemp.createData('ZIP002', 'พื้นฐาน อ.2', 99, 240, "ซื้อใบงานพื้นฐานครบ 3 ชั้น", ["ZIP001", "ZIP002", "ZIP003"], 280)
    productTemp.createData('ZIP003', 'พื้นฐาน อ.3', 99, 240, "ซื้อใบงานพื้นฐานครบ 3 ชั้น", ["ZIP001", "ZIP002", "ZIP003"], 280)
    this.MainProduct.push(productTemp)

    productTemp = new product('ใบงานลีลามือ', this.mode[0])
    productTemp.createData('HAND001', 'ใบงานลีลามือ', 99, 230)
    productTemp.createData('HAND002', 'ใบงานลีลามือ (ชุด 2)', 69)
    this.MainProduct.push(productTemp)

    productTemp = new product('ใบงานเชาว์ปัญญา', this.mode[0])
    productTemp.createData('PROB001', 'เชาว์ปัญญา อ.1', 99, -1, "ซื้อคณิตศาสตร์ครบ 3 ชั้น", ["PROB001", "PROB002", "PROB003"], 280)
    productTemp.createData('PROB002', 'เชาว์ปัญญา อ.2', 99, -1, "ซื้อคณิตศาสตร์ครบ 3 ชั้น", ["PROB001", "PROB002", "PROB003"], 280)
    productTemp.createData('PROB003', 'เชาว์ปัญญา อ.3', 99, -1, "ซื้อคณิตศาสตร์ครบ 3 ชั้น", ["PROB001", "PROB002", "PROB003"], 280)
    this.MainProduct.push(productTemp)

    productTemp = new product('ใบงานภาษาไทย', this.mode[0])
    productTemp.createData('TH001', 'พื้นฐาน ภาษาไทย', 99, 240)
    productTemp.createData('TH002', 'คำพื้นฐานภาษาไทย (เขียนเอง)', 99, 149, "ซื้อคำพื้นฐานภาษาไทยครบ 2 เรื่อง", ["TH002", "TH003"], 99)
    productTemp.createData('TH003', 'คำพื้นฐานภาษาไทย (เส้นประ)', 99, 149, "ซื้อคำพื้นฐานภาษาไทยครบ 2 เรื่อง", ["TH002", "TH003"], 99)
    productTemp.createData('TH004', 'แบบฝึกหัดประสมคำพื้นฐาน', 29)
    productTemp.createData('TH005', 'การแต่งประโยค-ป.1-3', 69)
    this.MainProduct.push(productTemp)

    productTemp = new product('ใบงานภาษาอังกฤษ', this.mode[0])
    productTemp.createData('ENG001', 'คำพื้นฐานอังกฤษ (เขียนเอง)', 99, 149, "ซื้อคำพื้นฐานอังกฤษครบ 2 เรื่อง", ["ENG001", "ENG002"], 99)
    productTemp.createData('ENG002', 'คำพื้นฐานอังกฤษ (เส้นประ)', 99, 149, "ซื้อคำพื้นฐานอังกฤษครบ 2 เรื่อง", ["ENG001", "ENG002"], 99)
    this.MainProduct.push(productTemp)

    productTemp = new product('แบบฝึกหัดพื้นฐาน', this.mode[0])
    productTemp.createData('SOL001', 'แบบฝึกหัดคัด ก - ฮ', 40,60)
    productTemp.createData('SOL002', 'แบบฝึกหัดคัด A - B', 30,50)
    productTemp.createData('SOL003', 'แบบฝึกหัดคัด 1 - 10', 20,40)
    productTemp.createData('SOL004', 'แบบฝึกหัดคัด 1 - 100', 59,110)
    this.MainProduct.push(productTemp)

    productTemp = new product('ใบงานอนุบาล (เหมา)', this.mode[0])
    productTemp.createData('WALL001', 'คณิตศาสตร์ (เหมา)', 100, -1, "ซื้อครบทุกหมวด (เหมา)", ['WALL001', 'WALL002', 'WALL003', 'WALL004', 'WALL005', 'WALL006', 'WALL007'], 350)
    productTemp.createData('WALL002', 'หมวดภาษาไทย (เหมา)', 200, -1, "ซื้อครบทุกหมวด (เหมา)", ['WALL001', 'WALL002', 'WALL003', 'WALL004', 'WALL005', 'WALL006', 'WALL007'], 350)
    productTemp.createData('WALL003', 'วิทยาศาสตร์ (เหมา)', 100, -1, "ซื้อครบทุกหมวด (เหมา)", ['WALL001', 'WALL002', 'WALL003', 'WALL004', 'WALL005', 'WALL006', 'WALL007'], 350)
    productTemp.createData('WALL004', 'ภาษาอังกฤษ (เหมา)', 100, -1, "ซื้อครบทุกหมวด (เหมา)", ['WALL001', 'WALL002', 'WALL003', 'WALL004', 'WALL005', 'WALL006', 'WALL007'], 350)
    productTemp.createData('WALL005', 'คำพื้นฐานภาษาไทย (เหมา)', 100, -1, "ซื้อครบทุกหมวด (เหมา)", ['WALL001', 'WALL002', 'WALL003', 'WALL004', 'WALL005', 'WALL006', 'WALL007'], 350)
    productTemp.createData('WALL006', 'ศิลปะ เเละ แถม (เหมา)', 100, -1, "ซื้อครบทุกหมวด (เหมา)", ['WALL001', 'WALL002', 'WALL003', 'WALL004', 'WALL005', 'WALL006', 'WALL007'], 350)
    productTemp.createData('WALL007', 'บัตรคำ เเละ A-Z ก-ฮ ใหม่ (เหมา)', 100, -1, "ซื้อครบทุกหมวด (เหมา)", ['WALL001', 'WALL002', 'WALL003', 'WALL004', 'WALL005', 'WALL006', 'WALL007'], 350)
    this.MainProduct.push(productTemp)

    productTemp = new product('ในงานตามหน่วยอนุบาล', this.mode[0],"NUMPXXX")
    let tempPromo = ['NUMP001','NUMP002','NUMP003','NUMP004','NUMP005','NUMP006','NUMP007','NUMP008',
    'NUMP009','NUMP010','NUMP011','NUMP012','NUMP013','NUMP014','NUMP015','NUMP016','NUMP017','NUMP018',
    'NUMP019','NUMP020','NUMP021','NUMP022','NUMP023','NUMP024','NUMP025','NUMP026','NUMP027','NUMP028',
    'NUMP029','NUMP030','NUMP031','NUMP032','NUMP033','NUMP034','NUMP035','NUMP036','NUMP037','NUMP038',
    'NUMP039','NUMP040','NUMP041','NUMP042','NUMP043','NUMP044','NUMP045','NUMP046','NUMP047','NUMP048',
    'NUMP049','NUMP050',]
    productTemp.createData('NUMP001', '01 หน่วย แรกรับประทับใจ ปฐมนิเทศ', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP002', '02 หน่วย ตัวเรา', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP003', '03 หน่วย ต้นไม้ที่รัก', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP004', '04 หน่วย ฝนจ๋า', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP005', '05 หน่วย หนูน้อยน่ารัก', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP006', '06 หน่วย บ้านแสนสุข', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP007', '07 หน่วย ของเล่นของใช้', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP008', '08 หน่วย ไม้ดอกไม้ประดับ', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP009', '09 หน่วย วันเข้าพรรษา', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP010', '10 หน่วย สัตว์บก', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP011', '11 หน่วย สัตว์น้ำ', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP012', '12 หน่วย ปลอดโรคติดต่อ', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP013', '13 หน่วย พระคุณแม่', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP014', '14 หน่วย วิทยาศาสตร์น่ารู้', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP015', '15 หน่วย ผลไม้', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP016', '16 หน่วย เนื้อ นม ไข่', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP017', '17 หน่วย น้ำคือชีวิต', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP018', '18 หน่วย ข้าว', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP019', '19 หน่วย ผักสดสะอาด', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP020', '20 หน่วย แมลง', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP021', '21 หน่วย คมนาคม', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP022', '22 หน่วย การสื่อสาร', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP023', '23 หน่วย อากาศ', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP024', '24 หน่วย คณิตศาสตร์คิดสนุก', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP025', '25 หน่วย บุคคลที่ควรรู้จัก', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP026', '26 หน่วย วันลอยกระทง', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP027', '27 หน่วย พ่อผู้มีพระคุณ', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP028', '28 หน่วย ดิน หิน ทราย', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP029', '29 หน่วย เวลา', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP030', '30 หน่วย วันขึ้นปีใหม่', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP031', '31 หน่วย วันเด็กแห่งชาติ', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP032', '32 หน่วย วันครู', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP033', '33 หน่วย กลางวันกลางคืน', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP034', '34 หน่วย ฉันรักฤดูหนาว', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP035', '35 หน่วย ชุมชนที่รัก', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP036', '36 หน่วย เมืองไทยที่รัก', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP037', '37 หน่วย วันมาฆบูชา', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP038', '38 หน่วย วันสงกรานต์', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP039', '39 หน่วย ฤดูร้อนแสนสนุก', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP040', '40 หน่วย มดตัวน้อย', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP041', '41 หน่วย กล้วยน่ารู้', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP042', '42 หน่วย ขนาด รูปร่าง รูปทรง', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP043', '43 หน่วย ปริมาตร น้ำหนัก', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP044', '44 หน่วย รักการอ่าน', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP045', '45 หน่วย สีสันสดใส', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP046', '46 หน่วย อวัยวะและประสาทสัมผัส', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP047', '47 หน่วย ครอบครับหรรษา', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP048', '48 หน่วย อาชีพในฝัน', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP049', '49 หน่วย วันคริสต์มาส', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    productTemp.createData('NUMP050', '50 หน่วย กิจกรรมของเด็ก ๆ', 10,-1,"ซื้อใบงานตามหน่วยครบทุกหน่วย" )
    this.MainProduct.push(productTemp)

  }

  private createToyData() {
    var productTemp = new product('ไม้บรรทัด', this.mode[1])
    productTemp.createData('TOYS001', 'ไม้บรรทัดสระไทย', 50, 259)
    productTemp.createData('TOYS002', 'ไม้บรรทัดภาษาอังกฤษ', 50, 259)
    productTemp.createData('TOYS003', 'ไม้บรรทัดฝึกคูณ', 50, 259)
    this.ToyProduct.push(productTemp)

    var productTemp = new product('บิงโก', this.mode[1])
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

    var productTemp = new product('โดมิโน', this.mode[1])
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

    var productTemp = new product('ธง', this.mode[1])
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

  public getDataMain(focus?:string): product[] {
    if(focus) return this.setFocus(this.MainProduct,focus)
    return this.MainProduct
  }

  public getDataToy(focus?:string): product[] {
    if(focus) return this.setFocus(this.ToyProduct,focus)
    return this.ToyProduct
  }

  public getTree(): productNode[] {
    var arrayAll: productNode[] = []
    let listName: string[] = this.MainProduct.map((product: product) => { return product.category })
    let name: string = this.mode[0]
    arrayAll.push({ name: name, children: listName })

    listName = this.ToyProduct.map((product: product) => { return product.category })
    name = this.mode[1]
    arrayAll.push({ name: name, children: listName })

    return arrayAll
  }

  private setFocus(product:product[],focus:string):product[]{
    let item:product[] = []
    product.forEach(element => {
      if(element.category == focus){
        item.push(element)
      }
    });
    return item
  }

}
