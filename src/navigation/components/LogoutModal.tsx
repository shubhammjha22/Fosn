import {Modal, Text, TouchableOpacity, View} from 'react-native';

const LogoutModal = ({
  visible,
  onCancel,
  onConfirm,
}: {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={visible}
    onRequestClose={onCancel}>
    <View className="flex-1 justify-center items-center bg-black/50">
      <View className="bg-white p-6 rounded-lg w-[80%]">
        <Text className="text-lg font-bold mb-4 text-center">
          Do you want to logout?
        </Text>
        <View className="flex-row justify-between">
          <TouchableOpacity
            onPress={onCancel}
            className="bg-gray-200 px-6 py-3 rounded-lg">
            <Text className="text-black">Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onConfirm}
            className="bg-red-500 px-6 py-3 rounded-lg">
            <Text className="text-white">Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>
);

export default LogoutModal;
