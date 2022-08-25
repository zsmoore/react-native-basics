import { Button as ReactButton } from "react-native"
import { useState, useEffect } from "react"

interface ButtonProps {
  buttonText: string
  onClick?: () => void
}

export default function Button(props: ButtonProps) {
  const [count, setCount] = useState(0);
  const [buttonCountText, setButtonCountText] = useState(`I was pressed ${count} times`);
  useEffect(() => {
    setButtonCountText(`I was pressed ${count} times!`);
  }, [count]);

  return (
    <ReactButton 
     title={props.buttonText + buttonCountText}
     onPress={props.onClick != null ? props.onClick : () => {setCount(count + 1)}}/>
  )
}