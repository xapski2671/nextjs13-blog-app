import Image from "next/image"
import s from "./contact.module.sass"
import Button from "@/components/button"

export default function Contact() {
	return (
		<div className={s.container}>
			<h1 className={s.title}>{"Let's keep in touch"}</h1>
			<div className={s.content}>
				<div className={s.img_cont}>
					<Image src={"/contact.png"} alt="contact" fill className={s.img} />
				</div>
				<form className={s.form}>
					<input type="text" placeholder="name" className={s.input} />
					<input type="email" placeholder="email address" className={s.input} />
					<textarea
						className={s.text_area}
						cols={30}
						rows={10}
						placeholder="message"
					></textarea>
					<Button url="#" text="Send" />
				</form>
			</div>
		</div>
	)
}
