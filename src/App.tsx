import './App.css';

import { useUsers } from './hooks/useUsers.ts';

function App() {
  const { users, isLoading, error } = useUsers();

  return (
    <main className='min-h-screen bg-slate-50'>
      <div className='mx-auto max-w-5xl px-6 py-10'>
        <h1 className='text-3xl font-bold text-slate-800'>
          Lista de Usuários
        </h1>

        <p className='mt-2 text-slate-500'>
          Consulte e encontre informações sobre usuários de forma rápida e eficiente.
        </p>

        {isLoading && (
          <p className='mt-8 text-slate-600'>
            Carregando usuários...
          </p>
        )}

        {error && (
          <p role="alert" className="mt-8 text-red-600">
            {error}
          </p>
        )}

        {!isLoading && !error && (
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {users.map((user) => (
              <article key={user.id} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h2 className="font-semibold text-slate-800">
                  {user.name}
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  {user.email}
                </p>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

export default App
