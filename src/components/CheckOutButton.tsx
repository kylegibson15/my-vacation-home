import React from 'react'
import { Chip } from '@material-ui/core'
import { AssignmentTurnedInOutlined } from '@material-ui/icons'
import { NavLink } from 'react-router-dom'

function CheckOutButton() {
  return (
    <NavLink to="/my-vacation-home/check-out">
      <Chip
        icon={<AssignmentTurnedInOutlined style={{ color: 'white' }} />}
        label="Check Out"
        size="small"
        style={{
          boxShadow:
            '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
          color: 'white',
          backgroundColor: '#CA761B',
          padding: '0px 8px',
          position: 'fixed',
          top: 15,
          right: 15,
          zIndex: 10,
        }}
      />
    </NavLink>
  )
}

export default CheckOutButton
