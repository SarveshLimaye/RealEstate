import Link from "next/link"
import Image from "next/image"
import { Box, Flex,Text, } from "@chakra-ui/react"
import  {Avatar} from '@chakra-ui/avatar';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';


const Property = ({property : {coverPhoto,area,price,rentFrequency,rooms,title,baths,agency,isVerified,externalId}}) => {
   return (
   <Link href={`/property/${externalId}`} passHref>
    <Flex flexWrap="wrap" width="420px" p="5" paddingTop="0" justifyContent="flex-start" cursor="pointer" >
    <Box>
    <Image src={coverPhoto.url} width="420px" height="300px" alt="property"/>
    </Box>
    <Box w="full">
     <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
      <Flex alignItems="center">
      <Box paddingRight='3' color='green.400'>{isVerified && <GoVerified />}</Box>
            <Text fontWeight='bold' fontSize='lg'>AED {millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
      </Flex>
      <Box>
        <Avatar src={agency?.logo?.url} size="sm" />
      </Box>
     </Flex>
     <Flex alignItems="center" p= "1" justifyContent="space-between" w="250px" color="blue.400">
       {rooms}
       <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
     </Flex>
     <Text>
         {title.length > 30 ? `${title.substring(0, 30)}...`  : title}
     </Text>
    </Box>
    </Flex>
    </Link>)
}

export default Property