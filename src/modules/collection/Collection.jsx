import React,{useState} from 'react'
import'../collection/Collection.css'
import Filter from'../../assets/picture/filter.png'
import four from'../../assets/picture/four.png'
import ProductStorage from '../productStorage/ProductStorage'
import CollectionFooter from '../collectionFooter/CollectionFooter'

function Collection() {

  const [ClassName, setClassName] = useState('first-button-onclick');

  const toggleFirst = () => {
    setClassName("first-button-onclick");
  };
    
  const toggleSecond = () => {
    setClassName("second-button-onclick");
  };

  const toggleThird = () => {
    setClassName("third-button-onclick");
  };

  const toggleFourth = () => {
    setClassName("fourth-button-onclick");
  };

  const toggleFifth = () => {
    setClassName("fifth-button-onclick");
  };

  return (<>
    <div className='coll-core'>
      <div className='coll-decdiv'>
        <h1 className='coll-decdivH1'>Furnish Your Home</h1>
        <h1 className='coll-decdivH1'>with Our Collection</h1>
        <h4 className='coll-decdivH4'>Discover the Perfect Piece for Every Rom in Your Home.</h4>
      </div>
    </div>

    <div className='collection-page-product'>
      <div className='ecom-core-block'>

        <div className='filter'> 
          <img className='filterImg' src={Filter} alt='filt'/>
           <button className='filter-button'>FILTER</button>
        </div>

        <div className='collect-button'>
          <div   > 
           <button  onClick={toggleFirst} className='first-button-butt'><img  className='first-button' src={four}/></button>
          </div>

         <div> 
          <button onClick={toggleSecond} className='second-button' >
          <span ><img className='second-button-img' src={four}/></span>
          <span className='sec-button-butt2'><img className='second-button-img' src={four}/></span>
          </button>
         </div>

         <div>
           <button onClick={toggleThird} className='third-button'>
          <span><img className='third-button-img' src={four}/></span>
          <span><img  className='third-button-img' src={four}/></span>
          </button>
         </div>

         <div> 
          <button onClick={toggleFourth} className='fourth-button'>
          <span><img className='fourth-button-img' src={four}/></span>
          <span><img className='fourth-button-img' src={four}/></span>
          <span><img className='fourth-button-img3' src={four}/></span>
          </button>
         </div>
        
         <div> 
          <button onClick={toggleFifth} className='fifth-button'>
          <span><img className='fifth-button-img'  src={four}/></span>
          <span><img className='fifth-button-img'  src={four}/></span>
          <span><img className='fifth-button-img'  src={four}/></span>
          </button>
         </div>

        </div>

        <div className='sort-by'>
          <p className='feature-para'> Sort by:</p>
        <select className='feature' >
               <option>Featured</option>
               <option>Best Selling</option>
               <option>Alphabetically, A-Z</option>
               <option>Alphabetically, Z-A</option>
               <option>Price,low to high</option>
               <option>Price ,high to low</option>
               <option>Date, old to new</option>
               <option>Date,new to old</option>
        </select>       
        </div>

      </div>
       <div>
         <ProductStorage  className={ClassName}/>
         <p className='show-more-propra'> <button className='show-more-proButton'> Show More Products</button></p>
      </div>
    </div>

    <CollectionFooter/>
    </>)
}

export default Collection