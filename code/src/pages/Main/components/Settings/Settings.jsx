import React from 'react'

const AccountData = React.lazy(() =>
  import('./components/AccountData/AccountData')
)

function Settings() {
  return (
    <div className="list_y">
      <div>
        <div className="title">Settings</div>
        <div className="line_x"></div>
      </div>
      <AccountData />
    </div>
  )
}

export default Settings
