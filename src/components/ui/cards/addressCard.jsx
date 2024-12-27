"use client"
import Title from '../title'
import Link from 'next/link';

const AddressCard = ({ address, company, country, email, phone }) => {
    return (
        <div className=' mt-10'>
            {/* <OutlineSvgText text={id}/> */}
            <Title title_text={country} className="mb-3" />
            <div>
                <p className='font-semibold'>{company}</p>
                <p className='max-w-64'>{address}</p>
            </div>
            <div className='mt-5 mb-7.5 flex flex-col'>
                <Link href={`tel:${phone}`} className='hover-underline inline-block'><b className='font-normal'>Telefon: </b><span>{phone}</span></Link>
                <Link href={`mailto:${email}`} className='hover-underline inline-block'><b className='font-normal'>E-poçt: </b><span>{email}</span></Link>
            </div>
                    </div>
    )
}

export default AddressCard