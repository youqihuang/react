import React, { useState, useEffect } from 'react'
import {NameList} from "../helpers/NameList";
import NameItem from "../components/NameItem";
import CircleLoader from "react-spinners/CircleLoader";
import { Link } from "react-router-dom";
import youqi from "../assets/youqi.jpg";
import "../styles/Connect.css";


function Connect() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(()=> {
            setLoading(false);
        },2000);
        },[]);
  return (
    <div className="connect">
         { loading ?

         <div className="loader">
        (<CircleLoader color={"#000000"}
        loading={loading}
        size={200}
        />)
        </div>

            :
            <>

           ( <h1 className="title"> YouQi's Connections </h1>
           <div class="buttons">
            <Link to="/blend">
            <button type="submit"><img src={youqi} width="250" height="250" /></button>
            </Link>
            </div>
           <div className="nameList">{NameList.map((nameItem, key) => {
                    return (
                        <NameItem
                        key={key}
                        image={nameItem.image}
                        name={nameItem.name}
                        />
                    );
                })}
                </div>)
                </>
}
    </div>
  )
}

export default Connect
