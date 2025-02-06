function Dosa({guest}){
    return <h2>Dosa Dish for guest #{guest}</h2>
}

export default function Dosa_Dish(){
    let dishs = []
    for(let i=1; i<6; i++){
        dishs.push(<Dosa key={i} guest={i}/>)
    }
    return dishs;
}