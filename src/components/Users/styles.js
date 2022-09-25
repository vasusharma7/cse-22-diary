import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    alignItems: "center",
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: "center",
  },
  main: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
    rowGap: "20px",
    marginBottom: '4%',
  },
  search: {
    width: "75%",
    backgroundColor:'white',
  },
}));
