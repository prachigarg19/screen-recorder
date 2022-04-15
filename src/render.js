 //frontend code. 
 const videoselectBtn=document.getElementById('videoselectbtn');
 const start=document.getElementById('start');
 const stop=document.getElementById('stop');

 //step 1: getting access to all the open screens
 const { desktopCapturer, remote } = require('electron'); //importing
//remote: it allows us to create menus on frontend
 const { Menu }=remote;
 //menu class of electron designed to run on main process to handle inter process communication.
   
videoselectBtn.onclick=getAllSources;

async function getAllSources() {
    console.log('clicked');
    const inputSources = await desktopCapturer.getAllSources(
        {
            types:['window','screen']
        }
    );
        console.log(inputsources);
    // const videoOptionsMenu= Menu.buildFromTemplate(
    //     //mapping all items we got from input sources and displaying them
    //     inputSources.map(source=>{
    //         return {
    //             label:source.name;

    //         } 
    //     })
    
}
