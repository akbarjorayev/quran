import Button from '../Button/Button'

import './Menu.css'

function Menu() {
  return (
    <div className="menu_area list_x">
      <div className="menu_con list_y">
        <div className="list_y df_ai_ce">
          <Button className="active">
            <span className="material-symbols-outlined">home</span>
          </Button>
          <Button>
            <span className="material-symbols-outlined">search</span>
          </Button>
          <Button>
            <span className="material-symbols-outlined">menu_book</span>
          </Button>
        </div>
        <div className="list_y df_ai_ce">
          <Button>
            <img
              src="https://i.stack.imgur.com/34AD2.jpg"
              loading="lazy"
              alt=""
            />
          </Button>
          <Button>
            <span className="material-symbols-outlined">settings</span>
          </Button>
        </div>
      </div>
      <div className="line_y"></div>
    </div>
  )
}

export default Menu