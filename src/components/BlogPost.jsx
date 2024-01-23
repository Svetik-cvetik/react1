export const BlogPost = (props) => {
    return (
        <div className="blog-post">
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>
            <img scr={props.pic} />
            <p>{props.text}</p>
            <button>{props.textButton}</button>
        </div>
    )
}