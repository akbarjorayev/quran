import Input from '../../../../components/Input/Input'
import Loading from '../../../../components/Loading/Loading'

import './Search.css'

function Search() {
  return (
    <div className="search_con alert_con list_y">
      <Input type="text" label="Search" autoFocus />
      <div className="search_res_con con_bg_df con_bd_cl loading_area list_y scroll_y">
        {/* <div className="con_bd_cl con_bg_dr con_ha list_x">
          <div>1</div>
          <div>Al-fatiha</div>
        </div> */}
        {/* <Loading size="100px">Searching</Loading> */}
      </div>
    </div>
  )
}

export default Search
