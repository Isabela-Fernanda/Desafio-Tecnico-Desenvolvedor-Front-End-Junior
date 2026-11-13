import './App.css';

import { useState, useCallback } from 'react';
import { useUsers } from './hooks/useUsers';
import type { User } from './types/user';
import SearchBar from './components/SearchBar/SearchBar';
import UserCard from './components/UserCard/UserCard';
import UserDetails from './components/UserDetails/UserDetails';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const { users, isLoading, error } = useUsers();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  const closeUserDetails = useCallback(() => {
    setSelectedUser(null);
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-12">

        <header className="mb-12 flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold text-white shadow-sm">
            U
          </div>

          <div>
            <p className="font-bold tracking-tight text-slate-900">
              User Directory
            </p>
            <p className="text-xs text-slate-500">
              Diretório de usuários
            </p>
          </div>
        </header>

        <section className="mb-8">
          <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
            DIRETÓRIO DE CONTATOS
          </span>

          <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Encontre pessoas
                <span className="text-indigo-600"> facilmente.</span>
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
                Consulte os usuários cadastrados e encontre rapidamente
                as informações de contato que você precisa.
              </p>
            </div>

            {!isLoading && !error && (
              <div className="rounded-xl border border-slate-200 bg-white px-5 py-3 shadow-sm">
                <p className="text-2xl font-bold text-slate-900">
                  {filteredUsers.length}
                </p>
                <p className="text-xs text-slate-500">
                  {filteredUsers.length === 1
                    ? 'usuário encontrado'
                    : 'usuários encontrados'}
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-slate-900">
              Lista de usuários
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Selecione uma pessoa para visualizar seus detalhes.
            </p>
          </div>

          {isLoading && (
            <div role="status" aria-label="Carregando usuários">
              <p className="mb-4 text-sm text-slate-500">
                Carregando usuários...
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div
                    key={index}
                    className="flex animate-pulse items-center gap-4 rounded-xl border border-slate-100 p-5"
                  >
                    <div className="size-12 rounded-full bg-slate-200" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 w-2/3 rounded bg-slate-200" />
                      <div className="h-3 w-full max-w-40 rounded bg-slate-100" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {error && (
            <div
              role="alert"
              className="rounded-xl border border-red-200 bg-red-50 p-5"
            >
              <h3 className="font-semibold text-red-800">
                Não foi possível carregar os usuários
              </h3>
              <p className="mt-1 text-sm text-red-700">{error}</p>
            </div>
          )}

          {!isLoading && !error && (
            <>
              <SearchBar
                value={searchTerm}
                onChange={setSearchTerm}
              />

              {filteredUsers.length > 0 ? (
                <div className="mt-6 grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">
                  {filteredUsers.map((user) => (
                    <UserCard
                      key={user.id}
                      user={user}
                      onClick={() => setSelectedUser(user)}
                    />
                  ))}
                </div>
              ) : (
                <div className="mt-6 rounded-xl border border-dashed border-slate-300 px-5 py-12 text-center">
                  <p className="font-medium text-slate-700">
                    Nenhum usuário encontrado
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Tente pesquisar utilizando outro nome.
                  </p>
                </div>
              )}
            </>
          )}
        </section>

        <footer className="py-8 text-center text-xs text-slate-400">
          Diretório de usuários · Desenvolvido com React e TypeScript
        </footer>
      </div>

      {selectedUser && (
        <UserDetails
          user={selectedUser}
          onClose={closeUserDetails}
        />
      )}
    </main>
  );
}

export default App;
