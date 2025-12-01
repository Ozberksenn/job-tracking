export type MenuType = {
    MenuId: number;
    Name: string;
    Description: string | null;
    Image: string | null;
    ShowStore: boolean | null;
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
    quantity:number;
}

