import './Loading.css'

function Loading({ children, size }) {
  return (
    <div className="loading_con df_f_ce list_y">
      <div className="loading_spinners" style={{ '--loading-size': size }}>
        <div
          className="loading_spinner"
          style={{
            '--loading-bd-color': 'var(--main-color)',
            '--loading-rotate-deg': '45deg',
            '--loading-anim-duration': '.2s',
          }}
        ></div>
        <div
          className="loading_spinner"
          style={{
            '--loading-bd-color': 'var(--theme-color-not)',
            '--loading-rotate-deg': '-45deg',
            '--loading-anim-duration': '.3s',
          }}
        ></div>
      </div>
      <div className="loading_text">{children}</div>
    </div>
  )
}

export default Loading
