import React, { useEffect, useState } from 'react'

function Instagram() {

    //STATE HOOKS
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

        // IMAGE TO DATA URI CONVERTING SCRIPT 

        // Create a new Image object
        const img = new Image();

        // Set the crossOrigin property of the Image object to 'anonymous'
        img.crossOrigin = 'anonymous';

        // Set the src attribute of the Image object to the image URL
        img.src = 'https://instagram.flhr13-1.fna.fbcdn.net/v/t51.2885-19/274250588_1101859380610497_3463460270900219221_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.flhr13-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=aPy5rZOCjScAX8Ih901&edm=AJfeSrwBAAAA&ccb=7-5&oh=00_AfCPhA4sGTv2p5oteaw4r0OI_ckZFT_Ybi7eDe85xjKPsA&oe=641F45FA&_nc_sid=588073';

        // Create a new canvas element
        const canvas = document.createElement('canvas');

        // Set the width and height of the canvas element to match the dimensions of the image
        canvas.width = img.width;
        canvas.height = img.height;

        // Get a 2D rendering context for the canvas element
        const ctx = canvas.getContext('2d');

        // Draw the image onto the canvas
        ctx.drawImage(img, 0, 0);

        // Get a data URL string for the canvas
        const dataURL = canvas.toDataURL();

       


    }
    return (
        <div>
            <button onClick={igFun}> click me</button>
            <img id='profile' height="100px" width="100px" src={imgUrl} alt="" />
            <img src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png
' alt='achu' />

            <iframe src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARoAAACzCAMAAABhCSMaAAABPlBMVEX///8AAADe3t7y8vLh4eHr6+vZ2dm8vLy9z/q8y/Ls9f/x8fHo8/8CZu/T09P19fUAYu8AXe5lkfO2yPjKy8qow/gAWO7U1NT0+v/FxcUAYO+joqKcnJs9PDy5ubnd4+OwsK+VlJR2dXVZWVnk3+Tz5tOJiIhMS0slIyNlZGQ5ODdycnEvLi5FRERUU1Oenp2WtPQVau/n3+bok4nzXUX1wGH7tybqzqLR2dI7x04hyDu71L3iycbyaVT6uTX8tRJ5zoPj1L6a0J8AyCdrynalqLLGtamJj5V7gYiprqnpo5vtypSm0qqYlYi7v8WKf4D4zIKgyOu21PCoxLaBqJ+5zMOUtrXH2drw5+PK4PZwsuYAZTGWtqqAoo6wwKzP4OKuwsBNkHPz3LkaGBdgjvI6fe9GgvB7ovNclO0ATe2u6UewAAAJfklEQVR4nO2dDUPbNhqAFduSKC4WrGJGODhy0hrCV2jXdqzXG/s4ruN6l22lGaTjbt0opf3/f+AkGyhQXoiTQj76PqY2tmNHevLqtWwcl5QQANLvAgwuqAYE1YCgGhBUA4JqQFANCKoB+UjNCv9MmbtSDfc+U3gHapyLCXsD2OvA0KGaSqViXly5azd58CB3xURP+Kyf9QbxTgKhMzWVrx5+Zdw8evy146x/8+RvdnNGXZ/6wnWFGSymutlv+dyViIFU4+mImbYkjaGO1HhPH/794dPK14+/3XDufvfkyTcPzE5CIZSTeK6QIo+fMAqJNHZUNne5F1/4LmWBzBmotlWOdKJ5o9lhrmFGDXO+33j8rXf3hx9//IdtWJmUIBaisfnPRGvdJNpJojL16/QZTzYvdSMC7dmwkUGG7LeO05SrP21FjeqzDtV4T//11DSi75+bTe/++wdrJnStGvsTyf8sNas/U6Gj+mZU0fHmsygpX65Gcs916bGaYJDCJlSShYzLTtOwV/lwmLqbJWPPVlBJLkzjcKlpIvaHulT4gjaFuirRZEmJsUEMmywRex0foT4izCt4cU4RHaZizznONjdd/U7oQI0Og4/xOqr7VbETHPdxLniHvhPqK9UEF/VKPoWZPOwGl+BKNfJqD9QfVKjf/ecmO1NzTo+Vmv+SjX0ysNgjhJg5KfaZ0lt3gJbO1fhKHMdHtiXTcZhtrhxxpIaaf/4ZRy4Rp+bE0Yz3YZF3PMk284+2F+c2yBYIu7uCiCBTI37Z+OWoxjqrhv/rixcvzC/U9HsdmjvyTj5gW0HREJ2q8Rs0d2L2Yae+JjzNtlbaujE73d4zu33ZEi3SorSyXmn5pi70t8rL7Z3WDm25RIYp1X7MTIJzgpjKkDUDjxOhPVnV2qe0HJNdqmlYCf3A9JccLSUJqEFXGOUBUQXNSM1VFjX37j36NvtAE18xU9pKm5BXphrUMw3OqvGYbzsj+eeSqWEdq/FSqTKvlGaaqRLEy96M+FGu5vffW4Ss7+21/ju+22r+b337tVXzx+vX6+OvW6+3TYGCLao3ud7SP22KaDNqRmJL/Uw0ibbiWEQ7etPZ2U1noiBUjCtfBUqSqKIUC3ZnZFPuhk5BNVRSmUXN8417j56bDkVsOl1lq+TX27df2YbmCZGpYZ4f2qmZo7ka3bEa4Zw0qCwAheaRk01VLHM1f/65Tsje3vp2ZW9977d1sfeHVTO+06rsvNxe33OUyzjXzUCpRtL0y814S0dKJ0xFkYyaRCWbm2XTyymrwDEdyXCGqZgph5sYkzTkSvGiQUNIqsM8av7auLcxY0Ih0rphy//KYBUxSj0779CsUZxqUEnHatzzR2tB8wScBySQho9zRSV/R+Cz1d7ZBeL8K452TguryTdz3b92n+8+P8q+eanb7bad2OtVeZ74cHA5Oq4UOEJdTpfFvgnyKD93hO2oX/Zp1Lh0YOnAQQ9q3H732/qDe7Ua1u820S8YqoFANSCoBgTVgKAaEFQDgmpAUA1IUTWRnU3On0+KpBw1EpnPJCdnklpfb+Gvl6JqVhbNqHTubNmoiRbS8pGa0vHZptjfL3xpboAoqmZ+pZqp4dVE0JSI1CdJdpFpwYrRZikpsTTJLi3E1ao2QeSk9kUsTQf4BP0iiqqZU3OxiQs+x8rzpOTLEielzINVU151qktkoS7rdbuoptS8WbGqqnNkbl5Vl/tQvx4oroaW3BJdSnlc8usySVI2n63IosZTiRHmEM/q8ku+eSVZUESU6AondsUwUVwNiWoLtJ4qJYVuzJO5qJytsGrSWpys2uZGrRq9ODe3GGUrjBplxsN1sCuqZtFUsb5PoxoJ54m3WCdLi2G2Yt8YWIlIdZXsV/10xSwxLY/wZbJYp+UFslKj0X4f6tcDRdUsGQNujZJkcTUwkmLCa/mKmjHEVmtx1aSY+brJuHTVRI5Ypcu6tsrInK6vhn2oXw9cf5dv3/6ljCzLT1DYm+X61ZSzTlDjfFdo8METBRBUA4JqQFANCKoBQTUgRdWM3x5hxmd6UNOevjXKjPWgZvoTB+2Aced02KCa06AaEFQD0quaQInQpS4Rw3xN/GJ6VRMGjGkdhnL4rjNcRc9RQ7QTh6QRjF5nsFc12d3f7se3ao4AmIZBUA0IqgHpRU17emyUuUW6V0NmxkeYMyfeeL0GBtWAoBoQVAOCakBQDQiqAUE1IKgGBNWAoBoQVANSVM2Q3RbdC0XVlKjD+1TUm6aomgUvrTESNBgJPS1JFNovaYziZeLu1Dh8NVhhyXy8XNUltx7FC30q/PVSWA3lVVJP9VJajkiVkxpLl4o/CWMo6E6N9hya5GoCwhpDdht5hxRPw3I5UCt8RRk1SzGZZ7WEY4OyKEECRph2iOORkBLpEx5jGv7MQDUgqAYE1YCgGhBUA4JqQFANCKoBQTUgPahRRAtGCj+2dGjoTo2OzIg7iRQ6VlQrGXtRxAOub7j010p3ajIHokoT0eCKC6KJfYItT9QAP5S5ML3kGmUH5REdeKZpmXNxFt9gya8dTMMgqAYE1YD0oGb0vthylu7UhPYRGmVH6hsu7Y3SnZokNSNOYnf0vvfzgR4aFGN8RP9umYNpGATVgKAakJ7UjPbNNt2pyf5TibIXKRIM34OeOqU7NVX7tEZOtKei5KZLfGP0cinLiT2pR/ZKFqZhGFQDgmpAPpUacWYyEvSgJkyDmFoZviA0Np0cV7ja9nWoEKPQ5elOTVq145hoR8Us1FqxKOYy8XjiSK0Drbka/svE3anxsocqazNwrULGuYh06HEaNCTVMVFcsyF7TOwF9JJrqBl86gjh21v6JPEJ80hg5lw7N/TgEQoE1YCgGhBUA4JqQFANCKoBQTUgRdW8++IS3ozU86IKqhn7cvISZt/3qxrXQVE1UxOX8WW/qnEddKlm0gynmEQ1x2rufzH1ZnJ2YmJ2YtZIOph9e/AW1WRqJtuH02NTawcHa7OH72bvk4npd2uzqMYaOJh+/35sbfrFuzuH7YnZtbU1VHOsZqq9Nj12OH14a/pwbGqq/aaNak5yzeTbqftTB5MT980wcX/WjjDX4MEb1RRWc+v91KX0qxrXQdFzqLE7l3G7T7W4FvDMGwTVgKAaEFQDgmpAUA0IqgG5Wk2NfqbUrlSDHINqQFANCKoBQTUgqAYE1YCgGhBUA4JqQFANCKoBQTUgqAYE1YCgGhBUA4JqQFANCKoBQTUgqAYE1YD8H2fffjkmxH5lAAAAAElFTkSuQmCC' title='iframe testing'> not supported</iframe>
        </div>
    )
}

export default Instagram