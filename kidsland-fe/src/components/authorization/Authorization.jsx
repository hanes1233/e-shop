import { Button } from "react-bootstrap";
import '../../css/Authorization.css';

function Authorization(props) {

    const onLogin = props.onLogin;

    return (
        <div className="authorization-container">
            <Button
                variant="primary-bg-subtle"
                size="md"
                className="me-2"
                style={{ backgroundColor: 'var(--bs-primary-bg-subtle)' }}
                active
                onClick={onLogin}
            >
                Log in
            </Button>
            <Button
                variant="success"
                size="md"
                style={{ backgroundColor: 'var(--bs-danger-bg-subtle)', color: 'black' }}
                active
            >
                Sign in
            </Button>
        </div>
    )
}

export default Authorization;