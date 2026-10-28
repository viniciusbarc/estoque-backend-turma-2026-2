import type { Product } from '../entities/Product';
import type { InfrastructureError } from '../InfrastructureError';

export class ProductRepository {

    public findByBarcode(barcode: string): Product | null | InfrastructureError {
        return null;
    }

    public create(product: Product): void | InfrastructureError {
    
    }

}