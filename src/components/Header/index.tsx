import React, { useState } from 'react';

import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    Modal
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import { MotiView, MotiText } from 'moti';

import colors from '../../theme/colors';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 22;

export default function Header({ name }: { name: string }) {
    const [menuVisible, setMenuVisible] = useState(false);

    function toggleMenu() {
        setMenuVisible(previous => !previous);
    }

    function handleMenuItemPress(action: string) {
        setMenuVisible(false);
        console.log(`Menu item pressed: ${action}`);
    }

    return (
        <View style={styles.container}>
            <MotiView
                style={styles.content}
                from={{ 
                    translateY: -150, 
                    opacity: 0, 
                }}
                animate={{ 
                    translateY: 0, 
                    opacity: 1 
                }}
                transition={{
                    type: 'timing',
                    duration: 1500,
                    delay: 300,
                }}
            >
                <MotiText
                    style={styles.username}
                    from={{
                        translateX: -300,
                    }}
                    animate={{
                        translateX: 0,
                    }}
                    transition={{
                        type: 'timing',
                        duration: 1500,
                        delay: 300,
                    }}
                >
                    <Text style={styles.text}>{name}</Text>
                </MotiText>

                <View style={styles.menuWrapper}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.buttonUser} 
                        onPress={toggleMenu}
                    >
                        <Feather name="user" size={28} color={colors.dark_purple} />
                    </TouchableOpacity>
                </View>
                
                <Modal
                    visible={menuVisible}
                    transparent={true}
                    animationType="fade"
                    onRequestClose={toggleMenu}
                >
                    <TouchableOpacity
                        style={styles.modalBackground}
                        activeOpacity={1}
                        onPress={toggleMenu}
                    >
                        <View style={styles.modalContent}>
                            <View style={styles.dropdownMenuModal}>
                                <TouchableOpacity
                                    style={styles.dropdownItem} 
                                    onPress={() => handleMenuItemPress('Perfil')}
                                >
                                    <Text style={styles.dropdownItemText}>Perfil</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.dropdownItem} 
                                    onPress={() => handleMenuItemPress('Tema Claro')}
                                >
                                    <Text style={styles.dropdownItemText}>Tema Claro</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.dropdownItem} 
                                    onPress={() => handleMenuItemPress('Tema Escuro')}
                                >
                                    <Text style={styles.dropdownItemText}>Tema Escuro</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.dropdownItem} 
                                    onPress={() => handleMenuItemPress('Sair')}
                                >
                                    <Text style={styles.dropdownItemText}>Sair</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Modal>
            </MotiView>
        </View>
    );  
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.dark_purple,
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
    },

    content: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  menuWrapper: {
    position: 'relative',
    zIndex: 9999,
    overflow: 'visible',
  },
  
  username: {
    fontSize: 18,
    color: colors.white,
    fontWeight: 'bold',
  },
  
  buttonUser: {
    width: 44,
    height: 44,
    backgroundColor: colors.opacity_white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 44 / 2,
  },
  
  dropdownMenu: {
    position: 'absolute',
    top: 54,
    right: 0,
    width: 140,
    backgroundColor: colors.white,
    borderRadius: 12,
    paddingVertical: 4,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 6,
    zIndex: 9999,
  },

  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.16)',
  },

  modalContent: {
    flex: 1,
    alignItems: 'flex-end',
    paddingTop: statusBarHeight + 16,
    paddingRight: 16,
  },

  dropdownMenuModal: {
    width: 140,
    backgroundColor: colors.white,
    borderRadius: 12,
    paddingVertical: 4,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 6,
  },

  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 14,
  },

  dropdownItemText: {
    color: colors.dark_purple,
    fontSize: 14,
  },

  text: {
    fontSize: 14,
    color: colors.white,
  },
});
