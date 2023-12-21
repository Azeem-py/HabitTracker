import { useState, useRef } from 'react'
import Overlay from 'react-bootstrap/Overlay'
import { BsThreeDotsVertical } from 'react-icons/bs'
import NewHabitModal from './NewHabitModal'

function ModPopOver() {
  const [show, setShow] = useState(false)
  const [showModal, setShowModal] = useState(false)

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
            <span>
              <p onClick={() => setShowModal(true)}>Edit</p>
            </span>
            <p>Delete</p>
          </div>
        )}
      </Overlay>
      <NewHabitModal
        showModal={showModal}
        setShowModal={setShowModal}
        edit={true}
      />
    </>
  )
}

export default ModPopOver
