import React from 'react'
import { Button } from '@/components/ui/button'
import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'
const Page = () => {
  return (
    <main>
      <h1 className='text-2xl underline'>Popular Companions</h1>
      <section className='home-section'>
  <CompanionCard
    id="123"
    name="Dr. Alice Robertson"
    topic="Understanding Newton’s Laws of Motion in Real-World Scenarios"
    subject="Advanced Theoretical and Applied Physics"
    duration={75}
    color="#ffda6e"
  />
  <CompanionCard
    id="456"
    name="Prof. Bob Alexander"
    topic="Exploring the Process of Schendwinger equation and Its Role in Quantum Physics"
    subject="Quantum Physics"
    duration={90}
    color="#e5d0ff"
  />
  <CompanionCard
    id="789"
    name="Dr. Charlie Singh"
    topic="A Deep Dive into the Graphs, Trees and Dynamic Programming"
    subject="Competative Programming"
    duration={60}
    color="#bde7ff"
  />
</section>


      <section className='home-section'>
        <CompanionsList
        title = "Recently completed sessions"
        companions = {recentSessions}
        classNames="w-2/3 max-lg:w-full"
        />
        <CTA/>
      </section>
    </main>
  )
}

export default Page