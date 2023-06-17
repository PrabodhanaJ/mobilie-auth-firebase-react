import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Registration = () => {

    // const[id, setId] = useState("");
    const[name, setName] = useState("");
    const[phone, setPhone] = useState("");
    const[grade, setGrade] = useState("");
    const[address, setAddress] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        let regobj= {name, phone,  address, grade};
        // console.log(regobj);
        fetch("http://localhost:8000/user", { 
            method: "POST", 
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(regobj)
        }).then(response =>{
            toast.success("Successfully");
            navigate("/login");
        }).catch((err) =>{
            toast.error("Error" + err.message);
        });
    }


    return (<div>
        <div className="offset-lg-3 col-lg-6">
            <form className="container" onSubmit={handleSubmit}>
                <div className="card">
                    <div className="card-header">
                        <h1>Registration</h1>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {/* <div className="col-lg-6">
                                <div className="form-group">
                                    <label>user name<span className="errmsg">*</span></label>
                                    <input value={id} onChange={e=>setId(e.target.value)} type="text" className="form-control" placeholder="user name" />
                                </div>
                            </div>                             */}
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>full name<span className="errmsg">*</span></label>
                                    <input value={name} onChange={e=>setName(e.target.value)} type="text" className="form-control" placeholder="full name" />
                                </div>
                            </div>                           
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>phone<span className="errmsg">*</span></label>
                                    <input value={phone} onChange={e=>setPhone(e.target.value)} type="text" className="form-control" placeholder="phone" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>grade<span className="errmsg">*</span></label>
                                    <input value={grade} onChange={e=>setGrade(e.target.value)} type="text" className="form-control" placeholder="grade" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>address<span className="errmsg">*</span></label>
                                    <textarea value={address} onChange={e=>setAddress(e.target.value)} className="form-control"></textarea>
                                </div>
                            </div>                           
                        </div>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary" type="submit">Register</button>
                        <a className="btn btn-danger">Back</a>
                    </div>
                </div>
            </form>
        </div>

    </div>);
}

export default Registration;