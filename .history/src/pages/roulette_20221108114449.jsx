import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { Wheel } from 'react-custom-roulette'

export const Roulette = () => {
  const data = [
    { option: '0', style: { backgroundColor: 'green', textColor: 'black' } },
    { option: '1', style: { backgroundColor: 'white' } },
    { option: '2' },
  ]
  const [mustSpin, setMustSpin] = useState(false)
  //   const [prizeNumber, setPrizeNumber] = useState(0)
  return (
    <section className="container-roulette">
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={3}
        // prizeNumber={prizeNumber}
        data={data}
        backgroundColors={['#3e3e3e', '#df3428']}
        textColors={['#ffffff']}
      />
    </section>
  )
}
