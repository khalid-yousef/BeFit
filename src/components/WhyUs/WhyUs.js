import React, { useRef } from "react";
import WhyUsImages from "./WhyUsImages";
import tickImage from "../../assets/tick.png";

import { motion, useInView } from "framer-motion";

const WhyUs = (props) => {
	const textRef = useRef();
	const textIsInView = useInView(textRef);

	const data = [
		{ id: "r1", symbol: tickImage, desc: "over 140+ expert coaches" },
		{
			id: "r2",
			symbol: tickImage,
			desc: "train smarter and faster than before",
		},
		{ id: "r3", symbol: tickImage, desc: "1 free program for new member" },
		{ id: "r4", symbol: tickImage, desc: "reliable partners" },
	];

	return (
		<div
			id={props.id}
			className="md:py-28 pb-20 h-full flex flex-wrap md:flex-row  flex-col gap-10 mx-auto justify-start px-16 items-center"
		>
			<WhyUsImages />
			<div className="flex gap-6 flex-col">
				<h3 className="text-[#FFA500] font-bold ">SOME REASONS</h3>
				<h1 className=" text-5xl font-bold text-white">
					<span className="whiteTextStroke">WHY</span> CHOOSE US?
				</h1>
				<div ref={textRef} className=" overflow-hidden flex flex-col gap-2">
					{data.map((item, index) => (
						<motion.div
							initial={{ y: -50, opacity: 0 }}
							animate={
								textIsInView
									? {
											y: 0,
											opacity: 1,
											transition: {
												type: "spring",
												duration: 2,
												delay: 1,
											},
									  }
									: { y: -50, opacity: 0 }
							}
							className="flex flex-row gap-5 mb-5"
							key={item.id}
						>
							<img className="w-[30px] h-[30px]" src={item.symbol} alt="" />
							<p className="text-xl text-white font-bold">{item.desc}</p>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default WhyUs;
