export default function SignUp() {
    return (
        <div className="flex w-full h-full min-w-full min-h-screen ">
            <div className="relative flex-1 bg-red-600">
                <img src="https://www.learnhist.com.tr/resimler/Ataturk/ataturk-slider.jpg" alt="" className="absolute inset-0 object-cover h-full" />
            </div>
            <div className="flex items-center justify-center flex-1 text-white ">
                <form action="" className="flex gap-4 flex-col  justify-center relative w-3/4 h-3/5 px-4 py-2 rounded-lg">
                    <h2 className="mt-1 mb-10 text-left text-4xl font-bold">Learnhist</h2>
                    <div className="">
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder="Email giriniz" className="w-full mt-2 rounded-sm bg-transparent border py-3 px-6" />
                    </div>
                    <div className="">
                        <label htmlFor="">Şifre</label>
                        <input type="password" placeholder="Şifrenizi giriniz" className="w-full mt-2  rounded-sm bg-transparent border py-3 px-6" />
                    </div>
                    <div className="">
                        <label htmlFor="">İsminiz </label>
                        <input type="text" placeholder="İsminizi giriniz" className="w-full mt-2  rounded-sm bg-transparent border py-3 px-6" />
                    </div>
                    <div className="">
                        <label htmlFor="">Soy İsminiz </label>
                        <input type="text" placeholder="Soy isminizi giriniz" className="w-full mt-2  rounded-sm bg-transparent border py-3 px-6" />
                    </div>
                    <div className="flex mt-5 gap-5 items-center justify-between">
                        <a href="/Login" className="bg-white/20 px-4 py-1 rounded-sm">Kayıt Ol</a>
                        {/* <span>Hala sitemize kayıt olmadın mı ?<a href="#" className="text-blue-800 ml-4 rounded-sm">Giriş Yap</a> </span> */}
                    </div>
                </form>
            </div>
        </div>
    )
}