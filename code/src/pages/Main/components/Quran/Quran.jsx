import { useState } from 'react'

import LastRead from './components/LastRead/LastRead'
import SurahsList from './components/SurahsList/SurahsList'
import ReadArea from './ReadArea/ReadArea'

import './Quran.css'

function Quran() {
  const [surahI, setSurahI] = useState(0)

  return (
    <>
      <div className="list_y h_max_100 scroll_y">
        <LastRead surah="Al-Faatiha" verse="1" iOption="surahs" />
        <div className="loading_area bd_ra">
          <SurahsList setSurahI={setSurahI}></SurahsList>
        </div>
        <div></div>
        {surahI > 0 && <ReadArea index={surahI} setSurahI={setSurahI} />}
      </div>
    </>
  )
}

export default Quran
