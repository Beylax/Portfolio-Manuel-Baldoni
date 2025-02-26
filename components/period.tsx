"use client"

import { IPeriod } from "../lib/utils"
import React from 'react'

interface IPeriodProps {
	period: IPeriod
	i?: number
}

export default function Period(props: IPeriodProps) {
	const { title, timeline, description } = props?.period

	return (
		<div className={`period-timeline w-full pl-20 lg:pl-0 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-[15px] lg:gap-[100px] items-start ${props.i === 0 ? "pb-20" : "py-20"}`}>
			<div className="lg:sticky lg:top-[50vh] lg:flex items-start justify-between gap-[20px]">
				<h4 className="text-3xl font-bold text-tertiary">
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