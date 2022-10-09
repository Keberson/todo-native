import React, {useState} from 'react';
import {
  FAB,
  SearchBar
} from "@rneui/themed";
import AddTask from "../src/components/AddTask";
import ToDoList from "../src/components/ToDoList";
import {View} from "react-native";

const HomeScreen: React.FC = () => {
  const [visibilityDialog, setVisibilityDialog] = useState(false);
  const toggleVisibilityDialog = () => setVisibilityDialog(!visibilityDialog);
  const [search, setSearch] = useState('');

  return (
    <>
      <View>
        <SearchBar
          platform="android"
          value={search}
          onChangeText={text => setSearch(text)}
          placeholder="Find task by name"
        />
        <ToDoList filter={search}/>
      </View>
      <AddTask visibility={visibilityDialog} toggle={toggleVisibilityDialog} />
      <FAB
        placement="right"
        icon={{ name: "add", color: "#fff" }}
        color="#2089dc"
        onPress={toggleVisibilityDialog}
      />
    </>
  );
};

export default HomeScreen;
