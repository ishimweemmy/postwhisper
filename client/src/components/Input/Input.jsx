/* eslint-disable react/prop-types */
const Input = ({ type, value, placeholder, icon, passIcon, handlePassCheck, handleChange, name }) => {
    return (
        <div className={`bg-white border-b border-black w-3/4 flex shadow-md py-1 sm:w-full md:w-9/12`}>
            <div className={`${icon && 'ml-12 sm:ml-0'}`}>
                {icon}
            </div>
            <input type={type} value={value} placeholder={placeholder} className={`border-none outline-none placeholder-black flex pl-24 ${icon && 'pl-8 sm:pl-[30px]'} sm:pl-12`} onChange={handleChange} name={name} required />
            <button className="border-none outline-none" onClick={handlePassCheck}>
                {passIcon}
            </button>
        </div>
    )
}
export default Input;