import React, { useState } from 'react'

import Menu from './components/Menu/Menu'
import Settings from './components/Settings/Settings'
import Search from './components/Search/Search'
import Quran from './components/Quran/Quran'
import Home from './components/Home/Home'

import './Main.css'

const pages = {
  home: <Home />,
  quran: <Quran />,
  settings: <Settings />,
}

function Main() {
  const [activePage, setActievPage] = useState('home')
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
      <div className="main">{pages[activePage]}</div>
    </div>
  )
}

export default Main
