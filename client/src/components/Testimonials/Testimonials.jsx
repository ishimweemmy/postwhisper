import { utils } from "../../data";
import TestimonyCard from "./TestimonyCard";

const Testimonials = () => {
    return (
        <div className="w-2/3 mx-auto space-y-12">
            {utils.map((util) => {
                return (
                    <TestimonyCard key={util.id} image={util.image} title={util.title} description={util.description} id={util.id} />
                )
            })}
        </div>
    )

}
export default Testimonials;