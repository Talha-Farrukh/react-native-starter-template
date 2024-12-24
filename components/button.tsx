// A button component
import { Button as RNButton, Text, TouchableOpacity } from "react-native";

export const Button = ({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      className="bg-blue-500 p-2 rounded-md"
      onPress={onPress}
    >
      <Text className="text-white">{title}</Text>
    </TouchableOpacity>
  );
};
