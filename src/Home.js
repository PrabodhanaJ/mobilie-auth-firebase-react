import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    useEffect(() => {
        let mobile = sessionStorage.getItem('mobile');
        if (mobile === null || mobile === '') {
            navigate('/login');
        }
    }, []);

    return (
        <div>
            <div className="header">
                <Link to={'/'}>Home</Link>
                <Link to={'/login'}>Logout</Link>
            </div>
            <h1 className="text-center">Home</h1>
        </div>
    );
}

export default Home;