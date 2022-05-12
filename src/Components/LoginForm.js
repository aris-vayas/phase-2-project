import { Stack, TextField, Button, Typography } from "@mui/material";
import { Formik, Form, Field } from "formik";

const LoginForm = () => {
  return (
    <div className="form">
      <Typography variant="h2" color="black" align="center" paddingBottom={3}>
        Sign Up
      </Typography>
      <Formik>
        {() => (
          <Form>
            <Stack>
              <Field
                component={TextField}
                variant="filled"
                name="First Name"
                label="First Name"
                required
              />
              <Field
                component={TextField}
                variant="filled"
                name="Last Name"
                label="Last Name"
                required
              />
              <Field
                component={TextField}
                variant="filled"
                name="email"
                label="Email"
                type="email"
                required
              />
              <Field
                component={TextField}
                variant="filled"
                name="username"
                label="Username"
                required
              />
              <Field
                component={TextField}
                variant="filled"
                name="password"
                label="Password"
                type="password"
                required
              />
              <Field
                component={TextField}
                variant="filled"
                name="password"
                label="Confrim Password"
                type="password"
                required
              />
              <Stack>
                <Button variant="contained">Sign Up</Button>
              </Stack>
            </Stack>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
