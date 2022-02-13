let myFuc = (e) =>
{
    let title = document.querySelector('#title');
    let img;
    for (let i = 1; i <= 3; i++)
    {
        if (e == 0)
        {
            img = './img/light_OFF.png';
            title.textContent = 'Light OFF';
        } else
        {
            img = './img/light_ON.png';
            title.textContent = 'Light OFF';
        }
        
        let light = document.querySelector("#img"+i);
        light.src = img;
    }
    
}