import { Entypo, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const data = [
    { denomination: '₦100', qty: '10,000', amount: '₦1,000,000' },
    { denomination: '₦200', qty: '10,000', amount: '₦20,000,000' },
    { denomination: '₦500', qty: '250,000', amount: '₦1,250,000,000' },
    { denomination: '₦1000', qty: '100,000', amount: '₦10,000,000,000' },
];

const total = '₦228,770,000,000';


export default function DeliveryScreen() {
    const router = useRouter()
    const renderItem = ({ item }: any) => (
        <View style={styles.row}>
            <Text style={styles.cell}>{item.denomination}</Text>
            <Text style={styles.cell}>{item.qty}</Text>
            <Text style={styles.cell}>{item.amount}</Text>
        </View>
    );
    return (
        <SafeAreaView style={styles.container}>
            {/* Status Icon and Message */}
            <View style={styles.statusSection}>
                <Ionicons name="alert-circle-outline" size={250} color="#f4a11f" />
                <Text style={styles.statusText}>You need to deliver cash to the allocated cash officer</Text>
            </View>

            {/* Bank Info */}
            <View style={styles.card}>
                <View style={styles.row}>
                    <Image source={require('../assets/images/bank-building.png')} style={{ marginRight: 10 }} />
                    <View style={{ flex: 1 }}>
                        <Text style={[styles.bankName, { marginBottom: 4 }]}>Access Bank</Text>
                        <Text style={[styles.branch, { marginBottom: 4 }]}>Anthony Br.</Text>
                        <Text style={styles.branchCode}>
                            BR. Code: <Text style={{ color: '#007AFF' }}>223-9013</Text>
                        </Text>
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Text style={[styles.pkgLabel, { marginBottom: 4 }]}>Package ID:</Text>
                        <Text style={[styles.pkgValue, { marginBottom: 4 }]}>5541-498-9001</Text>
                        <Text style={styles.arrived}>Arrived (27 km)</Text>
                    </View>
                </View>
                {/* Address */}
                <View style={styles.row}>
                    <View style={styles.iconContainer}>
                        <Ionicons name="alert-circle-outline" size={16} color="#aaa" />
                        <View style={styles.line} />
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.label}>Address:</Text>
                        <Text style={styles.value}>30 Anthony RD. Off New Park.</Text>
                    </View>
                </View>

                {/* Cash Receiver */}
                <View style={styles.row}>
                    <View style={styles.iconContainer}>
                        <Ionicons name="alert-circle-outline" size={16} color="#aaa" />
                        <View style={styles.line} />
                    </View>
                    <View style={styles.content}>
                        <Text style={[styles.label, { color: '#007AFF' }]}>Cash Receiver</Text>
                        <View style={styles.receiverRow}>
                            <View style={styles.receiverIcon}>
                                <Text style={styles.receiverInitial}>B</Text>
                            </View>
                            <View>
                                <Text style={styles.receiverName}>Babalola Oluwatoyin</Text>
                                <Text style={styles.receiverEmail}>babalola.receiver@gmail.com</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Contact */}
                <View style={styles.row}>
                    <View style={styles.iconContainer}>
                        <Ionicons name="alert-circle-outline" size={16} color="#aaa" />
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.label}>Contact</Text>
                        <Text style={styles.value}>0901 121 3356</Text>
                    </View>
                </View>
                <View style={styles.headerRow}>
                    <Text style={[styles.cell, styles.header]}>Denomination</Text>
                    <Text style={[styles.cell, styles.header]}>QTY</Text>
                    <Text style={[styles.cell, styles.header]}>Amount</Text>
                </View>

                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    scrollEnabled={false}
                />

                <View style={styles.totalRow}>
                    <Text style={styles.totalLabel}>Total Amount</Text>
                    <Text style={styles.totalValue}>{total}</Text>
                </View>


                {/* Deliver Cash Button */}
                <TouchableOpacity style={[{ marginHorizontal: 10 }, styles.signInButton]} onPress={()=>router.push('/Signature')}>
                    <Text style={styles.signInButtonText}>HANDOVER CASH</Text>
                    <Entypo name="arrow-right" size={15} color="#fff" style={{ marginLeft: 10, padding: 5, borderRadius: '50%', backgroundColor: '#0F3677' }} />
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
        padding: 20,
    },
    statusSection: {
        alignItems: 'center',
        marginVertical: 30,
    },
    statusText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#666',
        marginTop: 10,
        paddingHorizontal: 10,
    },
    card: {
        backgroundColor: '#f9f9f9',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderRadius: 16,
        paddingHorizontal: 20,
        paddingVertical: 30,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 4,
    },
    iconLeft: {
        marginRight: 10,
        marginTop: 4,
    },
    bankName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    branch: {
        fontSize: 14,
        color: '#555',
    },
    branchCode: {
        fontSize: 12,
        color: '#888',
    },
    pkgLabel: {
        fontSize: 12,
        color: '#888',
    },
    pkgValue: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    arrived: {
        fontSize: 12,
        color: 'green',
    },
    section: {
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        marginTop: 15,
        paddingTop: 10,
    },
    sectionTitle: {
        fontSize: 13,
        color: '#888',
        marginBottom: 5,
    },
    contactNumber: {
        fontSize: 14,
        fontWeight: '500',
    },
    button: {
        backgroundColor: '#007AFF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 14,
        borderRadius: 25,
        marginTop: 30,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 15,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 25,
    },
    iconContainer: {
        alignItems: 'center',
        width: 30,
        position: 'relative',
    },
    line: {
        position: 'absolute',
        top: 18,
        left: 14,
        width: 1,
        height: 60,
        backgroundColor: '#ccc',
    },
    content: {
        flex: 1,
    },
    label: {
        fontSize: 13,
        color: '#888',
        marginBottom: 2,
    },
    value: {
        fontSize: 14,
        color: '#222',
    },
    receiverRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    receiverIcon: {
        backgroundColor: '#e6e8ff',
        width: 36,
        height: 36,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    receiverInitial: {
        color: '#5b61f4',
        fontWeight: 'bold',
        fontSize: 16,
    },
    receiverName: {
        fontSize: 14,
        fontWeight: '500',
    },
    receiverEmail: {
        fontSize: 12,
        color: '#666',
    },
    signInButton: {
        flexDirection: 'row',
        backgroundColor: '#055DAE',
        borderRadius: 15,
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    signInButtonText: {
        width: '40%',
        color: '#fff',
        // fontWeight: 'bold',
        fontSize: 16,
    },
    headerRow: {
        flexDirection: 'row',
        paddingBottom: 8,
        marginBottom: 8,
    },
    row2: {
        flexDirection: 'row',
        marginBottom: 12,
    },
    cell: {
        flex: 1,
        fontSize: 14,
        color: '#353535'
    },
    header: {
        fontWeight: '500',
    },
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 24,
        borderTopWidth: 1,

        borderColor: '#353535',
        paddingTop: 12,
    },
    totalLabel: {
        fontWeight: '500',
        fontSize: 16,
        paddingBottom: 20
    },
    totalValue: {
        fontWeight: '500',
        fontSize: 16,
    },
});
