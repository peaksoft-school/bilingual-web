import { createTheme } from '@mui/material'

export const theme = createTheme({
   components: {
      MuiButton: {
         variants: [
            {
               props: { line: 'bold' },
               style: {
                  fontWeight: 'bold',
                  border: `2.5px solid `,
               },
            },
         ],
      },
   },
   palette: {
      primary: {
         main: '#3A10E5',
      },

      secondary: {
         main: '#41994d',
      },
      inherit: {
         main: '#4C4C4C',
      },
   },

   shape: {
      borderRadius: 8,
   },
})
