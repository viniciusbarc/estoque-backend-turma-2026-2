export class Product {
    private barcode: string;
    private name: string;
    private quantityInStock: number;

    private constructor(barcode: string, name: string, quantityInStock: number) {
        this.barcode = barcode;
        this.name = name;
        this.quantityInStock = quantityInStock;
    }

    public static create(barcode: string, name: string): Product | Error {
        if (!barcode) {
            return new Error("Barcode is required");
        }
        if (!name) {
            return new Error("Name is required");
        }
        const quantityInStock = 0;
        return new Product(barcode, name, quantityInStock);
    }
    
    public getBarcode(): string {
        return this.barcode;
    }

    public getName(): string {
        return this.name;
    }

    public getQuantityInStock(): number {
        return this.quantityInStock;
    }

}