import { Link } from "react-router-dom"

Link
const CategoryCard = (props) => {
    return (
        
        <div className="card">
            <Link  to={`/category/${props.props.title}`}><img src={props.props.img} alt="" /></Link>
            <Link  to={`/category/${props.props.title}`}><h3>{props.props.title}</h3></Link>
            
        </div>
    )
    }

export default CategoryCard