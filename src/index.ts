import readlineSync from "readline-sync";
import { Product } from "./entities/Product";

const barcode = readlineSync.question("Digite o código de barras do produto: ");
const name = readlineSync.question("Digite o nome do produto: ");

const product = Product.create(barcode, name);

if (product instanceof Error) {
    console.error(product.message);
} else {
    console.log("Produto criado com sucesso!");
    console.log(`Código de barras: ${product.getBarcode()}`);
    console.log(`Nome: ${product.getName()}`);
    console.log(`Quantidade em estoque: ${product.getQuantityInStock()}`);
}
