import { Text } from 'react-native'
import { Card } from 'react-native-paper'
import { ProductResponse } from '../../lib/types'

interface Props {
  data: ProductResponse
}

function ProductCard(props: Props): JSX.Element {
  return (
    <Card style={{ flex: 1, margin: 5 }}>
      <Card.Cover source={{ uri: props.data.images[0] }} style={{ width: "100%", height: 170, resizeMode: "cover" }} />
      <Text style={{ position: 'absolute', bottom: 10, left: 10, color: '#fffd', fontWeight: 'bold' }}>{props.data.title}</Text>
      <Text style={{ position: 'absolute', bottom: 10, right: 10, color: '#fffd', fontWeight: 'bold' }}>{props.data.price}$</Text>
    </Card>
  )
}

export default ProductCard