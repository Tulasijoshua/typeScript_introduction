import React from 'react'

type Practice2 = {
    children: string
}

const Practice2 = (props: Practice2) => {
  return (
    <div>
        <h2>{props.children}</h2>
    </div>
  )
}

export default Practice2