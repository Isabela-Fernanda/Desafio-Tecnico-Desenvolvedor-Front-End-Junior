import { useEffect } from 'react';
import type { User } from '../../types/user';

interface UserDetailsProps {
    user: User;
    onClose: () => void;
}

function getInitials(name: string) {
    const parts = name.trim().split(/\s+/);

    if (parts.length === 1) {
        return parts[0].slice(0, 2).toUpperCase();
    }

    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

function UserDetails({ user, onClose }: UserDetailsProps) {
    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                onClose();
            }
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm" onClick={onClose} >
            <section role="dialog" aria-modal="true" aria-labelledby="user-details-title" className="w-full max-w-lg rounded-2xl border border-slate-100 bg-white shadow-2xl" onClick={(event) => event.stopPropagation()} >

                <div className="relative border-b border-slate-100 px-6 pb-6 pt-8 sm:px-8">
                    <button type="button" onClick={onClose} aria-label="Fechar detalhes" className="absolute right-5 top-5 flex size-9 items-center justify-center rounded-full text-xl text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" >
                        &times;
                    </button>

                    <div className="flex flex-col items-center text-center">
                        <div aria-hidden="true" className="flex size-20 items-center justify-center rounded-full bg-indigo-50 text-2xl font-bold text-indigo-700" >
                            {getInitials(user.name)}
                        </div>

                        <h2 id="user-details-title" className="mt-4 text-xl font-bold text-slate-900">
                            {user.name}
                        </h2>

                        <p className="mt-1 break-all text-sm text-slate-500">
                            {user.email}
                        </p>
                    </div>
                </div>

                <div className="space-y-5 p-6 sm:p-8">
                    <div>
                        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                            Informações de contato
                        </h3>

                        <div className="flex items-center gap-4 rounded-xl bg-slate-50 p-4">
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5">
                                    <path d="M7 3h3l2 5-2 1.5a14 14 0 0 0 4.5 4.5L16 12l5 2v3c0 2-2 4-4 4C9 20 4 15 3 7c0-2 2-4 4-4Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>

                            <div className="min-w-0">
                                <p className="text-xs text-slate-500">
                                    Telefone
                                </p>

                                <p className="wrap-break-words text-sm font-medium text-slate-800">
                                    {user.phone}
                                </p>
                            </div>
                        </div>

                    </div>

                    <div>
                        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                            Informações profissionais
                        </h3>

                        <div className="flex items-center gap-4 rounded-xl bg-slate-50 p-4">
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5">
                                    <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.7" />
                                    <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                                </svg>
                            </div>

                            <div className="min-w-0">
                                <p className="text-xs text-slate-500">
                                    Empresa
                                </p>

                                <p className="wrap-break-words text-sm font-medium text-slate-800">
                                    {user.company.name}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                            Localização
                        </h3>

                        <div className="flex items-center gap-4 rounded-xl bg-slate-50 p-4">
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5">
                                    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" stroke="currentColor" strokeWidth="1.7" />
                                    <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.7" />
                                </svg>
                            </div>

                            <div className="min-w-0">
                                <p className="text-xs text-slate-500">
                                    Cidade
                                </p>

                                <p className="wrap-break-words text-sm font-medium text-slate-800">
                                    {user.address.city}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default UserDetails;
