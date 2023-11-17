import React from 'react'
type PracticeProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

const Practice = (props: PracticeProps) => {
  return (
    <div>
      <button onClick={(event) => props.handleClick(event, 2)}>Clicking</button>
    </div>
  )
}

export default Practice