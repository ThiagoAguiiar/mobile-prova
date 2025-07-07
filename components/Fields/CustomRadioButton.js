import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

const CustomRadioButton = ({ label, selected, onPress }) => (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={[styles.radio, selected && styles.radioSelected]}>
            {selected && <View style={styles.radioDot} />}
        </View>

        <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
    },

    radio: {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#cb3f51',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },

    radioSelected: {
        borderColor: '#cb3f51',
    },

    radioDot: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: '#007AFF',
    },

    label: {
        fontSize: 16,
        color: '#333',
    },
})

export default CustomRadioButton
