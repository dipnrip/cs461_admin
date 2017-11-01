PROJECT STRUCTURE
common
components that look like will see reuse
- componentContainer
- eventDataStream
- eventItem
- button
- textInput
- profile

landing page
components/reducers that seem present on the landing page
- titleBar
- calendar
- eventStream
- eventItem
- button (request form)
- link (about us)
- link (admin login)

admin page
component/reducers that seem present on the admin page
- textInput (user)
- textInput (password)
- button (login)
- loginAuth reducer

management page
components/reducers that seem present on the management page
- filter
- eventDataStream
- eventItem
- eventDetails
- event change reducer

about is
components/reducers that seem present on the about us page
- profile


ADDITIONAL LIBRARIES


SET UP
Instructions on getting this repo to work once cloned

Run the following commands or do the following:

Add React Native components
$ yarn add react-native

To make React Native components work on ReactJS, run the following commands using npm or yarn. See https://github.com/necolas/react-native-web for reference.
$ yarn add react react-dom react-native-web

Add Firebase using NPM or Yarn
$ yarn add firebase
