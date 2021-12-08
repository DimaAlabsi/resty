import {VStack, Box,Container, Heading } from '@chakra-ui/react';
export function History(props) {

    const historySearching= async(e)=>{
        const obj={
          url: e.obj.url,
          
          method:e.obj.method,
         
          reqBody:e.obj.reqBody
        }
       await props.handleApiCall(obj)
    }
    return (
        <>
        <VStack>
    <Container maxW='xl' centerContent>
    <Box bg='dark' w='100%' p={4} color='black'>
    <Heading size='lg' fontSize='50px'> Searching History</Heading>
    { props.history.map((e) => {
      return (
        <div >
         <Heading size='lg' fontSize='30px'>
         Method 🚫  {e.obj.method} 
</Heading>
       
        
<Heading size='lg' fontSize='20px'>
          URL  🚶‍♂️ {e.obj.url}
          </Heading>
            
        </div>
      );
    })
    }
   </Box>
    </Container>
    </VStack>
    </>
    )
  }