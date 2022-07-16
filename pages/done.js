import React from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link'

const Done = () => {
  return (
    <Wrapper>
    <RiderImage src='https://i.ibb.co/1nStPWT/uberblacksuv.png'/>
    <DriverDetails>
        <DriverName> Wasiu is on his way</DriverName>
        <DriverNumber>09065550346</DriverNumber>
        <Link href='/'>
        <DoneButton>Done</DoneButton>
        </Link>
    </DriverDetails>


    </Wrapper>
  )
}

export default Done

const Wrapper = tw.div`
flex flex-col items-center h-screen bg-gray-500
`
const RiderImage = tw.img`
flex-1 bg-white rounded-full mt-4
`
const DriverDetails = tw.div`
mt-4 flex-1 text-center flex flex-col mt-3 p-6 bg-white w-screen
`
const DriverName = tw.div`
text-3xl
`
const DriverNumber = tw.div`
text-m text-gray-300
`
const DoneButton = tw.button`
bg-black text-white my-4 mx-4 py-4 text-center text-xl rounded-lg
`