import React from "react";
import Image from "next/image";

import Relax from "@/assets/icons/relax.svg";
import Meditate from "@/assets/icons/meditate.svg";
import Wallet from "@/assets/icons/wallet.svg";
import Shield from "@/assets/icons/shield.svg";
import ThumbsUp from "@/assets/icons/thumbs-up.svg";

const Features = () => {
	return (
		<section className="flex flex-col">
			<div className="">
				<div className="">
					<Image
						src={Relax}
						alt="Person relaxing in a chair"
						width={200}
						height={200}
					/>
				</div>
				<h3>Simple</h3>
				<p>
					Set up your mobile plan quickly and easily with our new technology.
					Speed up the process even more by provisioning your new secure eSIM
					device wallet.
				</p>
			</div>
			<div className="">
				<div className="">
					<Image
						src={Meditate}
						alt="Person meditating"
						width={200}
						height={200}
					/>
				</div>
				<h3>Private</h3>
				<p>
					We never ask for personal information, so there’s no way for us to
					collect or store it. Enjoy complete peace of mind on your vacations.
				</p>
			</div>
			<div className="">
				<div className="">
					<Image src={Wallet} alt="Digital wallet" width={200} height={200} />
				</div>
				<h3>eSIM Wallet</h3>
				<p>
					When you purchase your first Kokio travel data bundle, a secure eSIM
					crypto wallet is created. Not ready for crypto? No worries—the eSIM
					wallet is optional and can be activated whenever you choose.
				</p>
			</div>
			<div className="">
				<div className="">
					<Image
						src={Shield}
						alt="Shield with a checkmark"
						width={200}
						height={200}
					/>
				</div>
				<h3>Secure</h3>
				<p>
					Our app ensures top-notch security and privacy, utilizing biometrics
					and Zero Knowledge Proof technology.
				</p>
			</div>
			<div className="">
				<div className="">
					<Image src={ThumbsUp} alt="Thumbs up" width={200} height={200} />
				</div>
				<h3>Quick Pay</h3>
				<p>
					Enjoy flexible payment options including credit cards, Apple Pay,
					Google Pay, and PayPal. You can fund your eSIM wallet and check out
					even faster!
				</p>
			</div>
		</section>
	);
};
Features.displayName = "Features";

export { Features };
