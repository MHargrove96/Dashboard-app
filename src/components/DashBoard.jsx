import React, { useState, useEffect } from 'react'

import CustomCard from './CustomCard'
import ToggleSwitch from './ToggleSwitch'
import SliderBar from './SliderBar'
import SelectDropDown from './SelectDropDown'

import '../styles/DashBoard.css'


function DashBoard() {

  const [online, setOnline] = useState(true)
  const [volume, setVolume] = useState(30)
  const [quality, setQuality] = useState(2)

  useEffect(() => {
    console.log(online)
    console.log(volume)
  }, [online, volume])


  return (
    <div>
      <h1 id='WelcomeTitle' >Welcome User!</h1>
    <div className='CardWrapper'>
      <CustomCard
      title={'Online Mode'}
      body={'is this application connected to the internet?'}
      component={ToggleSwitch}
      state={online}
      setState={setOnline}
      />
       <CustomCard
      title={'Online Mode'}
      body={'is this application connected to the internet?'}
      component={SliderBar}
      state={volume}
      setState={setVolume}
      />
       <CustomCard
      title={'Online Mode'}
      body={'is this application connected to the internet?'}
      component={SelectDropDown}
      state={quality}
      setState={setQuality}
      />
    </div>
    <section>
      <h2>System Notifictions:</h2>
      {!online && <p>Your application is offline. You won't be able to share or stream music to other devices.</p>}
      {volume >= 80 && <p>Listening to music at a high volume could cause long-term hearing loss.</p>}
      {quality == 1 && <p>Music quality is degraded. Increase quality if your connection allows it.</p>}
    </section>
    </div>
  )
}

export default DashBoard