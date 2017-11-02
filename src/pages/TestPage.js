import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button, Spinner, Input, Page, PageSection} from "../components/common";

class TestPage extends Component {
    render() {
        return(
            <Page
                style={{marginLeft: '10%', marginRight: '10%'}}
            >
                <PageSection>
                    <Text>
                        This is a page section
                    </Text>
                </PageSection>
                <View
                    style={{flexDirection: 'row'}}
                >
                    <PageSection
                        style={{flex:2}}
                    >
                        <Input
                            label = "sample"
                            placeholder = "sample"
                        />
                        <Input
                            label = "sample"
                            placeholder = "sample"
                        />
                    </PageSection>
                    <PageSection
                        style={{flex:1}}
                    >
                        <Text>Text</Text>
                    </PageSection>
                </View>
            </Page>
        );
    }
}

export {TestPage};