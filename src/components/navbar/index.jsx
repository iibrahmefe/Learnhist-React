import { NavbarList } from '../../const/conts';

import LearnhistLogo from '../../assets/Learnhist-logo.svg'
export default function Navbar() {
    return (
        <nav className="flex items-center bg-black text-white px-10">

            <div className=" flex justify-start  flex-1">
                <a href="">
                    <img src={LearnhistLogo} alt="Learnhist Logo" className='max-w-20 max-h-20 w-full h-full object-cover' />
                </a>
            </div>

            <div className='justify-center flex flex-1 gap-2'>
                {NavbarList.map(({ link, title }, index) => (
                    <a key={index} href={link}>{title}</a>
                ))}
            </div>

            <div className='flex gap-2 justify-end flex-1'>
                <a href="/signup">Kayıt Ol</a>
                <a href="/login">Giriş Yap</a>
            </div>
        </nav>


    )
}
