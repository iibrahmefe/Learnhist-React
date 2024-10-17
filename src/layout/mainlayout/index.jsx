import { useState, useEffect } from 'react';
import Navbar from "../../components/navbar";
import SettingsButton from "../../components/settings";
import Slider from "../../components/slider";
import Categories from "../categories";
import Loader from "../../components/loader"; // Loader component'ini eklediğinizi varsayıyorum

export default function MainLayout() {
    const [loading, setLoading] = useState(true); // Başlangıçta loading durumu true

    useEffect(() => {
        // 1 saniye sonra loading'i false yap
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // 1000ms = 1 saniye

        // Component unmount olduğunda timer'ı temizleyelim
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full min-h-screen bg-black relative">
            {loading ? (
                <Loader />  // Loader component'i loading true iken gözükür
            ) : (
                <>
                    <Navbar />
                    <Slider />
                    <Categories />
                    <SettingsButton />
                </>
            )}
        </div>
    );
}
