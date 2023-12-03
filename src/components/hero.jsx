const Herosection=()=>{

    return(
    <main className="hero container">
        <div className="hero-content">
            <h1>Your feet deserves the best </h1>
            <p>Your feet deserves the best and here we are here to help you 
                with our shoes.
            </p>
            
            <div className="hero-button">
                <button>Shop Now</button>
                <button className="secondary-button">Category</button>
            </div>

            <div className="shopping">
                <p>Also Available on</p>
                <div className="brand-icons">
                    <img src="./public/images/amazon.png" alt="amazon" />
                    <img src="./public/images/flipkart.png" alt="amazon" />
                </div>
            </div>
        </div>
        <div className="hero-image">
        <img src="./public/images/shoe_image.png" alt="amazon" />
        </div>
    </main>
    );
};
export default Herosection;