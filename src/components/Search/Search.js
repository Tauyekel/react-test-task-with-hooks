import React, {useContext, useState} from 'react'
import Context from "../../context"

export const Search = () => {

  const [value, setValue] = useState('')

  const {onSearch} = useContext(Context);

  return (
    <div className="input-group my-3">
      <div className="input-group-prepend">
        <button
          className="btn btn-outline-secondary"
          onClick={() => onSearch(value)}
        >
          Найти
        </button>
      </div>
      <input
        type="text"
        className="form-control"
        onChange={event => setValue(event.target.value)}
        value={value}
      />
    </div>
  )
}
