import './index.css'

function TodoEachItem(props) {
  const {p, i} = props
  return (
    <div className="todo">
      <h1 className="title"> {p} </h1>
      <button className = "button"
        type="button"
        onClick={() => {
          props.deletes(i)
        }}
      >
        delete
      </button>
    </div>
  )
}

export default TodoEachItem
