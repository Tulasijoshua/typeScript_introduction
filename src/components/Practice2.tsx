type Practice2Props = {
    children: string
}

const Practice2 = (props: Practice2Props) => {
    return (
        <div>
            <h2>{props.children}</h2>
        </div>
    )
}

export default Practice2