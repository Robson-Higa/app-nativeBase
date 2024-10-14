
import { Box, Image } from "native-base"

export default function Contents ({ data }) {
    return (
        <Box flex={1} marginBottom={4} padding={2} borderRadius={2}>
          <Box
          padding="0.5"
          borderRadius={32}
            bg= {{
                
                linearGradient: {
                    colors: [ "lightBlue.300", "violet.800"]
                }
            }}
          >
             <Image 
                source={{ uri: data.medium }}
                width={16}
                height={16}
                borderRadius={32}
                alt="Avatar"
           />
          </Box>
        </Box>
    )
}