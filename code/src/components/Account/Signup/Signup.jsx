import Button from '../../Button/Button'
import Input from '../../Input/Input'
import Choose from '../../Choose/Choose'

import * as FORM from '../../../js/utils/form'
import { signup } from '../../../js/account/account'

import '../Account.css'
import { useRef } from 'react'

function Signup() {
  const form = useRef(null)

  function click() {
    const data = FORM.getData(form?.current)

    signup(data)
  }

  return (
    <div className="h_100 df_f_ce">
      <div className="account_area list_y">
        <div className="df_ai_ce df_jc_sb">
          <div className="title">Signin</div>
          <Button onClick={() => (window.location.href = '/account/login')}>
            Log in
          </Button>
        </div>
        <div className="list_y" ref={form}>
          <div className="list_x df_ai_ce">
            <span className="material-symbols-outlined">person</span>
            <Input type="text" label="Name" maxLength="20" />
          </div>
          <div className="list_x df_ai_ce">
            <span className="material-symbols-outlined">person</span>
            <Input type="text" label="Username" maxLength="20" />
          </div>
          <Choose axe="x" label="Gender">
            <span>Male</span>
            <span>Female</span>
          </Choose>
          <div className="list_x df_ai_ce">
            <span className="material-symbols-outlined">vpn_key</span>
            <Input type="password" label="Password" maxLength="20" />
          </div>
          <Button colorful="true" onClick={click}>
            Sign up
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Signup
