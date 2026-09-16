import React, { useState } from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    TouchableOpacity, 
} from 'react-native';

import { Feather } from '@expo/vector-icons';

import { MotiView, AnimatePresence, MotiText } from 'moti';

import type { Account } from '../../types';

import colors from '../../theme/colors';

export default function Movements( { item }: { item: Account } ) {
    const [showValue, setShowValue] = useState(false);

    const handleItemPressed = () => {
        setShowValue(!showValue);
    };

    const handleItemLongPressed = () => {
        alert(`Item long pressed: ${item.label}`);
    };

    return (
        <View style={styles.containers}>
            <TouchableOpacity
                style={styles.container}
                onPress={ () => handleItemPressed() }
                onLongPress={ () => handleItemLongPressed() }
            >
                <Text style={styles.date}>{item.date}</Text>

                <View style={styles.content}>
                    <Text style={styles.label}>{item.label}</Text>

                    {showValue ? (
                        <AnimatePresence exitBeforeEnter>
                            <MotiView
                                style={ item.type === 1 ? styles.value : styles.expense }
                                from={{ translateX: 100, }}
                                animate={{ translateX: 0, }}
                                transition={{ 
                                    type: 'spring', 
                                    duration: 800,
                                }}
                            >
                                {item.type === 1 ? `R$ ${new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(item.value)}` : `- R$ ${new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(item.value)}`}
                            </MotiView>
                        </AnimatePresence>
                    ) : (
                        <AnimatePresence exitBeforeEnter>
                            <MotiView
                            style={styles.skeleton}
                            from={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ 
                                type: 'timing' 
                            }}
                            >

                            </MotiView>
                        </AnimatePresence>
                    )}
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.actionButton}
                onPress={() => alert(`Editar item: ${item.label}`)}
            >
                <Feather name="edit" size={20} color={colors.blue} />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.actionButton}
                onPress={() => alert(`Apagar item: ${item.label}`)}
            >
                <Feather name="trash-2" size={20} color={colors.red} />
            </TouchableOpacity>
        </View>
  );
}

const styles = StyleSheet.create({
    containers: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    container: {
        flex: 1,
        marginBottom: 24,
        marginRight: 8,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.gray_200,
    },

    actionButton: {
        margin: 6,
        padding: 20,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: colors.opacity_white,
    },

    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8,
    },

    date: {
        color: colors.gray_400,
        fontWeight: 'bold',
    },

    label: {
        color: colors.gray_600,
        fontSize: 16,
        fontStyle: 'italic',
    },

    value: {
        color: colors.green,
        fontSize: 16,
    },

    expense: {
        color: colors.red,
        fontSize: 16,
    },

    skeleton: {
        minHeight: 16,
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: colors.gray_200,
        borderRadius: 8,
    },

});