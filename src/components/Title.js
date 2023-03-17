import React from 'react'
import "../title_design.css"

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
    <div className='my_division'>
    <h1 className='title' >{title}</h1>
    <p className='description'>{description}</p>
    </div>
    </>
  )
}

export default React.memo(Title)