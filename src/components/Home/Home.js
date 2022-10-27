import { useEffect, useRef, useState } from "react";

import NavBar from "./NavBar";

import heroImg from "../../assets/hero_image.png";
import heroBack from "../../assets/hero_image_back.png";

import CountUp from "react-countup";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const details = [
	{ number: 140, desc: "EXPERT COACHES" },
	{ number: 978, desc: "MEMBERS JOINED" },
	{ number: 50, desc: "FITNESS PROGRAMS" },
];

const Home = (props) => {
	const [isSticky, setIsSticky] = useState(false);

	const mainRef = useRef();
	const mainIsInView = useInView(mainRef);

	const imageAnimation = useAnimation();
	const shapeAnimation = useAnimation();

	useEffect(() => {
		if (mainIsInView) {
			imageAnimation.start({
				opacity: 1,
				x: 0,
				transition: {
					type: "spring",
					duration: 5,
					bounce: 0.3,
					delay: 0.3,
				},
			});

			shapeAnimation.start({
				x: 0,
				transition: {
					type: "spring",
					duration: 10,
					bounce: 0.3,
					delay: 0.3,
				},
			});
		} else {
			imageAnimation.start({
				opacity: 0,
				x: 400,
				transition: {
					type: "spring",
					duration: 0.5,
				},
			});

			shapeAnimation.start({
				x: 200,
				transition: {
					type: "spring",
					duration: 0.5,
				},
			});
		}
	}, [shapeAnimation, imageAnimation, mainIsInView]);

	const stickyNavBar = () => {
		if (window.scrollY >= 10) {
			setIsSticky(true);
		} else {
			setIsSticky(false);
		}
	};

	window.addEventListener("scroll", stickyNavBar);

	return (
		<div
			id={props.id}
			className={`md:pb-28 pb-20 w-[100vw] h-[100vh] flex flex-col relative overflow-hidden`}
		>
			<NavBar />

			<main
				ref={mainRef}
				className={`${
					isSticky && "pt-32"
				} flex  w-full h-full gap-6 items-center justify-center md:justify-around`}
			>
				{/* First Left Container */}

				<div className="flex flex-col gap-8">
					<div
						className={
							"md:flex hidden w-[300px] h-[50px] mt-10 rounded-[20px]  bg-[#393d42] relative justify-center items-center"
						}
					>
						<motion.div
							initial={{ x: 200 }}
							animate={shapeAnimation}
							className={
								"w-[82px] h-[50px] bg-[#FFA500] rounded-[20px] absolute left-0"
							}
						></motion.div>
						<h3 className="text-white opacity-90">
							THE BEST FITNESS CLUB IN THE TOWN
						</h3>
					</div>

					{/* Second Left Container */}

					<div className=" justify-center items-center text-center flex flex-col">
						<h1 className="md:text-8xl text-6xl font-bold text-white">
							<span className={`textStroke`}>Shape</span> Your <br />
							<span className={" textStroke"}>Ideal</span> body
						</h1>
					</div>

					{/* Last Left Container */}

					<div className="flex ">
						{details.map((item) => (
							<div key={item.desc} className="flex flex-col items-center">
								<h2 className="text-center text-3xl font-bold text-white">
									+
									{mainIsInView && (
										<CountUp start={0} end={item.number} duration={2} />
									)}
								</h2>
								<p className="text-white text-[1rem] w-[100px] h-[60px] opacity-70 text-center">
									{item.desc}
								</p>
							</div>
						))}
					</div>
				</div>

				{/* First Right Container */}

				<div>
					<motion.div
						initial={{ x: 400, opacity: 0 }}
						animate={imageAnimation}
						className="md:w-[320px] w-[300px] md:static absolute top-32 md:z-0 z-[-1] right-10 "
					>
						<img className="md:opacity-90 opacity-80" src={heroImg} alt="" />
					</motion.div>

					<img
						className="w-[300px] top-[-10%] rotate-180 absolute right-[20%] z-[-2] opacity-80 "
						src={heroBack}
						alt=""
					/>
				</div>
			</main>
		</div>
	);
};

export default Home;
