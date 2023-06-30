import { Group, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  footer: {
    textAlign: 'center',
    padding: theme.spacing.sm,
  }
}));


function Footer() {
  const { classes } = useStyles();
  return (
    <Group position='right'  >
    <footer className={classes.footer}data-testid="footer-test">Author: Reece Renninger </footer>
    </Group>
  )
}

export default Footer;