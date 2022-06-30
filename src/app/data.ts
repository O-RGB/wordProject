
// export interface productModel {
//     category: string
//     mode: string
//     list: productDataModel[]
// }
// export interface productDataModel {
//     id: string
//     name: string
//     price_fire: number
//     price_print: number
//     link?: promotion[]
//     link_price?: number
//     selection: select
//     print_selection: number

// }
// export interface select {
//     selection_all: boolean
//     selection_file: boolean
//     selection_print: boolean
// }
// export interface promotion {
//     name: string
//     id: string[]
// }


// export var dataAll: productModel[] = [
//     {
//         category: "คณิตศาสตร์", mode: "ใบงาน", list: [
//             {
//                 id: "MATH001",
//                 name: "คณิตศาสตร์ อ.1",
//                 price_fire: 99,
//                 price_print: 240,
//                 link: [
//                     {
//                         name: 'ซื้อคณิตศาสตร์ครบ 3 ชั้น',
//                         id: ["MATH001", "MATH002", "MATH003"]
//                     },
//                     // { 
//                     //     name: 'ซื้อคณิต อ.1 -เชาว์ อ.1', 
//                     //     id: ["MATH001", "PROB001"] 
//                     // }
//                 ],
//                 link_price: 280,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "MATH002",
//                 name: "คณิตศาสตร์ อ.2",
//                 price_fire: 99,
//                 price_print: 240,
//                 link: [
//                     {
//                         name: 'ซื้อคณิตศาสตร์ครบ 3 ชั้น',
//                         id: ["MATH001", "MATH002", "MATH003"]
//                     }
//                 ],
//                 link_price: 280,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "MATH003",
//                 name: "คณิตศาสตร์ อ.3",
//                 price_fire: 99,
//                 price_print: 240,
//                 link: [
//                     {
//                         name: 'ซื้อคณิตศาสตร์ครบ 3 ชั้น',
//                         id: ["MATH001", "MATH002", "MATH003"]
//                     }
//                 ],
//                 link_price: 280,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "MATH004",
//                 name: "คณิตศาสตร์ ป.1 (เทอม 1)",
//                 price_fire: 150,
//                 price_print: -1,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "MATH005",
//                 name: "คณิตศาสตร์ ป.1 (เทอม 2)",
//                 price_fire: 150,
//                 price_print: -1,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//         ]
//     },
//     {
//         category: "ใบงานพื้นฐาน", mode: "ใบงาน", list: [
//             {
//                 id: "ZIP001",
//                 name: "พื้นฐาน อ.1",
//                 price_fire: 99,
//                 price_print: 230,
//                 link: [
//                     {
//                         name: 'ซื้อใบงานพื้นฐานครบ 3 ชั้น',
//                         id: ["ZIP001", "ZIP002", "ZIP003"]
//                     }
//                 ],
//                 link_price: 280,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "ZIP002",
//                 name: "พื้นฐาน อ.2",
//                 price_fire: 99,
//                 price_print: 240,
//                 link: [
//                     {
//                         name: 'ซื้อใบงานพื้นฐานครบ 3 ชั้น',
//                         id: ["ZIP001", "ZIP002", "ZIP003"]
//                     }
//                 ],
//                 link_price: 280,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "ZIP003",
//                 name: "พื้นฐาน อ.3",
//                 price_fire: 99,
//                 price_print: 240,
//                 link: [
//                     {
//                         name: 'ซื้อใบงานพื้นฐานครบ 3 ชั้น',
//                         id: ["ZIP001", "ZIP002", "ZIP003"]
//                     }
//                 ],
//                 link_price: 280,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//         ]
//     },
//     {
//         category: "ใบงานลีลามือ", mode: "ใบงาน", list: [
//             {
//                 id: "HAND001",
//                 name: "ใบงานลีลามือ",
//                 price_fire: 99,
//                 price_print: 240,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "HAND002",
//                 name: "ใบงานลีลามือ (ชุด 2)",
//                 price_fire: 69,
//                 price_print: -1,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//         ]
//     },
//     {
//         category: "ใบงานเชาว์ปัญญา", mode: "ใบงาน", list: [
//             {
//                 id: "PROB001",
//                 name: "เชาว์ปัญญา อ.1",
//                 price_fire: 99,
//                 price_print: -1,
//                 link: [
//                     {
//                         name: 'ซื้อใบงานเชาว์ปัญญาครบ 3 ชั้น',
//                         id: ["PROB001", "PROB002", "PROB003"]
//                     }
//                 ],
//                 link_price: 280,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "PROB002",
//                 name: "เชาว์ปัญญา อ.2",
//                 price_fire: 99,
//                 price_print: -1,
//                 link: [
//                     {
//                         name: 'ซื้อใบงานเชาว์ปัญญาครบ 3 ชั้น',
//                         id: ["PROB001", "PROB002", "PROB003"]
//                     }
//                 ],
//                 link_price: 280,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "PROB003",
//                 name: "เชาว์ปัญญา อ.3",
//                 price_fire: 99,
//                 price_print: -1,
//                 link: [
//                     {
//                         name: 'ซื้อใบงานเชาว์ปัญญาครบ 3 ชั้น',
//                         id: ["PROB001", "PROB002", "PROB003"]
//                     }
//                 ],
//                 link_price: 280,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//         ]
//     },
//     {
//         category: "ใบงานภาษาไทย", mode: "ใบงาน", list: [
//             {
//                 id: "TH001",
//                 name: "พื้นฐาน ภาษาไทย",
//                 price_fire: 99,
//                 price_print: 240,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "TH002",
//                 name: "คำพื้นฐานภาษาไทย (เขียนเอง)",
//                 price_fire: 69,
//                 price_print: 149,
//                 link: [
//                     {
//                         name: 'ซื้อคำพื้นฐานภาษาไทยครบ 2 เรื่อง',
//                         id: ["TH002", "TH003"]
//                     }
//                 ],
//                 link_price: 99,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "TH003",
//                 name: "คำพื้นฐานภาษาไทย (เส้นประ)",
//                 price_fire: 69,
//                 price_print: 149,
//                 link: [
//                     {
//                         name: 'ซื้อคำพื้นฐานภาษาไทยครบ 2 เรื่อง',
//                         id: ["TH002", "TH003"]
//                     }
//                 ],
//                 link_price: 99,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "TH004",
//                 name: "แบบฝึกหัดประสมคำพื้นฐาน",
//                 price_fire: 29,
//                 price_print: -1,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//         ]
//     },
//     {
//         category: "ใบงานอังกฤษ", mode: "ใบงาน", list: [
//             {
//                 id: "ENG001",
//                 name: "คำพื้นฐานอังกฤษ (เขียนเอง)",
//                 price_fire: 69,
//                 price_print: 149,
//                 link: [
//                     {
//                         name: 'ซื้อคำพื้นฐานอังกฤษครบ 2 เรื่อง',
//                         id: ["ENG001", "ENG002"]
//                     }
//                 ],
//                 link_price: 99,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "ENG002",
//                 name: "คำพื้นฐานอังกฤษ (เส้นประ)",
//                 price_fire: 69,
//                 price_print: 149,
//                 link: [
//                     {
//                         name: 'ซื้อคำพื้นฐานอังกฤษครบ 2 เรื่อง',
//                         id: ["ENG001", "ENG002"]
//                     }
//                 ],
//                 link_price: 99,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//         ]
//     },
//     {
//         category: "แบบฝึกหัดพื้นฐาน", mode: "ใบงาน", list: [
//             {
//                 id: "SOL001",
//                 name: "แบบฝึกหัดคัด ก - ฮ",
//                 price_fire: 40,
//                 price_print: -1,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "SOL002",
//                 name: "แบบฝึกหัดคัด A - B",
//                 price_fire: 30,
//                 price_print: -1,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "SOL003",
//                 name: "แบบฝึกหัดคัด 1 - 10",
//                 price_fire: 20,
//                 price_print: -1,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "SOL004",
//                 name: "แบบฝึกหัดคัด 1 - 100",
//                 price_fire: 59,
//                 price_print: -1,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             }
//         ]
//     },
//     {
//         category: "ไม้บรรทัด", mode: "สื่อการสอน", list: [
//             {
//                 id: "TOYS001",
//                 name: "ไม้บรรทัดสระไทย",
//                 price_fire: 50,
//                 price_print: 259,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "TOYS002",
//                 name: "ไม้บรรทัดภาษาอังกฤษ",
//                 price_fire: 50,
//                 price_print: 259,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "TOYS003",
//                 name: "ไม้บรรทัดฝึกคูณ",
//                 price_fire: 50,
//                 price_print: 259,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//         ]
//     },

// ]

// export var dataToy: productModel[] = [
//     {
//         category: "บิงโก", mode: "สื่อการสอน", list: [
//             {
//                 id: "BIN001",
//                 name: "บิงโก การบวก",
//                 price_fire: 38,
//                 price_print: 259,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "BIN002",
//                 name: "บิงโก การลบ",
//                 price_fire: 38,
//                 price_print: 259,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "BIN003",
//                 name: "บิงโก การคูณ",
//                 price_fire: 38,
//                 price_print: 259,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "BIN004",
//                 name: "บิงโก การหาร",
//                 price_fire: 38,
//                 price_print: 259,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "BIN005",
//                 name: "บิงโก การคูณหารเศษส่วน",
//                 price_fire: 38,
//                 price_print: 259,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "BIN006",
//                 name: "บิงโก การบวกลบเศษส่วน",
//                 price_fire: 38,
//                 price_print: 259,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "BIN007",
//                 name: "บิงโก การบวกลบทศนิยม",
//                 price_fire: 38,
//                 price_print: 259,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "BIN008",
//                 name: "บิงโก ความสัมพันธ์เศษส่วนทศนิยม",
//                 price_fire: 38,
//                 price_print: 259,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "BIN009",
//                 name: "บิงโก จำนวนเฉพาะ",
//                 price_fire: 38,
//                 price_print: 259,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             }, {
//                 id: "BIN010",
//                 name: "บิงโก จำนวนนับ",
//                 price_fire: 38,
//                 price_print: 259,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             }
//             , {
//                 id: "BIN011",
//                 name: "บิงโก ร้อยละ",
//                 price_fire: 38,
//                 price_print: 259,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "BIN012",
//                 name: "บิงโก ร้อยละ",
//                 price_fire: 38,
//                 price_print: 259,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "BIN013",
//                 name: "บิงโก ปริมาตรทรงสี่เหลี่ยมมุมฉาก",
//                 price_fire: 38,
//                 price_print: 259,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "BIN014",
//                 name: "บิงโก พยัญชนะไทย",
//                 price_fire: 38,
//                 price_print: 259,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },

//             {
//                 id: "BIN015",
//                 name: "บิงโก อักษรภาษาอังกฤษ",
//                 price_fire: 38,
//                 price_print: 259,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },

//         ]
//     },
//     {
//         category: "โดมิโน", mode: "สื่อการสอน", list: [
//             {
//                 id: "DOBI001",
//                 name: "โดมิโน การบวก",
//                 price_fire: 38,
//                 price_print: 129,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "DOBI002",
//                 name: "โดมิโน การลบ",
//                 price_fire: 38,
//                 price_print: 129,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "DOBI003",
//                 name: "โดมิโน การคูณ",
//                 price_fire: 38,
//                 price_print: 129,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "DOBI004",
//                 name: "โดมิโน การหาร",
//                 price_fire: 38,
//                 price_print: 129,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "DOBI005",
//                 name: "โดมิโน กระจาย",
//                 price_fire: 38,
//                 price_print: 129,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "DOBI007",
//                 name: "โดมิโน เงา",
//                 price_fire: 38,
//                 price_print: 129,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "DOBI008",
//                 name: "โดมิโน เงิน",
//                 price_fire: 38,
//                 price_print: 129,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "DOBI009",
//                 name: "โดมิโน การคูณหารทศนิยม",
//                 price_fire: 38,
//                 price_print: 129,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "DOBI010",
//                 name: "โดมิโน การบวกลบทศนิยม",
//                 price_fire: 38,
//                 price_print: 129,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "DOBI011",
//                 name: "โดมิโน คณิตศาสตร์อนุบาล",
//                 price_fire: 38,
//                 price_print: -1,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "DOBI012",
//                 name: "โดมิโน ทศนิยม",
//                 price_fire: 38,
//                 price_print: 129,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },

//             {
//                 id: "DOBI013",
//                 name: "โดมิโน รูปทรง2D",
//                 price_fire: 38,
//                 price_print: 129,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "DOBI014",
//                 name: "โดมิโน รูปทรง3D",
//                 price_fire: 38,
//                 price_print: 129,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "DOBI015",
//                 name: "โดมิโน เวลา",
//                 price_fire: 38,
//                 price_print: 129,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "DOBI016",
//                 name: "โดมิโน เศษส่วน",
//                 price_fire: 38,
//                 price_print: 129,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "DOBI017",
//                 name: "โดมิโน สมการ",
//                 price_fire: 38,
//                 price_print: 129,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "DOBI018",
//                 name: "โดมิโน สัตว์ ผัก ผลไม้",
//                 price_fire: 38,
//                 price_print: -1,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//         ]
//     },
//     {
//         category: "ธง", mode: "สื่อการสอน", list: [
//             {
//                 id: "TONG001",
//                 name: "ธง A-Z (ใหม่)",
//                 price_fire: 50,
//                 price_print: -1,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "TONG002",
//                 name: "ธง ก-ฮ (ใหม่)",
//                 price_fire: 50,
//                 price_print: -1,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "TONG003",
//                 name: "ธง A-Z",
//                 price_fire: 30,
//                 price_print: -1,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "TONG004",
//                 name: "ธง ก-ฮ",
//                 price_fire: 30,
//                 price_print: -1,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "TONG005",
//                 name: "ธง ดาราศาสตร์",
//                 price_fire: 30,
//                 price_print: -1,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "TONG006",
//                 name: "ธง ทศนิยม",
//                 price_fire: 50,
//                 price_print: -1,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "TONG007",
//                 name: "ธง เรขาคณิตสองมิติ",
//                 price_fire: 30,
//                 price_print: -1,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "TONG008",
//                 name: "ธง เศษส่วน",
//                 price_fire: 50,
//                 price_print: -1,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//             {
//                 id: "TONG009",
//                 name: "ธง ธง สัตว์โลกน่ารัก",
//                 price_fire: 50,
//                 price_print: -1,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//         ]
//     },
//     {
//         category: "บ้านสื่อคณิต", mode: "สื่อการสอน", list: [
//             {
//                 id: "HOMATH001",
//                 name: "บ้าน ทศนิยม",
//                 price_fire: 50,
//                 price_print: -1,
//                 selection: {
//                     selection_all: false,
//                     selection_file: false,
//                     selection_print: false
//                 },
//                 print_selection: 1
//             },
//         ]
//     }
// ]


// export class product implements productModel{

//     category: string = ""
//     mode: string = ""
//     list: productDataModel[] = []
//     constructor(category:string,mode:string){
//         this.category = category
//         this.mode = mode
//     }
//     public createData(id: string,name: string,price_fire: number,price_print: number,link?: promotion[],link_price?: number):void{
//         this.list.push(new productData(id,name,price_fire,price_print,link,link_price))
//     }

//     public toString(): productModel {
//         return this
//     }
// }

// export class productData implements productDataModel{
//     id: string = ''
//     name: string = ''
//     price_fire: number = 0
//     price_print: number = -1
//     link?: promotion[] | undefined
//     link_price?: number | undefined
//     selection!: select
//     print_selection: number = 1

//     constructor(id: string,name: string,price_fire: number,price_print: number,link?: promotion[],link_price?: number){
//         this.id = id
//         this.name = name
//         this.price_fire = price_fire
//         this.price_print = price_print
//         if(link) this.link = link
//         if(link_price) this.link_price = link_price
//         this.selection = {
//             selection_all:false,
//             selection_file:false,
//             selection_print:false
//         }
//         this.print_selection = 1
//     }
    
// }