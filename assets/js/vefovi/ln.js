function setCookie(e,t,i){var s,a,c=(i=i||{}).expires,l=("number"==typeof c&&c&&((s=new Date).setTime(s.getTime()+864e5*c),c=i.expires=s),c&&c.toUTCString&&(i.expires=c.toUTCString()),e+"="+(t=encodeURIComponent(t)));for(a in i){l+="; "+a;var o=i[a];!0!==o&&(l+="="+o)}document.cookie=l}function getCookie(e){e=("; "+document.cookie).split("; "+e+"=");if(2==e.length)return decodeURIComponent(e.pop().split(";").shift())}function removeCookie(e){setCookie(e,"",{expires:-1})}function removeClassWild(t,e){e=e.replace(/\*/g,"\\S+"),e=t.className.match(new RegExp("\\b"+e,"g"));e&&e.forEach(function(e){t.classList.remove(e)})}var responsiveVoice,special={Reset:function(){special.active=1,special.color=1,special.font_family=1,special.font_size=1,special.line_height=1,special.letter_spacing=1,special.images=1,setCookie("special",JSON.stringify(special),{path:"/"})},Set:function(){var e=document.querySelector("html");e.classList.remove(...Array.from(e.classList).filter(e=>e.startsWith("special-"))),e.classList.add("special-color-"+special.color),e.classList.add("special-font-size-"+special.font_size),e.classList.add("special-font-family-"+special.font_family),e.classList.add("special-line-height-"+special.line_height),e.classList.add("special-letter-spacing-"+special.letter_spacing),e.classList.add("special-images-"+special.images);document.querySelectorAll("#special button").forEach(e=>e.classList.remove("active"));e=document.querySelector('.special-color button[value="'+special.color+'"]'),e&&e.classList.add("active"),e=document.querySelector('.special-font-size button[value="'+special.font_size+'"]'),e&&e.classList.add("active"),e=document.querySelector('.special-font-family button[value="'+special.font_family+'"]'),e&&e.classList.add("active"),e=document.querySelector('.special-line-height button[value="'+special.line_height+'"]'),e&&e.classList.add("active"),e=document.querySelector('.special-letter-spacing button[value="'+special.letter_spacing+'"]'),e&&e.classList.add("active"),e=document.querySelector(".special-images button");e&&(e.value=special.images),special.ToggleImages(),setCookie("special",JSON.stringify(special),{path:"/"})},ToggleImages:function(){document.querySelectorAll("img").forEach(e=>{special.images?(e.dataset.src&&(e.src=e.dataset.src),e.dataset.srcset&&(e.srcset=e.dataset.srcset)):(e.dataset.src=e.src,e.srcset&&(e.dataset.srcset=e.srcset),e.removeAttribute("src"),e.srcset&&e.removeAttribute("srcset"))})},Off:function(){var e=document.querySelector("html");e.classList.remove("special"),document.querySelector('link[href="/vefovi/special.min.css"]')&&document.querySelector('link[href="/vefovi/special.min.css"]').remove(),removeClassWild(e,"special-*");document.querySelectorAll("i.special-audio, audio").forEach(e=>e.remove()),responsiveVoice&&responsiveVoice.isPlaying()&&responsiveVoice.cancel();var e=document.querySelector("#specialButton");e?(e.style.display="block",setCookie("special","",{path:"/"})):0<=navigator.userAgent.indexOf("MSIE ")?0<=(e=window.location.href).indexOf("template=")?window.location.href=e.replace(/template=\d+/g,"template=0"):window.location.href=e+"?template=0":fetch(window.location.origin+window.location.pathname,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"template=0"}).then(()=>{window.location.href=window.location.origin+window.location.pathname})},On:function(){var e=document.querySelector("head"),t=document.createElement("link"),e=(t.rel="stylesheet",t.href="/vefovi/special.min.css",e.appendChild(t),special.active||special.Reset(),document.querySelector("#specialButton")),i=(e&&(special.active=1,setCookie("special",JSON.stringify(special),{path:"/"}),e.style.display="none"),document.querySelector("html")),t=(i.classList.add("special"),document.createElement("div"));t.innerHTML=`
            <div id="special">
                <div class="special-panel">
                    <div class="special-font-size"><span>Шрифт:</span>
                        <button title="Маленький шрифт" value="1"><i>A</i></button>
                        <button title="Средний шрифт" value="2"><i>A</i></button>
                        <button title="Большой шрифт" value="3"><i>A</i></button>
                    </div>
                    <div class="special-color"><span>Цвет:</span>
                        <button title="Цвет черным по белому" value="1"><i>Ц</i></button>
                        <button title="Цвет белым по черному" value="2"><i>Ц</i></button>
                        <button title="Цвет синим по голубому" value="3"><i>Ц</i></button>
                    </div>
                    <div class="special-images"><span>Изображения:</span>
                        <button title="Выключить/включить изображения"><i></i></button>
                    </div>
                    <div class="special-audio"><span>Звук:</span>
                        <button title="Включить/выключить воспроизведение текста" value="0"><i></i></button>
                    </div>
                    <div class="special-settings"><span>Настройки:</span>
                        <button title="Дополнительные настройки"><i></i></button>
                    </div>
                    <div class="special-quit"><span>Обычная версия:</span>
                        <button title="Обычная версия сайта"><i></i></button>
                    </div>
                </div>
                <div id="special-settings-body">
                    <hr/>
                    <h2>Настройки шрифта:</h2>
                    <div class="special-font-family"><span>Выберите шрифт:</span>
                        <button value="1"><i>Arial</i></button>
                        <button value="2"><i>Times</i></button>
                    </div>
                    <div class="special-letter-spacing"><span>Интервал между буквами (<em>Кернинг</em>):</span>
                        <button value="1"><i>Стандартный</i></button>
                        <button value="2"><i>Средний</i></button>
                        <button value="3"><i>Большой</i></button>
                    </div>
                    <div class="special-line-height"><span>Интервал между строками:</span>
                        <button value="1"><i>Стандартный<br/>интервал</i></button>
                        <button value="2"><i>Полуторный<br/>интервал</i></button>
                        <button value="3"><i>Двойной<br/>интервал</i></button>
                    </div>
                    <h2>Выбор цветовой схемы:</h2>
                    <div class="special-color">
                        <button value="1"><i>Черным<br/>по белому</i></button>
                        <button value="2"><i>Белым<br/>по черному</i></button>
                        <button value="3"><i>Темно-синим<br/>по голубому</i></button>
                        <button value="4"><i>Коричневым<br/>по бежевому</i></button>
                        <button value="5"><i>Зеленым<br/>по темно-коричневому</i></button>
                    </div>
                    <hr/>
                    <div class="special-reset"><button><i>Параметры по умолчанию</i></button></div>
                    <div class="special-settings-close"><button><i>Закрыть</i></button></div>
                    <div class="avtor"><a href="https://`+location.hostname+'" target="_blank">'+location.hostname+`</a></div>
                </div>
            </div>
        `,document.body.prepend(t),special.Set(),document.querySelectorAll("#special button").forEach(e=>{e.addEventListener("click",function(){var e=this.parentNode.className.replace("special-","");if(e)switch(document.querySelectorAll("#special .special-"+e+" button").forEach(e=>e.classList.remove("active")),e){case"color":special.color=parseInt(this.value),this.classList.add("active"),i.classList.remove(...Array.from(i.classList).filter(e=>e.startsWith("special-color-"))),i.classList.add("special-color-"+this.value),setCookie("special",JSON.stringify(special),{path:"/"});break;case"font-size":special.font_size=parseInt(this.value),this.classList.add("active"),i.classList.remove(...Array.from(i.classList).filter(e=>e.startsWith("special-font-size-"))),i.classList.add("special-font-size-"+this.value),setCookie("special",JSON.stringify(special),{path:"/"});break;case"font-family":special.font_family=parseInt(this.value),this.classList.add("active"),i.classList.remove(...Array.from(i.classList).filter(e=>e.startsWith("special-font-family-"))),i.classList.add("special-font-family-"+this.value),setCookie("special",JSON.stringify(special),{path:"/"});break;case"line-height":special.line_height=parseInt(this.value),this.classList.add("active"),i.classList.remove(...Array.from(i.classList).filter(e=>e.startsWith("special-line-height-"))),i.classList.add("special-line-height-"+this.value),setCookie("special",JSON.stringify(special),{path:"/"});break;case"letter-spacing":special.letter_spacing=parseInt(this.value),this.classList.add("active"),i.classList.remove(...Array.from(i.classList).filter(e=>e.startsWith("special-letter-spacing-"))),i.classList.add("special-letter-spacing-"+this.value),setCookie("special",JSON.stringify(special),{path:"/"});break;case"images":special.images=special.images?0:1,this.value=special.images,special.ToggleImages(),setCookie("special",JSON.stringify(special),{path:"/"});break;case"audio":1==this.value?(document.querySelectorAll("i.special-audio").forEach(e=>e.remove()),responsiveVoice&&responsiveVoice.isPlaying()&&responsiveVoice.cancel(),document.querySelectorAll("p,h1,h2,h3,h4,h5,h6,li,dt,dd,.audiotext").forEach(e=>e.removeEventListener("mouseover",special.audioHandler)),this.value=0):(responsiveVoice.speak("Включено озвучивание текста.","Russian Female"),this.classList.add("active"),this.value=1,document.querySelectorAll("p,h1,h2,h3,h4,h5,h6,li,dt,dd,.audiotext,a,b").forEach(e=>e.addEventListener("mouseover",special.audioHandler)));break;case"settings":document.querySelector("#special-settings-body").style.display="block";break;case"settings-close":document.querySelector("#special-settings-body").style.display="none";break;case"reset":special.Reset(),special.Set(),document.querySelector("#special-settings-body").style.display="none";break;case"quit":special.Off()}})}),document.querySelector(".special-settings button").addEventListener("click",function(){document.querySelector("#special-settings-body").style.display="block"}),document.querySelector(".special-settings-close button").addEventListener("click",function(){document.querySelector("#special-settings-body").style.display="none"}),document.querySelector(".special-reset button").addEventListener("click",function(){special.Reset(),special.Set(),document.querySelector("#special-settings-body").style.display="none"}),document.querySelector(".special-quit button").addEventListener("click",function(){special.Off(),document.getElementById("special").remove()})}},specialCookie=getCookie("special"),specialButton=(specialCookie&&(specialc=JSON.parse(specialCookie)).active&&special.On(),document.querySelector("#specialButton"));specialButton&&specialButton.addEventListener("click",special.On),void 0!==responsiveVoice?console.log("ResponsiveVoice already loaded"):responsiveVoice={speak:function(e,t,i){e=new SpeechSynthesisUtterance(e);e.voice=window.speechSynthesis.getVoices().find(e=>e.name===t),i&&(e.rate=i.rate||1,e.pitch=i.pitch||1,e.volume=i.volume||1),window.speechSynthesis.speak(e)},isPlaying:function(){return window.speechSynthesis.speaking},cancel:function(){window.speechSynthesis.cancel()}},special.audioHandler=function(){responsiveVoice&&responsiveVoice.isPlaying()&&responsiveVoice.cancel(),responsiveVoice.speak(this.textContent.trim(),"Russian Female")};
//# sourceMappingURL=ln.js.map
