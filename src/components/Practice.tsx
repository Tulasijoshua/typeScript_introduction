import React from 'react'
import { PracticeProps } from './PractProps.types'


const Practice = (props: PracticeProps) => {
  return (
    <div>
      {props.first} {props.last}
    </div>
  )
}

export default Practice