import AccountData from './components/AccountData/AccountData'
import AccountList from './components/AccountList/AccountList'
import AccountAdd from './components/AccountAdd/AccountAdd'

function Account() {
  return (
    <div className="list_y">
      <AccountData />
      <AccountList />
      <AccountAdd/>
    </div>
  )
}

export default Account
