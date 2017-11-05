import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button, Input, Page, PageSection, Header} from "../components/common";

class RequestFormPage extends Component {
    render() {
        return(
            <Page
                style={{marginLeft: '10%', marginRight: '10%'}}
            >
                <Header
                 headerText = "Request Form"
                />
                <View
                    style={{flexDirection: 'row'}}
                >
                    <PageSection
                        style={{flex: 1, flexDirection: "column"}}
                    >
                        <Input label = "Full Name:"/>
                        <Input label = "CPP Email:"/>
                        <Input label = "Affiliation"/>
                        <Input label = "Event Name"/>
                        <Input label = "Event Location"/>
                        <Input label = "Room Number"/>
                    </PageSection>
                    <PageSection
                        style={{flex: 1}}
                    >
                        <Text>placeholder for date picker component</Text>
                    </PageSection>
                </View>
                <PageSection>
                    <Button>Submit</Button>
                </PageSection>


            </Page>
        );
    }
}

export {RequestFormPage};