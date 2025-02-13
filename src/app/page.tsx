import LinkButton from "@/components/LinkButton";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-xl font-medium">Paradish</h1>
      <div className="flex flex-col justify-center gap-2">
        <LinkButton href="/register">Join Paradish</LinkButton>
        <LinkButton href="/login" variant="secondary">
          Login
        </LinkButton>
      </div>
    </div>
  );
}
