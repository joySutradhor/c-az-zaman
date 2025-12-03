import { FiPhoneCall } from 'react-icons/fi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { MdEmail } from 'react-icons/md'

const ContactForm = () => {
  return (
    <div className='sectionGap flex flex-col md:flex-row font-Inter'>
      {/* Form Section */}
      <div className='w-full md:w-1/2 pe-0 md:pe-10 lg:pe-20'>
        <div className='my-auto border p-6 rounded-lg'>
          <h2 className='text-2xl font-semibold mb-6'>Send us a message</h2>
          <form className='space-y-4'>
            <div className='flex flex-col md:flex-row md:justify-between'>
              {/* Name Field */}
              <div className='flex flex-col w-full md:w-[47%] xl:w-[48%] 2xl:w-[49%] mb-4 md:mb-0'>
                <label htmlFor='name' className='text-sm font-medium mb-1'>
                  {/* Name* */}
                </label>
                <input
                  type='text'
                  id='name'
                  placeholder='Name'
                  className='border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primaryColor p-2 rounded'
                />
              </div>
              {/* Phone Field */}
              <div className='flex flex-col w-full md:w-[47%] xl:w-[48%] 2xl:w-[49%]'>
                <label htmlFor='phone' className='text-sm font-medium mb-1'>
                  {/* Phone* */}
                </label>
                <input
                  type='text'
                  id='phone'
                  placeholder='Phone'
                  className='border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primaryColor p-2 rounded'
                />
              </div>
            </div>

            {/* Email Field */}
            <div className='flex flex-col'>
              <label htmlFor='email' className='text-sm font-medium mb-1'>
                {/* Email */}
              </label>
              <input
                type='email'
                id='email'
                placeholder='Email'
                className='border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primaryColor p-2 rounded'
              />
            </div>
            {/* Message Field */}
            <div className='flex flex-col'>
              <label htmlFor='message' className='text-sm font-medium mb-1'>
                {/* Message */}
              </label>
              <textarea
                id='message'
                placeholder='Message'
                rows='4'
                className='border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primaryColor p-2 rounded'
              ></textarea>
            </div>
            {/* Submit Button */}
            <button
              type='submit'
              className='bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition w-auto md:w-[100%]'
            >
              Get a quote
            </button>
          </form>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className='w-full md:w-1/2 p-4 mt-10 md:mt-0'>
        <div className='my-auto'>
          <h2 className='heroHead mb-4'>Contact Details</h2>
          <p className='text-sm text-gray-600 mb-6'>
            At Authentic Zaman, we have an outstanding commitment to making your
            every experience with us the best ever. Browse through our products
            and services we provide, selected on the basis of quality and to
            best suit all specific needs of the customer. Get advice or close a
            sale-whatever it may be. We&apos;ll take care of you and your needs
            with expertise.
          </p>

          <ul className='space-y-4'>
            <li className='grid grid-cols-[40px_auto] lg:grid-cols-[40px_max-content] gap-4 md:gap-5 items-center'>
              <span className='w-10 h-10 bg-primaryColor text-white flex justify-center items-center rounded-md'>
                <HiOutlineLocationMarker className='w-full h-5' />
              </span>
              <a
                href='https://maps.app.goo.gl/CJcKc49Ai3jQF6He7'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-primaryColor'
              >
                Shyamoli Square (Level-8), Mirpur Road , Dhaka, Bangladesh
              </a>
            </li>
            <li className='grid grid-cols-[40px_max-content] gap-4 md:gap-5 items-center'>
              <span className='w-10 h-10 bg-primaryColor text-white flex justify-center items-center rounded-md'>
                <FiPhoneCall className='w-full h-5' />
              </span>
              <div>
                <a
                  href='tel:+8801817509399'
                  className='hover:text-primaryColor block'
                >
                  +8801817-509399
                </a>
                <a
                  href='tel:+8801511509399'
                  className='hover:text-primaryColor block'
                >
                  +8801511-509399
                </a>
              </div>
            </li>
            <li className='grid grid-cols-[40px_max-content] gap-4 md:gap-5 items-center'>
              <span className='w-10 h-10 bg-primaryColor text-white flex justify-center items-center rounded-md'>
                <MdEmail className='w-full h-5' />
              </span>
              <a
                href='mailto:ashraf@authenticzaman.com'
                className='hover:text-primaryColor'
              >
                ashraf@authenticzaman.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
