import { NavbarList } from '../../const/conts';

import LearnhistLogo from '../../assets/Learnhist-logo.svg'
export default function Navbar() {
    return (
        <nav className="flex items-center justify-between  h-20 bg-white px-10">
            {/* Logo alanı */}
            <div className=" flex-1 ">
        <img src={LearnhistLogo} alt="Learnhist Logo" className='max-w-12 max-h-12 w-full h-full object-cover' />
    </div>
            {/* <h2 className="flex-1">Learnhist</h2> */}

            {/* Ortada duran NavbarList */}
            <div className='flex-1 flex justify-center gap-5 items-center'>
                {NavbarList.map(({ link, title }, index) => (
                    <a key={index} href={link}>{title}</a>
                ))}
            </div>

            {/* Hesabım, Kayıt Ol, Giriş Yap alanı */}
            <div className='flex-1 flex justify-end gap-2'>
                <a href="/signup">Kayıt Ol</a>
                <a href="/login">Giriş Yap</a>
            </div>
        </nav>


    )
}
