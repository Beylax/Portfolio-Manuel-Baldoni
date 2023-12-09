import { useState } from "react";
import tailwindConfig from "../tailwind.config";
import Icon from "./icon";

const URL = "https://drive.google.com/file/d/13GI7SE0II6Jagm8Ov1r_i8U-MSiO_8xS/view?usp=sharing"

export default function Curriculum() {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <button className="fixed bottom-[120px] right-4 w-[30px] h-[30px] p-2 flex items-center justify-center z-[10000] bg-gradient-to-r from-highlight to-highlight50 rounded-full z-[100000]" onClick={() => setIsVisible(true)}>
                <span className="text-xs font-bold ">CV</span>
            </button>
            <div className={`fixed inset-0 bg-[rgba(0,0,0,0.8)] p-6 lg:p-10 transition-all duration-300 z-[1000000] ${!isVisible ? "opacity-0 invisible pointer-events-none" : ""}`}>
                <iframe src={"/cv.pdf"} className="h-full w-full"></iframe>
                <button className="absolute top-2 right-2" onClick={() => setIsVisible(false)}>
                    <Icon icon="close" fill={tailwindConfig.theme.extend.colors["main"]} />
                </button>
            </div>
        </>
    )
}