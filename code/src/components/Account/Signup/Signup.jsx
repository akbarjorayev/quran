import Button from '../../Button/Button'
import Input from '../../Input/Input'
import Choose from '../../Choose/Choose'

import * as FORM from '../../../js/utils/form'
import { signup } from '../../../js/account/account'
import { msgData } from '../../../js/utils/message'

import '../Account.css'
import React, { useRef, useState } from 'react'

const Message = React.lazy(() => import('../../Message/Message'))

function Signup() {
  const [message, setMessage] = useState({
    msg: '',
    type: 'default',
    show: false,
  })
  const form = useRef(null)

  async function click() {
    const formData = FORM.getData(form?.current)
    if (!formData.ok) {
      setMessage({ msg: formData.msg, type: 'error', show: true })
      setTimeout(() => setMessage({ ...message, show: false }), msgData.time)
      return
    }

    const signupData = await signup(formData)
    if (!signupData.ok) {
      setMessage({ msg: signupData.msg, type: 'error', show: true })
      setTimeout(() => setMessage({ ...message, show: false }), msgData.time)
      return
    }
  }

  return (
    <div className="h_100 df_f_ce">
      <Message show={message.show} type={message.type}>
        {message.msg}
      </Message>
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
