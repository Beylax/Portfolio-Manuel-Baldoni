"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { IMultiSelectOption } from "../lib/utils"
import Image from "next/image"
import Icon from "./icon"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

interface IMultiSelectProps {
	defaultOption: IMultiSelectOption
	options: Array<IMultiSelectOption>
}

const useOutsideClick = (callback: () => void) => {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent | TouchEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				callback();
			}
		};

		document.addEventListener('mouseup', handleClickOutside);
		document.addEventListener('touchend', handleClickOutside);

		return () => {
			document.removeEventListener('mouseup', handleClickOutside);
			document.removeEventListener('touchend', handleClickOutside);
		};
	}, [callback]);

	return ref;
};

export default function MultiSelect(props: IMultiSelectProps) {
	const { defaultOption, options } = props

	const router = useRouter()
	const searchParams = useSearchParams()
	const pathname = usePathname()

	const [isOpen, setIsOpen] = useState<boolean>(false)

	const ref = useOutsideClick(() => {
		setIsOpen(false)
	});

	const createQueryString = useCallback(
		(name: string, value: string, action: "add" | "update" | "remove" | "delete" = "update") => {
			const params = new URLSearchParams(searchParams.toString())

			switch (action) {
				case "add":
					params.append(name, value)
					break
				case "update":
					params.set(name, value)
					break
				case "remove":
					params.delete(name)
					searchParams.getAll(name)?.forEach(v => {
						if (v !== value) {
							params.append(name, v)
						}
					})
					break
				case "delete":
					params.delete(name)
					break
			}

			return params.toString()
		},
		[searchParams]
	)

	return (
		<div ref={ref} className={`w-full lg:w-auto group relative text-black z-40`} aria-expanded={isOpen}>
			<button className="min-w-full bg-white py-2 pl-2 pr-10 rounded-md" onClick={() => setIsOpen(o => !o)}>
				<Icon className="absolute top-[50%] right-[10px] translate-y-[-50%] transition-all duration-400 rotate-180 group-aria-expanded:rotate-0" icon="chevron-up" fill="black" />
				<span className="flex items-center gap-[8px] ">
					{defaultOption.label}
					{ searchParams.getAll("skills")?.length > 0 && <span className="text-xs bg-highlight text-white px-1 rounded-full">{searchParams.getAll("skills").length}</span> }
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
						const checked = searchParams.getAll('skills')?.includes(o.value)
						return (
							<li key={`${o.value}-${checked}`} className="flex items-center gap-[8px] cursor-pointer px-2 py-1 rounded-md hover:bg-hemerald [&:has(input:checked)]:bg-hemerald transition-all duration-400">
								<input
									type="checkbox"
									id={o.value}
									checked={checked}
									value={o.value}
									onChange={(e) => {
										router.push(pathname + '?' + createQueryString('skills', o.value, e.target.checked ? 'add' : 'remove'), {
											scroll: false
										})
									}} />
								<label className="flex-grow flex items-center gap-[8px]" htmlFor={o.value}>
									<span className="whitespace-nowrap">{o.label}</span>
									{
										o.image_url ?
											<span className="relative w-[24px] h-[24px] rounded-full overflow-hidden">
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