import React from 'react'
import {StyledTable} from './table.styled'
type Props = {
}

const Table = (props: Props) => {
  return (
    <StyledTable>
        <thead>
            <tr>
                <th>UserName</th>
                <th>Date & Time</th>
                <th>Status</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>UserName</td>
                <td>Fri, Apr 9, 2021</td>
                <td>Pending</td>
                <td>$12.00</td>
            </tr>
            <tr>
                <td>UserName</td>
                <td>Fri, Apr 9, 2021</td>
                <td>Pending</td>
                <td>$12.00</td>
            </tr>
            <tr>
                <td>UserName</td>
                <td>Fri, Apr 9, 2021</td>
                <td>Pending</td>
                <td>$12.00</td>
            </tr>
        </tbody>
    </StyledTable>

  )
}

export default Table