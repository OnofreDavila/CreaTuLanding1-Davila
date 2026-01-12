const products = [
  {
    id: "01",
    name: " Polera 1",
    description: "polera numero 1",
    stock: 10,
    price: 25000,
    categoria: "polera adulto",
    img: "https://i.postimg.cc/V6XJp8ZY/1.jpg",
  },
  {
    id: "02",
    name: " Polera 2",
    description: "polera numero 2",
    stock: 20,
    price: 25000,
    categoria: "polera adulto",
    img: "https://i.postimg.cc/nzqXgJSm/2.jpg",
  },
  {
    id: "03",
    name: " Polera 3",
    description: "polera numero 3",
    stock: 30,
    price: 25000,
    categoria: "polera adulto",
    img: "https://i.postimg.cc/RFwWyBpK/3.jpg",
  },
  {
    id: "04",
    name: " Polera 4",
    description: "polera numero 4",
    stock: 40,
    price: 15000,
    categoria: "polera niño",
    img: "https://i.postimg.cc/QtcFw3YK/4.jpg",
  },
  {
    id: "05",
    name: " Polera 5",
    description: "polera numero 5",
    stock: 50,
    price: 15000,
    categoria: "polera niño",
    img: "https://i.postimg.cc/yxBDzb2Z/5.jpg",
  },
  {
    id: "06",
    name: " Polera 6",
    description: "polera numero 6",
    stock: 60,
    price: 15000,
    categoria: "polera niño",
    img: "https://i.postimg.cc/D0FSKMRQ/6.jpg",
  },
  {
    id: "07",
    name: " Polera 7",
    description: "polera numero 7",
    stock: 70,
    price: 15000,
    categoria: "polera niño",
    img: "https://i.postimg.cc/yxPk6TzP/7.jpg",
  },
  {
    id: "08",
    name: " Polera 8",
    description: "polera numero 8",
    stock: 80,
    price: 15000,
    categoria: "polera niño",
    img: "https://i.postimg.cc/RhRNCTzP/8.jpg",
  },
];

//link de imagenes hostiadas:
// https://i.postimg.cc/V6XJp8ZY/1.jpg
// https://i.postimg.cc/nzqXgJSm/2.jpg
// https://i.postimg.cc/RFwWyBpK/3.jpg
// https://i.postimg.cc/QtcFw3YK/4.jpg
// https://i.postimg.cc/yxBDzb2Z/5.jpg
// https://i.postimg.cc/D0FSKMRQ/6.jpg
// https://i.postimg.cc/yxPk6TzP/7.jpg
// https://i.postimg.cc/RhRNCTzP/8.jpg
let error = false;
export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject("hubo un error intente mas tarde");
      } else {
        resolve(products);
      }
    }, 2000);
  });
};
