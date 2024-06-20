import { useState } from "react"
import { IMultiSelectOption, useOutsideClick } from "../lib/utils"
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

    const ref = useOutsideClick(() => {
        setIsOpen(false)
    });

    return (
        <div ref={ref} className={`w-full lg:w-auto group relative text-black z-40`} aria-expanded={isOpen}>
            <button className="min-w-full bg-white py-2 pl-2 pr-10 rounded-md" onClick={() => setIsOpen(o => !o)}>
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
            <ul className="min-w-full absolute top-[calc(100%+4px)] left-0 flex flex-col items-stretch gap-[2px] p-2 rounded-md bg-white text-black max-h-[300px] overflow-auto transition-all duration-400 opacity-0 pointer-events-none group-aria-expanded:opacity-100 group-aria-expanded:pointer-events-auto">
                {
                    options?.map((o: IMultiSelectOption) => {
                        return (
                            <li key={o.value} className="flex items-center gap-[8px] cursor-pointer px-2 py-1 rounded-md hover:bg-hemerald [&:has(input:checked)]:bg-hemerald transition-all duration-400">
                                <input type="checkbox" id={o.value} defaultChecked={o.isCheckedByDefault} onChange={(e) => {
                                    // TODO:
                                    if (e.currentTarget.checked) {
                                        let query_object = router.query?.skills
                                        if (typeof router.query?.skills === "string") {
                                            query_object = [router.query?.skills]
                                        }
                                        router.push(
                                            {
                                                query: {
                                                    ...router.query,
                                                    skills: (query_object?.concat(o?.value) as string[])?.join(",") || o?.value
                                                }
                                            },
                                            undefined,
                                            { scroll: false }
                                        )
                                    }
                                    else {
                                        const new_query = router.query?.skills?.toString()?.split(",")?.filter((s: string) => s !== o.value)?.join(",")
                                        if (new_query) {
                                            router.push(
                                                {
                                                    query: {
                                                        ...router.query,
                                                        skills: new_query
                                                    }
                                                },
                                                undefined,
                                                { scroll: false }
                                            )
                                        }
                                        else {
                                            const query_object = router.query
                                            delete query_object.skills
                                            router.push(
                                                {
                                                    query: query_object
                                                },
                                                undefined,
                                                { scroll: false }
                                            )
                                        }
                                    }
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