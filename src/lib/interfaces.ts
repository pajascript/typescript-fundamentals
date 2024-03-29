export interface Product {
  id: number,
  name: string,
  icon: string,
  description?: string,
}

type ProductAlias = string | {
  id: number,
  name: string,
  icon: string,
  description?: string,
}

let product: ProductAlias = 'Food'

enum ProductType { 
  Sporting,
  Home
}

type ProductTypeList = 'SPORTING' | 'HOME'
let p: ProductTypeList = 'SPORTING'