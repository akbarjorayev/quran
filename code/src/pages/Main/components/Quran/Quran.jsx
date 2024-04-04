import LastRead from './components/lastRead/LastRead'
import Choose from '../../../../components/Choose/Choose'

import './Quran.css'

function Quran() {
  return (
    <>
      <div className="list_y">
        <LastRead surah="Al-Fatiha" verse="1" iOption="surahs" />
        <Choose axe="x">
          <div option="surahs">Surahs</div>
          <div option="juzs">Juz</div>
        </Choose>
      </div>
    </>
  )
}

export default Quran
