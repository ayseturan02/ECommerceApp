import {FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import FlatList1 from './FlatList1';

const DATA = [
  {
    id: 1,
    title: 'Jordan Jumpman Pro',
    price: 2400,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image:
      'https://0990b9.a-cdn.akinoncloud.com/products/2023/05/19/484041/439df3b0-96b4-4cc0-940d-f80dd1baa1e1_size700x700_quality100.jpg',

    rating: {rate: 3.9, count: 120},
  },
  {
    id: 2,
    title: 'Mens T-Shirts ',
    price: 22.3,
    description:
      'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    category: "men's clothing",
    image:
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    rating: {rate: 4.1, count: 259},
  },
  {
    id: 3,
    title: 'Mens Cotton Jacket',
    price: 55.99,
    description:
      'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    rating: {rate: 4.7, count: 500},
  },
  {
    id: 4,
    title: 'Mens Slim  sşFit',
    price: 15.99,
    description:
      'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    rating: {rate: 2.1, count: 430},
  },
  {
    id: 5,
    title: "John Women's  Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
    rating: {rate: 4.6, count: 400},
  },
];

const FlatList0 = () => {
  const [data, setData] = useState(DATA[0]);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCounter((counter + 1) % DATA.length);
    }, 2000);
    setData(DATA[counter]);
  }, [counter]);
  return (
    <FlatList1
      photo={data.image}
      price={data.price}
      title={data.title}
      line={data.id}
    />
  );
};

export default FlatList0;
