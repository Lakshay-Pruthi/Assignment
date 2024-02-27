import diamond from '../../assets/diamond.svg'

function Tag(props) {
    const { text } = props;
    return (
        <>
            <div className="tag">
                <img src={diamond} alt="" />
                <p>&nbsp;{text}</p>
            </div>
        </>
    )
}

export default Tag;