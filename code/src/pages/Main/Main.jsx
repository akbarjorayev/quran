import React, { useState } from 'react'

import Settings from './components/Settings/Settings'
import Search from './components/Search/Search'

import './Main.css'

const Menu = React.lazy(() => import('./components/Menu/Menu'))

const pages = {
  settings: <Settings />,
}

function Main() {
  const [activePage, setActievPage] = useState('settings')
  const [showSearch, setShowSearch] = useState(false)

  return (
    <div className="main_area">
      <div className="menu">
        <Menu
          setActievPage={setActievPage}
          useSearch={() => [showSearch, setShowSearch]}
        />
      </div>
      {showSearch && (
        <div className="alert_win df_jc_ce">
          <div className="alert_bg" onClick={() => setShowSearch(false)}></div>
          <Search />
        </div>
      )}
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
