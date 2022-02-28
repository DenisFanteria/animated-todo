import React from 'react'
import { Pressable } from 'react-native'
import {
  Box,
  HStack,
  themeTools,
  useColorModeValue,
  useTheme,
  Icon
} from 'native-base'
import AnimatedCheckbox from 'react-native-checkbox-reanimated'
import AnimatedTaskLabel from './animated-task-label'

interface Props {
  isDone: boolean
  onTogggleCheckbox?: () => void
}

const TaskItem = (props: Props) => {
  const { isDone, onTogggleCheckbox } = props
  const theme = useTheme()
  const highlightColor = themeTools.getColor(
    theme,
    useColorModeValue('blue.500', 'blue.400')
  )
  const boxStroke = themeTools.getColor(
    theme,
    useColorModeValue('muted.300', 'muted.500')
  )
  const checkmarkColor = themeTools.getColor(
    theme,
    useColorModeValue('white', 'white')
  )
  const activeTextColor = themeTools.getColor(
    theme,
    useColorModeValue('darkText', 'lightText')
  )
  const doneTextColor = themeTools.getColor(
    theme,
    useColorModeValue('muted.400', 'muted.600')
  )
  return (
    <HStack
      alignItems="center"
      w="full"
      px={4}
      py={2}
      bg={useColorModeValue('warmGray.50', 'primary.900')}
    >
      <Box width={30} height={30} mr={2}>
        <Pressable onPress={onTogggleCheckbox}>
          <AnimatedCheckbox
            highlightColor={highlightColor}
            checkmarkColor={checkmarkColor}
            boxOutlineColor={boxStroke}
            checked={isDone}
          />
        </Pressable>
      </Box>
      <AnimatedTaskLabel
        textColor={activeTextColor}
        inactiveTextColor={doneTextColor}
        strikethrough={isDone}
      >
        Task Item
      </AnimatedTaskLabel>
    </HStack>
  )
}

export default TaskItem
