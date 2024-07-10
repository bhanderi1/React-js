import React from 'react'

// export const Double = ({number}) => {
//     return <div>{number}</div>
// }

// const Pure_Component = () => {
//   return (
//     <div>
//         <h1>Math Number</h1>
//       <Double number={2}/>
//       <Double number={4}/>
//       <Double number={6}/>
//     </div>
//   )
// }
let number = 0
export const Double = () => {
    number = number + 1
    return (
        <ol>
            <li>This number is {number} </li>
        </ol>
    )
}

const Pure_Component = () => {
    return (
        <div>
            <h1>Math Number</h1>
            <Double />
            <Double />
            <Double />
        </div>
    )
}
export default Pure_Component
