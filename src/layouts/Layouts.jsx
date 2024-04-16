import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "../assets/css/layouts.css";
import { useAuth } from "../context/useAuth";

const Layouts = ({ children }) => {
    const { userId, getCookie, getUserById } = useAuth();
    let u_id = getCookie("user_id");
    return (
        <>
            <Navbar user_id={u_id}/>
            <Sidebar user_id={u_id} />
            <main className="main-content">{children}</main>
        </>
    );
};

export default Layouts;
