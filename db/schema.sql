create table products (
    barcode varchar(255) primary key,
    name varchar(255) not null,
    quantity_in_stock integer not null
);