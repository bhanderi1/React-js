import './App.css'
// import List_Rendering from './List_Rendering'

/*single qoute line*/
// const Quotes = [
//   "Every moment matters",
//   "Be a voice is power",
//   "character is power",
//   "All is well",
//   "Be here now"
// ]

const Product = [
  {
    id: 1,
    name: "samsung S20Fe",
    price: 30000,
    discount: "10%",
    color: "gray",
    catagories: "Mobile",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR40rBp4qgpJCCBDz-e_0ASdP4KBgChV-1q98odrvlQQ&s"
  },
  {
    id: 2,
    name: "Vivo X80",
    price: 25000,
    discount: "7%",
    color: "black",
    catagories: "Mobile",
    img: "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1651807558189/e7db3841bf6db0ac7a6f58948e8ab515.png"
  },
  {
    id: 3,
    name: "samsung ultra S203",
    price: 20000,
    discount: "10%",
    color: "white",
    catagories: "Mobile",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKDJ-SQOfBnI2QwPK3Iv-zCb8QVDR49HyUXz-z1oIc7Q&s"
  },
  {
    id: 4,
    name: "vivo y19",
    price: 12000,
    discount: "15%",
    color: "black",
    catagories: "Mobile",
    img: "https://m.media-amazon.com/images/I/51VUf4PBIaL.jpg"
  },
  {
    id: 5,
    name: "samsung S203 FE",
    price: 15000,
    discount: "8%",
    color: "blue",
    catagories: "Mobile",
    img: "https://m.media-amazon.com/images/I/81vDZyJQ-4L._AC_UF1000,1000_QL80_.jpg"
  },

  {
    id: 6,
    name: "Vivo X19",
    price: 15000,
    discount: "12%",
    color: "blue",
    catagories: "Mobile",
    img: "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1585380643397/0559394eab4a2adcf1bc3b1dc63ad25f.png"
  },
  {
    id: 7,
    name: "Vivo v30 pro",
    price: 18000,
    discount: "7%",
    color: "sky",
    catagories: "Mobile",
    img: "https://www.91-img.com/gallery_images_uploads/f/2/f2a4f3bd2b97d4a84b6652de64ff0df857c52b13.jpg?tr=h-271,c-at_max,q-80,pr-true"
  },
  {
    id: 8,
    name: "Oppo A15s",
    price: 12000,
    discount: "15%",
    color: "black",
    catagories: "Mobile",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCt3E8EVKEHhWu-vQAE1JDNuQ74PSyiTFgfAtajuzJLg&s"
  },
  {
    id: 9,
    name: "Oppo F25",
    price: 20000,
    discount: "5%",
    color: "brown",
    catagories: "Mobile",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT-mroxu8yeYrYBwuSHdW7zxweMNW7So5amDccKKnQVQ&s"
  },
]

function App() {
  const FilterData = Product.filter((data) => data.color === "sky")
  const Render_List = FilterData.map(
    (item) =>
      <div className='m-2 rounded-xl '>
        <div className='shadow-xl shadow-gray-500'>
          <div className=' object-cover col-auto'>
            <img src={item.img} alt="" className='h-[350px]  p-2' />
          </div>
          <div className='p-4'>
            <h1 className='font-bold text-2xl'>{item.name}</h1>
            <span>{item.price}</span>
            <p>{item.discount}</p>
            <div>{item.color}</div>
          </div>
        </div>
      </div>
  )


  return (
    <>
      <ul className='flex justify-center items-center h-screen felx-wrap '>
        {Render_List}
      </ul>
    </>
  )

  /*single qoute line*/
  // const Render_List = Quotes.map((item) => <li>{item}</li>)
  // return (
  //   <>
  //     <ul>
  //       {Render_List}
  //     </ul>
  //   </>
  // )
}

export default App
