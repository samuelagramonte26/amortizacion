export const handleChange=(e,set)=>{
    const {name,value} = e.target;
    set((data)=>({
        ...data,
        [name]:value
    }))
}