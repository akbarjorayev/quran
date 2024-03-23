import React, { useState } from 'react'

import Button from '../../../../../../components/Button/Button'
import Input from '../../../../../../components/Input/Input'
import Choose from '../../../../../../components/Choose/Choose'
import Loading from '../../../../../../components/Loading/Loading'

import './AccountData.css'

function AccountData() {
  const [editing, setEditing] = useState(false)
  const name = 'Akbar'
  const username = 'akbarjorayevAJ'
  const gender = 'female'

  if (editing) {
    return (
      <div className="account_con loading_area list_y">
        <div className="df_jc_sb df_ai_ce">
          <b>Editing</b>
          <div className="list_x">
            <Button>
              <span className="material-symbols-outlined fz_normal">done</span>
            </Button>
            <Button onClick={() => setEditing(false)}>
              <span className="material-symbols-outlined fz_normal">close</span>
            </Button>
          </div>
        </div>
        <Input
          type="text"
          placeholder="Name"
          maxLength="20"
          value={name}
          autoFocus
        />
        <Input
          type="text"
          placeholder="Username"
          maxLength="20"
          value={username}
        />
        <Choose axe="x" label="Gender" iOption={gender}>
          <div>Male</div>
          <div>Female</div>
        </Choose>
        {/* <Loading size="120px">Saving</Loading> */}
      </div>
    )
  }

  return (
    <>
      <div className="account_con loading_area df_ai_ce df_jc_sb">
        <div className="list_x df_ai_ce">
          <b className="name df_ai_ce">
            {gender === 'male' && (
              <span className="material-symbols-outlined fz_big gender_male">
                male
              </span>
            )}
            {gender === 'female' && (
              <span className="material-symbols-outlined fz_big gender_female">
                female
              </span>
            )}
            {name}
          </b>
          <div className="username txt_small txt_opa fz_small">@{username}</div>
        </div>
        <Button onClick={() => setEditing(true)}>
          <span className="material-symbols-outlined fz_normal">edit</span>
        </Button>
        {/* <Loading size="35px" /> */}
      </div>
    </>
  )
}

export default AccountData
