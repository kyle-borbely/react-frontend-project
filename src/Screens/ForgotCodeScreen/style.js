import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#EDF4F6',
  },
  enterCodeView: {
    backgroundColor: '#EDF4F6',
    paddingTop: 60,
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  backTouchable: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  entrCodedText: {
    color: '#10445C',
    fontSize: 18,
    fontWeight: '700',
    left: 10,
  },
  codeInputView: {
    flex: 1,
    backgroundColor: '#10445C',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 32,
    paddingHorizontal: 27,
  },
  verficationCodeText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    marginTop: 50,
    marginBottom: 30,
  },
  enterCodeText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '300',
    marginBottom: 0,
  },
  userEmailText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 30,
  },
  resendText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
    marginTop: 17,
    textDecorationLine: 'underline',
  },
  loginBtn: {
    width: '40%',
    backgroundColor: '#00a1e9',
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 30,
  },
  loginTxt: {fontSize: 20, color: 'white', fontWeight: 'bold'},
  codeFieldRoot: {marginTop: 20, width: '100%'},
  cell: {
    flex: 1,
    lineHeight: 38,
    fontSize: 28,
    color: '#fff',
    borderBottomWidth: 2,
    borderColor: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    paddingTop: 5,
    marginRight: 5,
    marginLeft: 5,
  },
  focusCell: {
    borderColor: '#fff',
    fontSize: 28,
    fontWeight: '600',
  },
  CodeWrapper: {
    shadowColor: '#fff',
    shadowRadius: 7,
    elevation: 5,
    paddingHorizontal: 20,
    paddingBottom: 25,
  },
  button: {
    backgroundColor: '#00a1e9',
    marginTop: 25,
    height: 52,
  },
});

export default styles;
