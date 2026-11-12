import { useEffect, useState } from 'react';
import { getUsers } from '../services/userService';
import type { User } from '../types/user';

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        setIsLoading(true);
        setError(null);

        const data = await getUsers();

        setUsers(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('Ocorreu um erro inesperado.');
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchUsers();
  }, []);

  return {
    users,
    isLoading,
    error,
  };
}
