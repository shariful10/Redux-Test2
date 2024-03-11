import React from "react";

const Button = ({ onClick, className, btnText }) => {
	return (
		<button
			onClick={onClick}
			className={`text-white font-semibold ${className} duration-500 rounded-md py-3 px-6`}
		>
			{btnText}
		</button>
	);
};

export default Button;
