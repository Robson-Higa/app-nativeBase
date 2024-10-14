import React from "react"
import { useState } from "react";
import { Box, HStack, Pressable, Icon, FlatList, IconButton, Modal, Text, Slide, Center } from "native-base"
import { Feather } from '@expo/vector-icons'

import Contents from "../components/Contents";
import Feed from "../components/Feed"

  const data = [{
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    fullName: "Breaking Bad",
    genres: ["Drama ", "Crime ", "Thriller "],
    medium: "https://static.tvmaze.com/uploads/images/medium_portrait/501/1253519.jpg",
    summary: "Breaking Bad follows protagonist Walter White, a chemistry teacher who lives in New Mexico with his wife and teenage son who has cerebral palsy. White is diagnosed with Stage III cancer and given a prognosis of two years left to live. With a new sense of fearlessness based on his medical prognosis, and a desire to secure his family's financial security, White chooses to enter a dangerous world of drugs and crime and ascends to power in this world. The series explores how a fatal diagnosis such as White's releases a typical man from the daily concerns and constraints of normal society and follows his transformation from mild family man to a kingpin of the drug trade.</p>",
    avatarUrl: "https://static.tvmaze.com/uploads/images/original_untouched/501/1253519.jpg"
  }, {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    fullName: "Bad Monkey",
    genres: ["Drama ", "Comedy ", "Crime "],
    summary: "Bad Monkey tells the story of Andrew Yancy, a one-time detective demoted to restaurant inspector in Southern Florida. A severed arm found by a tourist out fishing pulls Yancy into the world of greed and corruption that decimates the land and environment in both Florida and the Bahamas. And yes, there's a monkey.</p>",
    medium: "https://static.tvmaze.com/uploads/images/medium_portrait/528/1321882.jpg",
    avatarUrl: "https://static.tvmaze.com/uploads/images/original_untouched/528/1321882.jpg",
  }, {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    fullName: "Bad Teacher",
    genres: ["Comedy"],
    summary: "Based on the hit feature film, Bad Teacher follows Meredith Davis as an always inappropriate, fearless and unapologetic former trophy wife who masquerades as a teacher in order to find a new man after her wealthy husband leaves her penniless.",
    medium: "https://static.tvmaze.com/uploads/images/medium_portrait/4/11941.jpg",
    avatarUrl: "https://static.tvmaze.com/uploads/images/original_untouched/4/11941.jpg"
  }, {
    id: "68694a0f-3da1-431f-bd56-142371e29d72",
    fullName: "Bad Blood",
    genres: ["Drama ", "Crime"],
    summary: "Bad Blood is a story of family, loyalty, deceit, power, greed, and ultimately revenge. Montreal Mafia boss Vito Rizzuto is a criminal anomaly. Determined to bring peace to the disparate wings of the Montreal crime world of the day, Rizzuto successfully unifies them, serving as a de facto CEO while ensuring a lucrative payday for all. When Rizzuto is suddenly arrested and extradited to Colorado's Supermax Prison for the 1981 murders of three Bonanno crime family members, the powerful empire he built begins to crumble. Rizzuto watches helplessly until his release from prison in October 2012, when a Shakespearean tale of revenge begins to unfold.",
    medium: "https://static.tvmaze.com/uploads/images/medium_portrait/173/432741.jpg",
    avatarUrl: "https://static.tvmaze.com/uploads/images/original_untouched/173/432741.jpg",
  }, {
    id: "28694a0f-3da1-471f-bd96-142456e29d72",
    fullName:  "Bad Judge",
    genres: ["Comedy ", "Family"],
    summary: "No excuses, no apologies, no compromises. Wild child Rebecca Wright knows how to have a good time, but she also happens to be one of L.A.'s toughest and most respected criminal court judges. She has a reputation for unorthodox behavior in the courtroom, including creative rulings and saying exactly what's on her mind. Her private life, on the other hand, is anything but innocent. She parties too much and rocks out on the drums in a band with her best friend, Jenny. While there's no shortage of male admirers who would love to spend time with her, she's not ready to settle down... except when an 8-year-old boy - whose parents were put in jail by Rebecca - needs her help. He may, in fact, be the one thing that starts to tame this Bad Judge.",
    medium: "https://static.tvmaze.com/uploads/images/medium_portrait/0/678.jpg",
    avatarUrl: "https://static.tvmaze.com/uploads/images/original_untouched/0/678.jpg"
  }];
 

export default function Home () {
    const [modalVisible, setModalVisible] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleModal = (items) => {
    setSelectedItems(items);
    setModalVisible(!modalVisible);
  };

  const renderItems = (items) => {
    return items.map((item, index) => (
      <Text key={index}>{item}</Text>
    ));
}
    return (
        <Box flex={1} backgroundColor="#75bbb8" flexDirection="column">            
          <HStack padding={5} w="100%" justifyContent="space-between" safeArea>
          <Box>
            <IconButton 
              icon={<Icon as={Feather} name="menu" size={8} />} 
              onPress={() => toggleModal(['Pesquisar Série', 'Titulo', 'Gênero', 'Classificação'])} 
            />
          </Box>

          <Box>
            <IconButton 
              icon={<Icon as={Feather} name="bell" size={8} />} 
              onPress={() => toggleModal(['Lançamentos', 'Novos Episódios', 'Cancelamentos'])} 
            />
            
          </Box>
            </HStack>
             <Box paddingX={4}>
                <FlatList 
                  horizontal={true}
                  data={data}
                  renderItem={ ({ item }) => <Contents data={item}/>}
                  showsHorizontalScrollIndicator={false}
                />
              </Box>

              <Box paddingX={4}>
                <FlatList 
                  data={data}
                  renderItem={ ({ item }) => <Feed data={item}/>}
                  showsVerticalScrollIndicator={false}
                />
            </Box>
            <Modal
              isOpen={modalVisible}
              onClose={() => setModalVisible(false)}
            >
            <Slide in={modalVisible} placement="top" duration={300}>
              <Center>
                <Box padding={4} backgroundColor="white" borderRadius="md" width="80%" safeArea>
                  {renderItems(selectedItems)}
                  <Pressable onPress={() => setModalVisible(false)}>
                    <Text color="info.500" marginTop={2}>Fechar</Text>
                  </Pressable>
                </Box>
              </Center>             
            </Slide>
          </Modal>
    </Box>
    )
}