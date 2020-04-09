import React from 'react'

export default function Main({match}) {
  return (
    <div>
      <h1>{match.params.id}</h1>
    </div>
  )
}
