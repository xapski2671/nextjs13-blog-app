import Image from "next/image"
import s from "./about.module.sass"
import Button from "@/components/button"

export default function About() {
	return (
		<div className={s.container}>
			<div className={s.img_container}>
				<Image
					src={
						"https://images.pexels.com/photos/4350084/pexels-photo-4350084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					}
					fill
					alt="about"
					className={s.img}
				/>
				<div className={s.img_text}>
					<h1>{"Digital Storytellers"}</h1>
					<h2>{"Handcrafting award-winning digital experiences."}</h2>
				</div>
			</div>
			<div className={s.text_container}>
				<div className={s.item}>
					<h1 className={s.title}>{"Who are we?"}</h1>
					<p className={s.desc}>
						{` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
							numquam molestias debitis iste. Distinctio praesentium, facere ipsa,
							blanditiis quisquam aut et debitis ea fugit quasi veniam dolorum
							magni architecto fuga?`}
						<br />
						<br />
						{` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
							numquam molestias debitis iste. Distinctio praesentium, facere ipsa,
							blanditiis quisquam aut et debitis ea fugit quasi veniam dolorum
							magni architecto fuga?`}
					</p>
				</div>
				<div className={s.item}>
					<h1 className={s.title}>{"What we do?"}</h1>
					<p className={s.desc}>
						{` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
							numquam molestias debitis iste. Distinctio praesentium, facere ipsa,
							blanditiis quisquam aut et debitis ea fugit quasi veniam dolorum
							magni architecto fuga?`}
						<br />
						<br />
						{` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
							numquam molestias debitis iste. Distinctio praesentium, facere ipsa,
							blanditiis quisquam aut et debitis ea fugit quasi veniam dolorum
							magni architecto fuga?`}
					</p>
					<Button url="/contact" text="Contact" />
				</div>
			</div>
		</div>
	)
}
