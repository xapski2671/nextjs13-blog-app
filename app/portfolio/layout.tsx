import { ReactNode } from "react"
import s from "./portfolio.module.sass"

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<div>
			<h1 className={s.main_title}>{"Our Works"}</h1>
			{children}
		</div>
	)
}
