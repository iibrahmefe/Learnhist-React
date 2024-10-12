import Navbar from "../../components/navbar";
import SettingsButton from "../../components/settings";
import Slider from "../../components/slider";
import Categories from "../categories";

export default function MainLayout() {
    return (
        <div className="w-full min-h-screen bg-black relative">
            <Navbar />
            <Slider />
            <Categories />
            <SettingsButton />
        </div>
    )
}