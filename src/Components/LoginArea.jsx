
import logo from '../assets/img/logo3.png'
import ButtonCustom from './ButtonCustom'

export default function LoginArea() {

    const ItemsLi = [
        { h2text: 'Administração e Gestão de Sites', pText: 'Gestão Rápida do Site do contéudo do Site' },
        { h2text: 'Criação de Posts e Conteúdos', pText: 'Conjunto de Ferramentas para auxilio a gestão de Conteúdos' },
        { h2text: 'Melhoramento e Acompanhamento de Resultados', pText: 'Dashboards e Estatiscas melhoradas para auxilio a gestão do website.' }
    ]

    return (
        <div className="ShowMe p-1 lg:p-10 w-full h-full overflow-hidden">
            <div className="flex w-full h-full items-center justify-around">

                <div className="w-[50%] h-[94%] p-10 hidden lg:grid">
                    <div className='w-full flex gap-4 items-center mt-8 p-4 mb-4'>
                        <img src={logo} alt="Login Image" className='w-20' />
                        <h1 className='text-3xl'>Website Manager</h1>
                    </div>
                    {
                        ItemsLi.map((items) => (
                            <div className='mb-6 pl-8'>
                                <h2 className='w-full flex gap-2 text-xl h-auto items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>{items.h2text}
                                </h2>
                                <p className='text-white/50 pl-8'>{items.pText}</p>
                            </div>
                        ))
                    }
                </div>

                <div className="w-full lg:w-1/2 h-full flex items-center justify-center">
                    <div className="w-11/12 lg:w-2/3 h-full lg:h-3/4 p-10 mt-6 lg:mt-0 lg:p-12 bg-[#7577cd3c] rounded-lg">
                        <div className='w-full lg:hidden flex gap-4 items-center mt-8 p-1 lg:p-4 mb-4'>
                            <img src={logo} alt="Login Image" className='w-14 md:w-16 lg:w-20 ' />
                            <h1 className='text-lg md:text-3xl'>Website Manager</h1>
                        </div>
                        <h3 className='text-2xl mb-3'>Benvindo de Volta</h3>
                        <p className='text-sm text-gray-300'>Inicie a Sessão com os seus dados de Login, caso não tenha uma conta contacte o inicializador do sistema.</p>
                        <form action="" className='grid gap-3 my-2'>
                            <label htmlFor="user" className='text-gray-300 pl-1 mt-3'>Username</label>
                            <input type="text" id='user' className='w-full px-2 py-2 rounded-lg border border-solid border-gray-300 bg-white/10 focus:outline-none focus:border-gray-200 focus:bg-white/5' />
                            <label htmlFor="pass" className='text-gray-300 pl-1 mt-3'>Senha</label>
                            <input type="password" id='pass' className='w-full px-2 py-2 rounded-lg border border-solid border-gray-300 bg-white/10 focus:outline-none focus:border-gray-200 focus:bg-white/5' />
                            <ButtonCustom text="Iniciar Sessão"></ButtonCustom>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}