import React, { useState, useEffect} from 'react'
import CircleLoader from "react-spinners/CircleLoader";
import {PlaylistList} from "../helpers/PlaylistList";
import PlaylistItem from "../components/PlaylistItem";
import "../styles/Blend.css";


function Blend() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(()=> {
            setLoading(false);
        },5000);
        },[]);
  return (
    <div className="blend">
        { loading ?

        (<CircleLoader color={"#000000"}
        loading={loading}
        size={200}
        />
        

        )

            :
            (
            <>
                <div className="title">
                <h1>Your Custom Blend Playlists: </h1>
                </div>
                <div className="playlistList">{PlaylistList.map((playlistItem, key) => {
                    return (
                    <>
                        <PlaylistItem
                        key={key}
                        image={playlistItem.image}
                        name={playlistItem.name}
                        link = {playlistItem.link}
                        />
                    </>
                    );
                })}
                </div>

             </>
            )
        }
    </div>
  )
}

export default Blend
