import { Product } from '../entities/Product';
import { InfrastructureError } from '../InfrastructureError';
import Database from "better-sqlite3";
import type { SqliteConnection } from './SqliteConnection';

export class ProductRepository {

    private connection: SqliteConnection;

    constructor(connection: SqliteConnection) {
        this.connection = connection;
    }

    public findByBarcode(barcode: string): Product | null | InfrastructureError {
        try {
            const database = this.connection.getDatabase();
            const row = database.prepare('SELECT * FROM products WHERE barcode = ?').get(barcode) as { barcode: string, name: string, quantity_in_stock: number } | undefined;
            if (row) {
                const product: Product = Product.rebuild(row.barcode, row.name, row.quantity_in_stock);
                return product;
            } else {
                return null;
            }
        } catch (error) {
            return new InfrastructureError("Database error");
        }
    }

    public create(product: Product): void | InfrastructureError {
        try {
            const database = this.connection.getDatabase();
            const row = database.prepare('INSERT INTO products (barcode, name, quantity_in_stock) VALUES (?, ?, ?)').run(product.getBarcode(), product.getName(), product.getQuantityInStock());
        } catch (error) {
            return new InfrastructureError("Database error");
        }        
    }

}