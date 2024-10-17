import { Link } from "react-router-dom";
import ataturk from "../../assets/ataturk.jpg";

export default function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-screen w-full bg-no-repeat bg-cover flex-col gap-2" style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1)), url(${ataturk})`,
        }}>
            <h1 className="text-6xl text-white font-bold">Sayfa Bulunamadı</h1>
            <Link href="/" className="">Ana sayfa'ya dön</Link>
        </div>
    )
}