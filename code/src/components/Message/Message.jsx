import './Message.css'

const icons = {
  default: 'notifications',
  success: 'check_circle',
  warning: 'warning',
  error: 'error',
}

function getIcon(type) {
  return <span className="material-symbols-outlined icon">{icons[type]}</span>
}

function Message({ children, type = 'default', show }) {
  if (!show && !children) return null
  const icon = getIcon(type)

  return (
    <div className={`message_area list_x df_ai_ce ${type}`}>
      {icon}
      <p>{children}</p>
      <div className="message_timeline"></div>
    </div>
  )
}

export default Message