import React from 'react'
import { View,Text } from 'react-native'

type WelcomeProps={
    name: string,
    age: number,
    gender: boolean
}

export const Welcome = (props: WelcomeProps) => {
  return (
    <View>
            <Text> Hello {props.name}</Text>
            <Text> You are  {props.age}</Text>
            <Text> You are a  {props.gender ?"man" : "female"}</Text>
    </View>
  )
}
