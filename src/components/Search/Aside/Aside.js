import React from 'react'
import './Aside.css'
import { Selector } from './Selector/Selector'

export const Aside = () => {
  return (
    <section className='search-aside'>
      <Selector/>
      <Selector/>
      <Selector/>
    </section>
  )
}
