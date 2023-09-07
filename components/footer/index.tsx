"use client"
import Image from "next/image"
import s from "./footer.module.sass"

export default function Footer() {
	return (
		<footer className={s.container}>
			<div>{"@2022 xps. All rights reserved"}</div>
			<div className={s.social}>
				<Image
					src="/1.png"
					width={15}
					height={15}
					className={s.icon}
					alt="xps-fb"
				/>
				<Image
					src="/2.png"
					width={15}
					height={15}
					className={s.icon}
					alt="xps-ig"
				/>
				<Image
					src="/3.png"
					width={15}
					height={15}
					className={s.icon}
					alt="xps"
				/>
				<Image
					src="/4.png"
					width={15}
					height={15}
					className={s.icon}
					alt="xps"
				/>
			</div>
		</footer>
	)
}
