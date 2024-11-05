import './containInputLabelStyle.scss'
interface IProps {
    children: React.ReactNode
}


export const ContainInputLabel = ({ children }: IProps) => {
    return (
        <div className="container-input-label">
            {children}
        </div>
    )
}
