import { useContext, useState } from "react";
import { themeContext } from "../context/ThemeContext";
import lightSVG from '/light.svg';
import darkSVG from '/darkmode.svg'

export default function Switcher() {

	const { toggleTheme, darkMode } = useContext(themeContext);

	return (
		<div>
			

			<button onClick={toggleTheme} className="w-[28px]">
				{darkMode? <img src={lightSVG}/> : <img src={darkSVG}/>}
				
			</button>
		</div>
	);
}
