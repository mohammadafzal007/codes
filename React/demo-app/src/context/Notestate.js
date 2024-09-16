import NoteContext from "./context.js";

const NoteState=(props)=>{
    const state={
        name:"Afzal",
        salary:20000
    }
    return (

        <>
<NoteContext.Provider value={state}>
{props.children}
</NoteContext.Provider>
</>
    )
}

export default NoteState;