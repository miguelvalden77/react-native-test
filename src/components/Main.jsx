import React from "react";
import Constants from "expo-constants"
import { View, Text } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Navigate, Route, Routes } from "react-router-native";
import { StatusBar } from "expo-status-bar";
import Login from "./Login";


const Main = () => {
    return (
        <>
            <StatusBar style="light" />
            <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
                <AppBar />
                <Routes>
                    <Route path="/" element={<RepositoryList />} />
                    <Route path="/signin" element={<Login />} />
                    <Route path="*" element={<Navigate to={"/"} />} />
                </Routes>
            </View>
        </>
    )
}

export default Main