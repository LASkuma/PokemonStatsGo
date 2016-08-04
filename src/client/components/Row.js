import React, { PropTypes } from 'react'

const Row = ({ cols }) => {
  return (
    <tr>
      {cols.map((col, ind) => <td key={ind}>{col}</td>)}
    </tr>
  )
}

Row.propTypes = {
  cols: PropTypes.arrayOf(PropTypes.node).isRequired
}

export default Row
