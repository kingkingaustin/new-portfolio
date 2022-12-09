import React from 'react'
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocLinks = () => {

  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedinIn size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/king-augustin-1422a1249",
      styles: "rounded-tr-md"
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/kingkingaustin"
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:https://mail.google.com/"
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/reume,pdf",
      styles: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className='hidden lg:flex flex-col top-[30%] left-0 fixed'>
      <ul>

        {links.map(({id, child, href, styles, download}) => (
          <li key={id} className= {
            `flex justify-between items-center w-40 h-14 px-4 duration-300 bg-gray-500  ml-[-100px] hover:ml-[-10px] hover:rounded-md ${styles}`}>
            <a href={href}
              className='flex justify-between items-center w-full text-white'
              download={download} target='_blank'
              rel='noreferrer'>
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocLinks