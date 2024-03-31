import { save, load, edit as editDB } from '../db/db'
import { loadLocal, saveLocal } from '../db/localStorage'

async function signup(data) {
  if (!data) return { msg: 'Wrong data', ok: false }

  const user = {
    ...data.inputs,
    ...data.chosen,
  }
  const { username } = user

  const notFreeUsername = await load(`accounts/${username}`)
  if (notFreeUsername) {
    return { msg: 'Username has used', msgType: 'warning', ok: false }
  }

  await save(`accounts/${username}`, user)

  saveLocal('quran', {
    accounts: {
      usernames: [username],
      active: username,
    },
  })
  return { ok: true }
}

async function login(data) {
  if (!data.ok) return { msg: 'Wrong data', ok: false }

  const user = {
    ...data.inputs,
    ...data.chosen,
  }
  const { username, password } = user

  const localData = loadLocal('quran')
  if (localData.accounts.usernames.includes(username)) {
    return { msg: 'You have already logged in', msgType: 'success', ok: false }
  }

  const account = await load(`accounts/${username.trim()}`)

  if (!account) {
    return {
      msg: 'There is no account with this username',
      msgType: 'warning',
      ok: false,
    }
  }

  if (account.password !== password) {
    return { msg: 'Wrong password', msgType: 'warning', ok: false }
  }

  saveLocal('quran', {
    accounts: {
      ...localData.accounts,
      usernames: [...localData.accounts.usernames, username],
    },
  })
  return { ok: true }
}

async function editUser(username, newData) {
  if (!newData.ok) return { msg: 'Wrong data', ok: false }

  const user = {
    ...newData.inputs,
    ...newData.chosen,
  }

  await editDB(`accounts/${username}`, user)
}

async function getAccount(username) {
  const account = await load(`accounts/${username}`)
  if (!account) return null

  return account
}

export { signup, login, getAccount, editUser }
