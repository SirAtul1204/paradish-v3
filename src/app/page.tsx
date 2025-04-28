import LinkButton from "./_components/link-button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-primary text-xl font-medium">Paradish</h1>
      <div className="flex flex-col justify-center gap-2">
        <LinkButton href="/register">Login or Sign up</LinkButton>
      </div>
    </div>
  );
}
