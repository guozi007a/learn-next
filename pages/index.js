import LinkButton from '../components/linkButton';

const Home = () => {
    return <>
        <h3>Welcome to nextjs !</h3>
        <LinkButton href='/about' text='To About Page' />
        <LinkButton href='/list' text='To List Page' />
    </>
}

export default Home;