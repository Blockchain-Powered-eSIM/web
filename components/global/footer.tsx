import React from "react";
import Image from "next/image";

import Logo from "@/assets/logo.svg";

const Footer = () => {
	return (
		<div>
			<Image src={Logo} alt="Logo" width={100} height={100} />
			<ul>
				<li>Link1</li>
				<li>Link2</li>
				<li>Link3</li>
			</ul>
		</div>
	);
};
Footer.displayName = "Footer";

export { Footer };
