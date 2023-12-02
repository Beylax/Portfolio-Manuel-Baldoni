import { useContext } from "react"
import { LoadingContext } from "./layout"

export default function Loader() {
    const { isLoading } = useContext(LoadingContext)

    return (
        <div className={`loading flex items-center justify-center fixed z-[100000] bg-gradient-to-r from-highlight to-highlight50 transition-all duration-500 overflow-hidden inset-0 ${isLoading ? "" : "scale-150 opacity-0 pointer-events-none"}`}>
            <div className="relative">
                <span className="loader"></span>
            </div>
        </div>
    )
}