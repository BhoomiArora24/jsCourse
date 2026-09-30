//what is intersectionnn observer??
//hmari screen is smaller than our whole website so jaise website kuch show kra ri h and the moment we scroll down it observer ki koi or element which was below it touches the screen(viewport) to use load krae so that's about it

//whatis data-src?
//agar hm kisi bhi name k age data -(minus) lga dete h so js uski  value access kr pati h that's why it becoemes data - src
//because it's not having anything names src that's why it's not loading the images 

let imgs = document.querySelectorAll("img");

//it can observe we just need to tell that what to observe
//api availaible with he name of inersecion observer , it accepts the function
//functtion accepts two things entries and observer
//entries? --- there are some cases wherein there is more than one img in a single line of column like this [- - - -] there are 4 img in this column , to jb aisa ho to vo 4oo ikhate load hongi thas wha represents entries
const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(function(entry){//so now jitne bhi element intersect kre hoonge vo saro ko foreach kiya in simple language(jitni bhi img ek column me hongi saro ko foreach kiya)
        if(entry.isIntersecting){//ab vo hr ek entry (img) ke lie check krega ki vo intersect kri h
            const img = entry.target;//ab jo target entry h use img me store krdiya
            img.src = img.dataset.src;//ab hme img.src chahiye img load krne k liya , and in html file we used data-src and jha bhi hm data - use krte h vha vo chiz dataset m chli jati h and because it was data - src so vo dataset me src m save hui hogi--- so here we accessed img.src (agar hmne data - harsh likha hota to hm dataset.harsh se access krte)
            img.classList.add("loaded");//now as bedefault img ke ki opacity 0 h to uske change krke 1 krne k liye we have another classList called "loaded" to hme use add krderte h
            //now after this the image will be visible from now 
            //to ab hme use unobserve krna h
            observer.unobserve(entry);//the observe was passed only because we can unobserve the entry later
        }
    });
},{
    //now we have to tell ki where do we actually have to observe kya pta hme sirf ek particular div me observe krna ho so for that we have create this object here
    root: null,//this means it will address the whole screen
    threshold: 0.1//kitna % apki entry screen ke andar ajae tb chle, it could be 0 also screen ko touch krte hi load hojata , rn we have used 10% that is 0.1
});

imgs.forEach(function(img){
    observer.observe(img);//here we told it that u have to observe my img
})