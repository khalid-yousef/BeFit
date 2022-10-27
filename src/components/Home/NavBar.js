import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
	const [open, setOpen] = useState(false);
	const [isSticky, setIsSticky] = useState(false);

	const links = ["Home", "Programs", "Why Us", "Plans", "Testimonials"];
	const navigate = ["#Home", "#Programs", "#WhyUs", "#Plans", "#Testimonials"];

	const openNav = () => {
		setOpen((prev) => !prev);
	};

	const stickyNavBar = () => {
		if (window.scrollY >= 10) {
			setIsSticky(true);
		} else {
			setIsSticky(false);
		}
	};

	window.addEventListener("scroll", stickyNavBar);

	return (
		<header
			className={`${
				isSticky &&
				" fixed w-full z-50 py-0 bg-[url(../src/assets/background.png)] bg-[#5B5D60] "
			} transition-all duration-1000 py-2 md:py-4  flex md:flex-row flex-col justify-start items-start mb-10 `}
		>
			<div className="md:ml-16 static text-[#FFA500] ml-6  text-5xl font-bold">
				BeFit
			</div>

			<nav
				className={`${
					open
						? "left-0 top-12 z-50 md:bg-transparent  bg-[#5B5D60]"
						: "left-[-400vw]"
				} ${
					isSticky && "top-[70%] "
				} absolute top-16 transition-all duration-500  w-full md:static flex-col md:flex-row  md:bg-transparent bg-[#5B5D60] mt-4 md:mt-0  flex justify-around md:items-center items-start`}
			>
				<ul className="md:flex md:justify-end md:w-full md:pr-5">
					{links.map((link, i) => (
						<li
							key={link}
							className={` hover:text-[#FFA500] text-white transition-all duration-300 ml-6 md:my-0 my-3`}
						>
							<a href={navigate[i]}>{link}</a>
						</li>
					))}
				</ul>
				<button className="md:w-[130px] md:mr-16 bg-[#FFA500] text-white rounded border-2 border-[#FFA500] hover:bg-white hover:text-[#FFA500] transition-all duration-300 px-4 py-1 md:my-0 my-2 ml-5 md:ml-0 ">
					Join Now
				</button>
			</nav>

			<div
				className={`${
					isSticky && "top-5"
				} cursor-pointer md:hidden w-8 absolute right-6 top-5`}
				onClick={openNav}
			>
				{open ? (
					<FontAwesomeIcon className="text-3xl text-[#FFA500]" icon={faXmark} />
				) : (
					<FontAwesomeIcon className="text-3xl text-[#FFA500] " icon={faBars} />
				)}
			</div>
		</header>
	);
};

export default NavBar;
