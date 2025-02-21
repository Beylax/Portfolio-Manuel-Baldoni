"use client"

import Link from "next/link"
import { usePathname } from 'next/navigation'
import Container from "./container"
import Icon from "./icon"
import tailwindConfig from "../tailwind.config"
import { CapitalizeSlug } from "../lib/utils"

export default function Breadcrumb() {
    const pathname = usePathname()

    const paths = pathname?.split("/")?.filter(p => !!p)

	let path = ""
	
	if (pathname === "/") {
		return null
	}

    return (
        <Container className="breadcrumb flex items-center gap-x-2 pt-16 lg:pt-24 pb-4">
            <Link href={"/"} className="font-light text-main">
                {"Home"}
            </Link>
            {
                paths?.map((p, i) => {
                    path += `${p}/`

                    return (
                        <Link key={p} href={`/${path}`} className={`text-main flex items-center gap-x-2 ${i === paths?.length - 1 ? "font-bold" : "font-light"}`}>
                            <Icon icon="chevron-right" fill={tailwindConfig.theme.extend.colors["main"]} />
                            {`${CapitalizeSlug(p)}`}
                        </Link>
                    )
                })
            }
        </Container>
    )
}