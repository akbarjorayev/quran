import React from 'react'

import './Main.css'

const Menu = React.lazy(() => import('../../components/Menu/Menu'))

function Main() {
  return (
    <div className="main_area">
      <div className="menu">
        <Menu />
      </div>
      <div className="main">
        <h1>Main content</h1>
        <h2>hi</h2>
      </div>
    </div>
  )
}

export default Main
