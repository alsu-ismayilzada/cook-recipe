// import Recipe from "./Recipe";

import "../styles/Home.css";
import Footer from "./Footer";
import Introduction from './Introduction';
import MostKnowRecipe from "./MostKnowRecipe";
import ShareRecipe from "./ShareRecipe";
import Categories from "./Categories";


export default function Home() {

    return (
        <div className='commonFood'>
            <Introduction />
            <ShareRecipe />
            <Categories />
            <MostKnowRecipe />
            <Footer />
        </div>
    );
}

