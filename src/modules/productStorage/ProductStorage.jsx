import React, { useContext,useState,useEffect} from "react";
import { Context } from '../../component/provider/Provider'
import'../productStorage/ProductStorage.css'
import path from "../../helper/path";


const ProductStorage = (props) => {
    const { data} = useContext(Context);
    const [proStorDiv,setproStorDiv ] = useState('first-proStorDiv');
    const [proStorDivImg,setproStorDivImg] = useState('first-proStorDivImg');
     
    useEffect(() => {
    switch (props.className) {
        case 'first-button-onclick':
            {
            setproStorDiv ("first-proStorDiv")
            setproStorDivImg("first-proStorDivImg")
        }
          break;

        case 'second-button-onclick':
            {
                setproStorDiv ("second-proStorDiv")
                setproStorDivImg("second-proStorDivImg")
            }
          break;

        case 'third-button-onclick':
            {
                setproStorDiv ("third-proStorDiv")
                setproStorDivImg("third-proStorDivImg")
            }
          break;

          case 'fourth-button-onclick':
            {
                setproStorDiv ("fourth-proStorDiv")
                setproStorDivImg("fourth-proStorDivImg")
            }
          break;

          case 'fifth-button-onclick':
            {
                setproStorDiv ("fifth-proStorDiv")
                setproStorDivImg("fifth-proStorDivImg")
            }
          break;

        default:
            {
            setproStorDiv ("first-proStorDiv")
            setproStorDivImg("first-proStorDivImg")
            }
            break;
      }
    }, [props.className]);

    return (
        <>
            <div className={props.className}>

                {data.map((data,id) =>(
                <div className={proStorDiv} key={id}>
                     <img className={proStorDivImg} src={data.imagePath} alt='image'/> 
                      <p className="proStore-Imagename">{data.imgName}</p>
                      <p className="prodtore-imagePrice"> {data.imgPrice}</p>
                      <div className="pro-Store-feature">
                        <div className="pro-Store-Addbuttondiv">
                           <button className="pro-Store-Addbutton">
                              <img className="pro-Stor-AddcartImg" src={path.ADDCART} alt='Add to Cart' /> Add to Cart
                           </button> 
                        </div>
                        <div className="pro-Store-likefeature">
                           <img className="pro-Stor-heart" src={path.HEART} alt='heart' />
                           <img className="pro-stor-shuffle" src={path.SHUFFLE} alt='shuffle' />
                         </div>

                      </div>
                </div>
                ) )}
            </div>
            
        </>
    );
};

export default ProductStorage;