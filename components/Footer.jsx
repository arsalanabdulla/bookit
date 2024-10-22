import Image from "next/image";
import logo from '../assets/images/logo.png'


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='py-6 bg-slate-50'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-center items-center gap-4'>
        <p className='text-center text-sm text-gray-600'>
          &copy; {currentYear} Bookit. All rights reserved.
        </p>
        <Image className="w-20" src={logo} alt="logo"/>
      </div>
    </footer>
  );
};

export default Footer;