import React from 'react';

const ToolBar = ({
  toggleSelectAll,
  messageData,
}) => {
const checkBox = () => {
        var counter = 0
        messageData.forEach((e,i)=>{
          if (messageData[i].selected = true){
            counter ++
          }
          else if(messageData[i].selected = false) {
          }
        })
        if(counter === 0){
          return `"fa fa-square-o"`
        }
        else if (counter === messageData.length){
          return `"fa fa-check-square-o"`
        }
        else {return `"fa fa-minus-square-o"`}
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

            <button className="btn btn-default">
              <i className="fa fa-minus-square-o" onClick={()=>toggleSelectAll()}></i>
            </button>

            <button className="btn btn-default">Mark As Read</button>

            <button className="btn btn-default">Mark As Unread</button>

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
