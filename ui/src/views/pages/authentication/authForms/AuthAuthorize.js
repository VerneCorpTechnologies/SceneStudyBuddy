import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  OutlinedInput,
  useMediaQuery
} from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';
import AnimateButton from 'components/extended/AnimateButton';

// ===========================|| AUTHORIZE ||=========================== //

const AuthAuthorize = ({ username, ...Others }) => {

  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

  // success message from lambda
  const [successMessage, setSuccessMessage] = useState(null);

  // AWS Cognito Variables
  const [formData, setFormData] = useState({
    username: username,
    verificationCode: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ alignItems: 'center', display: 'flex' }}>
             <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
             <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
          </Box>
         </Grid>
         <Grid item xs={12} container alignItems="center" justifyContent="center">
       </Grid>
       </Grid>
      <Formik
        initialValues={{
          verificationCode: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          verificationCode: Yup.string().min(6, 'Verification code must be at least 6 characters').max(6).required('Cannot be empty')
        })}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate {...Others}>
            <Grid container spacing={matchDownSM ? 0 : 2}>
            <Grid item xs={12} sm={12}>
                <FormControl fullWidth error={Boolean(touched.verificationCode && errors.verificationCode)} sx={{ ...theme.typography.customInput }}>
                <InputLabel htmlFor="outlined-adornment-verificationCode-register">Verification Code</InputLabel>
                <OutlinedInput
                    sx={{
                      fontSize: '20px',
                  }}
                    type="text"
                    value={values.verificationCode}
                    name="verificationCode"
                    onBlur={handleBlur}
                    onChange={(e) => {
                        if (e.target.value.length <= 6) {
                            handleChange(e); 
                            handleInputChange(e);
                          }
                    }}
                    inputProps={{
                        maxLength: 6,
                    }}
                />
                {touched.verificationCode && errors.verificationCode && (
                    <FormHelperText error id="standard-weight-helper-text--register">
                    {errors.verificationCode}
                    </FormHelperText>
                )}
                </FormControl>
              </Grid>
            </Grid>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
              </Grid>
            </Grid>
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}
            <Box sx={{ mt: 2 }}>
              <AnimateButton>
              <Button
                disableElevation
                disabled={values.verificationCode.length !== 6}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                color="secondary"
                >
                  Submit
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
      {/* {successMessage && (
        <div className="success-message">
          {successMessage}
        </div>
      )} */}
    </>
  );
};

export default AuthAuthorize;