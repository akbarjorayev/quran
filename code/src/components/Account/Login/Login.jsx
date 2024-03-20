import Button from '../../Button/Button'
import Input from '../../Input/Input'

import * as FORM from '../../../js/utils/form'
import { login } from '../../../js/account/account'

import '../Account.css'
import { useRef } from 'react'

function Signin() {
  const form = useRef(null)

  function click() {
    const data = FORM.getData(form?.current)

    login(data)
  }

  return (
    <div className="h_100 df_f_ce">
      <div className="account_area list_y">
        <div className="df_ai_ce df_jc_sb">
          <div className="title">Log in</div>
          <Button onClick={() => window.location.href = '/account/signup'}>Sign up</Button>
        </div>
        <div className="list_y" ref={form}>
          <div className="list_x df_ai_ce">
            <span className="material-symbols-outlined">person</span>
            <Input type="text" label="Username" maxLength="20" />
          </div>
          <div className="list_x df_ai_ce">
            <span className="material-symbols-outlined">vpn_key</span>
            <Input type="password" label="Password" maxLength="20" />
          </div>
          <Button colorful="true" onClick={click}>
            Log in
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Signin
