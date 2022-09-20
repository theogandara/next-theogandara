import * as React from 'react'

const ArrowUp = props => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 19V5M5 12l7-7 7 7"
      stroke="#607AFF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default ArrowUp
