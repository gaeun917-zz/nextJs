import Layout from '../components/MyLayout'
import Link from 'next/link'

const PostLink = (props) => (
    <li>
        <Link href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

const Index = () => (
   <Layout>
       <h1>hello</h1>
       <ul>
           <PostLink title='hello'/>
           <PostLink title='whatsUp'/>
           <PostLink title='whatsGoingOn'/>
       </ul>
   </Layout>
)
export default Index