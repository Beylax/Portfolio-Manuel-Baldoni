export interface IBlob {
    width: string
    height: string
    top: string
    bottom: string
    left: string
    right: string
    background: string
    blur: string
    opacity: number
    origin: string
    animation?: "spin" | "ping" | "pulse" | "bounce"
}

export default function Blob(props: IBlob) {
    return (
        <div
            className={`absolute rounded-full animate-${props?.animation}`}
            style={{
                width: props?.width,
                height: props?.height,
                top: props?.top,
                bottom: props?.bottom,
                left: props?.left,
                right: props?.right,
                background: props?.background,
                WebkitFilter: props?.blur,
                filter: props?.blur,
                opacity: props?.opacity,
                transformOrigin: props?.origin,
                zIndex: -1
            }}
        >
        </div>
    )
}