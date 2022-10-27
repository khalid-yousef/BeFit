import { useCallback, useEffect, useRef, useState } from "react";

import { useInView, motion } from "framer-motion";

import image1 from "../../assets/t-image1.png";
import image2 from "../../assets/t-image2.jpg";
import image3 from "../../assets/t-image3.jpg";

import classes from "./Testimonials.module.css";

const sliderData = [
	{
		id: "i1",
		name: "FRANKLIN",
		job: " - CUSTOMER",
		say: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima aspernatur quod voluptatem",
		imageUrl: image1,
	},
	{
		id: "i2",
		name: "JOHN KEVIN",
		job: " - COACH",
		say: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsam, ab itaque nam perferendis impedit sint ",
		imageUrl: image2,
	},
	{
		id: "i3",
		name: "MATHEW HENDRICKSON",
		job: " - ENTREPRENEUR",
		say: "I made the right choice by choosing the Fitclub and by choosing the right plan",
		imageUrl: image3,
	},
];

const Testimonials = (props) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const slideRef = useRef();
	const slideIsInView = useInView(slideRef);

	const goToNext = useCallback(() => {
		const newIndex =
			currentIndex === sliderData.length - 1 ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);

		slideRef.current.classList.add(classes.slideAnimation);
	}, [currentIndex]);

	const removeAnimation = () => {
		slideRef.current.classList.remove(classes.slideAnimation);
	};

	useEffect(() => {
		setTimeout(goToNext, 3000);
		slideRef.current.addEventListener("animationend", removeAnimation);
	}, [goToNext]);

	return (
		<div
			id={props.id}
			className=" md:py-28 md:mb-20 pb-20 h-full text-white flex flex-wrap justify-center items-center md:justify-between mx-auto  gap-20 md:flex-row flex-col"
		>
			<div className="md:w-[500px] w-[300px] flex flex-wrap justify-center items-start flex-col gap-10">
				<h1 className="font-bold text-[#FFA500]">TESTIMONIALS</h1>
				<h2 className="text-6xl font-bold ">
					<span className="whiteTextStroke">What they</span> <br /> say about us
				</h2>
				<p className="text-xl">{sliderData[currentIndex].say}</p>
				<p>
					<span className="text-[#FFA500]">
						{sliderData[currentIndex].name}
					</span>
					{sliderData[currentIndex].job}
				</p>
			</div>

			<div
				ref={slideRef}
				className="flex gap-5 flex-col items-center justify-center"
			>
				<motion.div
					initial={{ x: 400, opacity: 0 }}
					animate={
						slideIsInView
							? {
									x: 0,
									opacity: 1,
									transition: { type: "spring", duration: 2, delay: 0.5 },
							  }
							: { x: 400, opacity: 0 }
					}
					className={classes.imageSlide}
				>
					<img
						className="w-[250px] h-[300px] rounded "
						src={sliderData[currentIndex].imageUrl}
						alt=""
					/>
				</motion.div>
			</div>
		</div>
	);
};

export default Testimonials;
