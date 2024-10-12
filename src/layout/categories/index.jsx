import { CategoriesList } from "../../const/conts";

export default function Categories() {
    return (
        <div className="container items-center mx-auto px-7 flex flex-col gap-5 mt-10">
            {CategoriesList.map((category, index) => (
                <div key={index} className="w-3/4 flex lg:flex-row flex-col h-min  rounded-lg px-4 py-2 gap-3">
                    <div className="lg:w-2/4 w-full rounded-md overflow-hidden">
                        <img src={category.image} alt="Learnhist_image" className="object-cover w-full" />
                    </div>
                    <div className="lg:w-3/4 h-auto flex flex-col gap-3 px-10">
                        <h2 className="text-white text-center text-2xl font-semibold">{category.title}</h2>
                        <p className="text-white text-left mt-3 text-gray line-clamp-[8]">{category.description}</p>
                        <a href="#" className="px-3 hover:bg-red-600 transition-colors py-1 mr-auto   bg-red-500 rounded-md text-white mt-auto">Daha Fazla</a>
                    </div>
                </div>
            ))}           
        </div>
    )
}