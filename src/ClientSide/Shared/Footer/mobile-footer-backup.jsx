/* eslint-disable react/jsx-no-undef */
{
  /* mobile foooter */
}
;<div className=' relative lg:hidden block'>
  <div className='absolute inset-0 sectionTop  text-white/[.8] '>
    <div className='bg-[#131212] sectionPadding'>
      <div className=' pb-[50px] grid grid-cols-1 px-0  gap-y-[50px]'>
        <div className='footerLogoParent'>
          <div className='p-2 mb-[25px] bg-gray-300 rounded-lg border border-primaryColor w-max'>
            <Link to='/' className=''>
              <img
                className='object-cover'
                src='/AuthenticBanner.png'
                alt='brand logo'
              />
            </Link>
          </div>

          <div className='flex  flex-row mt-[20px] gap-x-[10px]'>
            <a
              href='https://www.facebook.com/AuthenticZamanTraders/'
              target='_blank'
              rel='noopener noreferrer'
              className='border border-primaryColor text-primaryColor px-[8px] rounded-full py-[8px]'
            >
              <SlSocialFacebook size={16} className='footerSocailIcon' />
            </a>
            <a
              href='#'
              target='_blank'
              rel='noopener noreferrer'
              className='border border-primaryColor text-primaryColor px-[8px] rounded-full py-[8px]'
            >
              <FaInstagram size={16} className='footerSocailIcon' />
            </a>
            <a
              href='https://x.com/aztraders1985?s=11'
              target='_blank'
              rel='noopener noreferrer'
              className='border border-primaryColor text-primaryColor px-[8px] rounded-full py-[8px]'
            >
              <RiTwitterXFill size={16} className='footerSocailIcon' />
            </a>
            <a
              href='https://www.linkedin.com/in/a-k-m-ashraf-uz-zaman-9833514b'
              target='_blank'
              rel='noopener noreferrer'
              className='border border-primaryColor text-primaryColor px-[8px] rounded-full py-[8px]'
            >
              <LuLinkedin size={16} className='footerSocailIcon pl-[2px]' />
            </a>
            <a
              href='https://api.whatsapp.com/send/?phone=8801707509399&text&type=phone_number&app_absent=0'
              target='_blank'
              rel='noopener noreferrer'
              className='border border-primaryColor text-primaryColor px-[8px] rounded-full py-[8px]'
            >
              <FaWhatsapp size={16} className='footerSocailIcon pb-[1px]' />
            </a>
          </div>
        </div>

        <div className=''>
          <h2 className='footerMenuTextTitle'>Quick Link</h2>
          <Link to='/about'>
            <p className='footerMenuText  flex flex-row items-center gap-x-[10px] hover:text-primaryColor'>
              About Us
            </p>
          </Link>
          <Link to='/service'>
            <p className='footerMenuText flex flex-row items-center gap-x-[10px] hover:text-primaryColor'>
              Services
            </p>
          </Link>
          <Link to='/portfolio'>
            <p className='footerMenuText flex flex-row items-center gap-x-[10px] hover:text-primaryColor'>
              Portfolio
            </p>
          </Link>
          <Link to='/contact'>
            <p className='footerMenuText flex flex-row items-center gap-x-[10px] hover:text-primaryColor'>
              Contact us
            </p>
          </Link>
        </div>

        <div className='text-white'>
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

        <div className='text-white'>
          <h2 className='footerMenuTextTitle'>Contact Us</h2>
          <p className='footerMenuText'>
            <a href='tel:+8801817509399' className='hover:text-primaryColor'>
              +8801817-509399
            </a>
          </p>
          <p className='footerMenuText'>
            <a href='tel:+8801511509399' className='hover:text-primaryColor'>
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
        <div>
          <h2 className='footerMenuTextTitle'>Download PDF&apos;s</h2>
          <a
            href='/pdfs/restroom-cubicles.pdf'
            download
            className='footerMenuText hover:text-primaryColor block pb-[2px]'
            target='_blank'
            type='application/pdf'
          >
            Restroom Cubicles and Locker Solution
          </a>
          <a
            href='/pdfs/shower-enclosure.pdf'
            download
            className='footerMenuText hover:text-primaryColor block pb-[2px]'
            target='_blank'
            type='application/pdf'
          >
            A Z Traders Shower Enclosure Presentation
          </a>
          <a
            href='/pdfs/hospitality-products.pdf'
            download
            className='footerMenuText hover:text-primaryColor block pb-[2px]'
            target='_blank'
            type='application/pdf'
          >
            A-Z Traders Hospitality Product List
          </a>
        </div>
      </div>

      <hr className='border-1 border-[#FFFFFF]' />

      <div className='py-[25px] px-1 text-center'>
        <div
          className='flex justify-center items-center space-x-[40px]
  '
        >
          <p
            className='copyWritePara
'
          >
            © 2025 Authentic Zaman Traders. <br /> Design & Developed by
            <a href='https://www.ethicalden.com/' target='_blank'>
              {' '}
              Ethical den.
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
