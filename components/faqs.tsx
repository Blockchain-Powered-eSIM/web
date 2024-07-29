import React from "react";

const faqsData = [
	{
		question:
			"What is Kokio and how does it differ from traditional eSIM providers?",
		answer:
			"Kokio utilizes blockchain technology to offer decentralized mobile connectivity, enhancing privacy, security, and ease of use compared to traditional eSIM providers.",
	},
	{
		question: "How do I sign up for Kokio’s beta program?",
		answer:
			"To join Kokio’s beta program, click on the “Sign up for beta” button on the landing page and follow the instructions provided.",
	},
	{
		question: "How can I set up my Kokio eSIM?",
		answer:
			"Download the Kokio app, choose your desired plan from over 200 destinations, and activate your eSIM instantly to start enjoying mobile connectivity.",
	},
	{
		question: "What payment options does Kokio accept?",
		answer:
			"Kokio supports a variety of payment methods including credit cards, Apple Pay, Google Play, PayPal, and cryptocurrencies.",
	},
	{
		question: "How does the eSIM wallet feature work?",
		answer:
			"When you activate your Kokio eSIM, an optional secure digital wallet is also created. This wallet can function as both a crypto wallet and a digital ID.",
	},
	{
		question: "What security measures does Kokio employ for its services?",
		answer:
			"Kokio’s app ensures top-notch security and privacy using biometrics, Zero Knowledge Proof technology, and the inherent security features of blockchain technology.",
	},
	{
		question: "Is personal information required to use Kokio’s services?",
		answer:
			"No, Kokio values privacy and does not require personal information for setting up or using its services, ensuring your data remains private.",
	},
	{
		question: "What is the roadmap for Kokio’s service launch?",
		answer:
			"Key milestones include submitting a smart contract for PSE audit in August, conducting internal QA testing, launching closed beta testing in September to address bugs, and publicly launching the app with free data plan access in October.",
	},
];

const Faqs = () => {
	return (
		<section className="container">
			<div className="rounded-4xl px-8 py-14 bg-esim-black-950/60 md:rounded-[3.5rem] md:px-12 md:py-[5.5rem]">
				<h2 className="text-4xl font-bold text-cashmere-500 mb-8 md:mb-20">
					Frequently Asked Questions
				</h2>
				<dl className="flex flex-col gap-14">
					{faqsData.map((faq) => (
						<div key={faq.question} className="flex flex-col gap-2">
							<dt className="text-2xl font-bold text-cashmere-300 font-heading leading-5 md:text-[1.75rem] md:leading-7">
								{faq.question}
							</dt>
							<dd className="text-esim-black-50 text-lg font-light md:leading-7">
								{faq.answer}
							</dd>
						</div>
					))}
				</dl>
			</div>
		</section>
	);
};
Faqs.displayName = "Faqs";

export { Faqs };
