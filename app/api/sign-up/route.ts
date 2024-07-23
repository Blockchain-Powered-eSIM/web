import AirTable from "airtable";
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

		const record = await new Promise((resolve, reject) => {
			base("Table 1").create(
				{
					"Your email": email,
					"Your phone model": phoneModel,
					"Have you use eSIM before?": previousCustomer,
					"Have you used crypto before?": newToCrypto,
				},
				// biome-ignore lint/suspicious/noExplicitAny: <explanation>
				(err: Error | null, record: any | null) => {
					if (err) {
						console.error(err);
						reject(err);
					} else {
						resolve(record);
					}
				},
			);
		});
		if (!record) {
			throw new Error("Failed to create record");
		}
		return NextResponse.json({ id: record.getId() });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 },
		);
	}
}
