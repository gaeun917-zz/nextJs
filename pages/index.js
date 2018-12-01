import Layout from '../components/MyLayout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
   <Layout>
       <h1>Batman</h1>
       <ul>
           {props.shows.map(
               ({show}) => (
                   <li key={show.id}>
                       <Link href={`/post?id=${show.id}`}
                                as={`/p/${show.id}`}>
                           <a>{show.name}</a>
                       </Link>
                   </li>
               ))}
       </ul>
   </Layout>
)

Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman'); //1. fetch this data
    const data = await res.json(); //2. make this response to json format
    console.log(`fetched show: ${data.length}`);
    // return obj is Index's props
    return{
        shows:data
    }
}

export default Index