import React from 'react'

import TodoEachItem from '../TodoEachItem'

function Todolist() {
  const todoitems = []
  const [d, Setd] = React.useState(todoitems)
  let inputData
  let ee
  const onchange = e => {
    // console.log(e.target.value)
    inputData = e.target.value
    ee = e
  }
  const add = () => {
    // console.log(inputData)
    Setd([...d, inputData])
    ee.target.value = ''
  }

  function deletes(i) {
    // console.log(i)
    var temp = [...d]
    temp.splice(i, 1)
    Setd([...temp])
  }

  return (
    <center>
      <input onChange={onchange} />
      <button type="button" onClick={add}>
        Add
      </button>
      {d.map((each, i) => (
        <TodoEachItem p={each} i={i} deletes={deletes} key={i} />
      ))}
    </center>
  )
}

export default Todolist
