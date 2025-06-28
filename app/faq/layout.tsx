export default function faqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header className="bg-gray-100 py-4 px-6 border-b">
        <h2 className="text-xl font-semibold">FAQ Centre</h2>
      </header>
      <main className="max-w-4xl mx-auto py-8 px-4">{children}</main>
    </div>
  );
}

