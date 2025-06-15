"use client"
import React from 'react'
import  {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/table"
import { cn, getSubjectColor } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'
interface CompanionsListProps {
  title:string;
  companions?:Companion[];
  classNames?:string
}
const CompanionsList = ({title,companions,classNames}:CompanionsListProps) => {
  return (
    
    <article className={cn('companion-list',classNames)}>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead className="w-2/3 text-lg">Lessons</TableHead>
        <TableHead className='text-lg'>Subject</TableHead>
        <TableHead className='text-lg text-right'>Duration</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {companions?.map(({id, subject, name, topic, duration}) => (
        <TableRow className='' key={id}>
          <TableCell>
            <Link href={`/companions/${id}`}>
            <div className='flex items-center gap-2'>
              <div className="size-[72px] rounded-lg max-md:hidden flex items-center justify-center"
              style={{backgroundColor:getSubjectColor (subject)}}>
              <Image className='hover:size-[50px]' src={`/icons/${subject}.svg`}
              alt='Subject' 
              width={35} 
              height={35}>
              </Image>
                </div>
                <div className='flex flex-col gap-2'>
                  <p className='font-bold text-2xl'>{name}</p>
                  <p className='text-lg'>{topic}</p>
                </div>
              </div> 
            </Link>
          </TableCell>
          <TableCell>
            <div className='subject-badge w-fit max-md:hidden bg-amber-500'>
              {subject}
            </div>
            <div className='flex items-center justify-center rounded-lg w-fit p-2 md:hidden' style={{backgroundColor:getSubjectColor(subject)}}>
              <Image src={`/icons/${subject}.svg`}
            alt={subject}
            width={18}
            height={18}>
            </Image>
            </div>
          </TableCell>
          <TableCell>
            <div className='flex item-centre w-full gap-2 justify-end'>
              <p className='text-2xl'>
                {duration} {' '}
                <span className='max-md:hidden'>Mins</span>
              </p>
              <Image className='md:hidden' src={`/icons/clock.svg`} 
              alt={'minutes'}
              width={14}
              height={14}
              ></Image>
            </div>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</article>
  )
}

export default CompanionsList