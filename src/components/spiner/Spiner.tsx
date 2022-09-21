import Spinner from 'react-bootstrap/Spinner';

function Spiner() {
    return (
        <div className="spiner d-flex flex-column">
            <Spinner animation="border" role="status" variant="primary">
            </Spinner>
        </div>
    );
}

export default Spiner;