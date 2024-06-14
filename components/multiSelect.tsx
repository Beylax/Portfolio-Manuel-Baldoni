import { useState } from "react"
import { IMultiSelectOption } from "../lib/utils"
import Image from "next/image"
import Icon from "./icon"
import { useRouter } from "next/router"

interface IMultiSelectProps {
    defaultOption: IMultiSelectOption
    options: Array<IMultiSelectOption>
}

export default function MultiSelect(props: IMultiSelectProps) {
    const { defaultOption, options } = props

    const router = useRouter()

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [numberOfSelectedOptions, setNumberOfSelectedOptions] = useState<number>(0)

    return (
        <div className={`group relative text-black font-bold z-40`} aria-expanded={isOpen}>
            <button className="bg-white py-2 pl-2 pr-10 rounded-md" onClick={() => setIsOpen(o => !o)}>
                <Icon className="absolute top-[50%] right-[10px] translate-y-[-50%] transition-all duration-400 rotate-180 group-aria-expanded:rotate-0" icon="chevron-up" fill="black" />
                <span className="flex items-center gap-[8px] ">
                    {defaultOption.label}
                    {
                        defaultOption.image_url ?
                            <span className="relative w-[12px] h-[12px] rounded-full overflow-hidden">
                                <Image className="object-contain object-center" src={defaultOption.image_url} alt={defaultOption.label} fill />
                            </span> : null
                    }
                </span>
            </button>
            <ul className="absolute top-[calc(100%+4px)] left-0 flex flex-col items-stretch gap-[2px] p-2 rounded-md bg-white text-black max-h-[300px] overflow-auto transition-all duration-400 opacity-0 pointer-events-none group-aria-expanded:opacity-100 group-aria-expanded:pointer-events-auto">
                {
                    options?.map((o: IMultiSelectOption) => {
                        return (
                            <li key={o.value} className="flex items-center gap-[8px] cursor-pointer">
                                <input type="checkbox" id={o.value} defaultChecked={o.isCheckedByDefault} onChange={() => {
                                    // TODO:
                                    router.push({
                                        query: {
                                            ...router.query,
                                            skills: router.query?.skills?.concat(o?.value)
                                        }
                                    })
                                }} />
                                <label className="flex-grow flex items-center gap-[8px]" htmlFor={o.value}>
                                    <span className="whitespace-nowrap">{o.label}</span>
                                    {
                                        o.image_url ?
                                            <span className="relative w-[12px] h-[12px] rounded-full overflow-hidden">
                                                <Image className="object-contain object-center" src={o.image_url} alt={o.label} fill />
                                            </span> : null
                                    }
                                </label>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}