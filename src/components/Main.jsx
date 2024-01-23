import { blogData} from "../constants/BlogData"
import { BlogPost } from "./BlogPost"


export const Main = () => {
    return (
        <main>
            <div className="blogList">
            {
              blogData.map(blogPost => {
                return (
                    <BlogPost 
                    key={blogPost.text}
                    title={blogPost.title}
                    subtitle={blogPost.title}
                    pic={blogPost.pic}
                    text={blogPost.text}
                    textButton={blogPost.textButton}
                    />
                )
                })
            }
            </div>
        </main>
    )
}