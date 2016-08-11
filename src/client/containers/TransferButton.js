import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { transfer } from '../actions'

const TransferButton = ({ id, dispatch }) => {
  return (
    <button onClick={() => dispatch(transfer(id))}>
      Transfer
    </button>
  )
}

TransferButton.propTypes = {
  id: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default connect()(TransferButton)
