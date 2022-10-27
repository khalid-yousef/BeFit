import React, { useRef } from "react";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";

import {
	faDumbbell,
	faPersonRunning,
	faFire,
	faHeartPulse,
} from "@fortawesome/free-solid-svg-icons";

import ProgramsCard from "./ProgramsCard";

const programsData = [
	{
		id: 0,
		title: "Strength Training",
		description:
			"In this program, you are trained to improve your strength through many exercises.",
		fontAwesomeIcon: faDumbbell,
	},
	{
		id: 1,
		title: "Cardio Training",
		description:
			"In this program, you are trained to do sequential moves in range of 20 until 30 minutes.",
		fontAwesomeIcon: faPersonRunning,
	},
	{
		id: 2,
		title: "Fat Burning",
		description:
			"This program is suitable for you who wants to get rid of your fat and lose their weight.",
		fontAwesomeIcon: faFire,
	},
	{
		id: 3,
		title: "Health Fitness",
		description:
			"This programs is designed for those who exercises only for their body fitness not body building.",
		fontAwesomeIcon: faHeartPulse,
	},
];

const Programs = (props) => {
	const programsRef = useRef();
	const programsIsInView = useInView(programsRef);

	return (
		<div id={props.id} className="md:py-28 pb-20">
			<div className="flex flex-wrap flex-col md:flex-row gap-10 justify-center items-center">
				<h1 className="textStroke text-5xl md:text-6xl text-center">
					Explore our
				</h1>
				<h1 className="text-5xl md:text-6xl text-center text-white">Programs</h1>
				<h1 className="textStroke text-5xl md:text-6xl text-center">
					To shape you
				</h1>
			</div>

			<div
				ref={programsRef}
				className=" overflow-hidden flex flex-wrap md:flex-row flex-col justify-center items-center gap-5 my-14"
			>
				{programsData.map((program, i) => (
					<motion.div
						key={program.id}
						initial={{ y: 0, opacity: 1 }}
						animate={
							programsIsInView
								? {
										y: 0,
										opacity: 5,
										transition: {
											type: "spring",
											duration: 1,
										},
								  }
								: {
										y: -400,
										opacity: 0,
										transition: {
											type: "tween",
											duration: 0.5,
										},
								  }
						}
					>
						<ProgramsCard
							title={program.title}
							description={program.description}
							FontAwesomeIcon={program.fontAwesomeIcon}
						/>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default Programs;
