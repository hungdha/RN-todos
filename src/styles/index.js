/**
 * color default : #202646
 */
import {  StyleSheet,    Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const colorBgBase = '#202646';

export const fonts = {
    BIG: 20,
    NORMAL : 13,
    SMALL : 10
}
// COLOR
export const colors = {
    PRIMARY: '#202646',
    SECONDARY: '#000000',
}
// TYPOGRAPHY
const scalingFactors = {
    small: 40,
    normal: 30,
    big: 20,
}

export const fontSizes = {
    H1: {
        fontSize: width / scalingFactors.big,
        lineHeight: (width / scalingFactors.big) * 1.3,
    },
    P: {
        fontSize: width / scalingFactors.normal,
        lineHeight: (width / scalingFactors.normal) * 1.3,
    },
    SMALL: {
        fontSize: width / scalingFactors.small,
    }
}
// GLOBAL STYLES
export const globalStyles = {
    textHeader: {
        ...fontSizes.H1,
        color: colors.SECONDARY,
        paddingTop: 20,
        fontWeight: 'bold',
    },
    textLabel : {
        ...fontSizes.P,
        color: colors.SECONDARY,
        paddingTop: 10,
        fontWeight:'bold'

    },
    textNormal : {
        ...fontSizes.P,
        color: colors.SECONDARY,
        paddingTop: 10,
        fontWeight:'normal'
    },
    textSmall:{
        ...fontSizes.SMALL,
        color: colors.SECONDARY,
        paddingTop: 5,
        fontWeight: 'normal',
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0,
    },
    icon: {
        width: 24,
        height: 24,
    },
    viewPager: {
        flex: 1
    },
    pageStyle: {
        flex:1,
        paddingLeft:15, 
        paddingRight:15
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
    sectionFooter:{
        height: 50,
        backgroundColor: colors.PRIMARY,
        alignItems:'center',
        justifyContent:'center'
    },
    item: {
        // padding: 10,
        fontSize: 18,
        height: 44,
    },
    row: {
        width: width
    }
})

export default styles