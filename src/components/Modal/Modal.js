import React, {useContext, useState} from 'react'
import Context from "../../context"

export const Modal = () => {

  const {onItemAdded} = useContext(Context)

  const [id, setId] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const onIdChange = (e) => {
    setId(e.target.value)
  }

  const onFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }

  const onLastNameChange = (e) => {
    setLastName(e.target.value)
  }

  const onEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const onPhoneChange = (e) => {
    setPhone(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    onItemAdded(id, firstName, lastName, email, phone)
  }

  return (
    <>
      <button type="button" className="btn btn-success mb-3" data-toggle="modal" data-target="#exampleModal"
              data-whatever="@mdo">добавить
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
           aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Новые данные</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form className="was-validated" onSubmit={onSubmit}>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="id" className="col-form-label">ID:</label>
                  <input onChange={onIdChange} type="text" className="form-control is-invalid" required id="id" />
                </div>
                <div className="form-group">
                  <label htmlFor="firstName" className="col-form-label">First Name:</label>
                  <input onChange={onFirstNameChange} type="text" className="form-control is-invalid" required id="firstName" />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName" className="col-form-label">Last Name:</label>
                  <input onChange={onLastNameChange} type="text" className="form-control is-invalid" required id="lastName" />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="col-form-label">Email:</label>
                  <input onChange={onEmailChange} type="text" className="form-control is-invalid" required id="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="col-form-label">Phone:</label>
                  <input onChange={onPhoneChange} type="text" className="form-control is-invalid" required id="phone" />
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary">Добавить в таблицу</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
