const categories = [
  "account",
  "billing",
];

export default function HelpLanding() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">FAQ Centre</h1>
      <p className="text-gray-600 mb-4">
        choose a category to get started:
      </p>
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat}>
            <a
              href={`/help/${cat}`}
              className="text-blue-600 underline capitalize"
            >
              {cat.replace("-", " ")}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

