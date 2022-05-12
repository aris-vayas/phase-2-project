import { Stack, TextField, Button } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { object, string } from "yup";
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
      <Formik
        initialValues={initalValue}
        onSubmit={handleFormikSubmit}
        validationSchema={object({
          title: string()
            .required("Please enter song name")
            .min(3, "Enter A Song Name"),
          thumbnail: string().required("Please enter a image"),
          songlink: string().required("Please enter a Mp3 Link"),
          creator: string().required("Please enter artist name"),
          video: string().required("Please enter a video link"),
        })}
      >
        {({ errors, isValid, touched, dirty }) => (
          <Form>
            <Stack direction="column">
              <Field
                name="creator"
                type="text"
                component={TextField}
                variant="outlined"
                color="success"
                label="Artist"
                // fullWidth
                error={Boolean(errors.creator) && Boolean(touched.creator)}
                helperText={Boolean(touched.creator) && Boolean(errors.creator)}
              />
              <Field
                component={TextField}
                variant="outlined"
                label="Song"
                name="title"
                helperText="Enter Song Name"
                required
              />
              <Field
                component={TextField}
                variant="outlined"
                label="Mp3"
                name="songlink"
                helperText="Enter Mp3 Link"
                required
              />
              <Field
                component={TextField}
                variant="outlined"
                label="Video"
                name="video"
                helperText="Enter Video Link"
                required
              />
              <Field
                component={TextField}
                variant="outlined"
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
