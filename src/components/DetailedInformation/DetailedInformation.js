import React from 'react'

export const DetailedInformation = ({person}) => {

  if (!person.address) {
    return <h4 className="text-center text-danger mt-5">Detailed information is not available!</h4>
  }

  return (
    <>
      <p>Выбран пользователь <b>{person.firstName + ' ' + person.lastName}</b></p>
      <p>
        Описание: <br/>
        <textarea className="w-100" defaultValue={person.description} />
      </p>

      <p>Адрес проживания: <b>{person.address?.streetAddress}</b></p>
      <p>Город: <b>{person.address?.city}</b></p>
      <p>Провинция/штат: <b>{person.address?.state}</b></p>
      <p>Индекс: <b>{person.address?.zip}</b></p>
    </>
  )
}

