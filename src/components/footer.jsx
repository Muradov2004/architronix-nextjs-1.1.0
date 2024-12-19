import Link from 'next/link'
import Logo2 from '@/assets/icons/logo-footer.png';
import SocialMediaList from './ui/socialMediaList'
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className=' container-fluid  mx-auto '>
            <div className=' bg-secondary '>
                <div className='container'>
                    <div className='grid lg:grid-cols-3 grid-cols-1 items-center pt-[100px] pb-20'>
                        <div>
                        <Link href="/home-1" >
                        <Image src={Logo2} alt="Logo" height="20" width="150" />
                    </Link>
                            {/* <h5 className='xl:text-2xl text-xl font-semibold text-primary-foreground leading-160 pt-2.5 pb-3'>Sosial mediada izləyin</h5> */}
                            <br></br>
                            <SocialMediaList />
                        </div>
                        <div className='mt-12 lg:mt-0 flex gap-x-10'>
                            <span className='h-[198px] w-[1px] bg-primary block my-2.5'></span>
                            <div>
                                <h5 className='text-2xl font-extrabold block text-primary-foreground leading-160 '>Keçidlər:</h5>
                                <span className='w-[99px] h-[1px] bg-primary block my-2.5'></span>
                                <div className=''>
                                    {/* <p className='text-xl font-bold text-primary-foreground'>Azali, </p> */}
                                    <p className='text-lg  text-primary-foreground'>Haqqımızda </p>
                                    <p className='text-lg text-primary-foreground'>Məhsullarımız </p>
                                    <p className='text-lg  text-primary-foreground'>Referans</p>
                                    <p className='text-lg  text-primary-foreground'>Kataloq </p>
                                    <p className='text-lg  text-primary-foreground'>Karyera </p>
                                    <p className='text-lg  text-primary-foreground'>Əlaqə </p>
                                </div>
                                {/* <div className='mt-[17px]'>
                                    <Link href={"tel:+34962398486"} className='text-lg block text-primary-foreground hover-underline' >Phone: <span>+34 96 239 84 86</span></Link>
                                    <Link href={"mailto:hello@Azali.com"} className='text-lg block text-primary-foreground hover-underline'>Email: <span>hello@Azali.com</span></Link>
                                </div> */}
                            </div>
                        </div>
                        <div className='mt-12 lg:mt-0 flex gap-x-10'>
                            <span className='h-[198px] w-[1px] bg-primary block my-2.5'></span>
                            <div>
                                <h5 className='text-2xl font-extrabold inline-block text-primary-foreground leading-160 '>Ünvan</h5>
                                <span className='w-[99px] h-[1px] bg-primary block my-2.5'></span>
                                <div className='mt-[18px]'>
                                    <p className='text-xl font-bold text-primary-foreground'>"Azali" MMC </p>
                                    <p className='text-lg text-primary-foreground'>Bakı şəhəri, Suraxanı rayonu,  </p>
                                    <p className='text-lg  text-primary-foreground'> Qaraçuxur qəsəbəsi, </p>
                                    <p className='text-lg  text-primary-foreground'> İlqar Musayev küçəsi, 51 </p>
                                </div>
                                <div className='mt-[17px]'>
                                    <Link href={"tel:+34962398486"} className='text-lg block text-primary-foreground hover-underline' >Telefon: <span>+994 50 227 90 20</span></Link>
                                    <Link href={"mailto:hello@Azali.com"} className='text-lg block text-primary-foreground hover-underline'>E-poçt: <span>info@azali.az</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className='bg-pritext-primary-foreground' />
                    <div className='py-8 lg:flex justify-between items-center'>
                        <span className='text-sm text-primary-foreground block'>Made with Love by <Link href={"https://webonly.io"}>Webonly</Link> </span>
                        <span className='text-sm text-primary-foreground block mt-3 lg:mt-0'>©2024, Azali, Bütün hüquqlar qorunur</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer