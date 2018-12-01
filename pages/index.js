import Layout from '../components/MyLayout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const PostLink = ({show}) => (
    <li>
        <Link href={`/post?id=${show.id}`}
              as={`/p/${show.id}`}>
            <a>{show.name}</a>
        </Link>
        <style jsx>{`
           li {
                list-style: none;
                margin: 5px 0;
            }

           a {
                text-decoration: none;
                color: blue;
                font-family: "Arial";
             }

           a:hover {
                opacity: 0.6;
             }

       `}</style>
    </li>
)

const Index = (props) => (
    <Layout>
        <h1>Batman</h1>
        <ul>
            {props.shows.map(
                ({show}) => (
                    <PostLink key={show.id} show={show}/>
                ))}
        </ul>
        {/*issue: style-jsx can not be applied on it child component */}
        <style jsx>{`
           h1, a {
                font-family: "Arial";
           }

           ul {
                padding: 0;
            }

           li {
                list-style: none;
                margin: 5px 0;
            }

           a {
                text-decoration: none;
                 color: blue;
             }

           a:hover {
                opacity: 0.6;
             }

       `}</style>
    </Layout>
)


Index.getInitialProps = async function () {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman'); //1. fetch this data
    const data = await res.json(); //2. make this response to json format
    console.log(`fetched show: ${data.length}`);
    // return obj is Index's props
    return {
        shows: data
    }
}

export default Index