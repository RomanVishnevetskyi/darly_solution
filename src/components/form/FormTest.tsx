import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import * as yup from 'yup';
import {Formik} from 'formik';
import {useAppDispatch} from "../../hooks/redux";
import {addUserFromForm} from "../../store/reducers/ActionCreator";


const schema = yup.object().shape({
    firstname: yup.string()
        .min(2, "*FirstName must have at least 2 characters")
        .max(15, "*FirstName can't be longer than 15 characters")
        .matches(/^(.*)?\S+(.*)?$/, 'not empty')
        .trim()
        .required("*FirstName is required"),
    lastname: yup.string()
        .min(2, "*Names must have at least 2 characters")
        .max(15, "*LastName can't be longer than 15 characters")
        .trim()
        .required("*LastName is required"),
    username: yup.string()
        .min(2, "*Names must have at least 2 characters")
        .max(15, "*LastName can't be longer than 15 characters")
        .trim()
        .required("*LastName is required"),
    email: yup.string()
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, 'Enter right email')
        .required(),
    city: yup.string()
        .min(2, "*Names must have at least 2 characters")
        .max(15, "*LastName can't be longer than 15 characters")
        .trim()
        .required("*LastName is required"),
});

function FormTest() {
    const dispatch = useAppDispatch();

    return (
        <Formik
            validationSchema={schema}
            onSubmit={(values) => {
                console.log(values)
                dispatch(addUserFromForm(values))

            }}
            initialValues={{
                firstname: '',
                lastname: '',
                username: '',
                email: '',
                city: '',
            }}
        >
            {({
                  handleSubmit,
                  handleChange,
                  handleBlur,
                  values,
                  touched,
                  isValid,
                  errors,
              }) => (
                <Form noValidate onSubmit={handleSubmit}
                      className="d-flex flex-column justify-content-between align-items-center bg">

                    <Form.Group as={Col} md="6" className="mb-2" controlId="validationFormik01">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            type="text"
                            name="firstname"
                            placeholder="..."
                            value={values.firstname}
                            onChange={handleChange}
                            isInvalid={!!errors.firstname}
                        />
                        <Form.Control.Feedback type="invalid">{errors.firstname}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" className="mb-2" controlId="validationFormik02">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            type="text"
                            name="lastname"
                            placeholder="..."
                            value={values.lastname}
                            onChange={handleChange}
                            isInvalid={!!errors.lastname}
                        />
                        <Form.Control.Feedback type="invalid">{errors.lastname}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="6" className="mb-2" controlId="validationFormik02">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="username"
                            placeholder="..."
                            value={values.username}
                            onChange={handleChange}
                            isInvalid={!!errors.username}
                        />
                        <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="6" className="mb-2 d-f" controlId="validationFormikEmail">
                        <Form.Label>Email</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                                type="text"
                                placeholder="..."
                                aria-describedby="inputGroupPrepend"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
                                isInvalid={!!errors.email}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>


                    <Form.Group as={Col} md="6" className="mb-2" controlId="validationFormik03">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type="text"
                            name="city"
                            placeholder="..."
                            value={values.city}
                            onChange={handleChange}
                            isInvalid={!!errors.city}
                        />

                        <Form.Control.Feedback type="invalid">
                            {errors.city}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button type="submit">Submit form</Button>
                </Form>
            )}
        </Formik>
    );
}

export default FormTest;