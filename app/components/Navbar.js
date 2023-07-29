import Image from 'next/image'
import Link from 'next/link.js'

const Navbar = (props) => {
  const navArray = ["all", "completed", "pending", "missed"];
  const navEl = navArray.map((item, index) => {
    return (
      <Link 
        key={index}
        href="/" 
        onClick={()=>props.handlePageChange(index)}
        className={`hover:text-theme duration-200 capitalize ${props.currentPage===index ? `text-theme font-bold underline underline-offset-4 decoration-2` : ``}`}
      >
        {item}
      </Link>
    );
  });
  return (
    <div className="my-5 px-[5vw] border-b border-theme border-opacity-30 select-none flex items-center justify-between pb-4">
      <Link className="flex items-center gap-3 cursor-pointer" href="/">
        <Image
          src="/ToDo.png"
          alt="logo"
          width={40}
          height={55}
          style={{width: 'auto'}}
        />
        <p className="font-black text-4xl">ToDo.</p>
      </Link>
      <div className={"flex justify-between gap-[10vw]"}>
        {navEl}
      </div>
  </div>
  )
}

export default Navbar