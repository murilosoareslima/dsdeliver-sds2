export type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUri: string;
}

export type OrderLocationData = {
    latitude: number;
    longitude: number;
    address: string;
}

type ProductId = {
    id: number;
}

//o & faz com que o OrderPayload ter os atributos do OrderLocationData tbm
export type OrderPayload = {
    products: ProductId[];    
} & OrderLocationData;