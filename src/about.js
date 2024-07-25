const content = document.getElementById('content');


export default function about(){

    content.innerHTML = ''

    const container = document.createElement('div');
    const righthand = document.createElement('div');
    const lefthand = document.createElement('div');
    const top = document.createElement('div');
    const mid = document.createElement('div');
    const last = document.createElement('div');

    lefthand.className = 'lefthand';
    container.className = "Aboutcontainer";
    righthand.className = "righthand";
    top.className = "top";
    mid.className = 'mid';
    last.className = 'last';

    ;
    
    top.innerHTML = '<div class="topleft"><h1>SUSHI ARTISTRY REDEFINED</h1><p>Where culinary craftsmanship meets modern elegance. indulge in the finest sushi, expertly curated to elevate your dining experience</p> </div> <div class="topright">  </div>';
    mid.innerHTML = '<div class="midleft"><h1>Trip Advisor</h1><h3>Best Sushi</h3></div> <div class="midmid"><h1>Michelin Guide</h1><h3>Quality Food</h3></div> <div class="midright"><h1>Start dining</h1><h3>cool vibe</h3></div>';
    last.innerHTML = '<div class="lastleft"> </div> <div class="lastright"> <h1>OUR Story</h1> <p>Founded with a passion for culinary excellence.Qitchen journey started  in the heart of Prague. Over years, it evolved into a haven for sushi enthusiasts, celebrated for i artful mastery and devotion to redefining gastronomy </p> </div>';

    
    righthand.appendChild(top);
    righthand.appendChild(mid);
    righthand.appendChild(last);

    container.appendChild(lefthand);
    container.appendChild(righthand);

    content.appendChild(container);
}
