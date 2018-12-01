import Layout from '../components/MyLayout.js'

// props.url is passed down only on main component
// so on exporting main component, props.url.query.title should be passed down as a prop

//sub component
const Content = (prop) => (
    <Layout>
        <h1>{prop.url}</h1>
        <p>post content</p>
    </Layout>
)

// main component
export default (props) => (
    <Content url={props.url.query.title}/>
)
