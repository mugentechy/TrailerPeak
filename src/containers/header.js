import React from 'react'
import { Header } from '../components'
import * as ROUTES from '../constants/routes'
import logo from '../logo.png'
import bg from '../home-CA-bg.jpg'
export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.BROWSE} alt='TrailerPeak' src={logo} />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  )
}
