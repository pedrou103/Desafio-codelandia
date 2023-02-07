import '../styles/components/Header.sass'

const Header = () => {
    return (
        <header>
            <h1>Game of memory</h1>
            <select>
                <option value="">Nível Fácil</option>
                <option value="">Nível Médio</option>
                <option value="">Nível Difícil</option>
            </select>
        </header>
    )
}

export default Header