import Box from "./Box.Jsx"

export default function Todo() {
    return(
        <Box>
            <div>
                <h1 className="text-3xl text-center">Todo</h1>
                    <form action="" className="space-x-4 my-4 px-5">
                        <input type="" className="p-2 border border-slate-300 rounded-xl" />
                        <button className="bg-neutral-700 px-4 py-2 rounded-xl hover:bg-indigo-900 active:bg-indigo-900">Add</button>
                    </form>
                
            </div>
        </Box>
    )
    
}