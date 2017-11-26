import React from 'react';
import {connect} from 'react-redux';
import {Text, View} from 'react-native';
import firebase from 'firebase';
import {Button, Input, Page, PageSection,Spinner} from "../components/common";
import {loginUser,emailChanged,passwordChanged} from '../actions';

class LogInPage extends React.Component
{
   onEmailChange(text)
   {this.props.emailChanged(text);}
   onPasswordChange(text)
   {this.props.passwordChanged(text);}
    componentWillMount()
    {
        firebase.initializeApp({
            apiKey: "AIzaSyAV7F9R3v8U6wwkIPo0Dj4SwNRfiIAaFX4",
            authDomain: "cs461-55f84.firebaseapp.com",
            databaseURL: "https://cs461-55f84.firebaseio.com",
            projectId: "cs461-55f84",
            storageBucket: "cs461-55f84.appspot.com",
            messagingSenderId: "308423423246"
        });
        firebase.auth().onAuthStateChanged((user)=>{
            if(user) {this.setState({loggedIn:true});}
            else {this.setState({loggedIn:false});}
        });
    }
    onButtonPress()
    {
        const {email, password} = this.props;
        this.props.loginUser({email,password});
        this.setState({error: '', loading: true});
    }
    renderButton()
    {
        if (this.props.loading)
        {
            return <Spinner size="large"/>;
        }
        return(
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
            );
    }
    renderContent()
    {
        return (
            <Page>
            <PageSection>
                <Input
                    placeholder="user@gmail.com"
                    label={"Email"}
                    value ={this.props.email}
                    onChangeText={this.onEmailChange.bind(this)}
                />
            </PageSection>
            <PageSection>
                <Input
                    secureTextEntry
                    placeholder="Password"
                    label="Password"
                    value={this.props.password}
                    onChangeText={this.onPasswordChange(this)}
                />
            </PageSection>
            <Text style={styles.errorTextStyle}>
                {this.props.error}
            </Text>
            <PageSection>
                {this.renderButton()}
            </PageSection>
            </Page>)
    }
    render() {
        return (
           this.renderContent()
        );
    }
}
const styles={
    errorTextStyle:{
        fontSize:20,
        alignSelf:'center',
        color:'red'
    }
};
const mapStateToProps=({auth}) => {
    const {email,password,error,loading} = auth;
    return {email,password,error,loading};
};

export default connect(mapStateToProps,{emailChanged,passwordChanged,loginUser})(LogInPage);