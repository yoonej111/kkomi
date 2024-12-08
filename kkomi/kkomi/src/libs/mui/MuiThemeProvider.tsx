'use client';

import { createTheme, ThemeProvider } from '@mui/material';

export default function MuiThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = createTheme({
    typography: {
      fontFamily: 'DungGeunMo, sans-serif',
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
