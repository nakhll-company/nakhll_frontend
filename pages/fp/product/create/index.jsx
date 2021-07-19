import MyLayout from "../../../../components/layout/Layout";
import Link from 'next/link';


function HomePage() {
    return (
        <h1>Welcome to Next.js! <Link href="/fp/product/create/123">link</Link></h1>
    )
}

export default HomePage;

HomePage.Layout = MyLayout;