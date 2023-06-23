export default function Container({ className, children }:any) {
    return (
        <div className={`max-w-[90%] md:max-w-[85%] lg:max-w-[80%] mx-auto ${className}`}>
            {children}
        </div>
    )
}