import React from 'react'
import Title from './Title'




function List() {
    const items=[{id:1,title:"my title1",description:"Here is our description 1"},
    {id:2,title:"my title2",description:"Here is our description 2"},
    {id:3,title:"my title3",description:"Here is our description 3"}]

    
  return (
    <div>
        {
         items.map(item => <Title key={item.id} title={item.title} description={item.description} />)
        }
        </div>
  )
}

export default List