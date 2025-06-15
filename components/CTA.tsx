import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CTA = () => {
  return (
    <section className='cta-section'>Start Learning Your Way
    <h2 className='text-3xl font-bold'>
      Build and Personalize Learning Companion
    </h2>
    <p>Pick a name, subject, voice & Personality - and start learning through voice conversations that fell natural and fun.</p>
    <Image src='images/cta.svg' alt="cta" width={362} height={232}>
    </Image>
    <button className='btn-primary'>
      <Image src="/icons/plus.svg" alt="plus" width={12} height={12}></Image>
      <Link href="/companions/new">
      <p>
        Build a new Companion
      </p>
      </Link>
    </button>
    </section>
  )
}

export default CTA