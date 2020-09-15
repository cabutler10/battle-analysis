import { createMuiTheme } from "@material-ui/core/styles";

// palette 1
const main = "#C06014";
const secondary = "#EDDBCD";
const support = "#CDCDCD";
const support2 = "#000";

//pallette 2
// const main = "#1E392A";
// const secondary = "#3CC47C";
// const support = "#E9C893";
// const support2 = "#828081";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: main,
    },
    secondary: {
      main: support,
    },
  },
  status: {
    support: secondary,
    support2: support2,
  },
});

export default theme;
