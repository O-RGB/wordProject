
export interface productModel {
    category: string
    mode: string
    list: productDataModel[]
    selectAll:boolean
    special?:string
}
export interface productDataModel {
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


export interface productNode {
    name: string;
    children?: string[];
  }