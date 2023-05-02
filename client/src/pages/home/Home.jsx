import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Quicklinks from '../../components/Quicklinks'
import Testimonials from '../../components/Testimonials/Testimonials';
import "../../App.css"


const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Testimonials />
            <Quicklinks />
            <Footer />

        </div>
    )

}
export default Home;