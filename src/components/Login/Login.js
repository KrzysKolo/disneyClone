import React from 'react';
//STYLED
import { LoginWrapper, Content, CTAlogoOne, CTAlogoTwo, Description, SignUp } from './Login.css';
import { Container } from './../components.css';
//FILES
import logo1 from './../../assets/images/cta-logo-one.svg';
import logo2 from './../../assets/images/cta-logo-two.png';

const Login = () => {
  return (
    <LoginWrapper>
      <Content>
        <CTAlogoOne src={logo1} alt="logo1" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
                Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
        </Description>
        <CTAlogoTwo src={logo2} alt="logo2" />

      </Content>
    </LoginWrapper>
  )
}

export default Login;
