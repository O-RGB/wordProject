
export interface listdata {
    category: string
    mode: string
    list: data[]
}
export interface data {
    id: string
    name: string
    price_fire: number
    price_print: number
    link?: promotion[]
    link_price?: number
    selection: select
    print_selection: number

}

export interface select {
    selection_all: boolean
    selection_file: boolean
    selection_print: boolean
}

export interface promotion {
    name: string
    id: string[]
}


export var dataAll: listdata[] = [
    {
        category: "คณิตศาสตร์", mode: "ใบงาน", list: [
            {
                id: "MATH001",
                name: "คณิตศาสตร์ อ.1",
                price_fire: 99,
                price_print: 240,
                link: [
                    { 
                        name: 'ซื้อครบ 3 ชั้น', 
                        id: ["MATH001", "MATH002", "MATH003"] 
                    }
                ],
                link_price: 280,
                selection: {
                    selection_all: false,
                    selection_file: false,
                    selection_print: false
                },
                print_selection: 1
            },
            {
                id: "MATH002",
                name: "คณิตศาสตร์ อ.2",
                price_fire: 99,
                price_print: 240,
                link: [
                    { 
                        name: 'ซื้อครบ 3 ชั้น', 
                        id: ["MATH001", "MATH002", "MATH003"] 
                    }
                ],
                link_price: 280,
                selection: {
                    selection_all: false,
                    selection_file: false,
                    selection_print: false
                },
                print_selection: 1
            },
            {
                id: "MATH003",
                name: "คณิตศาสตร์ อ.3",
                price_fire: 99,
                price_print: 240,
                link: [
                    { 
                        name: 'ซื้อครบ 3 ชั้น', 
                        id: ["MATH001", "MATH002", "MATH003"] 
                    }
                ],
                link_price: 280,
                selection: {
                    selection_all: false,
                    selection_file: false,
                    selection_print: false
                },
                print_selection: 1
            },
            {
                id: "MATH004",
                name: "คณิตศาสตร์ ป.1 (เทอม 1)",
                price_fire: 150,
                price_print: -1,
                selection: {
                    selection_all: false,
                    selection_file: false,
                    selection_print: false
                },
                print_selection: 1
            },
            {
                id: "MATH005",
                name: "คณิตศาสตร์ ป.1 (เทอม 2)",
                price_fire: 150,
                price_print: -1,
                selection: {
                    selection_all: false,
                    selection_file: false,
                    selection_print: false
                },
                print_selection: 1
            },
        ]
    },
    {
        category: "ใบงานพื้นฐาน", mode: "ใบงาน", list: [
            {
                id: "ZIP001",
                name: "พื้นฐาน อ.1",
                price_fire: 99,
                price_print: 230,
                link: [
                    { 
                        name: 'ซื้อครบ 3 ชั้น', 
                        id: ["ZIP001", "ZIP002", "ZIP003"] 
                    }
                ],
                link_price: 280,
                selection: {
                    selection_all: false,
                    selection_file: false,
                    selection_print: false
                },
                print_selection: 1
            },
            {
                id: "ZIP002",
                name: "พื้นฐาน อ.2",
                price_fire: 99,
                price_print: 240,
                link: [
                    { 
                        name: 'ซื้อครบ 3 ชั้น', 
                        id: ["ZIP001", "ZIP002", "ZIP003"] 
                    }
                ],
                link_price: 280,
                selection: {
                    selection_all: false,
                    selection_file: false,
                    selection_print: false
                },
                print_selection: 1
            },
            {
                id: "ZIP003",
                name: "พื้นฐาน อ.3",
                price_fire: 99,
                price_print: 240,
                link: [
                    { 
                        name: 'ซื้อครบ 3 ชั้น', 
                        id: ["ZIP001", "ZIP002", "ZIP003"] 
                    }
                ],
                link_price: 280,
                selection: {
                    selection_all: false,
                    selection_file: false,
                    selection_print: false
                },
                print_selection: 1
            },
        ]
    },
    {
        category: "ใบงานเชาว์ปัญญา", mode: "ใบงาน", list: [
            {
                id: "PROB001",
                name: "เชาว์ปัญญา อ.1",
                price_fire: 99,
                price_print: -1,
                link: [
                    { 
                        name: 'ซื้อครบ 3 ชั้น', 
                        id: ["PROB001", "PROB002", "PROB003"] 
                    }
                ],
                link_price: 280,
                selection: {
                    selection_all: false,
                    selection_file: false,
                    selection_print: false
                },
                print_selection: 1
            },
            {
                id: "PROB002",
                name: "เชาว์ปัญญา อ.2",
                price_fire: 99,
                price_print: -1,
                link: [
                    { 
                        name: 'ซื้อครบ 3 ชั้น', 
                        id: ["PROB001", "PROB002", "PROB003"] 
                    }
                ],
                link_price: 280,
                selection: {
                    selection_all: false,
                    selection_file: false,
                    selection_print: false
                },
                print_selection: 1
            },
            {
                id: "PROB003",
                name: "เชาว์ปัญญา อ.3",
                price_fire: 99,
                price_print: -1,
                link: [
                    { 
                        name: 'ซื้อครบ 3 ชั้น', 
                        id: ["PROB001", "PROB002", "PROB003"] 
                    }
                ],
                link_price: 280,
                selection: {
                    selection_all: false,
                    selection_file: false,
                    selection_print: false
                },
                print_selection: 1
            },
        ]
    },
    {
        category: "ใบงานภาษาไทย", mode: "ใบงาน", list: [
            {
                id: "TH001",
                name: "พื้นฐาน ภาษาไทย",
                price_fire: 99,
                price_print: 240,
                selection: {
                    selection_all: false,
                    selection_file: false,
                    selection_print: false
                },
                print_selection: 1
            },
            {
                id: "TH002",
                name: "คำพื้นฐานภาษาไทย (เขียนเอง)",
                price_fire: 69,
                price_print: 149,
                link: [
                    { 
                        name: 'ซื้อครบ 2 เรื่อง', 
                        id: ["TH002", "TH003"] 
                    }
                ],
                link_price: 99,
                selection: {
                    selection_all: false,
                    selection_file: false,
                    selection_print: false
                },
                print_selection: 1
            },
            {
                id: "TH003",
                name: "คำพื้นฐานภาษาไทย (เส้นประ)",
                price_fire: 69,
                price_print: 149,
                link: [
                    { 
                        name: 'ซื้อครบ 2 เรื่อง', 
                        id: ["TH002", "TH003"] 
                    }
                ],
                link_price: 99,
                selection: {
                    selection_all: false,
                    selection_file: false,
                    selection_print: false
                },
                print_selection: 1
            },
        ]
    },
    {
        category: "ใบงานอังกฤษ", mode: "ใบงาน", list: [
            {
                id: "ENG001",
                name: "คำพื้นฐานอังกฤษ (เขียนเอง)",
                price_fire: 69,
                price_print: 149,
                link: [
                    { 
                        name: 'ซื้อครบ 2 เรื่อง', 
                        id: ["ENG001", "ENG002"] 
                    }
                ],
                link_price: 99,
                selection: {
                    selection_all: false,
                    selection_file: false,
                    selection_print: false
                },
                print_selection: 1
            },
            {
                id: "ENG002",
                name: "คำพื้นฐานอังกฤษ (เส้นประ)",
                price_fire: 69,
                price_print: 149,
                link: [
                    { 
                        name: 'ซื้อครบ 2 เรื่อง', 
                        id: ["ENG001", "ENG002"] 
                    }
                ],
                link_price: 99,
                selection: {
                    selection_all: false,
                    selection_file: false,
                    selection_print: false
                },
                print_selection: 1
            },
        ]
    },
    {
        category: "ไม้บรรทัด", mode: "ชิ้นงาน", list: [
            {
                id: "TOYS001",
                name: "ไม้บรรทัดสระไทย",
                price_fire: 50,
                price_print: 259,
                selection: {
                    selection_all: false,
                    selection_file: false,
                    selection_print: false
                },
                print_selection: 1
            },
            {
                id: "TOYS002",
                name: "ไม้บรรทัดภาษาอังกฤษ",
                price_fire: 50,
                price_print: 259,
                selection: {
                    selection_all: false,
                    selection_file: false,
                    selection_print: false
                },
                print_selection: 1
            },
            {
                id: "TOYS003",
                name: "ไม้บรรทัดฝึกคูณ",
                price_fire: 50,
                price_print: 259,
                selection: {
                    selection_all: false,
                    selection_file: false,
                    selection_print: false
                },
                print_selection: 1
            },
        ]
    }
]