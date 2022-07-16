import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"
import Map from './components/map'
import Link from 'next/link'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'next/router'


export default function Home() {

  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    return onAuthStateChanged(auth, user => {
      if(user){
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL,
        })
      } else {
        setUser(null)
        router.push('/login')
      }
    })
  }, [])
  

  // center: [-99.29011, 39.39172]



  return (
    <Wrapper>
      <Map />
      <ActionItems>
      <Header>
      <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.png" />
      <Profile>
      <Name>{user && user.name}</Name>
      <UserImage src={user && user.photoURL} onClick={() => signOut(auth)}/>
      </Profile>
      </Header>
      <ActionButtons>
      <Link href='/search'>
      <ActionButton>
      <ActionImage src='https://i.ibb.co/cyvcpfF/uberx.png'/>
        <ActionName>Ride</ActionName>
      </ActionButton>
      </Link>
      <ActionButton>
      <ActionImage src='https://i.ibb.co/n776JLm/bike.png'/>
      <ActionName>2-Wheels</ActionName>
      </ActionButton>
      <ActionButton>
      <ActionImage src='https://i.ibb.co/5RjchBg/uberschedule.png'/>
      <ActionName>Reserve</ActionName>
      </ActionButton>
      </ActionButtons>
      <Link href='/search'>
      <InputButton>
        Where to?
      </InputButton>
      </Link>
      
      
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
flex flex-col h-screen
`

const ActionItems = tw.div`
flex-1 p-4
`

const Header = tw.div`
flex justify-between items-center
`
const UberLogo = tw.img`
h-28
`
const Profile = tw.div`
flex items-center
`
const Name = tw.div`
mr-4 w-30 text-sm 
`
const UserImage =tw.img`
h-12 w-12 rounded-full border-gray-200 p-px cursor-pointer
`
const ActionButtons = tw.div`
flex  
`
const ActionButton = tw.div`
flex flex-col items-center bg-gray-200 flex-1 m-2 h-32 justify-center rounded-lg transform hover:scale-105 transition text-xl
`
const ActionImage = tw.img`
h-3/5
`
const ActionName = tw.div`
`
const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8 rounded-lg transform hover:scale-95 transition 
`