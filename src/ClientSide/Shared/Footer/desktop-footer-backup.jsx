import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { LuLinkedin } from 'react-icons/lu'
import { RiTwitterXFill } from 'react-icons/ri'
import { SlSocialFacebook } from 'react-icons/sl'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='sectionTop'>
      {/* large */}
      <div className='relative'>
        <div className='absolute inset-0  text-white/[.8]'>
          <div className='sectionPadding bg-[#131212] grid justify-between lg:grid-cols-[min-content_15%_15%_25%] xl:grid-cols-[20%_10%_10%_18%_20%] pb-16'>
            {/* Footer Logo and Social Links */}
            <div>
              <div className='footerLogoparent mb-[25px] bg-gray-300 w-[90%] 2xl:w-[80%] h-auto rounded-lg border border-primaryColor'>
                <Link to='/'>
                  <img
                    className='h-full w-full object-cover py-2 px-4'
                    src='/AuthenticBanner.png'
                    alt='brand logo'
                  />
                </Link>
              </div>
              <p className='footerHeaderLogoText'>
                Authentic Zaman is where your vision comes alive with our
                thoughtful custom designs.
              </p>
              <div className='flex mt-[20px] gap-[10px]'>
                <a
                  href='https://www.facebook.com/AuthenticZamanTraders/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='border border-primaryColor text-primaryColor p-[8px] rounded-full'
                >
                  <SlSocialFacebook size={20} className='footerSocailIcon' />
                </a>
                <a
                  href='https://x.com/aztraders1985?s=11'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='border border-primaryColor text-primaryColor p-[8px] rounded-full'
                >
                  <RiTwitterXFill size={20} className='footerSocailIcon' />
                </a>
                <a
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='border border-primaryColor text-primaryColor p-[8px] rounded-full'
                >
                  <FaInstagram size={20} className='footerSocailIcon' />
                </a>
                <a
                  href='https://www.linkedin.com/in/a-k-m-ashraf-uz-zaman-9833514b'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='border border-primaryColor text-primaryColor p-[8px] rounded-full'
                >
                  <LuLinkedin size={20} className='footerSocailIcon' />
                </a>
                <a
                  href='https://api.whatsapp.com/send/?phone=8801707509399&text&type=phone_number&app_absent=0'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='border border-primaryColor text-primaryColor p-[8px] rounded-full'
                >
                  <FaWhatsapp size={20} className='footerSocailIcon' />
                </a>
              </div>
            </div>

            {/* Quick Links Section */}
            <div>
              <h2 className='footerMenuTextTitle'>Quick links</h2>
              <Link to='/about'>
                <p className='footerMenuText hover:text-primaryColor'>
                  About Us
                </p>
              </Link>
              <Link to='/service'>
                <p className='footerMenuText hover:text-primaryColor'>
                  Services
                </p>
              </Link>
              <Link to='/portfolio'>
                <p className='footerMenuText hover:text-primaryColor'>
                  Portfolio
                </p>
              </Link>
              <Link to='/contact'>
                <p className='footerMenuText hover:text-primaryColor'>
                  Contact Us
                </p>
              </Link>
            </div>

            {/* Our Services Section */}
            <div>
              <h2 className='footerMenuTextTitle'>Our Services</h2>

              <Link to='/portfolio/1'>
                <p className='footerMenuText flex flex-row items-center gap-x-[10px] hover:text-primaryColor'>
                  Shower Enclosure
                </p>
              </Link>

              <Link to='/portfolio/2'>
                <p className='footerMenuText flex flex-row items-center gap-x-[10px] hover:text-primaryColor'>
                  Toilet Partition
                </p>
              </Link>

              <Link to='/portfolio/3'>
                <p className='footerMenuText flex flex-row items-center gap-x-[10px] hover:text-primaryColor'>
                  Lighting Solution
                </p>
              </Link>

              <Link to='/portfolio/4'>
                <p className='footerMenuText flex flex-row items-center gap-x-[10px] hover:text-primaryColor'>
                  Office Furniture
                </p>
              </Link>

              <Link to='/portfolio/8'>
                <p className='footerMenuText flex flex-row items-center gap-x-[10px] hover:text-primaryColor'>
                  Interior Work
                </p>
              </Link>

              <Link to='/portfolio/9'>
                <p className='footerMenuText flex flex-row items-center gap-x-[10px] hover:text-primaryColor'>
                  Assembly Works
                </p>
              </Link>
            </div>

            {/* Contact Us Section */}
            <div>
              <h2 className='footerMenuTextTitle'>Contact Us</h2>
              <p className='footerMenuText'>
                <a
                  href='tel:+8801817509399'
                  className='hover:text-primaryColor'
                >
                  +8801817-509399
                </a>
              </p>
              <p className='footerMenuText'>
                <a
                  href='tel:+8801511509399'
                  className='hover:text-primaryColor'
                >
                  +8801511-509399
                </a>
              </p>
              <p className='footerMenuText'>
                <a
                  href='mailto:ashraf@authenticzaman.com'
                  className='hover:text-primaryColor'
                >
                  ashraf@authenticzaman.com
                </a>
              </p>
              <p className='footerMenuText'>
                <a
                  href='https://www.google.com/maps?q=6/A/1,+Razia+Tower,+Kallayanpur,+Dhaka-1216'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-primaryColor'
                >
                  Shyamoli Square (Level-8), Mirpur Road , Dhaka, Bangladesh
                </a>
              </p>
            </div>

            {/* Download PDF */}
            <div className='lg:mt-20 xl:mt-0'>
              <h2 className='footerMenuTextTitle'>Download PDF&apos;s</h2>
              <div>
                <a
                  href='/pdfs/restroom-cubicles.pdf'
                  download
                  className='footerMenuText hover:text-primaryColor block'
                  target='_blank'
                  type='application/pdf'
                >
                  Restroom Cubicles and Locker Solution
                </a>
                <a
                  href='/pdfs/shower-enclosure.pdf'
                  download
                  className='footerMenuText hover:text-primaryColor block'
                  target='_blank'
                  type='application/pdf'
                >
                  A Z Traders Shower Enclosure Presentation
                </a>
                <a
                  href='/pdfs/hospitality-products.pdf'
                  download
                  className='footerMenuText hover:text-primaryColor block'
                  target='_blank'
                  type='application/pdf'
                >
                  A-Z Traders Hospitality Product List
                </a>
              </div>
            </div>
          </div>

          <hr className='border-t border-[#FFFFFF]/[.5]' />

          <div className='bg-[#131212] py-[25px] px-[30px] text-center'>
            <p className='copyWritePara'>
              Copyright © 2025 Authentic Zaman Traders. All Rights Reserved.{' '}
              <br />
              Design & Developed by{' '}
              <a
                href='https://www.ethicalden.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-primaryColor'
              >
                Ethical Den
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
