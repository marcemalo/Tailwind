import React from 'react'
import  Imag  from '.././img/Logo.svg'


const Footer = () => {
  return (
    <footer className="bg-slate-200 text-black py-10 mt-6">
    <div className="container mx-auto px-6 flex flex-wrap justify-between">
    <div className='max-w-[250px]'>
            <img src={Imag} alt="" />
            <p className='mt-4'>Our vision is to provide convenience and help increase your sales business.</p>
    </div>
      <div className="w-full md:w-1/4 mb-6 md:mb-0">
        <h2 className="text-xl font-bold border-b-2 border-gray-600 pb-2 mb-4">About Us</h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <ul className="flex space-x-4">
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Facebook</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Twitter</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Instagram</a></li>
        </ul>
      </div>


      <div className="w-full md:w-1/4 mb-6 md:mb-0">
        <h2 className="text-xl font-bold border-b-2 border-gray-600 pb-2 mb-4">Contact Us</h2>
        <p className="mb-2"><strong>Email:</strong> info@yourcompany.com</p>
        <p className="mb-2"><strong>Phone:</strong> (123) 456-7890</p>
        <p><strong>Address:</strong> 123 Main St, Hometown, USA</p>
      </div>
      <div className="w-full md:w-1/4 mb-6 md:mb-0">
        <h2 className="text-xl font-bold border-b-2 border-gray-600 pb-2 mb-4">Quick Links</h2>
        <ul>
          <li className="mb-2"><a href="/about" className="hover:text-gray-400">About Us</a></li>
          <li className="mb-2"><a href="/services" className="hover:text-gray-400">Services</a></li>
          <li className="mb-2"><a href="/careers" className="hover:text-gray-400">Careers</a></li>
          <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </div>
    </div>
  </footer>
  )
}

export default Footer