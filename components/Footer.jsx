import { Box } from "@chakra-ui/react";

const date = new Date()
const Footer = () => (
    <Box textAlign="center" p="5" color="grey.600" borderTop="1px" borderColor="grey.100" >
    {date.getFullYear()} Relator, Inc
    </Box>
)

export default Footer;