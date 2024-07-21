import React, { useState } from 'react'
import DataList from './DataList'
import { v4 as uuidv4 } from 'uuid'

function Data() {

  const [obj, setObj] = useState({
    id: uuidv4(),
    title: "",
    price: "",
    img: "",
    des: ""
  })

  const [data, setData] = useState([])
  const [dis, setDis] = useState(false)
  const [id, setId] = useState("")
  const handleChange = (e) => {

    setObj({ ...obj, [e.target.name]: e.target.value })

  }

  const handleClick = () => {

    setData([...data, obj])
    setObj({
      id: uuidv4(),
      title: "",
      price: "",
      img: "",
      des: ""
    })

  }

  const handleDelete = (dl) => {
    let d = data.filter((el) => {
      if (el.id != dl) {
        return el;
      }
    })
    setData(d)
  }


  const handleEdit = (ed) => {
    setDis(true)
    setId(ed)
    data.forEach((el) => {
      if (el.id == ed) {
        setObj(el)
      }
    })
  }
  const handleUpdate = () => {
    let d = data.map((el) => {
      if (el.id == id) {
        return { ...el, ...obj }
      } else {
        return el;
      }
    })
    setData(d)
    setDis(false)
    setObj({
      id: uuidv4(),
      title: "",
      price: "",
      img: "",
      des: ""
    })
  }



  return (

    <div>
      <input type="text" placeholder='Product Title' name='title' value={obj.title} onChange={handleChange} />

      <input type="text" placeholder='Product Price' name='price' value={obj.price} onChange={handleChange} />

      <input type="text" placeholder='Image URL' name='img' value={obj.img} onChange={handleChange} />

      <input type="text" placeholder='Product Description' name='des' value={obj.des} onChange={handleChange} />

      <button onClick={handleClick}>Submit</button>

      <button onClick={handleUpdate} style={{ display: dis ? "inline-block" : "none" }}>Update</button>

      {data == null ? <h1>Loading Please Wait!</h1> : <DataList del={handleDelete} arr={data} edit={handleEdit} />}

    </div>
  )
}

export default Data