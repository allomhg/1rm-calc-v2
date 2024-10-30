const Header: React.FC = () => {
    return (
        <header className="">
            <div className="bg-black rounded-t pl-10">
                <h1 className="text-white text-2xl font-semibold text-left">1RM Calculator</h1>
            </div>
            <section className="text-left">
                <h2 className="">One Rep Max (1RM)</h2>
                <p className="">One repetition max is the maximum amount of weight you can push for one repetition for a given exercise.</p>
            </section>
        </header>
    );
}

export default Header;