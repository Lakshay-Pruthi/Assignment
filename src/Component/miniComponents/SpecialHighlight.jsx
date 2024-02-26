import blueTick from '../../assets/blueTick.svg'

function SpecialHighlight() {
    return (
        <>
            <div id="specialHighlight">
                <p><span className="discountTag">9.9</span><span>Building Responsive</span></p>
                <p><span className="discountTag">8.9</span><img src="" alt="" /><span>Cool</span></p>
                <p><span className="discountTag">8.9</span><span>Docs</span></p>
            </div>
            <p>Why we love it</p>
            <p className='sort'><img width={20} src={blueTick} alt="" /><span>Documentation</span></p>
            <p className='sort'><img width={20} src={blueTick} alt="" /><span>Easy use</span></p>
            <p className='sort'><img width={20} src={blueTick} alt="" /><span>Out of box</span></p>
        </>
    )
}
export default SpecialHighlight;