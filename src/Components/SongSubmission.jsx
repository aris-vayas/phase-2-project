import { Stack, TextField, Button } from "@mui/material";
import { Formik, Form, Field } from "formik";

const SongSubmission = ({ getMusic }) => {
  const initalValue = {
    title: "",
    thumbnail: "",
    songlink: "",
    creator: "",
    genre: "",
    video: "",
  };

  const handleFormikSubmit = (values, formikHelpers) => {
    fetch("http://localhost:3001/music", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(values),
    }).then(() => getMusic());
    formikHelpers.resetForm();
  };

  return (
    <div className="form">
      <Formik initialValues={initalValue} onSubmit={handleFormikSubmit}>
        {() => (
          <Form>
            <Stack direction="column">
              <Field
                component={TextField}
                variant="filled"
                label="Artist"
                name="creator"
                helperText="Enter Artist Name"
                required
              />
              <Field
                component={TextField}
                variant="filled"
                label="Song"
                name="title"
                helperText="Enter Song Name"
                required
              />
              <Field
                component={TextField}
                variant="filled"
                label="Mp3"
                name="songlink"
                helperText="Enter Mp3 Link"
                required
              />
              <Field
                component={TextField}
                variant="filled"
                label="Video"
                name="video"
                helperText="Enter Video Link"
                required
              />
              <Field
                component={TextField}
                variant="filled"
                label="Image"
                name="thumbnail"
                helperText="Enter Image Link"
                required
              />
              <Stack>
                <Button variant="contained" type="submit">
                  Submut
                </Button>
              </Stack>
            </Stack>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SongSubmission;
