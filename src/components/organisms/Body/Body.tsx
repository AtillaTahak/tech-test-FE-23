import React from 'react'
import { Text, Tag } from '../../atoms'
import { TitleContainer } from './body.styled'
import { Table } from '../../molecules'
type Props = {}

const Body = (props: Props) => {
  return (
    <>
      <TitleContainer>
        <Tag color='#999DFF'></Tag>
        <Text type='h5' >Payouts History</Text>
      </TitleContainer>
      <Table></Table>
    </>
  )
}

export default Body