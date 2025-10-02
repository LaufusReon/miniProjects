create database projectCosts;

create table rawMaterials{
    id int PRIMARY KEY,
    matType varchar(100),
    itemCode varchar(10) not null,
    itemName varchar(200) not null,
    quantity int(7) not null,
    supplierData varchar(50),
    productStatus varchar(50) not null,
    feedback varchar()
}