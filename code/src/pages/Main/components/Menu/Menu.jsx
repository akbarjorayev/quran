import { useRef } from 'react'
import Button from '../../../../components/Button/Button'

import './Menu.css'

function Menu({ setActievPage, useSearch }) {
  const menu = useRef(null)
  const [showSearch, setShowSearch] = useSearch()

  function activeClick(btn) {
    const active = btn.target.getAttribute('active')
    setActievPage(active)

    const activeBtn = menu.current?.querySelector('button[active].active')
    if (activeBtn) activeBtn.classList.remove('active')
    btn.target.classList.add('active')
  }

  return (
    <div className="menu_area list_x">
      <div className="menu_con list_y" ref={menu}>
        <div className="list_y df_ai_ce">
          <Button className="active" active="home" onClick={activeClick}>
            <span className="material-symbols-outlined">home</span>
          </Button>
          <Button
            className={showSearch ? 'active' : ''}
            onClick={() => setShowSearch((cur) => !cur)}
          >
            <span className="material-symbols-outlined">search</span>
          </Button>
          <Button active="quran" onClick={activeClick}>
            <span className="material-symbols-outlined">menu_book</span>
          </Button>
        </div>
        <div className="list_y df_ai_ce">
          <Button active="account" onClick={activeClick}>
            <img
              src="https://i.stack.imgur.com/34AD2.jpg"
              loading="lazy"
              alt=""
            />
          </Button>
          <Button active="settings" onClick={activeClick}>
            <span className="material-symbols-outlined">settings</span>
          </Button>
        </div>
      </div>
      <div className="line_y"></div>
    </div>
  )
}

export default Menu
