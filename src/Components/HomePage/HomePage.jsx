import Books from "../Books/Books";
import ForBanner from "../ForBanner/ForBanner";

const HomePage = () => {
    return (
        <div className="flex flex-col gap-10">
            <ForBanner></ForBanner>
            <Books></Books>
        </div>
    );
};

export default HomePage;