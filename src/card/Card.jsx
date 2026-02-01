import { useState } from 'react'
import './Card.css'

const Card = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openEnvelope = () => setIsOpen(true)
  const closeEnvelope = () => setIsOpen(false)

  return (
    <>
      <div className="envelope-wrapper">
        <div
          id="envelope"
          className={isOpen ? 'open' : 'close'}
          onClick={openEnvelope}
        >
          <div className="front flap"></div>
          <div className="front pocket"></div>

          <div className="letter">
            <div className="words line1">To My Love,</div>
            <div className="words line2">You're the ....</div>
            <div className="words line3"></div>
            <div className="words line4"></div>
          </div>

          <div className="hearts">
            <div className="heart a1"></div>
            <div className="heart a2"></div>
            <div className="heart a3"></div>
          </div>
        </div>
      </div>

      <div className="reset">
        <button onClick={openEnvelope}>Open</button>
        <button onClick={closeEnvelope}>Close</button>
      </div>
    </>
  )
}

export default Card
