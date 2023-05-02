import { links } from "../data";
const Quicklinks = () => {
    return (
        <div className="w-2/3 flex grid grid-cols-3 mx-auto space-y-12 items-baseline">
            {links.map((link, index) => {
                return (
                    <div key={index} className="flex items-baseline gap-12">

                        <div className="text-3xl text-gray-400">{link.icon}</div>
                        <div className="text-gray-400 text-xl">{link.name}</div>
                    </div> 
                )
            })}
        </div>
    )

}
export default Quicklinks;