import React from 'react'

export default function Alert(props) {
  return (
    <div style={{ height: 60 }}>
      {
        props.alert &&

        <div className="alert alert-primary alert-dismissible fade show" role="alert"><strong> {props.alert.type}</strong>:{props.alert.msg}
          <button type='button' className='btn-close' data-bs-dismiss="alert" aria-label="Close"></button>

        </div>}
    </div>

  )
}