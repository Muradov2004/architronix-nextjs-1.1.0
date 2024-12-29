import { cn } from '@/lib/utils'
import Link from 'next/link'
import React, { useState } from 'react'
import Flag1 from '@/assets/referances/azerbaijan.png'
import Image from 'next/image'

const LanguageDropDown = ({dropDownList, bgColor, parentId,language,setLanguage}) => {
    console.log("drp",dropDownList[0].flag);
      

    const handleLanguage=(name)=>{
        setLanguage(name)
    }

    return (
        <div className={cn(`absolute z-50 bg-primary flex max-h-0 py-0 overflow-hidden  transition-all w-auto duration-500 max-w-28 group-hover:max-h-[300px] group-hover:py-5 ${bgColor}`)}>
            <ul className='min-w-60 px-6'>
                {
                    dropDownList.slice(0, 6).map(({ id, name,flag, path }) => {
                        return (
                            <li key={id} className='leading-10'>
                                <Link href={path} data-id={parentId} className={`dropdown-item text-secondary-foreground text-xl font-medium  inline-block relative after:transition-all after:duration-700 after:absolute after:left-0 after:bottom-0 after:contents-[""] after:w-0 after:h-[2px] after:bg-secondary after:hover:w-full ${name === "AZ"?"ml-[2px]":""}`} onClick={()=>handleLanguage(name)}>
                                <div className='flex flex-row gap-4'>
                                {name}
                                <Image src={flag} alt='Flag' className='w-7 h-7 '/>
                                </div>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            
            {
                dropDownList.length > 6 &&
                <ul className='min-w-52 px-6 relative after:absolute after:top-0 after:-left-5 after:contents-[""] after:bg-primary_rgba after:w-[2px] after:h-full'>
                    {
                        dropDownList.slice(6, 12).map(({ id, name, path }) => {
                            return (
                                <li key={id} className='leading-10'>
                                    <Link href={path} data-id={parentId} className='dropdown-item text-secondary-foreground text-xl font-medium  inline-block relative after:transition-all after:duration-700 after:absolute after:left-0 after:bottom-0 after:contents-[""] after:w-0 after:h-[2px] after:bg-secondary after:hover:w-full '>{name}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            }
        </div>
    )
}

export default LanguageDropDown