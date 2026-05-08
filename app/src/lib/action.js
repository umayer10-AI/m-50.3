import { revalidatePath } from "next/cache"

export const deleteUser = async (id) => {
    "use server"

    const res = await fetch(`http://localhost:5000/user/${id}`,{
        method: "DELETE"
    })
    const data = await res.json()
    console.log(data)
    if(data.deletedCount > 0) {
        revalidatePath("/user")
    }
    return data
}