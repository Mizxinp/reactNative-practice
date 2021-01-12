/**
 * 暗号：明确状态归属，合理切分组件
 * 实现单选和多选，点击本身可以取消选择
 */

import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, Switch, Dimensions } from 'react-native'

const { width: deviceWidth } = Dimensions.get('window')
const width = (deviceWidth - 40) / 3
const height = width

const Card = ({ index, onPress, checkedIndex, isSingle}) => {
    const [isChecked, setIsChecked] = useState(false)

    const handlePress = () => {
        setIsChecked(!isChecked)
        onPress(index)
    }

    useEffect(() => {
        if (isSingle && checkedIndex !== index) {
            setIsChecked(false)
        }
        
    }, [checkedIndex])

    const style = isSingle
        ? checkedIndex === index
            ? isChecked ? { backgroundColor: 'green'} : {}
            : {}
        : isChecked ? { backgroundColor: 'green'} : {}

    return <Text style={[styles.lattice, style]} onPress={handlePress} />
}

const latticeArr = new Array(9).fill(null)

function LatticePage() {
    const [checkedIndex, setCheckedIndex] = useState(-1)
    const [isSingle, setIsSingle] = useState(false)

    const handlePress = (index) => setCheckedIndex(index)
    const handleSwitchChange = (value) => {
        setIsSingle(value)
        setCheckedIndex(-1)
    }

    return (
        <View style={styles.container}>
            <View style={styles.switch}>
                <Text>单选：</Text>
                <Switch onValueChange={handleSwitchChange} value={isSingle} />
            </View>
            <View style={styles.content}>
                {latticeArr.map((item, index) => (
                    <Card
                        key={`${index}_${isSingle}`}
                        index={index}
                        checkedIndex={checkedIndex}
                        isSingle={isSingle}
                        onPress={handlePress}
                    />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 200,
        padding: 20,
    },
    lattice: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#666',
        width,
        height,
    },
    content: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    switch: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }
})

export default LatticePage
