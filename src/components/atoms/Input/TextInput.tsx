import React from 'react'
import {StyledTextSearch} from './textInput.styled'

type Props = {
    primary?: boolean;
    placeholder?: string;
}

const TextInput = (props: Props) => {
  return (
    <>
      {props.primary ? (
        <StyledTextSearch $primary placeholder={props.placeholder}/>
      ) : (
        <StyledTextSearch placeholder={props.placeholder}/>
      )}
    </>
  )
}

export default TextInput