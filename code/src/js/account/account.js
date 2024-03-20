import { save, load } from '../db/db'
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
    console.log('username has used')
    return
  }

  await save(`accounts/${username}`, user)

  saveLocal('quran', {
    accounts: {
      usernames: [username],
      active: username,
    },
  })
}

async function login(data) {
  if (!data) return { msg: 'Wrong data', ok: false }

  const user = {
    ...data.inputs,
    ...data.chosen,
  }
  const { username, password } = user

  const localData = loadLocal('quran')
  if (localData.accounts.usernames.includes(username)) {
    console.log('you have already logged in')
    return
  }

  const account = await load(`accounts/${username.trim()}`)

  if (!account) {
    console.log('there is no account with this username')
    return
  }

  if (account.password !== password) {
    console.log('wrong password')
    return
  }

  saveLocal('quran', {
    accounts: {
      ...localData.accounts,
      usernames: [...localData.accounts.usernames, username],
    },
  })
}

export { signup, login }
