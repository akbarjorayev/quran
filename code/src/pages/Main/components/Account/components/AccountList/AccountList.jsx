import React, { useEffect, useState } from 'react'

import Avatar from '../utils/Avatar'
import Loading from '../../../../../../components/Loading/Loading'
import Button from '../../../../../../components/Button/Button'

import { load } from '../../../../../../js/db/db'
import { loadLocal } from '../../../../../../js/db/localStorage'
import { changeAccount } from '../../../../../../js/account/account'

export default function AccountList() {
  const [accounts, setAccounts] = useState([])

  useEffect(() => {
    const dataArr = []
    async function loadData() {
      const { usernames } = loadLocal('quran').accounts
      const { active } = loadLocal('quran').accounts

      for (let i = 0; i < usernames.length; i++) {
        if (usernames[i] === active) continue

        const data = await load(`accounts/${usernames[i]}`)
        dataArr.push(data)
      }
      setAccounts(dataArr)
    }
    loadData()
  }, [])

  return (
    <>
      {accounts.length > 0 && (
        <>
          {accounts.map((account, i) => (
            <div
              key={i}
              className="con_bd_cl con_ha df_ai_ce list_x fz_small"
              onClick={() => changeAccount(accounts[i]?.username)}
            >
              <Avatar
                style={{ height: 30, fontSize: '14px' }}
                letter={account?.name[0]}
              />
              <span>{account?.name}</span>
            </div>
          ))}
          <div className="df_f_ce">
            <Button
              className="df_f_ce list_x w_max medium"
              colorful="true"
              onClick={() => (window.location.href = 'account/login')}
            >
              <span className="material-symbols-outlined fz_normal">
                add_circle
              </span>
              <span>Add account</span>
            </Button>
          </div>
        </>
      )}
      {accounts.length === 0 && (
        <div className="con_bd_cl loading_area">
          <Loading size="50px">Accounts list</Loading>
        </div>
      )}
    </>
  )
}
