import { Button as ReactButton } from "react-native"

interface ButtonProps {
  buttonText: string
}

export default function Button(props: ButtonProps) {
  return (
    <ReactButton title={props.buttonText}/>
  )
}