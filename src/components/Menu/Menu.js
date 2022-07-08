import React from 'react'
import './Menu.css'

export default function Menu(props) {
    const {textcolor, size, bgcolor} = props
    // const {size} = props.size;

    return (
    <h1 className={`${bgcolor}`} style={{color: textcolor, fontSize: size}}> Menu color:{textcolor} size:{size} </h1>
  )
}
