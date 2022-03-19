import { Box, Flex ,Select} from "@chakra-ui/react"
import { useState } from "react"
import { filterData, getFilterValues} from "../utils/filterData"
import router  from "next/router"

const SearchFilters = () => {
 const [filters,setFilters] = useState(filterData)
 const searchProperties = (filterValues) =>{
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filterValues)

    values.forEach((item) => {
      if(item.value && filterValues?.[item.name]) {
        query[item.name] = item.value
      }
    })

    router.push({ pathname: path, query: query });

 }
    return (
       <Flex bg="gray.100" p="5" justifyContent="center" flexWrap='wrap'>
{/* mapping of filters like purpose,baths etc */}
        {filters.map((filter) => (
            <Box key={filter.queryName}>
               <Select
               placholder= {filter.placeholder}
               w="fit-content"
               p="2"
               onChange={(e) => searchProperties({[filter.queryName]:e.target.value})} 
               placeholder = {filter.placeholder} 
               >
{/* mapping of indivisual items inside each filter */}
                  {filter ?. items ?. map((item) => (
                      <option key={item.value} value = {item.value}>
                        {item.name}
                      </option>
                  ))}
               </Select>
            </Box>
        ))}
       </Flex>
    )
}

export default SearchFilters