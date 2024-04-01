import React, { useEffect, useRef, useState } from 'react'

import Button from '../../../../../../components/Button/Button'
import Input from '../../../../../../components/Input/Input'
import Choose from '../../../../../../components/Choose/Choose'
import Loading from '../../../../../../components/Loading/Loading'
import Message from '../../../../../../components/Message/Message'
import Avatar from '../utils/Avatar'

import { loadLocal } from '../../../../../../js/db/localStorage'
import { getAccount, editUser } from '../../../../../../js/account/account'
import { getData } from '../../../../../../js/utils/form'
import { msgData } from '../../../../../../js/utils/message'
import { elText } from '../../../../../../js/utils/copy'

function AccountData() {
  const form = useRef(null)
  const nameRef = useRef(null)
  const usernameRef = useRef(null)
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
      setAccount(await getAccount(username))
    }
    loadAccount()
  }, [saving])

  async function saveChanges() {
    setSaving(true)

    const formData = getData(form.current)
    if (!formData.ok) {
      setMessage({ msg: formData.msg, type: 'error', show: true })
      setTimeout(
        () => setMessage({ ...message, show: false }),
        msgData.time * 1000
      )
      setSaving(false)
      return
    }

    const username = loadLocal('quran').accounts.active
    const editedData = await editUser(username, formData)

    if (!editedData.ok) {
      setMessage({ msg: editedData.msg, type: editedData.msgType, show: true })
      setTimeout(
        () => setMessage({ ...message, show: false }),
        msgData.time * 1000
      )
      setSaving(false)
      return
    }

    setSaving(false)
    setEditing(false)

    setMessage({ msg: 'Changes saved', type: 'success', show: true })
    setTimeout(
      () => setMessage({ ...message, show: false }),
      msgData.time * 1000
    )
  }

  function copy(elRef) {
    const msg = elText(elRef)

    setMessage({ ...msg, type: 'success', show: true })
    setTimeout(
      () => setMessage({ ...message, show: false }),
      msgData.time * 1000
    )
  }

  if (account === null) return null

  if (editing) {
    return (
      <div className="con_bd_cl loading_area list_y" ref={form}>
        <Message show={message.show} type={message.type}>
          {message.msg}
        </Message>
        <div className="df_jc_sb df_ai_ce">
          <b>Edit</b>
          <Button className="list_x_small" onClick={() => setEditing(false)}>
            <span className="material-symbols-outlined fz_normal">close</span>
            <span>Close</span>
          </Button>
        </div>
        <div className="list_x df_ai_ce">
          <Avatar style={{ height: '70px' }}></Avatar>
          <div className="list_y w_100 df_ai_ce_child">
            <div className="list_x">
              <span className="material-symbols-outlined">person</span>
              <Input
                type="text"
                label="Name"
                value={account?.name}
                maxLength="20"
                autoFocus
              />
            </div>
            <div className="list_x">
              <span className="material-symbols-outlined">alternate_email</span>
              <Input
                type="text"
                label="Username"
                value={account?.username}
                maxLength="20"
              />
            </div>
          </div>
        </div>
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
        <Button
          className="df_f_ce list_x_small"
          colorful="true"
          onClick={saveChanges}
        >
          <span className="material-symbols-outlined fz_big">check_circle</span>
          <span>Save changes</span>
        </Button>
        {saving && <Loading size="210px">Saving</Loading>}
      </div>
    )
  }

  return (
    <>
      <div className="con_bd_cl loading_area df_ai_st df_ai_ce_child df_jc_sb">
        <Message show={message.show} type={message.type}>
          {message.msg}
        </Message>
        <div className="list_x">
          <Avatar style={{ width: '50px' }}></Avatar>
          <div className="list_y">
            <div className="w_100">
              <span
                className={`material-symbols-outlined fz_big gender_${account?.gender}`}
              >
                {account?.gender}
              </span>
              <b ref={nameRef} className="name" onClick={() => copy(nameRef)}>
                {account?.name}
              </b>
            </div>
            <div
              className="username txt_small txt_opa fz_small w_100"
              onClick={() => copy(usernameRef)}
            >
              @<span ref={usernameRef}>{account?.username}</span>
            </div>
          </div>
        </div>
        <Button className="list_x_small" onClick={() => setEditing(true)}>
          <span className="material-symbols-outlined fz_normal">edit</span>
          <span>Edit</span>
        </Button>
        {!account && <Loading size="60px">Main account</Loading>}
      </div>
    </>
  )
}

export default AccountData
