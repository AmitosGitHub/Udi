import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { Wheel } from 'react-custom-roulette'

export const Roulette = () => {
  const data = [
    { option: '0', style: { backgroundColor: 'pink', textColor: 'black' } },
    { option: '1', style: { backgroundColor: 'white' } },
    { option: '3' },
    { option: '4' },
    { option: '5' },
    { option: '6' },
    { option: '7' },
    { option: '8' },
    { option: '9' },
    { option: '10' },
    { option: '11' },
    { option: '12' },
    { option: '13' },
    { option: '14' },
    { option: '15' },
  ]
  const [mustSpin, setMustSpin] = useState(false)
  const [prizeNumber, setPrizeNumber] = useState(15)

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length)
    setPrizeNumber(newPrizeNumber)
    setMustSpin(true)
  }

  return (
    <section className="container-roulette">
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        backgroundColors={[
          '#ffffff',
          '#ffe7e6',
          '#ffcfcc',
          '#ffb6b3',
          '#ff8680',
          '#ff6e66',
          '#ff3d33',
          '#ff1409',
          '#b30900',
          '#990800',
          '#660500',
          '#800055',
          '#b30077',
          '#e60099',
          '#ff33bb',
          '#ff99dd',
        ]}
        textColors={['#ffffff']}
        onStopSpinning={() => {
          setMustSpin(false)
        }}
      />
      <button onClick={handleSpinClick}>SPIN</button>
    </section>
  )
}
