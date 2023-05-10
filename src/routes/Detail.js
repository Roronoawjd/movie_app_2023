import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Detail = () => {
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if (location.state == null) {
            navigate("/");
        }
    });

    if (location.state) {
        return <span>{location.state.title}</span>;
    } else {
        return null;
    }
};

export default Detail;
