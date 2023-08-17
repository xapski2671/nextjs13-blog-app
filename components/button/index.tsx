import Link from "next/link"
import s from "./button.module.sass"

export default function Button({ text, url }: { text: string; url: string }) {
	return (
		<button className={s.btn}>
			<Link href={url}>{text}</Link>
		</button>
	)
}
