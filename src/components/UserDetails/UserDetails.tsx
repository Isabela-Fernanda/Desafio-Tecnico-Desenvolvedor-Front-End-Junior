import { useEffect } from "react";
import type { User } from "../../types/user";

interface UserDetailsProps {
    user: User;
    onClose: () => void;
}

function UserDetails({ user, onClose }: UserDetailsProps) {
    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                onClose();
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={onClose} >
            <section role="dialog" aria-modal="true"
                aria-labelledby="user-details-title"
                className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
                onClick={(event) => event.stopPropagation()}
            >
                <div className="mb-6 flex items-center justify-between">
                    <h2 id="user-details-title" className="text-xl font-bold text-slate-800" >
                        Detalhes do usuário
                    </h2>

                    <button type="button" onClick={onClose} aria-label="Fechar detalhes" className="rounded-lg px-3 py-1 text-xl text-slate-500 hover:bg-slate-100 hover:text-slate-800">
                        &times;
                    </button>
                </div>

                <div className="space-y-4">
                    <div>
                        <h3 className="text-sm font-medium text-slate-500">
                            Nome completo
                        </h3>

                        <p className="text-slate-800">
                            {user.name}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-medium text-slate-500">
                            E-mail
                        </h3>

                        <p className="break-all text-slate-800">
                            {user.email}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-medium text-slate-500">
                            Telefone
                        </h3>

                        <p className="text-slate-800">
                            {user.phone}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-medium text-slate-500">
                            Empresa
                        </h3>

                        <p className="text-slate-800">
                            {user.company.name}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-medium text-slate-500">
                            Cidade
                        </h3>

                        <p className="text-slate-800">
                            {user.address.city}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default UserDetails;
