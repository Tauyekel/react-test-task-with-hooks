import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../../context'

export const Table = ({data, sortField, sort}) => {

  const {onSort} = useContext(Context)
  const {onRowSelect} = useContext(Context)

  return (
    <table className="table">
      <thead>
      <tr>
        <th onClick={onSort.bind(null, 'id')}>
          ID {sortField === 'id' ? <small>{sort}</small> : null}
        </th>
        <th onClick={onSort.bind(null, 'firstName')}>
          First Name {sortField === 'firstName' ? <small>{sort}</small> : null}
        </th>
        <th onClick={onSort.bind(null, 'lastName')}>
          Last Name {sortField === 'lastName' ? <small>{sort}</small> : null}
        </th>
        <th onClick={onSort.bind(null, 'email')}>
          Email {sortField === 'email' ? <small>{sort}</small> : null}
        </th>
        <th onClick={onSort.bind(null, 'phone')}>
          Phone {sortField === 'phone' ? <small>{sort}</small> : null}
        </th>
      </tr>
      </thead>

      <tbody>
      {data && data.map(item => (
        <tr key={item.id + item.phone} onClick={onRowSelect.bind(null, item)}>
          <td>{item.id}</td>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
        </tr>
      ))}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}
