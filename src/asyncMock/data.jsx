const products = [
  {
    id: "01",
    name: " Polera 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    stock: 10,
    price: 25000,
    category: "Men",
    img: "https://i.postimg.cc/V6XJp8ZY/1.jpg",
  },
  {
    id: "02",
    name: " Polera 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    stock: 20,
    price: 25000,
    category: "Men",
    img: "https://i.postimg.cc/nzqXgJSm/2.jpg",
  },
  {
    id: "03",
    name: " Polera 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    stock: 30,
    price: 25000,
    category: "Men",
    img: "https://i.postimg.cc/RFwWyBpK/3.jpg",
  },
  {
    id: "04",
    name: " Polera 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    stock: 40,
    price: 15000,
    category: "Women",
    img: "https://i.postimg.cc/QtcFw3YK/4.jpg",
  },
  {
    id: "05",
    name: " Polera 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    stock: 50,
    price: 15000,
    category: "Women",
    img: "https://i.postimg.cc/yxBDzb2Z/5.jpg",
  },
  {
    id: "06",
    name: " Polera 6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    stock: 60,
    price: 15000,
    category: "Women",
    img: "https://i.postimg.cc/D0FSKMRQ/6.jpg",
  },
  {
    id: "07",
    name: " Polera 7",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    stock: 70,
    price: 15000,
    category: "Kids",
    img: "https://i.postimg.cc/yxPk6TzP/7.jpg",
  },
  {
    id: "08",
    name: " Polera 8",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    stock: 80,
    price: 15000,
    category: "Kids",
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
    }, 1000);
  });
};

export const getOneProduct = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject("hubo un error intente mas tarde");
      } else {
        //realizamos una comprobacion del id
        let product = products.find((prod) => prod.id === id);
        //resolve(products[id]);
        resolve(product);
      }
    }, 1000);
  });
};
