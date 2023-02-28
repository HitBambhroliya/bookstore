import React from 'react'

function Title(props) {
  // const {titlestate,descriptionstate}=props;
  const {title,description}=props;
  return (

    <>
    {/* <div>I Am {props.title1}</div>
    <div>I Am {props.title2}</div>
    <div>I Am {props.title3}</div>
    <div>{titlestate}</div>
    <div>{descriptionstate}</div> */}
    
    <h1>{title}</h1>
    <p>{description}</p>
    </>
  )
}

export default Title