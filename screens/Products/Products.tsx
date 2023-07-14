import { useEffect, useState } from 'react'
import { View, TextInput, Text, FlatList } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';

import Background from "../../components/Background";
import HeaderImage from "../../components/HeaderImage";
import ProductCard from '../../components/ProductCard';

import { PositionEnum, ProductResponse } from "../../lib/types";
import { api } from '../../lib/api';
import { labelModifier } from '../../lib/helpers';

function Products(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [products, setProducts] = useState<Array<ProductResponse>>([])
  const [filteredProducts, setFilteredProducts] = useState<Array<ProductResponse>>([]);
  const [searchedProducts, setSearchedProducts] = useState<Array<ProductResponse>>([]);
  const [categories, setCategories] = useState<Array<{ label: string, value: string }>>([{ label: "Select all Products", value: "" }])
  const [searchText, setSearchText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false)

  const getProducts = async () => {
    setLoading(true)
    try {
      const results = await api.products.list()
      setProducts(results.products)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  const getCategories = async () => {
    try {
      const results = await api.products.listCategories()
      results.forEach((category) => setCategories(categories => [...categories, { label: labelModifier(category), value: category }]))
    } catch (error) {
      console.log(error)
    }
  }

  const onChangeCategory = (category: string | null) => {
    if (!category) {
      setFilteredProducts([...products])
      return
    }
    const filtered = products?.filter(product => product?.category === category)
    setFilteredProducts(filtered)
  }

  const onSearch = (products: ProductResponse[]) => {
    return products.filter(product => product.title.toLowerCase().includes(searchText.toLowerCase()))
  }

  useEffect(() => {
    getProducts()
    getCategories()
  }, [])

  useEffect(() => {
    setFilteredProducts(products)
  }, [products])

  return (
    <Background>
      <>
        <HeaderImage position={PositionEnum.second} />
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          gap: 10,
          padding: 10,
        }}>
          <TextInput
            placeholder="Search"
            style={{
              width: '48%',
              backgroundColor: '#fff',
              borderRadius: 8,
            }}
            onChangeText={text => setSearchText(text)}
          />
          <DropDownPicker
            style={{
              width: '49%',
              margin: 5,
            }}
            dropDownContainerStyle={{ width: '49%', marginLeft: 5 }}
            open={open}
            value={value}
            items={categories}
            setOpen={setOpen}
            onChangeValue={onChangeCategory}
            setValue={setValue}
            setItems={setCategories}
            autoScroll={true}
          />
        </View>

        <View style={{ flex: 1, width: '100%', padding: 5 }}>
          <FlatList
            scrollEnabled={true}
            data={onSearch(filteredProducts)}
            // data={filteredProducts}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }) => (
              <ProductCard data={item} />
            )}
            horizontal={false}
            numColumns={2}
            ListFooterComponent={() => {
              return loading
                ? (<Text style={{ textAlign: 'center', fontSize: 20, color: '#fff' }}>Loading...</Text>)
                : !onSearch(filteredProducts).length && (<Text style={{ textAlign: 'center', fontSize: 20, color: '#f00' }}>Couldn't find any product</Text>)
            }}
          />
        </View>
      </>
    </Background>
  )
}

export default Products