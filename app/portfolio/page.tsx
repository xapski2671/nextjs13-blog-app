import Link from "next/link"
import s from "./portfolio.module.sass"

export default function Portfolio() {
	return (
		<div className={s.container}>
			<h1 className={s.select_title}>{"Choose a gallery"}</h1>
			<div className={s.items}>
				<Link href={"/portfolio/illustrations"} className={s.item}>
					<span className={s.title}>{"Illustrations"}</span>
				</Link>
				<Link href={"/portfolio/websites"} className={s.item}>
					<span className={s.title}>{"Websites"}</span>
				</Link>
				<Link href={"/portfolio/application"} className={s.item}>
					<span className={s.title}>{"Applications"}</span>
				</Link>
			</div>
		</div>
	)
}
