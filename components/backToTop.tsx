"use client"

import { useEffect } from "react";
import tailwindConfig from "../tailwind.config";
import Icon from "./icon";

export default function BackToTop() {
    useEffect(() => {
        document.addEventListener("scroll", function () {
            if (window.scrollY <= 0) {
                document.getElementById("back-to-top")?.classList.add("top")
            }
            else {
                document.getElementById("back-to-top")?.classList.remove("top")
            }
        })
    }, [])
    
    return (
        <button id="back-to-top" className={`fixed bottom-20 left-4 w-[30px] h-[30px] p-2 flex items-center justify-center z-[10000] bg-gradient-to-r from-highlight to-highlight50 rounded-full transition-all duration-400 opacity-100 pointer-events-auto [&.top]:opacity-0 [&.top]:pointer-events-none`} onClick={() => window?.scroll({ "top": 0, "behavior": "smooth" })}>
            <Icon icon="chevron-up" fill={tailwindConfig.theme.extend.colors["main"]} />
        </button>
    )
}