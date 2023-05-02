/* eslint-disable react/jsx-key */
import Button from "../buttons";
import {
	AiOutlineDownload,
	AiFillFacebook,
	AiOutlineTwitter,AiOutlineInstagram,
} from "react-icons/ai";
const icons = [
	<AiFillFacebook />,
	<AiOutlineTwitter />,
	<AiOutlineInstagram />,
];
const Footer = () => {
	return (
		<div>
			<div className="bg-neutral-300/10 border-b-primary border-neutral-200">
				<div className="py-40  w-full md:w-650 2xl:w-2/5 mx-auto flex flex-col items-center ">
					<div className="mb-10 flex flex-col items-center ">
						<h1 className="text-xl md:text-3xl 2xl:text-4xl text-center text-neutral-500 mb-10 font-medium">
							Magna leo sapien gravida
						</h1>
						<p className="text-lg md:text-xl 2xl:text-2xl font-medium text-neutral-400 text-center mb-10">
							Gravida at leo elementum elit fusce accumsan dui libero, quis
							vehicula lectus ultricies eu. In convallis amet leo sapien iaculis
							efficitur.
						</p>
						<div className="w-20 bg-neutral-300 h-sm"></div>
					</div>
					<div className="flex gap-5">
						<Button
							icon={<AiOutlineDownload />}
							name={"Download"}
							className={"text-white bg-primary border-white transition duration-300 hover:bg-blue-400"}
						/>
						<Button
							name={"Learn more"}
							className={
								"text-neutral-400 bg-transparent border-neutral-500/40 transition duration-300 hover:bg-black/10"
							}
						/>
					</div>
				</div>
			</div>
			<div className="py-20 flex flex-col items-center bg-neutral-300/20">
				<div className="flex mb-10">
					{icons.map((icon,index) => (
						<div key={index} className="text-4xl md:text-5xl px-3 text-neutral-400 transition duration-300 hover:text-blue-500">
							<a href="#">{icon}</a>
						</div>
					))}
				</div>
				<div className="text-md text-neutral-400 md:text-xl">
					© Untitled. Credits:{" "}
					<a
						href="#"
						className="border-b border-dotted border-neutral-400 transition duration-300 hover:border-none hover:text-blue-500">
						HTML5 UP
					</a>{" "}
					+{" "}
					<a
						href="#"
						className="border-b border-dotted border-neutral-400  transition duration-300 hover:border-none hover:text-blue-500">
						{" "}
						Unsplash
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;