
export default function Button({text, style, onClick}) {
    
    return (
        <>
            <button onClick={onClick} className={`py-2 px-3 lg:px-5 bg-[#FF8000] rounded-md text-sm  ${style}`}>
                {text}
            </button>
        </>
    )

}