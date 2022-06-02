import React from 'react';

const Dropdown = (props) => {
    const items = props.items
  return (
    <div className='drop-down-list'>
      {
          items.map((item) => (
              <div className='drop-down-list__element' key={item.name}>
                  {item.name}
              </div>
          ))
      }
    </div>
  )
}

export default Dropdown;