import {NavbarList} from '../../const/conts';

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between text-white h-20 bg-white/30 px-10">
            {/* <div className="flex-shrink-0 w-24 h-24">
                <img src={LearnhistLogo} alt="Learnhist Logo" className='w-full h-full object-cover' />
            </div> */}
            <h2>Learnhist</h2>
            <div className='flex gap-4 items-center'>
                {NavbarList.map(({ link, title }, index) => (
                    <a key={index} href={link}>{title}</a>
                ))}
            </div>
            <div className='flex gap-2 flex-shrink-0'>
                <a href="#">Hesabım</a>
            </div>
        </nav>
    )
}
