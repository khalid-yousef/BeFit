import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ProgramsCard = (props) => {
	return (
		<div className=" cursor-pointer hover:bg-[#FFA500] transition-all duration-500 rounded flex gap-5 text-white flex-col justify-start items-start bg-[#808080] w-[270px] h-[270px] p-4">
			<FontAwesomeIcon className="text-2xl" icon={props.FontAwesomeIcon} />

			<h1 className="text-3xl">{props.title}</h1>

			<p>{props.description}</p>

			<div className="flex flex-row gap-2 justify-center items-center">
				<button className=" text-xl bg-transparent">Join Now</button>
				<FontAwesomeIcon className="text-xl" icon={faArrowRight} />
			</div>
		</div>
	);
};

export default ProgramsCard;
