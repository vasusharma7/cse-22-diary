import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(87,76,56,0.5)',
  },
  heading: {
    color: '#fff',
  },
  image: {
    marginLeft: '15px',
  },
  footer:{
    width: '100%',
    bottom:0,
    marginTop: '30px',
    color:'white',
    backgroundColor:"rgb(0,0,0,0.5)"
  }
}));
