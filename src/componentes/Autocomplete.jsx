
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Autocomplete = ({search,focus}) => {
    const navigatee=useNavigate()
    const dispatchh=useDispatch()
    const products=useSelector(state=>state.products)

    

    return (
        <div style={{display:`${focus?"flex":"none"}`}} className='autocompleteee'>
        {products.map(pro=>{
                const searchzzz=search.toLowerCase()
                const titlepro=pro.title.toLowerCase()
                    if(searchzzz!==""){
                if(titlepro.includes(searchzzz)){

                    return(
                        <p onClick={()=>navigatee(`/product/${pro.id}`)} key={pro.id}>{pro.title}</p>
                         )

                }
      }              
})}
                   
     


        </div>
    );
};

export default Autocomplete;