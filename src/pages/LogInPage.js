import React from 'react';
import {Text, View} from 'react-native';
import firebase from 'firebase';
import {Button, Input, Page, PageSection,Spinner} from "../components/common";

class LogInPage extends React.Component
{
    state = {email: '',password:'',error:'',loading:false, loggedIn: false};
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
        const {email, password} = this.state;
        this.setState({error: '', loading: true});
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));
    }
    onLoginFail()
    {
        this.setState({error:'Authentication failed', loading:false});
    }
    onLoginSuccess()
    {
        this.setState({
            email:'',
            password:'',
            loading:false,
            error:''
        });
    }
    renderButton()
    {
        if (this.state.loading)
        {
            return <Spinner size="small"/>;
        }
        return(
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
            );
    }
    renderContent()
    {
        switch(this.state.loggedIn)
        {
            case true:
                return (<Button onPress={() => firebase.auth().signOut()}>Log out</Button>);
            case false:
                return ( <Page>
                    <PageSection>
                        <Input
                            placeholder="user@gmail.com"
                            label={"Email"}
                            value ={this.state.email}
                            onChangeText={email=>this.setState({email})}
                        />
                    </PageSection>

                    <PageSection>
                        <Input
                            secureTextEntry
                            placeholder="Password"
                            label="Password"
                            value={this.state.password}
                            onChangeText={password =>this.setState({password})}
                        />
                    </PageSection>
                    <Text style={styles.errorTextStyle}>
                        {this.state.error}
                    </Text>
                    <PageSection>
                        {this.renderButton()}
                    </PageSection>
                </Page>)
            default:
                return <Spinner size = "large"/>;
        }
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

export {LogInPage};