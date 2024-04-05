import LastRead from './components/LastRead/LastRead'
import SurahsList from './components/SurahsList/SurahsList'

import './Quran.css'

function Quran() {
  return (
    <>
      <div className="list_y h_max_100 scroll_y">
        <LastRead surah="Al-Faatiha" verse="1" iOption="surahs" />
        <div className="loading_area bd_ra">
          <SurahsList></SurahsList>
        </div>
        <div></div>
      </div>
    </>
  )
}

export default Quran
