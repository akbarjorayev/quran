import { useEffect, useRef, useState } from 'react'
import './Choose.css'

function getLeft(element) {
  const rect = element.getBoundingClientRect()
  const parentRect = element.offsetParent.getBoundingClientRect()
  return rect.left - parentRect.left
}

function getTop(element) {
  const rect = element.getBoundingClientRect()
  const parentRect = element.offsetParent.getBoundingClientRect()
  return rect.top - parentRect.top
}

function Choose(props) {
  const chooseArea = useRef(null)
  const [chosenStyle, setChosenStyle] = useState(() => ({
    width: '100%',
    height: '100%',
    left: '0px',
    top: '0px',
  }))
  const [activeChildI, setActiveChildI] = useState(() => 0)

  useEffect(() => {
    if (chooseArea.current.children.length - 1 !== props.children.length) return

    const child = chooseArea.current?.children[0]
    if (props.axe === 'x') {
      const width = child?.clientWidth
      setChosenStyle((prevStyle) => ({ ...prevStyle, width: `${width}px` }))
    }

    if (props.axe === 'y') {
      const height = child?.clientHeight
      setChosenStyle((prevStyle) => ({ ...prevStyle, height: `${height}px` }))
    }
  }, [chooseArea, props])

  function chose(option) {
    const targetI = +option.target.getAttribute('index')
    if (targetI === activeChildI) return

    const child = chooseArea.current?.children[targetI]

    const newStyles = {
      width: `${child.clientWidth}px`,
      height: `${child.clientHeight}px`,
      left: `${getLeft(child)}px`,
      top: `${getTop(child)}px`,
    }

    setChosenStyle(newStyles)
    setActiveChildI(targetI)

    chooseArea.current.children[targetI].classList.add('active')
    chooseArea.current.children[activeChildI].classList.remove('active')
  }

  return (
    <div className={`choose_area list_y ${props.axe}`}>
      <label className='title fz_normal'>{props.label}</label>
      <div ref={chooseArea} className={`choose_con list_${props.axe}`}>
        {props.children.map((child, i) => {
          const isActive = i === 0
          return (
            <div
              className={`option ${isActive ? 'active' : ''}`}
              key={i}
              onClick={chose}
              index={i}
            >
              {child}
            </div>
          )
        })}
        <div className="chosen" style={chosenStyle} index={activeChildI}></div>
      </div>
    </div>
  )
}

export default Choose
