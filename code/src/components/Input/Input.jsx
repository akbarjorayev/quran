import React, { useRef, useState } from 'react'
import Button from '../Button/Button'

import './Input.css'

const Input = React.forwardRef(({ label, ...props }, ref) => {
  const inputRef = useRef(null)
  const [labelActive, setLabelActive] = useState(false)
  const [seePassword, setSeePassword] = useState('visibility')

  function handleInputChange() {
    inputRef.current.classList.remove('error')
    setLabelActive(inputRef.current.value.length > 0)
  }

  function setInputRef(input) {
    inputRef.current = input
    if (typeof ref === 'function') ref(input)
    else if (ref) ref.current = input
  }

  function clearValue() {
    if (props.type === 'text') {
      inputRef.current.value = ''
      setLabelActive(false)
    }
    if (props.type === 'password') {
      const { type } = inputRef.current

      inputRef.current.type = type === 'text' ? 'password' : 'text'
      setSeePassword(type === 'text' ? 'visibility' : 'visibility_off')
    }
    inputRef.current.focus()
  }

  return (
    <div className="input_area list_x df_ai_ce">
      <label className={labelActive ? 'active' : ''}>{label}</label>
      <input
        {...props}
        ref={(input) => setInputRef(input)}
        onChange={handleInputChange}
      />
      <Button className="fz_small df_ce" onClick={clearValue}>
        {props.type === 'password' && (
          <span className="material-symbols-outlined">{seePassword}</span>
        )}

        {props.type === 'text' && (
          <span className="material-symbols-outlined">close</span>
        )}
      </Button>
    </div>
  )
})

export default Input
