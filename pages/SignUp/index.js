import classes from "../../styles/_auth.module.scss";
import StyledContainer from "@/components/UI/StyledContainer";
import { FaUser, FaUnlockAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Link from "next/link";
import MainButton from "@/components/UI/MainButton";
import { Formik, Form, useField } from "formik";

const TextInput = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className={classes.input}>
        <div className={classes.icon}>{props.icon}</div>
        <input className="text-input" {...field} {...props} />
      </div>
      {meta.touched && meta.error ? (
        <div className={classes.error}>{meta.error}</div>
      ) : null}
    </>
  );
};
const SignUp = () => {
  const validateHandler = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Required";
    } else if (values.firstName.length > 15) {
      errors.firstName = "Must be 15 characters or less";
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    } else if (values.lastName.length > 20) {
      errors.lastName = "Must be 20 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (!/^\w{1,65}@[a-zA-Z]+(\.\w{2,253})+$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 5) {
      errors.password = "password must be 5 characters or more";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Required";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "password does not match";
    }
    return errors;
  };
  const submitHandler = async (values, { resetForm }) => {
    const response = await fetch("/api/SignUp", {
      method: "POST",
      body: JSON.stringify({
        FirstName: values.firstName,
        LastName: values.lastName,
        Email: values.email,
        Password: values.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      resetForm();
    });
  };
  return (
    <section>
      <StyledContainer>
        <div className={classes.loginContainer}>
          <div className={classes.head}>
            <h1>sign up!</h1>
          </div>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validate={validateHandler}
            onSubmit={submitHandler}
          >
            {({ isSubmitting }) => (
              <Form className={classes.form}>
                <div className={classes.inputs}>
                  <TextInput
                    name="firstName"
                    type="text"
                    placeholder="first name"
                    icon={<FaUser />}
                  />
                  <TextInput
                    name="lastName"
                    type="text"
                    placeholder="last name"
                    icon={<FaUser />}
                  />
                  <TextInput
                    name="email"
                    type="text"
                    placeholder="email"
                    icon={<IoMail />}
                  />
                  <TextInput
                    name="password"
                    type="password"
                    placeholder="password"
                    icon={<FaUnlockAlt />}
                  />
                  <TextInput
                    name="confirmPassword"
                    type="password"
                    placeholder="confirm password"
                    icon={<FaUnlockAlt />}
                  />
                </div>
                <div className={classes.submit}>
                  <MainButton type="submit">
                    {isSubmitting ? "submitting..." : "sign up"}
                  </MainButton>
                </div>
              </Form>
            )}
          </Formik>
          <div className={classes.log}>
            <p>Already have an account?</p>
            <Link href="Login">sign in</Link>
          </div>
        </div>
      </StyledContainer>
    </section>
  );
};

export default SignUp;
