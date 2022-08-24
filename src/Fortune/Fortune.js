import React from 'react'
import './Fortune.css'

export default function Fortune({result}) {
  console.log(`result`, result)
  return (
    <div className="fortune-box">
      <p>{result}</p>
    </div>
  )
}
