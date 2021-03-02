import PropTypes from 'prop-types'


const Welcome = ({ name }) => {
    return (
        <div>
            <header>
                <h1>Hi, I'm {name}</h1>
            </header>
        </div>
    )
}

Welcome.defaultProps = {
    name: "Dan Aument",
}

Welcome.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Welcome
