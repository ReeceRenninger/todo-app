import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  footer: {
    textAlign: 'right',
  }
}));


function Footer() {
  const { classes } = useStyles();
  return (
    <footer className={classes.footer}data-testid="footer-test">Author: Reece Renninger </footer>
  )
}

export default Footer;