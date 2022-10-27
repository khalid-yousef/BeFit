import React, { useRef } from "react";
import PlansCard from "./PlansCard";
import {
	faCrown,
	faDumbbell,
	faShieldHeart,
} from "@fortawesome/free-solid-svg-icons";

import { motion, useInView } from "framer-motion";

const plan1 = {
	id: "plan1",
	icon: faShieldHeart,
	title: "BASIC PLAN",
	price: "$20",
	p1: "2 hours of exercises",
	p2: "Free consultation to coaches",
	p3: "Access to The Community",
};

const plan2 = {
	id: "plan2",
	icon: faCrown,
	title: "PREMIUM PLAN",
	price: "$30",
	p1: "5 hour of exercises",
	p2: "Free consultation of Coaches",
	p3: "Accession minibar",
};

const plan3 = {
	id: "plan3",
	icon: faDumbbell,
	title: "PRO PLAN",
	price: "$40",
	p1: "8 hours of exercises",
	p2: "Consultation of Private Coach",
	p3: "Free Fitness Merchandises",
};

const Plans = (props) => {
	const plansRef = useRef();
	const plansIsInView = useInView(plansRef);

	return (
		<div
			id={props.id}
			className="md:py-24 pb-20  h-full flex flex-wrap flex-col gap-5 justify-center"
		>
			<div className="flex flex-wrap flex-col md:flex-row gap-12 justify-center items-center mt-10">
				<h1 className="md:text-7xl text-5xl leading-relaxed  text-center font-bold text-white">
					<span className="whiteTextStroke ">Ready to Start</span> Your Journey
				</h1>
			</div>

			<div
				className=" overflow-hidden flex gap-8 md:flex-row flex-col justify-center items-center"
				ref={plansRef}
			>
				{/*  */}
				{/* First Plan */}

				<motion.div
					initial={{ x: -400, opacity: 0 }}
					animate={
						plansIsInView
							? {
									x: 0,
									opacity: 1,
									transition: { duration: 1, type: "spring", delay: 0.5 },
							  }
							: {
									x: -400,
									opacity: 0,
									transition: { type: "tween", duration: 0.5 },
							  }
					}
				>
					<PlansCard
						key={plan1.id}
						className="bg-[#656565] py-3"
						iconStyle="text-[#FFA500]"
						icon={plan1.icon}
						title={plan1.title}
						price={plan1.price}
						p1={plan1.p1}
						p2={plan1.p2}
						p3={plan1.p3}
					/>
				</motion.div>

				{/* Second Plan */}
				<motion.div
					initial={{ y: -400, opacity: 0 }}
					animate={
						plansIsInView
							? {
									y: 0,
									opacity: 1,
									transition: { duration: 1, type: "spring", delay: 0.8 },
							  }
							: {
									y: -400,
									opacity: 0,
									transition: { type: "tween", duration: 0.5 },
							  }
					}
				>
					<PlansCard
						key={plan2.id}
						className="bg-gradient-to-b from-orange-600 to-yellow-600 py-10 px-8"
						iconStyle="text-white"
						icon={plan2.icon}
						title={plan2.title}
						price={plan2.price}
						p1={plan2.p1}
						p2={plan2.p2}
						p3={plan2.p3}
					/>
				</motion.div>

				{/* Third Plan */}
				<motion.div
					initial={{ x: 400, opacity: 0 }}
					animate={
						plansIsInView
							? {
									x: 0,
									opacity: 1,
									transition: { duration: 1, type: "spring", delay: 0.5 },
							  }
							: {
									x: 400,
									opacity: 0,
									transition: { type: "tween", duration: 0.5 },
							  }
					}
				>
					<PlansCard
						key={plan3.id}
						className="bg-[#656565] py-3"
						iconStyle="text-[#FFA500]"
						icon={plan3.icon}
						title={plan3.title}
						price={plan3.price}
						p1={plan3.p1}
						p2={plan3.p2}
						p3={plan3.p3}
					/>
				</motion.div>
			</div>
		</div>
	);
};

export default Plans;
