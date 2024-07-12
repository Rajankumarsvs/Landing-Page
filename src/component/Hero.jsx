import './Navigation.css'
const HeroSection =() =>{

    return(
        <main className='hero'>
            <div className='hero-content'>
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>Lorem accusantium dolorem dignissimos dolore ut dolor reprehenderit eos doloribus laudantium fugit enim, numquam hic velit sit voluptates rem vel. Vero, eaque.</p>
                <div className='hero-buttom'>
                    <button>Shop Now</button>
                    <button className='hero-cat'>Category</button>
                </div>
                <div className='shoping'>
                    <p>Also Available On</p>
                    <div className='brand-icons'>
                        <img src="/images/amazon.png" alt="amazon" height={50} width={40}></img>
                        <img src='/images/Flipkart.jpg' alt='Flipkart' height={50} width={40}></img>
                    </div>

                </div>
            </div>
            <div className='hero-image'>
            <img src='/images/shoe.png' alt="hero-image" height={600} width={550}></img>
            </div>
        </main>
    
   

);


};


  export default HeroSection;