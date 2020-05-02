import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  basketItem: {
    flexDirection: 'row',
    padding: 10,
    shadowColor: 'black',
    elevation: 5,
    marginBottom: 8,
    marginTop: 4,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    maxHeight: 150,
  },
  wrapItem: {
    alignContent: 'center',
    backgroundColor: 'red',
    borderRadius: 8,
    height: 100,
    width: 100,
    marginRight: 5,
  },

  imageItem: {
    width: '100%',
    height: '100%',
  },
  wrap: {
    maxWidth: 200,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleItem: {
    marginRight: 50,
    fontSize: 13,
    lineHeight: 24,
    width: '100%',
    fontWeight: 'bold',
    maxWidth: 135,
  },
  circleIcon: {
    borderWidth: 1,
    borderColor: '#8A8A8A',
    borderRadius: 100,
    height: 15,
  },
  removeIcon: {
    marginTop: 1,
  },
  priceItem: {
    marginRight: 60,
    fontSize: 12,
    lineHeight: 30,
    color: '#E60014',
    fontWeight: 'bold',
    maxWidth: 130,
  },
  amountItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E9E9E9',
    marginTop: 15,
    borderRadius: 5,
    width: 90,
    height: 25,
    paddingLeft: 8,
  },
  unitItem: {
    color: '#E60014',
    marginLeft: 5,
    marginRight: 5,
  },
});
