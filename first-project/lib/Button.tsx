import { Button as ReactButton } from "react-native"

interface ButtonProps {
  buttonText: string
  onClick?: () => void
}

export default function Button(props: ButtonProps) {
  return (
    <ReactButton title={props.buttonText} onPress={props.onClick != null ? props.onClick : () => {}}/>
  )
}