"use client"
import Link from "next/link"
import s from "./navbar.module.sass"

const links = [
	{
		id: 1,
		title: "Home",
		url: "/",
	},
	{
		id: 2,
		title: "Portfolio",
		url: "/portfolio",
	},
	{
		id: 3,
		title: "Blog",
		url: "/blog",
	},
	{
		id: 4,
		title: "About",
		url: "/about",
	},
	{
		id: 5,
		title: "Contact",
		url: "/contact",
	},
	{
		id: 6,
		title: "Dashboard",
		url: "/dashboard",
	},
]

export default function Navbar() {
	return (
		<div className={s.container}>
			<Link href={"/"} className={s.logo}>
				{"XPS"}
			</Link>
			<div className={s.links}>
				{links.map((link) => {
					return (
						<Link key={link.id} href={link.url} className={s.link}>
							{link.title}
						</Link>
					)
				})}
				<button className={s.logout}>{"Logout"}</button>
			</div>
		</div>
	)
}
