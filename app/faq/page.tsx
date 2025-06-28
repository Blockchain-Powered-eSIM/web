const categories = ["account", "billing"];

export default function HelpLanding() {
  return (
    <div className="mx-auto max-w-4xl p-8">
      <h1 className="mb-4 text-3xl font-bold">FAQ Centre</h1>
      <p className="mb-4 text-gray-600">choose a category to get started:</p>
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat}>
            <a
              href={`/help/${cat}`}
              className="capitalize text-blue-600 underline"
            >
              {cat.replace("-", " ")}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
