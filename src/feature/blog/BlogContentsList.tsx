import { ContentType } from "../../services/BlogsData"

interface BlogContentsListPropsType{
    contents:ContentType[]
}

const BlogContentsList = ({contents}:BlogContentsListPropsType) => {
  return (
    <ul className="space-y-[1.2rem] ">
        {contents.map((content,index)=><li key={index}>
        {content.contentTitle && <h3 className="mb-[1.2rem] text-lg font-semibold">{content.contentTitle}</h3>}
        <p className="font-thin text-justify leading-[32px]">{content.contentParagraph}</p>

        </li>)}
    </ul>
  )
}

export default BlogContentsList