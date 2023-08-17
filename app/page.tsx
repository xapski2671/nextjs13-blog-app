import Image from "next/image"
import s from "./home.module.sass"
import Hero from "@/public/hero.png"

export default function Home() {
	return (
		<div className={s.container}>
			<div className={s.item}>
				<h1 className={s.title}>
					{"Better design for your digital products."}
				</h1>
				<p>
					{`Turning your idea into reality. We bring together 
						the teams from the global tech industry`}
				</p>
				<button className={s.button}>{"See our works"}</button>
			</div>
			<div className={s.item}>
				<Image src={Hero} alt="hero" className={s.img} />
			</div>
		</div>
	)
}
