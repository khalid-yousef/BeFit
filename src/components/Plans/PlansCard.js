import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

const PlansCard = (props) => {
	return (
		<div
			className={`rounded p-5 w-fit gap-3 flex items-start flex-col ${props.className}`}
		>
			<div>
				<FontAwesomeIcon
					className={`${props.iconStyle} text-4xl`}
					icon={props.icon}
				/>
			</div>

			<h1 className=" font-bold text-white text-xl">{props.title}</h1>

			<h2 className=" text-3xl font-bold text-white">{props.price}</h2>

			<div className="flex items-center gap-5">
				<div>
					<FontAwesomeIcon
						className="text-white text-lg"
						icon={faCheckCircle}
					/>
				</div>
				<p className="  text-white ">{props.p1}</p>
			</div>

			<div className="flex items-center gap-5">
				<div>
					<FontAwesomeIcon
						className="text-white text-lg"
						icon={faCheckCircle}
					/>
				</div>
				<p className=" text-white">{props.p2}</p>
			</div>

			<div className="flex items-center gap-5">
				<div>
					<FontAwesomeIcon
						className="text-white text-lg"
						icon={faCheckCircle}
					/>
				</div>
				<p className=" text-white">{props.p3}</p>
			</div>

			<div className="flex items-center gap-5">
				<button className="text-white">See More Benefits</button>
				<FontAwesomeIcon className="text-white" icon={faCaretRight} />
			</div>

			<button className="bg-white w-full hover:bg-[#FFA500] hover:text-white p-2 hover:rounded transition-all duration-300 ">
				Join Now
			</button>
		</div>
	);
};

export default PlansCard;
