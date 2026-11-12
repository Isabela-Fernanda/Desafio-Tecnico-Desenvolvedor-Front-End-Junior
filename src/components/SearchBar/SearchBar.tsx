interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

function SearchBar({ value, onChange }: SearchBarProps) {
    return (
        <div className="mt-8">
            <label htmlFor="user-search" className="mb-2 block text-sm font-medium text-slate-700">
                Buscar usuário
            </label>

            <input id="user-search" type="search" value={value}
                onChange={(event) => onChange(event.target.value)}
                placeholder="Digite o nome do usuário..."
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
        </div>
    );
}

export default SearchBar;
