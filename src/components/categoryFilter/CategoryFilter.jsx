import CategoryCard from "../categoryCard/CategoryCard"


const CategoryFilter = () => {
    return (
        <section className="categoryFilter">
            <CategoryCard props = {{title : "audio" , img : "https://cdn-img.oraimo.com/2024/01/08/930-490.jpg"}} />
            <CategoryCard props = {{title : "watches" , img : "https://cdn-img.oraimo.com/2024/05/14/wearable.jpg"}} />
            <CategoryCard props = {{title : "power" , img : "https://cdn-img.oraimo.com/2024/01/12/272D.jpg"}} />
            <CategoryCard props = {{title : "lifestyle" , img : "https://cdn-img.oraimo.com/2024/01/12/13N.jpg"}} />
        </section>
    )
}

export default CategoryFilter