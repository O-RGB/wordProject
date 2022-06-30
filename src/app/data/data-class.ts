import { productDataModel, productModel, promotion, select } from "./data-interface"


export class product implements productModel{

    category: string = ""
    mode: string = ""
    list: productDataModel[] = []
    constructor(category:string,mode:string){
        this.category = category
        this.mode = mode
    }
    public createData(id: string,name: string,price_fire: number,price_print?: number,promoName?:string,promoList?:string[],link_price?: number):void{
        this.list.push(new productData(id,name,price_fire,price_print,promoName,promoList,link_price))
    }

    public toString(): productModel {
        return this
    }
}

class productData implements productDataModel{
    id: string = ''
    name: string = ''
    price_fire: number = 0
    price_print: number = -1
    link?: promotion[] | undefined
    link_price?: number | undefined
    selection!: select
    print_selection: number = 1


    constructor(id: string,name: string,price_fire: number,price_print?: number,promoName?:string,promoList?:string[],link_price?: number){
        this.id = id
        this.name = name
        this.price_fire = price_fire
        if(price_print) this.price_print = price_print
        if(promoName && promoList) this.link = <promotion[]>[{name:promoName,id:promoList}]
        if(link_price) this.link_price = link_price
        this.selection = {
            selection_all:false,
            selection_file:false,
            selection_print:false
        }
        this.print_selection = 1
    }
    
}