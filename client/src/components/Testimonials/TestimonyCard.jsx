// eslint-disable-next-line react/prop-types
const TestimonyCard = ({ image, title, description,id }) => {
    return (
        <div className={`w-full flex border-b border-gray-100 gap-12 py-4 ${id %2 == 0 && 'flex-row-reverse'}`}>
            {/* image location */}
            <div className="basis-1/3">
            <div className="w-44 h-44 rounded-full border-4 border-gray-100  ">
                <img src={image} alt="image" className="w-44 h-44 rounded-full" />
            </div>
            </div>
            <div className="basis-2/3 space-y-6" >
                <h1 className="text-xl text-gray-400">{title}</h1>
                <p className="text-gray-400">{description}</p>
            </div>
        </div>
    )
}

export default TestimonyCard;