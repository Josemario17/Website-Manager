
export default function ButtonCustom({type, text, onclick}){
    return(
        <button onClick={onclick} className="w-full bg-[#7577cd] text-white px-2 py-2 mt-4 text-center rounded-lg hover:bg-white/10 duration-300" type={type}>{text}</button>
    )
}