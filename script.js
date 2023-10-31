const review=[
    {
        id:1,
        personimg:"image/image (1).jpg",
        author:"Ali Hassan",
        job:"Intern",
        info:"Internship sit amet consectetur adipisicing elit. Quia magnam reiciendis cupiditate provident totam velit ."
    },
    {
        id:2,
        personimg:"image/image (2).jpg",
        author:"Noor",
        job:"Ux Designer",
        info:"Ux Designer can sit amet consectetur adipisicing elit. Quia magnam reiciendis cupiditate provident totam velit ."
    },
    {
        id:3 ,
        personimg:"image/image (3).jpg",
        author:"Tamoor",
        job:"web Developer",
        info:"Web developer of  amet consectetur adipisicing elit. Quia magnam reiciendis cupiditate provident totam velit ."
    }
];
const img=document.querySelector('.personimg');
const author=document.querySelector('.author');
const job=document.querySelector('.job');
const info=document.querySelector('.info');
const leftbtn=document.getElementById('leftIcon');
const Rightbtn=document.getElementById('RightIcons');
const Randomicon=document.getElementById('randombtn');

let currentnum=0;
window.addEventListener('DOMContentLoaded',function(){
    current();
    
})

function current() {
    img.src=review[currentnum].personimg
    author.textContent=review[currentnum].author;
    job.textContent=review[currentnum].job;
    info.textContent=review[currentnum].info;
    
}
leftbtn.addEventListener('click',function (){
    currentnum++;
    if (currentnum>review.length-1) {
        currentnum=0;  
    }
    current(currentnum);
})
Rightbtn.addEventListener('click',function (){
    currentnum--;
    if (currentnum<0) {
        currentnum=review.length-1;  
    }
    current(currentnum);

});
Randomicon.addEventListener('click',()=>{
    currentnum= Math.floor(Math.random()*review.length);
   
    current()
});