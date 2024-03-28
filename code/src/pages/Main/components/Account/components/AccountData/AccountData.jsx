import React, { useEffect, useRef, useState } from 'react'

import Button from '../../../../../../components/Button/Button'
import Input from '../../../../../../components/Input/Input'
import Choose from '../../../../../../components/Choose/Choose'
import Loading from '../../../../../../components/Loading/Loading'
import Message from '../../../../../../components/Message/Message'

import { loadLocal } from '../../../../../../js/db/localStorage'
import { getAccount, edit } from '../../../../../../js/account/account'
import { getData } from '../../../../../../js/utils/form'
import { msgData } from '../../../../../../js/utils/message'

function AccountData() {
  const form = useRef(null)
  const [account, setAccount] = useState(false)
  const [editing, setEditing] = useState(false)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState({
    text: '',
    type: 'error',
    show: false,
  })

  useEffect(() => {
    const username = loadLocal('quran').accounts.active
    async function loadAccount() {
      const userAccount = await getAccount(username)
      setAccount(userAccount)
    }
    loadAccount()
  }, [saving])

  async function save() {
    setSaving(true)

    const formData = getData(form.current)
    if (!formData.ok) {
      setMessage({ msg: formData.msg, type: 'error', show: true })
      setTimeout(
        () => setMessage({ ...message, show: false }),
        msgData.time * 1000
      )
      return
    }

    const username = loadLocal('quran').accounts.active
    await edit(username, formData)

    setSaving(false)
  }

  if (account === null) return null

  if (editing) {
    return (
      <div className="con_bd_cl loading_area list_y" ref={form}>
        <Message show={message.show} type={message.type}>
          {message.msg}
        </Message>
        <div className="df_jc_sb df_ai_ce">
          <b>Editing</b>
          <div className="list_x">
            <Button onClick={save}>
              <span className="material-symbols-outlined fz_normal">done</span>
            </Button>
            <Button onClick={() => setEditing(false)}>
              <span className="material-symbols-outlined fz_normal">close</span>
            </Button>
          </div>
        </div>
        <Input
          type="text"
          label="Name"
          maxLength="20"
          value={account?.name}
          autoFocus
        />
        <Choose axe="x" label="Gender" iOption={account?.gender}>
          <div className="list_x df_ai_ce" option="male">
            <span className="material-symbols-outlined fz_normal gender_male">
              male
            </span>
            <div>Male</div>
          </div>
          <div className="list_x df_ai_ce" option="female">
            <span className="material-symbols-outlined fz_normal gender_female">
              female
            </span>
            <div>Female</div>
          </div>
        </Choose>
        {saving && <Loading size="140px">Saving</Loading>}
      </div>
    )
  }

  return (
    <>
      <div className="con_bd_cl loading_area df_ai_ce df_jc_sb">
        <div className="list_x df_ai_ce">
          <b className="name df_ai_ce">
            {account?.gender === 'male' && (
              <span className="material-symbols-outlined fz_big gender_male">
                male
              </span>
            )}
            {account?.gender === 'female' && (
              <span className="material-symbols-outlined fz_big gender_female">
                female
              </span>
            )}
            {account?.name}
          </b>
          <div className="username txt_small txt_opa fz_small">
            @{account?.username}
          </div>
        </div>
        <Button onClick={() => setEditing(true)}>
          <span className="material-symbols-outlined fz_normal">edit</span>
        </Button>
        {!account && <Loading size="40px" />}
      </div>
    </>
  )
}

export default AccountData
