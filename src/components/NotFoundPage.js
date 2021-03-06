import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {hiddenComponent} from '../store/elementVisibilitySlice';
import {useNavigate} from 'react-router-dom';

function NotFoundPage() {
    const {activeComponent} = useSelector(state => state.visibility);
    useEffect(()=>{
        dispatch(hiddenComponent(false));
    },[activeComponent]);
    const dispatch = useDispatch();
    const {status} = useSelector(state=> state.dataGoods);
    
    const navigate = useNavigate();
function clicHendle(){
        dispatch(hiddenComponent(true));
        navigate('home', {replace: false});
    }  
    return <>
    <div className="banner-not-found"><h1>{status === "rejected" ? "Server is not responding" : 404}</h1></div>
    <div className="not-found-container">
        <h1>{status === "rejected" ? "Server is not responding" : 404}</h1>
        <h4>Opps!{status === "rejected" ? "Server is not responding": "PAGE NOT BE FOUND"} </h4>
        <span onClick={clicHendle}>{status === "rejected" ?  <a href="home">Restore</a> : "Home"}</span>
        <span onClick={() => navigate(-1)}>Go Back</span>
    </div>
    </>
}

export default NotFoundPage;