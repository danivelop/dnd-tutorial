import React, { useState } from 'react'

import { PositionDispatcher } from 'contexts/positionContext'
import Board from 'components/Board'

function App() {
  const [position, setPosition] = useState([0, 0])

  return (
    <PositionDispatcher.Provider value={setPosition}>
      <Board position={position} />
    </PositionDispatcher.Provider>
  )
}

export default App
