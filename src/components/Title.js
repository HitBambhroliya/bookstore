import React from 'react'

function Title(props) {
  const {titlestate,descriptionstate}=props;
  return (

    <>
    <div>I Am {props.title1}</div>
    <div>I Am {props.title2}</div>
    <div>I Am {props.title3}</div>
    <div>{titlestate}</div>
    <div>{descriptionstate}</div>
    
    </>
  )
}

export default Title