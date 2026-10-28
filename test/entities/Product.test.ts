import { Product } from '../../src/entities/Product';

describe('Product entity', () => {
    test('should create a product with valid properties', () => {
        const barcode = '1234567890123';
        const name = 'Coca-Cola 2L';

        const product = Product.create(barcode, name);

        expect(product).toBeInstanceOf(Product);
        if (product instanceof Product) {
            expect(product.getBarcode()).toBe(barcode);
            expect(product.getName()).toBe(name);
            expect(product.getQuantityInStock()).toBe(0);
        }
    });

   test('should return an Error when creating a product without a barcode', () => {
        const barcode = '';
        const name = 'Coca-Cola 2L';

        const product = Product.create(barcode, name);

        expect(product).toBeInstanceOf(Error);
        if (product instanceof Error) {
            expect(product.message).toBe('Barcode is required');
        }
    });  
    
    test('should return an Error when creating a product without a name', () => {    
        const barcode = '1234567890123';
        const name = '';

        const product = Product.create(barcode, name);

        expect(product).toBeInstanceOf(Error);
        if (product instanceof Error) {
            expect(product.message).toBe('Name is required');
        }
    });

});