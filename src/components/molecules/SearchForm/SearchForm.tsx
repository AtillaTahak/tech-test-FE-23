import React from 'react'
import { TextInput,Button } from '../../atoms'
type Props = {}

const SearchForm = (props: Props) => {
  return (
    <>
       <TextInput placeholder="Search" />
        <Button>Search</Button>
    </>
  )
}

export default SearchForm