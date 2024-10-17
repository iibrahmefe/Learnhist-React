import { Popover, PopoverPanel, PopoverButton } from "@headlessui/react";
import { CiSettings } from "react-icons/ci";
export default function SettingsButton() {
    return (
        <Popover className="absolute  bg-black/40 text-white rounded-full top-24 flex items-center text-[24px] justify-center left-2 z-50">
            <Popover.Button className="">
                <CiSettings />

            </Popover.Button>
            <PopoverPanel className="w-[320px] h-[90px]  ">
                asdasdas
            </PopoverPanel>
        </Popover>
    )
}