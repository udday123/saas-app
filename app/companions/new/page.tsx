import CompanionForm from '@/components/CompanionForm'
import { newCompanionPermissions } from '@/lib/actions/companion.actions';
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';
import Image from 'next/image';
import React from 'react'
import Link from 'next/link';

const NewCompanion = async() => {
  const {userId}=await auth();
  if(!userId) redirect('/sign-in');

  const canCreateCompanion = await newCompanionPermissions();

  return (
    <main className='"min-lg:w-1/3 min-md:2/3 items-center justify-center'>
      {canCreateCompanion?(<article className='w-full gap-4 flex flex-col'>
        <h1>Companion Builder</h1>
        <CompanionForm/>
      </article>) : (
        <article className='companion-limit'>
          <Image src='/images/limit.svg' alt="companion limit reached" width={360} height={230}/>
          <div className='cta-badge'>Upgrade Your Plane</div>
          <h1>You have Reached Your Limit</h1>
          <p>You have reached your limit. Upgrade to create more companions and premium features</p>
          <Link href='/subscription' className='btn-primary w-ful justify-center'>Upgrade My Plane</Link>
        </article>
      )}
    </main>
  )
}

export default NewCompanion