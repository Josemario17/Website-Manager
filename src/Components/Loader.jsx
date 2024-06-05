
import { useState } from 'react';
import logo from '../assets/img/logo_global.png'
import Spin from './PrimaryComponents/SpinLoader';

export default function Loader() {
    const [loadingInitial, setLoadingInitial] = useState(false)
    setTimeout(() => {
        setLoadingInitial(true)
    }, 2300);

    return (
        <div className='w-full h-full'>
            {
                loadingInitial == false &&
                <div className='w-[550px] h-[400px] mt-12 mx-auto my-auto flex items-end'>
                    <img src={logo} alt="Website-Manager" className={`${loadingInitial ? '' : 'animate-bounce'}`} />
                </div>
            }
        </div>
    )
}