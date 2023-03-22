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
                console.log(response[0].profile_pic_url_hd);
                setUrl(response[0].profile_pic_url);
                console.log(imgUrl);
            })
            .catch(err => console.error(err));

            //document.getElementById("profile").src = imgUrl;

    }
    return (
        <div>
            <button onClick={igFun}> click me</button>
            <img id='profile'  src="https://instagram.flhr13-1.fna.fbcdn.net/v/t51.2885-19/274250588_1101859380610497_3463460270900219221_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.flhr13-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=aPy5rZOCjScAX8Ih901&edm=AJfeSrwBAAAA&ccb=7-5&oh=00_AfAUcniWrrZ8AQAPJgt0n3vtP1_CEXttd6D6GF6K8rMb-g&oe=641F45FA&_nc_sid=588073" alt="" />
        </div>
    )
}

export default Instagram