
import { useState } from 'react';
import logo from '../assets/img/logo_global.png'
import LoginArea from '../Components/LoginArea';

export default function Loader() {
    const [loadingInitial, setLoadingInitial] = useState(false)
    setTimeout(() => {
        setLoadingInitial(true)
    }, 2300);

    return (
        <div className='w-full h-full'>
            {
                loadingInitial ?
                <LoginArea></LoginArea>
                :
                <div className='w-auto lg:w-[550px] h-auto lg:h-[400px] mt-12 mx-auto my-auto flex items-end'>
                    <img src={logo} alt="Website-Manager" className={`${loadingInitial ? '' : 'animate-bounce'}`} />
                </div>
            }
        </div>
    )
}