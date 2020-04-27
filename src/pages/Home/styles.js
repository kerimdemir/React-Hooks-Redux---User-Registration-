import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../themes';
const styles = StyleSheet.create({

  imageContainer: {
    alignItems: 'center',
  },

  image: {
    width: 50, height: 50, resizeMode: 'contain', borderWidth: 1,borderColor:Colors.GRAY, borderRadius: 50/2
  },
  nameText: {
    fontFamily: Fonts.type.bold,

  },
  complaintContainer: {
    flexDirection: 'row'
  },
  complaintView: {
    alignItems: 'center',
    justifyContent: 'center',

    flex: 1, height: 55, flexDirection: 'row', backgroundColor: Colors.GREEN, margin: 10,
    borderRadius: 4,
  },
  complaintText: {
    marginLeft: 15,
    textAlign: 'left',
    color: 'white',
    fontFamily: Fonts.type.bold
  },
  newMessageView: {
    justifyContent: 'center',
    height: 60, margin: 10,marginBottom:15

  },
  newMessageImgStyle: {

    borderRadius: 4,
  },
  newMessageTitle: {
    marginLeft: 15,
    textAlign: 'left',
    color: 'white',
    fontFamily: Fonts.type.bold
  },
  newMessageSubTitle: {
    marginRight: 15,
    textAlign: 'right',
    color: Colors.GREEN,
    fontFamily: Fonts.type.bold
  },

  recentMovesContainer: {
    marginTop: 10,
    padding:10,
  },
  recentMovesHeaderText: {
    color: Colors.GRAY,
    fontFamily: Fonts.type.black,
    letterSpacing: 0.2
  },
  recentMovesView: {
    height: 'auto',
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    marginBottom: 10,
    borderColor: Colors.CARD_BORDER,
    flexDirection: 'row'
  },
  recentMovesCompanyText: {

    color: Colors.GRAY,
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.small
  },
  recentMovesCommandTitle: {

    color: Colors.TEMPLATE_COLOR,
    fontFamily: Fonts.type.black,
    fontSize: Fonts.size.regular
  },
  recentMovesCommandBody: {

    color: Colors.TEMPLATE_COLOR,
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.medium
  },

  recentMovesCommandDate: {

    marginTop: 15,
    color: Colors.GRAY,
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.medium
  },

  showMoreView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'

  },
  showMoreText: {
    color: Colors.TEMPLATE_COLOR,
    letterSpacing: 0.3,
    fontFamily: Fonts.type.bold
  },

  complaintStatisticsView: {
    borderWidth: 1, borderRadius: 4, margin: 10, padding: 10
  },
  complaintStatisticsText: {

    color:Colors.TEMPLATE_COLOR,
    textAlign:'center',


  },

  bottomContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    width: '100%',
    backgroundColor: '#36C052',
    height: 60,


  },
  bottomText: {
    color: 'white',
    fontSize: Fonts.size.small,
    textAlign: 'center',
    fontFamily: Fonts.type.semi_bold
  }
});
export default styles;
