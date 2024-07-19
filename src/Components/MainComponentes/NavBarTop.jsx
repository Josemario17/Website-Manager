

import logo from '../../assets/img/usericon.png'
export default function NavBarTop(){
    return(
        <div className='w-auto h-auto'>
                <nav className='w-full py-4 px-12 flex items-center justify-between bg-[#7577cd3c] border-l border-solid border-white/5'>
                    <div className='w-auto h-full'>
                        <form action="" className='flex items-center justify-start'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                            <input type="text" className='w-auto h-8 ml-4 p-2 bg-transparent focus:outline-none' placeholder='Digite aqui a pesquisa...' />
                        </form>
                    </div>
                    <div className='w-3/4 h-full flex items-center justify-end gap-5'>
                        <button className='size-8 group'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 group-hover:stroke-[#ffffffc7]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                            </svg>
                        </button>
                        <button className='size-8 group'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 group-hover:stroke-[#ffffffc2]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                            </svg>
                        </button>
                        <button className='w-auto flex items-center justify-between gap-4 ml-6'>
                            <div className='w-auto gap-0 mix-w-40 flex justify-end items-center flex-col'>
                                <h3 className='w-full text-right'>Name User</h3>
                                <span className='w-full -mt-1 text-right text-[#99a0ac]'>role</span>
                            </div>
                            <div>
                                <img src={logo} alt="Logotipo" className='w-10' />
                            </div>
                        </button>
                    </div>
                </nav>
            </div>
    )
}