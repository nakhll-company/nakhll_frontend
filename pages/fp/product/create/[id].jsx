import { useRouter } from 'next/router'

export const getServerSideProps = ({ params }) => {
    // console.log("params", params);
    // fetch 
    return {
        props: {
            hi: 'ali'
        }
    }
}


const Detail = ({ hi }) => {
    const outer = useRouter()
    // console.log(hi)
    return (
        <>
            <h1>{outer.route}</h1>
            <h1>sahar</h1>
        </>
    )
}



export default Detail;