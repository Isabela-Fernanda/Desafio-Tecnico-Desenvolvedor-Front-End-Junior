import './App.css';

import { useState } from 'react';
import { useUsers } from './hooks/useUsers.ts';
import SearchBar from './components/SearchBar/SearchBar.tsx';
import UserCard from './components/UserCard/UserCard.tsx';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const { users, isLoading, error } = useUsers();

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

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
          <>
            <SearchBar value={searchTerm} onChange={setSearchTerm} />

            {filteredUsers.length > 0 ? (
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {filteredUsers.map((user) => (
                  <UserCard key={user.id} user={user} />
                ))}
              </div>
            ) : (
              <p className="mt-8 text-center text-slate-500">
                Nenhum usuário encontrado.
              </p>
            )}
          </>
        )}
      </div>
    </main>
  )
}

export default App
