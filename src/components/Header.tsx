import React from 'react'
import { FizziLogo } from './FizziLogo'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='flex p-4 justify-center -mb-28'>
      <FizziLogo className='h-20 z-10 cursor-pointer text-sky-800'/>
    </header>
  )
}