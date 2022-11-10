import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { Wheel } from 'react-custom-roulette'
// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export const Roulette = () => {
  const data = [
    { option: '0', style: { backgroundColor: 'pink', textColor: 'black' } },
    { option: '1', style: { backgroundColor: '#ffe6f7' } },
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

  const Confetti = (width, height) => {
    //   const { width, height } = useWindowSize()
    return
    // <Confetti width={300} height={300} />
    ;<Confetti
      drawShape={(ctx) => {
        ctx.beginPath()
        for (let i = 0; i < 22; i++) {
          const angle = 0.35 * i
          const x = (0.2 + 1.5 * angle) * Math.cos(angle)
          const y = (0.2 + 1.5 * angle) * Math.sin(angle)
          ctx.lineTo(x, y)
        }
        ctx.stroke()
        ctx.closePath()
      }}
    />
  }

  return (
    <section className="container-roulette">
      <div className="prize">{Confetti(300, 300)}</div>
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
