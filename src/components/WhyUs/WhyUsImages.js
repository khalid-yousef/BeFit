import React, { useRef } from "react";

import { useInView, motion } from "framer-motion";

import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";

const WhyUsImages = () => {
	const imagesRef = useRef();
	const imagesIsInView = useInView(imagesRef);

	return (
		<div ref={imagesRef} className=" overflow-hidden ">
			<div className=" gap-2 grid grid-cols-3">
				{/* First Image */}

				<motion.div
					initial={{ x: -400, opacity: 0 }}
					animate={
						imagesIsInView
							? {
									x: 0,
									opacity: 1,
									transition: { type: "spring", duration: 2, delay: 0 },
							  }
							: {
									x: -400,
									opacity: 0,
									transition: { type: "tween", duration: 0.5 },
							  }
					}
					className=" col-span-1"
				>
					<img className=" rounded w-[200px] h-[410px]" src={image1} alt="" />
				</motion.div>

				<div className=" col-span-2">
					<div className="gap-2 grid grid-rows-2">
						{/* Second Image */}

						<motion.div
							initial={{ y: -400, opacity: 0 }}
							animate={
								imagesIsInView
									? {
											y: 0,
											opacity: 1,
											transition: { type: "spring", duration: 3, delay: 0.3 },
									  }
									: {
											y: -400,
											opacity: 0,
											transition: { type: "tween", duration: 0.5 },
									  }
							}
							className=" col-span-2 row-span-1"
						>
							<img
								className="rounded w-[400px] h-[200px]"
								src={image2}
								alt=""
							/>
						</motion.div>

						{/* Third Image */}

						<motion.div
							initial={{ x: 400, opacity: 0 }}
							animate={
								imagesIsInView
									? {
											x: 0,
											opacity: 1,
											transition: { type: "spring", duration: 4, delay: 0.8 },
									  }
									: {
											x: 400,
											opacity: 0,
											transition: { type: "tween", duration: 0.5 },
									  }
							}
							className=" row-span-1 col-span-1"
						>
							<img
								className="rounded w-[200px] h-[200px]"
								src={image3}
								alt=""
							/>
						</motion.div>

						{/* Fourth Image */}

						<motion.div
							initial={{ y: 400, opacity: 0 }}
							animate={
								imagesIsInView
									? {
											y: 0,
											opacity: 1,
											transition: { type: "spring", duration: 5, delay: 1.1 },
									  }
									: {
											y: 400,
											opacity: 0,
											transition: { type: "tween", duration: 0.5 },
									  }
							}
							className=" row-span-1 col-span-1"
						>
							<img
								className="rounded w-[200px] h-[200px]"
								src={image4}
								alt=""
							/>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhyUsImages;
