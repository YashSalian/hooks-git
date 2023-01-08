import React, { useState } from 'react'
import img1 from '../Images/image_1.jpg'
import img2 from '../Images/image_2.jpg'
import img3 from '../Images/image_3.jpg'
import List from './List'
import Grid from './Grid'

function Input() {
  
    let display
    const img = [img1, img2, img3]
    const [toggle, setToggle] = useState(false)
    let [arr, setArr] = useState([{
        title: 'hello',
        icon: <img src={img1}></img>,
        key: 1,
        show: true
    }])

    function update() {
        setArr([...arr, {
            title: document.getElementById('title').value,
            icon: <img src={document.getElementById('dropdown').value}></img>,
            key: arr.length + 1,
            show: true
        }])
        while(arr[arr.length-1].title=='') arr.pop()
        console.log(arr[arr.length-1].title, ' ', arr[arr.length-1].icon, ' ', arr.length)
    }

    if(toggle) 
        display = arr.map((e,i)=><Grid key={i} el={e} />)
    else 
        display = arr.map((e,i)=><List key={i} el={e} />)

    return (
      <div>
        <div className="inputArea">
          <span>
              <input id='title' type='text' placeholder='Input Name' required></input>
              <select id='dropdown' required>
                <option value=''>Select Image</option>
                <option value={img1}>Image-1</option>
                <option value={img2}>Image-2</option>
                <option value={img3}>Image-3</option>
              </select>
              <button onClick={()=>update()}>Submit</button>
          </span>
          <span>
            <button onClick={()=>setToggle(!toggle)}>Toggle List/Grid</button>
          </span>
        </div>
        {display}
      </div>
    )
}

export default Input