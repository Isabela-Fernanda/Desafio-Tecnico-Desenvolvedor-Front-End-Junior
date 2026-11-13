import type { User } from '../../types/user';

interface UserCardProps {
  user: User;
  onClick: () => void;
}

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/);

  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }

  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

function UserCard({ user, onClick }: UserCardProps) {
  return (
    <button type="button" onClick={onClick} className="group flex w-full items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2" >
      <div aria-hidden="true" className="flex size-12 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-sm font-bold text-indigo-700 transition-colors group-hover:bg-indigo-600 group-hover:text-white" >
        {getInitials(user.name)}
      </div>

      <div className="min-w-0 flex-1">
        <h2 className="truncate font-semibold text-slate-800 transition-colors group-hover:text-indigo-700">
          {user.name}
        </h2>

        <p className="mt-1 truncate text-sm text-slate-500">
          {user.email}
        </p>
      </div>

      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5 shrink-0 text-slate-400 transition-all group-hover:translate-x-1 group-hover:text-indigo-600" >
        <path d="m9 18 6-6-6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

export default UserCard;
