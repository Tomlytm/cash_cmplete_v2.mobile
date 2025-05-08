import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

const screen = Dimensions.get('window');

export default function StartNavigation() {
    const router = useRouter();
    const routeCoordinates = [
        { latitude: 14.5905, longitude: 120.9780 }, // Start point
        { latitude: 14.589, longitude: 120.979 },
        { latitude: 14.588, longitude: 120.980 },
        { latitude: 14.587, longitude: 120.981 }, // End point
    ];

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 14.589,
                    longitude: 120.979,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
            >
                <Marker
                    coordinate={routeCoordinates[0]}
                    title="Access Bank Anthony Br."
                />
                <Polyline
                    coordinates={routeCoordinates}
                    strokeColor="#007AFF"
                    strokeWidth={4}
                />
            </MapView>
            <BlurView intensity={70} tint="light" style={styles.bottomSheet}>
                <View style={styles.dragHandle} />
                <View style={styles.buttons}>
                    <TouchableOpacity onPress={()=> router.push('/DeliveryPage')}>
                        <LinearGradient
                            style={styles.startButton}
                            colors={['#2ECF3E', '#098A16']}
                            start={{ x: 0.5, y: 0 }}
                            end={{ x: 0.5, y: 1.3684 }}
                        >
                            <Text style={styles.buttonText}>Start</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <LinearGradient
                            colors={['#0A88D3', '#055DAE']}
                            style={styles.detailsButton}
                            start={{ x: 0.5, y: 0 }}
                            end={{ x: 0.5, y: 1.3684 }} // Simulates 136.84% vertical length
                        >
                            <Text style={styles.buttonText}>Details</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style={styles.infoSection}>
                    <View style={styles.iconBox}>
                        <Image source={require('../assets/images/bank-building.png')} style={{ marginRight: 10 }} />
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.title}>Access Bank</Text>
                        <Text style={styles.subTitle}>Anthony Br.</Text>
                        <Text style={styles.label}><Text style={styles.code}>BR. Code: 223-9013</Text></Text>
                        
                    </View>
                    <View style={styles.packageBox}>
                        <Text style={styles.packageId}>Package ID:</Text>
                        <Text style={styles.packageCode}>5541-498-9001</Text>
                        <Text style={styles.timeEstimate}>35mins (27 km)</Text>
                    </View>
                </View>
                
                <View style={{marginTop: 20}}>
                        <Text style={styles.packageId}>Address: </Text>
                        <Text style={styles.packageCode}>30 Anthony RD. Off New Park.</Text>
                        </View>
            </BlurView>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
    },
    bottomSheet: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        // alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        paddingVertical: 20,
        paddingHorizontal: 25,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: -3 },
        shadowRadius: 5,
        elevation: 10,
    },
    dragHandle: {
        alignSelf: 'center',
        width: 40,
        height: 5,
        backgroundColor: '#000',
        borderRadius: 2,
        marginBottom: 10,
    },
    infoSection: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    iconBox: {
        paddingRight: 10,
    },
    details: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        marginBottom: 5
    },
    subTitle: {
        fontSize: 14,
        marginBottom: 5,
        color: '#555',
    },
    label: {
        fontSize: 12,
        color: '#777',
        marginTop: 2,
    },
    code: {
        color: '#055DAE',
        marginBottom: 5
    },
    packageBox: {
        alignItems: 'flex-end',
    },
    packageId: {
        fontSize: 12,
        color: '#055DAE',
        fontWeight: 300,
        marginBlock: 5
    },
    packageCode: {
        fontSize: 16,
        
    },
    timeEstimate: {
        marginTop: 5,
        fontSize: 12,
        color: 'green',
    },
    buttons: {
        flexDirection: 'row',
        gap: 20,
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 30
    },
    startButton: {
        backgroundColor: '#34C759',
        paddingVertical: 15,
        paddingHorizontal: 35,
        borderRadius: 30,
    },
    detailsButton: {
        paddingVertical: 15,
        paddingHorizontal: 35,
        borderRadius: 30,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 500,
        fontSize: 16
    },
});
