import React, {useContext} from 'react'
import Context from "../../context"

export const ModeSelector = () => {

  const {onSelect} = useContext(Context);

  const smallUrl = `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
  const bigUrl = `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`

  return (
    <div className="text-center py-5 px-0">
      <h1 className="display-4 mb-5 text-center">Набор данных:</h1>
      <button onClick={() => onSelect(smallUrl)} className="btn btn-success mr-2">маленький</button>
      <button onClick={() => onSelect(bigUrl)} className="btn btn-danger">большой</button>
    </div>
  )
}


