"use client"

import { IPeriod } from "../lib/utils"
import React from 'react'

interface IPeriodProps {
	period: IPeriod
}

export default function Period(props: IPeriodProps) {
	const { title, timeline, description } = props?.period

	return (
		<div className="w-full grid grid-cols-[max-content_auto] gap-[15px] lg:gap-[50px]">
			<div className="flex items-start justify-start">
				<div className="period-timeline sticky top-[50vh] border border-hemerald px-[8px] py-[4px] rounded-md">
					<h5 className="font-bold">{timeline}</h5>
				</div>
			</div>
			<div>
				<h4 className="text-tertiary font-bold leading-none">{title}</h4>
				<div className="font-thin mt-[14px]" dangerouslySetInnerHTML={{ __html: description }}></div>
			</div>
			<div className="">

			</div>
		</div>
	)
}