import { Color } from "@/style/Color";
import { Pressable, Text, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { Icon } from "../Icon";
import { styles } from "./style";
import { TaskProps } from "./task";

const SWIPE_THRESHOLD = 80;
const SWIPE_LIMIT = 100;

export function TaskItem({ task, onToggle, onDelete, onEdit }: TaskProps) {
  const { description, isCompleted, id } = task;

  const translateX = useSharedValue(0);
  const checkScale = useSharedValue(isCompleted ? 1 : 0);
  const strikeOpacity = useSharedValue(isCompleted ? 1 : 0);

  function handleToggle() {
    checkScale.value = withSpring(isCompleted ? 0 : 1, {
      damping: 20,
      stiffness: 100,
    });
    strikeOpacity.value = withTiming(isCompleted ? 0 : 1, { duration: 250 });
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
      translateX.value = Math.max(
        -SWIPE_LIMIT,
        Math.min(SWIPE_LIMIT, e.translationX),
      );
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
    transform: [{ scale: checkScale.value }],
  }));

  const strikeStyle = useAnimatedStyle(() => ({
    opacity: strikeOpacity.value,
  }));

  const swipeLeftBg = useAnimatedStyle(() => ({
    opacity: translateX.value < -10 ? withSpring(1) : withSpring(0),
  }));

  const swipeRightBg = useAnimatedStyle(() => ({
    opacity: translateX.value > 10 ? withSpring(1) : withSpring(0),
  }));

  return (
    <View style={styles.wrapper}>
      <Animated.View style={[styles.swipeLeft, swipeLeftBg]}>
        <Icon name="delete-forever" size={24} color={Color.gray[100]} />
        <Text style={styles.swipeText}>Remover</Text>
      </Animated.View>
      <Animated.View style={[styles.swipeRight, swipeRightBg]}>
        <Icon name="edit" size={24} color={Color.gray[100]} />
        <Text style={styles.swipeText}>Editar</Text>
      </Animated.View>

      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.container, cardStyle]}>
          <Pressable
            onPress={handleToggle}
            style={[styles.circle, isCompleted && styles.circleCompleted]}
          >
            <Animated.View style={[styles.checkIcon, checkStyle]}>
              <Icon name="check" size={14} color={Color.gray[100]} />
            </Animated.View>
          </Pressable>

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
