import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: "Termos de uso — HeroPass" },
      { name: "description", content: "Termos de uso do HeroPass em elaboração." },
      { property: "og:title", content: "Termos de uso — HeroPass" },
      { property: "og:description", content: "Termos de uso do HeroPass em elaboração." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl font-bold text-foreground">Termos de uso</h1>
        <p className="mt-3 text-muted-foreground">Este documento está em elaboração e será publicado em breve.</p>
        <Link to="/" className="mt-6 inline-block font-semibold text-primary hover:underline">Voltar ao início</Link>
      </div>
    </main>
  );
}
