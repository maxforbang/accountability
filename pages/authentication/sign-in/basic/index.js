/**
=========================================================
* NextJS Material Dashboard 2 PRO - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-dashboard-pro
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import {useCallback, useEffect, useRef, useState} from "react";

import Link from "next/link";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";
import MDInput from "/components/MDInput";
import MDButton from "/components/MDButton";

// Authentication layout components
import BasicLayout from "/pagesComponents/authentication/components/BasicLayout";

// Images
import bgImage from "/assets/images/bg-sign-in-basic.jpeg";
import {fetcher} from "../../../../lib/fetch";
import {useRouter} from "next/router";
import {useCurrentUser} from "../../../../lib/user/hooks";

function Basic() {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const { data: { user } = {}, mutate, isValidating } = useCurrentUser();
  const router = useRouter();

  const onSubmit = useCallback(
      async (event) => {
        event.preventDefault();
        try {
          const response = await fetcher('/api/auth', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: emailRef.current.value,
              password: passwordRef.current.value,
            }),
          });
          mutate({ user: response.user }, false);
          //toast.success('You have been logged in.');
        } catch (e) {
          //toast.error('Incorrect email or password.');
        } finally {
        }
      },
      [mutate]
  );

  useEffect(() => {
    if (isValidating) return;
    if (user) router.replace('/dashboard/analytics');
  }, [user, router, isValidating]);

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="dark"
          borderRadius="lg"
          coloredShadow="dark"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Avengers Login
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox onSubmit={onSubmit} component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="email" label="Email" fullWidth inputRef={emailRef} />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Password" fullWidth inputRef={passwordRef} />
            </MDBox>
            {/*REMEMBER ME TOGGLE*/}
            <MDBox mt={4} mb={1}>
              <MDButton type='submit' variant="gradient" color="dark" fullWidth>
                sign in
              </MDButton>
            </MDBox>
            {/*SIGN UP*/}
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;


// const [rememberMe, setRememberMe] = useState(false);
// const handleSetRememberMe = () => setRememberMe(!rememberMe);
//
{/*REMEMBER ME TOGGLE*/}
{/*<MDBox display="flex" alignItems="center" ml={-1}>*/}
{/*  <Switch checked={rememberMe} onChange={handleSetRememberMe} />*/}
{/*  <MDTypography*/}
{/*    variant="button"*/}
{/*    fontWeight="regular"*/}
{/*    color="text"*/}
{/*    onClick={handleSetRememberMe}*/}
{/*    sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}*/}
{/*  >*/}
{/*    &nbsp;&nbsp;Remember me*/}
{/*  </MDTypography>*/}
{/*</MDBox>*/}


{/*SIGN UP*/}
{/*<MDBox mt={3} mb={1} textAlign="center">*/}
{/*  <MDTypography variant="button" color="text">*/}
{/*    Don&apos;t have an account?{" "}*/}
{/*    <Link href="/authentication/sign-up/cover">*/}
{/*      <a>*/}
{/*        <MDTypography*/}
{/*          variant="button"*/}
{/*          color="dark"*/}
{/*          fontWeight="medium"*/}
{/*          textGradient*/}
{/*        >*/}
{/*          Sign up*/}
{/*        </MDTypography>*/}
{/*      </a>*/}
{/*    </Link>*/}
{/*  </MDTypography>*/}
{/*</MDBox>*/}
