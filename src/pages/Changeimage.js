import React, { useState } from "react";
import top from "../images/top.PNG"
import top2 from "../images/top2.PNG"
import top3 from "../images/top3.PNG"
import top4 from "../images/top4.PNG"
import top5 from "../images/top5.PNG"
import top6 from "../images/top6.PNG"
import top7 from "../images/top7.PNG"
import "../App.css"


const data = [

  
    {
        id: "1",
        key: "1",
        title: "Title1",
        text: "Text1.",
        img: "https://scontent.flyp9-1.fna.fbcdn.net/v/t39.30808-6/340139102_129499026650301_769157466582014328_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=AAYqBjO_BFsAX8tbgI7&_nc_ht=scontent.flyp9-1.fna&oh=00_AfAi6ydSOMn_mpeBYScYqjX68c87l3j8wXUbLE_5EloPBg&oe=6434EA45"
      },
      {
        id: "2",
        key: "2",
        title: "Title2",
        text: "Text2.",
        img: "https://scontent.flyp9-1.fna.fbcdn.net/v/t39.30808-6/340183630_1187103781970648_6539351968365173591_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=tVhi1rvwqEkAX9OuLYs&_nc_oc=AQlx_CglDt_3i30EWUlz8lcqRTlNXilsLZPB7Rspzx68p2tv4pFp9QVxfskKxbkLdt0&_nc_ht=scontent.flyp9-1.fna&oh=00_AfDs4uoaYGwlGhsHDPYnVeuNkMPXFG98dqvWuWYgkX3WHA&oe=6435CCF4"
      },
      {
        id: "3",
        key: "3",
        title: "Title3",
        text: "Text3.",
        img: "https://scontent.flyp9-1.fna.fbcdn.net/v/t39.30808-6/340139102_129499026650301_769157466582014328_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=AAYqBjO_BFsAX8tbgI7&_nc_ht=scontent.flyp9-1.fna&oh=00_AfAi6ydSOMn_mpeBYScYqjX68c87l3j8wXUbLE_5EloPBg&oe=6434EA45"
      },
      {
        id: "4",
        key: "4",
        title: "Title4",
        text: "Text4.",
        img: "https://scontent.flyp9-1.fna.fbcdn.net/v/t39.30808-6/339158467_191011643687931_7229449127915103734_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=UkcCMt0k4bwAX-iJZIz&_nc_ht=scontent.flyp9-1.fna&oh=00_AfBVY4KCRURF83_mwmOvwK1b0oiDAZSFMAyDnNvVgJBnzw&oe=6434419D"
      },
      {
        id: "5",
        key: "5",
        title: "Title5",
        text: "Text5.",
        img: "https://scontent.flyp9-1.fna.fbcdn.net/v/t39.30808-6/340377408_648117670485516_6443378718638338799_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=ED3MlqBTdR8AX9BVhbR&_nc_ht=scontent.flyp9-1.fna&oh=00_AfBJ9nx8NUYDfSGPLBjKaspCY4VrDoEgbtYU561wydoDVA&oe=64356C64"
      },{
        id: "6",
        key: "6",
        title: "Title6",
        text: "Text6.",
        img: "https://scontent.flyp9-1.fna.fbcdn.net/v/t39.30808-6/340223189_624312059554912_267734882625747835_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=XPdVJB7GdCMAX87_DdG&_nc_ht=scontent.flyp9-1.fna&oh=00_AfBONiz5BicUUg6OPlW9e_Pzl4IarBfrXim7ZLqMYZzOvA&oe=6434F0E4"
      },
    {
    id: "7",
    key: "7",
    title: "Title7",
    text: "Text7.",
    img: "https://scontent.flyp9-1.fna.fbcdn.net/v/t39.30808-6/340191203_229670239724690_2123704679578245807_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=JqvrX-mOG7gAX_DyZr6&_nc_ht=scontent.flyp9-1.fna&oh=00_AfCKAZ76DikNhP0kZ_mE84laJMaoyr2RPHTY-rxlTVCUDg&oe=6435819B"
  },
  {
    id: "8",
    key: "8",
    title: "Title8",
    text: "Text8.",
    img: "https://scontent.flyp9-1.fna.fbcdn.net/v/t39.30808-6/340227850_613867717301985_3758667954494955521_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=9T06hMSwscAAX_5ep5g&_nc_ht=scontent.flyp9-1.fna&oh=00_AfCmXBeozLFe2gTDUvnl6qkkEt3X4zS1qkkNlTXD2y4uPw&oe=64343FCB"
  },
  {
    id: "9",
    key: "9",
    title: "Title9",
    text: "Text9.",
    img: "https://scontent.flyp9-1.fna.fbcdn.net/v/t39.30808-6/340103077_230949466103114_7745094897297198047_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=7xULbGK9fGQAX9meKXD&_nc_ht=scontent.flyp9-1.fna&oh=00_AfANXq04E5icLiNyBmvic9jgeBXSmkVqGBvOMqC5iGUBoA&oe=64350D89"
  },
  {
    id: "10",
    key: "10",
    title: "Title10",
    text: "Text10",
    img: "https://scontent.flyp9-1.fna.fbcdn.net/v/t39.30808-6/340231544_3600100970264216_4985125574357583993_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=6khFNaTDsGUAX-nQGaw&_nc_ht=scontent.flyp9-1.fna&oh=00_AfCNcy_hrBmtbHGCTwg8u6WLoc2MoPU2j3tVnTxHmxf0jg&oe=64343653"
  }
];

export default function Changeimage() {
  const [toggled, toggle] = useState("");
  return (
    <div>
      {data.map(({ title, text, key, img }) => {
        return (
          <>
            <div >
              <div >
                <div onClick={() => toggle(key)} className="space">{title} </div>
                {toggled === key ? (
                  <>
                    <p>{text}</p>
                  </>
                ) : null}
              </div>

              
            </div>
            <div className="imgphoto">
                {toggled === key ? (
                  <>
                    <img src={img} key={key} className="photo" />
                  </>
                ) : null}
              </div>
           
          </>
        );
      })}


    </div>
  );
}





// import React, { useState } from "react";


// const data = [
//   {
//     id: "1",
//     key: "1",
//     title: "Title1",
//     text: "Text1.",
//     img: "https://images.unsplash.com/photo-1680695917815-6431604e1d3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
//   },
//   {
//     id: "2",
//     key: "2",
//     title: "Title2",
//     text: "Text2.",
//     img: "https://media.istockphoto.com/id/1200298872/photo/takoyaki-sign-lantern-hanging-in-the-night.jpg?s=170667a&w=0&k=20&c=gp2okIc58K9C2UzadIb4IFmxWC9s7XnhhTK6PtY4_S4="
//   },
//   {
//     id: "3",
//     key: "3",
//     title: "Title3",
//     text: "Text3.",
//     img: "https://images.unsplash.com/photo-1680695918660-488e73d18248?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
//   },
//   {
//     id: "4",
//     key: "4",
//     title: "Title4",
//     text: "Text4",
//     img: "https://i.pinimg.com/originals/33/50/08/3350085e5fcfc8fcfba8f3cf04206294.jpg"
//   }
// ];

// export default function Changeimage() {
//   const [toggled, toggle] = useState("");
//   return (
//     <div className="App">
//       {data.map(({ title, text, key, img }) => {
//         return (
//           <>
//             <div className="main">
//               <div className="text">
//                 <h1 onClick={() => toggle(key)}>{title} </h1>
//                 {toggled === key ? (
//                   <>
//                     <p>{text}</p>
//                   </>
//                 ) : null}
//               </div>

//               <div className="img">
//                 {toggled === key ? (
//                   <>
//                     <img src={img} key={key} className="photo" />
//                   </>
//                 ) : null}
//               </div>
//             </div>
//           </>
//         );
//       })}
//     </div>
//   );
// }