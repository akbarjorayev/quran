import Input from '../../../../components/Input/Input'

import './Search.css'

function Search() {
  return (
    <div className="search_con list_y">
      <Input type="text" label="Search" autoFocus />
    </div>
  )
}

export default Search
