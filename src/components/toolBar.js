import React from 'react';

const ToolBar = ({
  toggleSelectAll,
  messageData,
  markAsRead,
  markAsUnread
}) => {

        var selectedMessages = messageData.filter(item => item.selected === true).length
        var selectBox
        var defaulted
        if (selectedMessages === messageData.length) {
          selectBox = `fa fa-check-square-o`
        }
          else if (selectedMessages === 0) {
            selectBox = `fa fa-square-o`
          }
          else {
            selectBox = `fa fa-minus-square-o`
          }

        if (selectedMessages === 0) {
          defaulted = "disabled"
        }
  return (
        <div className="row toolbar">
          <div className="col-md-12">
            <p className="pull-right">
              <span className="badge badge">4</span>
              unread messages
            </p>

            <a className="btn btn-danger">
              <i className="fa fa-plus"></i>
            </a>

            <button className="btn btn-default" onClick={()=>toggleSelectAll()}>
              <i className={ selectBox } ></i>
            </button>

            <button className="btn btn-default" disabled={ defaulted } onClick={ ()=> markAsRead()}>Mark As Read</button>

          <button className="btn btn-default" disabled={ defaulted } onClick={ ()=> markAsUnread()} >Mark As Unread</button>

            <select className="form-control label-select">
              <option>Apply label</option>
              <option value="dev">dev</option>
              <option value="personal">personal</option>
              <option value="gschool">gschool</option>
            </select>

            <select className="form-control label-select">
              <option>Remove label</option>
              <option value="dev">dev</option>
              <option value="personal">personal</option>
              <option value="gschool">gschool</option>
            </select>

            <button className="btn btn-default">
              <i className="fa fa-trash-o"></i>
            </button>
          </div>
        </div>
  )
}

export default ToolBar
