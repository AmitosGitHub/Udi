import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { Wheel } from 'react-custom-roulette'

export const Roulette = () => {
  const data = [
    {
      option: 'shirzooker',
      style: { backgroundColor: 'pink', textColor: 'black' },
    },
    { option: 'avivit_vivi_20', style: { backgroundColor: '#ffe6f7' } },
    { option: 'adi_tabuk' },
    { option: 'michaltropianski' },
    { option: 'ariel222' },
    { option: 'loren.shel1' },
    { option: 'liel7602' },
    { option: 'gili1cohen' },
    { option: 'neta_wa' },
    { option: 'marinnidam' },
    { option: 'nitzannhalfon' },
    { option: 'rina_peso_z' },
    { option: 'shanikup' },
    { option: 'yafit_ad' },
    { option: 'hodaya.moalen' },
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
