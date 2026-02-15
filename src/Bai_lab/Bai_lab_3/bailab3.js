console.log("Bai lab 3");

product1 = {
    name: "Cam",
    price: 20,
    inStock: true
}

product2 = {
    name: "Chuoi",
    price: 30,
    inStock: false
}

product3 = {
    name: "Sau rieng",
    price: 100,
    inStock: true
}

product4 = {
    name: "Tao",
    price: 10,
    inStock: true
}


product5 = {
    name: "Nho",
    price: 40,
    inStock: false
}

const products = [product1, product2, product3, product4, product5];
console.log(" Original: ", products);

const first_item = products[0];
console.log("1.In ra ten san pham dau tien");
console.log("Ten san pham dau tien la: ", first_item.name);

console.log("2.Doi gia san pham thu 2 thanh 150");
const products2 = [product1, {
    name: product2.name,
    price: 150,
    inStock: product2.inStock
}, product3, product4, product5];
console.log(" After: ", products2);

console.log("3. Them mot san pham moi vao cuoi danh sach");
products.push({
    name: "Le",
    price: 200,
    inStock: false
});
console.log("After: ", products);

console.log("4. Xoa san pham cuoi cung");
products.pop();
console.log("After: ", products);

console.log("5. In ra tat ca ten san pham");
products.forEach((value, index) =>{
    console.log("Ten san pham: ", value.name);
})

console.log("6. Dung map tao mang moi chi chua gia san pham");
const products_price = products.map((item, index) => {
    return item.price;
});
console.log(products_price);

console.log("7. Dung filter de lay cac san pham con hang");
const checkInStock = products.filter((item, index) => {
    return item.inStock === true;
})
console.log("Cac san pham con hang: ", checkInStock);

console.log("8. Dung for in de duyet qua thuoc tinh cua san pham dau tien");

for(let key in first_item){
    console.log(key, first_item[key]);
}