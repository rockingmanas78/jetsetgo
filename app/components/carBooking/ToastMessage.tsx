import React from 'react'

const ToastMessage = ({mssg}:any) => {
  return (
    <div>
        <div className="toast toast-top toast-end">
          <div className="alert alert-success">
              <span>{mssg}</span>
          </div>
        </div>
    </div>
  )
}

export default ToastMessage