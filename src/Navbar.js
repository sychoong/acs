import React, { useState } from "react";
import styles from "./navbar.module.scss";
import {
	Cross1Icon,
	MagnifyingGlassIcon,
	HamburgerMenuIcon,
} from "@radix-ui/react-icons";
const navList = [
	"showcase",
	"docs",
	"blog",
	"analytics",
	"commerce",
	"templates",
	"enterprise",
];

const Navbar = () => {
	const [isActive, setisActive] = useState(true);
	const handleNavbar = (value) => () => {
		setisActive(value);
	};
	return (
		<div>
			<h1>Section 3 Navbar</h1>
			<div>As Above</div>
			<div className={`${styles.navbar} ${isActive ? "" : styles.closed}`}>
				<div className={styles.navbar__header}>
					<div>AEON</div>
					<div>
						<MagnifyingGlassIcon />
						<Cross1Icon onClick={handleNavbar(false)} />
					</div>
					<div>
						<HamburgerMenuIcon onClick={handleNavbar(true)} />
					</div>
				</div>
				<ol>
					{navList.map((section, index) => {
						return (
							<li key={index}>
								<a href="/">{section}</a>
							</li>
						);
					})}
				</ol>
				<input
					type="text"
					name=""
					id=""
					placeholder="Search Documentation..."
				/>
			</div>
		</div>
	);
};

export default Navbar;
