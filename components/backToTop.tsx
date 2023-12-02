import tailwindConfig from "../tailwind.config";
import Icon from "./icon";

export default function BackToTop() {
    return (
        <button className="fixed top-4 right-4 w-[30px] h-[30px] p-2 flex items-center justify-center z-[10000] bg-gradient-to-r from-highlight to-highlight50 rounded-full" onClick={() => window?.scroll({ "top": 0, "behavior": "smooth" })}>
            <Icon icon="chevron-up" fill={tailwindConfig.theme.extend.colors["main"]} />
        </button>
    )
}