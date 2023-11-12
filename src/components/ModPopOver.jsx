import { useState, useRef } from 'react'
import Overlay from 'react-bootstrap/Overlay'
import { BsThreeDotsVertical } from 'react-icons/bs'

function ModPopOver() {
  const [show, setShow] = useState(false)
  const target = useRef(null)

  return (
    <>
      <span ref={target} onClick={() => setShow(!show)}>
        <BsThreeDotsVertical />
      </span>
      <Overlay target={target.current} show={show} placement='left'>
        {({ ...props }) => (
          <div
            {...props}
            className='shadow-card text-[#838383] font-semibold bg-white flex flex-col gap-1'
            style={{
              position: 'absolute',
              padding: '2px 10px',
              borderRadius: 3,
              ...props.style,
            }}
          >
            <p>Edit</p>
            <p>Delete</p>
          </div>
        )}
      </Overlay>
    </>
  )
}

export default ModPopOver
