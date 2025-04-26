import CreateForm from "./create-form";
import JoinForm from "./join-form";

export default function JoinCreateRestaurant() {
  return (
    <div className="flex w-full justify-between">
      <div className="text-primary-text flex grow flex-col items-center gap-8">
        <p className="text-primary text-center text-xl">Create restaurant</p>
        <CreateForm />
      </div>
      <div className="from-primary to-secondary w-2 rounded bg-gradient-to-b" />
      <div className="text-primary-text flex grow flex-col items-center gap-8">
        <p className="text-secondary text-center text-xl">Join restaurant</p>
        <JoinForm />
      </div>
    </div>
  );
}
