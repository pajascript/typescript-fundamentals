import { Product } from "./interfaces"

abstract class ProductBase implements Product {
    constructor(public id: number, public name: string, public icon: string) {} 
    
    validate() : boolean {
         throw new Error('ERRORRR!') 
    }
}

export class FoodProduct extends ProductBase {
    
    validate = () : boolean => {
        return !!this.id && !!this.name && !!this.icon
    }

    validate2() : boolean {
         return true
    }
}

class VapeProducts extends ProductBase {
    constructor (id: number, name: string, icon: string) {
        super(id, name, icon)
    }

    validate2() : boolean {
        return true
   }
}