import React, { useEffect, useState } from 'react'

function Instagram() {

    const [imgUrl, setUrl] = ('');

    function igFun() {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '3b9fa0f696msh397d126ad98c4b5p1e518fjsn52c068954cc2',
                'X-RapidAPI-Host': 'instagram-bulk-profile-scrapper.p.rapidapi.com'
            }
        };

        fetch('https://instagram-bulk-profile-scrapper.p.rapidapi.com/clients/api/ig/ig_profile?ig=athulnambiar22&response_type=short&corsEnabled=false', options)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                console.log(response[0].profile_pic_url);
                setUrl(response[0].profile_pic_url);
                imgUrl = response[0].profile_pic_url;
            })
            .catch(err => console.error(err));

            document.getElementById("profile").src = imgUrl;

    }
    return (
        <div>
            <button onClick={igFun}> click me</button>
            <img id='profile' height="100px" width="100px" src={imgUrl} alt="" />
        </div>
    )
}

export default Instagram