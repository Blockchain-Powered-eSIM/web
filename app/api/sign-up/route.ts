import AirTable, { type Record } from "airtable";
import { NextResponse } from "next/server";

const base = new AirTable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
	"appvRYA4uxvcdmBxo",
);

export async function POST(request: Request, response: Response) {
	const req = await request.json();
	console.log(req);

	if (!base) {
		throw new Error("AIRTABLE_API_KEY is not defined");
	}

	try {
		const { email, phoneModel, previousCustomer, newToCrypto } = req;

		const record = base("Table 1").create({
			"Your email": email,
			"Your phone model": phoneModel,
			"Have you use eSIM before?": previousCustomer,
			"Have you used crypto before?": newToCrypto,
		});

		const data = await record;
		if (!data) {
			throw new Error("Failed to create record");
		}
		return NextResponse.json({ id: data.getId() });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 },
		);
	}
}
