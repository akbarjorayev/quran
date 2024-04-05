import LastRead from './components/LastRead/LastRead'
import Loading from '../../../../components/Loading/Loading'
import SurahsList from './components/SurahsList/SurahsList'

import useFetch from '../../../../hooks/useFetch'

import './Quran.css'

function Quran() {
  const {
    data: surahs,
    _,
    loading: surahsLoading,
  } = useFetch('https://api.alquran.cloud/v1/surah')

  return (
    <>
      <div className="list_y h_max_100 scroll_y">
        <LastRead surah="Al-Faatiha" verse="1" iOption="surahs" />
        <div className="loading_area bd_ra">
          <SurahsList surahs={surahs.data}></SurahsList>
          {surahsLoading && <Loading>Surahs are loading</Loading>}
        </div>
        <div></div>
      </div>
    </>
  )
}

export default Quran
