import { SafeAreaView, StyleSheet } from "react-native"

interface Props {
  children: JSX.Element
}

function Background(props: Props): JSX.Element {
  return <SafeAreaView style={styles.background} >
    {props.children}
  </SafeAreaView>
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#1E3445',
    flex: 1,
    alignItems: 'center'
  }
})

export default Background