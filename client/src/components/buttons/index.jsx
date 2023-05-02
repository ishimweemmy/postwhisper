/* eslint-disable react/prop-types */
const Button = ({name,handleClick,icon,className})=>{
    return(
        <button onClick={handleClick} className={`flex gap-3 py-3 px-7 items-center text-lg md:text-2xl rounded-md border-primary font-semibold ${className}`}>{icon}{name}</button>
    )

}
export default Button;