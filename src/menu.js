const content = document.getElementById('content');


export default function menu(){
    content.innerHTML = ''
    const container = document.createElement('div');
    const MenuImg = document.createElement('div');
    const food = document.createElement('div');
    const zMenu = document.createElement('div');
    const copyright = document.createElement('div')
    const maki = document.createElement('div');
    const uramaki = document.createElement('div');
    const spec = document.createElement('div');



    container.className = "container";
    MenuImg.className = "MenuImg";
    food.className = "food";
    zMenu.className = "zMenu";
    maki.className = "maki";
    uramaki.className = "uramaki";
    spec.className = 'Specials'

    copyright.className = 'copyright';

    MenuImg.innerHTML = '<img src="https://framerusercontent.com/images/10I4GJR5nYsUsYnoOPIDjoapkA.webp" alt=""/>'


    maki.innerHTML = '<h1>MAKI</h1><div class="STunaMaki"><img src="https://framerusercontent.com/images/QAnUAEBWAkCE4NM4Ja4aQy9Tu4.webp" alt=""/> <div class="detail"><h2>Spicy Tuna Maki</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quis aut beatae.</p></div></div><div class="MangoMaki"> <img src="https://framerusercontent.com/images/QAnUAEBWAkCE4NM4Ja4aQy9Tu4.webp" alt=""/> <div class="detail"> <h2>Mango Maki</h2> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quis aut beatae.</p></div></div><div class="SalmonMaki"><img src="https://framerusercontent.com/images/QAnUAEBWAkCE4NM4Ja4aQy9Tu4.webp" alt=""/><div class="detail"><h2>Salmon Maki</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Illum quis aut beatae.</p></div></div><div class="TunaMaki"> <img src="https://framerusercontent.com/images/QAnUAEBWAkCE4NM4Ja4aQy9Tu4.webp" alt=""/><div class="detail"><h2>Tuna Maki</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Illum quis aut beatae.</p></div></div>';


    container.appendChild(MenuImg);
    zMenu.appendChild(maki);
    food.appendChild(zMenu);
    container.appendChild(food);

    content.appendChild(container)
;
}



// {/* <div class="cotainer">
//         <div class="MenuImg">
//           <img
//             src="https://framerusercontent.com/images/10I4GJR5nYsUsYnoOPIDjoapkA.webp"
//             alt=""
//           />
//         </div>
//         <div class="food">
//           <div class="zMenu">
//             <div class="maki">
            //   <h1>MAKI</h1>
            //   <div class="STunaMaki">
            //     <img
            //       src="https://framerusercontent.com/images/QAnUAEBWAkCE4NM4Ja4aQy9Tu4.webp"
            //       alt=""
            //     />
            //     <div class="detail">
            //       <h2>Spicy Tuna Maki</h2>
            //       <p>
            //         Lorem ipsum dolor sit amet consectetur adipisicing elit.
            //         Illum quis aut beatae.
            //       </p>
            //     </div>
            //   </div>
            //   <div class="MangoMaki">
            //     <img
            //       src="https://framerusercontent.com/images/QAnUAEBWAkCE4NM4Ja4aQy9Tu4.webp"
            //       alt=""
            //     />
            //     <div class="detail">
            //       <h2>Mango Maki</h2>
            //       <p>
            //         Lorem ipsum dolor sit amet consectetur adipisicing elit.
            //         Illum quis aut beatae.
            //       </p>
            //     </div>
            //   </div>
            //   <div class="SalmonMaki">
            //     <img
            //       src="https://framerusercontent.com/images/QAnUAEBWAkCE4NM4Ja4aQy9Tu4.webp"
            //       alt=""
            //     />
            //     <div class="detail">
            //       <h2>Salmon Maki</h2>
            //       <p>
            //         Lorem ipsum dolor sit amet consectetur adipisicing elit.
            //         Illum quis aut beatae.
            //       </p>
            //     </div>
            //   </div>
            //   <div class="TunaMaki">
            //     <img
            //       src="https://framerusercontent.com/images/QAnUAEBWAkCE4NM4Ja4aQy9Tu4.webp"
            //       alt=""
            //     />
            //     <div class="detail">
            //       <h2>Tuna Maki</h2>
            //       <p>
            //         Lorem ipsum dolor sit amet consectetur adipisicing elit.
            //         Illum quis aut beatae.
            //       </p>
            //     </div>
            //   </div>
//             </div>
//             <div class="uramaki">
//               <h1>MAKI</h1>
//               <div class="Volcano">
//                 <img
//                   src="https://framerusercontent.com/images/QAnUAEBWAkCE4NM4Ja4aQy9Tu4.webp"
//                   alt=""
//                 />
//                 <div class="detail">
//                   <h2>Volcano Delight</h2>
//                   <p>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Illum quis aut beatae.
//                   </p>
//                 </div>
//               </div>
//               <div class="Rainbow">
//                 <img
//                   src="https://framerusercontent.com/images/QAnUAEBWAkCE4NM4Ja4aQy9Tu4.webp"
//                   alt=""
//                 />
//                 <div class="detail">
//                   <h2>Rainbow Fusion</h2>
//                   <p>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Illum quis aut beatae.
//                   </p>
//                 </div>
//               </div>
//               <div class="Dragon">
//                 <img
//                   src="https://framerusercontent.com/images/QAnUAEBWAkCE4NM4Ja4aQy9Tu4.webp"
//                   alt=""
//                 />
//                 <div class="detail">
//                   <h2>Dragon Elegance</h2>
//                   <p>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Illum quis aut beatae.
//                   </p>
//                 </div>
//               </div>
//               <div class="Sunset">
//                 <img
//                   src="https://framerusercontent.com/images/QAnUAEBWAkCE4NM4Ja4aQy9Tu4.webp"
//                   alt=""
//                 />
//                 <div class="detail">
//                   <h2>Sunset Serenity</h2>
//                   <p>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Illum quis aut beatae.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div class="Specials">
//               <h1>Special Rolls</h1>
//               <div class="Sunrise">
//                 <img
//                   src="https://framerusercontent.com/images/QAnUAEBWAkCE4NM4Ja4aQy9Tu4.webp"
//                   alt=""
//                 />
//                 <div class="detail">
//                   <h2>SUNRISE BLISS</h2>
//                   <p>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Illum quis aut beatae.
//                   </p>
//                 </div>
//               </div>
//               <div class="Mango">
//                 <img
//                   src="https://framerusercontent.com/images/QAnUAEBWAkCE4NM4Ja4aQy9Tu4.webp"
//                   alt=""
//                 />
//                 <div class="detail">
//                   <h2>Mango Tango</h2>
//                   <p>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Illum quis aut beatae.
//                   </p>
//                 </div>
//               </div>
//               <div class="Truffle">
//                 <img
//                   src="https://framerusercontent.com/images/QAnUAEBWAkCE4NM4Ja4aQy9Tu4.webp"
//                   alt=""
//                 />
//                 <div class="detail">
//                   <h2>Truffle Indulgence</h2>
//                   <p>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Illum quis aut beatae.
//                   </p>
//                 </div>
//               </div>
//               <div class="Pacific">
//                 <img
//                   src="https://framerusercontent.com/images/QAnUAEBWAkCE4NM4Ja4aQy9Tu4.webp"
//                   alt=""
//                 />
//                 <div class="detail">
//                   <h2>Pacific FireCracker</h2>
//                   <p>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Illum quis aut beatae.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="copyright">
//           <p>&#169;The Odin Project/EyosiSol</p>
//         </div>
//       </div> */}