import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de privacidade — HeroPass" },
      { name: "description", content: "Política de privacidade do HeroPass em elaboração." },
      { property: "og:title", content: "Política de privacidade — HeroPass" },
      { property: "og:description", content: "Política de privacidade do HeroPass em elaboração." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl font-bold text-foreground">Política de privacidade</h1>
        <p className="mt-3 text-muted-foreground">Este documento está em elaboração e será publicado em breve.</p>
        <Link to="/" className="mt-6 inline-block font-semibold text-primary hover:underline">Voltar ao início</Link>
      </div>
    </main>
  );
}
