import React, {useState} from 'react'
import ReactPaginate from 'react-paginate'
import _ from 'lodash'

import Context from "./context"
import Loader from './components/Loader'
import Table from "./components/Table"
import Search from "./components/Search"
import DetailedInformation from "./components/DetailedInformation"
import ModeSelector from "./components/ModeSelector"
import Modal from "./components/Modal"

function App() {

  const [modeSelected, setModeSelected] = useState(false)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('asc')
  const [sortField, setSortField] = useState('id')
  const [row, setRow] = useState(null)
  const [currentPage, setCurrentPage] = useState(0)

  function onSort(sortField) {
    const sortType = sort === 'asc' ? 'desc' : 'asc'

    const orderedData = _.orderBy([...data], sortField, sortType)
    setData(orderedData)
    setSort(sortType)
    setSortField(sortField)
  }

  async function onSelect(url) {
    setModeSelected(true)
    setLoading(true)
    // console.log(url)
    // console.log(typeof url)
    await fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(_.orderBy(data, sortField, sort))
        setLoading(false)
        // console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  function onRowSelect(row) {
    setRow(row)
    // console.log(row)
  }

  function pageChangeHandler({selected}) {
    setCurrentPage(selected)
    // console.log(selected)
  }

  function onSearch(search) {
    setSearch(search)
    setCurrentPage(0)
    setRow(null)
    // console.log(search)
  }

  function onItemAdded(id, firstName, lastName, email, phone) {
    const newRow = {id, firstName, lastName, email, phone}
    setData(data => [newRow, ...data])
  }

  function getFilteredData() {
    if (!search) {
      return data
    }

    return data.filter(item => {
      return item['firstName'].toLowerCase().includes(search.toLowerCase())
        || item['lastName'].toLowerCase().includes(search.toLowerCase())
        || item['email'].toLowerCase().includes(search.toLowerCase())

    })
  }

  const pageSize = 50

  const filteredData = getFilteredData()

  const pageCount = Math.ceil(filteredData.length / pageSize)

  const displayData = _.chunk(filteredData, pageSize)[currentPage]

  return (
    <Context.Provider value={{onSort, sort, sortField, onRowSelect, onSelect, onSearch, onItemAdded}}>

      <div className="container">
        {
          !modeSelected
            ? <ModeSelector onSelect={onSelect}/>
            : null
        }

        {
          data.length
            ? <>
                <Search onSearch={onSearch}/>
                {
                  displayData
                    ? <>
                        <Modal onItemAdded={onItemAdded}/>
                        <Table
                          data={displayData}
                          onSort={onSort}
                          sort={sort}
                          sortField={sortField}
                          onRowSelect={onRowSelect}
                        />
                      </>
                    : <h4 className="text-center text-danger">Not Found</h4>
                }
              </>
            : (loading && <Loader/>)
        }

        {
          displayData && data.length > pageSize
            ? <div className="d-flex justify-content-center">
                <ReactPaginate
                  previousLabel={'<'}
                  nextLabel={'>'}
                  breakLabel={'...'}
                  breakClassName={'break-me'}
                  pageCount={pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={pageChangeHandler}
                  containerClassName={'pagination'}
                  activeClassName={'active'}
                  pageClassName="page-item"
                  pageLinkClassName="page-link"
                  previousClassName="page-item"
                  nextClassName="page-item"
                  previousLinkClassName="page-link"
                  nextLinkClassName="page-link"
                  forcePage={currentPage}
                />
              </div>
            : null
        }

        {
          row
            ? <DetailedInformation person={row}/>
            : null
        }
      </div>
    </Context.Provider>
  )
}

export default App
