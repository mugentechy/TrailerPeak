import React, { useState, useContext, useEffect } from 'react'
import { Loading } from '../components'
import Banner from '../components/banner'
import Nav from '../components/nav'
import { Browse } from '../pages'


export default function BrowserContainer({ slides }) {
  const [loading, setLoading] = useState(true)

  return (
    <>
     
      <Nav />
      <Banner />
      <Browse />
    </>
  ) 
}





