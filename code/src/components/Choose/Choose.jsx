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

function Choose({ axe, label, children, iOption }) {
  const chooseArea = useRef(null)
  const [chosenStyle, setChosenStyle] = useState(() => ({
    width: '100%',
    height: '100%',
    left: '0px',
    top: '0px',
  }))
  const [activeChildI, setActiveChildI] = useState(() => 0)
  const [iActive, setIActive] = useState(() => 0)

  useEffect(() => {
    chose(chooseArea.current.children[iActive])
  }, [])

  useEffect(() => {
    if (chooseArea.current.children.length !== children.length) return

    const child = chooseArea.current?.children[0]
    if (axe === 'x') {
      const width = child?.clientWidth
      setChosenStyle((prevStyle) => ({ ...prevStyle, width: `${width}px` }))
    }

    if (axe === 'y') {
      const height = child?.clientHeight
      setChosenStyle((prevStyle) => ({ ...prevStyle, height: `${height}px` }))
    }
  }, [chooseArea, children, axe])

  function chose(option) {
    const target = option.target || option
    const targetI =
      +target.getAttribute('index') || +target.getAttribute('index')
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
    <div className={`choose_area list_y ${axe}`}>
      <div>
        <label className="title fz_normal">{label}</label>
        <div className="line_x"></div>
      </div>
      <div className="choose_con_area">
        <div className="chosen" style={chosenStyle} index={activeChildI}></div>
        <div ref={chooseArea} className={`choose_con list_${axe}`}>
          {children.map((child, i) => {
            const isActive = i === 0
            if (child.props.option === iOption && !iActive) setIActive(i)

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
        </div>
      </div>
    </div>
  )
}

export default Choose
