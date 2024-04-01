import { useState } from 'react'
import Button from '../Button/Button'

import './Alert.css'

export default function Alert({ children, title }) {
  const [show, setShow] = useState(true)
  if (!show) return null

  return (
    <div className="alert_area df_f_ce">
      <div className="alert_bg" onClick={() => setShow(false)}></div>
      <div className="alert_con list_y">
        <div className="alert_con_top df_ai_ce df_jc_sb list_x">
          <div className="title">{title}</div>
          <Button onClick={() => setShow(false)}>
            <span className="material-symbols-outlined fz_normal">close</span>
          </Button>
        </div>
        {children}
      </div>
    </div>
  )
}
