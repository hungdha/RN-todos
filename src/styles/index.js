import { 
    StyleSheet,
    Dimensions } from 'react-native';
var mWidth = Dimensions.get('window').width; //full width
var mHeight = Dimensions.get('window').height; //full height
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: 24,
        height: 24,
    },
    viewPager: {
        flex: 1
    },
    pageStyle: {
        flex:1
    },
    StyleImageDemo:{
        width: 104,
        height: 104,
    },
    logo:{
        width: 30,
        height: 30,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        // padding: 10,
        fontSize: 18,
        height: 44,
    },
    row: {
        width: mWidth
    }
})

export default styles