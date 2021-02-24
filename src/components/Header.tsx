interface HeaderProps {
    children: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => (
    <header className="flex mb-8">
        {children}
    </header>
);

export default Header;
