import React, { useState } from 'react'

import Settings from './components/Settings/Settings'

import './Main.css'

const Menu = React.lazy(() => import('../../components/Menu/Menu'))

const pages = {
  settings: <Settings />,
}

function Main() {
  const [activePage, setActievPage] = useState('settings')

  return (
    <div className="main_area">
      <div className="menu">
        <Menu setActievPage={setActievPage} />
      </div>
      <div className="main">
        {activePage === 'home' && (
          <>
            <h1>Home</h1>
          </>
        )}
        {pages[activePage]}
      </div>
    </div>
  )
}

export default Main
