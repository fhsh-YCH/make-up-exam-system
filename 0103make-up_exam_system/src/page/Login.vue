<script setup>
import { useRouter } from "vue-router"; // vue-router
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_zIjYd0KUwCSCXQWyhPK8U5jhzfdScG4",
  authDomain: "make-up-exam-system.firebaseapp.com",
  projectId: "make-up-exam-system",
  storageBucket: "make-up-exam-system.appspot.com",
  messagingSenderId: "144881406965",
  appId: "1:144881406965:web:d93980153e06c8cfc886bc",
  measurementId: "G-3WLT46CCBS",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

const loginWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);

    console.log("Success!");

    redirectToNextPage();
  } catch (error) {
    console.error("Fail!", error);
  }

  function redirectToNextPage() {
    window.location.href = "/register";
  }
};
// const loginWithGoogle = async () => {
//   try {
//     const provider = new GoogleAuthProvider();
//     const afterSignIn = await signInWithPopup(auth, provider);

//     console.log(afterSignIn);
//     console.log("Success!");
//   } catch (error) {
//     console.error("Fail!", error);
//   }

//   function redirectToNextPage() {
//     router.push("/register");
//   }
// };
</script>

<template>
  <div class="h-screen bg-[#FBFAF8]">
    <div class="p-8 lg:p-10"></div>
    <!-- title -->
    <div>
      <span class="lg:text-5xl text-3xl font-bold text-[#3C414E] pl-8 lg:pl-24"
        >補考登記系統</span
      >
      <div class="p-1 lg:p-2"></div>
      <div class="pl-14 lg:pl-32">
        <div class="bg-[#3c414e] w-48 lg:w-72 h-1 rounded-full"></div>
      </div>
    </div>

    <div class="p-12"></div>
    <!-- login button -->
    <div class="flex justify-center items-center">
      <button class="" @click="loginWithGoogle">
        <div class="">
          <img
            src="../assets/search_rounded.png"
            class="w-48 h-48 lg:w-60 lg:h-60"
          />
          <div class="p-2"></div>
          <span class="text-[#3c414e] text-3xl lg:text-4xl font-bold"
            >Login</span
          >
        </div>
      </button>
    </div>
  </div>
</template>
<style scoped></style>
