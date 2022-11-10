import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { Wheel } from 'react-custom-roulette'

export const Roulette = () => {
  const [data, setData] = useState([
    {
      option: '',
      style: { backgroundColor: 'pink', textColor: 'black' },
    },
    {
      option: '',
      style: { backgroundColor: '#ffe6f7', textColor: 'black' },
    },
    { option: '', style: { textColor: 'black' } },
    { option: '', style: { textColor: 'black' } },
    { option: '', style: { textColor: 'black' } },
    { option: '', style: { textColor: 'black' } },
    { option: '', style: { textColor: 'black' } },
    { option: '', style: { textColor: 'black' } },
    { option: '', style: { textColor: 'black' } },
    { option: '', style: { textColor: 'black' } },
    { option: '', style: { textColor: 'black' } },
    { option: '', style: { textColor: 'black' } },
    { option: '', style: { textColor: 'black' } },
    { option: '', style: { textColor: 'black' } },
    { option: '', style: { textColor: 'black' } },
    { option: '', style: { textColor: 'black' } },
    { option: '', style: { textColor: 'black' } },
    { option: '', style: { textColor: 'black' } },
    { option: '', style: { textColor: 'black' } },
  ])

  const [mustSpin, setMustSpin] = useState(false)
  const [prizeNumber, setPrizeNumber] = useState(15)

  // const [render, setRender] = useState(false)

  useEffect(() => {
    console.log('render:')
  }, [data])

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length)
    setPrizeNumber(0)
    setMustSpin(true)
    console.log('The winner is:', data)
  }
  const onOpenPrize = () => {
    // console.log('The winner is:', data)
    setTimeout(() => {
      data[0].option = 'shirzooker'
      const newData = [...data]
      console.log('The winner is:', data)
      setData(newData)
    }, 1000)
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
          onOpenPrize()
          setMustSpin(false)
        }}
      />
      <button onClick={handleSpinClick}>SPIN</button>
    </section>
  )
}
