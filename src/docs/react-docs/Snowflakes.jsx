import '../styles/Docs.css'
import { Doc } from '../../Doc'

export function DocSnowflakes(){

    let doc_body_content =
    <>
        <div>

        </div>
    </>

    return(
        <Doc doc_header='Generating Snowflake Ids'
        doc_note='The generation of the snowflakes is based on the snowflakes algorithms that are used by Twitter& Discord'
        doc_body={doc_body_content}/>
    )
}