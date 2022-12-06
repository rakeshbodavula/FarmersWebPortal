import { Box, Image, Text, Link, HStack, Heading, Switch, useColorMode, VStack, Input, Divider, ScrollView, Badge, Pressable, Button, TextArea, useToast, } from "native-base";

import { NativeBaseProvider, extendTheme } from "native-base";

import { useState, useEffect } from "react";


function Discussions() {
    const [messgData, setMessgData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9999/fetchMessages')
            .then(res => res.json())
            .then(data => setMessgData(data))
            .catch(err => console.log("Error: ", err))
    }, [])

    const { colorMode } = useColorMode();
    const toast = useToast();

    const [currMessage, setCurrMessage] = useState("");

    const currUserName = localStorage.getItem('email') ? localStorage.getItem('email').slice(0,6) : "Guest";

    // let isReplying = false;
    const [isReplying, setIsReplying] = useState(false);
    // let replyingTo = 0;
    const [replyingTo, setReplyingTo] = useState("");

    const handleSendMessage = () => {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        let timeStamp = "";
        timeStamp += hours + ":" + minutes;
        const messages_length = messgData.length;
        const msg_id = Math.round(Math.random() * 100000000000000)
        if (isReplying === true) {
            setMessgData(prev => {
                return [...messgData,
                    {
                        msg_id: msg_id,
                        referedTo: replyingTo,
                        username: currUserName,
                        message: currMessage,
                        timestamp: timeStamp,
                    }]})

            fetch("http://localhost:9999/sendMessages", {
                method: "POST",
                headers: { 'Content-type': 'Application/json' },
                body: JSON.stringify({ msg_id, referedTo: replyingTo, username: currUserName, message: currMessage, timestamp: timeStamp })
            })
                .then((res) => res.json())
                .catch((err) => console.log("Error: ", err));

            setReplyingTo("");
            setIsReplying(false);
        } else {
            // setMessgData([
            //     ...messgData,
            //     {
            //         msg_id: msg_id,
            //         referedTo: 0,
            //         username: currUserName,
            //         message: currMessage,
            //         timestamp: timeStamp,
            //     },
            // ]);
            setMessgData(prev => {
                return [...prev,
                    {
                        msg_id: msg_id,
                        referedTo: "",
                        username: currUserName,
                        message: currMessage,
                        timestamp: timeStamp,
                    }]})

            fetch("http://localhost:9999/sendMessages", {
                method: "POST",
                headers: { 'Content-type': 'Application/json' },
                body: JSON.stringify({ msg_id, referedTo: "", username: currUserName, message: currMessage, timestamp: timeStamp })
            })
                .then((res) => res.json())
                .catch((err) => console.log("Error: ", err));
        }
        setCurrMessage("");
    };

    return (
        // <NativeBaseProvider theme={customTheme}>
        <NativeBaseProvider>
            {messgData.length === 0 && <h1>Loading....</h1>}
            <Box
                bg={colorMode === "light" ? "coolGray.5" : "coolGray.900"}
                //   bg = "coolGray.900"
                minHeight="100vh"
                justifyContent="center"
                px={4}
            >
                <br />
                <br />
                <br />
                <ScrollView
                    //   w={["200", "250"]}
                    //   h="20"
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    {messgData && messgData.map((messg) => {
                        if (messg.referedTo.length > 0) {
                            const refered_mssg = messgData.find(
                                (mssg) => mssg.msg_id === messg.referedTo
                            );
                            return (
                                <Box py="1" key={Math.random()}>
                                    {refered_mssg &&
                                        <HStack space={1} justifyContent="center" margin="7px">
                                            <Box w="5%">↓ ←</Box>
                                            <Badge variant="subtle" w="10%" justifyContent="flex-start" bg="red.100" margin="7px">
                                                <Text isTruncated maxW="120">
                                                    {refered_mssg.username}
                                                </Text>
                                            </Badge>
                                            <Badge variant="subtle" w="70%" justifyContent="flex-start" bg="blue.100" margin="7px">
                                                <Text isTruncated maxW="1095">
                                                    {refered_mssg.message}
                                                </Text>
                                            </Badge>
                                            <Badge variant="subtle" w="5%" justifyContent="center">
                                                {refered_mssg.timestamp}
                                            </Badge>
                                        </HStack>
                                    }
                                    <HStack space={1} justifyContent="center">
                                        <Badge variant="subtle" w="10%" justifyContent="flex-start">
                                            <Text isTruncated maxW="120">
                                                {messg.username}
                                            </Text>
                                        </Badge>
                                        <Badge variant="subtle" w="75%" justifyContent="flex-start">
                                            <Text isTruncated maxW="1095">
                                                {messg.message}
                                            </Text>
                                        </Badge>
                                        <Badge variant="subtle" w="5%" justifyContent="center">
                                            {messg.timestamp}
                                        </Badge>
                                        <Button
                                            onPress={() => {
                                                setIsReplying(true);
                                                setReplyingTo(messg.msg_id);
                                            }}
                                        >Reply</Button>
                                    </HStack>
                                </Box>
                            );
                        }

                        return (
                            <Box py="1" key={Math.random()}>
                                <HStack space={1} justifyContent="center">
                                    <Badge variant="subtle" w="10%" justifyContent="flex-start">
                                        <Text isTruncated maxW="120">
                                            {messg.username}
                                        </Text>
                                    </Badge>
                                    <Badge variant="subtle" w="75%" justifyContent="flex-start">
                                        <Text isTruncated maxW="1095">
                                            {messg.message}
                                        </Text>
                                    </Badge>
                                    <Badge variant="subtle" w="5%" justifyContent="center">
                                        {messg.timestamp}
                                    </Badge>
                                    <Button
                                        onPress={() => {
                                            setIsReplying(true);
                                            setReplyingTo(messg.msg_id);
                                        }}
                                    >
                                        Reply
                                    </Button>
                                </HStack>
                            </Box>
                        );
                    })}
                </ScrollView>
                {isReplying === true && (
                    <HStack space={1} justifyContent="center">
                        <Badge w="50%">Replying to {replyingTo} message</Badge>
                        <Button
                            onPress={() => {
                                setIsReplying(false);
                                setReplyingTo(0);
                            }}
                        >
                            cancel
                        </Button>
                    </HStack>
                )}
                <HStack space={1} justifyContent="center">
                    {/* {isReplying === true &&
                <Box><Badge w="10%">Replying to {replyingTo} message</Badge><br/></Box>
              } */}
                    <Input
                        value={currMessage}
                        onChange={(e) => {
                            setCurrMessage(e.target.value);
                        }}
                        size="md"
                        variant="outline"
                        placeholder="message"
                        w="70%"
                    />
                    <Button
                        w="10%"
                        onPress={() => {
                            if (currMessage.trim() == "") {
                                toast.show({
                                    description: "Enter message..!",
                                });
                                console.log("Toast show executed......................");
                            } else {
                                handleSendMessage();
                            }
                        }}
                    >
                        send
                    </Button>
                </HStack>
                <br />
            </Box>
            {/* } */}
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

export default Discussions;

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
