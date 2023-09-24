import { useEffect, useState } from "react";
import PhoneCard from "../Phone/PhoneCard";

const Favorites = () => {

    const [favorites , setFavorites] = useState([])
    const [noFound , setNoFound] = useState(false)

    const [isShow , setIsShow] = useState(false)






    useEffect(() => {
        const favoriteItems = JSON.parse(localStorage.getItem('favorites'))
       
        if(favoriteItems){
          setFavorites(favoriteItems)
          setNoFound(false)
  
        }
else{
    console.log('no data found');
}
        

    },[])

console.log(favorites);

    const handleRemove = () => {
        localStorage.clear()
        setFavorites([])
        setNoFound('noFound')
    }


    return (
        <div>
            {
            noFound ? <p>{noFound}</p> : 
            <div> 
                {
                    favorites.length > 0 && <button onClick={handleRemove} className="px-5 bg-fuchsia-400 mx-auto block">Delete All</button>
                }
                <div className="grid grid-cols-2 gap-5">
                    {
                       isShow ?  favorites.map(phone => <PhoneCard key={phone.id} phone={phone}></PhoneCard>) 
                       :
                       favorites.slice(0 , 2).map(phone => <PhoneCard key={phone.id} phone={phone}></PhoneCard>)
                    }
                </div>

               {
                favorites.length > 2 && <button onClick={() => setIsShow(!isShow)} className="px-5 bg-fuchsia-400 mx-auto block">{isShow ? "See Less" :"Show More" } </button>



               }


            </div>
            }
        </div>
    );
};

export default Favorites;