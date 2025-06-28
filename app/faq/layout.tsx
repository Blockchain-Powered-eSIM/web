export default function faqLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="border-b bg-gray-100 px-6 py-4">
        <h2 className="text-xl font-semibold">FAQ Centre</h2>
      </header>
      <main className="mx-auto max-w-4xl px-4 py-8">{children}</main>
    </div>
  );
}
