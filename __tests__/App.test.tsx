/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: import explicitly to use the types shiped with jest.
import { it } from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native';
import HeaderImage from '../components/HeaderImage';
import { PositionEnum } from '../lib/types';
import Background from '../components/Background';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { api } from '../lib/api';
import CustomInput from '../components/CustomInput';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>

const mockData = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ]
  },
  {
    id: 2,
    title: "iPhone X",
    description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/2/1.jpg",
      "https://i.dummyjson.com/data/products/2/2.jpg",
      "https://i.dummyjson.com/data/products/2/3.jpg",
      "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
    ]
  },
  {
    id: 3,
    title: "Samsung Universe 9",
    description: "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    discountPercentage: 15.46,
    rating: 4.09,
    stock: 36,
    brand: "Samsung",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/3/1.jpg"
    ]
  }
];

const fetchProducts = async () => {
  try {
    const response = await axios.get('https://dummyjson.com/products')
    return response.data
  } catch (error) {
    console.error(error)
  }
}

describe('Rendering some component', () => {
  it('Header Image render correctly', () => {
    renderer.create(<HeaderImage position={PositionEnum.first} />)
  });

  it('Background render correctly', () => {
    renderer.create(<Background><></></Background>)
  });

  it('Custom Input render correctly', () => {
    renderer.create(<CustomInput placeholder='mock placeholder' />)
  })
})

describe('Card Component', () => {
  it('Renders data correctly', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: mockData
    })

    const products = await fetchProducts();
    expect(products).toEqual(mockData)

    expect(mockedAxios.get).toHaveBeenCalledWith('https://dummyjson.com/products');
  })
})
