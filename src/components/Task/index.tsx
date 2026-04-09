import { Text, View } from "react-native";

import { Color } from "@/style/Color";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { runOnJS } from "react-native-worklets";
import { Icon } from "../Icon";
import { styles } from "./style";
import { TaskProps } from "./task";

const SWIPE_THRESHOLD = 80;

export function TaskItem({ task, onToggle, onDelete, onEdit }: TaskProps) {
  const { description, isCompleted, id } = task;

  const translateX = useSharedValue(0);
  const checkScale = useSharedValue(isCompleted ? 1 : 0);
  const strikeWidth = useSharedValue(isCompleted ? 100 : 0);

  function handleToggle() {
    checkScale.value = withSpring(isCompleted ? 0 : 1, {
      damping: 10,
      stiffness: 200,
    });
    strikeWidth.value = withSpring(isCompleted ? 0 : 100, {
      duration: 300,
    });
    onToggle(id);
  }

  function handleDelete() {
    onDelete(id);
  }

  function handleEdit() {
    onEdit(id);
  }

  const panGesture = Gesture.Pan()
    .activeOffsetX([-10, 10])
    .onUpdate((e) => {
      translateX.value = e.translationX;
    })
    .onEnd((e) => {
      if (e.translationX < -SWIPE_THRESHOLD) {
        runOnJS(handleDelete)();
      } else if (e.translationX > SWIPE_THRESHOLD) {
        runOnJS(handleEdit)();
      }
      translateX.value = withSpring(0);
    });

  const cardStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const checkStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: checkScale.value }],
  }));

  const strikeStyle = useAnimatedStyle(() => ({
    width: `${strikeWidth.value}%`,
  }));

  const swipeLeftBg = useAnimatedStyle(() => ({
    opacity: translateX.value < -20 ? withSpring(1) : withSpring(0),
  }));

  const swipeRightBg = useAnimatedStyle(() => ({
    opacity: translateX.value > 20 ? withSpring(1) : withSpring(0),
  }));
  return (
    <View style={styles.wrapper}>
      <Animated.View style={[styles.swipeLeft, swipeLeftBg]}>
        <Icon name="delete-forever" size={24} color={Color.gray[100]} />
        <Text>Remover</Text>
      </Animated.View>
      <Animated.View style={[styles.swipeRight, swipeRightBg]}>
        <Icon name="edit" size={24} color={Color.gray[100]} />
        <Text>Editar</Text>
      </Animated.View>

      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.container, cardStyle]}>
          <Animated.View
            style={[styles.circle, isCompleted && styles.circleCompleted]}
          >
            <Animated.View
              style={[styles.circlePulse, isCompleted && styles.circle]}
              onTouchEnd={handleToggle}
            />
            <Animated.View style={[styles.checkIcon, checkStyle]}>
              <Icon name="check" size={14} color={Color.gray[100]} />
            </Animated.View>
          </Animated.View>
          <View style={styles.textWrapper}>
            <Text
              style={[
                styles.description,
                isCompleted && styles.descriptionCompleted,
              ]}
            >
              {description}
            </Text>
            <Animated.View style={[styles.strikethrough, strikeStyle]} />
          </View>
        </Animated.View>
      </GestureDetector>
    </View>
  );
}
