<script setup>
import Subject from "../components/Subject.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getAuth, signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
const router = useRouter();
const userDisplayName = ref("");

const btnLogOut = async () => {
  try {
    await signOut(auth);
    alert("成功登出！");
    router.push("/");
  } catch (error) {
    console.error("登出時發生了一點錯誤TT", error);
  }
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    userDisplayName.value = user.displayName;
  }
});
</script>
<template>
  <div class="hidden md:block lg:block">
    <div class="absolute z-10 right-28 top-20">
      <button
        @click="btnLogOut"
        class="bg-white text-black border border-black px-4 py-2 rounded-full font-bold text-xl"
      >
        登出
      </button>
    </div>
  </div>
  <div class="p-2 lg:p-5"></div>
  <div class="flex justify-center items-center w-screen h-full bg-[#FBFAF8]">
    <div
      class="border border-[#3C414E] py-8 px-3 lg:p-20 w-11/12 h-11/12 rounded-md"
    >
      <div class="flex flex-col justify-center items-center">
        <div class="flex justify-center">
          <div class="p-2 lg:p-3"></div>
          <span class="text-[#3C414E] font-bold text-2xl lg:text-6xl">{{
            userDisplayName
          }}</span>
          <div class="p-1"></div>
          <span class="text-[#3C414E] font-bold lg:text-3xl pt-2 lg:pt-5"
            >補考考科登記</span
          >
        </div>

        <div class="p-3 lg:p-12"></div>
        <div
          class="grid justify-center items-center grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-3"
        >
          <Subject />
        </div>
        <div class="p-1"></div>
      </div>

      <div class="md:hidden lg:hidden">
        <div class="p-1"></div>
        <div class="flex justify-center items-center">
          <button
            @click="btnLogOut"
            class="bg-white text-black border border-black px-4 py-2 rounded-full font-bold text-xl"
          >
            登出
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
