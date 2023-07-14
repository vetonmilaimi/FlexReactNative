import { TextInput } from "react-native";

interface Props {
  placeholder: string,
  secret?: boolean,
}

function CustomInput(props: Props): JSX.Element {
  return <TextInput
    placeholder={props.placeholder}
    secureTextEntry={props.secret}
    style={{
      backgroundColor: '#fff',
      width: "80%",
      borderRadius: 5,
      marginTop: '5%',
      padding: 10
    }}
  />
}

export default CustomInput;