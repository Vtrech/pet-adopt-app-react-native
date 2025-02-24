import { View, Text, Image } from 'react-native'
import React from 'react'

export default function PetListItem({ pet }) {
    return (
        <View style={{
            padding: 10,
            marginRight: 15,
            backgroundColor: 'white',
            borderRadius: 10
        }}>
            <Image source={{ uri: pet?.imageUrl }}
                style={{
                    width: 150,
                    height: 135,
                    objectFit: 'cover',
                    borderRadius: 10,
                    overflow: 'hidden'
                }}
            />
            <Text style={{
                fontFamily: 'outfit-medium',
                fontSize: 18,
                marginTop: 5
            }}>{pet?.name}</Text>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 5
            }}>
                <Text style={{
                    color: 'gray',
                    fontFamily: 'outfit'
                }}>{pet?.breed}</Text>

                <Text style={{
                    fontFamily: 'outfit',
                    color: 'orange',
                    paddingHorizontal: 7,
                    borderRadius: 10,
                    fontSize: 11,
                    backgroundColor: '#fff9c9'
                }}>{pet?.age}yrs</Text>
            </View>
        </View>
    )
}