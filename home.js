function slideShow(){
    const arr=[
        "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/9739/1369739-i-d61ab7947400",
        "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/7033/1607033-i-d6f937c102ac",
        "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/1201/1451201-i-c6274d522e46"
    ];
    let i=0;
    let div=document.getElementById("slider");
    let img=document.createElement("img");
   img.src=arr[0];

   div.append(img);
   i=i+1;

   setInterval(function(){
       if(i==3){
        i=0;
       }
       img.src=arr[i];
       i=i+1;
       div.append(img);
   },2000)
}
slideShow();



let movies=[
    {
        name:"CHHICHHORE",
        rating:9.3,
        img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/896/580896-v"
    },
    {
        name:"SUPER 30",
        rating:8.5,
        img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6828/556828-v"
    },
    {
        name:"MISSON MANGAL",
        rating:9.4,
        img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1529/571529-v"
    },
    {
       name:"MS DHONI",
       rating:8.3,
       img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/3314/1770003314/1770003314-v" 
    },
    {
        name:"BAGHI 3",
        rating:8.9,
        img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6536/846536-v"
    },
    {
        name:"TANHAJI",
        rating:9.5,
        img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7676/647676-v"
    },
    {
        name:"TIRANGA",
        rating:9.8,
        img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7710/1317710-v-25d4e8e8a6cf"
    },
    {
        name:"TOTAL DHAMAL",
        rating:7,
        img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8285/388285-v"
    },
    {
        name:"THOR",
        rating:9.8,
        img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8317/1328317-v-56412010beba"
    }
];
localStorage.setItem("movies",JSON.stringify(movies));

let data=JSON.parse(localStorage.getItem("movies"));

function appendMovies(data){
     let data_div=document.getElementById("basic");

     data_div.innerHTML=null;
    // data_div.id="movies";
    data.forEach(function(el){
        let div=document.createElement("div");
        let name=document.createElement("p");
        name.innerHTML=`Name: ${el.name}`;

        let rating=document.createElement("p");
        rating.innerHTML=`Rating: ${el.rating}`;

        let img=document.createElement("img");
        img.id="poster";
        img.src=el.img;

        div.append(img,name,rating);
        data_div.append(div)
    })


}

let mypromise=new Promise(function(resolve,reject){

    setTimeout(function(){
         let data=movies;

         if(data!=null){
            resolve(data);
         }else{
            reject("Issue from Server")
         }
    },2000)
})


async function main(){
  try{
      let response=await mypromise;
      appendMovies(response)
  }catch(err){
     console.log(err)
  }
}
main();

//-----------------sorting------------

function sortLH(){
    let data =JSON.parse(localStorage.getItem("movies"));
    data =data.sort((a,b)=>a.rating-b.rating);
    appendMovies(data)
}

function sortHL(){
    let data =JSON.parse(localStorage.getItem("movies"));
    data =data.sort((a,b)=>b.rating-a.rating);
    appendMovies(data)
}