import type { User } from "../../types/user";

interface UserCardProps {
  user: User;
}

function UserCard({ user }: UserCardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <h2 className="font-semibold text-slate-800">
        {user.name}
      </h2>

      <p className="mt-2 text-sm text-slate-500">
        {user.email}
      </p>
    </article>
  );
}

export default UserCard;
