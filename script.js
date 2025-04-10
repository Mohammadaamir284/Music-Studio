console.log('ready for write java script')


document.querySelector(".burger").addEventListener("click", () => {
    document.querySelector(".main1").style.left = "0"
})
document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".main1").style.left = "-150%"
})



// let playsongs = new Audio()
// let maamir;
// let currFolder;




// function convertSecondsToMMSS(seconds) {

//     if (isNaN(seconds) || seconds < 0)
//         return "00:00";

//     seconds = Math.floor(seconds); // Remove decimal part
//     let minutes = Math.floor(seconds / 60);
//     let secs = seconds % 60;

//     // Format with leading zeros
//     let formattedMinutes = String(minutes).padStart(2, '0');
//     let formattedSeconds = String(secs).padStart(2, '0');

//     return `${formattedMinutes}:${formattedSeconds}`;
// }




// async function aamir(folder) {
//     currFolder = folder

//     //let a = await fetch(`http://127.0.0.1:3000/${folder}/`)
//    let a = await fetch(`${folder}/`)
//     let response = await a.text();

//     let div = document.createElement("div")
//     div.innerHTML = response;
//     let as = div.getElementsByTagName("a")
//     maamir = []
//     for (let index = 0; index < as.length; index++) {
//         const element = as[index];
//         if (element.href.endsWith(".mp3")) {
//             maamir.push(element.href.split(`/${folder}/`)[1])

//         }
//     }
//     let songUL = document.querySelector(".am").getElementsByTagName("ul")[0]
//     songUL.innerHTML = ""
//     for (const song of maamir) {
//         songUL.innerHTML = songUL.innerHTML + `
//                                  <li>
//                         <div class="ekdiv">
//                             <div class="ekdiv1">
//                                 <div class="svg1"><img src="logo/b1.svg" alt=""></div>
//                                 <div class="title">
//                                     <div class="tit">${song.replaceAll("%20", " ")}</div>
//                                     <div class="le">Artist . Aamir</div>
//                                 </div>
//                             </div>
//                             <div class="now">
//                                 <div class="img1">Play Now</div>
//                                 <div class="svg2"><img src="logo/play.svg" alt=""></div>
//                             </div>
//                         </div>
//                     </li>`


        

//     }


//     Array.from(document.querySelector(".am").getElementsByTagName("li")).forEach(e => {
//         e.addEventListener("click", element => {
//             console.log(e.querySelector(".tit").innerHTML)
//             playMusic(e.querySelector(".tit").innerHTML.trim())
//         })
//     })

    



// }

// async function aamir2() {
//   //  let a = await fetch(`http://127.0.0.1:3000/maamir/`)
//     let a = await fetch(`maamir/`)
//     let response = await a.text();
//     let div = document.createElement("div")
//     div.innerHTML = response;
//     let aas = div.getElementsByTagName("a")
//     let middel = document.querySelector(".middel")
//     let array = Array.from(aas)
//     for (let index = 0; index < array.length; index++) {
//         const e = array[index];

//         if (e.href.includes("/maamir/")) {

//             let folder = e.href.split("/").slice(-2)[0]
//            // let a = await fetch(`http://127.0.0.1:3000/maamir/${folder}/info.json`)
//            let a = await fetch(`maamir/${folder}/info.json`)
//             let response = await a.json();
//             console.log(response)

//             middel.innerHTML = middel.innerHTML +

//                 ` 
//                  <div data-folder="${folder}" class="oimg">
//             <div class="oimg1"><img src="maamir/${folder}/img.jpg.jpeg" alt=""></div>
//             <div class="oimg2"><img src="logo/golaplay.svg" alt=""></div>
//             <div class="oimgtext">${response.title}</div>
//         </div> 
//         `
//         }
//         Array.from(document.getElementsByClassName("oimg")).forEach(e => {
//             e.addEventListener("click", async item => {
//                 await aamir(`maamir/${item.currentTarget.dataset.folder}`)
//             })
//         })
//     }
// }


// const playMusic = ((track, pause = false) => {
//     // audio = new Audio("/songs/" + track)

//     playsongs.src = `/${currFolder}/` + track
//     if (!pause) {
//         playsongs.play()
//         play.src = "logo/pause.svg"

//     }
//     document.querySelector(".in").innerHTML = decodeURI(track)

//     document.querySelector(".fo").innerHTML = "00:00 / 00:00"

  

// })
// aamir2()

// async function main() {

//     await aamir("maamir/aamir1")
//     playMusic(maamir[0], true)



//     play.addEventListener("click", () => {
//         if (playsongs.paused) {
//             playsongs.play()
//             play.src = "/logo/pause.svg"
//         } else {
//             playsongs.pause()
//             play.src = "/logo/chalu.svg"
//         }
//     })

//     playsongs.addEventListener("timeupdate", () => {

//         document.querySelector(".fo").innerHTML =
//             `${convertSecondsToMMSS(playsongs.currentTime)}/${convertSecondsToMMSS(playsongs.duration)}`
//         document.querySelector(".gola").style.left = (playsongs.currentTime / playsongs.duration) * 98 + "%";
//     })
//     document.querySelector(".seekbar").addEventListener("click", e => {
//         document.querySelector(".gola").style.left = (e.offsetX / e.target.getBoundingClientRect().width) * 98 + "%";
//         playsongs.currentTime = playsongs.duration * (e.offsetX / e.target.getBoundingClientRect().width) * 98 / 100;

//     })

//     playsongs.addEventListener("timeupdate", function () {
//         const percentage = (playsongs.currentTime / playsongs.duration) * 100;
//         document.querySelector(".seekbar").style.background = `linear-gradient(to right,rgb(168, 48, 17) ${percentage}%, #ccc ${percentage}%)`;
//         document.querySelector(".seekbar").value = percentage;
//     })

//     previous.addEventListener("click", () => {
//         console.log('previous')
//         console.log(playsongs.src)
//         let index = maamir.indexOf(playsongs.src.split("/").slice(-1)[0])
//         if ((index - 1) >= 0) {
//             playMusic(maamir[index - 1])
//         }
//     })
//     next.addEventListener("click", () => {
//         console.log('next')
//         console.log(playsongs.src)
//         let index = maamir.indexOf(playsongs.src.split("/").slice(-1)[0])
//         if (index + 1 < maamir.length) {
//             playMusic(maamir[index + 1])
//         }
//     })


//     playsongs.addEventListener("ended", () => {
//         let index = maamir.indexOf(playsongs.src.split("/").slice(-1)[0]);
//         if (index + 1 < maamir.length) {
//             playMusic(maamir[index + 1]); // Play the next song
//         } else {
//             playMusic(maamir[0]); // If it's the last song, restart from the first song
//         }
//     });


// }
// main()

let playsongs = new Audio();
let maamir;
let currFolder;

function convertSecondsToMMSS(seconds) {
    if (isNaN(seconds) || seconds < 0) return "00:00";
    seconds = Math.floor(seconds);
    let minutes = Math.floor(seconds / 60);
    let secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

async function aamir(folder) {
    currFolder = folder;
    let res = await fetch(`${folder}/info.json`);
    let text = await res.json();
    console.log(text)
  
   
    maamir = text.songs;
  
    
  
    let songUL = document.querySelector(".am ul");
    songUL.innerHTML = "";
  
    for (const song of maamir) {
      songUL.innerHTML += `
        <li>
          <div class="ekdiv">
            <div class="ekdiv1">
              <div class="svg1"><img src="logo/b1.svg" alt=""></div>
              <div class="title">
                <div class="tit">${song.name}</div>
                <div class="le">Artist . Aamir</div>
              </div>
            </div>
            <div class="now">
              <div class="img1">Play Now</div>
              <div class="svg2"><img src="logo/play.svg" alt=""></div>
            </div>
          </div>
        </li>`;
    }
  
    // Add click event to each li
    Array.from(document.querySelectorAll(".am li")).forEach((e, i) => {
        e.addEventListener("click", () => {
            playMusic(maamir[i].file);
        });
    });
  }
  

async function aamir2() {
    let a = await fetch("songsList.json");
    let folders = await a.json();

    let middel = document.querySelector(".middel");
    for (let item of folders) {
        middel.innerHTML += `
            <div data-folder="maamir/${item.folder}" class="oimg">
                <div class="oimg1"><img src="maamir/${item.folder}/img.jpg.jpeg" alt=""></div>
                <div class="oimg2"><img src="logo/golaplay.svg" alt=""></div>
                <div class="oimgtext">${item.title}</div>
            </div>`;
    }

    document.querySelectorAll(".oimg").forEach(e => {
        e.addEventListener("click", async item => {
            await aamir(item.currentTarget.dataset.folder);
        });
    });
}

const playMusic = ((track, pause = false) => {
    if (typeof track === 'object') {
        playsongs.src = `${currFolder}/${track.file}`;
        document.querySelector(".in").innerHTML = track.name;
    } else {
        playsongs.src = `${currFolder}/${track}`;
        let song = maamir.find(s => s.file === track);
        document.querySelector(".in").innerHTML = song ? song.name : decodeURI(track);
    }

    if (!pause) {
        playsongs.play();
        play.src = "logo/pause.svg";
    }

    document.querySelector(".fo").innerHTML = "00:00 / 00:00";
});

    




async function main() {
    await aamir("maamir/aamir1");
    if (maamir.length > 0) {
        playMusic(maamir[0], true);
    } else {
        console.error("❌ No songs found in aamir1!");
    }

    document.getElementById("play").addEventListener("click", () => {
        if (playsongs.paused) {
            playsongs.play();
            play.src = "logo/pause.svg";
        } else {
            playsongs.pause();
            play.src = "logo/chalu.svg";
        }
    });

    playsongs.addEventListener("timeupdate", () => {
        document.querySelector(".fo").innerHTML = `${convertSecondsToMMSS(playsongs.currentTime)}/${convertSecondsToMMSS(playsongs.duration)}`;
        document.querySelector(".gola").style.left = (playsongs.currentTime / playsongs.duration) * 98 + "%";
    });

    document.querySelector(".seekbar").addEventListener("click", e => {
        playsongs.currentTime = playsongs.duration * (e.offsetX / e.target.getBoundingClientRect().width);
    });

    playsongs.addEventListener("ended", () => {
        let currentFile = playsongs.src.split("/").slice(-1)[0];
        let index = maamir.findIndex(song => song.file === currentFile);
    
        if (index !== -1 && index + 1 < maamir.length) {
            playMusic(maamir[index + 1].file);
        } else {
            playMusic(maamir[0].file);
        }
    });
}

aamir2();
main();



