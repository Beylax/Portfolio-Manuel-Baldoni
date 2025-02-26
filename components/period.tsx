"use client"

import { IPeriod } from "../lib/utils"
import React from 'react'

interface IPeriodProps {
	period: IPeriod
}

export default function Period(props: IPeriodProps) {
	const { title, timeline, description } = props?.period

	return (
		<div className="period-timeline w-full grid grid-cols-[1fr_1fr] gap-[15px] lg:gap-[100px] items-start py-20">
			<div className="sticky top-[50vh] flex items-start justify-between gap-[20px]">
				<h4 className="text-2xl font-bold">
					{title}
				</h4>
				<h5 className="text-3xl font-bold shrink-0">
					{timeline}
				</h5>
			</div>
			<div dangerouslySetInnerHTML={{ __html: description }}></div>
		</div>
	)
}