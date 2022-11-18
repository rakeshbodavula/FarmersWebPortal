import {
  Box,
  Image,
  Text,
  Link,
  HStack,
  Heading,
  Switch,
  useColorMode,
  VStack,
  Input,
  Divider,
  ScrollView,
  Badge,
  Pressable,
  Button,
  TextArea,
  useToast
} from "native-base";

import { NativeBaseProvider, extendTheme } from 'native-base';

import { useState } from "react";
// import { Link } from "react-router-dom";

// const config = {
//   useSystemColorMode: false,
//   initialColorMode: 'dark',
// };
// const customTheme = extendTheme({ config });


// const config = {
//   dependencies: {
//     'linear-gradient': LinearGradient
//   }
// };


const messages = [
    {
        "username": "alex",
        "message": "Hii there, can any one help me with finding best paddy seeds..",
        "timestamp": "08:30"
    },
    {
        "username": "mike",
        "message": "hello @alex, I used Pioneer's pady seeds (prod id 2) they are pretty good.. try it out..",
        "timestamp": "08:32"
    },
    {
        "username": "david",
        "message": "Can any one suggest crop for low level water resource...?",
        "timestamp": "08:48"
    },
    {
        "username": "alex",
        "message": "Thank you @mike",
        "timestamp": "08:52"
    },
    {
        "username": "alex",
        "message": "@david checkout crops page, where you can get details about a ton of crops..",
        "timestamp": "08:53"
    },
    {
        "username": "karen",
        "message": "Hello everyone, nice to have this open chat....",
        "timestamp": "09:12"
    },
    {
        "username": "david",
        "message": "thanks @alex, I got few crops added to my list and I will finalize..",
        "timestamp": "09:32"
    },
    {
        "username": "alex",
        "message": "No mentions david, always welcome..",
        "timestamp": "09:46"
    },
    {
        "username": "alex",
        "message": "If anyone are interested, join us https://meet.google.com/mnd-tpqm-gbb (meet about crop disasters) at 11:00",
        "timestamp": "09:48"
    },
    {
        "username": "rolex",
        "message": "@alex, I am in........!",
        "timestamp": "10:04"
    },
    {
        "username": "alex",
        "message": "Ready for meetup???",
        "timestamp": "10:50"
    }
]

function Discussions() {
    const { colorMode } = useColorMode();
    const toast = useToast();

    const [messgData, setMessgData] = useState(messages);
    const [currMessage, setCurrMessage] = useState("");

    const currUserName = "akhil";

    const handleSendMessage = () => {
        let date = new Date()
        let hours = date.getHours()
        let minutes = date.getMinutes()
        if (hours < 10){ hours = "0" + hours }
        if (minutes < 10){ minutes = "0" + minutes }
        let timeStamp = "";
        timeStamp += hours + ":" + minutes
        // if (currMessage.trim() == ""){
        //     const toast = useToast();
        //     toast.show({
        //         description: "Enter message..!"
        //     })
        //     return
        // }
        setMessgData([
            ...messgData,
            {
                "username": currUserName,
                "message": currMessage,
                "timestamp": timeStamp
            }
        ])
        setCurrMessage("")
    }

    return (
        // <NativeBaseProvider theme={customTheme}>
        <NativeBaseProvider>
        <Box 
          bg={colorMode === "light" ? "coolGray.50" : "coolGray.900"}
        //   bg = "coolGray.900"
          minHeight="100vh"
          justifyContent="center"
          px={4}
        >
          <br/>
          <br/>
          <br/>
          <ScrollView 
        //   w={["200", "250"]} 
        //   h="20"
          showsVerticalScrollIndicator ={false}
          showsHorizontalScrollIndicator={false}
          >
             {messgData.map((messg, i) => (
                <Box py="1">
                <HStack key={i} space={1} justifyContent="center">
                    <Badge variant="subtle" w="10%" justifyContent="flex-start"><Text isTruncated maxW="120">{messg.username}</Text></Badge>
                    <Badge variant="subtle" w="75%" justifyContent="flex-start"><Text isTruncated maxW="1095">{messg.message}</Text></Badge>
                    <Badge variant="subtle" w="5%" justifyContent="center">{messg.timestamp}</Badge>
                </HStack>
                </Box>
             ))}
          </ScrollView>
          <HStack space={1} justifyContent="center">
            <Input value={currMessage} onChange={(e) => {setCurrMessage(e.target.value)}} size="md" variant="outline" placeholder="message" w="70%"/>
            <Button w="10%" onPress={() => {
                if (currMessage.trim() == ""){
                    toast.show({
                      description: "Enter message..!"
                    })
                    console.log("Toast show executed......................")
                } else {
                    handleSendMessage()
                }
            }}>send</Button>
          </HStack>
          <br/>
        </Box>
        </NativeBaseProvider>
    );
}

// function ToggleDarkMode() {
//   const { colorMode, toggleColorMode } = useColorMode();
//   return (
//     <HStack space={2}>
//       <Text>Dark</Text>
//       <Switch
//         isChecked={colorMode === "light"}
//         onToggle={toggleColorMode}
//         accessibilityLabel={
//           colorMode === "light" ? "switch to dark mode" : "switch to light mode"
//         }
//       />
//       <Text>Light</Text>
//     </HStack>
//   );
// }

export default Discussions






// not working code ................. important for us as a developerrrrrrrrrrrr

//   <HStack space={1} justifyContent="center">
//             <Box bg={"primary.800"} 
//             p="2" 
//             rounded="xl" 
//             _text={{
//                 fontSize: 'md',
//                 fontWeight: 'medium',
//                 color: 'white',
//                 textAlign: 'center'
//             }}>
//                 akhil
//             </Box>
//             <Box bg={"primary.800"} 
//             p="2" 
//             rounded="xl" 
//             _text={{
//                 fontSize: 'md',
//                 fontWeight: 'medium',
//                 color: 'white',
//                 textAlign: 'center'
//             }}>
//               This is a Box with Linear Gradienthsnttt
//               sntohu
//               tnshounesth
//             </Box>
//             <Box bg={"primary.800"} 
//             p="2" 
//             rounded="xl" 
//             _text={{
//                 fontSize: 'md',
//                 fontWeight: 'medium',
//                 color: 'white',
//                 textAlign: 'center'
//             }}>
//                 8:30 pm
//             </Box>
//             </HStack>
//             <HStack space={1} justifyContent="center">
//             <Box bg={"primary.800"} 
//             p="2" 
//             rounded="xl" 
//             _text={{
//                 fontSize: 'md',
//                 fontWeight: 'medium',
//                 color: 'white',
//                 textAlign: 'center'
//             }}>
//                 akhil
//             </Box>
//             <Box bg={"primary.800"} 
//             p="2" 
//             rounded="xl" 
//             _text={{
//                 fontSize: 'md',
//                 fontWeight: 'medium',
//                 color: 'white',
//                 textAlign: 'center'
//             }}>
//             <TextArea>
//               This is a Box with Linear Gradienthsnttt
//               sntohu
//               tnshounesth 
//               nthoeuntheonut goes with the tight happens with the look of the loove an rest in peace in some how jutsified
//             </TextArea>
//             </Box>
//             <Box bg={"primary.800"} 
//             p="2" 
//             rounded="xl" 
//             _text={{
//                 fontSize: 'md',
//                 fontWeight: 'medium',
//                 color: 'white',
//                 textAlign: 'center'
//             }}>
//                 8:30 pm
//             </Box>
//             </HStack>