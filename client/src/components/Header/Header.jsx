
import Button from "../buttons";
import { AiOutlineDownload , AiOutlineArrowDown} from 'react-icons/ai'

const Header = () => {
	return (
		<div className="h-screen w-full bg-primary flex flex-col-reverse  lg:flex-row justify-center items-center gap-4 lg:gap-10 2xl:gap-20">
			<div className="w-500 2xl:w-650 flex flex-col items-center lg:items-end">
				<h1 className="text-white text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-2 2xl:mb-10">
					<a>Fractal</a>
				</h1>
				<p className="text-neutral-200 text-xl lg:text-2xl xl:text-3xl lg:w-full leading-7 2xl:text-4xl 2xl:leading-10 w-3/4 md:text-right">
					Just a simple, single page responsive template brought to you by{" "}
					<a href="#" className="border-b border-dotted text-white text-xl 2xl:text-4xl ">
						HTML5 UP
					</a>
				</p>
				<div className="flex gap-5 justify-end mt-12">
					<Button
						icon={<AiOutlineDownload/>}
						name={"Download"}
						className={
							"text-blue-400 bg-white border-white"
						}
					/>
					<Button
						icon={<AiOutlineArrowDown/>}
						name={"Learn More"}
						className={
							"text-white bg-transparent text-2xl border-white/25 transition duration-300 hover:bg-white/10 whitespace-nowrap"
						}
					/>
				</div>
			</div>
			<div>
				<img src={"/images/pic03.jpg"} alt="screen" className="h-72 md:h-96 2xl:h-500 2xl:w-80" />
			</div>
		</div>
	);
};

export default Header;