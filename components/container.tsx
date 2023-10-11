export default function Container({ className, children }:any) {
    return (
        <div className={`w-[90%] lg:w-[85%] max-w-[1400px] mx-auto ${className}`}>
            {children}
        </div>
    )
}