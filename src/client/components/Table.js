import React, { PropTypes } from 'react'

const Table = ({ headers, Row, ids }) => {
  return (
    <table style={{textAlign: 'center'}}>
      <thead>
        <tr>
          {headers.map((header, ind) => <th key={ind}>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {ids.map((id, ind) => <Row id={id} key={id} index={ind} />)}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  Row: PropTypes.element.isRequired,
  ids: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Table
