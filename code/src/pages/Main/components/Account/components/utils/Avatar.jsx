import { useEffect, useState } from 'react'

import { load } from '../../../../../../js/db/db'
import { loadLocal } from '../../../../../../js/db/localStorage'

import './Avatar.css'

async function getName() {
  const username = loadLocal('quran').accounts.active
  const name = await load(`accounts/${username}/name`)

  return name[0]
}

function Avatar({ style }) {
  const [name, setName] = useState(() => '')

  useEffect(() => {
    if (name) setName(name)

    async function loadImg() {
      setName(await getName())
    }
    loadImg()
  }, [])

  return (
    <div className="avatar df_f_ce con_bd_cl" style={style}>
      <span>{name}</span>
    </div>
  )
}

export default Avatar
