import "./App.css";

import Home from "./components/Home/Home";
import Programs from "./components/Programs/Programs";
import WhyUs from "./components/WhyUs/WhyUs";
import Plans from "./components/Plans/Plans";
import Testimonials from "./components/Testimonials/Testimonials";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function App() {
	return (
		<div>
			<div className=" relative mb-52 z-10 flex flex-col siteBackground overflow-hidden">
				<Home id="Home" />
				<Programs id="Programs" />
				<WhyUs id="WhyUs" />
				<Plans id="Plans" />
				<Testimonials id="Testimonials" />
			</div>

			{/* Footer */}
			<footer
				className={` fixed bottom-0 z-0 h-52 w-full bg-[url(../src/assets/background.png)] bg-[#737272] flex flex-col items-center justify-center`}
			>
				<div className=" flex flex-row gap-5">
					<a href="https://github.com/khalid-yousef">
						<FontAwesomeIcon
							className=" hover:translate-y-[-20%] transition-all duration-300  text-4xl text-[#FFA500]"
							icon={faGithub}
						/>
					</a>
					<a href="https://www.linkedin.com/in/khalid-yousef-66456a232/">
						<FontAwesomeIcon
							className="hover:translate-y-[-20%] transition-all duration-300 text-4xl text-[#FFA500]"
							icon={faLinkedin}
						/>
					</a>
				</div>

				<div>
					<h1 className="text-white text-3xl font-bold opacity-70">
						Contact Me
					</h1>
				</div>
			</footer>
		</div>
	);
}

export default App;
