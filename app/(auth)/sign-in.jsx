import { View, Text, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link, useRouter } from 'expo-router';  // Import useRouter from expo-router

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();  // Initialize the useRouter hook

  const submit = () => {
    // Assuming form validation is done, simulate sign-in success
    setIsSubmitting(true);

    // Simulate async sign-in operation (e.g., API call)
    setTimeout(() => {
      setIsSubmitting(false);

      // On successful sign-in, navigate to the home screen
      router.push('/home');  // This will navigate to the /home screen (adjust path if needed)
    }, 2000); // Simulate a 2-second loading time for sign-in
  };

  return (
    <SafeAreaView className="bg-blue-950 h-full">
      <ScrollView>
        <View className="w-full justify-center items-center h-full px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[300px] h-[150px]"
          />
          <Text className="text-2xl text-white mt-10 font-u_regular">
            Log in
          </Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />
          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="w-full mt-7"
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>

            <Link href="/sign-up" className="text-lg font-u_bold text-orange-600">
              Signup
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
