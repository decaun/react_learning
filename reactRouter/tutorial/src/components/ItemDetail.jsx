import "../App.css";
import React, { useState, useEffect } from "react";

function ItemDetail({match}) {

	useEffect(() => {
        fetchItem();
        console.log(match);
	}, []);

	const [item, setItem] = useState({
        images:{}
    });

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=${match.params.id}`);
        const item = await fetchItem.json();
        console.log(item);
        setItem(item);
    };

	return (
		<div>
            <h1>{item.name}</h1>
            <img src={item.images.transparent} alt=""/>
		</div>
	);
}

export default ItemDetail;
