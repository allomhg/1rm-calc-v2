const Header: React.FC = () => {
    return (
        <header className="">
            <div className="">
                <h1 className="text-white text-4xl font-bold text-left">One Rep Max (1RM) Calculator</h1>
            </div>
            <section className="text-left">
                {/* <h2 className="">One Rep Max (1RM)</h2> */}
                <p className="text-neutral-300 mt-2">One repetition max is the maximum amount of weight you can push for one repetition for a given exercise.</p>
            </section>
        </header>
    );
}

export default Header;