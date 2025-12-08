export type MenuType = {
    MenuId: number;
    Name: string;
    Description?: string;
    Image?: string;
    ShowStore: boolean;
    Sort: number;
}

export type ProductType = {
    ProductId: number;
    ProductName: string;
    ProductDescription?: string;
    Image?: string;
    MenuId: number;
    Price: number;
    Barcode: string;
    ShowStore?: boolean;
    Quantity:number;
}

export type ProductVariantType = {
    VariantId: number;
    ProductId:number,
    VariantName: string;
    Price: number;
    Barcode: string;
    Quantity:number;
}


