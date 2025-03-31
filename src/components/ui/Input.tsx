interface InputProps{
    placeholder: string;
    reference?: any;
}

export const Input = ({reference, placeholder}: InputProps) => {
    return <div>
        <input ref={reference} placeholder={placeholder}  type="text" className="px-4 py-2 outline-0 border border-gray-300 rounded mb-4" />
    </div>
}