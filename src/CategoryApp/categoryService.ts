import categoryRepository  from "./categoryRepository"


interface Category{
    id: number
    name:string
    img:string
    description:string | null
}

interface ICategoryOk{
    status: "ok",
    category: Category[]
}

interface ICategoryError{
    status:"error",
    message: string
}

interface IOdinElement{
    status: "ok",
    category: Category
}

async function getAllCategories(): Promise<ICategoryOk | ICategoryError> {
    const category = await categoryRepository.getAllCategories()
    if (!category){
        return{status: "error", message: "vsekapec"}
    }
    return {status:"ok", category: category}
}

async function getCategoryById(id:number): Promise<IOdinElement | ICategoryError> {
    const category = await categoryRepository.getCategoryById(id)
    if (!category){
        return{status: "error", message: "vsekapec"}
    }
    return {status:"ok", category: category}
    
}

async function createCategory(data: Category): Promise<IOdinElement | ICategoryError> {
    const category = await categoryRepository.createCategory(data)
    if (!category){
        return{status: "error", message: "vsekapec"}
    }
    return {status:"ok", category: category}
}



async function getCategoryWithProducts(id: number): Promise<IOdinElement | ICategoryError> {
    const category = await categoryRepository.getCategoryWithProducts(id)
    if (!category){
        return{status: "error", message: "vsekapec"}
    }
    return {status:"ok", category: category}
}


const categoryService = {
    getAllCategories,
    getCategoryById,
    createCategory,
    getCategoryWithProducts
}

export default categoryService