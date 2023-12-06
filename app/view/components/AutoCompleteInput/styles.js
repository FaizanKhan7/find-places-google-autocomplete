import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    marginTop: 10,
    position: 'absolute',
    marginHorizontal: 16,
  },
  inputContainer: {
    height: 44,
  },
  searchBox: {
    flex: 1,
    fontSize: 18,
    color: '#000',
    backgroundColor: '#EEEEEE',
    textAlign: 'left',
  },
  searchListContainer: {
    borderColor: 'rgba(0, 0, 0, 0.15)',
    borderWidth: 1,
    backgroundColor: '#fff',
    marginTop: 6,
    marginBottom: 16,
    borderRadius: 6,
  },
  searchItemConatiner: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchTitleText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 16,
    textAlign: 'left',
    paddingHorizontal: 7,
  },
});
export default styles;
