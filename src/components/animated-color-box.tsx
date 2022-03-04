import React, { useEffect } from 'react'
import { Box, themeTools, useToken } from 'native-base'
import usePrevious from '../utils/use-previous'
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'
import { useTheme } from '@react-navigation/native'

const AnimatedBox = Animated.createAnimatedComponent(Box)

const AnimatedColorBox = ({ bg, ...props }: any) => {
  const theme = useTheme()
  const hexBg = useToken('colors', bg)
  const prevHexBg = usePrevious(hexBg)
  const progress = useSharedValue(0)

  useEffect(() => {
    progress.value = 0
  }, [hexBg])

  const animatedStyles = useAnimatedStyle(() => {
    progress.value = withTiming(1, { duration: 200 })
    return {
      backgroundColor: interpolateColor(
        progress.value,
        [0, 1],
        [prevHexBg || hexBg, hexBg]
      )
    }
  }, [hexBg])
  return <AnimatedBox {...props} style={animatedStyles} />
}

export default AnimatedColorBox
